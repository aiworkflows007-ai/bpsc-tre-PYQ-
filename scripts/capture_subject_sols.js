import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9222
const SCREENSHOT_DIR = '/home/ashok/.gemini/antigravity-cli/brain/d95512a2-a1d3-421c-82e1-c485b5798ce2/screenshots'

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function run() {
  const chrome = spawn('google-chrome', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--window-size=1280,1100',
    'about:blank'
  ], { stdio: 'ignore' })

  let wsUrl = null
  for (let i = 0; i < 20; i++) {
    await sleep(300)
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      const data = await res.json()
      wsUrl = data.webSocketDebuggerUrl
      if (wsUrl) break
    } catch (e) {}
  }

  const ws = new WebSocket(wsUrl)
  await new Promise(r => ws.onopen = r)

  let id = 1
  const pending = new Map()
  ws.onmessage = (msg) => {
    const res = JSON.parse(msg.data)
    if (res.id && pending.has(res.id)) {
      pending.get(res.id)(res)
      pending.delete(res.id)
    }
  }

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const reqId = id++
      pending.set(reqId, resolve)
      ws.send(JSON.stringify({ id: reqId, method, params }))
    })
  }

  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5173/#/app?category=subject' })
  const targetId = newTarget.result.targetId
  const attachRes = await send('Target.attachToTarget', { targetId, flatten: true })
  const sessionId = attachRes.result.sessionId

  function sendSession(method, params = {}) {
    return new Promise((resolve) => {
      const reqId = id++
      pending.set(reqId, resolve)
      ws.send(JSON.stringify({ id: reqId, sessionId, method, params }))
    })
  }

  await sendSession('Page.enable')
  await sendSession('Runtime.enable')
  await sleep(1500)

  async function takeScreenshot(filename) {
    const shot = await sendSession('Page.captureScreenshot', { format: 'png' })
    const buf = Buffer.from(shot.result.data, 'base64')
    const fullPath = `${SCREENSHOT_DIR}/${filename}`
    fs.writeFileSync(fullPath, buf)
    console.log(`Saved screenshot: ${fullPath} (${buf.length} bytes)`)
  }

  async function evalJs(expr) {
    const res = await sendSession('Runtime.evaluate', { expression: expr, returnByValue: true })
    return res.result?.result?.value
  }

  // 1. Sanskrit Q1 Solution Open
  await evalJs(`
    localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-sanskrit-set1'));
    location.hash = '#/app/practice';
  `)
  await sleep(1200)
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) solBtn.click();
  `)
  await sleep(500)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'center' });
  `)
  await sleep(400)
  await takeScreenshot('sanskrit_q1_sol_open.png')

  // 2. English Literature Q1 Solution in Hindi
  await evalJs(`
    localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-english-lit-set1'));
    location.hash = '#/app/practice';
  `)
  await sleep(1200)
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) solBtn.click();
  `)
  await sleep(500)
  // Toggle to Hindi
  await evalJs(`
    const inSolBtn = document.querySelector('.practice-solution-card .lang-toggle-btn');
    if (inSolBtn) inSolBtn.click();
  `)
  await sleep(500)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'center' });
  `)
  await sleep(400)
  await takeScreenshot('english_lit_q1_hi_sol.png')

  // 3. Hindi Literature Q1 Solution in English
  await evalJs(`
    localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-hindi-lit-set1'));
    location.hash = '#/app/practice';
  `)
  await sleep(1200)
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) solBtn.click();
  `)
  await sleep(500)
  // Toggle to English
  await evalJs(`
    const inSolBtn = document.querySelector('.practice-solution-card .lang-toggle-btn');
    if (inSolBtn) inSolBtn.click();
  `)
  await sleep(500)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'center' });
  `)
  await sleep(400)
  await takeScreenshot('hindi_lit_q1_en_sol.png')

  ws.close()
  chrome.kill()
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})

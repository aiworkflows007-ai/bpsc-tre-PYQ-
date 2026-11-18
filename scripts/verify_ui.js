import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9222
const SCREENSHOT_DIR = '/home/ashok/.gemini/antigravity-cli/brain/d95512a2-a1d3-421c-82e1-c485b5798ce2/screenshots'

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function run() {
  console.log('Launching headless chrome with remote debugging...')
  const chrome = spawn('google-chrome', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--window-size=1280,1000',
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

  if (!wsUrl) {
    console.error('Could not get wsUrl')
    chrome.kill()
    process.exit(1)
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

  // Target local server directly
  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5173/#/app' })
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

  // Set currentSetId to computer science to test the exact user's question
  console.log('Testing Computer Science Question 3 (from user screenshot)...')
  await evalJs(`
    localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-computer-science-pgt-80q'));
    location.hash = '#/app/practice';
  `)
  await sleep(1200)

  // Navigate to Question 3
  await evalJs(`
    const qButtons = document.querySelectorAll('.palette button');
    if (qButtons.length >= 3) qButtons[2].click();
  `)
  await sleep(500)

  // Open solution in English
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) solBtn.click();
  `)
  await sleep(500)
  await takeScreenshot('cs_q3_english_sol.png')

  const csQ3En = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('CS Q3 English Solution:', JSON.stringify(csQ3En, null, 2))

  // Toggle to Hindi using the in-solution toggle button!
  console.log('Toggling to Hindi via In-Solution Toggle button...')
  await evalJs(`
    const inSolBtn = document.querySelector('.practice-solution-card .lang-toggle-btn');
    if (inSolBtn) inSolBtn.click();
    else {
      const topBtn = document.querySelector('.lang-toggle-btn');
      if (topBtn) topBtn.click();
    }
  `)
  await sleep(500)
  await takeScreenshot('cs_q3_hindi_sol.png')

  const csQ3Hi = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('CS Q3 Hindi Solution:', JSON.stringify(csQ3Hi, null, 2))

  ws.close()
  chrome.kill()
  console.log('Verification finished successfully!')
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})

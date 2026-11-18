import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9227
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

  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5173/' })
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

  // Set local storage to open CS PGT Set 1 at Question 3 (index 2)
  await sendSession('Runtime.evaluate', {
    expression: `
      localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-cs-pgt-set1'));
      localStorage.setItem('tre-ready:v2:currentIndex_bpsc-tre4-cs-pgt-set1', JSON.stringify(2));
      localStorage.setItem('tre-ready:v2:language', JSON.stringify('en'));
    `
  })

  // Navigate to Practice
  await sendSession('Page.navigate', { url: 'http://localhost:5173/#/app/practice' })
  await sleep(1500)

  // 1. Mobile viewport test of this exact question
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  })
  await sleep(500)

  // Reveal solution
  await sendSession('Runtime.evaluate', {
    expression: `
      const btn = document.querySelector('.toggle-solution-btn');
      if (btn) btn.click();
    `
  })
  await sleep(400)

  let shot = await sendSession('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(`${SCREENSHOT_DIR}/cs_q3_clean_english_mobile.png`, Buffer.from(shot.result.data, 'base64'))
  console.log('Saved cs_q3_clean_english_mobile.png')

  // Toggle to Hindi
  await sendSession('Runtime.evaluate', {
    expression: `
      const langBtn = document.querySelector('.cbt-palette-trigger');
      if (langBtn) langBtn.click();
    `
  })
  await sleep(400)

  shot = await sendSession('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(`${SCREENSHOT_DIR}/cs_q3_clean_hindi_mobile.png`, Buffer.from(shot.result.data, 'base64'))
  console.log('Saved cs_q3_clean_hindi_mobile.png')

  // 2. Desktop viewport test of this exact question
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false
  })
  await sleep(500)

  shot = await sendSession('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(`${SCREENSHOT_DIR}/cs_q3_clean_hindi_desktop.png`, Buffer.from(shot.result.data, 'base64'))
  console.log('Saved cs_q3_clean_hindi_desktop.png')

  // Switch back to English on desktop
  await sendSession('Runtime.evaluate', {
    expression: `
      const langBtn = document.querySelector('.cbt-palette-trigger');
      if (langBtn) langBtn.click();
    `
  })
  await sleep(400)

  shot = await sendSession('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(`${SCREENSHOT_DIR}/cs_q3_clean_english_desktop.png`, Buffer.from(shot.result.data, 'base64'))
  console.log('Saved cs_q3_clean_english_desktop.png')

  ws.close()
  chrome.kill()
  console.log('Finished CS question verification.')
}

run()

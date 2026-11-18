import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9223
const SCREENSHOT_DIR = '/home/ashok/.gemini/antigravity-cli/brain/d95512a2-a1d3-421c-82e1-c485b5798ce2/screenshots'

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function run() {
  console.log('Launching headless chrome with remote debugging on port ' + PORT)
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

  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5174/#/' })
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

  console.log('1. Taking screenshot of Desktop Landing Page (Hero)...')
  await sleep(1000)
  await takeScreenshot('landing_hero_desktop.png')

  console.log('2. Testing Simulator: Click Option C (Correct answer)...')
  await evalJs(`
    const opts = document.querySelectorAll('.sim-opt-btn');
    if (opts.length >= 3) opts[2].click();
  `)
  await sleep(600)
  await takeScreenshot('landing_sim_feedback.png')

  console.log('3. Scrolling to Comparison & 3-Tier sections...')
  await evalJs(`
    const comp = document.querySelector('.comparison-section');
    if (comp) comp.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(600)
  await takeScreenshot('landing_comparison_section.png')

  console.log('4. Scrolling to Mobile App Download & Creator sections...')
  await evalJs(`
    const appSec = document.querySelector('.app-download-section');
    if (appSec) appSec.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(600)
  await takeScreenshot('landing_app_and_creator.png')

  console.log('5. Clicking Mobile App Download CTA to open Modal...')
  await evalJs(`
    const btn = document.querySelector('.btn-install-large') || document.querySelector('.btn-app-download');
    if (btn) btn.click();
  `)
  await sleep(600)
  await takeScreenshot('landing_app_install_modal.png')

  // Close modal
  await evalJs(`
    const closeBtn = document.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.click();
  `)
  await sleep(400)

  // Emulate Mobile Device Viewport
  console.log('6. Switching to mobile viewport (390 x 844)...')
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  })
  await evalJs(`window.scrollTo(0, 0)`)
  await sleep(800)
  await takeScreenshot('landing_mobile_hero.png')

  await evalJs(`
    const appSec = document.querySelector('.app-download-section');
    if (appSec) appSec.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(600)
  await takeScreenshot('landing_mobile_app_section.png')

  ws.close()
  chrome.kill()
  console.log('All landing page verifications completed!')
}

run().catch(e => {
  console.error('Error during landing verification:', e)
  process.exit(1)
})

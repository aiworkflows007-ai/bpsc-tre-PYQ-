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

  // Wait for chrome debugging port
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

  console.log('Connected to Chrome DevTools Protocol at', wsUrl)
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

  // Create new target
  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5173/#/app?category=gk_gs' })
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

  // 1. Screenshot GK/GS Chooser
  console.log('Step 1: GK/GS Chooser')
  await takeScreenshot('live_render_gkgs_chooser.png')

  // 2. Click Biology Track
  console.log('Step 2: Clicking Biology Subject Card')
  await evalJs(`
    const cards = Array.from(document.querySelectorAll('.gkgs-choice-card'));
    const bioCard = cards.find(c => c.textContent.includes('Biology') || c.textContent.includes('जीव विज्ञान'));
    if (bioCard) bioCard.click();
  `)
  await sleep(1000)
  await takeScreenshot('live_render_gkgs_biology_sets.png')

  // 3. Click Set 1 practice
  console.log('Step 3: Clicking Start Set 1 Test')
  await evalJs(`
    const btn = Array.from(document.querySelectorAll('.set-action-btn')).find(b => b.textContent.includes('Start Set 1'));
    if (btn) btn.click();
  `)
  await sleep(1000)

  // 4. In Practice Question: Click Show Solution
  console.log('Step 4: Opening In-Question Solution (English mode)')
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) solBtn.click();
  `)
  await sleep(500)
  await takeScreenshot('live_render_gkgs_q1_english_sol.png')

  const q1En = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('Q1 English details:', JSON.stringify(q1En, null, 2))

  // 5. Toggle to Hindi
  console.log('Step 5: Toggling to Hindi')
  await evalJs(`
    const langBtn = document.querySelector('.lang-toggle-btn');
    if (langBtn) langBtn.click();
  `)
  await sleep(500)
  await takeScreenshot('live_render_gkgs_q1_hindi_sol.png')

  const q1Hi = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('Q1 Hindi details:', JSON.stringify(q1Hi, null, 2))

  // 6. Select Option C and Submit to view Results
  console.log('Step 6: Answering Q1 and submitting test to verify Results screen')
  await evalJs(`
    const optC = document.querySelectorAll('.options button')[2];
    if (optC) optC.click();
    const submitBtn = document.querySelector('button.submit');
    if (submitBtn) submitBtn.click();
  `)
  await sleep(1000)
  await takeScreenshot('live_render_gkgs_results_english.png')

  // 7. Toggle Results to Hindi
  console.log('Step 7: Toggling Results to Hindi')
  await evalJs(`
    const resLangBtn = document.querySelector('.results .lang-toggle-btn');
    if (resLangBtn) resLangBtn.click();
  `)
  await sleep(600)
  await takeScreenshot('live_render_gkgs_results_hindi.png')

  const resDetails = await evalJs(`({
    title: document.querySelector('.results h1')?.textContent,
    choice: document.querySelector('.result-grid article p:nth-of-type(1)')?.textContent,
    officialAns: document.querySelector('.result-grid article p:nth-of-type(2)')?.textContent,
    expl: document.querySelector('.result-grid article p:nth-of-type(3)')?.textContent,
    tip: document.querySelector('.result-grid article .tip-box')?.textContent
  })`)
  console.log('Results Hindi details:', JSON.stringify(resDetails, null, 2))

  // Close chrome
  ws.close()
  chrome.kill()
  console.log('Verification finished successfully!')
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})

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

  // Target local server
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

  // 1. Verify Subject Chooser
  console.log('1. Verifying Part-III Subject Chooser UI...')
  await evalJs(`
    location.hash = '#/app?category=subject';
  `)
  await sleep(1000)
  await takeScreenshot('subject_chooser.png')

  const chooserCards = await evalJs(`
    Array.from(document.querySelectorAll('.gkgs-choice-card')).map(c => ({
      title: c.querySelector('h3')?.textContent,
      tag: c.querySelector('.gkgs-card-tag')?.textContent,
      btn: c.querySelector('.gkgs-select-btn')?.textContent
    }))
  `)
  console.log('Subject Chooser Cards:', JSON.stringify(chooserCards, null, 2))

  // 2. Click Computer Science
  console.log('2. Clicking Computer Science to verify set-wise view...')
  await evalJs(`
    const csCard = document.querySelectorAll('.gkgs-choice-card')[0];
    if (csCard) csCard.click();
  `)
  await sleep(1000)
  await takeScreenshot('subject_cs_sets.png')

  const csSets = await evalJs(`
    Array.from(document.querySelectorAll('.set-card')).map(c => ({
      title: c.querySelector('h3')?.textContent,
      badge: c.querySelector('.badge')?.textContent,
      locked: !!c.querySelector('.badge-locked')
    }))
  `)
  console.log('Computer Science Sets:', JSON.stringify(csSets, null, 2))

  // 3. Back to Subject Chooser and Click Science
  console.log('3. Returning to Subject Chooser and selecting Science...')
  await evalJs(`
    const backBtn = document.querySelector('.back');
    if (backBtn) backBtn.click();
  `)
  await sleep(800)
  await evalJs(`
    const sciCard = document.querySelectorAll('.gkgs-choice-card')[1];
    if (sciCard) sciCard.click();
  `)
  await sleep(1000)
  await takeScreenshot('subject_science_sets.png')

  // 4. Test English Literature Set 1 translation
  console.log('4. Testing English Literature Set 1 practice translation...')
  await evalJs(`
    location.hash = '#/app?category=subject&subject=english-literature';
  `)
  await sleep(800)
  await evalJs(`
    const firstSetBtn = document.querySelectorAll('.set-card button')[0];
    if (firstSetBtn) firstSetBtn.click();
  `)
  await sleep(1000)

  // Open solution in English
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) {
      solBtn.click();
      solBtn.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  `)
  await sleep(600)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(300)
  await takeScreenshot('english_lit_q1_en_sol.png')

  // Toggle to Hindi
  await evalJs(`
    const inSolBtn = document.querySelector('.practice-solution-card .lang-toggle-btn');
    if (inSolBtn) inSolBtn.click();
  `)
  await sleep(600)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(300)
  await takeScreenshot('english_lit_q1_hi_sol.png')

  const engLitData = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('English Lit Q1 in Hindi:', JSON.stringify(engLitData, null, 2))

  // 5. Test Sanskrit Set 1 clean solution
  console.log('5. Testing Sanskrit Set 1 clean solution...')
  await evalJs(`
    localStorage.setItem('tre-ready:v2:currentSetId', JSON.stringify('bpsc-tre4-sanskrit-set1'));
    location.hash = '#/app/practice';
  `)
  await sleep(1000)
  await evalJs(`
    const solBtn = document.querySelector('.toggle-solution-btn');
    if (solBtn) {
      solBtn.click();
      solBtn.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  `)
  await sleep(600)
  await evalJs(`
    const solCard = document.querySelector('.practice-solution-card');
    if (solCard) solCard.scrollIntoView({ behavior: 'instant', block: 'start' });
  `)
  await sleep(300)
  await takeScreenshot('sanskrit_q1_sol.png')

  const skData = await evalJs(`({
    question: document.querySelector('.question-area h1')?.textContent,
    options: Array.from(document.querySelectorAll('.options button span')).map(s => s.textContent),
    answer: document.querySelector('.ans-pill')?.textContent,
    explanation: document.querySelector('.sol-explanation p')?.textContent,
    tip: document.querySelector('.tip-box')?.textContent
  })`)
  console.log('Sanskrit Q1 Clean Solution:', JSON.stringify(skData, null, 2))

  ws.close()
  chrome.kill()
  console.log('All UI verifications completed successfully!')
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})

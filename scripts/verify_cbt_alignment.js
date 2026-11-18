import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9225
const SCREENSHOT_DIR = '/home/ashok/.gemini/antigravity-cli/brain/d95512a2-a1d3-421c-82e1-c485b5798ce2/screenshots'

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true })
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function run() {
  console.log('Launching headless chrome for CBT verification...')
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

  const newTarget = await send('Target.createTarget', { url: 'http://localhost:5173/#/app/practice' })
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

  const takeScreenshot = async (filename) => {
    const res = await sendSession('Page.captureScreenshot', { format: 'png' })
    if (res.result && res.result.data) {
      fs.writeFileSync(`${SCREENSHOT_DIR}/${filename}`, Buffer.from(res.result.data, 'base64'))
      console.log(`Saved screenshot: ${filename}`)
    }
  }

  const evalCode = async (expr) => {
    const res = await sendSession('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })
    return res.result?.result?.value
  }

  try {
    // 1. MOBILE VERIFICATION (375 x 812)
    console.log('--- 1. Testing Mobile Viewport (375x812) ---')
    await sendSession('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    })

    await sendSession('Page.navigate', { url: 'http://localhost:5173/#/app/practice' })
    await sleep(1500)

    // Check header alignment & option targets
    const mobileMetrics = await evalCode(`
      (() => {
        const header = document.querySelector('.cbt-header');
        const options = Array.from(document.querySelectorAll('.option-card'));
        const optHeights = options.map(o => o.offsetHeight);
        const badges = Array.from(document.querySelectorAll('.opt-letter'));
        const badgeAlignments = badges.map(b => window.getComputedStyle(b).marginTop);
        const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
        const qTitle = document.querySelector('.cbt-q-title')?.innerText || '';
        return {
          headerHeight: header ? header.offsetHeight : null,
          optionsCount: options.length,
          minOptionHeight: Math.min(...optHeights),
          maxOptionHeight: Math.max(...optHeights),
          badgeAlignments,
          hasHorizontalScroll,
          qTitle: qTitle.slice(0, 50)
        };
      })()
    `)
    console.log('Mobile Metrics:', mobileMetrics)

    await takeScreenshot('cbt_mobile_question.png')

    // Click Solution button to reveal explanation
    await evalCode(`
      const btn = document.querySelector('.toggle-solution-btn');
      if (btn) btn.click();
    `)
    await sleep(400)

    const solCheck = await evalCode(`
      (() => {
        const solCard = document.querySelector('.practice-solution-card');
        const optE = document.querySelectorAll('.option-card')[4]?.innerText || '';
        return {
          solCardVisible: !!solCard,
          optEText: optE,
          solAnswer: solCard?.querySelector('.sol-answer')?.innerText || ''
        };
      })()
    `)
    console.log('Solution Card Check:', solCheck)
    await takeScreenshot('cbt_mobile_solution_revealed.png')

    // Click Language toggle to switch to Hindi
    await evalCode(`
      const langBtn = document.querySelector('.cbt-btn-lang') || document.querySelector('.practice-solution-card .lang-toggle-btn');
      if (langBtn) langBtn.click();
    `)
    await sleep(400)
    await takeScreenshot('cbt_mobile_hindi_solution.png')

    // Open Mobile Question Palette Drawer
    await evalCode(`
      const palBtn = document.querySelector('.cbt-palette-trigger');
      if (palBtn) palBtn.click();
    `)
    await sleep(400)
    await takeScreenshot('cbt_mobile_palette_drawer.png')

    // Close Drawer
    await evalCode(`
      const closeBtn = document.querySelector('.drawer-close-btn');
      if (closeBtn) closeBtn.click();
    `)
    await sleep(300)

    // 2. DESKTOP VERIFICATION (1280 x 800)
    console.log('--- 2. Testing Desktop Viewport (1280x800) ---')
    await sendSession('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    })
    await sleep(600)

    const desktopMetrics = await evalCode(`
      (() => {
        const leftCol = document.querySelector('.cbt-left-col');
        const rightCol = document.querySelector('.cbt-right-col');
        const palette = document.querySelector('.cbt-palette-card');
        return {
          leftColWidth: leftCol ? leftCol.offsetWidth : null,
          rightColWidth: rightCol ? rightCol.offsetWidth : null,
          paletteVisible: !!palette,
          paletteGridCount: document.querySelectorAll('.palette-num-btn').length
        };
      })()
    `)
    console.log('Desktop Metrics:', desktopMetrics)
    await takeScreenshot('cbt_desktop_workspace.png')

    // Submit test to view Results screen
    console.log('--- 3. Testing Results Screen ---')
    await evalCode(`
      // Select option 1 (index 0)
      const opt = document.querySelector('.option-card');
      if (opt) opt.click();
      // Click submit
      const submitBtn = document.querySelector('.cbt-submit-btn');
      if (submitBtn) submitBtn.click();
    `)
    await sleep(800)

    const resultsMetrics = await evalCode(`
      (() => {
        const results = document.querySelector('.results');
        const filterTabs = Array.from(document.querySelectorAll('.filter-tab')).map(t => t.innerText);
        const cards = document.querySelectorAll('.result-card');
        return {
          resultsVisible: !!results,
          filterTabs,
          resultCardsCount: cards.length
        };
      })()
    `)
    console.log('Results Screen Metrics:', resultsMetrics)
    await takeScreenshot('cbt_desktop_results.png')

    // Test clicking Incorrect filter tab
    await evalCode(`
      const incTab = document.querySelector('.tab-incorrect');
      if (incTab) incTab.click();
    `)
    await sleep(300)
    await takeScreenshot('cbt_desktop_results_filtered.png')

  } catch (err) {
    console.error('Error during verification:', err)
  } finally {
    ws.close()
    chrome.kill()
    console.log('Verification finished.')
  }
}

run()

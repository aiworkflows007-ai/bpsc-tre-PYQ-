import { spawn } from 'child_process'
import fs from 'fs'

const PORT = 9230
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

  if (!wsUrl) {
    console.error('Failed to get chrome websocket debugger URL')
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

  async function capture(url, width, height, filename, waitMs = 1500) {
    const newTarget = await send('Target.createTarget', { url: 'about:blank' })
    const targetId = newTarget.result.targetId
    const attachRes = await send('Target.attachToTarget', { targetId, flatten: true })
    const sessionId = attachRes.result.sessionId

    function sendSession(method, params = {}) {
      return new Promise((resolve) => {
        const reqId = id++
        pending.set(reqId, resolve)
        ws.send(JSON.stringify({ sessionId, id: reqId, method, params }))
      })
    }

    await sendSession('Page.enable')
    await sendSession('DOM.enable')
    await sendSession('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: width < 768
    })

    await sendSession('Page.navigate', { url })
    await sleep(waitMs)

    // Inspect watermark items
    const evalRes = await sendSession('Runtime.evaluate', {
      expression: `(() => {
        const bg = document.querySelector('.edu-watermark-bg');
        if (!bg) return { error: 'No .edu-watermark-bg found' };
        const items = Array.from(document.querySelectorAll('.edu-watermark-item'));
        const visibleItems = items.filter(el => {
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden';
        });
        const bgStyle = window.getComputedStyle(bg);
        return {
          totalItems: items.length,
          visibleCount: visibleItems.length,
          bgOpacity: bgStyle.opacity,
          hasMutedClass: bg.classList.contains('watermark-muted'),
          sampleItemOpacity: visibleItems[0] ? window.getComputedStyle(visibleItems[0]).opacity : null,
          sampleItemTransform: visibleItems[0] ? window.getComputedStyle(visibleItems[0]).transform : null
        };
      })()`,
      returnByValue: true
    })

    console.log(`[${filename}] Viewport ${width}x${height} eval info:`, evalRes.result?.value)

    const shot = await sendSession('Page.captureScreenshot', { format: 'png' })
    const outPath = `${SCREENSHOT_DIR}/${filename}`
    fs.writeFileSync(outPath, Buffer.from(shot.result.data, 'base64'))
    console.log(`Saved screenshot: ${outPath}`)

    await send('Target.closeTarget', { targetId })
  }

  try {
    console.log('1. Capturing Desktop Home (1280x800)...')
    await capture('http://localhost:5173/#/', 1280, 800, 'watermark_desktop_home.png')

    console.log('2. Capturing Mobile Home (375x812)...')
    await capture('http://localhost:5173/#/', 375, 812, 'watermark_mobile_home.png')

    console.log('3. Capturing Desktop Practice Mode (1280x800)...')
    await capture('http://localhost:5173/#/app/practice?set=qualifying_tre3_eng_01', 1280, 800, 'watermark_desktop_practice.png')

    console.log('4. Capturing Mobile Practice Mode (375x812)...')
    await capture('http://localhost:5173/#/app/practice?set=qualifying_tre3_eng_01', 375, 812, 'watermark_mobile_practice.png')

    console.log('Verification screenshots captured successfully!')
  } catch (e) {
    console.error('Error during verification:', e)
  } finally {
    ws.close()
    chrome.kill()
  }
}

run()

import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { SETS_CATALOG, SETS_DATA, type QuestionItem, type SetMeta } from './data/allSets'

type Lang = 'en' | 'hi'
type Attempt = {
  completedAt: string
  subject: string
  setId: string
  score: number
  total: number
  seconds: number
  answers: Record<number, number>
  flagged: number[]
}

const KEY = 'tre-ready:v2'
const prefs = {
  get: <T,>(key: string, fallback: T): T => {
    try {
      const v = localStorage.getItem(`${KEY}:${key}`)
      return v ? JSON.parse(v) : fallback
    } catch {
      return fallback
    }
  },
  set: (key: string, value: unknown) => {
    try {
      localStorage.setItem(`${KEY}:${key}`, JSON.stringify(value))
    } catch {}
  }
}

export function getBestScoreForSet(setId: string): { score: number; total: number; pct: number } | null {
  const attempts = prefs.get<Attempt[]>('attempts', [])
  const setAttempts = attempts.filter(a => a.setId === setId)
  if (!setAttempts.length) return null
  let best = setAttempts[0]
  let bestPct = (best.score / best.total) * 100
  for (const a of setAttempts) {
    const p = (a.score / a.total) * 100
    if (p > bestPct) {
      bestPct = p
      best = a
    }
  }
  return { score: best.score, total: best.total, pct: Math.round(bestPct) }
}

export function checkIsSetUnlocked(
  s: SetMeta,
  allSets: SetMeta[],
  freeMode: boolean
): { isUnlocked: boolean; requiredPrevSet?: SetMeta; prevScore?: number; subjectIndex: number; totalInSubject: number } {
  const subjectSets = allSets.filter(x => x.subject === s.subject)
  const subjectIndex = subjectSets.findIndex(x => x.id === s.id)
  const totalInSubject = subjectSets.length

  if (freeMode || subjectIndex <= 0) {
    return { isUnlocked: true, subjectIndex: Math.max(0, subjectIndex), totalInSubject }
  }

  const prevSet = subjectSets[subjectIndex - 1]
  const prevBest = getBestScoreForSet(prevSet.id)

  if (prevBest && prevBest.pct >= 80) {
    return { isUnlocked: true, subjectIndex, totalInSubject }
  }

  return {
    isUnlocked: false,
    requiredPrevSet: prevSet,
    prevScore: prevBest?.pct,
    subjectIndex,
    totalInSubject
  }
}

export function formatOptionLabel(opt: string, index: number, lang: 'en' | 'hi'): string {
  if (!opt) return ''
  if (lang === 'hi') {
    if (index === 3 && /more than one/i.test(opt)) {
      return 'उपर्युक्त में से एक से अधिक'
    }
    if (index === 4 && /none of the above/i.test(opt)) {
      return 'उपर्युक्त में से कोई नहीं'
    }
  } else if (lang === 'en') {
    if (index === 3 && /उपर्युक्त में से एक से अधिक/i.test(opt)) {
      return 'More than one of the above'
    }
    if (index === 4 && /उपर्युक्त में से कोई नहीं/i.test(opt)) {
      return 'None of the above'
    }
  }
  return opt
}

export function getOptionText(q: QuestionItem, i: number, lang: 'en' | 'hi'): string {
  if (lang === 'hi') {
    if (q.options_hi && q.options_hi[i]) {
      return formatOptionLabel(q.options_hi[i], i, 'hi')
    }
    return formatOptionLabel(q.options[i] || '', i, 'hi')
  }
  return formatOptionLabel(q.options[i] || '', i, 'en')
}

export function getAnswerText(q: QuestionItem, lang: 'en' | 'hi'): string {
  if (lang === 'hi') {
    if (q.options_hi && q.options_hi[q.answer]) {
      return formatOptionLabel(q.options_hi[q.answer], q.answer, 'hi')
    }
    return formatOptionLabel(q.answer_text || q.options[q.answer] || '', q.answer, 'hi')
  }
  return formatOptionLabel(q.answer_text || q.options[q.answer] || '', q.answer, 'en')
}

const copy = {
  en: {
    start: 'Start your preparation',
    practice: 'Practice',
    analysis: 'Analysis',
    discussion: 'Discussions',
    subjects: 'Subjects',
    pyq: 'Previous papers',
    home: 'Home',
    hero: 'Prepare Smarter. Practice Better. Crack TRE 4.0.',
    sub: 'Targeted BPSC TRE 4.0 practice with 100% authentic past questions, bilingual toggle, and official 5-option format.',
    choose: 'Choose what to practise',
    chooseSub: 'Choose a question set',
    action: 'Ready to practice',
    startPractice: 'Start practice test',
    topicAnalysis: 'Topic-wise analysis',
    saved: 'Saved on this device',
    progress: 'Your progress',
    continue: 'Continue practice',
    view: 'View analysis',
    expl: 'View explanation',
    submit: 'Submit test',
    next: 'Next',
    previous: 'Previous',
    mark: 'Mark for review',
    question: 'Question',
    time: 'Elapsed time',
    report: 'Report',
    helpful: 'Helpful',
    newest: 'Newest',
    official: 'Official answer',
    expert: 'Expert reviewed',
    student: 'Student contribution'
  },
  hi: {
    start: 'तैयारी शुरू करें',
    practice: 'अभ्यास',
    analysis: 'विश्लेषण',
    discussion: 'चर्चाएँ',
    subjects: 'विषय',
    pyq: 'पिछले प्रश्नपत्र',
    home: 'होम',
    hero: 'स्मार्ट तैयारी। बेहतर अभ्यास। TRE 4.0 में सफलता।',
    sub: 'प्रामाणिक BPSC TRE 1.0, 2.0 और 3.0 प्रश्नपत्रों, द्विभाषी टॉगल और 5-विकल्प प्रारूप के साथ संपूर्ण तैयारी।',
    choose: 'परीक्षा खंड चुनें',
    chooseSub: 'अभ्यास सेट चुनें',
    action: 'अभ्यास हेतु तैयार',
    startPractice: 'अभ्यास टेस्ट शुरू करें',
    topicAnalysis: 'विषयवार विश्लेषण',
    saved: 'इस डिवाइस पर सुरक्षित',
    progress: 'आपकी प्रगति',
    continue: 'अभ्यास जारी रखें',
    view: 'विश्लेषण देखें',
    expl: 'व्याख्या देखें',
    submit: 'टेस्ट जमा करें',
    next: 'आगे',
    previous: 'पीछे',
    mark: 'समीक्षा हेतु चिह्नित करें',
    question: 'प्रश्न',
    time: 'लगा समय',
    report: 'रिपोर्ट',
    helpful: 'सहायक',
    newest: 'नवीनतम',
    official: 'आधिकारिक उत्तर',
    expert: 'विशेषज्ञ समीक्षित',
    student: 'विद्यार्थी योगदान'
  }
}

export const SECTIONS = [
  {
    id: 'qualifying',
    name: 'Part-I Language Qualifying',
    hi: 'भाग-1 भाषा अर्हता परीक्षा (30% अनिवार्य)',
    desc: 'Mandatory qualifying paper for PRT, Middle, TGT & PGT (English + Hindi)',
    tag: '30% Pass Mark Mandatory',
    icon: 'अ'
  },
  {
    id: 'gk_gs',
    name: 'Part-II General Studies (40 Marks)',
    hi: 'भाग-2 सामान्य अध्ययन (40 अंक)',
    desc: 'Common across tiers: Bihar History, National Movement, General Science & Math',
    tag: '40 Marks Merit',
    icon: 'G'
  },
  {
    id: 'subject',
    name: 'Part-III Subject Practice (80 Marks)',
    hi: 'भाग-3 मुख्य विषय (80 अंक)',
    desc: 'Dedicated subject specialization: Science, Hindi Literature, English Literature, etc.',
    tag: '80 Marks Merit',
    icon: 'S'
  }
]

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5zM4 5.5v16',
    chart: 'M4 19V9m8 10V5m8 14v-7',
    clock: 'M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    flag: 'M5 21V4m0 0c4-3 7 3 14 0v10c-7 3-10-3-14 0',
    check: 'M20 6L9 17l-5-5'
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d={paths[name] || paths.arrow} />
    </svg>
  )
}

function Header({
  lang,
  setLang,
  route,
  setRoute,
  onOpenAppModal
}: {
  lang: Lang
  setLang: (x: Lang) => void
  route: string
  setRoute: (x: string) => void
  onOpenAppModal: () => void
}) {
  const t = copy[lang]
  return (
    <header>
      <a className="brand" href="#/" onClick={() => setRoute('/')}>
        <span>T</span>
        <b>TRE Ready</b>
        <small>BPSC 4.0</small>
      </a>
      <nav>
        <button className={route === '/' ? 'active' : ''} onClick={() => setRoute('/')}>
          {t.home}
        </button>
        <button className={route.startsWith('/app?category=qualifying') ? 'active' : ''} onClick={() => setRoute('/app?category=qualifying')}>
          {lang === 'hi' ? 'अर्हता (Part-I)' : 'Qualifying (Part-I)'}
        </button>
        <button className={route.startsWith('/app?category=gk_gs') ? 'active' : ''} onClick={() => setRoute('/app?category=gk_gs')}>
          {lang === 'hi' ? 'सामान्य अध्ययन (Part-II)' : 'GK / GS (Part-II)'}
        </button>
        <button className={route.startsWith('/app?category=subject') ? 'active' : ''} onClick={() => setRoute('/app?category=subject')}>
          {lang === 'hi' ? 'विषय (Part-III)' : 'Subjects (Part-III)'}
        </button>
        <button className={route === '/pyq' ? 'active' : ''} onClick={() => setRoute('/pyq')}>
          {t.pyq}
        </button>
        <button className="nav-app-btn" onClick={onOpenAppModal} style={{ color: '#059669', fontWeight: 700 }}>
          📲 {lang === 'hi' ? 'ऐप इंस्टॉल' : 'Get App'}
        </button>
      </nav>
      <div className="head-actions">
        <button
          className="btn-app-download"
          onClick={onOpenAppModal}
          style={{ padding: '8px 14px', fontSize: '12.5px' }}
          title="Install offline mobile app"
        >
          📲 {lang === 'hi' ? 'ऐप डाउनलोड' : 'Download App'}
          <span className="badge-micro">FREE</span>
        </button>
        <button className="language" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} aria-label="Change language">
          {lang === 'en' ? 'हिन्दी' : 'English'}
        </button>
        <button className="nav-cta" onClick={() => setRoute('/app')}>
          {t.start}
        </button>
      </div>
    </header>
  )
}

function AppModal({
  isOpen,
  onClose,
  installPrompt,
  onInstall
}: {
  isOpen: boolean
  onClose: () => void
  installPrompt: any
  onInstall: () => void
}) {
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'desktop'>('android')

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="app-modal-dialog" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="modal-header">
          <img src="./icon-192.png" alt="TRE Ready App Icon" className="modal-app-icon" />
          <h3>TRE Ready Mobile App</h3>
          <p>BPSC TRE 4.0 Authentic PYQ Practice · Standalone Offline App</p>
        </div>

        <div className="modal-feature-checks">
          <span>⚡ 100% Offline Mode</span>
          <span>🚫 Zero Ads Forever</span>
          <span>📱 Fullscreen CBT Exam Mode</span>
          <span>💾 Auto-Saved Progress</span>
        </div>

        {installPrompt && (
          <div style={{ marginBottom: '18px' }}>
            <button className="btn-native-install" onClick={onInstall}>
              ⚡ 1-Click Install App on This Device
            </button>
          </div>
        )}

        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'android' ? 'active' : ''}`}
            onClick={() => setActiveTab('android')}
          >
            🤖 Android
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'ios' ? 'active' : ''}`}
            onClick={() => setActiveTab('ios')}
          >
            🍎 iPhone / iPad
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'desktop' ? 'active' : ''}`}
            onClick={() => setActiveTab('desktop')}
          >
            💻 Laptop / PC
          </button>
        </div>

        {activeTab === 'android' && (
          <div className="modal-steps-list">
            <div className="modal-step-card">
              <span className="step-num">1</span>
              <span>Open this website in <b>Chrome</b>, <b>Brave</b>, or <b>Edge</b> on your phone.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">2</span>
              <span>Tap the <b>three dots (⋮)</b> in the top right menu bar.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">3</span>
              <span>Tap <b>"Install app"</b> or <b>"Add to Home screen"</b>.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">4</span>
              <span>The TRE Ready app icon will appear on your home screen — <b>practice anytime with zero data</b>!</span>
            </div>
          </div>
        )}

        {activeTab === 'ios' && (
          <div className="modal-steps-list">
            <div className="modal-step-card">
              <span className="step-num">1</span>
              <span>Open this website in <b>Safari</b> on your iPhone or iPad.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">2</span>
              <span>Tap the <b>Share icon (⎙)</b> in the bottom toolbar.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">3</span>
              <span>Scroll down and tap <b>"Add to Home Screen"</b>.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">4</span>
              <span>Tap <b>Add</b> in the top right. Enjoy full-screen standalone exam mode!</span>
            </div>
          </div>
        )}

        {activeTab === 'desktop' && (
          <div className="modal-steps-list">
            <div className="modal-step-card">
              <span className="step-num">1</span>
              <span>On Chrome or Edge, click the <b>Install icon (⊕)</b> on the right side of the address bar.</span>
            </div>
            <div className="modal-step-card">
              <span className="step-num">2</span>
              <span>Click <b>Install</b> to run TRE Ready in a standalone window.</span>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <small style={{ color: '#64748b', fontSize: '12px' }}>
            Lightweight PWA · Size: ~3.2 MB · Zero Play Store login required
          </small>
        </div>
      </div>
    </div>
  )
}

function Home({
  lang,
  setRoute,
  onOpenAppModal
}: {
  lang: Lang
  setRoute: (s: string) => void
  onOpenAppModal: () => void
}) {
  const t = copy[lang]
  const totalQuestions = SETS_CATALOG.reduce((sum, s) => sum + s.question_count, 0)
  const defaultSet =
    SETS_CATALOG.find(s => s.id === 'bpsc-tre4-qualifying-hindi-set1') ||
    SETS_CATALOG.find(s => s.id === 'bpsc-tre4-qualifying-english-set1') ||
    SETS_CATALOG[0]

  // Hero Live Interactive Question Simulator
  const [simLang, setSimLang] = useState<'en' | 'hi'>('hi')
  const [simSelected, setSimSelected] = useState<number | null>(null)
  const [simShowTip, setSimShowTip] = useState(false)

  const simQ = {
    hi: 'भारतीय संविधान के अनुच्छेद 343(1) के अंतर्गत संघ की राजभाषा है—',
    en: 'Under Article 343(1) of the Indian Constitution, the official language of the Union is:',
    options: [
      { hi: 'अंग्रेजी', en: 'English' },
      { hi: 'संस्कृत', en: 'Sanskrit' },
      { hi: 'देवनागरी लिपि में हिन्दी', en: 'Hindi in Devanagari script' },
      { hi: 'उपर्युक्त में से एक से अधिक', en: 'More than one of the above' },
      { hi: 'उपर्युक्त में से कोई नहीं', en: 'None of the above' }
    ],
    correct: 2,
    tipHi: '💡 परीक्षा-संकेत: 14 सितम्बर 1949 को संविधान सभा ने अनुच्छेद 343(1) के तहत देवनागरी लिपि में हिन्दी को राजभाषा घोषित किया। BPSC अक्सर विकल्प (D) "एक से अधिक" का प्रलोभन देता है जब केवल एक ही विशिष्ट प्रावधान होता है!',
    tipEn: "💡 Exam Setter's Tip: On 14 Sept 1949, the Constituent Assembly adopted Hindi in Devanagari script under Art 343(1). BPSC often lures candidates into Option (D) 'More than one' even when only one exact constitutional answer exists!"
  }

  const handleSimSelect = (idx: number) => {
    setSimSelected(idx)
    setSimShowTip(true)
  }

  return (
    <>
      {/* Hero Section: High Impact, Problem Solving, Low Text */}
      <section className="hero">
        <div>
          <div className="hero-badge-pill">
            <span className="hero-badge-dot" />
            <span>BPSC TRE 4.0 · 100% AUTHENTIC PREVIOUS YEAR PAPERS</span>
          </div>

          <h1>
            Why Practice Generic Mocks When You Can Master{' '}
            <span className="hero-gradient-text">Official BPSC TRE PYQs?</span>
          </h1>

          <p className="lead">
            Over <b>85% of negative marks</b> occur on BPSC's signature 5-option design: <b>Option (D) "More than one"</b> and <b>Option (E) "None of the above"</b>.
            Generic 4-option test series fail you. TRE Ready prepares you with <b>1,898+ authentic questions</b>, instant bilingual toggle (`EN` ⇄ `हिन्दी`), and official setter elimination tricks.
          </p>

          <div className="button-row" style={{ flexWrap: 'wrap', gap: '12px', marginTop: '26px' }}>
            <button
              className="btn-start-hero"
              onClick={() => {
                prefs.set('currentSetId', defaultSet.id)
                prefs.set('lastSubject', defaultSet.title)
                setRoute('/app/practice')
              }}
            >
              <Icon name="book" />
              {lang === 'hi' ? 'निःशुल्क PYQ अभ्यास शुरू करें' : 'Start Free PYQ Practice (71 Sets)'}
            </button>

            <button className="btn-app-download" onClick={onOpenAppModal}>
              <span>📲</span>
              <span>{lang === 'hi' ? 'मोबाइल ऐप डाउनलोड करें' : 'Download Mobile App'}</span>
              <span className="badge-micro">OFFLINE</span>
            </button>

            <button className="text-button" onClick={() => setRoute('/app')}>
              {lang === 'hi' ? `सभी ${SETS_CATALOG.length} सेट देखें (${totalQuestions} प्रश्न)` : `Browse ${SETS_CATALOG.length} sets (${totalQuestions}Q)`}{' '}
              <Icon name="arrow" />
            </button>
          </div>

          <p className="micro">
            🔒 80% Mastery Progression Ladder · ⚡ 100% Free Forever · 📴 Works Offline · 💾 Saves Locally
          </p>
        </div>

        {/* Hero Interactive Live Question Simulator */}
        <aside className="hero-sim-card">
          <div className="sim-top-bar">
            <span className="sim-tag">⚡ BPSC TRE LIVE SIMULATOR</span>
            <button
              className="sim-lang-btn"
              onClick={() => setSimLang(l => (l === 'hi' ? 'en' : 'hi'))}
              title="Toggle language"
            >
              🌐 {simLang === 'hi' ? 'Switch to English' : 'हिन्दी में देखें'}
            </button>
          </div>

          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 600 }}>
            {simLang === 'hi' ? 'आधिकारिक BPSC TRE प्रश्न (सेट 1 · प्रश्न 12)' : 'Official BPSC TRE Question (Set 1 · Q12)'}
          </div>

          <p className="sim-q-text">{simLang === 'hi' ? simQ.hi : simQ.en}</p>

          <div className="sim-options">
            {simQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx)
              let statusClass = ''
              if (simSelected !== null) {
                if (idx === simQ.correct) {
                  statusClass = 'correct'
                } else if (idx === simSelected) {
                  statusClass = 'wrong'
                } else {
                  statusClass = 'dimmed'
                }
              }

              return (
                <button
                  key={idx}
                  className={`sim-opt-btn ${statusClass}`}
                  onClick={() => handleSimSelect(idx)}
                >
                  <b>{letter}</b>
                  <span>{simLang === 'hi' ? opt.hi : opt.en}</span>
                  {simSelected !== null && idx === simQ.correct && (
                    <span style={{ marginLeft: 'auto', color: '#15803d', fontWeight: 800 }}>✔</span>
                  )}
                  {simSelected !== null && idx === simSelected && idx !== simQ.correct && (
                    <span style={{ marginLeft: 'auto', color: '#dc2626', fontWeight: 800 }}>✖</span>
                  )}
                </button>
              )
            })}
          </div>

          {simShowTip && (
            <div className="sim-feedback-box">
              <b>{simLang === 'hi' ? 'परीक्षा-संकेत एवं ट्रिक्स:' : "Exam Setter's Elimination Trick:"}</b>
              <p style={{ margin: 0, fontSize: '12.5px' }}>
                {simLang === 'hi' ? simQ.tipHi : simQ.tipEn}
              </p>
            </div>
          )}

          <div className="sim-card-bottom">
            <span>{simSelected === null ? '👈 Click any option to test' : '🎯 Instant Feedback Active'}</span>
            <button
              onClick={() => {
                prefs.set('currentSetId', defaultSet.id)
                prefs.set('lastSubject', defaultSet.title)
                setRoute('/app/practice')
              }}
              style={{
                background: 'none',
                border: 0,
                color: '#147d75',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Full Practice Sets <Icon name="arrow" />
            </button>
          </div>
        </aside>
      </section>

      {/* Visual Stat Counter Bar */}
      <section className="stat-counter-bar">
        <div className="stat-box">
          <span className="stat-icon">🏆</span>
          <div className="stat-num">1,898+</div>
          <div className="stat-label">Authentic Past Questions</div>
        </div>
        <div className="stat-box">
          <span className="stat-icon">📚</span>
          <div className="stat-num">71</div>
          <div className="stat-label">Bite-Sized Practice Sets</div>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🔒</span>
          <div className="stat-num">80%</div>
          <div className="stat-label">Mastery Unlock Ladder</div>
        </div>
        <div className="stat-box">
          <span className="stat-icon">📴</span>
          <div className="stat-num">100%</div>
          <div className="stat-label">Free & Offline Mobile PWA</div>
        </div>
      </section>

      {/* Core Problem & Value Proposition: Comparison Grid */}
      <section className="comparison-section">
        <div className="comparison-head">
          <p className="eyebrow">THE REAL PROBLEM SOLVED</p>
          <h2>Why 85% of Aspirants Fail in Conventional Mocks vs. How TRE Ready Guarantees Success</h2>
          <p>
            BPSC exams are NOT standard multiple choice tests. 70%+ of questions replicate concepts from past TRE papers.
            Stop practicing arbitrary 4-option questions from random publishers.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Trap Card */}
          <div className="comp-card trap">
            <div className="comp-header">
              <div className="comp-header-icon">✕</div>
              <div>
                <h3>Generic Mock Tests (The Trap)</h3>
                <p>Standard coaching app tests & test series</p>
              </div>
            </div>
            <ul className="comp-list">
              <li className="comp-item">
                <span className="icon-badge">✕</span>
                <span><b>Outdated 4-Option Pattern:</b> Ignores BPSC's signature 5th option, creating false confidence.</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✕</span>
                <span><b>Untested Vendor Questions:</b> Made by third-party writers with zero alignment to BPSC's actual setter psychology.</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✕</span>
                <span><b>Aggressive Paywalls & Ads:</b> Costs ₹999 to ₹2,500 with annoying video ads popping up during practice.</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✕</span>
                <span><b>Fails Without High-Speed Internet:</b> Freezes in rural coaching centers or on the train/bus.</span>
              </li>
            </ul>
            <div className="comp-verdict">
              ⚠️ Result: Severe negative marks on exam day on Options (D) & (E).
            </div>
          </div>

          {/* Solution Card */}
          <div className="comp-card solution">
            <div className="comp-header">
              <div className="comp-header-icon">✓</div>
              <div>
                <h3>TRE Ready (Authentic PYQ Mastery)</h3>
                <p>Genuine BPSC TRE 1.0, 2.0 & 3.0 question booklets</p>
              </div>
            </div>
            <ul className="comp-list">
              <li className="comp-item">
                <span className="icon-badge">✓</span>
                <span><b>Authentic 5-Option Format:</b> Train directly on Option (D) "More than one" & (E) "None of the above".</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✓</span>
                <span><b>70%+ Concept Recurrence:</b> Direct extraction from official master question keys across TRE 1.0, 2.0 & 3.0.</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✓</span>
                <span><b>Instant Bilingual Toggle (`EN` ⇄ `हिन्दी`):</b> Switch language on any question card without resetting timer.</span>
              </li>
              <li className="comp-item">
                <span className="icon-badge">✓</span>
                <span><b>100% Free & Works Offline:</b> Install directly as a lightweight PWA. Practice anywhere without network.</span>
              </li>
            </ul>
            <div className="comp-verdict">
              🎯 Result: Razor-sharp elimination skills and guaranteed confidence in the exam hall.
            </div>
          </div>
        </div>
      </section>

      {/* 3-Tier Exam Architecture (Set-Wise Practice Entry Points) */}
      <section className="three-tier-section">
        <div className="three-tier-head">
          <p className="eyebrow">STRUCTURED PRACTICE LADDER</p>
          <h2>Choose Your Exam Section</h2>
          <p>
            Each section features progressive sets (25–30 questions). Score 80%+ on Set 1 to unlock Set 2!
          </p>
        </div>

        <div className="three-tier-grid">
          {/* Tier 1 */}
          <div className="tier-card t1">
            <div>
              <div className="tier-top">
                <span className="tier-tag">PART-I · MANDATORY</span>
                <span className="tier-icon">अ</span>
              </div>
              <h3>Language Qualifying Paper</h3>
              <p>
                Mandatory 30% pass mark (9/30) across PRT, Middle, Secondary, and Senior Secondary. English (8Q) + Hindi (22Q).
              </p>
            </div>
            <div>
              <div className="tier-stats-row">
                <span>📚 7 Practice Sets</span>
                <span>·</span>
                <span>🎯 180 Questions</span>
              </div>
              <button className="tier-btn" onClick={() => setRoute('/app?category=qualifying')}>
                Practice Part-I Qualifying →
              </button>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="tier-card t2">
            <div>
              <div className="tier-top">
                <span className="tier-tag">PART-II · 40 MARKS</span>
                <span className="tier-icon">🔬</span>
              </div>
              <h3>General Studies (GK / GS)</h3>
              <p>
                The decisive merit ranker common across all tiers. 8 high-yield subjects: Biology, Chemistry, Physics, Math, Reasoning, History, Geography & Current Affairs.
              </p>
            </div>
            <div>
              <div className="tier-stats-row">
                <span>📚 28 Practice Sets</span>
                <span>·</span>
                <span>🎯 533 Questions</span>
              </div>
              <button className="tier-btn" onClick={() => setRoute('/app?category=gk_gs')}>
                Choose GK / GS Subject Sets →
              </button>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="tier-card t3">
            <div>
              <div className="tier-top">
                <span className="tier-tag">PART-III · 80 MARKS</span>
                <span className="tier-icon">🎓</span>
              </div>
              <h3>Subject Specialization</h3>
              <p>
                The heaviest scoring section (80 marks). Computer Science (PGT), Science, Hindi Literature, English Literature, and Sanskrit.
              </p>
            </div>
            <div>
              <div className="tier-stats-row">
                <span>📚 36 Practice Sets</span>
                <span>·</span>
                <span>🎯 1,185 Questions</span>
              </div>
              <button className="tier-btn" onClick={() => setRoute('/app?category=subject')}>
                Choose Specialization Sets →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Mobile App Feature Showcase */}
      <section className="app-download-section">
        <div className="app-showcase-box">
          <div className="app-showcase-left">
            <div className="hero-badge-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#a7f3d0', borderColor: 'rgba(255,255,255,0.25)' }}>
              <span>📱 STANDALONE MOBILE APP</span>
            </div>
            <h2>Install TRE Ready Directly on Your Phone</h2>
            <p className="lead-app">
              Experience the real computer-based exam on your mobile screen. Zero installation from Google Play Store needed — installs directly as a lightning-fast, offline Progressive Web App (PWA).
            </p>

            <div className="app-features-grid">
              <div className="app-feature-pill">
                <span className="feat-icon">📴</span>
                <span><b>100% Offline Practice:</b> Works in airplane mode or during commute.</span>
              </div>
              <div className="app-feature-pill">
                <span className="feat-icon">🚫</span>
                <span><b>Zero Ads & Popups:</b> 100% distraction-free environment.</span>
              </div>
              <div className="app-feature-pill">
                <span className="feat-icon">📱</span>
                <span><b>Fullscreen CBT Mode:</b> Replicates actual examination terminal.</span>
              </div>
              <div className="app-feature-pill">
                <span className="feat-icon">⏱️</span>
                <span><b>Auto-Saved Progress:</b> Unlock progression preserved locally.</span>
              </div>
              <div className="app-feature-pill">
                <span className="feat-icon">🌐</span>
                <span><b>Instant Bilingual Toggle:</b> Switch English ⇄ Hindi with 0ms lag.</span>
              </div>
              <div className="app-feature-pill">
                <span className="feat-icon">🔋</span>
                <span><b>Under 4 MB Footprint:</b> Light on storage and mobile battery.</span>
              </div>
            </div>

            <div className="app-cta-group">
              <button className="btn-install-large" onClick={onOpenAppModal}>
                <span>📲</span>
                <span>Install TRE Ready App Now</span>
              </button>
              <div className="app-compat-badges">
                <span>✔ Android (Chrome/Brave)</span>
                <span>✔ iOS Safari</span>
                <span>✔ Desktop</span>
              </div>
            </div>
          </div>

          <div className="app-showcase-right">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-top-bar">
                  <span>9:41 AM</span>
                  <span>🔋 100% · 📴 OFFLINE</span>
                </div>
                <div className="phone-app-card">
                  <h4>TRE Ready Mobile</h4>
                  <p>BPSC TRE 4.0 Practice</p>
                </div>
                <div className="phone-mini-q">
                  <b>BPSC TRE 1.0 (Q1)</b>
                  <span>The brain of computer is:</span>
                  <div style={{ marginTop: '8px', fontSize: '11px', color: '#15803d', fontWeight: 700 }}>
                    ✔ (A) CPU · 80% Unlocked
                  </div>
                </div>
                <div className="phone-bottom-bar">
                  ⚡ 100% Offline Standalone PWA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Attribution & Dedication Card */}
      <section className="creator-dedication-section">
        <div className="creator-card">
          <div className="creator-left">
            <div className="creator-avatar-circle">AK</div>
            <div className="creator-info">
              <h3>Made with ❤️ by Ashok Kumar</h3>
              <p>
                Engineered with AI precision to solve the real challenges faced by BPSC TRE teacher aspirants across Bihar.
                Dedicated to providing 100% authentic past questions, zero advertising clutter, and complete offline accessibility.
              </p>
            </div>
          </div>
          <a
            href="https://ai-workflows.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="creator-visit-btn"
          >
            Visit Creator Portfolio ↗
          </a>
        </div>
      </section>
    </>
  )
}

export const GKGS_SUBJECT_CONFIG = [
  {
    key: 'biology',
    subject: 'General Science: Biology',
    nameEn: 'General Science: Biology',
    nameHi: 'जीव विज्ञान (Biology)',
    icon: '🧬',
    descEn: 'Cell Biology, Human Physiology, Genetics, Botany, Nutrition & Diseases',
    descHi: 'कोशिका, मानव शरीर क्रिया विज्ञान, आनुवंशिकी, पादप कार्यिकी, पोषण एवं रोग',
    tag: '4 Sets · 102 Questions'
  },
  {
    key: 'chemistry',
    subject: 'General Science: Chemistry',
    nameEn: 'General Science: Chemistry',
    nameHi: 'रसायन विज्ञान (Chemistry)',
    icon: '🧪',
    descEn: 'Periodic Table, Acids, Bases & Salts, Carbon Compounds, Chemical Reactions',
    descHi: 'आवर्त सारणी, अम्ल, क्षार एवं लवण, कार्बन यौगिक, रासायनिक अभिक्रियाएँ',
    tag: '4 Sets · 79 Questions'
  },
  {
    key: 'physics',
    subject: 'General Science: Physics',
    nameEn: 'General Science: Physics',
    nameHi: 'भौतिक विज्ञान (Physics)',
    icon: '⚡',
    descEn: 'Optics, Mechanics, Electricity, Magnetism, Sound, Heat & Modern Physics',
    descHi: 'प्रकाशिकी, यांत्रिकी, विद्युत, चुंबकत्व, ध्वनि, ऊष्मा एवं आधुनिक भौतिकी',
    tag: '2 Sets · 37 Questions'
  },
  {
    key: 'math',
    subject: 'Elementary Mathematics',
    nameEn: 'Elementary Mathematics',
    nameHi: 'प्रारंभिक गणित (Mathematics)',
    icon: '📐',
    descEn: 'Number System, Percentage, Profit & Loss, SI/CI, Algebra, Geometry, Mensuration',
    descHi: 'संख्या पद्धति, प्रतिशत, लाभ-हानि, साधारण/चक्रवृद्धि ब्याज, बीजगणित, क्षेत्रमिति',
    tag: '6 Sets · 131 Questions'
  },
  {
    key: 'reasoning',
    subject: 'Mental Ability & Reasoning',
    nameEn: 'Mental Ability & Reasoning',
    nameHi: 'तर्कशक्ति (Mental Ability & Reasoning)',
    icon: '🧠',
    descEn: 'Coding-Decoding, Series, Syllogism, Blood Relations, Analogy & Puzzle Solving',
    descHi: 'कोडिंग-डिकोडिंग, श्रेणी, न्यायवाक्य, रक्त संबंध, सादृश्यता एवं पहेली परीक्षण',
    tag: '2 Sets · 25 Questions'
  },
  {
    key: 'history',
    subject: 'Indian National Movement & History',
    nameEn: 'Indian National Movement & History',
    nameHi: 'भारतीय राष्ट्रीय आंदोलन एवं इतिहास',
    icon: '🏛️',
    descEn: '1857 Revolt, Freedom Struggle, Champaran Satyagraha, Quit India & Ancient/Medieval Bihar',
    descHi: '1857 की क्रांति, स्वतंत्रता संग्राम, चंपारण सत्याग्रह, भारत छोड़ो आंदोलन एवं बिहार का इतिहास',
    tag: '3 Sets · 70 Questions'
  },
  {
    key: 'geography',
    subject: 'Geography & Environment',
    nameEn: 'Geography & Environment',
    nameHi: 'भूगोल एवं पर्यावरण (Geography & Environment)',
    icon: '🌍',
    descEn: 'Physical Geography, Rivers of Bihar & India, Climate, Soil, Agriculture, Ecology',
    descHi: 'भारत व बिहार की नदियाँ, जलवायु, मिट्टी, कृषि, खनिज, वन एवं पारिस्थितिकी',
    tag: '2 Sets · 46 Questions'
  },
  {
    key: 'polity',
    subject: 'Indian Polity & Economy',
    nameEn: 'Indian Polity & Economy',
    nameHi: 'भारतीय संविधान एवं अर्थव्यवस्था',
    icon: '⚖️',
    descEn: 'Preamble, Fundamental Rights, Parliament, Panchayati Raj, Bihar Budget & Economic Survey',
    descHi: 'प्रस्तावना, मौलिक अधिकार, संसद, पंचायती राज व्यवस्था, बिहार बजट व आर्थिक सर्वेक्षण',
    tag: '2 Sets · 42 Questions'
  },
  {
    key: 'bihar',
    subject: 'Bihar Special & Current Affairs',
    nameEn: 'Bihar Special & Current Affairs',
    nameHi: 'बिहार विशेष एवं समसामयिकी',
    icon: '📍',
    descEn: 'Bihar Census 2011, State Schemes, National & International Current Affairs, Awards',
    descHi: 'बिहार जनगणना 2011, राजकीय योजनाएँ, राष्ट्रीय व अंतर्राष्ट्रीय करंट अफेयर्स, पुरस्कार',
    tag: '2 Sets · 28 Questions'
  },
  {
    key: 'mock',
    subject: 'Full 40Q Mock Papers',
    nameEn: 'Full 40Q Mock Papers (All Subjects Mixed)',
    nameHi: 'संपूर्ण 40-प्रश्नीय फुल मॉक टेस्ट (मिश्रित)',
    icon: '📝',
    descEn: 'Exact BPSC Exam Pattern: 14 Full Mock Tests of 40 Questions each simulating the real test',
    descHi: 'हूबहू BPSC TRE 4.0 परीक्षा प्रारूप: प्रत्येक सेट में सभी विषयों से 40 प्रामाणिक प्रश्न (14 सेट)',
    tag: '14 Full Sets · 560 Questions'
  }
]

export const PART3_SUBJECT_CONFIG = [
  {
    key: 'computer-science',
    subject: 'Computer Science',
    nameEn: 'Computer Science & Information Technology',
    nameHi: 'कंप्यूटर साइंस (PGT & TGT)',
    icon: '💻',
    descEn: 'Computer Architecture, C++/OOP, Data Structures, DBMS, Networking, Boolean Algebra & Python',
    descHi: 'कंप्यूटर संगठन, C++/OOP, डेटा संरचनाएं, DBMS, नेटवर्किंग, बूलियन बीजगणित एवं पायथन प्रोग्रामिंग',
    tag: '8 Sets · 240 Qs · PGT & TGT'
  },
  {
    key: 'science',
    subject: 'Science',
    nameEn: 'General Science (TGT Class 9-10)',
    nameHi: 'सामान्य विज्ञान (TGT वर्ग 9-10)',
    icon: '🔬',
    descEn: 'Physics (Optics, Mechanics, Sound), Chemistry (Acids, Metals, Reactions) & Biology (Physiology, Cell Biology)',
    descHi: 'भौतिक विज्ञान (प्रकाश, यांत्रिकी, ध्वनि), रसायन विज्ञान (अम्ल, धातु, रासायनिक समीकरण) एवं जीव विज्ञान (मानव शरीर क्रिया)',
    tag: '4 Sets · 105 Qs · TGT Class 9-10'
  },
  {
    key: 'hindi-literature',
    subject: 'Hindi Literature',
    nameEn: 'Hindi Language & Literature (हिन्दी साहित्य)',
    nameHi: 'हिन्दी भाषा एवं साहित्य',
    icon: '📖',
    descEn: 'इतिहास-लेखन, आदिकाल, भक्तिकाल, रीतिकाल, आधुनिक काल, गद्य विधाएँ, व्याकरण एवं काव्यशास्त्र',
    descHi: 'इतिहास-लेखन, आदिकाल, भक्तिकाल, रीतिकाल, आधुनिक काल, गद्य विधाएँ, व्याकरण एवं काव्यशास्त्र',
    tag: '4 Sets · 105 Qs · TGT / PGT Specialization'
  },
  {
    key: 'english-literature',
    subject: 'English Literature',
    nameEn: 'English Language & Literature',
    nameHi: 'अंग्रेजी भाषा एवं साहित्य',
    icon: '📚',
    descEn: 'Chaucer, Elizabethan & Jacobean, Romantic & Victorian Eras, Modern Poetry, Drama & Literary Criticism',
    descHi: 'चौसर काल, एलिजाबेथन युग, रोमांटिक एवं विक्टोरियन काल, आधुनिक कविता, नाटक एवं साहित्यिक समीक्षा',
    tag: '4 Sets · 105 Qs · TGT / PGT Specialization'
  },
  {
    key: 'sanskrit',
    subject: 'Sanskrit',
    nameEn: 'Sanskrit Language & Literature (संस्कृत साहित्य)',
    nameHi: 'संस्कृत भाषा एवं साहित्य',
    icon: '🕉️',
    descEn: 'माहेश्वर सूत्राणि, प्रत्याहार, पाणिनीय व्याकरण, वैदिक साहित्य, सूक्त, संस्कृत नाटक एवं रससिद्धान्त',
    descHi: 'माहेश्वर सूत्राणि, प्रत्याहार, पाणिनीय व्याकरण, वैदिक साहित्य, सूक्त, संस्कृत नाटक एवं रससिद्धान्त',
    tag: '4 Sets · 105 Qs · TGT / PGT Specialization'
  }
]

function AppHome({
  lang,
  setRoute,
  initial,
  initialSubject
}: {
  lang: Lang
  setRoute: (s: string) => void
  initial: string | null
  initialSubject?: string | null
}) {
  const t = copy[lang]
  const [category, setCategory] = useState<string>(initial || '')
  const [selectedQualifyingSubject, setSelectedQualifyingSubject] = useState<'English Language' | 'General Hindi' | null>(() => {
    if (initialSubject === 'english') return 'English Language'
    if (initialSubject === 'hindi') return 'General Hindi'
    return null
  })
  const [selectedGkGsSubject, setSelectedGkGsSubject] = useState<string | null>(() => {
    if (initial === 'gk_gs' && initialSubject) {
      const match = GKGS_SUBJECT_CONFIG.find(c => c.key === initialSubject)
      if (match) return match.subject
    }
    return null
  })
  const [selectedPart3Subject, setSelectedPart3Subject] = useState<string | null>(() => {
    if (initial === 'subject' && initialSubject) {
      const match = PART3_SUBJECT_CONFIG.find(c => c.key === initialSubject)
      if (match) return match.subject
    }
    return null
  })
  const [selectedSet, setSelectedSet] = useState<SetMeta | null>(null)
  const [freeMode, setFreeMode] = useState<boolean>(() => prefs.get('free_mode_unlock_all', false))

  useEffect(() => {
    if (initial !== null) {
      setCategory(initial)
      setSelectedSet(null)
    }
    if (initial === 'qualifying') {
      if (initialSubject === 'english') {
        setSelectedQualifyingSubject('English Language')
      } else if (initialSubject === 'hindi') {
        setSelectedQualifyingSubject('General Hindi')
      } else {
        setSelectedQualifyingSubject(null)
      }
      setSelectedGkGsSubject(null)
      setSelectedPart3Subject(null)
    } else if (initial === 'gk_gs') {
      if (initialSubject) {
        const match = GKGS_SUBJECT_CONFIG.find(c => c.key === initialSubject)
        setSelectedGkGsSubject(match ? match.subject : null)
      } else {
        setSelectedGkGsSubject(null)
      }
      setSelectedQualifyingSubject(null)
      setSelectedPart3Subject(null)
    } else if (initial === 'subject') {
      if (initialSubject) {
        const match = PART3_SUBJECT_CONFIG.find(c => c.key === initialSubject)
        setSelectedPart3Subject(match ? match.subject : null)
      } else {
        setSelectedPart3Subject(null)
      }
      setSelectedQualifyingSubject(null)
      setSelectedGkGsSubject(null)
    } else {
      setSelectedQualifyingSubject(null)
      setSelectedGkGsSubject(null)
      setSelectedPart3Subject(null)
    }
  }, [initial, initialSubject])

  const activeSection = SECTIONS.find(x => x.id === category)
  const availableSets = useMemo(() => {
    if (!category) return SETS_CATALOG
    if (category === 'qualifying') {
      if (!selectedQualifyingSubject) return []
      return SETS_CATALOG.filter(s => s.section === 'qualifying' && s.subject === selectedQualifyingSubject)
    }
    if (category === 'gk_gs') {
      if (!selectedGkGsSubject) return []
      return SETS_CATALOG.filter(s => s.section === 'gk_gs' && s.subject === selectedGkGsSubject)
    }
    if (category === 'subject') {
      if (!selectedPart3Subject) return []
      return SETS_CATALOG.filter(s => s.section === 'subject' && s.subject === selectedPart3Subject)
    }
    return SETS_CATALOG.filter(s => s.section === category)
  }, [category, selectedQualifyingSubject, selectedGkGsSubject, selectedPart3Subject])

  return (
    <main className="app-shell">
      <aside className="side">
        <p className="side-label">EXAM SECTIONS</p>
        <button
          className={!category ? 'side-active' : ''}
          onClick={() => {
            setCategory('')
            setSelectedQualifyingSubject(null)
            setSelectedGkGsSubject(null)
            setSelectedPart3Subject(null)
            setSelectedSet(null)
            location.hash = '#/app'
          }}
        >
          <Icon name="book" />
          All Sections
        </button>
        {SECTIONS.map(sec => (
          <button
            key={sec.id}
            className={category === sec.id ? 'side-active' : ''}
            onClick={() => {
              setCategory(sec.id)
              if (sec.id === 'qualifying') {
                setSelectedQualifyingSubject(null)
              }
              if (sec.id === 'gk_gs') {
                setSelectedGkGsSubject(null)
              }
              if (sec.id === 'subject') {
                setSelectedPart3Subject(null)
              }
              setSelectedSet(null)
              location.hash = `#/app?category=${sec.id}`
            }}
          >
            <Icon name="book" />
            {sec.name.split(' ')[0]} {sec.name.split(' ')[1]}
          </button>
        ))}
        <div style={{ margin: '18px 0', borderTop: '1px solid #e4e8eb' }} />
        <p className="side-label">PERFORMANCE</p>
        <button onClick={() => setRoute('/app/analysis')}>
          <Icon name="chart" />
          Analysis
        </button>
        <button onClick={() => setRoute('/app/discussions')}>
          <Icon name="book" />
          Discussions
        </button>
        <div className="guest">
          <b>Client-Side Mode Active</b>
          <span>Your question attempts, timer, and scores are stored safely on your device.</span>
        </div>
      </aside>

      <section className="app-content">
        <p className="eyebrow">BPSC TRE 4.0 · PRACTICE SETUP</p>
        <h1>
          {!category
            ? t.choose
            : category === 'qualifying' && !selectedQualifyingSubject
            ? (lang === 'hi' ? 'अर्हता परीक्षा: भाषा विषय का चयन करें' : 'Part-I Qualifying: Select Language Subject')
            : category === 'qualifying' && selectedQualifyingSubject
            ? (selectedQualifyingSubject === 'English Language' ? 'Part-I General English Sets (100% English)' : 'भाग-I सामान्य हिन्दी अभ्यास सेट (100% हिन्दी)')
            : category === 'gk_gs' && !selectedGkGsSubject
            ? (lang === 'hi' ? 'भाग-2 सामान्य अध्ययन: विषय का चयन करें' : 'Part-II General Studies: Select Subject Track')
            : category === 'gk_gs' && selectedGkGsSubject
            ? `${selectedGkGsSubject} (${SETS_CATALOG.filter(s => s.section === 'gk_gs' && s.subject === selectedGkGsSubject).length} Sets)`
            : category === 'subject' && !selectedPart3Subject
            ? (lang === 'hi' ? 'भाग-3 मुख्य विषय: विषय का चयन करें' : 'Part-III Subject Practice: Select Subject Track')
            : category === 'subject' && selectedPart3Subject
            ? `${selectedPart3Subject} (${SETS_CATALOG.filter(s => s.section === 'subject' && s.subject === selectedPart3Subject).length} Sets)`
            : !selectedSet
            ? activeSection ? (lang === 'hi' ? activeSection.hi : activeSection.name) : t.chooseSub
            : selectedSet.title}
        </h1>

        {/* 1. Category Selector */}
        {!category && (
          <div className="category-grid compact">
            {SECTIONS.map((sec, i) => {
              const count = SETS_CATALOG.filter(s => s.section === sec.id).length
              const totalQ = SETS_CATALOG.filter(s => s.section === sec.id).reduce((sum, s) => sum + s.question_count, 0)
              return (
                <button
                  className="category"
                  onClick={() => {
                    setCategory(sec.id)
                    if (sec.id === 'qualifying') {
                      setSelectedQualifyingSubject(null)
                    }
                    if (sec.id === 'gk_gs') {
                      setSelectedGkGsSubject(null)
                    }
                    if (sec.id === 'subject') {
                      setSelectedPart3Subject(null)
                    }
                    setSelectedSet(null)
                    location.hash = `#/app?category=${sec.id}`
                  }}
                  key={sec.id}
                >
                  <span className={'cat-icon c' + (i % 4)}>{sec.icon}</span>
                  <b>{lang === 'hi' ? sec.hi : sec.name}</b>
                  <small>{sec.desc}</small>
                  <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 600, color: '#147d75' }}>
                    {count} Sets ({totalQ} Questions)
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {/* 2. Qualifying Subject Chooser (English vs Hindi) */}
        {category === 'qualifying' && !selectedQualifyingSubject && !selectedSet && (
          <div className="qualifying-subject-chooser">
            <div style={{ marginBottom: '16px' }}>
              <button
                className="back"
                onClick={() => {
                  setCategory('')
                  location.hash = '#/app'
                }}
              >
                ← {lang === 'hi' ? 'सभी परीक्षा खंड देखें' : 'Change exam section'}
              </button>
            </div>

            <div className="qualifying-banner-hero">
              <span className="source-tag" style={{ background: '#0e5f59', color: '#fff', fontSize: '11px', fontWeight: 700 }}>
                PART-I LANGUAGE · 30 MARKS MANDATORY QUALIFYING
              </span>
              <h2>Select Your Language Subject (अपनी भाषा चुनें)</h2>
              <p>
                BPSC TRE Part-I Language Qualifying paper is compulsory for all candidates across PRT, Middle School (6-8), TGT (9-10) and PGT (11-12).
                Candidates must achieve at least 30% marks to qualify. Choose your medium below to open the set-wise test series:
              </p>
            </div>

            <div className="qualifying-cards-grid">
              <div
                className="qualifying-choice-card"
                onClick={() => {
                  setSelectedQualifyingSubject('English Language')
                  location.hash = '#/app?category=qualifying&subject=english'
                }}
              >
                <div>
                  <span className="qualifying-card-tag en-tag">100% ENGLISH MEDIUM</span>
                  <div className="qualifying-card-icon">🇬🇧</div>
                  <h3>General English</h3>
                  <p>
                    Part-A Compulsory English: Grammar, Tenses, Prepositions, Spotting Errors, Vocabulary, Synonyms & Antonyms.
                  </p>
                  <div className="qualifying-card-features">
                    <span>✓ 100% English Paper & Solutions (No bilingual distraction)</span>
                    <span>✓ 3 Set-Wise Practice Papers (44 Questions)</span>
                    <span>✓ 80% Mastery Unlock Progression Rule</span>
                  </div>
                </div>
                <button className="qualifying-select-btn">
                  Choose English Language Sets →
                </button>
              </div>

              <div
                className="qualifying-choice-card"
                onClick={() => {
                  setSelectedQualifyingSubject('General Hindi')
                  location.hash = '#/app?category=qualifying&subject=hindi'
                }}
              >
                <div>
                  <span className="qualifying-card-tag hi-tag">100% शुद्ध हिन्दी माध्यम</span>
                  <div className="qualifying-card-icon">🇮🇳</div>
                  <h3>सामान्य हिन्दी (General Hindi)</h3>
                  <p>
                    भाग-B अनिवार्य हिन्दी: संधि, समास, उपसर्ग-प्रत्यय, वर्तनी शुद्धि, मुहावरे, पर्यायवाची, विलोम एवं अपठित गद्यांश।
                  </p>
                  <div className="qualifying-card-features">
                    <span>✓ 100% शुद्ध हिन्दी में प्रश्नोत्तरी, आधिकारिक उत्तर एवं व्याख्या</span>
                    <span>✓ 3 अभ्यास सेट (74 प्रामाणिक प्रश्न)</span>
                    <span>✓ 80% मास्टरी अनलॉक प्रणाली</span>
                  </div>
                </div>
                <button className="qualifying-select-btn hi-btn">
                  सामान्य हिन्दी सेट अभ्यास शुरू करें →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2b. GK/GS Subject Chooser */}
        {category === 'gk_gs' && !selectedGkGsSubject && !selectedSet && (
          <div className="gkgs-subject-chooser">
            <div style={{ marginBottom: '16px' }}>
              <button
                className="back"
                onClick={() => {
                  setCategory('')
                  location.hash = '#/app'
                }}
              >
                ← {lang === 'hi' ? 'सभी परीक्षा खंड देखें' : 'Change exam section'}
              </button>
            </div>

            <div className="gkgs-banner-hero">
              <span className="source-tag" style={{ background: '#0e5f59', color: '#fff', fontSize: '11px', fontWeight: 700 }}>
                PART-II GENERAL STUDIES · 40 MARKS MERIT PAPER
              </span>
              <h2>{lang === 'hi' ? 'सामान्य अध्ययन विषय का चयन करें' : 'Select Your General Studies Subject Track'}</h2>
              <p>
                {lang === 'hi'
                  ? 'BPSC TRE 4.0 के भाग-2 में 40 अंकों का सामान्य अध्ययन अनिवार्य है। अपनी विषयवार तैयारी को मजबूत करने के लिए नीचे दिए गए विषयों में से किसी एक को चुनें और 80% मास्टरी अनलॉक प्रणाली के साथ सेट-वाइज अभ्यास करें:'
                  : 'BPSC TRE Part-II General Studies carries 40 marks across all teaching levels. Select a subject track below to practice authentic set-wise previous year questions with 80% mastery unlock progression:'}
              </p>
            </div>

            <div className="gkgs-cards-grid">
              {GKGS_SUBJECT_CONFIG.map(item => {
                const count = SETS_CATALOG.filter(s => s.section === 'gk_gs' && s.subject === item.subject).length
                const totalQ = SETS_CATALOG.filter(s => s.section === 'gk_gs' && s.subject === item.subject).reduce((acc, s) => acc + s.question_count, 0)
                return (
                  <div
                    key={item.key}
                    className="gkgs-choice-card"
                    onClick={() => {
                      setSelectedGkGsSubject(item.subject)
                      location.hash = `#/app?category=gk_gs&subject=${item.key}`
                    }}
                  >
                    <div>
                      <div className="gkgs-card-top">
                        <span className="gkgs-card-tag">{count} SETS · {totalQ} Qs</span>
                        <div className="gkgs-card-icon">{item.icon}</div>
                      </div>
                      <h3>{lang === 'hi' ? item.nameHi : item.nameEn}</h3>
                      <p>{lang === 'hi' ? item.descHi : item.descEn}</p>
                      <div className="gkgs-card-features">
                        <span>✓ {count} Set-Wise Tests ({totalQ} Authentic PYQs)</span>
                        <span>✓ 80% Mastery Progression Unlock Rule</span>
                        <span>✓ Bilingual (English / हिन्दी) with Detailed Solutions</span>
                      </div>
                    </div>
                    <button className="gkgs-select-btn">
                      {lang === 'hi' ? `${item.nameHi.split(' ')[0]} सेट अभ्यास शुरू करें →` : `Explore ${item.nameEn.split(':')[1]?.trim() || item.nameEn} Sets →`}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 2c. Part-III Subject Chooser */}
        {category === 'subject' && !selectedPart3Subject && !selectedSet && (
          <div className="gkgs-subject-chooser">
            <div style={{ marginBottom: '16px' }}>
              <button
                className="back"
                onClick={() => {
                  setCategory('')
                  location.hash = '#/app'
                }}
              >
                ← {lang === 'hi' ? 'सभी परीक्षा खंड देखें' : 'Change exam section'}
              </button>
            </div>

            <div className="gkgs-banner-hero" style={{ background: 'linear-gradient(135deg, #102a43 0%, #0e5f59 100%)' }}>
              <span className="source-tag" style={{ background: '#f59e0b', color: '#102a43', fontSize: '11px', fontWeight: 800 }}>
                PART-III SUBJECT PRACTICE · 80 MARKS MERIT SPECIALIZATION
              </span>
              <h2>{lang === 'hi' ? 'अपना मुख्य विषय चुनें (Choose Your Subject)' : 'Select Your Subject Specialization'}</h2>
              <p>
                {lang === 'hi'
                  ? 'BPSC TRE 4.0 भाग-3 मुख्य विषय (80 अंक) TGT (वर्ग 9-10) एवं PGT (वर्ग 11-12) के लिए अंतिम मेरिट सूची का मुख्य आधार है। अपना विषय चुनें और 80% मास्टरी अनलॉक प्रणाली के साथ सेट-वाइज अभ्यास करें:'
                  : 'BPSC TRE Part-III Subject Specialization carries 80 marks for TGT (Class 9-10) and PGT (Class 11-12). Choose your subject specialization to start set-wise practice with the 80% mastery unlock rule:'}
              </p>
            </div>

            <div className="gkgs-cards-grid">
              {PART3_SUBJECT_CONFIG.map(item => {
                const count = SETS_CATALOG.filter(s => s.section === 'subject' && s.subject === item.subject).length
                const totalQ = SETS_CATALOG.filter(s => s.section === 'subject' && s.subject === item.subject).reduce((acc, s) => acc + s.question_count, 0)
                return (
                  <div
                    key={item.key}
                    className="gkgs-choice-card"
                    onClick={() => {
                      setSelectedPart3Subject(item.subject)
                      location.hash = `#/app?category=subject&subject=${item.key}`
                    }}
                  >
                    <div>
                      <div className="gkgs-card-top">
                        <span className="gkgs-card-tag">{count} SETS · {totalQ} Qs</span>
                        <div className="gkgs-card-icon">{item.icon}</div>
                      </div>
                      <h3>{lang === 'hi' ? item.nameHi : item.nameEn}</h3>
                      <p>{lang === 'hi' ? item.descHi : item.descEn}</p>
                      <div className="gkgs-card-features">
                        <span>✓ {count} Set-Wise Tests ({totalQ} Authentic PYQs)</span>
                        <span>✓ 80% Mastery Progression Unlock Rule</span>
                        <span>✓ Bilingual (English / हिन्दी) with Detailed Solutions</span>
                      </div>
                    </div>
                    <button className="gkgs-select-btn">
                      {lang === 'hi' ? `${item.nameHi.split(' ')[0]} सेट अभ्यास शुरू करें →` : `Explore ${item.nameEn.split('(')[0]?.trim()} Sets →`}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 3. Sets List in Selected Category with 80% Progression */}
        {((category && category !== 'qualifying' && category !== 'gk_gs' && category !== 'subject') ||
          (category === 'qualifying' && selectedQualifyingSubject) ||
          (category === 'gk_gs' && selectedGkGsSubject) ||
          (category === 'subject' && selectedPart3Subject)) &&
          !selectedSet && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
              {category === 'qualifying' ? (
                <button
                  className="back"
                  onClick={() => {
                    setSelectedQualifyingSubject(null)
                    location.hash = '#/app?category=qualifying'
                  }}
                >
                  ← {lang === 'hi' ? 'भाषा विषय बदलें (Change Language Subject)' : 'Change Language Subject'}
                </button>
              ) : category === 'gk_gs' ? (
                <button
                  className="back"
                  onClick={() => {
                    setSelectedGkGsSubject(null)
                    location.hash = '#/app?category=gk_gs'
                  }}
                >
                  ← {lang === 'hi' ? 'सामान्य अध्ययन विषय बदलें (Change GK/GS Subject)' : 'Change GK/GS Subject'}
                </button>
              ) : category === 'subject' ? (
                <button
                  className="back"
                  onClick={() => {
                    setSelectedPart3Subject(null)
                    location.hash = '#/app?category=subject'
                  }}
                >
                  ← {lang === 'hi' ? 'मुख्य विषय बदलें (Change Subject)' : 'Change Subject Specialization'}
                </button>
              ) : (
                <button
                  className="back"
                  onClick={() => {
                    setCategory('')
                    location.hash = '#/app'
                  }}
                >
                  ← {lang === 'hi' ? 'सभी परीक्षा खंड देखें' : 'Change exam section'}
                </button>
              )}
              <button
                className="progression-toggle-btn"
                onClick={() => {
                  const next = !freeMode
                  setFreeMode(next)
                  prefs.set('free_mode_unlock_all', next)
                }}
              >
                {freeMode ? '🔒 Enable 80% Mastery Unlock Rule' : '🔓 Teacher Mode: Unlock All Sets'}
              </button>
            </div>

            {/* Progression Guidance Banner */}
            <div className="progression-banner">
              <div className="progression-banner-text">
                <span style={{ fontSize: '26px' }}>🎯</span>
                <div>
                  <b>BPSC TRE 4.0 Set-Wise Progression System:</b>
                  <div style={{ fontSize: '13px', color: '#486581', marginTop: '2px' }}>
                    {freeMode
                      ? 'Teacher Mode is ON: All sets are unlocked for unrestricted evaluation.'
                      : 'Mastery Rule Active: Score 80%+ on Set 1 to unlock Set 2, 80%+ on Set 2 to unlock Set 3, etc.'}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#147d75', background: '#fff', padding: '6px 12px', border: '1px solid #cce8e2', borderRadius: '8px', whiteSpace: 'nowrap' }}>
                Mastery Target: 80%
              </div>
            </div>

            <div className="set-card-grid">
              {availableSets.map(s => {
                const unlock = checkIsSetUnlocked(s, availableSets, freeMode)
                const best = getBestScoreForSet(s.id)
                const isMastered = best && best.pct >= 80
                const isAttempted = best && best.pct < 80

                return (
                  <div
                    key={s.id}
                    className={`set-prog-card ${!unlock.isUnlocked ? 'set-card-locked' : ''} ${isMastered ? 'set-card-mastered' : ''}`}
                  >
                    <div>
                      <div className="set-card-head">
                        <span className="set-number-tag">
                          SET {unlock.subjectIndex + 1} OF {unlock.totalInSubject}
                        </span>
                        {!unlock.isUnlocked ? (
                          <span className="set-pill pill-locked">🔒 Locked</span>
                        ) : isMastered ? (
                          <span className="set-pill pill-mastered">🌟 Mastered ({best?.pct}%)</span>
                        ) : isAttempted ? (
                          <span className="set-pill pill-attempted">⚠️ Score: {best?.pct}%</span>
                        ) : (
                          <span className="set-pill pill-ready">🟢 Ready to Practice</span>
                        )}
                      </div>

                      <h3>{s.title}</h3>
                      <p>
                        {s.question_count} Authentic Questions · 5 Options (A to E) · {s.subject === 'English Language' ? '100% English Medium' : s.subject === 'General Hindi' ? '100% शुद्ध हिन्दी' : 'Bilingual (EN/हिन्दी)'} · Official Explanations
                      </p>
                    </div>

                    <div className="set-progress-box">
                      <div className="set-progress-labels">
                        <span>{best ? `Best Score: ${best.score}/${best.total} (${best.pct}%)` : 'Not yet attempted'}</span>
                        <span style={{ color: best && best.pct >= 80 ? '#16a34a' : '#ef4444' }}>
                          Target: 80%
                        </span>
                      </div>
                      <div className="set-progress-bar-wrap">
                        <div className="target-marker" title="80% Unlock Threshold" />
                        <div
                          className={`set-progress-bar-fill ${best && best.pct >= 80 ? 'fill-mastered' : 'fill-partial'}`}
                          style={{ width: `${Math.min(100, best?.pct || 0)}%` }}
                        />
                      </div>

                      {!unlock.isUnlocked ? (
                        <button
                          className="set-action-btn btn-locked"
                          disabled
                          title={`Score at least 80% in Set ${unlock.subjectIndex} (${unlock.requiredPrevSet?.title}) to unlock this set`}
                        >
                          🔒 Locked (Need 80% in Set {unlock.subjectIndex})
                        </button>
                      ) : (
                        <button
                          className={`set-action-btn ${isMastered ? 'btn-mastered' : 'btn-unlocked'}`}
                          onClick={() => {
                            prefs.set('currentSetId', s.id)
                            prefs.set('lastSubject', s.title)
                            setRoute('/app/practice')
                          }}
                        >
                          {isMastered
                            ? '↻ Practice Again (Mastered)'
                            : isAttempted
                            ? `↻ Re-attempt Set ${unlock.subjectIndex + 1} (${best?.pct}%)`
                            : `Start Set ${unlock.subjectIndex + 1} Test (${s.question_count}Q) →`}
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* 3. Ready to Practice Confirmation */}
        {selectedSet && (
          <>
            <button className="back" onClick={() => setSelectedSet(null)}>
              ← Back to {activeSection?.name || 'question sets'}
            </button>
            <div className="decision">
              <div>
                <p className="eyebrow">{selectedSet.section_name.toUpperCase()}</p>
                <h2>{selectedSet.title}</h2>
                <p>
                  Authentic BPSC Previous Year Questions with 5-Option format, bilingual toggle on each question card, and verified exam setter explanations.
                  {selectedSet.section === 'qualifying' && ' Qualifying Pass Criteria: Minimum 30% marks.'}
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <span className="source-tag">Total: {selectedSet.question_count} Questions</span>
                  <span className="source-tag">5 Options (A to E)</span>
                  <span className="source-tag">No Negative Marking</span>
                </div>
              </div>
              <div className="decision-actions">
                <button
                  className="primary"
                  onClick={() => {
                    prefs.set('currentSetId', selectedSet.id)
                    prefs.set('lastSubject', selectedSet.title)
                    setRoute('/app/practice')
                  }}
                >
                  <Icon name="book" />
                  {t.startPractice} ({selectedSet.question_count}Q)
                </button>
                <button className="secondary" onClick={() => setRoute('/app/analysis')}>
                  <Icon name="chart" />
                  {t.topicAnalysis}
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}

function Practice({ lang, setRoute }: { lang: Lang; setRoute: (s: string) => void }) {
  const t = copy[lang]
  const currentSetId = prefs.get<string>('currentSetId', SETS_CATALOG[0]?.id || '')
  const activeSet = SETS_CATALOG.find(s => s.id === currentSetId) || SETS_CATALOG[0]
  const currentQuestions: QuestionItem[] = useMemo(() => {
    return SETS_DATA[activeSet.id] || []
  }, [activeSet])

  const isEnglishOnly = activeSet.section === 'qualifying' && activeSet.subject === 'English Language'
  const isHindiOnly = activeSet.section === 'qualifying' && activeSet.subject === 'General Hindi'

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>(() => prefs.get(`draft_${activeSet.id}`, {}))
  const [flags, setFlags] = useState<number[]>(() => prefs.get(`flags_${activeSet.id}`, []))
  const [seconds, setSeconds] = useState(() => prefs.get(`elapsed_${activeSet.id}`, 0))
  const [submitted, setSubmitted] = useState(false)
  const [qLang, setQLang] = useState<'en' | 'hi'>(() => {
    if (isEnglishOnly) return 'en'
    if (isHindiOnly) return 'hi'
    return lang
  })
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    const x = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(x)
  }, [])

  useEffect(() => {
    prefs.set(`draft_${activeSet.id}`, answers)
    prefs.set(`flags_${activeSet.id}`, flags)
    prefs.set(`elapsed_${activeSet.id}`, seconds)
  }, [answers, flags, seconds, activeSet.id])

  useEffect(() => {
    if (isEnglishOnly) {
      setQLang('en')
    } else if (isHindiOnly) {
      setQLang('hi')
    } else {
      setQLang(lang)
    }
  }, [lang, isEnglishOnly, isHindiOnly])

  if (!currentQuestions || currentQuestions.length === 0) {
    return (
      <main className="static">
        <h1>No questions found for this set</h1>
        <button className="primary" onClick={() => setRoute('/app')}>
          Browse other sets
        </button>
      </main>
    )
  }

  const q = currentQuestions[index] || currentQuestions[0]
  const done = Object.keys(answers).length

  const finish = () => {
    const score = currentQuestions.filter(x => answers[x.id] === x.answer).length
    const history = prefs.get<Attempt[]>('attempts', [])
    prefs.set(
      'attempts',
      [
        {
          completedAt: new Date().toISOString(),
          subject: activeSet.title,
          setId: activeSet.id,
          score,
          total: currentQuestions.length,
          seconds,
          answers,
          flagged: flags
        },
        ...history
      ].slice(0, 30)
    )
    prefs.set(`draft_${activeSet.id}`, {})
    setSubmitted(true)
  }

  return (
    <main className="exam">
      <div className="exam-bar">
        <button className="wordmark" onClick={() => setRoute('/app')}>
          TRE Ready · {activeSet.title}
        </button>
        <div className="exam-meta">
          <span>
            <Icon name="clock" />
            {t.time}: {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
          </span>
          <span>
            {done}/{currentQuestions.length} answered
          </span>
          <button className="submit" onClick={finish}>
            {t.submit}
          </button>
        </div>
      </div>

      {submitted ? (
        <Results
          questionsList={currentQuestions}
          answers={answers}
          seconds={seconds}
          setRoute={setRoute}
          activeSet={activeSet}
          onNextSet={(next: SetMeta) => {
            prefs.set('currentSetId', next.id)
            prefs.set('lastSubject', next.title)
            setSubmitted(false)
            setIndex(0)
            setAnswers({})
            setFlags([])
            setSeconds(0)
            setShowSolution(false)
          }}
          onRetry={() => {
            setSubmitted(false)
            setIndex(0)
            setAnswers({})
            setFlags([])
            setSeconds(0)
            setShowSolution(false)
          }}
        />
      ) : (
        <div className="exam-body">
          <section className="question-area">
            <div className="question-top">
              <p>
                {t.question} {index + 1} of {currentQuestions.length}
              </p>
              <div className="q-header-actions">
                {!isEnglishOnly && !isHindiOnly && (
                  <button className="lang-toggle-btn" onClick={() => setQLang(qLang === 'en' ? 'hi' : 'en')}>
                    🌐 {qLang === 'en' ? 'हिन्दी में देखें' : 'View in English'}
                  </button>
                )}
                <button
                  className={flags.includes(q.id) ? 'flagged' : ''}
                  onClick={() => setFlags(f => (f.includes(q.id) ? f.filter(x => x !== q.id) : [...f, q.id]))}
                >
                  <Icon name="flag" />
                  {t.mark}
                </button>
              </div>
            </div>

            <div className="progress-line">
              <i style={{ width: `${((index + 1) / currentQuestions.length) * 100}%` }} />
            </div>

            {q.source && <span className="source-tag">📄 Source: {q.source}</span>}

            <h1>{qLang === 'hi' ? q.hi : q.en}</h1>

            <div className="options">
              {q.options.map((o, i) => (
                <button
                  key={o + i}
                  className={answers[q.id] === i ? 'selected' : ''}
                  onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}
                >
                  <b>{String.fromCharCode(65 + i)}</b>
                  <span>{getOptionText(q, i, qLang)}</span>
                </button>
              ))}
            </div>

            {/* In-Question Instant Solution & Exam Setter Tricks */}
            <div className="practice-action-row">
              <button
                type="button"
                className="toggle-solution-btn"
                onClick={() => setShowSolution(s => !s)}
              >
                {showSolution
                  ? (qLang === 'hi' ? '🙈 समाधान छिपाएँ' : '🙈 Hide Solution')
                  : (qLang === 'hi' ? '💡 आधिकारिक समाधान एवं ट्रिक्स देखें' : '💡 View Solution & Exam Setter Tips')}
              </button>
            </div>

            {showSolution && (
              <div className="practice-solution-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div className="sol-badge" style={{ margin: 0 }}>
                    {qLang === 'hi' ? '✓ आधिकारिक उत्तर एवं विस्तृत समाधान' : '✓ Official Answer & Exam Setter Insights'}
                  </div>
                  {!isEnglishOnly && !isHindiOnly && (
                    <button
                      type="button"
                      className="lang-toggle-btn"
                      style={{ padding: '3px 10px', fontSize: '12px' }}
                      onClick={() => setQLang(qLang === 'en' ? 'hi' : 'en')}
                    >
                      🌐 {qLang === 'en' ? 'हिन्दी में समाधान देखें' : 'View Solution in English'}
                    </button>
                  )}
                </div>
                <p className="sol-answer">
                  <b>{qLang === 'hi' ? 'आधिकारिक उत्तर:' : 'Official Answer:'}</b>{' '}
                  <span className="ans-pill">
                    ({q.answer_letter}) {getAnswerText(q, qLang)}
                  </span>
                </p>
                <div className="sol-explanation">
                  <b>{qLang === 'hi' ? 'आधिकारिक विस्तृत व्याख्या:' : 'Official Explanation:'}</b>
                  <p>{qLang === 'hi' ? (q.explanation_hi || q.explanation) : q.explanation}</p>
                </div>
                {(q.tip || q.tip_hi) && (
                  <div className="tip-box">
                    <b>{qLang === 'hi' ? '💡 परीक्षा-संकेत एवं ट्रिक्स:' : "💡 Exam Setter's Tip & Quick Trick:"}</b>
                    {qLang === 'hi' ? (q.tip_hi || q.tip) : q.tip}
                  </div>
                )}
              </div>
            )}

            <div className="question-nav">
              <button className="secondary" disabled={!index} onClick={() => { setIndex(index - 1); setShowSolution(false) }}>
                ← {t.previous}
              </button>
              {index === currentQuestions.length - 1 ? (
                <button className="primary" onClick={finish}>
                  {t.submit}
                </button>
              ) : (
                <button className="primary" onClick={() => { setIndex(index + 1); setShowSolution(false) }}>
                  {t.next} →
                </button>
              )}
            </div>
          </section>

          <aside className="palette">
            <p>QUESTION PALETTE ({currentQuestions.length} QUESTIONS)</p>
            <div>
              {currentQuestions.map((x, i) => (
                <button
                  key={x.id}
                  className={`${i === index ? 'current' : ''} ${answers[x.id] !== undefined ? 'answered' : ''} ${
                    flags.includes(x.id) ? 'review' : ''
                  }`}
                  onClick={() => setIndex(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <small>Gold = review · Teal = answered</small>
          </aside>
        </div>
      )}
    </main>
  )
}

function Results({
  questionsList,
  answers,
  seconds,
  setRoute,
  activeSet,
  onNextSet,
  onRetry
}: {
  questionsList: QuestionItem[]
  answers: Record<number, number>
  seconds: number
  setRoute: (s: string) => void
  activeSet: SetMeta
  onNextSet?: (next: SetMeta) => void
  onRetry?: () => void
}) {
  const isEnglishOnly = activeSet.section === 'qualifying' && activeSet.subject === 'English Language'
  const isHindiOnly = activeSet.section === 'qualifying' && activeSet.subject === 'General Hindi'
  const [resLang, setResLang] = useState<'en' | 'hi'>(() => {
    if (isEnglishOnly) return 'en'
    if (isHindiOnly) return 'hi'
    return 'hi' // Default bilingual sets to Hindi
  })

  const score = questionsList.filter(q => answers[q.id] === q.answer).length
  const pct = Math.round((score / questionsList.length) * 100)
  const isQualifying = activeSet.section === 'qualifying'
  const isPassed = pct >= 30
  const isMastered = pct >= 80

  // Find next set in the same subject
  const subjectSets = SETS_CATALOG.filter(s => s.subject === activeSet.subject)
  const currentIdx = subjectSets.findIndex(s => s.id === activeSet.id)
  const nextSet = currentIdx >= 0 && currentIdx < subjectSets.length - 1 ? subjectSets[currentIdx + 1] : null

  return (
    <section className="results">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
        <p className="eyebrow" style={{ margin: 0 }}>
          {resLang === 'hi' ? 'सत्र समाप्त · BPSC TRE 4.0' : 'SESSION COMPLETE · BPSC TRE 4.0'}
        </p>
        {!isEnglishOnly && !isHindiOnly && (
          <button className="lang-toggle-btn" onClick={() => setResLang(r => r === 'en' ? 'hi' : 'en')}>
            🌐 {resLang === 'en' ? 'हिन्दी में समाधान देखें' : 'View Solutions in English'}
          </button>
        )}
      </div>

      <h1>
        {resLang === 'hi'
          ? `${questionsList.length} में से ${score} सही (${pct}%)`
          : `${score} of ${questionsList.length} correct (${pct}%)`}
      </h1>
      <p>
        {resLang === 'hi'
          ? `कुल समय: ${Math.ceil(seconds / 60)} मिनट। आधिकारिक उत्तर कुंजी और विस्तृत समाधान नीचे देखें।`
          : `Time spent: ${Math.ceil(seconds / 60)} minutes. Review the official answer keys and setter insights below.`}
      </p>

      {/* 80% Mastery Celebration & Next Set Unlock Banner */}
      {isMastered ? (
        <div className="unlock-celebration-banner">
          <div>
            <h3>
              {resLang === 'hi'
                ? `🎉 80% मास्टरी पूर्ण! ${nextSet ? `सेट ${currentIdx + 2} अनलॉक हो गया है!` : 'सभी सेट पूर्ण!'}`
                : `🎉 80% MASTERY ACHIEVED! ${nextSet ? `Set ${currentIdx + 2} is Now Unlocked!` : 'All Sets Mastered!'}`}
            </h3>
            <p>
              {resLang === 'hi' ? (
                <>
                  शानदार स्कोर: <b>{pct}% ({score}/{questionsList.length})</b>!
                  {nextSet
                    ? ` आपने 80% मास्टरी लक्ष्य प्राप्त कर लिया है और "${nextSet.title}" अनलॉक कर दिया है। अपनी तैयारी जारी रखें!`
                    : ` आपने ${activeSet.subject} के सभी अभ्यास सेट सफलतापूर्वक मास्टर कर लिए हैं!`}
                </>
              ) : (
                <>
                  Outstanding score: <b>{pct}% ({score}/{questionsList.length})</b>!
                  {nextSet
                    ? ` You achieved the 80% mastery threshold and unlocked "${nextSet.title}". Continue your preparation!`
                    : ` You have mastered all practice sets in ${activeSet.subject}!`}
                </>
              )}
            </p>
          </div>
          {nextSet && onNextSet && (
            <button onClick={() => onNextSet(nextSet)}>
              {resLang === 'hi' ? `सेट ${currentIdx + 2} अभी शुरू करें →` : `Start Set ${currentIdx + 2} Now →`}
            </button>
          )}
        </div>
      ) : (
        <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '12px', padding: '16px 20px', margin: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <b style={{ color: '#92400e', fontSize: '15px' }}>
              {resLang === 'hi' ? `🎯 अगला सेट अनलॉक लक्ष्य: 80% (आपका स्कोर: ${pct}%)` : `🎯 Next Set Unlock Target: 80% (Your score: ${pct}%)`}
            </b>
            <div style={{ fontSize: '13px', color: '#b45309', marginTop: '3px' }}>
              {resLang === 'hi'
                ? `अगला सेट अनलॉक करने के लिए कम से कम 80% (${Math.ceil(questionsList.length * 0.8)}/${questionsList.length} अंक) आवश्यक हैं। नीचे दिए गए समाधान व व्याख्या का अध्ययन करें और पुनः प्रयास करें!`
                : `To unlock ${nextSet ? `Set ${currentIdx + 2} (${nextSet.title})` : 'the next set'}, you need at least 80% (${Math.ceil(questionsList.length * 0.8)}/${questionsList.length} marks). Review the explanations below and re-attempt!`}
            </div>
          </div>
          {onRetry && (
            <button
              style={{ background: '#d97706', color: '#fff', border: 0, padding: '10px 18px', borderRadius: '8px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' }}
              onClick={onRetry}
            >
              {resLang === 'hi' ? '↻ इस सेट का पुनः प्रयास करें' : '↻ Re-attempt This Set'}
            </button>
          )}
        </div>
      )}

      {isQualifying && (
        <div className={`qualify-banner ${isPassed ? 'qualify-pass' : 'qualify-fail'}`}>
          <div>
            <h2>{isPassed ? '🎉 QUALIFIED (अर्हता परीक्षा उत्तीर्ण)' : '⚠️ NOT QUALIFIED (अर्हता प्राप्त नहीं)'}</h2>
            <p>
              {isPassed
                ? (resLang === 'hi' ? 'बधाई हो! आपने BPSC भाग-1 भाषा अर्हता के लिए आवश्यक न्यूनतम 30% अंक प्राप्त कर लिए हैं।' : 'Congratulations! You met the mandatory 30% qualifying mark required by BPSC for Part-I Language.')
                : (resLang === 'hi' ? 'BPSC के अनुसार भाग-1 में अर्हता प्राप्त करने के लिए न्यूनतम 30% अंक अनिवार्य हैं। कृपया पुनः प्रयास करें।' : 'BPSC requires minimum 30% marks to qualify Part-I. Please re-attempt this paper.')}
            </p>
          </div>
          <b>
            {score}/{questionsList.length} Marks
          </b>
        </div>
      )}

      <div className="result-grid">
        {questionsList.map(q => {
          const isCorrect = answers[q.id] === q.answer
          return (
            <article key={q.id} className={isCorrect ? 'correct' : 'incorrect'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <span>
                  {isCorrect ? (resLang === 'hi' ? '✓ सही उत्तर' : '✓ Correct') : (resLang === 'hi' ? '✗ गलत उत्तर / समीक्षा आवश्यक' : '✗ Incorrect / Review Needed')} · {resLang === 'hi' ? 'प्रश्न' : 'Question'} {q.id}
                </span>
                {!isEnglishOnly && !isHindiOnly && (
                  <button
                    type="button"
                    className="lang-toggle-btn"
                    style={{ padding: '2px 8px', fontSize: '11px' }}
                    onClick={() => setResLang(r => r === 'en' ? 'hi' : 'en')}
                  >
                    🌐 {resLang === 'en' ? 'हिन्दी समाधान' : 'English Solution'}
                  </button>
                )}
              </div>
              {q.source && <span className="source-tag">Source: {q.source}</span>}
              <h3>
                {resLang === 'hi' ? q.hi : q.en}
                {q.hi !== q.en && (
                  <span style={{ display: 'block', fontSize: '14px', color: '#667085', marginTop: '4px' }}>
                    {resLang === 'hi' ? q.en : q.hi}
                  </span>
                )}
              </h3>

              <p>
                <b>{resLang === 'hi' ? 'आपका उत्तर:' : 'Your choice:'}</b>{' '}
                {answers[q.id] !== undefined
                  ? `(${String.fromCharCode(65 + answers[q.id])}) ${getOptionText(q, answers[q.id], resLang)}`
                  : (resLang === 'hi' ? 'उत्तर नहीं दिया' : 'Not attempted')}
              </p>
              <p style={{ color: '#147d75' }}>
                <b>{resLang === 'hi' ? 'आधिकारिक उत्तर:' : 'Official Answer:'}</b> ({q.answer_letter}){' '}
                {getAnswerText(q, resLang)}
              </p>

              <p>
                <b>{resLang === 'hi' ? 'आधिकारिक विस्तृत व्याख्या / समाधान:' : 'Official Explanation:'}</b>{' '}
                {resLang === 'hi' ? (q.explanation_hi || q.explanation) : q.explanation}
              </p>

              {(q.tip || q.tip_hi) && (
                <div className="tip-box">
                  <b>{resLang === 'hi' ? '💡 परीक्षा-संकेत एवं ट्रिक्स:' : "💡 Exam Setter's Tip / Trick:"}</b>
                  {resLang === 'hi' ? (q.tip_hi || q.tip) : q.tip}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
        {nextSet && isMastered && onNextSet && (
          <button className="primary" onClick={() => onNextSet(nextSet)}>
            {resLang === 'hi' ? `अगले सेट पर जाएँ (${nextSet.title}) →` : `Proceed to Set ${currentIdx + 2} (${nextSet.title}) →`}
          </button>
        )}
        {onRetry && (
          <button className="secondary" onClick={onRetry}>
            {resLang === 'hi' ? '↻ इस सेट का पुनः प्रयास करें' : '↻ Re-attempt This Set'}
          </button>
        )}
        <button
          className="secondary"
          onClick={() => {
            if (activeSet.section === 'qualifying') {
              const subKey = activeSet.subject === 'English Language' ? 'english' : 'hindi'
              setRoute(`/app?category=qualifying&subject=${subKey}`)
            } else if (activeSet.section === 'gk_gs') {
              const match = GKGS_SUBJECT_CONFIG.find(c => c.subject === activeSet.subject)
              setRoute(`/app?category=gk_gs${match ? `&subject=${match.key}` : ''}`)
            } else if (activeSet.section === 'subject') {
              const match = PART3_SUBJECT_CONFIG.find(c => c.subject === activeSet.subject)
              setRoute(`/app?category=subject${match ? `&subject=${match.key}` : ''}`)
            } else {
              setRoute(`/app?category=${activeSet.section}`)
            }
          }}
        >
          {resLang === 'hi' ? '← इस विषय के सभी सेट देखें' : '← Back to Subject Sets'}
        </button>
        <button className="secondary" onClick={() => setRoute('/app/analysis')}>
          {resLang === 'hi' ? 'विषयवार विश्लेषण देखें' : 'See topic analysis'}
        </button>
      </div>
    </section>
  )
}

function Analysis({ setRoute }: { setRoute: (s: string) => void }) {
  const attempts = prefs.get<Attempt[]>('attempts', [])
  const latest = attempts[0]
  const accuracy = latest ? Math.round((latest.score / latest.total) * 100) : 0

  return (
    <main className="dashboard">
      <div>
        <p className="eyebrow">YOUR REVISION ANALYSIS</p>
        <h1>Know what to revise next.</h1>
        <p className="lead">Signals and metrics from completed tests on this device.</p>
      </div>

      <div className="metrics">
        <article>
          <small>Latest Accuracy</small>
          <b>{latest ? `${accuracy}%` : '—'}</b>
          <span>{latest ? `Latest score: ${latest.score}/${latest.total}` : 'Complete a practice test'}</span>
        </article>
        <article>
          <small>Total Attempts</small>
          <b>{attempts.length}</b>
          <span>Saved locally</span>
        </article>
        <article>
          <small>Time Spent</small>
          <b>{attempts.reduce((n, a) => n + a.seconds, 0) > 0 ? `${Math.ceil(attempts.reduce((n, a) => n + a.seconds, 0) / 60)}m` : '—'}</b>
          <span>Across all tests</span>
        </article>
      </div>

      <section className="analysis-card">
        <div>
          <h2>Exam Section Performance</h2>
          <p>Mastery indicators across BPSC TRE 4.0 sections.</p>
        </div>
        {SECTIONS.map((sec, i) => {
          const secAttempts = attempts.filter(a => {
            const meta = SETS_CATALOG.find(s => s.id === a.setId)
            return meta?.section === sec.id
          })
          const secAcc = secAttempts.length
            ? Math.round((secAttempts.reduce((sum, a) => sum + (a.score / a.total), 0) / secAttempts.length) * 100)
            : 0
          return (
            <div className="topic" key={sec.id}>
              <span>{sec.name.split('(')[0].trim()}</span>
              <div>
                <i style={{ width: `${secAttempts.length ? secAcc : 0}%` }} />
              </div>
              <b>{secAttempts.length ? `${secAcc}%` : 'Not started'}</b>
            </div>
          )
        })}
        <div className="recommend">
          <b>Recommended Revision</b>
          <span>
            Practice Part-I Qualifying Set 2 and General Studies Set 1 to strengthen elimination techniques on Option (D) More than one and (E) None of the above.
          </span>
          <button onClick={() => setRoute('/app?category=qualifying')}>Practice Qualifying Sets →</button>
        </div>
      </section>

      <button
        className="clear"
        onClick={() => {
          localStorage.removeItem(`${KEY}:attempts`)
          location.reload()
        }}
      >
        Clear local practice history
      </button>
    </main>
  )
}

function Discussions({ setRoute }: { setRoute: (s: string) => void }) {
  const [sort, setSort] = useState('helpful')
  const rows = [
    {
      name: 'TRE Ready Editorial',
      tag: 'Official answer',
      votes: 42,
      text: 'For Question 2: In the Gregorian calendar, the 8th month is August. Since August is missing from (A), (B), and (C), Option (E) "None of the above" is the official answer.'
    },
    {
      name: 'Anjali Kumar',
      tag: 'Expert reviewed',
      votes: 28,
      text: 'For Sandhi questions: "सम् + उत् + ज्वल = समुज्ज्वल". Always look for the halant on "सम्". Without halant, "सम" is incorrect.'
    },
    {
      name: 'Ravi S.',
      tag: 'Student contribution',
      votes: 14,
      text: 'For kinship questions (like sister-in-law or brother-in-law), BPSC almost always triggers Option (D) More than one of the above because English terms cover multiple relations.'
    }
  ].sort((a, b) => (sort === 'helpful' ? b.votes - a.votes : a.name.localeCompare(b.name)))

  return (
    <main className="discussions">
      <button className="back" onClick={() => setRoute('/app/practice')}>
        ← Back to question
      </button>
      <p className="eyebrow">BPSC TRE 4.0 · DISCUSSION & EXPLANATIONS</p>
      <h1>Question discussions</h1>
      <p className="lead">Curated explanations and tips from teachers and top aspirants.</p>

      <div className="discussion-tools">
        <button className={sort === 'helpful' ? 'selected-tab' : ''} onClick={() => setSort('helpful')}>
          Most helpful
        </button>
        <button className={sort === 'newest' ? 'selected-tab' : ''} onClick={() => setSort('newest')}>
          Newest
        </button>
      </div>

      {rows.map(r => (
        <article className="post" key={r.name}>
          <div className="avatar">{r.name[0]}</div>
          <div>
            <div className="post-head">
              <b>{r.name}</b>
              <span className={r.tag.includes('Official') ? 'official' : r.tag.includes('Expert') ? 'expert' : 'student'}>
                {r.tag}
              </span>
            </div>
            <p>{r.text}</p>
            <div className="post-actions">
              <button>↑ {r.votes} helpful</button>
            </div>
          </div>
        </article>
      ))}
    </main>
  )
}

function Static({ page, setRoute }: { page: string; setRoute: (x: string) => void }) {
  const content =
    page === '/pyq'
      ? [
          'Previous-Year Question Papers (TRE 1, 2 & 3)',
          'All 149 official master question booklets from BPSC TRE 1.0 (2023), TRE 2.0 (2023), and TRE 3.0 (2024) are catalogued. Direct practice sets are accessible below.'
        ]
      : page === '/about'
      ? ['Focused preparation for Bihar teachers', 'TRE Ready is designed around a simple rule: zero clutter, authentic 5-option BPSC questions, and instant bilingual toggle.']
      : ['Practice categories', 'Go from category to subject to an authentic practice session in two quick choices.']

  return (
    <main className="static">
      <p className="eyebrow">BPSC TRE 4.0</p>
      <h1>{content[0]}</h1>
      <p className="lead">{content[1]}</p>
      <button className="primary" onClick={() => setRoute('/app')}>
        Browse All Practice Sets ({SETS_CATALOG.length})
      </button>
    </main>
  )
}

function Root() {
  const [fullHash, setFullHash] = useState(() => location.hash.slice(1) || '/')
  const [route, setRouteState] = useState(() => location.hash.slice(1).split('?')[0] || '/')
  const [lang, setLang] = useState<Lang>(() => prefs.get('language', 'en'))

  // Mobile App PWA Install Prompt State
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [showAppModal, setShowAppModal] = useState<boolean>(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleNativeInstall = async () => {
    if (installPrompt) {
      installPrompt.prompt()
      const { outcome } = await installPrompt.userChoice
      if (outcome === 'accepted') {
        setInstallPrompt(null)
        setShowAppModal(false)
      }
    }
  }

  const setRoute = (r: string) => {
    location.hash = '#' + r
    setFullHash(r)
    setRouteState(r.split('?')[0])
  }

  useEffect(() => {
    prefs.set('language', lang)
  }, [lang])

  useEffect(() => {
    const h = () => {
      const cur = location.hash.slice(1) || '/'
      setFullHash(cur)
      setRouteState(cur.split('?')[0])
    }
    addEventListener('hashchange', h)
    return () => removeEventListener('hashchange', h)
  }, [])

  const queryParams = new URLSearchParams(fullHash.split('?')[1] || '')
  const initial = queryParams.get('category')
  const initialSubject = queryParams.get('subject')

  const body =
    route === '/' ? (
      <Home lang={lang} setRoute={setRoute} onOpenAppModal={() => setShowAppModal(true)} />
    ) : route === '/app' ? (
      <AppHome lang={lang} setRoute={setRoute} initial={initial} initialSubject={initialSubject} />
    ) : route === '/app/practice' ? (
      <Practice lang={lang} setRoute={setRoute} />
    ) : route === '/app/analysis' ? (
      <Analysis setRoute={setRoute} />
    ) : route === '/app/discussions' ? (
      <Discussions setRoute={setRoute} />
    ) : (
      <Static page={route} setRoute={setRoute} />
    )

  return (
    <>
      {/* Top Creator Ribbon */}
      <div className="creator-top-bar">
        <span>🚀 Engineered for Bihar's Future Teachers by <b>Ashok Kumar</b></span>
        <a
          href="https://ai-workflows.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator-link-chip"
        >
          ai-workflows.cloud ↗
        </a>
      </div>

      <Header
        lang={lang}
        setLang={setLang}
        route={route}
        setRoute={setRoute}
        onOpenAppModal={() => setShowAppModal(true)}
      />

      {body}

      <AppModal
        isOpen={showAppModal}
        onClose={() => setShowAppModal(false)}
        installPrompt={installPrompt}
        onInstall={handleNativeInstall}
      />

      <footer>
        <div>
          <b>TRE Ready · BPSC TRE 4.0 Authentic Practice Platform</b>
          <span style={{ display: 'block', marginTop: '4px', color: '#64748b' }}>
            Made with ❤️ by{' '}
            <a
              href="https://ai-workflows.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#147d75', fontWeight: 700, textDecoration: 'none' }}
            >
              Ashok Kumar (ai-workflows.cloud)
            </a>
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span>100% Free Open Educational Resource</span>
          <span style={{ display: 'block', marginTop: '4px', color: '#64748b' }}>
            71 Sets · 1,898 Authentic Questions · Offline PWA
          </span>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)

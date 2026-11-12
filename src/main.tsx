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

function Header({ lang, setLang, route, setRoute }: { lang: Lang; setLang: (x: Lang) => void; route: string; setRoute: (x: string) => void }) {
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
      </nav>
      <div className="head-actions">
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

function Home({ lang, setRoute }: { lang: Lang; setRoute: (s: string) => void }) {
  const t = copy[lang]
  const totalQuestions = SETS_CATALOG.reduce((sum, s) => sum + s.question_count, 0)
  const defaultSet = SETS_CATALOG.find(s => s.id.includes('qualifying-paper-set2')) || SETS_CATALOG[0]

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">BPSC TRE 4.0 · AUTHENTIC PYQ PRACTICE COMPANION</p>
          <h1>{t.hero}</h1>
          <p className="lead">
            Practice {totalQuestions}+ genuine questions from official BPSC TRE 1.0, 2.0 & 3.0 master question booklets.
            Features in-question bilingual toggle (`EN` ⇄ `हिन्दी`), authentic 5-option format (A, B, C, D, E), and exam setter solutions.
          </p>
          <div className="button-row">
            <button
              className="primary"
              onClick={() => {
                prefs.set('currentSetId', defaultSet?.id || 'bpsc-tre4-qualifying-paper-set2-40q')
                prefs.set('lastSubject', defaultSet?.title || 'Language Qualifying Set 2 (40Q)')
                setRoute('/app/practice')
              }}
            >
              <Icon name="book" />
              {lang === 'hi' ? 'भाषा अर्हता सेट 2 (40 प्रश्न) शुरू करें' : 'Start Language Qualifying Set 2 (40Q)'}
            </button>
            <button className="text-button" onClick={() => setRoute('/app')}>
              Browse all {SETS_CATALOG.length} question sets ({totalQuestions}Q) <Icon name="arrow" />
            </button>
          </div>
          <p className="micro">No login required · 100% Free · Saves your progress locally</p>
        </div>
        <aside className="hero-paper">
          <div className="paper-top">
            <span>Part-I Qualifying Paper</span>
            <b>{defaultSet?.question_count || 40} Questions</b>
          </div>
          <h3>{defaultSet?.title || 'Language Practice Set 2'}</h3>
          <p>English (Q1–15) + General Hindi (Q16–40)</p>
          <div className="mini-progress">
            <i style={{ width: '40%' }} />
          </div>
          <div className="paper-bottom">
            <span>Min. Qualifying Criteria</span>
            <b>30% Marks (12/40)</b>
          </div>
          <button
            onClick={() => {
              prefs.set('currentSetId', defaultSet?.id || 'bpsc-tre4-qualifying-paper-set2-40q')
              prefs.set('lastSubject', defaultSet?.title || 'Language Qualifying Set 2 (40Q)')
              setRoute('/app/practice')
            }}
          >
            Start Practice Now <Icon name="arrow" />
          </button>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">SELECT EXAM SECTION</p>
            <h2>{t.choose}</h2>
          </div>
          <p>Choose an exam section to explore authentic question sets.</p>
        </div>
        <div className="category-grid">
          {SECTIONS.map((sec, i) => {
            const setsInSection = SETS_CATALOG.filter(s => s.section === sec.id)
            const countQ = setsInSection.reduce((acc, s) => acc + s.question_count, 0)
            return (
              <button className="category" onClick={() => setRoute(`/app?category=${sec.id}`)} key={sec.id}>
                <span className={'cat-icon c' + i}>{sec.icon}</span>
                <b>{lang === 'hi' ? sec.hi : sec.name}</b>
                <small>{sec.desc}</small>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 600, color: '#147d75' }}>
                  {setsInSection.length} Sets Available · {countQ} Questions
                </div>
                <i>
                  <Icon name="arrow" />
                </i>
              </button>
            )
          })}
        </div>
      </section>

      <section className="benefits">
        <div>
          <span className="kicker">01</span>
          <h3>100% Genuine Previous Year Papers</h3>
          <p>Authentic questions directly extracted from official BPSC TRE 1.0, 2.0 & 3.0 question booklets.</p>
        </div>
        <div>
          <span className="kicker">02</span>
          <h3>In-Question Bilingual Toggle</h3>
          <p>Instantly switch between English and Hindi on any question card without resetting your timer or selections.</p>
        </div>
        <div>
          <span className="kicker">03</span>
          <h3>Master the 5-Option Format</h3>
          <p>Train specifically on BPSC's signature Options (D) "More than one" and (E) "None of the above" with setter tricks.</p>
        </div>
      </section>
    </>
  )
}

function AppHome({ lang, setRoute, initial }: { lang: Lang; setRoute: (s: string) => void; initial: string | null }) {
  const t = copy[lang]
  const [category, setCategory] = useState<string>(initial || '')
  const [selectedSet, setSelectedSet] = useState<SetMeta | null>(null)

  useEffect(() => {
    if (initial) {
      setCategory(initial)
      setSelectedSet(null)
    }
  }, [initial])

  const activeSection = SECTIONS.find(x => x.id === category)
  const availableSets = useMemo(() => {
    if (!category) return SETS_CATALOG
    return SETS_CATALOG.filter(s => s.section === category)
  }, [category])

  return (
    <main className="app-shell">
      <aside className="side">
        <p className="side-label">EXAM SECTIONS</p>
        <button className={!category ? 'side-active' : ''} onClick={() => { setCategory(''); setSelectedSet(null) }}>
          <Icon name="book" />
          All Sets ({SETS_CATALOG.length})
        </button>
        {SECTIONS.map(sec => (
          <button
            key={sec.id}
            className={category === sec.id ? 'side-active' : ''}
            onClick={() => {
              setCategory(sec.id)
              setSelectedSet(null)
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
                <button className="category" onClick={() => setCategory(sec.id)} key={sec.id}>
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

        {/* 2. Sets List in Selected Category */}
        {category && !selectedSet && (
          <>
            <button className="back" onClick={() => setCategory('')}>
              ← Change exam section
            </button>
            <div className="subject-list">
              {availableSets.map(s => (
                <button
                  onClick={() => {
                    setSelectedSet(s)
                  }}
                  key={s.id}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span>{s.title.slice(0, 1)}</span>
                    <div style={{ textAlign: 'left' }}>
                      <b style={{ fontSize: '15px' }}>{s.title}</b>
                      <div style={{ fontSize: '12px', color: '#667085', marginTop: '3px' }}>
                        {s.question_count} Questions · 5 Options · Bilingual (EN/हिन्दी)
                      </div>
                    </div>
                  </div>
                  <Icon name="arrow" />
                </button>
              ))}
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

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>(() => prefs.get(`draft_${activeSet.id}`, {}))
  const [flags, setFlags] = useState<number[]>(() => prefs.get(`flags_${activeSet.id}`, []))
  const [seconds, setSeconds] = useState(() => prefs.get(`elapsed_${activeSet.id}`, 0))
  const [submitted, setSubmitted] = useState(false)
  const [qLang, setQLang] = useState<'en' | 'hi'>(lang)

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
    setQLang(lang)
  }, [lang])

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
        />
      ) : (
        <div className="exam-body">
          <section className="question-area">
            <div className="question-top">
              <p>
                {t.question} {index + 1} of {currentQuestions.length}
              </p>
              <div className="q-header-actions">
                <button className="lang-toggle-btn" onClick={() => setQLang(qLang === 'en' ? 'hi' : 'en')}>
                  🌐 {qLang === 'en' ? 'हिन्दी में देखें' : 'View in English'}
                </button>
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
                  <span>{o}</span>
                </button>
              ))}
            </div>

            <div className="question-nav">
              <button className="secondary" disabled={!index} onClick={() => setIndex(index - 1)}>
                ← {t.previous}
              </button>
              {index === currentQuestions.length - 1 ? (
                <button className="primary" onClick={finish}>
                  {t.submit}
                </button>
              ) : (
                <button className="primary" onClick={() => setIndex(index + 1)}>
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
  activeSet
}: {
  questionsList: QuestionItem[]
  answers: Record<number, number>
  seconds: number
  setRoute: (s: string) => void
  activeSet: SetMeta
}) {
  const score = questionsList.filter(q => answers[q.id] === q.answer).length
  const pct = Math.round((score / questionsList.length) * 100)
  const isQualifying = activeSet.section === 'qualifying'
  const isPassed = pct >= 30

  return (
    <section className="results">
      <p className="eyebrow">SESSION COMPLETE · BPSC TRE 4.0</p>
      <h1>
        {score} of {questionsList.length} correct ({pct}%)
      </h1>
      <p>Time spent: {Math.ceil(seconds / 60)} minutes. Review the official answer keys and setter insights below.</p>

      {isQualifying && (
        <div className={`qualify-banner ${isPassed ? 'qualify-pass' : 'qualify-fail'}`}>
          <div>
            <h2>{isPassed ? '🎉 QUALIFIED (अर्हता परीक्षा उत्तीर्ण)' : '⚠️ NOT QUALIFIED (अर्हता प्राप्त नहीं)'}</h2>
            <p>
              {isPassed
                ? 'Congratulations! You met the mandatory 30% qualifying mark required by BPSC for Part-I Language.'
                : 'BPSC requires minimum 30% (12 marks out of 40) to qualify Part-I. Please re-attempt this paper.'}
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
              <span>
                {isCorrect ? '✓ Correct' : '✗ Incorrect / Review Needed'} · Question {q.id}
              </span>
              <span className="source-tag">Source: {q.source}</span>
              <h3>
                {q.en}
                {q.hi !== q.en && (
                  <span style={{ display: 'block', fontSize: '14px', color: '#667085', marginTop: '4px' }}>
                    {q.hi}
                  </span>
                )}
              </h3>

              <p>
                <b>Your choice:</b>{' '}
                {answers[q.id] !== undefined
                  ? `(${String.fromCharCode(65 + answers[q.id])}) ${q.options[answers[q.id]]}`
                  : 'Not attempted'}
              </p>
              <p style={{ color: '#147d75' }}>
                <b>Official Answer:</b> ({q.answer_letter}) {q.answer_text || q.options[q.answer]}
              </p>

              <p>
                <b>Official Explanation:</b> {q.explanation}
              </p>

              {q.tip && (
                <div className="tip-box">
                  <b>💡 Exam Setter's Tip / Trick:</b>
                  {q.tip}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: '14px' }}>
        <button className="primary" onClick={() => setRoute('/app')}>
          Practice another set
        </button>
        <button className="secondary" onClick={() => setRoute('/app/analysis')}>
          See topic analysis
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
  const [route, setRouteState] = useState(() => location.hash.slice(1).split('?')[0] || '/')
  const [lang, setLang] = useState<Lang>(() => prefs.get('language', 'en'))

  const setRoute = (r: string) => {
    location.hash = '#' + r
    setRouteState(r.split('?')[0])
  }

  useEffect(() => {
    prefs.set('language', lang)
  }, [lang])

  useEffect(() => {
    const h = () => setRouteState(location.hash.slice(1).split('?')[0] || '/')
    addEventListener('hashchange', h)
    return () => removeEventListener('hashchange', h)
  }, [])

  const initial = new URLSearchParams(location.hash.split('?')[1] || '').get('category')

  const body =
    route === '/' ? (
      <Home lang={lang} setRoute={setRoute} />
    ) : route === '/app' ? (
      <AppHome lang={lang} setRoute={setRoute} initial={initial} />
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
      <Header lang={lang} setLang={setLang} route={route} setRoute={setRoute} />
      {body}
      <footer>
        <b>TRE Ready · BPSC TRE 4.0</b>
        <span>Bilingual Practice Platform · 100% Genuine PYQ with 5 Options</span>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)

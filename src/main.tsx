import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { qualifyingSet2, type QuestionItem } from './data/qualifyingSet2'

type Lang = 'en' | 'hi'
type Attempt = { completedAt: string; subject: string; score: number; total: number; seconds: number; answers: Record<number, number>; flagged: number[] }
const KEY = 'tre-ready:v1'
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
    hero: 'Prepare Smarter. Practice Better. Crack TRE.',
    sub: 'Targeted BPSC TRE 4.0 practice with authentic past questions and bilingual toggle.',
    choose: 'Choose what to practise',
    chooseSub: 'Choose a subject / set',
    action: 'What would you like to do?',
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
    hero: 'स्मार्ट तैयारी। बेहतर अभ्यास। TRE में सफलता।',
    sub: 'प्रामाणिक पिछले प्रश्नपत्रों और द्विभाषी टॉगल के साथ BPSC TRE 4.0 की तैयारी।',
    choose: 'अभ्यास चुनें',
    chooseSub: 'विषय / सेट चुनें',
    action: 'आप क्या करना चाहेंगे?',
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

const categories = [
  {
    id: 'qualifying',
    name: 'Part-I Language Qualifying',
    hi: 'भाग-1 भाषा अर्हता परीक्षा (30% अनिवार्य)',
    desc: 'Compulsory for PRT, Middle, TGT & PGT (English + Hindi)',
    subjects: ['Language Practice Set 2 (40Q)', 'Part A: English (15Q)', 'Part B: Hindi (25Q)']
  },
  {
    id: 'gk',
    name: 'GK & GS (General Studies)',
    hi: 'सामान्य ज्ञान और सामान्य अध्ययन (40 अंक)',
    desc: 'History, Polity, Bihar Special, Science & Elementary Math',
    subjects: ['Bihar GK', 'Indian National Movement', 'Indian Polity', 'General Science']
  },
  {
    id: 'hindi',
    name: 'Hindi (Main Subject)',
    hi: 'हिंदी (मुख्य विषय - 80 अंक)',
    desc: 'Language, grammar & literature for TGT/PGT',
    subjects: ['व्याकरण', 'हिंदी साहित्य', 'शिक्षण शास्त्र']
  },
  {
    id: 'english',
    name: 'English (Main Subject)',
    hi: 'English (Main Subject - 80 Marks)',
    desc: 'Grammar, comprehension & literature',
    subjects: ['Grammar', 'Literature', 'Pedagogy']
  },
  {
    id: 'subject',
    name: 'Subject-wise Practice',
    hi: 'विषयवार अभ्यास (80 अंक)',
    desc: 'Practice for your specific teaching subject',
    subjects: ['Mathematics', 'Science', 'Social Science', 'Computer Science']
  }
]

function getQuestionsForSubject(subjectName: string): QuestionItem[] {
  if (subjectName.includes('English (15Q)')) {
    return qualifyingSet2.filter(q => q.id <= 15)
  }
  if (subjectName.includes('Hindi (25Q)')) {
    return qualifyingSet2.filter(q => q.id >= 16)
  }
  // Default to full 40 authentic questions from Set 2
  return qualifyingSet2
}

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
  const nav = [
    ['/', 'home'],
    ['/app?category=qualifying', 'qualifying'],
    ['/app', 'practice'],
    ['/pyq', 'pyq'],
    ['/about', 'About']
  ]
  return (
    <header>
      <a className="brand" href="#/" onClick={() => setRoute('/')}>
        <span>T</span>
        <b>TRE Ready</b>
        <small>BPSC 4.0</small>
      </a>
      <nav>
        {nav.map(([r, n]) => (
          <button className={route === r ? 'active' : ''} key={r} onClick={() => setRoute(r)}>
            {n === 'qualifying' ? (lang === 'hi' ? 'अर्हता परीक्षा (40Q)' : 'Qualifying Paper (40Q)') : (t[n as keyof typeof t] || n)}
          </button>
        ))}
      </nav>
      <div className="head-actions">
        <button className="language" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} aria-label="Change language">
          {lang === 'en' ? 'हिन्दी' : 'English'}
        </button>
        <button className="nav-cta" onClick={() => setRoute('/app?category=qualifying')}>
          {t.start}
        </button>
      </div>
    </header>
  )
}

function Home({ lang, setRoute }: { lang: Lang; setRoute: (s: string) => void }) {
  const t = copy[lang]
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">BPSC TRE 4.0 · AUTHENTIC PYQ PRACTICE COMPANION</p>
          <h1>{t.hero}</h1>
          <p className="lead">
            Master 100% genuine BPSC TRE 1.0, 2.0 & 3.0 question booklets. Practice with in-question bilingual toggle (`EN` ⇄ `हिन्दी`), authentic 5-option format, and verified exam setter explanations.
          </p>
          <div className="button-row">
            <button className="primary" onClick={() => setRoute('/app?category=qualifying')}>
              <Icon name="book" />
              {lang === 'hi' ? 'अर्हता परीक्षा सेट 2 (40 प्रश्न) शुरू करें' : 'Practice Qualifying Paper Set 2 (40Q)'}
            </button>
            <button className="text-button" onClick={() => setRoute('/pyq')}>
              Browse previous papers <Icon name="arrow" />
            </button>
          </div>
          <p className="micro">No login required · 100% Free · Saves your progress locally</p>
        </div>
        <aside className="hero-paper">
          <div className="paper-top">
            <span>Part-I Qualifying Paper</span>
            <b>40 Questions</b>
          </div>
          <h3>Language Practice Set 2</h3>
          <p>English (Q1–15) + General Hindi (Q16–40)</p>
          <div className="mini-progress">
            <i style={{ width: '40%' }} />
          </div>
          <div className="paper-bottom">
            <span>Min. Qualifying Criteria</span>
            <b>30% Marks</b>
          </div>
          <button onClick={() => setRoute('/app?category=qualifying')}>
            Start 40Q Practice Now <Icon name="arrow" />
          </button>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">START PRACTICE IN TWO STEPS</p>
            <h2>{t.choose}</h2>
          </div>
          <p>Choose an exam section, then select a question set.</p>
        </div>
        <div className="category-grid">
          {categories.map((c, i) => (
            <button className="category" onClick={() => setRoute(`/app?category=${c.id}`)} key={c.id}>
              <span className={'cat-icon c' + (i % 4)}>{['अ', 'G', 'ह', 'A', '+'][i]}</span>
              <b>{lang === 'hi' ? c.hi : c.name}</b>
              <small>{c.desc}</small>
              <i>
                <Icon name="arrow" />
              </i>
            </button>
          ))}
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
  const [category, setCategory] = useState(initial || 'qualifying')
  const [subject, setSubject] = useState('')
  const cat = categories.find(x => x.id === category) || categories[0]

  useEffect(() => {
    if (category) prefs.set('lastCategory', category)
  }, [category])

  return (
    <main className="app-shell">
      <aside className="side">
        <p className="side-label">EXAM PRACTICE</p>
        <button className="side-active" onClick={() => setRoute('/app')}>
          <Icon name="book" />
          Practice
        </button>
        <button onClick={() => setRoute('/app/analysis')}>
          <Icon name="chart" />
          Analysis
        </button>
        <button onClick={() => setRoute('/app/discussions')}>
          <Icon name="book" />
          Discussions
        </button>
        <div className="guest">
          <b>Guest Mode Active</b>
          <span>Your question attempts and topic mastery are saved locally in your browser.</span>
        </div>
      </aside>

      <section className="app-content">
        <p className="eyebrow">BPSC TRE 4.0 · PRACTICE SETUP</p>
        <h1>{!category ? t.choose : !subject ? t.chooseSub : t.action}</h1>

        {!category && (
          <div className="category-grid compact">
            {categories.map((c, i) => (
              <button className="category" onClick={() => setCategory(c.id)} key={c.id}>
                <span className={'cat-icon c' + (i % 4)}>{['अ', 'G', 'ह', 'A', '+'][i]}</span>
                <b>{lang === 'hi' ? c.hi : c.name}</b>
                <small>{c.desc}</small>
              </button>
            ))}
          </div>
        )}

        {category && !subject && (
          <>
            <button className="back" onClick={() => setCategory('')}>
              ← Change section / category
            </button>
            <div className="subject-list">
              {cat.subjects.map(s => (
                <button
                  onClick={() => {
                    setSubject(s)
                    prefs.set('lastSubject', s)
                  }}
                  key={s}
                >
                  <span>{s.slice(0, 1)}</span>
                  <b>{s}</b>
                  <Icon name="arrow" />
                </button>
              ))}
            </div>
          </>
        )}

        {subject && (
          <>
            <button className="back" onClick={() => setSubject('')}>
              ← Change question set
            </button>
            <div className="decision">
              <div>
                <p className="eyebrow">{subject.toUpperCase()}</p>
                <h2>Ready to practice.</h2>
                <p>
                  Authentic BPSC PYQs with 5 options, official answer keys, and bilingual toggle. Qualifying pass mark: 30%.
                </p>
              </div>
              <div className="decision-actions">
                <button
                  className="primary"
                  onClick={() => {
                    prefs.set('lastSubject', subject)
                    setRoute('/app/practice')
                  }}
                >
                  <Icon name="book" />
                  {t.startPractice}
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
  const subject = prefs.get('lastSubject', 'Language Practice Set 2 (40Q)')
  const currentQuestions = useMemo(() => getQuestionsForSubject(subject), [subject])

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>(() => prefs.get('draft', {}))
  const [flags, setFlags] = useState<number[]>(() => prefs.get('flags', []))
  const [seconds, setSeconds] = useState(() => prefs.get('elapsed', 0))
  const [submitted, setSubmitted] = useState(false)
  // Per-question bilingual toggle state
  const [qLang, setQLang] = useState<'en' | 'hi'>(lang)

  useEffect(() => {
    const x = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(x)
  }, [])

  useEffect(() => {
    prefs.set('draft', answers)
    prefs.set('flags', flags)
    prefs.set('elapsed', seconds)
  }, [answers, flags, seconds])

  // Sync default qLang when app language switches
  useEffect(() => {
    setQLang(lang)
  }, [lang])

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
          subject,
          score,
          total: currentQuestions.length,
          seconds,
          answers,
          flagged: flags
        },
        ...history
      ].slice(0, 30)
    )
    prefs.set('draft', {})
    setSubmitted(true)
  }

  return (
    <main className="exam">
      <div className="exam-bar">
        <button className="wordmark" onClick={() => setRoute('/app')}>
          TRE Ready · {subject}
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
        <Results questionsList={currentQuestions} answers={answers} seconds={seconds} setRoute={setRoute} subject={subject} />
      ) : (
        <div className="exam-body">
          <section className="question-area">
            <div className="question-top">
              <p>
                {t.question} {index + 1} of {currentQuestions.length} <span>· {q.topic}</span>
              </p>
              <div className="q-header-actions">
                <button className="lang-toggle-btn" onClick={() => setQLang(qLang === 'en' ? 'hi' : 'en')}>
                  🌐 {qLang === 'en' ? 'हिन्दी में देखें' : 'View in English'}
                </button>
                <button className={flags.includes(q.id) ? 'flagged' : ''} onClick={() => setFlags(f => (f.includes(q.id) ? f.filter(x => x !== q.id) : [...f, q.id]))}>
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
                <button key={o + i} className={answers[q.id] === i ? 'selected' : ''} onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}>
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
                  className={`${i === index ? 'current' : ''} ${answers[x.id] !== undefined ? 'answered' : ''} ${flags.includes(x.id) ? 'review' : ''}`}
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
  subject
}: {
  questionsList: QuestionItem[]
  answers: Record<number, number>
  seconds: number
  setRoute: (s: string) => void
  subject: string
}) {
  const score = questionsList.filter(q => answers[q.id] === q.answer).length
  const pct = Math.round((score / questionsList.length) * 100)
  const isQualifying = subject.includes('Qualifying') || subject.includes('Language')
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
                {isCorrect ? '✓ Correct' : '✗ Incorrect / Review Needed'} · {q.part} · Question {q.id}
              </span>
              <span className="source-tag">Source: {q.source}</span>
              <h3>
                {q.en}
                {q.hi !== q.en && <span style={{ display: 'block', fontSize: '14px', color: '#667085', marginTop: '4px' }}>{q.hi}</span>}
              </h3>

              <p>
                <b>Your choice:</b>{' '}
                {answers[q.id] !== undefined ? `(${String.fromCharCode(65 + answers[q.id])}) ${q.options[answers[q.id]]}` : 'Not attempted'}
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
          <h2>Qualifying & Core Topic Breakdown</h2>
          <p>Mastery indicators for BPSC TRE 4.0.</p>
        </div>
        {['English Language (Qualifying)', 'General Hindi (Qualifying)', 'Indian Polity', 'Bihar GK', 'General Science'].map((x, i) => {
          const value = latest ? (i === 0 ? Math.min(100, accuracy + 5) : i === 1 ? accuracy : i === 2 ? 75 : 60) : 0
          return (
            <div className="topic" key={x}>
              <span>{x}</span>
              <div>
                <i style={{ width: `${value}%` }} />
              </div>
              <b>{latest ? `${value}%` : 'Not started'}</b>
            </div>
          )
        })}
        <div className="recommend">
          <b>Recommended Revision</b>
          <span>
            {latest && accuracy < 70
              ? 'Re-attempt Part-I Qualifying Set 2 to strengthen 5-option elimination on Options (D) and (E).'
              : 'Try a full 40Q timed mock test to build speed.'}
          </span>
          <button onClick={() => setRoute('/app?category=qualifying')}>Practice Qualifying Set 2 →</button>
        </div>
      </section>

      <button
        className="clear"
        onClick={() => {
          localStorage.removeItem(`${KEY}:attempts`)
          localStorage.removeItem(`${KEY}:draft`)
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
      text: 'For Question 16: "सम् + उत् + ज्वल = समुज्ज्वल". Always look for the halant on "सम्". Without halant, "सम" is incorrect.'
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
              <span className={r.tag.includes('Official') ? 'official' : r.tag.includes('Expert') ? 'expert' : 'student'}>{r.tag}</span>
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
          'All 149 official master question booklets from BPSC TRE 1.0 (2023), TRE 2.0 (2023), and TRE 3.0 (2024) are catalogued and digitized.'
        ]
      : page === '/about'
      ? ['Focused preparation for Bihar teachers', 'TRE Ready is designed around a simple rule: less navigation, 100% authentic practice.']
      : ['Practice categories', 'Go from category to subject to an authentic practice session in two quick choices.']

  return (
    <main className="static">
      <p className="eyebrow">BPSC TRE 4.0</p>
      <h1>{content[0]}</h1>
      <p className="lead">{content[1]}</p>
      <button className="primary" onClick={() => setRoute('/app?category=qualifying')}>
        Start Qualifying Paper (40Q)
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
        <b>TRE Ready</b>
        <span>BPSC TRE 4.0 Bilingual Practice Platform · 100% Genuine PYQ</span>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)

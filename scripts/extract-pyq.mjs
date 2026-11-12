import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const sourceRoots = ['TRE 1', 'TRE 2', 'TRE 3']
const outputRoot = path.join(root, 'data', 'pyq')
const yearByTre = { 'TRE 1': 2023, 'TRE 2': 2023, 'TRE 3': 2024 }

const normalise = (value) => value
  .replace(/\r/g, '')
  .replace(/[ \t]+/g, ' ')
  .replace(/ *\n */g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const slug = (value) => value.toLowerCase()
  .replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

function pdfToText(pdfPath) {
  try {
    return execFileSync('pdftotext', ['-raw', pdfPath, '-'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
  } catch (error) {
    // In the workspace sandbox child processes can report EPERM after producing
    // successful stdout. Do not discard that complete extraction.
    if (error.code === 'EPERM' && error.stdout) return error.stdout.toString()
    throw error
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const target = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(target) : [target]
  }))
  return files.flat()
}

function sourceMetadata(relativePath) {
  const [tre] = relativePath.split(path.sep)
  const base = path.basename(relativePath, '.pdf')
  let subject = 'Unclassified'
  const byClass = base.match(/Class-\d+-\d+-(.+)$/i)
  const byPaper = base.match(/(?:Question-Papers|Question-Paper|Question-Booklets|Question-Booklet|Ques-Paper|Paper)-(.+)$/i)
  if (/Primary-Teacher/i.test(base)) subject = 'General Studies'
  else if (byClass) subject = byClass[1]
  else if (byPaper) subject = byPaper[1]
  else if (/Middle-School/i.test(base)) subject = base.match(/Middle-School-Question-.*?-(.+)$/i)?.[1] || 'General Studies'
  subject = subject
    .replace(/_compressed/ig, '')
    .replace(/\s*\(\d+\)\s*$/g, '')
    .replace(/\b(Botanu|Enterprenership|Maithali|Magadhi)\b/ig, (word) => ({ botanu: 'Botany', enterprenership: 'Entrepreneurship', maithali: 'Maithili', magadhi: 'Magahi' })[word.toLowerCase()] || word)
    .replace(/[-_]+/g, ' ')
    .trim()
  const classBand = /Class-1-5|Primary/i.test(base) ? '1-5' : /Class-6-8|Middle/i.test(base) ? '6-8' : /Class-9-10|\bTGT\b/i.test(base) ? '9-10' : /Class-11-12|\bPGT\b|Senior-Secondary/i.test(base) ? '11-12' : null
  const shift = base.match(/Shift[- ](\d+)/i)?.[1] || null
  const frontendCategory = /^hindi$/i.test(subject) ? 'hindi' : /^english$/i.test(subject) ? 'english' : /general studies|general knowledge|\bgk\b/i.test(subject) ? 'gk' : 'subject'
  return {
    exam: tre.replace(' ', '-'),
    exam_year: yearByTre[tre] ?? null,
    subject,
    class_band: classBand,
    shift: shift ? `Shift ${shift}` : null,
    frontend_category: frontendCategory,
    frontend_subject: subject,
    source_file: relativePath.split(path.sep).join('/'),
  }
}

function optionList(chunk) {
  const matches = [...chunk.matchAll(/^\s*\(([A-E])\)\s*(.*)$/gm)]
  if (matches.length < 2) return []
  return matches.map((match, index) => ({
    label: match[1],
    text: normalise(chunk.slice(match.index + match[0].length, matches[index + 1]?.index ?? chunk.length)),
  }))
}

function extractQuestions(text) {
  // A PDF page boundary is a form-feed, which JavaScript's multiline anchor
  // does not treat as a line boundary. Convert it before locating question labels.
  const scanText = text.replaceAll('\f', '\n')
  const starts = [...scanText.matchAll(/^\s*((?:[A-Z]-?)?\d{1,3})\.\s+/gm)]
  const candidates = starts.map((match, index) => {
    const number = match[1]
    const chunk = scanText.slice(match.index, starts[index + 1]?.index ?? scanText.length)
    const options = optionList(chunk)
    const promptEnd = chunk.search(/^\s*\([A-E]\)\s*/m)
    return { number, chunk, options, prompt: normalise(chunk.slice(match[0].length, promptEnd < 0 ? chunk.length : promptEnd)) }
  }).filter((item) => item.options.length >= 2 && item.prompt.length > 5)

  // Bilingual booklets alternate English and Hindi pages, so question numbering
  // restarts on almost every second page. Keep English candidates across all pages.
  // The supplied Hindi text is legacy-font encoded and does not contain ordinary
  // English function words; this check avoids creating a duplicate Hindi record.
  const englishSignal = /\b(?:the|of|is|are|what|which|if|in|a|an|to|from|for|with|by|on|as|when|how|where|who|following|choose|find|consider|given|correct|statement)\b/i
  return candidates
    .filter(({ prompt, options }) => englishSignal.test(`${prompt} ${options.map((option) => option.text).join(' ')}`))
    .map(({ number, prompt, options, chunk }) => ({ number, prompt, options, source_excerpt: normalise(chunk).slice(0, 1800) }))
}

function emptySolution() {
  return [
    'Answer key not present in the supplied question booklet.',
    'Add a verified answer and a two-line explanation before this item is enabled in a scored quiz.',
  ]
}

function markdownSummary(source) {
  const lines = [
    `# ${source.metadata.exam} · ${source.metadata.subject}`,
    '',
    `- Source: \`${source.metadata.source_file}\``,
    `- Year: ${source.metadata.exam_year ?? 'unknown'}`,
    `- Class band: ${source.metadata.class_band ?? 'unknown'}`,
    `- Shift: ${source.metadata.shift ?? 'not stated in filename'}`,
    `- Extracted English question candidates: ${source.questions.length}`,
    `- Quiz status: **review required** (no answer key was supplied)`,
    '',
    'This file is an inventory aid. Use the adjacent JSON file as the machine-readable quiz input and the raw text file to verify formatting.',
  ]
  return `${lines.join('\n')}\n`
}

async function main() {
  await rm(outputRoot, { recursive: true, force: true })
  for (const dir of ['raw', 'questions', 'sources']) await mkdir(path.join(outputRoot, dir), { recursive: true })
  const pdfs = (await Promise.all(sourceRoots.map(async (folder) => (await walk(path.join(root, folder))).filter((file) => file.toLowerCase().endsWith('.pdf'))))).flat().sort()
  const sources = []
  let totalQuestions = 0

  for (const pdfPath of pdfs) {
    const relative = path.relative(root, pdfPath)
    const metadata = sourceMetadata(relative)
    const text = pdfToText(pdfPath)
    const contentHash = createHash('sha256').update(await readFile(pdfPath)).digest('hex')
    const safeName = `${metadata.exam.toLowerCase()}-${slug(path.basename(pdfPath, '.pdf'))}`
    const extracted = extractQuestions(text)
    const questions = extracted.map((question, index) => ({
      id: `${safeName}-q${String(index + 1).padStart(3, '0')}`,
      question_number: question.number,
      question_text: question.prompt,
      options: question.options,
      correct_option: null,
      answer_status: 'pending_official_or_ai',
      answer_source_type: null,
      verification_status: 'unverified',
      topic: null,
      topic_status: 'pending_ai_classification',
      solution_lines: emptySolution(),
      solution_status: 'needs_verified_answer_key',
      review_status: 'extracted_unverified',
      quiz_eligible: false,
      source_reference: {
        pdf: metadata.source_file,
        pdf_sha256: contentHash,
        question_label: question.number,
        extraction_ref: `${safeName}#q${String(index + 1).padStart(3, '0')}`,
        source_excerpt: question.source_excerpt,
      },
    }))
    const source = { metadata: { ...metadata, pdf_sha256: contentHash, extracted_at: new Date().toISOString(), extracted_text_pages: text.split('\f').length }, questions }
    await writeFile(path.join(outputRoot, 'raw', `${safeName}.txt`), text)
    await writeFile(path.join(outputRoot, 'questions', `${safeName}.json`), `${JSON.stringify(source, null, 2)}\n`)
    await writeFile(path.join(outputRoot, 'sources', `${safeName}.md`), markdownSummary(source))
    sources.push({ ...metadata, source_id: safeName, question_count: questions.length, raw_text: `raw/${safeName}.txt`, questions_file: `questions/${safeName}.json`, source_summary: `sources/${safeName}.md` })
    totalQuestions += questions.length
    process.stdout.write(`Extracted ${questions.length.toString().padStart(3)} questions: ${relative}\n`)
  }

  const catalog = { generated_at: new Date().toISOString(), source_count: sources.length, extracted_question_count: totalQuestions, sources }
  await writeFile(path.join(outputRoot, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`)
  const csv = ['exam,year,class_band,subject,shift,question_count,source_file,questions_file', ...sources.map((s) => [s.exam, s.exam_year, s.class_band ?? '', JSON.stringify(s.subject), s.shift ?? '', s.question_count, JSON.stringify(s.source_file), s.questions_file].join(','))].join('\n')
  await writeFile(path.join(outputRoot, 'source-index.csv'), `${csv}\n`)
  const groups = new Map()
  for (const source of sources) {
    const key = [source.exam, source.exam_year, source.class_band ?? 'unknown', source.shift ?? 'not stated', source.frontend_category, source.subject].join('|')
    const group = groups.get(key) || { ...source, source_count: 0, question_count: 0 }
    group.source_count += 1
    group.question_count += source.question_count
    groups.set(key, group)
  }
  const reportRows = [...groups.values()].sort((a, b) => [a.exam, a.class_band, a.subject].join('|').localeCompare([b.exam, b.class_band, b.subject].join('|')))
  const coverage = [
    '# PYQ coverage and answer-status report',
    '',
    `Generated: ${catalog.generated_at}`,
    '',
    `- Sources: **${catalog.source_count}**`,
    `- Extracted English question candidates: **${catalog.extracted_question_count}**`,
    '- Official final-key verified answers: **0** (the historical BPSC URLs found by search are no longer retrievable for file-level matching).',
    `- AI-answer queue: **${catalog.extracted_question_count}**`,
    '- Automatically excluded: **2 Hindi-medium PDFs** with no English extraction candidates.',
    '',
    '## Coverage by exam, year, shift, subject, and frontend category',
    '',
    '| Exam | Year | Class band | Shift | Category | Subject | PDFs | Candidates |',
    '| --- | ---: | --- | --- | --- | --- | ---: | ---: |',
    ...reportRows.map((row) => `| ${row.exam} | ${row.exam_year} | ${row.class_band ?? 'unknown'} | ${row.shift ?? 'not stated'} | ${row.frontend_category} | ${row.subject} | ${row.source_count} | ${row.question_count} |`),
    '',
    '## Required answer states',
    '',
    '- `official_final_key_verified`: exact BPSC final-key paper, series, question number, and option order matched.',
    '- `ai_generated_unverified`: AI draft answer and two-line explanation; never show as BPSC-verified.',
    '- `pending_official_or_ai`: no answer has been generated or verified yet.',
    '',
    'Per-question topics are queued for AI classification. Every question already has a source-level subject, year, class band, and shift (where stated).',
  ]
  await writeFile(path.join(outputRoot, 'QUESTION_COVERAGE_REPORT.md'), `${coverage.join('\n')}\n`)
  const noEnglish = sources.filter((source) => source.question_count === 0)
  await writeFile(path.join(outputRoot, 'EXTRACTION_REPORT.md'), `# Extraction report\n\n- PDF sources processed: **${sources.length}**\n- English question candidates extracted: **${totalQuestions}**\n- Source files with no machine-readable English candidates: **${noEnglish.length}**\n\n## Important limitations\n\n- These are text-extraction candidates. Equations, non-Latin text, columns, and scan quality need visual verification against the PDF.\n- Question booklets do not contain a verified answer key. Every record remains ineligible for scored quiz delivery until an answer key and reviewed two-line solution are added.\n- The two Hindi-medium compressed PDFs have no English candidate output and are retained through their raw text/source inventory for manual or OCR review.\n\n## Sources requiring manual extraction review\n\n${noEnglish.length ? noEnglish.map((source) => `- \`${source.source_file}\``).join('\n') : '- None'}\n`)
  await writeFile(path.join(outputRoot, 'README.md'), `# BPSC TRE PYQ data pack\n\nThis folder is generated from the original PDF booklets in \`TRE 1/\`, \`TRE 2/\`, and \`TRE 3/\`. It is a source-backed staging area, not a claim that every extracted item is ready to be scored.\n\n## Contents\n\n- \`catalog.json\` — source metadata and paths for every PDF.\n- \`source-index.csv\` — spreadsheet-friendly source index.\n- \`raw/\` — complete text extracted directly from each PDF.\n- \`questions/\` — one JSON document per source, with question candidates and traceable source references.\n- \`sources/\` — human-readable source inventories.\n- \`EXTRACTION_REPORT.md\` — extraction count and manual-review queue.\n\n## Quiz readiness\n\nFilter for \`quiz_eligible === true\`. Every generated record starts with \`quiz_eligible: false\`, \`correct_option: null\`, and two review-placeholder solution lines because the supplied PDFs do not include answer keys. Add a verified key and explanation, then set \`solution_status\` to \`verified\` before exposing an item in a scored quiz.\n\n## Regenerate\n\nRun \`node scripts/extract-pyq.mjs\` from the repository root after adding or replacing any PDF. It replaces generated output and leaves original PDFs untouched.\n`)
  await writeFile(path.join(outputRoot, 'SCHEMA.md'), `# Question record schema\n\nEach \`questions/*.json\` file contains \`{ metadata, questions }\`.\n\n| Field | Purpose |\n| --- | --- |\n| \`id\` | Unique generated identifier for quiz integration. |\n| \`metadata.frontend_category\` / \`metadata.frontend_subject\` | Mapping to the current frontend categories: \`gk\`, \`hindi\`, \`english\`, or \`subject\`. |\n| \`question_number\` | Number printed in the source booklet. |\n| \`question_text\` / \`options\` | Extracted English candidate text and choices. Validate against \`source_excerpt\` before use. |\n| \`correct_option\` | \`null\` until a verified answer key is attached. |\n| \`solution_lines\` | Exactly two lines reserved for the verified explanation. |\n| \`solution_status\` | Starts as \`needs_verified_answer_key\`; set to \`verified\` only after review. |\n| \`quiz_eligible\` | Must stay \`false\` until answer and explanation are verified. |\n| \`source_reference\` | PDF path, SHA-256 fingerprint, source question label, and traceable extraction reference. |\n\n## Frontend integration rule\n\nFilter for \`quiz_eligible === true\`, map \`question_text\` to the prompt, map \`options[].text\` to options, and convert \`correct_option\` from \`A\`–\`E\` to the UI’s zero-based answer index. Do not use a candidate merely because it parsed: PDF layouts, equations, and bilingual pages need source review.\n`)
}

main().catch((error) => { console.error(error); process.exitCode = 1 })

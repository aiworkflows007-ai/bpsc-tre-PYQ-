# BPSC TRE PYQ data pack

This folder is generated from the original PDF booklets in `TRE 1/`, `TRE 2/`, and `TRE 3/`. It is a source-backed staging area, not a claim that every extracted item is ready to be scored.

## Contents

- `catalog.json` — source metadata and paths for every PDF.
- `source-index.csv` — spreadsheet-friendly source index.
- `raw/` — complete text extracted directly from each PDF.
- `questions/` — one JSON document per source, with question candidates and traceable source references.
- `sources/` — human-readable source inventories.
- `EXTRACTION_REPORT.md` — extraction count and manual-review queue.

## Quiz readiness

Filter for `quiz_eligible === true`. Every generated record starts with `quiz_eligible: false`, `correct_option: null`, and two review-placeholder solution lines because the supplied PDFs do not include answer keys. Add a verified key and explanation, then set `solution_status` to `verified` before exposing an item in a scored quiz.

## Regenerate

Run `node scripts/extract-pyq.mjs` from the repository root after adding or replacing any PDF. It replaces generated output and leaves original PDFs untouched.

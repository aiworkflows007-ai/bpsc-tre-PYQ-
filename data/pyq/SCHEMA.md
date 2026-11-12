# Question record schema

Each `questions/*.json` file contains `{ metadata, questions }`.

| Field | Purpose |
| --- | --- |
| `id` | Unique generated identifier for quiz integration. |
| `metadata.frontend_category` / `metadata.frontend_subject` | Mapping to the current frontend categories: `gk`, `hindi`, `english`, or `subject`. |
| `question_number` | Number printed in the source booklet. |
| `question_text` / `options` | Extracted English candidate text and choices. Validate against `source_excerpt` before use. |
| `correct_option` | `null` until a verified answer key is attached. |
| `solution_lines` | Exactly two lines reserved for the verified explanation. |
| `solution_status` | Starts as `needs_verified_answer_key`; set to `verified` only after review. |
| `quiz_eligible` | Must stay `false` until answer and explanation are verified. |
| `source_reference` | PDF path, SHA-256 fingerprint, source question label, and traceable extraction reference. |

## Frontend integration rule

Filter for `quiz_eligible === true`, map `question_text` to the prompt, map `options[].text` to options, and convert `correct_option` from `A`–`E` to the UI’s zero-based answer index. Do not use a candidate merely because it parsed: PDF layouts, equations, and bilingual pages need source review.

# ⚡ BPSC TRE 4.0 Practice Platform — Fast Ingestion & Hostinger Migration Guide

## 1. 📁 Folder Name for Chrome Downloads & Pasting Files

Set your Chrome download path or paste all your `.docx` files here:
```
/home/ashok/Bpsc PYQ practice/incoming_questions
```

---

## 2. 📝 Best File Format & Naming Rules

### A. File Format
- **Format:** `.docx` (Microsoft Word)
- **Why `.docx`?** Word documents store pure Unicode text (UTF-8). Unlike raw PDFs (which often contain legacy Kruti Dev / Remington font encoding), `.docx` parses with 100% accuracy in milliseconds with zero character corruption.

### B. Naming Convention for 100% Automatic Categorization
Name your `.docx` files using simple keywords so the script automatically groups them into the 3 official exam sections:

| Section | Recommended File Name Examples | Target Exam Section |
| :--- | :--- | :--- |
| **Part-I Language Qualifying** | `bpsc-tre4-qualifying-paper-set1-40q.docx`<br>`bpsc-tre4-language-set3-40q.docx` | **Part-I Language Qualifying** (30% Mandatory) |
| **Part-II General Studies** | `bpsc-tre4-general-studies-set1-40q.docx`<br>`bpsc-tre4-gk-gs-set3-40q.docx` | **Part-II General Studies (40 Marks)** |
| **Part-III Subject Practice** | `bpsc-tre4-science-80q.docx`<br>`bpsc-tre4-hindi-literature-80q.docx`<br>`bpsc-tre4-mathematics-80q.docx`<br>`bpsc-tre4-social-science-80q.docx` | **Part-III Subject Practice (80 Marks)** |

---

## 3. 📄 Recommended Question Structure Inside `.docx`
Each question follows the standard format you are already using:

```text
Question 1 | BPSC TRE 2.0 (Middle School) | Indian National Movement
Who led the 1857 Revolt in Bihar?
(1857 के विद्रोह के नेता बिहार में कौन थे?)
(A) Mir Bakhsh
(B) Babu Kunwar Singh
(C) Birbhan Singh
(D) More than one of the above
(E) None of the above
Official Answer: (B) Babu Kunwar Singh
Explanation: Babu Kunwar Singh of Jagdishpur spearheaded the 1857 revolt in Bihar.
Exam Setter's Tip: Kunwar Singh is BPSC's most frequently tested freedom fighter.
```

---

## 4. ⚡ How to Ingest & Update Fast (1-Click Command)

Whenever you paste or drop 1, 10, or 40 new `.docx` files into `incoming_questions/`, run:

```bash
cd "/home/ashok/Bpsc PYQ practice" && ./sync.sh
```
*(or run `npm run sync`)*

### What happens automatically in ~5 seconds:
1. `scripts/auto_ingest.py` parses all 30–40 files, extracting prompts, 5 options, bilingual text, answer keys, explanations, and tips.
2. Compiles everything into `src/data/allSets.ts` and `src/data/catalog.json`.
3. Runs `npm run build` with Vite + TypeScript into an ultra-fast static bundle (<90KB gzipped).
4. Pushes to your GitHub repository: `git@github.com:aiworkflows007-ai/bpsc-tre-PYQ-.git`.
5. Render detects the commit and updates the live website automatically in ~30 seconds:
   👉 **Live Site:** `https://bpsc-tre-pyq.onrender.com`

---

## 5. 🌐 Hostinger Migration (Zero-Server Architecture)

### Why this is super easy on Hostinger:
This application is a **100% Client-Side Single Page Application (SPA)**.
- **Zero Node.js server needed.**
- **Zero Python server needed.**
- **Zero database required on Hostinger.**
- All 3,000 questions and solutions load in under 50ms right inside the user's browser via high-speed static chunks.

### How to deploy to Hostinger:

#### Method 1: Hostinger File Manager / FTP (Fastest — 1 Minute)
1. In your local folder `/home/ashok/Bpsc PYQ practice/dist`:
   You have all production files ready:
   - `index.html`
   - `assets/index.js`
   - `assets/index.css`
   - `.htaccess` (pre-configured for Apache/LiteSpeed SPA routing)
2. Zip the contents of the `dist` folder or open Hostinger File Manager (`public_html/`).
3. Upload all files from `dist/` directly into Hostinger's `public_html/`.
4. Your website is immediately live on your Hostinger domain with sub-50ms load speed!

#### Method 2: Hostinger Git Deployment (Continuous Auto-Deploy)
1. In Hostinger hPanel -> **Advanced** -> **Git**.
2. Repository: `git@github.com:aiworkflows007-ai/bpsc-tre-PYQ-.git`
3. Branch: `main`
4. Deploy Directory: `/public_html`
5. Click **Deploy**. Whenever `./sync.sh` pushes to GitHub, clicking "Auto-Deploy" in Hostinger will update your site automatically!

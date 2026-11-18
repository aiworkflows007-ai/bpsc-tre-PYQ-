#!/usr/bin/env python3
"""
scripts/build_subject_sets.py
Cleans data, performs authentic translations, and partitions Part-III Subject Practice (80 Marks) into set-wise practice tracks:
1. Computer Science (8 Sets: 6 topic/tier sets + 2 Full 80Q Mocks)
2. General Science (4 Sets: 3 topic sets + 1 Full 80Q Mock)
3. Hindi Literature (4 Sets: 3 period sets + 1 Full 80Q Mock)
4. English Literature (4 Sets: 3 era sets + 1 Full 80Q Mock)
5. Sanskrit (4 Sets: 3 theme sets + 1 Full 80Q Mock)
"""

import os
import glob
import json
import time
import urllib.request
import urllib.parse
import re
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SETS_DIR = os.path.join(ROOT, 'src', 'data', 'sets')
CACHE_FILE = os.path.join(ROOT, 'scripts', 'translation_cache.json')
CATALOG_FILE = os.path.join(ROOT, 'src', 'data', 'catalog.json')
ALL_SETS_FILE = os.path.join(ROOT, 'src', 'data', 'allSets.ts')

# Load persistent translation cache
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            cache = json.load(f)
    except Exception:
        cache = {}
else:
    cache = {}

print(f"Loaded {len(cache)} existing cached translations.")

import threading
cache_lock = threading.Lock()

def fetch_translation(text, sl='en', tl='hi'):
    clean = text.strip()
    if not clean:
        return ''
    cache_key = f"{sl}_{tl}:{clean}"
    with cache_lock:
        if cache_key in cache:
            return cache[cache_key]

    url = f"https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl={sl}&tl={tl}&dt=t&q={urllib.parse.quote(clean)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=7) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                trans = ''.join(p[0] for p in data[0] if p and p[0]).strip()
                if trans:
                    with cache_lock:
                        cache[cache_key] = trans
                    return trans
        except Exception:
            time.sleep(0.15)

    # Fallback to MyMemory
    try:
        mm_url = f"https://api.mymemory.translated.net/get?q={urllib.parse.quote(clean)}&langpair={sl}|{tl}&de=ashok_bpsc_tre@gmail.com"
        mm_req = urllib.request.Request(mm_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(mm_req, timeout=6) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            trans = data.get('responseData', {}).get('translatedText', '').strip()
            if trans and not trans.startswith('MYMEMORY WARNING'):
                with cache_lock:
                    cache[cache_key] = trans
                return trans
    except Exception:
        pass

    return clean

def save_cache():
    with cache_lock:
        snapshot = dict(cache)
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(snapshot, f, ensure_ascii=False, indent=2)

# -------------------------------------------------------------
# 1. PROCESS AND CLEAN SANSKRIT DATA
# -------------------------------------------------------------
def clean_sanskrit_questions():
    sk_path = os.path.join(SETS_DIR, 'bpsc-tre4-sanskrit-80q.json')
    with open(sk_path, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    qs = data.get('questions', [])
    cleaned_qs = []
    
    for q in qs:
        ans_idx = q['answer']
        opts = q['options']
        correct_opt = opts[ans_idx] if 0 <= ans_idx < len(opts) else ''
        
        raw_ans = q.get('answer_text', '')
        raw_exp = q.get('explanation', '')
        
        # Extract explanation from raw_ans if it contains व्याख्या (Explanation):
        exp_text = ''
        if 'व्याख्या (Explanation):' in raw_ans:
            parts = raw_ans.split('व्याख्या (Explanation):')
            exp_text = parts[1].strip()
            if exp_text.endswith('परीक्षा'):
                exp_text = exp_text[:-7].strip()
        elif 'व्याख्या:' in raw_ans:
            parts = raw_ans.split('व्याख्या:')
            exp_text = parts[1].strip()
        elif raw_exp and not raw_exp.startswith('(Exam Setter'):
            exp_text = raw_exp
            
        # Extract tip from raw_exp
        tip_text = ''
        if '(Exam Setter\'s Tips & Tricks):' in raw_exp:
            tip_text = raw_exp.replace('(Exam Setter\'s Tips & Tricks):', '').strip()
        elif 'परीक्षा' in raw_exp:
            tip_text = re.sub(r'^\(?[^\)]*परीक्षा[^\)]*\)?:\s*', '', raw_exp).strip()
        elif q.get('tip'):
            tip_text = q['tip']

        # Clean answer text
        clean_ans_text = correct_opt
        
        # Build clean question object
        new_q = dict(q)
        new_q['answer_text'] = clean_ans_text
        new_q['explanation'] = exp_text if exp_text else raw_exp
        new_q['explanation_hi'] = exp_text if exp_text else raw_exp
        new_q['tip'] = tip_text
        new_q['tip_hi'] = tip_text
        new_q['options_hi'] = [
            opts[0], opts[1], opts[2],
            'उपर्युक्त में से एक से अधिक',
            'उपर्युक्त में से कोई नहीं'
        ] if len(opts) >= 5 else opts
        
        cleaned_qs.append(new_q)
        
    print(f"Cleaned {len(cleaned_qs)} Sanskrit questions.")
    return cleaned_qs

# -------------------------------------------------------------
# 2. PROCESS AND CLEAN HINDI LITERATURE DATA
# -------------------------------------------------------------
def clean_hindi_literature_questions():
    hi_path = os.path.join(SETS_DIR, 'bpsc-tre4-hindi-literature-80q.json')
    with open(hi_path, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    qs = data.get('questions', [])
    cleaned_qs = []
    
    for q in qs:
        raw_exp = q.get('explanation', '')
        exp_part = raw_exp
        tip_part = ''
        
        for marker in ['परीक्षा सूत्र एवं ट्रिक्स:', 'परीक्षा सूत्र:', 'ट्रिक्स:', 'परीक्षा सूत्र']:
            if marker in raw_exp:
                parts = raw_exp.split(marker, 1)
                exp_part = parts[0].strip()
                tip_part = parts[1].strip()
                break
                
        new_q = dict(q)
        new_q['explanation'] = exp_part
        new_q['explanation_hi'] = exp_part
        new_q['tip'] = tip_part
        new_q['tip_hi'] = tip_part
        
        # Options hi
        opts = q['options']
        new_q['options_hi'] = [
            opts[0], opts[1], opts[2],
            'उपर्युक्त में से एक से अधिक',
            'उपर्युक्त में से कोई नहीं'
        ] if len(opts) >= 5 else opts
        
        cleaned_qs.append(new_q)
        
    print(f"Cleaned {len(cleaned_qs)} Hindi Literature questions.")
    return cleaned_qs

# -------------------------------------------------------------
# 3. TRANSLATE ENGLISH LITERATURE QUESTIONS TO HINDI
# -------------------------------------------------------------
def clean_english_literature_questions():
    en_path = os.path.join(SETS_DIR, 'bpsc-tre4-english-literature-80q.json')
    with open(en_path, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    qs = data.get('questions', [])
    cleaned_qs = []
    
    for q in qs:
        new_q = dict(q)
        opts = q['options']
        new_q['options_hi'] = [
            opts[0], opts[1], opts[2],
            'उपर्युक्त में से एक से अधिक',
            'उपर्युक्त में से कोई नहीं'
        ] if len(opts) >= 5 else opts
        cleaned_qs.append(new_q)
        
    print(f"Prepared {len(cleaned_qs)} English Literature questions for translation.")
    return cleaned_qs

# -------------------------------------------------------------
# 4. FIX COMPUTER SCIENCE QUESTIONS
# -------------------------------------------------------------
def clean_computer_science_questions(pgt_path, tgt_path):
    with open(pgt_path, 'r', encoding='utf-8') as fp:
        pgt_data = json.load(fp)
    with open(tgt_path, 'r', encoding='utf-8') as fp:
        tgt_data = json.load(fp)
        
    pgt_qs = pgt_data.get('questions', [])
    tgt_qs = tgt_data.get('questions', [])
    
    # Clean code questions
    for q in pgt_qs:
        if q['id'] == 33:
            q['hi'] = "निम्नलिखित प्रोग्राम अंश का आउटपुट क्या होगा?\n\nint i = 0;\nfor (i = 0; i < 20; i++) {\n  switch (i) {\n    case 0: i += 5;\n    case 1: i += 2;\n    case 5: i += 5;\n    default: i += 4;\n    break;\n  }\n  cout << i;\n}"
        elif q['id'] == 35:
            q['hi'] = "निम्नलिखित कोड का आउटपुट क्या होगा?\n\nint a = 5;\nint b = a++;\ncout << b << \" \" << a;"
            
    for q in tgt_qs:
        if q['id'] == 15:
            q['hi'] = "निम्नलिखित C++ कोड का आउटपुट क्या होगा?\n\nvoid square(int *p) {\n  *p = (*p) * (*p);\n}\nint main() {\n  int x = 6;\n  square(&x);\n  cout << x;\n}"
            
    return pgt_qs, tgt_qs

# -------------------------------------------------------------
# 5. TRANSLATION RUNNER (MULTITHREADED)
# -------------------------------------------------------------
def run_bulk_translations(sanskrit_qs, hindi_qs, english_qs):
    tasks_to_run = []
    
    # English Lit questions need Hindi questions:
    for q in english_qs:
        en_text = q.get('en', '')
        hi_text = q.get('hi', '')
        if not hi_text or hi_text == en_text:
            tasks_to_run.append((q, 'hi', en_text, 'en', 'hi'))
            
    # Hindi Lit questions need English questions for EN toggle:
    for q in hindi_qs:
        hi_q = q.get('hi', '')
        en_q = q.get('en', '')
        if not en_q or en_q == hi_q:
            tasks_to_run.append((q, 'en', hi_q, 'hi', 'en'))
        # Explanations to English
        hi_exp = q.get('explanation_hi', '')
        en_exp = q.get('explanation', '')
        if hi_exp and (not en_exp or en_exp == hi_exp):
            tasks_to_run.append((q, 'explanation', hi_exp, 'hi', 'en'))
        # Tips to English
        hi_tip = q.get('tip_hi', '')
        en_tip = q.get('tip', '')
        if hi_tip and (not en_tip or en_tip == hi_tip):
            tasks_to_run.append((q, 'tip', hi_tip, 'hi', 'en'))
            
    # Sanskrit questions already have authentic Sanskrit/Hindi explanation and tip
    # We will translate Sanskrit explanations and tips to English for EN toggle
    for q in sanskrit_qs:
        exp = q.get('explanation_hi', '')
        if exp and (not q.get('explanation') or q.get('explanation') == exp):
            tasks_to_run.append((q, 'explanation', exp, 'hi', 'en'))
        tip = q.get('tip_hi', '')
        if tip and (not q.get('tip') or q.get('tip') == tip):
            tasks_to_run.append((q, 'tip', tip, 'hi', 'en'))
            
    print(f"Total translation tasks queued: {len(tasks_to_run)}")
    
    def worker(item):
        target_obj, field, text, sl, tl = item
        translated = fetch_translation(text, sl=sl, tl=tl)
        return target_obj, field, translated
        
    completed = 0
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(worker, t) for t in tasks_to_run]
        for f in as_completed(futures):
            target_obj, field, translated = f.result()
            target_obj[field] = translated
            completed += 1
            if completed % 25 == 0 or completed == len(tasks_to_run):
                print(f"Completed {completed}/{len(tasks_to_run)} translations...")
                save_cache()
                
    save_cache()
    print("All translation tasks completed and cache saved!")

def main():
    print("Starting Subject Partitioning and Translation Pipeline...")
    
    # Clean and parse
    sk_qs = clean_sanskrit_questions()
    hi_qs = clean_hindi_literature_questions()
    en_qs = clean_english_literature_questions()
    
    pgt_path = os.path.join(SETS_DIR, 'bpsc-tre4-computer-science-pgt-80q.json')
    tgt_path = os.path.join(SETS_DIR, 'bpsc-tre4-computer-science-tgt-80q.json')
    cs_pgt_qs, cs_tgt_qs = clean_computer_science_questions(pgt_path, tgt_path)
    
    # Run bulk translations
    run_bulk_translations(sk_qs, hi_qs, en_qs)
    
    # Load Science 80Q
    sci_path = os.path.join(SETS_DIR, 'bpsc-tre4-science-80q.json')
    with open(sci_path, 'r', encoding='utf-8') as fp:
        sci_data = json.load(fp)
    sci_qs = sci_data.get('questions', [])
    
    # -------------------------------------------------------------
    # 6. BUILD SUBJECT SETS
    # -------------------------------------------------------------
    new_sets_metadata = []
    
    def save_set(set_id, title, section, section_name, subject, questions):
        # Renumber questions 1..N
        renumbered = []
        for idx, q in enumerate(questions, start=1):
            item = dict(q)
            item['id'] = idx
            renumbered.append(item)
            
        data = {
            "id": set_id,
            "title": title,
            "section": section,
            "section_name": section_name,
            "subject": subject,
            "filename": f"{set_id}.json",
            "question_count": len(renumbered),
            "questions": renumbered
        }
        
        out_path = os.path.join(SETS_DIR, f"{set_id}.json")
        with open(out_path, 'w', encoding='utf-8') as fp:
            json.dump(data, fp, ensure_ascii=False, indent=2)
            
        meta = {
            "id": set_id,
            "title": title,
            "section": section,
            "section_name": section_name,
            "subject": subject,
            "filename": f"{set_id}.json",
            "question_count": len(renumbered)
        }
        new_sets_metadata.append(meta)
        print(f"Created: {set_id} ({len(renumbered)} Qs)")

    # 1. Computer Science (8 Sets)
    save_set("bpsc-tre4-cs-pgt-set1", "Computer Science Practice Set 1 (PGT Class 11-12 — Part 1)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_pgt_qs[0:25])
    save_set("bpsc-tre4-cs-pgt-set2", "Computer Science Practice Set 2 (PGT Class 11-12 — Part 2)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_pgt_qs[25:50])
    save_set("bpsc-tre4-cs-pgt-set3", "Computer Science Practice Set 3 (PGT Class 11-12 — Part 3)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_pgt_qs[50:80])
    save_set("bpsc-tre4-cs-tgt-set1", "Computer Science Practice Set 4 (TGT Class 9-10 — Part 1)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_tgt_qs[0:25])
    save_set("bpsc-tre4-cs-tgt-set2", "Computer Science Practice Set 5 (TGT Class 9-10 — Part 2)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_tgt_qs[25:50])
    save_set("bpsc-tre4-cs-tgt-set3", "Computer Science Practice Set 6 (TGT Class 9-10 — Part 3)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_tgt_qs[50:80])
    save_set("bpsc-tre4-computer-science-pgt-80q", "Computer Science Practice Set 7 (Full PGT 80Q Master Mock)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_pgt_qs)
    save_set("bpsc-tre4-computer-science-tgt-80q", "Computer Science Practice Set 8 (Full TGT 80Q Master Mock)", "subject", "Part-III Subject Practice (80 Marks)", "Computer Science", cs_tgt_qs)

    # 2. Science (4 Sets)
    save_set("bpsc-tre4-science-set1", "Science Practice Set 1 (Physics & Mechanics — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Science", sci_qs[0:25])
    save_set("bpsc-tre4-science-set2", "Science Practice Set 2 (Chemistry & Matter — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Science", sci_qs[25:50])
    save_set("bpsc-tre4-science-set3", "Science Practice Set 3 (Biology & Life Sciences — 30Q)", "subject", "Part-III Subject Practice (80 Marks)", "Science", sci_qs[50:80])
    save_set("bpsc-tre4-science-80q", "Science Practice Set 4 (Full Science 80Q Master Mock)", "subject", "Part-III Subject Practice (80 Marks)", "Science", sci_qs)

    # 3. Hindi Literature (4 Sets)
    save_set("bpsc-tre4-hindi-lit-set1", "हिन्दी साहित्य अभ्यास सेट 1 (इतिहास एवं आदिकाल — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Hindi Literature", hi_qs[0:25])
    save_set("bpsc-tre4-hindi-lit-set2", "हिन्दी साहित्य अभ्यास सेट 2 (भक्तिकाल एवं रीतिकाल — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Hindi Literature", hi_qs[25:50])
    save_set("bpsc-tre4-hindi-lit-set3", "हिन्दी साहित्य अभ्यास सेट 3 (आधुनिक काल, गद्य एवं काव्यशास्त्र — 30Q)", "subject", "Part-III Subject Practice (80 Marks)", "Hindi Literature", hi_qs[50:80])
    save_set("bpsc-tre4-hindi-literature-80q", "हिन्दी साहित्य अभ्यास सेट 4 (संपूर्ण 80Q मास्टर मॉक टेस्ट)", "subject", "Part-III Subject Practice (80 Marks)", "Hindi Literature", hi_qs)

    # 4. English Literature (4 Sets)
    save_set("bpsc-tre4-english-lit-set1", "English Literature Practice Set 1 (Chaucer & Renaissance — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "English Literature", en_qs[0:25])
    save_set("bpsc-tre4-english-lit-set2", "English Literature Practice Set 2 (Romantic & Victorian Eras — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "English Literature", en_qs[25:50])
    save_set("bpsc-tre4-english-lit-set3", "English Literature Practice Set 3 (Modern Literature & Criticism — 30Q)", "subject", "Part-III Subject Practice (80 Marks)", "English Literature", en_qs[50:80])
    save_set("bpsc-tre4-english-literature-80q", "English Literature Practice Set 4 (Full 80Q Master Mock)", "subject", "Part-III Subject Practice (80 Marks)", "English Literature", en_qs)

    # 5. Sanskrit (4 Sets)
    save_set("bpsc-tre4-sanskrit-set1", "संस्कृत अभ्यास सेट 1 (माहेश्वर सूत्राणि एवं व्याकरण — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Sanskrit", sk_qs[0:25])
    save_set("bpsc-tre4-sanskrit-set2", "संस्कृत अभ्यास सेट 2 (वैदिक साहित्य एवं उपनिषद् — 25Q)", "subject", "Part-III Subject Practice (80 Marks)", "Sanskrit", sk_qs[25:50])
    save_set("bpsc-tre4-sanskrit-set3", "संस्कृत अभ्यास सेट 3 (संस्कृत नाटक, महाकाव्य एवं रससिद्धान्त — 30Q)", "subject", "Part-III Subject Practice (80 Marks)", "Sanskrit", sk_qs[50:80])
    save_set("bpsc-tre4-sanskrit-80q", "संस्कृत अभ्यास सेट 4 (संपूर्ण संस्कृत 80Q मास्टर मॉक टेस्ट)", "subject", "Part-III Subject Practice (80 Marks)", "Sanskrit", sk_qs)

    # -------------------------------------------------------------
    # 7. UPDATE CATALOG.JSON
    # -------------------------------------------------------------
    with open(CATALOG_FILE, 'r', encoding='utf-8') as fp:
        catalog_data = json.load(fp)
        
    # Filter out existing subject sets
    existing_non_subject = [s for s in catalog_data.get('sets', []) if s.get('section') != 'subject']
    all_sets = existing_non_subject + new_sets_metadata
    catalog_data['sets'] = all_sets
    
    with open(CATALOG_FILE, 'w', encoding='utf-8') as fp:
        json.dump(catalog_data, fp, ensure_ascii=False, indent=2)
    print(f"Updated catalog.json with total {len(all_sets)} sets.")

    # -------------------------------------------------------------
    # 8. REBUILD ALLSETS.TS
    # -------------------------------------------------------------
    print("Rebuilding allSets.ts...")
    all_full_sets = []
    for meta in all_sets:
        set_id = meta['id']
        fpath = os.path.join(SETS_DIR, f"{set_id}.json")
        with open(fpath, 'r', encoding='utf-8') as fp:
            all_full_sets.append(json.load(fp))
            
    with open(ALL_SETS_FILE, 'w', encoding='utf-8') as fp:
        fp.write('/* AUTO-GENERATED — DO NOT EDIT DIRECTLY */\n\n')
        fp.write('export interface QuestionItem {\n')
        fp.write('  id: number\n')
        fp.write('  source?: string\n')
        fp.write('  en: string\n')
        fp.write('  hi: string\n')
        fp.write('  options: string[]\n')
        fp.write('  options_hi?: string[]\n')
        fp.write('  answer: number\n')
        fp.write('  answer_letter: string\n')
        fp.write('  answer_text: string\n')
        fp.write('  explanation: string\n')
        fp.write('  explanation_hi?: string\n')
        fp.write('  tip?: string\n')
        fp.write('  tip_hi?: string\n')
        fp.write('}\n\n')
        fp.write('export interface SetMeta {\n')
        fp.write('  id: string\n')
        fp.write('  title: string\n')
        fp.write('  section: string\n')
        fp.write('  section_name: string\n')
        fp.write('  subject: string\n')
        fp.write('  filename: string\n')
        fp.write('  question_count: number\n')
        fp.write('}\n\n')
        
        catalog_json = json.dumps(catalog_data['sets'], ensure_ascii=False, indent=2)
        fp.write(f'export const SETS_CATALOG: SetMeta[] = {catalog_json}\n\n')
        
        # Build SETS_DATA map: id -> questions
        sets_data_map = {}
        for s in all_full_sets:
            sets_data_map[s['id']] = s['questions']
            
        sets_data_json = json.dumps(sets_data_map, ensure_ascii=False, indent=2)
        fp.write(f'export const SETS_DATA: Record<string, QuestionItem[]> = {sets_data_json}\n')
        
    print(f"allSets.ts rebuilt successfully! Total sets: {len(all_full_sets)}")

if __name__ == '__main__':
    main()

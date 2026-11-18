#!/usr/bin/env python3
import os
import glob
import zipfile
import xml.etree.ElementTree as ET
import re
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INCOMING_DIR = os.path.join(ROOT, 'incoming_questions')
SETS_DIR = os.path.join(ROOT, 'src', 'data', 'sets')
CATALOG_FILE = os.path.join(ROOT, 'src', 'data', 'catalog.json')

os.makedirs(SETS_DIR, exist_ok=True)

BULLET_PREFIX = r'(?:[•✔\-\*\s💡📌👉⚡]+)?'
ANS_HEADERS = rf'{BULLET_PREFIX}(?:Official|Correct|Right|Technical|आधिकारिक|सही)?\s*(?:Answer(?:\s*Key)?|Key|उत्तर(?:म्)?(?:\s*\([^)]*\))?)'
EXPL_HEADERS = rf'{BULLET_PREFIX}(?:Detailed\s+)?(?:Technical\s+)?(?:2-Line\s+)?(?:विस्तृत\s+)?(?:आधिकारिक\s+)?(?:Official\s+)?(?:Explanation|व्याख्या|स्पष्टीकरण(?:\s*\([^)]*\))?)'
TIP_HEADERS = rf'{BULLET_PREFIX}(?:Exam\s+Setter\'?s?|परीक्षा|परीक्षा-संकेतः)?\s*(?:Tips?(?:\s*(?:&|and|/)?\s*(?:Quick\s*)?Tricks?)?|टिप(?:्स)?(?:\s*और\s*ट्रिक्स)?|संकेतः?|Tricks?)'
COLON = r'[:ः]'

def extract_paras_from_docx(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        paras = []
        for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            texts = [node.text or '' for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t')]
            line = ''.join(texts).strip()
            if line:
                paras.append(line)
        return paras

def extract_docx_tables_keys(docx_path):
    keys = {}
    with zipfile.ZipFile(docx_path) as z:
        tree = ET.fromstring(z.read('word/document.xml'))
        tables = tree.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tbl')
        for t in tables:
            rows = t.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr')
            if len(rows) < 5:
                continue
            for r in rows:
                cells = [''.join([n.text or '' for n in c.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t')]).strip() for c in r.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc')]
                for i, c in enumerate(cells):
                    qm = re.search(r'(?:Q\.?|प्र(?:श्न)?\.?|प्र०)?\s*(\d+)', c, re.I)
                    if qm:
                        try:
                            qnum = int(qm.group(1))
                        except:
                            continue
                        for j in range(i+1, len(cells)):
                            km = re.search(r'\(?([A-E])\)?', cells[j], re.I)
                            if km and len(cells[j].strip()) <= 6:
                                if qnum not in keys:
                                    keys[qnum] = km.group(1).upper()
                                break
    return keys

def parse_docx_questions(docx_path, table_keys=None):
    if table_keys is None:
        table_keys = {}
    paras = extract_paras_from_docx(docx_path)
    q_pattern = re.compile(r'^(?:Q\.\s*|Question\s+|प्रश्न[ः:]?\s*|\bQ)(\d+)', re.I)
    
    raw_questions = []
    i = 0
    while i < len(paras):
        p = paras[i]
        m = q_pattern.match(p)
        if m:
            q_num = int(m.group(1))
            chunk = [p]
            j = i + 1
            while j < len(paras) and not q_pattern.match(paras[j]):
                if 'STUDENT PRACTICE MOCK' in paras[j] or 'अभ्यास हेतु मॉक' in paras[j]:
                    break
                chunk.append(paras[j])
                j += 1
            
            chunk_text = '\n'.join(chunk)
            
            # Must have options (A) and (B) to be a valid question
            if '(A)' in chunk_text and '(B)' in chunk_text:
                # 1. Isolate the options part before any metadata
                m_meta = re.search(rf'(?:\n|\s+)(?:{ANS_HEADERS}|{EXPL_HEADERS}|{TIP_HEADERS}){COLON}', chunk_text, re.I)
                options_part = chunk_text[:m_meta.start()] if m_meta else chunk_text
                
                # 2. Extract options (A) through (E)
                opts = []
                opt_matches = list(re.finditer(r'\(([A-E])\)\s*', options_part))
                if len(opt_matches) >= 4:
                    for k in range(len(opt_matches)):
                        start = opt_matches[k].end()
                        end = opt_matches[k+1].start() if k+1 < len(opt_matches) else len(options_part)
                        opt_str = options_part[start:end].strip()
                        opt_str = re.split(rf'(?:{ANS_HEADERS}|{EXPL_HEADERS}|{TIP_HEADERS}){COLON}', opt_str, flags=re.I)[0].strip()
                        opt_str = re.sub(r'\[.*?\]', '', opt_str).strip()
                        opts.append(opt_str)
                
                # Clean Option (D) and Option (E) to remove any leaked tips or text
                if len(opts) >= 4:
                    if re.search(r'More than one of the above', opts[3], re.I) or re.search(r'एक से अधिक', opts[3]):
                        opts[3] = 'More than one of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से एक से अधिक'
                if len(opts) >= 5:
                    if re.search(r'None of the above', opts[4], re.I) or re.search(r'कोई नहीं', opts[4]):
                        opts[4] = 'None of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से कोई नहीं'
                
                # Extra sweep on all options to strip any remaining leaked headers or emojis
                for o_idx in range(len(opts)):
                    clean_opt = re.split(r'(?:\n|\s*)(?:[•✔\-\*\s💡📌👉⚡]*(?:Exam\s+Setter|Official|Detailed|Explanation|व्याख्या|Tips?|Key))', opts[o_idx], flags=re.I)[0].strip()
                    opts[o_idx] = clean_opt

                # 3. Extract Answer Letter and Answer Text
                ans_m = re.search(rf'{ANS_HEADERS}{COLON}\s*\(?([A-E])\)?\s*(.*?)(?=(?:{EXPL_HEADERS}|{TIP_HEADERS}){COLON}|$)', chunk_text, re.I | re.DOTALL)
                if ans_m:
                    ans_letter = ans_m.group(1).upper()
                    ans_text = ans_m.group(2).strip()
                    ans_text = re.sub(r'^[•✔\-\*\s]+|[•✔\-\*\s]+$', '', ans_text).strip()
                    ans_text = re.split(rf'(?:{EXPL_HEADERS}|{TIP_HEADERS}){COLON}', ans_text, flags=re.I)[0].strip()
                elif q_num in table_keys:
                    ans_letter = table_keys[q_num]
                    ans_text = ''
                else:
                    ans_letter = 'A'
                    ans_text = ''
                
                # 4. Extract Explanation
                expl_m = re.search(rf'{EXPL_HEADERS}{COLON}\s*(.*?)(?=(?:{TIP_HEADERS}|{ANS_HEADERS}){COLON}|$)', chunk_text, re.I | re.DOTALL)
                expl = expl_m.group(1).strip() if expl_m else ''
                expl = re.sub(r'^[•✔\-\*\s💡📌👉⚡]+|[•✔\-\*\s💡📌👉⚡]+$', '', expl).strip()
                
                # 5. Extract Tip
                tip_m = re.search(rf'{TIP_HEADERS}{COLON}\s*(.*?)(?=(?:{ANS_HEADERS}|{EXPL_HEADERS}){COLON}|$)', chunk_text, re.I | re.DOTALL)
                tip = tip_m.group(1).strip() if tip_m else ''
                tip = re.sub(r'^[•✔\-\*\s💡📌👉⚡]+|[•✔\-\*\s💡📌👉⚡]+$', '', tip).strip()
                
                # If expl is empty but tip exists, make sure candidate has explanation
                if not expl and tip:
                    expl = tip

                # 6. Prompt Extraction
                prompt_end = options_part.find('(A)')
                prompt_raw = options_part[:prompt_end].strip() if prompt_end > 0 else chunk[0]
                
                # Source tag
                source = ''
                src_m = re.search(r'\[(.*?)\]', chunk_text)
                if src_m:
                    source = src_m.group(1).strip()
                else:
                    pipe_parts = prompt_raw.split('\n')[0].split('|')
                    if len(pipe_parts) > 1:
                        source = ' | '.join(pt.strip() for pt in pipe_parts[1:])
                        remaining_lines = prompt_raw.split('\n')[1:]
                        prompt_raw = '\n'.join(remaining_lines).strip()
                        
                prompt_raw = re.sub(r'^(?:Q\.\s*|Question\s+|प्रश्न[ः:]?\s*|\bQ)\d+[\.\s\|\:]*', '', prompt_raw, flags=re.I).strip()
                prompt_raw = re.sub(r'\(Set\s*Q\.\d+\)', '', prompt_raw, flags=re.I).strip()
                if src_m:
                    prompt_raw = prompt_raw.replace(src_m.group(0), '').strip()
                    
                # Bilingual Prompt Splitting
                paren_hi = re.search(r'\(([^)]*[\u0900-\u097F][^)]*)\)\s*$', prompt_raw)
                paren_en = re.search(r'\(([A-Za-z0-9\s\?\,\.\'\-]+)\)\s*$', prompt_raw)
                if paren_hi:
                    en_prompt = prompt_raw[:paren_hi.start()].strip()
                    hi_prompt = paren_hi.group(1).strip()
                elif paren_en:
                    hi_prompt = prompt_raw[:paren_en.start()].strip()
                    en_prompt = paren_en.group(1).strip()
                else:
                    dev_m = re.search(r'[\u0900-\u097F]', prompt_raw)
                    if dev_m and dev_m.start() > 3 and not re.search(r'[\u0900-\u097F]', prompt_raw[:dev_m.start()]):
                        en_prompt = prompt_raw[:dev_m.start()].strip()
                        hi_prompt = prompt_raw[dev_m.start():].strip()
                    else:
                        lines = [l.strip() for l in prompt_raw.split('\n') if l.strip()]
                        if len(lines) >= 2 and re.search(r'[\u0900-\u097F]', lines[-1]) and not re.search(r'[\u0900-\u097F]', lines[0]):
                            en_prompt = '\n'.join(lines[:-1]).strip()
                            hi_prompt = lines[-1].strip()
                        else:
                            en_prompt = prompt_raw
                            hi_prompt = prompt_raw
                
                # Standardize 5 Options
                while len(opts) < 5:
                    if len(opts) == 3: opts.append('More than one of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से एक से अधिक')
                    elif len(opts) == 4: opts.append('None of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से कोई नहीं')
                    else: opts.append(f"Option {chr(65 + len(opts))}")
                
                ans_idx = max(0, min(4, ord(ans_letter) - ord('A')))
                if not ans_text and len(opts) > ans_idx:
                    ans_text = opts[ans_idx]
                    
                raw_questions.append({
                    'raw_num': q_num,
                    'source': source or 'BPSC Official Exam Booklet',
                    'en': en_prompt,
                    'hi': hi_prompt,
                    'options': opts[:5],
                    'answer': ans_idx,
                    'answer_letter': ans_letter,
                    'answer_text': ans_text,
                    'explanation': expl,
                    'tip': tip
                })
            i = j
        else:
            i += 1
            
    return raw_questions

def make_question_signature(q):
    clean = re.sub(r'\[.*?\]|\(.*?\)', '', q['en'])
    sig = re.sub(r'[^a-zA-Z0-9\u0900-\u097F]', '', clean.lower())[:70]
    return sig

def main():
    files = sorted(glob.glob(os.path.join(INCOMING_DIR, '*.docx')))
    print(f'Starting Auto-Ingest: Found {len(files)} active files in {INCOMING_DIR}')
    
    # Clean previous sets directory
    for old_json in glob.glob(os.path.join(SETS_DIR, '*.json')):
        os.remove(old_json)
        
    catalog = []
    all_sets_data = {}
    global_seen_signatures = set()
    total_unique_questions = 0

    for f in files:
        base = os.path.basename(f)
        if base.startswith('~$') or '_archive_duplicates' in f:
            continue

        table_keys = extract_docx_tables_keys(f)
        raw_qs = parse_docx_questions(f, table_keys)
        if not raw_qs:
            print(f'  ⚠️ Skipped (no valid questions found): {base}')
            continue
            
        print(f"\n📂 Processing file: {base} ({len(raw_qs)} total raw questions, {len(table_keys)} table keys)")

        # Case 1: Master Qualifying Paper -> Split into distinct English and Hindi sets!
        if 'master-qualifying' in base.lower():
            # In the 120Q master file:
            # Set 1: Q1-15 English, Q16-40 Hindi
            # Set 2: Q41-55 English, Q56-80 Hindi
            # Set 3: Q81-95 English, Q96-119 Hindi
            qualifying_slices = [
                # English Language Sets (100% English)
                {
                    'id': 'bpsc-tre4-qualifying-english-set1',
                    'title': 'English Language Practice Set 1 (15Q)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'English Language',
                    'raw_slice': raw_qs[0:15],
                    'is_english_only': True
                },
                {
                    'id': 'bpsc-tre4-qualifying-english-set2',
                    'title': 'English Language Practice Set 2 (15Q)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'English Language',
                    'raw_slice': raw_qs[40:55],
                    'is_english_only': True
                },
                {
                    'id': 'bpsc-tre4-qualifying-english-set3',
                    'title': 'English Language Practice Set 3 (15Q)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'English Language',
                    'raw_slice': raw_qs[80:95],
                    'is_english_only': True
                },
                # General Hindi Sets (100% Hindi)
                {
                    'id': 'bpsc-tre4-qualifying-hindi-set1',
                    'title': 'सामान्य हिन्दी अभ्यास सेट 1 (25 प्रश्न)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'General Hindi',
                    'raw_slice': raw_qs[15:40],
                    'is_hindi_only': True
                },
                {
                    'id': 'bpsc-tre4-qualifying-hindi-set2',
                    'title': 'सामान्य हिन्दी अभ्यास सेट 2 (25 प्रश्न)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'General Hindi',
                    'raw_slice': raw_qs[55:80],
                    'is_hindi_only': True
                },
                {
                    'id': 'bpsc-tre4-qualifying-hindi-set3',
                    'title': 'सामान्य हिन्दी अभ्यास सेट 3 (24 प्रश्न)',
                    'section': 'qualifying',
                    'section_name': 'Part-I Language Qualifying',
                    'subject': 'General Hindi',
                    'raw_slice': raw_qs[95:119],
                    'is_hindi_only': True
                }
            ]

            for s_cfg in qualifying_slices:
                clean_qs = []
                for q in s_cfg['raw_slice']:
                    sig = make_question_signature(q)
                    if sig and sig in global_seen_signatures:
                        continue
                    if sig: global_seen_signatures.add(sig)
                    q_clean = dict(q)
                    q_clean.pop('raw_num', None)
                    q_clean['id'] = len(clean_qs) + 1
                    
                    # Ensure pure English or pure Hindi presentation as requested
                    if s_cfg.get('is_english_only'):
                        q_clean['hi'] = q_clean['en']
                    elif s_cfg.get('is_hindi_only'):
                        q_clean['en'] = q_clean['hi']
                        # Standardize Hindi 5 options
                        if len(q_clean['options']) >= 5:
                            q_clean['options'][3] = 'उपर्युक्त में से एक से अधिक'
                            q_clean['options'][4] = 'उपर्युक्त में से कोई नहीं'

                    clean_qs.append(q_clean)
                
                if clean_qs:
                    meta = {
                        'id': s_cfg['id'],
                        'title': s_cfg['title'],
                        'section': s_cfg['section'],
                        'section_name': s_cfg['section_name'],
                        'subject': s_cfg['subject'],
                        'filename': base,
                        'question_count': len(clean_qs),
                        'questions': clean_qs
                    }
                    with open(os.path.join(SETS_DIR, f"{s_cfg['id']}.json"), 'w', encoding='utf-8') as out:
                        json.dump(meta, out, ensure_ascii=False, indent=2)
                    cat_item = {k: v for k, v in meta.items() if k != 'questions'}
                    catalog.append(cat_item)
                    all_sets_data[s_cfg['id']] = clean_qs
                    total_unique_questions += len(clean_qs)
                    print(f"  ✓ Created Qualifying Set: {s_cfg['title']} ({len(clean_qs)} questions)")

        # Case 2: Master General Studies File (14 sets of 40)
        elif 'general-studies' in base.lower() and ('master' in base.lower() or len(raw_qs) > 80):
            chunk_size = 40
            raw_chunks = []
            for idx in range(0, len(raw_qs), chunk_size):
                chunk = raw_qs[idx:idx + chunk_size]
                if len(chunk) < 15 and raw_chunks:
                    raw_chunks[-1].extend(chunk)
                else:
                    raw_chunks.append(chunk)

            for idx, subset_raw in enumerate(raw_chunks):
                clean_qs = []
                for q in subset_raw:
                    sig = make_question_signature(q)
                    if sig and sig in global_seen_signatures:
                        continue
                    if sig: global_seen_signatures.add(sig)
                    q_clean = dict(q)
                    q_clean.pop('raw_num', None)
                    q_clean['id'] = len(clean_qs) + 1
                    clean_qs.append(q_clean)

                if clean_qs:
                    set_num = idx + 1
                    set_id = f"bpsc-tre4-general-studies-set{set_num}"
                    title = f"General Studies Practice Set {set_num} ({len(clean_qs)}Q)"
                    meta = {
                        'id': set_id,
                        'title': title,
                        'section': 'gk_gs',
                        'section_name': 'Part-II General Studies (40 Marks)',
                        'subject': 'General Studies',
                        'filename': base,
                        'question_count': len(clean_qs),
                        'questions': clean_qs
                    }
                    with open(os.path.join(SETS_DIR, f"{set_id}.json"), 'w', encoding='utf-8') as out:
                        json.dump(meta, out, ensure_ascii=False, indent=2)
                    cat_item = {k: v for k, v in meta.items() if k != 'questions'}
                    catalog.append(cat_item)
                    all_sets_data[set_id] = clean_qs
                    total_unique_questions += len(clean_qs)
                    print(f"  ✓ Created Set: {title} ({len(clean_qs)} questions)")

        # Case 3: Computer Science 160Q (Set 1 PGT 80Q, Set 2 TGT 80Q)
        elif 'computer-science' in base.lower():
            sets_info = [
                ('bpsc-tre4-computer-science-pgt-80q', 'Computer Science Practice Set 1 (PGT Class 11-12 - 80Q)', 0, 80),
                ('bpsc-tre4-computer-science-tgt-80q', 'Computer Science Practice Set 2 (TGT Class 9-10 - 80Q)', 80, 160),
            ]
            for set_id, title, start_idx, end_idx in sets_info:
                subset_raw = raw_qs[start_idx:end_idx]
                clean_qs = []
                for q in subset_raw:
                    sig = make_question_signature(q)
                    if sig and sig in global_seen_signatures:
                        continue
                    if sig: global_seen_signatures.add(sig)
                    q_clean = dict(q)
                    q_clean.pop('raw_num', None)
                    q_clean['id'] = len(clean_qs) + 1
                    clean_qs.append(q_clean)

                if clean_qs:
                    meta = {
                        'id': set_id,
                        'title': title,
                        'section': 'subject',
                        'section_name': 'Part-III Subject Practice (80 Marks)',
                        'subject': 'Computer Science',
                        'filename': base,
                        'question_count': len(clean_qs),
                        'questions': clean_qs
                    }
                    with open(os.path.join(SETS_DIR, f"{set_id}.json"), 'w', encoding='utf-8') as out:
                        json.dump(meta, out, ensure_ascii=False, indent=2)
                    cat_item = {k: v for k, v in meta.items() if k != 'questions'}
                    catalog.append(cat_item)
                    all_sets_data[set_id] = clean_qs
                    total_unique_questions += len(clean_qs)
                    print(f"  ✓ Created Set: {title} ({len(clean_qs)} questions)")

        # Case 4: Other Single Subject Files (Science, Hindi Lit, English Lit, Sanskrit)
        else:
            clean_qs = []
            for q in raw_qs:
                sig = make_question_signature(q)
                if sig and sig in global_seen_signatures:
                    continue
                if sig: global_seen_signatures.add(sig)
                q_clean = dict(q)
                q_clean.pop('raw_num', None)
                q_clean['id'] = len(clean_qs) + 1
                clean_qs.append(q_clean)

            if clean_qs:
                clean_base = re.sub(r'[\.\s\-\_]+', '-', base.lower().replace('.docx', ''))
                subject_name = 'Subject Practice'
                if 'science' in clean_base: subject_name = 'Science'
                elif 'hindi' in clean_base: subject_name = 'Hindi Literature'
                elif 'english' in clean_base: subject_name = 'English Literature'
                elif 'sanskrit' in clean_base: subject_name = 'Sanskrit'
                
                title = f"{subject_name} Practice ({len(clean_qs)}Q)"
                meta = {
                    'id': clean_base,
                    'title': title,
                    'section': 'subject',
                    'section_name': 'Part-III Subject Practice (80 Marks)',
                    'subject': subject_name,
                    'filename': base,
                    'question_count': len(clean_qs),
                    'questions': clean_qs
                }
                with open(os.path.join(SETS_DIR, f"{clean_base}.json"), 'w', encoding='utf-8') as out:
                    json.dump(meta, out, ensure_ascii=False, indent=2)
                cat_item = {k: v for k, v in meta.items() if k != 'questions'}
                catalog.append(cat_item)
                all_sets_data[clean_base] = clean_qs
                total_unique_questions += len(clean_qs)
                print(f"  ✓ Created Set: {title} ({len(clean_qs)} questions)")

    # Sort catalog so subjects and sets appear in natural sequence
    catalog.sort(key=lambda x: (x['section'], x['subject'], x['id']))

    catalog_data = {
        'total_sets': len(catalog),
        'total_questions': total_unique_questions,
        'sets': catalog
    }
    with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)

    # Export allSets.ts
    all_sets_ts = os.path.join(ROOT, 'src', 'data', 'allSets.ts')
    with open(all_sets_ts, 'w', encoding='utf-8') as f:
        f.write("/* AUTO-GENERATED BY scripts/auto_ingest.py — DO NOT EDIT DIRECTLY */\n\n")
        f.write("export interface QuestionItem {\n")
        f.write("  id: number\n")
        f.write("  source: string\n")
        f.write("  en: string\n")
        f.write("  hi: string\n")
        f.write("  options: string[]\n")
        f.write("  options_hi?: string[]\n")
        f.write("  answer: number\n")
        f.write("  answer_letter: string\n")
        f.write("  answer_text: string\n")
        f.write("  explanation: string\n")
        f.write("  explanation_hi?: string\n")
        f.write("  tip: string\n")
        f.write("  tip_hi?: string\n")
        f.write("  raw_num?: number\n")
        f.write("}\n\n")
        f.write("export interface SetMeta {\n")
        f.write("  id: string\n")
        f.write("  title: string\n")
        f.write("  section: string\n")
        f.write("  section_name: string\n")
        f.write("  subject: string\n")
        f.write("  filename: string\n")
        f.write("  question_count: number\n")
        f.write("}\n\n")
        f.write("export const SETS_CATALOG: SetMeta[] = ")
        f.write(json.dumps(catalog, ensure_ascii=False, indent=2))
        f.write(";\n\n")
        f.write("export const SETS_DATA: Record<string, QuestionItem[]> = ")
        f.write(json.dumps(all_sets_data, ensure_ascii=False, indent=2))
        f.write(";\n")

    print("\n🎉 DEDUPLICATION & RE-INGEST COMPLETE!")
    print(f"Total Sets Created: {len(catalog)}")
    print(f"Total Unique Questions: {total_unique_questions}")
    print(f"Catalog written to: {CATALOG_FILE}")
    print(f"TypeScript data module written to: {all_sets_ts}")

if __name__ == '__main__':
    main()

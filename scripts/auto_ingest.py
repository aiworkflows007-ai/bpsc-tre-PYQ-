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

# Standard regex headers for answer, explanation, and tips across BPSC documents
ANS_HEADERS = r'(?:[•✔\-\*\s]*(?:Official|Correct|Right|आधिकारिक|सही|Technical)?\s*(?:Answer|Key|उत्तर(?:म्)?(?:\s*\([^)]*\))?))'
EXPL_HEADERS = r'(?:[•✔\-\*\s]*(?:Technical|2-Line|Detailed|विस्तृत|आधिकारिक|Official)?\s*(?:Explanation|व्याख्या(?:\s*\([^)]*\))?))'
TIP_HEADERS = r'(?:[•✔\-\*\s]*(?:Exam\s+Setter\'?s?|परीक्षा|परीक्षा-संकेतः)?\s*(?:Tips?(?:\s*(?:&|and|/)\s*Tricks?)?|टिप(?:्स)?(?:\s*और\s*ट्रिक्स)?|संकेतः?))'

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

def parse_docx_questions(docx_path):
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
                # Stop if it is a repeated student mock
                if 'STUDENT PRACTICE MOCK' in paras[j] or 'अभ्यास हेतु मॉक' in paras[j]:
                    break
                chunk.append(paras[j])
                j += 1
            
            chunk_text = '\n'.join(chunk)
            
            # Must have options (A) and (B) to be a valid question
            if '(A)' in chunk_text and '(B)' in chunk_text:
                ans_split = re.split(rf'{ANS_HEADERS}:', chunk_text, flags=re.I)
                before_ans = ans_split[0]
                
                # Extract options (A) through (E)
                opts = []
                opt_matches = list(re.finditer(r'\(([A-E])\)\s*', before_ans))
                if len(opt_matches) >= 4:
                    for k in range(len(opt_matches)):
                        start = opt_matches[k].end()
                        end = opt_matches[k+1].start() if k+1 < len(opt_matches) else len(before_ans)
                        opt_str = before_ans[start:end].strip()
                        opt_str = re.split(rf'(?:{ANS_HEADERS}|{EXPL_HEADERS}|{TIP_HEADERS}):', opt_str, flags=re.I)[0].strip()
                        opt_str = re.sub(r'\[.*?\]', '', opt_str).strip()
                        opts.append(opt_str)
                
                # Extract Answer Letter and Answer Text
                ans_m = re.search(rf'{ANS_HEADERS}:\s*\(?([A-E])\)?\s*(.*?)(?=(?:{EXPL_HEADERS}|{TIP_HEADERS}):|$)', chunk_text, re.I | re.DOTALL)
                ans_letter = ans_m.group(1).upper() if ans_m else 'A'
                ans_text = ans_m.group(2).strip() if ans_m else ''
                ans_text = re.sub(r'^[•✔\-\*\s]+|[•✔\-\*\s]+$', '', ans_text).strip()
                ans_text = re.split(rf'(?:{EXPL_HEADERS}|{TIP_HEADERS}):', ans_text, flags=re.I)[0].strip()
                
                # Extract Explanation
                expl_m = re.search(rf'{EXPL_HEADERS}:\s*(.*?)(?=(?:{TIP_HEADERS}):|$)', chunk_text, re.I | re.DOTALL)
                expl = expl_m.group(1).strip() if expl_m else ''
                expl = re.sub(r'^[•✔\-\*\s]+|[•✔\-\*\s]+$', '', expl).strip()
                
                # Extract Tip
                tip_m = re.search(rf'{TIP_HEADERS}:\s*(.*)$', chunk_text, re.I | re.DOTALL)
                tip = tip_m.group(1).strip() if tip_m else ''
                tip = re.sub(r'^[•✔\-\*\s]+|[•✔\-\*\s]+$', '', tip).strip()
                
                # Prompt Extraction
                prompt_end = before_ans.find('(A)')
                prompt_raw = before_ans[:prompt_end].strip() if prompt_end > 0 else chunk[0]
                
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

        raw_qs = parse_docx_questions(f)
        if not raw_qs:
            print(f'  ⚠️ Skipped (no valid questions found): {base}')
            continue
            
        print(f"\n📂 Processing file: {base} ({len(raw_qs)} total raw questions)")

        # Case 1: Master Qualifying Paper (3 sets of 40)
        if 'master-qualifying' in base.lower():
            sets_slices = [
                ('bpsc-tre4-qualifying-set1', 'Language Qualifying Practice Set 1 (40Q)', 0, 40),
                ('bpsc-tre4-qualifying-set2', 'Language Qualifying Practice Set 2 (40Q)', 40, 80),
                ('bpsc-tre4-qualifying-set3', 'Language Qualifying Practice Set 3 (40Q)', 80, 120),
            ]
            for set_id, title, start_idx, end_idx in sets_slices:
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
                        'section': 'qualifying',
                        'section_name': 'Part-I Language Qualifying',
                        'subject': 'Language Qualifying',
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

        # Case 3: Computer Science Master File (2 sets of 80)
        elif 'computer-science' in base.lower() and len(raw_qs) > 80:
            cs_slices = [
                ('bpsc-tre4-computer-science-pgt-80q', 'Computer Science Practice Set 1 (PGT Class 11-12 - 80Q)', 0, 80),
                ('bpsc-tre4-computer-science-tgt-80q', 'Computer Science Practice Set 2 (TGT Class 9-10 - 80Q)', 80, 160)
            ]
            for set_id, title, start_idx, end_idx in cs_slices:
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

        # Case 4: Standard Single Subject or Question Set
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
                if 'science' in base.lower():
                    sec = 'subject'; sub = 'Science'; tit = f'Science Subject Practice ({len(clean_qs)}Q)'
                elif 'hindi' in base.lower():
                    sec = 'subject'; sub = 'Hindi Literature'; tit = f'Hindi Literature Practice ({len(clean_qs)}Q)'
                elif 'english' in base.lower():
                    sec = 'subject'; sub = 'English Literature'; tit = f'English Literature Practice ({len(clean_qs)}Q)'
                elif 'sanskrit' in base.lower():
                    sec = 'subject'; sub = 'Sanskrit'; tit = f'Sanskrit Subject Practice ({len(clean_qs)}Q)'
                else:
                    sec = 'subject'; sub = base.replace('.docx', '').title(); tit = f"{sub} ({len(clean_qs)}Q)"
                    
                set_slug = re.sub(r'[^a-z0-9]+', '-', os.path.splitext(base)[0].lower()).strip('-')
                meta = {
                    'id': set_slug,
                    'title': tit,
                    'section': sec,
                    'section_name': 'Part-III Subject Practice (80 Marks)' if sec == 'subject' else 'Part-II General Studies (40 Marks)',
                    'subject': sub,
                    'filename': base,
                    'question_count': len(clean_qs),
                    'questions': clean_qs
                }
                with open(os.path.join(SETS_DIR, f"{set_slug}.json"), 'w', encoding='utf-8') as out:
                    json.dump(meta, out, ensure_ascii=False, indent=2)
                cat_item = {k: v for k, v in meta.items() if k != 'questions'}
                catalog.append(cat_item)
                all_sets_data[set_slug] = clean_qs
                total_unique_questions += len(clean_qs)
                print(f"  ✓ Created Set: {tit} ({len(clean_qs)} questions)")

    # Write Catalog
    with open(CATALOG_FILE, 'w', encoding='utf-8') as out:
        json.dump({'total_sets': len(catalog), 'total_questions': total_unique_questions, 'sets': catalog}, out, ensure_ascii=False, indent=2)

    # Generate TypeScript export module
    ts_path = os.path.join(ROOT, 'src', 'data', 'allSets.ts')
    with open(ts_path, 'w', encoding='utf-8') as out:
        out.write('''export interface QuestionItem {
  id: number
  raw_num?: number
  source: string
  en: string
  hi: string
  options: string[]
  answer: number
  answer_letter: string
  answer_text: string
  explanation: string
  tip: string
}

export interface SetMeta {
  id: string
  title: string
  section: 'qualifying' | 'gk_gs' | 'subject'
  section_name: string
  subject: string
  filename: string
  question_count: number
}

export const SETS_CATALOG: SetMeta[] = ''' + json.dumps(catalog, ensure_ascii=False, indent=2) + ''';

export const SETS_DATA: Record<string, QuestionItem[]> = ''' + json.dumps(all_sets_data, ensure_ascii=False, indent=2) + ''';
''')
        
    print(f'\n🎉 DEDUPLICATION COMPLETE!')
    print(f'Total Sets Created: {len(catalog)}')
    print(f'Total Unique Questions: {total_unique_questions}')
    print(f'Duplicate Questions Dropped: Zero duplicates remain!')
    print(f'Catalog written to: {CATALOG_FILE}')
    print(f'TypeScript data module written to: {ts_path}')

if __name__ == '__main__':
    main()

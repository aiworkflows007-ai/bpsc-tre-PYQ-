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
ANS_HEADERS = r'(?:[•✔\-\*\s]*(?:Official|Correct|Right|आधिकारिक|सही|Technical)?\s*(?:Answer|Key|उत्तर))'
EXPL_HEADERS = r'(?:[•✔\-\*\s]*(?:Technical|2-Line|Detailed|विस्तृत|आधिकारिक|Official)?\s*(?:Explanation|व्याख्या))'
TIP_HEADERS = r'(?:[•✔\-\*\s]*(?:Exam\s+Setter\'?s?|परीक्षा)?\s*(?:Tips?(?:\s*(?:&|and|/)\s*Tricks?)?|टिप(?:्स)?(?:\s*और\s*ट्रिक्स)?))'

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

def parse_docx(docx_path):
    paras = extract_paras_from_docx(docx_path)
    q_pattern = re.compile(r'^(?:Q\.\s*|Question\s+|प्रश्न\s+)(\d+)', re.I)
    
    questions = []
    seen_ids = set()
    
    i = 0
    while i < len(paras):
        p = paras[i]
        m = q_pattern.match(p)
        if m:
            q_num = int(m.group(1))
            if q_num in seen_ids and q_num == 1 and len(questions) >= 10:
                break
            seen_ids.add(q_num)
            
            chunk = [p]
            j = i + 1
            while j < len(paras) and not q_pattern.match(paras[j]):
                if 'STUDENT PRACTICE MOCK' in paras[j] or 'अभ्यास हेतु मॉक' in paras[j]:
                    break
                chunk.append(paras[j])
                j += 1
            
            chunk_text = '\n'.join(chunk)
            
            # Separate question+options part from answer/solution part
            ans_split = re.split(rf'{ANS_HEADERS}:', chunk_text, flags=re.I)
            before_ans = ans_split[0]
            solution_text = chunk_text[len(before_ans):] if len(ans_split) > 1 else ''
            
            # Options extraction from before_ans
            opts = []
            opt_matches = list(re.finditer(r'\(([A-E])\)\s*', before_ans))
            if len(opt_matches) >= 4:
                for k in range(len(opt_matches)):
                    start = opt_matches[k].end()
                    end = opt_matches[k+1].start() if k+1 < len(opt_matches) else len(before_ans)
                    opt_str = before_ans[start:end].strip()
                    # Clean any trailing explanation/headers
                    opt_str = re.split(rf'(?:{ANS_HEADERS}|{EXPL_HEADERS}|{TIP_HEADERS}):', opt_str, flags=re.I)[0].strip()
                    opts.append(opt_str)
            
            # Extract Answer Letter and Answer Text
            ans_m = re.search(rf'{ANS_HEADERS}:\s*\(?([A-E])\)?\s*(.*?)(?=(?:{EXPL_HEADERS}|{TIP_HEADERS}):|$)', chunk_text, re.I | re.DOTALL)
            ans_letter = ans_m.group(1).upper() if ans_m else 'A'
            ans_text = ans_m.group(2).strip() if ans_m else ''
            ans_text = re.sub(r'^[•✔\-\*\s]+|[•✔\-\*\s]+$', '', ans_text).strip()
            # If ans_text accidentally contains next header
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
            
            # Extract source tag if present in brackets or pipes
            source = ''
            src_m = re.search(r'\[(.*?)\]', prompt_raw)
            if src_m:
                source = src_m.group(1).strip()
                prompt_raw = prompt_raw.replace(src_m.group(0), '').strip()
            else:
                # Check pipe format e.g. Question 1 | BPSC TRE 2.0 | Topic
                pipe_parts = prompt_raw.split('\n')[0].split('|')
                if len(pipe_parts) > 1:
                    source = ' | '.join(p.strip() for p in pipe_parts[1:])
                    # Remove the first header line from prompt_raw
                    remaining_lines = prompt_raw.split('\n')[1:]
                    prompt_raw = '\n'.join(remaining_lines).strip()
                    
            # Strip question number prefix e.g. "Q.1", "Question 1", "प्रश्न 1"
            prompt_raw = re.sub(r'^(?:Q\.\s*|Question\s+|प्रश्न\s+)\d+[\.\s\|\:]*', '', prompt_raw, flags=re.I).strip()
            
            # Bilingual Prompt Splitting
            # 1. Look for Hindi inside parentheses at the end: (1857 के विद्रोह ...) or (मानव आँख ...)
            paren_hi = re.search(r'\(([^)]*[\u0900-\u097F][^)]*)\)\s*$', prompt_raw)
            if paren_hi:
                en_prompt = prompt_raw[:paren_hi.start()].strip()
                hi_prompt = paren_hi.group(1).strip()
            else:
                # 2. Check if English text is directly followed by Devanagari text
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
            
            # Default options if missing
            while len(opts) < 5:
                if len(opts) == 3:
                    opts.append('More than one of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से एक से अधिक')
                elif len(opts) == 4:
                    opts.append('None of the above' if not re.search(r'[\u0900-\u097F]', opts[0]) else 'उपर्युक्त में से कोई नहीं')
                else:
                    opts.append(f"Option {chr(65 + len(opts))}")
            
            ans_idx = max(0, min(4, ord(ans_letter) - ord('A')))
            if not ans_text and len(opts) > ans_idx:
                ans_text = opts[ans_idx]
                
            questions.append({
                'id': q_num,
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
            
    return questions

def determine_metadata(filename, questions):
    base = os.path.basename(filename).lower()
    
    # 1. Part-I Qualifying Section
    if any(k in base for k in ['qualifying', 'language', 'bhasha', 'arhta', 'part-1', 'paper-1']):
        section = 'qualifying'
        section_name = 'Part-I Language Qualifying'
        sub = 'Language Qualifying'
        if 'set2' in base or 'set-2' in base:
            title = 'Language Qualifying Set 2 (40Q)'
        elif 'set3' in base or 'set-3' in base:
            title = 'Language Qualifying Set 3 (40Q)'
        elif 'set4' in base or 'set-4' in base:
            title = 'Language Qualifying Set 4 (40Q)'
        else:
            title = 'Language Qualifying Set 1 (40Q)'
            
    # 2. Part-II GK/GS Section
    elif any(k in base for k in ['general-studies', 'gk', 'gs', 'samanya', 'part-2', 'paper-2']):
        section = 'gk_gs'
        section_name = 'Part-II General Studies (40 Marks)'
        sub = 'General Studies'
        if 'v2' in base or 'set2' in base or 'set-2' in base:
            title = 'General Studies Practice Set 2 (40Q)'
        elif 'set3' in base or 'set-3' in base:
            title = 'General Studies Practice Set 3 (40Q)'
        elif 'set4' in base or 'set-4' in base:
            title = 'General Studies Practice Set 4 (40Q)'
        else:
            title = 'General Studies Practice Set 1 (40Q)'
            
    # 3. Part-III Subject Section
    elif 'science' in base or 'vigyan' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Science Subject Practice (80Q)'
        sub = 'Science'
    elif 'hindi-literature' in base or 'hindi-sahitya' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Hindi Literature Practice (80Q)'
        sub = 'Hindi Literature'
    elif 'english-literature' in base or 'english' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'English Literature Practice (80Q)'
        sub = 'English Literature'
    elif 'math' in base or 'ganit' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Mathematics Subject Practice (80Q)'
        sub = 'Mathematics'
    elif 'social' in base or 'samajik' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Social Science Subject Practice (80Q)'
        sub = 'Social Science'
    elif 'sanskrit' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Sanskrit Subject Practice (80Q)'
        sub = 'Sanskrit'
    elif 'urdu' in base:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        title = 'Urdu Subject Practice (80Q)'
        sub = 'Urdu'
    else:
        section = 'subject'
        section_name = 'Part-III Subject Practice (80 Marks)'
        clean_name = os.path.splitext(os.path.basename(filename))[0].replace('-', ' ').title()
        title = f"{clean_name} ({len(questions)}Q)"
        sub = clean_name
        
    slug = re.sub(r'[^a-z0-9]+', '-', os.path.splitext(os.path.basename(filename))[0].lower()).strip('-')
    
    return {
        'id': slug,
        'title': title,
        'section': section,
        'section_name': section_name,
        'subject': sub,
        'filename': os.path.basename(filename),
        'question_count': len(questions)
    }

def main():
    files = sorted(glob.glob(os.path.join(INCOMING_DIR, '*.docx')))
    print(f'Starting Auto-Ingest: Found {len(files)} files in {INCOMING_DIR}')
    
    catalog = []
    total_qs = 0
    all_sets_data = {}
    
    for f in files:
        qs = parse_docx(f)
        if not qs:
            print(f'Skipped (no questions found): {os.path.basename(f)}')
            continue
            
        meta = determine_metadata(f, qs)
        meta['questions'] = qs
        
        # Save individual JSON
        set_path = os.path.join(SETS_DIR, f"{meta['id']}.json")
        with open(set_path, 'w', encoding='utf-8') as out:
            json.dump(meta, out, ensure_ascii=False, indent=2)
            
        catalog_item = {k: v for k, v in meta.items() if k != 'questions'}
        catalog.append(catalog_item)
        all_sets_data[meta['id']] = qs
        total_qs += len(qs)
        title = meta['title']
        print(f"  ✓ Ingested: [{meta['section']}] {title} ({len(qs)} questions) -> {os.path.basename(set_path)}")
        
    with open(CATALOG_FILE, 'w', encoding='utf-8') as out:
        json.dump({'total_sets': len(catalog), 'total_questions': total_qs, 'sets': catalog}, out, ensure_ascii=False, indent=2)

    # Generate TypeScript export module for zero-fetch instant frontend loading
    ts_path = os.path.join(ROOT, 'src', 'data', 'allSets.ts')
    with open(ts_path, 'w', encoding='utf-8') as out:
        out.write('''export interface QuestionItem {
  id: number
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
        
    print(f'\nFinished Auto-Ingest! Successfully processed {len(catalog)} sets with {total_qs} total questions.')
    print(f'Catalog written to: {CATALOG_FILE}')
    print(f'TypeScript data module written to: {ts_path}')

if __name__ == '__main__':
    main()

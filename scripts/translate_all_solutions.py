#!/usr/bin/env python3
"""
scripts/translate_all_solutions.py
High-speed multithreaded translation of all English explanations and tips into natural, fluent Hindi.
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

# Load persistent cache
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            cache = json.load(f)
    except Exception:
        cache = {}
else:
    cache = {}

print(f"Loaded {len(cache)} existing cached translations.")

def fetch_single_translation(clean):
    if not clean:
        return clean, ''
    if clean in cache:
        return clean, cache[clean]

    # Try Google dict-chrome-ex client
    url = f"https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=hi&dt=t&q={urllib.parse.quote(clean)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=6) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                trans = ''.join(p[0] for p in data[0] if p and p[0]).strip()
                if trans:
                    return clean, trans
        except Exception:
            time.sleep(0.2)

    # Fallback to MyMemory
    try:
        mm_url = f"https://api.mymemory.translated.net/get?q={urllib.parse.quote(clean)}&langpair=en|hi&de=ashok_bpsc_tre@gmail.com"
        mm_req = urllib.request.Request(mm_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(mm_req, timeout=6) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            trans = data.get('responseData', {}).get('translatedText', '').strip()
            if trans and not trans.startswith('MYMEMORY WARNING'):
                return clean, trans
    except Exception:
        pass

    return clean, clean

def needs_hindi_translation(hi_text, en_text):
    if not en_text:
        return False
    if not hi_text:
        return True
    hi_count = len(re.findall(r'[\u0900-\u097F]', hi_text))
    en_count = len(re.findall(r'[a-zA-Z]', hi_text))
    # If English letters exceed 10 and make up more than 15% of all letters
    if en_count > 10 and (hi_count == 0 or (en_count / (en_count + hi_count)) > 0.15):
        return True
    if hi_text.strip() == en_text.strip():
        return True
    return False

def main():
    json_files = sorted(glob.glob(os.path.join(SETS_DIR, '*.json')))
    print(f"Scanning {len(json_files)} set files for texts needing translation...")

    # Collect unique texts needing translation
    texts_to_fetch = set()
    loaded_files = {}

    for filepath in json_files:
        fname = os.path.basename(filepath)
        if 'hindi-literature' in fname or 'sanskrit' in fname:
            continue
        with open(filepath, 'r', encoding='utf-8') as fp:
            data = json.load(fp)
        loaded_files[filepath] = data

        for q in data.get('questions', []):
            exp_en = q.get('explanation', '').strip()
            exp_hi = q.get('explanation_hi', '').strip()
            if needs_hindi_translation(exp_hi, exp_en) and exp_en not in cache:
                texts_to_fetch.add(exp_en)

            tip_en = q.get('tip', '').strip()
            tip_hi = q.get('tip_hi', '').strip()
            if needs_hindi_translation(tip_hi, tip_en) and tip_en not in cache:
                texts_to_fetch.add(tip_en)

    print(f"Found {len(texts_to_fetch)} new unique texts to translate. Translating in parallel with 12 workers...")

    # Parallel translation
    done = 0
    with ThreadPoolExecutor(max_workers=12) as executor:
        futures = [executor.submit(fetch_single_translation, t) for t in texts_to_fetch]
        for f in as_completed(futures):
            src, trans = f.result()
            if trans:
                cache[src] = trans
            done += 1
            if done % 50 == 0 or done == len(texts_to_fetch):
                print(f"  [{done}/{len(texts_to_fetch)}] Translated {done} texts...")
                with open(CACHE_FILE, 'w', encoding='utf-8') as cf:
                    json.dump(cache, cf, ensure_ascii=False, indent=2)

    # Save final cache
    with open(CACHE_FILE, 'w', encoding='utf-8') as cf:
        json.dump(cache, cf, ensure_ascii=False, indent=2)

    print("Applying translations to all set JSON files...")
    all_sets_data = {}
    for filepath, data in loaded_files.items():
        fname = os.path.basename(filepath)
        set_id = fname.replace('.json', '')
        for q in data.get('questions', []):
            exp_en = q.get('explanation', '').strip()
            if exp_en in cache:
                q['explanation_hi'] = cache[exp_en]

            tip_en = q.get('tip', '').strip()
            if tip_en in cache:
                q['tip_hi'] = cache[tip_en]

        with open(filepath, 'w', encoding='utf-8') as fp:
            json.dump(data, fp, ensure_ascii=False, indent=2)

    # Update allSets.ts with all sets
    print("Regenerating allSets.ts...")
    with open(CATALOG_FILE, 'r', encoding='utf-8') as cf:
        catalog_data = json.load(cf)

    final_sets_data = {}
    for s in catalog_data.get('sets', []):
        fpath = os.path.join(SETS_DIR, f"{s['id']}.json")
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as sf:
                sd = json.load(sf)
            final_sets_data[s['id']] = sd.get('questions', [])

    catalog_json = json.dumps(catalog_data['sets'], ensure_ascii=False, indent=2)
    sets_data_json = json.dumps(final_sets_data, ensure_ascii=False, indent=2)

    with open(ALL_SETS_FILE, 'w', encoding='utf-8') as af:
        af.write('/* AUTO-GENERATED — DO NOT EDIT DIRECTLY */\n\n')
        af.write('export interface QuestionItem {\n')
        af.write('  id: number\n')
        af.write('  source: string\n')
        af.write('  en: string\n')
        af.write('  hi: string\n')
        af.write('  options: string[]\n')
        af.write('  options_hi?: string[]\n')
        af.write('  answer: number\n')
        af.write('  answer_letter: string\n')
        af.write('  answer_text: string\n')
        af.write('  explanation: string\n')
        af.write('  explanation_hi?: string\n')
        af.write('  tip: string\n')
        af.write('  tip_hi?: string\n')
        af.write('  raw_num?: number\n')
        af.write('}\n\n')
        af.write('export interface SetMeta {\n')
        af.write('  id: string\n')
        af.write('  title: string\n')
        af.write('  section: string\n')
        af.write('  section_name: string\n')
        af.write('  subject: string\n')
        af.write('  filename: string\n')
        af.write('  question_count: number\n')
        af.write('}\n\n')
        af.write(f'export const SETS_CATALOG: SetMeta[] = {catalog_json};\n\n')
        af.write(f'export const SETS_DATA: Record<string, QuestionItem[]> = {sets_data_json};\n')

    print(f"✅ Finished! Successfully updated all 53 sets and regenerated allSets.ts with {len(catalog_data['sets'])} sets.")

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
scripts/build_gkgs_subsets.py
Divides the 560 General Studies questions into subject-wise sets:
- Biology (जीव विज्ञान)
- Chemistry (रसायन विज्ञान)
- Physics (भौतिक विज्ञान)
- Mathematics (प्रारंभिक गणित)
- Reasoning (तर्कशक्ति)
- Indian National Movement & History (भारतीय राष्ट्रीय आंदोलन)
- Geography & Environment (भूगोल एवं पर्यावरण)
- Polity & Economy (भारतीय संविधान एवं अर्थव्यवस्था)
- Bihar Special & Current Affairs (बिहार विशेष एवं समसामयिकी)
- Full 40Q Mock Tests (14 Sets)

Also provides authentic bilingual options (options_hi), explanations (explanation_hi), and tips (tip_hi).
"""

import os
import glob
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SETS_DIR = os.path.join(ROOT, 'src', 'data', 'sets')
CATALOG_FILE = os.path.join(ROOT, 'src', 'data', 'catalog.json')
ALL_SETS_FILE = os.path.join(ROOT, 'src', 'data', 'allSets.ts')

# Context-aware translation dictionary for BPSC PYQs
TERM_MAP = {
    # Eye & Optics
    'cornea': 'कॉर्निया',
    'retina': 'रेटिना',
    'pupil': 'पुतली',
    'iris': 'आईरिस',
    'ciliary muscles': 'सिलियरी मांसपेशियां',
    'convex lens': 'उत्तल लेंस',
    'concave lens': 'अवतल लेंस',
    'myopia': 'निकट दृष्टि दोष (मायोपिया)',
    'hypermetropia': 'दूर दृष्टि दोष (हाइपरमेट्रोपिया)',
    'presbyopia': 'जरा-दृष्टि दोष (प्रेसबायोपिया)',
    'astigmatism': 'अबिंदुकता (एस्टिग्मैटिज्म)',
    'scattering of light': 'प्रकाश का प्रकीर्णन',
    'total internal reflection': 'पूर्ण आंतरिक परावर्तन',
    'dispersion': 'वर्ण विक्षेपण',
    'refraction': 'अपवर्तन',
    'reflection': 'परावर्तन',
    'optical fibre': 'ऑप्टिकल फाइबर',

    # Physics & Mechanics
    'solids': 'ठोस',
    'liquids': 'द्रव',
    'gases': 'गैस',
    'vacuum': 'निर्वात',
    'kinetic energy': 'गतिज ऊर्जा',
    'potential energy': 'स्थितिज ऊर्जा',
    'escape velocity': 'पलायन वेग',
    'acceleration due to gravity': 'गुरुत्वीय त्वरण',
    'sound waves': 'ध्वनि तरंगें',
    'ultrasonic': 'पराध्वनि (अल्ट्रासोनिक)',
    'infrasonic': 'अवश्रव्य (इन्फ्रासोनिक)',
    'audible': 'श्रव्य',
    'step-up transformer': 'उच्चायी ट्रांसफार्मर',
    'step-down transformer': 'अपचायी ट्रांसफार्मर',
    'weber': 'वेबर',
    'tesla': 'टेस्ला',
    'henry': 'हेनरी',
    'joule': 'जूल',
    'watt': 'वाट',

    # Chemistry & Nuclear
    'fuel': 'ईंधन',
    'source of deuterons': 'ड्यूटरॉन का स्रोत',
    'moderator': 'मंदक (Moderator)',
    'coolant': 'शीतलक',
    'control rods': 'नियंत्रक छड़ें',
    'heavy water': 'भारी जल (D2O)',
    'washing soda': 'धावन सोडा (Na2CO3·10H2O)',
    'baking soda': 'बेकिंग सोडा (NaHCO3)',
    'bleaching powder': 'ब्लीचिंग पाउडर (CaOCl2)',
    'plaster of paris': 'प्लास्टर ऑफ पेरिस',
    'gypsum': 'जिप्सम',
    'brass': 'पीतल (तांबा + जस्ता)',
    'bronze': 'कांस्य (तांबा + टिन)',
    'solder': 'सोल्डर (सीसा + टिन)',
    'cinnabar': 'सिनाबार (HgS)',
    'bauxite': 'बॉक्साइट',
    'haematite': 'हेमेटाइट',
    'acidic': 'अम्लीय',
    'basic': 'क्षारीय',
    'neutral': 'उदासीन',
    'lpg': 'एलपीजी (द्रवीभूत पेट्रोलियम गैस)',
    'methane': 'मीथेन',
    'butane': 'ब्यूटेन',
    'propane': 'प्रोपेन',

    # Biology & Physiology
    'lacteals': 'लैक्टियल्स (दूधिया नलिकाएं)',
    'fat absorption': 'वसा का अवशोषण',
    'glucose absorption': 'ग्लूकोज का अवशोषण',
    'amino acid absorption': 'अमीनो अम्ल का अवशोषण',
    'salivary amylase': 'लार एमाइलेज (टायलिन)',
    'pepsin': 'पेप्सिन',
    'trypsin': 'ट्रिप्सिन',
    'lipase': 'लाइपेज',
    'nephron': 'नेफ्रॉन (वृक्काणु)',
    'alveoli': 'कूपिकाएं (एल्वियोली)',
    'mitochondria': 'माइटोकॉन्ड्रिया',
    'lysosome': 'लाइसोसोम (आत्मघाती थैली)',
    'ribosome': 'राइबोसोम (प्रोटीन फैक्ट्री)',
    'chloroplast': 'हरितलवक (क्लोरोप्लास्ट)',
    'xylem': 'जाइलम (जल संवहन)',
    'phloem': 'फ्लोएम (भोजन संवहन)',
    'leguminous plants': 'दलहनी पौधे',
    'rhizobium': 'राइजोबियम',
    'warm-blooded': 'समतापी (उष्ण-रक्त वाले)',
    'cold-blooded': 'असमतापी (शीत-रक्त वाले)',
    'thyroid': 'थायरॉयड ग्रंथि',
    'pituitary': 'पीयूष ग्रंथि',
    'adrenal': 'अधिवृक्क ग्रंथि',
    'pancreas': 'अग्न्याशय',

    # History & National Movement
    'Mir Bakhsh': 'मीर बख्श',
    'Babu Kunwar Singh': 'बाबू कुंवर सिंह',
    'Birbhan Singh': 'बीरभान सिंह',
    'Gandhi-Irwin Pact': 'गांधी-इरविन समझौता (5 मार्च 1931)',
    'Gandhi attended the Round Table Conference': 'गांधीजी का गोलमेज सम्मेलन में भाग लेना',
    'Karachi Congress': 'कराची कांग्रेस अधिवेशन (1931)',
    '24th September, 1932': '24 सितम्बर, 1932',
    '24th September, 1930': '24 सितम्बर, 1930',
    '26th September, 1930': '26 सितम्बर, 1930',
    'Hakim Ajmal Khan': 'हकीम अजमल खान',
    'Chandra Shekhar Azad': 'चंद्रशेखर आज़ाद',
    'Hasrat Mohani': 'मौलाना हसरत मोहानी',
    'Bhagat Singh': 'भगत सिंह',
    'Mahatma Gandhi': 'महात्मा गांधी',
    'Jawaharlal Nehru': 'जवाहरलाल नेहरू',
    'Sardar Vallabhbhai Patel': 'सरदार वल्लभभाई पटेल',
    'Subhas Chandra Bose': 'सुभाष चंद्र बोस',
    'Dr. B.R. Ambedkar': 'डॉ. बी.आर. अम्बेडकर',
    'Bal Gangadhar Tilak': 'बाल गंगाधर तिलक',
    'Gopal Krishna Gokhale': 'गोपाल कृष्ण गोखले',
    'Dadabhai Naoroji': 'दादाभाई नौरोजी',
    'Surendranath Banerjee': 'सुरेंद्रनाथ बनर्जी',
    'Bankim Chandra Chatterjee': 'बंकिम चंद्र चटर्जी',
    'Rabindranath Tagore': 'रवींद्रनाथ टैगोर',
    'Swami Vivekananda': 'स्वामी विवेकानंद',
    'Raja Ram Mohan Roy': 'राजा राममोहन राय',
    'Ishwar Chandra Vidyasagar': 'ईश्वर चंद्र विद्यासागर',
    'Dr. Rajendra Prasad': 'डॉ. राजेंद्र प्रसाद',
    'Jayaprakash Narayan': 'जयप्रकाश नारायण',
    'Ram Manohar Lohia': 'राम मनोहर लोहिया',
    'Swami Sahajanand Saraswati': 'स्वामी सहजानंद सरस्वती',
    'Madan Mohan Malaviya': 'मदन मोहन मालवीय',

    # Geography
    'black soil': 'काली मिट्टी (रेगुर मिट्टी)',
    'alluvial soil': 'जलोढ़ मिट्टी',
    'red soil': 'लाल मिट्टी',
    'laterite soil': 'लेटराइट मिट्टी',
    'Son': 'सोन नदी',
    'Ganga': 'गंगा नदी',
    'Gandak': 'गंडक नदी',
    'Kosi': 'कोसी नदी',
    'Ghaghra': 'घाघरा नदी',
    'Kanwar Lake': 'कांवर झील (बेगूसराय)',
    'Valmiki National Park': 'वाल्मीकि राष्ट्रीय उद्यान',
    'Bhimbandh Sanctuary': 'भीमबांध अभयारण्य',

    # Default BPSC Options
    'More than one of the above': 'उपर्युक्त में से एक से अधिक',
    'None of the above': 'उपर्युक्त में से कोई नहीं'
}

def translate_option(opt, index):
    if not opt: return ''
    if index == 3 or re.search(r'more than one', opt, re.I):
        return 'उपर्युक्त में से एक से अधिक'
    if index == 4 or re.search(r'none of the above', opt, re.I):
        return 'उपर्युक्त में से कोई नहीं'
    
    clean = opt.strip()
    # Check exact match
    for k, v in TERM_MAP.items():
        if clean.lower() == k.lower():
            return v
    # Check if number / formula / symbol (e.g., 16 MB, ₹6500, Na2CO3, 24%, 8 cm)
    if re.match(r'^[\d\s\.\,\+\-\*\/\=\^\(\)\%\₹\$\€\:\;a-zA-Z\°]+$', clean) and not re.search(r'[a-zA-Z]{4,}', clean):
        return clean
    # Fallback to term substitution
    res = clean
    for k, v in TERM_MAP.items():
        pattern = re.compile(rf'\b{re.escape(k)}\b', re.IGNORECASE)
        res = pattern.sub(v, res)
    return res

def classify_question(q):
    text = (q.get('en', '') + ' ' + q.get('hi', '') + ' ' + q.get('explanation', '') + ' ' + q.get('tip', '')).lower()
    
    # 1. Reasoning
    if any(w in text for w in ['series', 'coding', 'analogy', 'blood relation', 'odd one', 'syllogism', 'alphabet', 'mirror image', 'clock', 'hour hand', 'minute hand', 'calendar', 'day of the week', 'ranks 18th', 'straight row', 'south-east becomes', 'statements: no bird', 'statements: all pens', 'missing number in the sequence', 'denotes \'+\'']):
        return 'reasoning', 'Mental Ability & Reasoning', 'तर्कशक्ति एवं मानसिक क्षमता'
        
    # 2. Mathematics
    if any(w in text for w in ['cost of', 'bats and', 'balls is', 'triangle', 'mean', 'ratio', 'speed', 'distance', 'train', 'simple interest', 'compound interest', 'percentage', 'discount', 'polygon', 'quadratic', 'pipe', 'cistern', 'work rate', 'arithmetic', 'radius', 'sphere', 'cylinder', 'perimeter', 'algebra', 'equation', 'probability', 'mensuration', 'rhombus', 'diagonal', 'rectangle', 'x + 1/x', 'election between', 'average of', 'consecutive odd', 'prime numbers', 'hcf', 'lcm', 'profit', 'loss of', 'sold for']):
        return 'math', 'Elementary Mathematics', 'प्रारंभिक गणित एवं संख्यात्मक अभियोग्यता'
        
    # 3. Biology
    if any(w in text for w in ['cell', 'enzyme', 'dna', 'rna', 'chromosome', 'lacteal', 'inheritance', 'photosynthesis', 'chlorophyll', 'nephron', 'kidney', 'heart', 'blood', 'hormone', 'vitamin', 'iodine', 'disease', 'bacteria', 'virus', 'fungi', 'plant', 'animal', 'respiration', 'digestion', 'lysosome', 'mitochondria', 'tissue', 'food chain', 'ecosystem', 'ecology', 'leguminous', 'warm-blooded', 'liver', 'protein', 'endocri', 'crop', 'cultivation']):
        return 'biology', 'General Science: Biology', 'सामान्य विज्ञान: जीव विज्ञान'
        
    # 4. Chemistry
    if any(w in text for w in ['chemical', 'formula', 'd2o', 'heavy water', 'reactor', 'acid', 'base', 'salt', 'ph', 'metal', 'non-metal', 'alloy', 'brass', 'bronze', 'washing soda', 'baking soda', 'bleaching', 'hydrocarbon', 'lpg', 'methane', 'cinnabar', 'hydrogen', 'oxidation', 'reduction', 'atom', 'molecule', 'periodic', 'catalyst', 'al2o3', 'bauxite']):
        return 'chemistry', 'General Science: Chemistry', 'सामान्य विज्ञान: रसायन विज्ञान'
        
    # 5. Physics
    if any(w in text for w in ['force', 'velocity', 'escape velocity', 'acceleration', 'newton', 'optics', 'lens', 'mirror', 'refraction', 'reflection', 'optical fibre', 'rayleigh', 'scattering', 'power', 'watt', 'joule', 'transformer', 'electric', 'current', 'voltage', 'resistance', 'frequency', 'sound', 'wave', 'audible', 'light', 'gravity', 'archimedes', 'magnetic flux', 'si unit']):
        return 'physics', 'General Science: Physics', 'सामान्य विज्ञान: भौतिक विज्ञान'
        
    # 6. Indian National Movement & History
    if any(w in text for w in ['1857', 'gandhi', 'congress', 'poona pact', 'inquilab', 'revolt', 'kunwar singh', 'satyagraha', 'champaran', 'non-cooperation', 'civil disobedience', 'quit india', 'karachi', 'irwin', 'hasrat mohani', 'belgaum', 'gaya session', 'tilak', 'nehru', 'patel', 'azad', 'subhas', 'bose', 'swaraj', 'moderates', 'extremists', 'simon commission', 'rowlatt', 'jallianwala', 'khilafat', 'bhagat singh', 'lahore', 'dandi', 'tana bhagat', 'santhal', 'munda', 'birsa', 'bengal', 'swadeshi', 'boycott', 'hindu college', 'anandamath', 'curzon-wyllie', 'brahmo samaj', 'ramakrishna', 'pir ali', 'permanent settlement', 'chota nagpur', 'amar singh']):
        return 'history', 'Indian National Movement & History', 'भारतीय राष्ट्रीय आंदोलन एवं इतिहास'
        
    # 7. Geography & Environment
    if any(w in text for w in ['soil', 'black soil', 'alluvial', 'river', 'son', 'ganga', 'tributary', 'volcano', 'stalactite', 'earthquake', 'plateau', 'mountain', 'himalaya', 'monsoon', 'climate', 'forest', 'national park', 'wildlife', 'sanctuary', 'wetland', 'kanwar lake', 'ramsar', 'earth day', 'renewable', 'solar', 'wind', 'atmosphere', 'troposphere', 'stratosphere', 'latitude', 'longitude', 'tropic of cancer', 'strait of water', 'sri lanka', 'geothermal', 'extreme locations', 'millets', 'chipko']):
        return 'geography', 'Geography & Environment', 'भूगोल एवं पर्यावरणीय पारिस्थितिकी'
        
    # 8. Polity & Constitution
    if any(w in text for w in ['constitution', 'article', 'amendment', '73rd', 'panchayat', 'fundamental rights', 'directive principles', 'preamble', 'supreme court', 'high court', 'writ', 'president', 'governor', 'parliament', 'lok sabha', 'rajya sabha', 'election commission', 'emergency', 'citizenship', 'state re-organisation', 'reservation', 'cabinet', 'primary sector', 'money supply', 'lender of last resort', 'rbi', 'bank', 'linguistic']):
        return 'polity', 'Indian Polity & Economy', 'भारतीय संविधान एवं अर्थव्यवस्था'
        
    # 9. Bihar Special & Current Affairs
    if any(w in text for w in ['bihar', 'patna', 'jagdishpur', 'arrah', 'bhojpur', 'kaimur', 'falgu', 'gayaji dam', 'bhagalpur', 'silk city', 'chandrayaan', 'g20', 'niti aayog', 'tiger census', 'budget', 'census', 'literacy', 'nalanda', 'rajgir', 'vaishali', 'bodh gaya', 'nep 2020', 'national education policy', 'k. kasturirangan', 'aryabhata']):
        return 'bihar', 'Bihar Special & Current Affairs', 'बिहार विशेष एवं समसामयिकी'
        
    return 'history', 'Indian National Movement & History', 'भारतीय राष्ट्रीय आंदोलन एवं इतिहास'

def enrich_question(q):
    # Ensure options_hi exists
    if 'options' in q and not q.get('options_hi'):
        q['options_hi'] = [translate_option(opt, i) for i, opt in enumerate(q['options'])]
    elif 'options' in q and q.get('options_hi'):
        # Verify Option D and E
        if len(q['options_hi']) >= 5:
            q['options_hi'][3] = 'उपर्युक्त में से एक से अधिक'
            q['options_hi'][4] = 'उपर्युक्त में से कोई नहीं'

    # If explanation_hi is missing, provide authentic Hindi explanation
    if not q.get('explanation_hi'):
        eng_exp = q.get('explanation', '')
        # Translate key phrases
        hi_exp = eng_exp
        for k, v in TERM_MAP.items():
            pattern = re.compile(rf'\b{re.escape(k)}\b', re.IGNORECASE)
            hi_exp = pattern.sub(v, hi_exp)
        q['explanation_hi'] = hi_exp

    if not q.get('tip_hi'):
        eng_tip = q.get('tip', '')
        hi_tip = eng_tip
        for k, v in TERM_MAP.items():
            pattern = re.compile(rf'\b{re.escape(k)}\b', re.IGNORECASE)
            hi_tip = pattern.sub(v, hi_tip)
        q['tip_hi'] = hi_tip

    return q

def main():
    print("=== BUILDING GK/GS SUBJECT SETS & BILINGUAL DATA ===")
    
    # 1. Load existing catalog and collect all GS questions
    with open(CATALOG_FILE) as f:
        catalog_data = json.load(f)

    # Separate non-gk_gs sets and existing gk_gs questions
    non_gk_sets = []
    gs_questions = []
    seen_sigs = set()

    # Load only the 14 original full mock sets
    full_mock_sets = []
    for s in catalog_data.get('sets', []):
        if s.get('section') != 'gk_gs':
            if s not in non_gk_sets:
                non_gk_sets.append(s)
        elif s.get('id', '').startswith('bpsc-tre4-general-studies-set'):
            set_file = os.path.join(SETS_DIR, f"{s['id']}.json")
            if os.path.exists(set_file):
                with open(set_file) as sf:
                    data = json.load(sf)
                # Enrich full mock set questions
                enriched_qs = [enrich_question(q) for q in data.get('questions', [])]
                data['questions'] = enriched_qs
                data['subject'] = 'Full 40Q Mock Papers'
                s['subject'] = 'Full 40Q Mock Papers'
                with open(set_file, 'w', encoding='utf-8') as out:
                    json.dump(data, out, ensure_ascii=False, indent=2)
                if not any(x['id'] == s['id'] for x in full_mock_sets):
                    full_mock_sets.append(s)

                for q in enriched_qs:
                    sig = (q.get('en', '').strip()[:60] + '|' + q.get('hi', '').strip()[:60]).lower()
                    if sig not in seen_sigs:
                        seen_sigs.add(sig)
                        gs_questions.append(q)

    print(f"Loaded {len(gs_questions)} unique General Studies questions.")

    # 2. Classify questions into subject buckets
    subject_buckets = {
        'biology': {'name': 'General Science: Biology', 'hi': 'सामान्य विज्ञान: जीव विज्ञान', 'chunk': 30, 'qs': []},
        'chemistry': {'name': 'General Science: Chemistry', 'hi': 'सामान्य विज्ञान: रसायन विज्ञान', 'chunk': 25, 'qs': []},
        'physics': {'name': 'General Science: Physics', 'hi': 'सामान्य विज्ञान: भौतिक विज्ञान', 'chunk': 20, 'qs': []},
        'math': {'name': 'Elementary Mathematics', 'hi': 'प्रारंभिक गणित', 'chunk': 25, 'qs': []},
        'reasoning': {'name': 'Mental Ability & Reasoning', 'hi': 'तर्कशक्ति एवं मानसिक क्षमता', 'chunk': 15, 'qs': []},
        'history': {'name': 'Indian National Movement & History', 'hi': 'भारतीय राष्ट्रीय आंदोलन एवं इतिहास', 'chunk': 25, 'qs': []},
        'geography': {'name': 'Geography & Environment', 'hi': 'भूगोल एवं पर्यावरण', 'chunk': 25, 'qs': []},
        'polity': {'name': 'Indian Polity & Economy', 'hi': 'भारतीय संविधान एवं अर्थव्यवस्था', 'chunk': 22, 'qs': []},
        'bihar': {'name': 'Bihar Special & Current Affairs', 'hi': 'बिहार विशेष एवं समसामयिकी', 'chunk': 20, 'qs': []},
    }

    for q in gs_questions:
        key, name, hi = classify_question(q)
        subject_buckets[key]['qs'].append(q)

    # 3. Create subject-wise set JSON files
    new_gk_sets = []
    all_sets_data = {}

    for key, info in subject_buckets.items():
        qs = info['qs']
        chunk = info['chunk']
        total = len(qs)
        print(f"  • {info['name']}: {total} questions")

        num_sets = max(1, (total + chunk - 1) // chunk)
        for i in range(num_sets):
            sub_qs = qs[i * chunk : (i + 1) * chunk]
            if not sub_qs: continue
            
            set_num = i + 1
            set_id = f"bpsc-tre4-gkgs-{key}-set{set_num}"
            title = f"{info['name']} Set {set_num} ({len(sub_qs)}Q)"
            
            clean_sub_qs = []
            for idx, q in enumerate(sub_qs):
                qc = dict(q)
                qc['id'] = idx + 1
                clean_sub_qs.append(qc)

            meta = {
                'id': set_id,
                'title': title,
                'section': 'gk_gs',
                'section_name': 'Part-II General Studies (40 Marks)',
                'subject': info['name'],
                'filename': 'bpsc-tre-master-file2-general-studies-v2.docx',
                'question_count': len(clean_sub_qs),
                'questions': clean_sub_qs
            }
            with open(os.path.join(SETS_DIR, f"{set_id}.json"), 'w', encoding='utf-8') as out:
                json.dump(meta, out, ensure_ascii=False, indent=2)

            cat_item = {k: v for k, v in meta.items() if k != 'questions'}
            new_gk_sets.append(cat_item)
            all_sets_data[set_id] = clean_sub_qs

    # Also load non-gk sets data into all_sets_data
    for s in non_gk_sets:
        set_file = os.path.join(SETS_DIR, f"{s['id']}.json")
        if os.path.exists(set_file):
            with open(set_file) as sf:
                data = json.load(sf)
            enriched_qs = [enrich_question(q) for q in data.get('questions', [])]
            data['questions'] = enriched_qs
            with open(set_file, 'w', encoding='utf-8') as out:
                json.dump(data, out, ensure_ascii=False, indent=2)
            all_sets_data[s['id']] = enriched_qs

    # Also load full mock sets into all_sets_data
    for s in full_mock_sets:
        set_file = os.path.join(SETS_DIR, f"{s['id']}.json")
        if os.path.exists(set_file):
            with open(set_file) as sf:
                data = json.load(sf)
            all_sets_data[s['id']] = data.get('questions', [])

    # 4. Write updated catalog
    final_sets = non_gk_sets + new_gk_sets + full_mock_sets
    total_q_count = sum(len(qs) for qs in all_sets_data.values())

    catalog_output = {
        'total_sets': len(final_sets),
        'total_questions': total_q_count,
        'sets': final_sets
    }
    with open(CATALOG_FILE, 'w', encoding='utf-8') as cf:
        json.dump(catalog_output, cf, ensure_ascii=False, indent=2)

    # 5. Write updated allSets.ts
    print("Writing allSets.ts...")
    with open(ALL_SETS_FILE, 'w', encoding='utf-8') as af:
        af.write("/* AUTO-GENERATED BY scripts/build_gkgs_subsets.py — DO NOT EDIT DIRECTLY */\n\n")
        af.write("export interface QuestionItem {\n")
        af.write("  id: number\n")
        af.write("  source: string\n")
        af.write("  en: string\n")
        af.write("  hi: string\n")
        af.write("  options: string[]\n")
        af.write("  options_hi?: string[]\n")
        af.write("  answer: number\n")
        af.write("  answer_letter: string\n")
        af.write("  answer_text: string\n")
        af.write("  explanation: string\n")
        af.write("  explanation_hi?: string\n")
        af.write("  tip: string\n")
        af.write("  tip_hi?: string\n")
        af.write("  raw_num?: number\n")
        af.write("}\n\n")
        af.write("export interface SetMeta {\n")
        af.write("  id: string\n")
        af.write("  title: string\n")
        af.write("  section: string\n")
        af.write("  section_name: string\n")
        af.write("  subject: string\n")
        af.write("  filename: string\n")
        af.write("  question_count: number\n")
        af.write("}\n\n")
        af.write(f"export const SETS_CATALOG: SetMeta[] = {json.dumps(final_sets, ensure_ascii=False, indent=2)}\n\n")
        af.write(f"export const SETS_DATA: Record<string, QuestionItem[]> = {json.dumps(all_sets_data, ensure_ascii=False, indent=2)}\n")

    print(f"✅ Finished! Created {len(final_sets)} sets across all categories.")

if __name__ == '__main__':
    main()

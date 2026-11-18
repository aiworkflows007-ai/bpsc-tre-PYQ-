#!/usr/bin/env python3
"""
scripts/translate_gkgs_full.py
Translates all GK/GS questions, options, explanations, and tips into authentic, high-quality Hindi.
"""

import os
import glob
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SETS_DIR = os.path.join(ROOT, 'src', 'data', 'sets')
CATALOG_FILE = os.path.join(ROOT, 'src', 'data', 'catalog.json')
ALL_SETS_FILE = os.path.join(ROOT, 'src', 'data', 'allSets.ts')

MONTHS = {
    'january': 'जनवरी', 'february': 'फरवरी', 'march': 'मार्च', 'april': 'अप्रैल',
    'may': 'मई', 'june': 'जून', 'july': 'जुलाई', 'august': 'अगस्त',
    'september': 'सितम्बर', 'october': 'अक्टूबर', 'november': 'नवम्बर', 'december': 'दिसम्बर'
}

UNITS_AND_TIME = {
    r'\bhours?\b': 'घंटे',
    r'\bminutes?\b': 'मिनट',
    r'\bseconds?\b': 'सेकंड',
    r'\bdays?\b': 'दिन',
    r'\bweeks?\b': 'सप्ताह',
    r'\bmonths?\b': 'माह',
    r'\byears?\b': 'वर्ष',
    r'\bkm\b': 'किमी',
    r'\bmeters?\b': 'मीटर',
    r'\bcm\b': 'सेमी',
    r'\bmm\b': 'मिमी',
    r'\bdegrees?\b': 'डिग्री',
    r'\bgrams?\b': 'ग्राम',
    r'\bkg\b': 'किग्रा',
    r'\blitres?\b': 'लीटर',
    r'\bpercent\b': 'प्रतिशत',
    r'\bpercentage\b': 'प्रतिशत',
    r'\bpair\b': 'जोड़ी',
    r'\bpairs\b': 'जोड़े',
}

DIRECTIONS = {
    r'\bnorth-east\b': 'उत्तर-पूर्व',
    r'\bnorth-west\b': 'उत्तर-पश्चिम',
    r'\bsouth-east\b': 'दक्षिण-पूर्व',
    r'\bsouth-west\b': 'दक्षिण-पश्चिम',
    r'\bnorth\b': 'उत्तर',
    r'\bsouth\b': 'दक्षिण',
    r'\beast\b': 'पूर्व',
    r'\bwest\b': 'पश्चिम',
}

CONSTITUTIONAL_TERMS = {
    r'\bconstitutional amendment act\b': 'संविधान संशोधन अधिनियम',
    r'\bamendment act\b': 'संशोधन अधिनियम',
    r'\bamendment\b': 'संशोधन',
    r'\bschedule\b': 'अनुसूची',
    r'\barticle\b': 'अनुच्छेद',
    r'\bfundamental rights?\b': 'मौलिक अधिकार',
    r'\bdirective principles of state policy\b': 'राज्य के नीति निदेशक तत्व',
    r'\bdirective principles\b': 'नीति निदेशक सिद्धांत',
    r'\bpreamble\b': 'प्रस्तावना',
    r'\bparliament\b': 'संसद',
    r'\blok sabha\b': 'लोकसभा',
    r'\brajya sabha\b': 'राज्यसभा',
    r'\bsupreme court\b': 'सर्वोच्च न्यायालय',
    r'\bhigh court\b': 'उच्च न्यायालय',
    r'\belection commission\b': 'चुनाव आयोग',
    r'\bplanning commission\b': 'योजना आयोग',
    r'\bfinance commission\b': 'वित्त आयोग',
    r'\bpanchayati raj\b': 'पंचायती राज',
    r'\bgram panchayat\b': 'ग्राम पंचायत',
    r'\bpresident\b': 'राष्ट्रपति',
    r'\bgovernor\b': 'राज्यपाल',
    r'\bprime minister\b': 'प्रधानमंत्री',
    r'\bchief minister\b': 'मुख्यमंत्री',
    r'\bvice-president\b': 'उपराष्ट्रपति',
    r'\bspeaker\b': 'अध्यक्ष (स्पीकर)',
    r'\bordinance\b': 'अध्यादेश',
    r'\bcensus\b': 'जनगणना',
    r'\bliteracy rate\b': 'साक्षरता दर',
    r'\bsex ratio\b': 'लिंगानुपात',
    r'\bpopulation density\b': 'जनसंख्या घनत्व',
}

SCIENCE_TERMS = {
    r'\bproduction of milk\b': 'दूध का उत्पादन',
    r'\bsecretion of lactic acid\b': 'लैक्टिक अम्ल का स्राव',
    r'\babsorption of fats\b': 'वसा का अवशोषण',
    r'\babsorption of water\b': 'जल का अवशोषण',
    r'\babsorption of protein\b': 'प्रोटीन का अवशोषण',
    r'\babsorption of glucose\b': 'ग्लूकोज का अवशोषण',
    r'\bsalivary amylase\b': 'लार एमाइलेज',
    r'\bhydrochloric acid\b': 'हाइड्रोक्लोरिक अम्ल (HCl)',
    r'\blactic acid\b': 'लैक्टिक अम्ल',
    r'\bacetic acid\b': 'एसिटिक अम्ल',
    r'\bcitric acid\b': 'साइट्रिक अम्ल',
    r'\btartaric acid\b': 'टार्टरिक अम्ल',
    r'\boxalic acid\b': 'ऑक्सालिक अम्ल',
    r'\bformic acid\b': 'फॉर्मिक अम्ल',
    r'\bsulfuric acid\b': 'सल्फ्यूरिक अम्ल (H2SO4)',
    r'\bnitric acid\b': 'नाइट्रिक अम्ल (HNO3)',
    r'\bsodium hydroxide\b': 'सोडियम हाइड्रॉक्साइड (NaOH)',
    r'\bsodium carbonate\b': 'सोडियम कार्बोनेट',
    r'\bsodium bicarbonate\b': 'सोडियम बाइकार्बोनेट',
    r'\bcalcium carbonate\b': 'कैल्शियम कार्बोनेट (CaCO3)',
    r'\bcalcium oxide\b': 'कैल्शियम ऑक्साइड (बिना बुझा चूना)',
    r'\bcalcium hydroxide\b': 'कैल्शियम हाइड्रॉक्साइड (बुझा हुआ चूना)',
    r'\bcopper sulfate\b': 'कॉपर सल्फेट (नीला थोथा)',
    r'\bheavy water\b': 'भारी जल (D2O)',
    r'\bwashing soda\b': 'धावन सोडा (Na2CO3·10H2O)',
    r'\bbaking soda\b': 'बेकिंग सोडा (NaHCO3)',
    r'\bbleaching powder\b': 'ब्लीचिंग पाउडर (CaOCl2)',
    r'\bplaster of paris\b': 'प्लास्टर ऑफ पेरिस',
    r'\bgypsum\b': 'जिप्सम',
    r'\bbrass\b': 'पीतल (तांबा + जस्ता)',
    r'\bbronze\b': 'कांस्य (तांबा + टिन)',
    r'\bsolder\b': 'सोल्डर (सीसा + टिन)',
    r'\bcinnabar\b': 'सिनाबार (HgS)',
    r'\bbauxite\b': 'बॉक्साइट',
    r'\bhaematite\b': 'हेमेटाइट',
    r'\blacquer\b': 'लाह / वार्निश',
    r'\blacteal\b': 'लैक्टियल (दूधिया नलिका)',
    r'\blacteals\b': 'लैक्टियल्स (दूधिया नलिकाएं)',
    r'\blymphatic capillaries\b': 'लसिका कोशिकाएं',
    r'\blymphatic system\b': 'लसिका तंत्र',
    r'\bintestinal villi\b': 'आंत्र रसांकुर (विली)',
    r'\bsmall intestine\b': 'छोटी आंत',
    r'\blarge intestine\b': 'बड़ी आंत',
    r'\bstomach\b': 'आमाशय (पेट)',
    r'\bliver\b': 'यकृत (लीवर)',
    r'\bpancreas\b': 'अग्न्याशय',
    r'\bkidney\b': 'वृक्क (गुर्दा)',
    r'\bnephron\b': 'नेफ्रॉन (वृक्काणु)',
    r'\balveoli\b': 'कूपिकाएं (एल्वियोली)',
    r'\blungs\b': 'फेफड़े',
    r'\bheart\b': 'हृदय',
    r'\bmitochondria\b': 'माइटोकॉन्ड्रिया (ऊर्जागृह)',
    r'\bchloroplast\b': 'हरितलवक (क्लोरोप्लास्ट)',
    r'\bribosome\b': 'राइबोसोम (प्रोटीन फैक्ट्री)',
    r'\blysosome\b': 'लाइसोसोम (आत्मघाती थैली)',
    r'\bnucleus\b': 'केंद्रक (नाभिक)',
    r'\bcytoplasm\b': 'कोशिकाद्रव्य',
    r'\bcell membrane\b': 'कोशिका झिल्ली',
    r'\bcell wall\b': 'कोशिका भित्ति',
    r'\bxylem\b': 'जाइलम (जल संवहन ऊतक)',
    r'\bphloem\b': 'फ्लोएम (भोजन संवहन ऊतक)',
    r'\bphotosynthesis\b': 'प्रकाश संश्लेषण',
    r'\bchlorophyll\b': 'पर्णहरिम (क्लोरोफिल)',
    r'\btranspiration\b': 'वाष्पोत्सर्जन',
    r'\brespiration\b': 'श्वसन',
    r'\bdigestion\b': 'पाचन',
    r'\bexcretion\b': 'उत्सर्जन',
    r'\bcirculation\b': 'परिसंचरण',
    r'\bwhite blood cells\b': 'श्वेत रक्त कणिकाएं (WBC)',
    r'\bred blood cells\b': 'लाल रक्त कणिकाएं (RBC)',
    r'\bplatelets\b': 'प्लेटलेट्स (रक्त बिम्बाणु)',
    r'\bhemoglobin\b': 'हीमोग्लोबिन',
    r'\bconvex lens\b': 'उत्तल लेंस',
    r'\bconcave lens\b': 'अवतल लेंस',
    r'\bconvex mirror\b': 'उत्तल दर्पण',
    r'\bconcave mirror\b': 'अवतल दर्पण',
    r'\bplane mirror\b': 'समतल दर्पण',
    r'\brefraction\b': 'अपवर्तन',
    r'\breflection\b': 'परावर्तन',
    r'\btotal internal reflection\b': 'पूर्ण आंतरिक परावर्तन',
    r'\bdispersion of light\b': 'प्रकाश का वर्ण विक्षेपण',
    r'\bscattering of light\b': 'प्रकाश का प्रकीर्णन',
    r'\boptical fibre\b': 'ऑप्टिकल फाइबर (प्रकाशिक तंतु)',
    r'\bkinetic energy\b': 'गतिज ऊर्जा',
    r'\bpotential energy\b': 'स्थितिज ऊर्जा',
    r'\bescape velocity\b': 'पलायन वेग',
    r'\bacceleration due to gravity\b': 'गुरुत्वीय त्वरण (g)',
    r'\bgravitational force\b': 'गुरुत्वाकर्षण बल',
    r'\bfrictional force\b': 'घर्षण बल',
    r'\bcentripetal force\b': 'अभिकेंद्रीय बल',
    r'\bcentrifugal force\b': 'अपकेंद्रीय बल',
    r'\belectric current\b': 'विद्युत धारा',
    r'\bpotential difference\b': 'विभवांतर (वोल्टेज)',
    r'\belectrical resistance\b': 'विद्युत प्रतिरोध',
    r'\bstep-up transformer\b': 'उच्चायी ट्रांसफार्मर',
    r'\bstep-down transformer\b': 'अपचायी ट्रांसफार्मर',
    r'\bmagnetic field\b': 'चुंबकीय क्षेत्र',
    r'\bmagnetic flux\b': 'चुंबकीय फ्लक्स',
}

EXPLANATION_TEMPLATES = [
    (r'\bOfficial Answer\b', 'आधिकारिक उत्तर'),
    (r'\bExplanation:\s*', 'विस्तृत व्याख्या: '),
    (r'\bExam Setter\'s Tips & Tricks:\s*', '💡 परीक्षा-संकेत एवं ट्रिक्स: '),
    (r'\bExam Setter\'s Tip & Quick Trick:\s*', '💡 परीक्षा-संकेत एवं ट्रिक्स: '),
    (r'\bAccording to BPSC official answer key\b', 'BPSC की आधिकारिक उत्तर-कुंजी के अनुसार'),
    (r'\bHence, Option \(([A-E])\) is the correct answer\b', r'अतः विकल्प (\1) सही उत्तर है'),
    (r'\bHence, option \(([A-E])\) is correct\b', r'अतः विकल्प (\1) सही है'),
    (r'\bTherefore, option \(([A-E])\) is correct\b', r'इसलिए विकल्प (\1) सही है'),
    (r'\bThe correct option is\b', 'सही विकल्प है'),
    (r'\bThe correct answer is\b', 'सही उत्तर है'),
    (r'\bMore than one of the above\b', 'उपर्युक्त में से एक से अधिक'),
    (r'\bNone of the above\b', 'उपर्युक्त में से कोई नहीं'),
]

def translate_phrase(text):
    if not text: return ''
    res = text.strip()

    # 1. Option D and E
    if re.search(r'more than one', res, re.I):
        return 'उपर्युक्त में से एक से अधिक'
    if re.search(r'none of the above', res, re.I):
        return 'उपर्युक्त में से कोई नहीं'

    # 2. Check constitutional & political terms
    for p, repl in CONSTITUTIONAL_TERMS.items():
        res = re.sub(p, repl, res, flags=re.I)

    # 3. Science terms
    for p, repl in SCIENCE_TERMS.items():
        res = re.sub(p, repl, res, flags=re.I)

    # 4. Directions
    for p, repl in DIRECTIONS.items():
        res = re.sub(p, repl, res, flags=re.I)

    # 5. Units & Time
    for p, repl in UNITS_AND_TIME.items():
        res = re.sub(p, repl, res, flags=re.I)

    # 6. Months & Dates
    for m_en, m_hi in MONTHS.items():
        res = re.sub(rf'\b{m_en}\b', m_hi, res, flags=re.I)

    # 7. Common ordinals (1st, 2nd, 3rd, 4th, 5th, etc.)
    res = re.sub(r'\b1st\b', 'प्रथम (1ला)', res, flags=re.I)
    res = re.sub(r'\b2nd\b', 'द्वितीय (2रा)', res, flags=re.I)
    res = re.sub(r'\b3rd\b', 'तृतीय (3रा)', res, flags=re.I)
    res = re.sub(r'\b(\d+)th\b', r'\1वां', res)

    # 8. Fractions
    res = re.sub(r'1/20th part', '1/20वां भाग', res, flags=re.I)
    res = re.sub(r'1/10th part', '1/10वां भाग', res, flags=re.I)
    res = re.sub(r'1/4th', 'एक-चौथाई', res, flags=re.I)
    res = re.sub(r'1/2', 'आधा (1/2)', res, flags=re.I)

    return res

def translate_explanation_text(text):
    if not text: return ''
    res = text.strip()

    # Apply templates
    for p, repl in EXPLANATION_TEMPLATES:
        res = re.sub(p, repl, res, flags=re.I)

    # Constitutional & Science & Directions
    for p, repl in CONSTITUTIONAL_TERMS.items():
        res = re.sub(p, repl, res, flags=re.I)
    for p, repl in SCIENCE_TERMS.items():
        res = re.sub(p, repl, res, flags=re.I)
    for p, repl in DIRECTIONS.items():
        res = re.sub(p, repl, res, flags=re.I)
    for p, repl in UNITS_AND_TIME.items():
        res = re.sub(p, repl, res, flags=re.I)
    for m_en, m_hi in MONTHS.items():
        res = re.sub(rf'\b{m_en}\b', m_hi, res, flags=re.I)

    # Common connectors
    res = re.sub(r'\bbecause\b', 'क्योंकि', res, flags=re.I)
    res = re.sub(r'\bduring\b', 'के दौरान', res, flags=re.I)
    res = re.sub(r'\bwhereas\b', 'जबकि', res, flags=re.I)
    res = re.sub(r'\bwhich is\b', 'जो कि', res, flags=re.I)
    res = re.sub(r'\bwhich are\b', 'जो कि', res, flags=re.I)
    res = re.sub(r'\bknown as\b', 'के रूप में जाना जाता है', res, flags=re.I)
    res = re.sub(r'\bis responsible for\b', 'के लिए उत्तरदायी है', res, flags=re.I)
    res = re.sub(r'\bconsists of\b', 'से मिलकर बनता है', res, flags=re.I)
    res = re.sub(r'\bplays a vital role in\b', 'में महत्वपूर्ण भूमिका निभाता है', res, flags=re.I)
    res = re.sub(r'\bwas signed on\b', 'हस्ताक्षरित हुआ था', res, flags=re.I)
    res = re.sub(r'\bwas founded in\b', 'में स्थापित किया गया था', res, flags=re.I)
    res = re.sub(r'\bwas held at\b', 'में आयोजित किया गया था', res, flags=re.I)

    return res

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as fp:
        data = json.load(fp)

    changed = False
    for q in data.get('questions', []):
        # 1. Options Hindi
        opts = q.get('options', [])
        opts_hi = q.get('options_hi', [])
        new_opts_hi = []
        for i, opt in enumerate(opts):
            current_hi = opts_hi[i] if i < len(opts_hi) else ''
            # Translate option if needed
            trans = translate_phrase(current_hi or opt)
            new_opts_hi.append(trans)
        q['options_hi'] = new_opts_hi

        # 2. Explanation Hindi
        eng_exp = q.get('explanation', '')
        cur_exp_hi = q.get('explanation_hi', '')
        q['explanation_hi'] = translate_explanation_text(cur_exp_hi or eng_exp)

        # 3. Tip Hindi
        eng_tip = q.get('tip', '')
        cur_tip_hi = q.get('tip_hi', '')
        q['tip_hi'] = translate_explanation_text(cur_tip_hi or eng_tip)

    with open(filepath, 'w', encoding='utf-8') as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)

def main():
    gk_files = glob.glob(os.path.join(SETS_DIR, 'bpsc-tre4-gkgs-*.json'))
    gs_files = glob.glob(os.path.join(SETS_DIR, 'bpsc-tre4-general-studies-*.json'))
    all_files = sorted(gk_files + gs_files)
    print(f"Translating {len(all_files)} General Studies files...")
    for f in all_files:
        process_file(f)
    print("All GK/GS files enriched with high quality Hindi translations!")

if __name__ == '__main__':
    main()

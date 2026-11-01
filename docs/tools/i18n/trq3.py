# Translate <name>-ko.json into <name>-<lang>.json in chunks of 25 with agy; re-ask for items that
# still contain Korean. Usage: python3 trq3.py <lang> <name>
import json, os, re, subprocess, sys
lang, name = sys.argv[1], sys.argv[2]
S = os.path.dirname(os.path.abspath(__file__)); os.chdir(S)
out = f'{name}-{lang}.json'
if os.path.exists(out) and os.path.getsize(out) > 0: print('SKIP', name); sys.exit(0)
L = {
 'ja': ('natural, polite Japanese (です・ます) for non-developer beginners', '민지→ミンジ, 준호→ジュノ, 서연→ソヨン, 하늘→ハヌル', '(1장) becomes (1章)'),
 'zh-hans': ('natural Simplified Chinese (Mainland usage) for non-developer beginners', '민지→敏智, 준호→俊浩, 서연→瑞妍, 하늘→夏娜', '(1장) becomes (第1章)'),
 'zh-hant': ('natural Traditional Chinese (Taiwan usage) for non-developer beginners', '민지→敏智, 준호→俊浩, 서연→瑞妍, 하늘→夏娜', '(1장) becomes (第1章)'),
 'es': ('natural, friendly Spanish (neutral Latin American, use tú) for non-developer beginners', '민지→Minji, 준호→Junho, 서연→Seoyeon, 하늘→Haneul', '(1장) becomes (cap. 1)'),
}[lang]
HANGUL = re.compile('[가-힣]')
def agy(prompt):
    r = subprocess.run(['timeout', '900', 'agy', '--print-timeout', '14m', f'-p={prompt}'], capture_output=True, text=True)
    t = re.sub(r'^```.*$', '', r.stdout, flags=re.M).strip()
    i, j = t.find('['), t.rfind(']')
    return json.loads(t[i:j + 1])
def translate(items):
    return agy(f"""Translate the JSON below from Korean into {L[0]}. Do NOT run any shell command and do not read or write files; just answer.
Output ONLY valid JSON: the same array order, the same keys and ids, the same number of choices in the same order. Translate prompt, every choice, and explain completely — no Korean may remain (translate Korean screen/menu names too). Keep product names and English terms. Fictional names: {L[1]}. Keep choices about the same relative length to each other. Chapter references: {L[2]}. No code fences.

{json.dumps(items, ensure_ascii=False)}""")
ko = json.load(open(f'{name}-ko.json', encoding='utf-8'))
done = []
for k in range(0, len(ko), 25):
    chunk = ko[k:k + 25]
    for attempt in range(3):
        try:
            tr = translate(chunk)
            if len(tr) == len(chunk) and all(a['id'] == b['id'] and len(a['choices']) == len(b['choices']) for a, b in zip(chunk, tr)): break
        except Exception as e:
            print('retry', name, k, e, file=sys.stderr)
    else:
        print('FAIL', name, k); sys.exit(1)
    # second pass for items that still have Korean
    for attempt in range(2):
        bad = [i for i, q in enumerate(tr) if HANGUL.search(json.dumps(q, ensure_ascii=False))]
        if not bad: break
        try:
            fixed = translate([chunk[i] for i in bad])
            for i, f in zip(bad, fixed):
                if f['id'] == tr[i]['id'] and len(f['choices']) == len(tr[i]['choices']): tr[i] = f
        except Exception as e:
            print('fix retry', name, e, file=sys.stderr)
    done += tr
left = [q['id'] for q in done if HANGUL.search(json.dumps(q, ensure_ascii=False))]
json.dump(done, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('DONE', name, len(done), 'hangul left', left)

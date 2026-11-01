# Rebalance <name>-<lang>.json in chunks of 20 so the correct choice is neither longest nor shortest.
# Usage: python3 bal3.py <lang> <name>   (writes <name>-<lang>-bal-changes.txt)
import json, os, re, subprocess, sys
lang, name = sys.argv[1], sys.argv[2]
S = os.path.dirname(os.path.abspath(__file__)); os.chdir(S)
f = f'{name}-{lang}'
subprocess.run(['node', 'bal-pick.ts', S, f], check=True)
picked = json.load(open(f'{f}-bal-in.json', encoding='utf-8'))
data = json.load(open(f'{f}.json', encoding='utf-8'))
byid = {q['id']: q for q in data}
log = open(f'{f}-bal-changes.txt', 'w', encoding='utf-8')
def agy(prompt):
    r = subprocess.run(['timeout', '900', 'agy', '--print-timeout', '14m', f'-p={prompt}'], capture_output=True, text=True)
    t = re.sub(r'^```.*$', '', r.stdout, flags=re.M).strip()
    i, j = t.find('['), t.rfind(']')
    return json.loads(t[i:j + 1])
for k in range(0, len(picked), 20):
    chunk = picked[k:k + 20]
    for attempt in range(3):
        try:
            out = agy(f"""Do NOT run any shell command and do not read or write files; just answer.
Below are multiple-choice quiz questions. In each, the correct choice (index correctIndex, 0-based) is currently the LONGEST or the SHORTEST choice, which gives the answer away.
Adjust lengths so that the correct choice is strictly neither the longest nor the shortest: longer than at least one wrong choice AND shorter than at least one wrong choice (count characters). Usually shorten the correct choice a little and make one wrong choice a bit longer and more specific, or the reverse. Keep the meaning of every choice exactly (correct stays correct with its key details; wrong stays clearly wrong; no new claims). Keep the language of the input. Same number and order of choices.
Output ONLY valid JSON: the same array, same ids, same correctIndex, with the new choices. No code fences.

{json.dumps(chunk, ensure_ascii=False)}""")
            if len(out) == len(chunk) and all(a['id'] == b['id'] and len(a['choices']) == len(b['choices']) for a, b in zip(chunk, out)): break
        except Exception as e:
            print('retry', f, k, e, file=sys.stderr)
    else:
        print('skip chunk', f, k); continue
    for b in out:
        q = byid[b['id']]
        for i, (o, n) in enumerate(zip(q['choices'], b['choices'])):
            if o != n: log.write(f"{'*' if i == b['correctIndex'] else ' '} {b['id']} | {o} => {n}\n")
        q['choices'] = b['choices']
json.dump(data, open(f'{f}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('BALANCED', f, len(picked))

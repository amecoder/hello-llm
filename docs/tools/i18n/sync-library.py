# Make the translated prompt library quote the translated chapter prompts letter for letter,
# the way the Korean library does (tests/prompt-library.test.ts checks Korean only).
# For each Korean library code block, find the Korean chapter block it copies (file, index);
# replace the translated library block at the same position with the translated chapter block
# at the same index. Skips a chapter whose translated block count differs from the Korean one.
# Usage: python3 sync-library.py <repo> <lang>
import glob, os, re, sys
repo, lang = sys.argv[1], sys.argv[2]
FENCE = re.compile(r'```[^\n]*\n(.*?)```', re.S)
blocks = lambda t: [m.group(1) for m in FENCE.finditer(t)]
LIB = 'guide/00-common/prompt-library.md'
ko_chap = {}
for p in sorted(glob.glob(f'{repo}/guide/*/[0-9][0-9]-*.md')):
    rel = os.path.relpath(p, repo)
    for i, b in enumerate(blocks(open(p).read())):
        ko_chap.setdefault(b.strip(), (rel, i))
ko_lib = blocks(open(f'{repo}/{LIB}').read())
path = f'{repo}/{lang}/{LIB}'
text = open(path).read()
tr_lib = list(FENCE.finditer(text))
assert len(tr_lib) == len(ko_lib), f'library block count differs: ko={len(ko_lib)} {lang}={len(tr_lib)}'
cache, skipped, out, last, changed = {}, set(), [], 0, 0
for k, m in zip(ko_lib, tr_lib):
    src = ko_chap.get(k.strip())
    new = m.group(1)
    if src:
        rel, i = src
        if rel not in cache:
            kb = blocks(open(f'{repo}/{rel}').read())
            tp = f'{repo}/{lang}/{rel}'
            tb = blocks(open(tp).read()) if os.path.exists(tp) else []
            cache[rel] = tb if len(tb) == len(kb) else None
        if cache[rel] is None:
            skipped.add(rel)
        else:
            new = cache[rel][i]
    if new != m.group(1):
        changed += 1
    out.append(text[last:m.start(1)] + new)
    last = m.end(1)
out.append(text[last:])
open(path, 'w').write(''.join(out))
print(f'{lang}: {changed}/{len(ko_lib)} library prompts replaced; skipped chapters (block count differs): {sorted(skipped)}')

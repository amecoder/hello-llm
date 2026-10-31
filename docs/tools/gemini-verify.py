# Check every table row in parts/*.md: the English quote must appear verbatim in raw/<ID>.en.txt.
# Usage: python3 gemini-verify.py <work dir containing parts/ and raw/>
import re, sys, glob, os
os.chdir(sys.argv[1] if len(sys.argv) > 1 else '.')
row = re.compile(r'^\|\s*([A-F]\d+)\s*\|(.*)$')
total = bad = 0
for f in sorted(glob.glob('parts/*.md')):
    fb = 0
    for line in open(f, encoding='utf-8'):
        m = row.match(line)
        if not m: continue
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if len(cells) < 6: print('SHAPE', f, cells[0]); bad += 1; fb += 1; continue
        rid, fact, state, src, quote = cells[0], cells[1], cells[2], cells[3], cells[4]
        total += 1
        if state != 'VERIFIED': continue
        q = quote[1:-1] if quote.startswith('"') and quote.endswith('"') else None
        path = f'raw/{src}.en.txt' if src != 'plans' else 'raw/plans.en.txt'
        if not q or not os.path.exists(path) or q not in open(path, encoding='utf-8').read():
            print('MISS', rid, src, (q or quote)[:90]); bad += 1; fb += 1
    print(f'{f}: problems {fb}')
print('rows', total, 'problems', bad)

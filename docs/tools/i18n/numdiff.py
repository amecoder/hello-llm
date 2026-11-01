# Compare the numbers (dates, amounts, counts) in a Korean page and its translation.
# Usage: python3 numdiff.py <repo> <out-dir> <rel...>
import re, sys
from collections import Counter
repo, out = sys.argv[1], sys.argv[2]
def nums(t):
    t = re.sub(r'\]\([^)]*\)', ']', t)            # link targets
    t = re.sub(r'https?://\S+', '', t)
    t = re.sub(r'<[A-Za-z][^>]*>', '', t)          # component tags
    t = re.sub(r'\[\^[^\]]+\]', '', t)             # footnote labels
    t = re.sub(r'(?m)^\s*\d+\.\s', '', t)          # ordered list markers
    return Counter(n.replace(',', '') for n in re.findall(r'\d[\d,]*', t))
bad = 0
for rel in sys.argv[3:]:
    a, b = nums(open(f'{repo}/{rel}').read()), nums(open(f'{out}/{rel}').read())
    miss, extra = a - b, b - a
    if miss or extra:
        bad += 1
        print(rel, 'missing:', dict(miss), 'extra:', dict(extra))
print('files with differences:', bad, '/', len(sys.argv) - 3)

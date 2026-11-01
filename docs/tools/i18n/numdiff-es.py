# numdiff for Spanish: compare numbers after normalizing both sides to plain integers/decimals.
# Korean: 만/억/조 units expanded (300만 → 3000000, 4,820만 → 48200000, 3.9만 → 39000), 10월 → 10.
# Spanish: thousands separators removed (3.000.000 / 10 000 → 3000000 / 10000), decimal comma → dot,
# "N millones"/"mil millones" expanded, month names → numbers.
# Usage: python3 numdiff-es.py <repo> <out-dir> <rel...>
import re, sys
from collections import Counter
repo, out = sys.argv[1], sys.argv[2]
MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

def strip(t):
    t = re.sub(r'\]\([^)]*\)', ']', t)
    t = re.sub(r'https?://\S+', '', t)
    t = re.sub(r'<[A-Za-z][^>]*>', '', t)
    t = re.sub(r'\[\^[^\]]+\]', '', t)
    t = re.sub(r'(?m)^\s*\d+\.\s', '', t)
    t = re.sub(r'\d{4}-\d{2}-\d{2}', lambda m: m.group(0).replace('-', ' '), t)
    return t

def fmt(x):
    x = float(x)
    return str(int(x)) if x.is_integer() else str(round(x, 4))

def ko_nums(t):
    t = strip(t)
    vals = []
    UNIT = {'만': 10**4, '억': 10**8, '조': 10**12}
    def unit(m):
        vals.append(fmt(float(m.group(1).replace(',', '')) * UNIT[m.group(2)]))
        return ' '
    t = re.sub(r'(\d[\d,]*(?:\.\d+)?)\s?(만|억|조)(?![가-힣]{0,0}\d)', unit, t)
    vals += [n.replace(',', '') for n in re.findall(r'\d[\d,]*(?:\.\d+)?', t)]
    return Counter(fmt(v) for v in vals)

def es_nums(t):
    t = strip(t)
    for i, mth in enumerate(MONTHS, 1):
        t = re.sub(rf'\b{mth}\b', f' {i} ', t, flags=re.I)
    vals = []
    def scale(m):
        n = float(m.group(1).replace('.', '').replace(' ', '').replace(',', '.'))
        mult = 10**9 if m.group(2) else 10**6
        vals.append(fmt(n * mult))
        return ' '
    t = re.sub(r'(\d[\d.\s]*(?:,\d+)?)\s(mil\s)?millones?', scale, t)
    # thousands: 3.000.000 or 10 000 ; decimals: 48,2
    for n in re.findall(r'\d{1,3}(?:[.\u00a0\u202f ]\d{3})+(?:,\d+)?(?!\d)|\d+\.\d{1,2}(?!\d)|\d+(?:,\d+)?', t):
        if re.fullmatch(r'\d+\.\d{1,2}', n):  # version-like decimal kept from the source (GPT-4.1)
            vals.append(n)
            continue
        vals.append(re.sub(r'[.\u00a0\u202f ]', '', n).replace(',', '.'))
    return Counter(fmt(v) for v in vals)

bad = 0
for rel in sys.argv[3:]:
    a, b = ko_nums(open(f'{repo}/{rel}').read()), es_nums(open(f'{out}/{rel}').read())
    miss = a - b
    if miss:
        bad += 1
        print(rel, 'missing:', dict(miss), 'extra:', dict(b - a))
print('files with missing numbers:', bad, '/', len(sys.argv) - 3)

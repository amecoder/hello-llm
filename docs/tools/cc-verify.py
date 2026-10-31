# Check every VERIFIED table row in parts/*.md: the quoted English sentence must appear in raw/<slug>.md.
# Both sides drop markdown emphasis, backslash escapes and link targets, then compare with whitespace collapsed.
# Usage: python3 cc-verify.py <work dir containing parts/ and raw/>
from __future__ import annotations

import glob
import os
import re
import sys

ROW = re.compile(r'^\|\s*([A-Z]\d+)\s*\|')


def norm(text: str) -> str:
    text = re.sub(r'\]\([^)]*\)', ']', text)  # [label](url) -> [label]
    text = text.replace('\\', '').replace('**', '').replace('[', '').replace(']', '')
    text = text.replace('’', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', text).strip()


def main() -> None:
    os.chdir(sys.argv[1] if len(sys.argv) > 1 else '.')
    cache: dict[str, str] = {}
    total = bad = 0
    for part in sorted(glob.glob('parts/*.md')):
        part_bad = 0
        for line in open(part, encoding='utf-8'):
            if not ROW.match(line):
                continue
            cells = [c.strip() for c in re.split(r'(?<!\\)\|', line.strip().strip('|'))]  # '\|' is a literal pipe
            if len(cells) < 6:
                print('SHAPE', part, cells[0]); bad += 1; part_bad += 1
                continue
            rid, _fact, state, src, quote = cells[:5]
            total += 1
            if state != 'VERIFIED':
                continue
            q = quote[1:-1] if len(quote) > 1 and quote[0] == '"' and quote[-1] == '"' else None
            path = f'raw/{src.replace("/", "_")}.md'
            if path not in cache and os.path.exists(path):
                cache[path] = norm(open(path, encoding='utf-8').read())
            if not q or path not in cache or norm(q) not in cache[path]:
                print('MISS', rid, src, (q or quote)[:100]); bad += 1; part_bad += 1
        print(f'{part}: problems {part_bad}')
    print('rows', total, 'problems', bad)


if __name__ == '__main__':
    main()

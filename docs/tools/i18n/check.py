from __future__ import annotations
# Compare a translated Markdown file against its Korean source: structure must survive translation.
# Usage: python3 check.py <ko.md> <translated.md>
import re
import sys


def facts(text: str) -> dict:
    return {
        'footnote_defs': sorted(re.findall(r'^\[\^([\w-]+)\]:', text, re.M)),
        'footnote_refs': sorted(set(re.findall(r'\[\^([\w-]+)\](?!:)', text))),
        'components': sorted(re.findall(r'<(Quiz|ChapterDone|YouTube|PromptBuilder|CertExam|LevelTest|MyProgress)\b[^>]*/>', text)),
        'component_ids': sorted(re.findall(r'<Quiz id="([^"]+)"', text)),
        'fences': text.count('```'),
        'links': sorted(set(re.findall(r'\]\(([^)\s]+)\)', text))),
        'images': sorted(re.findall(r'!\[[^\]]*\]\(([^)]+)\)', text)),
        'headings': len(re.findall(r'^#{1,6} ', text, re.M)),
        'en_quotes': sorted(set(q for q in re.findall(r'"([A-Za-z][^"]{12,})"', ''.join(
            l for l in text.splitlines(True) if l.startswith('[^'))))),
    }


def main() -> int:
    ko, tr = (open(p, encoding='utf-8').read() for p in sys.argv[1:3])
    a, b = facts(ko), facts(tr)
    bad = 0
    for k in a:
        if k == 'en_quotes':
            missing = [q for q in a[k] if q not in tr]
            if missing:
                bad += 1
                print(f'  {k}: {len(missing)} English quotes changed, e.g. {missing[0][:80]!r}')
        elif a[k] != b[k]:
            bad += 1
            if isinstance(a[k], list):
                print(f'  {k}: missing {sorted(set(a[k]) - set(b[k]))[:5]} extra {sorted(set(b[k]) - set(a[k]))[:5]}')
            else:
                print(f'  {k}: ko={a[k]} tr={b[k]}')
    hangul = len(re.findall(r'[가-힣]', re.sub(r'\([^)]*\)', '', tr)))
    print(f'{sys.argv[2]}: {"OK" if bad == 0 else f"{bad} problem(s)"}; hangul outside parentheses={hangul}')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())

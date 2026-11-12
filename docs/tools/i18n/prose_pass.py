# second pass: file-like Korean names in prose/tables/alt text (not footnote definitions, not headings)
import sys, glob, re
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
from namemap import TOKEN, map_token, is_name
BARE_RE = re.compile(r'(?<![가-힣\w])(비밀|정리도구|할일보드|hello-ai-연습)(?![가-힣\w])')
def fix_line(line):
    if line.startswith('[^') or re.match(r'#{1,6} ', line):
        return line
    line = TOKEN.sub(lambda m: map_token(m.group(0)) if is_name(m.group(0), False) and 'docs/re' not in m.group(0) else m.group(0), line)
    return BARE_RE.sub(lambda m: map_token(m.group(0)), line)
for lang in sys.argv[1:]:
    n = 0
    for p in glob.glob(f'{lang}/guide/**/*.md', recursive=True):
        s = open(p, encoding='utf-8').read()
        t = '\n'.join(fix_line(l) for l in s.split('\n'))
        if t != s: open(p, 'w', encoding='utf-8').write(t); n += 1
    print(lang, 'files', n)

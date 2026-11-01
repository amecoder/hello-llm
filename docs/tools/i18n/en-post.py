# Post-process translated pages: image paths, glossary tables, this site's own button names.
import glob, os, re, sys
root = sys.argv[1]; L = sys.argv[2] if len(sys.argv) > 2 else 'en'; os.chdir(root)
labels = ['다 읽음으로 표시', '다 읽음', '진행 현황 초기화', '확인 퀴즈', '직접 해 보기']
n_img = n_gl = 0
for p in glob.glob(f'{L}/**/*.md', recursive=True):
    rel = os.path.relpath(p, L); d = os.path.dirname(rel)
    s = open(p, encoding='utf-8').read(); o = s
    def fix(m):
        global n_img
        alt, src = m.group(1), m.group(2)
        if re.match(r'(https?:|/)', src) or os.path.exists(os.path.join(os.path.dirname(p), src)): return m.group(0)
        target = os.path.normpath(os.path.join(d, src))
        if not os.path.exists(target): print('missing image', p, src); return m.group(0)
        n_img += 1
        return f'![{alt}]({os.path.relpath(target, os.path.dirname(p))})'
    s = re.sub(r'!\[([^\]]*)\]\(([^)\s]+)\)', fix, s)
    for l in labels: s = s.replace(f' ({l})', '').replace(f'（{l}）', '')
    s = re.sub(r'Comprehension (Check|Test)', 'Understanding Check', s)
    lines = s.split('\n'); out = []; in_g = False
    for l in lines:
        # only glossaries whose 2nd column is the Korean reading (not e.g. Term | Meaning | Example)
        if re.match(r'^\| Term \| [^|]*(Pronunciation|Korean|Reading|How to read)[^|]* \| [^|]+ \|$', l):
            in_g = True; n_gl += 1; out.append('| Term | One-line meaning |'); continue
        if in_g and l.startswith('|'):
            cells = l.split('|'); out.append('|'.join(cells[:2] + cells[3:])); continue
        in_g = False; out.append(l)
    s = '\n'.join(out)
    if s != o: open(p, 'w', encoding='utf-8').write(s)
print('images', n_img, 'glossaries', n_gl)

# Point relative assets/ links in translated pages back at the Korean page's assets folder.
import glob, os, re, sys
os.chdir(sys.argv[1]); L = sys.argv[2] if len(sys.argv) > 2 else 'en'; n = 0
for p in glob.glob(f'{L}/**/*.md', recursive=True):
    rel = os.path.relpath(p, L); d = os.path.dirname(rel)
    s = open(p, encoding='utf-8').read()
    def fix(m):
        global n
        src = m.group(1)
        if os.path.exists(os.path.join(os.path.dirname(p), src)): return m.group(0)
        t = os.path.normpath(os.path.join(d, src))
        if not os.path.exists(t): print('missing', p, src); return m.group(0)
        n += 1; return f']({os.path.relpath(t, os.path.dirname(p))})'
    s2 = re.sub(r'\]\(((?:\./)?(?:\.\./)*assets/[^)\s]+)\)', fix, s)
    if s2 != s: open(p, 'w', encoding='utf-8').write(s2)
print('images', n)

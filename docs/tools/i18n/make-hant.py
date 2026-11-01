# Build the Traditional Chinese (Taiwan) site from the Simplified one with OpenCC s2twp:
# pages zh-hans/ -> zh-hant/, locales/zh-hans.ts -> locales/zh-hant.ts, quiz JSON <name>-zh-hans -> <name>-zh-hant.
# Link anchors are re-pointed by heading position, because OpenCC may convert a heading and the
# anchor that points at it differently (phrase conversion depends on context).
# Run: uvx --from opencc==1.1.9 python make-hant.py <repo> <i18n-dir>
import glob, json, os, re, sys
import opencc
repo, I = sys.argv[1], sys.argv[2]
_cc = opencc.OpenCC('s2twp')


class cc:
    # OpenCC reads '天后' as 'empress' and keeps 后 in '30 天后' (after 30 days) and '聊天后' (after chatting)
    @staticmethod
    def convert(s):
        return re.sub(r'(\d+ ?天|聊天)后', r'\1後', _cc.convert(s))

# 1. pages
src_root, dst_root = f'{repo}/zh-hans', f'{repo}/zh-hant'
pages = sorted(glob.glob(f'{src_root}/**/*.md', recursive=True))
for p in pages:
    rel = os.path.relpath(p, src_root); d = f'{dst_root}/{rel}'
    os.makedirs(os.path.dirname(d), exist_ok=True)
    t = open(p, encoding='utf-8').read().replace('/zh-hans/', '/zh-hant/')
    open(d, 'w', encoding='utf-8').write(cc.convert(t))
print('pages', len(pages))

# 2. locale file
s = open(f'{repo}/.vitepress/theme/locales/zh-hans.ts', encoding='utf-8').read()
s = cc.convert(s).replace('zhHans', 'zhHant').replace('Simplified Chinese screen text', 'Traditional Chinese (Taiwan) screen text')
s = s.replace("// zh-hant.ts is generated from this file with OpenCC (s2twp).", "// Generated from zh-hans.ts with OpenCC (s2twp) by docs/tools/i18n/make-hant.py.")
open(f'{repo}/.vitepress/theme/locales/zh-hant.ts', 'w', encoding='utf-8').write(s)

# 3. quiz JSON
names = [f[len(I) + 1:-len('-zh-hans.json')] for f in glob.glob(f'{I}/*-zh-hans.json') if not os.path.basename(f).startswith(('locale-', 'stages-'))]
for n in names:
    data = json.load(open(f'{I}/{n}-zh-hans.json', encoding='utf-8'))
    conv = [{'id': q['id'], 'prompt': cc.convert(q['prompt']), 'choices': [cc.convert(c) for c in q['choices']], 'explain': cc.convert(q['explain'])} for q in data]
    json.dump(conv, open(f'{I}/{n}-zh-hant.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('quiz sets', len(names))
for f in ('stages', 'locale'):
    d = json.load(open(f'{I}/{f}-zh-hans.json', encoding='utf-8'))
    conv = json.loads(cc.convert(json.dumps(d, ensure_ascii=False)))
    if f == 'locale':
        conv.update(code='zh-hant', label='繁體中文', lang='zh-Hant', var='zhHant')
    json.dump(conv, open(f'{I}/{f}-zh-hant.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

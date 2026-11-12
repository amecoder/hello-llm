# Build the Traditional Chinese (Taiwan) site from the Simplified one with OpenCC s2twp:
# pages zh-hans/ -> zh-hant/, locales/zh-hans.ts -> locales/zh-hant.ts, quiz JSON <name>-zh-hans -> <name>-zh-hant.
# Link anchors are re-pointed by heading position, because OpenCC may convert a heading and the
# anchor that points at it differently (phrase conversion depends on context).
# Run: uvx --from opencc==1.1.9 python make-hant.py <repo> <i18n-dir>
import glob, json, os, re, sys
import opencc
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tw_quotes
repo, I = sys.argv[1], sys.argv[2]
_cc = opencc.OpenCC('s2twp')


ITEM_FIXES = [('確認的專案', '確認的項目'), ('核實的專案', '核實的項目'), ('下面的專案', '下面的項目'), ('專案名稱和順序', '項目名稱和順序'), ('按專案列', '按項目列'), ('類別,專案,金額', '類別,項目,金額')]


class cc:
    # OpenCC reads '天后' as 'empress' and keeps 后 in '30 天后' (after 30 days) and '聊天后' (after chatting).
    # OpenCC also keeps Simplified quotes “” — Taiwan uses 「」 (tw_quotes.py).
    # OpenCC turns every 对象 into 物件, the programming word; this guide means "target, audience" everywhere.
    @staticmethod
    def convert(s):
        t = tw_quotes.convert(re.sub(r'(\d+ ?天|聊天)后', r'\1後', _cc.convert(s))).replace('物件', '對象')
        # OpenCC also writes 只 as 隻 (the measure word for animals), and keeps Mainland 賬號·窗口
        t = re.sub(r'(?<![一兩幾每這那0-9])隻', '只', t.replace('隻讀', '唯讀'))
        t = t.replace('賬號', '帳號').replace('窗口', '視窗').replace('郵箱', '電子郵件').replace('粘貼', '貼上').replace('套餐', '方案')
        # 里 (inside) -> 裡, but not in place/unit words or the name 里奧
        t = re.sub(r'(?<![公千鄰故])里(?![奧程])', '裡', t)
        # 项目 meaning "item" (not "project"): OpenCC always writes 專案
        for a, b in ITEM_FIXES: t = t.replace(a, b)
        return t

# 1. pages
src_root, dst_root = f'{repo}/zh-hans', f'{repo}/zh-hant'
pages = sorted(glob.glob(f'{src_root}/**/*.md', recursive=True))
for p in pages:
    rel = os.path.relpath(p, src_root); d = f'{dst_root}/{rel}'
    os.makedirs(os.path.dirname(d), exist_ok=True)
    t = open(p, encoding='utf-8').read().replace('/zh-hans/', '/zh-hant/')
    open(d, 'w', encoding='utf-8').write(cc.convert(t))
print('pages', len(pages))

# 1b. practice files (English names, translated contents) and diagram sources.
# The .svg next to each .excalidraw must be rendered again with the excalidraw skill afterwards.
n = 0
for f in glob.glob(f'{repo}/public/practice/zh-hans/**/*', recursive=True):
    if not os.path.isfile(f): continue
    d = f.replace('/zh-hans/', '/zh-hant/', 1); os.makedirs(os.path.dirname(d), exist_ok=True)
    open(d, 'w', encoding='utf-8', newline='').write(cc.convert(open(f, encoding='utf-8', newline='').read())); n += 1
for f in glob.glob(f'{src_root}/guide/**/assets/*.excalidraw', recursive=True):
    d = f.replace(src_root, dst_root, 1); os.makedirs(os.path.dirname(d), exist_ok=True)
    # a quote that spans two lines inside a label is not caught by tw_quotes
    t = cc.convert(open(f, encoding='utf-8').read()).replace('“', '「').replace('”', '」')
    open(d, 'w', encoding='utf-8').write(t); n += 1
print('practice files and diagram sources', n)

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

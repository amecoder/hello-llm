# Write .vitepress/theme/translations/<lang>/ from the translated quiz JSON and the translated pages,
# and register the language in translations/index.ts. Usage: python3 gen-lang.py <repo> <lang>
import json, os, re, sys
root, lang = sys.argv[1], sys.argv[2]
S = os.path.dirname(os.path.abspath(__file__))
os.chdir(root)
out_dir = f'.vitepress/theme/translations/{lang}'
os.makedirs(out_dir, exist_ok=True)
js = lambda s: json.dumps(s, ensure_ascii=False)
names = open(f'{S}/quiz-names.txt').read().split()
# only the sets that are already translated (a language can ship stage by stage)
names = [n for n in names if os.path.exists(f'{S}/{n}-{lang}.json')]
if len(sys.argv) > 3: names = [n for n in names if n in sys.argv[3].split(',')]
ident = lambda n: re.sub(r'\W', '_', n).upper()
for n in names:
    qs = json.load(open(f'{S}/{n}-{lang}.json', encoding='utf-8'))
    out = [f"// {lang} text for {n} (generated from the Korean bank; same ids and answers).",
           "import type { QuestionText } from '../types.ts'", "",
           f"export const {ident(n)}: Record<string, QuestionText> = {{"]
    for q in qs:
        out += [f"  {js(q['id'])}: {{", f"    prompt: {js(q['prompt'])},", "    choices: ["] + [f"      {js(c)}," for c in q['choices']] + ["    ],", f"    explain: {js(q['explain'])},", "  },"]
    out += ["}", ""]
    open(f'{out_dir}/{n}.ts', 'w', encoding='utf-8').write('\n'.join(out))
titles = {}
for dp, _, fs in os.walk(f'{lang}/guide'):
    for f in fs:
        if not f.endswith('.md'): continue
        text = open(os.path.join(dp, f), encoding='utf-8').read()
        m = re.search(r'<ChapterDone :chapter="(\d+)" />', text)
        if m:
            h = text.split('\n')[0][2:].strip()
            titles[int(m.group(1))] = re.split(r' — |——| ― ', h)[0].strip()
levels = [n for n in names if n.startswith('level-')]
others = [n for n in names if n not in levels]
idx = [f"// {lang} translation set (generated).", "import type { Translation } from '../types.ts'"]
idx += [f"import {{ {ident(n)} }} from './{n}.ts'" for n in names]
idx += ["", "const chapters: Record<number, string> = {"] + [f"  {k}: {js(v)}," for k, v in sorted(titles.items())] + ["}", ""]
idx += [f"export const {lang.replace('-', '_')}: Translation = {{", "  chapters,",
        "  questions: { " + ", ".join(f"...{ident(n)}" for n in others) + " },",
        "  level: { " + ", ".join(f"...{ident(n)}" for n in levels) + " },", "}", ""]
open(f'{out_dir}/index.ts', 'w', encoding='utf-8').write('\n'.join(idx))
p = '.vitepress/theme/translations/index.ts'; s = open(p, encoding='utf-8').read()
var = lang.replace('-', '_')
imp = f"import {{ {var} }} from './{lang}/index.ts'\n"
if imp not in s:
    s = s.replace("import { en } from './en.ts'\n", "import { en } from './en.ts'\n" + imp)
    s = re.sub(r"export const TRANSLATIONS: Partial<Record<Lang, Translation>> = \{ ([^}]*) \}", lambda m: f"export const TRANSLATIONS: Partial<Record<Lang, Translation>> = {{ {m.group(1)}, {var if var == lang else repr(lang) + ': ' + var} }}", s)
    open(p, 'w', encoding='utf-8').write(s)
print(lang, 'files', len(names), 'chapter titles', len(titles))

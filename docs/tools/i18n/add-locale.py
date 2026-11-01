# Register a new site language: config.mts locale block (nav, empty sidebar marker, labels),
# README rewrites, search labels, and locales/index.ts + i18n.ts entries.
# Usage: python3 add-locale.py <repo> <strings.json>
# strings.json: {"code","label","lang","var","description","toc","all","goto","stages":{dir:name},
#                "outline","prev","next","updated","dark","menu","top","langMenu",
#                "search":{"button","noResults","reset","select","navigate","close"}}
import json, re, sys
root, spec = sys.argv[1], json.load(open(sys.argv[2], encoding='utf-8'))
c = spec['code']; q = lambda s: json.dumps(s, ensure_ascii=False)
DIRS = ['00-common', '11-chatgpt', '10-claude', '12-gemini', '20-claude-code', '21-codex', '22-antigravity', '30-ai-sdlc']

p = f'{root}/.vitepress/config.mts'; s = open(p, encoding='utf-8').read()
assert f"'{c}': {{" not in s, 'already registered'
# README rewrites
rw = ''.join(f"    '{c}/guide/{d}/README.md': '{c}/guide/{d}/index.md',\n" for d in DIRS)
s = s.replace("  },\n  lastUpdated: true,", rw + "  },\n  lastUpdated: true,", 1)
# locale block, inserted after the ja block
nav = '\n'.join(f"              {{ text: {q(spec['stages'][d])}, link: '/{c}/guide/{d}/' }}," for d in DIRS)
block = f"""    '{c}': {{
      label: {q(spec['label'])},
      lang: '{spec['lang']}',
      link: '/{c}/',
      description: {q(spec['description'])},
      themeConfig: {{
        nav: [
          {{
            text: {q(spec['toc'])},
            activeMatch: '^/{c}/guide/',
            items: [
              {{ text: {q(spec['all'])}, link: '/{c}/guide/' }},
{nav}
            ],
          }},
          {{
            text: {q(spec['goto'])},
            items: [
              {{ text: 'ChatGPT', link: 'https://chatgpt.com/' }},
              {{ text: 'Claude', link: 'https://claude.ai/new' }},
              {{ text: 'Gemini', link: 'https://gemini.google.com/app' }},
            ],
          }},
        ],
        // sidebar:{c}
        sidebar: {{
        }},
        outline: {{ label: {q(spec['outline'])} }},
        docFooter: {{ prev: {q(spec['prev'])}, next: {q(spec['next'])} }},
        lastUpdated: {{ text: {q(spec['updated'])} }},
        darkModeSwitchLabel: {q(spec['dark'])},
        sidebarMenuLabel: {q(spec['menu'])},
        returnToTopLabel: {q(spec['top'])},
        langMenuLabel: {q(spec['langMenu'])},
      }},
    }},
"""
m = re.search(r"\n    ja: \{\n.*?\n    \},\n", s, re.S)
assert m, "ja locale block not found"
s = s[:m.end()] + block + s[m.end():]
# search labels, after the ja search entry
sr = spec['search']
search = f"""          '{c}': {{
            translations: {{
              button: {{ buttonText: {q(sr['button'])}, buttonAriaLabel: {q(sr['button'])} }},
              modal: {{
                noResultsText: {q(sr['noResults'])},
                resetButtonTitle: {q(sr['reset'])},
                footer: {{ selectText: {q(sr['select'])}, navigateText: {q(sr['navigate'])}, closeText: {q(sr['close'])} }},
              }},
            }},
          }},
"""
m = re.search(r"\n          ja: \{\n            translations: \{\n.*?\n          \},\n", s, re.S)
assert m, "ja search block not found"
s = s[:m.end()] + search + s[m.end():]
open(p, 'w', encoding='utf-8').write(s)

# locales/index.ts
p = f'{root}/.vitepress/theme/locales/index.ts'; s = open(p, encoding='utf-8').read()
v = spec['var']
s = s.replace("import { ja, jaContent } from './ja.ts'\n", f"import {{ ja, jaContent }} from './ja.ts'\nimport {{ {v}, {v}Content }} from './{c}.ts'\n")
s = re.sub(r"export const UI_TEXT = \{ ([^}]*) \}", lambda m: f"export const UI_TEXT = {{ {m.group(1)}, '{c}': {v} }}", s)
s = re.sub(r"export const CONTENT = \{ ([^}]*) \}", lambda m: f"export const CONTENT = {{ {m.group(1)}, '{c}': {v}Content }}", s)
open(p, 'w', encoding='utf-8').write(s)

# i18n.ts: translated stages start empty; extend as pages land
p = f'{root}/.vitepress/theme/i18n.ts'; s = open(p, encoding='utf-8').read()
all_stages = "['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'codex', 'antigravity', 'ai-sdlc']"
s = s.replace(f"  ja: {all_stages},\n", f"  ja: {all_stages},\n  '{c}': {all_stages},\n", 1)
open(p, 'w', encoding='utf-8').write(s)
print('registered', c)

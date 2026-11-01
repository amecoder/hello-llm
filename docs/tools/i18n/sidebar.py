# Add or rebuild the sidebar of one translated locale in config.mts from the Korean sidebar and
# the translated H1s. Usage: python3 sidebar.py <repo> <lang> <stages.json> <contents-label> <dir>...
import json, os, re, sys
root, lang, stages_json, contents, dirs = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5:]
os.chdir(root)
cfg = open('.vitepress/config.mts', encoding='utf-8').read()
names = json.load(open(stages_json, encoding='utf-8'))  # dir key -> stage name for the sidebar title
def h1(path):
    t = open(path, encoding='utf-8').read().split('\n')[0][2:].strip()
    return re.split(r' — |——| ― |：| - ', t)[0].strip()
q = lambda s: json.dumps(s, ensure_ascii=False)
blocks = []
for d in dirs:
    key = d.split('/')[-1]
    m = re.search(r"\n      '/%s/': \[\n(.*?)\n      \],\n" % re.escape(d), cfg, re.S)
    items = re.findall(r"\{ text: '([^']*)', link: '([^']*)' \}", m.group(1))
    lines = []
    for text, link in items:
        slug = link.rstrip('/').split('/')[-1]
        if link.endswith('/') and link.rstrip('/').endswith(key):
            lines.append(f"{{ text: {q(contents)}, link: '/{lang}{link}' }}")
        elif text.startswith('←'):
            target = link.rstrip('/').split('/')[-1]
            lines.append(f"{{ text: {q('← ' + names[target])}, link: '/{lang}{link}' }}")
        else:
            lines.append(f"{{ text: {q(h1(f'{lang}/{d}/{slug}.md'))}, link: '/{lang}{link}' }}")
    body = '\n'.join('                ' + l + ',' for l in lines)
    blocks.append(f"""          '/{lang}/{d}/': [
            {{
              text: {q(names[key + '#title'])},
              items: [
{body}
              ],
            }},
          ],""")
marker = f"        // sidebar:{lang}\n"
new = marker + "        sidebar: {\n" + '\n'.join(blocks) + "\n        },\n"
pat = re.escape(marker) + r"        sidebar: \{\n(?:          .*\n)*?        \},\n"
cfg2, n = re.subn(pat, lambda _: new, cfg)
assert n == 1, 'marker not found: add "// sidebar:<lang>" + empty sidebar to the locale block first'
open('.vitepress/config.mts', 'w', encoding='utf-8').write(cfg2)
print('sidebar blocks', len(blocks))

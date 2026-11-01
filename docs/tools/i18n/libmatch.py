# Share of prompt-library code blocks that appear verbatim in a chapter page of the same language.
# Usage: python3 libmatch.py <root-of-language>   (e.g. repo, repo/ja)
import glob, re, sys
root = sys.argv[1]
blocks = lambda t: [b.strip() for b in re.findall(r'```[^\n]*\n(.*?)```', t, re.S)]
lib = blocks(open(f'{root}/guide/00-common/prompt-library.md').read())
chap = set()
for p in glob.glob(f'{root}/guide/*/[0-9][0-9]-*.md'):
    chap.update(blocks(open(p).read()))
hit = [b for b in lib if b in chap]
print(f'{root}: {len(hit)}/{len(lib)} library prompts found verbatim in chapters')

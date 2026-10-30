# Download Gemini Apps Help articles (en for facts, ko for on-screen names) as plain text.
# Run from an empty work dir containing raw/: writes raw/<ID>.<lang>.txt and index.json there.
# One worker only: 4 parallel workers hit HTTP 429 on 2026-10-30.
import re, html, json, sys, urllib.request, concurrent.futures as cf
H = {'User-Agent': 'Mozilla/5.0'}
def get(url, lang):
    req = urllib.request.Request(url, headers={**H, 'Accept-Language': lang})
    return urllib.request.urlopen(req, timeout=40).read().decode('utf-8', 'replace')
def text_of(page):
    m = re.search(r'<div class="article-content-container">(.*?)</article>', page, re.S) or re.search(r'<article(.*?)</article>', page, re.S)
    t = m.group(1) if m else ''
    t = re.sub(r'<(script|style)[\s\S]*?</\1>', '', t)
    t = re.sub(r'<br\s*/?>|</(p|li|h\d|tr|td|th|div)>', '\n', t)
    t = html.unescape(re.sub(r'<[^>]+>', '', t)).replace('\xa0', ' ')
    return re.sub(r'\n\s*\n+', '\n', t).strip()
def title_of(page):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', page, re.S)
    return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip() if m else ''
# collect article ids from the home page and topic pages, one level deep
seeds = ['https://support.google.com/gemini/?hl=en']
home = get(seeds[0], 'en')
topics = sorted(set(re.findall(r'/gemini/topic/(\d+)', home)))
ids = set(re.findall(r'/gemini/answer/(\d+)', home))
for t in topics:
    try:
        ids |= set(re.findall(r'/gemini/answer/(\d+)', get(f'https://support.google.com/gemini/topic/{t}?hl=en', 'en')))
    except Exception as e:
        print('topic fail', t, e)
ids = sorted(ids)
print('topics', len(topics), 'articles', len(ids))
index = {}
def one(i):
    out = {}
    for lang in ('en', 'ko'):
        page = get(f'https://support.google.com/gemini/answer/{i}?hl={lang}', lang)
        txt = text_of(page)
        open(f'raw/{i}.{lang}.txt', 'w', encoding='utf-8').write(txt)
        out[lang] = (title_of(page), len(txt))
    return i, out
with cf.ThreadPoolExecutor(1) as ex:
    for fut in cf.as_completed([ex.submit(one, i) for i in ids]):
        try:
            i, out = fut.result(); index[i] = out
        except Exception as e:
            print('fail', e)
json.dump(index, open('index.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('saved', len(index), 'empty en:', [i for i, o in index.items() if o['en'][1] < 200])

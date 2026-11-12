# Korean practice file/folder names -> English names, for translated pages and translated practice files.
# Only filename-like tokens are touched (inside inline code, code blocks, link targets/texts).
import re

SEG = [  # longest first
    ('AGENTS없이', 'without-AGENTS'), ('AGENTS있을때', 'with-AGENTS'),
    ('회의-날짜', 'meeting-date'), ('회의록-날짜', 'minutes-date'),
    ('주간회의', 'weekly'), ('임시회의', 'adhoc'), ('회의정리', 'meeting-summary'), ('회의록', 'minutes'), ('회의', 'meeting'),
    ('주간회고', 'weekly-review'), ('회고', 'review'),
    ('공부노트', 'study-notes'), ('공부', 'study'),
    ('주간정리', 'weekly-summary'), ('정리도구', 'organizer'),
    ('할일보드', 'todo-board'), ('할일', 'todo'),
    ('숨은지시', 'hidden-instruction'), ('스크립트로', 'by-script'), ('스킬로', 'with-skill'), ('스킬', 'skill'),
    ('규칙확인', 'rule-check'), ('상태칸', 'status-column'), ('변경기록', 'changelog'), ('훅시험', 'hook-test'),
    ('프롬프트', 'prompt'), ('강의', 'lecture'), ('양식', 'template'), ('출력', 'output'), ('메모', 'memo'),
    ('연습', 'practice'), ('터미널', 'terminal'), ('다시', 'again'), ('비밀', 'secret'), ('암호', 'password'),
    ('한줄', 'one-line'), ('날짜', 'date'), ('결과', 'result'), ('초안', 'draft'), ('내', 'my'),
]
BARE = {'비밀', '정리도구', '터미널', '다시', '할일보드', '정리도구-연습', 'hello-ai-연습', '회의-', '회의록-날짜.md', '회의-날짜.txt'}
TOKEN = re.compile(r'[~./\\A-Za-z0-9_*\-가-힣]*[가-힣][~./\\A-Za-z0-9_*\-가-힣]*')
KEEP = ('다운로드', 'docs/reports/')  # Korean-locale Linux folder, repository docs


def map_token(tok: str) -> str:
    if any(k in tok for k in KEEP):
        return tok
    t = re.sub(r'(\d+)장', r'ch\1', tok)
    for ko, en in SEG:
        t = t.replace(ko, en)
    return t


def is_name(tok: str, bare_ok: bool) -> bool:
    if re.search(r'[./\\~*]', tok) or re.match(r'\d+장-', tok):
        return True
    return bare_ok and tok in BARE


def map_span(span: str, bare_ok: bool) -> str:
    return TOKEN.sub(lambda m: map_token(m.group(0)) if is_name(m.group(0), bare_ok) else m.group(0), span)


def map_markdown(text: str, lang: str) -> str:
    out, pos = [], 0
    pat = re.compile(r'```[\s\S]*?```|`[^`\n]+`|\[[^\]\n]*\]\(/practice/[^)\s]*\)|\]\([^)\s]*\)')
    for m in pat.finditer(text):
        out.append(text[pos:m.start()])
        s = m.group(0)
        if s.startswith('```'):
            s = map_span(s, False)
        elif s.startswith('`'):
            s = map_span(s, True)
        elif s.startswith('['):
            s = map_span(s, True).replace('](/practice/', f'](/practice/{lang}/')
        elif '/practice/' in s:
            s = map_span(s, True).replace('](/practice/', f'](/practice/{lang}/')
        out.append(s)
        pos = m.end()
    out.append(text[pos:])
    return ''.join(out)


def map_plain(text: str) -> str:
    """for quiz strings and practice file contents: filename-like tokens anywhere"""
    return map_span(text, False)

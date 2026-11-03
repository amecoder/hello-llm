# Taiwan-style quotation marks for the Traditional Chinese site (used by make-hant.py).
# “…” → 「…」 and, inside it, ‘…’ / 「…」 → 『…』. A standalone ‘…’ → 「…」.
# Quotes with no Han character inside (quoted English source text) and apostrophes such as don’t stay as they are.
import re

_HAN = re.compile(r'[一-鿿]')
_DOUBLE = re.compile(r'“([^“”\n]*)”')
_SINGLE = re.compile(r'(?<![A-Za-z])‘([^‘’\n]*?)’(?![A-Za-z])')


def _inner(m):
    s = m.group(1)
    return f'『{s}』' if _HAN.search(s) else m.group(0)


def _double(m):
    s = m.group(1)
    if not _HAN.search(s):
        return m.group(0)
    s = s.replace('「', '『').replace('」', '』')
    return '「' + _SINGLE.sub(_inner, s) + '」'


def _single(m):
    s = m.group(1)
    return f'「{s}」' if _HAN.search(s) else m.group(0)


def convert(text):
    return _SINGLE.sub(_single, _DOUBLE.sub(_double, text))

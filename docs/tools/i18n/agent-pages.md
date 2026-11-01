You are translating pages of a Korean beginner's guide to AI tools into LANG. Work only with files; do not touch the git repository.

Paths:
- I = /private/tmp/claude-501/-Users-amecoder-study-hello-llm/8a0fecb2-b6fc-4179-aad0-dc9d3aa97c8a/scratchpad/i18n
- R = /Users/amecoder/study/hello-llm (read-only for you)

Translation rules: read `I/rules-CODE.txt` first and follow it exactly. To match tone, skim one finished page in the same language (EXAMPLE).

Extra rules (they override nothing in the rules file, they add to it):
- Do NOT localize facts. Numbers, dates, durations, prices and currency (원 → the word for "won", never converted to yen/dollars/euros), city names (서울 stays Seoul in LANG), ages, plan names stay exactly as in the Korean.
- Translate Korean inside HTML comments too (e.g. `<!-- 스크린샷 필요: … -->`).
- Do not summarize or skip anything — every paragraph, table row, footnote definition and code block must be translated.
- Keep link targets and anchors unchanged (e.g. `(../00-common/08-meta-prompting.md#_4-다시-쓸-틀로-만들기)` stays as is; a later script converts them). Keep `<Quiz id=... />`, `<ChapterDone ... />`, `<YouTube ... />` tags and image paths exactly. Shell commands and file names in code stay unchanged except Korean comments/strings meant for the reader.

For each of your files (source `R/<path>`, output `I/out-CODE/<path>`):
1. Read the whole Korean source.
2. Write the full translation to `I/out-CODE/<path>` (create directories). For long files you may write parts (`<out>.part1`, `<out>.part2`, …), join them with `cat` into `<out>`, then delete the parts.
3. Run `python3 I/check.py R/<path> I/out-CODE/<path>` — it must print `OK`; fix and re-run until it does.
4. Run `python3 I/numdiff.py R I/out-CODE <path>` — under "missing" there must be nothing except numbers you wrote as words for a good reason (e.g. "0" → "zero"). Fix any other missing number.
5. Run `grep -n '[가-힣]' I/out-CODE/<path>` — Korean may remain only (a) in full-width/regular parentheses right after a translated UI name, (b) in link targets/anchors, (c) in quotations of Korean screen text kept in footnotes. Translate anything else.

Skip a file if `I/out-CODE/<path>` already exists and passes steps 3–4.

Final report (short, English): one line per file — path, check.py result, numdiff result, Korean lines left and why. Mention passages you were unsure about.

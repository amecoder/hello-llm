#!/bin/bash
# Translate one Korean Markdown file into <lang> under <lang>/, check structure, retry once.
# Usage: trl.sh <lang> <path>
set -u
I=/private/tmp/claude-501/-Users-amecoder-study-hello-llm/8a0fecb2-b6fc-4179-aad0-dc9d3aa97c8a/scratchpad/i18n
R=/Users/amecoder/study/hello-llm
lang="$1"; src="$2"; out="$I/out-$lang/$src"; mkdir -p "$(dirname "$out")"
[ -s "$out" ] && { echo "SKIP $src"; exit 0; }
for attempt in 1 2; do
  timeout 900 agy --print-timeout 14m -p="$(cat $I/rules-$lang.txt)

--- DOCUMENT START ---
$(cat "$R/$src")
--- DOCUMENT END ---" > "$out.tmp" 2>>"$I/log-$lang.err"
  sed -i '' -e '1{/^```/d;}' -e '${/^```$/d;}' "$out.tmp"
  if python3 "$I/check.py" "$R/$src" "$out.tmp" >> "$I/log-$lang.txt" 2>&1; then mv "$out.tmp" "$out"; echo "DONE $src"; exit 0; fi
  echo "RETRY $src" >> "$I/log-$lang.txt"
done
mv "$out.tmp" "$out"; echo "FAILCHECK $src"

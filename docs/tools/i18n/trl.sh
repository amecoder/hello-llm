#!/bin/bash
# Translate one Korean Markdown file into <lang> under <lang>/, check structure, retry once.
# Usage: trl.sh <lang> <path>
set -u
# T = this folder (rules, check.py), R = repository root, I = work folder for output and logs (override with I=...)
T="$(cd "$(dirname "$0")" && pwd)"
R="$(cd "$T/../../.." && pwd)"
I="${I:-${TMPDIR:-/tmp}/hello-llm-i18n}"
lang="$1"; src="$2"; out="$I/out-$lang/$src"; mkdir -p "$(dirname "$out")"
[ -s "$out" ] && { echo "SKIP $src"; exit 0; }
for attempt in 1 2; do
  timeout 900 agy --print-timeout 14m -p="$(cat "$T/rules-$lang.txt")

--- DOCUMENT START ---
$(cat "$R/$src")
--- DOCUMENT END ---" > "$out.tmp" 2>>"$I/log-$lang.err"
  sed -e '1{/^```/d;}' -e '${/^```$/d;}' "$out.tmp" > "$out.clean" && mv "$out.clean" "$out.tmp"
  if python3 "$T/check.py" "$R/$src" "$out.tmp" >> "$I/log-$lang.txt" 2>&1; then mv "$out.tmp" "$out"; echo "DONE $src"; exit 0; fi
  echo "RETRY $src" >> "$I/log-$lang.txt"
done
mv "$out.tmp" "$out"; echo "FAILCHECK $src"

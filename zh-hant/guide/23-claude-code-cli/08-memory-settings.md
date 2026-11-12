# 第8章 專案記憶與設定

<Badge type="tip" text="必讀" /> 想跟著這個階段走下去，一定要讀這一章。

> **一句話總結**：懶得每次都說的規則，寫進 `CLAUDE.md`。必須遵守的規則，做成 `settings.json` 裡的拒絕規則。

本章的畫面是 2026 年 11 月 6 日在 Linux 上用 Claude Code 2.1.318 執行的結果。

正如在[第6章](06-sessions-context.md)裡看到的，新會話不知道以前的對話。所以"會議記錄用表格寫"這句話，你每次都得重新說。這一章我們把這句話寫進檔案裡。

## CLAUDE.md 裡寫什麼

**CLAUDE.md** 是你寫下的持久指令。放在專案資料夾裡，在這個資料夾裡開啟 `claude` 時就會被載入。[^claudemd] 把它想成交給新同事的工作備忘，就容易理解了。

寫的標準很簡單：只寫 Claude 讀了檔案也無法知道的東西。[^practice] 比如回答用的語言、會議記錄的分節結構、儲存結果的資料夾。

也有不該寫的。

- 資料夾結構的說明。Claude 會自己去讀。[^practice]
- 由好幾步組成的流程。這類內容適合用[第9章](09-skills-extensions.md)的技能（寫下流程、按名字呼叫的檔案）。[^skill-procedure]
- 密碼或認證資訊

長度的目標是每個檔案不超過 200 行。[^claudemd] 也不用堆大寫字母或"一定要！！"。強調堆多了，反而容易讓規則被過度執行。[^practice]

```text
欠佳的例子：會議記錄一定要！！整理得乾乾淨淨！！
更好的例子：會議記錄只寫決定事項、待辦事項、下次會議三節。
```

更好的例子可以確認對錯。"乾乾淨淨"就沒法確認。

<Quiz id="ch808-what" />

## 建立並確認 CLAUDE.md

這是練習用的規則（檢視檔案：[8장-CLAUDE.md.txt](/practice/cli/results/8장-CLAUDE.md.txt)）。用 `/exit` 退出，在終端裡進入練習資料夾。Mac 和 Linux 把下面的內容整段貼上進去。`notes` 資料夾也會一起建立。

```bash
mkdir notes
cat > CLAUDE.md <<'EOF'
# 街角咖啡館 記錄整理規則

- 回答用韓語寫。
- 會議記錄只寫決定事項、待辦事項、下次會議三節。
- 待辦事項用表格寫。列是負責人、待辦事項、截止日期。
- 記錄裡沒有的內容不要編造。
- 整理好的檔案儲存到 notes 資料夾。
EOF
```

粘貼後如果還沒執行，就再按一次 Enter。什麼都沒顯示就是成功了。用 `ls` 看看 `CLAUDE.md` 和 `notes` 有沒有建好。

Windows PowerShell 用 `mkdir notes` 之後，再用 `notepad CLAUDE.md` 開啟記事本。去掉以 `cat` 開頭的那一行和 `EOF` 那一行，只填入兩者之間的內容。問你是否新建檔案時點「是（예）」，用 `Ctrl + S` 儲存後關閉。這個方法我們沒有實際執行過。

在終端裡確認一下新會話是否知道這些規則。這次用 `claude -p`。加上 `-p`，就不會開啟對話視窗。它只把一個問題的回答列印在終端裡，然後馬上結束。想快速確認一下時很方便。詳細內容在[第10章](10-headless-automation.md)裡講。

```bash
claude -p "這個資料夾的會議記錄規則是什麼？用三行回答。"
```

```text
1. 會議記錄只寫決定事項、待辦事項、下次會議三節，記錄裡沒有的內容不編造。
2. 待辦事項用包含負責人、待辦事項、截止日期三列的表格來寫。
3. 回答用韓語寫，整理好的檔案儲存到 notes 資料夾。
```

它回答出了你在對話裡從沒說過的規則。這說明檔案被載入了。要用於所有專案的個人習慣，放在 `~/.claude/CLAUDE.md` 裡。[^claudemd]

現在的練習裡，直接手寫 `CLAUDE.md` 就行。也有自動生成草稿的 `/init` 命令，但現在先不用。

::: details `/init` 什麼時候用？（點選展開）
`/init` 是自動生成 `CLAUDE.md` 草稿的命令。不過它會分析程式碼，找出構建命令、測試方法和專案慣例寫進去。[^init] 我們的記錄資料夾裡沒有這些東西，所以自己寫更簡單。本指南也沒有實際執行過它。以後處理程式碼專案時再試試。
:::

<Quiz id="ch808-make" />

## /memory 與自動記憶

在會話裡輸入 `/memory`，會顯示指令檔案的列表。[^memory]

```text
  ❯ Auto-memory  true

  ❯ Project instructions   Checked in at ./CLAUDE.md
    User instructions      Saved in ~/.claude/CLAUDE.md
    Open auto-memory folder
```

第一行的**自動記憶**（Auto memory）是 Claude 根據你的糾正和偏好自己寫下的筆記。`CLAUDE.md` 由你來寫，自動記憶由 Claude 來寫。在本地會話裡它預設是開啟的。[^memory]

它按專案儲存在 `~/.claude/projects/<project>/memory/` 資料夾裡。都是普通的 Markdown 檔案，隨時可以修改或刪除。想關掉的話，用 `/memory` 裡的開關。[^memory]

你說"記住這個"，它就會存進自動記憶。[^memory] 不過，如果是在這個資料夾裡任何時候都要遵守的規則，就直接寫進 `CLAUDE.md`。因為是你自己寫的，寫了什麼一清二楚。

<Quiz id="ch808-memory" />

## settings.json 的三個位置

**settings.json** 是改變 Claude Code 行為的設定檔案。[^settings] 內容用 JSON 格式寫。JSON 是按固定格式寫下欄位名和值的文字。在[第7章](07-permissions-undo.md)裡做的拒絕規則就在這裡面。它可以放在三個地方。[^settings]

| 檔案 | 適用範圍 |
|---|---|
| `~/.claude/settings.json` | 你電腦上的所有專案 |
| `.claude/settings.json` | 在這個資料夾裡工作的所有人 |
| `.claude/settings.local.json` | 只有你，只在這個專案裡 |

同一個設定出現在好幾個地方時，表格裡範圍窄的那個勝出。[^settings][^managed] 比如第一行的檔案和第三行的檔案規定得不一樣，就是第三行（只有你，只在這個專案裡）勝出。

拒絕規則是例外。在任何一級被拒絕的工具，其他級都不能允許。[^permissions]

- 儲存後，大多數情況下不用重啟，就會作用到正在執行的會話。[^settings]
- 載入了哪些檔案，可以在 `/status` 的 Setting sources 一行裡檢視。[^settings]
- 不能用結尾逗號和註釋。[^json-rule] 手動修改後如果不生效，先檢查逗號。

```text
錯誤的例子：{ "deny": ["Read(./비밀/**)"], }
正確的例子：{ "deny": ["Read(./비밀/**)"] }
```

錯誤的例子在 `]` 後面多了一個逗號。

<Quiz id="ch808-settings" />

## .claude 資料夾的結構

Claude Code 會從專案資料夾和你主資料夾裡的 `~/.claude` 讀取指令、設定和記憶。[^folder] 名字以點開頭的資料夾平時是隱藏的。用 `ls -a`（PowerShell 用 `ls -Force`）可以看到。

```text
~/hello-ai-연습/터미널/        這個專案
├── CLAUDE.md                  共享指令
├── CLAUDE.local.md            只有你用的指令
└── .claude/
    ├── settings.json          共享設定
    ├── settings.local.json    只有你用的設定
    ├── skills/                這個專案的技能
    └── agents/                這個專案的子代理

~/.claude/                     你的所有專案
├── CLAUDE.md, settings.json   個人指令和設定
├── skills/, agents/           個人技能和子代理
└── projects/                  對話記錄和自動記憶
```

`skills/` 和 `agents/` 在[第9章](09-skills-extensions.md)裡學。技能是按名字呼叫的工作說明書，子代理是另外負責旁支工作的幫手。現在只要知道有這些資料夾就行。

不用全部記住。大多數情況下，只改 `CLAUDE.md` 和 `settings.json` 就夠了。[^folder]

<Quiz id="ch808-folder" />

## 口頭規則與強制規則

這是本章最重要的一節。下面兩行看起來差不多，但力量不同。

```text
寫在 CLAUDE.md 裡：     不讀秘密資料夾。
寫在 settings.json 裡："deny": ["Read(./비밀/**)"]
```

`CLAUDE.md` 裡的話，會影響 Claude **打算嘗試做什麼**。但它改變不了 Claude Code **允許做什麼**。許可權規則不是由模型，而是由 Claude Code 程式來強制執行的。[^permissions] 拿公司來比方，`CLAUDE.md` 是工作須知，許可權規則是門上的鎖。

所以真正重要的事，要放進拒絕規則裡。[^practice] 可以這樣來分。

- 錯了改回來就行的事（語氣、格式），寫進 `CLAUDE.md`。
- 錯了就麻煩的事（讀秘密檔案），用拒絕規則。
- 每次都必須發生的事，用[第11章](11-hooks-statusline.md)的鉤子（在固定時刻由 Claude Code 自動執行的命令）。[^hook]

<Quiz id="ch808-enforce" />

## 動手試試

1. 在終端裡建立上面的 `CLAUDE.md` 和 `notes` 資料夾，用 `claude -p` 問一下規則。
2. 開啟 `claude`，請它"把 @inbox/회의-2026-10-27-주간회의.txt 這份記錄整理成會議記錄。"你沒說要用表格，表格出來了嗎？檔案儲存到 `notes` 裡了嗎？
3. 開啟 `/memory` 和 `/status` 看看，再按 Esc 關閉。
4. 用 `/exit` 退出，在終端裡用 `ls -a`（PowerShell 用 `ls -Force`）找到 `.claude` 資料夾。

問問自己：新會話遵守規則了嗎？我的規則裡，有沒有只是口頭說說就會出問題的？

## 小結

- `CLAUDE.md` 裡只寫 Claude 讀了也無法知道的東西，並且寫成可以確認的樣子。
- `/init` 是以程式碼資料夾為準的。記錄資料夾自己寫更簡單。
- 自動記憶由 Claude 來寫，在 `/memory` 裡檢視和關閉。
- `settings.json` 有三個位置，範圍窄的勝出。拒絕在任何位置都勝出。
- 口頭規則改變的是嘗試，許可權規則改變的是允許。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| CLAUDE.md | CLAUDE.md（專案指令檔案） | 你寫下的持久指令檔案 |
| Auto memory | 自動記憶 | Claude 自己寫下的筆記 |
| settings.json | 設定檔案 | 改變行為的設定檔案 |

<ChapterDone :chapter="808" />

下一章：[第9章 技能與擴充套件](09-skills-extensions.md)

[^claudemd]: Claude Code 官方文件，「How Claude remembers your project」。"CLAUDE.md files: instructions you write to give Claude persistent context." / "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." / "target under 200 lines per CLAUDE.md file." / "Personal preferences for all projects" https://code.claude.com/docs/en/memory （確認日期 2026-11-06）
[^practice]: Claude Code 官方文件，「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." / "Claude reads the repo itself. Only write down what isn't in there." / "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." / "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^skill-procedure]: Claude Code 官方文件，「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （確認日期 2026-11-06）
[^init]: Claude Code 官方文件，「How Claude remembers your project」。"Run `/init` to generate a starting CLAUDE.md automatically." / "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." https://code.claude.com/docs/en/memory （確認日期 2026-11-06）
[^memory]: Claude Code 官方文件，「How Claude remembers your project」。"The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Auto memory is on by default in local sessions." / "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." / "Auto memory files are plain markdown you can edit or delete at any time." / "To toggle it, open `/memory` in a session and use the auto memory toggle" / "Claude saves it to auto memory." https://code.claude.com/docs/en/memory （確認日期 2026-11-06）
[^settings]: Claude Code 官方文件，「Settings files and precedence」。"Settings are the JSON keys that change how Claude Code behaves" / "You, in every project on this machine" / "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" / "You, in this one project only." / "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." / "Settings precedence, highest first: managed settings, command line, project local, shared project, user." / "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" / "Run `/status` inside Claude Code to see which settings sources are active." https://code.claude.com/docs/en/settings （確認日期 2026-11-06）
[^permissions]: Claude Code 官方文件，「Configure permissions」。"If a tool is denied at any level, no other level can allow it." / "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." / "Permission rules are enforced by Claude Code, not by the model." https://code.claude.com/docs/en/permissions （確認日期 2026-11-06）
[^json-rule]: Claude Code 官方文件，「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide （確認日期 2026-11-06）
[^managed]: 如果是公司的電腦，管理員規定的設定（managed settings）優先於這三個。依據是同一份文件裡的 "Settings precedence, highest first: managed settings, command line, project local, shared project, user."。https://code.claude.com/docs/en/settings （確認日期 2026-11-06）
[^folder]: Claude Code 官方文件，「Explore the .claude directory」。"Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." / "Most users only edit `CLAUDE.md` and `settings.json`." https://code.claude.com/docs/en/claude-directory （確認日期 2026-11-06）
[^hook]: Claude Code 官方文件，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （確認日期 2026-11-06）

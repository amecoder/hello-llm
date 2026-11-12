# 第11章 鉤子與介面定製

<Badge type="tip" text="必讀" /> 要跟上這個階段，請一定讀完。

> **一句話總結**：鉤子（Hook）是在固定時刻由 **Claude Code 親自**執行的命令。它不交給 AI 去判斷，所以用在必須發生的事情上。

本章的介面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 執行的結果。

我們來做一個每次檔案被修改就留下記錄的鉤子。還會把介面底部的狀態列和回答的語氣調成適合你的樣子。

## 鉤子是什麼

鉤子是你事先定好的 Shell 命令。Claude Code 會在固定的時間點執行這條命令。所以你不用指望 Claude "記得去做"。[^hook-what]

和[第8章](08-memory-settings.md)的 CLAUDE.md 放在一起比較，就能看出區別。

- **不太好的例子**：在 CLAUDE.md 裡寫上"修改檔案後，在 변경기록.txt 裡記一行"。負責遵守的是 Claude。它可能會漏掉。
- **更好的例子**：把同樣的事做成鉤子。負責遵守的是 Claude Code。每次修改檔案後，命令都會執行。

每次都必須發生的事，就用鉤子。[^every-time] 不過也不用把規則全都搬到鉤子裡。語氣、文件格式這類規則，用 CLAUDE.md 就夠了。鉤子只用在"漏掉就麻煩的事"上。

<Quiz id="ch811-what" />

## 製作變更記錄鉤子

鉤子是在設定檔案里加上 `hooks` 這一項來製作的。[^hook-add] 本章把它放進專案設定檔案 `.claude/settings.json`。就是放著[第7章](07-permissions-undo.md)拒絕規則的那個檔案。

手動修改的話，很容易因為一個逗號出錯。所以我們一次性覆蓋整個檔案。第7章的拒絕規則也原樣包含在下面的內容裡，不會消失。

用 `/exit` 退出，在終端的練習資料夾裡把下面整段貼上進去。粘貼後如果還沒執行，就再按一次 Enter。

會出現好幾個陌生的專案名，但現在不用全都懂。大塊只有三個。

- `permissions`：第7章做的拒絕規則
- `hooks`：這次要做的變更記錄鉤子
- `statusLine`：介面底部的狀態列

詳細意思在程式碼框下面逐一解釋。

```bash
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./비밀/**)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "date '+%F %T 檔案已被修改' >> 변경기록.txt" }
        ]
      }
    ]
  },
  "statusLine": { "type": "command", "command": "echo 街角咖啡館 整理中" }
}
EOF
```

Windows PowerShell 用 `notepad .claude\settings.json` 開啟記事本。刪掉原來的內容，從上面的程式碼框裡去掉以 `cat` 開頭的那一行和 `EOF` 那一行，只放中間的內容。按 `Ctrl + S` 儲存後關閉。這個方法我們沒有實際執行過。

我們把陌生的詞逐個解釋一下。最後的 `statusLine` 項，放到後面的「狀態列」一節再看。

- `PostToolUse`：表示 Claude 使用工具**之後**。已經完成的事無法撤回。能在使用工具**之前**插進去阻止的時間點是 `PreToolUse`。[^post]
- `matcher`：決定對哪些工具做出反應。`Write|Edit` 是建立檔案的工具和修改檔案的工具。這裡的 `|` 是"或者"的意思。Claude 用 Shell 命令改動的檔案，這個鉤子不會做出反應。
- `command`：要執行的命令。把當前的日期、時間和一句話追加到 `변경기록.txt`（變更記錄.txt）的末尾。把命令拆開來看是這樣的。
  - `date`：列印當前日期和時間的命令。
  - `'+%F %T 檔案已被修改'`：要列印的格式。`%F` 的位置填日期（`2026-11-06`），`%T` 的位置填時間（`11:19:11`）。
  - `>> 변경기록.txt`：把結果追加到那個檔案的末尾。第10章的 `>` 會覆蓋檔案，`>>` 是接在後面寫。如果檔案不存在，就新建一個。

不覆蓋檔案，也可以用語言請 Claude 幫忙。[^ask-claude] 如果是像你自己的專案那樣已經寫有設定的檔案，這個方法更好。`.claude` 資料夾是特別保護的地方，這時可能會彈出許可視窗。[^protected]

```text
請在 .claude/settings.json 裡新增一個鉤子。讓 Claude 每次使用 Write 或 Edit 工具之後都執行下面的命令。不要刪掉已有的內容。
date '+%F %T 檔案已被修改' >> 변경기록.txt
```

如果已經有 `hooks` 項，不要整個替換，而是在裡面再加一個。[^sibling] 在 Windows 上我們沒有執行過這個鉤子。`date` 命令是 bash 格式，可能無法直接執行。這種時候，請 Claude 把它換成適合你環境的命令。

現在來測試。啟動 `claude`，傳送下面的內容。

```text
在 notes 資料夾裡新建 훅시험.md，只寫一行"鉤子測試"。
```

完成後輸入 `! cat 변경기록.txt`。實際執行時，留下了這樣一行。

```text
2026-11-06 11:19:11 檔案已被修改
```

完整的設定檔案可以在 [11장-settings.json.txt](/practice/cli/results/11장-settings.json.txt) 裡檢視。

<Quiz id="ch811-log" />

## 確認鉤子

鉤子有沒有註冊上，在會話裡輸入 `/hooks` 檢視。[^hooks-menu] 這個介面是**只讀的**。不能在這裡建立或修改鉤子。介面上自己就是這麼寫的。

```text
  Hooks
  1 hook on 1 event

  This menu is read-only. To add or change a hook, edit settings.json or ask Claude. Learn more

    PostToolUse  after tool execution
  ❯ [Project] date '+%F %T 檔案已被修改' >> 변경기록.txt   Write|Edit · command

    All events

  Enter to view · Esc to close
```

如果鉤子沒有執行，先問問自己：`/hooks` 裡能看到嗎？在 `PostToolUse` 下面嗎？[^hooks-menu] 如果還是沒有，就檢查設定檔案的語法。設定檔案裡**不能有末尾多出來的逗號和註釋。**[^json] 重新用前面的程式碼框覆蓋一次是最快的。

<Quiz id="ch811-check" />

## 別人給的資料夾裡的鉤子

如果是你自己做的練習資料夾，風險很低。要小心的是從別人那裡拿到的資料夾。

別人給的資料夾裡，可能有別人寫好的鉤子。[^hook-share] 用 `claude -p` 執行時，即使是你從沒回答過"信任"的資料夾，那些鉤子也會執行。[^p-untrusted] 所以最安全的想法是：那些鉤子會在你的電腦上、用你的帳號執行。拿到的資料夾，在啟動 Claude **之前**先讀一讀設定檔案。這條建議不是官方文件裡的話，而是本指南的判斷。

```bash
cat .claude/settings.json
```

看看 `hooks` 和 `statusLine` 項裡有什麼命令。看不懂的話，就在那個資料夾以外的地方用聊天問一問。[第9章](09-skills-extensions.md)的外掛也能以你的許可權執行程式碼。[^plugin-run] 用同樣的態度對待就行。

<Quiz id="ch811-trust" />

## 狀態列

狀態列（Status line）是在 Claude Code 介面底部，顯示你指定的 Shell 指令碼輸出的那一行。[^status-what] 在設定檔案里加上 `statusLine` 項就行。[^status-set] 前面覆蓋的設定裡已經有下面這一行了。不用另外修改。

```json
"statusLine": { "type": "command", "command": "echo 街角咖啡館 整理中" }
```

實際執行後，輸入框下面顯示成這樣。

```text
  街角咖啡館 整理中
```

在接受資料夾信任視窗之前，狀態列是空的。[^status-trust] 因為這是執行 Shell 命令的功能，所以和鉤子遵守同樣的信任規則。上一節的注意事項也同樣適用。

也可以在 `/statusline` 後面用文字寫出想要的樣子來製作。[^status-nl] 這個功能本指南沒有實際執行過。

<Quiz id="ch811-statusline" />

## 輸出風格與主題

一開始不用改。需要的時候再拿出來用。這兩樣本指南都沒有實際執行過，下面是官方文件說明的內容。

**輸出風格**（Output style）決定一個會話裡所有回答的角色、語氣和格式。比如 `Concise` 會先說結果，減少開場白和總結。[^style-what]

```text
/output-style Concise
```

**主題**是顏色。如果介面上的字看不清，就用 `/theme` 選適合你終端的顏色。[^theme]

<Quiz id="ch811-style" />

## 動手試一試

1. 用 `/exit` 退出，在終端裡貼上設定程式碼框。
2. 啟動 `claude`，看看輸入框下面有沒有顯示 `街角咖啡館 整理中`。
3. 輸入 `/hooks`，確認它出現在 `PostToolUse` 下面，然後按 Esc 關閉。
4. 傳送鉤子測試的請求後，用 `! cat 변경기록.txt` 看看是不是多了一行。

問問自己：鉤子真的運行了嗎？不要看 Claude 的回答，而是親自開啟 `변경기록.txt` 再回答。

## 小結

- 鉤子是 Claude Code 在固定時間點執行的命令。用在必須發生的事情上。
- `/hooks` 是唯讀的。建立和修改要在設定檔案裡進行。
- 設定檔案的 JSON 裡不寫末尾逗號和註釋。
- 別人給的資料夾，啟動前先讀 `.claude/settings.json`（本指南的判斷）。
- 狀態列、輸出風格、主題，只在需要時再改。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Hook | 鉤子 | 在固定時間點自動執行的命令 |
| `PostToolUse` | 工具使用後 | 表示使用工具之後的時間點 |
| `PreToolUse` | 工具使用前 | 表示使用工具之前的時間點 |
| JSON | JSON | 設定檔案使用的文字格式 |
| Status line | 狀態列 | 在介面底部顯示你的命令輸出的一行 |
| Output style | 輸出風格 | 回答的角色、語氣、格式的組合 |

<ChapterDone :chapter="811" />

下一章：[第12章 同時工作與遠端](12-parallel-remote.md)

[^hook-what]: Claude Code 官方文件，「Automate actions with hooks」。"Hooks are user-defined shell commands." / "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^every-time]: Claude Code 官方文件，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (確認日期 2026-11-06)
[^hook-add]: Claude Code 官方文件，「Automate actions with hooks」。"To create a hook, add a `hooks` block to a settings file." https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^post]: Claude Code 官方文件，「Automate actions with hooks」。"`PostToolUse` hooks can't undo actions since the tool has already executed." / "Before a tool call executes. Can block it" https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^ask-claude]: Claude Code 官方文件，「Automate actions with hooks」。"You can also ask Claude to write the hook for you by describing what you want in the CLI." https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^protected]: `.claude` 資料夾是受保護的路徑，寫入不會被直接批准。手動模式下會彈出許可視窗，自動模式下由另一個預先審查行為的 AI 來判斷。Claude Code 官方文件，「Choose a permission mode」。"Writes to a small set of paths are never auto-approved" / 表格的 `auto` 行："Routed to the classifier" https://code.claude.com/docs/en/permission-modes (確認日期 2026-11-06)
[^sibling]: Claude Code 官方文件，「Automate actions with hooks」。"If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^hooks-menu]: Claude Code 官方文件，「Automate actions with hooks」。"Type `/hooks` at the Claude Code prompt to open the hooks browser." / "Run `/hooks` and confirm the hook appears under the correct event" https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^json]: Claude Code 官方文件，「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^hook-share]: Claude Code 官方文件，「Automate actions with hooks」。`.claude/settings.json` 一行中"是否共享"一欄："Yes, can be committed to the repo" https://code.claude.com/docs/en/hooks-guide (確認日期 2026-11-06)
[^p-untrusted]: Claude Code 官方文件，「Run Claude Code programmatically」。"Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." https://code.claude.com/docs/en/headless (確認日期 2026-11-06)
[^plugin-run]: Claude Code 官方文件，「Plugins overview」。"Whatever the tier, a plugin you install can run code with your user privileges." https://code.claude.com/docs/en/plugins/overview (確認日期 2026-11-06)
[^status-what]: Claude Code 官方文件，「Customize your status line」。"The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." https://code.claude.com/docs/en/statusline (確認日期 2026-11-06)
[^status-set]: Claude Code 官方文件，「Customize your status line」。"Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." https://code.claude.com/docs/en/statusline (確認日期 2026-11-06)
[^status-trust]: Claude Code 官方文件，「Customize your status line」。"Until you accept the workspace trust dialog, the status line stays blank." / "Because `statusLine` executes a shell command" https://code.claude.com/docs/en/statusline (確認日期 2026-11-06)
[^status-nl]: Claude Code 官方文件，「Customize your status line」。"The `/statusline` command accepts natural language instructions describing what you want displayed." https://code.claude.com/docs/en/statusline (確認日期 2026-11-06)
[^style-what]: Claude Code 官方文件，「Output styles」。"An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." / "Responses lead with the result and leave out preamble, narration, and recaps" https://code.claude.com/docs/en/output-styles (確認日期 2026-11-06)
[^theme]: Claude Code 官方文件，「Configure your terminal for Claude Code」。"Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." https://code.claude.com/docs/en/terminal-config (確認日期 2026-11-06)

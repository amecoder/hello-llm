# 第9章 技能與擴充套件

<Badge type="tip" text="必讀" /> 要跟上這個階段，請一定讀完。

> **一句話總結**：反覆下達的指示，就做成技能。旁支工作交給子代理，外部服務用 MCP，打包安裝用外掛。一開始有一個技能就夠了。

本章的介面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 執行的結果。

## 製作技能

**技能**（Skill）是只用一個 `SKILL.md` 檔案，就能給 Claude 增加一套工作流程的功能。如果你總是把同樣的指示貼上到聊天裡，就值得做一個。[^skill] 可以把它看成一本叫名字就能用的工作說明書。

專案技能放在 `.claude/skills/<技能名>/SKILL.md`。[^skill] 用 `/exit` 退出，在終端裡進入練習資料夾。Mac 和 Linux 把下面整段貼上進去（以檔案檢視：[9장-스킬-meeting-notes.txt](/practice/cli/results/9장-스킬-meeting-notes.txt)）。

```bash
mkdir -p .claude/skills/meeting-notes
cat > .claude/skills/meeting-notes/SKILL.md <<'EOF'
---
description: 把會議筆記整理成符合規則的會議記錄。用於整理會議筆記的請求。
---

讀取 $ARGUMENTS 檔案，按照 CLAUDE.md 的規則製作會議記錄。
檔名用 `회의록-날짜.md`（會議記錄-日期），儲存到 notes 資料夾。
完成後，用一行告訴我儲存的檔名和待辦事項的數量。
EOF
```

粘貼後如果還沒執行，就再按一次 Enter。什麼都沒顯示就是成功了。用 `ls .claude/skills/meeting-notes` 看看 `SKILL.md` 有沒有生成。

Windows PowerShell 先執行 `mkdir .claude\skills\meeting-notes`，再用 `notepad .claude\skills\meeting-notes\SKILL.md` 開啟記事本。去掉以 `cat` 開頭的那一行和 `EOF` 那一行，只放中間的內容。如果問你要不要新建檔案，就點 `是`，按 `Ctrl + S` 儲存後關閉。這個方法我們沒有實際執行過。

檔案分兩部分：`---` 之間的設定，和下面的指示文字。[^skill]

- **資料夾名** `meeting-notes` 就是你要輸入的命令名。[^skill]
- **description** 是 Claude 判斷什麼時候呼叫這個技能的依據。[^skill]
- **`$ARGUMENTS`** 是一個空位。呼叫技能時傳進去的文字會填到這裡。[^arguments] 練習裡，命令後面寫的檔案路徑填了進去，於是整理了那份筆記。所以同一個技能也能整理別的筆記。

```text
不太好的 description：會議
更好的 description：  把會議筆記整理成符合規則的會議記錄。用於整理會議筆記的請求。
```

更好的例子同時說明了做什麼事和什麼時候用。Claude 更容易察覺合適的時機。

現在在終端裡啟動 `claude`，輸入 `/`，在列表裡找找看。直接呼叫時這樣輸入。

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

用[第10章](10-headless-automation.md)的 `claude -p` 呼叫同一個技能後，生成了 `notes/회의록-2026-10-27.md`，Claude 這樣回答。

```text
已儲存到 `notes/회의록-2026-10-27.md`，待辦事項有 5 個。
```

按照[第8章](08-memory-settings.md)的 `CLAUDE.md` 規則，生成了決定事項、待辦事項、下次會議三個部分（[檢視結果](/practice/cli/results/10장-회의록-스크립트로.txt)）。技能正文只在使用時才載入，所以平時幾乎沒有負擔。[^skill]

<Quiz id="ch809-skill" />

## 技能不起作用時

有時寫錯了也不會報錯。如果列表裡沒有，或者表現奇怪，就按這個順序檢查。

1. 資料夾名和你輸入的命令一樣嗎？
2. 位置是 `.claude/skills/meeting-notes/SKILL.md` 嗎？
3. 檔案的第一行是 `---` 嗎？只有在第一行時，設定才會被讀取。[^skill-debug]
4. 設定項名稱的拼寫對嗎？拼錯了會被悄悄忽略，不報錯。[^skill-debug]
5. 啟動 `claude` 的資料夾是練習資料夾嗎？用 `pwd` 確認。

會話中途修改的內容，不用重啟就會生效。不過，如果新建了會話啟動時還不存在的技能資料夾，就執行 `/reload-skills`。[^skill-debug]

<Quiz id="ch809-debug" />

## 子代理

**子代理**（Subagent）是負責某一類工作的專門助手。它在自己的上下文視窗裡工作，只把總結交回來。所以搜尋結果和日誌不會把你的對話弄亂。[^sub] 就像把資料調查交給助理，自己只聽結論。

比如，想象一下要把五份會議記錄逐一和原始筆記核對的工作。如果你直接讓 Claude 做，筆記和會議記錄這十個檔案的內容會一行行堆進你的對話。交給子代理的話，檔案由子代理去讀，你的對話裡只會回來幾行結論，比如"第3份會議記錄的截止日期和筆記不一致"。

最簡單的製作方法是請 Claude 幫忙。[^sub] 說"在這個專案裡做一個子代理，用來核對會議記錄和原始筆記是否一致。"就行。如果找不到新做的子代理，試試重啟 Claude Code。[^sub] 本指南沒有實際做過子代理。

舊文章裡可能會讓你在 `/agents` 介面裡製作。現在那個嚮導已經沒有了。輸入 `/agents`，只會顯示一段提示文字，讓你請 Claude 幫忙或者直接修改檔案。[^sub]

子代理的請求也和你的對話計入同一個用量上限。[^sub] 如果是小事，直接讓 Claude 做更好。

<Quiz id="ch809-subagent" />

## MCP

**MCP**（Model Context Protocol）讓 Claude Code 能做內建工具以外的事。比如搜尋彙總待辦和錯誤報告的列表（問題跟蹤器），查詢存放資料的倉庫（資料庫），操作網頁瀏覽器。[^mcp] 可以把它看成給 Claude 插上通往外部服務的連線線。

輸入命令的地方分成兩處。`claude mcp add` 是在啟動 `claude` 之前的終端（Shell）裡輸入。`/mcp` 是在會話裡檢視已經新增的伺服器時輸入。[^mcp] 我們用官方文件裡的示例伺服器試了新增、檢視和刪除。

```bash
claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp
claude mcp list
claude mcp remove claude-code-docs
```

把第一行拆開來讀。

- `claude mcp add`：新增 MCP 伺服器。
- `--transport http`：表示這是用 HTTP 方式連線的遠端伺服器。
- `claude-code-docs`：你給伺服器起的名字。
- `https://…`：伺服器地址。

`list` 檢視列表，`remove` 後面寫要刪除的伺服器名。執行這三條命令，會依次出現這樣的行。

```text
Added HTTP MCP server claude-code-docs with URL: https://code.claude.com/docs/mcp to local config
claude-code-docs: https://code.claude.com/docs/mcp (HTTP) - ✔ Connected
Removed MCP server "claude-code-docs" from local config
```

`✔ Connected` 表示已經連線上了。預設範圍 `local` 的意思是只有你自己、只在這個專案裡使用。[^mcp]

**只連線可以信任的伺服器。** 獲取外部內容的伺服器，可能讓你暴露在提示詞注入（用藏在文字裡的指示來操縱 AI 的手法）風險中。[^mcp-trust] 不知道是誰做的伺服器，不要新增。[^mcp-audit]

<Quiz id="ch809-mcp" />

## 外掛

**外掛**（Plugin）是把技能、代理、鉤子、MCP 伺服器等打包成一組來安裝的資料夾。鉤子是在固定時刻自動執行的命令，會在[第11章](11-hooks-statusline.md)學到。前面這些東西不用外掛也能單獨使用。只有想把好幾個打包使用時才需要外掛。[^plugin]

比如，假設把本章的會議記錄技能和核對用的子代理打包成一個外掛。同事就不用一個個去做，只裝這一個外掛就行。

在會話裡輸入 `/plugin`，就能在 Discover 標籤頁裡挑選外掛。[^plugin] 安裝命令是 `/plugin install commit-commands@claude-plugins-official` 這樣的形式。在會話裡輸入後不會馬上安裝，而是先開啟詳情介面。[^plugin-install] 本指南沒有實際執行到安裝這一步。

**外掛以你的許可權執行。** 不管來源是哪裡，裝上的外掛都能以你的使用者許可權執行程式碼。[^plugin] 所以安裝前要讀一下詳情介面。[^plugin-install] 把它當成你親自執行的程式來對待。

開啟的外掛，在你不用它的會話裡也是那個會話的一部分。[^plugin] 不用的話，就在 `/plugin` 的 Installed 標籤頁裡關掉或刪除。[^plugin-install]

<Quiz id="ch809-plugin" />

## 什麼時候用什麼

| 這種時候 | 用這個 |
|---|---|
| 有一直要遵守的規則 | `CLAUDE.md` |
| 反覆做同樣的流程 | 技能 |
| 把大的旁支工作分出去 | 子代理 |
| 要用外部服務 | MCP |
| 想把幾個打包獲取 | 外掛 |
| 每次都必須執行 | 鉤子（[第11章](11-hooks-statusline.md)） |

不用全部安裝。先問問自己：現在有不方便的事嗎？如果沒有，暫時不做也沒關係。

<Quiz id="ch809-choose" />

## 動手試一試

1. 在終端裡製作技能。啟動 `claude`，輸入 `/`，確認能看到 `meeting-notes`。
2. 執行 `/meeting-notes inbox/회의-2026-10-27-주간회의.txt`。`notes` 裡生成檔案了嗎？內容和筆記一致嗎？
3. 用 `/exit` 退出，在終端裡依次輸入 `claude mcp` 的三條命令。用 `claude mcp list` 確認已經刪除。

問問自己：同一個技能能整理別的筆記嗎？現在有我真正需要的擴充套件嗎？

## 小結

- 技能只用一個 `.claude/skills/<名稱>/SKILL.md` 就能做出來。資料夾名就是命令名。
- 不起作用時，檢查資料夾名、第一行的 `---`、設定項名稱的拼寫。
- `/agents` 嚮導已經沒有了。子代理要請 Claude 幫忙做，或者用檔案做。
- `claude mcp add` 等在 Shell 裡輸入，`/mcp` 在會話裡輸入。
- MCP 伺服器和外掛只用可以信任的。外掛以你的許可權執行。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Skill | 技能 | 叫名字就能用的工作說明書 |
| Subagent | 子代理 | 在自己的上下文裡接手旁支工作的助手 |
| MCP | 模型上下文協議 | 連線外部工具的方式 |
| Plugin | 外掛 | 把多個擴充套件打包在一起的安裝單位 |

<ChapterDone :chapter="809" />

下一章：[第10章 一行執行與自動化](10-headless-automation.md)

[^skill]: Claude Code 官方文件，「Extend Claude with skills」。"Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." / "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." / "Commit it so your team gets it too" / "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." / "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." / "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (確認日期 2026-11-06)
[^skill-debug]: Claude Code 官方文件，「Extend Claude with skills」。"Claude Code reads the frontmatter only when the opening `---` is the file's first line." / "Claude Code ignores a field it doesn't recognize without reporting an error." / "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." / "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." https://code.claude.com/docs/en/skills (確認日期 2026-11-06)
[^sub]: Claude Code 官方文件，「Create custom subagents」。"Subagents are specialized AI assistants that handle specific types of tasks." / "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." / "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." / "To create one, ask Claude to write it for you, or write the file yourself." / "If Claude can't find the new subagent, restart Claude Code and try again." / "It also sends its own requests, which count toward the same usage limits as your main conversation." https://code.claude.com/docs/en/sub-agents (確認日期 2026-11-06)
[^mcp]: Claude Code 官方文件，「Connect to MCP servers」。"lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." / "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." / "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." / "By default it registers the server at `local` scope: private to you, active only in the current project." https://code.claude.com/docs/en/mcp-quickstart (確認日期 2026-11-06)
[^mcp-trust]: Claude Code 官方文件，「Connect Claude Code to tools via MCP」。"Verify you trust each server before connecting it." / "Servers that fetch external content can expose you to prompt injection risk." https://code.claude.com/docs/en/mcp (確認日期 2026-11-06)
[^mcp-audit]: Anthropic 也不會替你對 MCP 伺服器做安全檢查。Claude Code 官方文件，「Security」。"Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." https://code.claude.com/docs/en/security (確認日期 2026-11-06)
[^plugin]: Claude Code 官方文件，「Plugins overview」。"A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." / "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." / "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." / "Whatever the tier, a plugin you install can run code with your user privileges." / "An enabled plugin is part of every session, not only the sessions where you use it." https://code.claude.com/docs/en/plugins/overview (確認日期 2026-11-06)
[^plugin-install]: Claude Code 官方文件，「Install and manage plugins」。"/plugin install commit-commands@claude-plugins-official" / "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." / "A plugin can run hooks and MCP servers, so read the pane before you install." / "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." https://code.claude.com/docs/en/plugins/install (確認日期 2026-11-06)
[^arguments]: Claude Code 官方文件，「Extend Claude with skills」。"All arguments passed when invoking the skill." https://code.claude.com/docs/en/skills (確認日期 2026-11-06)

# 第3章 規則檔案 AGENTS.md——把 CLAUDE.md 搬到 Codex

> **一句話總結**：Codex 在開始工作之前會讀取 **`AGENTS.md`**。Claude Code 的 `CLAUDE.md`，Codex 如果不做處理就不會讀。
> 把整理工具資料夾的規則搬到 `AGENTS.md`，然後在新對話裡測試，**不用說出規則**它是否也會遵守。

本章依據 2026 年 11 月 1 日確認過的 Codex 官方文件，以及本指南在整理工具資料夾裡親手試過的結果寫成。為什麼需要規則檔案，[Claude Code 第6章](../20-claude-code/06-claude-md.md)裡已經講過。這裡只講在 Codex 裡不一樣的地方。

## Codex 不讀 CLAUDE.md

Codex 的規則檔名叫 `AGENTS.md`。[^agents] 如果想把其他名字的檔案當作規則，需要在設定裡另外登記，沒有登記的名字會被忽略。[^ignored] 所以 `CLAUDE.md` 如果不做處理，就不會被當作規則來讀。

在第2章的執行記錄裡也能確認這一點。Codex 在資料夾裡找了 `AGENTS.md`，沒有找到，就只讀了模板（`templates/`）。它沒有開啟 `CLAUDE.md`。

即便如此，第2章的會議紀要還是遵守了 `(備忘錄裡沒有)` 這條規則。因為同樣的規則也寫在**模板說明**（`templates/README.md`）裡。反過來說，**只**寫在 `CLAUDE.md` 裡的規則，Codex 是不知道的。

<Quiz id="ch503-why" />

## 把 CLAUDE.md 搬到 AGENTS.md

搬的工作也交給 Codex。本章的執行和第2章一樣，是在終端裡運行同一個 Codex。這次**新增**了一條規則。之後看這條規則有沒有被遵守，就能相當可信地推斷它有沒有讀 `AGENTS.md`。

```
CLAUDE.md 是 Claude Code 讀取的規則檔案。請把同樣的規則搬到 AGENTS.md，讓 Codex 也能讀到。規則內容不要改，只增加一條規則：'在整理好的檔案最下面設一節「與原件核對」，把數字、名字、日期中需要再次確認的內容寫在 3 條以內。' CLAUDE.md 保持原樣。
```

Codex 把 `CLAUDE.md` 的五條規則原樣搬了過來，並把新規則作為第 6 條加了上去。然後它報告說"已驗證，除了新增的規則，內容與原文完全一致"。

結果：[AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt)

沒有刪除 `CLAUDE.md` 是有原因的。這是為了讓同一個資料夾在 Claude Code 裡也能繼續使用。代價是**兩個檔案要一起修改**。如果只改一邊，兩個工具就會按不同的規則工作。

<Quiz id="ch503-move" />

## 不說出規則來測試

開啟一個新對話，不提規則，只請它整理學習筆記。

```
把 inbox/공부-2026-10-28-프롬프트-강의.txt 整理成學習筆記，儲存到 notes/ 裡。
```

結果的最下面多了新規則的那一節。

```
## 與原件核對

- 授課日期：10/28（週三）。原件上寫的是 10/28，年份以檔名裡的 2026 年為準。
- 授課時長：1 小時。
- 講師介紹的寫提示詞的方法：5 種。
```

結果：[只靠規則寫出的學習筆記](/practice/notes/results/codex/3장-공부노트-규칙확인.txt)

| 什麼時候生成的檔案 | 「與原件核對」一節 |
|---|---|
| AGENTS.md 之前（第2章會議紀要） | 沒有 |
| AGENTS.md 之後（這份學習筆記） | 有 |

來源：本指南的實操結果（2026-11-01，各 1 次）

新規則只在 `AGENTS.md` 裡有，所以可以認為 Codex 讀了那個檔案並照做了。不過這只是**各做一次的結果**，而且前後的筆記種類（會議紀要、學習筆記）也不同。模板的檢查清單裡也有"和原始筆記核對過一次"這樣類似的專案。想更確定的話，請用**同一份筆記**，沒有 `AGENTS.md` 跑一次，有 `AGENTS.md` 跑一次，比較一下。這不保證它每次都遵守，所以每次看結果時都要確認。

<Quiz id="ch503-test" />

## 讀取 AGENTS.md 的順序

`AGENTS.md` 可以放在兩個地方。[^chain]

| 位置 | 適用範圍 | 例子 |
|---|---|---|
| `~/.codex/AGENTS.md` | 我的所有資料夾 | "用韓語回答" |
| 專案資料夾裡的 `AGENTS.md` | 只限那個資料夾 | 整理工具的規則 |

來源：Codex 官方文件（只摘錄了一部分）[^chain]

兩個都有的話，會**連起來**讀取，離當前資料夾更近的檔案排在後面，優先於前面的指令。[^override] 合併後的大小達到預設的 32KiB，後面的就不再追加了。[^limit] 換成韓語大約是 1 萬字出頭。規則請保持簡短。

如果改了規則卻好像沒有生效，請**開始一個新對話**，或者重新啟動 Codex。Codex 每次開始執行時都會重新讀取規則。[^restart]

如果資料夾裡還沒有 `AGENTS.md`，也可以在應用輸入框裡輸入 `/init`，生成一個框架。[^init]

<Quiz id="ch503-order" />

## 匯入（Import）和記憶

**匯入**是把其他智慧體的設定一次性搬過來的功能。在應用裡，可以從 Claude Code、Claude Cowork、Cursor 匯入。[^import-from] 從應用設定裡的 **Import** 選單開始。如果沒有這個選單，就在 **General** 裡找 **Import other agent setup**。[^import-menu]

![ChatGPT 應用的 Settings → Import 介面：「Import from another AI app」下面有 Claude Code、Claude Cowork、Cursor，每個都有 Import 按鈕](../../../guide/21-codex/assets/shot-02-import.png)

在本指南的介面（2026-11-01）中，設定左側列表裡有 **Import**，在這臺電腦上找到的 Claude Code、Claude Cowork、Cursor 各自帶著 **Import** 按鈕顯示出來。本指南沒有點這些按鈕。

| Claude Code 這邊 | 到了 Codex 變成 |
|---|---|
| 規則檔案（`CLAUDE.md` 等） | `AGENTS.md` |
| 技能 | 技能 |
| 斜槓命令（`/名稱`） | 技能（`$名稱`） |
| `settings.json` | `config.toml` |

來源：Codex 官方文件（只摘錄了一部分）[^import-map]

匯入之後，原來的設定不會被更改或刪除。[^import-keep] 不過官方文件說，匯入之後一定要檢查**技能的許可權限制、鉤子（hook）、使用引數的命令**。[^import-review]

本指南**沒有執行**匯入。因為匯入不只檢視一個資料夾，還會一併檢視我電腦上的個人設定。[^import-scope] 如果想親眼看看搬了什麼，像本章這樣手動搬會更好。

**記憶**（Memories）是把以前工作的上下文帶到下一次工作裡的功能。[^memory] 我電腦上的 Codex 記憶預設是關閉的。[^memory-off] 官方文件只把記憶看作"輔助回想"，說一定要遵守的規則不要交給記憶。[^memory-rules] 它說**一定要遵守的規則要寫在 `AGENTS.md` 裡**。[^memory-agents]

<Quiz id="ch503-import" />

## 親手試一試

1. 用上面的請求，讓它把 `CLAUDE.md` 搬到 `AGENTS.md`。同時加上一條新規則。
2. 開啟 `AGENTS.md`，看看原來的規則是否原樣保留，新規則是否加上了。
3. 開啟一個**新對話**，不提規則，讓它整理學習筆記。
4. 檢查結果裡新規則有沒有被遵守。

**連續任務**：第4章會學習決定 Codex 自己做什麼、問什麼的許可權選單，以及撤銷更改內容的方法。

## 小結

- Codex 讀取 `AGENTS.md`，而 `CLAUDE.md` 如果不做處理就不會讀。
- 兩個工具一起用的話，兩個檔案一起修改。
- 加入一條新規則，在不說出來的情況下測試，就能知道規則檔案有沒有被讀到（本次練習：之前 0 → 之後 1）。
- 個人規則放在 `~/.codex/AGENTS.md`，資料夾規則放在資料夾裡的 `AGENTS.md`。離得近的優先。
- 匯入可以一次性搬設定，但會看到個人設定。一定要遵守的規則，寫在 `AGENTS.md` 裡，而不是記憶裡。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Import | 匯入 | 把其他智慧體的設定搬到 Codex 的功能 |
| Memories | 記憶 | 回想以前工作上下文的功能 |
| `/init` | 初始化命令 | 生成 `AGENTS.md` 框架的命令 |

<ChapterDone :chapter="503" />

下一章：[第4章. 許可權與撤銷](04-permissions-undo.md)

[^agents]: Codex 官方文件，「Custom instructions with AGENTS.md」. "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^ignored]: Codex 官方文件，「Custom instructions with AGENTS.md」. "Filenames not on this list are ignored for instruction discovery." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^chain]: Codex 官方文件，「Custom instructions with AGENTS.md」. "In your Codex home directory (defaults to `~/.codex`, unless you set `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists." / "Starting at the project root (typically the Git root), Codex walks down to your current working directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^override]: Codex 官方文件，「Custom instructions with AGENTS.md」. "Files closer to your current directory override earlier guidance because they appear later in the combined prompt." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^limit]: Codex 官方文件，「Custom instructions with AGENTS.md」. "Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default)." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^restart]: Codex 官方文件，「Custom instructions with AGENTS.md」. "If instructions look stale, restart Codex in the target directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日期 2026-11-01)
[^init]: Codex 官方文件，「Slash commands」. "Generate an `AGENTS.md` scaffold for the current project." https://learn.chatgpt.com/docs/reference/slash-commands (確認日期 2026-11-01)
[^import-from]: Codex 官方文件，「Import from another agent」. "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^import-menu]: Codex 官方文件，「Import from another agent」. "If **Import** isn't available as a settings section yet, open **General** and find **Import other agent setup**." https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^import-map]: Codex 官方文件，「Import from another agent」. 表「What ChatGPT can import」中 Instruction files、`settings.json`、Skills、Slash commands 這幾行。 https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^import-scope]: Codex 官方文件，「Import from another agent」. "The import flow checks both your user-level setup and your existing projects." https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^import-keep]: Codex 官方文件，「Import from another agent」. "Importing doesn't change or delete your existing agent setup." https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^import-review]: Codex 官方文件，「Import from another agent」. "Tool restrictions or permissions in imported skills and agents." / "Hooks whose behavior may differ after import." / "Prompt templates or command-style prompts that depend on arguments, shell interpolation, or file-path placeholders." https://learn.chatgpt.com/docs/import (確認日期 2026-11-01)
[^memory]: Codex 官方文件，「Memories」. "Memories let ChatGPT and Codex carry useful context from earlier work into future work." https://learn.chatgpt.com/docs/customization/memories (確認日期 2026-11-01)
[^memory-off]: Codex 官方文件，「Memories」. "Local Codex memories are off by default." https://learn.chatgpt.com/docs/customization/memories (確認日期 2026-11-01)
[^memory-rules]: Codex 官方文件，「Memories」. "Treat memories as a helpful recall layer, not as the only source for rules that must always apply." https://learn.chatgpt.com/docs/customization/memories (確認日期 2026-11-01)
[^memory-agents]: Codex 官方文件，「Memories」. "Keep required team guidance in `AGENTS.md` or checked-in documentation." https://learn.chatgpt.com/docs/customization/memories (確認日期 2026-11-01)

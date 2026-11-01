# 第7章 技能·外掛·外部工具 — 把整理工具變成一行命令

> **一句話總結**：每次都要貼上的指令·檢查表·多步驟流程，做成**技能**，用 `/名稱` 一行就能調出來。這一章裡「整理工具」就完成了。
> 別人做的**外掛**和外部服務**聯結器**也可以接上，但它們會以我的許可權執行程式碼，所以只安裝值得信任的。

這一章依據 2026年10月31日確認的 Claude Code 官方文件和 macOS 桌面應用（韓語介面，付費賬號）編寫。直接使用第5章的模板和第6章的 CLAUDE.md。

## 什麼是技能

**技能**（Skill）是寫在 `SKILL.md` 檔案裡的指令。Claude 遇到相關的請求時會自己用上技能，我也可以用 `/技能名稱` 直接調出來。[^what]

遇到這些情況，就做一個技能。[^when]

- 一直在**反覆貼上**同樣的指令或檢查表時
- CLAUDE.md 的某一部分已經不是“事實”，而是長成了**多步驟的流程**時

和 CLAUDE.md 的不同之處在於**什麼時候被讀取**。CLAUDE.md 每次會話都會被讀取，而技能的正文**只在用到時**才被讀取。所以即使寫得又長又詳細，平時也幾乎沒有負擔。[^when]

| | CLAUDE.md（第6章） | 技能（第7章） |
|---|---|---|
| 裝什麼 | 始終要遵守的規則 | 一件事的流程 |
| 什麼時候被讀取 | 每次會話 | 只在用到時 |
| 怎麼呼叫 | 沒有專門的呼叫方式 | `/名稱` 或相關請求 |

<Quiz id="ch407-what" />

## 實踐 — 做 3 個整理技能

把整理工具的三件事做成技能。

![技能請求。紅色編號標出：① 輸入框裡請求建立 3 個技能（meeting-notes·study-notes·weekly-review）的內容](../../../guide/20-claude-code/assets/shot-25-skill-prompt-marked.png)

```
請用 templates 模板和 CLAUDE.md 規則，在這個資料夾的 .claude/skills 裡建立 3 個技能。meeting-notes（會議備忘 → 會議紀要）、study-notes（學習筆記 → 學習總結）、weekly-review（回顧備忘 → 每週回顧）。每個 SKILL.md 裡請寫上什麼時候用、要讀的檔案、要用的模板、儲存位置、完成後要核對的檢查表。
```

把技能資料夾 `.claude/skills/<名稱>/SKILL.md` 放在某個資料夾裡，它就成了**只在那個資料夾的會話裡**用的專案技能。[^where] 資料夾名稱就是命令名稱（`/meeting-notes`）。[^name] 中文命令名稱是否可行，沒能在官方文件裡確認，所以本指南用了英文名稱。

### 這次彈出了許可視窗

就在要寫技能檔案的時候，**彈出了許可視窗。**

![許可視窗。紅色編號標出：①「允許 Claude 寫入 SKILL.md 嗎？（Claude가 쓰기 SKILL.md하도록 허용하시겠습니까?）」，② 要寫入內容的預覽（綠色行），③「拒絕（거부）」，④「始終允許（항상 허용）」和 ▾ 按鈕（路徑行裡有電腦使用者名稱，已遮住）](../../../guide/20-claude-code/assets/shot-26-permission-marked.png)

在第2~4章裡，因為這臺電腦上的個人允許規則，沒有彈出許可視窗。這次彈出來，是因為 `.claude` 資料夾是**受保護的路徑。** 即使在「自動接受編輯」模式下，向受保護的路徑寫入也仍然會詢問。[^protected] 技能、設定這類會改變 Claude 行為的檔案就放在這個資料夾裡，所以改動之前要讓人先確認一下。

在 ② 處可以**先讀一讀它要寫什麼。** 點 ▾ 會出現「僅允許一次（한 번만 허용）」。

![▾ 選單。紅色編號標出：①「僅允許一次」（⌘↩）](../../../guide/20-claude-code/assets/shot-27-allow-once-marked.png)

| 按鈕 | 作用 |
|---|---|
| 拒絕 | 阻止這一次寫入 |
| 僅允許一次（⌘↩） | 只允許這一次 |
| 始終允許（⇧⌘↩） | 允許今後同樣的事不再詢問 |

出處：本指南的介面確認（2026-10-31）

一開始建議選**「僅允許一次」**。「始終允許」雖然方便，但同樣的事就不會再問你了（能持續多久，請看介面上的說明）。這次實踐裡有 3 個技能，所以許可視窗彈出了三次，三次都選了「僅允許一次」。

做出來的技能（本指南的成果）：[meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt)

每個 SKILL.md 的最上面都有 `name`（名稱）和 `description`（什麼時候用）。Claude 是看 description 來決定什麼時候用這個技能的。[^desc] 比如，weekly-review 的 description 裡寫著，遇到“寫每週回顧”“整理這周的回顧”這類請求時使用。

<Quiz id="ch407-make" />

## 一行調出來用

在新會話的輸入框裡輸入 `/`，會出現可用的命令和技能列表。接著輸入名稱的一部分，就能篩選。[^slash]

![技能列表。紅色編號標出：①「study-notes」條目，② 旁邊的說明框（說明末尾有「(project)」）](../../../guide/20-claude-code/assets/shot-28-skill-menu-marked.png)

② 裡的 **(project)** 是表示“這是這個資料夾的專案技能”的標記。用 Enter 選中，再接著寫上要整理的檔案，然後傳送。

![執行技能。紅色編號標出：① 輸入了「/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt」的輸入框](../../../guide/20-claude-code/assets/shot-29-skill-run-marked.png)

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

靠這一行，學習總結就按模板做好了（成果：[7장-공부노트-스킬로.txt](/practice/notes/results/7장-공부노트-스킬로.txt)）。一行總結、5 個要點、新學到的 4 樣東西、要注意的事、要提的問題，都按模板的順序放進去了。第4章裡用很長的請求做出來又回退掉的那份筆記，這次是靠**一行命令**做出來的。

**現在整理工具完成了。**

| 備忘 | 命令 |
|---|---|
| 會議備忘 | `/meeting-notes inbox/회의-….txt` |
| 學習筆記 | `/study-notes inbox/공부-….txt` |
| 好幾天的每日回顧 | `/weekly-review` |

不記得名稱也沒關係。像“整理這周的回顧”這樣說，Claude 就會看 description，選出合適的技能來用。[^what]

<Quiz id="ch407-run" />

## 外掛和聯結器

**外掛**（Plugin）是把別人做的技能·命令·工具成套安裝，**聯結器**（Connector）是把 Gmail·日曆這類外部服務連線到 Claude。在桌面應用裡，透過輸入框旁邊的 **+** 按鈕新增聯結器和外掛。[^plus] 聯結器是把 MCP 伺服器（AI 連線外部工具的標準方式）做成可以在介面上輕鬆設定的形式。[^connectors]

雖然方便，但**安裝之前一定要想一想。** 外掛可以在**我的電腦上以我的許可權執行程式碼。**[^plugin-risk] 而且這樣的程式碼，有時是在第4章的許可權模式所保護的範圍之外執行的。許可權規則適用於 Claude 的工具呼叫，不適用於外掛自己執行的程式碼。[^plugin-scope]

- 只安裝知道是誰做的、值得信任的外掛。
- 用不著的外掛要刪掉。
- 透過聯結器連線的服務裡的內容（郵件·日程），也會成為 Claude 讀取的資料。請一併閱讀第9章的“隱藏指令”。

本指南的整理工具，**只靠我自己做的技能**就夠了。外掛和聯結器，等真的需要時再一個一個增加。

<Quiz id="ch407-plugins" />

## 親手試一試

1. 請它建立 3 個整理技能，彈出許可視窗時，先讀 ② 裡的預覽，再選「僅允許一次」。
2. 在新會話裡輸入 `/`，再輸入技能名稱的一部分，看看列表裡有沒有出現。
3. 用 `/study-notes` 整理學習筆記，確認是否按第5章模板的順序生成。
4. 不帶名稱，只發“整理這周的回顧”，看看 Claude 會不會選出 weekly-review 技能來用。

**連續任務**：現在每到週五，都是我自己呼叫 `/weekly-review`。在第8章裡，我們來看把這件事**設成定時**的方法，以及同時執行多個整理的方法。

## 小結

- 技能是寫在 SKILL.md 裡的流程。只在用到時才被讀取，用 `/名稱` 或相關請求來使用。
- 資料夾裡的 `.claude/skills/<名稱>/SKILL.md` 是隻屬於那個資料夾的技能。description 決定了“什麼時候用”。
- `.claude` 資料夾是受保護的路徑，寫入前會詢問許可。一開始選「僅允許一次」。
- 整理工具完成：`/meeting-notes`、`/study-notes`、`/weekly-review`。
- 外掛可以用我的許可權執行程式碼。只安裝值得信任的，而且只在需要時安裝。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Skill | 技能 | 寫在 SKILL.md 裡、用 `/名稱` 呼叫的流程 |
| description | 描述 | 寫明技能何時使用的說明。Claude 看這個來挑選 |
| Protected path | 受保護的路徑 | 寫入前始終會詢問許可的位置。`.claude` 資料夾等 |
| Plugin | 外掛 | 把技能·命令·工具打包安裝的擴充套件 |
| Connector | 聯結器 | 把外部服務連線到 Claude（基於 MCP 伺服器） |
| MCP | MCP | AI 連線外部工具·資料的標準方式 |

<ChapterDone :chapter="407" />

下一章：[第8章. 同時做多件事·雲端·定時](08-parallel-cloud-schedule.md)

[^what]: Claude Code 官方文件，《Extend Claude with skills》。"Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name." https://code.claude.com/docs/en/skills（確認日期 2026-10-31）
[^when]: Claude Code 官方文件，《Extend Claude with skills》。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills（確認日期 2026-10-31）
[^where]: Claude Code 官方文件，《Extend Claude with skills》。位置表的 Project 行："`.claude/skills/<skill-name>/SKILL.md`" https://code.claude.com/docs/en/skills（確認日期 2026-10-31）
[^name]: Claude Code 官方文件，《Extend Claude with skills》。"The directory name, or the frontmatter name when you set one, becomes the command you type, and the description helps Claude decide when to load the skill automatically." https://code.claude.com/docs/en/skills（確認日期 2026-10-31）
[^desc]: Claude Code 官方文件，《Extend Claude with skills》。"Only description is recommended so Claude knows when to use the skill." https://code.claude.com/docs/en/skills（確認日期 2026-10-31）
[^slash]: Claude Code 官方文件，《Desktop application》。"type / in the prompt box or click the + button and select Slash commands to browse what's available." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^protected]: Claude Code 官方文件，《Choose a permission mode》。acceptEdits 一節 "These still prompt:" 下面的 "Writes to protected paths" https://code.claude.com/docs/en/permission-modes（確認日期 2026-10-31）
[^plus]: Claude Code 官方文件，《Desktop application》。"Click the + button next to the prompt box for file attachments, skills, connectors, and plugins." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^connectors]: Claude Code 官方文件，《Desktop application》。"Connectors are MCP servers with a graphical setup flow." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^plugin-risk]: Claude Code 官方文件，《Plugin security and trust》。"A plugin can carry content that runs code on your machine with your user privileges and content that enters Claude's context as instructions, so review a plugin before you install it." https://code.claude.com/docs/en/plugins/security（確認日期 2026-10-31）
[^plugin-scope]: Claude Code 官方文件，《Plugin security and trust》。"Claude Code's permission rules and sandbox cover the tool calls Claude makes, not the code a plugin runs by itself" https://code.claude.com/docs/en/plugins/security（確認日期 2026-10-31）

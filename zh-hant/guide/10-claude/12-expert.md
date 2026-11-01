# 第12章 像專家一樣使用——判斷、測試、積累

> **一句話總結**：用得好，需要的不只是多認識幾個按鈕。而是**判斷該把什麼交出去、交出去之前先測試、把重複的事積累下來**的能力。
> 這一章講的是，怎樣把第 1~11 章學到的功能**組合起來**，適應我自己的工作。最後會介紹 Anthropic 做的課程合集 Claude Academy。

這一章幾乎不講新功能。主題是前面各章學到的 Claude 功能，什麼時候用、怎麼用。

判斷該把什麼交出去的方法（4D）、交出去之前先用已經知道答案的事來測試的方法、學習時讓 AI 向你提問的方法，這類**對任何 AI 都適用的方法**，在[第1階段第11章「像專家一樣使用」](../00-common/11-expert.md)裡。先讀一讀再來，這一章會更輕鬆。這一章把那些方法對照 Claude 的功能和選單來講。

## 選擇適合工作的工具

不要先選選單。先看看眼前的這件事是什麼樣子的。這樣要用的功能自然就定下來了。[^academy-tabs]

| 如果是這樣的事 | 就用這個 | 詳細內容 |
|---|---|---|
| 提問、打磨、一起思考 | 普通對話 | [第1階段](../00-common/) |
| 簡單的事實、今天發生的事 | 網頁搜尋 | [第6章](06-search.md#什麼時候用什麼) |
| 不需要最新資訊、深入推敲 | 擴充套件思考 | [第6章](06-search.md#什麼時候用什麼) |
| 收集大量資料做成報告 | 研究（付費） | [第6章](06-search.md#什麼時候用什麼) |
| 持續推進同一件事 | 專案 | [第7章](07-projects-tools.md#專案-—-把資料和指令放在一處) |
| 需要文件·表格·演示檔案 | 建立檔案 | [第4章](04-files-artifacts.md#讓它生成檔案——excel、word、powerpoint、pdf) |
| 經過多個步驟後拿到成果 | Cowork（付費） | [第8章](08-cowork.md#什麼是-cowork——交給它的是事-不是對話) |
| 到固定時間就重複做 | 定時任務（付費） | [第8章](08-cowork.md#到固定時間自動做——預約任務) |

區分網頁搜尋·擴充套件思考·研究的標準來自幫助文件。[^when] 其餘各行是把前面各章的內容彙總到一張表裡。

大多數情況下，最上面一行，也就是一個普通對話就夠了。

<Quiz id="ch212-tools" />

## 把重複的事積累下來

用著用著，你會發現自己在重複同樣的話。把重複的內容寫下來一次，之後 Claude 就會帶著這些內容開始。

可以放的地方有四個。不需要一開始就全寫。按下面的順序，需要的時候再一個一個加。[^academy-layers] 什麼時候不該做成模板，在[第1階段第11章「把重複的事積累下來」](../00-common/11-expert.md#把重複的事積累下來)裡。

1. **每個對話都提同樣的要求** → 寫進[指示](05-memory.md#指令-—-適用於所有對話的規則)。
2. **持續推進同一件事** → 把這件事歸到一個[專案](07-projects-tools.md#專案-—-把資料和指令放在一處)裡。
3. **每次都要解釋同樣的步驟** → 把這個步驟做成[技能](07-projects-tools.md#技能-—-把做事的方式放進去)。
4. **想把打磨好的技能分成一個包** → 把多個技能打包成[外掛](07-projects-tools.md#外掛-—-按工作打包的套裝)。外掛是付費套餐的功能。[^plugins]

按順序來，每次要從頭解釋的事會一點一點減少。

如果分不清專案和技能，可以這樣記。**專案裝的是資料，技能裝的是做事的步驟。**[^academy-skills-vs] 詳細的區別在[第7章「和指示·專案·聯結器有什麼不同」](07-projects-tools.md#和指令·專案·聯結器有什麼不同)裡。

### 做好的技能，開關對比一下

做好的技能，把同樣的請求發兩次比較一下。一次開著技能，一次關掉。對比和修改的要領，在[第1階段第11章「做好的模板要測試並修改」](../00-common/11-expert.md#把做好的模板測試一下再修改)裡。

技能可以在「自定義」→「Skills」裡開關（[第7章「預設技能和我的技能」](07-projects-tools.md#預設技能和我的技能)）。[^skills-use] 關掉的技能，Claude 不會使用。

<Quiz id="ch212-layers" />

## 把表格和數字交出去

像[第4章「上傳檔案」](04-files-artifacts.md#上傳檔案)那樣，上傳 CSV·TSV 之類的表格檔案，Claude 就會分析資料並畫圖表。圖表也可以拿到 PNG 之類的圖片檔案。[^create]

```
附上的 CSV 是附近小店最近三個月各個品類的銷售記錄。請按品類合計從大到小做成表格，再做一張柱狀圖的 PNG 圖片。
計算用的方法也請一行一行寫出來。
```

數字分析最擔心的是，結果能不能信。請先用**已經分析過的以前的資料**來對一對。方法和例子在[第1階段第11章「把表格和數字交出去」](../00-common/11-expert.md#把表格和數字交給它)裡。重要的計算，請用別的計算程式或者手算再核實一遍（[第4章](04-files-artifacts.md#讓它生成檔案——excel、word、powerpoint、pdf)）。

<Quiz id="ch212-data" />

## 想學更多——Claude Academy

**Claude Academy** 是 Anthropic 做的線上課程合集。下面的課程，不用登入就能開啟課程正文（2026-10-26 確認）。正文全部是**英語**，課程首頁上沒有寫需要多長時間。[^academy-courses]

| 課程 | 課時數 | 適合這樣的人 | 需要準備 |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14 節課 + 測驗 | 不論有沒有 AI 經驗，任何人 | 任意 AI 服務的賬號。不需要付費套餐 |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13 節課 + 測驗 | 想知道 AI 為什麼那樣回答的人 | 不需要預備知識 |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13 節課 + 測驗 | 第一次在工作中使用 Claude 的人 | Claude 賬號（包括免費）。Cowork·研究的課需要付費套餐 |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14 節課 + 測驗 | 在檔案和應用之間來回做事的人 | 付費套餐，用到資料夾的課需要電腦應用。不懂程式設計也可以 |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6 節課 | 想自己動手做技能檔案的人 | Claude Code（第3階段會講的開發者用工具） |

- 前兩門課，用 Claude 以外的其他 AI 來學也可以。這兩門課的設計是先學哪一門都可以。[^academy-courses]
- 「AI Fluency」課程在最後的測驗裡答對 80% 以上，就可以把**結業徽章**（completion badge）新增到賬號上。它不是資格證書。[^academy-courses] 這本指南的[理解度確認考試](../00-common/certificate.md)也是同樣性質的學習徽章。
- 「Introduction to agent skills」請在學完這本指南的第3階段（程式設計代理工具）之後再看。所有內容都以 Claude Code 為基準。

英語頁面可以用 Chrome 之類瀏覽器的翻譯功能來讀（在頁面上點滑鼠右鍵 →「翻譯成中文」）。

### 課程裡學到的框架——和這本指南對照

課程裡出現的內容和這本指南是一樣的，只是名稱不同。瞭解下面的對應關係，在課程裡遇到新術語時，就容易猜出意思。課程中使用的名稱，按英語原文直接寫出。

- **Setting the stage · Defining the task · Specifying rules**（Claude 101）：確定我的角色和目標、要做的事、語氣·格式·示例，然後提出請求。[^academy-stage] 和[第1階段第4章「好提示詞的 5 個要素」](../00-common/04-prompt-basics.md#好提示詞的5個要素)是同樣的想法。
- **4D — Delegation · Description · Discernment · Diligence**（Claude 101、AI Fluency）：請看[第1階段第11章「專家有什麼不同」](../00-common/11-expert.md#專家有什麼不同)。
- **Evals**（Claude 101、Cowork）：用已經知道答案的事來測試。請看[第1階段第11章「交出去之前先測試」](../00-common/11-expert.md#交出去之前先測試)和這一章的[「做好的技能，開關對比一下」](#做好的技能-開關對比一下)。
- **Chat · Cowork · Code**（Claude 101）：來回交流著做的事用對話，交出去的事用 Cowork，做程式用 Claude Code。[^academy-tabs] 請看[第8章「什麼是 Cowork」](08-cowork.md#什麼是-cowork——交給它的是事-不是對話)和這一章的[「選擇適合工作的工具」](#選擇適合工作的工具)。
- **成果·資料·只有我知道的情況**（Cowork）：交出去的時候寫下這三樣。[^academy-review] 和[第8章「交付的要領」](08-cowork.md#交代任務的要領)相同。
- **檢查結果的三個問題**（Cowork）：是我想要的結果嗎？事實對嗎？有沒有編造的地方？[^academy-review] 請一併看[第1階段第9章「核實的四個習慣」](../00-common/09-safety.md#核對的四個習慣)。
- **"projects store knowledge, skills perform tasks"**（Claude 101）：專案裝資料，技能裝做事的步驟。[^academy-skills-vs] 請看這一章的[「把重複的事積累下來」](#把重複的事積累下來)。

<Quiz id="ch212-academy" />

## 親自試一試

像[第11章「實踐時要遵守的三件事」](11-practice.md#做練習時要守的三條)那樣，不要用真實的公司資料，而是用編出來的資料來試。

1. 在 Claude 裡做[第1階段第11章「親自試一試」](../00-common/11-expert.md#親自動手試試)的第 2~3 項（用已經知道答案的郵件來測試）。把能得出正確結果的那一句話，放進[第5章的指示](05-memory.md#指令-—-適用於所有對話的規則)或者專案指示裡。
2. 編一張大約 10 行的日期·品類·金額表，儲存成 CSV。我先手算出各品類的合計，再用這一章的 CSV 提示詞拿到表格和 PNG 圖表，對一對兩個合計。
3. 如果做了一個技能，同樣的請求，開著技能發一次，關掉技能發一次，比較兩個回答。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：上傳示例檔案 fees.csv，傳送“如果有重複或空值，先告訴我。然後把收入·支出合計和剩餘的錢做成表格，把各專案的支出做成柱狀圖 PNG”。看它能不能找出寫了兩次的茶點和金額為空的那一行。最後，把[作業檢查表](../00-common/practice-kit.md#最後留下的東西)一項一項勾選。

## 整理

- 對任何 AI 都適用的判斷·測試·核實方法，在第1階段第11章裡。這一章把它們對照 Claude 的功能來講。
- 先看事情的樣子，再看選單。大多數情況下，一個普通對話就夠了。
- 重複的事按指示 → 專案 → 技能 → 外掛（付費）的順序，需要的時候一個一個積累。
- 做好的技能，在「自定義」→「Skills」裡開關，分別請求兩次來比較。
- 上傳表格檔案，可以拿到分析和圖表（包括 PNG 圖片）。相信之前，先用以前的資料對一對。
- 想學更多，就看 Claude Academy 課程（英語，課程正文不用登入就能閱讀）。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Claude Academy | Claude 學院 | Anthropic 做的線上課程合集 |

4D·Evals 之類的課程術語，在[第1階段第11章「術語整理」](../00-common/11-expert.md#術語解釋)裡。

<ChapterDone :chapter="212" />

下一章：第2階段 Claude 指南到這裡就結束了。請在[第2階段 · Claude 目錄](./)裡選擇想再看的章，或者用 [AI 知識水平考試](../00-common/level-test.md)檢驗一下實力。

[^academy-tabs]: Claude Academy「Claude 101」課程「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （確認日期 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」課程「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （確認日期 2026-10-26）
[^academy-skills-vs]: Claude Academy「Claude 101」課程「Working with skills」。"projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills （確認日期 2026-10-26）
[^academy-stage]: Claude Academy「Claude 101」課程「Your first conversation with Claude」。"One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude （確認日期 2026-10-26）
[^academy-review]: Claude Academy「Introduction to Claude Cowork」課程「Hand Claude Cowork your first task」。"name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop （確認日期 2026-10-26）
[^academy-courses]: Claude Academy 課程首頁。AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." 同一課程的課「Introduction to AI Fluency」"you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities"，測驗 "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · 已確認課程正文在未登入的瀏覽器裡可以開啟（確認日期 2026-10-26）
[^when]: Anthropic 幫助文件，《When should I use web search, extended thinking, and research?》。"Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 （確認日期 2026-10-26）
[^plugins]: Anthropic 幫助文件，《Use plugins in Claude》。"Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 （確認日期 2026-10-26）
[^skills-use]: Anthropic 幫助文件，《Use skills in Claude》。"Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 （確認日期 2026-10-26）
[^create]: Anthropic 幫助文件，《Create and edit files with Claude》。"You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 （確認日期 2026-10-26）

# 第11章 像專家一樣使用——判斷、測試、積累

> **一句話總結**：用得好，靠的不只是多認識幾個按鈕。靠的是這種能力：**判斷該把什麼交給它，交出去之前先測試，把重複的東西積累下來**。
> 本章彙集了在任何 AI 服務上都管用的工作方法。選單位置和各服務的功能，在第2階段的 [ChatGPT 第11章](../11-chatgpt/11-expert.md)和 [Claude 第12章](../10-claude/12-expert.md)裡講。

本章的主題是：第1～10章學到的東西，什麼時候用、怎麼用。第2階段要學的功能（專案、技能等）這裡只出現名字，詳細用法在各服務的章節裡。可以在讀第2階段之前看，也可以在讀完第2階段之後再回頭看。

## 專家有什麼不同

你在[第3章「同樣的工具，不同的結果」](03-why-learn.md#同樣的工具-不同的結果)裡學到過，同一個 AI，用法不同，結果也會不同。Anthropic 的課程是這樣描述用好 AI 的能力的：不止於知道點哪個按鈕，還要培養在各種情境下**判斷該怎麼用 AI 的能力**。[^academy-4d]

課程把這種判斷分成四種能力。取英文首字母，叫做「4D」。[^academy-4d]

- **委託——Delegation**：區分哪些事我自己做，哪些事交給 AI。
- **描述——Description**：把想要的結果和方法說清楚。
- **辨別——Discernment**：判斷收到的結果對不對、能不能用。
- **負責——Diligence**：負責任地使用，不隱瞞用了 AI 這件事，對結果由我自己負責。

其中有不少，你已經練習過了。[第4章「好提示詞的5個要素」](04-prompt-basics.md#好提示詞的5個要素)就是「描述」。[第9章「檢查的四個習慣」](09-safety.md#核對的四個習慣)對應的是「辨別」和「負責」。

OpenAI 分析人們如何在工作中使用 ChatGPT 的文章裡，也能看到類似的地方。人們在交出**不屬於自己領域的事**時，會給更多的示例和背景，也更常請它幫忙核對結果。[^ways] 越是陌生的事，越要同時給資料，並請它幫忙核對。

本章主要講剩下的那一個：**決定交出什麼的能力**。

<Quiz id="ch11-difference" />

## 選一件最先練習的事

不用從最大、最重要的事開始。一開始，請選這樣的事。這是本指南把 OpenAI 課程要求避開的事（太寬泛的事、只偶爾做的事、風險大的事、難以核對的事）反過來寫出來的。[^academy-openai]

- 經常做
- 結果很明確
- 我容易核對
- 錯了損失也小

太寬泛的事、只偶爾做的事、錯了就出大事的事、難以核對對不對的事，往後放。[^academy-openai]

| 還太早的事 | 適合先試的事 |
|---|---|
| 提高店裡的營業額 | 每週一，用上週的銷售記錄做彙總表 |
| 把聚會辦好 | 每次聚會結束後，把定下的事和待辦事項寫成通知簡訊 |

左邊的事太寬泛，連該讓它做什麼都無從下手。右邊的事每週都會來，而且拿到結果後，我馬上就能看出對不對。

<Quiz id="ch11-pick" />

## 交出去之前先測試

"這件事能交給 AI 嗎？"不要憑感覺定，請測試一下。方法很簡單。**拿我已經知道答案的事**讓它做做看。Anthropic 的課程把這叫做評估（Evals）。[^academy-eval] 課程以 Claude 為例，但同樣的方法也可以用在其他 AI 上（這是本指南的判斷）。

1. 挑一件經常做的事。上個月寫的通知郵件、上個季度做的彙總表，都可以。
2. 收集5～10份我以前做出來的成果。
3. 把當時我手上有的資料給它，讓 AI 做同樣的事。
4. 和我的成果並排放在一起對比。

比如可以這樣傳送。我以前寫過的郵件，先不要給它看（這是本指南的建議）。這樣才能看到 AI 不是照抄、而是自己做出來的結果。

```
請用下面的備忘錄，寫一封給附近讀書會會員的下個月通知郵件。
收件人是40～60歲的會員20人，語氣要禮貌，但不要太生硬。
[貼上備忘錄]
```

對比的時候，請問問自己。重要的內容都寫全了嗎？語氣和樣子對嗎？缺了什麼？[^academy-eval]

看到有缺的地方，就補充說明，再讓它做一次。補充說明之後做對了，那麼下次起，一定要把這條說明加進去。改了幾次還是趕不上我的成果，那就是學到了：這件事最好不要交出去。[^academy-eval]

通過了測試，也要繼續核對。測試只是增加信心，並不會免去責任。[^academy-eval]

<Quiz id="ch11-eval" />

## 先看事情的樣子

別先挑選單。先看看眼前的事情是什麼樣子。這樣，該用的功能自然就定下來了。[^academy-tabs]

各個服務的功能名稱雖然不同，但適合某種事情的功能是相近的。

| 如果是這樣的事 | ChatGPT | Claude |
|---|---|---|
| 提問、潤色、一起想 | 普通對話 | 普通對話 |
| 簡單的事實、今天發生的事 | [網頁搜尋](../11-chatgpt/06-search.md#聯網搜尋——讓-chatgpt-去網上查) | [網頁搜尋](../10-claude/06-search.md#什麼時候用什麼) |
| 收集大量資料寫成報告 | [深度研究](../11-chatgpt/06-search.md#深度調研——把報告交給它) | [研究](../10-claude/06-search.md#什麼時候用什麼)（付費） |
| 持續做同一件事 | [專案](../11-chatgpt/07-projects-plugins.md#專案——把對話、檔案、指令放進一個資料夾) | [專案](../10-claude/07-projects-tools.md#專案-—-把資料和指令放在一處) |
| 經過多個步驟，最後拿到成品檔案 | [Work](../11-chatgpt/07-projects-plugins.md#chat-和-work-的區別)（付費） | [Cowork](../10-claude/08-cowork.md#什麼是-cowork——交給它的是事-不是對話)（付費） |
| 每到固定時間就重複 | [定時任務](../11-chatgpt/11-expert.md#到點自動去做-—-定時任務) | [定時任務](../10-claude/08-cowork.md#到固定時間自動做——預約任務)（付費） |

表裡的功能名稱和套餐，是在各服務的章節裡確認過的。它們可能會變，用之前請看一下那一章。

大部分情況下，最上面一行，也就是一個清楚的提示詞，就夠了。[^academy-openai] 下面幾行的功能，先用普通對話試試，不夠用時再拿出來。

<Quiz id="ch11-tools" />

## 把重複的事積累下來

用著用著，你會發現自己總在重複同樣的話。把重複的東西寫下來一次，以後 AI 一開始就知道了。

能放的地方有四個。不必一開始就全用。按下面的順序，等需要了再加一個。[^academy-layers]

1. **所有對話都提同樣的請求** → 寫進指令。ChatGPT 是[「自定義指令」](../11-chatgpt/05-memory.md#自定義指令——希望它始終遵守的事)，Claude 是[「指令」](../10-claude/05-memory.md#指令-—-適用於所有對話的規則)。
2. **持續做同一件事** → 把這件事歸在一個專案裡。
3. **每次都要解釋同樣的順序** → 把這個順序留成可以重複使用的模板。可以從把[第8章「4. 做成可重複使用的模板」](08-meta-prompting.md#_4-做成可重複使用的模板)的模板放進專案指令開始。如果服務和套餐支援，也可以做成技能。
4. **想把打磨好的模板分享給別人** → 把模板做成文件分享出去，或者用服務提供的分享功能（外掛等）打包。這類功能，視服務和套餐不同，可能沒有。

按順序來，每次需要重新解釋的事，會一點點減少。

**也有一些事，現在還不到做成模板的時候。** 事情每週都在變、結果的樣子還沒定下來、需要人來判斷的事，都還太早。這種時候，請在對話裡多做幾次，慢慢打磨。[^academy-openai] 到固定時間自動執行的事也是一樣。先用手做幾次，等結果可信了，再設定定時。[^academy-openai]

### 把做好的模板測試一下再修改

我做的模板，我自己用的時候效果很好。因為我知道該放什麼進去。可是換種稍微不同的說法來拜託，或者給它稍微不同的資料，它可能就不穩了。[^academy-skilltest]

所以請把同一個請求發兩次。一次用模板，一次不用模板。把兩個回答並排放在一起，問問自己：用了模板的那個，真的更好嗎？不是的話，缺了什麼？[^academy-skilltest]

要修改的地方，請說具體。[^academy-skilltest]

- 不太好的例子："有點怪。"
- 更好的例子："語氣太生硬了。""最前面的摘要漏掉了。"

更好的例子指出了該改什麼，所以 AI 馬上就能動手。而且**一次只改一處**。這樣才知道什麼起了作用。[^academy-skilltest]

一開始不必完美。課程說，大多數技能改一兩輪就準備好了。[^academy-skilltest]

<Quiz id="ch11-layers" />

## 把表格和數字交給它

做數字分析，最讓人擔心的是結果能不能信。這種時候，請把[上一節「交出去之前先測試」](#交出去之前先測試)的方法用在數字上。

Anthropic 課程裡的例子是這樣的。[^academy-data] 一個幫助退伍軍人的機構裡，負責人里奧每個季度都要分析出勤和就業的結果。

1. 里奧把**已經分析完的上個季度資料**，重新交給了 AI。
2. 每次回答來了，他都和自己的結果對一下，寫下缺了什麼。
3. AI 找對了出勤和就業之間的關係。可是在同時提供住房援助和就業介紹的專案裡，它漏掉了一個重要的點。
4. 他補了一句"專案型別也請單獨看一下"，它就也抓到了。
5. 里奧決定，從下個季度起，一定要加上這一句。

請這樣試試。

```
附件的表是上個季度的銷售原始資料。我已經分析出了結果，想看看你能不能得到同樣的結論。
請計算每月的變化和各門店之間的差異，並在每一步都展示是怎麼算的。
```

對數字不熟悉也沒關係。可以請它幫你寫 Excel 函式，或者整理雜亂的表格。遇到不懂的步驟，就一直請它解釋。只有能跟上過程，才能核對結果。[^academy-data]

通過了對照測試，責任也還是原樣。要看結果合不合常識。也不要隱瞞自己得到了 AI 的幫助。[^academy-data] 重要的計算，請用計算器或 Excel 再確認一遍。

上傳檔案的方法、拿到圖表的方法，各個服務不一樣。請看 [ChatGPT 第11章「把表格和數字交給它」](../11-chatgpt/11-expert.md#把表格和數字交給它-—-資料分析)和 [Claude 第12章「把表格和數字交給它」](../10-claude/12-expert.md#把表格和數字交出去)。

<Quiz id="ch11-data" />

## 用來學習

學東西的時候，不要直接要答案，而是請它引導我自己去想。自己找到答案，就是同時學會了解題的路。

```
我想學 Excel 的 VLOOKUP。不要直接告訴我答案，請一個一個地向我提問，讓我自己想。
```

::: details 收到的回答大概是這樣（示例——點選展開）
這是本指南編的示例。實際的回答會因服務和當時的情況而不同。

> 好的，我們一起想一想。第一個問題。一張表裡有商品編號和價格，另一張表裡只有商品編號。如果要用手把價格填上去，您會怎麼做？

如果我回答"我會按編號，到第一張表裡找出來再寫上"，就會這樣接著問。

> 對。VLOOKUP 做的就是這件事。那下一個問題：要讓 Excel 替您去找，需要告訴它什麼？

**檢查一下有沒有收好**：它有沒有一開始就把函式公式全告訴我？問題是不是一次一個？下一個問題是不是順著我的回答接下來的？

:::

讓 AI 向我提問的方法，和[第5章「4. 讓它反問」](05-prompt-patterns.md#_4-讓-ai-反問-—-flipped-interaction)是同一個原理。想得到貼合我水平的講解，可以用[提示詞合集「學習、聽講解」](prompt-library.md#學習、聽講解)裡的提示詞。ChatGPT 裡還有專門開啟這種教法的學習模式（[ChatGPT 第11章](../11-chatgpt/11-expert.md#用來學習-—-學習模式)）。

<Quiz id="ch11-learn" />

## 按事情的分量檢查

用結果之前先檢查的習慣，你在[第9章「檢查的四個習慣」](09-safety.md#核對的四個習慣)裡學過了。這裡看的是：要檢查到多仔細，在哪個階段檢查。

**不用把所有回答檢查到同樣仔細。** 要按事情的分量來檢查。[^academy-openai] 表裡最後一行是課程的標準，前面三行是本指南選的日常示例。

| 如果是這樣的事 | 檢查到這個程度 |
|---|---|
| 想聚會點子 | 輕鬆讀一讀，挑一個 |
| 通知、公告草稿 | 看事實、語氣、有沒有漏掉的 |
| 文章、資料摘要 | 和原文對照 |
| 影響健康、金錢、工作、法律權利的事 | 由專家仔細審閱，或走規定的流程 |

**不是最後檢查一次，而是每個階段都看。** 如果是分好幾步進行的事，進入下一步之前先停一下。[^academy-openai] 並且請自己問這三件事。這是本指南從課程的檢查框架 CLEAR 裡挑出來的三項。[^academy-openai]

- **事實**：數字、名稱、日期、出處對不對？
- **邏輯**："因為……所以……"這樣的銜接說得通嗎？
- **語氣**：適合讀的人嗎？

每個階段都看，AI 理解錯的時候就能早點發現。不用等全做完之後，再從頭改。[^academy-openai]

邏輯有點怪的話，就指出那一處，請它解釋。

```
我不明白第二段的結論是怎麼得出來的。請解釋它是靠哪些依據和假設連起來的，如果有薄弱的地方，請幫我改。
```

各類成果各自該看哪裡（資料分析的計算方法、研究報告的出處等），整理成了表格，在 [ChatGPT 第11章「相信之前先確認」](../11-chatgpt/11-expert.md#相信之前先確認)裡。

<Quiz id="ch11-verify" />

## 親自動手試試

像[第10章](10-practice.md)那樣，不用真實的公司資料，用編出來的資料來做。

1. 在最近做的事裡，寫下一件符合「選一件最先練習的事」四個條件（經常做、結果很明確、容易核對、錯了損失也小）的事。
2. 編一封"上個月寫的"短通知郵件，和當時的備忘錄，寫下來。也可以用[連續任務](practice-kit.md)裡的示例檔案 memo-last-month.txt 和 last-notice.txt。只把備忘錄給 AI，讓它寫同樣的郵件，然後和我的郵件對比，寫下"都寫全了嗎？語氣對嗎？缺了什麼？"。
3. 把第2步裡缺的一點補進說明，再讓它做一次。做對了，就把這一行放進指令或專案指令裡。
4. 編一張約10行的日期、品類、金額表，我先用手算出各品類的合計。然後把同一張表交給 AI，請它展示計算步驟，再把兩個結果對一對。
5. 用本章的 VLOOKUP 提示詞，透過被提問的方式，學一個最近想學的東西。

**連續任務**（[籌備讀書會](practice-kit.md)）：如果第2步用了示例檔案，作業就從這裡開始。第2階段每一章的末尾都有下一步。跟著這個作業走，讀完第2階段時，手裡就會留下11月聚會的通知文案包。

## 小結

- 想用得好，需要判斷的能力。Anthropic 的課程把這種判斷分成委託、描述、辨別、負責（4D）。
- 一開始，用經常做、結果明確、容易核對、錯了損失也小的事來練習。
- 交不交出去，不要憑感覺定，要拿已經知道答案的事來測試。通過了測試，核對和責任也還在。
- 先看事情的樣子，再看選單。大部分情況下，一個清楚的提示詞就夠了。
- 重複的東西，按指令 → 專案 → 模板（技能）→ 打包的順序，等需要了再一個一個積累。做好的模板，用和不用各請求一次來對比，一次只改一處。
- 數字分析，先用過去的資料對一遍，並請它展示計算過程。
- 檢查按事情的分量來做，不是最後一次，而是每個階段都做。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| AI Fluency | AI 素養 | 與 AI 良好協作的能力 |
| Delegation | 委託 | 區分哪些事我自己做、哪些事交給 AI |
| Description | 描述 | 把想要的結果和方法說清楚 |
| Discernment | 辨別 | 判斷收到的結果對不對、能不能用 |
| Diligence | 負責 | 負責任地使用，說明用了 AI，並對結果負責 |
| Evals | 評估 | 拿已經知道答案的事來測試 AI 的方法 |

<ChapterDone :chapter="11" />

下一章：第1階段讀完了。請用[理解度測試](certificate.md)確認我的 AI 理解水平，或者進入第2階段的 [ChatGPT](../11-chatgpt/01-getting-started.md)、[Claude](../10-claude/01-getting-started.md) 指南。

[^academy-4d]: Claude Academy「Claude 101」課程的「Getting better results」。"AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results （確認日期 2026-10-26）
[^ways]: OpenAI，「How workers are unlocking new ways of working」。分析指出：在自己職業以外的事情上，人們會多加示例、背景，也更多地請它核對。https://openai.com/index/unlocking-new-ways-of-working （確認日期 2026-10-24）
[^academy-eval]: Claude Academy「Claude 101」課程的「Getting better results」。"Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results （確認日期 2026-10-26）
[^academy-tabs]: Claude Academy「Claude 101」課程的「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （確認日期 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」課程的「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （確認日期 2026-10-26）
[^academy-skilltest]: Claude Academy「Introduction to Claude Cowork」課程的「Validating skills for plugins」。"When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." 課程講的是把用了技能的回答和沒用技能的回答做對比的方法。本章把同樣的方法，擴充套件到專案指令這樣的模板上（本指南的解讀）。https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins （確認日期 2026-10-26）
[^academy-data]: Claude Academy「Claude 101」課程「Getting better results」裡的影片（課程說明，它原本是「AI Fluency for nonprofits」課程裡的影片）。"Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results （確認日期 2026-10-26）
[^academy-openai]: OpenAI Academy 課程正文（需要登入、註冊）。Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" （確認日期 2026-10-26）

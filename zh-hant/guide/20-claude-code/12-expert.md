# 第12章 像專家一樣使用 — 按工作挑選，需要時再一個一個積累

> **一句話總結**：專家不是用很多功能的人，而是**挑選與工作大小相稱的功能**的人。不要一開始就全部設定好，而是在**同樣的不便反覆出現時**，一個一個地增加。
> 這一章用每週運轉第3階段做出的「整理工具」的固定流程來收尾。

這一章依據 2026年10月31日確認的 Claude Code 官方文件編寫。適用於任何 AI 的“像專家一樣使用”原理，在[第1階段第11章](../00-common/11-expert.md)裡。這裡只講挑選和積累 Claude Code 功能的方法。

## 按工作的大小來挑選

| 這樣的事 | 用這個 | 在哪裡學過 |
|---|---|---|
| 一個問題，一篇文章 | 聊天（Claude 應用的 Chat） | [第2階段](../10-claude/) |
| 讀取並修改我資料夾裡的檔案 | Code 標籤頁的會話 | [第2章](02-install.md) |
| 很大、方法有多種的事 | 「計劃」模式，先看方法 | [第5章](05-delegate-well.md) |
| 每次都要重新說的規則 | CLAUDE.md | [第6章](06-claude-md.md) |
| 經常重複同一流程的事 | 技能（`/名稱`） | [第7章](07-skills-plugins.md) |
| 到點自動做的事 | 定時任務 | [第8章](08-parallel-cloud-schedule.md) |
| 一行確認·自動化 | 終端的 `claude -p` | [第10章](10-terminal.md) |
| 出錯了必須撤銷的事 | 回退 + Git 記錄 | [第4章](04-permissions-undo.md) |

官方文件也把功能分成“每次會話始終可見的（CLAUDE.md）”“需要時呼叫的（技能）”“到點自己執行的”來說明。[^match] 用的功能越大，能做的事就越多，但要確認的東西也相應變多。

<Quiz id="ch412-choose" />

## 不要一次全做，而是逐步積累

**不需要一開始就設定好一切。** 官方文件說，每個功能都有“這時候就加上”的訊號。[^build]

| 出現這樣的事 | 就加上這個 |
|---|---|
| 同一條規則或命令錯了兩次 | 寫進 CLAUDE.md |
| 總是用同樣的請求開始一件事 | 儲存成技能 |
| 同一個流程已經是第三次貼上 | 儲存成技能 |
| 總是從瀏覽器裡複製資料過來 | 把那個服務連線成聯結器（MCP） |
| 有些事不用問也該每次都發生 | 鉤子（在規定的時刻自動執行的命令） |

出處：Claude Code 官方文件（僅摘錄一部分）[^build]

本指南的整理工具也是按這個順序長大的。第2章的長請求 → 第5章的模板 → 第6章的 CLAUDE.md → 第7章的技能。是**先遇到不便，然後才做工具。**

同樣的訊號，在**修改已經做好的東西時**也適用。同樣的失誤又出現了，就不要只在聊天裡改一次就算了，而是修改 CLAUDE.md。如果有一個流程總是靠手工反覆調整，就修改技能。[^update]

<Quiz id="ch412-build" />

## 現在可以不用再做的習慣

以前的模型所需要的竅門裡，有些現在反而會礙事。這裡只摘錄官方文件列出的、與本指南讀者相關的部分。[^stop]

| 以前的竅門 | 現在 |
|---|---|
| 給重要指令加上“重要！”或大寫 | 平實寫下的一行也會遵循。疊加強調，反而會讓規則被過度套用 |
| 催促“別停，一直做到底” | 約好的事通常會做到底。取而代之的是給它確認標準（第5章） |
| 把資料夾結構長篇寫進 CLAUDE.md | 資料夾 Claude 會自己讀。只寫資料夾裡沒有的東西 |

出處：Claude Code 官方文件[^stop]

如果是**一定要遵守的規則**，就用強調以外的辦法。官方文件說，不能讓步的規則，要改成鉤子或拒絕規則。[^stop] 對本指南的讀者來說，先用第4章的許可權模式和 Git 記錄來守住就足夠了。

<Quiz id="ch412-stop" />

## 每週整理的固定流程

把第3階段做出的工具，每週這樣運轉一下。

1. **收集**：會議·學習·每日回顧的備忘，隨時放進 `inbox`。刪掉個人資訊。
2. **整理**：`/meeting-notes`、`/study-notes`，週五用 `/weekly-review`（或定時）。
3. **確認**：讀 Claude 給出的**檢查結果和“需要核實的地方”**，把數字·負責人·期限和原件對照。
4. **記錄**：滿意的話，用提交留存下來（第4章）。
5. **修改**：同樣的意見提了兩次，就修改 CLAUDE.md 或技能。

**不需要一開始就完美。** 每週運轉一次，每次只改一處不便，幾周之後就會成為一個完全適合我的工具。

<Quiz id="ch412-routine" />

## 小結

- 按工作的大小來挑選：提問用聊天，檔案的事用 Code，大事先做計劃，重複的用 CLAUDE.md·技能，到點的用定時。
- 不要一開始就全設定好。同樣的不便反覆出現時再一個一個地加，已經做好的東西也靠同樣的訊號來修改。
- 不用強調和催促，而是給平實的一行話和確認標準。一定要守的規則，靠許可權·Git 這類機制來守。
- 每週運轉 收集 → 整理 → 確認 → 記錄 → 修改。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Hook | 鉤子 | 在規定的時刻自動執行的命令 |
| Routine | 固定流程 | 每週按同樣順序運轉的工作習慣（與第8章的雲端定時名稱含義不同） |

<ChapterDone :chapter="412" />

下一章：第3階段 Claude Code 指南到這裡就結束了。想把同樣的整理工具搬到 OpenAI 的 Codex 上，請接著看[第3階段 · Codex 指南](../21-codex/)。也可以在[第3階段 · Claude Code 目錄](./)裡挑想再看的章節，或者用 [AI 知識水平測試](../00-common/level-test.md)檢驗一下到目前為止所學的內容。

[^match]: Claude Code 官方文件，《Extend Claude Code》。"Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview（確認日期 2026-10-31）
[^build]: Claude Code 官方文件，《Extend Claude Code》。"You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview（確認日期 2026-10-31）
[^update]: Claude Code 官方文件，《Extend Claude Code》。"A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview（確認日期 2026-10-31）
[^stop]: Claude Code 官方文件，《Best practices for Claude Code》。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices（確認日期 2026-10-31）

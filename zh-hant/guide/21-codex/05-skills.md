# 第5章 搬運技能——用一行 `$weekly-review` 做每週回顧

> **一句話總結**：Codex 的技能和 Claude Code 是**同一種格式**（`SKILL.md`），只是存放的位置和呼叫的符號不同。資料夾是 `.agents/skills`，呼叫時用 `$名稱`。
> 把整理工具裡的 3 個技能搬過來，用一行 `$weekly-review` 做出每週回顧，再和原件對一對。

這一章依據 2026年11月1日確認的 Codex 官方文件，以及本指南的實際操作（在 Codex 終端裡執行）寫成。技能是什麼、為什麼要用，在 [Claude Code 第7章](../20-claude-code/07-skills-plugins.md)裡講過了。

## 同樣的格式，不同的位置

Codex 的技能，也是一個裝著 `SKILL.md` 檔案的資料夾，`SKILL.md` 裡必須有名稱（`name`）和說明（`description`）。[^format] 技能遵循多種工具共同使用的公開標準。[^standard] 所以，在 Claude Code 裡做的 `SKILL.md`，**不用修改**，原樣就搬過來了。

不同的是存放的位置和呼叫的方法。

| | Claude Code | Codex |
|---|---|---|
| 只用於這個資料夾 | `.claude/skills/` | `.agents/skills/` |
| 用於我所有的資料夾 | `~/.claude/skills/` | `~/.agents/skills/` |
| 呼叫 | `/名稱` | `$名稱` |

來源：Codex 官方文件[^where][^mention]

搬之前先試了一下。技能還放在 `.claude/skills` 裡的時候呼叫 `$weekly-review`，Codex 沒能直接在技能列表裡找到，而是**透過檔案搜尋**翻找 `SKILL.md`，才找出來的。這次找到了，但放在規定的位置更保險。

<Quiz id="ch505-where" />

## 搬運技能

我這樣拜託了 Codex。

```
把 .claude/skills 資料夾裡的 3 個技能，複製到 Codex 讀取的位置 .agents/skills 裡。原來的資料夾保持不動。
```

**被攔住了。** 原因是第4章看到過的受保護資料夾。工作資料夾裡的 `.agents`，預設狀態下只能讀取。[^protected] Codex 告訴我複製被阻止了，並告訴我可以改為輸入的命令。

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

這次練習是預先定好許可方式再執行的終端執行（第7章），所以沒法詢問，就那樣停住了。在應用裡這一步看起來是什麼樣，本指南沒能親自確認。如果出現徵求許可的畫面，請讀清楚**要往哪裡寫什麼**，再做判斷。

本指南是把 Codex 告訴我的命令**親自**執行，才完成複製的。開啟 macOS 終端，用 `cd ~/hello-ai-연습/정리도구` 進入資料夾，然後輸入上面的兩行。如果是第一次用終端，請先看 [Claude Code 第10章](../20-claude-code/10-terminal.md)。

搬完之後，`.agents/skills` 下面有 `meeting-notes`、`study-notes`、`weekly-review` 三個資料夾就行了。

<Quiz id="ch505-move" />

## 用 `$` 來呼叫

在輸入框裡輸入 `$`，就可以挑選並呼叫技能。[^dollar] 這次只發送了一個技能名稱。

```
$weekly-review
```

複製完成之後，它**直接**打開了 `.agents/skills/weekly-review/SKILL.md`，沒有用檔案搜尋。然後彙總 3 份回顧備忘，做出了每週回顧。

結果：[用技能做的每週回顧](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

我把數字和事實，和原始備忘對了一遍。

| 原始備忘 | 每週回顧 | 對嗎 |
|---|---|---|
| 點贊 12 個 | 12 個 | 對 |
| 價格錯寫成 6,000韓元 | 6,000韓元 錯誤 | 對 |
| 套餐今天 4 個 | 4 個 | 對 |
| 套餐本週合計 11 個 | 11 個 | 對 |
| Instagram 3 次都發了 | 3 次 | 對 |
| 熱紅酒成本 1,800韓元 | 沒有 | 漏了 |
| 買燈泡並換上 | 沒有 | 漏了 |
| 寫文案花了 2 小時 | 沒有 | 漏了 |

來源：本指南的實踐結果（2026-11-01）

沒有錯的專案，但有**三個漏掉了**。看起來是因為不太符合回顧模板的三欄（做得好的、可惜的、下週要做的），就被省掉了。像這樣，**不只要看錯的，也要看漏的。** 如果有不該漏掉的內容，就在技能里加一行，比如"像熱紅酒成本這種會成為下次會議議題的數字，要放進下週要做的裡"。

即使不呼叫，只要請求和技能說明相符，Codex 也可能自己挑選技能。[^implicit] 所以最好在說明的開頭，把**什麼時候用**寫清楚。[^frontload]

<Quiz id="ch505-call" />

## 建立新技能與外掛

從頭建立新技能時，呼叫預設自帶的 `$skill-creator`，然後說明目標、步驟、格式。[^creator] 官方文件推薦的好的第一個技能，是每週彙報或會議後續整理這樣的**步驟和格式總是相同的事**。[^first] 整理工具的三個技能正是這樣的例子。

**外掛**是把技能和外部工具連線打包在一起安裝的套裝。[^plugin] ChatGPT 和 Codex 共用一份外掛目錄。[^shared] 對於外掛裡帶的鉤子（自動執行的指令碼），文件要求在執行之前先審查，判斷它是否可信。[^hooks] 第一次見到的外掛，就像在 [Claude Code 第7章](../20-claude-code/07-skills-plugins.md)裡學的那樣，先確認是誰做的、有什麼許可權。

<Quiz id="ch505-create" />

## 動手試試

1. 請 Codex 把 `.claude/skills` 裡的 3 個技能複製到 `.agents/skills`。如果它徵求許可，讀過內容後判斷；如果被攔住，就在終端裡（應用選單「View → Open Terminal」也行）親自輸入正文裡的兩行命令。
2. 開啟一個新對話，在輸入框裡輸入 `$`，確認三個技能是否出現。
3. 傳送 `$weekly-review`，把結果和原始備忘對一對。把錯的和漏的分開數一數。
4. 有漏掉的，就在技能里加一行，再執行一次。

**連續任務**：第6章裡，我們會看每週五讓每週回顧自動執行的預約，以及雲端和手機。

## 總結

- 技能格式（`SKILL.md`）和 Claude Code 相同。位置是 `.agents/skills`，呼叫用 `$名稱`。
- `.agents` 是受保護資料夾，搬運時可能被攔住，或者需要許可（本指南只確認了在終端裡被攔住）。
- 一行 `$weekly-review` 就出了每週回顧。5 個專案是對的，漏了 3 個。
- 不只確認錯的，也要確認漏的。反覆出現的話，就修改技能。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| `$` 提及 | 美元符提及 | 在 Codex 裡按名稱呼叫技能的方法 |
| `.agents/skills` | agents 技能資料夾 | Codex 在這個資料夾裡查詢技能 |
| skill-creator | 技能建立器 | 幫助建立新技能的預設技能 |

<ChapterDone :chapter="505" />

下一章：[第6章. 預約、雲端、手機](06-schedule-cloud.md)

[^format]: Codex 官方文件，「Build skills」。 "A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^standard]: Codex 官方文件，「Build skills」。 "Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^where]: Codex 官方文件，「Build skills」。 "For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^mention]: Codex 官方文件，「Skills & Plugins」。 "ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins （確認日期 2026-11-01）
[^protected]: Codex 官方文件，「Agent approvals & security」。 "`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security （確認日期 2026-11-01）
[^dollar]: Codex 官方文件，「Slash commands」。 "You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands （確認日期 2026-11-01）
[^implicit]: Codex 官方文件，「Build skills」。 "**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^frontload]: Codex 官方文件，「Build skills」。 "Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^creator]: Codex 官方文件，「Skills & Plugins」。 "In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins （確認日期 2026-11-01）
[^first]: Codex 官方文件，「Skills & Plugins」。 "Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins （確認日期 2026-11-01）
[^plugin]: Codex 官方文件，「Skills & Plugins」。 "A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins （確認日期 2026-11-01）
[^shared]: Codex 官方文件，「Skills & Plugins」。 "ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins （確認日期 2026-11-01）
[^hooks]: Codex 官方文件，「Plugins」。 "Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins （確認日期 2026-11-01）


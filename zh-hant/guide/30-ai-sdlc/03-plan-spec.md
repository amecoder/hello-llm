# 第3章 規劃與規格說明——接受訪談，寫出 SPEC.md

> **一句話總結**：要做什麼還模模糊糊的時候，不要自己一個人全部理清楚，而是**讓 Claude 來採訪你**。訪談結束後，Claude 會把那些內容寫成 **SPEC.md**（規格說明書）。
> 規格說明講的不是"怎麼做"，而是**"應該變成什麼樣"的約定**。這個約定，就是第4～6章裡製作、確認、評審的依據。

這一章依據 2026年11月1日確認的 Claude Code、GitHub 官方文件，以及 spec-kit、OpenSpec 倉庫裡的說明寫成。具體說明要交代什麼的要領，在 [Claude Code 第5章](../20-claude-code/05-delegate-well.md)學過了。這一章把那些要領擴充套件到"製作之前的階段"。

## 為什麼要先做規劃

就像第1章看到的，AI 常常**做出和我腦子裡想的不一樣的東西**，常見的原因是缺了只讀倉庫是看不出來的資訊。[^missing] 那些資訊只在我腦子裡。比如誰來用、哪裡不方便、什麼事不做。

GitHub 的入門教程也說，**寫程式碼之前，先把要做的東西記下來，並追蹤進度。**[^before-code]

說得越具體，來回修改的次數就越少。官方文件要求一開始就點明檔案、說出症狀，並說明"做完了"是什麼樣子。[^specific]

| 不夠好的例子 | 更好的例子 |
|---|---|
| 做一個顯示待辦事項的頁面 | 一個把會議紀要裡的待辦事項表彙總起來，按負責人、期限分別顯示的頁面。做完時，備忘裡的 5 個待辦事項必須全部看得到 |

來源：本指南的例子（要領來自官方文件）[^specific]

<Quiz id="ch703-why" />

## 接受訪談，寫出 SPEC.md

想要的東西還不清楚也沒關係。官方文件說，不需要在寫提示詞之前全部想清楚，可以**讓 Claude 來採訪你**。[^interview] 把文件裡的示例譯成中文，大致是這樣。

> 我想做這樣一個東西，但還沒有深入想過。請先採訪我，直到能寫出規格說明為止，做完後寫進 SPEC.md。

這樣，Claude 會針對還沒有定下來的部分，用**選擇題**反過來問你。[^choices] 如果是待辦事項看板，請求就會是這樣。

```
我想做一個網頁，把第3階段整理工具生成的會議紀要裡的待辦事項表彙總起來顯示。我還沒有深入想過。請先採訪我，直到能寫出規格說明為止，做完後寫進 SPEC.md。
```

SPEC.md 生成之後，在**新會話**裡讓它看著這個檔案來製作。這是為了從乾淨的上下文，以及用文字寫下來的"完成的定義"開始。[^fresh] 這樣可以讓訪談中來回的那一長串對話，不要摻進製作過程裡。

**做完之後，要對照 SPEC.md 來確認。** 這件事，在第6章評審裡還會再講。

<Quiz id="ch703-interview" />

## 好的規格說明是什麼樣

規格說明裡寫的是**從外面看得到的行為**。OpenSpec 的說明書說，規格說明"不是實現計劃，而是行為的約定"，而且不改變外部可見行為的實現細節，通常不放進規格說明。[^contract] spec-kit 也說，在規格說明階段，應該專注於**做什麼、為什麼**，而不是技術，技術選擇要推遲到下一個計劃階段。[^what-why]

如果是待辦事項看板的 SPEC.md，就會有這樣的句子。

| 好的句子 | 不夠好的句子 |
|---|---|
| 會議紀要裡的待辦事項，一個不漏地都顯示出來 | 用 JavaScript 讀取表格 |
| 過了期限的待辦事項，標記不一樣 | 看起來漂亮 |
| 不顯示個人姓名，只顯示角色 | 用整潔的程式碼來做 |

來源：本指南的例子

左邊的句子，**可以用"是／否"來確認。** 到了第5章，這些句子就直接成了確認的手段。

<Quiz id="ch703-spec" />

## 規格驅動開發工具

以規格說明為中心的開發方式，叫作**規格驅動開發**（Spec-Driven Development）。先定下要做什麼、為什麼做，再把那份規格說明變成計劃、任務、程式碼。[^sdd] 有兩個工具可以幫助做這件事。

| 工具 | 出品方 | 做什麼 |
|---|---|---|
| spec-kit | GitHub | 分階段完成規格說明 → 計劃 → 任務清單 → 實現 |
| OpenSpec | Fission-AI | 每次變更都建立提案、規格、設計、任務資料夾 |

來源：各工具的說明（只摘錄了一部分）[^speckit][^openspec]

OpenSpec 是讓 AI 寫文件，而**人在程式碼寫出來之前審查計劃**。[^openspec] spec-kit 是一次執行一個階段，**審查結果之後**再往下走。[^one-at-a-time] 兩個工具都在中間留了人來確認的位置。

本指南**不安裝這兩個工具。** spec-kit 需要 Python 3.11 及以上，以及叫 uv 的工具[^speckit-req]，OpenSpec 需要在終端安裝（或者 Node.js 22.12 及以上）。[^os-install] 只靠上面學過的"訪談 → SPEC.md → 新會話"流程，也能實踐同樣的想法。以後做更大的專案時，再去了解它們。

<Quiz id="ch703-tools" />

## 動手試試

1. 在 Claude Code 應用裡，開啟第2章建的 `할일보드` 資料夾。
2. 傳送上面的訪談請求，回答 Claude 的問題。不知道的話，說"給我推薦"也可以。
3. 讀一讀生成的 SPEC.md，每一句都問問"能用是／否來確認嗎？"。不能的話，請它修改。
4. 確認 SPEC.md 裡沒有放入真實姓名、聯絡方式（因為是公開倉庫）。
5. 滿意的話，就留下記錄（提交）。

**連續任務**：第4章裡，我們會在新會話裡依據 SPEC.md 拿到計劃，並在分支上做出第一個畫面。

## 總結

- AI 常常做出離譜的東西，常見原因是缺了我腦子裡的資訊。製作之前先寫下來。
- 不清楚的話，讓 Claude 採訪我，把結果寫成 SPEC.md。
- SPEC.md 生成之後，在新會話裡製作。做完之後，對照 SPEC.md 檢查。
- 規格說明裡寫的是從外面看得到的行為，而且要寫成能用是／否來確認。
- spec-kit、OpenSpec 是幫助實踐同樣想法的工具。本指南不安裝。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Spec | 規格說明 | 寫下應該變成什麼樣的約定 |
| SPEC.md | SPEC.md 檔案 | 寫著規格說明的檔案 |
| Spec-Driven Development | 規格驅動開發 | 先定規格說明，再據此製作的方式 |
| Definition of done | 完成的定義 | "做完了"的標準 |

<ChapterDone :chapter="703" />

下一章：[第4章. 製作](04-build.md)

[^missing]: Claude Code 官方文件，「Best practices for Claude Code」。 "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^before-code]: GitHub 官方文件，「Planning your work」。 "Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work （確認日期 2026-11-01）
[^specific]: Claude Code 官方文件，「Best practices for Claude Code」。 "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^interview]: Claude Code 官方文件，「Best practices for Claude Code」。 "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^choices]: Claude Code 官方文件，「Best practices for Claude Code」。 "Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^fresh]: Claude Code 官方文件，「Best practices for Claude Code」。 "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^contract]: OpenSpec 文件，「Concepts」。 "A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md （確認日期 2026-11-01）
[^what-why]: spec-kit 文件，「Spec-Driven Development Quickstart」。 "Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md （確認日期 2026-11-01）
[^sdd]: spec-kit README. "Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit （確認日期 2026-11-01）
[^speckit]: spec-kit README. "Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit （確認日期 2026-11-01）
[^openspec]: OpenSpec README. "**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec （確認日期 2026-11-01）
[^one-at-a-time]: spec-kit README. "Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit （確認日期 2026-11-01）
[^speckit-req]: spec-kit README. "You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit （確認日期 2026-11-01）
[^os-install]: OpenSpec README. "Install OpenSpec. On macOS or Linux, in your terminal:" / "(needs Node.js 22.12.0 or higher)" https://github.com/Fission-AI/OpenSpec （確認日期 2026-11-01）


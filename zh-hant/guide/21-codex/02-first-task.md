# 第2章 在 ChatGPT 應用裡開始使用 Codex — 開啟資料夾，交出第一次整理

> **一句話總結**：安裝 ChatGPT 桌面應用，在左上角選擇 **Codex**，再用輸入框上方的 **Choose project** 開啟 `정리도구` 資料夾。
> 然後用和 Claude Code 第2章一樣的請求讓它整理會議備忘，並把結果和原件對照。

這一章依據 2026年11月1日確認的 Codex 官方文件和 macOS 版 ChatGPT 桌面應用介面編寫。本指南的截圖是**英語**介面。如果你的介面是中文，請找同一位置的按鈕。

## 安裝並登入

1. 在 [chatgpt.com/download](https://chatgpt.com/download/) 下載適合我電腦的 ChatGPT 應用並安裝。Linux 請按官方文件的單獨說明操作。[^install]
2. 開啟應用，用 ChatGPT 賬號登入。[^signin]

如果在第2階段用過 ChatGPT，用同一個賬號進入就行。賬號和套餐在[第2階段 ChatGPT 第1章](../11-chatgpt/01-getting-started.md)裡講過。

<Quiz id="ch502-install" />

## 選擇 Codex 並開啟資料夾

點應用**左上角的名稱標籤**，可以在 ChatGPT 和 Codex 之間選擇。Chat 和 Work，要先選 ChatGPT，再用輸入框上方的開關切換。[^toggle] 官方文件也說，需要開發工具的事，請在這個選單裡選擇 **Codex**。[^select] 選了 Codex 後，中間會出現 "What should we build?"（我們要做點什麼？）。

輸入框正上方有兩個選項。

| 介面名稱 | 作用 |
|---|---|
| Choose project | 選擇要工作的資料夾（專案） |
| This computer | 選擇在哪裡工作。我的電腦或 Cloud |

出處：本指南的介面確認（2026-11-01）

![Codex 首頁：中間是 "What should we build in 정리도구?"，輸入框上方是專案「정리도구」和「This computer」，輸入框下方是許可權「Ask for approval」和模型名稱](../../../guide/21-codex/assets/shot-01-home.png)

上面的介面，是把 `정리도구` 資料夾作為專案開啟的狀態。輸入框上方能看到選好的資料夾（`정리도구`）和工作的位置（This computer），輸入框下方能看到許可權（Ask for approval）和模型名稱。左側的對話列表和用量提示，已經從截圖裡裁掉了。

點 **Choose project**，選擇 `정리도구` 資料夾（如果跟著 Claude Code 指南做過，就是 `~/hello-ai-연습/정리도구`）。Codex 可以讀取並修改所選資料夾裡的檔案。[^folder] 也可以從選單欄的「File → Open Folder…」開啟。

工作的位置保持 **This computer**（我的電腦）不變。Cloud 是給連線了 GitHub 倉庫的人用的，我電腦裡的檔案不會傳到雲端。[^cloud-files]

也請確認資料夾是不是 **Git 倉庫**（留存改動記錄的裝置）。Codex 裡檢視改動內容的視窗，只在 Git 倉庫裡才能開啟。如果不是 Git，應用會問是否要建一個。[^review-git] 如果跟著 Claude Code 第3章做過，那它已經是 Git 倉庫了。如果是用練習資料重新開始的，那麼**應用問是否建立倉庫時**照著做就行。[^review-git] 雖然也可以用對話拜託 Codex，但裝 Git 記錄的 `.git` 資料夾是受保護資料夾（[第4章](04-permissions-undo.md)），可能會詢問許可或被阻止。

<Quiz id="ch502-open" />

## 交出第一件事

傳送一個和 Claude Code 第2章相似的請求。這次沒有另外說格式。因為資料夾裡已經有模板（`templates/`）了。

```
把 inbox/회의-2026-10-27-주간회의.txt 這份備忘整理成會議紀要，儲存為 notes/ 資料夾裡的新檔案。
```

在本指南里實際執行後，Codex 是這樣工作的。這次執行，是在終端（[第7章](07-terminal.md)）裡運行同一個 Codex。官方文件說明，應用也會在所選資料夾裡自動查詢 `AGENTS.md` 和技能。[^discovery] 不過，本指南沒有在應用介面裡親自確認過同樣的結果。

1. 在資料夾裡查找了規則檔案（`AGENTS.md`）和模板。規則檔案還沒有，所以**只讀了模板。**
2. 按模板的欄順序，填入了已決定的 2 項、待辦事項 5 項、下次要討論的事、下次會議。
3. 備忘裡沒有的期限，保留為 `(備忘中沒有)`。這是模板說明裡寫的規則。
4. 儲存之後，自己檢查了欄順序和日期·星期。

成果：[第2章 會議紀要](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

**請把結果和原件對照。** 逐個確認下面的問題。

- 5 項待辦事項都搬過來了嗎？負責人和備忘一致嗎？
- 有沒有編造備忘裡沒有的期限？
- 日期對嗎？

這次的結果裡，日期很顯眼。備忘裡寫的是 `10/27(월)`（週一），而會議紀要裡變成了 `10/27(화)`（週二）。練習備忘裡的星期是為了故事編的，和 2026年的日曆不一樣。Codex 按日曆改了過來，並且**自己在回答裡和檔案內的備註中說明了改過。** 如果不喜歡這樣的判斷，再請它“星期照備忘裡寫的原樣用”就行。

即使是同一個請求，結果的樣子每次執行也會略有不同。官方文件也說，看起來很像樣的結果也可能有遺漏或錯誤，所以重要的部分在使用前要確認。[^review]

<Quiz id="ch502-first" />

## 親手試一試

1. 安裝 ChatGPT 應用並登入。
2. 在左上角選擇 **Codex**，用 **Choose project** 開啟 `정리도구` 資料夾。
3. 用上面的請求讓它整理會議備忘。
4. 把待辦事項數量·負責人·期限·日期和原始備忘對照。

**連續任務**：在第3章裡，我們把 Claude Code 的規則檔案 `CLAUDE.md`，搬成 Codex 讀取的 `AGENTS.md`。

## 小結

- 在應用左上角選擇 Codex，用輸入框上方的 Choose project 開啟資料夾。
- 工作位置保持 This computer。我的檔案不會傳到 Cloud。
- 檢視改動內容只有在 Git 倉庫裡才行。先把資料夾做成 Git 倉庫。
- 結果要和原件對照。Codex 自己改過的部分（這次是星期）尤其要確認。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Project | 專案 | Codex 工作的資料夾 |
| This computer | 這臺電腦 | 在我的電腦上工作 |
| Cloud | 雲端 | 在網際網路另一端的工作空間裡工作 |
| Git | Git | 留存檔案改動記錄的裝置 |

<ChapterDone :chapter="502" />

下一章：[第3章. 規則檔案 AGENTS.md](03-agents-md.md)

[^install]: Codex 官方文件，《ChatGPT desktop app》。"**Install the ChatGPT desktop app.** [Download ChatGPT](https://chatgpt.com/download/) for macOS or Windows, or follow the [Linux installation guide](https://learn.chatgpt.com/docs/linux/linux-app)." https://learn.chatgpt.com/docs/app（確認日期 2026-11-01）
[^signin]: Codex 官方文件，《Quickstart》。"Open the app, then sign in with your ChatGPT account." https://learn.chatgpt.com/docs/quickstart（確認日期 2026-11-01）
[^select]: Codex 官方文件，《Quickstart》。"For software development with codebase context and developer tools, select **Codex** from the ChatGPT dropdown." https://learn.chatgpt.com/docs/quickstart（確認日期 2026-11-01）
[^folder]: Codex 官方文件，《Quickstart》。"Start a chat, create a project, or open a folder. ChatGPT can read and modify files in the folder you choose." https://learn.chatgpt.com/docs/quickstart（確認日期 2026-11-01）
[^cloud-files]: Codex 官方文件，《Codex environments》。"Use **Work in** to choose **This computer** or **Cloud**." / "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes（確認日期 2026-11-01）
[^review-git]: Codex 官方文件，《Code review》。"The review pane requires a project inside a Git repository. If your project isn't a Git repository yet, the app prompts you to create one." https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^review]: Codex 官方文件，《Use ChatGPT》。"A polished response can still be incomplete or wrong, so review the details that matter before you use or share it." https://learn.chatgpt.com/docs/use-chatgpt（確認日期 2026-11-01）
[^discovery]: Codex 官方文件，《Projects and chats》。"New chats start in the primary folder. Codex also uses that folder as the default for Git operations and automatic discovery of `AGENTS.md`, skills, and `config.toml`." https://learn.chatgpt.com/docs/projects（確認日期 2026-11-01）
[^toggle]: Codex 官方文件，《ChatGPT desktop app》。"Choose ChatGPT or Codex. In ChatGPT, use the toggle above the composer to select Chat or Work. In Codex, start with New chat." https://learn.chatgpt.com/docs/app（確認日期 2026-11-01）

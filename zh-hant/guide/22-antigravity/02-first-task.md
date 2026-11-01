# 第2章 安裝應用與第一次整理——把資料夾開啟為專案

> **一句話總結**：安裝 Antigravity 應用，用 Google 賬號登入，然後把整理工具資料夾作為**專案**開啟。
> 一開始用 **Planning mode**（先做計劃）來交代任務，讀完計劃後點 **Proceed** 繼續。

本章依據 2026年11月1日確認的 Antigravity 官方文件寫成。**本指南還沒有在應用介面上實際練習過。** 介面名稱原樣寫了官方文件裡的英文名稱，和你的介面不同時，以你的介面為準。實際執行結果在第3章（用終端執行）裡。

## 安裝並登入

1. 在 [antigravity.google/download](https://antigravity.google/download) 下載適合你電腦的安裝檔案。如果是 macOS，開啟 `Antigravity.dmg`，把它拖進 **Applications** 資料夾。[^dmg]
2. 開啟應用，點 **Sign in**。瀏覽器開啟後，用個人 Google 賬號登入。[^signin]

用量和可用的模型，由登入賬號的套餐（免費、Pro、Ultra）決定（[第1章](01-what-is.md)）。

<Quiz id="ch602-install" />

## 把資料夾開啟為專案

Antigravity 應用裡的智慧體（Agent），在**專案**（Projects）裡幹活。專案決定智慧體可以動哪些資料夾，以及擁有什麼許可權。[^projects]

1. 點左側邊欄的 **New Project** 圖示（帶加號的資料夾）。[^new-project]
2. 用 **Add Folder** 選擇整理工具資料夾。不是 Git 倉庫的普通資料夾也可以。[^new-project]

發出第一條指令時，要選一種工作方式。[^modes]

| 名稱 | 作用 |
|---|---|
| Local mode | 直接在當前資料夾裡工作 |
| New worktree mode | 在單獨分出來的 Git 工作空間裡工作 |

出處：Antigravity 官方文件[^modes]

整理工具用 **Local mode** 就夠了。New worktree mode 只能在 Git 倉庫裡使用。[^worktree]

新專案一開始用 **Inherit Global** 許可權，可以讀寫專案資料夾裡的全部內容。[^inherit] 許可權在第4章講。

<Quiz id="ch602-project" />

## 先拿到計劃，再繼續

開始新對話時，要從兩種方式裡選一種。[^planning]

| 名稱 | 作用 | 什麼時候用 |
|---|---|---|
| Planning mode | 先做計劃再執行 | 第一次交代的事 |
| Fast mode | 不做計劃，直接執行 | 改名字這類小事 |

出處：Antigravity 官方文件（只摘錄了一部分）[^planning]

剛開始，建議用 **Planning mode**。計劃書（Implementation plan）出來後讀一讀，沒問題就點對話裡或計劃書上方的 **Proceed**，繼續往下做。[^proceed] 它和 Claude Code 第5章的「計劃（계획）」模式、Codex 第4章的 `/plan` 起同樣的作用。

在設定的 **Agent** 標籤頁裡，可以選擇審閱方式。**Request review** 會在做出計劃或改動內容時停下來，等我批准。[^review-mode] 相反，Always proceed 則不會停下，直接執行。[^always] 剛開始，Request review 比較安全。

任務完成後，智慧體會生成**整理報告**（Walkthrough），概括改了什麼。[^walkthrough]

<Quiz id="ch602-plan" />

## 交代第一次整理

傳送和前面兩個工具一樣的請求。

```
把 inbox/회의-2026-10-27-주간회의.txt 這份筆記整理成會議記錄，作為新檔案儲存到 notes/ 資料夾裡。
```

想指定檔案的話，也可以輸入 `@` 來選。指定檔案並不會把內容貼上進去，而是把檔案路徑傳給智慧體，需要時它再去讀那個檔案。[^mention]

本指南用終端（`agy`）運行同樣請求得到的結果，在[第3章](03-rules-skills.md)裡。應用和終端用的是同一個智慧體（[第1章](01-what-is.md)）。

**請把結果和原件對一對。** 5個待辦都搬過來了嗎？負責人和截止日期和筆記一樣嗎？有沒有編造筆記裡沒有的內容？

<Quiz id="ch602-first" />

## 檢視改動內容

應用的 **Review** 視窗會顯示專案 Git 倉庫裡的改動。[^review] 預設檢視是所有還沒有記錄的改動（**Uncommitted**），所以我自己改的內容也會一起顯示。選 **Agent Edits**，就只看這次對話裡智慧體改過的檔案。[^views]

Review 視窗顯示的是 Git 倉庫裡的改動，所以把整理工具資料夾也做成 Git 倉庫會比較方便。如果你跟著 Claude Code 第3章或 Codex 第2章做過，它已經是 Git 倉庫了。在不是 Git 的資料夾裡，Review 視窗是什麼樣子，官方文件裡沒有寫。

<Quiz id="ch602-review" />

## 親自動手試試

1. 安裝應用並登入。
2. 用 New Project → Add Folder 開啟整理工具資料夾。
3. 用 Planning mode 傳送上面的請求，讀完計劃後點 Proceed。
4. 把生成的會議記錄和原始筆記對一對，並在 Review 窗口裡檢視改動過的檔案。

**連續任務**：第3章要測試，不用搬運規則（`AGENTS.md`）和技能，它是否也會遵守。

## 小結

- 應用：Sign in → 用個人 Google 賬號登入。
- 用 New Project → Add Folder 把資料夾開啟為專案。普通資料夾也行。
- 剛開始，用 Planning mode 和 Request review，讀完計劃再 Proceed。
- Review 視窗顯示 Git 改動。用 Agent Edits 可以只看智慧體的改動。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Project | 專案 | 智慧體幹活的資料夾與許可權的組合 |
| Planning mode | 計劃模式 | 先做計劃再執行的方式 |
| Implementation plan | 實施計劃 | 智慧體做出的工作計劃書 |
| Walkthrough | 完成報告 | 任務做完後的整理報告 |

<ChapterDone :chapter="602" />

下一章：[第3章. 規則與技能——不用搬運也行](03-rules-skills.md)

[^dmg]: Antigravity 官方文件，「Get started」。"Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^signin]: Antigravity 官方文件，「Authenticate」。"Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install （確認日期 2026-11-01）
[^projects]: Antigravity 官方文件，「Get started」。"Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^new-project]: Antigravity 官方文件，「Get started」。"Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^modes]: Antigravity 官方文件，「Get started」。"**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^worktree]: Antigravity 官方文件，「Projects」。"**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects （確認日期 2026-11-01）
[^inherit]: Antigravity 官方文件，「Projects」。"**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects （確認日期 2026-11-01）
[^planning]: Antigravity 官方文件，「Artifact review」。"**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review （確認日期 2026-11-01）
[^proceed]: Antigravity 官方文件，「Implementation plan」。"You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan （確認日期 2026-11-01）
[^review-mode]: Antigravity 官方文件，「Artifact review」。"You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review （確認日期 2026-11-01）
[^always]: Antigravity 官方文件，「Artifact review」。"The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review （確認日期 2026-11-01）
[^walkthrough]: Antigravity 官方文件，「Walkthrough」。"The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough （確認日期 2026-11-01）
[^mention]: Antigravity 官方文件，「Mentions and quoting」。"Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions （確認日期 2026-11-01）
[^review]: Antigravity 官方文件，「Review changes」。"In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes （確認日期 2026-11-01）
[^views]: Antigravity 官方文件，「Review changes」。"| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes （確認日期 2026-11-01）

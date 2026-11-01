# 第9章 安全與責任——金鑰、公開、許可證

> **一句話總結**：密碼、API 金鑰這樣的**金鑰（Secret）絕對不要上傳到倉庫。** 一旦提交過，即使把檔案刪掉，它也還留在 Git 記錄裡。
> 萬一洩露了，第一件事不是清除記錄，而是**先把這個金鑰換掉（作廢、更換）**。

本章依據 2026年11月1日確認的 GitHub、Claude Code 官方文件和 Anthropic 消費者條款寫成。對任何 AI 都適用的安全守則，在[第1階段第9章](../00-common/09-safety.md)裡。本章講的是**公開倉庫和部署**帶來的新風險。本章不是法律意見，重要的決定請和專家確認。

## 不要上傳金鑰

**金鑰**是讓人能夠訪問敏感系統和資料的憑據，比如外部服務用的 API 金鑰和令牌、資料庫密碼。[^secret] GitHub 要求，密碼、API 金鑰這樣的敏感資訊**絕對**不要上傳到倉庫。[^never]

為什麼說得這麼重？因為提交過的金鑰會成為 **Git 記錄的一部分**，即使從最新檔案裡刪掉，記錄裡也還在。[^history] 而且公開倉庫裡的金鑰，會被搜尋引擎和專門的收集程式抓走。[^indexed]

常見的洩露途徑有這些。[^paths]

- 試驗時放進去的值，不小心被提交了
- `.env` 這樣的設定檔案
- 在文件、README 的示例裡寫了真實的金鑰

<Quiz id="ch709-secret" />

## 三層防護

| 步驟 | 要做的事 | 依據 |
|---|---|---|
| 1. 不放進去 | 寫進 `.gitignore`，並禁止 Claude 讀取 | 第2章，本節 |
| 2. 被攔住 | GitHub 推送保護在上傳前攔截 | 本節 |
| 3. 換掉 | 一旦洩露，立即作廢、更換 | 本節 |

出處：本指南的整理（依據見各腳註）

**1. 不放進去。** 裝有金鑰的檔案，從一開始就寫進 `.gitignore`（第2章）。已經提交過的檔案，只寫進清單是不會被忽略的，所以順序很重要。想讓 Claude Code 的檔案工具讀不到 `.env` 這樣的檔案，就加上 `Read` 拒絕規則（例：`Read(./.env)`）。[^deny] 不過這條規則攔不住不點檔名就去讀取的命令，也攔不住其他程式。[^deny-limit] 所以金鑰檔案最安全的做法是，一開始就放在倉庫資料夾之外。加入許可權規則的位置，在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)講過。自動任務如果需要金鑰，要放進 GitHub 的 Secrets，而不是倉庫檔案。[^actions-secret][^gh-secrets]

**2. 被攔住。** GitHub 的**推送保護**會在裝有金鑰的推送到達倉庫**之前**攔住它。[^push] 你的賬號預設開著一項保護，會阻止往公開倉庫上傳金鑰。[^push] 即便如此，它也只是最後一張網。它不保證能抓住所有種類，所以請先做好第1步。

**3. 換掉。** 收到金鑰洩露的警告時，要**立即更換**那份憑據。[^rotate] 改寫 Git 記錄，需要和一起用的人協調，也有副作用。官方文件也說，要清除的如果是金鑰，**第一步是作廢、更換**。[^revoke-first]

<Quiz id="ch709-layers" />

## 公開帶來的事

公開倉庫和 Pages 網站，誰都能看到（第2、7章）。所以公開之前，請檢查這些。

- **個人資訊**：不要放進有真實姓名、聯絡方式、地址的筆記。這就是為什麼不能把第3階段整理工具的筆記原樣傳上去。
- **訪客資訊**：Pages 出於安全目的會記錄訪客 IP（第7章）。
- **批准責任**：建議的程式碼和命令是否安全，批准之前要先審閱，這是使用者的責任。[^responsible]

<Quiz id="ch709-public" />

## 許可證與 AI 做出來的成果

如果不確定**許可證**，就會適用預設的著作權法，別人不能複製、分發、修改使用我的程式碼（第2章）。想讓別人也能用，就要選一個許可證。

關於 **AI 做出來的程式碼的權利**，本指南沒有找到官方立場。我們確認到的，是適用於 Claude 個人賬號的 Anthropic 消費者條款裡的這一條（Codex、Antigravity 請遵守各自公司的條款）。它說的是：在你遵守條款的前提下，Anthropic 對輸出內容（Outputs）擁有的權利**"如果有的話"**，會轉讓給使用者。[^outputs] 這並不是"AI 做出來的程式碼有沒有著作權"的答案。如果用在重要的地方，請和專家確認。

**我的資料會不會被用來訓練**，也請確認。Claude Code 文件寫道：在 Free、Pro、Max、Ultra 賬號上，如果該設定開著，包括使用 Claude Code 在內的資料會被用來訓練新模型。[^training] 檢視設定的位置，在[第2階段 Claude 第9章](../10-claude/09-privacy.md)裡講過。

<Quiz id="ch709-license" />

## 別人做的零件也要看一看

軟體常常依賴從各處取來的零件（軟體包），這些零件裡可能在你不知道的時候混進安全漏洞。[^deps] GitHub 的 **Dependabot** 會在我用的零件有已知漏洞時發出警告。

像待辦看板這樣幾乎不用零件的頁面，不必太擔心。不過如果 Claude 提議安裝新零件，請問清楚**裝什麼、為什麼裝**再批准（和第4章檢查計劃時的問題一樣）。

<Quiz id="ch709-deps" />

## 親自動手試試——公開前檢查表

1. 看看待辦看板資料夾裡有沒有 `.gitignore`，裡面有沒有寫上可能裝有金鑰的檔案（`.env` 等）。沒有的話，讓 Claude 幫你建一個。
2. 請 Claude："幫我查一下這個倉庫裡有沒有看起來像密碼、API 金鑰、令牌的字串。找到了只告訴我檔案和行號，不要顯示值。"
3. 親自掃一遍 README、SPEC.md、資料裡有沒有真實姓名、聯絡方式。
4. 想一想要不要定一個許可證。記住：不定的話，別人就不能用。
5. 萬一上傳了金鑰：先到簽發它的地方作廢、更換，然後再整理倉庫。

**連續任務**：第10章要做的是實踐作業，把第1～9章從頭到尾一次性做一遍。

## 小結

- 金鑰絕對不上傳。一旦提交，刪掉了也還留在 Git 記錄裡，公開倉庫還會被收集。
- 三層防護：用 `.gitignore` 不放進去（Read 拒絕只攔得住 Claude 的檔案工具），推送保護來攔截，洩露了先更換。
- 公開倉庫和 Pages 裡不放個人資訊。批准之前審閱的責任在使用者。
- 沒有許可證，別人就不能用。AI 輸出內容的權利，沒有找到官方答案。
- 安裝新零件時，問清楚裝什麼、為什麼裝，再批准。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Secret | 金鑰 | 密碼、API 金鑰這樣的憑據 |
| Push protection | 推送保護 | 提前攔住裝有金鑰的推送的 GitHub 功能 |
| Rotate | 輪換（更換） | 把已洩露的金鑰換成新值 |
| Dependency | 依賴 | 我的軟體所依賴的別人的零件 |

<ChapterDone :chapter="709" />

下一章：[第10章. 實踐作業](10-practice.md)

[^secret]: GitHub 官方文件，「Secret leakage risks」。"Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （確認日期 2026-11-01）
[^never]: GitHub 官方文件，「Adding locally hosted code to GitHub」。"Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github （確認日期 2026-11-01）
[^history]: GitHub 官方文件，「Secret leakage risks」。"These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （確認日期 2026-11-01）
[^indexed]: GitHub 官方文件，「Secret leakage risks」。"Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （確認日期 2026-11-01）
[^paths]: GitHub 官方文件，「Secret leakage risks」。"Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （確認日期 2026-11-01）
[^deny]: Claude Code 官方文件，「Configure permissions」。"To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions （確認日期 2026-11-01）
[^actions-secret]: Claude Code 官方文件，「Claude Code GitHub Actions」。"Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions （確認日期 2026-11-01）
[^push]: GitHub 官方文件，「Push protection」。"Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection （確認日期 2026-11-01）
[^rotate]: GitHub 官方文件，「Secret scanning」。"When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning （確認日期 2026-11-01）
[^revoke-first]: GitHub 官方文件，「Removing sensitive data from a repository」。"It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository （確認日期 2026-11-01）
[^responsible]: Claude Code 官方文件，「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （確認日期 2026-11-01）
[^outputs]: Anthropic 消費者條款（Consumer Terms of Service）。"Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms （確認日期 2026-11-01）
[^training]: Claude Code 官方文件，「Data usage」。"We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage （確認日期 2026-11-01）
[^deps]: GitHub 官方文件，「Dependabot alerts」。"Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts （確認日期 2026-11-01）
[^gh-secrets]: GitHub 官方文件，「Secrets」。"GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets （確認日期 2026-11-01）
[^deny-limit]: Claude Code 官方文件，「Configure permissions」。"They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions （確認日期 2026-11-01）

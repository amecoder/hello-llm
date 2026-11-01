# 第9章 安全与责任——密钥、公开、许可证

> **一句话总结**：密码、API 密钥这样的**密钥（Secret）绝对不要上传到仓库。** 一旦提交过，即使把文件删掉，它也还留在 Git 记录里。
> 万一泄露了，第一件事不是清除记录，而是**先把这个密钥换掉（作废、更换）**。

本章依据 2026年11月1日确认的 GitHub、Claude Code 官方文档和 Anthropic 消费者条款写成。对任何 AI 都适用的安全守则，在[第1阶段第9章](../00-common/09-safety.md)里。本章讲的是**公开仓库和部署**带来的新风险。本章不是法律意见，重要的决定请和专家确认。

## 不要上传密钥

**密钥**是让人能够访问敏感系统和数据的凭据，比如外部服务用的 API 密钥和令牌、数据库密码。[^secret] GitHub 要求，密码、API 密钥这样的敏感信息**绝对**不要上传到仓库。[^never]

为什么说得这么重？因为提交过的密钥会成为 **Git 记录的一部分**，即使从最新文件里删掉，记录里也还在。[^history] 而且公开仓库里的密钥，会被搜索引擎和专门的收集程序抓走。[^indexed]

常见的泄露途径有这些。[^paths]

- 试验时放进去的值，不小心被提交了
- `.env` 这样的设置文件
- 在文档、README 的示例里写了真实的密钥

<Quiz id="ch709-secret" />

## 三层防护

| 步骤 | 要做的事 | 依据 |
|---|---|---|
| 1. 不放进去 | 写进 `.gitignore`，并禁止 Claude 读取 | 第2章，本节 |
| 2. 被拦住 | GitHub 推送保护在上传前拦截 | 本节 |
| 3. 换掉 | 一旦泄露，立即作废、更换 | 本节 |

出处：本指南的整理（依据见各脚注）

**1. 不放进去。** 装有密钥的文件，从一开始就写进 `.gitignore`（第2章）。已经提交过的文件，只写进清单是不会被忽略的，所以顺序很重要。想让 Claude Code 的文件工具读不到 `.env` 这样的文件，就加上 `Read` 拒绝规则（例：`Read(./.env)`）。[^deny] 不过这条规则拦不住不点文件名就去读取的命令，也拦不住其他程序。[^deny-limit] 所以密钥文件最安全的做法是，一开始就放在仓库文件夹之外。加入权限规则的位置，在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)讲过。自动任务如果需要密钥，要放进 GitHub 的 Secrets，而不是仓库文件。[^actions-secret][^gh-secrets]

**2. 被拦住。** GitHub 的**推送保护**会在装有密钥的推送到达仓库**之前**拦住它。[^push] 你的账号默认开着一项保护，会阻止往公开仓库上传密钥。[^push] 即便如此，它也只是最后一张网。它不保证能抓住所有种类，所以请先做好第1步。

**3. 换掉。** 收到密钥泄露的警告时，要**立即更换**那份凭据。[^rotate] 改写 Git 记录，需要和一起用的人协调，也有副作用。官方文档也说，要清除的如果是密钥，**第一步是作废、更换**。[^revoke-first]

<Quiz id="ch709-layers" />

## 公开带来的事

公开仓库和 Pages 网站，谁都能看到（第2、7章）。所以公开之前，请检查这些。

- **个人信息**：不要放进有真实姓名、联系方式、地址的笔记。这就是为什么不能把第3阶段整理工具的笔记原样传上去。
- **访客信息**：Pages 出于安全目的会记录访客 IP（第7章）。
- **批准责任**：建议的代码和命令是否安全，批准之前要先审阅，这是用户的责任。[^responsible]

<Quiz id="ch709-public" />

## 许可证与 AI 做出来的成果

如果不确定**许可证**，就会适用默认的著作权法，别人不能复制、分发、修改使用我的代码（第2章）。想让别人也能用，就要选一个许可证。

关于 **AI 做出来的代码的权利**，本指南没有找到官方立场。我们确认到的，是适用于 Claude 个人账号的 Anthropic 消费者条款里的这一条（Codex、Antigravity 请遵守各自公司的条款）。它说的是：在你遵守条款的前提下，Anthropic 对输出内容（Outputs）拥有的权利**"如果有的话"**，会转让给用户。[^outputs] 这并不是"AI 做出来的代码有没有著作权"的答案。如果用在重要的地方，请和专家确认。

**我的数据会不会被用来训练**，也请确认。Claude Code 文档写道：在 Free、Pro、Max、Ultra 账号上，如果该设置开着，包括使用 Claude Code 在内的数据会被用来训练新模型。[^training] 查看设置的位置，在[第2阶段 Claude 第9章](../10-claude/09-privacy.md)里讲过。

<Quiz id="ch709-license" />

## 别人做的零件也要看一看

软件常常依赖从各处取来的零件（软件包），这些零件里可能在你不知道的时候混进安全漏洞。[^deps] GitHub 的 **Dependabot** 会在我用的零件有已知漏洞时发出警告。

像待办看板这样几乎不用零件的页面，不必太担心。不过如果 Claude 提议安装新零件，请问清楚**装什么、为什么装**再批准（和第4章检查计划时的问题一样）。

<Quiz id="ch709-deps" />

## 亲自动手试试——公开前检查表

1. 看看待办看板文件夹里有没有 `.gitignore`，里面有没有写上可能装有密钥的文件（`.env` 等）。没有的话，让 Claude 帮你建一个。
2. 请 Claude："帮我查一下这个仓库里有没有看起来像密码、API 密钥、令牌的字符串。找到了只告诉我文件和行号，不要显示值。"
3. 亲自扫一遍 README、SPEC.md、数据里有没有真实姓名、联系方式。
4. 想一想要不要定一个许可证。记住：不定的话，别人就不能用。
5. 万一上传了密钥：先到签发它的地方作废、更换，然后再整理仓库。

**连续任务**：第10章要做的是实践作业，把第1～9章从头到尾一次性做一遍。

## 小结

- 密钥绝对不上传。一旦提交，删掉了也还留在 Git 记录里，公开仓库还会被收集。
- 三层防护：用 `.gitignore` 不放进去（Read 拒绝只拦得住 Claude 的文件工具），推送保护来拦截，泄露了先更换。
- 公开仓库和 Pages 里不放个人信息。批准之前审阅的责任在用户。
- 没有许可证，别人就不能用。AI 输出内容的权利，没有找到官方答案。
- 安装新零件时，问清楚装什么、为什么装，再批准。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Secret | 密钥 | 密码、API 密钥这样的凭据 |
| Push protection | 推送保护 | 提前拦住装有密钥的推送的 GitHub 功能 |
| Rotate | 轮换（更换） | 把已泄露的密钥换成新值 |
| Dependency | 依赖 | 我的软件所依赖的别人的零件 |

<ChapterDone :chapter="709" />

下一章：[第10章. 实践作业](10-practice.md)

[^secret]: GitHub 官方文档，「Secret leakage risks」。"Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （确认日期 2026-11-01）
[^never]: GitHub 官方文档，「Adding locally hosted code to GitHub」。"Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github （确认日期 2026-11-01）
[^history]: GitHub 官方文档，「Secret leakage risks」。"These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （确认日期 2026-11-01）
[^indexed]: GitHub 官方文档，「Secret leakage risks」。"Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （确认日期 2026-11-01）
[^paths]: GitHub 官方文档，「Secret leakage risks」。"Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks （确认日期 2026-11-01）
[^deny]: Claude Code 官方文档，「Configure permissions」。"To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions （确认日期 2026-11-01）
[^actions-secret]: Claude Code 官方文档，「Claude Code GitHub Actions」。"Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions （确认日期 2026-11-01）
[^push]: GitHub 官方文档，「Push protection」。"Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection （确认日期 2026-11-01）
[^rotate]: GitHub 官方文档，「Secret scanning」。"When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning （确认日期 2026-11-01）
[^revoke-first]: GitHub 官方文档，「Removing sensitive data from a repository」。"It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository （确认日期 2026-11-01）
[^responsible]: Claude Code 官方文档，「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （确认日期 2026-11-01）
[^outputs]: Anthropic 消费者条款（Consumer Terms of Service）。"Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms （确认日期 2026-11-01）
[^training]: Claude Code 官方文档，「Data usage」。"We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage （确认日期 2026-11-01）
[^deps]: GitHub 官方文档，「Dependabot alerts」。"Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts （确认日期 2026-11-01）
[^gh-secrets]: GitHub 官方文档，「Secrets」。"GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets （确认日期 2026-11-01）
[^deny-limit]: Claude Code 官方文档，「Configure permissions」。"They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions （确认日期 2026-11-01）

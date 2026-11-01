# 第7章 部署——用 GitHub Pages 公开

> **一句话总结**：**GitHub Pages** 是一项免费服务，能把仓库里的网页文件原样放到互联网上，变成一个网站。免费账号必须是**公开仓库**才能用。
> 部署是会影响外部世界的行为，所以**用 Claude Code 的回退也无法撤销。** 能不能公开，要由人来确认再点按钮。

本章依据 2026年11月1日确认的 GitHub、Claude Code 官方文档写成。GitHub 界面以英文版为准来写。

## GitHub Pages 是什么

GitHub Pages 是一项静态网站托管服务：它接收仓库里的 HTML、CSS、JavaScript 文件，必要时先经过构建，再**发布成网站**。[^pages] 静态网站不需要根据每位访客变换内容的服务器，只是把固定的文件原样展示出来。像待办看板这样展示表格的页面，很适合用它。

就像第2章看到的，**免费账号只能在公开仓库里**使用 Pages。[^free] 而且 Pages 网站**会向互联网公开。** 即使套餐允许、仓库设成了私有，网站依然是公开的，所以敏感数据要在发布前删掉。[^public-site]

<Quiz id="ch707-pages" />

## 发布的两种方法

| 方法 | 什么时候用 |
|---|---|
| 从分支发布 | 不需要另外调整构建过程时（推荐） |
| 用 GitHub Actions 发布 | 想自己决定构建过程时 |

出处：GitHub 官方文档（只摘录了一部分）[^two-ways]

像待办看板这样直接展示文件的页面，**从分支发布**就够了。官方文档也建议，不需要调整构建过程时用这个方法。[^two-ways] 选好分支和文件夹（仓库最外层 `/` 或 `/docs`）之后，每次往那个分支上传，那个文件夹里的内容就会被发布。[^branch-source]

GitHub 的入门教程用的是 Actions 方法。在设置的 Pages 里把 **Source** 改成 **GitHub Actions**，再放进部署设置文件，之后每次上传到 `main`，网站就会重新部署。[^actions-deploy] 网址的样子是 `https://我的ID.github.io/仓库名/`。

<Quiz id="ch707-ways" />

## 限额与禁止事项

虽然免费，但有不能用的场合，也有限额。

| 类别 | 内容 |
|---|---|
| 禁止 | 经营商业、网店、商业服务（SaaS） |
| 不要用于 | 传输密码、银行卡号的页面 |
| 大小 | 已发布的网站不超过 1GB |
| 时间 | 部署超过10分钟就失败 |
| 带宽 | 每月 100GB（宽松的限额） |

出处：GitHub 官方文档（只摘录了一部分）[^business][^sensitive][^size][^timeout][^bandwidth]

**访客的 IP 地址会被记录。** 只要有人访问 Pages 网站，无论是否登录，出于安全目的，访客的 IP 地址都会被记录并保存。[^ip] 如果你想在自己的页面上写"我们什么都不收集"，请把这一点也一并写上。

**模仿真实服务做的练习网站**有条件。为了学习而照着做本身不被禁止，但代码必须自己写，不能收集用户数据，并且要挂上**醒目的声明**，说明这是与原网站无关的教学用途。[^clone-site]

<Quiz id="ch707-limits" />

## 部署无法用回退撤销

你在第3阶段学到的 Claude Code 回退（检查点），是**会话内部的快速恢复工具**。永久的记录由 Git 负责。[^checkpoint] 而像数据库、外部服务、**部署**这样会影响外部系统的行为，检查点是撤销不了的。[^remote]

所以部署之前，要由人来确认。官方文档也写明，检查建议的命令是否安全、**批准之前要先审阅，这是用户的责任**。[^responsible]

部署前，请问问自己这些问题。

- 第5章的检查环节通过了吗？
- 第6章的审阅做完、PR 合并了吗？
- 公开仓库和页面里，没有真实姓名、联系方式、密码吧？（第9章）

如果传上去的是敏感内容，光是撤回还不够。因为它会留在公开仓库的 Git 记录里。请按[第9章](09-safety.md)的顺序（先作废、更换）来处理。

<Quiz id="ch707-undo" />

## 亲自动手试试

1. 先用[第9章的公开前检查表](09-safety.md)确认密钥和个人信息。
2. 在 GitHub 上打开 `cafe-todo-board` 仓库的 **Settings → Pages**。
3. 在「Build and deployment」的 **Source** 里选 **Deploy from a branch**，在 **Branch** 里选 `main` 分支和 `/`（最外层）文件夹。[^quickstart]
4. 确认仓库最外层有 `index.html`。GitHub Pages 会在发布文件夹的最外层寻找这个文件。[^entry] 然后打开 `https://我的ID.github.io/cafe-todo-board/`。上传之后，最长可能要10分钟左右才会生效。[^quickstart] 看到待办看板就成功了。
5. 也用手机打开看看。
6. 想一想，要不要在页面下方加上这样的声明："这是为练习做的页面，不收集访问信息（GitHub Pages 出于安全目的会记录访客 IP）"。

**连续任务**：第8章要把"过期的待办标成红色"这样的改进写成议题，再多走一圈。

## 小结

- GitHub Pages 把仓库里的网页文件发布成网站。免费账号只能用公开仓库，网站总是公开的。
- 不需要调整构建时，就从分支发布。
- 不要用于经营商业、网店、输入密码。网站 1GB，部署 10分钟，带宽每月 100GB（宽松的限额）。访客 IP 会被记录。
- 部署无法用回退撤销。确认、审阅、公开前检查都做完，再由人来点。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| GitHub Pages | GitHub Pages | 把仓库文件发布成免费网站的服务 |
| Static site | 静态网站 | 把固定的文件原样展示出来的网站 |
| Hosting | 托管 | 把网站放在互联网上 |
| Bandwidth | 带宽 | 发送给访客的数据量 |

<ChapterDone :chapter="707" />

下一章：[第8章. 运营与改进](08-operate.md)

[^pages]: GitHub 官方文档，「What is GitHub Pages?」。"GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （确认日期 2026-11-01）
[^free]: GitHub 官方文档，「What is GitHub Pages?」。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （确认日期 2026-11-01）
[^public-site]: GitHub 官方文档，「Configuring a publishing source for your GitHub Pages site」。"GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （确认日期 2026-11-01）
[^two-ways]: GitHub 官方文档，「Configuring a publishing source for your GitHub Pages site」。"You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （确认日期 2026-11-01）
[^branch-source]: GitHub 官方文档，「Configuring a publishing source for your GitHub Pages site」。"Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （确认日期 2026-11-01）
[^actions-deploy]: GitHub 官方文档，「Deploying your website automatically」。"Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically （确认日期 2026-11-01）
[^business]: GitHub 官方文档，「GitHub Pages limits」。"GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^sensitive]: GitHub 官方文档，「GitHub Pages limits」。"GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^size]: GitHub 官方文档，「GitHub Pages limits」。"Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^timeout]: GitHub 官方文档，「GitHub Pages limits」。"GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^bandwidth]: GitHub 官方文档，「GitHub Pages limits」。"GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^ip]: GitHub 官方文档，「What is GitHub Pages?」。"When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （确认日期 2026-11-01）
[^clone-site]: GitHub 官方文档，「GitHub Pages limits」。"Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （确认日期 2026-11-01）
[^checkpoint]: Claude Code 官方文档，「Checkpointing」。"Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing （确认日期 2026-11-01）
[^remote]: Claude Code 官方文档，「How Claude Code works」。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-01）
[^responsible]: Claude Code 官方文档，「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （确认日期 2026-11-01）
[^quickstart]: GitHub 官方文档，「Quickstart for GitHub Pages」。"Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart （确认日期 2026-11-01）
[^entry]: GitHub 官方文档，「Creating a GitHub Pages site」。"GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site （确认日期 2026-11-01）

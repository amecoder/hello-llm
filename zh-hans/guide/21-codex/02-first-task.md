# 第2章 在 ChatGPT 应用里开始使用 Codex — 打开文件夹，交出第一次整理

> **一句话总结**：安装 ChatGPT 桌面应用，在左上角选择 **Codex**，再用输入框上方的 **Choose project** 打开 `정리도구` 文件夹。
> 然后用和 Claude Code 第2章一样的请求让它整理会议备忘，并把结果和原件对照。

这一章依据 2026年11月1日确认的 Codex 官方文档和 macOS 版 ChatGPT 桌面应用界面编写。本指南的截图是**英语**界面。如果你的界面是中文，请找同一位置的按钮。

## 安装并登录

1. 在 [chatgpt.com/download](https://chatgpt.com/download/) 下载适合我电脑的 ChatGPT 应用并安装。Linux 请按官方文档的单独说明操作。[^install]
2. 打开应用，用 ChatGPT 账号登录。[^signin]

如果在第2阶段用过 ChatGPT，用同一个账号进入就行。账号和套餐在[第2阶段 ChatGPT 第1章](../11-chatgpt/01-getting-started.md)里讲过。

<Quiz id="ch502-install" />

## 选择 Codex 并打开文件夹

点应用**左上角的名称标签**，可以在 ChatGPT 和 Codex 之间选择。Chat 和 Work，要先选 ChatGPT，再用输入框上方的开关切换。[^toggle] 官方文档也说，需要开发工具的事，请在这个菜单里选择 **Codex**。[^select] 选了 Codex 后，中间会出现 "What should we build?"（我们要做点什么？）。

输入框正上方有两个选项。

| 界面名称 | 作用 |
|---|---|
| Choose project | 选择要工作的文件夹（项目） |
| This computer | 选择在哪里工作。我的电脑或 Cloud |

出处：本指南的界面确认（2026-11-01）

![Codex 首页：中间是 "What should we build in 정리도구?"，输入框上方是项目「정리도구」和「This computer」，输入框下方是权限「Ask for approval」和模型名称](../../../guide/21-codex/assets/shot-01-home.png)

上面的界面，是把 `정리도구` 文件夹作为项目打开的状态。输入框上方能看到选好的文件夹（`정리도구`）和工作的位置（This computer），输入框下方能看到权限（Ask for approval）和模型名称。左侧的对话列表和用量提示，已经从截图里裁掉了。

点 **Choose project**，选择 `정리도구` 文件夹（如果跟着 Claude Code 指南做过，就是 `~/hello-ai-연습/정리도구`）。Codex 可以读取并修改所选文件夹里的文件。[^folder] 也可以从菜单栏的「File → Open Folder…」打开。

工作的位置保持 **This computer**（我的电脑）不变。Cloud 是给连接了 GitHub 仓库的人用的，我电脑里的文件不会传到云端。[^cloud-files]

也请确认文件夹是不是 **Git 仓库**（留存改动记录的装置）。Codex 里查看改动内容的窗口，只在 Git 仓库里才能打开。如果不是 Git，应用会问是否要建一个。[^review-git] 如果跟着 Claude Code 第3章做过，那它已经是 Git 仓库了。如果是用练习资料重新开始的，那么**应用问是否创建仓库时**照着做就行。[^review-git] 虽然也可以用对话拜托 Codex，但装 Git 记录的 `.git` 文件夹是受保护文件夹（[第4章](04-permissions-undo.md)），可能会询问许可或被阻止。

<Quiz id="ch502-open" />

## 交出第一件事

发送一个和 Claude Code 第2章相似的请求。这次没有另外说格式。因为文件夹里已经有模板（`templates/`）了。

```
把 inbox/회의-2026-10-27-주간회의.txt 这份备忘整理成会议纪要，保存为 notes/ 文件夹里的新文件。
```

在本指南里实际运行后，Codex 是这样工作的。这次运行，是在终端（[第7章](07-terminal.md)）里运行同一个 Codex。官方文档说明，应用也会在所选文件夹里自动查找 `AGENTS.md` 和技能。[^discovery] 不过，本指南没有在应用界面里亲自确认过同样的结果。

1. 在文件夹里查找了规则文件（`AGENTS.md`）和模板。规则文件还没有，所以**只读了模板。**
2. 按模板的栏顺序，填入了已决定的 2 项、待办事项 5 项、下次要讨论的事、下次会议。
3. 备忘里没有的期限，保留为 `(备忘中没有)`。这是模板说明里写的规则。
4. 保存之后，自己检查了栏顺序和日期·星期。

成果：[第2章 会议纪要](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

**请把结果和原件对照。** 逐个确认下面的问题。

- 5 项待办事项都搬过来了吗？负责人和备忘一致吗？
- 有没有编造备忘里没有的期限？
- 日期对吗？

这次的结果里，日期很显眼。备忘里写的是 `10/27(월)`（周一），而会议纪要里变成了 `10/27(화)`（周二）。练习备忘里的星期是为了故事编的，和 2026年的日历不一样。Codex 按日历改了过来，并且**自己在回答里和文件内的备注中说明了改过。** 如果不喜欢这样的判断，再请它“星期照备忘里写的原样用”就行。

即使是同一个请求，结果的样子每次运行也会略有不同。官方文档也说，看起来很像样的结果也可能有遗漏或错误，所以重要的部分在使用前要确认。[^review]

<Quiz id="ch502-first" />

## 亲手试一试

1. 安装 ChatGPT 应用并登录。
2. 在左上角选择 **Codex**，用 **Choose project** 打开 `정리도구` 文件夹。
3. 用上面的请求让它整理会议备忘。
4. 把待办事项数量·负责人·期限·日期和原始备忘对照。

**连续任务**：在第3章里，我们把 Claude Code 的规则文件 `CLAUDE.md`，搬成 Codex 读取的 `AGENTS.md`。

## 小结

- 在应用左上角选择 Codex，用输入框上方的 Choose project 打开文件夹。
- 工作位置保持 This computer。我的文件不会传到 Cloud。
- 查看改动内容只有在 Git 仓库里才行。先把文件夹做成 Git 仓库。
- 结果要和原件对照。Codex 自己改过的部分（这次是星期）尤其要确认。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Project | 项目 | Codex 工作的文件夹 |
| This computer | 这台电脑 | 在我的电脑上工作 |
| Cloud | 云端 | 在互联网另一端的工作空间里工作 |
| Git | Git | 留存文件改动记录的装置 |

<ChapterDone :chapter="502" />

下一章：[第3章. 规则文件 AGENTS.md](03-agents-md.md)

[^install]: Codex 官方文档，《ChatGPT desktop app》。"**Install the ChatGPT desktop app.** [Download ChatGPT](https://chatgpt.com/download/) for macOS or Windows, or follow the [Linux installation guide](https://learn.chatgpt.com/docs/linux/linux-app)." https://learn.chatgpt.com/docs/app（确认日期 2026-11-01）
[^signin]: Codex 官方文档，《Quickstart》。"Open the app, then sign in with your ChatGPT account." https://learn.chatgpt.com/docs/quickstart（确认日期 2026-11-01）
[^select]: Codex 官方文档，《Quickstart》。"For software development with codebase context and developer tools, select **Codex** from the ChatGPT dropdown." https://learn.chatgpt.com/docs/quickstart（确认日期 2026-11-01）
[^folder]: Codex 官方文档，《Quickstart》。"Start a chat, create a project, or open a folder. ChatGPT can read and modify files in the folder you choose." https://learn.chatgpt.com/docs/quickstart（确认日期 2026-11-01）
[^cloud-files]: Codex 官方文档，《Codex environments》。"Use **Work in** to choose **This computer** or **Cloud**." / "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes（确认日期 2026-11-01）
[^review-git]: Codex 官方文档，《Code review》。"The review pane requires a project inside a Git repository. If your project isn't a Git repository yet, the app prompts you to create one." https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^review]: Codex 官方文档，《Use ChatGPT》。"A polished response can still be incomplete or wrong, so review the details that matter before you use or share it." https://learn.chatgpt.com/docs/use-chatgpt（确认日期 2026-11-01）
[^discovery]: Codex 官方文档，《Projects and chats》。"New chats start in the primary folder. Codex also uses that folder as the default for Git operations and automatic discovery of `AGENTS.md`, skills, and `config.toml`." https://learn.chatgpt.com/docs/projects（确认日期 2026-11-01）
[^toggle]: Codex 官方文档，《ChatGPT desktop app》。"Choose ChatGPT or Codex. In ChatGPT, use the toggle above the composer to select Chat or Work. In Codex, start with New chat." https://learn.chatgpt.com/docs/app（确认日期 2026-11-01）

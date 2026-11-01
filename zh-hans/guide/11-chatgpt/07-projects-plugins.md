# 第7章 项目、插件与 Work——把经常做的事归到一起

> **一句话总结**：做同一件事用的对话、文件、指令，用**项目**归在一起；想连接其他服务，或者加上固定的工作方式，就用
> **插件**。想把一件长任务交出去、拿到完整的成果，就把上方切换成 **Work**。

界面以 2026 年 10 月的网页版（Plus 套餐）为准。免费套餐或手机应用的菜单位置可能略有不同。

![登录后的首页。可以看到侧边菜单的「插件」和「项目」区域（「公司周报」「英语学习」），以及屏幕上方中间的「Chat」/「Work」切换按钮](../../../guide/11-chatgpt/assets/shot-01-home-projects.png)

对话标题和账号名称是改成示例的画面。本章要讲的地方有：① 侧边菜单的「插件」，② 「项目」区域，③ 上方的「Chat」/「Work」切换。

## 项目——把对话、文件、指令放进一个文件夹

**项目**（project）是把和某一件事有关的对话、参考文件、指令集中放在一处的文件夹。
比如，在「公司周报」项目里放进汇报模板文件和"表格分三栏"这样的指令。这样，在里面打开的每个对话，一开始就知道这些文件和指令。不用在每个对话里重复同样的说明。

### 创建和添加内容的方法

1. 把鼠标放在侧边菜单「项目」区域的标题上，点出现的 **+ 按钮（「添加新项目」）**，在「创建项目」窗口里取个名字。[^projects]
2. 点项目界面右上角的 •••（「项目操作」）→「项目设置」，写下只在这个项目里遵守的**指令**。参考文件通过「文件」上传。[^projects]
3. 已有的对话用「移到项目」放进去，用「从项目中移除」拿出来。[^projects]

![「创建项目」窗口。有「项目名称」栏（示例文字「哥本哈根旅行」）、"项目把聊天、文件和自定义指令集中放在一处"的说明、左下角的「默认记忆」、右下角的「创建项目」按钮](../../../guide/11-chatgpt/assets/shot-16-new-project-marked.png)

「创建项目」窗口：① 写项目名称，需要的话 ② 修改「默认记忆」，③ 点「创建项目」。

创建后会打开项目界面。② 输入框（「示例项目的新聊天」）下面有 ③ 「文件」「插件」按钮，再下面的 ④ 「聊天」「来源」标签页里集中了这个项目的对话和资料。指令要通过 ① 右上角的 ••• 打开。

![新建的「示例项目」界面。标题右边有「分享」和 ••• 按钮，输入框下面有「文件」「插件」，再下面是「聊天」「来源」标签页和"还没有聊天"的提示](../../../guide/11-chatgpt/assets/shot-17-project-home-marked.png)

在 ••• →「项目设置」窗口里，可以设置 ① 指令、② 记忆、③ 资料库访问权限，还可以用 ④ 「删除项目」来删掉项目。

![••• →「项目设置」窗口。有「项目名称」、「指令」输入栏、「记忆——默认（此项目和外部聊天可以互相访问记忆）」、「资料库访问权限——已启用」、红色的「删除项目」按钮](../../../guide/11-chatgpt/assets/shot-18-project-settings-marked.png)

*对话标题和账号名称是改成示例的画面，模型名称的位置已抹掉。「示例项目」在截图后已删除。*

> **删除项目时**，确认窗口里会写"此项目和项目中包含的所有聊天将在 Chat 和 Work 中被永久删除"。保存在资料库里的文件不会被删除。要保留的对话，请在删除之前移到别处（2026-10-23 网页界面确认）。

### 项目指令优先

[第5章](05-memory.md)的自定义指令适用于所有对话。**项目指令只在该项目里**适用，而且**优先于**自定义指令。[^projects]
比如，平时设置成用敬语回答，而只在「英语学习」项目里规定"只用英语回答"。

### 各套餐的限额

项目可以随意创建，没有数量限制。可以放进去的文件数量因套餐而异，一次能上传的文件最多 10 个。[^projects]

| 套餐 | 每个项目的文件数 | 分享时可以一起使用的人数 |
|---|---|---|
| Free | 5 个 | 5 人 |
| Go · Plus | 25 个 | 10 人 |
| Pro | 40 个 | 100 人 |

Business·Enterprise·Edu 每个项目也是 40 个文件。[^projects]
把项目和别人**分享**后，记忆会自动变成「项目专用记忆」。一旦变了，就不能再恢复成「默认记忆」。[^projects]
另外，放进项目里的 PDF 可能会在没有图片和图表的情况下被读取。图片重要的 PDF，请直接附加到聊天里（[第4章](04-files-images.md)）。[^files]

<Quiz id="ch107-projects" />

## 把要反复使用的模板放进项目

在[第1阶段第8章](../00-common/08-meta-prompting.md)里，我们学过怎样把效果好的请求做成只换空格就能重复使用的**模板**。
项目是存放这种模板的好地方。请把模板放进项目指令里。这样就不用在每个对话里粘贴模板了。

```
在这个项目的对话里，请把我发来的工作笔记整理成周报。
- 做成"已完成 / 进行中 / 下周计划"三栏的表格
- 每个事项写一行
- 笔记里没有的内容不要编造，请标注 [需要确认]
```

这样设置好之后，在项目里的新对话中，只要粘贴这周的笔记就可以了。

<Quiz id="ch107-template" />

## 插件——添加其他服务和工作方式

**插件**（plugin）是给 ChatGPT 添加功能的一个包。插件由**技能**（skill，写明固定工作方式的指令）、已连接的应用、应用模板和扩展组成。[^plugins]
2026-07-09，原来的「应用目录」改成了**插件目录**。之前连接过的应用会保持不变。[^rn]

- 在侧边菜单「插件」里打开插件目录，看一看。所有套餐都能看到目录。[^plugins]
- 有中意的插件，就点「安装插件」。如果需要其他服务的账号，就点「连接」。[^plugins]

![打开侧边菜单「插件」的界面。上方有「插件」「技能」标签页和右边的「添加」按钮，中间有「搜索插件」栏、「公开」「个人」分类，以及「热门」和「新鲜值得关注的插件」列表，每一项都用 + 按钮连接](../../../guide/11-chatgpt/assets/shot-11-plugins-marked.png)

*对话标题和账号名称是改成示例的画面。* ① 点侧边菜单「插件」，就会出现 ② 「插件」「技能」标签页、③ 「添加」按钮、④ 「搜索插件」栏、⑤ 「公开」「个人」分类、⑥ 热门列表。连接要用每一项右边的 ⑦ + 按钮。

使用方法有四种。[^plugins]

| 方法 | 例子 |
|---|---|
| 直接提问 | 如果相关，ChatGPT 会自己使用插件 |
| 在 `@` 后面写名字 | `@PDF 只把这份合同里的日期提取出来` |
| 在 + 按钮里输入名字 | 从 + 菜单下方的插件列表里选择 |
| 点输入框的「Plugins」 | 从已安装的插件里选择 |

连接其他服务（邮件、存储空间等）后，ChatGPT 就能读取其中的内容。连接之前，请确认会交换哪些信息（[第8章](08-privacy.md)）。

Free·Go 套餐也能看到目录（插件列表界面）和推荐。但是不能使用插件的**扩展**（extension，插件里包含的附加运行功能）。[^troubleshoot]

<Quiz id="ch107-plugins" />

## 设置已连接应用的权限

连接 Gmail、Google Drive 这样的应用后，ChatGPT 可能只做**读取**。也可能做发送邮件、修改文件这样的**更改**。哪些事不用询问就可以做，在设置 →「插件」的「默认权限」里决定。[^permissions][^screen-plugin]

界面上有这样的选项。

- 「始终询问」：读取时、更改时，都先询问。
- 「允许只读工具」：读取不用询问，更改之前会询问。
- 「允许低风险工具」：低风险的事自己处理，敏感的事可能会被拒绝。如果在个人账号里没有改过设置，一般这是默认值。如果有公司政策，则以公司政策为先。[^health]

帮助文档里还有一个不用询问就全部执行的「允许所有操作」（Allow all actions）。帮助文档自己也写明，这个选项**"风险会升高"**。[^permissions] 2026 年 10 月 24 日，本指南的界面上只看到了上面三个。建议一开始设置成「始终询问」或「允许只读工具」，熟悉之后再放宽（这是本指南的建议）。

- **请读一读审批卡片再点。** 审批卡片（approval，更改之前征求许可的框）。在发送邮件、删除文件这样的更改动作之前，会弹出 ChatGPT 问"可以这样做吗？"的框。点之前请先问自己：是哪个应用？是哪个账号？它要做什么？[^permissions]
- **请用有资料的账号去连接。** 如果连接的是个人 Google 账号，只存在于公司账号里的文件就看不到。即使连接了，也不能看到超出那个账号本来能打开的内容。[^accounts]
- **已连接却没被使用时，** 请在新聊天里用 `@应用名称` 具体地吩咐它。因为即使显示「已连接」，在当前对话或当前设备上也可能用不了。[^troubleshoot]
- **断开连接后也有留下来的东西。** 在设置 →「插件」里选择应用并断开连接，只是以后读不了那个应用了。已经进入对话、文件、记忆里的内容不会被删除（[第5章](05-memory.md#删除记忆的方法)）。允许用于训练的开关也保持原样。[^accounts]
- 应用权限和允许用于训练这样的数据设置是**分开**运作的。所以收窄了权限，训练设置也不会变（[第8章](08-privacy.md#不让对话用于训练)）。[^permissions]

<Quiz id="ch107-permissions" />

## Chat 和 Work 的区别

2026-07-09 **ChatGPT Work** 推出之后，屏幕上方分成了「Chat」/「Work」。[^rn][^work]

| | Chat | Work |
|---|---|---|
| 做什么 | 一问一答地对话 | 接手需要经过多个步骤的长任务，一直做到底 |
| 成果 | 回答的文字 | 文档、表格、演示文稿、报告、Sites（简单的网站）这样的成品 |
| 例子 | "把会议记录总结成三行" | "用这个季度的销售文件做 10 页演示文稿" |

- 网页和手机上的 Work，**除 Free·Go 以外的付费套餐**可以使用。Free·Go 只能在桌面应用里有限地使用。[^rn][^pricing]
- 在 Work 里可以**预约**任务。可以只运行一次，也可以按重复的日程，或者在出现某个条件时运行。预约在侧边菜单「预约」里管理。[^work][^screen]
- 想在项目里使用 Work，就点 + 按钮 →「在项目中开始 Work」。[^screen]
- **用 Chat 来想，用 Work 来做。** 在同一个项目里，Chat 和 Work 共用同样的资料。所以可以在 Chat 里一边提问一边打磨结构，准备好开始做的时候切换到 Work，也不用从头再说明一遍。[^academy-content]
- Sites 在 2026-07-09 作为公开测试版推出，Free·Go 不能使用。[^rn]
- 电脑应用（macOS·Windows）里有**应用内浏览器**。在 Work、Codex 对话中，ChatGPT 可以用这个浏览器直接打开网站来工作。需要登录的话，**密码只能输入在那个浏览器界面里，绝对不要写在对话框里。** 网站上写的内容，要当作不可信的内容来对待。[^browser] 即使网站里藏着的指令要求 ChatGPT 把我的信息交出去，那也不是我的许可。[^sitetools]

![把上方切换成「Work」的界面。「要做什么任务？」下面是输入框「用 ChatGPT 开始 Work」，以及「选择项目」「文件」「插件」「打开桌面应用」按钮](../../../guide/11-chatgpt/assets/shot-12-work-marked.png)

① 把上方切换成「Work」，就会出现 ② 「用 ChatGPT 开始 Work」输入框，以及 ③ 「选择项目」「文件」「插件」、④ 「打开桌面应用」按钮。

*对话标题和账号名称是改成示例的画面，模型名称的位置已抹掉。实际界面里，这下面还会出现「看看 Work 能做什么」的推荐卡片，因为每个账号内容不同，所以已裁掉。*

<Quiz id="ch107-work" />

## 已经结束的功能——定制 GPT 和智能体模式

以前的指南或视频里常见的功能中，有两个已经结束或即将结束。

**定制 GPT**（custom GPTs，放入指令和文件做成的我自己的 ChatGPT）**预计在 2026-12-11 结束**。之后会转移到插件。获得批准的 Enterprise 可以宽限到 2027-02-11。即使结束，和 GPT 的对话记录也会保留。[^gpts]
个人套餐（Free·Go·Plus·Pro）**现在已经不能新建或发布 GPT 了。** 即使没有创建按钮，也不是出错。
另外，GPT 不使用我的记忆、自定义指令和过去的对话。如果是连接了外部服务的 GPT，我写的内容有一部分可能会传给那家公司。OpenAI 不会监督那家公司怎样处理信息。所以只使用可信的来源制作的 GPT。[^gpt-help]

如果你有自己做的 GPT，请在结束之前这样准备。

1. 把创建 GPT 时写的**指令文字复制**保存到记事本里，放进去的**参考文件**也另外保存在自己的电脑上。
2. 官方的迁移方法，请在帮助文档「Custom GPT retirement and migration FAQ」[^gpts]里确认。
3. 如果是我一个人用的 GPT，用保存下来的指令和文件建一个**项目**，也能差不多地使用（这是本指南的建议）。

<!-- 需要截图：定制 GPT 编辑界面中能看到指令和文件的部分 -->

**智能体模式**（agent mode，ChatGPT 自己处理多步骤工作的旧功能）**现在已经不能使用了。** 它的位置由 Work 取代。[^agent]
即使帮助文档下面还留着旧的使用方法，也不要照着做。

除此之外，视频和资料里能看到的 OpenAI 服务中，还有两个已经结束。

- **Sora**（生成视频的应用）：网页和应用已于 2026-04-26 终止。[^sora]
- **ChatGPT Atlas**（内置 ChatGPT 的网页浏览器）：已终止，不再更新。即使删除这个应用，**ChatGPT 订阅也不会被取消。**[^atlas]

<Quiz id="ch107-retired" />

## 再看看视频

这是公司自己制作的介绍视频。画面和功能名称可能与本章的说明不同。

> 下面的视频是**英语**的。在 YouTube 视频的设置（齿轮）→ 字幕 → **自动翻译 → 中文**里选择，就能看中文字幕。视频可以直接在本页面里播放。

**[Get started with ChatGPT Work](https://www.youtube.com/watch?v=GphgJjaKKhw)** · OpenAI · 适合想看看如何迈出把工作交给 Work 的第一步的人（2026 年 7 月，6 分钟）

<YouTube id="GphgJjaKKhw" title="Get started with ChatGPT Work" />

## 亲手试一试

1. 用「新项目」创建一个「周报」项目，把上面的模板放进项目指令里。
2. 在项目里打开一个新对话，随便写五行这周做过的事发过去。看看表格是不是按指令生成的。
3. 打开侧边菜单「插件」，看看有哪些插件，选一个，在 `@` 后面写上名字来调用它。
4. 如果是付费套餐，把上方切换成「Work」，让它把第 2 步的汇报做成一页文档。

**接续任务**（[筹备读书会](../00-common/practice-kit.md)）：上传之前，先打开 members.csv，看看里面有没有姓名、联系方式这样的个人信息。然后创建「读书会」项目，上传四个示例文件（memo-next-month.txt、minutes-last-meeting.txt、members.csv、fees.csv），并把第5章的一行指令放进项目指令里。在项目里的新对话中，只发一句"帮我写一份 11 月通知的草稿"，看看备忘录和会议记录的内容有没有被用进去。

## 小结

- 项目是把对话、文件、指令归在一起的文件夹。项目指令在项目里优先于自定义指令。
- 每个项目的文件数：Free 5 个，Go·Plus 25 个，Pro 40 个。分享之后，记忆会固定成「项目专用记忆」。
- 要反复使用的模板，放进项目指令里会很方便。
- 插件在侧边菜单「插件」里找，通过提问、`@`、+ 按钮、「Plugins」来使用。
- Chat 是对话，Work 是长任务和完整的成果。网页和手机上的 Work，除 Free·Go 以外的付费套餐可以使用。
- 已连接应用的默认权限在设置 →「插件」里选择。审批卡片要读明白应用、账号和要做的事再点；断开连接后，已经进入的内容仍然保留。
- 定制 GPT 预计在 2026-12-11 结束，所以要事先保存指令和文件。个人套餐现在已经不能新建 GPT。智能体模式、Sora、Atlas 已经结束。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Project | 项目 | 把一件事的对话、文件、指令集中放在一起的文件夹 |
| Plugin | 插件 | 给 ChatGPT 添加功能或连接其他服务的包 |
| Skill | 技能 | 写明固定工作方式的指令，是插件的一部分 |
| Plugin Directory | 插件目录 | 查找和安装插件的列表界面 |
| ChatGPT Work | ChatGPT Work | 接手多步骤的长任务并做出完整成果的功能 |
| Custom GPTs | 定制 GPT | 用指令和文件做成的我自己的 ChatGPT，预计 2026-12-11 结束 |
| Agent Mode | 智能体模式 | 自己处理多步骤工作的旧功能，现在由 Work 取代 |
| Approval | 审批卡片 | 通过应用更改某些东西之前，ChatGPT 征求许可的框 |
| Permission | 权限 | 在已连接的应用里，ChatGPT 不用询问就可以做的事的范围 |

<ChapterDone :chapter="107" />

下一章：[第8章. 隐私与数据管理](08-privacy.md)

[^projects]: OpenAI 帮助文档，「Projects in ChatGPT」. https://help.openai.com/en/articles/10169521 (确认日期 2026-10-23)
[^files]: OpenAI 帮助文档，「Uploading files and audio to ChatGPT」. https://help.openai.com/en/articles/8555545 (确认日期 2026-10-23)
[^plugins]: OpenAI 帮助文档，「Plugins in ChatGPT」. https://help.openai.com/en/articles/20001256 (确认日期 2026-10-23)
[^work]: OpenAI 帮助文档，「ChatGPT Work and Codex」. https://help.openai.com/en/articles/20001275 (确认日期 2026-10-23)
[^rn]: OpenAI 帮助文档，「ChatGPT release notes」 2026-07-09 条目。 https://help.openai.com/en/articles/6825453 (确认日期 2026-10-23)
[^pricing]: OpenAI，「套餐与价格（플랜 및 가격）」。 https://openai.com/chatgpt/pricing (确认日期 2026-10-23)
[^gpts]: OpenAI 帮助文档，「Custom GPT retirement and migration FAQ」. https://help.openai.com/en/articles/20001519 (确认日期 2026-10-23)
[^agent]: OpenAI 帮助文档，「ChatGPT agent」. "ChatGPT agent is no longer available. Use ChatGPT Work" https://help.openai.com/en/articles/11752874 (确认日期 2026-10-23)
[^screen]: 在 ChatGPT 网页界面（Plus 套餐，韩语）中直接确认。侧边菜单和输入框的 + 菜单（确认日期 2026-10-23）
[^screen-plugin]: 在 ChatGPT 网页设置 →「插件（플러그인）」→「默认权限（기본 권한）」列表（Plus 套餐，韩语）中直接确认。 「항상 묻기 — 읽거나 변경하기 전에 묻기」「읽기 전용 도구 허용 — 묻지 않고 읽되, 변경 전에는 확인하기」「위험도가 낮은 도구 허용 — 위험도가 낮은 도구를 자동으로 승인하되, 민감한 도구는 거부될 수 있습니다」 (确认日期 2026-10-24)
[^permissions]: OpenAI 帮助文档，「Managing app permissions in ChatGPT」. "Always ask: ChatGPT asks before reading app information or making changes." / "Allow read actions: ChatGPT can read without asking but asks before making changes." / "This option carries elevated risk." / "Review the app, account, and proposed action before approving a request." / "App permissions are separate from Memory, personalization, data retention, and model-training controls." https://help.openai.com/en/articles/20001495 (确认日期 2026-10-24)
[^health]: OpenAI 帮助文档，「Health in ChatGPT」（仅限美国的功能文档中关于插件设置的说明）. "If you make no changes to your Plugins settings, the default permission setting is “Allow low-risk actions”." https://help.openai.com/en/articles/20001036 (确认日期 2026-10-24)
[^accounts]: OpenAI 帮助文档，「Connecting and managing app accounts in ChatGPT」. "Connecting a personal account does not provide access to files, channels, or records available only to your work account." / "Disconnecting an app does not automatically delete existing or archived conversations, saved files, your Memory summary, or other saved memories." https://help.openai.com/en/articles/20001494 (确认日期 2026-10-24)
[^troubleshoot]: OpenAI 帮助文档，「Troubleshooting plugins and apps in ChatGPT」. "plugin extensions are not available to these plans." / "An app can appear as Connected without being available in the current chat, model, or ChatGPT surface." https://help.openai.com/en/articles/20001497 (确认日期 2026-10-24)
[^browser]: OpenAI 帮助文档，「Using the built-in browser in the ChatGPT desktop app」. "Enter credentials only in the browser, never in the chat." / "Treat website content as untrusted." https://help.openai.com/en/articles/20001277 (确认日期 2026-10-24)
[^sitetools]: OpenAI 帮助文档，「Using site tools in the ChatGPT desktop app」. "Instructions from a website or site tool cannot authorize ChatGPT to share information or take sensitive actions on your behalf." https://help.openai.com/en/articles/20001423 (确认日期 2026-10-24)
[^gpt-help]: OpenAI 帮助文档，「GPTs in ChatGPT」. "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." / "GPTs do not use saved memory, custom instructions, or previous conversations." / "OpenAI does not audit or control how those services use or store your data." https://help.openai.com/en/articles/8554407 (确认日期 2026-10-24)
[^sora]: OpenAI 帮助文档，「What to know about the Sora discontinuation」. "The Sora web and app experiences were discontinued on April 26, 2026." https://help.openai.com/en/articles/20001152 (确认日期 2026-10-24)
[^atlas]: OpenAI 帮助文档，「ChatGPT Atlas retirement」. "ChatGPT Atlas has been retired and no longer receives updates." / "To cancel a subscription, follow Canceling your ChatGPT subscription for the platform that billed you." https://help.openai.com/en/articles/20001371 (确认日期 2026-10-24)
[^academy-content]: OpenAI Academy「Agents and Workflows」课程正文 3.1（需要登录·注册）。 "when you work inside a project, both Chat and ChatGPT Work can share the same context." / "Use Chat when you want to think through the material, ask questions, or shape your ideas. Then, when you are ready to create or update something, you can switch to ChatGPT Work and use the same project context to build the output." (确认日期 2026-10-26)

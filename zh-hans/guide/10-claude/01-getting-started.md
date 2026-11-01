# 第1章 开始使用——在哪里用、注册、套餐和使用额度

> **一句话总结**：Claude 可以在网页、电脑应用和手机应用上用同一个账号使用。注册需要邮箱（或 Google、Apple 账号）和手机短信验证。先免费用起来，只有在额度经常不够用时，再考虑付费套餐。

界面以 2026 年 10 月的网页版为准，图片是免费套餐的界面。手机应用和电脑应用的菜单位置可能略有不同。

## Claude 是什么，在哪里用

Claude（读作"克劳德"）是一家叫 Anthropic（读作"安索普"）的公司做的 **LLM**（大语言模型，见[第1阶段第1章](../00-common/01-what-is-llm.md)）。[^start]
第1阶段学过的提问方法，在 Claude 上同样适用。这一章只讲怎么进入 Claude 这项服务。

用的地方有三种。不管在哪里用，账号都是同一个。

| 使用的地方 | 打开方式 | 需要什么 |
|---|---|---|
| 网页 | 在浏览器里打开 claude.ai | 一个浏览器 |
| 电脑应用 | 在下载页面下载 | macOS 13 以上，Windows 10 以上 |
| 手机应用 | 在应用商店下载 | iOS 18 以上，Android 8.0 以上 |

来源：Anthropic 帮助文档[^start][^desktop][^ios][^android]

电脑应用在 Linux（一种电脑操作系统）上也能用，不过是**测试版**（Beta，正式发布前还在试用的阶段）。[^desktop]
如果你是第一次用，建议从网页开始。不用安装任何东西，最简单。

使用有两个条件。[^start]

- 你必须在**支持地区**（官方提供服务的国家）之内。韩国在支持地区名单里。[^where]
- 你必须**年满 18 周岁**。

下载手机应用时，请在应用商店搜索「Claude by Anthropic」。[^ios][^android]
iPhone 的 App Store 里还有一个面向公司的「Claude for Intune」。如果公司没有要求你用它，下载「Claude by Anthropic」就可以了。[^ios]
如果搜不到这个应用，可能是你所在的地区、设备或系统版本不被支持。[^android]
如果新功能只在你的应用里看不到，请在应用商店里手动更新一下应用。[^update]

第一次进去，可以这样问。

```
你能帮我做哪些事？请举五个上班族马上就能用上的例子。
```

<Quiz id="ch201-where" />

## 注册和登录

打开 claude.ai，输入你的邮箱地址，然后点「用邮箱继续（이메일로 계속하기）」。如果你有 Google 或 Apple 账号，也可以点「用 Google 继续（Google로 계속하기）」或「用 Apple 继续（Apple로 계속하기）」。[^signup][^screen-login]

![claude.ai 登录前的首页。有「用 Google 继续」「用 Apple 继续」按钮，「或」下面是邮箱输入框和「用邮箱继续」，最下面是「下载桌面应用」](../../../guide/10-claude/assets/shot-14-login.png)

**Claude 没有密码。** 你不能为 Claude 账号单独设置密码。[^login]
用邮箱登录时，你会收到一封标题为「登录 Claude.ai 的安全链接」（Secure link to log in to Claude.ai）的邮件。点邮件里的链接就能登录。[^login]
不用记密码，很方便。不过前提是，你**要能登录那个邮箱账号**。

有三点需要知道。[^login]

1. **在另一台设备上点链接，会出现一个验证码。** 比如你在电脑上请求登录，却在手机上打开了邮件。这时手机上会显示一个验证码。请把这个验证码输入到最初请求登录的那台电脑上。
2. **收不到邮件，就看看垃圾邮件箱。** 找一下来自 @mail.anthropic.com 的邮件。
3. **每台设备都用同一个邮箱登录。** 用平时用的那个邮箱登录，打开的才是同一个账号。

<Quiz id="ch201-login" />

## 手机短信验证

第一次注册时，需要进行**手机号验证**。输入支持地区的手机号后，会有一条 **6 位数字**的验证码通过短信发给你。[^phone]
这一步**不能跳过**。所有新用户都要经过这一步。[^phone]

<!-- 需要截图：手机号输入界面和「确认验证码」界面（网页） -->

输入之前，请先确认下面几点。[^phone]

- **只能用普通手机号。** 网络电话（VoIP）号码、Google Voice、用应用生成的号码、家里的座机（固定电话）都不行。
- **超过 5 分钟还没收到短信，** 就点「重试」。
- **一个号码最多可以验证 3 个账号。**
- **验证过的号码，之后不能更换。** 所以请用你会长期使用的自己的号码来验证。如果用的是临时借来的号码，之后就没有办法更换了。

<Quiz id="ch201-phone" />

## 一眼看懂套餐

Claude 也有从免费到公司专用的多种**套餐**（Plan，根据付费多少，可用的功能和用量不同的使用方式）。[^pricing]

| 套餐 | 适合谁 | 价格（每月，美元） |
|---|---|---|
| Free（免费） | 第一次试用的人 | $0 |
| Pro | 每天都用的人 | $20（按年付费时约每月 $17） |
| Max | 用得非常多的人 | 5x $100 · 20x $200 |
| Team · Enterprise | 以公司为单位使用的地方 | 另行报价 |

来源：Anthropic 价格页面、帮助文档[^pricing][^pro][^max]

这些价格**以美元计**，而且**不含税**。[^pricing] 在你所在的国家，价格可能会用当地货币显示，税率也因国家而异。[^pro]
在手机应用里付款，价格可能和网页不同。[^max] 在韩国看到的韩元价格，本指南没能确认。付款前，请直接到[价格页面](https://claude.com/pricing)确认。

### 各套餐有什么不同

比起数字，弄清楚**"到底哪里不一样"**，选起来会更容易。

| 不同之处 | 免费（Free） | 付费（Pro·Max） |
|---|---|---|
| **用量** | 基础 | Pro 是免费的 5 倍以上[^pricing] |
| **联网搜索、生成文件** | 可以[^pricing] | 可以 |
| **研究**（长篇调研报告） | 不可以 | 可以（[第6章](06-search.md)）[^pricing] |
| **大模型**（Opus） | 不能选 | 可以选（[第2章](02-screen-tour.md)）[^pricing] |
| **Cowork**（把整件事交给它做） | 不可以 | 可以（[第8章](08-cowork.md)）[^desktop] |

免费套餐里包含什么，可以在「设置（설정）」→「结算（결제）」里直接看到。

![「设置」→「结算」界面。红色编号标出：① 「免费方案 · 试用 Claude」，② 免费方案包含的功能列表（聊天、网页搜索功能、跨对话记忆、生成文件与运行代码、处理复杂任务的扩展思考等），③ 右上角的「升级方案」按钮](../../../guide/10-claude/assets/shot-09-settings-billing-marked.png)

这是免费套餐的网页界面。**红色编号对应下面列表里的同号内容。**

- ① 当前套餐：「免费方案」
- ② 免费方案包含的内容：在网页、iOS、Android、桌面端聊天，生成代码和数据可视化，写作和修改文章，网页搜索功能，跨对话记忆，生成文件和运行代码，桌面扩展程序，连接 Slack、Google Workspace，连接器（与其他服务相连的功能，[第7章](07-projects-tools.md)），处理复杂任务的扩展思考[^screen]
- ③ 「升级方案」：改成付费套餐的按钮（见下面的「改成付费前要知道的事」）

当你需要列表里没有的功能时，再考虑付费。这样就不会为用不上的功能花钱。

Max 的用量是 Pro 的 5 倍（5x）或 20 倍（20x）。它可以得到更长的回答，也可以抢先试用新功能。[^pricing]

付款周期也不同。Pro 可以在按月和按年里选一种。**Max 只能按月付费。**[^max]
除了按年付费的折扣，Pro 和 Max 没有长期适用的折扣价。只是偶尔会有限定时间的活动。[^pro]

<Quiz id="ch201-plans" />

## 使用额度——5 小时、每周、长度

Claude **没有"每天几次"这样固定的消息条数。** 能用多少，取决于对话的长度和复杂程度、你选的模型，以及用到的功能。[^pricing]
取而代之的是三种额度。

| 额度 | 含义 | 适用于谁 |
|---|---|---|
| **会话额度** | 每 5 小时重新补满的用量 | 所有套餐 |
| **每周额度** | 每一周重新补满的用量 | 付费套餐 |
| **长度额度** | 一个对话里能装下的量 | 所有套餐 |

来源：Anthropic 帮助文档[^start][^limits]

**会话额度和每周额度**像是衡量用量的"水桶"。每周额度会在每个账号固定的星期和时刻重新补满。[^pro]
在网页、电脑应用、手机应用上用掉的量，是**算在同一个桶里**的。换到手机上用，也不会多出新的额度。[^limits][^pricing]

额度快用完时，会出现「接近会话限制」或「接近每周限制」的警告。[^errors] 用到上限时，会告诉你什么时候可以再用。[^errors]
这时，等到那个时刻，或者升级套餐就可以了。[^limits] 付费套餐可以在设置的「用量」（Usage）界面，用进度条看到自己用了多少。[^best][^usage-name]

**长度额度**是 Claude 在一个对话里能处理的量。它和第1阶段学过的[上下文窗口](../00-common/01-what-is-llm.md#_3-一次能看的量有限——-上下文窗口)是同一回事。[^limits]
如果出现以「消息超出了此聊天的长度限制」开头的提示，请减少文件，或者开始一个新对话。[^errors]
对话变得非常长时，Claude 有时会自动总结前面的部分，再接着聊。这时你会看到「正在整理思路」的提示。[^limits]
这样的长对话会多消耗用量。话题变了的时候，开一个[新对话](../00-common/06-conversation.md#什么时候开始新对话)会更好。[^limits]

还有一些节省额度的小窍门。[^best]

- **把相关的问题合在一条消息里。** 分三次问，不如一次问完，用得更少。
- **发送前再读一遍。** 这样重新追问的次数会变少。
- **把常用的资料放进项目里**（[第7章](07-projects-tools.md)）。项目里的资料在重复使用时，消耗的额度更少。

比如，不要把问题分成三次单独发送，可以像这样合在一起。

```
请一次回答下面三件事。
1. 把这份会议记录总结成五行。
2. 用表格整理已经确定的事项和负责人。
3. 写一份发给参会人员的简短通知邮件草稿。
（粘贴会议记录）
```

::: details 收到的回答大概是这样（示例——点击展开）
这是本指南编写的示例。实际的回答会因服务和每次情况而不同。

> **1. 五行总结**
> - 下个月活动的日期定在○月○日。
> - 活动地点定为（会议记录里的地点）。
> - 预算与上次相同。
> - 确定了场地预订和通知撰写的负责人。
> - 下次会议定在○月○日召开。
>
> **2. 已确定事项和负责人**
>
> | 要做的事 | 负责人 |
> |---|---|
> | 预订场地 | （会议记录里的名字） |
> | 制作通知 | （会议记录里的名字） |
>
> **3. 通知邮件草稿**
> 标题：○月○日会议结果通知
> 您好。现将今天会议上确定的活动内容和分工整理后发给您。请在下次会议前完成各自负责的事项。

**检查一下有没有收到想要的结果**：三个回答都按编号给齐了吗？总结真的是五行吗？表格里的事项和负责人与会议记录一致吗？有没有编造会议记录里没有的内容？有没有给出可以直接发给参会人员的简短邮件草稿？

:::

<Quiz id="ch201-limits" />

## 改成付费前要知道的事

没必要一开始就付费。**先免费用，经常碰到额度上限时再升级**，是最稳妥的做法。

**在网页上订阅的方法**如下。[^signup]

1. 点左下角你的名字（或名字的首字母），选择「设置（설정）」。
2. 进入「结算（결제）」，点「升级方案」（上面结算图里的 ③）。[^screen][^billing-name]
3. 选择按月或按年的付款周期，填写付款信息后，点「订阅」。

![点击左下角的名字「김하나 · Free」后打开的账号菜单。最上面是邮箱，下面的 ① 「设置」，② 「语言」，③ 「获取帮助」，④ 「升级方案」，⑤ 「下载应用和扩展程序」都标有红色编号](../../../guide/10-claude/assets/shot-07-account-menu-marked.png)

名字和邮箱是改成示例的画面（免费套餐）。账号菜单里，除了 ① 「设置」，还能直接看到 ④ 「升级方案」。[^screen] 不管从哪边进入，付款前都请再读一遍价格和条件。

在手机应用里，点右上角的名字首字母，选择「升级到 Pro」。这会通过应用商店付款（应用内购买）来进行。[^ios-pro][^android-pro]

付款前，下面这些一定要知道。

- **订阅会自动续订。** 默认情况下，每个付款周期结束时都会自动续费。[^signup]
- **在哪里订阅，就在哪里取消。** 如果是在网页或电脑应用上订阅的，就点设置 →「结算」里的「取消」按钮。[^billing-name] 如果是在手机应用上订阅的，就进入应用里的名字首字母 →「账单」→「管理订阅」。这时的付款是由 Apple 或 Google 处理的。[^cancel]
- **请在扣款日的 24 小时前取消。** 这样才不会扣下一期的钱。取消会在当前付款周期结束时生效。[^cancel]
- **删除应用，订阅也不会停止。** 在手机上删掉应用，订阅不会自动取消。[^ios]
- **取消后，对话仍然保留。** 聊天、项目、文件都还在，周期结束后会变成免费套餐。[^pricing]
- **原则上不能退款。** 只有条款或当地法律规定的情况除外。[^pricing]
- **在网页上付款，只接受信用卡和借记卡。**[^billing]
- **扣款日不能自己修改。** 如果想改，需要先取消，再在想要的日子重新订阅。[^billing]
- **已经付款却显示免费时，不要再付一次。** 先看看是不是用了另一个邮箱登录。也要确认付款是不是失败了。[^billing]

收据可以在设置 →「结算」里看到，也会发到邮箱。在邮箱里搜索 "Your receipt from Anthropic" 就能找到。[^billing]

如果不确定哪个套餐适合自己，可以把自己的使用习惯告诉 Claude，问问它。不过，价格和条件请到价格页面确认，不要只听 AI 的回答（[第1阶段第9章](../00-common/09-safety.md)）。

```
我每天用 3~4 次 Claude，主要用来润色工作邮件和总结会议记录。
偶尔也会上传 PDF 文件让它总结。我想先免费用着，
请告诉我三个标准，让我能自己判断什么时候需要改成付费。
```

<Quiz id="ch201-billing" />

## 用不了的时候先试试这些

可能会出现没有回答、弹出错误提示，或者登录不了的情况。这时请按下面的顺序试试看。

1. **「由于意外的容量限制……」这样的提示不是故障。** 它的意思是人太多，比较拥挤。几分钟后再试一次。这种拥挤不会显示在服务状态页面上。[^errors]
2. **是不是真的出故障了，可以到 status.claude.com**（Anthropic 的服务状态页面）确认。[^errors]
3. **如果出现登录错误，** 请关掉 VPN（更改上网地址的程序）和浏览器扩展程序。清除浏览器的缓存和 Cookie（访问过的网站留下的临时记录）也是一个办法。[^errors]
4. **如果收不到登录邮件，** 请到垃圾邮件箱里找 @mail.anthropic.com。[^login]

如果还是不行，就去问客服。**没有电话支持，只能用文字**沟通。[^support]

- **如果已经登录：** 点左下角你的名字（或名字首字母）→「获取帮助」（上面账号菜单图里的 ③）。[^screen] 这会开始和 **Fin**（Anthropic 的 AI 客服机器人）对话。和 Fin 聊天不会减少使用额度。[^support]
- **如果根本登录不了：** 点帮助中心（support.claude.com）右下角的消息图标，选择「我无法登录」。[^support]
- **如果是付费（Pro·Max）：** Fin 解决不了的问题，会由人工支持团队接着处理。免费用户大多只能用到帮助文档和 Fin。[^support]
- **同一个问题不要再开新的咨询。** 在原来的对话里回复就行。回复会同时发到聊天窗口和账号邮箱，所以关掉窗口也没关系。[^support]

发送截图时，请注意不要露出其他个人信息。

<Quiz id="ch201-trouble" />

## 亲手试一试

1. 打开 claude.ai，用邮箱注册，再点登录邮件里的链接进入。收不到邮件，就看看垃圾邮件箱。
2. 完成手机短信验证。再确认一次这是不是你会长期使用的号码。
3. 问一句"你能帮我做哪些事？"
4. 在手机上安装「Claude by Anthropic」应用，用同一个邮箱登录，看看在电脑上聊过的对话是否出现了。

**接续任务**（[筹备读书会](../00-common/practice-kit.md)）：问它"我是社区读书会的总务。请帮我列一份筹备下个月聚会时要做的事的清单。"拿到的清单，等任务做完后，和自己实际做的事比较一下。

## 小结

- Claude 可以在网页（claude.ai）、电脑应用、手机应用上用同一个账号使用。年满 18 周岁，在支持地区（包括韩国）可以使用。
- 注册和登录用邮箱，或 Google、Apple 账号。没有密码，而是收到一封带登录链接的邮件。
- 第一次注册要经过手机短信验证。验证过的号码不能更换。
- 个人用的套餐是 Free、Pro、Max。价格以美元计、不含税，请到价格页面确认。
- 额度有三种：5 小时的会话额度、（付费的）每周额度、一个对话的长度额度。没有固定的消息条数。
- 订阅会自动续订。请在订阅的地方，于扣款日 24 小时前取消。删除应用，订阅也不会停止。
- 「容量限制」的提示是拥挤造成的。真正的故障请到 status.claude.com 查看。求助从账号菜单「获取帮助」里的 Fin 开始。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Supported Location | 支持地区 | 官方提供服务的国家和地区 |
| Beta | 测试版 | 正式发布前还在试用的阶段 |
| Plan | 套餐 | 根据付费多少，功能和用量不同的使用方式 |
| Subscription | 订阅 | 每月或每年自动扣款的使用合约 |
| Session Limit | 会话额度 | 每 5 小时重新补满的用量 |
| Weekly Limit | 每周额度 | 付费套餐里每一周重新补满的用量 |
| Length Limit | 长度额度 | 一个对话里能装下的量，与上下文窗口有关 |
| VoIP | 网络电话 | 通过互联网拨打的电话，不能用来做短信验证 |
| Fin | Fin（客服机器人） | Anthropic 客户支持的 AI 机器人 |

<ChapterDone :chapter="201" />

下一章：[第2章. 熟悉界面](02-screen-tour.md)

[^usage-name]: 韩语帮助文档里，有的地方写的是「사용」。
[^billing-name]: 界面上的名称是「结算（결제）」，但帮助文档里写的是「Billing」（账单）。
[^screen]: 在 Claude 网页界面（免费套餐，韩语）中直接确认。设置 →「结算（결제）」里的「免费方案 · 试用 Claude」列表和「升级方案」，账号菜单里的「设置」「语言」「获取帮助」「升级方案」。（确认日期 2026-10-26）
[^start]: Anthropic 帮助文档，「Get started with Claude」. "Claude is a large language model (LLM) built by Anthropic." / "Web: Visit claude.ai to chat with Claude in a web browser." / "You must be in one of our supported locations to access Claude." / "You must be at least 18 years old to use our services." / "there is a session-based usage limit that will reset every five hours." https://support.claude.com/en/articles/8114491 (确认日期 2026-10-26)
[^where]: Anthropic 帮助文档，「Where can I access Claude?」. 支持地区名单中包含 "South Korea"。 https://support.claude.com/en/articles/8461763 (确认日期 2026-10-26)
[^desktop]: Anthropic 帮助文档，「Install Claude Desktop」. "Claude Desktop is available on macOS, Windows, and Linux (beta)." / "macOS: macOS 13 (Ventura) or higher" / "Claude Cowork is available for all paid plans (Pro, Max, Team, Enterprise)" https://support.claude.com/en/articles/10065433 (确认日期 2026-10-26)
[^ios]: Anthropic 帮助文档，「Install Claude for iOS」. "You can install the Claude app onto your iOS device by navigating to the App Store and searching for “Claude by Anthropic”" / "If your organization hasn't asked you to use Claude for Intune, install Claude by Anthropic." / "We currently support iOS version 18.0 and above, and iPadOS 18.0 and above." / "your subscription will not be automatically canceled." https://support.claude.com/en/articles/9266462 (确认日期 2026-10-26)
[^android]: Anthropic 帮助文档，「Install Claude for Android」. "We currently support Android 8.0 Oreo and above." / "you may be located in an unsupported region, using an unsupported device, or using an unsupported version of Android." https://support.claude.com/en/articles/9612887 (确认日期 2026-10-26)
[^update]: Anthropic 帮助文档，「How to update Claude for iOS」. "you may need to update your mobile app manually" https://support.claude.com/en/articles/11825384 (确认日期 2026-10-26)
[^signup]: Anthropic 帮助文档，「How do I sign up for the Pro plan?」. "Enter your email address and click “Continue with email” or click “Continue with Google” if applicable." / "Navigate to Settings > Billing and click the “Upgrade plan” button." / "Choose between monthly and annual billing periods." / "your subscription will be set to automatically renew at the end of each billing period (monthly or annual) by default." https://support.claude.com/en/articles/8325609 (确认日期 2026-10-26)
[^login]: Anthropic 帮助文档，「Log in to your Claude account」. "you will see two different options for logging in to your Claude account." / "This will send you an email with the subject line “Secure link to log in to Claude.ai” and a login link." / "You should enter this code on the original device where you requested the login email to authenticate." / "It’s not possible to create a dedicated password for your Claude account at this time." / "enter the same email address you use to log in on your usual device." / "Check your spam and junk folders for emails from @mail.anthropic.com." https://support.claude.com/en/articles/13189465 (确认日期 2026-10-26)
[^phone]: Anthropic 帮助文档，「Verify your phone number」. "you’ll be asked to enter your phone number from a supported location to receive a verification code via text message." / "We’ll send a six-digit verification code to your phone number via text message." / "you cannot use VoIP numbers, Google Voice, phone numbers created using apps, landlines" / "We require phone verification for all new users, and there isn’t a way to skip this step." / "if it has been more than five minutes, click "Try again" to reset the modal" / "We only allow a maximum of three Claude accounts to be verified with the same phone number." / "There isn’t a way to change your phone number associated with your Claude account once it has been verified." https://support.claude.com/en/articles/8287232 (确认日期 2026-10-26)
[^pricing]: Anthropic 价格页面。 "Per month with annual subscription discount ( $200 billed up front). $20 if billed monthly." / "Prices shown don’t include applicable tax." / "Search the web, create files, and run code" / "Pro gives you at least 5x more usage per 5-hour session than Free." / "Higher output limits for all tasks" / "How much you can do depends on the length and complexity of your conversations, the model you choose, and the features you use, so there's no fixed message count." / "Your activity across Claude on web, desktop, mobile, and Claude Code all draws from the same pool." / "Canceling doesn't delete your data. Your chats, projects, and files stay with your account" / "For Pro and Max, your account moves to the Free plan once the period ends." / "Payments are generally non-refundable, except where our Consumer Terms of Service say otherwise or where local law requires it." 对比表中的 Research 行和 Opus 行：Free 没有，从 Pro 开始有。 https://claude.com/pricing (确认日期 2026-10-26)
[^pro]: Anthropic 帮助文档，「What is the Pro plan?」. "The Pro plan is available for $20 per month (US), with pricing in your local currency where supported." / "Annual subscriptions are billed once yearly at a discounted rate." / "We don’t offer standard discounted pricing for individual plans (Pro and Max)." / "Weekly limits reset at a fixed time each week that is assigned to your account." https://support.claude.com/en/articles/8325606 (确认日期 2026-10-26)
[^max]: Anthropic 帮助文档，「What is the Max plan?」. "Max 5x: $100 per month" / "These prices are for web subscriptions only. Mobile pricing may vary depending on your app platform." / "The Max plan is currently available as a monthly subscription only." https://support.claude.com/en/articles/11049741 (确认日期 2026-10-26)
[^limits]: Anthropic 帮助文档，「How do usage and length limits work?」. "Paid plans have two types of usage limits: a session limit that resets every five hours, and weekly limits that reset once every week." / "your usage of all different Claude product surfaces (claude.ai, Claude Code, Claude Desktop) counts towards the same usage limit." / "If you hit your session limit or weekly limit, you can wait for it to reset or upgrade your plan." / "Length limits relate to Claude's context window—the amount of information Claude can work with in a single chat." / "Claude summarizes earlier messages to continue the conversation seamlessly." / "Longer conversations that trigger automatic context management consume more of your usage limit." https://support.claude.com/en/articles/11647753 (确认日期 2026-10-26)
[^best]: Anthropic 帮助文档，「Usage limit best practices」. "you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." / "If you have multiple related tasks or questions, group them in a single message." / "Content in projects is cached and counts less against your limits when reused." https://support.claude.com/en/articles/9797557 (确认日期 2026-10-26)
[^errors]: Anthropic 帮助文档，「Troubleshoot Claude error messages」. "“Approaching session limit” or "Approaching weekly limit."" / "you’ll see an error message letting you know when you can use Claude again" / "Try attaching fewer or smaller files or starting a new conversation." / "Ensure you’re not using a VPN when accessing Claude." / "The system is functioning normally but managing high demand across all users." / "Capacity issues will not appear on our status page" / "To check for confirmed incidents, visit status.claude.com" https://support.claude.com/en/articles/12466728 (确认日期 2026-10-26)
[^ios-pro]: Anthropic 帮助文档，「How do I sign up for Claude Pro on the Claude app for iOS?」. "click on your initials in the upper right corner" / "From your settings page, click on “Upgrade to Pro” and follow the payment instructions to complete your in-app purchase." https://support.claude.com/en/articles/9266495 (确认日期 2026-10-26)
[^android-pro]: Anthropic 帮助文档，「How do I sign up for Claude Pro on Claude for Android?」. "To sign up for Claude Pro using the Claude app for Android, open the app on your device and click on your initials in the upper right corner." https://support.claude.com/en/articles/9612892 (确认日期 2026-10-26)
[^cancel]: Anthropic 帮助文档，「Cancel your Pro or Max subscription」. "Your cancellation will take effect at the end of your current billing period" / "cancel your subscription at least 24 hours before your next billing date." / "Navigate to Settings > Billing and click the “Cancel” button." / "Select “Manage subscription” and follow the prompts for cancellation." https://support.claude.com/en/articles/8325617 (确认日期 2026-10-26)
[^billing]: Anthropic 帮助文档，「Paid plan billing FAQs」. "For subscriptions purchased on the web, we only accept credit or debit cards." / "search by the subject line "Your receipt from Anthropic."" / "there isn't a direct way to change your subscription billing date." / "You've logged in with a different email." https://support.claude.com/en/articles/8325618 (确认日期 2026-10-26)
[^support]: Anthropic 帮助文档，「How to get support」. "Support is provided in writing through the support messenger and email. We don't offer phone support." / "Click your initials or name in the lower left corner and select “Get help” from the menu." / "Chatting with Fin will not impact Claude usage or spend limits." / "Further assistance from our Product Support team" / "Select "I can't login."" / "Opening a second request for the same problem creates a duplicate that has to be re-triaged" / "Replies are delivered to the messenger and to your account email, so you won't miss one." https://support.claude.com/en/articles/9015913 (确认日期 2026-10-26)
[^screen-login]: 在未登录的新浏览器窗口中直接打开 claude.ai/login 确认。按钮有「用 Google 继续」「用 Apple 继续」「用邮箱继续」。帮助文档里有一句话说登录方式只有邮箱和 Google 两种，但这个界面上还有 Apple 按钮（确认日期 2026-10-28，网页登录前界面）

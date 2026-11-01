# 第1章 开始使用——在哪里用、登录、套餐和使用额度

> **一句话总结**：Gemini 用一个 Google 账号，就可以在网页、手机应用和电脑应用上使用。不需要另外注册，
> 用你已经在用的 Google 账号登录就行。先免费用起来，只有额度经常不够时，再考虑付费套餐。

界面以 2026 年 10 月的网页版为准，图片是付费套餐（Google AI Pro）的韩语界面。免费账号或手机应用的菜单可能略有不同。

## Gemini 是什么，在哪里用

Gemini 是 Google 做的 AI 服务。它靠第1阶段学过的 **LLM**（大语言模型，[第1阶段第1章](../00-common/01-what-is-llm.md)）运转。
第1阶段学到的提问方法，用在 Gemini 上也完全适用。这一章只讲怎么进入 Gemini 这个服务。

可以使用的地方有网页、手机应用和电脑应用。无论在哪里用，都用同一个 Google 账号进入。

| 使用的地方 | 打开方式 | 需要什么 |
|---|---|---|
| 网页 | 在浏览器里打开 gemini.google.com | Chrome·Safari·Firefox·Opera·Edge |
| 安卓应用 | 从 Google Play 下载 | Android 9 以上，RAM 2GB 以上 |
| Mac 应用 | 在 gemini.google/mac 下载 | macOS 15 以上，Apple 芯片 |
| Windows 应用 | 在 gemini.google/desktop 下载 | Windows 10 以上 |

出处：Google 帮助文档[^start][^mobile][^mac][^windows]

iPhone 和 iPad 从 App Store 下载 Gemini 应用就行。[^mobile]
如果是第一次，建议从网页开始。不需要安装任何东西，最简单。

使用有两个条件。

- 必须在**支持的国家**。韩国在网页版和手机应用的支持国家名单里，也支持韩语。[^where][^mobile]
- 必须**年满 13 周岁**（个人账号标准，各国的标准年龄可能不同）。公司账号要年满 18 周岁。[^signin]

不过，付费套餐和部分功能（个性化设置、从其他 AI 导入等）只有**年满 18 周岁**的人才能使用。[^plans][^customize]
像孩子的账号这样，由 Family Link（家庭管理功能）管理的账号，不能在网页上使用 Gemini。手机应用则可以由家长在 Family Link 设置里关闭孩子的使用。[^signin]

第一次进去时，可以这样问问看。

```
你能帮我做哪些事？请只举五个上班族可以马上用上的例子。
```

<Quiz id="ch301-where" />

## 用 Google 账号登录

Gemini 没有单独的注册过程。用**你在 Gmail 或 YouTube 上使用的 Google 账号**登录就行。[^start]
打开 gemini.google.com，点右上角的「登录（로그인）」。[^signin]

![未登录的 gemini.google.com 首页。中间是「认识一下你的个人 AI 助手 Gemini」和输入框「向 Gemini 提问」，输入框右侧的模型标示「Flash-Lite」，左侧侧边菜单里有「登录以保存你的活动记录。」，右上角和左下角有「登录」按钮](../../../guide/12-gemini/assets/shot-01-logged-out.png)

这是登录之前的界面。侧边菜单里能看到「登录以保存你的活动记录。」的提示，模型固定为「Flash-Lite」。[^screen-out]

即使不登录，在网页上也能问一些简单的问题。但是不能做的事很多。[^start]

| 未登录 | 已登录 |
|---|---|
| 用文字提问和回答 | 用文字提问和回答 |
| 重新查看过去的对话 ✗ | 重新查看过去的对话 |
| 上传文件·生成图片 ✗ | 上传文件·生成图片 |
| 连接 Gmail·Drive 这类 Google 应用 ✗ | 连接 Google 应用 |

出处：Google 帮助文档[^start]

想保留对话并以后再看，请登录。安卓手机应用从一开始就必须登录才能使用。[^start]

要退出登录，在左侧菜单里点头像（或名字的首字母），选择「退出登录」。[^signin]
如果是好几个人共用的电脑，用完后一定要退出登录。如果一直保持登录，下一个人可以在侧边菜单里打开我的对话。

<Quiz id="ch301-login" />

## 一眼看懂套餐

Gemini 也有从免费开始的多种**套餐**（根据付费程度，能使用的功能和用量不同的使用方式）。
付费套餐叫作 Google AI 套餐，通过 **Google One**（Google 的付费订阅服务）订阅。[^upgrade]

| 套餐 | 月费（韩国） | 用量 | 存储空间 |
|---|---|---|---|
| 免费 | ₩0 | 基础 | — |
| Google AI Plus | ₩7,500 | 基础的 2 倍 | 400GB |
| Google AI Pro | ₩29,000 | 基础的 4 倍 | 5TB |
| Google AI Ultra | ₩119,000 起 | Pro 的 5 倍或 20 倍 | 20TB 起 |

出处：Google 套餐页面（韩国）和帮助文档[^plans-screen][^limits]

有一点值得注意。Google AI 套餐里**包含了 Google 存储空间**。这个空间由 Drive·Gmail·Google 相册共用。[^upgrade]
所以，如果你已经为照片或邮件购买并在使用存储空间，选套餐时请一起考虑。

Ultra 有两种。「Ultra 5 倍」（月 ₩119,000，20TB）和「Ultra 20 倍」（月 ₩300,000，30TB）。[^plans-screen]
价格可能会变，也经常有限时折扣。付款之前，请到[套餐页面](https://one.google.com/about/google-ai-plans/)亲自确认。

### 各套餐有什么不同

比起数字，了解**“有什么不一样”**，选起来更容易。

| 不同的地方 | 免费 | 付费 |
|---|---|---|
| **用量** | 基础 | Plus 2 倍，Pro 4 倍[^limits] |
| **一次能读的量** | 约 3 万 2 千 token | Plus 12 万 8 千，Pro·Ultra 100 万 token[^limits] |
| **自己选择模型** | 不能选 | 可以选（[第2章](02-screen-tour.md)）[^models] |
| **最大的模型**（Argon） | 不能用 | Pro·Ultra[^plans] |

**一次能读的量**就是第1阶段学过的[上下文窗口](../00-common/01-what-is-llm.md#_3-一次能看的量有限——-上下文窗口)。token 是 AI 数文字的单位。
100 万 token 的话，一次能读大约 1,500 页的文字。[^limits] 想把一份很长的报告或一整本书一起上传来提问时，差别就出来了。

如果把 Pro 套餐作为家庭套餐使用，家庭成员也不用额外付费就能使用 AI 功能。[^plans]

<Quiz id="ch301-plans" />

## 使用额度——5 小时·每周·阅读量

Gemini 的额度**不是“一天几次”这样按次数计算，而是按用掉的量计算。** 提问有多复杂、用了什么模型和功能、对话有多长，都会一起计算。[^limits]
用掉的量**每 5 小时**重新补满，另外还有**每周额度**。[^limits]

了解哪些事情会用掉很多用量，就能省着用。[^limits]

| 做的事 | 用量 |
|---|---|
| 一个简短的提问 | 很少 |
| 持续很长的对话 | 一般 |
| Deep Research（长篇调查报告） | 多 |
| 生成图片·音乐·视频 | 多（视频最多） |

出处：Google 帮助文档[^limits]

持续很长的对话用得更多，是有原因的。Gemini 每次回答时，都会把前面的对话重新读一遍。[^limits]
所以**话题变了，就新开一个聊天。** 不用重新读很长的对话，用量就会减少（[第1阶段第6章](../00-common/06-conversation.md#什么时候开始新对话)）。[^limits]

接近额度时会弹出提示，达到额度时会告诉你什么时候重新补满。[^limits]
如果是付费套餐，即使达到额度，也可以用较轻的模型（Flash-Lite）继续对话。如果是免费账号，等到重新补满就行。[^limits]
免费账号在人多的时段，Deep Research 之类的功能也可能暂时不能用。[^limits]

用了多少，可以在左下角的「设置（설정）」 → 「使用额度（사용량 한도）」里查看。[^limits][^screen]

![设置 → 「使用额度」界面。标题旁边有套餐标示「PRO」，① 「当前用量」进度条和「下午 2:55 重置」，② 「每周额度」和「11 月 1 日下午 7:55 重置」，③ 「升级到 AI Ultra，用量提升 5 倍 · ₩119,000/月」和「升级」按钮上标有红色编号](../../../guide/12-gemini/assets/shot-07-usage-marked.png)

这是付费套餐（Pro）的界面。**红色编号和下面列表的编号是同一处。**[^screen]

- ① 「当前用量」：每 5 小时重新补满的用量。会显示用了多少，以及什么时候重新补满。
- ② 「每周额度」：以一周为单位的用量。重新补满的日期和时间另外显示。
- ③ 升级到更高套餐的提示。

比如，不要把问题分成三次单独发送，而是像这样合在一起。一次发送，可以减少重新读取前面对话的次数，从而节省用量。

```
请一次回答下面三件事。
1. 把这份会议记录总结成五行。
2. 把确定的事项和负责人整理成表格。
3. 写一份发给参会者的简短通知邮件草稿。
（粘贴会议记录）
```

<Quiz id="ch301-limits" />

## 换成付费之前要知道的事

不需要一开始就付费。**先免费用，经常碰到额度上限时再升级**，是最稳妥的做法。

换成付费的路径是这样的。[^upgrade]

1. 点 gemini.google.com 左下角的「设置」。
2. 点「查看订阅」（没有套餐的账号上显示的名称），选择想要的 Google AI 套餐。
3. 选择或新添付款方式，然后订阅。

付款由 Google One 处理。所以更换或取消套餐的地方也是 Google One。[^upgrade]

![点左下角齿轮「设置」后打开的菜单。① 「账号」组（「使用额度」「管理订阅」「升级到 Google AI Ultra」），② 「偏好设置」组，③ 「数据与隐私」组，④ 齿轮「设置」按钮上标有红色编号。姓名是改成示例的界面](../../../guide/12-gemini/assets/shot-06-settings-marked.png)

姓名和对话标题是改成示例的界面。点 ④ 齿轮，菜单就会打开，最上面 ① 「账号」组里有「使用额度」和「管理订阅（구독 관리）」。[^screen] 其余的组在[第2章](02-screen-tour.md)里讲。

付款之前，下面这些内容一定要知道。

- **随时可以取消。**[^plans] 进入「设置」 → 「管理订阅」，在 Google One 设置里点「取消会员资格」。[^upgrade][^screen]
- **更换套餐也在 Google One 里进行。** 在「管理会员资格」 → 「更改会员套餐」里升级或降级。[^upgrade]
- **套餐结束后，存储空间也会一起减少。** 帮助文档以 Pro 为例说明，增加的 Drive·Gmail·相册存储空间，以及 Gmail·Docs 里的 Gemini 之类的权益，就不能再使用了。[^upgrade] 如果你用了很多存储空间，取消之前请先确认。
- **付费结束后，不能用 Pro 开始新对话，也不能继续用 Pro 创建的对话。**[^upgrade]
- **公司·学校账号不能订阅这个套餐。** 只有个人 Google 账号可以订阅。[^plans]

不知道哪个套餐适合的话，可以把我的使用习惯告诉 Gemini，问问它。不过，费用和条件不要看 AI 的回答，而要到套餐页面确认（[第1阶段第9章](../00-common/09-safety.md)）。

```
我一天用 3~4 次 Gemini，主要用来润色公司邮件和总结会议记录。
偶尔也会上传 PDF 文件来做总结。我想先免费用一用，请告诉我，
在什么时刻会需要付费，给我三条我自己可以判断的标准。
```

<Quiz id="ch301-billing" />

## 用不了的时候先试试这些

可能收不到回答、弹出错误提示，或者登录不上。这时请按下面的顺序试试。[^errors]

1. **把同样的问题再发一次。** 还是不行的话，在新聊天里试试。
2. **如果上传了文件，就拿掉**，只用文字提问。
3. **确认网络连接，等 5 分钟左右。** 人多的时候，可能会暂时用不了。
4. **刷新页面，或者重新启动应用。**

经常看到的提示，了解它的意思就不会那么慌了。

| 提示 | 意思 | 可以试试 |
|---|---|---|
| 「出了点问题」（登录时） | 这个账号现在不能使用[^signin] | 确认年龄·账号类型 |
| Too many requests… | 人多或暂时达到额度[^errors] | 几分钟后再试 |
| 错误 1060 | 可能在这个国家不能使用[^errors] | 确认支持的国家 |
| I cannot fulfill this request | 所需的应用连接被关闭了[^errors] | 确认已连接的应用 |

登录时如果弹出「出了点问题」，可能是账号方面的问题。居住地、年龄、账号类型（公司·学校账号等）都可能是原因。[^signin]

还是不行的话，请发送反馈。在「设置」 → 「发送反馈（의견 보내기）」里填写，还可以附上截图。[^feedback][^screen]
**发送反馈时，那个对话和上传的文件会一起发到 Google。**[^feedback] 如果是包含个人信息的对话，请让那部分不要被看到。

<Quiz id="ch301-trouble" />

## 亲自试一试

1. 打开 gemini.google.com，用平时使用的 Google 账号登录。
2. 问一句“你能帮我做哪些事？”。
3. 打开「设置」 → 「使用额度」，确认现在的套餐和用掉的量。
4. 在手机上安装 Gemini 应用，用同一个 Google 账号登录，确认在电脑上进行的对话能不能看到。

**连续任务**（[准备读书会](../00-common/practice-kit.md)）：问一句“我是附近读书会的总务。请做一份筹备下个月聚会时需要准备的事情清单。”。把拿到的清单，在作业结束后和我实际做过的事比较一下。

## 整理

- Gemini 在网页（gemini.google.com）、手机应用、Mac·Windows 应用上用同一个 Google 账号使用。支持韩国和韩语。
- 不用另外注册，用 Google 账号登录。不登录就不能用过去的对话、上传文件、生成图片。
- 个人账号要年满 13 周岁，但付费套餐和部分功能要年满 18 周岁。
- 付费套餐是 Google AI Plus·Pro·Ultra，通过 Google One 订阅。里面包含 Google 存储空间。
- 用量每 5 小时重新补满，另外有每周额度。话题变了就新开聊天来节省。
- 取消要通过「设置」 → 「管理订阅」进入 Google One。取消后增加的存储空间也会消失。
- 出了错误，按重新发送 → 新聊天 → 拿掉文件 → 等 5 分钟的顺序试试。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Google Account | Google 账号 | Gmail·YouTube 等共用的 Google 登录账号 |
| Google One | Google One | Google 的付费订阅服务。出售存储空间和 AI 套餐 |
| Google AI Plan | Google AI 套餐 | Plus·Pro·Ultra 三种 Gemini 付费套餐 |
| Usage Limit | 使用额度 | 每 5 小时、每一周重新补满的可用量 |
| Context Window | 上下文窗口 | 一次能一起读取的量。用 token 计算 |
| Token | token（词元） | AI 把文字拆分计数的小单位 |
| Family Link | Family Link（家庭管理） | 家长管理孩子 Google 账号的功能 |

<ChapterDone :chapter="301" />

下一章：[第2章. 逛一逛界面](02-screen-tour.md)

[^screen-out]: 在未登录的浏览器里亲自确认 gemini.google.com。侧边菜单「활동을 저장하려면 로그인하세요.」，输入框的模型标示「Flash-Lite」，右上角「Gemini 정보」「Gemini 앱 다운로드」「구독」「비즈니스용」「로그인」。（确认日期 2026-10-31）
[^screen]: 在 Gemini 网页界面（Google AI Pro，韩语）上亲自确认。左下角「设置」菜单的「账号」组里有「사용량 한도」「구독 관리」，「사용량 한도」界面（gemini.google.com/usage）的「현재 사용량」·「주간 한도」和各自的重置时间，「데이터 및 개인 정보 보호」组里有「의견 보내기」。（确认日期 2026-10-30，图片是 2026-10-31）
[^plans-screen]: 在已登录的浏览器里亲自确认 Google One 套餐页面（地区「대한민국」）。Google AI Plus ₩7,500/月·400GB·"2배 더 많은 Gemini 액세스"，Google AI Pro ₩29,000/月·5TB·"4배 더 많은 Gemini 액세스"，对比表里的 Ultra 5 倍 月 ₩119,000·20TB 和 Ultra 20 倍 月 ₩300,000·30TB。https://one.google.com/about/google-ai-plans/ （确认日期 2026-10-30）
[^start]: Google 帮助文档，《Use Gemini Apps》。"You can use some features in Gemini Apps without signing in." / "The Gemini mobile app on an Android device." / "Accessing past chats: Your chat history with Gemini Apps won’t be available." / "Other features that require account authentication: Features like image generation, Gems, and file upload won’t be available." / "Integration with other Google services: Features that rely on Connected Apps (like Google Workspace, Google Photos, or other Google services) won’t be available." / "To use gemini.google.com, you need access to a supported browser: Chrome, Safari, Firefox, Opera, or Edgium." https://support.google.com/gemini/answer/13275745 （确认日期 2026-10-30）
[^signin]: Google 帮助文档，《What you need to sign in to Gemini Apps》。"At the top right, select Sign in." / "Select Sign out." / "You must be 13 (or the applicable age in your country) or over to use Gemini with a personal or school Google Account and 18 or over to use Gemini with a work account." / "You still can’t access the Gemini web app with a Google Account managed by Family Link." / "If you get a “Something went wrong” message while trying to access or sign in to the Gemini web app, your account can't access the app at the moment." https://support.google.com/gemini/answer/13278668 （确认日期 2026-10-30）
[^where]: Google 帮助文档，《Where you can use the Gemini web app》。"The Gemini web app is currently available in more than 70 languages and over 230 countries and territories." 语言列表里包含 "Korean"，国家列表里包含 "South Korea"。https://support.google.com/gemini/answer/13575153 （确认日期 2026-10-30）
[^mobile]: Google 帮助文档，《Gemini mobile app availability》。"Gemini mobile apps are currently available in multiple languages and more than 150 countries." 「Where you can download the Gemini app from the Google Play Store」列表里包含 "South Korea"。"On iOS: The Gemini app." / "Tip: Android Go doesn't support the Gemini mobile app." https://support.google.com/gemini/answer/14579026 （确认日期 2026-10-30）
[^mac]: Google 帮助文档，《Use the Gemini app on Mac》。"A Mac running macOS Sequoia (15.0) or later with Apple Silicon, 8 GB of RAM or more, and at least 200 MB of available disk space for installation." / "Open your web browser and go to gemini.google/mac." https://support.google.com/gemini/answer/17011627 （确认日期 2026-10-30）
[^windows]: Google 帮助文档，《Use the Gemini app for Windows》。"A PC running Windows 10 or later." / "Go to gemini.google/desktop on your PC." https://support.google.com/gemini/answer/18263854 （确认日期 2026-10-30）
[^customize]: Google 帮助文档，《Customize your Gemini chats experience》。"Customize is available for signed-in users 18 and older using Gemini Apps in an available language and region." 从其他 AI 导入也只有年满 18 周岁的个人账号才可以：《Import from other AI platforms to Gemini Apps》 https://support.google.com/gemini/answer/16868299 https://support.google.com/gemini/answer/18736938 （确认日期 2026-10-30）
[^plans]: Google One 套餐页面（韩语）。"Google AI 요금제에 포함된 Gemini 앱과 Gmail, Docs 등의 Gemini는 만 18세 이상만 이용할 수 있습니다." / "개인 Google 계정만 Google AI 요금제에 가입할 수 있습니다." / "복잡한 워크플로에서 최첨단 성능을 발휘하는 Gemini 4 Argon에 대한 액세스" / "Google AI Pro 요금제를 사용하는 가족 요금제 구성원은 추가 비용 없이 AI 혜택과 기능을 이용할 수 있습니다." / "언제든지 취소할 수 있습니다." 帮助文档（16275805）写的套餐年龄在大多数国家是 13 周岁，两者不同——这本指南写的是更严格的一方（18 周岁）。https://one.google.com/about/google-ai-plans/ （确认日期 2026-10-30）
[^limits]: Google 帮助文档，《Gemini Apps limits & feature availability》。"These limits factor in the complexity of your prompt, the models and features you use, and the length of your chat." / "Your limit refreshes every 5 hours until you reach your weekly limit." / "4x higher than standard limits" / "5x or 20x higher than AI Pro limits depending on your subscription" / "32k tokens" / "128k tokens" / "1 million tokens" / "For example, with a 1M token context window, Gemini can understand up to 1,500 pages of text or 30,000 lines of code." / "These require Gemini to re-read the previous conversation history to maintain context. As the chat gets longer, this requires more thinking power." / "Video generally requires the most usage." / "Start a new chat when you move to a new topic. This will help save usage because Gemini won’t have to re-read a long conversation history before creating a response." / "If you have a Google AI subscription and reach your limit, you can continue your conversation with Flash-Lite." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." / "Gemini Apps will notify you when you're close to your limit based on your plan's level." / "To view your usage limits:" https://support.google.com/gemini/answer/16275805 （确认日期 2026-10-30）
[^models]: Google 帮助文档，《About Gemini models》。"If you have a Google AI plan you can manually switch models in both Chat Mode and Task Mode." https://support.google.com/gemini/answer/18648722 （确认日期 2026-10-30）
[^upgrade]: Google 帮助文档，《Manage your Google AI plan from Gemini Apps》。"You can subscribe to a Google AI plan through Google One." / "Select the Google AI plan you want." / "When you subscribe to the plan, you’ll need to select or provide a form of payment." / "To upgrade: Select a plan under "Upgrade options."" / "You can cancel your plan in Google One settings." / 韩语版步骤 "하단에서 설정 및 도움말 구독 보기를 클릭합니다."（当前未订阅套餐）/ "When your AI Pro plan ends, you’ll no longer have access to:" / 韩语版「Pro로 새 채팅 시작하기」「Pro로 생성된 채팅 이어서 하기」/ "Expanded storage across Drive, Gmail, and Photos" https://support.google.com/gemini/answer/14517446 （确认日期 2026-10-30）
[^errors]: Google 帮助文档，《Troubleshoot error codes in Gemini Apps》。"Gemini Apps may not be available in your country or region." / "Wait a few minutes: If Gemini Apps are experiencing high traffic, wait 5 minutes and try your prompt again." / "High demand or usage limits: If you get "Too many requests in a short time period," Gemini Apps may be experiencing high traffic, or you may have reached a temporary usage limit." / "Connected Apps aren't turned on: If you get "I cannot fulfill this request" or "This feature only works with content that Gemini can access," the required connected app (such as Google Workspace) might not be connected." https://support.google.com/gemini/answer/18647528 （确认日期 2026-10-30）
[^feedback]: Google 帮助文档，《Send feedback or report a problem with Gemini Apps》。"Enter your feedback. You can choose to add a screenshot to help us better understand the issue." / "When you submit feedback, the associated conversation, like your prompts and the Gemini app’s responses, is added as part of your feedback." https://support.google.com/gemini/answer/13275746 （确认日期 2026-10-30）

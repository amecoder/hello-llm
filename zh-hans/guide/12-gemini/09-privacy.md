# 第9章 隐私与安全——保存了什么、谁会看、怎么删除

> **一句话总结**：只要「保留活动记录（활동 기록 보관）」是打开的，Gemini 的对话就会**在账号里保留 18 个月**，其中一部分**会被人阅读，也会用于 AI 训练。**
> 不想留下的对话，请用**临时聊天**；机密信息一开始就不要放进去。记录可以在「设置」→「活动」里关闭和删除。

界面以 2026 年 10 月的网页版为准。本章以个人 Google 账号为准。公司和学校账号的规则不同（最后一节）。

## 会保存什么

登录后使用 Gemini，Google 会收集这些信息。[^hub]

- **我说的话**：输入或说出的提问、交给它做的任务
- **我给它看的东西**：上传的文件、照片、视频，问过的屏幕画面，导入的对话，从浏览器发送的网页内容
- **来自已连接应用的信息**：Gmail 之类已连接的应用、搜索和 YouTube 记录、在 Chrome 里看过的网页地址（[第7章](07-skills-apps.md#已连接的应用-—-在-gemini-里用-gmail·drive·日历)）
- **其他**：语音对话（Live）的录音、反馈、位置信息等

**位置信息是始终会收集的。** 这是为了给出符合问题的回答。不过，设备允许提供的**精确位置**，不会保存到「Gemini 应用活动」记录里。[^hub]

Google 表示，**不会用聊天内容来展示广告**。并且说如果有变化，会明确告知。[^hub]

<Quiz id="ch309-saved" />

## 会有人阅读吗？会用于 AI 训练吗？

**其中一部分会被人阅读。** 人工审核员（包括与 Google 签约的外部公司员工）会评估 Gemini 的回答是否不准确或有害，并提出更好的回答。[^hub]
对话在发送给审核员之前，会先与我的账号分离。即便如此，Google 还是这样提醒。[^hub]

> **不要输入机密信息**，那些信息如果被审核员看到，或被用来改进服务，会让你很为难。

**也会用于训练。** 如果「保留活动记录」是打开的，我的活动就会被用于**包括训练生成式 AI 模型在内的服务改进**，这个过程有人工审核员参与。[^hub]
为了让以后的对话不被用来改进服务而进行审核，帮助文档介绍的方法是**关闭「保留活动记录」**。[^hub]

不过，即使关闭记录或使用临时聊天，对话仍然会用于**给出回答，以及保护用户和 Google**。这时也可能有人工审核员参与。[^hub]

| | 「保留活动记录」开启 | 关闭或临时聊天 |
|---|---|---|
| 在我的活动列表里 | 保留 | 不保留 |
| 保存在账号里 | 默认 18 个月 | 72 小时 |
| AI 训练 | 会用 | 不会用 |
| 出于保护目的的人工审核 | 有 | 有 |

来源：Google 帮助文档[^hub][^activity]

**语音对话（Live）的录音、视频和屏幕共享，默认不会用于改进服务。** 只有我自己打开时才会使用。[^hub]

**发送反馈（赞、踩）时**，即使记录是关闭的，这条反馈和相关的对话也会用于改进服务。[^hub] 涉及敏感内容的对话，最好不要留下反馈。

<Quiz id="ch309-review" />

## 开启和关闭「保留活动记录」

「保留活动记录」（Keep Activity）是把我的 Gemini 对话保留在账号里的设置。**年满 18 周岁的话，一开始就是开启的。**[^activity]

### 关闭的方法

1. 点左下角的「设置」→「活动」。新标签页里会打开「Gemini 应用活动」（[第2章](02-screen-tour.md#设置页面-—-账号、偏好设置、隐私)）。[^report]
2. 点上方「保留活动记录」旁边的「开启」。[^report]
3. 选择**「停用」**（只从今以后关闭）或**「停用并删除活动」**（关闭，同时删除过去的记录）。[^activity]

### 关闭之后有什么变化

关闭之后，对话不会留在活动列表里。取而代之的是，很多功能都用不了了。

| 功能 | 关闭后 | 讲到的章 |
|---|---|---|
| 查找过去的对话、固定、重命名 | 不可以 | [第3章](03-chats.md#查找过去的对话) |
| 记忆（记住过去的对话） | 不可以 | [第5章](05-memory.md) |
| 技能，大部分已连接的应用 | 不可以 | [第7章](07-skills-apps.md) |
| 任务，日程 | 不可以 | [第8章](08-tasks.md) |

来源：各章的 Google 帮助文档脚注

所以可以这样选。

- **如果方便最重要，** 就开着，只把敏感的对话用**临时聊天**（[第2章](02-screen-tour.md#临时聊天-—-不留记录的对话)）。
- **如果根本不想被用于训练，** 就关掉，并放弃上面这些功能。

不管选哪一边，**最保险的做法都是一开始就不要放进机密信息**（[第1阶段第9章](../00-common/09-safety.md#不要放进去的东西)）。

<Quiz id="ch309-activity" />

## 删除记录和下载

### 删除

在「Gemini 应用活动」页面（`myactivity.google.com/product/gemini`）里删除。[^activity]

- 点记录上方的**「删除」**，可以在**「全部时间」「过去 1 小时」「过去 1 天」「自定义范围」**中选择。[^activity]
- 也可以用日期旁边或条目旁边的删除按钮，只删一天的或者一条。[^activity]

也可以设置**自动删除**。默认是超过 **18 个月**就删除。本指南的界面上也显示着「删除超过 18 个月的活动」。可以改成 3 个月、36 个月，或者「不自动删除」。[^activity][^report]

删除之后也有留下来的东西。

- **已经被人工审核过的对话不会被删除，最长保留 3 年。**[^hub]
- **删除分享过的对话，公开链接不会被删除。** 链接要另外删除（[第3章](03-chats.md#删除分享过的链接)）。[^activity]
- 断开已连接应用的连接，Gemini 活动记录也不会被删除。[^hub]

### 下载

可以把我的 Gemini 记录保存成文件。到 **Google 导出（Takeout）**（`takeout.google.com`）里，用 Gemini 所用的账号登录后，点「全部取消选择」，只选 Gemini 项目。[^download]

- 通过邮件收到的下载链接会**有效 7 天**。[^download]
- **即使下载了，Google 服务器上的记录也不会被删除。** 要删除的话，请像上面那样另外删除。[^download]

<Quiz id="ch309-delete" />

## 不能做的事，不能轻信的事

### 使用规则

Google 规定了不能用 Gemini 制作的东西。比如儿童性剥削内容、真实人物的性相关图像、垃圾信息和诈骗、危险或违法的活动、仇恨和骚扰、欺骗他人的虚假内容。[^guidelines]
违反的话，可能受到从警告、部分功能受限，到**停止使用 Gemini、停止使用其他 Google 服务**的处罚。[^guidelines]

### 不要原样相信回答

Gemini 不是人。它不能自己思考，也不会有感情，只是特别擅长找出规律。[^genai]
所以它**可能把错误的内容当作事实来说**（幻觉）。[^hub] **诊断、治疗、医疗建议，或者法律、金融之类的专业帮助，请不要指望 Gemini。** 它的回答只是参考信息。[^hub]
核对的习惯，已整理在[第1阶段第9章](../00-common/09-safety.md#核对的四个习惯)里。

### 孩子和公司账号

- **未满 13 周岁**（各国不同）的孩子，要由家长在 **Family Link**（家庭管理应用）里允许后，才能使用 Gemini。[^child]
- **公司和学校账号**的规则不同。根据公司使用的 Google Workspace 等级，有的情况下对话和上传的文件不会由人工审核，也不会用于 AI 训练。「保留活动记录」只有管理员才能关闭。[^work] 如果是公司账号，请先确认公司的 AI 使用规定。

<Quiz id="ch309-rules" />

## 亲手试一试

1. 打开「设置」→「活动」，确认「保留活动记录」是否开启，自动删除设置的是多少个月。
2. 选一个适合自己的自动删除期限（例如：3 个月）。
3. 用「删除」→「过去 1 小时」，把刚才练习用的对话删掉试试。
4. 像[第3章](03-chats.md#删除分享过的链接)里学的那样，确认「我的公开链接」里有没有剩下的链接。

**连续任务**（[筹备读书会](../00-common/practice-kit.md)）：像任务里用到的会员名单这样包含他人个人信息的文件，只在临时聊天里处理，或者把姓名改成"会员1"之类再上传。完成任务后，把相关的对话删除。

## 小结

- 登录使用的话，提问、上传的文件、已连接应用的信息、位置等都会被保存。不会用聊天内容展示广告。
- 一部分对话会被人阅读。「保留活动记录」开启时，也会用于 AI 训练。不要放进机密信息。
- 「保留活动记录」在年满 18 周岁时默认开启。关闭后只保存 72 小时，也不会用于训练，但记忆、技能、任务等多项功能就不能用了。
- 在「Gemini 应用活动」里选择时间段删除，并修改自动删除（默认 18 个月）。被人工审核过的对话最长保留 3 年。
- 可以通过 Takeout 下载记录。即使下载了，服务器上的记录也不变。
- 回答可能出错。医疗、法律、金融方面的判断，交给专业人士。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Keep Activity | 保留活动记录 | 把我的 Gemini 对话保留在账号里的设置 |
| Gemini Apps Activity | Gemini 应用活动 | 查看和删除我的对话记录的页面 |
| Auto-delete | 自动删除 | 超过设定期限的记录会自动被删除的设置 |
| Human reviewer | 人工审核员 | 为改进服务而阅读部分对话的人 |
| Google Takeout | Google 导出（Takeout） | 下载我在 Google 服务里的数据的地方 |
| Family Link | 家庭链接（Family Link） | 家长管理孩子 Google 账号的应用 |

<ChapterDone :chapter="309" />

下一章：[第10章. 语音与手机](10-voice-mobile.md)

[^report]: 在 Gemini 网页界面（Google AI Pro，韩语）中确认。点「设置（설정）」→「活动（활동）」，新标签页里会打开 myactivity.google.com 的「Gemini 应用活动（Gemini 앱 활동）」，设置名称为「保留活动记录（활동 기록 보관）」，状态显示为「开启（사용）」，说明为 "이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다."，自动删除按钮为「18개월이 지난 활동 삭제」。（确认日期 2026-10-30，`docs/reports/2026-10-30_Gemini-공식-자료.md` 的「실제 화면에서 직접 확인」一节。这个页面上能看到真实的对话记录，所以没有截图）
[^hub]: Google 帮助文档，「Gemini Apps Privacy Hub」（韩语版「Gemini 앱 개인 정보 보호 허브」）. "What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (确认日期 2026-10-31)
[^activity]: Google 帮助文档，「Manage & delete your activity in Gemini Apps」（韩语版「Gemini 앱에서 활동 관리 및 삭제하기」）. "If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." 韩语版名称 「사용 중지」「사용 중지 및 활동 삭제」「삭제」「전체 기간」「지난 1시간」「지난 1일」「사용자설정 범위」「자동 삭제 안함」. https://support.google.com/gemini/answer/13278892 (确认日期 2026-10-31)
[^download]: Google 帮助文档，「Download your Gemini Apps data」（韩语版「Gemini 앱 데이터 다운로드하기」）. "Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." 韩语版名称 「모두 선택 해제」. https://support.google.com/gemini/answer/16920332 (确认日期 2026-10-31)
[^guidelines]: Google 帮助文档，「Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful」（韩语版「Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기」）. 禁止项目标题 "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (确认日期 2026-10-31)
[^genai]: Google 帮助文档，「Learn about generative AI」（韩语版「생성형 AI에 대해 자세히 알아보기」）. "Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (确认日期 2026-10-31)
[^child]: Google 帮助文档，「Guide your child's Gemini Apps experience」（韩语版「자녀의 Gemini 앱 사용 관리하기」）. "A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (确认日期 2026-10-31)
[^work]: Google 帮助文档，「Use Gemini Apps with a work or school Google Account」（韩语版「직장 또는 학교 Google 계정으로 Gemini 앱 사용하기」）. "Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." （作为核心服务提供的 Workspace 等级的说明） / "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (确认日期 2026-10-31)

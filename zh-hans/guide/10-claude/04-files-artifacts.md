# 第4章 文件与工件——展示给它看，让它做出来

> **一句话总结**：难以用语言说明的资料，就**上传文件**给它看；需要的文档、表格、演示文稿，就让它**生成文件**。
> 值得给别人看的成果，会作为**工件**（Artifact）在对话旁边打开，可以修改和分享。不过，Claude 不会生成照片或插画。

界面以 2026 年 10 月的网页版为准。新的 Claude 界面和新的设置界面正在陆续推送，所以你看到的界面可能不一样。手机应用支持的功能略有不同。

## 上传文件

点输入框左下角的「+」按钮，选择 ① 「上传或添加文件（파일 업로드 또는 추가）」。键盘快捷键是 Ctrl+U。[^screen] 也可以把文件拖到输入框里。照片可以直接复制后粘贴进去。[^upload]

![展开输入框「+」菜单的界面。① 「上传或添加文件」，② 「Skills」，③ 「添加连接器」，④ 「设计系统」，⑤ 「添加插件」，⑥ 「记忆」都标有红色编号](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

这是免费套餐的界面。**上传文件时，只用 ① 就够了。**[^screen][^upload-name] ⑥ 「记忆」在[第3章](03-chats.md)和[第5章](05-memory.md)里讲。

可以上传的东西如下。[^upload]

| 种类 | 格式 |
|---|---|
| 照片 | JPEG、PNG、GIF、WebP |
| 文档 | PDF、Word（DOCX）、文本（TXT）、RTF、ODT、EPUB、HTML |
| 表格 | Excel（XLSX）、CSV |
| 其他 | JSON |

Excel 文件（XLSX）只有在设置里打开了「代码执行和文件生成」才能上传。这个设置在下一节里讲。[^upload]

与其只上传文件然后说"帮我看看"，不如同时写清楚你想要什么。这样得到的回答会有用得多（[第1阶段第4章](../00-common/04-prompt-basics.md#好提示词的5个要素)）。

```
附上的 PDF 是我们小区的物业费通知单。
请找出比上个月涨得最多的三项，用表格列出来，并用一行字写出可能涨价的原因。
不确定的内容请标注"推测"。
```

::: details 收到的回答大概是这样（示例——点击展开）
这是本指南编写的示例。实际的回答会因服务和每次情况而不同。

> 下面是比上个月涨得最多的三项。
>
> | 项目 | 上个月 | 这个月 | 涨价原因 |
> |---|---|---|---|
> | 取暖费 | ○○韩元 | ○○韩元 | 可能是天气变冷，取暖用得更多了（推测） |
> | 电费 | ○○韩元 | ○○韩元 | 可能是公共用电增加了（推测） |
> | 维修费 | ○○韩元 | ○○韩元 | （通知单说明里写的原因） |

**检查一下有没有收到想要的结果**：涨得最多的三项是不是用表格给出来了？表格里的金额和我的通知单一致吗？每项都用一行字写了原因吗？通知单上没有依据的原因，有没有标注"推测"？

:::

需要知道的事。[^upload]

- **一个对话最多可以上传 20 个文件。**
- **PDF 最多 1,000 页。** 100 页以内，连图片和图表都会读取。从第 101 页起，只读取文字。如果图片对你很重要，请只截取需要的页再上传。
- **PDF 以外的文档只读取文字。** 放在 Word 文件里的图片读不出来。如果图片重要，请转成 PDF 再上传。
- **照片最好宽和高都在 1,000 像素以上。**
- **说 PDF 页码时，请用屏幕上的页码。** 不是文档上印的页码，而是 PDF 阅读软件上显示的页码。

文件太大上传不了的话，可以分开上传。

::: details 单个文件最大能上传多少？（点击展开）
单个文件的大小上限，不同的文档写法不同。上传文件的帮助文档写的是每个文件 500MB。[^upload] 生成文件功能的帮助文档写的是，上传和下载都是每个文件 30MB。[^create]
:::

> 身份证、合同、病历这类包含个人信息的文件，上传之前请先遮住或去掉相关部分。原则在[第1阶段第9章](../00-common/09-safety.md#_2-个人信息和机密——放进去之前先想一想)里讲过。

<Quiz id="ch204-upload" />

## 让它生成文件——Excel、Word、PowerPoint、PDF

Claude 的回答不只有文字，也可以**生成文件**给你。可以下载，也可以直接保存到 Google Drive。[^create]

| 生成的文件 | 例子 |
|---|---|
| Excel（.xlsx） | 家庭账本、日程表 |
| Word（.docx） | 通知、报告 |
| PowerPoint（.pptx） | 演示文稿 |
| PDF | 用于打印的文档 |
| PNG 图片 | 用数字画出的图表 |

包括免费套餐在内，所有套餐都可以使用。网页、桌面端、手机应用都可以。[^create] 公式保持有效的表格文件（电子表格）和可以用 PowerPoint 打开的演示文稿也能生成。[^new]

**先看看设置是否已经打开。** 个人套餐（Free·Pro·Max）一开始就是打开的。[^create] 如果是关闭的，请在「设置 > 功能」（Capabilities）里打开 ④ 「代码执行和文件生成」。[^create][^create-name]

![「设置 > 功能」界面。① 「消息被标记时切换模型」，② 「工件」，③ 「聊天内可视化」，④ 「代码执行和文件生成」开关都标有红色编号](../../../guide/10-claude/assets/shot-09-settings-capabilities-marked.png)

这是免费套餐的界面。**红色编号对应下面表格里的同号内容。**[^screen]

| 编号 | 名称 | 作用 |
|---|---|---|
| ① | 「消息被标记时切换模型」 | 触发安全机制时，换另一个模型继续 |
| ② | 「工件」 | 在对话旁边的窗口里生成成果 |
| ③ | 「聊天内可视化」 | 在对话里画图表、图示 |
| ④ | 「代码执行和文件生成」 | 生成文档、表格、演示文稿、PDF |

② 「工件」下面写着"需要代码执行和文件生成"。④ 下面写着"使用 Skills 需要"。[^screen] 想让它生成文件，只要确认 ④ 是打开的就行。

提出要求时，请具体写明想要的结构、内容和格式。[^create]

```
请做一个记录每月生活费的 Excel 表格。
项目有餐饮费、交通费、通信费、其他，最下面自动计算各项合计和月合计。
```

也可以先上传一个已有的文件，让它修改。

```
附上的 Word 文件是社区读书会的通知。
请把日期改成 11 月 14 日星期六下午 2 点，在最下面加上需要准备的物品清单，再重新生成一个 Word 文件。
```

需要知道的事。

- **生成文件通常比对话更耗用量。**[^create] 使用额度在[第1章](01-getting-started.md)里讲过。简短的问题就用文字回答，真的需要文件时再让它生成文件。
- **收到的数字要核对。** Claude 会做计算，但复杂或重要的计算，请用其他计算软件或手算再核对一遍。[^math] 哪怕只亲自加几个合计也好。
- **上传的文件或网站里，可能藏有隐藏指令。** 使用这个功能的时候要盯着 Claude，如果它用了莫名其妙的资料，就让它停下来。[^create] 隐藏指令在[第1阶段第9章](../00-common/09-safety.md#_4-隐藏指令——提示词注入)里讲过。

<Quiz id="ch204-create" />

## 工件——在对话旁边打开的成果

**工件**（Artifact，生成出来的成果）是值得给别人看的成果。比如文档、演示文稿、设计、小工具。它在对话旁边的栏里打开，可以修改、以后再打开，也可以和别人分享。[^artifacts]
包括免费套餐在内，所有套餐都可以使用。前一节的「代码执行和文件生成」必须是打开的。[^artifacts]

它很容易和前一节的生成文件混淆。区别在于接收的方式。[^academy-artifacts]

| | 工件 | 生成文件 |
|---|---|---|
| 在哪里打开 | Claude 里面，对话旁边的栏 | 下载后用其他软件打开 |
| 怎么分享 | 用链接分享 | 把文件发出去 |

如果成果要在 Claude 里继续修改，或者用链接分享，就选工件。如果需要原样的 Word、Excel 文件，就用生成文件。工件之后也可以导出成 Word、PDF 之类的文件（见下面的「导出成文件」）。[^artifacts]

![发送下面通知提示词后的界面。中间的对话里出现了「读书会通知 · Claude Design · 仅自己」卡片，右边栏里打开了用大字写着日期、时间、地点的 A4 通知](../../../guide/10-claude/assets/shot-16-design-panel.png)

*这是用下面的通知提示词做出来的界面。右边栏上方有下载按钮和「Fill」「Fit」（显示大小）按钮。卡片上的「仅自己」表示目前只有我能看到。对话和工件在拍完后已删除。*[^screen-design]

生成的方法有三种。[^artifacts]

- 在对话里直接提出要求。
- 点输入框的「输出」（Output），选择模板（文档、演示文稿之类的模板）。
- 在侧边菜单的「工件」标签页里选择模板。

![点击侧边菜单「工件」后的界面。① 上方的「全部」「我的项目」「与我共享」标签页，② 「创建新内容」下面的「文档」「幻灯片」「设计」卡片都标有红色编号](../../../guide/10-claude/assets/shot-10-artifacts-marked.png)

这是免费套餐的界面。免费账号的 ② 「创建新内容」里也能看到「文档」「幻灯片」「设计」。三个都带有「新」标记。[^screen] 这些卡片就是第三种方法里的模板。用 ① 的标签页，可以把我做的和别人分享给我的分开查看。[^screen]

```
请做一份发给社区读书会会员的一页通知。
聚会日期是 11 月 14 日星期六下午 2 点，地点是区立图书馆 2 楼研讨室，这次读的书是《小王子》。
读者大多是 60 岁以上的人，所以字要大，句子要短。
```

想要得到工件时，请要**成果本身，而不是内容**。[^academy-artifacts]

- 不太好的例子："整理一下第 3 季度业绩。"
- 更好的例子："把第 3 季度业绩做成给各位组长看的一页文档。"

区别只有一点。更好的例子说出了要做出什么东西。如果一定要工件，就再加一句"做成工件"。[^academy-artifacts]

**也要说明谁来使用。** 上面的通知例子里写的"读者大多是 60 岁以上的人"就是这个意思。"给新员工看的流程图"和"给技术团队看的流程图"，做出来是不一样的。[^academy-artifacts]

**充分聊过之后再生成比较好。** 当 Claude 已经理解了问题，做出的成果最好。[^academy-artifacts] 可以在一起完成分析之后，再请它做演示文稿。

做好的工件都会保存在侧边菜单的「工件」标签页里。在任何对话里都能再找到它们。[^artifacts]

**只改需要改的地方。** 在文档工件里，用鼠标选中要改的文字，点「用 Claude 编辑」（Edit with Claude）。然后写下你想要的就可以了。[^artifacts] 不用再用语言说明是哪一部分。

**换个方向再试一次。** 修改之前发的消息并重新发送，对话就会出现另一个分支。这个分支里也会单独生成工件，所以不会丢掉之前做的。[^artifacts]

**导出成文件。** 点「导出」（Export），就能得到可以用其他软件打开的文件。[^artifacts]

| 做出的东西 | 可以导出的格式 |
|---|---|
| 文档 | Word、PDF、Markdown、Google 文档 |
| 演示文稿 | PowerPoint、PDF、Google 幻灯片 |
| 动画（Team·Enterprise 专用测试版） | MP4 视频 |

需要知道的事。[^artifacts]

- **出错时，请点「尝试用 Claude 修复」。** 不过不保证一定能修好。
- **在手机应用里可以提要求、查看和修改。** 分享设置要在网页或桌面应用里修改。
- **2026 年 9 月 16 日之前做的叫「旧版工件」。** 可以继续使用，但不能再用那种方式新建了。

<Quiz id="ch204-artifacts" />

## 分享工件

工件**一开始只有我能看到。** 在你分享之前，谁也看不到。[^share]

1. 打开工件，点「分享」。
2. 选择谁可以看。Pro·Max 套餐可以在「仅自己」和「任何拿到链接的人」之间选择。
3. 复制链接并发出去。

<!-- 需要截图：工件「分享」窗口——「仅自己」「任何拿到链接的人」和权限选择（网页） -->

权限有三级。根据工件的种类，只能选其中一部分。[^share]

| 权限 | 能做的事 |
|---|---|
| 「可查看」 | 打开查看、阅读评论 |
| 「评论者」 | 在上面的基础上，可以写评论、下载文件 |
| 「可编辑」 | 在上面的基础上，可以修改 |

需要知道的事。[^share]

- **打开的人也必须有 Claude 账号。** 没有账号的话，即使有链接也打不开。这是和对话公开链接（第3章）不同的地方。
- **想停止展示时，** 在「分享」里改成「仅自己」（Pro·Max）。
- **别人发来的工件，要像对待陌生人发来的文件一样对待。**

::: details 如果是免费套餐（点击展开）
免费套餐能不能用「任何拿到链接的人」来分享，不同的文档写法不同。请以你的「分享」窗口里显示的选项为准。
:::

<Quiz id="ch204-share" />

## 用眼睛看的回答——卡片、反问、图示

根据问题的不同，Claude 有时会不用文字，而是用**看得见的形式**来回答。不需要另外打开什么。Claude 会自己判断，所以像平时一样提问就行。[^visual]

**天气、菜谱卡片。** 问天气或做菜的方法，它可能用卡片的形式回答。需要打开网页搜索。[^visual] 新界面里没有网页搜索的开关，Claude 会在需要时自己去搜索。[^new][^old-search] 在菜谱卡片里，可以更改几人份和计量单位。[^visual] 天气卡片只能在网页和桌面端看到，在手机上会以文字显示。[^visual]

**选择式回答。** Claude 反问你的时候，可能会弹出单选题、多选题、排序之类的选项。点选回答也可以，直接用文字回答也可以。[^visual]

**图示和图表。** 如果想把说明变成图来看，就这样提要求。它会在对话里画出流程图、图表、可以点击查看的图。这个功能叫**自定义可视化**（Custom visuals）。它是测试版（正式发布前的试用版），可以在网页和桌面应用里使用。[^custom] 「设置 > 功能」里也有 ③ 「聊天内可视化」开关。说明是"允许 Claude 在对话中直接生成交互式可视化、图表、图示"。[^screen]

```
请把腌泡菜的顺序，从腌白菜到装进泡菜桶，画成分步骤的流程图。
```

![对话里画出的腌泡菜流程图。腌白菜 → 洗白菜这一行，和处理调料材料 → 拌调料这一行，在中间的「把馅料塞进白菜叶之间」处汇合，最后是「装进泡菜桶」](../../../guide/10-claude/assets/shot-16-custom-visual.png)

*这是在隐身聊天里发送上面提示词后的界面。把鼠标放在图上，也没有看到「复制为图片」「保存为工件」菜单。*[^screen-design]

自定义可视化像画在白板上的画一样，是**不会另外保存的临时图**。帮助文档介绍了保留它的三个菜单。上面的界面里没有看到这些菜单，所以请先看看你的界面里有没有。[^custom][^screen-design]

- 「复制为图片」：复制成图片，粘贴到笔记或演示文稿里。
- 「下载」：以 .svg 或 .html 文件下载。
- 「保存为工件」：变成工件，继续修改。

自定义可视化在手机应用（iPhone·Android）里看不到。[^custom]

<Quiz id="ch204-visuals" />

## 不会生成照片和插画

Claude **不会像画图 AI（图像生成工具）那样生成照片或插画。**[^images] 即使你要它"画一只在海边笑的小狗"，也很难期待得到画图 AI 那样的画。

不过它能做另外一些事。

- **图示和图表**是可以做的。就是前一节的自定义可视化。[^images] 数字图表也可以作为 PNG 图片文件收下来。[^create]
- **看你上传的照片并加以说明**也可以。比如把收据照片整理成表格。[^images]

比较一下不太好的例子和更好的例子。

- **不太好的例子**："给我们店画一只可爱的猫，用来宣传。"
- **更好的例子**："把我们店过去 6 个月的销售额画成柱状图。"

区别只有一点。前者是该由画图 AI 来画的插画，后者是 Claude 能做的图表。如果一定需要照片或插画，请用其他生成图片的服务。比如 ChatGPT 就能生成图片（[ChatGPT 第4章](../11-chatgpt/04-files-images.md)）。

<Quiz id="ch204-images" />

## Claude Docs——一起写的文档

**Claude Docs** 是和 Claude 一起、也和其他人一起修改的文档。Claude 会当着你的面写初稿。写之前它会先问你不清楚的地方，并用评论说明为什么这样写。[^docs]
包括免费套餐在内，所有套餐都可以使用，而且一开始就是打开的。[^docs] 做好的文档保存在「工件」标签页里。

开始的方法如下。[^docs]

- 在对话里请它做一份文档。
- 在消息最前面写上 `/docs`。
- 选择输入框的「输出」→「文档」。

好的要求里包含**这份文档用来做什么、谁来读、要讲什么**。[^docs]

- **不太好的例子**："写一份家庭旅行计划文档。"
- **更好的例子**：像下面这样写上用途、读者和内容。

```
/docs 请做一份 12 月全家去济州岛旅行的计划文档。
用途：发到家庭群里，收集大家的意见。
读者：父母和兄弟姐妹的家人，一共 8 个人。
要讲的内容：3 天 2 夜的日程、两个候选住处、预计费用、每个人要准备的东西。
```

区别有三点。更好的例子里包含了用来做什么、谁来读、要放什么。这就是好的要求里包含的三样东西。[^docs]

需要知道的事。[^docs]

- **想让它修改时，请在评论里 @ 一下 `@Claude`。** 修改之后它会说明理由。
- **可以用「导出」得到 Word、PDF、Markdown、Google 文档。**
- **文档里的图表不会自动更新。** 数字变了的话，请再叫它更新一次。
- **删除后无法恢复。** 没有回收站。删除前请先用导出保存一份。

<Quiz id="ch204-docs" />

## 在 Google 文档、表格、幻灯片里使用

如果你已经在用 Google 文档或表格工作，也可以在那个文件里调用 Claude。这是一个叫 **Claude for Google Workspace** 的扩展程序。Google 文档、表格、幻灯片里会多出一个 Claude 栏（侧边栏）。它是测试版，Pro 及以上的付费套餐可以使用。[^gws]

1. 在 Google Workspace Marketplace（Google 应用市场）里安装 Claude。安装一次，在文档、表格、幻灯片里都能用。
2. 打开文件，点「扩展程序 > Claude > 打开 Claude」。

<!-- 需要截图：Google 表格右侧打开 Claude 侧边栏的界面（示例表格） -->

```
把这张表格 B 列的金额全部加起来，把合计填进最下面的格子。别动其他格子。
```

需要知道的事。[^gws]

- **只读取现在打开的那个文件。**
- **一开始修改前会先问你。** 默认模式是「编辑前询问」。也可以改成「接受所有编辑」，但一开始建议一项一项确认。
- **修改的内容会以我的名义记录在版本记录里。** 如果不满意，在「文件 > 版本记录」里恢复到之前的版本就行。
- **它不能分享文件，也不能更改权限。** 即使你要求，它也不会做。
- **在 Word、Excel、PowerPoint 文件里不能用。** 请先转换成 Google 格式。
- **工作过程中不要关闭 Claude 栏。** 关闭的话，正在做的事就会停下来。一次任务最长 6 分钟，所以大的工作请拆开交给它。
- **在 Chrome、Edge、Safari 里可以用。** Firefox 不行。

<Quiz id="ch204-google" />

## 再看看视频

这是公司自己制作的介绍视频。画面和功能名称可能与本章的说明不同。

> 下面的视频是**英语**的。在 YouTube 视频的设置（齿轮）→ 字幕 → **自动翻译 → 中文**里选择，就能看中文字幕。视频可以直接在本页面里播放。

**[Meet Claude Slides, Claude Design and Claude Docs](https://www.youtube.com/watch?v=To5nrYqvR44)** · Claude · 适合想看看如何在对话里做出演示文稿、宣传图片、一页文档的人（2026 年 9 月，2 分钟）

<YouTube id="To5nrYqvR44" title="Meet Claude Slides, Claude Design and Claude Docs" />

## 亲手试一试

1. 拍一张家里的收据，通过「+」→「上传或添加文件」上传，并要求"把上面写的内容整理成表格"（姓名和卡号要遮住）。
2. 让它做上面的生活费 Excel 表格，并下载。在表格里填几个数字，确认合计会正确变化。
3. 把读书会通知做成工件，试着让它改日期。如果是以文档工件的形式打开的，就选中日期部分，点「用 Claude 编辑」试试。
4. 发送"把腌泡菜的顺序画成流程图"，看看流程图会不会画在对话里。如果图上有「保存为工件」菜单，就点一下试试。

**接续任务**（[筹备读书会](../00-common/practice-kit.md)）：上传示例文件 minutes-last-meeting.txt，然后发送"把已决定的事、要做的事、还没决定的事分成表格。要做的事要写上负责人和期限，没有期限的事写上「期限未定」"。第 3 项的通知，请用 memo-next-month.txt 的内容来做。

## 小结

- 通过「+」→「上传或添加文件」上传照片、文档、表格。一个对话 20 个，PDF 最多 1,000 页。
- PDF 在 100 页以内连图片也会读取，之后只读文字。PDF 以外的文档只读文字。
- 可以让它生成 Excel、Word、PowerPoint、PDF 文件。需要打开「代码执行和文件生成」，而且会多耗用量。
- 工件是在对话旁边打开的成果。它们汇集在「工件」标签页里，用「用 Claude 编辑」修改，用「导出」得到文件。
- 工件一开始只有我能看到。收到分享的人也必须有 Claude 账号才能打开。
- 自定义可视化是不会保存的临时图。想保留的话，就复制、下载或保存为工件。
- Claude 不会生成照片和插画。图示和图表可以做。
- Claude Docs 要写明用途、读者、内容再提要求。删除后无法恢复。
- 在 Google 文档里也能使用（Pro 及以上的测试版）。修改的内容可以通过版本记录恢复。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Upload | 上传 | 把我设备里的文件传到服务里 |
| Artifact | 工件 | 在对话旁边打开的、值得给别人看的成果 |
| Template | 模板 | 开始写文档、演示文稿的框架 |
| Export | 导出 | 得到可以用其他软件打开的文件 |
| Custom visuals | 自定义可视化 | 在对话里画出的图示和图表 |
| Beta | 测试版 | 正式推出前正在试用的功能 |
| Claude Docs | Claude 文档 | 和 Claude、其他人一起修改的文档 |
| Extension | 扩展程序 | 给其他软件添加功能的小程序 |
| Version history | 版本记录 | 记录文件变化过程的历史 |

<ChapterDone :chapter="204" />

下一章：[第5章. 记忆与个性化设置](05-memory.md)

[^screen]: 在 Claude 网页界面（免费套餐，韩语）中直接确认。 "파일 업로드 또는 추가" / "코드 실행 및 파일 생성" / "코드 실행 및 파일 생성에 필요" / "Skills 사용에 필요합니다" / "채팅 내 시각화" / "새로운 무언가 만들기" (确认日期 2026-10-26)
[^upload]: Anthropic 帮助文档，「Upload files to Claude」. "Claude can work with the following document types:" / "Note: You must enable code execution and file creation in your account to upload XLSX files." / "Claude supports the following image formats:" / "Click the "+" button in the lower left corner of the chat box" / "You can also copy images and paste them from your clipboard into Claude." / "File size: 500MB per file" / "Number of files: Up to 20 files per chat" / "You can't upload PDFs over 1000 pages." / "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / "Claude extracts text only from these files. If they contain embedded images, Claude won't be able to read or interpret them." / "For images: Use images that are 1000x1000 pixels or larger." / "use the PDF page numbers as shown in your PDF viewer, not the page numbers printed on the document itself." https://support.claude.com/en/articles/8241126 (确认日期 2026-10-26)
[^create]: Anthropic 帮助文档，「Create and edit files with Claude」. "Code execution and file creation is available to all Claude users (Free, Pro, Max, Team, and Enterprise) on the web, Claude Desktop, and Claude Mobile." / "Code execution and file creation is enabled by default" / "Be specific in your requests—describe the structure, content, and formatting you want." / "Enable file creation from Settings > Capabilities by toggling Code execution and file creation (called Create and edit files in the updated Settings layout) on." / "You can download the files Claude creates or save them directly to Google Drive." / "Claude can create data visualizations in image files like PNG." / "The maximum file size is 30MB per file for both uploads and downloads." / "Note that creating files will use more of your limit compared to normal chats with Claude." / "we recommend you monitor Claude while using the feature and stop it if you see it using or accessing data unexpectedly." https://support.claude.com/en/articles/12111783 (确认日期 2026-10-26)
[^new]: Anthropic 帮助文档，「Claude Cowork and chat are one Claude」. "Claude can create documents, spreadsheets with working formulas, and presentations you can open in PowerPoint." / "Web search: There's no web search toggle. Claude searches the web when it helps." https://support.claude.com/en/articles/16761823 (确认日期 2026-10-26)
[^math]: Anthropic 帮助文档，「How does Claude handle mathematical equations and calculations?」. "complex or mission-critical calculations should be verified using specialized mathematical software or manual methods." https://support.claude.com/en/articles/10366421 (确认日期 2026-10-26)
[^artifacts]: Anthropic 帮助文档，「What are artifacts and how do I use them?」. "It opens beside your conversation, and you can edit it, come back to it, and share it with others." / "Artifacts are available on Free, Pro, Max, Team, and Enterprise plans" / "Important: Artifacts require Cloud code execution and file creation (called Create and edit files in the updated Settings layout) to be turned on in Settings > Capabilities (Free, Pro, Max)" / "Ask for one in any chat, select "Output" in the message box and choose a template, or pick one in the Artifacts tab." / "Everything you make is saved to the Artifacts tab in your Claude sidebar, so you can find it again from any conversation." / "highlight the text you want changed, click "Edit with Claude," and type your request." / "Edit an earlier message to create a different version of the chat, with its own artifacts" / "Docs export to Word, PDF, Markdown, and Google Docs." / "Export the result as an MP4 video. Available on Team and Enterprise plans." / "Claude will attempt to fix the error, but success isn't guaranteed." / "To change sharing settings, use Claude on the web or Claude Desktop." / "Note: Legacy artifacts are artifacts made in a chat before September 16, 2026." https://support.claude.com/en/articles/17153992 (确认日期 2026-10-26)
[^share]: Anthropic 帮助文档，「Share artifacts」. "Artifacts start private to you. Nothing is shared until you share it." / "Open the artifact and click "Share."" / "Pro and Max plans: "Only you" or "Anyone with the link."" / "Everything in Commenter, plus make changes." / "Everyone needs a Claude account. People without one can't open a shared artifact, even with the link." / "choose "Only you" (Pro and Max) or "Only people invited" (Team and Enterprise)." / "Treat someone else's artifact the way you'd treat a file from an unknown sender." https://support.claude.com/en/articles/9547008 (确认日期 2026-10-26)
[^visual]: Anthropic 帮助文档，「Visual and interactive content」. "Data display widgets (weather and recipes) require web search to be enabled." / "On mobile (iOS and Android), Claude provides weather information as text in the conversation." / "change the number of servings or the units of measurement, or click “Get cooking” to launch a step-by-step interface" / "Claude may present interactive options you can click or tap — like multiple choice questions, multi-select options, or a ranking interface." / "Claude decides when a visual response is appropriate based on your question. Just ask naturally." https://support.claude.com/en/articles/13641943 (确认日期 2026-10-26)
[^custom]: Anthropic 帮助文档，「Custom visuals in chat and Cowork」. "Note: Custom visuals are currently in beta and available to all Claude users on web and desktop, in both chat and Cowork." / "Custom visuals are ephemeral by default." / "Download — save the visual as an .svg or .html file." / "They don’t render on Claude for iOS or Claude for Android." https://support.claude.com/en/articles/13979539 (确认日期 2026-10-26)
[^images]: Anthropic 帮助文档，「Can Claude produce images?」. "Claude doesn’t generate photos or illustrations the way image-generation tools do." / "These are generated using HTML and SVG—so you can interact with them, ask follow-up questions, and have Claude adjust them as you go." / "Claude can also view and analyze images you upload." https://support.claude.com/en/articles/9002504 (确认日期 2026-10-26)
[^docs]: Anthropic 帮助文档，「Get started with Claude Docs」. "Claude drafts it in front of you, asks clarifying questions up front, and leaves comments explaining its choices." / "Claude Docs is available on Free, Pro, Max, Team, and Enterprise plans, and it's on by default." / "You can also start your request with /docs, or by selecting “Output” then “Docs” from the message box." / "A good request says what the doc is for, who will read it, and what it should cover." / "To ask Claude for an edit, mention @Claude in a comment." / "To export a doc, click "Export" and choose a format:" / "Charts and diagrams don't update on their own" / "Deleting a doc is permanent. There's no trash" https://support.claude.com/en/articles/16923645 (确认日期 2026-10-26)
[^gws]: Anthropic 帮助文档，「Use Claude in Google Docs, Sheets, and Slides」. "Claude for Google Workspace is available in beta for Pro, Max, Team, and Enterprise plans." / "One install covers Docs, Sheets, and Slides." / "Open a Google Docs, Sheets, or Slides file and go to Extensions > Claude > “Open Claude"" / "Claude reads the file you have open, and only that file" / "Ask before edits (default)" / "Google records them under your name, so they appear in File, Version history like any edit you make yourself." / "Claude cannot share the file, give anyone access, or change who owns it." / "Google doesn’t support extensions in Word, Excel, or PowerPoint files" / "Keep the sidebar open while Claude is working. Closing it stops the current task." / "A single long operation can run for up to six minutes before Google stops it." / "Use Chrome, Edge, or Safari. Firefox is not supported in this beta" https://support.claude.com/en/articles/16951679 (确认日期 2026-10-26)
[^academy-artifacts]: Claude Academy「Claude 101」课程 「Creating with artifacts」. "The practical difference: an artifact opens and updates right in Claude and is shared by link, while file creation hands you a file to download and open in other apps." / "If you want to ensure Claude creates an artifact, just say so: "Create this as an artifact."" / "Ask for the deliverable, not just the content." / "Describe the end user." / "The best artifacts come at the end of a conversation, when Claude already understands the problem." https://academy.claude.com/courses/claude-101/creating-with-artifacts (确认日期 2026-10-26)
[^upload-name]: 帮助文档里，① 菜单的名称写的是「添加文件或照片」（Add files or photos）。名称可能因界面而异。
[^create-name]: 帮助文档写的是，在新的设置界面里这个名称是「创建和编辑文件」（Create and edit files）。名称可能因界面而异。
[^old-search]: 如果是旧界面，请把网页搜索开关打开（[第6章](06-search.md)）。
[^screen-design]: 发送本节的通知提示词和腌泡菜流程图提示词后直接确认。在隐身聊天里，Claude 说"Claude Docs는 시크릿 모드 대화에서는 만들 수 없어서(문서가 계정에 남기 때문입니다)"，并把通知以文字写在了对话里；在普通对话里，「Claude Design · 나만」工件在右侧栏里打开。Claude 指出最初提示词里的「11月15日星期六」实际上是星期日，所以本指南把示例日期改成了 11 月 14 日星期六。流程图在隐身聊天里也画出来了（确认日期 2026-10-28，网页，免费（Free）套餐）

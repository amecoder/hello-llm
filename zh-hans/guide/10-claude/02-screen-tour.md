# 第2章 逛一逛界面——什么在哪里

> **一句话总结**：Claude 的界面只要认识四个地方就够了：**左边的侧边菜单**（过去的对话）、**中间的输入框**（提问的地方和「+」）、
> **输入框下面的模型菜单**（模型·投入程度）、**左下角的我的名字**（设置）。刚开始只用输入框也完全够用。

界面以 2026 年 10 月的网页版为准，图片是免费套餐的韩语界面。Claude 现在正在陆续推送新界面，所以你看到的可能不一样。如果和你的界面名称不同，就找一个名字相近的按钮。

## 新的 Claude 界面和旧界面

Claude 现在**正在更换界面**。在新界面里，通常是把对话和整件事交出去的 **Cowork**（协作模式，[第8章](08-cowork.md)）**合并成了一个对话。** 开始之前不需要先选模式。[^new]

这本指南以**新界面**为准来讲解。拍这本指南图片用的账号是新界面。把下面的首页图片和你的界面比一比。

![登录后的首页整体。红色编号 ①~⑩。左侧侧边菜单上方 ① 「新建」「搜索」「项目」「Artifacts」「自定义」，② 「已固定」「最近项目」对话列表，中间 ③ 输入框「今天需要什么帮助？」，④ 「+」，输入框下面 ⑤ 「项目」，⑥ 「Sonnet 5.5 中等」，⑦ 「手动」，输入框右侧 ⑧ 麦克风和声波图标，右上角 ⑨ 幽灵图标，左下角 ⑩ 「김하나 · Free」。输入框周围没有「Chat」「Cowork」的选项和网页搜索开关](../../../guide/10-claude/assets/shot-01-home-marked.png)

姓名和对话标题是改成示例的界面（免费套餐）。**红色编号和下面「侧边菜单」一节表格里的编号是同一处。**

- ③ 输入框周围哪里都没有「Chat」「Cowork」的选项。[^screen]
- 也没有开关网页搜索的开关。[^screen]
- ② 过去的对话都在「最近项目」（Recents）这一个列表里。[^screen]

如果你的界面和图片差别很大，请展开下面的框。

::: details 如果你用的是旧界面（点击展开）

以前的界面里，通常对话（Chat）和 Cowork 是分开的。新界面从 Pro·Max 套餐开始，依次推送到网页、电脑应用和手机应用。[^new] 即使是同一个套餐，每个人换成新界面的时间也不同。

如果是 Pro·Max 套餐，请看输入框。如果能看到「Chat」和「Cowork」的选项，说明还是旧界面。[^new] 免费套餐不能用这个方法来判断。输入框里没有这个选项，并不代表就是新界面。

不需要你另外做什么。轮到你的时候，会自动换过去。一旦换成新界面，就不能再换回旧界面了。[^new]

| 变化的地方 | 旧界面 | 新界面 |
|---|---|---|
| 输入框模式 | 在「Chat」·「Cowork」中选一个 | 不用选 |
| 网页搜索 | 有开关可以打开关闭 | 没有开关，需要时自己去搜 |
| 对话列表 | — | 简短的提问和长时间的任务都在「Recents」一处 |

出处：Anthropic 帮助文档[^new]

<!-- 需要截图：旧界面输入框里的「Chat」「Cowork」选项（网页版，仍保留旧界面的 Pro·Max 账号） -->

这本指南以新界面为准来讲解，和旧界面不同的地方，会像这样放在折叠框或脚注里说明。

:::

<Quiz id="ch202-new-screen" />

## 侧边菜单——通往过去对话的路

界面左边有一个**侧边菜单**（sidebar）。过去的对话列表和各种菜单都集中在这里。
把上面首页图片里的编号逐个看一遍，是这样的。[^screen]

| 编号 | 位置 | 名称 | 作用 |
|---|---|---|---|
| ① | 侧边菜单上方 | 「新建」「搜索」「项目」「Artifacts」「自定义」 | 新对话、查找对话、各种功能 |
| ② | 侧边菜单 | 「已固定」「最近项目」 | 过去的对话列表（[第3章](03-chats.md)） |
| ③ | 中间 | 输入框「今天需要什么帮助？」 | 写问题的地方 |
| ④ | 输入框左下方 | 「+」 | 添加文件·连接器等 |
| ⑤ | 输入框下方左边 | 「项目」 | 选择项目（[第7章](07-projects-tools.md)） |
| ⑥ | 输入框下方右边 | 「Sonnet 5.5 中等」 | 模型·投入程度菜单 |
| ⑦ | ⑥ 旁边 | 「手动」 | 权限模式 |
| ⑧ | 输入框右侧 | 麦克风·声波图标 | 语音输入、语音模式（[第10章](10-voice-mobile.md)） |
| ⑨ | 右上角 | 幽灵图标 | 隐身模式（[第3章](03-chats.md)） |
| ⑩ | 左下角 | 「김하나 · Free」 | 账号菜单（设置·语言·「获取帮助」） |

最上方正中间能看到「免费套餐 · 升级」。问候语会随时变化，比如「你好！」或「김하나，下午好」。[^screen]

过去的对话，可以在 ① 「搜索」或 ② 列表里找。[^screen][^chats]

::: details 和帮助文档的名称不同时（点击展开）
帮助文档说，过去的全部对话可以在「Chats and tasks」（聊天和任务）里看。[^chats] 这本指南使用的界面里没有看到这个菜单。[^screen] 不同界面可能有差别。
:::

韩语界面和帮助文档里，也有直接写成英语的菜单（例如「Skills」）。[^new][^screen] 界面上出现英语，不用慌。

侧边菜单**不能完全关掉。** 只能展开和收起。[^appearance] 如果觉得界面太窄，可以先收起来，找过去的对话时再展开。

<Quiz id="ch202-sidebar" />

## 输入框和 + 菜单

在中间的输入框里写下问题，按发送按钮，对话就开始了。
点输入框左下方的 **「+」按钮**，或者在输入框里输入 **「/」**，就会出现更多功能和命令。[^start]

![点输入框「+」后的菜单。① 「上传或添加文件」(Ctrl+U)，② 「Skills」，③ 「添加连接器」，④ 「设计系统」，⑤ 「添加插件」，⑥ 带勾选标记的「记忆」上标有红色编号](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

这是免费套餐的界面。**红色编号和下面列表的编号是同一处。**[^screen]

- ① 「上传或添加文件」：上传我电脑里的文档和照片。把文件拖到输入框里也可以（[第4章](04-files-artifacts.md)）。[^upload]
- ② 「Skills」·③ 「添加连接器」·④ 「设计系统」·⑤ 「添加插件」：给 Claude 添加更多功能的菜单。技能·连接器·插件在[第7章](07-projects-tools.md)里讲。
- ⑥ 「记忆」：有勾选标记就是开启状态（[第5章](05-memory.md)）。

刚开始只要知道 ① 就够了。

花较长时间调查并给出报告的 **「Research」（研究）** 也在「+」菜单里。在输入框里输入 `/deep-research` 也可以（[第6章](06-search.md)）。[^new] 研究功能从付费套餐开始提供，所以上面免费账号的菜单里没有看到。[^pricing][^screen]

输入框下面的 ⑦ 「手动」是**权限模式**。它决定 Claude 能多自主地做事。免费账号里也能看到。[^screen]

![点 ⑦ 「手动」后的「权限模式」菜单。① 「手动」(带勾选标记)和 ② 「自动」两项说明上标有红色编号](../../../guide/10-claude/assets/shot-04-permission-marked.png)

- ① 「手动」："Claude 在使用新工具或打开新网站之前会请求确认。" 这是免费账号的默认值。[^screen]
- ② 「自动」："Claude 会自行运行，如果发现看起来不安全的内容，会暂停并确认。"[^screen]

Pro·Max 的默认值是「自动」（Auto）。[^new] 刚开始设成「手动」会更安心。因为它会在使用新工具或打开新网站之前先问你。把发消息这类后果比较大的事交给它时，请在旁边看着。详细说明在[第8章](08-cowork.md#选择确认方式——权限模式)。[^new]

菜单不用全背下来。不知道能做什么的话，直接问 Claude。

```
告诉我，在现在这个界面上，你可以帮我做的事情，只说五件。每一件再各配一个我该怎么拜托你的例句。
```

<Quiz id="ch202-plus" />

## 模型菜单——选择模型·投入程度·思考

在网页版和电脑应用里，**输入框下面**能看到现在使用的模型名称和投入程度（首页图片里的 ⑥ 「Sonnet 5.5 中等」）。在手机应用里，它显示在屏幕上方。[^start][^screen]
点这个名称，就会打开**模型菜单**。帮助文档说，在这里可以决定三件事。[^model]

| 决定的事 | 含义 |
|---|---|
| **模型** | 和哪一个 Claude 对话 |
| **投入程度**（Effort） | 每个回答要花多少功夫 |
| **思考**（Thinking） | 回答之前要不要先经过一个仔细推敲的阶段 |

![点 ⑥ 「Sonnet 5.5 中等」后的模型菜单。① 模型列表（Fable 5.1「Pro 或 Max」·「升级」，Opus 5.5「Pro」·「升级」，带勾选标记的 Sonnet 5.5，Haiku 5.5），② 「投入程度」中等，③ 「更多模型」，④ 最下面 Fable 5.1 的说明文字上标有红色编号](../../../guide/10-claude/assets/shot-03-model-menu-marked.png)

这是免费套餐的界面。**红色编号和下面列表的编号是同一处。**[^screen]

- ① 模型列表：免费账号只能选 Sonnet 5.5 和 Haiku 5.5。Fable 5.1 和 Opus 5.5 旁边带着「升级」。
- ② 「投入程度」：决定每个回答花多少功夫（见下面的「投入程度」）。
- ③ 「更多模型」：查看列表里没有的模型。
- ④ 说明："Fable 5.1 包含在 Max 套餐中，在 Pro 套餐里可以使用额度来使用。"

这个免费账号的菜单里，**没有看到单独的思考开关。** 只有 ② 「投入程度」。[^screen] 思考开关可能会因套餐和模型而出现。

对话过程中随时都可以更改。改过的设置**从下一个回答开始**生效。[^model]

### 选择模型

Claude 有好几个大小和性格各不相同的模型。点模型名称就可以更换，列表里没有的模型在「更多模型」（More models）里。[^model]

模型名称经常变。仅 2026 年一年，就推出了好几次新模型。[^rn] 所以这本指南按**角色**来称呼模型。2026 年 10 月 26 日的名称，以及各套餐能不能用，如下所示。

| 角色 | 名称（系列） | Free | Pro | Max |
|---|---|---|---|---|
| 性能最高的模型 | Fable | 没有 | 只能用额度 | 最多用到每周额度的 50% |
| 大模型 | Opus | 没有 | 有 | 有 |
| 快速模型 | Sonnet | 有 | 有 | 有 |
| 最小最快的模型 | Haiku | 有 | 有 | 有 |

出处：Anthropic 价格页面·帮助文档[^pricing][^fable][^rn]

**使用额度**（Usage credits）是和套餐额度分开、用多少付多少钱的用量。在 Pro 里，性能最高的模型不包含在套餐额度内，所以一开始就只能用这种额度。[^fable]
Max 的“最多 50%”并不是说额度变多了。意思是和其他模型**共用同一份每周额度**，其中最多一半可以用在性能最高的模型上。[^fable]

模型也会从列表中撤下。到目前为止，Anthropic 大多是在模型推出大约 1 年后将其撤下。[^persona] 换成新模型后，如果觉得说话的口气变陌生了，可以把你喜欢的过去的对话给它看，这样拜托它。[^persona]

```
请看一看我觉得很不错的几个过去的对话，然后亲自写出今后要给你的指示。
请整理出我对语气、回答长度和格式的偏好。
```

### 投入程度——花多少功夫

**投入程度**（Effort）越高，回答就越细致。代价是花的时间更久，也会更快用到使用额度的上限。[^model]

![鼠标放在模型菜单的「投入程度」上时，在左边展开的档位列表。① 最上面的说明文字，② 「低」，带「推荐」标记和勾选的「中等」，「高」，「超高」，带「5× 以上用量」警告的「最高」上标有红色编号](../../../guide/10-claude/assets/shot-05-effort-marked.png)

这是免费套餐的界面（Sonnet 5.5）。① 说明文字是这样的："更高的投入程度意味着更全面的回答，但需要更长时间，并且更快用完额度。"[^screen]
② 档位有五种。

| 投入程度 | 适合的事 |
|---|---|
| 「低」·「中等」 | 日常的事 |
| 「高」 | 质量和速度的平衡 |
| 「超高」 | 耗时很长的编程、自己完成多个步骤的任务 |
| 「最高」 | 需要最深入分析的事 |

出处：Anthropic 帮助文档[^model]，档位名称来自界面[^screen]

「最高」旁边带着「5× 以上用量」的警告。这是提示用量可能超过五倍，所以只在确实需要时再选。[^screen]

每个模型推荐的投入程度都带有标记。在这个界面里，是「中等」旁边的「推荐」。[^model][^screen] 大多数情况下保持原样就行。

::: details 和帮助文档的名称不同时（点击展开）
- 帮助文档把模型菜单的位置叫作“发送按钮旁边”。[^model]
- 帮助文档把「超高」叫作「极高」（Extra high），并说只有一部分模型才有。[^model]
- 界面上的「推荐」标记，帮助文档叫作「默认值」。[^model]
:::

### 思考——回答之前先推敲一下吗

打开**思考**（Thinking）后，Claude 在回答之前会先拆分问题、规划方法、比较多条思路。[^model] 这也叫作**扩展思考**（extended thinking）。[^start]
帮助文档介绍的开关方法是这样的：点模型名称，把鼠标放在「投入程度」上方，然后打开或关闭「思考」（Thinking，或「扩展」）开关。[^model]
这个开关可能会因套餐和模型而出现。这本指南使用的免费账号菜单里没有看到。[^screen] 如果没有这个开关，这一节读一读了解就行。
思考和投入程度是**分开设定的**。任意组合都可以用。[^model] 最新的模型里，也有无法关闭思考的。[^model]

打开思考后，回答期间会看到显示时间流逝的「思考」标记。点回答上方的「思考」栏，可以看到 Claude 是怎么想的摘要。[^model]
读这份摘要，就能确认 Claude 是通过哪条路得出结论的。
偶尔会出现提示，说思考在中途断了、看不到剩下的部分。这时可以换个角度重新提问。[^model]

### 什么时候调高

**日常的事，默认值就够了。**[^model] 如果是数学计算、长文档分析、需要经过多个步骤的问题，就试试调高投入程度，或者打开思考。[^model]
无论选哪种设置，最重要的都是**把问题写具体**（[第1阶段第4章](../00-common/04-prompt-basics.md#好提示词的5个要素)）。[^model]

同一个问题，只改变投入程度来问一下。你马上就能感受到快速回答和用心回答的差别。

```
月薪 300 万韩元的上班族，想在 3 年内攒到 2,000 万韩元，每个月需要存多少钱？
请分成考虑定期存款利息和不考虑利息两种情况，把计算过程展示出来。
```

::: details 得到的回答大致是这样（示例——点击展开）
这是这本指南做的示例。实际的回答会因服务和当时的情况而不同。

> **1. 不考虑利息的情况**
> - 3 年是 36 个月。
> - 2,000 万韩元 ÷ 36 个月 = 约 55 万 5,556 韩元
> - 约占月薪 300 万韩元的 18.5%。
>
> **2. 考虑定期存款利息的情况**
> - 假设年利率为 ○%来计算。
> - 第一个月存入的钱计息 36 个月，第二个月的钱计息 35 个月……最后一个月的钱计息 1 个月。
> - 把本金合计（每月存入的钱 × 36）和利息合计（○○韩元）加起来，找到正好是 2,000 万韩元的金额。
> - 每个月约存 ○○万韩元就行。因为有利息，比第 1 种情况稍微少一点。
>
> 实际利率因产品而异，请用你要办理的产品的利率重新计算一下。

**确认一下有没有收到好的回答**：分成两种情况了吗？计算过程一行一行看得到吗？说明了假设利率是百分之几吗？第 1 种情况，请自己用计算器除一遍。

:::

<Quiz id="ch202-model-menu" />

## 对话中出现“模型已更换”的提示

偶尔会弹出**“模型已更换”的提示**。包括性能最高的模型在内，有些模型会自动对问题做安全检查。如果判断属于范围很窄的高风险领域，就会转给另一个模型来回答。[^switch]
这样转交，叫作**回退**（fallback，转给替你接手的模型）。攻击性的黑客技术、病毒·毒素之类的生物风险领域等，就属于这类。[^switch] 大多数问题不会受影响。

模型被更换后，会这样。[^switch]

- **会弹出提示，回答上会标明回答的模型名称。** 自动切换默认是开启的。
- **在这个对话结束之前，会一直停留在更换后的模型上。** 你也可以亲自切回原来的模型。但是，如果引起问题的内容还留在对话里，可能会再次被更换。请改一改前面的消息，再重新发送。
- **也可能因为不是我输入的内容而被更换。** 检查会连记忆、连接的应用、网页搜索结果、上传的文件一起看。

如果不喜欢自动切换，请在设置 → 「功能」（Capabilities）里，关闭「消息被标记时切换模型」（Switch models when a message is flagged）。[^screen] 关闭后，不会更换模型，而是对话暂停，由我自己来选。[^switch]
如果觉得是没有问题的提问却被误拦了，请用「发送反馈」（Send feedback）告诉他们。[^switch]

<Quiz id="ch202-fallback" />

## 设置界面——语言和界面外观

点左下角我的名字（首页图片里的 ⑩），会打开账号菜单。[^signup][^screen]

![点左下角「김하나 · Free」后的账号菜单。最上面的邮箱下面，① 「设置」(Ctrl+Shift+,)，② 「语言」，③ 「获取帮助」，④ 「升级套餐」，⑤ 「下载应用和扩展程序」上标有红色编号，下面还有「了解更多」「获取 API 密钥」「退出登录」](../../../guide/10-claude/assets/shot-07-account-menu-marked.png)

姓名和邮箱是改成示例的界面（免费套餐）。**红色编号和下面列表的编号是同一处。**[^screen]

- ① 「设置」：打开设置界面。
- ② 「语言」：更改界面语言。
- ③ 「获取帮助」：向客户支持提问（[第1章](01-getting-started.md#用不了的时候先试试这些)）。[^support]
- ④ 「升级套餐」：换成付费套餐（[第1章](01-getting-started.md#改成付费前要知道的事)）。
- ⑤ 「下载应用和扩展程序」：下载电脑应用、手机应用等。

点 ① 「设置」，设置界面就会打开。左边的菜单是竖着排列的。

![设置 → 「通用」界面。① 左侧菜单（「通用」「账号」「隐私」「付费」「功能」「记忆」「回顾」「时间与专注」「Claude Code」），② 「显示模式」的「主题」（跟随系统·浅色·深色图标），③ 「语音」的「语言」（韩语）上标有红色编号](../../../guide/10-claude/assets/shot-09-settings-general-marked.png)

这是免费套餐的界面。**红色编号和下面文字里的编号是同一处。**[^screen]

① 左侧菜单中，刚开始只要知道下面这几个就够了。[^screen]

| 设置菜单 | 在这里做什么 | 详细内容 |
|---|---|---|
| 「通用」 | 主题（浅色·深色）、字体、语音语言 | 这一章 |
| 「账号」 | 我的名字、「Claude 指示」、已登录的设备 | [第3章](03-chats.md)、[第5章](05-memory.md) |
| 「隐私」 | 分享过的对话、导出数据 | [第3章](03-chats.md)、[第9章](09-privacy.md) |
| 「付费」 | 更换套餐、取消、收据 | [第1章](01-getting-started.md#改成付费前要知道的事) |
| 「功能」 | 模型自动切换 | 这一章 |
| 「记忆」 | Claude 记住的内容 | [第5章](05-memory.md) |
| 「时间与专注」 | 休息提醒、勿扰时间 | [第5章](05-memory.md#休息提醒与免打扰时间) |

出处：界面[^screen]，Anthropic 帮助文档[^cancel][^switch][^sessions][^share]

要适用于所有对话的指示，写在「账号」里的「Claude 指示」中。[^screen]
付费套餐里还有查看剩余额度的「用量」（Usage）界面（[第1章](01-getting-started.md#使用额度——5-小时、每周、长度)）。[^best] 这个免费账号的设置菜单里没有看到。[^screen]

**更改界面语言**：在账号菜单的 ② 「语言」里选择。[^lang][^screen] 网页版和电脑应用包括韩语在内，可以用 11 种语言。[^lang]
无论界面语言是什么，Claude 都会**用我使用的语言回答。** 即使界面是英语，用韩语提问，也会用韩语回答。[^lang]
语音模式使用的语言要另外设置。在设置 → 「通用」 → 「语音」的 ③ 「语言」里选择（[第10章](10-voice-mobile.md)）。[^screen]

**使用深色界面**：在设置 → 「通用」 → 「显示模式」的 ② 「主题」里，点跟随系统·浅色·深色图标中的一个。[^screen] 选择跟随系统，就会跟着电脑或手机的设置走。[^appearance]
如果觉得文字难读，可以改一改同一处的「界面字体」或「回答字体」。[^screen] 帮助文档介绍说，字体还可以选「阅读障碍友好」。不同界面可能有差别。[^appearance]

::: details 和帮助文档的名称不同时（点击展开）
设置菜单的名称可能因界面而异。

- 帮助文档介绍说，适用于所有对话的指示在新设置界面的「Your Claude」里。[^new] 这个账号里没有看到「Your Claude」，「账号」里的「Claude 指示」就是那个位置。[^screen]
- 语音语言，帮助文档介绍的是设置 → 「功能」 → 语音 → 「语音语言」。[^lang]
:::

<Quiz id="ch202-settings" />

## 亲自试一试

1. 把首页图片和我的界面比较一下。如果差别很大，就展开「如果你用的是旧界面」框来读。
2. 点输入框的「+」按钮，把菜单项逐个读一遍（不点也可以），然后关上。
3. 点输入框下面的模型名称，看一看现在的模型，以及投入程度里带「推荐」的是哪一档。
4. 把上面的储蓄计算问题，分别用投入程度「低」和「高」各发一次，比较回答。如果看到了思考开关，也点一下「思考」栏，读一读摘要。
5. 把设置 → 「通用」里的「主题」改成深色试试，然后换回你喜欢的那一边。

## 整理

- 在新的 Claude 界面里，聊天和 Cowork 合并成一个对话，不用选模式。这本指南以新界面为准（旧界面的说明在折叠框里）。
- 侧边菜单里有过去的对话，左下角我的名字里有设置·语言·「获取帮助」·「升级套餐」。侧边菜单不能关掉，只能展开和收起。
- 用输入框的「+」或「/」，可以打开上传文件、研究之类的功能。输入框下面的「手动」·「自动」是权限模式。
- 在输入框下面的模型菜单里决定模型·投入程度（思考开关会因套餐·模型而出现）。免费套餐只能选 Sonnet·Haiku。日常的事用推荐值就够了。
- 被判断为高风险领域的问题，可能由另一个模型代为回答。可以通过提示和模型标签知道，也可以在设置 → 「功能」里关闭。
- 界面语言在账号菜单的「语言」里改，深色界面和字体在设置 → 「通用」里改。设置菜单的名称可能因界面而异。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Cowork | 协作模式 | 把多步骤的事整件交出去的功能（[第8章](08-cowork.md)） |
| Sidebar | 侧边菜单 | 竖着贴在界面左边的菜单 |
| Recents | 最近项目 | 最近的对话和任务列表 |
| Effort | 投入程度 | 决定每个回答花多少功夫的设置 |
| Extended Thinking | 扩展思考 | 回答之前经过仔细推敲阶段 |
| Usage Credits | 使用额度 | 和套餐额度分开、用多少付多少钱的用量 |
| Fallback | 回退 | 被安全检查拦住的问题，由另一个模型接手回答 |
| Dyslexic Friendly | 阅读障碍友好 | 为阅读文字有困难的人设计的字体 |

<ChapterDone :chapter="202" />

下一章：[第3章. 管理对话](03-chats.md)

[^screen]: 在 Claude 网页界面（免费套餐，韩语）上亲自确认。输入框「오늘 어떤 도움을 드릴까요?」周围没有「Chat」「Cowork」选项和网页搜索开关，侧边菜单「고정됨」「최근 항목」，「+」菜单「파일 업로드 또는 추가」「Skills」「커넥터 추가」「디자인 시스템」「플러그인 추가」「메모리」，「권한 모드」「수동」·「자동」，模型菜单（免费只能选 Sonnet 5.5·Haiku 5.5，没有思考开关），投入程度「낮음」「중간」（推荐）「높음」「엑스트라」「최대」，账号菜单，设置 → 「일반」的「테마」·「음성」 → 「언어」，设置 → 「계정」的「Claude 지침」，设置 → 「기능」的「메시지가 플래그 지정되면 모델 전환」。（确认日期 2026-10-26）
[^new]: Anthropic 帮助文档，《Claude Cowork and chat are one Claude》。"With the new Claude experience, you ask for all of it in the same conversation, with no mode to choose." / "The new Claude experience is rolling out gradually, starting with Pro and Max plans on web, desktop, and mobile." / "If you're on a Pro or Max plan and your message box still shows "Chat" and "Cowork" options, you don't have it yet." / "One conversation list: Your quick questions and longer tasks live together in Recents." / "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" / "Auto (default on Pro, Max, and Team plans): Claude keeps working without stopping to ask about each step, and automated safety checks run before it takes an action." / "For work with real consequences, like sending messages or changing important files, stay close and review what Claude does." / "Instructions for Claude: Set preferences that apply to every conversation in Settings > Your Claude (or Settings > Account in the older Settings layout)." https://support.claude.com/en/articles/16761823 （确认日期 2026-10-26）
[^chats]: Anthropic 帮助文档，《Delete or rename a conversation》。"Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." https://support.claude.com/en/articles/8230524 （确认日期 2026-10-26）
[^support]: Anthropic 帮助文档，《How to get support》。"Click your initials or name in the lower left corner and select “Get help” from the menu." https://support.claude.com/en/articles/9015913 （确认日期 2026-10-26）
[^appearance]: Anthropic 帮助文档，《Customizing your appearance settings》。"Select from Light, Match System, and Dark under Color mode." / "Select from Default, Match System, and Dyslexic Friendly." / "It's not currently possible to completely disable the sidebar." https://support.claude.com/en/articles/8887527 （确认日期 2026-10-26）
[^start]: Anthropic 帮助文档，《Get started with Claude》。"You can click the "+" button in the lower left or type "/" to view additional options and commands" / "displayed either below your text input (on web and desktop) or at the top of your screen (on mobile)." / "You can also choose how much effort Claude puts into each response and whether it uses extended thinking." https://support.claude.com/en/articles/8114491 （确认日期 2026-10-26）
[^upload]: Anthropic 帮助文档，《Upload files to Claude》。"Click the \"+\" button in the lower left corner of the chat box" https://support.claude.com/en/articles/8241126 （确认日期 2026-10-26）
[^model]: Anthropic 帮助文档，《Change the model, effort, and thinking settings》。"The model menu next to the send button controls three settings: which Claude model you're chatting with, how much effort it puts into each response, and whether it uses thinking." / "The selected model and effort level appear next to the send button." / "Click "More models" to view additional options." / "You can change the model, effort level, or thinking setting at any point in a conversation. Changes apply starting with Claude's next response." / "Higher effort means more thorough responses, but they take longer and use more tokens, so you'll reach your usage limits faster." / "Each model has a recommended effort level, marked as "Default" in the menu:" / "Extra high (xhigh) is designed for long-running coding and agentic tasks" / "Thinking lets Claude spend more time breaking down problems, planning solutions, and exploring different approaches before responding." / "Thinking and effort are separate settings, and you can use any combination of the two." / "Switch the "Thinking" (or “Extended”) toggle on or off." / "Click the "Thinking" section to view Claude's thought process summary and problem-solving approach." / "Occasionally, you may notice that Claude's thinking stops before it's complete, with a message stating that the rest of Claude's thought process is not available." / "For everyday tasks, the defaults work well." / "Whichever settings you choose, be specific about your problem or question." 无法关闭思考的模型列表，英文版和韩文版略有不同。https://support.claude.com/en/articles/8664678 （确认日期 2026-10-26）
[^rn]: Anthropic 帮助文档，《Release notes》（2026 年条目）。"We just launched Claude Haiku 5.5, the cheapest, fastest, and most capable small model we’ve released" / "Sonnet 5.5 is a faster, lower-cost complement to Claude Opus 5.5." / "It performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5." / "We just launched Claude Fable 5.1 and Claude Mythos 5.1, the world’s most advanced models for coding and knowledge work." https://support.claude.com/en/articles/12138966 （确认日期 2026-10-26）
[^pricing]: Anthropic 价格页面。模型对比表的 Fable 行 " No Usage credits 50% of weekly limits* 50% of weekly limits* "（列 = Free/Pro/Max 5x/Max 20x），Opus 行 Free 没有，Sonnet·Haiku 行 Free 有。Research 行 Free 没有，从 Pro 开始有。https://claude.com/pricing （确认日期 2026-10-26）
[^fable]: Anthropic 帮助文档，《Claude Fable models on your plan》。"On Pro plans, standard seats on Team plans, and standard seats on seat-based Enterprise plans, Fable models run on pay-as-you-go usage credits from the start, since they aren’t included in your plan's usage limits." / "No. You can use up to 50% of your weekly limit on Fable models, but your use of other models draws from the same usage limits and you can never use more than your weekly limit." https://support.claude.com/en/articles/15424964 （确认日期 2026-10-26）
[^persona]: Anthropic 帮助文档，《Adapt to new model personas after deprecations》。"historically Anthropic has deprecated most models around a year after their initial release." / "you can ask Claude to review some of the conversations you’ve most appreciated and to craft instructions for itself based on those." https://support.claude.com/en/articles/12738598 （确认日期 2026-10-26）
[^switch]: Anthropic 帮助文档，说明对话中模型为什么被更换的文档（文档标题里带有当前的模型名称，所以这本指南里不写出）。"Offensive cybersecurity techniques, such as building exploits, malware, or attack tooling." / "so a block can be triggered by content you didn't type." / "You’ll see a notice explaining that the model switched, and the response will be labeled with the model that answered." / "Editing your previous message before retrying often helps." / "With automatic model switching off, a blocked request pauses the conversation instead of switching models." / "Use "Send feedback" to report it." https://support.claude.com/en/articles/15363606 （确认日期 2026-10-26）
[^signup]: Anthropic 帮助文档，《How do I sign up for the Pro plan?》。"Navigate to Settings > Billing and click the “Upgrade plan” button." 设置通过左下角名字的首字母（或名字）→ 「设置」打开。https://support.claude.com/en/articles/8325609 （确认日期 2026-10-26）
[^cancel]: Anthropic 帮助文档，《Cancel your Pro or Max subscription》。"Navigate to Settings > Billing and click the “Cancel” button." https://support.claude.com/en/articles/8325617 （确认日期 2026-10-26）
[^best]: Anthropic 帮助文档，《Usage limit best practices》。"you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." https://support.claude.com/en/articles/9797557 （确认日期 2026-10-26）
[^lang]: Anthropic 帮助文档，《How to use Claude in your preferred language》。"Claude is available in multiple languages on web and desktop applications." / "Go to the "Language" section." / "Claude will converse with you in the language you use." / "go to Settings > Capabilities, then find Voice > Spoken language and choose a language." https://support.claude.com/en/articles/10769299 （确认日期 2026-10-26）
[^sessions]: Anthropic 帮助文档，《Managing your active sessions》。"Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." https://support.claude.com/en/articles/13124001 （确认日期 2026-10-26）
[^share]: Anthropic 帮助文档，《Share a chat with specific people》。"You can also review everything you've shared from Settings > Privacy under Shared chats." https://support.claude.com/en/articles/16762496 （确认日期 2026-10-26）

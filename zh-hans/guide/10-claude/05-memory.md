# 第5章 记忆与个性化设置 — 不用每次都自我介绍

> **一句话总结**：希望 Claude 始终遵守的事，写在**指令**里；对话中了解到的关于我的内容，由**记忆**来记住。
> 你会学到怎么查看、修改、关闭被记住的内容。还会看到长时间使用时，提醒你休息的休息提醒。

界面以 2026年10月的网页版为准。目前新的 Claude 界面和新的设置界面正在陆续推送，所以菜单名称和位置可能因界面而异。
这一章的截图是免费套餐的网页界面。菜单名称按截图里看到的名称来写。帮助文档里出现的其他名称，集中放在脚注和折叠框里。

## 让 Claude 了解我的三种方法

在[第1阶段第4章](../00-common/04-prompt-basics.md#好提示词的5个要素)里你学过，好的提示词里要包含**背景信息**。
可是“我是小区附近一家小菜店的老板”这样的话，每开一个新聊天就重写一遍，实在麻烦。
正如在[第1阶段第6章](../00-common/06-conversation.md#在新对话里-默认它不知道)里看到的，新对话本来就是在不认识我的状态下开始的。

Claude 有三个功能，可以省去这份辛苦。

| 功能 | 谁来决定 | 比喻 |
|---|---|---|
| **指令**（instructions） | 我自己写 | 贴在店里墙上的点单备忘 |
| **记忆**（memory） | Claude 在对话中保存 | 记得熟客口味的店主 |
| **参考过往对话** | 我一问，Claude 就去查找 | 翻看以前的账本 |

三个功能都不需要一开始就设置得很完美。边用边一点一点调整就行。

<Quiz id="ch205-three-ways" />

## 指令 — 适用于所有对话的规则

**指令**是我自己写下的“请始终遵守的事”。写在这里的内容，会适用于和 Claude 的**所有对话**。[^personal]

打开的位置如下。[^personal]

1. 点左下角我的名字。
2. 选择「设置（설정）」→「账户（계정）」。[^screen]
3. 写在 ②「Claude 指令（Claude 지침）」这一栏里。[^screen]

![设置里的「账户」界面。红色编号标出：①「姓名（성명）」和「希望 Claude 怎么称呼你？」，②「Claude 指令」输入栏，③「退出所有设备的登录」，④「删除账户」](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

姓名和邮箱是改成示例的界面（免费套餐）。**红色编号和下面列表里的编号是同一个位置。**

- ①「姓名（성명）」·「希望 Claude 怎么称呼你？（Claude가 어떻게 불러드릴까요?）」 — Claude 称呼我用的名字
- ②「Claude 指令（Claude 지침）」 — 写下适用于所有对话的规则的栏
- ③「退出所有设备的登录（모든 기기에서 로그아웃）」
- ④「删除账户（계정 삭제）」

② 栏的上方有一段提示，说明这份指令会在聊天和 Cowork 的整体范围内被记在心里。[^screen] 空白处用浅色字写着「例：保持说明简单明了」。[^screen]

::: details 如果设置里看到的不是「账户」而是「Your Claude」（点击展开）
在帮助文档里，这一栏出现在「设置（설정）」→「Your Claude」的「指令（지침）」里。[^personal] 收到新设置界面的账号，可能会看到这样的样子。请以屏幕上看到的名称为准。
:::

如果不知道该写什么，可以从[第1阶段第4章](../00-common/04-prompt-basics.md#好提示词的5个要素)的五个要素里，只挑**每次都一样**的放进去。

```
我是一位经营小区附近小菜店的 50 多岁的老板。我不太懂电脑术语。
- 回答请用敬语，难懂的词请用括号解释。
- 先用一行话说结论，然后再说明。
- 不确定的内容不要编造，请说不知道。
```

比较一下不够好的例子和更好的例子。

- 不够好的例子：“请亲切地回答。”
- 更好的例子：“难懂的词请用括号解释。请先用一行话说结论。”

更好的例子，把该做什么写得很具体。

写好指令后，开一个新聊天，发一个简短的问题试试。只要问问自己：“语气对吗？结论先出来了吗？”就行。

指令不用在第一天就填满。用着用着，你会发现自己**总是在要求改同一件事**。比如“请先说结论”“表格最多三列”。这些话，正是该抄进指令里的句子。[^academy-context] 写下一次，从下次对话开始就不用再说了。

只在特定事情上用的规则，放在**项目指令**里，比放在账户全局的指令里更合适。项目指令只适用于该项目里的聊天。[^personal] 项目会在[第7章](07-projects-tools.md)里讲。

<Quiz id="ch205-instructions" />

## 记忆 — Claude 在对话中记住的内容

**记忆**是 Claude 把对话中了解到的关于我的内容记下来的功能。
在 Free·Pro·Max 套餐里，网页·桌面·手机应用都是**一开始就开着的。**[^memory]
公司用套餐（Team·Enterprise）要管理员允许才能用，在每个人自己打开之前是关闭的。[^memory]

Claude 不会在对话结束后再做总结。它是**在对话的过程中**，按主题分开保存。[^memory]
所以如果你说“截止日期变了”，下一次对话就已经知道这件事了。

在[第1阶段第6章](../00-common/06-conversation.md#在新对话里-默认它不知道)或其他 AI 课程里，你学到的是“新对话从零开始”。[^academy-memory] 在 Claude 里，只要记忆开着，新对话也能带着我告诉过它的内容开始。
如果你真想看看从白纸开始的样子，请在新聊天里发第一条消息之前，先把「+」→「记忆」关掉。这样那个聊天里就不会用到记住的内容。[^off] 方法在下面的“只关闭一个聊天的记忆”里。

### 记住什么

Claude 会记住对一起工作有帮助的日常背景信息。[^memory]

- 我的角色，我正在做的事
- 工作和生活中出现的人和地方
- 喜欢的沟通方式和工作方式
- 正在进行的事情的细节

Claude 也会自己决定保存。如果有一定要留下的内容，直接说“记住”就行。[^memory]

```
记住：我在首尔开小菜店，顾客主要是 40~60 岁的人。
我请你写宣传文案时，请按这个顾客群来写。
```

### 不会记住的内容

健康、种族、宗教、政治、性取向这类**敏感话题**，默认不保存。[^sensitive]
如果不想每次都重新解释，可以在「设置（설정）」→「记忆（메모리）」里，打开「在记忆中包含敏感话题（민감한 주제를 메모리에 포함）」。[^screen][^sensitive][^your-claude] 一开始是关闭的。[^screen]

身份证号码、犯罪记录、金融账户号码、居留身份，**即使你拜托它也不会保存。**[^sensitive]
但这并不意味着可以把这类信息写进聊天里。输入之前，请先回想一下[第1阶段第9章](../00-common/09-safety.md#不要放进去的东西)。

> 在项目里，会单独积累属于该项目的记忆。不会使用其他项目的记忆。[^memory] 详细内容在[第7章](07-projects-tools.md)里看。

<Quiz id="ch205-memory" />

## 查看并修改被记住的内容

你可以亲自看到 Claude 记住了关于我的什么。
与记忆有关的设置，集中在「设置（설정）」→「记忆（메모리）」这一个界面里。[^screen]

![设置里的「记忆」界面。红色编号标出：①「从聊天中生成记忆」开关，②「在记忆中包含敏感话题」开关，③「从其他 AI 提供商导入记忆」和「开始导入」，④「导出记忆」和「导出」](../../../guide/10-claude/assets/shot-09-settings-memory-marked.png)

这是免费套餐的界面。**红色编号和下面列表里的编号是同一个位置。**

- ①「从聊天中生成记忆（채팅에서 메모리 생성）」 — 打开和关闭记忆的开关
- ②「在记忆中包含敏感话题（민감한 주제를 메모리에 포함）」 — 让它也记住健康·宗教等话题的开关
- ③「从其他 AI 提供商导入记忆（다른 AI 제공업체에서 메모리 가져오기）」 — 把其他 AI 的记忆搬过来
- ④「导出记忆（메모리 내보내기）」 — 把记忆下载成文件

这个界面下方有已保存的记忆列表。[^screen] 点开主题来读，用铅笔图标修改，或者用「删除（삭제）」删掉就行。[^manage][^your-claude]

<!-- 需要截图：有已保存记忆的账号里的主题列表和编辑·「删除」按钮 -->

列表最下面还有一个输入栏，写着「告诉 Claude 需要修改的内容（Claude에게 변경할 내용을 알려 주세요）」。[^screen]
不用特地跑到设置界面。在聊天里用话说一遍来修改，从下一次对话起也会生效。[^manage]

```
我开小菜店这件事，现在可以忘掉了。上个月我已经把店关了。
```

打开列表之后，请问问自己：“有没有错误的内容？有没有不想留下的内容？”

### 删了聊天，记忆还在

有一点很容易搞混。**即使删除了对话，从那场对话里产生的记忆也不会被删除。**[^manage]
如果有想删掉的内容，请到「设置（설정）」→「记忆（메모리）」的列表里，把那条记忆单独删掉。

> 这个说明以现在的新记忆为准。部分公司用套餐里还保留着旧方式的记忆。[^manage] 如果和你的界面不一样，请以界面为准。

<Quiz id="ch205-manage" />

## 关闭记忆 — 暂停与重置

记忆开关是「设置（설정）」→「记忆（메모리）」里的 ①「从聊天中生成记忆」（Memory from chats）。[^screen][^off][^your-claude]
点它想要关闭时，会让你在两个选项里选一个。[^off]

- **「暂停记忆」**（Pause memory） — 已有的记忆原样保留。只是既不使用，也不新建。
- **「重置记忆」**（Reset memory） — 连项目记忆在内，**全部永久删除**。无法恢复。

如果只是想暂时歇一歇，请选暂停。重置的话，即使再打开，也要从头开始。[^off]

### 只关闭一个聊天的记忆

也可以让记忆保持开启，只在**这一次聊天里**关闭。[^off]

1. 打开一个新聊天。
2. 点输入框里的「+」。
3. 点菜单最下面的 ⑥「记忆」（Memory）把它关掉。右边有勾选标记时，表示是开着的状态。[^screen]
4. 发送第一条消息。

![点输入框里的「+」后打开的菜单。红色编号标出：①「上传或添加文件」，②「Skills」，③「添加连接器」，④「设计系统」，⑤「添加插件」，⑥ 带勾选标记的「记忆」](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

这是免费套餐的界面。这一章用到的是 ⑥「记忆」。其余的在[第4章](04-files-artifacts.md)和[第7章](07-projects-tools.md)里讲。

**只能在发送第一条消息之前**关闭。对话一开始，就不能再改了。[^off]

这样开始的聊天，和[第3章](03-chats.md)里的**隐身聊天**不同。只关了记忆的聊天，仍然会留在对话记录里。[^off] 如果连记录都不想留下，请用隐身聊天。

| 选择 | 记忆 | 对话记录 |
|---|---|---|
| 「+」→ 关闭「记忆」 | 不使用也不新建 | 会留下 |
| 隐身聊天 | 不保存 | 不留下 |

<Quiz id="ch205-off" />

## 参考过往对话

你也可以问“上次聊的那个，你还记得吗”。
在付费套餐（Pro·Max·Team·Enterprise）里，Claude 会**查找过往的对话**，并接着用里面的内容。[^past]

自然地问就行。

```
上次一起做的店铺宣传文案，你还记得吗？接着在那个基础上再润色一下。
```

Claude 一旦去查找过往对话，当前聊天里就会出现**使用了工具的标记**。[^past]
被找来用的对话，会附上通往原对话的链接。[^past] 点链接看看，确认 Claude 找到的是不是对的对话。

需要了解的几点。

- **项目里的对话**，只会在该项目里查找。[^past]
- **想关掉的话**，请在「设置（설정）」→「记忆（메모리）」里关闭「搜索和引用聊天（채팅 검색 및 참조）」。[^past][^past-where] 这是付费套餐的功能，所以在这一章的免费套餐界面里，看不到这个开关。[^screen]
- 在侧边菜单里自己查找过往对话的方法，在[第3章](03-chats.md)里讲。

<Quiz id="ch205-past-chats" />

## 迁入·导出其他 AI 的记忆

如果你原来用别的 AI 服务，现在换到了 Claude，可以把那边积累的记忆带过来。
**所有套餐**都可以在网页和桌面应用上做到。[^import]

1. **从原来用的 AI 里提取记忆。** 帮助文档里有推荐的提示词。这是一段以 "I'm moving to another service and need to export my data." 开头的英文提示词。请到脚注的帮助链接里，把全文复制下来用。[^import]
2. **在 Claude 里打开导入。** 点「设置（설정）」→「记忆（메모리）」里 ③「从其他 AI 提供商导入记忆」旁边的「开始导入（가져오기 시작）」。[^screen][^your-claude]
3. **粘贴。** 把提取来的文字粘贴进输入栏，点「添加到记忆（메모리에 추가）」。[^import]
4. **确认。** 完成后，点「查看 Claude 对我了解到的内容（Claude가 나에 대해 학습한 내용 보기）」，看看进去了什么。[^import]

导入之前，可以修改提示词，**把敏感信息去掉。**[^import] 不想留下的内容，一开始就不放进去更安全。

有两点需要知道。

- **这是实验功能。** 导入的记忆不一定总能正确写入。[^import]
- **和工作无关的个人信息，可能不会被保留。**[^import]

反过来，如果想把 Claude 的记忆**导出**，请点「设置（설정）」→「记忆（메모리）」里 ④「导出记忆」旁边的「导出（내보내기）」。你会下载到一个 .zip 文件，里面是 Markdown（只装文字的简单文档格式）文件。[^screen]
在聊天里这样拜托它也可以。[^import]

```
把记忆里关于我的内容，原封不动、一个字都不要改，全部写出来。
```

把拿到的文字保存成电脑上的文件，就成了备份。

<Quiz id="ch205-import" />

## 休息提醒与免打扰时间

和 AI 聊着聊着，有时会不知不觉过去很久。这时可以用的功能有两个。
在 Free·Pro·Max 套餐里，以**测试版**（beta，正式发布前的试用功能）提供。[^wellbeing]

打开的位置是「设置（설정）」→「时间与专注（시간 및 집중）」（Time and focus）。[^screen][^wellbeing-name]

![设置里的「时间与专注」界面。红色编号标出：①「休息提醒」和选择小时·分钟的两个栏，②「免打扰时间」和周日~周六的星期按钮](../../../guide/10-claude/assets/shot-09-settings-time-marked.png)

这是免费套餐的界面。**红色编号和下面列表里的编号是同一个位置。**

- ① **休息提醒** — 先选好小时和分钟。[^screen] 用到那个时长，就会弹出提醒。你可以选择停下，稍后再提醒，或者关掉提醒继续用。[^wellbeing]
- ② **免打扰时间**（quiet hours）[^quiet-name] — 选出为了做别的事而空出来的星期几。[^screen]

在网页或桌面端设定一次，手机应用也会适用。[^wellbeing]

两者都**不是强制锁定。** 你随时可以点「继续」接着用。[^wellbeing]
而且它们和套餐的使用额度是**两回事。**[^wellbeing] 使用额度在[第1章](01-getting-started.md)里讲过。

<Quiz id="ch205-wellbeing" />

## 亲手试一试

1. 打开「设置（설정）」→「记忆（메모리）」里的列表，读一读 Claude 记住了关于我的什么。如果有错的内容，就修改或删除。
2. 在「设置（설정）」→「账户（계정）」的「Claude 指令」里，像上面的示例那样，写下一行关于我的背景信息和三行规则。
3. 在新聊天里只发一句“推荐三件周末可以做的事”。看看语气和格式是不是按指令来的。
4. 再开一个新聊天，在发第一条消息前把「+」→「记忆」关掉，再发同样的问题。比较一下两个答案有什么不同。

**连续任务**（[准备读书会](../00-common/practice-kit.md)）：把你对通知文一直以来的期望，写成一行规则放进「Claude 指令」。例：“写通知文时，把日期·地点·需要准备的东西放在最上面。”这一行，到第7章也可以挪到项目指令里。

## 小结

- 指令是我写的规则，适用于所有对话。写在「设置」→「账户」→「Claude 指令」里。只在特定事情上用的规则，放在项目指令里。
- 记忆是 Claude 在对话过程中按主题保存的。Free·Pro·Max 一开始就是开着的。
- 敏感话题默认不保存，身份证号码、账户号码之类，即使拜托也不会保存。
- 在「设置」→「记忆」里查看和修改。删了对话，记忆也还在，所以要另外删除。
- 关闭记忆时，暂停会保留记忆，重置会全部删除。只想关一个聊天，就在第一条消息之前关「+」→「记忆」。
- 在付费套餐里，可以查找过往对话并接着用。
- 其他 AI 的记忆，用「开始导入」搬过来。这是实验功能。我的记忆，用「导出」下载。
- 休息提醒和免打扰时间，在「设置」→「时间与专注」里设定。这是提醒，不是锁定。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Instructions | 指令 | 为了适用于所有对话，我自己写下的规则 |
| Memory | 记忆 | Claude 把对话中了解到的关于我的内容记住的功能 |
| Pause memory | 暂停记忆 | 保留记忆，但不使用也不新建 |
| Reset memory | 重置记忆 | 把所有记忆永久删掉 |
| Search and reference chats | 搜索和引用聊天 | 查找过往对话，用在当前答案里的功能 |
| Memory import | 导入记忆 | 把其他 AI 里积累的记忆搬到 Claude 的功能 |
| Time and focus | 时间与专注 | 设定休息提醒和免打扰时间的设置（帮助文档里的新名称是 Wellbeing） |
| Quiet hours | 免打扰时间 | 事先定好为做别的事而空出来的星期几的功能 |

<ChapterDone :chapter="205" />

下一章：[第6章. 搜索与调研](06-search.md)

[^screen]: 在 Claude 网页界面（免费套餐，韩语）中亲自确认。「设置（설정）」→「账户（계정）」的「Claude 指令（Claude 지침）」："Claude는 Anthropic의 가이드라인 범위 내에서 이 계정 및 연결된 모든 계정의 채팅과 Cowork 전반에 걸쳐 이 지침을 염두에 둡니다."（意思是：Claude 会在 Anthropic 准则的范围内，把这份指令记在心里，用于这个账号及所有关联账号的聊天和 Cowork 整体。） / 「设置」→「记忆（메모리）」：「从聊天中生成记忆（채팅에서 메모리 생성）」、「在记忆中包含敏感话题（민감한 주제를 메모리에 포함）」、「从其他 AI 提供商导入记忆（다른 AI 제공업체에서 메모리 가져오기）」、「导出记忆（메모리 내보내기）」（"把记忆下载为装有 Markdown 文件的 .zip 文件。"） / 「+」菜单里的「记忆」 / 「设置」→「时间与专注（시간 및 집중）」：「休息提醒（휴식 알림）」、「免打扰时间（방해 금지 시간）」（确认日期 2026-10-26）
[^personal]: Anthropic 帮助文档，《Understanding Claude's personalization features》。"Any instructions you add here will be applied to all of your conversations with Claude." / "Select "Settings," then "Your Claude" (or "Account" in the older Settings layout)." / "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728（确认日期 2026-10-26）
[^memory]: Anthropic 帮助文档，《Use Claude’s chat search and memory to build on previous context》。"Memory is on by default for Free, Pro, and Max plans on the web, Claude Desktop, and Claude Mobile" / "On Team and Enterprise plans, owners control whether memory is available, and it's off for each member until they turn it on." / "Claude saves memory as a set of individual topics as you chat, rather than summarizing conversations after they end." / "Your role, projects, and professional context" / "Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." https://support.claude.com/en/articles/11817273（确认日期 2026-10-26）
[^sensitive]: Anthropic 帮助文档，《Use Claude’s chat search and memory to build on previous context》。"By default, Claude does not store topics related to personal or sensitive subject matter" / "Turn on Include sensitive topics in memory in Settings > Your Claude" / "This includes government ID numbers, criminal history, financial account numbers, and immigration status." https://support.claude.com/en/articles/11817273（确认日期 2026-10-26）
[^manage]: Anthropic 帮助文档，《Use Claude’s chat search and memory to build on previous context》。"Select any topic to read it, then use the edit icon to change it or select "Delete" to remove it." / "Tell Claude what you'd like it to remember, change, or forget, and the update applies to your next conversation." / "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed" / "A small number of Team and Enterprise organizations still use the legacy memory from chats experience." https://support.claude.com/en/articles/11817273（确认日期 2026-10-26）
[^off]: Anthropic 帮助文档，《Use Claude’s chat search and memory to build on previous context》。"navigating to Settings > Your Claude and turning on Memory from chats" / "Reset memory: Permanently deletes all memories including project memories." / "You need to turn memory off before you send the first message." / "Unlike incognito chats, they stay in your chat history." / "Claude won't use what it remembers about you in that chat, and nothing from the chat is saved to memory." https://support.claude.com/en/articles/11817273（确认日期 2026-10-26）
[^past]: Anthropic 帮助文档，《Use Claude’s chat search and memory to build on previous context》。"Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Individual project conversations (searches are limited to within each specific project)." / "navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273（确认日期 2026-10-26）
[^import]: Anthropic 帮助文档，《Import and export your memory from Claude》。"Memory imports are available for Free, Pro, Max, Team, and Enterprise plans on the web and Claude Desktop." / "I'm moving to another service and need to export my data." / "Paste the exported text from your previous AI provider into the text box and click the "Add to memory" button to submit it." / "Click the "See what Claude learned about you" button to start a new conversation" / "You can customize this prompt to exclude any sensitive information before importing into Claude." / "Claude may not retain imported personal details unrelated to work." / "Important: Memory imports are experimental and still in active development" / "Write out your memories of me verbatim, exactly as they appear in your memory." https://support.claude.com/en/articles/12123587（确认日期 2026-10-26）
[^wellbeing]: Anthropic 帮助文档，《Set break reminders and quiet hours》。"Break reminders and quiet hours are in beta on Free, Pro, and Max plans." / "Go to Settings > Wellbeing (or Settings > Time and focus in the older Settings layout)." / "When you reach the amount you set, Claude shows a reminder. You can stop, snooze it, or dismiss it and keep going." / "Neither is a hard lock, so you can always continue past them." / "They’re separate from your plan’s usage limits." https://support.claude.com/en/articles/15672868（确认日期 2026-10-26）
[^academy-context]: Claude Academy《Introduction to Claude Cowork》课程《Standing context: Global instructions and projects》。"Your global instructions don't need to be complete on day one." / "those are global-instruction candidates." https://academy.claude.com/courses/introduction-to-claude-cowork/giving-cowork-context（确认日期 2026-10-26）
[^academy-memory]: Claude Academy《AI capabilities and limitations》课程《Working Memory》。"Then open a brand-new conversation and ask a question that assumes it remembers what you taught it. Watch it start from zero." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory（确认日期 2026-10-26）
[^your-claude]: 在帮助文档里，这个菜单出现在新设置界面的名称「设置（설정）」→「Your Claude」之下（例：记忆列表在「Your memory」旁边的「管理」里）。收到新设置界面的账号，可能会看到这样的样子。请以屏幕上看到的名称为准。
[^past-where]: 帮助文档说明，这个开关在「设置」→「Your Claude」里；在旧界面里，则在「设置」→「记忆」里。
[^wellbeing-name]: 在帮助文档里，它也以新设置界面的名称「Wellbeing」出现。可能因界面而异。
[^quiet-name]: 帮助文档的韩语译名是「조용한 시간」（安静时间）。

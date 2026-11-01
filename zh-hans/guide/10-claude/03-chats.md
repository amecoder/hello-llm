# 第3章 管理对话——查找、整理、分享、隐藏

> **一句话总结**：用完的对话可以**重命名或删除**；过去的对话可以在列表里找，也可以让 Claude **帮你找**。
> 给别人看的时候，用**邀请指定的人**或**公开链接**；不想留下记录的时候，用**隐身聊天**。

界面以 2026 年 10 月的网页版为准。把聊天和 Cowork 合并起来的新 Claude 界面正在陆续推送，所以你看到的界面可能不一样。手机应用的菜单位置略有不同。

什么时候适合开一个新对话，第1阶段已经学过了。就是话题变了、总是忘记最初的指示，或者对话变得太长的时候（[第1阶段第6章](../00-common/06-conversation.md#什么时候开始新对话)）。在 Claude 里也一样适用。这一章来看看怎么处理这些积累下来的对话。

## 重命名和删除对话

为了以后好找，请把对话的名字改成你自己的话。
在网页上这样操作。

1. 在侧边菜单的「已固定」或「最近项目」列表里找到这个对话。[^screen]
2. 把鼠标放在对话上，点右边的「⋯」（三个点）按钮。[^screen]
3. 选择「重命名」或「删除」。[^screen] 删除时，要在确认窗口里再点一次。[^delete]

![在侧边菜单里展开某个对话的「⋯」菜单的界面。① 「⋯」按钮，② 「重命名」，③ 「添加到项目」，④ 「归档」，⑤ 「删除」都标有红色编号](../../../guide/10-claude/assets/shot-11-chat-menu-marked.png)

对话标题是改成示例的画面（免费套餐）。**红色编号对应下面列表里的同号内容。**[^screen]

- ① 「⋯」：把鼠标放在对话上才会出现的按钮。
- ② 「重命名」：把对话标题改成你自己的话。
- ③ 「添加到项目」：把对话放进项目。项目在[第7章](07-projects-tools.md)里讲。
- ④ 「归档」：把对话从列表里收起来。它和删除是不同的菜单。
- ⑤ 「删除」：删掉对话。

同一个菜单里还有「取消固定」（或固定）和「下移」。[^screen] 固定的对话会集中在侧边菜单的「已固定」列表里。

::: details 想一次删除多个对话（点击展开）
帮助文档里也有一次删除多个对话的方法。在完整的对话列表（「聊天和任务」，Chats and tasks）里点「⋮」→「选择」，然后勾选要删除的对话，或点最上面的「全选」。[^delete] 菜单名称可能因界面而异。
:::

在手机上，方法略有不同。[^delete]

- **iPhone**：在聊天列表里长按对话。
- **Android**：点打开的对话右上角的「⋮」。要删除多个时，点列表右上角的清单图标，再用垃圾桶图标删除。

删除前要知道的事。

- **删除的对话会立刻从列表里消失。** 在公司的服务器上，也会在 30 天内被删除。[^delete] 帮助文档里没有恢复的方法。请想好删了没问题再点。
- **删除对话后，从这个对话里产生的记忆还会保留。** 记忆（Claude 记住的关于你的内容）要另外删除。[^memory-delete] 删除的方法在[第5章](05-memory.md)里讲。

<Quiz id="ch203-delete" />

## 查找过去的对话

查找过去的对话有两条路。

**第一，在列表里找。** 浏览一下侧边菜单的「最近项目」列表。侧边菜单上方还有一个「搜索」按钮。[^screen] 简短的提问和长时间的任务，都集中在「最近项目」（Recents）这一个列表里。[^new] 如果把标题改成你自己的话，这时就会快很多。

**第二，让 Claude 帮你找。** 如果是付费套餐（Pro·Max·Team·Enterprise），在新对话里直接问就可以了。网页、桌面端、手机应用都可以。[^search]

```
帮我找一下上周问过 Excel 函数的那个对话。把当时告诉我的函数再整理一遍。
```

当 Claude 翻查过去的对话时，在对话中会显示为**工具调用**（Claude 取出一个功能来使用）。回答里用到的过去对话，会以指向原对话的链接（引用）的形式附上。[^search] 点链接打开原对话，马上就能确认 Claude 有没有找错对话。

也要知道搜索的范围。[^search]

- 在项目之外提问，会在**项目之外的全部对话**里查找。
- 在项目里提问，只会在**该项目里的对话**中查找。项目在[第7章](07-projects-tools.md)里讲。
- 这个搜索不会查找以前的 Cowork 任务。那样的任务请在「最近项目」里按名称查找。[^new]

如果不想让 Claude 翻查过去的对话，请在「设置 > 记忆」（或「设置 > Your Claude」）里关掉「搜索和引用聊天」（Search and reference chats）。[^search]

::: details 如果看不到这个开关（点击展开）
帮助文档写着，这个开关在「设置 > Your Claude」或「设置 > 记忆」（Memory）里。[^search] 拍摄本章图片用的免费账号里，看不到这个开关。因为查找过去的对话是付费套餐的功能。[^screen] 界面可能有所不同。
:::

<Quiz id="ch203-search" />

## 展示对话——给指定的人

把对话给别人看的方法有两种。一种是只让你指定的人看的**邀请指定的人**，另一种是让拿到链接的任何人都能看的**公开链接**。邀请指定的人是默认方式。[^share-people] 先来看这一种。

1. 点上方对话标题旁边的 ▾ 菜单，选择「分享会话」。如果右边没有打开工件（Artifact）栏，也可以点右上角的「分享」按钮打开。
2. 在「通过邮箱添加人员」栏里，写上收件人的邮箱。
3. 点「邀请」。[^screen-share]

![「分享会话」窗口。有"仅分享到目前为止的消息"的提示，「通过邮箱添加人员」栏和「邀请」，「有访问权限的用户」下面是「仅受邀者」和我的名字（管理员），下方有「复制链接」按钮](../../../guide/10-claude/assets/shot-15-session-share.png)

*名字和邮箱是改成示例的画面。没有邀请任何人就关闭了。在新界面里，对话被称为「会话」。*

收件人会收到一封邮件，里面有你的名字、对话标题和打开链接。包括免费套餐在内，所有套餐都可以使用。[^share-people]

这种方式有以下特点。[^share-people]

- **只有被邀请的邮箱才能打开。** 即使收件人转发了邮件，别人也打不开。
- **只能查看。** 收件人不能继续这个对话，不能复制到自己的账号，也不能下载文件。
- **没有 Claude 账号的人也可以邀请。** 创建一个免费账号就能看。没有打开的邀请，30 天后会失效。
- **每天能邀请的人数有上限。** 具体数字帮助文档里没有写。
- **目前还不能在手机应用里发送。** 请在网页上发送。收到的对话在任何设备上都能打开。

分享是**像拍照一样留下那一刻的样子**（快照，snapshot）。[^share-old] 分享之后再聊的内容，收件人看不到。如果想让对方看到新内容，请在分享窗口里点「更新已分享的聊天」（Update shared chat）。[^share-people]

附加的文件也不会放进分享的内容里。文件始终只有你自己能看到。[^share-old]

如果不想再给别人看，请在分享窗口里点「关闭」（Turn off）。这样链接会立刻对所有人失效。删除对话，链接也会失效。[^share-people]
到目前为止分享过的对话，可以在一个地方集中查看，并逐个关闭。[^share-people] 请点「设置 > 隐私」里「已分享的聊天」旁边的「管理」。[^screen]

<Quiz id="ch203-share" />

## 公开链接——让任何人都能看

公开链接是只要有链接，**任何人**都能打开。没有 Claude 账号也可以。只能查看这一点，和邀请相同。[^public]
只有个人套餐（Free·Pro·Max）可以使用。公司套餐（Team·Enterprise）只能在组织内部分享。[^public]

公开链接也是在对话界面的「分享」里创建。请按分享窗口里显示的项目操作。

::: details 不同的帮助文档对创建步骤的写法不一样（点击展开）
创建公开链接的步骤，不同的文档写法不同。旧的帮助文档说，点「分享」之后，在弹出的窗口里再点一次「分享」就会生成链接。[^share-old] 界面可能有所不同。
:::

使用公开链接之前，只需记住一条原则。用帮助文档里的原话说就是**"把公开链接当作公开的东西"**。[^public] 如果是不会发到互联网上的内容，也不要做成公开链接。

- **即使只发给一个人，也是公开的。** 收件人可以转发，也可以发布到别处。没有办法限制成只有特定的人能看。
- **会请求搜索引擎不要收录。** 但这并不能阻止链接被传播，也不能阻止别人制作副本。
- **关闭后，链接会立刻失效。** 但别人已经做好的副本或屏幕截图，是删不掉的。

包含 Claude 生成的文件（第4章）的对话，在个人套餐里不能公开分享。[^file-share]

比较一下不太好的例子和更好的例子。

- **不太好的例子**：把家人健康咨询的对话做成公开链接，发给兄弟姐妹。
- **更好的例子**：用兄弟姐妹的邮箱，邀请他们查看同一个对话。

区别只有一点。公开链接只要兄弟姐妹转发，任何人都能打开；而邀请只能用兄弟姐妹的邮箱打开。分享之前，请先浏览一遍对话里有没有姓名、电话号码之类的个人信息（[第1阶段第9章](../00-common/09-safety.md#_2-个人信息和机密——放进去之前先想一想)）。

<Quiz id="ch203-public-link" />

## 不留下记录——隐身聊天

像挑选礼物这样不想留在记录里的对话，请用**「隐身聊天」**（Incognito chat）。包括免费套餐在内，所有套餐都可以使用。[^incognito]

1. 在项目之外打开一个新对话。[^incognito]
2. 点屏幕右上角的**幽灵图标**（「使用隐身模式」）。[^screen]
3. 屏幕四周变黑，左上角出现「隐身」标记，就开始了。[^screen][^incognito-name]

![打开隐身模式的界面。① 左上角的「隐身」标记，② 虚线围起来的输入框和它上面的标题「这是隐身模式」，③ 输入框下面的提示文字，④ 右上角的 ✕ 按钮都标有红色编号](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

这是免费套餐的界面。**红色编号对应下面表格里的同号内容。**[^screen]

| 编号 | 位置 | 名称 | 作用 |
|---|---|---|---|
| ① | 左上角 | 「隐身」 | 表示正在隐身对话 |
| ② | 中间 | 输入框 | 被虚线围起来，和普通对话区分开 |
| ③ | 输入框下面 | 提示文字 | 说明不会留下记录 |
| ④ | 右上角 | ✕ | 退出隐身对话 |

③ 的提示文字是这样的。"隐身会话不会留在历史记录、记忆和搜索中，也不会用于 Claude 的训练。"[^screen]

隐身聊天的特点。[^incognito]

- **不会保存到对话记录和记忆里。** 不会留在侧边菜单的对话列表里。
- **不会用于训练。** 这个对话不会用来让 AI 变得更好。
- **也不会使用已有的记忆。** 不过，你设置过的个人偏好之类的资料信息还是会用到。
- **不能变成普通对话。** 关闭之后也不能再打开。需要留下的回答，请在关闭前复制下来。

这并不意味着"哪里都不会留下"。**它不会留在记录里，但默认会保存 30 天。**[^incognito] 密码之类的信息，在隐身聊天里也不要输入。

在新界面里，在隐身聊天中 **Claude 不能生成文件，也不能运行代码。**[^incognito] 生成文件在第4章里讲。

::: details 为什么隐身聊天里不能生成文件？（点击展开）
因为即使你在用新的 Claude 界面，隐身聊天也是以旧界面的方式打开的。[^incognito] 旧界面的内容在[第2章](02-screen-tour.md#新的-claude-界面和旧界面)里。
:::

### 保留对话，只关闭记忆

有时你希望保留对话记录，但不让 Claude 使用关于你的记忆。这时请在新对话里，**发送第一条消息之前**，关掉「+」菜单里的「记忆」（Memory）。对话开始之后就不能再改了。[^memory-off]
在项目里不能使用隐身聊天，也看不到幽灵图标。在项目里请用这个方法。[^incognito]

| | 「隐身聊天」 | 只关闭记忆的对话 |
|---|---|---|
| 在对话列表里 | 不保留 | 保留 |
| 使用或添加记忆吗 | 不会 | 不会 |
| 以后搜索过去的对话时 | 搜不到 | 搜得到 |
| 在项目里 | 不能用 | 可以用 |
| 在哪里打开 | 右上角的幽灵图标 | 「+」→ 关闭「记忆」 |

来源：Anthropic 帮助文档[^incognito][^memory-off]

如果你想在没有关于你的任何记忆的情况下，得到一个干净的回答，可以在隐身聊天里这样问。

```
假设你对我一无所知，请推荐三种适合 50 多岁的人入门的运动，并说明各自的优缺点。
```

::: details 收到的回答大概是这样（示例——点击展开）
这是本指南编写的示例。实际的回答会因服务和每次情况而不同。

> 下面是适合 50 多岁的人入门的三种运动。
>
> | 运动 | 优点 | 缺点 |
> |---|---|---|
> | 步行 | 几乎不花钱，马上就能开始 | 要很久才能感觉到效果 |
> | 游泳 | 对关节负担小 | 要去游泳池，需要付费 |
> | 拉伸·瑜伽 | 让身体变柔软，对平衡感有好处 | 一开始不容易掌握动作 |
>
> 如果有慢性病，开始之前请先和医生商量。

**检查一下有没有收到想要的结果**：正好是三种吗？优点和缺点都有吗？明明是隐身聊天，里面有没有掺进你的职业、居住地之类关于你的内容？

:::

<Quiz id="ch203-incognito" />

## 管理已登录的设备

你有没有在网吧的电脑或别人的手机上登录过 Claude？如果有，请确认一下自己登录在哪些地方。

在网页上登录后，登录状态会保持 28 天。在这期间只要使用 Claude，就会从那时起重新延长到 28 天。[^logout] 这意味着，忘了退出登录的电脑，可能会长时间保持登录状态。

**查看在哪些地方登录了**[^sessions]

1. 点左下角你的名字，选择「设置」。[^screen]
2. 进入「账号」（Account）。
3. 向下找到「活跃会话」（Active sessions）。在新的设置界面里，它叫「你的登录位置」（Where you're logged in）。

你会看到设备、浏览器、大致位置和最后使用的时间。如果有不认识的设备，请点它旁边的「⋮」→「终止」（Terminate）。这样那台设备会立刻退出登录。如果看到陌生的位置或设备，请马上断开，并检查账号安全。[^sessions]

![「设置」窗口的「账号」界面。从上往下依次是「退出所有设备的登录」、「删除账号」、组织 ID、「受信任的设备」、「通行密钥」，最下面是「活跃会话」表格（设备·位置·创建时间·更新时间）](../../../guide/10-claude/assets/shot-15-active-sessions.png)

*位置和组织 ID 是改成示例的画面。当前正在使用的设备会有「当前」标记。这个界面里只有一台设备，所以看不到「⋮」→「终止」菜单。*

**一次退出所有设备的登录**[^logout]

在同一个「设置 > 账号」里，点「退出所有设备的登录」并确认。[^screen][^logout-name] 网页、手机、桌面应用等所有登录过的地方，会立刻退出登录。
这个功能只能在网页上使用。手机应用里目前还没有。

<Quiz id="ch203-sessions" />

## 亲手试一试

1. 问"推荐三个下个月全家旅行的目的地"，然后把这个对话的名字改成「家庭旅行候选」。
2. 如果是付费套餐，在新对话里问"帮我找一下聊家庭旅行的那个对话"。确认回答里附的链接能打开原来的对话。如果是免费套餐，就在侧边菜单的「搜索」或「最近项目」列表里找。
3. 用幽灵图标打开「隐身聊天」，随便问一个问题，然后关闭。确认侧边菜单列表里没有这个对话。
4. 在「设置 > 账号」里打开已登录的设备列表，看看有没有不认识的设备。

**接续任务**（[筹备读书会](../00-common/practice-kit.md)）：把第1章里聊读书会的那个对话，改名为「筹备读书会」。

## 小结

- 对话的重命名和删除，在对话旁边的「⋯」里进行。删除的对话会立刻消失，在服务器上也会在 30 天内被删除。
- 删除对话后，从中产生的记忆还会保留。记忆要另外删除。
- 过去的对话，可以在「最近项目」列表或「搜索」里找，付费套餐也可以让 Claude 帮你找。
- 邀请指定的人，只有那个邮箱才能打开。公开链接任何人都能打开，所以要当作公开的东西对待。
- 分享是那一刻的快照。想让对方看到新内容，请点「更新已分享的聊天」。
- 隐身聊天不会进入记录、记忆和训练，但会保存 30 天。想保留对话、只排除记忆，就在第一条消息之前关掉「+」→「记忆」。
- 在「设置 > 账号」里查看已登录的设备，不认识的设备就「终止」。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Snapshot | 快照 | 把某一瞬间的样子原样留下来的东西 |
| Public link | 公开链接 | 拿到链接的任何人都能打开的分享地址 |
| Incognito chat | 隐身聊天 | 不会保存到记录和记忆里的临时对话 |
| Memory | 记忆 | Claude 记住的关于我的内容 |
| Tool call | 工具调用 | Claude 取出搜索之类的功能来使用 |
| Session | 会话 | 在一台设备上保持登录的状态 |
| Recents | 最近项目 | 新界面里汇集对话和任务的列表 |

<ChapterDone :chapter="203" />

下一章：[第4章. 文件与工件](04-files-artifacts.md)

[^screen]: 在 Claude 网页界面（免费套餐，韩语）中直接确认。 "이름 변경" / "프로젝트에 추가" / "보관" / "삭제" / "시크릿 모드입니다" / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." / "모든 기기에서 로그아웃" (确认日期 2026-10-26)
[^delete]: Anthropic 帮助文档，「Delete or rename a conversation」. "Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." / "Click the checkbox on the left side of additional conversations you want to delete, or click "Select all" at the top." / "Touch and hold the conversation." / "Open your chat list and tap the checklist icon in the top right corner." / "When you delete a conversation, it's removed from your conversation history immediately and deleted from our back-end systems within 30 days." https://support.claude.com/en/articles/8230524 (确认日期 2026-10-26)
[^memory-delete]: Anthropic 帮助文档，「Use Claude’s chat search and memory to build on previous context」. "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (确认日期 2026-10-26)
[^new]: Anthropic 帮助文档，「Claude Cowork and chat are one Claude」. "One conversation list: Your quick questions and longer tasks live together in Recents." / "Search doesn't include older Cowork tasks." https://support.claude.com/en/articles/16761823 (确认日期 2026-10-26)
[^search]: Anthropic 帮助文档，「Use Claude’s chat search and memory to build on previous context」. "Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "Individual project conversations (searches are limited to within each specific project)." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Yes, navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 (确认日期 2026-10-26)
[^share-people]: Anthropic 帮助文档，「Share a chat with specific people」. "This is the default way to share a chat and keeps it private to the people you choose." / "Sharing with specific people is available on all plans (Free, Pro, Max, Team, and Enterprise) on claude.ai." / "If someone forwards the email, the link won't open for anyone else." / "Recipients can't continue the chat, copy it to their account, or download files from it." / "Pending invites expire after 30 days if they aren't opened." / "There's a limit on how many people you can invite in a day." / "open the share dialog and click "Update shared chat."" / "To stop sharing the chat entirely, click "Turn off" in the share dialog." / "You can also review everything you've shared from Settings > Privacy under Shared chats." / "Sharing with specific people is available on claude.ai on the web." https://support.claude.com/en/articles/16762496 (确认日期 2026-10-26)
[^share-old]: Anthropic 帮助文档，「Share and unshare chats」. "While chats are always private by default, you can easily create snapshots of your conversations to share via direct link." / "Click the "Share" button in the pop out to create a shareable link." / "If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private." https://support.claude.com/en/articles/10593882 (确认日期 2026-10-26)
[^public]: Anthropic 帮助文档，「Public links for shared chats」. "Public links are available on Free, Pro, and Max plans." / "Anyone with the link can open it. No Claude account is required." / "The simple rule: treat a public link as public." / "there's no way to limit a public link to specific people." / "It can't remove copies, screenshots, or archives someone else already made." https://support.claude.com/en/articles/16762437 (确认日期 2026-10-26)
[^file-share]: Anthropic 帮助文档，「Create and edit files with Claude」. "Disabled public sharing of conversations that include any file artifacts from the code execution and file creation feature for free, Pro, and Max users." https://support.claude.com/en/articles/12111783 (确认日期 2026-10-26)
[^incognito]: Anthropic 帮助文档，「Use incognito chats」. "Incognito chats are temporary conversations that aren't saved to your chat history or to Claude’s memory." / "Incognito chats are not used for training." / "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." / "The interface will indicate you're in an incognito chat with a black border and “Incognito chat” label in the upper left corner." / "Yes, Claude can access this information within an incognito chat." / "Once closed, incognito chats cannot be reopened." / "Incognito mode is currently only available for chats outside of projects, so you won't see the ghost icon when starting a chat within a project." / "If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them." https://support.claude.com/en/articles/12260368 (确认日期 2026-10-26)
[^memory-off]: Anthropic 帮助文档，「Use Claude’s chat search and memory to build on previous context」. "Unlike an incognito chat, the chat stays in your chat history and Claude can still find it when searching past chats from your other conversations." / "You need to turn memory off before you send the first message." https://support.claude.com/en/articles/11817273 (确认日期 2026-10-26)
[^sessions]: Anthropic 帮助文档，「Managing your active sessions」. "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "Click the three-dot menu (⋮) next to that session." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 (确认日期 2026-10-26)
[^logout]: Anthropic 帮助文档，「How do I log out of all active sessions?」. "When you log in via claude.ai, this creates a session with a duration of 28 days." / "This option is not currently available in the Claude mobile apps for iOS or Android." / "This action will immediately sign you out of your account across all devices where you were previously logged in, including:" https://support.claude.com/en/articles/10310342 (确认日期 2026-10-26)
[^incognito-name]: 帮助文档写的是黑色边框和「Incognito chat」标记。标记的名称可能因界面而异。
[^logout-name]: 帮助文档里写的是「退出登录」（Log Out）按钮。
[^screen-share]: 直接确认了通过对话标题旁的 ▾ →「分享会话（세션 공유）」打开的窗口。"지금까지의 메시지만 공유됩니다"、「通过邮箱添加人员（이메일로 사람 추가）」「邀请（초대하기）」、「有访问权限的用户（액세스 권한이 있는 사용자）」、「仅受邀者（초대받은 사람만）」、「复制链接（링크 복사）」。帮助文档把同一位置称为「有访问权限的人」（People with access）和「发送」。截图用的对话在拍完后已删除（确认日期 2026-10-28，网页，免费（Free）套餐）

# 第7章 项目·连接器·技能 — 把资料和工具接到 Claude 上

> **一句话总结**：用在同一件事上的资料和指令，请归拢到**项目**里。邮件、日历这类其他应用，用**连接器**接上；
> 每次都要用同样方式去做的事，放进**技能**。把这三样按工作打包在一起的，就是**插件**。

界面以 2026年10月的网页版为准。把聊天和 Cowork 合在一起的新界面正在陆续推送，所以菜单位置和名称可能因界面而异。
这一章的截图是免费套餐的网页界面。菜单名称按截图里看到的名称来写。帮助文档里出现的其他名称，集中放在脚注里。

这一章用到的是侧边菜单里的两处：「项目（프로젝트）」和「自定义（사용자 지정）」（Customize）。[^screen] 在下面的截图里，分别标为 ③·④。

## 项目 — 把资料和指令放在一处

**项目**（project）是为一件事准备的工作空间。每个项目都有各自独立的对话记录和**知识**（knowledge，放参考资料的地方）。[^projects]
比如，在「公司周报」项目里放进汇报模板文件。以后在里面开的对话，每次一开始就知道那个模板。

项目在免费套餐里也可以创建。免费用户最多 5 个。[^projects-how][^projects-limit]

### 创建和填充的方法

1. 打开侧边菜单 ③「项目」（claude.ai/projects）。点右上角 ①「新建项目（새 프로젝트）」。[^screen][^projects-how][^new-project-name]
2. 写上名称和说明。名称和说明**Claude 读不到。** 工作需要的内容，请放进知识或指令里。[^projects-how]
3. 在项目界面右边**项目知识**的「+」处上传文件或文字。放在这里的内容，会用在该项目的所有对话里。[^projects-how]
4. 在「设置项目指令（프로젝트 지침 설정）」里写下这个项目要遵守的规则，点「保存指令（지침 저장）」。[^projects-how]
5. 已有的对话，点对话名称旁边的箭头 →「添加到项目（프로젝트에 추가）」就能移过去。[^projects-how]

只在这一次对话里看的资料，不要放进项目知识，直接传到那个对话里。这样知识库不会变得杂乱。[^academy-projects]

![「项目」界面。红色编号标出：① 右上角「新建项目」按钮，② 中间的项目列表（部分带有「示例项目」标记），③ 侧边菜单的「项目」](../../../guide/10-claude/assets/shot-10-projects-marked.png)

项目名称和对话标题是改成示例的界面（免费套餐）。**红色编号和下面列表里的编号是同一个位置。**

- ①「新建项目」 — 创建新项目
- ② 项目列表 — 创建过的项目连同日期一起显示
- ③ 侧边菜单「项目」 — 打开这个界面的地方

列表里也有带「示例项目（예제 프로젝트）」标记的项目。[^screen] 如果看到不是自己创建的项目，请不要惊讶。

<!-- 需要截图：项目界面。右侧的「项目知识」栏和「+」，以及「设置项目指令」按钮 -->

[第5章](05-memory.md)的指令适用于所有对话。项目指令则**只适用于该项目里的对话。**[^personal][^project-instr-free]

### 即使在同一个项目里，对话内容也不会原样共享

即使在同一个项目里，**对话内容也不会整个带到下一次对话。** 在其他对话里也需要知道的内容，请放进项目知识。[^projects-how]
比如，昨天对话里定下的“表格用三列”，如果记忆开着，今天的新对话也许会知道。但如果是一定要遵守的规则，请写在指令或知识里。这样所有对话都会知道。

记忆是每个项目各有一份的。在项目里，会同时使用该项目的记忆和项目之外对话的记忆。不会使用其他项目的记忆。[^projects-how]
如果想让项目完全独立，请把项目界面记忆里的「使用账户记忆（계정 메모리 사용）」关掉。[^projects-how] 记忆本身在[第5章](05-memory.md)里讲。

### 资料变多时 — RAG

在付费套餐里，当知识变多、接近上限时，会自动切换成 **RAG**（Retrieval Augmented Generation，不是读全部资料，而是只找出需要的部分来读的方式）。这样能放进去的量最多会增加到 10 倍。不需要另外打开或关闭。[^rag]
资料很多时，可以这样做：把文件名起得容易辨认，提问时指明文档名称。这样 Claude 就能缩小该去哪里找。[^rag]

```
从「2026年第3季度销售报告」文件里，只把各地区的销售额提取成表格。
```

### 整理时

- **先从一件事开始。** 比起一个装下所有事情的项目，更建议先从「周报」这样范围窄的项目开始。资料可以边用边补充。[^academy-projects]
- **过期的资料偶尔换一换。** 项目知识里如果留着旧资料，答案也可能是旧的内容。偶尔浏览一下知识列表，改一改。[^academy-projects]
- 加上**星标**，就能在侧边菜单里很快找到。[^projects-how]
- 结束的项目可以**归档**。归档的项目不能直接删除。要先「取消归档（보관 해제）」再删。[^projects-how]
- 和别人共享项目的功能，只有 Team·Enterprise（公司套餐）才有。[^projects]

> **新版项目（测试版）**：把一个项目当作一场对话来用的新方式，正在从一部分用户开始推送。迁移过去后，指令·文件·对话记录都原样带过去。[^projects] 这还是只对一部分人开放的功能，所以这一章按现在的项目来讲。

### 把要反复使用的模板放进指令

在[第1阶段第8章](../00-common/08-meta-prompting.md#_4-做成可重复使用的模板)里，你把做得好的请求变成了只换空白处就能反复使用的**模板**。把这个模板放进项目指令试试看。这样不用每次对话都粘贴模板。

```
在这个项目的对话里，把我发来的工作备忘整理成周报。
- 做成“已完成 / 进行中 / 下周计划”三列的表格
- 每个条目写一行
- 备忘里没有的内容不要编造，请标上[需核实]
```

::: details 得到的答案大致是这样（示例 — 点击展开）
这是本指南做的示例。实际的答案会因服务和每次情况而不同。

比如，这周的备忘是“报价单发给了两家。正在更换网站照片。下周与客户开会”，就会得到这样的答案。

> | 已完成 | 进行中 | 下周计划 |
> |---|---|---|
> | 向两家发送报价单 | 更换网站照片 | 与客户开会（日期[需核实]） |

**请确认有没有顺利得到**：是三列表格吗？每个条目是一行吗？有没有混进备忘里没有的内容？备忘里没有的日期之类的空缺处，有没有标上[需核实]？

:::

现在，在项目里的新对话中，只要粘贴这周的备忘就行了。

<Quiz id="ch207-projects" />

## 连接器 — 与其他应用连接

**连接器**（connector）是把 Claude 接到我所用的应用和服务上的连接。连接之后，Claude 可以取得里面的资料，还能在那个服务里做事。[^connectors]
比如连接了 Google 日历，就可以问“告诉我下周什么时候有空”。不用把日程复制粘贴过来。

连接器对包括免费用户在内的所有用户，在网页·桌面·手机上都可以使用。[^connectors]

### 连接的方法

1. 点输入框左下角的「+」，选择 ③「添加连接器（커넥터 추가）」。[^screen][^connector-name] 也可以在侧边菜单「自定义」→「连接器（커넥터）」标签页里操作。[^screen]
2. 选择要用的服务，点「连接（연결）」或「安装（설치）」。登录那个服务，授予权限。[^connectors]
3. 每次对话，在「+」→「连接器」里，打开或关闭这次对话要用的服务。[^connectors]

连接之后，用一个简单的请求确认一下。[^academy-connect]

```
你能访问我的 Google 日历吗？只给我看下周一的日程。
```

如果日程显示出来，就说明连接成功了。

![点输入框的「+」后打开的菜单。红色编号标出：①「上传或添加文件」，②「Skills」，③「添加连接器」，④「设计系统」，⑤「添加插件」，⑥「记忆」](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

这是免费套餐的界面。这一章用到的是下面三项。

- ②「Skills」 — 打开技能列表
- ③「添加连接器」 — 连接其他应用
- ⑤「添加插件」 — 放入插件

⑥「记忆」在[第5章](05-memory.md#只关闭一个聊天的记忆)里讲。

![在输入框「+」菜单里，鼠标停在「添加连接器」上的界面。旁边展开了「浏览连接器」和灰色显示的「添加自定义连接器」](../../../guide/10-claude/assets/shot-17-connectors-menu.png)

*这是还没有连接任何连接器的免费账号界面。所以看不到各个服务的开关，只看到「浏览连接器（커넥터 둘러보기）」。「添加自定义连接器（커스텀 커넥터 추가）」是灰色的，点不了。*[^screen-connectors]

在手机上安装连接器，目前还是测试版。如果在网页或桌面端先连好，下次登录手机应用时就能直接用。[^connectors]

### 连接之前要知道的事

- **只连接信任的服务，只连接需要的。** 因为连接之后，Claude 可以在我的账号权限范围内读取资料，也可能修改资料。[^connectors] 连接之前先问问自己：这是可信的服务吗？这件事一定需要它吗？
- **本来就看不到的东西，连接了也看不到。** 在那个服务里我打不开的文件，用连接器也打不开。[^connectors]
- **断开连接和查看权限**，在「自定义」→「连接器」里进行。[^connectors]
- **不会用连接的应用里的资料来训练模型。** 连接的应用也看不到我的其他对话。[^suggest] 训练设置的全部内容在[第9章](09-privacy.md)里讲。

### 代表例子 — Google·Microsoft 365

**Gmail·Google 日历·Google Drive** 连接器，网页和桌面端的所有用户都能用。[^google]
- 发送·回复邮件，共享·移动·丢进回收站 Drive 文件这类事，默认**每次都会先问你。**[^google]
- 如果想要 Google 文档，请明确说出名称。只说“文档”的话，会生成一个可下载的文件。[^google]
- Gmail 的附件读不到内容。Drive 文档只读文字，不处理图片。[^google]
- 通过连接器取得的资料，会和那个对话一起保存。删除对话时，会一同被删除。[^google]

比较一下不够好的例子和更好的例子。

```
把会议内容整理成文档。
```

```
用这份备忘创建一个 Google 文档。标题定为「10月团队会议纪要」。
```

像第二个那样说“Google 文档”，Drive 里才会生成 Google 文档。

**Microsoft 365** 连接器在包括免费在内的所有套餐里都可以用。不过，**只能连接公司账号。** @outlook.com 这样的个人账号不行。[^m365] 还需要先得到公司管理员的同意。[^m365]

### 在对话里弹出界面的连接器

**交互式连接器**（interactive connector）会在对话里弹出那个应用的界面。比如问项目情况时，Asana 的任务看板会在对话里打开。在那里可以直接勾掉待办事项。[^interactive] 连接器列表里带「交互式（대화형）」标记的，就是这类连接器。[^interactive]

已连接的应用，即使我不说名字，Claude 也会在合适的时候主动拿出来用。[^suggest]
- 合适的应用有两个以上时，Claude 不会悄悄替我选一个，而是由我来选。[^suggest]
- 应用推荐里没有广告，也没有收费的曝光。[^suggest]
- 替我预订或购买之前，会先征得我的确认。[^suggest]

> **自定义连接器**（custom connector）是用地址直接连接 Anthropic 没有验证过的服务的功能。免费用户最多 1 个。请只连接可信的地方。[^connectors] 大多数情况下，列表里的连接器就够用了。

<Quiz id="ch207-connectors" />

## 工具权限 — 让它用什么、用多少

一个连接器里包含多个**工具**（tool，像“读邮件”“发邮件”这样，连接器能做的每一个动作）。

### 不用的工具就关掉

在对话里的「搜索和工具（검색 및 도구）」菜单中，可以只关掉特定工具。[^interactive]
比如，只打算让它读邮件、整理邮件的话，请把“发送”工具关掉。这样就不会误发邮件了（本指南的建议）。

自定义连接器征求许可时，如果出现「始终允许（항상 허용）」，请小心。只对那些信任到可以放心交给它、不用盯着的工具才点。[^custom]

### 连接器很多时 — 「工具访问」

每个连接器都会占用对话的空间。所以打开得越多，真正用来做事的空间就越少。[^tools]
在「+」→「连接器」→「工具访问（도구 액세스）」里，可以选择加载的方式。[^tools]

| 选项 | 适合的情况 |
|---|---|
| 「自动（默认值）」 | 大多数情况。Claude 自己判断 |
| 「始终可用」 | 常用的连接器不到 10 个 |
| 「需要时」 | 连接器有 10 个以上，或对话变长时 |

「始终可用」从一开始就多占空间。「需要时」可能要多一步去找合适的连接器。[^tools] 这个选择**只适用于那一场对话。**[^tools]

### 使用调研时

[第6章](06-search.md)的调研，会**不用每次都问**就使用已打开的连接器里的工具。[^research] 开始调研之前，请只把要用的连接器打开。事先缩小让它读什么，就不会混进不相干的资料（本指南的建议）。

<Quiz id="ch207-tool-access" />

## 技能 — 把做事的方式放进去

**技能**（skill）是让某件事每次都用同样方式去做的指令和资料的组合。[^skills]
比如，把“公司报告按这个顺序、用这种字体”这条规则做成技能放进去，以后每次做报告，都会按那个方式来。

技能在 Free·Pro·Max·Team·Enterprise 里都能用。不过，**必须打开创建文件的功能。** 请在设置 →「功能（기능）」里，打开「代码执行与文件生成（코드 실행 및 파일 생성）」。[^create-name][^skills][^skills-use]

### 默认技能和我的技能

- Anthropic 放好的**默认技能**（制作 Excel·Word·PowerPoint·PDF）不用叫它，会自动被用上。[^skills-use] 在[第4章](04-files-artifacts.md)里创建文件时用到的，就是这些。
- 打开和关闭技能的地方，是侧边菜单「自定义」→「Skills」标签页。[^screen] 关掉的技能，Claude 不会使用。[^skills-use]
- 简单的技能不用写代码，只用文字就能做出来。[^skills] 做好的技能文件夹，打成 ZIP 上传。帮助文档里写作「+ 创建技能」→「上传技能」。[^skills-use] 在这一章的界面里，「自定义」的右上角有「+ 添加（추가）」按钮。[^screen]
- 从技能列表里安装的技能，内容不能修改。[^directory]

如果觉得技能没有被用上，请点名拜托它。[^skills-use]

```
用我的「公司报告模板」技能，把这份备忘做成演示资料。
```

如果我做的技能总是用不上，请修改技能的**说明**（description）。Claude 是看这段说明来决定什么时候用这个技能的。[^skills-make] 说明里请具体写明什么时候用这个技能。[^skills-make] 把我平时拜托时用的话写进去也不错，比如“整理会议纪要”“总结会议内容”（本指南的建议）。说明最多可以写 200 个字符。[^skills-make]

### 做我的技能 — 用说的来拜托

如果你每做某件事都在重复同样的说明，那段说明就是第一个技能的材料。[^academy-layers] 比如，你每次都说“会议纪要按决定事项、待办事项、负责人的顺序”。

技能文件不必自己一个人写。打开新对话，对 Claude 说一起来做吧。[^academy-skills]

```
我想做一个整理会议纪要的技能。请一个一个地问我需要什么。
```

Claude 会问几个问题。比如这个技能做什么、好的结果是什么样、什么时候用。请尽可能具体地回答。如果有做得好的例子或模板文件，请一起上传。看到真实的例子，Claude 会更准确地知道我想要的结果。[^academy-skills]

做好的技能怎么保存，可能因界面而异。如果没看到保存的方法，请让 Claude 把技能文件夹打成 ZIP。把那个文件用上面的「上传技能（스킬 업로드）」传上去就行。[^skills-use] 想修改某处时，用话拜托 Claude 就行。也可以在对话旁边打开的技能文件里，选中要改的文字，点「用 Claude 编辑」（Edit with Claude）。[^skills-make]

### 和指令·项目·连接器有什么不同

| 功能 | 什么时候用到 |
|---|---|
| 指令 | 所有对话，始终 |
| 项目 | 在该项目里，始终 |
| 技能 | 只在做相关的事时 |
| 连接器 | 需要接触其他应用时 |

指令广泛适用于所有对话，而技能只在相关时才调用。[^skills] 项目是始终铺在那里的背景知识。[^skills] 如果说连接器是让 Claude **够得着**工具，那技能就是教它**怎么用好**那个工具。[^skills]
因为只在需要时才调用，所以放进好几个技能，也不太占用对话空间。[^skills]

一句话概括：项目握着**需要知道的资料**，技能握着**做事的顺序**。[^academy-skills] 两者可以一起用。比如客户资料放在项目里，咨询准备的顺序放在技能里。

### 要小心的地方

- **只安装来自可信之处的技能。** 技能最大的风险，是用隐藏指令操纵 Claude 的**提示词注入**，以及把资料偷偷送出去的**数据泄露**。[^skills-use] 提示词注入，你在[第1阶段第9章](../00-common/09-safety.md#_4-隐藏指令——提示词注入)里学过。
- 还有**用屏幕录制来做技能**。把我做事的过程录下来，Claude 就能据此做出技能。只有 Pro·Max·Team 的 Mac 应用 Cowork 里可以，录制最长 10 分钟左右。[^skills-make] 录制期间，请不要出现密码或敏感的界面。

<Quiz id="ch207-skills" />

## 插件 — 按工作打包的套装

**插件**（plugin）是把技能·连接器·**子代理**（sub-agent，单独负责大任务中一部分的辅助 Claude）打成一包。[^plugins]
销售·财务·法务·营销·人事这类按工作分类的插件都已准备好。[^plugins] 这就相当于不用一个一个去找、去连接，而是一次放进一套适合我工作的组合。

这一章的三个功能，打个比方是这样（本指南的比方）：连接器是接触其他应用的**手**，技能是做事的**窍门**，插件是把两者打包在一起的**工作套装**。

插件只能在**付费套餐**（Pro·Max·Team·Enterprise）里使用。[^plugins]

### 放进去和使用的方法

1. 打开侧边菜单 ④「自定义」（Customize）。[^screen] 技能·连接器·插件，在这里的一个列表里就能找到。[^directory]
2. ①「插件（플러그인）」标签页 → ②「探索（탐색）」里选好插件，点「添加（추가）」。[^screen][^discover-name]
3. 在对话或 Cowork 里输入 `/` 或点「+」，就能看到插件里包含的技能。选一个来用。[^plugins]

拿到的插件，装的是通常的做事方式。我的工作的模板和顺序可能不一样。[^academy-plugins] 在查看已放入插件的界面里，点右上角的「定制（커스터마이징）」（Customize），就会打开修改这个插件的 Cowork 任务。点「开始吧（시작하기）」（Let's go），和 Claude 一起修改就行。[^plugins] 菜单名称可能因界面而异。请拿出我实际在用的例子来拜托它。

```
我上传了我们团队上个月发出的三份报价单。请修改这个插件的报价单技能，让它遵循这个模板和语气。
```

越是按我的工作来调整，插件就越有用。[^academy-plugins]

![「自定义」界面。红色编号标出：①「Skills」「连接器」「插件」标签页，②「我的项目」「探索」，③ 右上角「+ 添加」，④ 侧边菜单的「自定义」。中间可以看到 Anthropic 制作的条目和「添加」「试用」按钮](../../../guide/10-claude/assets/shot-10-customize-marked.png)

这是免费套餐的界面。**红色编号和下面列表里的编号是同一个位置。**

- ①「Skills」·「连接器」·「插件」 — 选择看哪一类的标签页
- ②「我的项目（내 항목）」·「探索」 — 已经放进去的，和要新逛一逛的
- ③「+ 添加」 — 新增条目的按钮
- ④ 侧边菜单「自定义」 — 打开这个界面的地方

「探索」里有 Anthropic 制作的技能·插件，还能看到「试用（체험）」按钮。[^screen]
免费套餐的界面里，也能看到「插件」标签页和「+」菜单里的「添加插件」。[^screen] 不过，帮助文档把插件介绍为付费套餐的功能。[^plugins]

- 添加的插件保存在账号里。可以在网页聊天、桌面应用的 Chat、Cowork 里使用。[^plugins]
- 部分功能（子代理等）在聊天里不运行，显示为灰色。它们在[第8章](08-cowork.md)的 Cowork 里运行。[^plugins]
- **只安装来自可信之处的插件。** 因为有些插件里包含的部分，会在我的电脑上以和其他程序相同的权限运行。[^plugins]

<Quiz id="ch207-plugins" />

## 看视频了解更多

这是公司自己制作的介绍视频。画面和功能名称可能与这一章的说明不同。

> 下面的视频全是**英语**。在 YouTube 视频的设置（齿轮）→ 字幕 → **自动翻译 → 中文（简体）**，就可以看到中文字幕。视频可以直接在这个页面里播放。

**[Projects are now a conversation with Claude](https://www.youtube.com/watch?v=5qt_aGyAsKk)** · Claude · 适合想看看项目变成什么样的人（2026年9月，1分钟）

<YouTube id="5qt_aGyAsKk" title="Projects are now a conversation with Claude" />

**[Creating custom Skills with Claude](https://www.youtube.com/watch?v=kS1MJFZWMq4)** · Anthropic · 适合想看看 Claude 一边提问一边帮你做技能的例子的人（2025年10月，1分钟）

<YouTube id="kS1MJFZWMq4" title="Creating custom Skills with Claude" />

第一个视频把项目介绍为“一场对话”。如果我的界面和视频不一样，请以这一章的说明为准。

## 亲手试一试

1. 用「新建项目」创建一个「周报」项目，把上面的模板放进项目指令。如果没有指令栏，就把模板写成文字，上传到项目知识里。
2. 在项目里打开一个新对话，随意写五行这周做的事发过去。看看表格是不是按指令生成的。
3. 在项目里再开一个新对话，在发第一条消息之前，把「+」→「记忆」（Memory）关掉（[第5章](05-memory.md#只关闭一个聊天的记忆)）。然后问“刚才的对话里我说了什么？”。确认关掉记忆的对话不知道前一个对话的内容。
4. 打开「自定义」→「连接器」标签页 →「探索」，逛一逛都有哪些服务。如果连接了一个，就在「搜索和工具」里，把它的工具中不会用的关掉试试。
5. 在「自定义」→「Skills」标签页 →「我的项目」里，看看默认技能有没有开着。

**接着做的任务**（[准备读书会](../00-common/practice-kit.md)）：上传之前，先打开 members.csv，看看里面有没有姓名·联系方式这类个人信息。然后创建「读书会」项目，把四个示例文件（memo-next-month.txt、minutes-last-meeting.txt、members.csv、fees.csv）上传到「项目知识」里，再把第5章的那一行指令放进项目指令。在项目里的新对话中，只发“写一份11月的通知文初稿”，看看备忘和会议纪要的内容有没有被用进去。

## 小结

- 项目是把对话·知识·指令打包在一起的工作空间。免费用户最多创建 5 个（以帮助文档为准）。
- Claude 读不到项目的名称和说明。即使在同一个项目里，对话内容也不会整个带过去，所以需要大家都知道的内容，要放进知识或指令。
- 在付费套餐里，资料变多时会自动切换成 RAG。文件名要起得容易辨认。
- 连接器是与其他应用的连接。只连接信任的服务，本来就看不到的东西，连接了也看不到。
- 不用的工具在「搜索和工具」里关掉，连接器很多时，把「工具访问」改成「需要时」。
- 技能是装着做事方式的组合。只在相关时才调用，也只安装来自可信之处的。
- 插件是把技能·连接器·子代理打包的工作套装，仅限付费套餐。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Project | 项目 | 各自拥有对话记录和知识的工作空间 |
| Project knowledge | 项目知识 | 项目里所有对话共用的参考资料 |
| RAG | 检索增强生成 | 不读全部资料，只找出需要的部分来读的方式 |
| Connector | 连接器 | 把 Claude 与其他应用·服务连接起来的连接 |
| Tool | 工具 | 连接器能做的每一个动作 |
| Tool access | 工具访问 | 决定连接器何时加载到对话里的设置 |
| Skill | 技能 | 让某件事用同样方式去做的指令组合 |
| Plugin | 插件 | 把技能·连接器·子代理打包的、按工作分类的套装 |
| Sub-agent | 子代理 | 单独负责大任务中一部分的辅助 Claude |
| Prompt injection | 提示词注入 | 用藏在资料里的指令来欺骗 AI 的攻击 |

<ChapterDone :chapter="207" />

下一章：[第8章. Cowork — 把整件事交给它](08-cowork.md)

[^screen]: 在 Claude 网页界面（免费套餐，韩语）中亲自确认。侧边菜单「项目（프로젝트）」·「自定义（사용자 지정）」 /「项目」界面的「新建项目（새 프로젝트）」和「示例项目（예제 프로젝트）」标记 /「+」菜单里的「Skills」·「添加连接器（커넥터 추가）」·「添加插件（플러그인 추가）」 /「自定义」界面的「Skills」·「连接器（커넥터）」·「插件（플러그인）」标签页，「我的项目（내 항목）」·「探索（탐색）」，「+ 添加（추가）」，「试用（체험）」（确认日期 2026-10-26）
[^projects]: Anthropic 帮助文档，《What are projects?》。"Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." / "For users on Team and Enterprise plans, projects can be shared with other members of your organization" / "Nothing is lost or deleted in the move." https://support.claude.com/en/articles/9517075（确认日期 2026-10-26）
[^projects-how]: Anthropic 帮助文档，《How can I create and manage projects?》。"Free users can create a maximum of five projects." / "Click "+ New Project" in the upper right corner." / "Give your project a name and description (note that Claude will not have access to these details)." / "Anything you upload to this space will be used across all of your chats within that project." / "Claude will use these instructions for all the chats within the project." / "Note: Context is not shared across chats within a project unless the information is added into the project knowledge base." / "While working in a project, Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." / "There is no way to delete archived projects at this time (you must unarchive it first)." https://support.claude.com/en/articles/9519177（确认日期 2026-10-26）
[^personal]: Anthropic 帮助文档，《Understanding Claude's personalization features》。"These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728（确认日期 2026-10-26）
[^rag]: Anthropic 帮助文档，《Retrieval augmented generation (RAG) for projects》。"RAG for projects is available on paid plans (Pro, Max, Team, and Enterprise)." / "When your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity by up to 10x while maintaining quality responses." / "When asking questions, you can reference specific documents by name to help Claude focus its search." https://support.claude.com/en/articles/11473015（确认日期 2026-10-26）
[^connectors]: Anthropic 帮助文档，《Use connectors to extend Claude's capabilities》。"Connectors let Claude access your apps and services, retrieve your data, and take actions within connected services." / "Web connectors are available for all users on Claude, Cowork, Claude Desktop, and Claude Mobile (iOS and Android)." / "If someone can't access a specific file, channel, or record in the source system, the connector can't reach it from Claude either." / "Only connect services you trust and need for your workflows." / "Installing connectors on mobile is currently in beta—Claude Desktop and web remain the primary path for custom connectors." / "Free users are limited to one custom connector." https://support.claude.com/en/articles/11176164（确认日期 2026-10-26）
[^suggest]: Anthropic 帮助文档，《How Claude suggests connected apps》。"Your data from that app isn’t used to train Claude’s models, and the connected app can’t see your other conversations." / "Claude doesn’t silently default to one over the other; you choose which app to use, and Claude proceeds from there." / "There are no sponsored rankings, no paid placements, and no advertising." / "Before Claude books, buys, or reserves something on your behalf, it checks with you first." https://support.claude.com/en/articles/14730684（确认日期 2026-10-26）
[^google]: Anthropic 帮助文档，《Use Google Workspace connectors》。"By default, Claude asks for your approval before each of these actions." / "Asking for a generic "doc" or "deck" without naming Google creates a local file instead." / "Attachment content is not directly accessible through Gmail (metadata only)." / "This data is retained with its associated chat, so you can delete any retrieved data by deleting the chat." https://support.claude.com/en/articles/10166901（确认日期 2026-10-26）
[^m365]: Anthropic 帮助文档，《Connect to Microsoft 365》。"The Microsoft 365 connector is available on all Claude plans: Free, Pro, Max, Team, and Enterprise." / "Personal Microsoft accounts (such as @outlook.com, @hotmail.com, or @live.com) can't be used." / "In every tenant, a Microsoft Entra Global Administrator also needs to grant a one-time consent." https://support.claude.com/en/articles/15183774（确认日期 2026-10-26）
[^interactive]: Anthropic 帮助文档，《Use interactive connectors in Claude》。"You can check off tasks, update statuses, and keep chatting with Claude—all in one place." / "Individual users: You can disable specific connector tools via the "Search and tools" menu in your conversation." https://support.claude.com/en/articles/13454812（确认日期 2026-10-26）
[^custom]: Anthropic 帮助文档，《Get started with custom connectors using remote MCP》。"only click "Allow always" when using a server and tool that you trust to run unsupervised." https://support.claude.com/en/articles/11175166（确认日期 2026-10-26）
[^tools]: Anthropic 帮助文档，《Manage Claude’s tool access》。"Each connector takes up space in a conversation." / "Best for: Fewer than 10 connectors you use constantly." / "Trade-off: Claude may take an extra step to find the right connector before using it." / "Your selection only applies to that conversation. You can change it at any time." https://support.claude.com/en/articles/13730515（确认日期 2026-10-26）
[^research]: Anthropic 帮助文档，《Use research on Claude》。"During research, Claude can use tools from your connectors automatically, without asking for approval each time." https://support.claude.com/en/articles/11088861（确认日期 2026-10-26）
[^skills]: Anthropic 帮助文档，《What are skills?》。"Skills are available for users on Free, Pro, Max, Team, and Enterprise plans. This feature requires code execution to be enabled." / "Anyone can create skills by writing instructions in Markdown—no coding required for simple skills" / "Custom instructions apply broadly to all your conversations. Skills are task-specific and only load when relevant" / "Projects provide static background knowledge that's always loaded when you start chats within them." / "MCP connections give Claude access to tools, while skills teach Claude how to use those tools effectively." / "Claude determines which skills are relevant and loads the information it needs to complete that task, helping to prevent context window overload." https://support.claude.com/en/articles/12512176（确认日期 2026-10-26）
[^skills-use]: Anthropic 帮助文档，《Use skills in Claude》。"Navigate to Settings > Capabilities and ensure that Code execution and file creation (called Create and edit files in the updated Settings layout) is enabled." / "You don't need to explicitly invoke them—Claude determines when each skill is needed based on your request." / "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." / "Upload a ZIP file containing your skill folder." / "Try being more explicit in your request (e.g., "Use my brand guidelines skill to create a presentation")." / "The most significant risks are prompt injection, which allows Claude to be manipulated to execute unintended actions, and data exfiltration" https://support.claude.com/en/articles/12512180（确认日期 2026-10-26）
[^skills-make]: Anthropic 帮助文档，《How to create custom skills》。"Recording a skill is available on Pro, Max, and Team plans, in Cowork in Claude for Mac." / "A recording can run for about 10 minutes." / "This is critical—Claude uses this to determine when to invoke your skill (200 characters maximum)." / "Write clear descriptions: Claude uses descriptions to decide when to invoke your skill. Be specific about when it applies." / "Iterate on the description if Claude isn't using it when expected." / "When you're iterating on a skill with Claude in chat, you can edit the skill files directly where they open beside the conversation. Highlight the text you want changed, click "Edit with Claude," and type your request." https://support.claude.com/en/articles/12512198（确认日期 2026-10-26）
[^directory]: Anthropic 帮助文档，《Browse skills, connectors, and plugins in one directory》。"Our unified directory brings skills, connectors, and plugins together in one place" / "Skills you install from the directory are view-only." https://support.claude.com/en/articles/14328846（确认日期 2026-10-26）
[^plugins]: Anthropic 帮助文档，《Use plugins in Claude》。"Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" / "Claude includes a growing library of plugins for common knowledge work—including sales, finance, legal, marketing, HR, engineering, design, operations, data analysis, and more." / "Select the plugin you want, then click "Add."" / "Type "/" or click the "+" button to see the available skills from your plugins, in chat and in Cowork." / "You can add and use plugins in chat on the web, the Chat tab in Claude Desktop, and Claude Cowork." / "Hooks and sub-agents run in Cowork and Claude Code, not in chat, so they appear grayed out in chat." / "Only install plugins from sources you trust." / "This opens a new Cowork task with a prompt asking Claude to customize the plugin you chose." / "Click “Let's go” to start working with Claude to adjust the plugin's Skills and connectors to match how you work." 韩语版帮助文档写作「커스터마이징」→「시작하기」。 https://support.claude.com/en/articles/13837440（确认日期 2026-10-26）
[^academy-projects]: Claude Academy《Claude 101》课程《Introduction to projects》。"Simply upload it during the conversation and it stays separate from your project knowledge. It's a perfect way to share context or examples without cluttering the knowledge base." / "Begin with a specific use case rather than trying to create one project for everything. You can always add more content as you go." / "Outdated documents can lead to outdated responses. Review and update your project knowledge periodically." https://academy.claude.com/courses/claude-101/introduction-to-projects（确认日期 2026-10-26）
[^academy-connect]: Claude Academy《Claude 101》课程《Connecting your tools》。"Return to Claude and try a simple request, like "Can you access my [tool name]?"" https://academy.claude.com/courses/claude-101/connecting-your-tools（确认日期 2026-10-26）
[^academy-layers]: Claude Academy《Introduction to Claude Cowork》课程《Get better results faster》。"If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale（确认日期 2026-10-26）
[^academy-skills]: Claude Academy《Claude 101》课程《Working with skills》。"The easiest way to create a custom Skill is through conversation with Claude itself." / "Claude will interview you about your workflow, asking things like: What should this skill do? What makes good output for this type of work? Can you give examples of when you'd use this skill?" / "Templates, style guides, brand assets, or examples of work you're proud of all help Claude understand exactly what you're looking for." / "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills（确认日期 2026-10-26）
[^academy-plugins]: Claude Academy《Introduction to Claude Cowork》课程《Plugins: Encode your team's expertise》。"A plugin from the marketplace is a strong default, not a final answer." / "The more you shape it to your team's actual work, the more leverage it produces." https://academy.claude.com/courses/introduction-to-claude-cowork/plugins-cowork-as-a-specialist（确认日期 2026-10-26）
[^projects-limit]: 可能与价格页面的说明不同，请在你自己的界面上确认。
[^new-project-name]: 在帮助文档里写作「+ 새 프로젝트」（+ 新建项目）。
[^project-instr-free]: 免费套餐能否使用项目指令，各份文档的写法不一样。
[^connector-name]: 在帮助文档里写作「커넥터」→「커넥터 관리」（连接器 → 管理连接器），并且说输入 `/` 也可以。
[^create-name]: 在新设置界面里，名称是「파일 생성 및 편집」（创建和编辑文件）。
[^discover-name]: 在帮助文档里写作「발견」标签页（发现）。
[^screen-connectors]: 亲自确认输入框「+」→「添加连接器」的子菜单。条目为「커넥터 둘러보기」「커스텀 커넥터 추가」（灰色显示）（确认日期 2026-10-28，网页，免费（Free）套餐）

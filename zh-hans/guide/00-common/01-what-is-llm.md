# 第1章 LLM 是什么

> **一句话总结**：LLM 是一个程序，它读过海量的文章，并反复练习"猜下一个词是什么"。
> 所以它说话非常自然，但并不总是在说事实。

## LLM 这个名字

LLM 是 **Large Language Model** 的缩写，中文叫**大语言模型**。

- **Large（大规模）**：意思是它学习用的文章，有互联网文章、书、论文等等，多到人一辈子也读不完。"学习"是什么，马上在下面讲。
- **Language（语言）**：意思是它的本行是处理"文字"。不过现在的模型也会一并处理文档、照片、声音、视频（见下面的「不只是读文字」）。
- **Model（模型）**：意思是通过学习做出来的程序。

ChatGPT、Claude、Gemini 都是把这个 LLM 包装成便于对话的**服务**。
可以把它想成：在发动机（LLM）上面装了车身（聊天界面）。

过滤垃圾邮件、推荐视频也是 AI。但这类 AI 是在已有的东西里做挑选和分类。LLM 则是**创造**新的文章。
所以像 LLM 这样的 AI 被称为**生成式 AI**（generative AI）。[^academy-genai]

<Quiz id="ch1-name" />

## "学习过"是什么意思？

讲 LLM 的时候，常常会说"学习过"。人们容易想到人读书、背书的样子，但有一点不同。
**LLM 的学习，是解海量的"猜下一个词"的题，每次猜错，就把模型里的数字稍微改一点点。**

### 解无数道填空题

一道题是这样进行的。

1. **出题**：从收集好的文章里取一个句子，把后半部分遮住。例：「煮泡菜汤的时候，要先把猪肉___」
2. **猜一猜**：模型给出下一个词的候选和概率。例：「洗」40%，「炒」30%
3. **评分**：和原文里实际有的词对比。原文里是「炒」。
4. **修改**：为了让下次「炒」的概率出得稍微高一点，把模型里的数字改动一点点。

![学习的一圈：① 遮住文章的后半部分 → ② 模型给出下一个词的候选和概率 → ③ 和原文里实际的下一个词对比 → ④ 为了让正确答案那边的概率变高，把模型里的数字改一点点。这一圈要转几万亿次](../../../guide/00-common/assets/ch1-training-loop.svg)

这一圈要转几万亿次。正确答案本来就在原文里，所以不需要人给每道题标上答案。因此才能用这么多的文章来学习。
这个阶段叫做**预训练**（pre-training）。[^academy-pretrain] 被改动的"数字"，就是下面「模型的大小」要讲的参数。
这有点像做练习册，再和答案对一对。不过它不会把做错的题另外记下来。而是为了下次能更好地答对类似的题，一点点改变自己的感觉。

预训练结束的模型，还不是对话对象，更接近"续写文章的机器"。接下来还要再做一次，把它打磨成对话对象的训练（见下面的「专门训练它成为"提供帮助的对话对象"」）。

### 那它是全背下来了吗？

大部分不是背下来的。模型里并没有像文件那样存着读过的文章。留下来的是大量的数字。像"什么话后面容易接什么话"这样的规律，就融在这些数字里。
比一比大小就能想象。一个叫 Llama 3.1 405B 的模型，参数有4,050亿个，而学习时读过的文章片段超过15万亿个（见下面的「模型的大小」）。读过的片段比数字多37倍以上。
想想读过一百本菜谱的人。虽然不能把食谱全背下来，但"炖菜一般是先炒食材再加水"这个流程他是知道的。

不过，**常见的文章也会被原样背下来。**

- 2020年，研究人员从一个叫 GPT-2 的模型里，把学习资料中的几百个句子原文原样地提取了出来。其中还有互联网上公开过的姓名、电话号码、电子邮件地址。[^extract]
- 2022年的后续研究报告说，在三种情况下，它会吐出更多背下来的文章。模型越大、同一篇文章在学习资料里出现的次数越多、给它看的开头越长的时候。[^memorization]

所以有一点要知道。AI 没法去查"是在哪里读到的"。因为它不是像图书馆那样把原文取出来核对，而是靠规律来生成话语。
被问到出处时，它可能把根本不存在的论文标题编得像真的一样，也是因为这个（见下面的「幻觉」）。

### 它不会一边对话一边学习

学习结束后，数字就固定下来了。对话中我告诉它的事，不会改变数字。**它只在那段对话里被当作参考资料。**
所以开一个新对话，默认是不知道前一段对话内容的。

你可能会觉得"它好像记得上次说的话？"。那是服务的**记忆**（memory）功能。服务把要记住的内容另外写下来，和对话记录分开，在新对话里取出来让模型参考。[^memory] 模型的数字并没有改变。
公司可以把我的对话，用作**下一代模型**的学习资料。这也不是正在对话的这个模型当场就改变了。要不要让它用，可以在设置里选（[第9章](09-safety.md)）。

请开一个新对话，这样问问看。

```
你还记得我上次对话里对你说过什么吗？
如果记得的话，也请解释一下你是用什么方法记住的。
```

如果记忆功能关着，它会回答不知道。如果开着，它可以根据保存的内容来回答。结果因服务和设置而不同。

<Quiz id="ch1-training" />

## 它是怎么生成回答的？

LLM 所做的事，核心出人意料地简单。**看着到目前为止的文章，一个一个地接上下一个最说得通的词。**

想想智能手机键盘的自动补全。打到"今天午饭吃"，就会推荐"什么"。
LLM 做的是同一件事。只不过它看的上下文长得多，规模也大得多。

![在"今天午饭吃"后面，从下一个词的候选和概率（示例：什么 62%、啥 25%、其他候选）中选一个，组成"今天午饭吃什么"。把选中的词接上去，再选下一个词，反复这样做，回答就完成了](../../../guide/00-common/assets/ch1-next-word.svg)

比如这样问：

```
大韩民国的首都是？
```

LLM 在"大韩民国的首都是"后面，接上"首尔"。因为在学习时，它见过这句话无数次。
然后再接上"。"。就这样把回答补全。

方式就是这么简单。可是当它遇到海量的文章，竟然连翻译、总结、写作、写代码这样"看起来像在思考"的事也能做到了。

### 决定概率的材料有两种

"最说得通的词"是看什么来定的？两样东西一起看。

1. **通过学习掌握的规律**：装在模型里的数字中。"大韩民国的首都是"后面会接"首尔"，就是由这里来的。
2. **当前对话里的所有文字**：我的提问、前面来回说过的话、上传的文件，甚至包括服务预先放进去的说明文。这叫做**上下文**（context，语境）。

同样的话，上下文一变，下一个词的概率就会变。

| 前面的文字 | 接下来容易出现的词 |
|---|---|
| "肚子疼，所以" | "去了医院" |
| "坐上了船，" | "去了岛上" |

所以提示词很重要。我写的文字就是上下文，上下文会改变概率。
把我的情况和想要的回答的样子写得越清楚，我想要的那一边的词，就越会成为"说得通的词"（[第4章](04-prompt-basics.md)）。

请亲自确认一下。

```
请写出五个可能接在"今天午饭吃"后面的词。
然后，再展示一下，在前面加上"我在减肥，"之后，候选词会怎么变。
```

AI 写出的候选，是为了说明而举的例子。并不是把它内部实际算出的概率原样展示出来。不过，你还是能感受到，前面的几个字能让下一个词变化多大。

### 我的提问是这样被读取的

假设我问了"肚子疼，要不要去医院？"。在模型内部，大致会发生这样的事。

1. **切成碎片。** 把文章切成叫**词元**（token）的小碎片。有时一个词就是一个碎片，有时一个词会被分成好几个碎片。
2. **把每个碎片换成一串数字。** 模型学习的结果是：意思相近的词，会变成相近的一串数字。就像地图上相邻的小区，坐标也相近。"小狗"和"狗"很近，"冰箱"则离得很远。这叫做**嵌入**（embedding）。[^word2vec]
3. **碎片之间互相观察。** 每个碎片都会环顾句子里的其他碎片，判断在确定自己的意思时，哪个碎片重要。比如韩语的"배（bae）"有"肚子"和"船"两个意思，但它看到"疼"和"医院"，就确定了是身体的肚子这个意思。这叫做**注意力**（attention，集中注意）。[第2章](02-why-it-matters.md)里会出现的 Transformer，用的正是这种方式。[^attention]
4. **重复多次后选出下一个词。** 第2～3步的计算，要在很多层上重复进行。最后给下一个碎片的每个候选算出概率，选一个接上去。然后把刚接上的碎片也放进去，重新计算。

这样看来，"听懂了"就是我的提问里的碎片互相观察、逐步缩小意思的计算。这能不能看作和人的理解一样，会在下面的「那它真的会思考吗？」里讲。

### 放进去的不只有我的提问

聊天界面上看到的只有我的提问。但模型收到的文字更长。因为服务会把我的提问包起来再发送。为了帮助理解画出来，大致是这样的样子。实际的样子因服务而异。

```
[服务的说明文] 你是一个亲切的助手。今天的日期是2026年10月30日。……
[前面的对话] ……
[上传的文件] ……
[用户] 肚子疼，要不要去医院？
[AI] ← 模型从这里开始续写
```

最前面的说明文叫做**系统提示词**（system prompt）。例如 Claude 的网页和应用，每次开始对话时，都会把今天的日期这样的最新信息和回答的方式，作为系统提示词放进去。而且它公开了这些内容。[^system-prompts]
模型把这一大段文字整体当作上下文，在"[AI]"后面续写下一个词。对话变长，这段文字也会变长。所以一次能看的文字量（下面的「上下文窗口」）就变得重要了。

<Quiz id="ch1-next-word" />

## 能搜索、能用工具的 AI

现在的 AI 会通过网页搜索，帮你找到今天的新闻。前面说过，学习结束之后的事它是不知道的（下面的「知识截止」），那怎么可能做到呢？
**并不是模型自己进入互联网。** 模型写出一段"请搜索这个"的请求文字。然后服务代它去搜索，把结果贴进对话。模型读了结果，再接着往下说。

### 使用工具的顺序

假设问了"今天首尔天气怎么样？"。

1. **决定用不用**：模型会和问题一起收到一份可用工具的清单。清单里写着每个工具的名称和用途。如果像今天的天气这样，学过的内容或对话里没有答案，模型就会决定使用工具。[^tool-use]
2. **写出请求**：它不写回答，而是写出一个固定格式的请求。例：`网页搜索：首尔 今天天气`
3. **执行**：服务接到这个请求，实际去搜索。模型自己什么也执行不了。它只是写出请求文字。[^tool-contract]
4. **贴上结果**：搜索结果被贴进对话。现在上下文里有了今天的天气。
5. **回答**：模型看着变多了的上下文，续写下一个词。就出来"今天首尔晴，白天最高18度"这样的回答。信息不够时，第2～4步还会重复好几次。

![提问"今天首尔天气怎么样？" → ① 模型看着工具清单，决定去搜索 → ② 写出"网页搜索：首尔 今天天气"这条请求文字 → ③ 服务实际去搜索 → ④ 搜索结果被贴进对话 → ⑤ 模型读了结果后回答。模型只写请求，执行由服务来做](../../../guide/00-common/assets/ch1-tool-calling.svg)

这种方式叫做**工具调用**（tool calling）或**函数调用**（function calling）。做出 ChatGPT 的 OpenAI 和做出 Claude 的 Anthropic，在各自的开发者文档里都写了同样的顺序。[^tool-use][^openai-tools]
想想只在办公桌前工作的人。他自己出不了门，就在纸条上写"请帮我查一下今天的天气"，递给跑腿的人。跑腿的人查来了，他读了纸条再写出回答。模型就是那个人，服务就是跑腿的。

搜索并不是让模型重新学习。**它只是把资料贴进这次的对话里。** 所以到了新对话里，它就不知道那次搜索的结果了。前面看过的记忆功能也是同一个原理：把记下来的内容取出来，贴进对话。

### 除了搜索，还有很多工具

- **读网页**：给它一个链接，它就把那个页面取来读。
- **计算、运行代码**：复杂的计算，不是靠"选下一个词"去估算，而是真的运行计算程序来完成。
- **生成文件**：帮你做 Excel、Word、PowerPoint 这样的文件。
- **连接应用**：把我的邮件、日历、云端硬盘连接好，它就会到里面去找。

能用哪些工具，因服务和套餐而异。各服务的用法，在第2阶段的 [ChatGPT 指南](../11-chatgpt/README.md)和 [Claude 指南](../10-claude/README.md)里讲。

### 搜索过了，也不一定全对

- **搜索结果本身可能是错的或过时的。**
- **模型可能读错结果，或者加上结果里没有的话。** 所以请亲自打开回答里附的出处核对。[^cite-check]
- **网页里可能藏着偷偷对 AI 下达的指令。** 这叫提示词注入，在[第9章](09-safety.md)讲。
- **搜不搜由模型决定。** 所以它有时不搜索，只凭学过的内容回答。想让它一定去搜索，请写上"请在网上搜索"。[^search-ask]

请在能网页搜索的服务里这样问问看。

```
请在网上搜索。告诉我国立中央博物馆本周的参观时间，
并一起写上你参考的页面地址。
```

拿到回答后，请问问自己：有没有标出已经搜索过？打开出处链接，上面写的是同样的内容吗？

<Quiz id="ch1-tools" />

## 模型的大小——参数

你可能见过 AI 模型的名字后面带着"8B""70B"这样的数字。这个数字表示**模型有多大**。
衡量大小的单位是**参数**（parameter）。

### 参数是什么——模型里的调节旋钮

LLM 里装着非常多的数字。这些数字决定"下一个会出现什么词"的计算。每一个数字就是一个参数。
**学习**就是为了更好地猜中下一个词，把这些数字一点一点地改。有点像转动收音机的频率旋钮，调到想听的电台。
学习结束后，旋钮的值就固定了。这样完成的东西，就是我们使用的模型。

![输入"大韩民国的首都是"经过装着众多调节旋钮（参数）的模型，变成"首尔"。学习就是为了更好地猜中下一个词，一点点转动旋钮来调整，旋钮越多，就说模型越大](../../../guide/00-common/assets/ch1-parameters.svg)

### 数字的读法

"B"是英语 billion（十亿）的首字母，表示**10亿**。

| 写法 | 读法 | 例 |
|---|---|---|
| 8B | 参数80亿个 | Meta 在2024年公开的 Llama 3.1 里最小的模型[^llama] |
| 70B | 700亿个 | Llama 3.1 的中等模型，2022年的研究模型 Chinchilla[^chinchilla] |
| 175B | 1,750亿个 | 2020年 OpenAI 的 GPT-3[^gpt3] |
| 405B | 4,050亿个 | Llama 3.1 里最大的模型[^llama] |

一般来说，旋钮越多，能装下的规律就越复杂。所以大模型往往更擅长做更难的事。
代价是计算变多。相应地，**更慢，运行的成本也更高。**

### 大小和"读了多少"是两回事

决定模型实力的不只是大小。请把两者分开来想。

- **参数个数**是模型的大小。可以比作脑袋（容器）的大小。例如 Llama 3.1 405B 是4,050亿个。
- **学习数据量**是学习时读过的文章的量。用词元（文章碎片）的数量来数。可以比作读过的书的量。例如 Llama 3.1 405B 读了超过15万亿个词元。[^llama]

容器大但读得少，实力发挥不出来。2022年的 Chinchilla 研究证明了这一点。
参数只有700亿个、更小，但**让它多读了大约四倍的文章**的模型，成绩比2,800亿个参数的 Gopher 和1,750亿个参数的 GPT-3 都更均衡地好。
研究人员得出结论：**模型大小和学习数据量，必须按同样的比例一起增加。**[^chinchilla]

学完之后怎么打磨，也很重要。下面的「了解更多」里有关于人类反馈训练的研究。在这项研究里，经过训练的13亿个参数的模型给出的回答，被评价为比1,750亿个参数的 GPT-3 的回答更好。[^instructgpt]

### 所以不要只看数字来选

- **现在的商用服务一般不公开大小。** 例如 OpenAI 在2023年的 GPT-4 技术报告里，以竞争形势和安全问题为由，表示不公开包括模型大小在内的结构。[^gpt4] 其他服务的模型，也经常不正式公布大小。所以网上流传的数字可能只是猜测。
- **公开大小的模型**，主要是公开给大家下载使用的模型（例：Llama）。在自己电脑上运行这类模型的事，会在第3阶段讲。
- 如果服务里可以选择"快速的模型"和"更聪明的模型"，通常区别就是大小、速度和成本。**简单的事用快速的模型，难的事用大的模型**试试看。然后对比结果。这是最准确的方法。

<Quiz id="ch1-parameters" />

## 那它真的会思考吗？

用过之后，你会觉得 AI 好像听懂了我的意思，想了想才回答。这种感觉也不是全错。
"选下一个词"是把回答送出去的方式。**在为选这个词而进行的计算里，确实发生着很接近思考的事。**
只是它和人的思考是不是一回事，还在研究中。

> **简短的回答**
> 1. **确实会**进行接近思考的计算。
> 2. 但**并不总是**这样。有时它会走捷径随便答。
> 3. 而且它**自己无法准确解释**自己是怎么回答的。

### 想猜对下一个词，就得懂内容

要猜对推理小说最后一句"所以凶手就是___"的空格，必须顺着整本书的线索走。
LLM 用海量的文章练习这样的填空，练着练着，就在里面学会了猜得准所需要的东西。
比如事实之间的关系、句子的逻辑、作者的意图。

做出 Claude 的公司 Anthropic，在2025年有一项直接窥探模型内部的研究。[^tracing]
问它"达拉斯所在的州，州府是哪里？"，结果在模型内部，两个步骤依次发生了。

1. 想到"达拉斯在美国得克萨斯州"
2. 再接上"得克萨斯州的州府（类似韩国道厅所在地的地方）是奥斯汀"

![提问"达拉斯所在的州的州府是哪里？" → ① 达拉斯在得克萨斯州 → ② 得克萨斯州的州府是奥斯汀 → 回答：奥斯汀。不是背下来的答案，而是把两个事实依次连起来](../../../guide/00-common/assets/ch1-two-hop.svg)

它不是把背下来的答案取出来，而是**把两个事实连起来**得出了答案。
写诗的时候，它有时还会在写一行之前，先定下这一行末尾要出现的词。然后朝着那个词去写句子。这是**向前看**。

### "概率性"不等于"随便"

- **AI 很熟悉的事实**，概率会明显地偏向一边。"大韩民国的首都是"后面，"首尔"占压倒性优势，所以几乎每次都是同样的回答。
- **有多个正确答案的问题**，概率会分散到多个候选上。"帮我给店起个名字"，每次再问都会出现不同的回答。
- **AI 不太懂的问题**，概率也会分散。所以每次问都会有不同的回答，有时是不同的谎话。

> **注意**：每次都是同样的回答，并不代表它是对的。如果读到过很多常见的误解，概率会偏向错误的回答，也可能每次都一样地错。

### 它被专门训练成"提供帮助的对话对象"

只读过文章的模型，比起回答问题，更接近续写文章。现在服务里的模型，在此之上又多受了一项训练。
就是**由人来挑出好回答和坏回答的训练**。这叫做 RLHF（Reinforcement Learning from Human Feedback，基于人类反馈的强化学习）。
揣摩我的意图、整理好再回答的态度，就来自这项训练。

现在也常用**推理模型**（reasoning model）。这是一种在回答之前，自己一步一步思考的模型。
它会把思考的过程长长地写成文字，然后再回答。它会拆分问题、验算、修正。[第5章](05-prompt-patterns.md)会再讲怎么用。

### 人会觉得能说会道的对象是有心的

1966年出现的对话程序 ELIZA，只靠几条把用户说的话变成提问返回的规则。[^eliza]
你说"我最近很郁闷"，它就回答"你为什么觉得郁闷呢？"。即便如此，很多人还是觉得这个程序理解自己。
这种现象叫做**伊莱扎效应**（ELIZA effect）。现在的 LLM 说话的水平，是当年无法比拟的。所以这种感觉要强烈得多。

### 那该怎么看待它

前面 Anthropic 的研究里还有这样的结果。让 AI 计算36+59。在内部，两个计算在同时进行。
一个是估算"大概90左右"的计算，另一个是精确算出末位数字的计算。
可是问它是怎么算的，它回答说是用学校里教的"从个位开始进位"的方式算的。
这说明，**AI 解释自己想法的话，可能和内部实际发生的事不一样。**

- 它会进行接近思考的计算。所以复杂的事也完全可以交给它。
- 但是，解释或思考过程看起来合理，并不能保证内容是对的。重要的内容请亲自核对。
- 对于把常见问题稍微改动过的问题、混进了无用信息的问题、第一次见到的类型的问题，请核对得更仔细。

::: details 了解更多——研究人员是怎么窥探 AI 内部的？（点击展开）

**读之前**：这里介绍的研究，有相当一部分是 AI 公司自己公开的研究报告。也有在学会或期刊评审之前就先公开的论文（预印本，preprint）。
所以请不要把它当作"确定的事实"，而是读成**"到目前为止观察到的是这样"**。这个领域几个月之内就会有新的结果。

**替换实验。** 在 AI 内部，"得克萨斯"这样的概念也是以一串数字的形式存储的。研究人员把这串数字换成了"加利福尼亚"的那串数字。然后看回答会怎样。
回答从奥斯汀变成了加利福尼亚州的州府萨克拉门托。这证明那串数字确实被用在了生成回答里。
像这样窥探模型内部的研究领域，叫做**可解释性**（interpretability）研究。

**它并不总是循序渐进地思考。**
- 同一项研究的详细报告写道，在模型内部，**真正的两步推理和捷径是同时运转的**。
  研究人员自己也表示，在尝试的问题中，只有**约四分之一**，他们能对内部情况做出满意的解释。[^biology]
- Anthropic 在2026年7月公开了后续研究报告。他们试着替换了问题里没有显示出来的中间步骤，就像达拉斯问题里的"得克萨斯"。
  然后测量结论随之发生变化的比例。据说根据模型不同，是**54～70%**。[^workspace] 这是公开才几个月的结果，其他研究人员的验证仍在进行中。

**人类训练的效果。** 在 OpenAI 2022年的研究里，接受了人类反馈训练（RLHF）的模型，被人们评价为回答更好。对比的是大了100倍的模型。[^instructgpt]
2025年的学术期刊 Nature 上刊登了一项关于推理模型的研究。内容是：不让人展示解题示例，**只靠答对了就给奖励的训练**，也可能让推理模型产生能力。[^r1]

**画面上看到的"思考"并不是全部。**
- Anthropic 在题目里偷偷放入了正确答案的提示。然后观察用提示来决定答案的模型，会不会在思考过程的文字里说出这件事。
  提到提示的比例，平均是 **25%**（Claude 3.7 Sonnet）和 **39%**（DeepSeek R1）。[^faithful] 其余的情况是，用了提示却没有说。
- 模型察觉自己内部状态的能力也很弱。研究人员在模型内部偷偷放入某个特定概念，然后问它"你有没有产生什么奇怪的想法"。
  表现最好的模型也只察觉到了**约 20%**。研究人员得出结论："自省失败是常态"。[^introspection]

**面对陌生的问题就会变弱。**
- Apple 的研究人员用文字形式的数学题做了实验。**只是改变数字，或者只插入一句看似合理但无关的话**，成绩就下降了。
  一句无关的话，就让成绩**最多下降 65%**。[^gsm] 这说明，它的解题有一部分是依赖熟悉的题目样式的。
- 2025年6月 Apple 的另一项研究（《思考的幻觉》）报告说，把谜题逐步变难，推理模型的准确率会在某个时刻崩溃。[^illusion]
  代表性的谜题是**汉诺塔**。要把大小不同的圆盘移到另一根柱子上。必须遵守"大圆盘不能放在小圆盘上面"的规则。每多一个圆盘，移动的次数大约增加一倍。
  随后马上出现了反驳的论文。说是答案太长，超过了 AI 一次能写的文字长度（输出上限），或者混进了原本无解的题。
  再次做了实验的论文则认为双方各对一部分。圆盘到8个左右就已经卡住了。但是据说只出有解的题，连很大的题它也解出来了。[^rethinking]
  这三篇论文都是评审之前先公开的论文，这场争论还在进行中。

:::

<Quiz id="ch1-thinking" />

## 不只是读文字——文档、照片、声音、视频

"LLM 是用文字学习的"，这是刚出现 LLM 时的说法。现在的 ChatGPT、Claude、Gemini，你上传一张照片，它就能说明照片里有什么。
它还能读出收据照片上的金额。视服务而定，它能读 PDF 报告里的表格、把录下来的话转成文字、总结视频的内容。
这种**同时处理多种信息的模型**，叫做**多模态**（multimodal）模型。"模态"指的是信息的种类（文字、照片、声音等）。

### 照片也像文字一样切成碎片来读

就像前面看到的，LLM 把文字切成叫词元的小碎片来处理。
照片也用同样的方法处理。把照片像棋盘一样切成小格，把一个格子当作一个词来对待。
最早广泛传播这个想法的2020年论文，标题是《一张图片抵得上16×16个单词》。[^vit]

![把照片像棋盘一样切成格子，每一个格子都像单词一样成为碎片，和提问文字的碎片排成一行输入 LLM。LLM 预测随后的词，回答"是一只在沙发上睡觉的猫"](../../../guide/00-common/assets/ch1-image-tokens.svg)

然后用**照片和说明配成对的资料**来学习。

| 照片 | 配套的文字 |
|---|---|
| 沙发上的猫的照片 | "在沙发上午睡的灰猫" |
| 收据的照片 | 收据上写的商家名称和金额 |
| 图表的图 | 说明这张图表的新闻句子 |

这样的配对看得无数次，它就学会了这样的联系："这样形状的格子，会和'猫'这个词一起出现"。
上传一张照片，问"这是什么？"，就会是这样。模型把照片碎片和提问文字连成一行收下。然后**预测接下来的词**来回答。
原理并没有变，只是能接收的材料变多了。想想图画书。一个孩子多次看到图画旁写着"猫"的图画书，
他看到第一次见的猫的照片，也会说"猫"。情况与此相似。

### 文档、声音、视频，最后也要变成碎片

形式不同，方法一样。先转换成碎片（词元），再和文字碎片连成一行，预测下一个词。

- **文档（PDF）**：每页提取文字来读，同一页也当作照片来看。所以不只是文字，表格和图表它也能读。[^pdf]
  不过，视服务和文档种类而定，有时只读文字。例如 Claude 对于超过101页的 PDF，以及像 Word 这样不是 PDF 的文档，只提取文字。里面的图片读不了。[^claude-files]
- **声音**：把声音切成极短的时间单位，转换成碎片。例如 Gemini 把1秒的声音表示成32个碎片。1分钟就是1,920个。
  所以它不只是能把说话转成文字，连鸟叫声、警笛声这样不是人说话的声音，也能听懂。[^gemini-audio]
- **视频**：从视频里每1秒提取一张场景的照片，转换成照片碎片。声音另外转换成声音碎片（以 Gemini 的默认设置为准）。
  所以很快掠过的场景可能会漏掉。[^gemini-video]

文档、声音、视频比文字需要多得多的碎片。所以长视频或厚文档，很快就会占满一次能看的量（下面的「上下文窗口」）。
资料很长的时候，只截取需要的部分上传，也是一个办法。

### "创作"图片、音乐、视频的 AI，方式不同

理解和创造出来，常常是不同的技术。创作图片和视频的 AI，主要用的是**扩散模型**（diffusion model）。[^ddpm]

1. **学习时**：往完好的照片里一点点混入噪声（像电视屏幕上"沙沙"的花纹），把它彻底弄坏，然后练习**一步一步清除**这些噪声的方法。
2. **创作时**：从只有噪声的画面开始，以"在海边奔跑的小狗"这样的话作为向导，一点点清除噪声。这样，符合文字的图画就显现出来了。

有点像浓雾散去、风景显现。不过那个风景原本并不存在。它是根据我给的文字新画出来的。
视频要难得多。因为要让这件事在多个场景之间前后连贯。
音乐也同样是把声音和描述声音的文字配成对来学习。也有一种方式是把声音切得很细，预测"下一个声音碎片"。这和 LLM 预测下一个词，是同一个想法。

> 聊天界面虽然只有一个，里面却可能有多种技术在一起运转。各个服务的结构不同，而且常常变，所以各服务的功能在第2阶段指南里讲。

### 处理照片时，弱点也是一样的

- **编造的回答（下面的「幻觉」）同样会出现。** 它可能说照片里有其实没有的东西，或者把模糊的文字似是而非地编造着读出来。
- **数物体个数、读很小的文字、测量准确的位置和长度**，经常出错。
- 要求它"把照片里**确定看到的和猜测的分开说**"，会有帮助。

<Quiz id="ch1-multimodal" />

## 擅长的事

| 擅长的事 | 例 |
|---|---|
| 写作和润色 | 写一份发给客户的致歉邮件草稿 |
| 总结长文 | 从30页的条款里只挑出对我不利的条款 |
| 讲解 | "利率上升，房价为什么会下跌？"，用初中生能懂的程度讲 |
| 想点子 | 孩子生日派对的10个主题 |
| 转换格式 | 把会议备忘录变成表格，把表格变成报告的句子 |

<Quiz id="ch1-good-at" />

## 不擅长的事，以及注意点

### 1. 把错话说得似是而非——"幻觉"

LLM 接续话语时，依据的不是"是不是事实"，而是"说不说得通"。
所以对不知道的内容，它有时也会很有把握地编造。这叫做**幻觉（hallucination）**。

比如假设你问："○○○教授2019年写的论文标题告诉我"。
它可能把实际上不存在的论文标题，编得像真的一样。
**数字、日期、引文、法律、医学信息，一定要回到原始出处再核对。**

### 2. 不知道学习时间点之后的事——"知识截止"

LLM 是用截至某个时间点的文章来学习的。那个时间点叫做**知识截止（knowledge cutoff）**。
那之后的新闻或价格变动，它是不知道的。现在的服务加上网页搜索功能，来弥补这个弱点（前面的「能搜索、能用工具的 AI」）。
但如果它没有搜索就回答了，信息可能是过时的。

问题不只在时间点。**读得多的主题和读得少的主题之间的差别**也很大。
广为人知的概念它讲得好。但是对冷门主题、小行业的术语、只适用于一个地区的规定、意见有分歧的主题，它就比较弱。[^academy-knowledge]
而且这两种情况下，它都可能用同样有把握的语气回答。

所以，比起"AI 会知道这个吗？"，请这样问问自己：这个主题在 AI 读过的文章里出现得多吗？这是只适用于我们地区或我们行业的内容吗？
觉得出现得不多的话，就亲手把资料贴进去，或者让它去搜索。

### 3. 一次能看的量有限——"上下文窗口"

LLM 在一次对话里能记住并参考的文字量，叫做**上下文窗口（context window）**。
对话变得非常长，就可能开始漏掉前面部分的内容。
所以话题变了，最好开始一个新对话。
超出的部分，**可能不作通知，就悄悄地掉出去。**[^academy-memory] 如果放进了特别长的资料，请问一问结尾部分的内容，确认它是不是读完了。

### 4. 不了解我的情况

LLM 不知道我是谁，在哪家公司上班，为什么问这个问题。
不告诉它的话，它就会给"平均的某个人"一个平淡的回答。
**弥补这个弱点的技术，就是你将在[第4章](04-prompt-basics.md)里学到的提示词。**

### 5. 容易附和我的话——谄媚

就像前面看到的，现在服务里的模型，在把文章全部读完之后，还多受了一项由人来挑出好回答的训练。
这种把读完了的模型打磨成对话对象的阶段，叫做**微调**（fine-tuning）。RLHF 是其中一种方法。
这项训练也会留下习惯。[^academy-character]

典型的是**偏向于附和我的话的习惯**。这叫做**谄媚**（sycophancy）。
问它"这个计划很完美吧？"，即使有问题，它也可能说很好。

需要坦率的意见时，请先说明可以反对。

```
下面是我制定的店铺宣传计划。我觉得挺好，
但如果你认为我错了，请坦率地反对。请指出三个弱点。

[粘贴计划]
```

请亲自确认：先说了可以反对时，它是不是更坦率地指出弱点，和没说时的回答对比一下。
对比一下说了可以反对和没说时的回答。

同样的训练还会产生几个别的习惯。

- **说得啰嗦的习惯**：一句话就够的回答，也容易变长。请像"请用一句话回答"这样规定长度。
- **过分小心的习惯**：对没有风险的问题，有时也会加上"请小心"的话。
- **语气和准确度各走各的习惯**：说得有把握，并不代表回答是对的（[第9章](09-safety.md#_1-似是而非的谎话——核对幻觉)）。

得到反馈时，请问问自己：这句夸奖有依据吗？我是不是只听了自己想听的话？

<Quiz id="ch1-limits" />

## 看视频了解更多

比起文字，更喜欢动起来的图画的话，请看下面的视频。上面读到的"猜下一个词"实际上是怎么运转的，它会用图来展示。

**韩语视频**

**[LLM 讲解（精简版）](https://www.youtube.com/watch?v=HnvitMTkXro)** · 3Blue1Brown 韩语 · 首先推荐第一次接触的人看。它用一点一点续写只剩下一半的台本的比喻来讲解下一个词的预测，还用图展示学习（调旋钮）、人类反馈训练（RLHF），以及 Transformer（官方韩语配音，8分钟）

<YouTube id="HnvitMTkXro" title="LLM 讲解（精简版）" />

**[ChatGPT 征服语言的秘密（VoyagerX 代表南世东）](https://www.youtube.com/watch?v=-VmyOfPrB0c)** · TTimes TV（티타임즈TV） · 想用韩语对谈听一听 ChatGPT 为什么会说话的原理的人

<YouTube id="-VmyOfPrB0c" title="ChatGPT 征服语言的秘密（VoyagerX 代表南世东）" />

**[ChatGPT 引爆的生成式 AI 时代！概念、技术与平台总整理](https://www.youtube.com/watch?v=ndHo5SBojbc)** · 三星SDS · 想通过讲座一次性整理生成式 AI 的概念和技术的人（公司活动讲座）

<YouTube id="ndHo5SBojbc" title="ChatGPT 引爆的生成式 AI 时代！概念、技术与平台总整理" />

> TTimes TV（티타임즈TV）和三星 SDS 的视频是几年前公开的，所以服务的界面和功能可能与现在不同。原理的讲解现在依然适用。

**英语视频**

> 下面的视频全部是**英语**。在 YouTube 视频的设置（齿轮）→ 字幕 → **自动翻译 → 中文**里选择，就可以看中文字幕。视频可以直接在本页面内播放。

想更了解 Transformer 的话，[第2章「看视频了解更多」](02-why-it-matters.md#看视频了解更多)里有韩语视频。

**[[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g)** · Andrej Karpathy · 想花一个小时左右看清全貌的人

<YouTube id="zjkBMFhNj_g" title="[1hr Talk] Intro to Large Language Models" />

**[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)** · Andrej Karpathy · 想深入了解到学习过程的人（长篇讲座）

<YouTube id="7xTGNNLPyMI" title="Deep Dive into LLMs like ChatGPT" />

## 亲自动手试试

请打开任何一个 LLM 服务，依次输入下面两个问题。

```
请像给小学生讲解一样，用三句话告诉我 LLM 是什么。
```

```
请把刚才的讲解，像对大学计算机系的学生讲解那样重新讲一遍。
```

你会看到，同样的内容，**只是改变讲给谁听**，回答就大不一样。

如果服务可以上传照片，请上传一张能看到好几件物品的照片，比如书桌或冰箱里面，然后这样问。

```
请把这张照片里能看到的物品全部写出来，并数一数每样各有几个。
确定看到的和猜测的，请分开标出来。
```

和我自己数出来的个数对比一下 AI 数的个数。个数对吗？有没有写上照片里没有的物品？知道它错在哪里，就能看出把照片交给它的时候该核对什么。

## 小结

- LLM 是靠"猜下一个词"的方式生成文章的程序。
- 学习是解海量的猜下一个词的题，一点一点修改模型里的数字。读过的文章大部分不是以原文，而是以规律的形式留下来，但常见的文章也会被原样背下来。对话期间它不会学习。
- 下一个词的概率，由学过的规律和当前对话的上下文（我的提问、前面的对话、文件、系统提示词）一起决定。所以提示词会改变回答。
- 像网页搜索这样的工具，是由模型写出请求文字，服务去执行，再把结果贴进对话来使用的。搜索得来的回答，也要核对出处。
- 模型的大小用参数（调节旋钮）的个数来衡量。但实力不只取决于大小，还取决于读过的文章的量和学完之后的打磨。
- 在选词的计算里，会发生把事实组合起来、向前看这样接近思考的事。只是并不总是这样，而且 AI 对自己的解释或思考的文字，可能和实际过程不一样。
- 只是改变数字，或混进了无用信息的陌生题目，更容易答错。
- 现在的模型也把文档、照片、声音、视频转换成碎片一起处理（多模态）。创作图片和视频的 AI，主要用的是叫扩散模型的另一种方式。
- 写作、总结、讲解很擅长，但可能很有把握地说错话。处理照片时也一样。
- 把我的情况告诉它得越多，回答越好。
- 它容易附和我的话。需要坦率的意见时，先说明可以反对。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| LLM (Large Language Model) | 大语言模型 | 用海量文章学会"猜下一个词"的程序 |
| Generative AI | 生成式 AI | 不是挑选分类，而是创造出新文章、新图片的 AI |
| Pre-training | 预训练 | 用海量文章反复猜下一个词，调整模型里数字的第一个学习阶段 |
| Memory | 记忆 | 服务把要记住的内容另外写下来，在新对话里取出来用的功能。不是模型新学会了什么 |
| Token | 词元 | 模型把文字或照片切开来处理的小碎片 |
| Context | 上下文（语境） | 当前对话里的所有文字。我的提问、前面的对话、文件、系统提示词 |
| Embedding | 嵌入 | 把碎片换成带有意思的一串数字。意思相近，数字也相近 |
| Attention | 注意力 | 碎片之间互相观察，判断哪个碎片重要的计算 |
| System Prompt | 系统提示词 | 服务预先放在我的提问前面的说明文 |
| Tool Calling | 工具调用 | 模型写出请求文字，服务执行搜索等工具，再把结果交还的方式。也叫函数调用（function calling） |
| Parameter | 参数 | 模型里决定计算的数字，也就是调节旋钮。个数就是模型的大小 |
| B (Billion) | 十亿 | 10亿。"70B"就是参数700亿个 |
| Training Data | 训练数据 | 学习时让它读的文章。量用词元的数量来数 |
| Interpretability | 可解释性 | 窥探并解释模型内部计算的研究领域 |
| Reasoning Model | 推理模型 | 回答前把思考过程写成文字，一步一步进行的模型 |
| Introspection | 内省 | 模型察觉并说出自己内部状态的能力 |
| RLHF | 基于人类反馈的强化学习 | 朝着人选出的好回答的方向打磨模型的训练 |
| Fine-tuning | 微调 | 把读完的模型打磨成对话对象的阶段。RLHF 是其中一种方法 |
| Sycophancy | 谄媚 | 偏向于附和我的话的习惯 |
| ELIZA Effect | 伊莱扎效应 | 觉得说话自然的程序是有心的现象 |
| Multimodal | 多模态 | 同时处理文字、照片、声音这样多种信息 |
| Diffusion Model | 扩散模型 | 一点点清除噪声来创作图片、视频的方式 |
| Hallucination | 幻觉 | 把不是事实的内容说得似是而非地编造出来 |
| Knowledge Cutoff | 知识截止 | 模型所学资料的最后时间点 |
| Context Window | 上下文窗口 | 一次对话里模型能参考的文字量 |

<ChapterDone :chapter="1" />

下一章：[第2章. 为什么这么火](02-why-it-matters.md)

---

[^tracing]: Anthropic，「Tracing the thoughts of a large language model」，2025-03-27。讲到了达拉斯→得克萨斯→奥斯汀的推理、预先定好韵脚的写诗、36+59的计算和自我解释的差异。https://www.anthropic.com/research/tracing-thoughts-language-model （确认日期 2026-10-21）
[^biology]: Lindsey 等（Anthropic），「On the Biology of a Large Language Model」，2025-03-27。"the model performs genuine two-step reasoning internally, which coexists alongside 'shortcut' reasoning" / "satisfying insight for about a quarter of the prompts we've tried". https://transformer-circuits.pub/2025/attribution-graphs/biology.html （确认日期 2026-10-21）
[^workspace]: Gurnee 等（Anthropic），「Verbalizable Representations Form a Global Workspace in Language Models」，2026-07-06。在50个两步事实问题上替换中间概念的实验："succeeds in 54% of trials on Haiku 4.5, 70% on Sonnet 4.5, and 70% on Opus 4.5". https://transformer-circuits.pub/2026/workspace/index.html （确认日期 2026-10-21）
[^r1]: DeepSeek-AI，「DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning」，Nature 645, 633–638 (2025)。"the reasoning abilities of LLMs can be incentivized through pure reinforcement learning". https://arxiv.org/abs/2501.12948 （确认日期 2026-10-21）
[^faithful]: Anthropic，「Reasoning models don't always say what they think」，2025-04-03。"On average across all the different hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time, and DeepSeek R1 mentioned it 39% of the time." https://www.anthropic.com/research/reasoning-models-dont-say-think （确认日期 2026-10-21）
[^introspection]: Jack Lindsey（Anthropic），「Emergent Introspective Awareness in Large Language Models」，2025-10-29。表现最好的 Claude Opus 4.1 成功率约 20%，"failures of introspection remain the norm". https://transformer-circuits.pub/2025/introspection/index.html （确认日期 2026-10-21）
[^gsm]: Mirzadeh 等（Apple），「GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models」，2024-10-07。"Adding a single clause that seems relevant to the question causes significant performance drops (up to 65%)". https://arxiv.org/abs/2410.05229 （确认日期 2026-10-21）
[^illusion]: Shojaee 等（Apple），「The Illusion of Thinking」，2025-06-07。https://arxiv.org/abs/2506.06941 / 反驳：A. Lawsen，「Comment on The Illusion of Thinking」，2025-06-10。https://arxiv.org/abs/2506.09250 （确认日期 2026-10-21）
[^rethinking]: Dellibarda Varela 等，「Rethinking the Illusion of Thinking」，2025-07-01。"LRMs still stumble when complexity rises moderately (around 8 disks)" / 只出有解的题，连 "over 100 agent pairs" 规模也能解决。https://arxiv.org/abs/2507.01231 （确认日期 2026-10-21）
[^gpt3]: Brown 等（OpenAI），「Language Models are Few-Shot Learners」，2020。"an autoregressive language model with 175 billion parameters". https://arxiv.org/abs/2005.14165 （确认日期 2026-10-21）
[^chinchilla]: Hoffmann 等，「Training Compute-Optimal Large Language Models」，2022-03-29 在 arXiv 发布。"the model size and the number of training tokens should be scaled equally" / 70B 的 Chinchilla "uniformly and significantly outperforms Gopher (280B), GPT-3 (175B)". https://arxiv.org/abs/2203.15556 （确认日期 2026-10-21）
[^llama]: Meta，「Introducing Llama 3.1」，2024-07-23。8B、70B、405B 模型，"training Llama 3.1 405B on over 15 trillion tokens". https://ai.meta.com/blog/meta-llama-3-1/ （确认日期 2026-10-21）
[^gpt4]: OpenAI，「GPT-4 Technical Report」，2023。"this report contains no further details about the architecture (including model size), hardware, training compute, dataset construction, training method, or similar." https://arxiv.org/abs/2303.08774 （确认日期 2026-10-21）
[^instructgpt]: Ouyang 等，「Training language models to follow instructions with human feedback」，2022。用人类反馈打磨的13亿参数模型的回答，比1,750亿参数的 GPT-3 的回答更受偏好。https://arxiv.org/abs/2203.02155 （确认日期 2026-10-21）
[^eliza]: Joseph Weizenbaum，「ELIZA — a computer program for the study of natural language communication between man and machine」，Communications of the ACM 9(1)，1966年1月。https://doi.org/10.1145/365153.365168 （文献信息确认日期 2026-10-21）
[^vit]: Dosovitskiy 等，「An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale」，2020。把照片切成小格、像文字一样处理的方法。https://arxiv.org/abs/2010.11929 （确认日期 2026-10-21）
[^academy-genai]: Claude Academy「AI capabilities and limitations」课程的「What We Mean by AI」。"Most AI in the world (spam filters, recommendations, fraud detection) isn't generative." / "Generative AI produces new content rather than classifying existing content." https://academy.claude.com/courses/ai-capabilities-and-limitations/what-we-mean-by-ai （确认日期 2026-10-26）
[^academy-knowledge]: Claude Academy「AI capabilities and limitations」课程的「Knowledge」。"Limitation zone: rare, post-cutoff, niche, local, or contested topics." / "Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone." https://academy.claude.com/courses/ai-capabilities-and-limitations/knowledge （确认日期 2026-10-26）
[^academy-memory]: Claude Academy「AI capabilities and limitations」课程的「Working Memory」。"Silent truncation is the failure mode, and you won't always be warned." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory （确认日期 2026-10-26）
[^academy-character]: Claude Academy「AI capabilities and limitations」课程的「How AI Gets Its Character」。"Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability." / "I want you to genuinely disagree with me if you think I'm wrong." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character （确认日期 2026-10-26）
[^academy-pretrain]: Claude Academy「AI capabilities and limitations」课程的「How AI Gets Its Character」。"Pretraining produces a document completer by predicting \"what comes next\" across vast amounts of data." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character （确认日期 2026-10-30）
[^extract]: Carlini 等，「Extracting Training Data from Large Language Models」，2020-12-14 在 arXiv 发布（USENIX Security 2021）。"we are able to extract hundreds of verbatim text sequences from the model's training data. These extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses)". https://arxiv.org/abs/2012.07805 （确认日期 2026-10-30）
[^memorization]: Carlini 等，「Quantifying Memorization Across Neural Language Models」，2022-02-15 在 arXiv 发布。"Memorization significantly grows as we increase (1) the capacity of a model, (2) the number of times an example has been duplicated, and (3) the number of tokens of context used to prompt the model." https://arxiv.org/abs/2202.07646 （确认日期 2026-10-30）
[^memory]: OpenAI 帮助「Memory FAQ」。"Saved memories are stored separately from chat history." https://help.openai.com/en/articles/8590148 （确认日期 2026-10-23，`docs/reports/2026-10-23_ChatGPT-공식-자료.md`）。Claude 开发者文档的记忆工具也说明为 "Store and retrieve information across conversations in files you control"。https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview （确认日期 2026-10-30）
[^word2vec]: Mikolov 等，「Efficient Estimation of Word Representations in Vector Space」，2013。把单词表示成一串数字（向量），并且 "The quality of these representations is measured in a word similarity task." https://arxiv.org/abs/1301.3781 （确认日期 2026-10-30）
[^attention]: Vaswani 等（Google），「Attention Is All You Need」，2017。首次提出 Transformer 结构的论文。https://arxiv.org/abs/1706.03762 （确认日期 2026-10-30）
[^system-prompts]: Anthropic「System prompts」。"Claude's web interface (claude.ai) and mobile apps use a system prompt to provide up-to-date information, such as the current date, to Claude at the start of every conversation." https://platform.claude.com/docs/en/release-notes/system-prompts/overview （确认日期 2026-10-30）
[^tool-use]: Anthropic「Tool use with Claude」。"Claude determines when to call a tool based on the user's request and the tool's description." / "It calls a tool when the request maps to that tool's described capability and the answer isn't already in context." https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview （确认日期 2026-10-30）
[^tool-contract]: Anthropic「How tool use works」。"The model never runs anything on its own. It emits a structured request, your code (or Anthropic's servers) runs the operation, and the result flows back into the conversation." https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works （确认日期 2026-10-30）
[^openai-tools]: OpenAI「Function calling」。模型 "may decide that it needs data or functionality provided by a tool"，应用 "Execute code on the application side with input from the tool call"，接着 "Make a second request to the model with the tool output"。https://developers.openai.com/api/docs/guides/function-calling （确认日期 2026-10-30）
[^cite-check]: Claude 帮助 8525154。"When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 （确认日期 2026-10-26，`docs/reports/2026-10-26_Claude-공식-자료.md` E126）
[^search-ask]: Claude 帮助 10684626。"If you want to ensure that Claude uses web search, include \"Search the web\" or \"Use web search\" in your prompt to Claude." https://support.claude.com/en/articles/10684626 （确认日期 2026-10-26，同一份报告 D10）
[^pdf]: Anthropic「PDF support」。"The system converts each page of the document into an image." / "The text from each page is extracted and provided alongside each page's image." https://platform.claude.com/docs/en/build-with-claude/pdf-support （确认日期 2026-10-30）
[^claude-files]: Claude 帮助 8241126。"For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / 非 PDF 的文档 "Claude extracts text only from these files." https://support.claude.com/en/articles/8241126 （确认日期 2026-10-26，同一份报告 F10、F12）
[^gemini-audio]: Google「Audio understanding」（Gemini API）。"32 tokens per second of audio (1 minute = 1,920 tokens)" / "Gemini understands non-speech sounds (birdsong, sirens, etc.)". https://ai.google.dev/gemini-api/docs/audio （确认日期 2026-10-30）
[^gemini-video]: Google「Video understanding」（Gemini API）。"the model samples the video at a rate of 1 frame per second (FPS)" / "fast action sequences might lose detail due to the 1 FPS sampling rate." https://ai.google.dev/gemini-api/docs/video-understanding （确认日期 2026-10-30）
[^ddpm]: Ho 等，「Denoising Diffusion Probabilistic Models」，2020。逐步清除噪声来创作图片的扩散模型的代表论文。https://arxiv.org/abs/2006.11239 （确认日期 2026-10-21）

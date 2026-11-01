# 第2章 为什么这么火

> **一句话总结**：因为以前只有专家才能使用的 AI，现在人人都可以用平时说话的方式来指挥它了。

## 看起来是突然冒出来的，但其实不是

AI 的研究已经持续了几十年。通向今天 LLM 的决定性契机，是一篇论文。
这就是 2017 年谷歌研究团队发表的《Attention Is All You Need》。[^1]
这篇论文介绍了一种叫**Transformer（转换器）**的结构。有了这种结构，才能高效地让模型学习海量的文字。
以前的方式必须从句子开头起，一个词一个词地依次读。Transformer 则**一次性**观察句子里各个词之间是什么关系。所以可以分给很多台计算机，快速地进行训练。
现在用的大部分 LLM 都是以这种结构为基础。Transformer 是怎么运转的，可以看下面「看视频了解更多」里用图画讲解的视频。

不过，普通人真正开始亲身感受到 AI，是在那之后的 5 年。

<Quiz id="ch2-origin" />

## 2022 年 11 月，ChatGPT

OpenAI 在 2022 年 11 月 30 日免费公开了 ChatGPT。[^2]
不需要特别安装，也不需要培训，打开网站，像聊天软件一样跟它说话就行。

反响非常热烈。根据投资银行瑞银（UBS）的分析，ChatGPT 在公开约两个月后的
2023 年 1 月，月活跃用户估计达到了约 1 亿人。按当时的标准，
它被认为是有史以来增长最快的消费级应用。[^3]

之后，Anthropic 的 Claude、Google 的 Gemini 等多家公司推出了类似的服务，竞争就此开始。

![2017 年 Transformer 论文 → 2022 年 11 月 ChatGPT 免费公开 → 2023 年 1 月月用户约 1 亿人（估计） → 之后 Claude·Gemini 等开始竞争。从技术契机到人人都能用，花了 5 年](../../../guide/00-common/assets/ch2-timeline.svg)

<Quiz id="ch2-chatgpt" />

## 到底有什么不同

### 1. 可以用“平时说的话”给计算机派活

以前想让计算机干活，得学编程语言，或者熟悉固定的菜单和按钮。
LLM 只要这样说就行。

```
把这份会议记录里谁要在什么时候之前做什么，整理成表格。
```

### 2. 不是只做一件事，而是几乎所有文字工作都能做

翻译软件只会翻译，拼写检查器只会查拼写。
一个 LLM 就可以做翻译、总结、写作、问答、头脑风暴，甚至写代码。

### 3. 成本和易得性

大部分服务都可以免费开始。用手机应用也能使用。
请助理或家教能做到的事，现在人人都可以试一试。

<Quiz id="ch2-change" />

## 由此引发的争议

这件事之所以成为热门话题，既有期待，也有担忧。两边都了解一下，看问题才会更平衡。

| 争议 | 内容 |
|---|---|
| 工作岗位 | 担心写作、翻译、咨询之类的工作会被 AI 取代或发生很大变化 |
| 准确性 | 因为[第1章](01-what-is-llm.md)里看到的幻觉，错误信息可能被传播开 |
| 版权 | AI 学习过的文字和图画的权利，以及 AI 生成的成果的权利问题 |
| 个人信息 | 担心输入对话的内容会怎样被保存和使用 |
| 教育 | 学生把作业全都交给 AI 去做的问题 |

这本指南不会假装这些担忧不存在。实际上该怎么小心，会在[第9章「安全地使用」](09-safety.md)里讲。

<Quiz id="ch2-issues" />

## 看视频了解更多

都是韩语视频。从第一个视频开始依次观看，就能由易到难。

**[[ChatGPT] 没有比这更简单的讲解了，'ChatGPT'](https://www.youtube.com/watch?v=i1VqqX4iAZ0)** · 洪真庆（Hong Jin-kyung，频道“学习王天才”） · 科学 YouTuber Andoegwahak·Gwedo用简单的话讲解 ChatGPT 是什么、为什么这么火。视频里还有这样的对比：聚集 100 万用户，Netflix 花了 3.5 年，Instagram 花了 2.5 个月，ChatGPT 只花了 5 天（9 分钟，2023 年的视频）

<YouTube id="i1VqqX4iAZ0" title="[ChatGPT] 没有比这更简单的讲解了，'ChatGPT'" />

**[Transformer，ChatGPT 就是用 Transformer 做出来的。- DL5](https://www.youtube.com/watch?v=g38aoGttLhI)** · 3Blue1Brown 韩语版 · 用图画展示文字在 Transformer 里是怎样流动的官方韩语配音版。**只看前 7 分钟就够了。** 里面讲到了预测下一个词、把文字切成小片，以及意思相近的词会变成相近的数字。后面就会出现矩阵和公式了（27 分钟）

<YouTube id="g38aoGttLhI" title="Transformer，ChatGPT 就是用 Transformer 做出来的。- DL5" />

**[大名鼎鼎的注意力，看完这个视频就懂了！- DL6](https://www.youtube.com/watch?v=_Z3rXeJahMs)** · 3Blue1Brown 韩语版 · 上面那个视频的下一集，讲词与词之间相互关注的“注意力（Attention）”。有一点难。**前 5 分钟**出现的例子是关键。比如在“塔”前面加上“埃菲尔”，意思就会偏向埃菲尔铁塔（26 分钟）

<YouTube id="_Z3rXeJahMs" title="大名鼎鼎的注意力，看完这个视频就懂了！- DL6" />

## 亲自试一试

向 LLM 问问这项技术本身。不要直接相信它的回答，去核实日期和数字对不对。

```
告诉我 ChatGPT 最早是哪天公开的，以及之后推出类似服务的三家公司。
请把每一条的出处也一起告诉我。
```

把 LLM 回答的日期，和这一章的脚注比一比。可能对，也可能错。
日期和脚注一样吗？它给出的出处真的存在吗？像这样问问自己就可以了。
**“核实的习惯”是整本指南里最重要的习惯。**

## 整理

- 2017 年的 Transformer 论文是技术上的契机，2022 年 ChatGPT 的公开是走向大众的契机。
- 核心变化是“可以用平时说的话，让计算机做几乎所有的文字工作”。
- 工作岗位、准确性、版权、个人信息等争议也要一并了解。

<ChapterDone :chapter="2" />

下一章：[第3章. 为什么要学](03-why-learn.md)

---

[^1]: Vaswani 等，《Attention Is All You Need》，2017 年 6 月在 arXiv（预印本网站，论文在评审之前先公开放上去的网站）公开。https://arxiv.org/abs/1706.03762 （确认日期 2026-10-20）
[^2]: OpenAI，《Introducing ChatGPT》，2022-11-30。https://openai.com/index/chatgpt/ （确认日期 2026-10-20）
[^3]: Reuters，《ChatGPT sets record for fastest-growing user base - analyst note》，2023-02-01。https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/ （确认日期 2026-10-20）

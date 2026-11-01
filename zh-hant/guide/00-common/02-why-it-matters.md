# 第2章 為什麼這麼火

> **一句話總結**：因為以前只有專家才能使用的 AI，現在人人都可以用平時說話的方式來指揮它了。

## 看起來是突然冒出來的，但其實不是

AI 的研究已經持續了幾十年。通向今天 LLM 的決定性契機，是一篇論文。
這就是 2017 年穀歌研究團隊發表的《Attention Is All You Need》。[^1]
這篇論文介紹了一種叫**Transformer（轉換器）**的結構。有了這種結構，才能高效地讓模型學習海量的文字。
以前的方式必須從句子開頭起，一個詞一個詞地依次讀。Transformer 則**一次性**觀察句子裡各個詞之間是什麼關係。所以可以分給很多臺計算機，快速地進行訓練。
現在用的大部分 LLM 都是以這種結構為基礎。Transformer 是怎麼運轉的，可以看下面「看影片瞭解更多」裡用圖畫講解的影片。

不過，普通人真正開始親身感受到 AI，是在那之後的 5 年。

<Quiz id="ch2-origin" />

## 2022 年 11 月，ChatGPT

OpenAI 在 2022 年 11 月 30 日免費公開了 ChatGPT。[^2]
不需要特別安裝，也不需要培訓，開啟網站，像聊天軟體一樣跟它說話就行。

反響非常熱烈。根據投資銀行瑞銀（UBS）的分析，ChatGPT 在公開約兩個月後的
2023 年 1 月，月活躍使用者估計達到了約 1 億人。按當時的標準，
它被認為是有史以來增長最快的消費級應用。[^3]

之後，Anthropic 的 Claude、Google 的 Gemini 等多家公司推出了類似的服務，競爭就此開始。

![2017 年 Transformer 論文 → 2022 年 11 月 ChatGPT 免費公開 → 2023 年 1 月月使用者約 1 億人（估計） → 之後 Claude·Gemini 等開始競爭。從技術契機到人人都能用，花了 5 年](../../../guide/00-common/assets/ch2-timeline.svg)

<Quiz id="ch2-chatgpt" />

## 到底有什麼不同

### 1. 可以用“平時說的話”給計算機派活

以前想讓計算機幹活，得學程式語言，或者熟悉固定的選單和按鈕。
LLM 只要這樣說就行。

```
把這份會議記錄裡誰要在什麼時候之前做什麼，整理成表格。
```

### 2. 不是隻做一件事，而是幾乎所有文字工作都能做

翻譯軟體只會翻譯，拼寫檢查器只會查拼寫。
一個 LLM 就可以做翻譯、總結、寫作、問答、頭腦風暴，甚至寫程式碼。

### 3. 成本和易得性

大部分服務都可以免費開始。用手機應用也能使用。
請助理或家教能做到的事，現在人人都可以試一試。

<Quiz id="ch2-change" />

## 由此引發的爭議

這件事之所以成為熱門話題，既有期待，也有擔憂。兩邊都瞭解一下，看問題才會更平衡。

| 爭議 | 內容 |
|---|---|
| 工作崗位 | 擔心寫作、翻譯、諮詢之類的工作會被 AI 取代或發生很大變化 |
| 準確性 | 因為[第1章](01-what-is-llm.md)裡看到的幻覺，錯誤資訊可能被傳播開 |
| 版權 | AI 學習過的文字和圖畫的權利，以及 AI 生成的成果的權利問題 |
| 個人資訊 | 擔心輸入對話的內容會怎樣被儲存和使用 |
| 教育 | 學生把作業全都交給 AI 去做的問題 |

這本指南不會假裝這些擔憂不存在。實際上該怎麼小心，會在[第9章「安全地使用」](09-safety.md)裡講。

<Quiz id="ch2-issues" />

## 看影片瞭解更多

都是韓語影片。從第一個影片開始依次觀看，就能由易到難。

**[[ChatGPT] 沒有比這更簡單的講解了，'ChatGPT'](https://www.youtube.com/watch?v=i1VqqX4iAZ0)** · 洪真慶（Hong Jin-kyung，頻道“學習王天才”） · 科學 YouTuber Andoegwahak·Gwedo用簡單的話講解 ChatGPT 是什麼、為什麼這麼火。影片裡還有這樣的對比：聚集 100 萬用戶，Netflix 花了 3.5 年，Instagram 花了 2.5 個月，ChatGPT 只花了 5 天（9 分鐘，2023 年的影片）

<YouTube id="i1VqqX4iAZ0" title="[ChatGPT] 沒有比這更簡單的講解了，'ChatGPT'" />

**[Transformer，ChatGPT 就是用 Transformer 做出來的。- DL5](https://www.youtube.com/watch?v=g38aoGttLhI)** · 3Blue1Brown 韓語版 · 用圖畫展示文字在 Transformer 裡是怎樣流動的官方韓語配音版。**只看前 7 分鐘就夠了。** 裡面講到了預測下一個詞、把文字切成小片，以及意思相近的詞會變成相近的數字。後面就會出現矩陣和公式了（27 分鐘）

<YouTube id="g38aoGttLhI" title="Transformer，ChatGPT 就是用 Transformer 做出來的。- DL5" />

**[大名鼎鼎的注意力，看完這個影片就懂了！- DL6](https://www.youtube.com/watch?v=_Z3rXeJahMs)** · 3Blue1Brown 韓語版 · 上面那個影片的下一集，講詞與詞之間相互關注的“注意力（Attention）”。有一點難。**前 5 分鐘**出現的例子是關鍵。比如在“塔”前面加上“埃菲爾”，意思就會偏向埃菲爾鐵塔（26 分鐘）

<YouTube id="_Z3rXeJahMs" title="大名鼎鼎的注意力，看完這個影片就懂了！- DL6" />

## 親自試一試

向 LLM 問問這項技術本身。不要直接相信它的回答，去核實日期和數字對不對。

```
告訴我 ChatGPT 最早是哪天公開的，以及之後推出類似服務的三家公司。
請把每一條的出處也一起告訴我。
```

把 LLM 回答的日期，和這一章的腳註比一比。可能對，也可能錯。
日期和腳註一樣嗎？它給出的出處真的存在嗎？像這樣問問自己就可以了。
**“核實的習慣”是整本指南里最重要的習慣。**

## 整理

- 2017 年的 Transformer 論文是技術上的契機，2022 年 ChatGPT 的公開是走向大眾的契機。
- 核心變化是“可以用平時說的話，讓計算機做幾乎所有的文字工作”。
- 工作崗位、準確性、版權、個人資訊等爭議也要一併瞭解。

<ChapterDone :chapter="2" />

下一章：[第3章. 為什麼要學](03-why-learn.md)

---

[^1]: Vaswani 等，《Attention Is All You Need》，2017 年 6 月在 arXiv（預印本網站，論文在評審之前先公開放上去的網站）公開。https://arxiv.org/abs/1706.03762 （確認日期 2026-10-20）
[^2]: OpenAI，《Introducing ChatGPT》，2022-11-30。https://openai.com/index/chatgpt/ （確認日期 2026-10-20）
[^3]: Reuters，《ChatGPT sets record for fastest-growing user base - analyst note》，2023-02-01。https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/ （確認日期 2026-10-20）

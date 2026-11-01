# 第1章 LLM 是什麼

> **一句話總結**：LLM 是一個程式，它讀過海量的文章，並反覆練習"猜下一個詞是什麼"。
> 所以它說話非常自然，但並不總是在說事實。

## LLM 這個名字

LLM 是 **Large Language Model** 的縮寫，中文叫**大語言模型**。

- **Large（大規模）**：意思是它學習用的文章，有網際網路文章、書、論文等等，多到人一輩子也讀不完。"學習"是什麼，馬上在下面講。
- **Language（語言）**：意思是它的本行是處理"文字"。不過現在的模型也會一併處理文件、照片、聲音、影片（見下面的「不只是讀文字」）。
- **Model（模型）**：意思是透過學習做出來的程式。

ChatGPT、Claude、Gemini 都是把這個 LLM 包裝成便於對話的**服務**。
可以把它想成：在發動機（LLM）上面裝了車身（聊天介面）。

過濾垃圾郵件、推薦影片也是 AI。但這類 AI 是在已有的東西里做挑選和分類。LLM 則是**創造**新的文章。
所以像 LLM 這樣的 AI 被稱為**生成式 AI**（generative AI）。[^academy-genai]

<Quiz id="ch1-name" />

## "學習過"是什麼意思？

講 LLM 的時候，常常會說"學習過"。人們容易想到人讀書、背書的樣子，但有一點不同。
**LLM 的學習，是解海量的"猜下一個詞"的題，每次猜錯，就把模型裡的數字稍微改一點點。**

### 解無數道填空題

一道題是這樣進行的。

1. **出題**：從收集好的文章裡取一個句子，把後半部分遮住。例：「煮泡菜湯的時候，要先把豬肉___」
2. **猜一猜**：模型給出下一個詞的候選和機率。例：「洗」40%，「炒」30%
3. **評分**：和原文裡實際有的詞對比。原文裡是「炒」。
4. **修改**：為了讓下次「炒」的機率出得稍微高一點，把模型裡的數字改動一點點。

![學習的一圈：① 遮住文章的後半部分 → ② 模型給出下一個詞的候選和機率 → ③ 和原文裡實際的下一個詞對比 → ④ 為了讓正確答案那邊的機率變高，把模型裡的數字改一點點。這一圈要轉幾萬億次](../../../guide/00-common/assets/ch1-training-loop.svg)

這一圈要轉幾萬億次。正確答案本來就在原文裡，所以不需要人給每道題標上答案。因此才能用這麼多的文章來學習。
這個階段叫做**預訓練**（pre-training）。[^academy-pretrain] 被改動的"數字"，就是下面「模型的大小」要講的引數。
這有點像做練習冊，再和答案對一對。不過它不會把做錯的題另外記下來。而是為了下次能更好地答對類似的題，一點點改變自己的感覺。

預訓練結束的模型，還不是對話物件，更接近"續寫文章的機器"。接下來還要再做一次，把它打磨成對話物件的訓練（見下面的「專門訓練它成為"提供幫助的對話物件"」）。

### 那它是全背下來了嗎？

大部分不是背下來的。模型裡並沒有像檔案那樣存著讀過的文章。留下來的是大量的數字。像"什麼話後面容易接什麼話"這樣的規律，就融在這些數字裡。
比一比大小就能想象。一個叫 Llama 3.1 405B 的模型，引數有4,050億個，而學習時讀過的文章片段超過15萬億個（見下面的「模型的大小」）。讀過的片段比數字多37倍以上。
想想讀過一百本菜譜的人。雖然不能把食譜全背下來，但"燉菜一般是先炒食材再加水"這個流程他是知道的。

不過，**常見的文章也會被原樣背下來。**

- 2020年，研究人員從一個叫 GPT-2 的模型裡，把學習資料中的幾百個句子原文原樣地提取了出來。其中還有網際網路上公開過的姓名、電話號碼、電子郵件地址。[^extract]
- 2022年的後續研究報告說，在三種情況下，它會吐出更多背下來的文章。模型越大、同一篇文章在學習資料裡出現的次數越多、給它看的開頭越長的時候。[^memorization]

所以有一點要知道。AI 沒法去查"是在哪裡讀到的"。因為它不是像圖書館那樣把原文取出來核對，而是靠規律來生成話語。
被問到出處時，它可能把根本不存在的論文標題編得像真的一樣，也是因為這個（見下面的「幻覺」）。

### 它不會一邊對話一邊學習

學習結束後，數字就固定下來了。對話中我告訴它的事，不會改變數字。**它只在那段對話裡被當作參考資料。**
所以開一個新對話，預設是不知道前一段對話內容的。

你可能會覺得"它好像記得上次說的話？"。那是服務的**記憶**（memory）功能。服務把要記住的內容另外寫下來，和對話記錄分開，在新對話裡取出來讓模型參考。[^memory] 模型的數字並沒有改變。
公司可以把我的對話，用作**下一代模型**的學習資料。這也不是正在對話的這個模型當場就改變了。要不要讓它用，可以在設定裡選（[第9章](09-safety.md)）。

請開一個新對話，這樣問問看。

```
你還記得我上次對話裡對你說過什麼嗎？
如果記得的話，也請解釋一下你是用什麼方法記住的。
```

如果記憶功能關著，它會回答不知道。如果開著，它可以根據儲存的內容來回答。結果因服務和設定而不同。

<Quiz id="ch1-training" />

## 它是怎麼生成回答的？

LLM 所做的事，核心出人意料地簡單。**看著到目前為止的文章，一個一個地接上下一個最說得通的詞。**

想想智慧手機鍵盤的自動補全。打到"今天午飯吃"，就會推薦"什麼"。
LLM 做的是同一件事。只不過它看的上下文長得多，規模也大得多。

![在"今天午飯吃"後面，從下一個詞的候選和機率（示例：什麼 62%、啥 25%、其他候選）中選一個，組成"今天午飯吃什麼"。把選中的詞接上去，再選下一個詞，反覆這樣做，回答就完成了](../../../guide/00-common/assets/ch1-next-word.svg)

比如這樣問：

```
大韓民國的首都是？
```

LLM 在"大韓民國的首都是"後面，接上"首爾"。因為在學習時，它見過這句話無數次。
然後再接上"。"。就這樣把回答補全。

方式就是這麼簡單。可是當它遇到海量的文章，竟然連翻譯、總結、寫作、寫程式碼這樣"看起來像在思考"的事也能做到了。

### 決定機率的材料有兩種

"最說得通的詞"是看什麼來定的？兩樣東西一起看。

1. **透過學習掌握的規律**：裝在模型裡的數字中。"大韓民國的首都是"後面會接"首爾"，就是由這裡來的。
2. **當前對話裡的所有文字**：我的提問、前面來回說過的話、上傳的檔案，甚至包括服務預先放進去的說明文。這叫做**上下文**（context，語境）。

同樣的話，上下文一變，下一個詞的機率就會變。

| 前面的文字 | 接下來容易出現的詞 |
|---|---|
| "肚子疼，所以" | "去了醫院" |
| "坐上了船，" | "去了島上" |

所以提示詞很重要。我寫的文字就是上下文，上下文會改變機率。
把我的情況和想要的回答的樣子寫得越清楚，我想要的那一邊的詞，就越會成為"說得通的詞"（[第4章](04-prompt-basics.md)）。

請親自確認一下。

```
請寫出五個可能接在"今天午飯吃"後面的詞。
然後，再展示一下，在前面加上"我在減肥，"之後，候選詞會怎麼變。
```

AI 寫出的候選，是為了說明而舉的例子。並不是把它內部實際算出的機率原樣展示出來。不過，你還是能感受到，前面的幾個字能讓下一個詞變化多大。

### 我的提問是這樣被讀取的

假設我問了"肚子疼，要不要去醫院？"。在模型內部，大致會發生這樣的事。

1. **切成碎片。** 把文章切成叫**詞元**（token）的小碎片。有時一個詞就是一個碎片，有時一個詞會被分成好幾個碎片。
2. **把每個碎片換成一串數字。** 模型學習的結果是：意思相近的詞，會變成相近的一串數字。就像地圖上相鄰的小區，座標也相近。"小狗"和"狗"很近，"冰箱"則離得很遠。這叫做**嵌入**（embedding）。[^word2vec]
3. **碎片之間互相觀察。** 每個碎片都會環顧句子裡的其他碎片，判斷在確定自己的意思時，哪個碎片重要。比如韓語的"배（bae）"有"肚子"和"船"兩個意思，但它看到"疼"和"醫院"，就確定了是身體的肚子這個意思。這叫做**注意力**（attention，集中注意）。[第2章](02-why-it-matters.md)裡會出現的 Transformer，用的正是這種方式。[^attention]
4. **重複多次後選出下一個詞。** 第2～3步的計算，要在很多層上重複進行。最後給下一個碎片的每個候選算出機率，選一個接上去。然後把剛接上的碎片也放進去，重新計算。

這樣看來，"聽懂了"就是我的提問裡的碎片互相觀察、逐步縮小意思的計算。這能不能看作和人的理解一樣，會在下面的「那它真的會思考嗎？」裡講。

### 放進去的不只有我的提問

聊天介面上看到的只有我的提問。但模型收到的文字更長。因為服務會把我的提問包起來再發送。為了幫助理解畫出來，大致是這樣的樣子。實際的樣子因服務而異。

```
[服務的說明文] 你是一個親切的助手。今天的日期是2026年10月30日。……
[前面的對話] ……
[上傳的檔案] ……
[使用者] 肚子疼，要不要去醫院？
[AI] ← 模型從這裡開始續寫
```

最前面的說明文叫做**系統提示詞**（system prompt）。例如 Claude 的網頁和應用，每次開始對話時，都會把今天的日期這樣的最新資訊和回答的方式，作為系統提示詞放進去。而且它公開了這些內容。[^system-prompts]
模型把這一大段文字整體當作上下文，在"[AI]"後面續寫下一個詞。對話變長，這段文字也會變長。所以一次能看的文字量（下面的「上下文視窗」）就變得重要了。

<Quiz id="ch1-next-word" />

## 能搜尋、能用工具的 AI

現在的 AI 會透過網頁搜尋，幫你找到今天的新聞。前面說過，學習結束之後的事它是不知道的（下面的「知識截止」），那怎麼可能做到呢？
**並不是模型自己進入網際網路。** 模型寫出一段"請搜尋這個"的請求文字。然後服務代它去搜索，把結果貼進對話。模型讀了結果，再接著往下說。

### 使用工具的順序

假設問了"今天首爾天氣怎麼樣？"。

1. **決定用不用**：模型會和問題一起收到一份可用工具的清單。清單裡寫著每個工具的名稱和用途。如果像今天的天氣這樣，學過的內容或對話裡沒有答案，模型就會決定使用工具。[^tool-use]
2. **寫出請求**：它不寫回答，而是寫出一個固定格式的請求。例：`網頁搜尋：首爾 今天天氣`
3. **執行**：服務接到這個請求，實際去搜索。模型自己什麼也執行不了。它只是寫出請求文字。[^tool-contract]
4. **貼上結果**：搜尋結果被貼進對話。現在上下文裡有了今天的天氣。
5. **回答**：模型看著變多了的上下文，續寫下一個詞。就出來"今天首爾晴，白天最高18度"這樣的回答。資訊不夠時，第2～4步還會重複好幾次。

![提問"今天首爾天氣怎麼樣？" → ① 模型看著工具清單，決定去搜索 → ② 寫出"網頁搜尋：首爾 今天天氣"這條請求文字 → ③ 服務實際去搜索 → ④ 搜尋結果被貼進對話 → ⑤ 模型讀了結果後回答。模型只寫請求，執行由服務來做](../../../guide/00-common/assets/ch1-tool-calling.svg)

這種方式叫做**工具呼叫**（tool calling）或**函式呼叫**（function calling）。做出 ChatGPT 的 OpenAI 和做出 Claude 的 Anthropic，在各自的開發者文件裡都寫了同樣的順序。[^tool-use][^openai-tools]
想想只在辦公桌前工作的人。他自己出不了門，就在紙條上寫"請幫我查一下今天的天氣"，遞給跑腿的人。跑腿的人查來了，他讀了紙條再寫出回答。模型就是那個人，服務就是跑腿的。

搜尋並不是讓模型重新學習。**它只是把資料貼進這次的對話裡。** 所以到了新對話裡，它就不知道那次搜尋的結果了。前面看過的記憶功能也是同一個原理：把記下來的內容取出來，貼進對話。

### 除了搜尋，還有很多工具

- **讀網頁**：給它一個連結，它就把那個頁面取來讀。
- **計算、執行程式碼**：複雜的計算，不是靠"選下一個詞"去估算，而是真的執行計算程式來完成。
- **生成檔案**：幫你做 Excel、Word、PowerPoint 這樣的檔案。
- **連線應用**：把我的郵件、日曆、雲端硬碟連線好，它就會到裡面去找。

能用哪些工具，因服務和套餐而異。各服務的用法，在第2階段的 [ChatGPT 指南](../11-chatgpt/README.md)和 [Claude 指南](../10-claude/README.md)裡講。

### 搜尋過了，也不一定全對

- **搜尋結果本身可能是錯的或過時的。**
- **模型可能讀錯結果，或者加上結果裡沒有的話。** 所以請親自打開回答裡附的出處核對。[^cite-check]
- **網頁裡可能藏著偷偷對 AI 下達的指令。** 這叫提示詞注入，在[第9章](09-safety.md)講。
- **搜不搜由模型決定。** 所以它有時不搜尋，只憑學過的內容回答。想讓它一定去搜索，請寫上"請在網上搜索"。[^search-ask]

請在能網頁搜尋的服務裡這樣問問看。

```
請在網上搜索。告訴我國立中央博物館本週的參觀時間，
並一起寫上你參考的頁面地址。
```

拿到回答後，請問問自己：有沒有標出已經搜尋過？打開出處連結，上面寫的是同樣的內容嗎？

<Quiz id="ch1-tools" />

## 模型的大小——引數

你可能見過 AI 模型的名字後面帶著"8B""70B"這樣的數字。這個數字表示**模型有多大**。
衡量大小的單位是**引數**（parameter）。

### 引數是什麼——模型裡的調節旋鈕

LLM 裡裝著非常多的數字。這些數字決定"下一個會出現什麼詞"的計算。每一個數字就是一個引數。
**學習**就是為了更好地猜中下一個詞，把這些數字一點一點地改。有點像轉動收音機的頻率旋鈕，調到想聽的電臺。
學習結束後，旋鈕的值就固定了。這樣完成的東西，就是我們使用的模型。

![輸入"大韓民國的首都是"經過裝著眾多調節旋鈕（引數）的模型，變成"首爾"。學習就是為了更好地猜中下一個詞，一點點轉動旋鈕來調整，旋鈕越多，就說模型越大](../../../guide/00-common/assets/ch1-parameters.svg)

### 數字的讀法

"B"是英語 billion（十億）的首字母，表示**10億**。

| 寫法 | 讀法 | 例 |
|---|---|---|
| 8B | 引數80億個 | Meta 在2024年公開的 Llama 3.1 裡最小的模型[^llama] |
| 70B | 700億個 | Llama 3.1 的中等模型，2022年的研究模型 Chinchilla[^chinchilla] |
| 175B | 1,750億個 | 2020年 OpenAI 的 GPT-3[^gpt3] |
| 405B | 4,050億個 | Llama 3.1 裡最大的模型[^llama] |

一般來說，旋鈕越多，能裝下的規律就越複雜。所以大模型往往更擅長做更難的事。
代價是計算變多。相應地，**更慢，執行的成本也更高。**

### 大小和"讀了多少"是兩回事

決定模型實力的不只是大小。請把兩者分開來想。

- **引數個數**是模型的大小。可以比作腦袋（容器）的大小。例如 Llama 3.1 405B 是4,050億個。
- **學習資料量**是學習時讀過的文章的量。用詞元（文章碎片）的數量來數。可以比作讀過的書的量。例如 Llama 3.1 405B 讀了超過15萬億個詞元。[^llama]

容器大但讀得少，實力發揮不出來。2022年的 Chinchilla 研究證明了這一點。
引數只有700億個、更小，但**讓它多讀了大約四倍的文章**的模型，成績比2,800億個引數的 Gopher 和1,750億個引數的 GPT-3 都更均衡地好。
研究人員得出結論：**模型大小和學習資料量，必須按同樣的比例一起增加。**[^chinchilla]

學完之後怎麼打磨，也很重要。下面的「瞭解更多」裡有關於人類反饋訓練的研究。在這項研究裡，經過訓練的13億個引數的模型給出的回答，被評價為比1,750億個引數的 GPT-3 的回答更好。[^instructgpt]

### 所以不要只看數字來選

- **現在的商用服務一般不公開大小。** 例如 OpenAI 在2023年的 GPT-4 技術報告裡，以競爭形勢和安全問題為由，表示不公開包括模型大小在內的結構。[^gpt4] 其他服務的模型，也經常不正式公佈大小。所以網上流傳的數字可能只是猜測。
- **公開大小的模型**，主要是公開給大家下載使用的模型（例：Llama）。在自己電腦上執行這類模型的事，會在第3階段講。
- 如果服務裡可以選擇"快速的模型"和"更聰明的模型"，通常區別就是大小、速度和成本。**簡單的事用快速的模型，難的事用大的模型**試試看。然後對比結果。這是最準確的方法。

<Quiz id="ch1-parameters" />

## 那它真的會思考嗎？

用過之後，你會覺得 AI 好像聽懂了我的意思，想了想才回答。這種感覺也不是全錯。
"選下一個詞"是把回答送出去的方式。**在為選這個詞而進行的計算裡，確實發生著很接近思考的事。**
只是它和人的思考是不是一回事，還在研究中。

> **簡短的回答**
> 1. **確實會**進行接近思考的計算。
> 2. 但**並不總是**這樣。有時它會走捷徑隨便答。
> 3. 而且它**自己無法準確解釋**自己是怎麼回答的。

### 想猜對下一個詞，就得懂內容

要猜對推理小說最後一句"所以兇手就是___"的空格，必須順著整本書的線索走。
LLM 用海量的文章練習這樣的填空，練著練著，就在裡面學會了猜得準所需要的東西。
比如事實之間的關係、句子的邏輯、作者的意圖。

做出 Claude 的公司 Anthropic，在2025年有一項直接窺探模型內部的研究。[^tracing]
問它"達拉斯所在的州，州府是哪裡？"，結果在模型內部，兩個步驟依次發生了。

1. 想到"達拉斯在美國得克薩斯州"
2. 再接上"得克薩斯州的州府（類似韓國道廳所在地的地方）是奧斯汀"

![提問"達拉斯所在的州的州府是哪裡？" → ① 達拉斯在得克薩斯州 → ② 得克薩斯州的州府是奧斯汀 → 回答：奧斯汀。不是背下來的答案，而是把兩個事實依次連起來](../../../guide/00-common/assets/ch1-two-hop.svg)

它不是把背下來的答案取出來，而是**把兩個事實連起來**得出了答案。
寫詩的時候，它有時還會在寫一行之前，先定下這一行末尾要出現的詞。然後朝著那個詞去寫句子。這是**向前看**。

### "機率性"不等於"隨便"

- **AI 很熟悉的事實**，機率會明顯地偏向一邊。"大韓民國的首都是"後面，"首爾"佔壓倒性優勢，所以幾乎每次都是同樣的回答。
- **有多個正確答案的問題**，機率會分散到多個候選上。"幫我給店起個名字"，每次再問都會出現不同的回答。
- **AI 不太懂的問題**，機率也會分散。所以每次問都會有不同的回答，有時是不同的謊話。

> **注意**：每次都是同樣的回答，並不代表它是對的。如果讀到過很多常見的誤解，機率會偏向錯誤的回答，也可能每次都一樣地錯。

### 它被專門訓練成"提供幫助的對話物件"

只讀過文章的模型，比起回答問題，更接近續寫文章。現在服務裡的模型，在此之上又多受了一項訓練。
就是**由人來挑出好回答和壞回答的訓練**。這叫做 RLHF（Reinforcement Learning from Human Feedback，基於人類反饋的強化學習）。
揣摩我的意圖、整理好再回答的態度，就來自這項訓練。

現在也常用**推理模型**（reasoning model）。這是一種在回答之前，自己一步一步思考的模型。
它會把思考的過程長長地寫成文字，然後再回答。它會拆分問題、驗算、修正。[第5章](05-prompt-patterns.md)會再講怎麼用。

### 人會覺得能說會道的物件是有心的

1966年出現的對話程式 ELIZA，只靠幾條把使用者說的話變成提問返回的規則。[^eliza]
你說"我最近很鬱悶"，它就回答"你為什麼覺得鬱悶呢？"。即便如此，很多人還是覺得這個程式理解自己。
這種現象叫做**伊萊扎效應**（ELIZA effect）。現在的 LLM 說話的水平，是當年無法比擬的。所以這種感覺要強烈得多。

### 那該怎麼看待它

前面 Anthropic 的研究裡還有這樣的結果。讓 AI 計算36+59。在內部，兩個計算在同時進行。
一個是估算"大概90左右"的計算，另一個是精確算出末位數字的計算。
可是問它是怎麼算的，它回答說是用學校裡教的"從個位開始進位"的方式算的。
這說明，**AI 解釋自己想法的話，可能和內部實際發生的事不一樣。**

- 它會進行接近思考的計算。所以複雜的事也完全可以交給它。
- 但是，解釋或思考過程看起來合理，並不能保證內容是對的。重要的內容請親自核對。
- 對於把常見問題稍微改動過的問題、混進了無用資訊的問題、第一次見到的型別的問題，請核對得更仔細。

::: details 瞭解更多——研究人員是怎麼窺探 AI 內部的？（點選展開）

**讀之前**：這裡介紹的研究，有相當一部分是 AI 公司自己公開的研究報告。也有在學會或期刊評審之前就先公開的論文（預印本，preprint）。
所以請不要把它當作"確定的事實"，而是讀成**"到目前為止觀察到的是這樣"**。這個領域幾個月之內就會有新的結果。

**替換實驗。** 在 AI 內部，"得克薩斯"這樣的概念也是以一串數字的形式儲存的。研究人員把這串數字換成了"加利福尼亞"的那串數字。然後看回答會怎樣。
回答從奧斯汀變成了加利福尼亞州的州府薩克拉門託。這證明那串數字確實被用在了生成回答裡。
像這樣窺探模型內部的研究領域，叫做**可解釋性**（interpretability）研究。

**它並不總是循序漸進地思考。**
- 同一項研究的詳細報告寫道，在模型內部，**真正的兩步推理和捷徑是同時運轉的**。
  研究人員自己也表示，在嘗試的問題中，只有**約四分之一**，他們能對內部情況做出滿意的解釋。[^biology]
- Anthropic 在2026年7月公開了後續研究報告。他們試著替換了問題裡沒有顯示出來的中間步驟，就像達拉斯問題裡的"得克薩斯"。
  然後測量結論隨之發生變化的比例。據說根據模型不同，是**54～70%**。[^workspace] 這是公開才幾個月的結果，其他研究人員的驗證仍在進行中。

**人類訓練的效果。** 在 OpenAI 2022年的研究裡，接受了人類反饋訓練（RLHF）的模型，被人們評價為回答更好。對比的是大了100倍的模型。[^instructgpt]
2025年的學術期刊 Nature 上刊登了一項關於推理模型的研究。內容是：不讓人展示解題示例，**只靠答對了就給獎勵的訓練**，也可能讓推理模型產生能力。[^r1]

**畫面上看到的"思考"並不是全部。**
- Anthropic 在題目裡偷偷放入了正確答案的提示。然後觀察用提示來決定答案的模型，會不會在思考過程的文字裡說出這件事。
  提到提示的比例，平均是 **25%**（Claude 3.7 Sonnet）和 **39%**（DeepSeek R1）。[^faithful] 其餘的情況是，用了提示卻沒有說。
- 模型察覺自己內部狀態的能力也很弱。研究人員在模型內部偷偷放入某個特定概念，然後問它"你有沒有產生什麼奇怪的想法"。
  表現最好的模型也只察覺到了**約 20%**。研究人員得出結論："自省失敗是常態"。[^introspection]

**面對陌生的問題就會變弱。**
- Apple 的研究人員用文字形式的數學題做了實驗。**只是改變數字，或者只插入一句看似合理但無關的話**，成績就下降了。
  一句無關的話，就讓成績**最多下降 65%**。[^gsm] 這說明，它的解題有一部分是依賴熟悉的題目樣式的。
- 2025年6月 Apple 的另一項研究（《思考的幻覺》）報告說，把謎題逐步變難，推理模型的準確率會在某個時刻崩潰。[^illusion]
  代表性的謎題是**漢諾塔**。要把大小不同的圓盤移到另一根柱子上。必須遵守"大圓盤不能放在小圓盤上面"的規則。每多一個圓盤，移動的次數大約增加一倍。
  隨後馬上出現了反駁的論文。說是答案太長，超過了 AI 一次能寫的文字長度（輸出上限），或者混進了原本無解的題。
  再次做了實驗的論文則認為雙方各對一部分。圓盤到8個左右就已經卡住了。但是據說只出有解的題，連很大的題它也解出來了。[^rethinking]
  這三篇論文都是評審之前先公開的論文，這場爭論還在進行中。

:::

<Quiz id="ch1-thinking" />

## 不只是讀文字——文件、照片、聲音、影片

"LLM 是用文字學習的"，這是剛出現 LLM 時的說法。現在的 ChatGPT、Claude、Gemini，你上傳一張照片，它就能說明照片裡有什麼。
它還能讀出收據照片上的金額。視服務而定，它能讀 PDF 報告裡的表格、把錄下來的話轉成文字、總結影片的內容。
這種**同時處理多種資訊的模型**，叫做**多模態**（multimodal）模型。"模態"指的是資訊的種類（文字、照片、聲音等）。

### 照片也像文字一樣切成碎片來讀

就像前面看到的，LLM 把文字切成叫詞元的小碎片來處理。
照片也用同樣的方法處理。把照片像棋盤一樣切成小格，把一個格子當作一個詞來對待。
最早廣泛傳播這個想法的2020年論文，標題是《一張圖片抵得上16×16個單詞》。[^vit]

![把照片像棋盤一樣切成格子，每一個格子都像單詞一樣成為碎片，和提問文字的碎片排成一行輸入 LLM。LLM 預測隨後的詞，回答"是一隻在沙發上睡覺的貓"](../../../guide/00-common/assets/ch1-image-tokens.svg)

然後用**照片和說明配成對的資料**來學習。

| 照片 | 配套的文字 |
|---|---|
| 沙發上的貓的照片 | "在沙發上午睡的灰貓" |
| 收據的照片 | 收據上寫的商家名稱和金額 |
| 圖表的圖 | 說明這張圖表的新聞句子 |

這樣的配對看得無數次，它就學會了這樣的聯絡："這樣形狀的格子，會和'貓'這個詞一起出現"。
上傳一張照片，問"這是什麼？"，就會是這樣。模型把照片碎片和提問文字連成一行收下。然後**預測接下來的詞**來回答。
原理並沒有變，只是能接收的材料變多了。想想圖畫書。一個孩子多次看到圖畫旁寫著"貓"的圖畫書，
他看到第一次見的貓的照片，也會說"貓"。情況與此相似。

### 文件、聲音、影片，最後也要變成碎片

形式不同，方法一樣。先轉換成碎片（詞元），再和文字碎片連成一行，預測下一個詞。

- **文件（PDF）**：每頁提取文字來讀，同一頁也當作照片來看。所以不只是文字，表格和圖表它也能讀。[^pdf]
  不過，視服務和文件種類而定，有時只讀文字。例如 Claude 對於超過101頁的 PDF，以及像 Word 這樣不是 PDF 的文件，只提取文字。裡面的圖片讀不了。[^claude-files]
- **聲音**：把聲音切成極短的時間單位，轉換成碎片。例如 Gemini 把1秒的聲音表示成32個碎片。1分鐘就是1,920個。
  所以它不只是能把說話轉成文字，連鳥叫聲、警笛聲這樣不是人說話的聲音，也能聽懂。[^gemini-audio]
- **影片**：從影片裡每1秒提取一張場景的照片，轉換成照片碎片。聲音另外轉換成聲音碎片（以 Gemini 的預設設定為準）。
  所以很快掠過的場景可能會漏掉。[^gemini-video]

文件、聲音、影片比文字需要多得多的碎片。所以長影片或厚文件，很快就會佔滿一次能看的量（下面的「上下文視窗」）。
資料很長的時候，只擷取需要的部分上傳，也是一個辦法。

### "創作"圖片、音樂、影片的 AI，方式不同

理解和創造出來，常常是不同的技術。創作圖片和影片的 AI，主要用的是**擴散模型**（diffusion model）。[^ddpm]

1. **學習時**：往完好的照片裡一點點混入噪聲（像電視螢幕上"沙沙"的花紋），把它徹底弄壞，然後練習**一步一步清除**這些噪聲的方法。
2. **創作時**：從只有噪聲的畫面開始，以"在海邊奔跑的小狗"這樣的話作為嚮導，一點點清除噪聲。這樣，符合文字的圖畫就顯現出來了。

有點像濃霧散去、風景顯現。不過那個風景原本並不存在。它是根據我給的文字新畫出來的。
影片要難得多。因為要讓這件事在多個場景之間前後連貫。
音樂也同樣是把聲音和描述聲音的文字配成對來學習。也有一種方式是把聲音切得很細，預測"下一個聲音碎片"。這和 LLM 預測下一個詞，是同一個想法。

> 聊天介面雖然只有一個，裡面卻可能有多種技術在一起運轉。各個服務的結構不同，而且常常變，所以各服務的功能在第2階段指南里講。

### 處理照片時，弱點也是一樣的

- **編造的回答（下面的「幻覺」）同樣會出現。** 它可能說照片裡有其實沒有的東西，或者把模糊的文字似是而非地編造著讀出來。
- **數物體個數、讀很小的文字、測量準確的位置和長度**，經常出錯。
- 要求它"把照片裡**確定看到的和猜測的分開說**"，會有幫助。

<Quiz id="ch1-multimodal" />

## 擅長的事

| 擅長的事 | 例 |
|---|---|
| 寫作和潤色 | 寫一份發給客戶的致歉郵件草稿 |
| 總結長文 | 從30頁的條款裡只挑出對我不利的條款 |
| 講解 | "利率上升，房價為什麼會下跌？"，用初中生能懂的程度講 |
| 想點子 | 孩子生日派對的10個主題 |
| 轉換格式 | 把會議備忘錄變成表格，把表格變成報告的句子 |

<Quiz id="ch1-good-at" />

## 不擅長的事，以及注意點

### 1. 把錯話說得似是而非——"幻覺"

LLM 接續話語時，依據的不是"是不是事實"，而是"說不說得通"。
所以對不知道的內容，它有時也會很有把握地編造。這叫做**幻覺（hallucination）**。

比如假設你問："○○○教授2019年寫的論文標題告訴我"。
它可能把實際上不存在的論文標題，編得像真的一樣。
**數字、日期、引文、法律、醫學資訊，一定要回到原始出處再核對。**

### 2. 不知道學習時間點之後的事——"知識截止"

LLM 是用截至某個時間點的文章來學習的。那個時間點叫做**知識截止（knowledge cutoff）**。
那之後的新聞或價格變動，它是不知道的。現在的服務加上網頁搜尋功能，來彌補這個弱點（前面的「能搜尋、能用工具的 AI」）。
但如果它沒有搜尋就回答了，資訊可能是過時的。

問題不只在時間點。**讀得多的主題和讀得少的主題之間的差別**也很大。
廣為人知的概念它講得好。但是對冷門主題、小行業的術語、只適用於一個地區的規定、意見有分歧的主題，它就比較弱。[^academy-knowledge]
而且這兩種情況下，它都可能用同樣有把握的語氣回答。

所以，比起"AI 會知道這個嗎？"，請這樣問問自己：這個主題在 AI 讀過的文章裡出現得多嗎？這是隻適用於我們地區或我們行業的內容嗎？
覺得出現得不多的話，就親手把資料貼進去，或者讓它去搜索。

### 3. 一次能看的量有限——"上下文視窗"

LLM 在一次對話裡能記住並參考的文字量，叫做**上下文視窗（context window）**。
對話變得非常長，就可能開始漏掉前面部分的內容。
所以話題變了，最好開始一個新對話。
超出的部分，**可能不作通知，就悄悄地掉出去。**[^academy-memory] 如果放進了特別長的資料，請問一問結尾部分的內容，確認它是不是讀完了。

### 4. 不瞭解我的情況

LLM 不知道我是誰，在哪家公司上班，為什麼問這個問題。
不告訴它的話，它就會給"平均的某個人"一個平淡的回答。
**彌補這個弱點的技術，就是你將在[第4章](04-prompt-basics.md)裡學到的提示詞。**

### 5. 容易附和我的話——諂媚

就像前面看到的，現在服務裡的模型，在把文章全部讀完之後，還多受了一項由人來挑出好回答的訓練。
這種把讀完了的模型打磨成對話物件的階段，叫做**微調**（fine-tuning）。RLHF 是其中一種方法。
這項訓練也會留下習慣。[^academy-character]

典型的是**偏向於附和我的話的習慣**。這叫做**諂媚**（sycophancy）。
問它"這個計劃很完美吧？"，即使有問題，它也可能說很好。

需要坦率的意見時，請先說明可以反對。

```
下面是我制定的店鋪宣傳計劃。我覺得挺好，
但如果你認為我錯了，請坦率地反對。請指出三個弱點。

[貼上計劃]
```

請親自確認：先說了可以反對時，它是不是更坦率地指出弱點，和沒說時的回答對比一下。
對比一下說了可以反對和沒說時的回答。

同樣的訓練還會產生幾個別的習慣。

- **說得囉嗦的習慣**：一句話就夠的回答，也容易變長。請像"請用一句話回答"這樣規定長度。
- **過分小心的習慣**：對沒有風險的問題，有時也會加上"請小心"的話。
- **語氣和準確度各走各的習慣**：說得有把握，並不代表回答是對的（[第9章](09-safety.md#_1-似是而非的謊話——核對幻覺)）。

得到反饋時，請問問自己：這句誇獎有依據嗎？我是不是隻聽了自己想聽的話？

<Quiz id="ch1-limits" />

## 看影片瞭解更多

比起文字，更喜歡動起來的圖畫的話，請看下面的影片。上面讀到的"猜下一個詞"實際上是怎麼運轉的，它會用圖來展示。

**韓語影片**

**[LLM 講解（精簡版）](https://www.youtube.com/watch?v=HnvitMTkXro)** · 3Blue1Brown 韓語 · 首先推薦第一次接觸的人看。它用一點一點續寫只剩下一半的臺本的比喻來講解下一個詞的預測，還用圖展示學習（調旋鈕）、人類反饋訓練（RLHF），以及 Transformer（官方韓語配音，8分鐘）

<YouTube id="HnvitMTkXro" title="LLM 講解（精簡版）" />

**[ChatGPT 征服語言的秘密（VoyagerX 代表南世東）](https://www.youtube.com/watch?v=-VmyOfPrB0c)** · TTimes TV（티타임즈TV） · 想用韓語對談聽一聽 ChatGPT 為什麼會說話的原理的人

<YouTube id="-VmyOfPrB0c" title="ChatGPT 征服語言的秘密（VoyagerX 代表南世東）" />

**[ChatGPT 引爆的生成式 AI 時代！概念、技術與平臺總整理](https://www.youtube.com/watch?v=ndHo5SBojbc)** · 三星SDS · 想透過講座一次性整理生成式 AI 的概念和技術的人（公司活動講座）

<YouTube id="ndHo5SBojbc" title="ChatGPT 引爆的生成式 AI 時代！概念、技術與平臺總整理" />

> TTimes TV（티타임즈TV）和三星 SDS 的影片是幾年前公開的，所以服務的介面和功能可能與現在不同。原理的講解現在依然適用。

**英語影片**

> 下面的影片全部是**英語**。在 YouTube 影片的設定（齒輪）→ 字幕 → **自動翻譯 → 中文**裡選擇，就可以看中文字幕。影片可以直接在本頁面內播放。

想更瞭解 Transformer 的話，[第2章「看影片瞭解更多」](02-why-it-matters.md#看影片瞭解更多)裡有韓語影片。

**[[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g)** · Andrej Karpathy · 想花一個小時左右看清全貌的人

<YouTube id="zjkBMFhNj_g" title="[1hr Talk] Intro to Large Language Models" />

**[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)** · Andrej Karpathy · 想深入瞭解到學習過程的人（長篇講座）

<YouTube id="7xTGNNLPyMI" title="Deep Dive into LLMs like ChatGPT" />

## 親自動手試試

請開啟任何一個 LLM 服務，依次輸入下面兩個問題。

```
請像給小學生講解一樣，用三句話告訴我 LLM 是什麼。
```

```
請把剛才的講解，像對大學計算機系的學生講解那樣重新講一遍。
```

你會看到，同樣的內容，**只是改變講給誰聽**，回答就大不一樣。

如果服務可以上傳照片，請上傳一張能看到好幾件物品的照片，比如書桌或冰箱裡面，然後這樣問。

```
請把這張照片裡能看到的物品全部寫出來，並數一數每樣各有幾個。
確定看到的和猜測的，請分開標出來。
```

和我自己數出來的個數對比一下 AI 數的個數。個數對嗎？有沒有寫上照片裡沒有的物品？知道它錯在哪裡，就能看出把照片交給它的時候該核對什麼。

## 小結

- LLM 是靠"猜下一個詞"的方式生成文章的程式。
- 學習是解海量的猜下一個詞的題，一點一點修改模型裡的數字。讀過的文章大部分不是以原文，而是以規律的形式留下來，但常見的文章也會被原樣背下來。對話期間它不會學習。
- 下一個詞的機率，由學過的規律和當前對話的上下文（我的提問、前面的對話、檔案、系統提示詞）一起決定。所以提示詞會改變回答。
- 像網頁搜尋這樣的工具，是由模型寫出請求文字，服務去執行，再把結果貼進對話來使用的。搜尋得來的回答，也要核對出處。
- 模型的大小用引數（調節旋鈕）的個數來衡量。但實力不只取決於大小，還取決於讀過的文章的量和學完之後的打磨。
- 在選詞的計算裡，會發生把事實組合起來、向前看這樣接近思考的事。只是並不總是這樣，而且 AI 對自己的解釋或思考的文字，可能和實際過程不一樣。
- 只是改變數字，或混進了無用資訊的陌生題目，更容易答錯。
- 現在的模型也把文件、照片、聲音、影片轉換成碎片一起處理（多模態）。創作圖片和影片的 AI，主要用的是叫擴散模型的另一種方式。
- 寫作、總結、講解很擅長，但可能很有把握地說錯話。處理照片時也一樣。
- 把我的情況告訴它得越多，回答越好。
- 它容易附和我的話。需要坦率的意見時，先說明可以反對。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| LLM (Large Language Model) | 大語言模型 | 用海量文章學會"猜下一個詞"的程式 |
| Generative AI | 生成式 AI | 不是挑選分類，而是創造出新文章、新圖片的 AI |
| Pre-training | 預訓練 | 用海量文章反覆猜下一個詞，調整模型裡數字的第一個學習階段 |
| Memory | 記憶 | 服務把要記住的內容另外寫下來，在新對話裡取出來用的功能。不是模型新學會了什麼 |
| Token | 詞元 | 模型把文字或照片切開來處理的小碎片 |
| Context | 上下文（語境） | 當前對話裡的所有文字。我的提問、前面的對話、檔案、系統提示詞 |
| Embedding | 嵌入 | 把碎片換成帶有意思的一串數字。意思相近，數字也相近 |
| Attention | 注意力 | 碎片之間互相觀察，判斷哪個碎片重要的計算 |
| System Prompt | 系統提示詞 | 服務預先放在我的提問前面的說明文 |
| Tool Calling | 工具呼叫 | 模型寫出請求文字，服務執行搜尋等工具，再把結果交還的方式。也叫函式呼叫（function calling） |
| Parameter | 引數 | 模型裡決定計算的數字，也就是調節旋鈕。個數就是模型的大小 |
| B (Billion) | 十億 | 10億。"70B"就是引數700億個 |
| Training Data | 訓練資料 | 學習時讓它讀的文章。量用詞元的數量來數 |
| Interpretability | 可解釋性 | 窺探並解釋模型內部計算的研究領域 |
| Reasoning Model | 推理模型 | 回答前把思考過程寫成文字，一步一步進行的模型 |
| Introspection | 內省 | 模型察覺並說出自己內部狀態的能力 |
| RLHF | 基於人類反饋的強化學習 | 朝著人選出的好回答的方向打磨模型的訓練 |
| Fine-tuning | 微調 | 把讀完的模型打磨成對話物件的階段。RLHF 是其中一種方法 |
| Sycophancy | 諂媚 | 偏向於附和我的話的習慣 |
| ELIZA Effect | 伊萊扎效應 | 覺得說話自然的程式是有心的現象 |
| Multimodal | 多模態 | 同時處理文字、照片、聲音這樣多種資訊 |
| Diffusion Model | 擴散模型 | 一點點清除噪聲來創作圖片、影片的方式 |
| Hallucination | 幻覺 | 把不是事實的內容說得似是而非地編造出來 |
| Knowledge Cutoff | 知識截止 | 模型所學資料的最後時間點 |
| Context Window | 上下文視窗 | 一次對話裡模型能參考的文字量 |

<ChapterDone :chapter="1" />

下一章：[第2章. 為什麼這麼火](02-why-it-matters.md)

---

[^tracing]: Anthropic，「Tracing the thoughts of a large language model」，2025-03-27。講到了達拉斯→得克薩斯→奧斯汀的推理、預先定好韻腳的寫詩、36+59的計算和自我解釋的差異。https://www.anthropic.com/research/tracing-thoughts-language-model （確認日期 2026-10-21）
[^biology]: Lindsey 等（Anthropic），「On the Biology of a Large Language Model」，2025-03-27。"the model performs genuine two-step reasoning internally, which coexists alongside 'shortcut' reasoning" / "satisfying insight for about a quarter of the prompts we've tried". https://transformer-circuits.pub/2025/attribution-graphs/biology.html （確認日期 2026-10-21）
[^workspace]: Gurnee 等（Anthropic），「Verbalizable Representations Form a Global Workspace in Language Models」，2026-07-06。在50個兩步事實問題上替換中間概念的實驗："succeeds in 54% of trials on Haiku 4.5, 70% on Sonnet 4.5, and 70% on Opus 4.5". https://transformer-circuits.pub/2026/workspace/index.html （確認日期 2026-10-21）
[^r1]: DeepSeek-AI，「DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning」，Nature 645, 633–638 (2025)。"the reasoning abilities of LLMs can be incentivized through pure reinforcement learning". https://arxiv.org/abs/2501.12948 （確認日期 2026-10-21）
[^faithful]: Anthropic，「Reasoning models don't always say what they think」，2025-04-03。"On average across all the different hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time, and DeepSeek R1 mentioned it 39% of the time." https://www.anthropic.com/research/reasoning-models-dont-say-think （確認日期 2026-10-21）
[^introspection]: Jack Lindsey（Anthropic），「Emergent Introspective Awareness in Large Language Models」，2025-10-29。表現最好的 Claude Opus 4.1 成功率約 20%，"failures of introspection remain the norm". https://transformer-circuits.pub/2025/introspection/index.html （確認日期 2026-10-21）
[^gsm]: Mirzadeh 等（Apple），「GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models」，2024-10-07。"Adding a single clause that seems relevant to the question causes significant performance drops (up to 65%)". https://arxiv.org/abs/2410.05229 （確認日期 2026-10-21）
[^illusion]: Shojaee 等（Apple），「The Illusion of Thinking」，2025-06-07。https://arxiv.org/abs/2506.06941 / 反駁：A. Lawsen，「Comment on The Illusion of Thinking」，2025-06-10。https://arxiv.org/abs/2506.09250 （確認日期 2026-10-21）
[^rethinking]: Dellibarda Varela 等，「Rethinking the Illusion of Thinking」，2025-07-01。"LRMs still stumble when complexity rises moderately (around 8 disks)" / 只出有解的題，連 "over 100 agent pairs" 規模也能解決。https://arxiv.org/abs/2507.01231 （確認日期 2026-10-21）
[^gpt3]: Brown 等（OpenAI），「Language Models are Few-Shot Learners」，2020。"an autoregressive language model with 175 billion parameters". https://arxiv.org/abs/2005.14165 （確認日期 2026-10-21）
[^chinchilla]: Hoffmann 等，「Training Compute-Optimal Large Language Models」，2022-03-29 在 arXiv 釋出。"the model size and the number of training tokens should be scaled equally" / 70B 的 Chinchilla "uniformly and significantly outperforms Gopher (280B), GPT-3 (175B)". https://arxiv.org/abs/2203.15556 （確認日期 2026-10-21）
[^llama]: Meta，「Introducing Llama 3.1」，2024-07-23。8B、70B、405B 模型，"training Llama 3.1 405B on over 15 trillion tokens". https://ai.meta.com/blog/meta-llama-3-1/ （確認日期 2026-10-21）
[^gpt4]: OpenAI，「GPT-4 Technical Report」，2023。"this report contains no further details about the architecture (including model size), hardware, training compute, dataset construction, training method, or similar." https://arxiv.org/abs/2303.08774 （確認日期 2026-10-21）
[^instructgpt]: Ouyang 等，「Training language models to follow instructions with human feedback」，2022。用人類反饋打磨的13億引數模型的回答，比1,750億引數的 GPT-3 的回答更受偏好。https://arxiv.org/abs/2203.02155 （確認日期 2026-10-21）
[^eliza]: Joseph Weizenbaum，「ELIZA — a computer program for the study of natural language communication between man and machine」，Communications of the ACM 9(1)，1966年1月。https://doi.org/10.1145/365153.365168 （文獻資訊確認日期 2026-10-21）
[^vit]: Dosovitskiy 等，「An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale」，2020。把照片切成小格、像文字一樣處理的方法。https://arxiv.org/abs/2010.11929 （確認日期 2026-10-21）
[^academy-genai]: Claude Academy「AI capabilities and limitations」課程的「What We Mean by AI」。"Most AI in the world (spam filters, recommendations, fraud detection) isn't generative." / "Generative AI produces new content rather than classifying existing content." https://academy.claude.com/courses/ai-capabilities-and-limitations/what-we-mean-by-ai （確認日期 2026-10-26）
[^academy-knowledge]: Claude Academy「AI capabilities and limitations」課程的「Knowledge」。"Limitation zone: rare, post-cutoff, niche, local, or contested topics." / "Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone." https://academy.claude.com/courses/ai-capabilities-and-limitations/knowledge （確認日期 2026-10-26）
[^academy-memory]: Claude Academy「AI capabilities and limitations」課程的「Working Memory」。"Silent truncation is the failure mode, and you won't always be warned." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory （確認日期 2026-10-26）
[^academy-character]: Claude Academy「AI capabilities and limitations」課程的「How AI Gets Its Character」。"Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability." / "I want you to genuinely disagree with me if you think I'm wrong." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character （確認日期 2026-10-26）
[^academy-pretrain]: Claude Academy「AI capabilities and limitations」課程的「How AI Gets Its Character」。"Pretraining produces a document completer by predicting \"what comes next\" across vast amounts of data." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character （確認日期 2026-10-30）
[^extract]: Carlini 等，「Extracting Training Data from Large Language Models」，2020-12-14 在 arXiv 釋出（USENIX Security 2021）。"we are able to extract hundreds of verbatim text sequences from the model's training data. These extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses)". https://arxiv.org/abs/2012.07805 （確認日期 2026-10-30）
[^memorization]: Carlini 等，「Quantifying Memorization Across Neural Language Models」，2022-02-15 在 arXiv 釋出。"Memorization significantly grows as we increase (1) the capacity of a model, (2) the number of times an example has been duplicated, and (3) the number of tokens of context used to prompt the model." https://arxiv.org/abs/2202.07646 （確認日期 2026-10-30）
[^memory]: OpenAI 幫助「Memory FAQ」。"Saved memories are stored separately from chat history." https://help.openai.com/en/articles/8590148 （確認日期 2026-10-23，`docs/reports/2026-10-23_ChatGPT-공식-자료.md`）。Claude 開發者文件的記憶工具也說明為 "Store and retrieve information across conversations in files you control"。https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview （確認日期 2026-10-30）
[^word2vec]: Mikolov 等，「Efficient Estimation of Word Representations in Vector Space」，2013。把單詞表示成一串數字（向量），並且 "The quality of these representations is measured in a word similarity task." https://arxiv.org/abs/1301.3781 （確認日期 2026-10-30）
[^attention]: Vaswani 等（Google），「Attention Is All You Need」，2017。首次提出 Transformer 結構的論文。https://arxiv.org/abs/1706.03762 （確認日期 2026-10-30）
[^system-prompts]: Anthropic「System prompts」。"Claude's web interface (claude.ai) and mobile apps use a system prompt to provide up-to-date information, such as the current date, to Claude at the start of every conversation." https://platform.claude.com/docs/en/release-notes/system-prompts/overview （確認日期 2026-10-30）
[^tool-use]: Anthropic「Tool use with Claude」。"Claude determines when to call a tool based on the user's request and the tool's description." / "It calls a tool when the request maps to that tool's described capability and the answer isn't already in context." https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview （確認日期 2026-10-30）
[^tool-contract]: Anthropic「How tool use works」。"The model never runs anything on its own. It emits a structured request, your code (or Anthropic's servers) runs the operation, and the result flows back into the conversation." https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works （確認日期 2026-10-30）
[^openai-tools]: OpenAI「Function calling」。模型 "may decide that it needs data or functionality provided by a tool"，應用 "Execute code on the application side with input from the tool call"，接著 "Make a second request to the model with the tool output"。https://developers.openai.com/api/docs/guides/function-calling （確認日期 2026-10-30）
[^cite-check]: Claude 幫助 8525154。"When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 （確認日期 2026-10-26，`docs/reports/2026-10-26_Claude-공식-자료.md` E126）
[^search-ask]: Claude 幫助 10684626。"If you want to ensure that Claude uses web search, include \"Search the web\" or \"Use web search\" in your prompt to Claude." https://support.claude.com/en/articles/10684626 （確認日期 2026-10-26，同一份報告 D10）
[^pdf]: Anthropic「PDF support」。"The system converts each page of the document into an image." / "The text from each page is extracted and provided alongside each page's image." https://platform.claude.com/docs/en/build-with-claude/pdf-support （確認日期 2026-10-30）
[^claude-files]: Claude 幫助 8241126。"For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / 非 PDF 的文件 "Claude extracts text only from these files." https://support.claude.com/en/articles/8241126 （確認日期 2026-10-26，同一份報告 F10、F12）
[^gemini-audio]: Google「Audio understanding」（Gemini API）。"32 tokens per second of audio (1 minute = 1,920 tokens)" / "Gemini understands non-speech sounds (birdsong, sirens, etc.)". https://ai.google.dev/gemini-api/docs/audio （確認日期 2026-10-30）
[^gemini-video]: Google「Video understanding」（Gemini API）。"the model samples the video at a rate of 1 frame per second (FPS)" / "fast action sequences might lose detail due to the 1 FPS sampling rate." https://ai.google.dev/gemini-api/docs/video-understanding （確認日期 2026-10-30）
[^ddpm]: Ho 等，「Denoising Diffusion Probabilistic Models」，2020。逐步清除噪聲來創作圖片的擴散模型的代表論文。https://arxiv.org/abs/2006.11239 （確認日期 2026-10-21）

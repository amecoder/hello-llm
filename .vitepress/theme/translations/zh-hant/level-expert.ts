// zh-hant text for level-expert (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const LEVEL_EXPERT: Record<string, QuestionText> = {
  "expert-s1-scaled-dot-product": {
    prompt: "原論文給出的、在 scaled dot-product attention 中把 QK^T 除以 √d_k 的理由是什麼？",
    choices: [
      "因為 d_k 大時點積變大，會把 softmax 推到梯度極小的區域",
      "為了把點積值變成 0 到 1 之間的機率，不經 softmax 就當作權重使用",
      "為了即使頭數增加，也讓每個頭的輸出維度與 d_model 保持一致",
      "為了防止 GPU 矩陣乘法結果溢位，預先把計算精度降低一級",
    ],
    explain: "原論文認為 d_k 大時點積值會變大，把 softmax 推進梯度極小的區間（作者寫的是“推測”），為避免這一點而縮小為 1/√d_k。",
  },
  "expert-s1-multi-head": {
    prompt: "使用 multi-head attention 而不是 single-head，與原論文說明最接近的理由是什麼？",
    choices: [
      "讓每個頭只處理不同的 token，把計算量按頭數減少",
      "為了在不同位置同時參考不同表示子空間（subspace）的資訊",
      "為了即使一個頭失敗，其他頭也能代替輸出，從而留有冗餘",
      "把位置資訊按頭拆開儲存，從而取消 positional encoding",
    ],
    explain: "原論文說明，multi-head attention 讓模型能在不同位置同時參考不同表示子空間的資訊。",
  },
  "expert-s1-positional-encoding": {
    prompt: "必須給 Transformer 加上 positional encoding 的根本原因是什麼？",
    choices: [
      "為了用位置編號代替詞表裡沒有的詞",
      "為了確定把長句子切成固定長度片段的標準",
      "因為沒有迴圈和卷積結構，原樣無法知道 token 順序",
      "為了對 embedding 向量的大小做歸一化，讓訓練更穩定",
    ],
    explain: "原論文說，Transformer 既沒有 recurrence 也沒有 convolution，所以必須另外加入 token 的相對、絕對位置資訊。",
  },
  "expert-s1-causal-mask": {
    prompt: "在 decoder 的 self-attention 中遮蔽（masking）未來位置的目的是什麼？",
    choices: [
      "為了防止 padding token 獲得 attention 權重",
      "為了減弱遠處 token 的影響，提前防止長上下文中產生的過擬合",
      "為了讓 attention 矩陣變稀疏，節省記憶體",
      "為了保持只靠前面 token 預測下一個 token 的自迴歸性質",
    ],
    explain: "原論文說明，在 decoder 中要阻斷向左的資訊流（後面的 token 影響前面的 token），以保持 auto-regressive 性質。",
  },
  "expert-s1-parallelism": {
    prompt: "與 RNN 層相比，原論文所說的 self-attention 層的優點，哪項是對的？",
    choices: [
      "每層計算量與序列長度成線性，所以在長輸入上總是更便宜",
      "用常數次順序運算連線所有位置，因此容易並行化",
      "結構本身包含順序資訊，所以不需要位置編碼",
      "重複使用隱藏狀態，所以推理期間記憶體使用量恆定",
    ],
    explain: "self-attention 的順序運算為 O(1)，所以容易並行化，但每層計算量為 O(n²·d)，與序列長度的平方成正比。",
  },
  "expert-s1-flashattention": {
    prompt: "在長序列上 attention 慢，而且佔用很多記憶體。FlashAttention 採取的方法是什麼？",
    choices: [
      "對遠處 token 之間的 attention 做近似，把計算量降到線性",
      "減少 attention 頭數，使 key、value 張量變小",
      "把長輸入壓縮成摘要 token，再計算 attention",
      "用 tiling 減少 HBM 讀寫，計算精確 attention",
    ],
    explain: "FlashAttention 計算的是精確而非近似的 attention，是透過 tiling 減少 GPU 的 HBM 與片上 SRAM 之間讀寫的 IO-aware 演算法。",
  },
  "expert-s1-kv-cache": {
    prompt: "在自迴歸生成中，KV cache 儲存什麼、效果是什麼，哪項是對的？",
    choices: [
      "儲存 token 的 key、value，避免重算",
      "儲存前一步輸出的機率分佈，防止同一 token 重複",
      "儲存常見問題和答案的配對，對同樣的問題立即作答",
      "把一部分模型權重放進 GPU 快取，縮短載入時間",
    ],
    explain: "KV cache 按層儲存 attention 層裡已處理過的 token 的 key、value 對，並在計算下一個 token 時重複利用，從而省去重新計算。",
  },
  "expert-s1-kv-cache-memory": {
    prompt: "在使用 KV cache 的推理伺服器上，併發請求和上下文長度越增加，GPU 記憶體越不夠用。下面哪個原因是對的？",
    choices: [
      "KV cache 只在訓練期間變大，推理期間大小固定",
      "快取大小與上下文長度無關，只與詞表大小成正比",
      "新 token 追加 key、value，快取越來越大",
      "因為 KV cache 每一步都會把整個模型權重複制一份",
    ],
    explain: "KV cache 張量的形狀是 batch、頭、序列長度、頭維度，新 token 的 key、value 不斷追加，所以記憶體隨序列長度和批次成比例增加。",
  },
  "expert-s1-multi-query": {
    prompt: "multi-query attention 論文指出的 incremental decoding 主要瓶頸和解決辦法是什麼？",
    choices: [
      "計算量（FLOPs）不足——增加頭數以提高並行度",
      "詞表太大——把輸出 softmax 分層拆開計算",
      "記憶體頻寬——所有頭共享一套 key、value",
      "位置編碼計算——預先把正弦函式值做成表",
    ],
    explain: "解碼期間反覆讀取大的 key、value 張量所需的記憶體頻寬是瓶頸；所有頭共享 key、value，張量就變小，解碼也就變快。",
  },
  "expert-s1-grouped-query": {
    prompt: "關於 grouped-query attention（GQA），哪種說法是對的？",
    choices: [
      "key、value 頭多於 1、少於 query 頭，在質量和速度間折中",
      "把所有 query 頭合併成一個，只做一次 attention 計算的方式",
      "把 token 分成幾組，只在組內計算 attention",
      "把多個使用者的 query 打成一個批次來提高吞吐量的服務技術",
    ],
    explain: "GQA 介於 multi-head 與 multi-query 之間，使用比 query 頭少、但比一個多的 key、value 頭，得到接近 MHA 的質量和接近 MQA 的速度。",
  },
  "expert-s1-rope": {
    prompt: "RoPE（rotary position embedding）的特點，哪項是對的？",
    choices: [
      "把可學習的位置向量簡單地加到 token embedding 上的方式",
      "為每個位置單獨分配一個 attention 頭的方式",
      "只把位置資訊體現在輸出層 softmax 上的方式",
      "用旋轉矩陣編碼絕對位置，從而在 attention 中體現出相對位置",
    ],
    explain: "RoPE 用旋轉矩陣編碼絕對位置，同時讓相對位置依賴自然進入 self-attention 的計算。",
  },
  "expert-s1-mixture-of-experts": {
    prompt: "像 Switch Transformer 這樣的 MoE 模型，即使大幅增加引數，每個 token 的計算量也幾乎不變，是為什麼？",
    choices: [
      "因為把各專家的權重取平均，合併成一層來計算",
      "router 每個 token 只選部分專家",
      "因為推理時去掉專家層，只用共享層",
      "因為讓每個專家負責不同的句子，從而減少批次大小",
    ],
    explain: "MoE 對每個輸入只啟用不同引數的一部分，所以即使總引數很多，計算量也保持不變；Switch Transformer 每個 token 只路由到一個專家。",
  },
  "expert-s2-kaplan-power-law": {
    prompt: "Kaplan 等人（2020）scaling laws 論文的核心觀察，哪項是對的？",
    choices: [
      "損失服從關於規模、資料、計算量冪律",
      "損失對層的深度與寬度之比最為敏感",
      "模型一旦超過某個大小，損失就不再下降",
      "模型越小，每條資料的學習效率越高",
    ],
    explain: "損失在很寬的範圍內，關於模型大小、資料集大小、訓練計算量服從冪律，而寬度、深度這類結構細節的影響很小。",
  },
  "expert-s2-kaplan-compute-optimal": {
    prompt: "在固定的計算預算下，Kaplan 等人（2020）提出的 compute-optimal 訓練策略是什麼？",
    choices: [
      "用非常多的資料訓練小模型，直到收斂",
      "用相對較少的資料訓練非常大的模型，在收斂之前停下",
      "總是按相同比例同時擴大模型大小和訓練 token 數",
      "計算預算一半用於預訓練，另一半用於微調",
    ],
    explain: "Kaplan 等人認為大模型的樣本效率更高，所以用適量的資料訓練非常大的模型，並在遠未收斂時停下，計算效率最高。",
  },
  "expert-s2-chinchilla": {
    prompt: "Chinchilla 論文（Hoffmann 等人，2022）的結論，哪項是對的？",
    choices: [
      "當時的大模型比起資料，引數不足，效能因此受限",
      "計算預算增加時，資料不動，只把模型做大更好",
      "最優訓練要同比例擴大模型與 token 數量",
      "訓練 token 數對效能的影響很小，選擇模型結構更重要",
    ],
    explain: "Chinchilla 論文表明，當時的大模型相對於資料而言訓練不足（undertrained），模型大小翻倍時，訓練 token 也應翻倍。",
  },
  "expert-s2-chinchilla-inference": {
    prompt: "用同樣的訓練計算預算造模型，上線後的推理成本也很重要。根據 Chinchilla 的結果，哪個判斷是對的？",
    choices: [
      "引數越多推理也越快，所以在同樣預算內選最大的模型",
      "資料量與推理成本無關，所以只考慮模型大小",
      "推理成本與訓練方式無關，所以只比較質量就行",
      "用更多 token 訓練更小模型，推理更便宜",
    ],
    explain: "以與 Gopher（280B）相同的計算量、用約 4 倍資料訓練的 70B Chinchilla 效能更好，而且模型更小，微調和推理成本也更低。",
  },
  "expert-s2-bpe": {
    prompt: "使用 BPE 這類 subword 分詞的主要理由是什麼？",
    choices: [
      "為了把句子準確地按詞切開，方便語法分析",
      "為了用 subword 的組合來表示罕見詞、未登入詞",
      "為了把所有語言都對成一個字元一個 token，固定長度",
      "為了讓每個 token 只有一個意思，把同音異義詞分開",
    ],
    explain: "Sennrich 等人認為，固定詞表很難解決 open-vocabulary 問題，因此提出把罕見詞和未登入詞編碼成一串 subword 單元。",
  },
  "expert-s2-instructgpt-steps": {
    prompt: "InstructGPT 的對齊過程，哪個順序是對的？",
    choices: [
      "訓練獎勵模型 → 用示範資料做 SFT → 收集人工排名 → 強化學習",
      "收集人工排名 → 強化學習 → 用示範資料做 SFT",
      "強化學習 → 訓練獎勵模型 → 用示範資料做 SFT",
      "用示範資料做 SFT → 收集輸出排名 → 強化學習（RLHF）",
    ],
    explain: "InstructGPT 先用標註員的示範對 GPT-3 做監督微調，然後收集對模型輸出的排名，再使用用該排名訓練出的獎勵進行強化學習。",
  },
  "expert-s2-dpo": {
    prompt: "用偏好資料做對齊時，選擇 DPO 而不是基於 PPO 的 RLHF，哪個依據是對的？",
    choices: [
      "不用獎勵模型和 RL，直接用偏好對進行學習",
      "不需要人類偏好資料，只靠標準答案句子也能對齊",
      "訓練期間從模型中大量取樣回答來計算獎勵",
      "把獎勵模型做得更大，減輕 PPO 的不穩定性",
    ],
    explain: "DPO 透過重新引數化獎勵模型，直接求出最優策略，因此用簡單的分類損失就能學習，訓練期間不需要取樣，也更穩定。",
  },
  "expert-s2-lora": {
    prompt: "關於 LoRA 的特點，哪項是對的？",
    choices: [
      "更新所有權重，但把學習率保持得很低的方式",
      "因為是加 adapter 層的方式，所以每次推理必然增加延遲",
      "凍結預訓練權重，只訓練低秩矩陣，並且沒有推理延遲",
      "把模型權重轉換成 4 位元來減少訓練記憶體的技術",
    ],
    explain: "LoRA 凍結預訓練權重，在每一層加上可訓練的 rank decomposition 矩陣，與 adapter 不同，它不會增加推理延遲。",
  },
  "expert-s2-qlora": {
    prompt: "必須用一塊 GPU 微調大模型。QLoRA 的做法，哪項是對的？",
    choices: [
      "把全部權重轉成 4 位元後，重新訓練所有權重",
      "不拆到多塊 GPU，而是隻留一部分層，其餘層全部刪掉再訓練",
      "透過凍結的 4 位元量化模型，把梯度傳給 LoRA",
      "把訓練資料減少到四分之一，降低記憶體佔用",
    ],
    explain: "QLoRA 透過凍結的 4 位元量化模型向 LoRA adapter 做反向傳播，使得 65B 模型也能在一塊 48GB 的 GPU 上微調。",
  },
  "expert-s2-int8-outliers": {
    prompt: "LLM.int8() 在大模型的 8 位元推理中避免質量下降的方法是什麼？",
    choices: [
      "只把數值大的 outlier 維度用 16 位元計算，其餘用 8 位元計算",
      "把所有層都轉成 8 位元，然後只重新訓練最後一層",
      "用單獨的校正模型來預測 8 位元轉換產生的誤差",
      "保持 attention 層不變，只把 embedding 層轉成 8 位元",
    ],
    explain: "LLM.int8() 採用 mixed-precision 分解，把大模型中出現的 outlier 特徵維度單獨用 16 位元計算，其餘 99.9% 以上的值用 8 位元處理，效能也沒有下降。",
  },
  "expert-s2-distillation": {
    prompt: "在 Hinton 等人（2015）的 knowledge distillation 中，提高 softmax temperature 的目的是什麼？",
    choices: [
      "讓標準答案標籤更清晰，加快學生的學習速度",
      "減少教師模型的輸出 token 數，降低推理成本",
      "讓學生模型部署後，也用高 temperature 持續給出多樣的回答",
      "讓教師的機率分佈變得平滑，用 soft target 訓練學生",
    ],
    explain: "提高教師模型的 softmax temperature 得到平滑的 soft target，學生也用同樣的 temperature 去擬合它；學習結束後的學生，使用 temperature 1。",
  },
  "expert-s2-fine-tune-evals": {
    prompt: "要決定為遵循指示的微調收集多少資料。LIMA（Zhou 等人，2023）的研究表明了什麼？",
    choices: [
      "資料不超過幾萬條，監督微調幾乎沒有效果",
      "僅精選 1,000 個示例做監督微調，質量就很高",
      "要讓模型遵循指示，必須有 RLHF 或人類偏好建模",
      "模型的知識大部分是在微調階段新學到的",
    ],
    explain: "LIMA 只用精心挑選的 1,000 條提示和回答，對 65B LLaMA 做監督微調，沒有用強化學習或偏好建模，質量依然很高；作者得出結論：知識幾乎都來自預訓練，指令微調資料可以很少。",
  },
  "expert-s3-rag-memory": {
    prompt: "RAG（Lewis 等人，2020）結合了哪兩種記憶（memory）？",
    choices: [
      "權重裡的 parametric 記憶，和檢索用向量索引",
      "短期對話記憶，和每位使用者的長期檔案記憶",
      "預訓練資料記憶，和微調資料記憶",
      "token embedding 裡的記憶，和位置編碼裡的記憶",
    ],
    explain: "RAG 把預訓練 seq2seq 模型的權重（parametric memory），與用神經檢索器查詢的 Wikipedia dense 向量索引（non-parametric memory）結合起來。",
  },
  "expert-s3-rag-vs-finetune": {
    prompt: "公司內部規定經常變化，而且每個回答都要展示依據文件。為什麼 RAG 比微調更合適？",
    choices: [
      "接上檢索後，模型權重會按新規定自動更新",
      "只換索引文件就能更新知識，並能展示檢索到的文件作依據",
      "用了 RAG 幻覺從根本上消失，所以完全不用另外驗證回答",
      "沒有檢索這一步，所以響應延遲比微調模型更短",
    ],
    explain: "RAG 論文指出，更新知識和給出出處（provenance）是僅依賴權重的模型尚未解決的難題，外部 non-parametric 記憶可以起到幫助。",
  },
  "expert-s3-contextual-chunk": {
    prompt: "像“銷售額增長了 3%”這樣的 chunk 不包含是哪家公司、哪個季度的資訊，檢索因此跑偏。Anthropic Contextual Retrieval 的解決辦法是什麼？",
    choices: [
      "把 chunk 大小擴大到整篇文件，用一個向量表示一篇文件來建立索引，再用於檢索時與問題比對",
      "增加 embedding 維度，更精確地容納數字資訊",
      "給每個 chunk 加一段語境說明，再建立 embedding 和 BM25 索引",
      "把含數字的 chunk 從索引中去掉，提前避免混淆",
    ],
    explain: "Contextual Retrieval 在每個 chunk 前面加一段說明該 chunk 在原文件中是什麼語境的短文，然後做 embedding 並建立 BM25 索引。",
  },
  "expert-s3-hybrid-search": {
    prompt: "使用者用“TS-999”這樣的錯誤程式碼檢索時，向量檢索返回了驢唇不對馬嘴的文件。最合適的措施是什麼？",
    choices: [
      "只把 embedding 模型換成更大的，向量檢索保持不變",
      "告訴使用者把錯誤程式碼換成自然語言描述再檢索",
      "把 top-k 調大很多，指望相關文件碰巧被包含進來",
      "BM25 關鍵詞檢索加 hybrid 檢索，抓住精確匹配",
    ],
    explain: "embedding 可能漏掉像錯誤程式碼這樣的精確識別符號，而 BM25 能抓住字串匹配，所以同時使用，可以減少技術類查詢的檢索失敗。",
  },
  "expert-s3-rrf": {
    prompt: "用 RRF（reciprocal rank fusion）合併關鍵詞檢索和向量檢索的結果。哪個說明是對的？",
    choices: [
      "要把兩個檢索器的分數歸一到同一尺度後再相加",
      "只用排名來累加 1/(k+排名)，不需要歸一化",
      "只保留兩個列表裡都出現的文件，其餘丟棄",
      "優先使用向量分數，只有分數相同時才參考關鍵詞檢索",
    ],
    explain: "RRF 只使用各結果列表中的排名來累加 1/(k+rank)，因此不需要對齊不同檢索器的分數；Elasticsearch 中 k 的預設值是 60。",
  },
  "expert-s3-cross-encoder": {
    prompt: "把 cross-encoder 用於 re-ranking 的理由和用法，哪項是對的？",
    choices: [
      "文件 embedding 預先算好，所以對整個語料庫檢索最快",
      "不看問題，只看文件給質量打分，過濾掉低質量文件",
      "準確率比 bi-encoder 低，但成本便宜，所以用於第一輪檢索",
      "把問題和文件成對放入，更準確但更慢，所以只對第一輪候選重新排序",
    ],
    explain: "cross-encoder 把兩個句子一起放入並給出分數，所以比 bi-encoder 更準確，但不適合大規模，因此先用 bi-encoder 找候選，再用它重新排序。",
  },
  "expert-s3-rerank-tradeoff": {
    prompt: "打算大幅增加 reranker 要重新排序的第一輪候選數量。預期的 trade-off 是什麼？",
    choices: [
      "準確率可能提高，但延遲和成本也會一起增加",
      "準確率和延遲都變好",
      "延遲不變，只有準確率下降",
      "候選數量對 reranker 的最終結果沒有任何影響",
    ],
    explain: "Anthropic 的文章說，reranking 會增加延遲，重新排序的 chunk 越多越有利於準確率，越少越有利於速度和成本，這是本質上的 trade-off。",
  },
  "expert-s3-small-knowledge-base": {
    prompt: "知識庫大約有 300 頁（不到 20 萬 token）。Anthropic Contextual Retrieval 文章推薦的做法是什麼？",
    choices: [
      "chunk 越小越好，所以建一個按句子切分的 RAG",
      "不管規模多大，都必須配備向量資料庫和 reranker，再加上覆雜的檢索流程",
      "不用 RAG，整體放進提示詞，用 prompt caching",
      "用全部文件微調模型，把提示詞留空",
    ],
    explain: "文章說明，不到 20 萬 token（約 500 頁）時，可以不用 RAG，把整個知識庫放進提示詞，並用 prompt caching 讓它更快更便宜。",
  },
  "expert-s3-lost-in-the-middle": {
    prompt: "在很長的上下文裡連線了多條檢索結果。根據 “Lost in the Middle” 研究，要注意什麼？",
    choices: [
      "模型不管上下文長度，總能均勻利用各個位置的資訊來作答",
      "相關資訊在最末尾時，效能最差",
      "相關資訊在上下文中間時，效能比在開頭、結尾時下降",
      "檢索結果要按隨機順序放入，效能才最好",
    ],
    explain: "相關資訊在輸入的開頭或結尾時效能最高，在中間時大幅下降，即使是長上下文模型，也沒能均勻地利用整個輸入。",
  },
  "expert-s3-beir-zero-shot": {
    prompt: "要把檢索器直接用於沒學過的新領域（公司內部文件）。BEIR 基準說明了什麼？",
    choices: [
      "BM25 是穩健的基線，dense 檢索器在領域之外可能較弱",
      "dense 檢索器在任何領域都總是優於 BM25",
      "re-ranking 幾乎沒有計算成本，所以任何情況下都最好一直開著",
      "評估檢索器只用學過的領域的資料就足夠了",
    ],
    explain: "在 BEIR 的 zero-shot 評估中，BM25 是穩健的基線，re-ranking 效能最好但計算成本很大，dense 檢索器在泛化上顯示出弱點。",
  },
  "expert-s3-embedding-normalize": {
    prompt: "沒用 dimensions 引數，而是把 OpenAI embedding 直接截斷來降低維度。接下來該做什麼？",
    choices: [
      "截斷的向量不能用 cosine 相似度，所以改用歐氏距離",
      "不做任何處理，直接用 dot product 比較，結果也一樣",
      "按被截掉的維度數補零，恢復到原來長度再比較",
      "把向量重新歸一化到長度 1，然後再計算相似度",
    ],
    explain: "OpenAI embedding 已經歸一化到長度 1，所以 dot product 就等於 cosine 相似度；而直接截斷之後，就必須重新歸一化。",
  },
  "expert-s3-ragas-faithfulness": {
    prompt: "想抓出 RAG 回答編造了檢索到的上下文裡沒有的內容的情況。這對應 RAGAS 評估維度中的哪一個？",
    choices: [
      "檢索質量（context relevance）",
      "忠實度（faithfulness）",
      "檢索速度（latency）",
      "詞彙多樣性（diversity）",
    ],
    explain: "RAGAS 把評估分為檢索質量、忠實度（是否忠實使用了檢索到的上下文）和生成質量；編造上下文中沒有的內容，屬於忠實度問題。",
  },
  "expert-s4-prompt-caching": {
    prompt: "響應延遲很大，而且每次請求都要傳送同樣的長系統提示詞和工具定義。最有效的措施是什麼？",
    choices: [
      "對固定的前面部分應用 prompt caching",
      "每次都把系統提示詞挪到使用者訊息後面再發送",
      "把 temperature 降到 0 來加快生成速度",
      "加大 max_tokens，免得回答被截斷",
    ],
    explain: "prompt caching 快取並重用像系統指示、工具定義這類穩定重複的內容，建議把要快取的內容放在提示詞前面。",
  },
  "expert-s4-cache-prefix": {
    prompt: "在系統提示詞最前面放了請求時間（timestamp），結果快取幾乎不命中。原因和解決辦法，哪項是對的？",
    choices: [
      "快取只比較最後一條訊息——把快取壽命（TTL）延長",
      "快取只用相同的字首——把會變的值挪到固定部分後",
      "讓時間戳超過最小長度——把提示詞縮短",
      "快取只適用於工具定義——把指示挪進工具說明",
    ],
    explain: "快取要求 tools → system → messages 順序的字首 100% 相同才能命中，所以像時間戳這種每次都變的值，必須放在固定字首之後。",
  },
  "expert-s4-cache-minimum": {
    prompt: "加了 cache_control，但 usage 裡的 cache_creation_input_tokens 和 cache_read_input_tokens 都是 0。首先該懷疑什麼？",
    choices: [
      "API 隱藏了快取錯誤，所以要增加重試次數",
      "快取只在開啟流式響應時才起作用",
      "提示詞比最小快取長度短，所以沒被快取",
      "快取要過一段時間後才會計入 usage",
    ],
    explain: "比各模型最小長度短的提示詞，即使加了 cache_control 也不會報錯，只是不會被快取；兩個 usage 值都是 0，就說明沒有被快取。",
  },
  "expert-s4-output-tokens": {
    prompt: "需要縮短響應延遲。按照 OpenAI 的延遲指南，通常佔延遲最大份額的步驟是哪個？",
    choices: [
      "讀取和處理輸入 token 的步驟",
      "到 API 伺服器的網路往返",
      "請求認證和 rate limit 檢查",
      "逐個生成輸出 token 的步驟",
    ],
    explain: "指南說明，生成 token 幾乎總是延遲最大的步驟，所以把輸出 token 減半，延遲也大約能減半。",
  },
  "expert-s4-streaming-ttft": {
    prompt: "即使整體響應時間不變，也想讓使用者感覺反應更快。合適的措施和要一起看的指標是什麼？",
    choices: [
      "把 max_tokens 大幅調小——整個響應用掉的 token 總數",
      "開啟流式傳輸——time to first token（TTFT）",
      "提高 temperature——輸出的多樣性",
      "增大批次大小——每秒吞吐量",
    ],
    explain: "流式傳輸在整個輸出結束之前就開始傳送響應，提升體感的反應速度，此時直到第一個 token 出現的時間（TTFT）是關鍵指標。",
  },
  "expert-s4-max-tokens": {
    prompt: "只需要簡短的回答，所以把 max_tokens 設得很低。Anthropic 文件指出這個方法的侷限是什麼？",
    choices: [
      "模型預先知道限額，會壓縮內容，所以質量反而更高",
      "max_tokens 是輸入長度的限額，所以對輸出長度沒有任何影響",
      "超過限額，API 會返回錯誤，所以每次都要重新請求",
      "到了限額，連句子中間也會被截斷，適合答案出現在最前面的簡短格式",
    ],
    explain: "文件指出，達到 max_tokens 時，響應連句子或單詞中間也會被截斷，所以這是一種比較生硬的方法，主要適合答案出現在最前面的選擇題、簡答題。",
  },
  "expert-s4-batch-api": {
    prompt: "需要在一夜之間分類幾十萬份文件，而且不需要立即響應。合適的方式是什麼？",
    choices: [
      "用非同步 Batch API 批次打包後傳送",
      "用同步 API 儘可能多地同時傳送請求",
      "用流式傳輸接收，縮短第一個 token 出來的時間",
      "每個請求換一個模型，來避開 rate limit",
    ],
    explain: "文件說明，Batch API 用於不需要立即響應的任務，比如執行評估、大批次資料分類，以非同步請求打包的方式處理（完成時限、折扣率等具體條件可能會變，請在文件中確認）。",
  },
  "expert-s4-structured-outputs": {
    prompt: "要解析響應後存入資料庫，但有時會缺少必填欄位。JSON mode 和 Structured Outputs 的區別，哪項是對的？",
    choices: [
      "兩者都保證符合 schema，所以用哪個結果都一樣",
      "JSON mode 保證符合 schema，Structured Outputs 只保證 JSON 格式",
      "兩者都能輸出有效的 JSON，但只有 Structured Outputs 保證符合 schema",
      "兩者都不保證 JSON 有效，所以必須用正則表示式檢查",
    ],
    explain: "OpenAI 的文件說明，兩種方式都能生成有效的 JSON，但連符合 schema 也保證的，只有 Structured Outputs。",
  },
  "expert-s4-refusal-handling": {
    prompt: "在用 Structured Outputs 時，如果出現出於安全原因的拒絕響應，解析會失敗。合適的處理是什麼？",
    choices: [
      "拒絕響應也總是遵循 schema，所以不需要另外處理",
      "調高 temperature，反覆重試，直到不再出現拒絕",
      "在解析之前先檢查 refusal 欄位，單獨處理拒絕",
      "去掉 schema 的必填欄位，讓拒絕也原樣透過",
    ],
    explain: "拒絕響應可能不符合 schema，所以文件指引：先檢查響應的 refusal 欄位，再做介面顯示或分支處理。",
  },
  "expert-s4-eval-design": {
    prompt: "設計評估集。Anthropic 文件推薦的原則，哪項是對的？",
    choices: [
      "反映真實分佈和 edge case，多用自動評分",
      "人精心評分的少量題目，總是比自動評分的大量題目更好",
      "評估題目選模型擅長的代表性案例為主，來提高可信度",
      "評估只在釋出前跑一次就夠了",
    ],
    explain: "文件建議：反映真實任務分佈和 edge case，把題目設計成可以自動評分，即使訊號稍弱，也最好設定很多自動評分的題目。",
  },
  "expert-s4-judge-position-bias": {
    prompt: "用 LLM-as-a-judge 比較 A、B 兩個回答，先給出的回答經常獲勝。合適的應對是什麼？",
    choices: [
      "指示它選更長的回答，使判定保持一致",
      "只用與生成被評回答的相同模型來評分",
      "擴大分數範圍，不經人工審查也讓差異顯現出來",
      "位置偏差：調換順序判兩次，兩次都贏才算贏",
    ],
    explain: "LLM judge 有位置、冗長、自我偏好的偏差，論文建議把回答順序調換，判定兩次，只有在兩種順序下都獲勝才算贏。",
  },
  "expert-s4-grading-method": {
    prompt: "要評分回答是否與規定的分類標籤之一一致。按 Anthropic 文件的標準，應先選哪種方式？",
    choices: [
      "人工評分——最靈活，質量最高",
      "基於程式碼的評分——最快、最可靠、可擴充套件性最高",
      "LLM 評分——適合複雜判斷，所以不管什麼任務都總是最先用",
      "跳過評分——分類問題模型不會出錯",
    ],
    explain: "文件建議選最快、最可靠、可擴充套件的方式，對答案固定的類別型回答，像 exact match 這樣基於程式碼的評分比較合適。",
  },
  "expert-s5-indirect-injection": {
    prompt: "正在總結網頁的智慧體，遵從了頁面裡隱藏的“忽略之前的指示”這句話。這種攻擊屬於什麼型別？",
    choices: [
      "間接提示詞注入——外部資料裡的指示進入模型",
      "直接提示詞注入——使用者親自在輸入框裡寫攻擊語句",
      "資料投毒——在訓練資料裡植入後門",
      "模型提取——收集大量輸出來複製模型",
    ],
    explain: "OWASP 把 LLM 接收網站、檔案這類外部來源的輸入時發生的注入，定義為間接提示詞注入。",
  },
  "expert-s5-rag-not-mitigation": {
    prompt: "對於“已經引入了 RAG 和微調，提示詞注入就解決了”的說法，OWASP 的立場是什麼？",
    choices: [
      "把攻擊語句作為微調資料去學習，注入就會消失",
      "據研究，RAG、微調並不能完全防住注入攻擊",
      "RAG 使用外部文件，反而消除了注入風險",
      "只要在系統提示詞裡寫上禁止語句，注入就解決了",
    ],
    explain: "OWASP LLM01 指出，RAG 和微調的目的是提高輸出的相關性和準確性，但據研究，它們並不能完全緩解提示詞注入漏洞。",
  },
  "expert-s5-least-privilege": {
    prompt: "要做一個能讀郵件、回信甚至轉賬的智慧體。哪種設計即使注入成功也能減輕損失？",
    choices: [
      "把所有工具都給它，但用系統提示詞禁止危險行動",
      "用一個管理員賬號處理所有工作，減少許可權錯誤",
      "只給最小必需的許可權，高風險的行動要由人批准",
      "交給模型自己判斷風險程度，決定是否執行",
    ],
    explain: "OWASP 建議，把模型的訪問許可權限制在所需的最低限度，對許可權大的操作設定人工批准（human-in-the-loop）。",
  },
  "expert-s5-system-prompt-leakage": {
    prompt: "在系統提示詞裡放了資料庫連線字串和“只有管理員才能退款”的規則。從 OWASP LLM07 的角度看，評價是什麼？",
    choices: [
      "系統提示詞使用者看不到，所以是安全的",
      "把規則寫得語氣更強，就是足夠的安全控制",
      "連線字串模型自己不會洩露，所以放著不管也可以",
      "提示詞不是秘密，別放機密，許可權檢查在模型外",
    ],
    explain: "OWASP 說，不要把系統提示詞當成秘密或安全控制，不要放入憑據，許可權檢查要在模型之外的確定性系統中進行。",
  },
  "expert-s5-improper-output": {
    prompt: "有一個功能，把模型生成的 SQL 原樣在資料庫裡執行。OWASP LLM05 建議的處理是什麼？",
    choices: [
      "模型輸出是可信的，所以只留執行日誌",
      "驗證輸出，並用 parameterized query 來執行",
      "在系統提示詞裡寫上不要生成惡意 SQL",
      "把 temperature 設為 0，總是隻出同樣的 SQL，風險就消失了",
    ],
    explain: "OWASP LLM05 建議用 zero-trust，把模型當作另一個使用者來對待，驗證輸出，並且對輸入了模型輸出的資料庫操作使用 parameterized query。",
  },
  "expert-s5-unbounded-consumption": {
    prompt: "擔心有人對公開聊天機器人大量傳送極長的輸入，讓成本暴增的攻擊（denial of wallet）。合適的應對是什麼？",
    choices: [
      "換成更大的模型，讓長輸入也能處理得快",
      "儘可能多地公開 logprobs 等細節輸出，提高服務透明度",
      "增加失敗請求的自動重試，保證可用性",
      "設定 rate limit、使用者配額、輸入大小限制和超時",
    ],
    explain: "OWASP LLM10 建議設定 rate limit 和使用者配額、輸入大小驗證、超時和 throttling，並減少 logit_bias、logprobs 的暴露。",
  },
  "expert-s5-vector-tenant-isolation": {
    prompt: "這是一個把多家客戶公司的文件放在同一個向量資料庫裡的 RAG 服務。防止出現檢索到其他客戶公司文件這種事故的關鍵控制是什麼？",
    choices: [
      "具備許可權感知的向量儲存，並按客戶公司分割槽隔離資料",
      "增加 embedding 維度，讓各客戶公司的文件更不容易混在一起",
      "在系統提示詞裡用強硬語氣寫明絕對不要提其他客戶公司的文件",
      "加上 reranker，把不相關的文件排到下面",
    ],
    explain: "OWASP LLM08 為防止多租戶環境下的資料洩露，建議使用具備細粒度訪問控制的 permission-aware 向量儲存，以及資料集的邏輯隔離。",
  },
  "expert-s5-data-poisoning": {
    prompt: "用從外部獲得的資料做了微調，結果只在出現特定短語時才行為異常。對應的風險和應對是什麼？",
    choices: [
      "幻覺——降低 temperature",
      "系統提示詞洩露——把系統提示詞加密儲存",
      "資料投毒（後門）——追蹤驗證資料來源",
      "過度自主——減少所連線的工具數量",
    ],
    explain: "篡改訓練資料，可能產生只在特定觸發條件下才改變行為的後門；OWASP LLM04 建議用 ML-BOM 等方式追蹤並驗證資料來源。",
  },
  "expert-s5-adversarial-suffix": {
    prompt: "Zou 等人（2023）的自動生成 adversarial suffix 研究表明了什麼？",
    choices: [
      "經過對齊的模型對自動攻擊免疫，只有手動 jailbreak 才危險",
      "攻擊 suffix 只對生成它的模型有效，不會轉移到其他模型",
      "用公開模型優化出的 suffix，也遷移到了黑盒商用模型上",
      "加上很長的 suffix，模型就總是轉向拒絕",
    ],
    explain: "在公開模型（Vicuna）上用 greedy、gradient 搜尋找到的 suffix，也遷移到了 ChatGPT、Bard、Claude 這類黑盒公開介面上。",
  },
  "expert-s5-red-teaming-scale": {
    prompt: "Ganguli 等人（2022）的語言模型紅隊研究，下面哪個結果是對的？",
    choices: [
      "RLHF 模型規模越大，紅隊攻擊越困難",
      "所有型別的模型，不論規模，對攻擊的脆弱程度都差不多",
      "普通 LM 規模越大，變得最安全",
      "因為攻擊資料很危險，所以沒有公開",
    ],
    explain: "在四種模型型別中，只有 RLHF 模型隨著規模變大越來越難被紅隊攻破，其他型別幾乎沒有隨規模變化，並且公開了 38,961 條攻擊資料。",
  },
  "expert-s5-constitutional-ai": {
    prompt: "Constitutional AI（Bai 等人，2022）的訓練方式，哪項是對的？",
    choices: [
      "由人給有害輸出逐一打標籤，做出獎勵模型",
      "附加一個規則過濾器，遇到有害請求就一律簡短地拒絕，並且不作任何解釋",
      "只靠從預訓練資料中刪除有害文件來實現對齊",
      "用原則清單做自我批評、修改的 SFT，再用 AI 偏好做 RL",
    ],
    explain: "人提供的輸入只有原則清單；先用自我批評、修改後的回答做監督學習，再用以 AI 打出的偏好做成的偏好模型作獎勵，進行強化學習（RLAIF）。",
  },
  "expert-s5-eu-ai-act-limited-risk": {
    prompt: "在 EU AI Act 基於風險的分類中，像客戶諮詢聊天機器人這類有限風險（limited risk）系統，主要被要求什麼？",
    choices: [
      "上市前須獲得政府預先批准，並在公共資料庫預先登記",
      "讓使用者知道自己正在與 AI 對話的透明度義務",
      "全面禁止上市",
      "沒有任何義務，不受監管",
    ],
    explain: "EU AI Act 對不可接受的風險予以禁止，對高風險實行強監管，對有限風險規定透明度義務（讓聊天機器人、深度偽造的使用者知道對方是 AI），對最小風險則不監管。",
  },
}

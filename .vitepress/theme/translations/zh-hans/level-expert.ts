// zh-hans text for level-expert (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const LEVEL_EXPERT: Record<string, QuestionText> = {
  "expert-s1-scaled-dot-product": {
    prompt: "原论文给出的、在 scaled dot-product attention 中把 QK^T 除以 √d_k 的理由是什么？",
    choices: [
      "因为 d_k 大时点积变大，会把 softmax 推到梯度极小的区域",
      "为了把点积值变成 0 到 1 之间的概率，不经 softmax 就当作权重使用",
      "为了即使头数增加，也让每个头的输出维度与 d_model 保持一致",
      "为了防止 GPU 矩阵乘法结果溢出，预先把计算精度降低一级",
    ],
    explain: "原论文认为 d_k 大时点积值会变大，把 softmax 推进梯度极小的区间（作者写的是“推测”），为避免这一点而缩小为 1/√d_k。",
  },
  "expert-s1-multi-head": {
    prompt: "使用 multi-head attention 而不是 single-head，与原论文说明最接近的理由是什么？",
    choices: [
      "让每个头只处理不同的 token，把计算量按头数减少",
      "为了在不同位置同时参考不同表示子空间（subspace）的信息",
      "为了即使一个头失败，其他头也能代替输出，从而留有冗余",
      "把位置信息按头拆开存储，从而取消 positional encoding",
    ],
    explain: "原论文说明，multi-head attention 让模型能在不同位置同时参考不同表示子空间的信息。",
  },
  "expert-s1-positional-encoding": {
    prompt: "必须给 Transformer 加上 positional encoding 的根本原因是什么？",
    choices: [
      "为了用位置编号代替词表里没有的词",
      "为了确定把长句子切成固定长度片段的标准",
      "因为没有循环和卷积结构，原样无法知道 token 顺序",
      "为了对 embedding 向量的大小做归一化，让训练更稳定",
    ],
    explain: "原论文说，Transformer 既没有 recurrence 也没有 convolution，所以必须另外加入 token 的相对、绝对位置信息。",
  },
  "expert-s1-causal-mask": {
    prompt: "在 decoder 的 self-attention 中遮蔽（masking）未来位置的目的是什么？",
    choices: [
      "为了防止 padding token 获得 attention 权重",
      "为了减弱远处 token 的影响，提前防止长上下文中产生的过拟合",
      "为了让 attention 矩阵变稀疏，节省内存",
      "为了保持只靠前面 token 预测下一个 token 的自回归性质",
    ],
    explain: "原论文说明，在 decoder 中要阻断向左的信息流（后面的 token 影响前面的 token），以保持 auto-regressive 性质。",
  },
  "expert-s1-parallelism": {
    prompt: "与 RNN 层相比，原论文所说的 self-attention 层的优点，哪项是对的？",
    choices: [
      "每层计算量与序列长度成线性，所以在长输入上总是更便宜",
      "用常数次顺序运算连接所有位置，因此容易并行化",
      "结构本身包含顺序信息，所以不需要位置编码",
      "重复使用隐藏状态，所以推理期间内存使用量恒定",
    ],
    explain: "self-attention 的顺序运算为 O(1)，所以容易并行化，但每层计算量为 O(n²·d)，与序列长度的平方成正比。",
  },
  "expert-s1-flashattention": {
    prompt: "在长序列上 attention 慢，而且占用很多内存。FlashAttention 采取的方法是什么？",
    choices: [
      "对远处 token 之间的 attention 做近似，把计算量降到线性",
      "减少 attention 头数，使 key、value 张量变小",
      "把长输入压缩成摘要 token，再计算 attention",
      "用 tiling 减少 HBM 读写，计算精确 attention",
    ],
    explain: "FlashAttention 计算的是精确而非近似的 attention，是通过 tiling 减少 GPU 的 HBM 与片上 SRAM 之间读写的 IO-aware 算法。",
  },
  "expert-s1-kv-cache": {
    prompt: "在自回归生成中，KV cache 存储什么、效果是什么，哪项是对的？",
    choices: [
      "存储 token 的 key、value，避免重算",
      "存储前一步输出的概率分布，防止同一 token 重复",
      "存储常见问题和答案的配对，对同样的问题立即作答",
      "把一部分模型权重放进 GPU 缓存，缩短加载时间",
    ],
    explain: "KV cache 按层存储 attention 层里已处理过的 token 的 key、value 对，并在计算下一个 token 时重复利用，从而省去重新计算。",
  },
  "expert-s1-kv-cache-memory": {
    prompt: "在使用 KV cache 的推理服务器上，并发请求和上下文长度越增加，GPU 内存越不够用。下面哪个原因是对的？",
    choices: [
      "KV cache 只在训练期间变大，推理期间大小固定",
      "缓存大小与上下文长度无关，只与词表大小成正比",
      "新 token 追加 key、value，缓存越来越大",
      "因为 KV cache 每一步都会把整个模型权重复制一份",
    ],
    explain: "KV cache 张量的形状是 batch、头、序列长度、头维度，新 token 的 key、value 不断追加，所以内存随序列长度和批量成比例增加。",
  },
  "expert-s1-multi-query": {
    prompt: "multi-query attention 论文指出的 incremental decoding 主要瓶颈和解决办法是什么？",
    choices: [
      "计算量（FLOPs）不足——增加头数以提高并行度",
      "词表太大——把输出 softmax 分层拆开计算",
      "内存带宽——所有头共享一套 key、value",
      "位置编码计算——预先把正弦函数值做成表",
    ],
    explain: "解码期间反复读取大的 key、value 张量所需的内存带宽是瓶颈；所有头共享 key、value，张量就变小，解码也就变快。",
  },
  "expert-s1-grouped-query": {
    prompt: "关于 grouped-query attention（GQA），哪种说法是对的？",
    choices: [
      "key、value 头多于 1、少于 query 头，在质量和速度间折中",
      "把所有 query 头合并成一个，只做一次 attention 计算的方式",
      "把 token 分成几组，只在组内计算 attention",
      "把多个用户的 query 打成一个批次来提高吞吐量的服务技术",
    ],
    explain: "GQA 介于 multi-head 与 multi-query 之间，使用比 query 头少、但比一个多的 key、value 头，得到接近 MHA 的质量和接近 MQA 的速度。",
  },
  "expert-s1-rope": {
    prompt: "RoPE（rotary position embedding）的特点，哪项是对的？",
    choices: [
      "把可学习的位置向量简单地加到 token embedding 上的方式",
      "为每个位置单独分配一个 attention 头的方式",
      "只把位置信息体现在输出层 softmax 上的方式",
      "用旋转矩阵编码绝对位置，从而在 attention 中体现出相对位置",
    ],
    explain: "RoPE 用旋转矩阵编码绝对位置，同时让相对位置依赖自然进入 self-attention 的计算。",
  },
  "expert-s1-mixture-of-experts": {
    prompt: "像 Switch Transformer 这样的 MoE 模型，即使大幅增加参数，每个 token 的计算量也几乎不变，是为什么？",
    choices: [
      "因为把各专家的权重取平均，合并成一层来计算",
      "router 每个 token 只选部分专家",
      "因为推理时去掉专家层，只用共享层",
      "因为让每个专家负责不同的句子，从而减少批量大小",
    ],
    explain: "MoE 对每个输入只激活不同参数的一部分，所以即使总参数很多，计算量也保持不变；Switch Transformer 每个 token 只路由到一个专家。",
  },
  "expert-s2-kaplan-power-law": {
    prompt: "Kaplan 等人（2020）scaling laws 论文的核心观察，哪项是对的？",
    choices: [
      "损失服从关于规模、数据、计算量幂律",
      "损失对层的深度与宽度之比最为敏感",
      "模型一旦超过某个大小，损失就不再下降",
      "模型越小，每条数据的学习效率越高",
    ],
    explain: "损失在很宽的范围内，关于模型大小、数据集大小、训练计算量服从幂律，而宽度、深度这类结构细节的影响很小。",
  },
  "expert-s2-kaplan-compute-optimal": {
    prompt: "在固定的计算预算下，Kaplan 等人（2020）提出的 compute-optimal 训练策略是什么？",
    choices: [
      "用非常多的数据训练小模型，直到收敛",
      "用相对较少的数据训练非常大的模型，在收敛之前停下",
      "总是按相同比例同时扩大模型大小和训练 token 数",
      "计算预算一半用于预训练，另一半用于微调",
    ],
    explain: "Kaplan 等人认为大模型的样本效率更高，所以用适量的数据训练非常大的模型，并在远未收敛时停下，计算效率最高。",
  },
  "expert-s2-chinchilla": {
    prompt: "Chinchilla 论文（Hoffmann 等人，2022）的结论，哪项是对的？",
    choices: [
      "当时的大模型比起数据，参数不足，性能因此受限",
      "计算预算增加时，数据不动，只把模型做大更好",
      "最优训练要同比例扩大模型与 token 数量",
      "训练 token 数对性能的影响很小，选择模型结构更重要",
    ],
    explain: "Chinchilla 论文表明，当时的大模型相对于数据而言训练不足（undertrained），模型大小翻倍时，训练 token 也应翻倍。",
  },
  "expert-s2-chinchilla-inference": {
    prompt: "用同样的训练计算预算造模型，上线后的推理成本也很重要。根据 Chinchilla 的结果，哪个判断是对的？",
    choices: [
      "参数越多推理也越快，所以在同样预算内选最大的模型",
      "数据量与推理成本无关，所以只考虑模型大小",
      "推理成本与训练方式无关，所以只比较质量就行",
      "用更多 token 训练更小模型，推理更便宜",
    ],
    explain: "以与 Gopher（280B）相同的计算量、用约 4 倍数据训练的 70B Chinchilla 性能更好，而且模型更小，微调和推理成本也更低。",
  },
  "expert-s2-bpe": {
    prompt: "使用 BPE 这类 subword 分词的主要理由是什么？",
    choices: [
      "为了把句子准确地按词切开，方便语法分析",
      "为了用 subword 的组合来表示罕见词、未登录词",
      "为了把所有语言都对成一个字符一个 token，固定长度",
      "为了让每个 token 只有一个意思，把同音异义词分开",
    ],
    explain: "Sennrich 等人认为，固定词表很难解决 open-vocabulary 问题，因此提出把罕见词和未登录词编码成一串 subword 单元。",
  },
  "expert-s2-instructgpt-steps": {
    prompt: "InstructGPT 的对齐过程，哪个顺序是对的？",
    choices: [
      "训练奖励模型 → 用示范数据做 SFT → 收集人工排名 → 强化学习",
      "收集人工排名 → 强化学习 → 用示范数据做 SFT",
      "强化学习 → 训练奖励模型 → 用示范数据做 SFT",
      "用示范数据做 SFT → 收集输出排名 → 强化学习（RLHF）",
    ],
    explain: "InstructGPT 先用标注员的示范对 GPT-3 做监督微调，然后收集对模型输出的排名，再使用用该排名训练出的奖励进行强化学习。",
  },
  "expert-s2-dpo": {
    prompt: "用偏好数据做对齐时，选择 DPO 而不是基于 PPO 的 RLHF，哪个依据是对的？",
    choices: [
      "不用奖励模型和 RL，直接用偏好对进行学习",
      "不需要人类偏好数据，只靠标准答案句子也能对齐",
      "训练期间从模型中大量采样回答来计算奖励",
      "把奖励模型做得更大，减轻 PPO 的不稳定性",
    ],
    explain: "DPO 通过重新参数化奖励模型，直接求出最优策略，因此用简单的分类损失就能学习，训练期间不需要采样，也更稳定。",
  },
  "expert-s2-lora": {
    prompt: "关于 LoRA 的特点，哪项是对的？",
    choices: [
      "更新所有权重，但把学习率保持得很低的方式",
      "因为是加 adapter 层的方式，所以每次推理必然增加延迟",
      "冻结预训练权重，只训练低秩矩阵，并且没有推理延迟",
      "把模型权重转换成 4 比特来减少训练内存的技术",
    ],
    explain: "LoRA 冻结预训练权重，在每一层加上可训练的 rank decomposition 矩阵，与 adapter 不同，它不会增加推理延迟。",
  },
  "expert-s2-qlora": {
    prompt: "必须用一块 GPU 微调大模型。QLoRA 的做法，哪项是对的？",
    choices: [
      "把全部权重转成 4 比特后，重新训练所有权重",
      "不拆到多块 GPU，而是只留一部分层，其余层全部删掉再训练",
      "通过冻结的 4 比特量化模型，把梯度传给 LoRA",
      "把训练数据减少到四分之一，降低内存占用",
    ],
    explain: "QLoRA 通过冻结的 4 比特量化模型向 LoRA adapter 做反向传播，使得 65B 模型也能在一块 48GB 的 GPU 上微调。",
  },
  "expert-s2-int8-outliers": {
    prompt: "LLM.int8() 在大模型的 8 比特推理中避免质量下降的方法是什么？",
    choices: [
      "只把数值大的 outlier 维度用 16 比特计算，其余用 8 比特计算",
      "把所有层都转成 8 比特，然后只重新训练最后一层",
      "用单独的校正模型来预测 8 比特转换产生的误差",
      "保持 attention 层不变，只把 embedding 层转成 8 比特",
    ],
    explain: "LLM.int8() 采用 mixed-precision 分解，把大模型中出现的 outlier 特征维度单独用 16 比特计算，其余 99.9% 以上的值用 8 比特处理，性能也没有下降。",
  },
  "expert-s2-distillation": {
    prompt: "在 Hinton 等人（2015）的 knowledge distillation 中，提高 softmax temperature 的目的是什么？",
    choices: [
      "让标准答案标签更清晰，加快学生的学习速度",
      "减少教师模型的输出 token 数，降低推理成本",
      "让学生模型部署后，也用高 temperature 持续给出多样的回答",
      "让教师的概率分布变得平滑，用 soft target 训练学生",
    ],
    explain: "提高教师模型的 softmax temperature 得到平滑的 soft target，学生也用同样的 temperature 去拟合它；学习结束后的学生，使用 temperature 1。",
  },
  "expert-s2-fine-tune-evals": {
    prompt: "要决定为遵循指示的微调收集多少数据。LIMA（Zhou 等人，2023）的研究表明了什么？",
    choices: [
      "数据不超过几万条，监督微调几乎没有效果",
      "仅精选 1,000 个示例做监督微调，质量就很高",
      "要让模型遵循指示，必须有 RLHF 或人类偏好建模",
      "模型的知识大部分是在微调阶段新学到的",
    ],
    explain: "LIMA 只用精心挑选的 1,000 条提示和回答，对 65B LLaMA 做监督微调，没有用强化学习或偏好建模，质量依然很高；作者得出结论：知识几乎都来自预训练，指令微调数据可以很少。",
  },
  "expert-s3-rag-memory": {
    prompt: "RAG（Lewis 等人，2020）结合了哪两种记忆（memory）？",
    choices: [
      "权重里的 parametric 记忆，和检索用向量索引",
      "短期对话记忆，和每位用户的长期档案记忆",
      "预训练数据记忆，和微调数据记忆",
      "token embedding 里的记忆，和位置编码里的记忆",
    ],
    explain: "RAG 把预训练 seq2seq 模型的权重（parametric memory），与用神经检索器查找的 Wikipedia dense 向量索引（non-parametric memory）结合起来。",
  },
  "expert-s3-rag-vs-finetune": {
    prompt: "公司内部规定经常变化，而且每个回答都要展示依据文档。为什么 RAG 比微调更合适？",
    choices: [
      "接上检索后，模型权重会按新规定自动更新",
      "只换索引文档就能更新知识，并能展示检索到的文档作依据",
      "用了 RAG 幻觉从根本上消失，所以完全不用另外验证回答",
      "没有检索这一步，所以响应延迟比微调模型更短",
    ],
    explain: "RAG 论文指出，更新知识和给出出处（provenance）是仅依赖权重的模型尚未解决的难题，外部 non-parametric 记忆可以起到帮助。",
  },
  "expert-s3-contextual-chunk": {
    prompt: "像“销售额增长了 3%”这样的 chunk 不包含是哪家公司、哪个季度的信息，检索因此跑偏。Anthropic Contextual Retrieval 的解决办法是什么？",
    choices: [
      "把 chunk 大小扩大到整篇文档，用一个向量表示一篇文档来建立索引，再用于检索时与问题比对",
      "增加 embedding 维度，更精确地容纳数字信息",
      "给每个 chunk 加一段语境说明，再建立 embedding 和 BM25 索引",
      "把含数字的 chunk 从索引中去掉，提前避免混淆",
    ],
    explain: "Contextual Retrieval 在每个 chunk 前面加一段说明该 chunk 在原文档中是什么语境的短文，然后做 embedding 并建立 BM25 索引。",
  },
  "expert-s3-hybrid-search": {
    prompt: "用户用“TS-999”这样的错误代码检索时，向量检索返回了驴唇不对马嘴的文档。最合适的措施是什么？",
    choices: [
      "只把 embedding 模型换成更大的，向量检索保持不变",
      "告诉用户把错误代码换成自然语言描述再检索",
      "把 top-k 调大很多，指望相关文档碰巧被包含进来",
      "BM25 关键词检索加 hybrid 检索，抓住精确匹配",
    ],
    explain: "embedding 可能漏掉像错误代码这样的精确标识符，而 BM25 能抓住字符串匹配，所以同时使用，可以减少技术类查询的检索失败。",
  },
  "expert-s3-rrf": {
    prompt: "用 RRF（reciprocal rank fusion）合并关键词检索和向量检索的结果。哪个说明是对的？",
    choices: [
      "要把两个检索器的分数归一到同一尺度后再相加",
      "只用排名来累加 1/(k+排名)，不需要归一化",
      "只保留两个列表里都出现的文档，其余丢弃",
      "优先使用向量分数，只有分数相同时才参考关键词检索",
    ],
    explain: "RRF 只使用各结果列表中的排名来累加 1/(k+rank)，因此不需要对齐不同检索器的分数；Elasticsearch 中 k 的默认值是 60。",
  },
  "expert-s3-cross-encoder": {
    prompt: "把 cross-encoder 用于 re-ranking 的理由和用法，哪项是对的？",
    choices: [
      "文档 embedding 预先算好，所以对整个语料库检索最快",
      "不看问题，只看文档给质量打分，过滤掉低质量文档",
      "准确率比 bi-encoder 低，但成本便宜，所以用于第一轮检索",
      "把问题和文档成对放入，更准确但更慢，所以只对第一轮候选重新排序",
    ],
    explain: "cross-encoder 把两个句子一起放入并给出分数，所以比 bi-encoder 更准确，但不适合大规模，因此先用 bi-encoder 找候选，再用它重新排序。",
  },
  "expert-s3-rerank-tradeoff": {
    prompt: "打算大幅增加 reranker 要重新排序的第一轮候选数量。预期的 trade-off 是什么？",
    choices: [
      "准确率可能提高，但延迟和成本也会一起增加",
      "准确率和延迟都变好",
      "延迟不变，只有准确率下降",
      "候选数量对 reranker 的最终结果没有任何影响",
    ],
    explain: "Anthropic 的文章说，reranking 会增加延迟，重新排序的 chunk 越多越有利于准确率，越少越有利于速度和成本，这是本质上的 trade-off。",
  },
  "expert-s3-small-knowledge-base": {
    prompt: "知识库大约有 300 页（不到 20 万 token）。Anthropic Contextual Retrieval 文章推荐的做法是什么？",
    choices: [
      "chunk 越小越好，所以建一个按句子切分的 RAG",
      "不管规模多大，都必须配备向量数据库和 reranker，再加上复杂的检索流程",
      "不用 RAG，整体放进提示词，用 prompt caching",
      "用全部文档微调模型，把提示词留空",
    ],
    explain: "文章说明，不到 20 万 token（约 500 页）时，可以不用 RAG，把整个知识库放进提示词，并用 prompt caching 让它更快更便宜。",
  },
  "expert-s3-lost-in-the-middle": {
    prompt: "在很长的上下文里连接了多条检索结果。根据 “Lost in the Middle” 研究，要注意什么？",
    choices: [
      "模型不管上下文长度，总能均匀利用各个位置的信息来作答",
      "相关信息在最末尾时，性能最差",
      "相关信息在上下文中间时，性能比在开头、结尾时下降",
      "检索结果要按随机顺序放入，性能才最好",
    ],
    explain: "相关信息在输入的开头或结尾时性能最高，在中间时大幅下降，即使是长上下文模型，也没能均匀地利用整个输入。",
  },
  "expert-s3-beir-zero-shot": {
    prompt: "要把检索器直接用于没学过的新领域（公司内部文档）。BEIR 基准说明了什么？",
    choices: [
      "BM25 是稳健的基线，dense 检索器在领域之外可能较弱",
      "dense 检索器在任何领域都总是优于 BM25",
      "re-ranking 几乎没有计算成本，所以任何情况下都最好一直开着",
      "评估检索器只用学过的领域的数据就足够了",
    ],
    explain: "在 BEIR 的 zero-shot 评估中，BM25 是稳健的基线，re-ranking 性能最好但计算成本很大，dense 检索器在泛化上显示出弱点。",
  },
  "expert-s3-embedding-normalize": {
    prompt: "没用 dimensions 参数，而是把 OpenAI embedding 直接截断来降低维度。接下来该做什么？",
    choices: [
      "截断的向量不能用 cosine 相似度，所以改用欧氏距离",
      "不做任何处理，直接用 dot product 比较，结果也一样",
      "按被截掉的维度数补零，恢复到原来长度再比较",
      "把向量重新归一化到长度 1，然后再计算相似度",
    ],
    explain: "OpenAI embedding 已经归一化到长度 1，所以 dot product 就等于 cosine 相似度；而直接截断之后，就必须重新归一化。",
  },
  "expert-s3-ragas-faithfulness": {
    prompt: "想抓出 RAG 回答编造了检索到的上下文里没有的内容的情况。这对应 RAGAS 评估维度中的哪一个？",
    choices: [
      "检索质量（context relevance）",
      "忠实度（faithfulness）",
      "检索速度（latency）",
      "词汇多样性（diversity）",
    ],
    explain: "RAGAS 把评估分为检索质量、忠实度（是否忠实使用了检索到的上下文）和生成质量；编造上下文中没有的内容，属于忠实度问题。",
  },
  "expert-s4-prompt-caching": {
    prompt: "响应延迟很大，而且每次请求都要发送同样的长系统提示词和工具定义。最有效的措施是什么？",
    choices: [
      "对固定的前面部分应用 prompt caching",
      "每次都把系统提示词挪到用户消息后面再发送",
      "把 temperature 降到 0 来加快生成速度",
      "加大 max_tokens，免得回答被截断",
    ],
    explain: "prompt caching 缓存并重用像系统指示、工具定义这类稳定重复的内容，建议把要缓存的内容放在提示词前面。",
  },
  "expert-s4-cache-prefix": {
    prompt: "在系统提示词最前面放了请求时间（timestamp），结果缓存几乎不命中。原因和解决办法，哪项是对的？",
    choices: [
      "缓存只比较最后一条消息——把缓存寿命（TTL）延长",
      "缓存只用相同的前缀——把会变的值挪到固定部分后",
      "让时间戳超过最小长度——把提示词缩短",
      "缓存只适用于工具定义——把指示挪进工具说明",
    ],
    explain: "缓存要求 tools → system → messages 顺序的前缀 100% 相同才能命中，所以像时间戳这种每次都变的值，必须放在固定前缀之后。",
  },
  "expert-s4-cache-minimum": {
    prompt: "加了 cache_control，但 usage 里的 cache_creation_input_tokens 和 cache_read_input_tokens 都是 0。首先该怀疑什么？",
    choices: [
      "API 隐藏了缓存错误，所以要增加重试次数",
      "缓存只在开启流式响应时才起作用",
      "提示词比最小缓存长度短，所以没被缓存",
      "缓存要过一段时间后才会计入 usage",
    ],
    explain: "比各模型最小长度短的提示词，即使加了 cache_control 也不会报错，只是不会被缓存；两个 usage 值都是 0，就说明没有被缓存。",
  },
  "expert-s4-output-tokens": {
    prompt: "需要缩短响应延迟。按照 OpenAI 的延迟指南，通常占延迟最大份额的步骤是哪个？",
    choices: [
      "读取和处理输入 token 的步骤",
      "到 API 服务器的网络往返",
      "请求认证和 rate limit 检查",
      "逐个生成输出 token 的步骤",
    ],
    explain: "指南说明，生成 token 几乎总是延迟最大的步骤，所以把输出 token 减半，延迟也大约能减半。",
  },
  "expert-s4-streaming-ttft": {
    prompt: "即使整体响应时间不变，也想让用户感觉反应更快。合适的措施和要一起看的指标是什么？",
    choices: [
      "把 max_tokens 大幅调小——整个响应用掉的 token 总数",
      "开启流式传输——time to first token（TTFT）",
      "提高 temperature——输出的多样性",
      "增大批量大小——每秒吞吐量",
    ],
    explain: "流式传输在整个输出结束之前就开始发送响应，提升体感的反应速度，此时直到第一个 token 出现的时间（TTFT）是关键指标。",
  },
  "expert-s4-max-tokens": {
    prompt: "只需要简短的回答，所以把 max_tokens 设得很低。Anthropic 文档指出这个方法的局限是什么？",
    choices: [
      "模型预先知道限额，会压缩内容，所以质量反而更高",
      "max_tokens 是输入长度的限额，所以对输出长度没有任何影响",
      "超过限额，API 会返回错误，所以每次都要重新请求",
      "到了限额，连句子中间也会被截断，适合答案出现在最前面的简短格式",
    ],
    explain: "文档指出，达到 max_tokens 时，响应连句子或单词中间也会被截断，所以这是一种比较生硬的方法，主要适合答案出现在最前面的选择题、简答题。",
  },
  "expert-s4-batch-api": {
    prompt: "需要在一夜之间分类几十万份文档，而且不需要立即响应。合适的方式是什么？",
    choices: [
      "用异步 Batch API 批量打包后发送",
      "用同步 API 尽可能多地同时发送请求",
      "用流式传输接收，缩短第一个 token 出来的时间",
      "每个请求换一个模型，来避开 rate limit",
    ],
    explain: "文档说明，Batch API 用于不需要立即响应的任务，比如运行评估、大批量数据分类，以异步请求打包的方式处理（完成时限、折扣率等具体条件可能会变，请在文档中确认）。",
  },
  "expert-s4-structured-outputs": {
    prompt: "要解析响应后存入数据库，但有时会缺少必填字段。JSON mode 和 Structured Outputs 的区别，哪项是对的？",
    choices: [
      "两者都保证符合 schema，所以用哪个结果都一样",
      "JSON mode 保证符合 schema，Structured Outputs 只保证 JSON 格式",
      "两者都能输出有效的 JSON，但只有 Structured Outputs 保证符合 schema",
      "两者都不保证 JSON 有效，所以必须用正则表达式检查",
    ],
    explain: "OpenAI 的文档说明，两种方式都能生成有效的 JSON，但连符合 schema 也保证的，只有 Structured Outputs。",
  },
  "expert-s4-refusal-handling": {
    prompt: "在用 Structured Outputs 时，如果出现出于安全原因的拒绝响应，解析会失败。合适的处理是什么？",
    choices: [
      "拒绝响应也总是遵循 schema，所以不需要另外处理",
      "调高 temperature，反复重试，直到不再出现拒绝",
      "在解析之前先检查 refusal 字段，单独处理拒绝",
      "去掉 schema 的必填字段，让拒绝也原样通过",
    ],
    explain: "拒绝响应可能不符合 schema，所以文档指引：先检查响应的 refusal 字段，再做界面显示或分支处理。",
  },
  "expert-s4-eval-design": {
    prompt: "设计评估集。Anthropic 文档推荐的原则，哪项是对的？",
    choices: [
      "反映真实分布和 edge case，多用自动评分",
      "人精心评分的少量题目，总是比自动评分的大量题目更好",
      "评估题目选模型擅长的代表性案例为主，来提高可信度",
      "评估只在发布前跑一次就够了",
    ],
    explain: "文档建议：反映真实任务分布和 edge case，把题目设计成可以自动评分，即使信号稍弱，也最好设置很多自动评分的题目。",
  },
  "expert-s4-judge-position-bias": {
    prompt: "用 LLM-as-a-judge 比较 A、B 两个回答，先给出的回答经常获胜。合适的应对是什么？",
    choices: [
      "指示它选更长的回答，使判定保持一致",
      "只用与生成被评回答的相同模型来评分",
      "扩大分数范围，不经人工审查也让差异显现出来",
      "位置偏差：调换顺序判两次，两次都赢才算赢",
    ],
    explain: "LLM judge 有位置、冗长、自我偏好的偏差，论文建议把回答顺序调换，判定两次，只有在两种顺序下都获胜才算赢。",
  },
  "expert-s4-grading-method": {
    prompt: "要评分回答是否与规定的分类标签之一一致。按 Anthropic 文档的标准，应先选哪种方式？",
    choices: [
      "人工评分——最灵活，质量最高",
      "基于代码的评分——最快、最可靠、可扩展性最高",
      "LLM 评分——适合复杂判断，所以不管什么任务都总是最先用",
      "跳过评分——分类问题模型不会出错",
    ],
    explain: "文档建议选最快、最可靠、可扩展的方式，对答案固定的类别型回答，像 exact match 这样基于代码的评分比较合适。",
  },
  "expert-s5-indirect-injection": {
    prompt: "正在总结网页的智能体，遵从了页面里隐藏的“忽略之前的指示”这句话。这种攻击属于什么类型？",
    choices: [
      "间接提示词注入——外部数据里的指示进入模型",
      "直接提示词注入——用户亲自在输入框里写攻击语句",
      "数据投毒——在训练数据里植入后门",
      "模型提取——收集大量输出来复制模型",
    ],
    explain: "OWASP 把 LLM 接收网站、文件这类外部来源的输入时发生的注入，定义为间接提示词注入。",
  },
  "expert-s5-rag-not-mitigation": {
    prompt: "对于“已经引入了 RAG 和微调，提示词注入就解决了”的说法，OWASP 的立场是什么？",
    choices: [
      "把攻击语句作为微调数据去学习，注入就会消失",
      "据研究，RAG、微调并不能完全防住注入攻击",
      "RAG 使用外部文档，反而消除了注入风险",
      "只要在系统提示词里写上禁止语句，注入就解决了",
    ],
    explain: "OWASP LLM01 指出，RAG 和微调的目的是提高输出的相关性和准确性，但据研究，它们并不能完全缓解提示词注入漏洞。",
  },
  "expert-s5-least-privilege": {
    prompt: "要做一个能读邮件、回信甚至转账的智能体。哪种设计即使注入成功也能减轻损失？",
    choices: [
      "把所有工具都给它，但用系统提示词禁止危险行动",
      "用一个管理员账号处理所有工作，减少权限错误",
      "只给最小必需的权限，高风险的行动要由人批准",
      "交给模型自己判断风险程度，决定是否执行",
    ],
    explain: "OWASP 建议，把模型的访问权限限制在所需的最低限度，对权限大的操作设置人工批准（human-in-the-loop）。",
  },
  "expert-s5-system-prompt-leakage": {
    prompt: "在系统提示词里放了数据库连接字符串和“只有管理员才能退款”的规则。从 OWASP LLM07 的角度看，评价是什么？",
    choices: [
      "系统提示词用户看不到，所以是安全的",
      "把规则写得语气更强，就是足够的安全控制",
      "连接字符串模型自己不会泄露，所以放着不管也可以",
      "提示词不是秘密，别放机密，权限检查在模型外",
    ],
    explain: "OWASP 说，不要把系统提示词当成秘密或安全控制，不要放入凭据，权限检查要在模型之外的确定性系统中进行。",
  },
  "expert-s5-improper-output": {
    prompt: "有一个功能，把模型生成的 SQL 原样在数据库里执行。OWASP LLM05 建议的处理是什么？",
    choices: [
      "模型输出是可信的，所以只留执行日志",
      "验证输出，并用 parameterized query 来执行",
      "在系统提示词里写上不要生成恶意 SQL",
      "把 temperature 设为 0，总是只出同样的 SQL，风险就消失了",
    ],
    explain: "OWASP LLM05 建议用 zero-trust，把模型当作另一个用户来对待，验证输出，并且对输入了模型输出的数据库操作使用 parameterized query。",
  },
  "expert-s5-unbounded-consumption": {
    prompt: "担心有人对公开聊天机器人大量发送极长的输入，让成本暴增的攻击（denial of wallet）。合适的应对是什么？",
    choices: [
      "换成更大的模型，让长输入也能处理得快",
      "尽可能多地公开 logprobs 等细节输出，提高服务透明度",
      "增加失败请求的自动重试，保证可用性",
      "设置 rate limit、用户配额、输入大小限制和超时",
    ],
    explain: "OWASP LLM10 建议设置 rate limit 和用户配额、输入大小验证、超时和 throttling，并减少 logit_bias、logprobs 的暴露。",
  },
  "expert-s5-vector-tenant-isolation": {
    prompt: "这是一个把多家客户公司的文档放在同一个向量数据库里的 RAG 服务。防止出现检索到其他客户公司文档这种事故的关键控制是什么？",
    choices: [
      "具备权限感知的向量存储，并按客户公司分区隔离数据",
      "增加 embedding 维度，让各客户公司的文档更不容易混在一起",
      "在系统提示词里用强硬语气写明绝对不要提其他客户公司的文档",
      "加上 reranker，把不相关的文档排到下面",
    ],
    explain: "OWASP LLM08 为防止多租户环境下的数据泄露，建议使用具备细粒度访问控制的 permission-aware 向量存储，以及数据集的逻辑隔离。",
  },
  "expert-s5-data-poisoning": {
    prompt: "用从外部获得的数据做了微调，结果只在出现特定短语时才行为异常。对应的风险和应对是什么？",
    choices: [
      "幻觉——降低 temperature",
      "系统提示词泄露——把系统提示词加密保存",
      "数据投毒（后门）——追踪验证数据来源",
      "过度自主——减少所连接的工具数量",
    ],
    explain: "篡改训练数据，可能产生只在特定触发条件下才改变行为的后门；OWASP LLM04 建议用 ML-BOM 等方式追踪并验证数据来源。",
  },
  "expert-s5-adversarial-suffix": {
    prompt: "Zou 等人（2023）的自动生成 adversarial suffix 研究表明了什么？",
    choices: [
      "经过对齐的模型对自动攻击免疫，只有手动 jailbreak 才危险",
      "攻击 suffix 只对生成它的模型有效，不会转移到其他模型",
      "用公开模型优化出的 suffix，也迁移到了黑盒商用模型上",
      "加上很长的 suffix，模型就总是转向拒绝",
    ],
    explain: "在公开模型（Vicuna）上用 greedy、gradient 搜索找到的 suffix，也迁移到了 ChatGPT、Bard、Claude 这类黑盒公开界面上。",
  },
  "expert-s5-red-teaming-scale": {
    prompt: "Ganguli 等人（2022）的语言模型红队研究，下面哪个结果是对的？",
    choices: [
      "RLHF 模型规模越大，红队攻击越困难",
      "所有类型的模型，不论规模，对攻击的脆弱程度都差不多",
      "普通 LM 规模越大，变得最安全",
      "因为攻击数据很危险，所以没有公开",
    ],
    explain: "在四种模型类型中，只有 RLHF 模型随着规模变大越来越难被红队攻破，其他类型几乎没有随规模变化，并且公开了 38,961 条攻击数据。",
  },
  "expert-s5-constitutional-ai": {
    prompt: "Constitutional AI（Bai 等人，2022）的训练方式，哪项是对的？",
    choices: [
      "由人给有害输出逐一打标签，做出奖励模型",
      "附加一个规则过滤器，遇到有害请求就一律简短地拒绝，并且不作任何解释",
      "只靠从预训练数据中删除有害文档来实现对齐",
      "用原则清单做自我批评、修改的 SFT，再用 AI 偏好做 RL",
    ],
    explain: "人提供的输入只有原则清单；先用自我批评、修改后的回答做监督学习，再用以 AI 打出的偏好做成的偏好模型作奖励，进行强化学习（RLAIF）。",
  },
  "expert-s5-eu-ai-act-limited-risk": {
    prompt: "在 EU AI Act 基于风险的分类中，像客户咨询聊天机器人这类有限风险（limited risk）系统，主要被要求什么？",
    choices: [
      "上市前须获得政府预先批准，并在公共数据库预先登记",
      "让用户知道自己正在与 AI 对话的透明度义务",
      "全面禁止上市",
      "没有任何义务，不受监管",
    ],
    explain: "EU AI Act 对不可接受的风险予以禁止，对高风险实行强监管，对有限风险规定透明度义务（让聊天机器人、深度伪造的用户知道对方是 AI），对最小风险则不监管。",
  },
}

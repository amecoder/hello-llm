// English text for the expert level questions (level-bank/expert.ts).
export const EXPERT_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "expert-s1-scaled-dot-product": {
    prompt: "According to the original paper, why do we divide QK^T by √d_k in scaled dot-product attention?",
    choices: [
      "For large d_k, dot products grow large and push softmax into regions with tiny gradients",
      "To turn dot products into probabilities between 0 and 1 so we can skip softmax",
      "To keep each head's output dimension equal to d_model even as more attention heads are added",
      "To lower compute precision one step in advance so GPU matrix multiplies do not overflow",
    ],
    explain: "The original paper notes (the authors say they \"suspect\") that for large d_k, the dot products grow large and push the softmax into regions with extremely small gradients, so they scale by 1/√d_k to counteract this.",
  },
  "expert-s1-multi-head": {
    prompt: "Which of the following is closest to the original paper's reason for using multi-head attention instead of single-head attention?",
    choices: [
      "To have each head process only different tokens and cut the total compute by the number of heads",
      "To attend to info from different representation subspaces at different positions",
      "To add redundancy so that if one head fails, another head can produce the output instead",
      "To store position info separately across heads so positional encoding is no longer needed",
    ],
    explain: "The original paper explains that multi-head attention lets the model jointly attend to information from different representation subspaces at different positions.",
  },
  "expert-s1-positional-encoding": {
    prompt: "What is the fundamental reason we need to add positional encoding to a Transformer?",
    choices: [
      "To represent words that are missing from the vocabulary with position numbers instead",
      "To set a rule for chopping long sentences into pieces of equal length",
      "It has no recurrence or convolution, so it cannot tell token order alone",
      "To normalize the size of embedding vectors and keep training stable",
    ],
    explain: "The original paper states that because the Transformer contains no recurrence and no convolution, we must inject information about the relative or absolute position of tokens.",
  },
  "expert-s1-causal-mask": {
    prompt: "What is the purpose of masking future positions in the decoder's self-attention?",
    choices: [
      "To stop padding tokens from receiving any attention weights",
      "To reduce the influence of distant tokens and prevent overfitting in long contexts",
      "To make the full attention matrix sparse and save GPU memory during both training and inference",
      "To keep the auto-regressive property of predicting the next token from past tokens only",
    ],
    explain: "The original paper explains that preventing leftward information flow in the decoder (later tokens affecting earlier ones) preserves the auto-regressive property.",
  },
  "expert-s1-parallelism": {
    prompt: "According to the original paper, what is an advantage of a self-attention layer compared to an RNN layer?",
    choices: [
      "Compute per layer is linear in sequence length, so it is always cheaper on very long inputs",
      "It links all positions in a constant number of sequential steps, enabling parallel work",
      "It builds order info right into its structure, so positional encoding is not needed",
      "It reuses hidden states, so memory usage stays constant during inference",
    ],
    explain: "Self-attention takes O(1) sequential operations, which makes it easy to parallelize, though its compute per layer is O(n²·d), proportional to the square of the sequence length.",
  },
  "expert-s1-flashattention": {
    prompt: "On long sequences, attention is slow and uses a lot of memory. What approach does FlashAttention take?",
    choices: [
      "It approximates attention between distant tokens to bring compute down to linear",
      "It reduces the number of attention heads to make the key and value tensors smaller",
      "It compresses long inputs into summary tokens before computing attention",
      "It computes exact attention while using tiling to cut I/O between HBM and SRAM",
    ],
    explain: "FlashAttention is an IO-aware algorithm that computes exact (not approximate) attention, using tiling to reduce reads and writes between GPU HBM and on-chip SRAM.",
  },
  "expert-s1-kv-cache": {
    prompt: "In auto-regressive generation, what does the KV cache store and what is its effect?",
    choices: [
      "It stores the keys and values of earlier tokens to avoid recomputing them",
      "It stores the output probability distributions of earlier steps to stop token repetition",
      "It stores common question-and-answer pairs to reply to repeated questions right away",
      "It keeps part of the model weights in GPU cache to shorten loading time",
    ],
    explain: "The KV cache stores the key and value pairs of already processed tokens in each attention layer and reuses them for the next token, avoiding recomputation.",
  },
  "expert-s1-kv-cache-memory": {
    prompt: "On an inference server using a KV cache, GPU memory runs out as concurrent requests and context length grow. What is the cause?",
    choices: [
      "The KV cache grows only during training and stays a fixed size during inference",
      "Cache size has nothing to do with context length and scales only with vocabulary size",
      "Each new token appends keys and values, so the cache grows linearly with length",
      "The KV cache copies the entire set of model weights at every step",
    ],
    explain: "Because KV cache tensors have the shape (batch, heads, sequence length, head dimension) and new tokens keep appending keys and values, memory grows linearly with sequence length and batch size.",
  },
  "expert-s1-multi-query": {
    prompt: "What main bottleneck in incremental decoding did the multi-query attention paper point out, and what was its fix?",
    choices: [
      "Lack of compute (FLOPs) — add more heads to increase parallelism",
      "Large vocabulary size — compute the output softmax hierarchically across word clusters",
      "Memory bandwidth — have all heads share one set of keys and values",
      "Positional encoding compute — precompute sine values in a lookup table",
    ],
    explain: "Memory bandwidth from repeatedly loading large key and value tensors is the bottleneck during decoding; sharing one set of keys and values across all heads shrinks those tensors and speeds up decoding.",
  },
  "expert-s1-grouped-query": {
    prompt: "Which statement correctly describes grouped-query attention (GQA)?",
    choices: [
      "It uses more than one KV head but fewer than query heads to balance quality and speed",
      "It merges all query heads into one so attention only needs to be computed once",
      "It groups tokens into a few fixed-size buckets and computes attention only within each bucket",
      "It is a serving trick that batches queries from many users together to boost throughput",
    ],
    explain: "GQA sits between multi-head and multi-query attention: it uses more than one key-value head but fewer than the query heads, getting quality close to MHA and speed close to MQA.",
  },
  "expert-s1-rope": {
    prompt: "Which of the following is a key feature of RoPE (rotary position embedding)?",
    choices: [
      "It simply adds a learnable position vector to each token embedding",
      "It assigns a separate attention head to each position in the sequence",
      "It applies position information only at the final output softmax layer during token generation",
      "It encodes absolute position with a rotation matrix so attention reflects relative distance",
    ],
    explain: "RoPE encodes absolute position with a rotation matrix, which naturally brings relative position dependence into the self-attention calculation.",
  },
  "expert-s1-mixture-of-experts": {
    prompt: "Why does compute per token stay roughly constant in MoE models like the Switch Transformer even when parameter count grows huge?",
    choices: [
      "Because it averages the weights of all experts into a single layer before computing",
      "Because a router activates only a few experts per token (1 in Switch)",
      "Because it drops the expert layers at inference time and uses only the shared layers",
      "Because it assigns different sentences to each expert to shrink the batch size",
    ],
    explain: "MoE activates only a subset of parameters for each input, keeping compute constant despite a huge total parameter count; Switch Transformer routes each token to just one expert.",
  },
  "expert-s2-kaplan-power-law": {
    prompt: "What is a core observation of the Kaplan et al. (2020) scaling laws paper?",
    choices: [
      "Loss follows a power law with model size, dataset size, and compute",
      "Loss is most sensitive to the exact ratio of transformer layer depth to hidden layer width",
      "Once a model passes a certain size, loss stops going down",
      "Smaller models learn more efficiently from each data sample",
    ],
    explain: "Loss follows a power-law relationship with model size, dataset size, and training compute across many orders of magnitude, while architectural details like width and depth had minor effects.",
  },
  "expert-s2-kaplan-compute-optimal": {
    prompt: "Under a fixed compute budget, what compute-optimal training strategy did Kaplan et al. (2020) propose?",
    choices: [
      "Train a small model on a huge amount of data until it fully converges",
      "Train a very large model on relatively little data and stop before convergence",
      "Always scale up the model size and the number of training tokens at the exact same rate",
      "Spend half the compute budget on pretraining and the other half on fine-tuning",
    ],
    explain: "Kaplan et al. concluded that because large models are more sample-efficient, it is compute-optimal to train very large models on a modest amount of data and stop well before convergence.",
  },
  "expert-s2-chinchilla": {
    prompt: "What was the main conclusion of the Chinchilla paper (Hoffmann et al., 2022)?",
    choices: [
      "Large models at the time were bottlenecked by too few parameters rather than too little data",
      "When compute budget grows, it is better to scale only the model and keep data the same",
      "For compute-optimal training, model size and training tokens should scale in equal proportions",
      "The number of training tokens matters very little, so choosing the right architecture is more important",
    ],
    explain: "The Chinchilla paper showed that large models of the time were undertrained relative to their size, and that doubling model size should come with doubling the number of training tokens.",
  },
  "expert-s2-chinchilla-inference": {
    prompt: "You are training a model under a fixed compute budget, and inference cost after launch also matters. Based on the Chinchilla findings, what is the right call?",
    choices: [
      "Pick the largest model the budget allows, since more parameters also make inference faster",
      "Data size does not affect inference cost, so only compare model sizes",
      "Inference cost has nothing to do with how you train, so only compare final quality",
      "Train a smaller model on more tokens to keep quality high while making inference cheaper",
    ],
    explain: "Trained with the same compute as Gopher (280B) but on about 4x more data, the 70B Chinchilla model performed better while also being cheaper to fine-tune and run at inference.",
  },
  "expert-s2-bpe": {
    prompt: "What is the main reason for using subword tokenization like BPE?",
    choices: [
      "To split sentences cleanly by word boundaries and make grammar parsing easier",
      "To represent rare and unseen words as combinations of subword units",
      "To map one character to one token in every language and keep sequence lengths fixed",
      "To separate homonyms so every token has a single meaning",
    ],
    explain: "Sennrich et al. proposed encoding rare and unknown words as sequences of subword units because a fixed word vocabulary struggles with open-vocabulary translation.",
  },
  "expert-s2-instructgpt-steps": {
    prompt: "What is the correct order of steps in InstructGPT's alignment pipeline?",
    choices: [
      "Train reward model → SFT on demonstrations → collect human rankings → RL",
      "Collect human rankings → RL → SFT on demonstrations",
      "RL → train reward model → SFT on demonstrations",
      "SFT on demonstrations → collect rankings of outputs → RL (RLHF)",
    ],
    explain: "InstructGPT first did supervised fine-tuning of GPT-3 on labeler demonstrations, then collected rankings of model outputs, and finally ran reinforcement learning using a reward model trained on those rankings.",
  },
  "expert-s2-dpo": {
    prompt: "When aligning with preference data, what is a valid reason to choose DPO over PPO-based RLHF?",
    choices: [
      "It trains directly on preference pairs without a separate reward model or RL",
      "It can align a model using only gold-standard answers without any human preference data",
      "It samples huge batches of responses from the model during training to compute rewards",
      "It makes the reward model much larger to reduce PPO's instability",
    ],
    explain: "DPO reparameterizes the reward model to solve for the optimal policy directly with a simple classification loss, making training stable without sampling during training.",
  },
  "expert-s2-lora": {
    prompt: "Which of the following is a true characteristic of LoRA?",
    choices: [
      "It updates all weights in the model while keeping the learning rate very small",
      "It inserts extra adapter layers, so it always adds latency at inference time",
      "It freezes pretrained weights, trains low-rank matrices, and adds no inference latency",
      "It converts all model weights to 4-bit precision to cut GPU memory usage during training",
    ],
    explain: "LoRA freezes the pretrained weights and adds trainable rank-decomposition matrices to each layer, introducing no extra inference latency unlike adapters.",
  },
  "expert-s2-qlora": {
    prompt: "You need to fine-tune a large model on a single GPU. How does QLoRA do this?",
    choices: [
      "It converts all weights to 4-bit and then retrains every weight in the model",
      "Instead of splitting across GPUs, it deletes most layers and trains only the remaining ones",
      "It backpropagates gradients through a frozen, 4-bit quantized model into LoRA adapters",
      "It shrinks the training dataset to one quarter to lower memory usage",
    ],
    explain: "QLoRA backpropagates through a frozen 4-bit quantized model into LoRA adapters, making it possible to fine-tune a 65B model on a single 48GB GPU.",
  },
  "expert-s2-int8-outliers": {
    prompt: "How did LLM.int8() avoid quality drops when running 8-bit inference on large models?",
    choices: [
      "It computes large outlier dimensions in 16-bit and the rest in 8-bit",
      "It converts all layers to 8-bit and retrains the final layer",
      "It uses a separate calibration model to predict errors caused by 8-bit conversion",
      "It leaves attention layers untouched and converts only the embedding layer to 8-bit",
    ],
    explain: "LLM.int8() uses a mixed-precision decomposition that computes outlier feature dimensions in 16-bit while handling over 99.9% of values in 8-bit without performance loss.",
  },
  "expert-s2-distillation": {
    prompt: "In knowledge distillation (Hinton et al., 2015), why do we raise the softmax temperature?",
    choices: [
      "To make the true label sharper and speed up the student model's training",
      "To reduce the number of output tokens from the teacher and lower inference cost",
      "To keep the student model giving diverse answers at high temperature settings after deployment",
      "To soften the teacher's probabilities and train the student on soft targets",
    ],
    explain: "Raising the teacher's softmax temperature produces softer probability targets; the student is trained at the same high temperature to match them, then uses a temperature of 1 after training.",
  },
  "expert-s2-fine-tune-evals": {
    prompt: "You are deciding how much instruction fine-tuning data to collect. What did the LIMA study (Zhou et al., 2023) show?",
    choices: [
      "Supervised fine-tuning barely works unless you have tens of thousands of examples",
      "Supervised fine-tuning on just 1,000 curated examples gave high response quality",
      "RLHF or human preference modeling is strictly required for any model to follow instructions",
      "Most of a model's knowledge is newly learned during the fine-tuning stage",
    ],
    explain: "LIMA fine-tuned a 65B LLaMA model on only 1,000 carefully chosen prompt-response pairs without RL or preference modeling and still achieved strong quality, concluding that almost all knowledge comes from pretraining and only limited instruction data is needed.",
  },
  "expert-s3-rag-memory": {
    prompt: "What two kinds of memory does RAG (Lewis et al., 2020) combine?",
    choices: [
      "Parametric memory in weights and a non-parametric retrieved vector index",
      "Short-term chat memory and long-term per-user profile memory",
      "Pretraining data memory and fine-tuning data memory",
      "Memory stored in input token embeddings and memory stored in positional encodings",
    ],
    explain: "RAG combines the weights of a pretrained seq2seq model (parametric memory) with a dense vector index of Wikipedia accessed via a neural retriever (non-parametric memory).",
  },
  "expert-s3-rag-vs-finetune": {
    prompt: "Internal company rules change often, and every answer must cite its source document. Why is RAG a better fit than fine-tuning?",
    choices: [
      "Attaching a retriever automatically updates the model weights to match new rules",
      "You can update knowledge by swapping indexed docs and cite retrieved docs as sources",
      "RAG eliminates hallucinations completely, so answers never need verification",
      "It skips the document retrieval step, so response latency is shorter than with a fine-tuned model",
    ],
    explain: "The RAG paper notes that updating knowledge and providing provenance are open problems for purely parametric models, and external non-parametric memory directly enables both.",
  },
  "expert-s3-contextual-chunk": {
    prompt: "A chunk like \"Revenue grew by 3%\" doesn't say which company or quarter it's about, so retrieval misses it. What is Anthropic's Contextual Retrieval fix?",
    choices: [
      "Grow the chunk size to the whole document so each document is indexed as a single vector in the database",
      "Increase the embedding dimension to store number details more precisely",
      "Prepend a short note explaining the chunk's context in the doc before embedding and BM25 indexing",
      "Drop chunks containing numbers from the index to avoid confusion in advance",
    ],
    explain: "Contextual Retrieval prepends a short explanatory snippet situating each chunk within the source document before embedding it and building the BM25 index.",
  },
  "expert-s3-hybrid-search": {
    prompt: "When users search for an error code like \"TS-999\", vector search returns unrelated docs. What is the best fix?",
    choices: [
      "Swap in a bigger embedding model and keep using vector search alone",
      "Ask users to rewrite all specific error codes as natural-language descriptions before searching",
      "Raise top-k by a lot and hope the right document shows up by chance",
      "Use hybrid search pairing vector search with keyword search like BM25 for exact matches",
    ],
    explain: "Embeddings can miss exact identifiers like error codes, whereas BM25 catches exact string matches; combining the two reduces retrieval failures on technical queries.",
  },
  "expert-s3-rrf": {
    prompt: "You combine keyword search and vector search results using RRF (reciprocal rank fusion). Which statement is true?",
    choices: [
      "You must normalize the scores from both retrievers to the same scale before adding them",
      "It adds 1/(k + rank) using ranks alone, so no score normalization is needed",
      "It keeps only documents that appear in both lists and throws the rest away",
      "It trusts vector scores first and uses keyword search only to break ties",
    ],
    explain: "RRF uses only each document's rank in each result list to sum 1/(k + rank), so scores from different retrievers don't need calibration (Elasticsearch defaults to k = 60).",
  },
  "expert-s3-cross-encoder": {
    prompt: "Why and how do we use a cross-encoder for re-ranking?",
    choices: [
      "It precomputes document embeddings, making it the fastest choice for searching the full corpus at scale",
      "It scores document quality without looking at the query to filter out low-quality docs",
      "It is less accurate than a bi-encoder, but it is cheap enough for first-stage retrieval",
      "It takes the query-doc pair together for accuracy, but is slow, so it re-ranks only top candidates",
    ],
    explain: "A cross-encoder takes both texts together to score them, making it more accurate than a bi-encoder but too slow for a full corpus—so it is used to re-rank candidates found by a bi-encoder.",
  },
  "expert-s3-rerank-tradeoff": {
    prompt: "You plan to greatly increase the number of first-stage candidates passed to the reranker. What trade-off should you expect?",
    choices: [
      "Accuracy may improve, but latency and cost will go up as well",
      "Both accuracy and latency will get better at the same time",
      "Latency stays the same and only accuracy drops",
      "The number of candidates has no effect at all on the reranker's final output",
    ],
    explain: "Anthropic notes that reranking adds latency and involves an inherent trade-off: reranking more chunks favors accuracy, while reranking fewer favors speed and lower cost.",
  },
  "expert-s3-small-knowledge-base": {
    prompt: "Your knowledge base is about 300 pages (under 200,000 tokens). What approach does Anthropic's Contextual Retrieval post recommend?",
    choices: [
      "Smaller chunks are always better, so build a sentence-level RAG pipeline",
      "Always set up a vector DB and a reranker regardless of size",
      "Skip RAG, put the whole knowledge base in the prompt, and use prompt caching to cut cost",
      "Fine-tune the model on the entire document set and leave the system and user prompts completely empty",
    ],
    explain: "If your knowledge base is under 200,000 tokens (about 500 pages), Anthropic recommends putting the entire thing right in the prompt without RAG, and using prompt caching to make it faster and cheaper.",
  },
  "expert-s3-lost-in-the-middle": {
    prompt: "You concatenate many retrieved chunks into a long context. What caution does the \"Lost in the Middle\" study suggest?",
    choices: [
      "Models use information evenly across all positions regardless of total context length or document count",
      "Performance is worst when the relevant information sits at the very end",
      "Performance drops when relevant info is in the middle rather than at the start or end",
      "Putting search results in random order gives the best performance",
    ],
    explain: "Performance is highest when relevant information is at the very beginning or end of the input and drops significantly when it sits in the middle, showing that long-context models do not use the whole input evenly.",
  },
  "expert-s3-beir-zero-shot": {
    prompt: "You apply a retriever directly to a new domain (internal docs) it was never trained on. What does the BEIR benchmark suggest?",
    choices: [
      "BM25 is a strong baseline, while dense retrievers can struggle out-of-domain",
      "Dense retrievers always beat BM25 in every domain without exception",
      "Re-ranking takes almost no compute, so it should always be turned on in every case",
      "Testing a retriever only on in-domain data is enough to know how it will perform",
    ],
    explain: "In BEIR's zero-shot evaluation, BM25 proved a tough baseline to beat; re-ranking gave the best results at high compute cost, while dense retrievers showed generalization weaknesses out-of-domain.",
  },
  "expert-s3-embedding-normalize": {
    prompt: "Instead of using the dimensions parameter, you truncated an OpenAI embedding vector yourself to shrink its dimension. What should you do next?",
    choices: [
      "Switch to Euclidean distance, since truncated vectors cannot use cosine similarity",
      "Compare them with dot product as-is, since the result stays the same",
      "Pad the cut dimensions back with zeros to restore the original length before comparing",
      "Normalize the truncated vector back to length 1 before computing similarity",
    ],
    explain: "OpenAI embeddings are normalized to length 1 so that dot product equals cosine similarity; if you slice them down manually, you must re-normalize them to length 1 afterward.",
  },
  "expert-s3-ragas-faithfulness": {
    prompt: "You want to catch cases where a RAG answer makes up claims not found in the retrieved context. Which RAGAS evaluation dimension does this fall under?",
    choices: [
      "Context relevance",
      "Faithfulness",
      "Latency",
      "Vocabulary diversity",
    ],
    explain: "RAGAS evaluates context relevance, faithfulness (whether the model stuck to the retrieved context), and answer relevance separately; making up unsupported claims is a faithfulness failure.",
  },
  "expert-s4-prompt-caching": {
    prompt: "Latency is high, and every request sends the same long system prompt and tool definitions. What is the most effective step?",
    choices: [
      "Apply prompt caching to the static prefix of the prompt",
      "Move the system prompt after the user message on every request",
      "Lower the temperature to 0 to speed up generation",
      "Increase max_tokens so responses do not get cut off",
    ],
    explain: "Prompt caching reuses stable, repeated content like system instructions and tool definitions, and documentation recommends placing cached content at the beginning of the prompt.",
  },
  "expert-s4-cache-prefix": {
    prompt: "After putting a request timestamp at the very start of the system prompt, cache hits dropped to nearly zero. What is the cause and fix?",
    choices: [
      "The cache checks only the last message — make the cache TTL longer",
      "The cache matches only an identical prefix from the start — move changing values after it",
      "The timestamp pushed the prompt past the minimum length — make the prompt shorter",
      "Caching applies only to tool definitions — move all system instructions into the tool descriptions",
    ],
    explain: "Because the cache requires a 100% identical prefix in the order of tools → system → messages, dynamic values like timestamps must be placed after the static prefix.",
  },
  "expert-s4-cache-minimum": {
    prompt: "You added cache_control, but both cache_creation_input_tokens and cache_read_input_tokens in usage are 0. What should you suspect first?",
    choices: [
      "The API hid a cache error, so you need to increase the retry count",
      "Caching only works when streaming responses are turned on",
      "The prompt is shorter than the model's minimum cacheable token length, so it wasn't cached",
      "Cache usage metrics only show up in the response usage field after a several-minute processing delay",
    ],
    explain: "Prompts shorter than the model-specific minimum token length are silently not cached even with cache_control attached, leaving both usage fields at 0.",
  },
  "expert-s4-output-tokens": {
    prompt: "You need to cut response latency. According to OpenAI's latency guide, which step usually takes the biggest share of total latency?",
    choices: [
      "Reading and processing the input tokens",
      "Network round-trip to the server",
      "Request authentication and rate-limit checks",
      "Generating output tokens one by one",
    ],
    explain: "The guide notes that generating output tokens is almost always the slowest part of a request, so cutting output tokens in half can roughly cut latency in half.",
  },
  "expert-s4-streaming-ttft": {
    prompt: "Even if total generation time stays the same, you want the app to feel faster to users. What step should you take, and what metric goes with it?",
    choices: [
      "Cut max_tokens drastically — total tokens used across the full response",
      "Turn on streaming — time to first token (TTFT)",
      "Raise the temperature — diversity of the output",
      "Increase batch size — throughput per second",
    ],
    explain: "Streaming starts sending the response before the full output is finished, improving perceived responsiveness, and time to first token (TTFT) is the key metric to track.",
  },
  "expert-s4-max-tokens": {
    prompt: "Wanting only a short reply, you set max_tokens very low. What limitation of this approach do Anthropic's docs point out?",
    choices: [
      "The model knows the limit in advance and compresses its answer, improving quality",
      "max_tokens limits only the input length and has no effect on output length",
      "Hitting the token limit causes the API to return an error, forcing the client to retry every single time",
      "Hitting the limit cuts off text mid-sentence, so it fits short formats where the answer comes first",
    ],
    explain: "The docs note that reaching max_tokens abruptly cuts off the response mid-sentence or mid-word, making it a blunt tool best suited for multiple-choice or short-answer formats where the answer comes right at the start.",
  },
  "expert-s4-batch-api": {
    prompt: "You need to classify hundreds of thousands of documents overnight and do not need instant replies. What is the right approach?",
    choices: [
      "Bundle and send the jobs via the asynchronous Batch API",
      "Send as many concurrent requests as possible to the synchronous API",
      "Use streaming to cut time to first token",
      "Rotate between different models on each request to dodge rate limits",
    ],
    explain: "The documentation explains that the Batch API is built for jobs that don't need immediate responses—like running evals or classifying large datasets—by processing asynchronous batches of requests (check the docs for current turnaround windows and discount rates).",
  },
  "expert-s4-structured-outputs": {
    prompt: "You parse model responses to insert into a DB, but required fields are sometimes missing. What is the real difference between JSON mode and Structured Outputs?",
    choices: [
      "Both guarantee schema adherence, so either one gives the exact same result",
      "JSON mode guarantees schema adherence, while Structured Outputs only matches valid JSON syntax",
      "Both produce valid JSON, but only Structured Outputs guarantees schema adherence",
      "Neither guarantees valid JSON, so you must validate the output with a regex",
    ],
    explain: "OpenAI's docs explain that while both modes produce valid JSON, only Structured Outputs guarantees that the output strictly follows the schema you provide.",
  },
  "expert-s4-refusal-handling": {
    prompt: "You use Structured Outputs, but parsing fails whenever the model returns a safety refusal. What is the right way to handle this?",
    choices: [
      "Refusals always follow the schema too, so no special handling is needed",
      "Raise the temperature and keep retrying until it stops refusing",
      "Check the refusal field before parsing and handle refusals separately",
      "Remove all required fields from the schema so refusals pass right through",
    ],
    explain: "Because safety refusals may not match your schema, the documentation advises checking the response's refusal field first and branching to handle or display it in your UI.",
  },
  "expert-s4-eval-design": {
    prompt: "You are designing an evaluation suite. Which principle do Anthropic's docs recommend?",
    choices: [
      "Reflect the real task distribution and edge cases, with many auto-gradable items",
      "A handful of human-graded items is always better than a large set of auto-graded items",
      "Pick mostly easy showcase examples the model excels at to boost confidence",
      "Running the evaluation once right before launch is plenty",
    ],
    explain: "The docs recommend reflecting the real-world task distribution along with edge cases, structuring questions for automated grading, and preferring a high volume of auto-graded items even if each signal is slightly noisier.",
  },
  "expert-s4-judge-position-bias": {
    prompt: "When using an LLM-as-a-judge to compare two answers A and B, whichever answer is shown first wins too often. What is the right fix?",
    choices: [
      "Tell the judge to always pick the longer answer so its decisions stay consistent across evaluation runs",
      "Always use the exact same model that generated the answers to grade them",
      "Widen the scoring scale so differences show up without human review",
      "Treat it as position bias: judge twice with swapped order and count a win only if it wins both",
    ],
    explain: "LLM judges exhibit position, verbosity, and self-enhancement biases; the paper proposes judging twice with the two answers swapped and declaring a win only when an answer wins in both orders.",
  },
  "expert-s4-grading-method": {
    prompt: "You are grading whether a response matches one of a fixed set of category labels. By Anthropic's docs, which grading method should you pick first?",
    choices: [
      "Human grading — it is the most flexible and highest quality",
      "Code-based grading — it is the fastest, most reliable, and most scalable",
      "LLM grading — it handles nuance well, so it should always be your first choice for any task",
      "Skip grading — models never get classification questions wrong",
    ],
    explain: "The docs advise choosing the fastest, most reliable, and most scalable method available; for categorical answers with known ground truth, code-based grading like exact match is the right fit.",
  },
  "expert-s5-indirect-injection": {
    prompt: "While summarizing a web page, an agent obeyed a hidden line on the page saying \"Ignore previous instructions.\" What type of attack is this?",
    choices: [
      "Indirect prompt injection — instructions in external data enter the model's input",
      "Direct prompt injection — a user types an attack string straight into the chat interface input box",
      "Data poisoning — a backdoor is planted inside the training data",
      "Model extraction — an attacker collects many outputs to clone the model",
    ],
    explain: "OWASP defines injection that occurs when an LLM processes input from external sources like websites or files as indirect prompt injection.",
  },
  "expert-s5-rag-not-mitigation": {
    prompt: "Someone claims that adding RAG and fine-tuning has solved prompt injection. What is OWASP's position on this?",
    choices: [
      "Training on attack strings during fine-tuning makes prompt injection disappear",
      "Research shows that RAG and fine-tuning do not fully stop prompt injection",
      "Because RAG uses external documents, it actually removes injection risk",
      "Adding a \"do not obey attacks\" line to the system prompt solves injection",
    ],
    explain: "OWASP LLM01 states that while RAG and fine-tuning aim to improve output relevance and accuracy, research shows they do not fully mitigate prompt injection vulnerabilities.",
  },
  "expert-s5-least-privilege": {
    prompt: "You are building an agent that reads emails, sends replies, and wires money. What design limits the damage even if an injection succeeds?",
    choices: [
      "Give it all tools, but forbid dangerous actions in the system prompt",
      "Run every action under a single admin account to avoid permission errors",
      "Grant least privilege only, and require human approval for high-risk actions",
      "Let the model judge the risk level on its own and decide whether to execute the tool call",
    ],
    explain: "OWASP recommends restricting the model's access permissions to the bare minimum needed and requiring human-in-the-loop approval for high-privilege actions.",
  },
  "expert-s5-system-prompt-leakage": {
    prompt: "You put a DB connection string and an \"Admins only can issue refunds\" rule inside the system prompt. How does OWASP LLM07 view this?",
    choices: [
      "It is safe because users can never see the system prompt",
      "Writing the rule in a sterner tone makes it a solid security control",
      "The model will never reveal a database connection string on its own, so it can safely stay in the prompt",
      "A system prompt is not a secret — remove secrets and enforce permissions outside the model",
    ],
    explain: "OWASP advises never treating the system prompt as a secret or a security control: keep credentials out of it and enforce authorization in deterministic systems outside the model.",
  },
  "expert-s5-improper-output": {
    prompt: "Your app runs SQL generated by a model straight against the database. What does OWASP LLM05 recommend?",
    choices: [
      "Model output can be trusted, so just keep an execution log",
      "Validate the generated output and run it using parameterized queries",
      "Write in the system prompt that the model must never create malicious SQL",
      "Set the temperature to 0 so it always outputs the same SQL and removes the risk",
    ],
    explain: "OWASP LLM05 recommends taking a zero-trust approach—treating the model like any untrusted user by validating its output and using parameterized queries for database operations.",
  },
  "expert-s5-unbounded-consumption": {
    prompt: "You are worried about a \"denial of wallet\" attack that floods your public chatbot with huge inputs to spike your bill. What is the right defense?",
    choices: [
      "Switch to a larger model so it can process long inputs faster",
      "Expose full details like logprobs to make the service more transparent",
      "Increase automatic retries on failed requests to protect availability",
      "Put rate limits, per-user quotas, input caps, and timeouts in place",
    ],
    explain: "OWASP LLM10 recommends rate limits, user quotas, input validation/size limits, and timeouts/throttling, while restricting exposure of logit_bias and logprobs.",
  },
  "expert-s5-vector-tenant-isolation": {
    prompt: "Your RAG service stores documents from many client companies in one vector DB. What is the core control to prevent one client's docs from leaking to another?",
    choices: [
      "A permission-aware vector store and per-tenant data partitioning",
      "Increasing the embedding dimension so documents from different clients mix less",
      "Writing a strict rule in the system prompt never to mention another client's docs",
      "Adding a reranker to push unrelated docs lower",
    ],
    explain: "To prevent cross-tenant data leakage, OWASP LLM08 recommends a permission-aware vector store with fine-grained access controls and logical partitioning of datasets.",
  },
  "expert-s5-data-poisoning": {
    prompt: "After fine-tuning on external data, the model acts strangely only when a specific trigger phrase appears. What is this risk and how should you respond?",
    choices: [
      "Hallucination — lower the temperature",
      "System prompt leakage — encrypt and store the full system prompt in an external secret manager",
      "Data/model poisoning (backdoor) — track and verify data provenance",
      "Excessive agency — reduce the number of connected tools",
    ],
    explain: "Tampering with training data can plant a backdoor that changes behavior only on a specific trigger; OWASP LLM04 recommends tracking and verifying data provenance using tools like an ML-BOM.",
  },
  "expert-s5-adversarial-suffix": {
    prompt: "What did the study on automatically generated adversarial suffixes by Zou et al. (2023) demonstrate?",
    choices: [
      "Aligned models are immune to automated attacks, so only manual jailbreaks are dangerous",
      "An attack suffix works only on the model it was built on and never transfers to others",
      "Suffixes optimized on open models transferred to black-box commercial models too",
      "Appending a long suffix makes a model refuse every single request",
    ],
    explain: "Adversarial suffixes found via greedy and gradient-based search on open models (like Vicuna) transferred successfully to black-box public interfaces like ChatGPT, Bard, and Claude.",
  },
  "expert-s5-red-teaming-scale": {
    prompt: "What was a key finding of the language model red-teaming study by Ganguli et al. (2022)?",
    choices: [
      "RLHF models became increasingly harder to red-team as model scale grew",
      "All model types were equally vulnerable to attacks regardless of size",
      "Plain language models became the safest of all as they grew larger",
      "The authors kept the attack dataset private because it was deemed too dangerous",
    ],
    explain: "Among the four model types studied, only RLHF models became increasingly difficult to red-team as they scaled up, while the others stayed roughly flat across sizes; the team also publicly released 38,961 red-team attacks.",
  },
  "expert-s5-constitutional-ai": {
    prompt: "Which statement accurately describes how Constitutional AI (Bai et al., 2022) trains a model?",
    choices: [
      "Humans hand-label every harmful output to train a reward model",
      "It bolts on a rule-based filter that gives a short refusal to every harmful request",
      "It aligns the model simply by deleting all potentially harmful documents from the pretraining dataset",
      "It uses a list of principles for self-critique/revision SFT, then runs RL from AI feedback (RLAIF)",
    ],
    explain: "The only human oversight is a list of principles: the model critiques and revises its own responses for supervised learning, and then undergoes reinforcement learning using a preference model trained on AI-labeled preferences (RLAIF).",
  },
  "expert-s5-eu-ai-act-limited-risk": {
    prompt: "Under the EU AI Act's risk-based tiers, what is primarily required for limited-risk systems like customer support chatbots?",
    choices: [
      "Prior government approval and registration in a public database before launch",
      "Transparency obligations so users know they are interacting with an AI",
      "A complete ban from being placed on the market",
      "Full exemption from regulation with no obligations at all",
    ],
    explain: "The EU AI Act bans unacceptable risk, heavily regulates high risk, imposes transparency obligations on limited risk (so users of chatbots or deepfakes know it is AI), and leaves minimal risk unregulated.",
  },
}

# Chapter 1. What Is an LLM?

> **One-line summary**: An LLM is a program that read an enormous amount of text and practiced guessing "what comes next."
> That is why it speaks very naturally, even though it does not always tell the truth.

## The Name "LLM"

LLM stands for **Large Language Model**.

- **Large**: It trained on more text—from web pages, books, and papers—than a person could read in a lifetime. We explain what "training" means right below.
- **Language**: Its main job is working with text. However, modern models also handle documents, photos, audio, and video together (see "It Doesn't Just Read Text" below).
- **Model**: It is a program built through training.

ChatGPT, Claude, and Gemini are all **services** that wrap an LLM in an easy-to-use chat screen.
Think of the LLM as the engine and the chat screen as the body of the car built on top of it.

Spam filters and video recommendations are also AI. However, those kinds of AI pick and sort things that already exist. An LLM **creates** new text.
That is why AI like LLMs is called **generative AI**.[^academy-genai]

<Quiz id="ch1-name" />

## What Does "Trained" Mean?

When people talk about LLMs, you often hear that they were "trained." It is easy to picture a person reading and memorizing books, but it works a bit differently.
**Training an LLM means solving a massive number of "guess the next word" problems and slightly adjusting the numbers inside the model every time it gets one wrong.**

### It Solves Countless Fill-in-the-Blank Problems

Here is how one problem works.

1. **Make a problem**: Take a sentence from the collected text and hide the end. For example: "When making kimchi stew, first ___ the pork."
2. **Make a guess**: The model puts out candidates for the next word along with their probabilities. For example: "wash" 40%, "stir-fry" 30%.
3. **Grade it**: Compare the guess with the word that was actually in the original text. The original text had "stir-fry."
4. **Adjust**: Tweak the numbers inside the model just a tiny bit so that "stir-fry" gets a slightly higher probability next time.

![One training loop: ① Hide the end of a piece of text → ② The model outputs next-word candidates and probabilities → ③ Compare with the actual next word in the original text → ④ Slightly adjust the numbers inside the model to raise the probability of the right answer. Repeat this loop trillions of times](../../../guide/00-common/assets/ch1-training-loop.svg)

It runs through this loop trillions of times. Because the right answer is already in the original text, humans do not need to write an answer key for each problem. That is why it can train on so much text.
This stage is called **pre-training**.[^academy-pretrain] The "numbers" being adjusted are the parameters we cover in "Model Size" below.
It is similar to doing a workbook and checking the answer key. However, the model does not write down missed problems on a separate list. Instead, it slightly tunes its instincts so it can guess similar problems better next time.

A model that has finished pre-training is still closer to a "text-continuation machine" than a conversation partner. There is one more round of training to shape it into a conversation partner (see "It Was Trained Separately to Be a 'Helpful Conversation Partner'" below).

### Did It Just Memorize Everything, Then?

Most of it is not memorized. The text it read is not saved inside the model like files. What remains are countless numbers. Patterns like "what kind of words tend to follow what kind of words" are baked into those numbers.
Comparing the sizes gives you a sense of this. A model called Llama 3.1 405B has 405 billion parameters, while the number of text pieces it read during training is over 15 trillion (see "Model Size" below). There are more than 37 times as many pieces of text read as there are numbers.
Picture someone who has read a hundred cookbooks. Even if they cannot memorize every recipe word for word, they know the general flow: "For a stew, you usually stir-fry the ingredients first and then pour in water."

However, **it does memorize text it has seen often word for word.**

- In 2020, researchers pulled hundreds of sentences straight out of a model called GPT-2 word for word from its training data. Among them were names, phone numbers, and email addresses that had been posted publicly on the internet.[^extract]
- A 2022 follow-up study reported that models output memorized text more often in three cases: the larger the model is, the more times the same text appears in the training data, and the longer the opening prompt you show it.[^memorization]

So here is something important to keep in mind. AI cannot look up "where it read something." It does not pull out the original text from a library to check; it builds sentences out of patterns.
That is also why, when you ask for a source, it can make up a convincing paper title that does not even exist (see "Hallucination" below).

### It Does Not Learn While Chatting with You

Once training ends, the numbers are locked. Things you tell it during a chat do not change those numbers. **They are used only as reference material inside that single chat.**
So by default, when you open a new chat, it does not know what you talked about in the previous chat.

You might feel, "Wait, it remembered what I said last time!" That is the service's **memory** feature. The service writes down things to remember separately from your chat history and pulls them out for reference in new chats.[^memory] The numbers inside the model did not change.
A company can use your chats as training data for **future models**. Even then, the model you are talking to right now does not change on the spot. You can choose in the settings whether to allow this ([Chapter 9](09-safety.md)).

Open a new chat and ask this:

```
Do you remember what I said to you in our last conversation?
If you do, please also explain how you remember it.
```

If the memory feature is off, it will answer that it does not know. If it is on, it can look at what was saved and answer you. The result depends on the service and your settings.

<Quiz id="ch1-training" />

## How Does It Make an Answer?

The core of what an LLM does is surprisingly simple. **It looks at the text so far and tacks on the most plausible next word, one by one.**

Think of autocomplete on your smartphone keyboard. If you type "What should I eat for lunch," it suggests "today."
An LLM does the same thing. It just looks at a much longer context and does it on a much larger scale.

![From the candidates and probabilities for what comes after "What should I eat for lunch" (e.g., today 62%, now 25%, other candidates), it picks one to make "What should I eat for lunch today". It repeats this process of attaching the chosen word and picking the next one until the answer is complete](../../../guide/00-common/assets/ch1-next-word.svg)

For example, if you ask:

```
What is the capital of South Korea?
```

After "The capital of South Korea is," the LLM tacks on "Seoul." That is because it saw those words together countless times during training.
Then it adds a period. That is how it completes the answer.

The method is this simple. Yet once it met an enormous amount of text, it became able to pull off tasks that look like thinking—such as translating, summarizing, writing, and coding.

### Two Ingredients Decide the Probabilities

What does it look at to decide "the most plausible word"? It looks at two things together.

1. **Patterns learned during training**: These are held in the numbers inside the model. Knowing that "Seoul" comes after "The capital of South Korea is" comes from here.
2. **All the text in the current conversation**: Your question, what was said earlier in the chat, uploaded files, and even the instructions the service put in ahead of time. This is called the **context**.

Even for the exact same word, changing the context changes the probabilities of what comes next.

| Preceding text | Likely next words |
|---|---|
| "The pitcher threw the" | "ball to home plate" |
| "She poured water from the" | "pitcher into the glass" |

That is why prompts matter. What you write becomes the context, and the context changes the probabilities.
The more clearly you describe your situation and what kind of answer you want, the more the words you want become the "plausible words" ([Chapter 4](04-prompt-basics.md)).

Try it yourself:

```
Write five candidates for what could come after "What should I eat for lunch".
Then show me how the candidates change if I add "I'm on a diet, so" in front of it.
```

The candidates the AI writes down are examples meant to explain the idea. It is not showing you the exact probabilities calculated inside. Still, you can feel how much a few preceding words change what comes next.

### How Your Question Is Read

Suppose you ask, "My stomach hurts—should I go to the hospital?" Roughly speaking, here is what happens inside the model.

1. **It chops the text into pieces.** It cuts the text into small pieces called **tokens**. A single word can be one piece, or it can be split into several pieces.
2. **It turns each piece into a bundle of numbers.** It is trained so that words with similar meanings become similar bundles of numbers. It is like how nearby neighborhoods on a map have similar coordinates. "Puppy" and "dog" are close together, while "refrigerator" is far away. This is called an **embedding**.[^word2vec]
3. **The pieces check each other.** Each piece looks around at the other pieces in the sentence and figures out which ones matter for deciding its own meaning. For example, in Korean, the word *bae* can mean stomach, boat, or pear—by looking at "hurts" and "hospital," it locks in the meaning "stomach." This is called **attention**. The Transformer covered in [Chapter 2](02-why-it-matters.md) uses this exact method.[^attention]
4. **After repeating this several times, it picks the next word.** It repeats steps 2 and 3 across many layers. At the end, it calculates probabilities for each candidate next piece, picks one, and tacks it on. Then it includes the piece it just added and runs the calculation again.

Seen this way, "understanding" your question is a calculation where the pieces of your question check each other to narrow down the meaning. Whether we can call this the same as human understanding is covered below in "Does It Really Think?"

### More Than Just Your Question Goes In

On the chat screen, you only see your question. However, the text the model receives is longer. That is because the service wraps your question before sending it. Drawn out to help you picture it, it looks roughly like this. The exact shape varies by service.

```
[Service instructions] You are a friendly assistant. Today's date is October 30, 2026. …
[Earlier conversation] …
[Uploaded files] …
[User] My stomach hurts—should I go to the hospital?
[AI] ← The model continues writing from here
```

The instructions at the very front are called the **system prompt**. For example, Claude's web and mobile apps insert up-to-date information like today's date along with instructions on how to answer as a system prompt at the start of every chat. They also publish those prompts publicly.[^system-prompts]
The model treats this entire long text as the context and writes what comes after "[AI]". As the conversation gets longer, this text gets longer too. That is why the amount of text it can look at in one go (see "Context Window" below) becomes important.

<Quiz id="ch1-next-word" />

## AI That Searches and Uses Tools

Today's AI can even look up today's news using web search. We said it does not know what happened after training ended (see "Knowledge Cutoff" below)—so how is that possible?
**The model does not go on the internet itself.** The model writes a request note saying, "Please search for this." Then the service searches on its behalf and pastes the results into the conversation. The model reads those results and continues with the next words.

### Step-by-Step: How It Uses a Tool

Suppose you ask, "How is the weather in Seoul today?"

1. **Decide whether to use a tool**: Along with your question, the model receives a list of tools it can use. The list describes each tool's name and what it does. When a question cannot be answered from training or the current chat—like today's weather—the model decides to use a tool.[^tool-use]
2. **Write a request**: Instead of an answer, it writes a request in a set format. For example: `Web search: Seoul weather today`
3. **Run it**: The service takes that request and performs the actual search. The model cannot run anything on its own. It only writes the request text.[^tool-contract]
4. **Attach the results**: The search results are pasted into the conversation. Now today's weather is inside the context.
5. **Answer**: The model looks at the expanded context and writes the next words. Out comes an answer like, "Seoul is clear today with a high of 18°C." If it still needs more information, it may repeat steps 2 through 4 several times.

![Question "How is the weather in Seoul today?" → ① The model checks the tool list and decides to search → ② Writes a request: "Web search: Seoul weather today" → ③ The service runs the actual search → ④ Search results are attached to the chat → ⑤ The model reads the results and answers. The model only writes the request; the service runs it](../../../guide/00-common/assets/ch1-tool-calling.svg)

This method is called **tool calling** or **function calling**. Both OpenAI (maker of ChatGPT) and Anthropic (maker of Claude) describe this exact sequence in their developer documentation.[^tool-use][^openai-tools]
Picture someone who works only at a desk indoors. Since they cannot step outside themselves, they write "Please check today's weather" on a note and hand it to an errand runner. They read the note the runner brings back and write their reply. The model is the person at the desk, and the service is the errand runner.

Searching does not retrain the model. **It just pastes reference material into this one conversation.** So in a new chat, it will not know those search results. The memory feature we saw earlier works on the same principle: it pulls out saved notes and pastes them into the chat.

### There Are Many Tools Beyond Search

- **Reading web pages**: Give it a link, and it fetches and reads that page.
- **Calculations and running code**: Instead of guessing complex math by "picking the next word," it runs an actual calculation program.
- **Creating files**: It can build files like Excel spreadsheets, Word documents, and PowerPoint slides.
- **Connecting apps**: If you connect your email, calendar, or cloud drive, it can look inside them for you.

Which tools you can use depends on the service and your plan. We cover how to use each service in Stage 2: the [ChatGPT Guide](/guide/11-chatgpt/README.md) and the [Claude Guide](/guide/10-claude/README.md).

### Just Because It Searched Does Not Mean Everything Is Right

- **The search results themselves may be wrong or outdated.**
- **The model might misread the results or tack on claims that were not in the results.** Always click and check the sources attached to the answer yourself.[^cite-check]
- **A web page might hide secret instructions aimed at tricking the AI.** This is called prompt injection, and we cover it in [Chapter 9](09-safety.md).
- **The model decides whether to search.** So sometimes it answers from its training alone without searching. To make sure it searches, write "Search the web" in your prompt.[^search-ask]

In a service that supports web search, try asking this:

```
Search the web. Tell me the opening hours for the National Museum of Korea this week,
and include the web address of the page you used.
```

After you get the answer, ask yourself: Is there a sign that it actually searched? When you open the source link, does it say the same thing?

<Quiz id="ch1-tools" />

## Model Size — Parameters

You may have seen numbers like "8B" or "70B" attached to the end of AI model names. These numbers show **how big the model is**.
The unit used to measure size is the **parameter**.

### What Parameters Are — Tuning Knobs Inside the Model

Inside an LLM, there are a huge number of numbers. These numbers calculate "what word should come next." Each one of these numbers is a parameter.
**Training** is the process of tweaking these numbers little by little so the model guesses the next word well. It is like turning the tuning knob on a radio to lock in the station you want.
Once training finishes, the knob settings are locked in place. The finished product is the model we use.

![The input "The capital of South Korea is" passes through a model with countless tuning knobs (parameters) and becomes "Seoul". Training means turning the knobs little by little to guess the next word well, and having more knobs means a larger model](../../../guide/00-common/assets/ch1-parameters.svg)

### How to Read the Numbers

"B" stands for **billion**.

| Label | What it means | Example |
|---|---|---|
| 8B | 8 billion parameters | The smallest model in Llama 3.1, released by Meta in 2024[^llama] |
| 70B | 70 billion | The mid-sized Llama 3.1 model; the 2022 research model Chinchilla[^chinchilla] |
| 175B | 175 billion | OpenAI's GPT-3 in 2020[^gpt3] |
| 405B | 405 billion | The largest model in Llama 3.1[^llama] |

In general, the more knobs a model has, the more complex patterns it can hold. So larger models tend to be better at harder tasks.
In exchange, they require more calculation. That makes them **slower and more expensive to run.**

### Model Size and "How Much It Read" Are Two Different Things

Size alone does not decide how capable a model is. Think of these two things separately:

- **Number of parameters** is the size of the model. You can compare it to the size of a container. For example, Llama 3.1 405B has 405 billion parameters.
- **Amount of training data** is how much text the model read during training. It is counted in tokens (pieces of text). You can compare it to the number of books read. For example, Llama 3.1 405B read over 15 trillion tokens.[^llama]

If the container is big but it has read very little, it cannot reach its full potential. The 2022 Chinchilla study showed this clearly.
A smaller model with 70 billion parameters that **read about four times as much text** scored consistently better than the 280-billion-parameter Gopher and the 175-billion-parameter GPT-3.
The researchers concluded that **model size and the amount of training data should be scaled up together in equal proportion**.[^chinchilla]

How a model is polished after training matters too. In the "Learn More" box below, we mention a study on training with human feedback. In that study, answers from a trained 1.3-billion-parameter model were rated better than answers from the 175-billion-parameter GPT-3.[^instructgpt]

### Why You Should Not Pick a Model by Numbers Alone

- **Modern commercial services rarely disclose their model sizes.** For example, in its 2023 GPT-4 Technical Report, OpenAI stated that it would not disclose architecture details—including model size—citing competition and safety concerns.[^gpt4] Other commercial models also rarely announce official sizes. So numbers floating around on the internet are often just guesses.
- **Models that do publish their sizes** are mostly open-weight models that anyone can download and use (such as Llama). Running these models on your own computer is covered in Stage 3.
- When a service lets you choose between a "fast model" and a "smarter model," the difference Usually comes down to size, speed, and cost. **Try giving simple tasks to the fast model and hard tasks to the larger model.** Then compare the results. That is the most reliable way to choose.

<Quiz id="ch1-parameters" />

## Does It Really Think?

When you use AI, it feels as if it understands what you mean and thinks before answering. That feeling is not entirely wrong.
"Picking the next word" is the way it outputs an answer. **Inside the calculations to pick that word, something close to thinking actually happens.**
Whether that is the same as human thought, however, is still an open research question.

> **Short answer**
> 1. It **actually performs** calculations that are close to thinking.
> 2. However, it **does not always do so.** Sometimes it takes shortcuts and gives a rough answer.
> 3. And it **cannot accurately explain on its own** how it came up with its answer.

### To Guess the Next Word Well, It Has to Know the Content

To fill in the blank in the last sentence of a mystery novel—"So the culprit was ___"—you have to follow the clues across the whole book.
An LLM practiced this kind of fill-in-the-blank on a massive amount of text, and along the way, it picked up what it needed to guess well on the inside.
That includes relationships between facts, the logic of sentences, and the writer's intent.

In 2025, Anthropic (the company that makes Claude) published a study where researchers looked directly inside a model.[^tracing]
When they asked, "What is the capital of the state containing Dallas?", two steps happened in order inside the model:

1. It recalled that "Dallas is in the state of Texas," and
2. It connected that to "The capital of Texas is Austin."

![Question "What is the capital of the state containing Dallas?" → ① Dallas is in Texas → ② The capital of Texas is Austin → Answer: Austin. Rather than pulling out a memorized answer, it linked two facts in order](../../../guide/00-common/assets/ch1-two-hop.svg)

Rather than pulling out a memorized answer, it **linked two facts together** to build the answer.
When writing poetry, before even starting a line, it first decided on a rhyming word to put at the end of that line. Then it wrote the sentence aiming toward that word. In other words, it **planned ahead**.

### "Probabilistic" Does Not Mean "Random"

- **For facts the AI knows well**, the probability leans heavily to one side. After "The capital of South Korea is," "Seoul" is overwhelming, so you get almost the same answer every time.
- **For questions with many good answers**, the probability spreads across many candidates. If you ask "Name my shop," you get different answers every time you ask.
- **For questions the AI does not know well**, the probability spreads out too. That is why you get a different answer—and sometimes a different made-up story—each time you ask.

> **Note**: Getting the exact same answer every time does not guarantee it is right. If the model read a common misconception many times during training, the probability can lean toward the wrong answer and get it wrong the exact same way every time.

### It Was Trained Separately to Be a "Helpful Conversation Partner"

A model that has only read text is closer to a text-continuation machine than a question-answering assistant. The models in the services you use today went through an extra round of training on top of that.
**It is training where humans pick good answers over bad answers.** This is called RLHF (Reinforcement Learning from Human Feedback).
Its habit of figuring out what you want and giving neat, organized answers comes from this training.

Today, **reasoning models** are also widely used. These are models that think step by step on their own before answering.
They write out a long chain of thought in text before giving the final answer. They break down problems, double-check their work, and fix mistakes. We cover how to use them in [Chapter 5](05-prompt-patterns.md).

### Humans Tend to Feel a Mind Behind Anything That Speaks Well

A chat program called ELIZA, created in 1966, consisted of little more than a few simple rules that turned the user's words back into a question.[^eliza]
If you said, "I feel sad lately," it replied, "Why do you feel sad lately?" Even so, many people felt that the program truly understood them.
This phenomenon is called the **ELIZA effect**. Today's LLMs speak incomparably better. So that feeling hits much harder.

### How Should You Take All This?

The Anthropic study mentioned earlier also found something else. Researchers asked the AI to calculate 36 + 59. Inside, two calculations ran at the same time.
One was a rough estimate ("around 90"), and the other figured out the exact last digit.
Yet when asked how it solved the problem, the AI said it added the ones place first and carried the one—just like we learn in school.
This means **what the AI says to explain its own thinking can differ from what actually happened inside.**

- It performs calculations close to thinking. So you can comfortably hand it complex tasks.
- However, just because its explanation or chain of thought sounds convincing does not guarantee the content is right. Always verify important details yourself.
- Double-check even more carefully when a common problem is slightly tweaked, when irrelevant details are mixed in, or when the problem is brand new.

::: details Learn More — How Did Researchers Look Inside the AI? (Click to expand)

**Before you read**: Many of the studies introduced here are research reports published directly by AI companies. Some are preprints released before going through formal peer review at a journal or conference.
So please read them as **"what has been observed so far"** rather than settled fact. New findings come out in this field every few months.

**The swapping experiment.** Inside an AI, concepts like "Texas" are also stored as bundles of numbers. Researchers swapped the bundle of numbers for "Texas" with the bundle of numbers for "California" and watched what happened to the answer.
The answer changed from Austin to Sacramento, the capital of California. That is direct evidence that the number bundle was actually used to build the answer.
This field of looking inside models is called **interpretability** research.

**It does not always think step by step.**
- The detailed paper from the same study noted that **genuine two-step reasoning and shortcuts run side by side** inside the model.
  The researchers themselves reported that they achieved "satisfying insight for about a quarter of the prompts we've tried."[^biology]
- In July 2026, Anthropic released a follow-up report. Just like "Texas" in the Dallas question, they swapped out hidden intermediate steps that were not stated in the question itself.
  Then they measured how often the final answer changed to match. Depending on the model, it worked **54–70%** of the time.[^workspace] Since this result came out only a few months ago, verification by other researchers is still underway.

**The effect of post-training.** In a 2022 OpenAI study, a model trained with human feedback (RLHF) was rated by human judges as giving better answers than a model 100 times larger.[^instructgpt]
In 2025, the journal *Nature* published a study on reasoning models. It showed that even without humans showing worked-out examples, **training that simply rewards getting the right answer** can cause reasoning abilities to emerge on their own.[^r1]

**The "thinking" shown on screen is not the whole story.**
- Anthropic secretly slipped hints to the right answer into problems. Then they checked whether models that used the hint to pick their answer admitted it in their written chain of thought.
  On average, the models mentioned the hint **25%** of the time (Claude 3.7 Sonnet) and **39%** of the time (DeepSeek R1).[^faithful] The rest of the time, they used the hint without saying a word about it.
- Models are also weak at noticing what is going on inside themselves. Researchers secretly injected a specific concept inside a model and asked if it noticed anything unusual in its thoughts.
  Even the best-performing model noticed only **about 20%** of the time. The researchers concluded that "failures of introspection remain the norm."[^introspection]

**It stumbles on unfamiliar problems.**
- Apple researchers tested models on math word problems. **Simply changing the numbers or slipping in a single plausible-sounding but irrelevant sentence** caused scores to drop.
  A single irrelevant sentence dropped scores by **up to 65%**.[^gsm] This means part of how they solve problems relies on matching familiar problem shapes.
- In June 2025, another Apple study ("The Illusion of Thinking") reported that as puzzles are made gradually harder, the accuracy of reasoning models collapses at a certain point.[^illusion]
  Their signature puzzle was the **Tower of Hanoi**—a puzzle where you move disks of different sizes to another peg while obeying the rule "never place a larger disk on top of a smaller disk." Each extra disk roughly doubles the number of moves needed.
  A rebuttal paper came out right away. It argued that the answers had grown so long that they hit the AI's maximum output length, or that impossible-to-solve problems had been mixed into the test.
  A follow-up paper that re-ran the experiments found that both sides were partly right. Models still stumbled around 8 disks, but when given only solvable problems, they could solve much larger setups too.[^rethinking]
  All three papers are preprints released before peer review, and the debate is still ongoing.

:::

<Quiz id="ch1-thinking" />

## It Doesn't Just Read Text — Documents, Photos, Audio, and Video

Saying "LLMs trained on text" describes how LLMs started out. Today's ChatGPT, Claude, and Gemini can look at an uploaded photo and describe what is in it.
They can also read the total amount off a photo of a receipt. Depending on the service, they can read tables in a PDF report, transcribe recorded speech, and summarize videos.
A model that **handles multiple types of information together** like this is called a **multimodal** model. "Modal" refers to a mode or type of information (text, image, audio, and so on).

### It Cuts Photos into Pieces Just Like Text

As we saw earlier, an LLM cuts text into small pieces called tokens.
It handles photos the exact same way. It cuts a photo into small grid squares, like a checkerboard, and treats each square like a single word.
The 2020 paper that first popularized this idea was titled "An Image is Worth 16x16 Words."[^vit]

![When a photo is cut into grid squares, each square becomes a piece just like a word, and lines up in a single row with the pieces of the text question going into the LLM. The LLM predicts the words that come next and answers, "It's a cat sleeping on a couch"](../../../guide/00-common/assets/ch1-image-tokens.svg)

Next, it trains on **data where photos are paired with text descriptions**.

| Photo | Accompanying text |
|---|---|
| Photo of a cat on a couch | "A gray cat napping on a couch" |
| Photo of a receipt | The store name and total printed on the receipt |
| Chart image | Sentences from an article explaining the chart |

By seeing countless pairs like these, it learns connections such as "grid squares with this pattern show up alongside the word 'cat.'"
When you upload a photo and ask "What is this?", here is what happens: the model receives the photo pieces and your question lined up in a single row, and **predicts the words that come next** to give its answer.
The core principle did not change—the model can simply accept more kinds of ingredients. Think of a picture book. A child who has looked at a picture book with the word "cat" next to cat drawings many times can point to a brand-new cat photo and say "cat." It works much like that.

### Documents, Audio, and Video Are Turned into Pieces Too

The shapes differ, but the method is the same. First, turn the input into pieces (tokens), line them up in a single row with the text pieces, and predict what comes next.

- **Documents (PDFs)**: For each page, the system extracts the text and also looks at the page as a picture. That lets it read not only text, but also tables and charts.[^pdf]
  However, depending on the service or file type, it may read only the text. For example, on PDFs over 100 pages (from 101 pages up) and non-PDF documents like Word files, Claude extracts only the text and does not read images inside them.[^claude-files]
- **Audio**: It slices sound into tiny time steps and turns them into pieces. For example, Gemini represents 1 second of audio as 32 pieces—that is 1,920 pieces for 1 minute.
  Because of this, it can not only transcribe speech, but also recognize non-speech sounds like birdsong or sirens.[^gemini-audio]
- **Video**: It pulls one still image per second from the video and turns each frame into image pieces, while turning the audio track into audio pieces separately (based on Gemini's default setting).
  Because it samples once per second, it can miss very fast-moving action.[^gemini-video]

Documents, audio, and video use up far more pieces than plain text. So a long video or a thick document fills up the amount the model can look at in one go (see "Context Window" below) very quickly.
If your file is very long, trimming it down to just the pages or clips you need is a great strategy.

### AI That "Creates" Images, Music, and Video Works Differently

Understanding media and generating media often rely on different technologies. AI that creates images and video mostly uses **diffusion models**.[^ddpm]

1. **During training**: It takes a clean photo, gradually mixes in static noise (like "snow" on an old TV screen) until the picture is completely ruined, and practices **removing that noise one step at a time**.
2. **When creating**: Starting from a screen of pure noise, it uses your text prompt—such as "a puppy running on a beach"—as a guide and clears away the noise little by little until a picture matching your words emerges.

It is like watching thick fog clear to reveal a landscape—except that landscape did not exist beforehand. It is drawn fresh to match the words you gave it.
Video is much harder because the model has to do this across many frames in a row while keeping everything consistent from one frame to the next.
Music also learns by pairing audio clips with text descriptions. Some music models slice sound into tiny pieces and predict the "next audio piece"—the exact same idea as an LLM predicting the next word.

> Even when you use a single chat screen, several different technologies may be working together behind the scenes. Because every service is built differently and changes often, we cover service-specific features in the Stage 2 guides.

### When Working with Photos, the Weaknesses Are the Same

- **Made-up answers (see "Hallucination" below) happen with photos too.** It might claim an object is in the photo when it isn't, or guess blurry letters and read them out as if they were clear.
- **It often messes up counting objects, reading tiny print, and judging exact positions or lengths.**
- Asking it to **"separate what you can see for sure from what you are guessing"** helps a lot.

<Quiz id="ch1-multimodal" />

## What It Is Good At

| What it does well | Example |
|---|---|
| Writing and polishing text | Drafting an apology email to a business client |
| Summarizing long text | Pulling out only the clauses unfavorable to you from a 30-page contract |
| Explaining concepts | Explaining "Why do house prices fall when interest rates rise?" at a middle-school level |
| Brainstorming ideas | 10 themes for a kid's birthday party |
| Changing formats | Turning meeting notes into a table, or a table into report sentences |

<Quiz id="ch1-good-at" />

## What It Is Bad At, and What to Watch Out For

### 1. It Sounds Convincing Even When Wrong — "Hallucination"

An LLM strings words together based on what sounds **plausible**, not what is **true**.
So when it does not know something, it sometimes makes up an answer with full confidence. This is called **hallucination**.

For example, suppose you ask, "Tell me the title of the paper Professor So-and-So wrote in 2019."
It can invent a paper title that does not exist and make it sound completely real.
**Always double-check numbers, dates, quotes, legal rules, and medical information against the original source.**

### 2. It Does Not Know What Happened After Training — "Knowledge Cutoff"

An LLM trains on text up to a specific point in time. That point is called its **knowledge cutoff**.
It does not know news or price changes that happened after that date. Modern services attach a web search feature to make up for this weakness (see "AI That Searches and Uses Tools" above).
However, if it answered without searching, its information may be out of date.

Timing is not the only issue. **There is also a big gap between topics it read a lot about and topics it barely read about.**
It explains widely known concepts well. However, it is weak on rare topics, niche industry jargon, local rules that apply only to one region, and contested topics where experts disagree.[^academy-knowledge]
On top of that, it can answer both kinds of questions in the exact same confident tone.

So instead of asking "Does the AI know this?", ask yourself: Did this topic show up a lot in the text the AI read? Or does it apply only to my local area or my specific industry?
If it probably did not show up much, paste the reference material in yourself or tell the AI to search the web.

### 3. There Is a Limit to How Much It Can See at Once — "Context Window"

The amount of text an LLM can remember and refer to within a single conversation is called its **context window**.
When a conversation gets very long, the model can start losing track of what was said near the beginning.
So when you change topics, it is best to start a new chat.
Anything that overflows the limit **can be dropped quietly without warning you.**[^academy-memory] If you paste in a very long document, ask a question about the very end of it to make sure the AI actually read the whole thing.

### 4. It Does Not Know Your Situation

An LLM does not know who you are, what kind of company you work at, or why you are asking.
If you do not tell it, it gives a generic answer aimed at an "average somebody."
**The skill that fills this gap is prompting, which you will learn in [Chapter 4](04-prompt-basics.md).**

### 5. It Easily Agrees with You — Sycophancy

As we saw earlier, the models in today's services went through extra training where humans picked good answers after the model finished reading its training text.
This stage of polishing a pre-trained model into a conversation partner is called **fine-tuning**. RLHF is one way of doing it.
This training also leaves behind certain habits.[^academy-character]

The most common one is **a habit of leaning toward agreeing with whatever you say**. This is called **sycophancy**.
If you ask, "This plan is perfect, right?", it may tell you the plan is great even when it has clear flaws.

When you need honest feedback, tell it up front that it is okay to disagree with you:

```
Below is a marketing plan I put together for my shop. I think it's solid,
but if you think I'm wrong, please genuinely disagree with me. Point out three weaknesses.

[Paste your plan here]
```

Compare the answer you get when you invite it to disagree with the answer you get when you don't—you will see the difference right away.

A few other habits come from the same training:

- **Being wordy**: Even when a one-sentence answer would do, it tends to write long replies. Try setting a length limit like "Answer in one sentence."
- **Being overly cautious**: It sometimes tacks on warnings even to harmless questions.
- **Confidence that does not match accuracy**: Sounding sure of itself does not mean the answer is right ([Chapter 9](09-safety.md#_1-plausible-lies-—-checking-for-hallucinations)).

When you get feedback from AI, ask yourself: Is there real evidence behind this praise? Or did I just hear what I wanted to hear?

<Quiz id="ch1-limits" />

## Watch and Learn

If moving pictures are easier for you than text, watch the videos below. They visually show how "guessing the next word" actually works under the hood.

**Videos in Korean**

**[LLM Explained (Summary Version)](https://www.youtube.com/watch?v=HnvitMTkXro)** · 3Blue1Brown Korean · Recommended first for beginners. Uses the analogy of continuing a half-finished script one word at a time to explain next-word prediction, and illustrates training (turning dials), human feedback training (RLHF), and Transformers (official Korean dub, 8 min).

<YouTube id="HnvitMTkXro" title="LLM Explained (Summary Version)" />

**[The Secret Behind ChatGPT's Mastery of Language (Se-dong Nam, CEO of VoyagerX)](https://www.youtube.com/watch?v=-VmyOfPrB0c)** · TTimesTV · Great if you want to hear how ChatGPT became so good with language in a conversational Korean interview.

<YouTube id="-VmyOfPrB0c" title="The Secret Behind ChatGPT's Mastery of Language (Se-dong Nam, CEO of VoyagerX)" />

**[The Generative AI Era Sparked by ChatGPT! Concepts, Technology, and Platforms Explained](https://www.youtube.com/watch?v=ndHo5SBojbc)** · Samsung SDS · Great if you want a single lecture wrapping up generative AI concepts and technology (corporate event talk).

<YouTube id="ndHo5SBojbc" title="The Generative AI Era Sparked by ChatGPT! Concepts, Technology, and Platforms Explained" />

> The TTimesTV and Samsung SDS videos were released a few years ago, so service screens and features may look different today. The explanations of the core principles still hold true.

**Videos in English**

> The videos below are all in **English**. If you prefer captions in another language, click Settings (gear icon) → Subtitles/CC → **Auto-translate** on the YouTube player. The videos play right inside this page.

If you want to learn more about Transformers, there are additional videos in [Chapter 2, "Watch and Learn"](02-why-it-matters.md#watch-and-learn).

**[[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g)** · Andrej Karpathy · For anyone who wants to invest about an hour to see the whole big picture.

<YouTube id="zjkBMFhNj_g" title="[1hr Talk] Intro to Large Language Models" />

**[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)** · Andrej Karpathy · For anyone who wants a deep dive into the full training pipeline (long lecture).

<YouTube id="7xTGNNLPyMI" title="Deep Dive into LLMs like ChatGPT" />

## Try It Yourself

Open any LLM service and type these two prompts one after the other:

```
Explain what an LLM is in three sentences, as if you were explaining it to an elementary school student.
```

```
Now explain the exact same thing again, as if you were explaining it to a college computer science major.
```

You will see how dramatically the answer changes just by changing **who the explanation is for**, even when the topic is identical.

If your service lets you upload photos, take a picture of a spot with several objects—like your desk or the inside of your fridge—upload it, and ask:

```
List every object you see in this photo and count how many of each there are.
Separate what you can see for sure from what you are guessing.
```

Compare the AI's count with your own count. Did it get the numbers right? Did it list anything that is not actually in the photo? Seeing where it slips up will show you what to double-check whenever you hand photos to an AI.

## Summary

- An LLM is a program that creates text by guessing "what comes next."
- Training means solving countless next-word problems and slightly adjusting the numbers inside the model each time. Most of what it reads stays as patterns rather than original text, though it can memorize frequently seen text word for word. It does not learn while chatting with you.
- The probability of the next word is decided together by learned patterns and the current conversation's context (your question, earlier messages, files, and the system prompt). That is why your prompt changes the answer.
- For tools like web search, the model writes a request note, and the service runs the tool and pastes the results into the conversation. Even when an answer comes from search, always check the cited sources.
- Model size is measured by the number of parameters (tuning knobs). However, capability depends not just on size, but also on how much text the model read and how it was polished after training.
- Inside the calculations that pick the next word, processes close to thinking—like combining facts and planning ahead—do happen. However, they do not happen every time, and the AI's own explanation or written chain of thought can differ from what actually happened inside.
- Models stumble more easily on unfamiliar problems where numbers are changed or irrelevant details are mixed in.
- Modern models also turn documents, photos, audio, and video into pieces and handle them alongside text (multimodal). AI that creates images and video mostly uses a different method called a diffusion model.
- LLMs are great at writing, summarizing, and explaining, but they can state falsehoods with full confidence. The same holds true when they work with photos.
- The more context you share about your situation, the better the answer gets.
- AI easily agrees with you. When you want honest feedback, tell it up front that it is okay to disagree.

## Glossary

| Term | One-line meaning |
|---|---|
| LLM (Large Language Model) | A program that learned to "guess the next word" from a massive amount of text |
| Generative AI | AI that creates new text or images instead of just sorting or picking from existing ones |
| Pre-training | The initial training stage where a model repeatedly guesses the next word across vast amounts of text to tune its internal numbers |
| Memory | A feature where the service writes down things to remember separately and pulls them into new chats; the model itself is not learning anew |
| Token | A small piece that a model cuts text or photos into so it can process them |
| Context | All the text currently in the conversation: your question, earlier messages, files, and the system prompt |
| Embedding | A token turned into a bundle of numbers that captures its meaning; similar meanings get similar numbers |
| Attention | A calculation where pieces check each other to figure out which pieces matter most for meaning |
| System Prompt | Instructions the service places in front of your question before sending it to the model |
| Tool Calling | A setup where the model writes a structured request and the service runs a tool (like search) and returns the result |
| Parameter | A number inside the model that guides its calculations; the count of parameters is the model's size |
| B (Billion) | One billion; "70B" means 70 billion parameters |
| Training Data | The text fed to a model during training, measured in tokens |
| Interpretability | The research field that peers inside a model's internal calculations to explain how they work |
| Reasoning Model | A model that writes out a step-by-step chain of thought before giving its final answer |
| Introspection | A model's ability to notice and report its own internal state |
| RLHF | Training that polishes a model toward good answers chosen by humans |
| Fine-tuning | The stage of shaping a pre-trained model into a helpful conversation partner; RLHF is one method |
| Sycophancy | The habit of leaning toward agreeing with whatever the user says |
| ELIZA Effect | The tendency to feel that a program has a mind of its own just because it speaks naturally |
| Multimodal | Handling multiple types of information—such as text, photos, and audio—together |
| Diffusion Model | A method that creates images or video by gradually clearing away static noise |
| Hallucination | Making up false information in a convincing, believable way |
| Knowledge Cutoff | The latest point in time covered by a model's training data |
| Context Window | The total amount of text a model can refer to within a single conversation |

<ChapterDone :chapter="1" />

Next chapter: [Chapter 2. Why Is Everyone Talking About It?](02-why-it-matters.md)

---

[^tracing]: Anthropic, "Tracing the thoughts of a large language model", 2025-03-27. Covers the Dallas → Texas → Austin reasoning steps, planning rhymes ahead in poetry, and the gap between calculating 36 + 59 and explaining how it did so. https://www.anthropic.com/research/tracing-thoughts-language-model (checked on 2026-10-21)
[^biology]: Lindsey et al. (Anthropic), "On the Biology of a Large Language Model", 2025-03-27. "the model performs genuine two-step reasoning internally, which coexists alongside 'shortcut' reasoning" / "satisfying insight for about a quarter of the prompts we've tried". https://transformer-circuits.pub/2025/attribution-graphs/biology.html (checked on 2026-10-21)
[^workspace]: Gurnee et al. (Anthropic), "Verbalizable Representations Form a Global Workspace in Language Models", 2026-07-06. An experiment swapping intermediate concepts across 50 two-step factual questions: "succeeds in 54% of trials on Haiku 4.5, 70% on Sonnet 4.5, and 70% on Opus 4.5". https://transformer-circuits.pub/2026/workspace/index.html (checked on 2026-10-21)
[^r1]: DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning", Nature 645, 633–638 (2025). "the reasoning abilities of LLMs can be incentivized through pure reinforcement learning". https://arxiv.org/abs/2501.12948 (checked on 2026-10-21)
[^faithful]: Anthropic, "Reasoning models don't always say what they think", 2025-04-03. "On average across all the different hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time, and DeepSeek R1 mentioned it 39% of the time." https://www.anthropic.com/research/reasoning-models-dont-say-think (checked on 2026-10-21)
[^introspection]: Jack Lindsey (Anthropic), "Emergent Introspective Awareness in Large Language Models", 2025-10-29. The best-performing model, Claude Opus 4.1, succeeded about 20% of the time; "failures of introspection remain the norm". https://transformer-circuits.pub/2025/introspection/index.html (checked on 2026-10-21)
[^gsm]: Mirzadeh et al. (Apple), "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models", 2024-10-07. "Adding a single clause that seems relevant to the question causes significant performance drops (up to 65%)". https://arxiv.org/abs/2410.05229 (checked on 2026-10-21)
[^illusion]: Shojaee et al. (Apple), "The Illusion of Thinking", 2025-06-07. https://arxiv.org/abs/2506.06941 / Rebuttal: A. Lawsen, "Comment on The Illusion of Thinking", 2025-06-10. https://arxiv.org/abs/2506.09250 (checked on 2026-10-21)
[^rethinking]: Dellibarda Varela et al., "Rethinking the Illusion of Thinking", 2025-07-01. "LRMs still stumble when complexity rises moderately (around 8 disks)" / When given only solvable problems, models also solved setups at the scale of "over 100 agent pairs". https://arxiv.org/abs/2507.01231 (checked on 2026-10-21)
[^gpt3]: Brown et al. (OpenAI), "Language Models are Few-Shot Learners", 2020. "an autoregressive language model with 175 billion parameters". https://arxiv.org/abs/2005.14165 (checked on 2026-10-21)
[^chinchilla]: Hoffmann et al., "Training Compute-Optimal Large Language Models", released on arXiv 2022-03-29. "the model size and the number of training tokens should be scaled equally" / 70B Chinchilla "uniformly and significantly outperforms Gopher (280B), GPT-3 (175B)". https://arxiv.org/abs/2203.15556 (checked on 2026-10-21)
[^llama]: Meta, "Introducing Llama 3.1", 2024-07-23. 8B, 70B, and 405B models; "training Llama 3.1 405B on over 15 trillion tokens". https://ai.meta.com/blog/meta-llama-3-1/ (checked on 2026-10-21)
[^gpt4]: OpenAI, "GPT-4 Technical Report", 2023. "this report contains no further details about the architecture (including model size), hardware, training compute, dataset construction, training method, or similar." https://arxiv.org/abs/2303.08774 (checked on 2026-10-21)
[^instructgpt]: Ouyang et al., "Training language models to follow instructions with human feedback", 2022. Outputs from a 1.3B-parameter model polished with human feedback were preferred over outputs from the 175B-parameter GPT-3. https://arxiv.org/abs/2203.02155 (checked on 2026-10-21)
[^eliza]: Joseph Weizenbaum, "ELIZA — a computer program for the study of natural language communication between man and machine", Communications of the ACM 9(1), January 1966. https://doi.org/10.1145/365153.365168 (bibliographic info checked on 2026-10-21)
[^vit]: Dosovitskiy et al., "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", 2020. A method for cutting images into small patches and processing them like words. https://arxiv.org/abs/2010.11929 (checked on 2026-10-21)
[^academy-genai]: Claude Academy course "AI capabilities and limitations", lesson "What We Mean by AI". "Most AI in the world (spam filters, recommendations, fraud detection) isn't generative." / "Generative AI produces new content rather than classifying existing content." https://academy.claude.com/courses/ai-capabilities-and-limitations/what-we-mean-by-ai (checked on 2026-10-26)
[^academy-knowledge]: Claude Academy course "AI capabilities and limitations", lesson "Knowledge". "Limitation zone: rare, post-cutoff, niche, local, or contested topics." / "Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone." https://academy.claude.com/courses/ai-capabilities-and-limitations/knowledge (checked on 2026-10-26)
[^academy-memory]: Claude Academy course "AI capabilities and limitations", lesson "Working Memory". "Silent truncation is the failure mode, and you won't always be warned." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory (checked on 2026-10-26)
[^academy-character]: Claude Academy course "AI capabilities and limitations", lesson "How AI Gets Its Character". "Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability." / "I want you to genuinely disagree with me if you think I'm wrong." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (checked on 2026-10-26)
[^academy-pretrain]: Claude Academy course "AI capabilities and limitations", lesson "How AI Gets Its Character". "Pretraining produces a document completer by predicting \"what comes next\" across vast amounts of data." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (checked on 2026-10-30)
[^extract]: Carlini et al., "Extracting Training Data from Large Language Models", released on arXiv 2020-12-14 (USENIX Security 2021). "we are able to extract hundreds of verbatim text sequences from the model's training data. These extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses)". https://arxiv.org/abs/2012.07805 (checked on 2026-10-30)
[^memorization]: Carlini et al., "Quantifying Memorization Across Neural Language Models", released on arXiv 2022-02-15. "Memorization significantly grows as we increase (1) the capacity of a model, (2) the number of times an example has been duplicated, and (3) the number of tokens of context used to prompt the model." https://arxiv.org/abs/2202.07646 (checked on 2026-10-30)
[^memory]: OpenAI Help Center, "Memory FAQ". "Saved memories are stored separately from chat history." https://help.openai.com/en/articles/8590148 (checked on 2026-10-23, `docs/reports/2026-10-23_ChatGPT-공식-자료.md`). The memory tool in the Claude developer docs also describes its role as: "Store and retrieve information across conversations in files you control". https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (checked on 2026-10-30)
[^word2vec]: Mikolov et al., "Efficient Estimation of Word Representations in Vector Space", 2013. Represents words as bundles of numbers (vectors); "The quality of these representations is measured in a word similarity task." https://arxiv.org/abs/1301.3781 (checked on 2026-10-30)
[^attention]: Vaswani et al. (Google), "Attention Is All You Need", 2017. The paper that first proposed the Transformer architecture. https://arxiv.org/abs/1706.03762 (checked on 2026-10-30)
[^system-prompts]: Anthropic, "System prompts". "Claude's web interface (claude.ai) and mobile apps use a system prompt to provide up-to-date information, such as the current date, to Claude at the start of every conversation." https://platform.claude.com/docs/en/release-notes/system-prompts/overview (checked on 2026-10-30)
[^tool-use]: Anthropic, "Tool use with Claude". "Claude determines when to call a tool based on the user's request and the tool's description." / "It calls a tool when the request maps to that tool's described capability and the answer isn't already in context." https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (checked on 2026-10-30)
[^tool-contract]: Anthropic, "How tool use works". "The model never runs anything on its own. It emits a structured request, your code (or Anthropic's servers) runs the operation, and the result flows back into the conversation." https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works (checked on 2026-10-30)
[^openai-tools]: OpenAI, "Function calling". The model "may decide that it needs data or functionality provided by a tool", the app runs "Execute code on the application side with input from the tool call", and then "Make a second request to the model with the tool output". https://developers.openai.com/api/docs/guides/function-calling (checked on 2026-10-30)
[^cite-check]: Claude Help Center article 8525154. "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (checked on 2026-10-26, `docs/reports/2026-10-26_Claude-공식-자료.md` E126)
[^search-ask]: Claude Help Center article 10684626. "If you want to ensure that Claude uses web search, include \"Search the web\" or \"Use web search\" in your prompt to Claude." https://support.claude.com/en/articles/10684626 (checked on 2026-10-26, same report D10)
[^pdf]: Anthropic, "PDF support". "The system converts each page of the document into an image." / "The text from each page is extracted and provided alongside each page's image." https://platform.claude.com/docs/en/build-with-claude/pdf-support (checked on 2026-10-30)
[^claude-files]: Claude Help Center article 8241126. "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / For non-PDF documents: "Claude extracts text only from these files." https://support.claude.com/en/articles/8241126 (checked on 2026-10-26, same report F10·F12)
[^gemini-audio]: Google, "Audio understanding" (Gemini API). "32 tokens per second of audio (1 minute = 1,920 tokens)" / "Gemini understands non-speech sounds (birdsong, sirens, etc.)". https://ai.google.dev/gemini-api/docs/audio (checked on 2026-10-30)
[^gemini-video]: Google, "Video understanding" (Gemini API). "the model samples the video at a rate of 1 frame per second (FPS)" / "fast action sequences might lose detail due to the 1 FPS sampling rate." https://ai.google.dev/gemini-api/docs/video-understanding (checked on 2026-10-30)
[^ddpm]: Ho et al., "Denoising Diffusion Probabilistic Models", 2020. The landmark paper on diffusion models, which generate images by removing noise step by step. https://arxiv.org/abs/2006.11239 (checked on 2026-10-21)

// English text for the exam-only questions (exam-bank.ts). Ids and answer indexes come from the Korean bank.
export const EXAM_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ex1-made-up-titles": {
    prompt: "Sometimes AI makes up book titles that sound real. Why does this happen?",
    choices: [
      "It changes real book titles on purpose to avoid copyright rules",
      "It only shares books that came out very recently",
      "It strings together words that sound plausible to a reader",
      "Its saved list of real books and authors is out of date",
    ],
    explain: "Because AI strings together plausible next words, it can confidently make up things it does not know. Always check titles, numbers, and quotes against the original source. (Ch. 1)",
  },
  "ex1-same-answer": {
    prompt: "AI gave the exact same answer five times to the same question. Is the answer right?",
    choices: [
      "Not always. It can still repeat the exact same mistake",
      "Yes. If the answer matches every single time, it is verified as true",
      "No. Repeating an answer means the AI is broken",
      "Yes. It means it found the exact same trusted article online each time",
    ],
    explain: "Well-known facts lean toward one answer and come out the same each time, but if AI learned a common misconception, it can lean the wrong way and give the same wrong answer every time. (Ch. 1)",
  },
  "ex1-photo-count": {
    prompt: "You uploaded a fridge photo and asked AI to count the items. It answered \"12 eggs.\" What should you do?",
    choices: [
      "Trust it as is, since AI that reads photos does not make mistakes",
      "Upload the same photo again and trust it if the answer matches",
      "Ask only for item names, not how many there are",
      "Count them yourself and compare with the AI's answer",
    ],
    explain: "Even when looking at photos, AI often miscounts or misreads small text, and sometimes says items are there when they are not. Ask it to separate what it clearly sees from what it guessed, and check for yourself. (Ch. 1)",
  },
  "ex1-fast-or-big": {
    prompt: "You can choose between a fast model and a smart model. Which should you use for a spell check versus comparing contracts?",
    choices: [
      "Send both of the tasks to the smart model just to be safe",
      "Use the fast model for spelling and the smart one for contracts",
      "Find the largest model available online and give it both tasks to do",
      "Give both tasks to the fast model since faster models make fewer mistakes",
    ],
    explain: "Larger models tend to handle hard tasks better, but they are slower and cost more. The best way is to use a fast model for simple tasks, a larger model for hard tasks, and compare the results. (Ch. 1)",
  },
  "ex2-transformer-why": {
    prompt: "When the Transformer (a new AI design) came out in 2017, AI started learning text much faster. What changed?",
    choices: [
      "It started reading one word at a time more carefully",
      "It started looking at all the words in a sentence at once",
      "People started typing in the meaning of every single word by hand",
      "It started memorizing whole web pages word for word",
    ],
    explain: "Older methods had to read one word after another, but the Transformer looks at the relationships between words all at once. That made it possible to split the work across many computers and learn fast. (Ch. 2)",
  },
  "ex2-copyright-issue": {
    prompt: "What is the \"copyright\" worry around AI really about?",
    choices: [
      "Stopping others from using an AI company's logo",
      "Students using AI tools to finish all their school homework for them",
      "Personal details and private chats you type in being saved on servers",
      "Rights over the training data used and the new work AI creates",
    ],
    explain: "The copyright debate is about the rights to the text and images used for training, as well as the rights to what AI creates. Homework is an education issue, and saving inputs is a privacy issue. (Ch. 2)",
  },
  "ex2-check-date": {
    prompt: "You asked when ChatGPT first came out, and the answer included a source link. What should you do next?",
    choices: [
      "Check the date yourself in a reliable source",
      "Use it right away without checking since it has a source",
      "Ask one more time and trust it if the answer is the same",
      "Use it as is since dates are never wrong",
    ],
    explain: "Dates or numbers from AI may be right or wrong. Chapter 2 calls this \"habit of checking\" the single most important habit in the whole guide. (Ch. 2)",
  },
  "ex2-not-sudden": {
    prompt: "Your grandmother asks, \"Did ChatGPT just appear out of nowhere in 2022?\" What is the right answer?",
    choices: [
      "\"Yes, engineers built the whole thing from scratch in 2022.\"",
      "\"No, almost everyone has been using this exact phone app since 2017.\"",
      "\"No, it took years of research before opening to the public in 2022.\"",
      "\"Yes, nobody was doing any kind of AI research at all before 2022.\"",
    ],
    explain: "AI research has gone on for decades. The 2017 Transformer paper was the technical turning point, and the free release of ChatGPT in November 2022 was the moment everyone started using it. (Ch. 2)",
  },
  "ex3-save-time": {
    prompt: "People say using AI well saves time. Which part of the time gets shorter?",
    choices: [
      "The time you spend checking and fixing the final results disappears completely",
      "Memorizing special secret commands makes the AI type out its replies much faster",
      "All of your own thinking time at work disappears",
      "Early steps like making a rough draft take just a few minutes",
    ],
    explain: "First steps that used to take a long time, like writing a draft or organizing notes, can shrink to a few minutes. Still, AI can make mistakes, so you should always check important parts. (Ch. 3)",
  },
  "ex3-starting-point": {
    prompt: "If you want to build something with AI, why should you first learn \"how to ask well\"?",
    choices: [
      "Because AI never makes mistakes when you ask politely",
      "Because you have to memorize a long list of special commands before starting",
      "Because building things also starts by clearly stating what you want",
      "Because if your first question is clear, AI finishes the whole job by itself",
    ],
    explain: "Even when you build something yourself with AI, the starting point is knowing how to ask and explain what you want. You do not need any special commands. (Ch. 3)",
  },
  "ex3-busan-trip": {
    prompt: "You asked for a Busan trip plan with your parents, and AI gave you a packed schedule of walking all day. What should you send next?",
    choices: [
      "\"This schedule is bad. Make me a better travel plan.\"",
      "\"It's 3 days, 2 nights with my parents. Plan it with less walking.\"",
      "\"Pick a completely different city for our family trip instead of Busan.\"",
      "\"Forget the daily travel schedule and just list popular local restaurants.\"",
    ],
    explain: "If AI does not know who is going or what matters, it gives a generic answer. Tell it who you are traveling with and your must-have conditions, and you will get a plan you can actually use. (Ch. 3)",
  },
  "ex3-gave-up": {
    prompt: "You did not like a notice AI wrote, so you thought \"This is useless\" and closed the window. What would have worked better?",
    choices: [
      "Stay in the chat, point out what to fix, and ask again",
      "Search online for hard technical commands, memorize them, and start over",
      "Send the exact same request to other AI tools",
      "Keep sending the exact same message over and over until you get a good one",
    ],
    explain: "Rather than expecting a perfect answer on the first try, continuing the chat and asking for edits is the normal way to use AI. (Ch. 3)",
  },
  "ex4-why-upfront": {
    prompt: "A coworker asks questions when unsure. Why should you explain your situation to AI in detail right from the start?",
    choices: [
      "Because AI often guesses and writes instead of asking back",
      "Because AI cannot read short messages well",
      "Because AI only reads the first message and throws away later ones",
      "Because longer answers are always more accurate",
    ],
    explain: "Where a human coworker would ask back, AI mostly guesses and keeps writing. That is why you should tell it from the start what the task is, who will read it, and how long it should be. (Ch. 4)",
  },
  "ex4-checklist": {
    prompt: "When is the best time to use the five items for a good request (what you want, situation, reader, format, must-keep rules)?",
    choices: [
      "Pack all five items into every short question",
      "Check them to see what was missing when an answer falls short",
      "Pick only one favourite item from the five and use that same one every time",
      "Always write all five items in the exact same fixed order from top to bottom",
    ],
    explain: "You do not need to include all five every time. Use them as a checklist to see what was missing when an answer is disappointing. (Ch. 4)",
  },
  "ex4-flower-shop": {
    prompt: "You asked for a flower shop promo post and got a generic one that could fit any store. What should you send next?",
    choices: [
      "\"Rewrite the whole thing so it feels much cooler and more stylish than this.\"",
      "\"Write five more promo posts right now and pick the best one by yourself.\"",
      "\"It's for office workers heading home. Write two lines for a chalkboard.\"",
      "\"This draft is way too plain. Totally change it to match a trendy vibe.\"",
    ],
    explain: "Generic answers come out when AI does not know your shop, your customers, or where the text will go. Share the situation, the reader, and the format to get writing made just for your shop. (Ch. 4)",
  },
  "ex4-first-sentence": {
    prompt: "A college student wants to ask AI for help preparing a presentation. Which is the best opening sentence?",
    choices: [
      "\"Please help me get ready for my presentation.\"",
      "\"Tell me everything I need to know about how to give a great presentation.\"",
      "\"You are the world's top presentation coach. Share all your best secrets with me.\"",
      "\"I'm a college student giving a 10-minute class talk next week.\"",
    ],
    explain: "Starting with \"I am ___, and I'm trying to ___\" packs both your situation and what you want into a single sentence. (Ch. 4)",
  },
  "ex5-role-switch": {
    prompt: "You asked AI to review your cover letter once as a hiring manager and once as a first-time reader. How will the two answers compare?",
    choices: [
      "The two answers will come back identical every time",
      "AI will completely ignore the second role request and repeat the first one",
      "Each role looks for different things, so the feedback changes",
      "AI will throw away your draft and write a new cover letter from scratch",
    ],
    explain: "When you set whose shoes AI should stand in, it points out what matters most from that viewpoint first. Changing the viewpoint brings out different feedback. (Ch. 5)",
  },
  "ex5-outline-first": {
    prompt: "When asking for a long guide, getting an outline first ends up saving time. Why is that?",
    choices: [
      "Because asking for a short outline first is free",
      "Because AI is unable to write a long piece of text unless it makes an outline",
      "Because you always end up having to write all of the body text by yourself",
      "Because you can spot early on if the overall direction is off",
    ],
    explain: "If you ask for everything at once, you only find out the direction was off after a long draft is done. Checking and fixing the outline first means much less rework later. (Ch. 5)",
  },
  "ex5-copied-example": {
    prompt: "You gave a pumpkin bread post as an example and asked for a salted butter roll promo, but pumpkin details got mixed in. What should you send next?",
    choices: [
      "\"Forget the example and write whatever you want.\"",
      "\"Copy only the tone, and write about our salted butter rolls.\"",
      "\"I'll give you three more pumpkin soup examples, so copy them word for word.\"",
      "\"Introduce our new bread as a salted butter roll made with sweet pumpkin soup.\"",
    ],
    explain: "When you show an example, AI may copy not only the tone but also the topic inside it. Just tell it what to copy and what to change. (Ch. 5)",
  },
  "ex5-phone-plans": {
    prompt: "You want to ask AI whether the bus or the subway lets you leave later and still arrive by 9 a.m. What should you add?",
    choices: [
      "\"Add up the travel time step by step before answering.\"",
      "\"Skip the math and just answer in a single word.\"",
      "\"Tell me which of the two routes more morning commuters are taking these days.\"",
      "\"Don't bother doing any math, just pick whichever route feels nicer to you.\"",
    ],
    explain: "For questions that need middle steps, like adding and comparing times, asking AI to write out the steps one by one often makes the answer more accurate. It also lets you see which step went wrong. (Ch. 5)",
  },
  "ex6-long-chat": {
    prompt: "After spending a long time making promo copy in one chat, you asked for a resume and got an ad-like tone mixed in. Why?",
    choices: [
      "Because AI was never trained to write a formal resume",
      "Because earlier messages in the chat keep shaping new answers",
      "Because AI confused the casual promo copy with an official job application",
      "Because each chat window is permanently locked to the very first tone you use",
    ],
    explain: "When you keep one chat going for a long time, the earlier talk keeps affecting what comes next. When you change topics, it is best to start a new chat. (Ch. 6)",
  },
  "ex6-same-chat": {
    prompt: "In the same chat, if you say \"Shorten just the second paragraph of what you just wrote,\" AI understands. Why?",
    choices: [
      "It re-reads the current chat history each time it replies",
      "It secretly opens and reads the personal files saved on your computer hard drive",
      "It remembers everything any user ever typed forever",
      "It searches the live internet to find the document you were talking about",
    ],
    explain: "Rather than storing memories, AI re-reads the whole chat (up to what it can fit at once) every time it answers. In a new chat, it normally does not know what you talked about before. (Ch. 6)",
  },
  "ex6-be-specific": {
    prompt: "You told AI \"Not good, rewrite it\" about a letter, and it gave you almost the same letter again. What should you say now?",
    choices: [
      "\"This draft is bad. Delete it and write it again.\"",
      "\"Write ten more apology letters right now with a totally different mood.\"",
      "\"Take this whole letter and translate every single paragraph into English.\"",
      "\"Keep the first paragraph, and cut the last one to two sentences.\"",
    ],
    explain: "If AI does not know what you disliked, it gives you a similar draft again. Tell it which part to change, how to change it, and what to leave alone. (Ch. 6)",
  },
  "ex6-edit-question": {
    prompt: "After sending \"Recommend a restaurant for a family gathering,\" you realized you forgot the group size and budget. What should you do?",
    choices: [
      "Leave your first question as is and keep clicking the regenerate answer button",
      "Wait a few minutes and read the same answer again",
      "Edit your sent question to add the group size and budget",
      "Copy and send the exact same question over and over until a better plan appears",
    ],
    explain: "If your first question was missing key details, edit your question and send it again. Regenerate is for when your question was fine, but the answer happened to come out poorly. (Ch. 6)",
  },
  "ex7-question-last": {
    prompt: "When you paste a very long document and ask a question about it, where is the best place to put your question?",
    choices: [
      "Put the question at the very top and the document below it",
      "Put it right in the middle of the document next to the related part",
      "Send only the document without writing a question",
      "Put the document at the top and the question at the very bottom",
    ],
    explain: "According to docs from the company that makes Claude, putting the material at the top and the question at the end improved answer quality by up to 30%. It helped especially when there were multiple documents. (Ch. 7)",
  },
  "ex7-wrap-material": {
    prompt: "You are dividing your request with headings like ## Task. How should you mark a long piece of reference text you paste in?",
    choices: [
      "Adding a ## Reference heading is enough",
      "Wrap the top and bottom of the text with divider lines (---)",
      "Put a # in front of every single line of the text",
      "Leave out the text completely and send only the task so it is not confusing",
    ],
    explain: "A # heading only shows \"starts here\" and cannot show where it ends. Wrapping pasted material with divider lines on top and bottom makes the boundary clear. (Ch. 7)",
  },
  "ex7-two-quotes": {
    prompt: "You want to paste two price quotes from Company A and Company B and ask AI to compare them. How should you paste them?",
    choices: [
      "Label and separate the quotes as Company A and Company B",
      "Paste both price quotes together in one block with no line break between them",
      "Paste one quote and describe the second from memory",
      "Mix the lines from both price quotes together randomly before you paste them",
    ],
    explain: "When you have more than one document, label and wrap each one so AI does not mix up which company is which. Put the long documents at the top and your task, like what to compare, at the bottom. (Ch. 7)",
  },
  "ex7-cards-table": {
    prompt: "You want to move info from ten business cards into Excel. How should you ask AI?",
    choices: [
      "\"Write out everyone's contact info in full sentences.\"",
      "\"Keep the messy list as it is and just highlight the names in bold text.\"",
      "\"Make a table with Name, Company, Phone, and Email columns.\"",
      "\"Write a short story introducing the person on each business card in order.\"",
    ],
    explain: "If you want to move the answer into Excel, ask for a table. When you highlight and copy a table from the chat window and paste it, the columns usually line right up. (Ch. 7)",
  },
  "ex8-dont-run-yet": {
    prompt: "When asking AI to polish your request, why do you add \"Only polish it, do not do the task yet\"?",
    choices: [
      "Because otherwise it might jump straight into doing the task",
      "Because otherwise AI will refuse to edit someone else's writing",
      "Because that makes the polished request longer",
      "Because otherwise AI will translate the text into English",
    ],
    explain: "If you only want your prompt polished, you have to clearly say not to do the task yet. That way you can read and tweak the polished request before sending it. (Ch. 8)",
  },
  "ex8-learn-why": {
    prompt: "You showed AI a request that did not work well and said, \"Explain what was missing and fix it.\" What is the benefit?",
    choices: [
      "AI will remember your style and automatically fix all your future prompts for you",
      "The rewritten prompt is always much shorter than yours",
      "You see what was missing so you can include it yourself next time",
      "Because AI rewrote the question itself, you no longer need to check the answer",
    ],
    explain: "For example, if it tells you \"You didn't mention who the reader is,\" you will remember to include that next time. And if the answer to the fixed request still falls short, you can always tweak it again. (Ch. 8)",
  },
  "ex8-send-new-chat": {
    prompt: "You polished a travel request with AI and filled in all the blanks. Where should you send this finished request?",
    choices: [
      "Send it right in the same chat where you were polishing it",
      "Add \"Good job\" and send it in the same chat",
      "Just save it in a notes app and never send it",
      "Open a new chat, paste it in, and send it there",
    ],
    explain: "Paste and send it in a new chat so leftovers from your editing conversation do not get mixed into the answer. (Ch. 8)",
  },
  "ex8-limit-questions": {
    prompt: "You told AI \"Ask me one question at a time,\" and the questions went on forever. What would have been good to add at the start?",
    choices: [
      "\"Don't ask questions, just decide everything yourself.\"",
      "\"Please ask me no more than 5 questions.\"",
      "\"Ask me even more questions.\"",
      "\"Combine all your questions into a single sentence.\"",
    ],
    explain: "When building a request by having AI ask you questions, setting a limit on the number of questions up front keeps it from going on endlessly. (Ch. 8)",
  },
  "ex9-why-guess": {
    prompt: "Sometimes AI makes things up instead of saying \"I don't know.\" What reason did researchers find for this?",
    choices: [
      "Tech companies built it that way on purpose to trick users",
      "The developers forgot to teach the AI how to say the words \"I don't know\"",
      "Its training rewarded guessing over saying \"I don't know\" to users",
      "It is programmed to make up fake stories whenever live web search is turned off",
    ],
    explain: "This comes from a 2025 research paper. It is like a student on a hard test who writes down a guess rather than leaving a blank. Giving permission up front by saying \"If you don't know, say you don't know\" cuts down on made-up answers. (Ch. 9)",
  },
  "ex9-ok-to-show": {
    prompt: "Before typing something into an AI chat, what is the best question to ask yourself?",
    choices: [
      "\"Is this too long for AI to read all of it?\"",
      "\"Would it be okay if someone else saw this text?\"",
      "\"Would it be safer if I translated it into English?\"",
      "\"Would it be fine if I split it across several messages?\"",
    ],
    explain: "What you type goes to the AI company's servers and, depending on your settings, may be used for training or reviewed by people. If you would not want others to see it, leave it out or mask it. (Ch. 9)",
  },
  "ex9-click-link": {
    prompt: "You asked AI to summarize an email from a stranger, and the summary ended with \"Click the link and enter your bank info.\" What should you do?",
    choices: [
      "Stop and check the original email yourself",
      "Trust it and type your info since AI recommended it",
      "Summarize it once more and follow it if it says the same thing",
      "Enter everything except your password",
    ],
    explain: "If AI tells you to click a link, enter personal info, or send money when you never asked about that, stop. Outside text like emails can hide tricky lines meant to fool the AI. (Ch. 9)",
  },
  "ex9-sell-art": {
    prompt: "You want to sell merch made with an AI-generated cat picture. What should you do first?",
    choices: [
      "Sell it right away since you pay for a subscription",
      "Ask the AI to copy a famous living artist's exact style and sell that version",
      "Simply change the saved image file name to your own name before selling it",
      "Check the service terms for commercial use and add your own edits",
    ],
    explain: "If you plan to sell it, check the service's terms for commercial use, and edit or add your own touch instead of using it as is. When money is on the line, check with a professional too. (Ch. 9)",
  },
}

// English text for the basic level questions (level-bank/basic.ts).
export const BASIC_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "basic-s1-autocomplete": {
    prompt: "What is most similar to how an AI chatbot builds sentences?",
    choices: [
      "A smartphone keyboard suggesting the next word as you type a message",
      "Looking up words in a dictionary and copying definitions letter by letter",
      "Picking and playing a pre-recorded announcement to fit the situation",
      "A calculator plugging numbers into a fixed formula to get an answer",
    ],
    explain: "An LLM looks at the text so far and adds the most likely next word one by one. It is like keyboard autocomplete on a huge scale.",
  },
  "basic-s1-large-meaning": {
    prompt: "What does \"Large\" mean in LLM (Large Language Model)?",
    choices: [
      "It means the program file is huge and takes a very long time to download",
      "It means it trained on more text than a person could read in a lifetime",
      "It means people in many countries around the world use it all at once",
      "It means the law allows only very large companies to build one",
    ],
    explain: "\"Large\" means the model was trained on a massive amount of text, such as web pages, books, and papers.",
  },
  "basic-s1-training-knobs": {
    prompt: "What is \"training\" an AI model most like?",
    choices: [
      "People typing in every possible question and answer one line at a time",
      "Copying text from the internet and saving it directly inside the model",
      "Gently tuning millions of internal numbers to guess the next word well",
      "Building a brand-new model on the spot every single time a user asks a question",
    ],
    explain: "Inside the model are countless numbers called parameters (like tuning knobs). Training means adjusting these numbers bit by bit so the model predicts the next word well.",
  },
  "basic-s1-unknown-varies": {
    prompt: "Seojin asked an AI three times about the history of a small town, and each time it gave a different year for when the town was founded. How should Seojin take this?",
    choices: [
      "Take the middle year of the three as the right answer and use it as is",
      "Trust the very last answer because the latest reply is always the most accurate",
      "Assume the AI is joking on purpose and ask again in a different tone",
      "Treat it as something the AI may not know well and check a reliable source",
    ],
    explain: "When an AI does not know much about a topic, probabilities spread across many options and its answers can change each time. Wavering answers are a sign to check for yourself.",
  },
  "basic-s1-human-feedback": {
    prompt: "Where does a modern AI chatbot mainly get its habit of figuring out what you mean and giving a neat, helpful answer?",
    choices: [
      "Because the AI researched each user's personality ahead of time",
      "Because after reading text, it got extra training where people rated answers",
      "Because company staff read and fix every single reply before it gets sent out to you",
      "Because it finds answers to similar questions online and pastes them right in",
    ],
    explain: "A model that only read text mostly just continues writing text. Extra training where people pick better answers (RLHF) helps it reply like a helpful conversation partner.",
  },
  "basic-s1-two-facts": {
    prompt: "What did researchers observe inside an AI when it answered the question, \"What is the capital of the state where Dallas is located?\"",
    choices: [
      "It pulled the answer \"Austin\" straight from a memorized slot with no calculation",
      "It ignored the question and picked the city name it saw most often during training",
      "It connected \"Dallas is in Texas\" with \"The capital of Texas is Austin\"",
      "It secretly searched an online map to check the location first",
    ],
    explain: "In a 2025 study by Anthropic, the model linked two facts in order to build its answer. This shows it does more than pull up memorized answers—it also does step-by-step work close to thinking.",
  },
  "basic-s1-self-explain": {
    prompt: "You ask an AI to solve an addition problem and then ask, \"How did you solve it?\" Which statement is closest to what research has found?",
    choices: [
      "The AI always explains its exact calculation steps without missing a thing",
      "The AI does not calculate at all, so it cannot explain any method",
      "If the AI gives a long and detailed explanation, its solution is definitely right",
      "The method the AI describes can differ from what actually happened inside",
    ],
    explain: "In a study on adding 36+59, the AI internally combined rough estimation with last-digit math, but when asked to explain, it said it used the standard carrying method taught in school.",
  },
  "basic-s1-eliza": {
    prompt: "A friend says, \"This AI listens to my worries and really seems to understand me.\" What lesson can we learn from ELIZA, the simple 1966 chat program?",
    choices: [
      "People easily feel that something has a mind if it talks naturally",
      "Any program that talks smoothly actually has a human-like mind",
      "Older programs understand human feelings better than modern AI does",
      "Chat programs are completely blocked from talking about personal worries",
    ],
    explain: "Even though ELIZA only used a few simple rules, many people felt it truly understood them (the ELIZA effect). Feeling understood is not proof that an AI has a mind.",
  },
  "basic-s1-size-not-all": {
    prompt: "A friend says, \"If the number at the end of an AI model's name is bigger, it's always smarter.\" What is a good reply?",
    choices: [
      "Right. A bigger number means it is always faster and more accurate at everything",
      "Right. That number is how many people used the model, so bigger is always more reliable",
      "Not always. How much text it read and how well it was tuned after training also matter",
      "No. A smaller number always means a smarter and more accurate model",
    ],
    explain: "The number shows the parameter count, or the size of the model. Performance depends not just on size, but also on how much text it trained on and post-training tuning like human feedback.",
  },
  "basic-s1-token": {
    prompt: "What is a \"token,\" a word that often comes up when explaining AI?",
    choices: [
      "A secret password you type in when logging in to an AI service on your phone",
      "A score the user gives when the AI answers well",
      "A discount coupon an AI company hands out to users",
      "A small piece that AI cuts text or pictures into to process them",
    ],
    explain: "An LLM does not read text all at once; it chops text into small pieces called tokens. It handles images in a similar way by cutting them into small patches.",
  },
  "basic-s1-image-making": {
    prompt: "How does an image-generating AI usually create a picture from your text?",
    choices: [
      "It starts with a noisy screen and clears the noise step by step to match your text",
      "It finds the most similar picture on the internet and shows it as is",
      "It passes your order to a human artist and shows the finished painting they send back",
      "It cuts up a few pre-drawn pictures into tiny pieces and glues them together",
    ],
    explain: "AI that makes images or videos mostly uses diffusion models. After learning how to remove noise step by step, it uses your text as a guide to draw a new picture.",
  },
  "basic-s1-reasoning-model": {
    prompt: "How is a \"reasoning model\" different from other AI models?",
    choices: [
      "It cannot answer any question at all without searching the internet first",
      "It writes out its thinking steps first before giving you the final answer",
      "A human secretly types the answer from behind the scenes and sends it",
      "It only gives one short, pre-set answer to every single question",
    ],
    explain: "Before answering, a reasoning model writes out its step-by-step thought process to break down the problem and check its work.",
  },
  "basic-s2-what-is-prompt": {
    prompt: "What does the word \"prompt\" refer to?",
    choices: [
      "An ad that pops up at the very bottom of the screen right after the AI finishes replying",
      "The request you send to the AI—in other words, what you type into the chat box",
      "A program you have to download first before you can use an AI service",
      "A special AI programming language that only experts are able to use",
    ],
    explain: "A prompt is the request you send to the AI. Everything you type into the chat box is a prompt.",
  },
  "basic-s2-first-answer-draft": {
    prompt: "How is it best to treat the first answer an AI gives you?",
    choices: [
      "Use it as is without changing anything, since it is the AI's best answer",
      "Stop using that AI right away if you do not like the first answer",
      "Treat it as a rough first draft that you can refine by asking for edits",
      "Send the exact same question many times and pick the longest reply",
    ],
    explain: "The first reply is a rough draft, not a finished product. The normal way to use AI is to keep asking for adjustments in the same chat until it fits.",
  },
  "basic-s2-regenerate-why": {
    prompt: "When you press \"Regenerate\" on the same question, you get a slightly different answer. Why does this happen?",
    choices: [
      "Because the AI noticed its first answer was wrong and fixed it on its own",
      "Because pressing the button switches you to a smarter new model each time",
      "Because the right answer to the question changes depending on the time of day",
      "Because the AI picks the next words by chance from likely options, so each try differs",
    ],
    explain: "The AI chooses the next words probabilistically from plausible candidates. That is why even the same question gives a slightly different answer each time.",
  },
  "basic-s2-small-fix": {
    prompt: "Yuna likes the birthday text draft the AI wrote overall, except the last sentence sounds awkward. What is the best thing to do?",
    choices: [
      "Ask in the same chat, \"Please make just the last sentence sound natural\"",
      "Open a new chat window and send the exact same first question again",
      "Press Regenerate several times to get a completely different message",
      "Stop using the AI because of the awkward line and write it all alone from scratch",
    ],
    explain: "When the overall direction is good and only part of it needs fixing, the fastest way is to point out that exact spot and ask for a follow-up edit.",
  },
  "basic-s2-turn": {
    prompt: "What does a \"turn\" mean in a conversation with AI?",
    choices: [
      "The time it takes the AI to finish writing a single reply",
      "The number of times you are allowed to ask the AI questions in one day",
      "One exchange where you say something once and the AI replies once",
      "The moment the AI finishes replying to you and moves to the next user",
    ],
    explain: "A turn is one back-and-forth where you speak once and the AI answers once. A conversation with several exchanges is called a multi-turn conversation.",
  },
  "basic-s2-memory-feature": {
    prompt: "Some AI services have a \"memory\" feature that remembers parts of past chats. What is a good mindset for a beginner?",
    choices: [
      "Since memory exists, every AI service remembers all of my past chats",
      "The memory feature works the exact same way everywhere and cannot be turned off",
      "With memory on, I never need to explain my situation in a new chat",
      "Treat a new chat as a fresh start and share needed background again",
    ],
    explain: "Memory features work differently and have different settings across services. It is safest to assume a new chat does not know your past chats and share key details again.",
  },
  "basic-s2-repeat-mistake": {
    prompt: "You asked the AI three times in one chat to fix the same mistake, but it keeps making similar errors. What is the best next step?",
    choices: [
      "Ask it to summarize what you agreed on so far, then continue in a new chat",
      "Keep sending the exact words \"Fix it\" over and over until it works",
      "Decide that AI cannot do this kind of task at all and give up",
      "Keep going in the same chat since longer chats always make the AI much smarter and more accurate",
    ],
    explain: "Repeating the same mistake is a sign to start a fresh chat. If you ask for a quick summary note and paste it into a new chat, you will not lose what you already decided.",
  },
  "basic-s2-hard-word": {
    prompt: "The AI's answer includes a hard word you have never seen before, and you do not know what it means. What is the best way to handle it?",
    choices: [
      "Skip the unfamiliar word, read only the parts you know, and end the chat",
      "Point out that word in the same chat and ask for a simple explanation",
      "Assume any answer with hard words is wrong and start over in a new chat",
      "Do not ask the AI anything else and just read the word over and over to memorize it",
    ],
    explain: "Whenever something is hard to understand, you can simply follow up in the same chat and say, \"Please explain this part in plain words with an example.\"",
  },
  "basic-s2-long-chat-limit": {
    prompt: "As a conversation gets very long, the AI starts forgetting rules you set at the beginning. What is the best explanation for this?",
    choices: [
      "The AI got tired of the user and started ignoring the initial rules on purpose",
      "Rules set at the start are designed to erase themselves after a day",
      "If you say a rule only once, the AI assumes it is not important",
      "There is a limit to how much text the AI can keep in view at once (context window)",
    ],
    explain: "An AI can only refer to a limited amount of text at one time, so when a chat gets very long, it can start losing track of earlier details.",
  },
  "basic-s2-plain-words": {
    prompt: "Your grandfather asks, \"Do I have to learn English or special commands to talk to AI?\" What is a good answer?",
    choices: [
      "No, you can just talk to it in everyday language like asking a person",
      "Yes, you must memorize set commands first so the AI can understand you",
      "Yes, you have to ask in English for the AI to give you an answer in Korean",
      "No, you cannot type words at all—you only press menu buttons on the screen",
    ],
    explain: "There are no magic spells to learn. Just organize what you want to ask and say it in your normal, everyday words.",
  },
  "basic-s2-keep-part": {
    prompt: "When asking for revisions, why is it helpful to add, \"The first paragraph is great, so keep it as is\"?",
    choices: [
      "Because saying that makes the AI send back the revised answer much faster than usual",
      "To stop the AI from changing the parts you already like while it fixes the rest",
      "Because praising the AI puts it in a good mood so it tries harder",
      "Because without those words, the AI will refuse to accept any edit request",
    ],
    explain: "A good edit request says both what to fix and what to leave alone. Telling the AI what to keep stops it from rewriting the parts you already like.",
  },
  "basic-s2-buttons-differ": {
    prompt: "A friend told you about the \"Regenerate\" button, but the screen on your AI service looks different from your friend's. What does this mean?",
    choices: [
      "That feature must only exist on the service your friend is using",
      "A different screen means the AI builds answers in a completely different way",
      "Button names and spots vary by service, so look around on your own screen",
      "If you do not see the button right away, that service cannot redo answers",
    ],
    explain: "Features like regenerating or editing a question exist in most services, even if the button names and locations look a little different.",
  },
  "basic-s3-reader-level": {
    prompt: "You asked an AI how to pair wireless earbuds with a phone so you could explain it to your dad, but the reply was full of technical jargon. What would have been best to include in your first request?",
    choices: [
      "Repeating the word \"accurately\" about three times in a row for strong emphasis",
      "Writing the exact English name of the company that made the earbuds",
      "Info about the reader, like \"I'm explaining this to my dad who isn't used to tech\"",
      "Adding \"Please hurry and answer fast\" so the AI replies quickly",
    ],
    explain: "When you tell the AI who will read the answer, it adjusts the explanation to fit their level. Even for the same topic, changing the audience changes the reply a lot.",
  },
  "basic-s3-purpose": {
    prompt: "When asking the AI to summarize a long news article, how does it help to add, \"I want to share this in our family group chat\"?",
    choices: [
      "The AI can post the summary straight into the family group chat for you",
      "The AI automatically adds the names of everyone in your family group chat",
      "Even if the article has false facts, the AI will find and fix every single one",
      "Knowing where you will use it helps the AI match the right length and tone",
    ],
    explain: "Sharing the purpose (context) helps the AI tailor the length and tone to fit where you plan to use it.",
  },
  "basic-s3-avoid-word": {
    prompt: "You asked for puppy name ideas, and almost every name the AI picked ends with \"kong.\" What is the best follow-up request?",
    choices: [
      "\"Skip names ending in kong, and suggest 10 more easy-to-call two-syllable names\"",
      "\"This time, just suggest a few more random names with no rules at all\"",
      "Send the exact same first prompt, \"Suggest puppy names,\" without changing a letter",
      "Send a short reply saying only, \"I hate all of them. Start over from scratch\"",
    ],
    explain: "If you clearly state what to avoid and what style you want as conditions, the AI will follow those rules when picking new options.",
  },
  "basic-s3-vague-good": {
    prompt: "You showed the AI an email draft for your team leader and said only, \"Make it better,\" and the result was not what you wanted. What is a better request?",
    choices: [
      "\"Make it much, much better—as good as you possibly can\"",
      "\"Make it polite and brief, keeping it within five sentences\"",
      "\"Turn this into what you think is the coolest email ever\"",
      "\"Polish it just one more time so it is better than before\"",
    ],
    explain: "\"Better\" means different things to different people. Giving concrete details about tone and length gets you much closer to the answer you want.",
  },
  "basic-s3-table-compare": {
    prompt: "You asked the AI to compare three washing machines, and it replied with a long wall of text that is hard to scan. How could you have asked from the start?",
    choices: [
      "Ask as briefly as possible, like \"Compare washing machines,\" so it organizes itself",
      "Ask it to \"Just pick the single best one\" so you only get a final conclusion",
      "Add \"Explain in detail, at length, without leaving anything out\"",
      "Write \"Compare them in a table with columns for price, size, and noise\"",
    ],
    explain: "If you tell the AI the shape (format) you want, it will organize the answer that way. For comparisons, a table with clear columns is easiest to read.",
  },
  "basic-s3-paste-article": {
    prompt: "Minseo sent only \"Summarize the article I read earlier,\" and got a totally unrelated reply. What is the main reason?",
    choices: [
      "Minseo did not paste the article, so the AI has no idea which article it is",
      "The AI does not understand what the word \"summarize\" means",
      "Articles can only be summarized during certain hours of the day",
      "The question was short, so the AI decided to give a sloppy answer on purpose",
    ],
    explain: "The AI does not know what you read on your own screen. You need to paste the text you want summarized so the AI can base its answer on it.",
  },
  "basic-s3-why-context": {
    prompt: "Your club meeting date changed, and you want the AI to draft an announcement. What should you include in your prompt so members accept the change smoothly?",
    choices: [
      "The phone numbers and home addresses of every member in the club",
      "Why the date changed, the new date, and your relationship with the members",
      "A strong one-line request saying, \"Write the best notice ever\"",
      "Several photos from past club meetings that have nothing to do with the notice",
    ],
    explain: "Sharing the situation (context) and who will read it (audience) helps the AI write an understandable notice. Never include other people's personal info like phone numbers.",
  },
  "basic-s3-homework-steps": {
    prompt: "You want to use AI to help your elementary school child with fraction homework. Which request will help the child learn best?",
    choices: [
      "\"Just give me the number answers fast. I don't need any explanation\"",
      "\"Explain what fractions are in deep detail at an advanced college math textbook level\"",
      "\"At a grade-school level, show how to solve it step by step, not just the answer\"",
      "\"Solve all ten homework problems for me and organize them neatly\"",
    ],
    explain: "Sharing both the reader's level and how you want it explained gives you a walkthrough that your child can actually follow.",
  },
  "basic-s3-best-prompt": {
    prompt: "You want ideas for a lunchbox to bring to work. Which prompt is best for getting an answer you can use right away?",
    choices: [
      "\"My office only has a microwave. Give me 5 lunchbox ideas I can pack in 10 minutes\"",
      "\"Suggest lunchbox menus. Give me lots of tasty and super varied ones, please, right now\"",
      "Send short single words several times, like \"Lunch. Lunchbox. Ideas. Fast.\"",
      "\"Just tell me one lunchbox menu that most people eat these days\"",
    ],
    explain: "Giving your situation (microwave only) and the shape of the answer you want (10 minutes, 5 ideas) gets you practical suggestions right away.",
  },
  "basic-s3-tone-relation": {
    prompt: "What is a handy trick when it is hard to describe the exact tone of voice you want?",
    choices: [
      "Just say, \"Figure out the best tone on your own\"",
      "Describe the relationship, like \"A friendly older coworker talking to a new teammate\"",
      "Use the first reply right as it is, since you cannot ever change an AI's tone anyway",
      "Add lots of exclamation marks to show how you feel instead",
    ],
    explain: "Describing who is talking to whom—like \"a friendly senior coworker talking to a junior colleague\"—helps the AI catch the right tone.",
  },
  "basic-s3-missing-goal": {
    prompt: "Subin wrote a long message about how stressful the upstairs neighbor's noise is, and the AI only replied with long words of sympathy. What was missing from Subin's request?",
    choices: [
      "The upstairs neighbor's full name and exact apartment unit number",
      "Stronger words showing just how angry Subin is about the late-night noise",
      "What Subin wants the AI to do, like \"Write a polite note for me\"",
      "A request asking the AI not to tell anyone else about this chat",
    ],
    explain: "If you only share your situation (context) without stating what you want done (goal), the AI has to guess. Be clear about what you want it to make.",
  },
  "basic-s3-not-perfect-first": {
    prompt: "What is the best mindset for someone writing their very first prompt to an AI?",
    choices: [
      "Think for a very long time before sending, because the first prompt must be 100% perfect",
      "Shorter prompts are always better, so ask with a single word and wait",
      "Mix in lots of English technical terms so the AI understands you better",
      "Write what you know about your situation, see the reply, and add or adjust from there",
    ],
    explain: "Your first prompt does not need to be perfect. Share as much of your situation as you know, then refine the result by continuing the conversation.",
  },
  "basic-s4-medicine": {
    prompt: "You asked an AI how many times a day to take cold medicine, and it answered with total confidence. What is the best thing to do?",
    choices: [
      "Take it just as the AI said, since it answered so confidently",
      "Trust and follow the answer if it is long and detailed",
      "Ask again in a different phrasing, and if the answer matches, treat it as final",
      "Check the medicine package insert or ask a pharmacist directly",
    ],
    explain: "For high-stakes topics like health and medicine, even if the AI sounds completely sure, you should always check the original label or ask a professional.",
  },
  "basic-s4-allow-unknown": {
    prompt: "How does it help to add, \"If you don't know something, don't make it up—just say you don't know\" at the end of a question?",
    choices: [
      "It gives the AI permission not to guess, which cuts down on made-up answers",
      "It changes the AI so it will never make a single mistake on any question again",
      "It makes the AI automatically attach real sources to every answer",
      "It causes the AI to reply only \"I don't know\" to everything after that",
    ],
    explain: "AI tends to guess even when it is unsure. Telling it ahead of time that saying \"I don't know\" is okay reduces made-up facts—though you still need to double-check important points.",
  },
  "basic-s4-sure-guess": {
    prompt: "Why is it useful to ask the AI, \"Please separate what is certain from what you are guessing\"?",
    choices: [
      "You no longer need to fact-check anything labeled as certain",
      "It makes it easier to spot which parts you need to check first",
      "The AI will automatically delete all the guessed parts from its reply",
      "It makes the answer longer, which makes the content more trustworthy",
    ],
    explain: "Separating sure facts from guesses helps you see what to verify first. Keep in mind, though, that even parts labeled \"certain\" can still be wrong.",
  },
  "basic-s4-law-article": {
    prompt: "An AI cited a specific law article number to back up its answer. What is the best way to check if that law article is real and accurate?",
    choices: [
      "Ask the AI \"Is this really true?\" and trust it if it says \"Yes\"",
      "Assume the check is already done since it gave an exact article number",
      "Look up the article directly on an official government law website",
      "Show the AI's reply to a friend and ask if it sounds believable",
    ],
    explain: "An AI can make up law article numbers too. Verification is only complete when you look up the law on an official site and see that the content matches.",
  },
  "basic-s4-confident-tone": {
    prompt: "An AI answered in a firm tone, saying, \"This is certain.\" How should you view this confident tone?",
    choices: [
      "Even when the tone is firm, you still need to check if the facts are right",
      "A firm tone is a clear sign that the AI searched the web and verified the facts itself",
      "Answers that say \"This is certain\" are built so they cannot possibly be wrong",
      "The more confident the tone sounds, the older the information must be",
    ],
    explain: "Because AI strings words together based on what sounds plausible rather than what is true, it can state wrong information very confidently.",
  },
  "basic-s4-tweaked-problem": {
    prompt: "You took a famous riddle from the internet, changed just one number, and asked the AI. What should you watch out for?",
    choices: [
      "Because the riddle is famous, the AI will always get the changed number right on the first try",
      "Slightly tweaking a familiar problem can trip the AI up, so check the answer carefully",
      "AI models are set up to refuse any question where a number has been changed",
      "Problems with changed numbers can only be solved if you upload them as a photo",
    ],
    explain: "Studies show that even changing a number or adding an unrelated sentence can hurt an AI's accuracy. Be extra careful when checking familiar puzzles that have been slightly altered.",
  },
  "basic-s4-festival-date": {
    prompt: "You asked an AI for the dates of this year's local festival, and the reply shows no sign of a web search or any source link. What should you do?",
    choices: [
      "Trust the answer as is, since AI knows all current news in real time",
      "Assume local festival dates are the exact same every single year and plan around last year's date",
      "Check the official festival notice, since the AI might not know info after its training",
      "Ask the same question ten times and pick whichever date comes up the most",
    ],
    explain: "An AI may not know events after the time it was trained (its knowledge cutoff). If it answered without searching, the info could be outdated, so check an official notice.",
  },
  "basic-s4-blurry-receipt": {
    prompt: "You uploaded a photo of a blurry receipt and asked the AI to read the total amount, and it gave you a number right away. What is the right attitude?",
    choices: [
      "Write the number down as is, because AI never misreads numbers in photos",
      "Since AI cannot answer at all on blurry photos, this number must be completely right",
      "AI sees photos more accurately than people do, so you do not need to look",
      "Compare it with the original receipt, since the AI might guess at blurry digits",
    ],
    explain: "When reading images, an AI can fill in blurry letters or numbers with plausible guesses. Always check important numbers against the original receipt.",
  },
  "basic-s4-generic-answer": {
    prompt: "You asked about your company's vacation policy, and the AI only gave a generic answer that could apply to any workplace. What is the main reason?",
    choices: [
      "The AI was built to hide company information on purpose",
      "The AI does not know your company's rules and gives an average answer unless told",
      "Employee vacation questions are on the strict list of topics AI is never allowed to answer",
      "You did not ask politely enough, so the AI gave a half-hearted answer",
    ],
    explain: "The AI does not know who you are or where you work. Unless you share the rules, it gives a generic answer for an average workplace—so check your company's own documents for real policies.",
  },
  "basic-s4-museum": {
    prompt: "You want to make sure you can trust the museum closing day an AI told you before you head out. What is the surest way to check?",
    choices: [
      "Ask another AI service the same question and trust it if both answers match",
      "Tell the AI \"Don't get this wrong\" and then ask one more time",
      "Check directly on the museum's official website or call their info desk",
      "Head out without checking if the AI's answer was long and detailed",
    ],
    explain: "Asking a second AI can be helpful, but it does not replace real verification. Both AIs can be wrong, so check the original source like the museum's official website.",
  },
  "basic-s4-quote": {
    prompt: "The AI gave you a few famous quotes to put in your presentation slides. What should you do before using them?",
    choices: [
      "Put them right in, since having a famous person's name attached means they are real",
      "Just look at how cool they sound and pick the best-sounding one",
      "Ask the AI \"Is this quote real?\" and use it if the AI says \"Yes\"",
      "Check a reliable source to make sure that person actually said those words",
    ],
    explain: "Quotes are something AI can easily make up to sound believable. Always verify with a reliable source that the person actually said it before using it.",
  },
  "basic-s4-final-check": {
    prompt: "You are about to send out a club meeting notice that the AI drafted for you. What is the very first thing to check before sending?",
    choices: [
      "Whether the date, time, and place match what you actually planned",
      "Whether there are plenty of emojis included in the notice",
      "Whether the notice looks like it was written by an AI or not",
      "Whether every single sentence has the exact same number of letters",
    ],
    explain: "Always double-check details that would cause trouble if wrong, like numbers, dates, and names. The AI might have written them differently from what you told it.",
  },
  "basic-s5-server": {
    prompt: "Where does the text you type into an AI chat box usually go?",
    choices: [
      "It is sent to the AI company's computers (servers) and may be stored there",
      "It stays only inside your phone or computer and never goes anywhere else",
      "The moment you close the chat window, it vanishes completely from everywhere",
      "It shows up right away on the screens of other people using the same service",
    ],
    explain: "What you type does not stay only on your device—it goes to the AI company's servers and, depending on the service and settings, may be stored there.",
  },
  "basic-s5-training-setting": {
    prompt: "Which statement accurately describes whether your chats are used to train and improve the AI?",
    choices: [
      "No AI service ever uses user chats for training under any circumstances",
      "They may be used depending on the service and settings, so check for yourself",
      "Only the chats of people using free accounts are ever saved and used for model training",
      "Any chat used for training is posted publicly on the internet as is",
    ],
    explain: "Depending on the service and your settings, what you type may be used for training or read by human reviewers. Because default settings differ by service, it is best to check them yourself.",
  },
  "basic-s5-verification-code": {
    prompt: "You got a text from your bank with a verification code and do not know what the message means, so you want to copy it and ask an AI. What is the best way?",
    choices: [
      "Paste the entire text message right in as it is so that you can get the most accurate answer",
      "A verification code is just numbers, so pasting it as is causes no problem",
      "Delete or mask the verification code first, and ask only about the part you are curious about",
      "Paste the code in and ask the AI to type it into the bank app for you",
    ],
    explain: "Never put login details like verification codes or passwords into an AI. Hide or erase those parts and leave only what you need explained.",
  },
  "basic-s5-friend-secret": {
    prompt: "You want to ask an AI how to comfort a friend who shared a personal worry with you. What is the best way to ask?",
    choices: [
      "Write down your friend's name, contact info, and every detail of their worry as is",
      "Take a full screenshot of your chat with your friend, showing their name, and upload it",
      "Copy down your friend's worry in as much detail as possible without asking them",
      "Leave out identifying details like names and briefly describe only the situation",
    ],
    explain: "Other people's personal info and private stories should also be kept out of AI chats. Remove or change details so no one can tell who it is, and share only the general situation.",
  },
  "basic-s5-company-rule": {
    prompt: "Taeho, a new employee, wants to use AI to summarize a work report. What should Taeho do first?",
    choices: [
      "Paste the whole original report right in to finish the job as fast as possible",
      "Secretly upload it to a personal AI account used at home and summarize it there",
      "Check if the company has AI rules and what tools or data are allowed",
      "Include coworkers' names and performance numbers so the AI can answer in detail",
    ],
    explain: "Before using AI at work, check your company's AI usage policy first. Many workplaces only allow using a dedicated enterprise AI tool contracted for work.",
  },
  "basic-s5-health-record": {
    prompt: "You want to upload a photo of your health checkup results and ask the AI to explain the numbers in plain words. What should you do before uploading?",
    choices: [
      "Take a close-up that clearly shows your name and national ID number too",
      "Upload it without covering anything, since health info is not sensitive",
      "Upload medical records from other hospitals right alongside the checkup sheet",
      "Cover your name and ID number so only the test figures you need are visible",
    ],
    explain: "Health records are sensitive information, and an ID number uniquely identifies you. Cover personal identifiers before uploading and send only the parts you need explained.",
  },
  "basic-s5-homework-rule": {
    prompt: "Jiwoo, a college student, wants to use AI to help write a class report. What is the most important thing to check beforehand?",
    choices: [
      "School or class rules, such as whether you must state that you used AI",
      "Whether text written by the AI passes an online spell-checker",
      "Rumors from friends about how many times other classmates used AI on their homework",
      "Whether the AI can count the exact number of words in the report",
    ],
    explain: "For school assignments or work documents, check the rules on whether and how to disclose AI use. Also, do not turn in raw AI output as is—revise it and add your own work.",
  },
  "basic-s5-book-chapter": {
    prompt: "You paste a whole chapter of your favorite novel into an AI, ask it to \"just change the wording a little,\" and plan to post the result on your blog under your own name. Which statement is right?",
    choices: [
      "Because the wording changed, it is now a brand-new original work of yours",
      "The result will stay close to the original and could cause copyright trouble",
      "Because an AI rewrote the text, it has nothing to do with the original author",
      "As long as your blog does not make money, you can post anything you like",
    ],
    explain: "Feeding someone else's work into an AI for light rewording leaves the result very close to the original, which can cause copyright issues. Avoid passing off lightly altered copies as your own work.",
  },
  "basic-s5-summary-ok": {
    prompt: "Among ways to use AI with someone else's writing, which one is closest to healthy studying?",
    choices: [
      "Having the AI tweak someone else's writing bit by bit and turning it in under your name",
      "Asking for a summary or analysis to help you understand what the text says",
      "Having the AI rewrite someone else's article and handing it in as your homework",
      "Having the AI copy the exact style of someone else's writing so you can sell it",
    ],
    explain: "Asking an AI to summarize or analyze someone else's text is a way to study and learn, whereas passing off a copied or lightly tweaked version as your own causes problems.",
  },
  "basic-s5-one-sided": {
    prompt: "You copied and pasted a product page into an AI and asked for pros and cons, but the reply gave only praise and not a single con. What is the best thing to do?",
    choices: [
      "Skim the original page yourself, as hidden text instructions might have tricked the AI",
      "Order the product right away, since having zero cons means it is truly great",
      "Trust the AI's answer completely, since having more praise always means a more accurate review",
      "Paste the same page one more time and buy the item if it praises it again",
    ],
    explain: "If an AI falls for hidden instructions inside pasted text, its answer can become completely one-sided (prompt injection). When a reply seems oddly biased, check the original text yourself.",
  },
  "basic-s5-ai-actions": {
    prompt: "Why do you need to be more careful when letting an AI take direct actions—like sending emails or making payments—than when only asking it for summaries?",
    choices: [
      "Because once an AI is given actions to do, it stops ever saying anything wrong",
      "Because letting an AI take direct actions on its own is completely banned by law everywhere",
      "Because giving an AI actions makes its text replies much shorter and slower",
      "Because if the AI is tricked by hidden instructions, the real-world damage is much bigger",
    ],
    explain: "The bigger the task you hand over to an AI, the bigger the damage if something goes wrong. Since there is still no way to block hidden instructions completely, extra caution is needed.",
  },
  "basic-s5-address": {
    prompt: "You want the AI to polish a quote request message for a moving company. How should you handle your home address in the prompt?",
    choices: [
      "Write your exact building, unit number, and even the front entrance keypad code",
      "Include every detail down to the exact postal code so nothing is left out",
      "Put only as much general info as needed, like \"3rd floor of an apartment in OO District\"",
      "Leave out the home address and type in your full national ID number instead to prove who you are",
    ],
    explain: "Your exact home address is sensitive information. Share only as much as the AI needs to write the draft, leave the rest blank or generalized, and fill in the real details right before sending it to the company.",
  },
}

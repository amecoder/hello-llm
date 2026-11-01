// English chapter titles and quiz text for guide/12-gemini (Korean source: quiz-bank*.ts, same ids and answers).
export const GEMINI_CHAPTER_TITLE_EN: Record<number, string> = {
  301: "Chapter 1. Getting Started",
  302: "Chapter 2. Tour the Screen",
  303: "Chapter 3. Managing Chats",
  304: "Chapter 4. Files and Creating",
  305: "Chapter 5. Memory and Personalization",
  306: "Chapter 6. Search and Deep Research",
  307: "Chapter 7. Skills and Connected Apps",
  308: "Chapter 8. Handing Off Work",
  309: "Chapter 9. Privacy and Safety",
  310: "Chapter 10. Voice and Phone",
  311: "Chapter 11. Hands-On Exercises",
  312: "Chapter 12. Using It Like a Pro",
}

export const GEMINI_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch301-where": {
    prompt: "Your middle-school nephew wants to try Gemini on the web. His parents manage his Google Account with Family Link. What will happen?",
    choices: [
      "He is over 13, so he can use it on the web right away",
      "Family Link accounts cannot use Gemini on the web",
      "He can use it on the web if he signs up for a paid plan",
      "Gemini on the web is not available in Korea",
    ],
    explain: "Personal accounts can use it at age 13 or older, but accounts managed with Family Link cannot access Gemini on the web. Both Korea and Korean are supported.",
  },
  "ch301-login": {
    prompt: "You asked a few questions on Gemini on the web without signing in. The next day, you want to read that chat again. What will happen?",
    choices: [
      "The chat stays in the side menu if you use the same browser",
      "The chat moves to your account if you sign in later",
      "You cannot see any chats from when you were signed out",
      "A copy of the chat is emailed to you",
    ],
    explain: "If you do not sign in, you cannot view past chats again. You also cannot upload files or create images. Sign in with a Google Account to keep your chats.",
  },
  "ch301-plans": {
    prompt: "Someone who takes lots of photos is running out of Google storage and is thinking about a paid Gemini plan. What is good to know?",
    choices: [
      "Google AI storage is shared across Drive, Gmail, and Photos",
      "Google AI plans give separate storage used only for Gemini chats",
      "Extra storage is included only in the Ultra plan",
      "Gemini plans and Google storage have nothing to do with each other",
    ],
    explain: "Google AI plans are billed through Google One and include storage shared across Drive, Gmail, and Photos (400 GB for Plus, 5 TB for Pro). If you already pay for storage, compare them together.",
  },
  "ch301-limits": {
    prompt: "In a single chat, you planned a trip in the morning and worked on a company report in the afternoon. Your usage limit dropped quickly. What is the best habit here?",
    choices: [
      "Usage only counts questions, so just ask fewer questions",
      "Start a new chat whenever you switch to a new topic",
      "Longer chats use less, so keep the same chat",
      "Switch to the mobile app to get a fresh usage limit",
    ],
    explain: "Every time Gemini replies, it re-reads the earlier part of the chat. So longer chats use more of your limit. Starting a new chat when you switch topics helps save usage.",
  },
  "ch301-billing": {
    prompt: "You are using Google AI Pro and want to cancel it. What should you check before canceling?",
    choices: [
      "Canceling deletes all the chats you have had so far",
      "You can only cancel by calling customer support",
      "You keep the extra storage even after you cancel your plan permanently",
      "Extra storage ends with the plan, so check your storage usage",
    ],
    explain: "To cancel, go to \"Settings\" → \"Manage subscription\" to open Google One. When the plan ends, you lose the extra storage for Drive, Gmail, and Photos, so check your current storage use first.",
  },
  "ch301-trouble": {
    prompt: "Gemini showed an error instead of an answer. What should you try before contacting support?",
    choices: [
      "Delete your account and create a new one",
      "Upgrade to a paid plan right away",
      "Send the question again, or try a new chat without files",
      "Send the exact same question several times a second until it works",
    ],
    explain: "For most errors, the help guide suggests trying again, starting a new chat, removing attached files, waiting 5 minutes, or refreshing the page. Sending too many requests quickly can trigger a \"Too many requests\" error.",
  },
  "ch302-home": {
    prompt: "Someone opening Gemini for the first time feels overwhelmed by all the menus and doesn't know where to start. What is the best advice?",
    choices: [
      "Click every single menu button before asking a question",
      "Change all the settings before asking anything",
      "Sign up for a paid plan before asking a question",
      "Just type a question in the prompt box and send it",
    ],
    explain: "At first, the prompt box in the middle is all you need. You can learn the side menu, model picker, temporary chat, and settings one by one when you need them.",
  },
  "ch302-sidebar": {
    prompt: "You want to find a chat about \"kimchi ingredients\" from last week. Where should you look?",
    choices: [
      "Search for \"kimchi\" in \"Search for chats\" in the side menu",
      "Look under \"Settings\" → \"Theme\"",
      "Look under \"Deep Research\" in the \"+\" menu of the prompt box",
      "Past chats cannot be found again",
    ],
    explain: "Use \"Search for chats\" (the magnifying glass) in the side menu to search past chats by keyword. In the \"All\" list, the most recent chat is at the top.",
  },
  "ch302-plus": {
    prompt: "You sent \"Write a message to move the meeting to Thursday,\" but forgot to say \"for a coworker.\" How can you fix your sent prompt and get a new reply?",
    choices: [
      "Delete the entire chat and type the whole question again from scratch",
      "Click \"Edit text\" on your prompt, add the detail, and hit \"Update\"",
      "Turn on \"Temporary chat\" and send the same question again",
      "Switch the model to Argon",
    ],
    explain: "Click \"Edit text\" (the pencil icon) next to your sent question, make the change, and click \"Update\" to get a fresh reply. You don't have to retype the whole question.",
  },
  "ch302-model": {
    prompt: "A paid plan user says, \"To get good answers, you should always keep it on the biggest model and 'High'.\" Which explanation is right?",
    choices: [
      "That's right. Higher settings actually use less of your limit",
      "That's right. Thinking level has nothing to do with answer quality or depth at all",
      "Keep it for daily tasks and raise it if replies feel shallow; higher levels use more limit",
      "Once you set the thinking level for a chat, you can never change that setting again later on",
    ],
    explain: "Bigger models and higher thinking levels use up your limit faster. Leave them on the default for everyday tasks, and turn them up only for hard, multi-step tasks or when an answer feels too shallow.",
  },
  "ch302-temp": {
    prompt: "You really like a travel plan you got in a temporary chat. What should you do before leaving the temporary chat?",
    choices: [
      "Copy the answers you need, since you can't see them after you leave",
      "Just leave, because you can find it later in the \"All\" list",
      "It is saved in \"Activity,\" so you can pull it up from there later",
      "Temporary chats show up in the side menu automatically after 72 hours",
    ],
    explain: "Temporary chats do not appear in your chat list or \"Gemini Apps Activity,\" so you cannot see them again once you leave. They are kept on your account for up to 72 hours, but you cannot reopen them yourself.",
  },
  "ch302-settings": {
    prompt: "Your Gemini screen is in English, and you want to change it to Korean. How do you do that on the web?",
    choices: [
      "Pick a language under \"Settings\" → \"Theme\"",
      "Sign up for a paid plan to unlock Korean",
      "Ask Gemini a question in Korean and the screen menus will switch to Korean too",
      "Change the language setting in your browser or on your device to Korean",
    ],
    explain: "Gemini on the web follows the language set in your browser or device. Regardless of the screen language, if you ask in Korean, it will reply in Korean.",
  },
  "ch303-find": {
    prompt: "You have a personal account, but you cannot pin or delete chats. Which setting should you check first?",
    choices: [
      "Whether \"Theme\" is set to dark mode",
      "Whether the model is set to Argon",
      "Whether \"Keep Activity\" is turned on",
      "How many times you have used temporary chat",
    ],
    explain: "On a personal account, searching, pinning, renaming, and deleting chats only work when \"Keep Activity\" is turned on. If you are 18 or older, it is on by default.",
  },
  "ch303-manage": {
    prompt: "You want to tidy up and delete a chat that contains a flyer you made with Canvas. What should you do before deleting it?",
    choices: [
      "Deleting a chat also deletes its items, so export the flyer first if you need it",
      "Canvas items stay saved separately in your account even if you delete the chat, so just delete it",
      "Pin the chat first, because pinned chats come back even after you delete them",
      "Rename the chat first, because renamed chats cannot be deleted",
    ],
    explain: "Deleting a chat also removes it from \"Gemini Apps Activity\" and deletes any Canvas docs or apps made in that chat. Export anything you want to keep first.",
  },
  "ch303-branch": {
    prompt: "In the middle of a long trip-planning chat, you want to ask \"What if it rains?\" on the side without messing up the original chat. What is the best way?",
    choices: [
      "Delete the original chat and start over from the beginning",
      "Click the three dots under that reply and select \"Branch in new chat\"",
      "Turn on \"Temporary chat\" so the earlier chat carries over automatically",
      "Just ask the question right at the end of the original chat",
    ],
    explain: "Clicking \"Branch in new chat\" opens a new chat that splits off from that point, while keeping your original chat neat so you can come back and continue it later.",
  },
  "ch303-share": {
    prompt: "You created a public link to share a Gemini chat with just one friend. Which statement is true?",
    choices: [
      "Only the friend you send the link to can open it",
      "If you edit the chat after making the link, the shared page updates automatically",
      "Your name and account are shown on the shared page",
      "Anyone with the link can read it, so review the whole chat before sharing",
    ],
    explain: "Anyone who has a public link can read it and share it further. Your name is not attached, and the link only shows the chat as it was the moment you created the link.",
  },
  "ch303-export": {
    prompt: "You exported a notice email written by Gemini using \"Draft in Gmail.\" What happens next?",
    choices: [
      "The email is sent to the recipient right away",
      "It saves a Gmail draft, so you check the recipient and content and send it",
      "It is saved as a document file in Google Drive",
      "An email is created and sent automatically even if you do not have a Gmail account",
    ],
    explain: "\"Draft in Gmail\" creates a new email draft in your Gmail. It is not sent automatically, so review it and press send yourself. You need a Gmail account to use this.",
  },
  "ch303-regen": {
    prompt: "A reply is too long and hard to read. What is the easiest way to get closer to the answer you want?",
    choices: [
      "Tell it what to change, like \"Make it three lines in plain words\"",
      "Keep clicking \"Redo\" over and over until the exact answer you want shows up",
      "Go back a few replies and click \"Redo\" there",
      "Open a new chat and send the exact same question again",
    ],
    explain: "When you know what you don't like, telling Gemini what to change—like length, simpler words, or tone—gets you closer much faster. \"Redo\" only works on the most recent reply, and you cannot choose what changes.",
  },
  "ch304-upload": {
    prompt: "You uploaded a thick report PDF all at once for a summary, and it seems to have missed the later chapters. What should you try first?",
    choices: [
      "Upload the exact same file ten times in a row",
      "Split the file into smaller files and upload those",
      "Upload it inside a temporary chat window so that Gemini reads more of it",
      "Shorten the file name so it reads to the end",
    ],
    explain: "With large files, Gemini can miss parts of the content. The help guide suggests uploading smaller files with less content, or upgrading to a plan that can read more at once.",
  },
  "ch304-canvas": {
    prompt: "In a flyer made with Canvas, you want to keep everything else the same and make only the second paragraph shorter. What is the best way?",
    choices: [
      "Ask it to rewrite the entire flyer from scratch",
      "Close Canvas and ask for the same flyer in a new chat",
      "Highlight the second paragraph and type \"Make it shorter\"",
      "Export it to Google Docs first, because you cannot edit text inside Canvas",
    ],
    explain: "In Canvas, you can highlight the part you want to change with your mouse and type what to do, and it will edit just that section. Changes save automatically, and you can also go back to earlier versions.",
  },
  "ch304-canvas-safety": {
    prompt: "You opened a Canvas app link from someone you don't know, and it says \"Enter your password to sign in.\" What should you do?",
    choices: [
      "Do not enter your password, and report it via the bottom link if it looks unsafe",
      "Enter your password right away, because apps made inside Gemini are always completely safe",
      "Open it on the mobile app instead, where it is safe",
      "Enter your credit card number instead of your password",
    ],
    explain: "Google warns you to be very careful with any app that asks for passwords or payment info. If a Canvas app looks suspicious, you can report it using the link at the bottom of the page.",
  },
  "ch304-image": {
    prompt: "You only typed \"cat picture\" and didn't get the image you wanted. What is a better way to ask?",
    choices: [
      "Send \"cat\" one more time",
      "Say \"Draw any cat for me\"",
      "Just say \"Make it a realistic photo instead of a drawing, without adding any other details\"",
      "Describe the style and scene, like \"An orange cat napping by a window in watercolor\"",
    ],
    explain: "The help guide suggests starting with words like \"Draw\" or \"Create\" and adding details about the style, subject, action, and background. That way you won't have to ask for redos as often.",
  },
  "ch304-media": {
    prompt: "A friend using a free Gemini account wants to try generating a video. Which statement is true?",
    choices: [
      "Video generation works the exact same way on free accounts",
      "On a personal account, you need a Google AI plan to generate videos",
      "Videos are ready right away, so you can keep asking in the same chat immediately",
      "Generating videos uses almost none of your usage limit",
    ],
    explain: "Generating videos (Gemini Omni) on a personal account requires a Google AI plan. It takes a few minutes to finish and uses the most usage limit among images, music, and video.",
  },
  "ch304-verify": {
    prompt: "You uploaded a photo you received to Gemini and asked, \"Was this made by AI?\" It says there is no hidden Google watermark (SynthID). How should you take this?",
    choices: [
      "Be certain that a person took the photo with a real camera",
      "Assume Gemini is broken and never ask again",
      "It only means Google AI didn't make it; another AI tool still could have",
      "Finding no hidden watermark means that no AI tool anywhere could have made the image",
    ],
    explain: "Gemini can only detect content made with Google AI. If there is no watermark, it just means Google AI didn't create or edit it—another AI tool might still have made it.",
  },
  "ch305-overview": {
    prompt: "Someone using Gemini with a work Google Account is looking for personalization features like memory and instructions. Which statement is true?",
    choices: [
      "Personalization features only work on personal Google Accounts, not work ones",
      "Personalization features are only unlocked on work accounts",
      "Signing up for a paid plan guarantees that these features will work on a work account",
      "Personalization features can only be turned on in the mobile app",
    ],
    explain: "Personalization features like memory, connected apps, and instructions require a personal Google Account. They are not available on work, school, or supervised accounts.",
  },
  "ch305-memory": {
    prompt: "Gemini keeps remembering your old address from an earlier chat and using it in replies. How do you erase that memory?",
    choices: [
      "Say \"Forget my old address\" once in a chat and it will definitely be erased right away",
      "Turn temporary chat on and off once to erase it",
      "Delete all chats with that address from \"Gemini Apps Activity\"",
      "Switch the model to Flash so the memory disappears",
    ],
    explain: "To erase something Gemini remembered from past chats, you need to delete every chat that contains that information. Instructions like \"Forget that\" are not always followed.",
  },
  "ch305-instructions": {
    prompt: "A Gemini user in Korea is tired of typing \"Start every reply with a short summary\" in every single chat. What can they do?",
    choices: [
      "There is no setting like this in Korea, so they must type it every time",
      "Write it in English on the memory summary screen",
      "Click \"Redo\" in every chat",
      "Add that sentence as an instruction under \"Instructions for Gemini\"",
    ],
    explain: "Anyone can add instructions under \"Instructions for Gemini,\" and they will apply to new chats automatically without you having to repeat yourself. Conversational memory and the memory summary are US-only.",
  },
  "ch305-import": {
    prompt: "You want to import a ZIP file of exported ChatGPT chats into Gemini. What should you know before importing?",
    choices: [
      "Imported chats are not saved anywhere and disappear right away",
      "Imported chats you continue are saved in Activity and help improve Google services and AI models",
      "You can upload as many ZIP files a day as you want because there is no daily upload limit at all now",
      "Importing only works on work or school accounts",
    ],
    explain: "Chats you import and continue are saved to your Activity and used to improve services, including training generative AI models. You can upload up to 5 ZIP files (up to 5 GB each) per day, on personal accounts only.",
  },
  "ch306-check": {
    prompt: "Gemini replied, \"The adult reading rate in Korea jumped sharply compared to last year.\" What should you do before putting this in a meeting handout?",
    choices: [
      "Use it as is, since Gemini stated it confidently",
      "Open \"Sources\" or use Google Search to check the numbers against the source",
      "Ask the exact same question once more, and use the numbers if the answer stays the same",
      "Just add \"Written by AI\" at the end of the handout",
    ],
    explain: "Google advises you to always evaluate replies and double-check facts using built-in tools or Google Search. Check numbers and dates directly against the original source.",
  },
  "ch306-deep": {
    prompt: "When asking Deep Research to look into a topic, you want to add the rule \"Use only official statistics.\" When and how should you do that?",
    choices: [
      "You can only edit it after the full report is finished",
      "You cannot change conditions in Deep Research",
      "When the research plan appears, click \"Edit plan\" and add your rule",
      "Click \"Start research\" several times in a row so the new rule takes effect",
    ],
    explain: "Deep Research shows you a research plan before it starts digging. As soon as the plan appears, click \"Edit plan\" to make changes, then click \"Start research.\"",
  },
  "ch306-notebook": {
    prompt: "You put meeting notes and a schedule into a \"Book Club\" notebook as sources. If you delete this notebook, what happens to the sources and chats inside it?",
    choices: [
      "The sources and chats in the notebook are deleted with it",
      "Only the notebook name is deleted, while the sources and chats stay",
      "The sources stay and only the chats are deleted",
      "Notebooks cannot be deleted",
    ],
    explain: "Deleting a notebook also deletes all the sources and chats inside it. Keep a separate copy outside the notebook for any files you still need.",
  },
  "ch306-study": {
    prompt: "You want to ask Gemini to make a practice quiz for an exam. How does the help guide recommend asking?",
    choices: [
      "Just say \"Help me study\" without naming a topic",
      "Upload a photo of your textbook cover and say nothing else about what you need help with",
      "Start by saying \"Just give me the answer key\"",
      "Say what to make first—like \"Create a practice quiz\"—then add the study topic",
    ],
    explain: "The help guide recommends saying what you want made first, followed by the study topic or material. Once you finish the quiz, it also points out your strengths and what to study more.",
  },
  "ch307-skill": {
    prompt: "Every week, you type a long request asking Gemini to format your meeting notes the same way. What can you use to save this request and call it up in any chat?",
    choices: [
      "Temporary chat",
      "Skills — type / in the prompt box and pick it",
      "A shared public chat link that you open in your browser",
      "Deep Research",
    ],
    explain: "A skill is a saved instruction you create once and reuse in any chat. Just type / (soon @) in the prompt box to pick it, and you don't need a paid plan to use it.",
  },
  "ch307-write": {
    prompt: "You created a skill, but Gemini doesn't seem to use it when you expect it to. What is the first place you should fix?",
    choices: [
      "The skill's name and description — state what it does and when to use it",
      "Make the skill instructions at least three times longer than they are right now",
      "Make a second, identical copy of the skill",
      "Change the model",
    ],
    explain: "Gemini first looks only at a skill's name and description to decide whether to use it right now. Start the name with what it does, and write when to use it in the description. Keep the instructions short and focused.",
  },
  "ch307-gems": {
    prompt: "You are 25 and use a favorite Gem on your personal account. What happens to that Gem after December 17, 2026?",
    choices: [
      "You can keep using it just as before",
      "You can keep using it if you switch to a paid plan",
      "Gems go away and are automatically turned into skills",
      "The Gem and all files inside it are wiped without a trace",
    ],
    explain: "Gems become read-only on November 17 and go away on December 17. When they go away, they are automatically converted into skills, but some files may not carry over—so download your \"Knowledge\" files ahead of time.",
  },
  "ch307-apps": {
    prompt: "After connecting Google Workspace, you want Gemini to summarize a document in Drive. Which prompt works best?",
    choices: [
      "Paste only the document URL into the chat box and say \"Summarize this\" without any other details",
      "\"Summarize any of my files\"",
      "Just say \"this document\" and leave out the app name",
      "\"Find the 'Book Club Rules' doc in Drive and summarize the membership fee rules\"",
    ],
    explain: "The help guide says not to paste document or email URLs, and instead to mention keywords from the content along with the app name. In every new chat, tell it which app to look in.",
  },
  "ch307-privacy": {
    prompt: "You connected Gmail to Gemini for a while and then disconnected it. What happens to the chat history you had with Gemini during that time?",
    choices: [
      "History in \"Gemini Apps Activity\" stays after disconnecting, so delete it separately",
      "Disconnecting automatically deletes all related chats",
      "Your emails in Gmail are deleted along with it",
      "The chats stay in your account, but they are locked so human reviewers can never see them",
    ],
    explain: "Disconnecting an app or deleting data inside that app does not delete your history in \"Gemini Apps Activity.\" You have to delete that history separately. It is safer not to connect apps with confidential info in the first place.",
  },
  "ch308-task": {
    prompt: "Someone on a free account wants to use \"Tasks\" below the prompt box to tidy up their inbox. What will happen?",
    choices: [
      "Free accounts can use it up to 3 times a day",
      "Anyone can use it for free as long as they are signed in to a Google Account",
      "Tasks requires a Google AI Pro or Ultra subscription",
      "It is free to use on the mobile app",
    ],
    explain: "Using Tasks requires being 18 or older, a personal account, a Google AI Pro or Ultra subscription, \"Keep Activity\" turned on, and \"Personal Intelligence\" turned on.",
  },
  "ch308-schedule": {
    prompt: "You want to set up a scheduled task (watch) that says, \"Tell me right away the moment concert tickets go on sale.\" According to the help guide, which statement is true?",
    choices: [
      "Scheduled tasks run down to the exact second, so this is a great fit",
      "It is not suited for urgent tasks — run times are only approximate",
      "You can set unlimited chat schedules, so just set several of them",
      "Schedules can only be set inside Gmail",
    ],
    explain: "Watch schedules are not meant for fast-changing info or urgent tasks, and their run times are approximate. You can keep up to 10 chat schedules and 50 task schedules active.",
  },
  "ch308-permission": {
    prompt: "During a task, Gemini asks for permission: \"Can I access this website?\" It is your first time delegating this, so you want to be careful. Which choice is best?",
    choices: [
      "\"Allow once\" — permits only this single step",
      "\"Always allow\" — never asks you again",
      "Skip past the permission screen quickly without reading it",
      "Type your login password into the chat box and allow it",
    ],
    explain: "\"Allow once\" permits just this step. \"Always allow\" permits that action in all future task chats and changes your settings. Never type login info into the chat box—enter it directly on the webpage.",
  },
  "ch308-safety": {
    prompt: "While a task is reading your emails, a hidden sentence inside an email could trick the AI into doing something unintended. What is this kind of attack called?",
    choices: [
      "Hallucination",
      "A phishing link attack",
      "Auto-delete",
      "Prompt injection",
    ],
    explain: "Hiding instructions on a webpage or in an email to trick an AI is called prompt injection. Built-in safeguards cannot block every risk, so keep an eye on your task while it runs.",
  },
  "ch308-chrome": {
    prompt: "An adult living in Korea wants to use Gemini in Chrome on a computer. Which statement is true?",
    choices: [
      "Gemini in Chrome is only available to users located in the United States right now",
      "It only works in Incognito mode",
      "Adults 18+ in Korea can use it (rolling out), while auto-browse is US-only",
      "You can only send one tab at a time",
    ],
    explain: "Korea is on the supported list for Gemini in Chrome for users 18 and older. You need to sign in to the latest Chrome on a computer, and it doesn't work in Incognito mode. Since it is rolling out gradually, you might not see it yet.",
  },
  "ch309-saved": {
    prompt: "You are wondering whether your Gemini chats are used to show you ads. What does Google say?",
    choices: [
      "Your chat content is used to show personalized ads",
      "Only paid subscription plans are excluded from personalized ad targeting across Google services",
      "You have to turn off a separate ad setting to stop it",
      "Chats are not used for ads, and Google says it will clearly notify users if that changes",
    ],
    explain: "Google states that it does not use your Gemini chats to show you ads, and will clearly let you know if that changes. However, location info is always collected to help answer your questions.",
  },
  "ch309-review": {
    prompt: "You do not want your future chats used to improve Google services, such as training AI models. What should you do?",
    choices: [
      "Turn off \"Keep Activity\"",
      "Click thumbs-up or thumbs-down often",
      "Write \"Do not use for training\" in every chat",
      "Switch to a paid plan",
    ],
    explain: "Turning off \"Keep Activity\" stops future chats from being reviewed to improve services. Even when it is off, chats are still processed to deliver replies and keep services safe, and any chat you send feedback on is used for improvement.",
  },
  "ch309-activity": {
    prompt: "You turned off \"Keep Activity.\" How long are the chats you have after that kept on your account?",
    choices: [
      "Not kept at all",
      "72 hours",
      "18 months",
      "3 years",
    ],
    explain: "Even with \"Keep Activity\" off, chats are kept on your account for up to 72 hours to provide the service and keep it safe. When it is on, chats are set to auto-delete after 18 months by default.",
  },
  "ch309-delete": {
    prompt: "You deleted a chat from \"Gemini Apps Activity\" that you had earlier shared via a public link. What happens to that public link?",
    choices: [
      "Deleting the chat deletes the public link too",
      "The shared public link expires and deletes itself automatically after 30 days",
      "The public link stays when you delete the chat — delete the link separately",
      "Anyone who opened the link gets a deletion notice",
    ],
    explain: "Deleting a shared chat does not delete its public link. Go to \"Settings\" → \"Your public links\" to delete the link separately. Also, chats already reviewed by a human are not deleted and can remain for up to 3 years.",
  },
  "ch309-rules": {
    prompt: "You want to upload a health checkup report and ask, \"With these numbers, can I stop taking my medicine?\" According to Google's help guide, what is the right approach?",
    choices: [
      "Stop taking the medicine based on Gemini's judgment",
      "Use Gemini to explain the report for reference, but ask a doctor for diagnosis or treatment",
      "Trust it instead of a doctor if you are using a paid model",
      "Trust it completely if you ask the question several times in a row and get the exact same answer",
    ],
    explain: "Google says not to rely on Gemini for medical advice, diagnosis, treatment, or professional legal or financial advice. Its replies are for reference only, and it can state wrong information as if it were fact.",
  },
  "ch310-voice": {
    prompt: "In the Gemini mobile app, you tap the microphone and pause to think about your question. Up to how long will the microphone stay open?",
    choices: [
      "10 seconds",
      "30 seconds",
      "Five minutes",
      "Until you turn it off manually",
    ],
    explain: "The microphone in the mobile app stays open for up to 5 minutes while listening for your question.",
  },
  "ch310-live": {
    prompt: "While practicing a presentation with Gemini Live, you tapped \"End.\" What happens to that conversation?",
    choices: [
      "The conversation continues as a text chat — no need to start a new chat",
      "The conversation is deleted right away",
      "Only an audio recording stays in your history, with no text transcript at all",
      "You have to start a brand-new chat to use Live again",
    ],
    explain: "Tapping \"End\" continues the same conversation as a text chat, and tapping \"Live\" again brings you back to voice. If you only want to pause briefly, use \"Hold.\"",
  },
  "ch310-mobile": {
    prompt: "You want to share your phone screen during a Live session. What should you check before sharing?",
    choices: [
      "Your screen brightness",
      "Whether your battery is over 50%",
      "Whether your phone screen is rotated into landscape mode before you start sharing it Live",
      "That no passwords, payment info, or private messages show — your whole screen is shared",
    ],
    explain: "Screen sharing shows your entire phone screen to Gemini. Before sharing, make sure nothing private is visible on screen. Also, ask for permission before recording other people.",
  },
  "ch310-desktop": {
    prompt: "You installed the Gemini app on a Windows computer. Which keyboard shortcut brings it up right away?",
    choices: [
      "Alt + Space",
      "Ctrl + C",
      "Option + Space",
      "Windows key + L",
    ],
    explain: "On Windows, press Alt + Space to open the app. On a Mac, press Option + Space.",
  },
  "ch311-how": {
    prompt: "You are doing practice chats for a hands-on exercise. Why does the guide tell you not to click thumbs-up or thumbs-down during practice?",
    choices: [
      "Clicking them lowers your usage limit",
      "Sending feedback lets that chat help improve services even if \"Keep Activity\" is off",
      "Clicking those buttons immediately makes the entire chat conversation public to everyone",
      "Clicking them changes the reply",
    ],
    explain: "When you send feedback, that feedback and the related chat are used to improve services even if you turned off activity history. Since you plan to delete practice chats, avoid creating a copy that stays behind.",
  },
  "ch311-check": {
    prompt: "After finishing the hands-on exercise, you disconnected Gmail. What else should you do to clean up your practice traces?",
    choices: [
      "Nothing else — disconnecting deletes everything",
      "Create a brand-new Google Account",
      "Delete the practice chats separately — chat history stays after you disconnect",
      "Completely uninstall and reinstall your web browser so the local cache is cleared",
    ],
    explain: "Even after you disconnect a connected app, your chat history in \"Gemini Apps Activity\" remains. Remember to also clean up your practice chats, public links, and any practice instructions, skills, or schedules.",
  },
  "ch312-tools": {
    prompt: "You want help with a simple job like \"Polish next week's book club notice.\" Which feature is best to start with?",
    choices: [
      "Deep Research",
      "Tasks + a daily schedule",
      "Connecting Gmail and Drive",
      "A regular chat",
    ],
    explain: "For most everyday work, a regular chat is plenty. Deep Research and Tasks use a lot of your limit, and connected apps and Tasks hand over more of your data, so use them only when you really need them.",
  },
  "ch312-layers": {
    prompt: "In every single chat, you always ask, \"Put a one-line summary at the very top of your reply.\" Where is the best place to save this?",
    choices: [
      "Under \"Instructions for Gemini\" — for rules you want followed every time",
      "Inside a notebook source list, where all your uploaded reference documents are stored",
      "A schedule in Tasks",
      "A public link",
    ],
    explain: "If you want the same rule in every chat, put it in your instructions. Build step-by-step routines for specific situations as skills, and set up recurring jobs as schedules.",
  },
  "ch312-data": {
    prompt: "You uploaded a store sales table and asked Gemini to total the sales by item. What is a good way to check whether you can trust the result?",
    choices: [
      "Trust it if the reply is long and detailed",
      "Test it first on past data with known totals, and ask it to show its steps",
      "Send the exact same question again in a new chat and trust it if the numbers match",
      "Trust it if the chart looks neat",
    ],
    explain: "Testing first on data where you already know the answer makes it easier to trust on new data. Asking it to show how it calculated the numbers helps you spot mistakes, and you should double-check important math in a spreadsheet.",
  },
  "ch312-check": {
    prompt: "What rule of thumb does this guide recommend for deciding how carefully to fact-check a reply?",
    choices: [
      "Check every single reply from Gemini with the exact same level of care every time",
      "Never check replies from a paid model",
      "The more you stand to lose if it is wrong, the more carefully you should check",
      "Never check replies that include sources",
    ],
    explain: "Match your checking to the weight of the task. A quick glance is fine for light topics like dinner ideas, but for heavy matters like contracts, health, or money, open the sources and check with an expert.",
  },
}

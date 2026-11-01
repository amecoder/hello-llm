// English chapter titles and quiz text for guide/11-chatgpt (Korean source: quiz-bank*.ts, same ids and answers).
export const CHATGPT_CHAPTER_TITLE_EN: Record<number, string> = {
  101: "Chapter 1. Getting Started",
  102: "Chapter 2. A Tour of the Screen",
  103: "Chapter 3. Managing Conversations",
  104: "Chapter 4. Files, Photos, and Creating Images",
  105: "Chapter 5. Memory and Personalization",
  106: "Chapter 6. Search and Deep Research",
  107: "Chapter 7. Projects, Plugins, and Work",
  108: "Chapter 8. Privacy and Data Controls",
  109: "Chapter 9. Talking by Voice",
  110: "Chapter 10. Hands-On Practice",
  111: "Chapter 11. Using It Like an Expert",
}

export const CHATGPT_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch101-logged-out": {
    prompt: "Which statement is true when using ChatGPT without logging in?",
    choices: [
      "In Korea, you cannot ask any questions without logging in",
      "You can only have one chat at a time, and no history is saved",
      "Your chat history is saved, but you cannot see it on other devices",
      "Your chat history is saved for 30 days",
    ],
    explain: "Before logging in, you can only have one chat at a time, and your history disappears when you close the window.",
  },
  "ch101-login": {
    prompt: "You signed up with Apple and chose \"Hide My Email\" to use a fake address. What should you watch out for later?",
    choices: [
      "Logging in with your real email may open a separate account",
      "You will not be able to log in with your Apple account again",
      "Your account will be automatically deleted after 30 days",
      "Your account will automatically merge with your Google account",
    ],
    explain: "If you signed up with a hidden address, you can only access that account with the same Apple ID. Logging in with your real email opens a different account.",
  },
  "ch101-plans": {
    prompt: "Which statement matches the official guide about ads in ChatGPT?",
    choices: [
      "Ads appear above answers on every plan",
      "Advertisers can read your chats",
      "Ads do not affect the answers you get",
      "Temporary Chats show even more ads",
    ],
    explain: "Ads can only appear on Free and Go plans, they do not affect answers, and advertisers cannot see your chats. Temporary Chats have no ads.",
  },
  "ch101-subscribe": {
    prompt: "You deleted the ChatGPT app from your phone to stop using the Plus plan. What happens?",
    choices: [
      "Your paid subscription is canceled the moment you delete the app",
      "It automatically switches to the free plan next month",
      "Your account is deleted along with the app",
      "Your subscription continues, so you must cancel it yourself",
    ],
    explain: "Deleting the app does not cancel your subscription. To stop payments, you have to cancel the subscription yourself.",
  },
  "ch101-apps": {
    prompt: "Which statement is true when using the mobile app or desktop app?",
    choices: [
      "You have to create a new account for each app",
      "You log in to the app with the same account you use on the web",
      "There is no way to select Work in the mobile app",
      "Every app with ChatGPT in its name is an official OpenAI mobile app",
    ],
    explain: "You log in with the same account instead of making a new one for each app. In the mobile app, pick Chat or Work from the top dropdown, and check the developer name when downloading (\"OpenAI OpCo, LLC\" on the App Store, \"OpenAI\" on Google Play).",
  },
  "ch101-trouble": {
    prompt: "ChatGPT stopped answering and keeps showing a \"verify you are human\" puzzle. What is a good first step?",
    choices: [
      "Delete and reinstall the app on your device to reset your usage limit",
      "Create another new account and move over to it",
      "Check the service status and turn off your VPN for a moment",
      "Keep resending the same question every second",
    ],
    explain: "First check status.openai.com for an outage, and if the puzzle shows up every time, suspect a VPN or browser extension. Reinstalling the app does not reset usage limits.",
  },
  "ch102-layout": {
    prompt: "Where is the \"Chat\" / \"Work\" switch button on the first screen after logging in?",
    choices: [
      "At the top center of the screen",
      "Bottom left next to your account name",
      "Inside the + menu in the box",
      "In the \"General\" menu under Settings",
    ],
    explain: "\"Chat\" / \"Work\" is at the top center of the screen. The account menu is at the bottom left, and the + button is on the left side of the message box.",
  },
  "ch102-sidebar": {
    prompt: "What is \"Pinned threads\" in the sidebar?",
    choices: [
      "A group chat room shared with other people",
      "A trash bin that holds chats right before deletion",
      "A list of chats you open often, kept at the top",
      "A collection of breaking news found on the internet",
    ],
    explain: "A thread means a single chat. \"Pinned threads\" is a list of chats you have pinned to the top.",
  },
  "ch102-chat-work": {
    prompt: "Which statement explains the difference between Chat and Work?",
    choices: [
      "Chat is paid-only, while anyone can use Work",
      "Work is a mode where you hand off long tasks to get finished results",
      "Chat only speaks English, while Work only speaks Korean",
      "They only have different names on the screen and do the exact same thing",
    ],
    explain: "Chat is for back-and-forth questions and answers, while Work is a mode for handing off longer tasks to get finished items like documents or tables. Work on web and mobile is available on paid plans (excluding Free and Go).",
  },
  "ch102-plus": {
    prompt: "What happens if you paste a long text of over 10,000 characters into the message box?",
    choices: [
      "Everything after 10,000 characters gets cut off and disappears",
      "The send button stops working",
      "It automatically splits into several separate chats",
      "It automatically turns into an attached file",
    ],
    explain: "Pasting over 10,000 characters automatically turns the text into an attachment. You can turn it back into regular text in the box with \"Show in text field\".",
  },
  "ch102-reasoning": {
    prompt: "On the Plus plan, if you leave the \"Reasoning level\" on Instant and type \"Think deeper,\" what happens?",
    choices: [
      "The level stays the same, so move the slider yourself",
      "It understands your request and switches to the highest level",
      "It switches to Medium starting from your next chat",
      "The free plan's \"Think\" button turns on instead",
    ],
    explain: "Asking in words does not change the level automatically. If you need a deeper answer, move the \"Reasoning level\" slider yourself.",
  },
  "ch102-settings": {
    prompt: "What is the actual screen name in Settings where training permission, shared links, and data export are gathered?",
    choices: [
      "\"General\"",
      "\"Security and login\"",
      "\"Data controls\"",
      "\"Storage\"",
    ],
    explain: "Help articles may use slightly different wording, but the actual menu name on the screen is \"Data controls\".",
  },
  "ch103-new": {
    prompt: "A chat has gotten too long, so you want to move to a new chat. What is the best way?",
    choices: [
      "Open a new chat and explain everything again from scratch",
      "Ask for a handoff note and paste it into a new chat",
      "Delete the old chat so the new chat inherits its content",
      "Type \"Start over\" inside the same chat",
    ],
    explain: "If you ask for a handoff note with your decisions, preferences, and remaining tasks and paste it into a new chat, you can pick right back up.",
  },
  "ch103-search": {
    prompt: "What can you do with the magnifying glass (\"Search\") in the sidebar?",
    choices: [
      "Look up the latest breaking news on the internet right now",
      "Find and restore chats you deleted",
      "Browse shared chats from other people",
      "Search inside your own chats, projects, and files",
    ],
    explain: "Chat search only looks through your own items and does not search the internet. Deleted chats do not show up, while archived chats do.",
  },
  "ch103-archive-delete": {
    prompt: "What is the real difference between \"Archive\" and \"Delete\" for a chat?",
    choices: [
      "Archiving can be undone, but deleting cannot be undone",
      "Both can be restored anytime within 30 days",
      "Deleted chats stay inside \"Archived chats\" for up to 30 days",
      "Archiving also deletes the files in your Library",
    ],
    explain: "Archiving just hides a chat from the sidebar, so it still appears in search and can be undone with \"Unarchive\". Deleting cannot be undone and schedules permanent removal within 30 days.",
  },
  "ch103-share": {
    prompt: "You created a shared link and then kept chatting. What will people with the link see?",
    choices: [
      "They automatically see the entire conversation up to right now",
      "The link expires, so they see nothing",
      "They only see the chat up to when you made the link",
      "Only people you approve can see the new messages",
    ],
    explain: "A shared link is a snapshot from the moment you made it. To show newer messages, you have to press \"Update link\", and links do not have an expiration date.",
  },
  "ch103-temporary": {
    prompt: "Which statement is true about Temporary Chat?",
    choices: [
      "Nothing is saved anywhere, so entering passwords is safe",
      "It stays off your list, but a copy may be kept for up to 30 days",
      "It saves many more new memories than usual",
      "Files you upload in Temporary Chat are still collected in your Library",
    ],
    explain: "Temporary Chats are left out of history and training and do not create new memories, but copies may be kept for up to 30 days for safety reasons. Uploaded files are not saved to the Library either.",
  },
  "ch103-locked": {
    prompt: "What happens if you forget your account PIN for locked chats and reset it?",
    choices: [
      "All locked chats unlock and return to your chat list",
      "Customer support can restore your locked chats on request",
      "You can open your old locked chats with the new PIN",
      "All locked chats and their files are permanently deleted",
    ],
    explain: "If you reset your PIN, all locked chats and the files inside them are permanently deleted, and support cannot recover them either.",
  },
  "ch104-upload": {
    prompt: "How can you show a Google Docs (.gdoc) file to ChatGPT?",
    choices: [
      "Download it as a PDF or Word file first, then upload it",
      "Upload the .gdoc file directly as it is",
      "Paste the Google Docs link in the box so it reads the text",
      "Upgrade first, since only paid plans can upload .gdoc files",
    ],
    explain: "You cannot upload a .gdoc file directly. Download it as a PDF or Word file first, and then upload it.",
  },
  "ch104-limits": {
    prompt: "What does the official help guide say is the file upload limit on the Free plan?",
    choices: [
      "Up to 10 files per month",
      "Up to 1 file every 3 hours",
      "Up to 3 files per day",
      "Unlimited files",
    ],
    explain: "The Free plan lets you upload up to 3 files per day. Audio files can only be uploaded on paid plans.",
  },
  "ch104-library": {
    prompt: "You deleted a chat where you uploaded a file. What happens to that file saved in your Library?",
    choices: [
      "It is deleted right away along with the chat",
      "It stays in your Library just as it is",
      "It deletes itself along with the chat after 30 days",
      "It moves to \"Archived chats\"",
    ],
    explain: "Even if you delete the chat, files saved in your Library stay there. You delete files separately inside the Library.",
  },
  "ch104-image": {
    prompt: "You want to change only the background of an image ChatGPT made. What is the best request?",
    choices: [
      "\"Draw it again\"",
      "\"Not great, make it prettier\"",
      "Delete the first request and ask for a new topic in a new chat",
      "\"Change the background to night and keep the rest the same\"",
    ],
    explain: "Just like with text, pointing out both what to change and what to keep gets you much closer to the image you want.",
  },
  "ch104-sketch": {
    prompt: "When is \"Sketch\" in the + menu useful?",
    choices: [
      "When you want to draw a layout that is hard to explain in words",
      "When you want to pick and upload a saved photo from your own computer",
      "When you want to reuse an older file from your Library",
      "When you want to find and attach a similar image from the web",
    ],
    explain: "\"Sketch\" attaches a quick drawing you make as an image. You do not need to draw well—just use it to show a layout or shape.",
  },
  "ch105-why": {
    prompt: "What is the biggest change when you turn on Memory and Custom Instructions?",
    choices: [
      "You do not have to re-explain your situation in every new chat",
      "ChatGPT finds newer information on the internet for you",
      "It stops any wrong facts from ever getting into answers",
      "Your full chat history is automatically shared with your family accounts",
    ],
    explain: "Both features let you share context about yourself ahead of time. They have nothing to do with searching for current info or guaranteeing accuracy.",
  },
  "ch105-memory-kinds": {
    prompt: "According to the help guide, what is the difference between \"Saved memories\" and \"Reference chat history\"?",
    choices: [
      "They only have different names and work the exact same way",
      "Reference chat history only uses things you asked it to remember",
      "Memories are stored separately; history pulls from past chats",
      "Saved memories are only created while Temporary Chat is on",
    ],
    explain: "Saved memories are facts stored separately from your chat history, while Reference chat history pulls details from past chats as needed.",
  },
  "ch105-delete": {
    prompt: "In a chat, you said \"I'm a vegetarian, remember that,\" creating a saved memory. What happens if you delete that chat?",
    choices: [
      "The saved memory from that chat is deleted right away too",
      "The saved memory stays separately, so you must delete it yourself",
      "The saved memory from that chat moves over to Temporary Chat automatically",
      "The deleted chat comes back on its own after 30 days",
    ],
    explain: "Deleting the original chat leaves the saved memory behind. You delete it separately under \"Memory summary\" → \"Manage\".",
  },
  "ch105-instructions": {
    prompt: "After editing your Custom Instructions on Plus, what is the surest way to check if the changes are working?",
    choices: [
      "Send the same question again in your current chat",
      "Turn on Temporary Chat as \"Not personalized\" and ask",
      "Save the instructions and wait about a day before asking",
      "Open a brand-new chat and ask the same question again",
    ],
    explain: "Help pages give mixed answers on whether changes apply to an ongoing chat right away, but they definitely apply to new chats. Starting a Temporary Chat as \"Not personalized\" ignores instructions, so it will not work as a test.",
  },
  "ch105-style": {
    prompt: "What happens when you turn on \"Use my writing style\" in \"Personalization\"?",
    choices: [
      "It checks your chats and files to write in your own tone",
      "It automatically fixes spelling and spacing in your messages",
      "It locks the tone of every answer to \"Professional\"",
      "It shows your writing to other users as an example",
    ],
    explain: "As described on screen, \"Use my writing style\" references your chats, Library files, and connected apps so ChatGPT writes in your voice.",
  },
  "ch105-temporary": {
    prompt: "You started a Temporary Chat as \"Not personalized\" and asked, \"What shop did I say I run?\" It says it does not know. Why?",
    choices: [
      "Your memory storage is completely full, so it cannot remember more",
      "Temporary Chat only uses memory on the free plan",
      "This option ignores memory and instructions when answering",
      "Temporary Chat only answers using web search results",
    ],
    explain: "Before starting a Temporary Chat, you choose between \"Personalized\" and \"Not personalized\". \"Not personalized\" ignores memory, plugins, and custom instructions. Either way, Temporary Chat never creates new memories.",
  },
  "ch106-web-search": {
    prompt: "You want to ask, \"What is the minimum wage this year?\" What is the right way?",
    choices: [
      "Type it into the magnifying glass \"Search\" at the top of the sidebar",
      "Click the + button → choose \"Web search\" and ask your question",
      "Turn on Temporary Chat first, since search only works there",
      "Upgrade first, since only paid plans can ask for current info",
    ],
    explain: "Sidebar \"Search\" only looks through your own chats, projects, and files. Use Web search for internet info, which is available on every plan including Free.",
  },
  "ch106-citations": {
    prompt: "A web search answer comes with source links. What is the best approach?",
    choices: [
      "If there is a link attached, the info is verified, so just use it as is",
      "More sources mean higher accuracy, so just count the links",
      "The source list is just ads, so ignore it",
      "Open the link and check if the numbers match the original page",
    ],
    explain: "Even OpenAI notes that search results and citations can be incomplete, outdated, or wrong. You have to open the link and compare it with the original text to be sure.",
  },
  "ch106-location": {
    prompt: "When asking \"Find a pharmacy near me,\" what is true about sharing your device's exact location?",
    choices: [
      "It is on from the start and users cannot turn it off",
      "It starts turned off and you can turn it on in \"Location\" settings",
      "It is always sent to outside search providers along with your account info",
      "Location info is only used in Deep Research",
    ],
    explain: "ChatGPT guesses your rough location from your IP address, and exact device location sharing is off by default. It does not send your IP address or account details to search providers.",
  },
  "ch106-shopping": {
    prompt: "You see a product price shown by ChatGPT and want to buy it right away. What does the help guide recommend?",
    choices: [
      "Check final price, shipping, and return rules on the seller's site",
      "Buy right away, since the first price shown is the lowest",
      "Ignore product results completely because they are ads",
      "Trust the review summary as is, since OpenAI already verified every detail",
    ],
    explain: "The price shown first comes from the first merchant listed and may not be the lowest, and review summaries are not verified. Product results are not ads, but always check directly on the seller's site before paying.",
  },
  "ch106-deep-research": {
    prompt: "When you start Deep Research, what happens before the report comes out?",
    choices: [
      "It shows a research plan first, and you can edit it before starting",
      "A payment window pops up charging you for each report",
      "You cannot add any comments until the report is finished",
      "It automatically reads only one single website that you pick ahead of time",
    ],
    explain: "Deep Research proposes a research plan first, and you can adjust it. You can also step in while it works, and the final result comes out as a report with citations.",
  },
  "ch106-limits": {
    prompt: "You want to know how many more times you can use Deep Research. What should you do?",
    choices: [
      "Every plan gets the exact same 10 uses per month",
      "It refills on the 1st of every month, so just check the date",
      "Check the remaining count shown right inside the app",
      "There is no usage limit, so do not worry about it",
    ],
    explain: "Limits vary by plan and can be checked right inside the app. Your monthly limit refills every 30 days from the day you first used it.",
  },
  "ch107-projects": {
    prompt: "Your usual Custom Instructions say \"Reply politely in Korean,\" while your \"English Study\" project instructions say \"Reply only in English.\" What happens in a chat inside that project?",
    choices: [
      "Custom Instructions always win, so it replies in Korean",
      "The two rules clash, so it gives no answer at all",
      "Project instructions only work inside shared group projects",
      "Project instructions come first, so it replies in English",
    ],
    explain: "Project instructions apply only inside that project, and they take priority over your general Custom Instructions.",
  },
  "ch107-template": {
    prompt: "Pasting your weekly report format every single week is a hassle. What does this chapter recommend?",
    choices: [
      "Paste the weekly format into a Temporary Chat so it stays saved there",
      "Put the format in project instructions and chat inside there",
      "Search the web for a similar format every week",
      "Skip the format and write it from scratch each week",
    ],
    explain: "If you save a reusable format in project instructions, you only need to paste this week's notes into a new chat inside that project.",
  },
  "ch107-plugins": {
    prompt: "Which statement is true about plugins?",
    choices: [
      "Only paid plans can view the plugin directory",
      "You can only use an installed plugin by typing `@` and its name",
      "You find and install them from the directory under \"Plugins\" in the sidebar",
      "When the directory changed, all of your previously connected apps were disconnected",
    ],
    explain: "You find and install plugins from the directory under \"Plugins\" in the sidebar, and the directory is visible on all plans. You can just ask naturally or call them with `@`, the + button, or \"Plugins\", and previously connected apps stay connected.",
  },
  "ch107-permissions": {
    prompt: "You connected Gmail and later disconnected it. Which statement is true?",
    choices: [
      "All of the email content brought in so far is deleted from chats and memory",
      "It just cannot read new emails; you must delete past content yourself",
      "Disconnecting also turns off the model training switch",
      "Simply changing permission to \"Always ask\" disconnects the app",
    ],
    explain: "Disconnecting only stops future access; content already brought into chats, files, or memory stays behind. App permissions work separately from training settings, and changing permissions does not disconnect the app.",
  },
  "ch107-work": {
    prompt: "What is best for a multi-step job that needs a finished file, like \"Make a 10-slide presentation from this quarter's sales file\"?",
    choices: [
      "Switch the top of the screen to \"Work\" and hand it off",
      "Look it up using the magnifying glass \"Search\" in the sidebar",
      "Turn on Agent mode in Settings and hand it off",
      "Write the task down in Custom Instructions",
    ],
    explain: "Work is built for longer, multi-step jobs and finished outputs like documents, tables, and slide decks. Agent mode is no longer available.",
  },
  "ch107-retired": {
    prompt: "You are using a custom GPT that you built yourself. What does this chapter advise?",
    choices: [
      "Custom GPTs will keep working forever, so no prep is needed",
      "When they end, all past chat history with that Custom GPT disappears too",
      "Custom GPTs will automatically move over to Agent mode",
      "They are scheduled to end, so save your instructions and files early",
    ],
    explain: "Custom GPTs are scheduled to be retired on 2026-12-11 and are moving to plugins. Your chat history will stay, but it is safest to back up your instructions and reference files ahead of time.",
  },
  "ch108-screen": {
    prompt: "Where do you go in ChatGPT to manage model training, shared links, and data export all on one screen?",
    choices: [
      "\"Library\" in the sidebar",
      "\"Data controls\" inside \"Settings\"",
      "The \"+\" menu in the message box",
      "\"Personalization\" inside \"Settings\"",
    ],
    explain: "The training switch, shared links, archive/delete options, and data export are all gathered on one screen under \"Settings > Data controls\".",
  },
  "ch108-training": {
    prompt: "Even after turning off \"Improve the model for everyone,\" when can a chat still be used for training?",
    choices: [
      "When you rename the chat title in the sidebar",
      "When you log in to the mobile app on your phone with the same account",
      "When you send feedback like thumbs-up or thumbs-down on an answer",
      "When you \"Archive\" the chat to hide it from the sidebar",
    ],
    explain: "Even with training turned off, sending feedback can allow that entire conversation to be used for training. Turning the setting off while logged in applies across all devices, including the mobile app.",
  },
  "ch108-share": {
    prompt: "Months ago, you posted a ChatGPT shared link in a group chat. How do you make sure nobody can view it anymore?",
    choices: [
      "Delete that link under \"Manage\" next to \"Shared links\"",
      "Just wait, since shared links expire on their own over time",
      "\"Archive\" the original chat to hide it from your sidebar",
      "Turn off \"Improve the model for everyone\"",
    ],
    explain: "Anyone with a shared link can view it, and links never expire. Deleting the link under \"Shared links\" → \"Manage\" is the sure way to cut off access.",
  },
  "ch108-delete": {
    prompt: "You are about to press \"Delete all chats\" in \"Data controls\". What does this chapter suggest doing first?",
    choices: [
      "Ask customer support ahead of time to restore them later",
      "Turn on Temporary Chat so deleted chats return in 30 days",
      "Turn off the training switch first to unlock the delete button",
      "Use \"Export data\" to download a backup of your chats first",
    ],
    explain: "Deleting all chats cannot be undone, and customer support cannot bring them back either. If there are chats you want to keep, download a backup with \"Export data\" before pressing delete.",
  },
  "ch108-export": {
    prompt: "You requested \"Export data\" and got a download link by email. What should you keep in mind?",
    choices: [
      "The link works for 7 days, so take your time until the weekend",
      "The link expires 24 hours after it arrives, so download it soon",
      "The file only has account info without chats, so store it anywhere",
      "Getting the link deletes your account, so cancel your plan first",
    ],
    explain: "The email can take up to 7 days to arrive, but once it arrives, the link expires after 24 hours. The file contains all your chats, so do not download it onto a public computer.",
  },
  "ch108-account": {
    prompt: "Someone who paid for a ChatGPT subscription through the iPhone App Store wants to delete their account. What should they do first?",
    choices: [
      "Delete the ChatGPT app from their phone",
      "Clear out their chats first with \"Delete all chats\"",
      "Cancel the subscription directly through Apple",
      "Create another new account using the same email",
    ],
    explain: "Deleting your account does not cancel an Apple-billed subscription, and deleting the app does not stop it either. You must cancel the subscription first where you paid for it.",
  },
  "ch108-security": {
    prompt: "You see chats in your sidebar that you never had. What is the very first thing you should do?",
    choices: [
      "Turn on Lockdown Mode and keep using the account as is",
      "Use only Temporary Chat from now on",
      "Delete just the unfamiliar chats and keep using the account as usual",
      "Change your password and turn on multi-factor authentication",
    ],
    explain: "Changing your password logs out all devices within 30 minutes. Also turn on multi-factor authentication and check active sessions under \"Security and login\". Lockdown Mode reduces data leaks from hidden prompts; it is not a logout feature.",
  },
  "ch108-family": {
    prompt: "A parent linked their teen's account using parental controls. What can the parent do?",
    choices: [
      "Read all the messages their teen sends and receives",
      "Watch their teen's chat history live in real time",
      "Adjust certain features and set usage hours for their teen",
      "Change the password on their teen's account for them anytime they want",
    ],
    explain: "Parental controls let a parent adjust certain features, set quiet hours, and receive rare safety alerts. Even with linked accounts, parents cannot see their teen's messages, history, or live activity.",
  },
  "ch108-business": {
    prompt: "Which statement is true for an employee working with a company ChatGPT Business account?",
    choices: [
      "They need to turn off the training switch more often than on a personal account",
      "Using a personal account gives the exact same protection",
      "Business never saves chats, so they can paste anything at all",
      "Training is off by default, but company rules decide what to upload",
    ],
    explain: "Content on Business, Enterprise, and Edu plans is excluded from training by default. Even so, company policy comes first for what you are allowed to enter, and personal accounts do not get this protection.",
  },
  "ch109-buttons": {
    prompt: "You want to speak a long question out loud, but read and edit the text before sending it. Which button should you use?",
    choices: [
      "The microphone button in the message box (Dictation)",
      "The blue waveform button in the message box (Voice Mode)",
      "\"+\" in the message box → \"Web search\"",
      "The \"Temporary Chat\" button at the top right",
    ],
    explain: "Dictation turns your speech into text inside the message box, so you can read and edit it before sending. Voice Mode talks back and forth right away without a step to edit text first.",
  },
  "ch109-start": {
    prompt: "Which statement is true about Voice Mode?",
    choices: [
      "Unlike typing, you cannot ask it to revise its answer in Voice Mode",
      "You can only have one voice conversation at a time",
      "Voice Mode only works on the mobile app",
      "Running two voice chats at once makes answers come faster",
    ],
    explain: "You can only run one voice conversation at a time. On the web, start it with the voice button in the message box, and you can ask out loud for changes like \"Make it shorter.\"",
  },
  "ch109-modes": {
    prompt: "You want to point your phone camera at a broken appliance and ask about it by voice. Which mode should you use?",
    choices: [
      "Dictation in the web message box (microphone button)",
      "Live mode in the mobile app",
      "Advanced mode in the mobile app",
      "Standard mode in the mobile app",
    ],
    explain: "Camera and screen sharing only work in Advanced mode on the mobile app. Live mode listens and speaks at the same time, but it does not support video or screen sharing.",
  },
  "ch109-limits": {
    prompt: "Which statement is true about usage limits for Voice Mode (Live mode)?",
    choices: [
      "Every plan gets unlimited daily use",
      "It resets only once a month on a fixed calendar date for everyone",
      "Once a limit is set, it never changes",
      "It is based on a rolling 24 hours and varies by plan",
    ],
    explain: "Live mode limits are based on the past 24 hours and differ across Free, Go, Plus, and Pro. Because these numbers change often, check the help center for the latest figures.",
  },
  "ch109-privacy": {
    prompt: "On the subway, you want ChatGPT to polish a clinic appointment text. What is the best way?",
    choices: [
      "Type or dictate quietly, leaving out your name and clinic details",
      "Use Voice Mode and speak your name and symptoms clearly",
      "Speak all of your personal details in Standard mode since audio is deleted",
      "Switch to Live mode so people nearby cannot hear you",
    ],
    explain: "Voice Mode can be heard by people around you, and audio from Live and Advanced modes is kept for 30 days along with chat history. In public places, type quietly and leave personal details out of spoken prompts too.",
  },
  "ch110-how": {
    prompt: "Which rule should you follow when doing the practice exercises?",
    choices: [
      "Upload real company files as they are for better practice",
      "Do every single exercise in Temporary Chat and never use regular chat",
      "Use Temporary Chat when you can, and fake data in regular chat",
      "Practice chats delete themselves, so no cleanup is needed",
    ],
    explain: "Temporary Chat leaves no history, is not used for training, and makes no new memories. For exercises that test history or settings, use fake data in regular chat and clean up when you finish.",
  },
  "ch110-check": {
    prompt: "In Exercise 5, you used Web search to get this week's weather. Which action counts as \"checking if it worked\"?",
    choices: [
      "Skip checking since a source link is attached",
      "Open the source link and see if those numbers are really there",
      "Ask the exact same question one more time and trust it if it matches",
      "Check it off as reliable if the answer is long and detailed",
    ],
    explain: "Search results and citations can still be wrong or outdated. Your check is only complete when you click the source link and see that the information is actually there.",
  },
  "ch111-difference": {
    prompt: "In OpenAI's report on how companies use ChatGPT, what did they say is underused even where it would help a lot?",
    choices: [
      "The basic message box for typing your everyday questions and prompts",
      "The button for copying answers",
      "Advanced features like reasoning, Deep Research, and projects",
      "The button for opening a new chat",
    ],
    explain: "The report notes that advanced features like reasoning, Deep Research, projects, and custom instructions are underused even where they would pay off most. This chapter covers how to combine them for your work.",
  },
  "ch111-five-lines": {
    prompt: "In the \"Five Lines for Handing Off Work,\" which line does \"Check at the end that the total matches the original\" belong to?",
    choices: [
      "Outcome — what you are making and who it is for",
      "Keep — parts that must not be changed",
      "Review check — how to judge if it was done right",
      "Format — the layout and overall length of the final answer",
    ],
    explain: "It sets the standard for judging whether the result is right, so it is a review check. OpenAI recommends including review criteria when handing off tasks to Work.",
  },
  "ch111-tools": {
    prompt: "When you wonder if ChatGPT can do a certain task, what does this chapter recommend?",
    choices: [
      "Ask \"Can you do this?\" first",
      "Just ask it to do the task right away and see",
      "Turn the reasoning level all the way up and then ask",
      "Turn on Temporary Chat and repeat the same question",
    ],
    explain: "ChatGPT cannot see how its own system is wired, so if you ask whether it can do something, it may guess wrong. It is better to just give it the task and see.",
  },
  "ch111-sources": {
    prompt: "In a project chat, how do you save a great answer to reuse as reference material later?",
    choices: [
      "Copy the answer and paste it into a new chat",
      "Archive that chat to hide it from the sidebar",
      "Turn the answer into a shared link and send it to yourself",
      "Choose \"Add to project sources\" from the message menu",
    ],
    explain: "Open the message menu on the answer and pick \"Save to project\" or \"Add to project sources\" to add that reply to the project's \"Sources\" (exact wording may vary by screen).",
  },
  "ch111-templates": {
    prompt: "Which statement is true about templates and skills?",
    choices: [
      "Templates are made right inside regular Chat on any plan",
      "The help guide says skills are only for the Free plan",
      "Templates are created in Work using `@Template-Creator`",
      "Once you make a template, your whole team sees it automatically",
    ],
    explain: "Templates are created in Work on the web (paid plans) using `@Template-Creator` and are private to the person who made them. According to the help guide, skills are available on work and school plans.",
  },
  "ch111-scheduled": {
    prompt: "What should you watch out for with scheduled tasks?",
    choices: [
      "A task inside a project cannot read that project's files",
      "Scheduled tasks can only be created inside Voice Mode",
      "When shared by link, the instructions are hidden from viewers",
      "Even the Free plan can run tasks every hour on the dot",
    ],
    explain: "Scheduled tasks inside a project cannot read project files, so write any needed details directly in the prompt. Shared links show the prompt as is, and exact-time or hourly runs require a paid plan.",
  },
  "ch111-data": {
    prompt: "How should you tidy up a file before handing it over for data analysis?",
    choices: [
      "Put several related tables together on a single sheet",
      "Insert blank rows here and there to make it look neat",
      "Take a photo of the table of numbers and upload the picture",
      "Put column names in the first row and one record per row",
    ],
    explain: "Clear column names in the first row and one item per row work best. Avoid putting multiple tables or blank rows on one sheet, and numbers read from photos of tables may not be accurate.",
  },
  "ch111-study": {
    prompt: "Where can you NOT turn on Study mode?",
    choices: [
      "A regular chat in the mobile app",
      "A chat inside one of your projects",
      "A regular chat on the Free plan",
      "A new chat screen opened on the web browser",
    ],
    explain: "Study mode works on web, iOS, and Android across all plans, but you cannot turn it on in Temporary Chat, custom GPTs, or projects.",
  },
  "ch111-shape": {
    prompt: "What can you try when answers feel cluttered with too many tables, buttons, and charts?",
    choices: [
      "Turn on Temporary Chat and ask the same question again",
      "Lower the reasoning level all the way down and ask again",
      "Change the layout option to \"Simple\" in Settings",
      "Turn off memory and delete saved memories",
    ],
    explain: "In web Settings under Personalization, switching Layout and Visuals to Simple cuts down on extras like tables and visuals, though some may still appear.",
  },
  "ch111-verify": {
    prompt: "What should you check before trusting data analysis results?",
    choices: [
      "The calculation steps, code, and assumptions",
      "The font and colors used in the answer",
      "The total time it took for the answer to appear",
      "The character count shown below the answer",
    ],
    explain: "OpenAI advises reviewing the generated code, output, and assumptions before using analysis results. If the method matters, ask ChatGPT to show it or change it.",
  },
  "ch111-academy": {
    prompt: "Which statement is true about OpenAI Academy courses?",
    choices: [
      "Only paid plan subscribers can take them",
      "Earning a badge counts as an official certification",
      "You need a company account to sign up for the courses",
      "Anyone with a ChatGPT account can take them for free",
    ],
    explain: "Academy courses are free, and anyone with a ChatGPT account can take them at their own pace. Scoring 80% or higher on a quiz earns a badge, but it is not an official certification.",
  },
}

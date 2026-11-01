// English chapter titles and quiz text for guide/10-claude (Korean source: quiz-bank*.ts, same ids and answers).
export const CLAUDE_CHAPTER_TITLE_EN: Record<number, string> = {
  201: "Chapter 1. Getting Started",
  202: "Chapter 2. Exploring the Screen",
  203: "Chapter 3. Managing Chats",
  204: "Chapter 4. Files and Artifacts",
  205: "Chapter 5. Memory and Personalization",
  206: "Chapter 6. Search and Research",
  207: "Chapter 7. Projects, Connectors, and Skills",
  208: "Chapter 8. Cowork",
  209: "Chapter 9. Privacy and Safety",
  210: "Chapter 10. Voice and Phone",
  211: "Chapter 11. Hands-on Exercises",
  212: "Chapter 12. Working Like an Expert",
}

export const CLAUDE_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch201-where": {
    prompt: "Your high school nibling wants to use Claude for homework and asks for help signing up. What should you check first?",
    choices: [
      "First check whether they are at least 18 years old",
      "Help install the desktop app first since it is required",
      "Have them download the mobile app first since sign-up is app-only",
      "Sign up right away since there are no regional rules",
    ],
    explain: "To use Claude, you must be at least 18 and in a supported region (including Korea). If you meet the requirements, starting on the web is easiest because there is nothing to install.",
  },
  "ch201-login": {
    prompt: "You are trying to log in to Claude with your email, but there is no password field. What should you do?",
    choices: [
      "Call customer support to get a new password",
      "Open your email and click the login link from Claude",
      "Create a brand-new password dedicated to Claude first",
      "Try making another account with a different email address",
    ],
    explain: "Claude does not use account passwords. When you enter your email, Claude sends a message with a login link—just click that link. If you don't see it, check your spam folder.",
  },
  "ch201-phone": {
    prompt: "During sign-up, you are asked for phone verification by text. You are thinking of borrowing a family member's phone for a moment. What is the best move?",
    choices: [
      "Use the borrowed number now and switch to yours later",
      "Skip phone verification for now and finish signing up first",
      "Verify with your own phone number that you will keep using",
      "Create a virtual internet phone number and verify with that",
    ],
    explain: "Once verified, a phone number cannot be changed later. You cannot skip this step, and internet (VoIP) or landline numbers do not work. Verify with your own mobile number that you plan to keep.",
  },
  "ch201-plans": {
    prompt: "After trying Claude for free, you are wondering whether to upgrade to a paid plan. What is worth doing first?",
    choices: [
      "Buy the most expensive Max plan on an annual bill first",
      "Wait for a sale since discounts run all the time",
      "Prepare only the listed price since tax is already included in it",
      "Check what Free includes first and see what is missing",
    ],
    explain: "You can see what the Free plan includes under Settings → \"Billing.\" Consider upgrading when you need features not on that list. Max is billed monthly only, and prices on the pricing page do not include tax.",
  },
  "ch201-limits": {
    prompt: "You use Claude every day for your shop and keep hitting the usage limit. What is a good first step?",
    choices: [
      "Bundle related questions into a single message",
      "Switch to the mobile app to get a fresh limit",
      "Keep one long chat going regardless of the topic",
      "Break the same question into many small messages",
    ],
    explain: "Bundling related questions into one message uses less of your limit than asking three times separately. Web and mobile share one combined limit, and long chats use more capacity, so start a new chat when you change topics.",
  },
  "ch201-billing": {
    prompt: "You subscribed to Pro in the mobile app and want to stop using it. What is the right way to cancel?",
    choices: [
      "Just delete the app from your phone to end the subscription",
      "Cancel before the billing date under \"Billing\" → \"Manage subscription\"",
      "Call customer support the day after your billing date passes",
      "Simply sign up again with a brand-new email so the old subscription stops on its own",
    ],
    explain: "Cancel on the platform where you subscribed, at least 24 hours before your billing date. Deleting the app does not cancel the subscription, and there is no phone support.",
  },
  "ch201-trouble": {
    prompt: "You see the message \"Due to unexpected capacity constraints…\" What should you do?",
    choices: [
      "Your account is blocked, so sign up again with a new email",
      "You used up your plan limit, so pay for a plan upgrade right away",
      "The service is broken, so call the customer support center",
      "Traffic is heavy now, so wait a few minutes and try again",
    ],
    explain: "This message means lots of people are using Claude at once, not that it is broken. Try again in a few minutes. To check for real outages, visit status.claude.com.",
  },
  "ch202-new-screen": {
    prompt: "You see a toggle to choose between \"Chat\" and \"Cowork\" in the input box. What does this mean?",
    choices: [
      "You are still on the older interface before the new layout rolls out",
      "It shows that your account has already switched over to the new layout",
      "It shows that you are currently on the Free plan",
      "It means you turned off the new layout in Settings on purpose",
    ],
    explain: "In the new layout, Chat and Cowork are combined so you don't pick a mode. If you still see this choice, you are on the older screen, and it will update automatically when it is your turn.",
  },
  "ch202-sidebar": {
    prompt: "Your screen is narrow and the left sidebar gets in the way, but you still need to find past chats sometimes. What should you do?",
    choices: [
      "Go into Settings and turn off the sidebar completely",
      "Keep it closed and open it when looking for past chats",
      "Decide to look up your past chats only on the mobile app",
      "Give up on past chats and always start a fresh chat",
    ],
    explain: "You cannot remove the sidebar completely, only open and close it. If your screen is narrow, keep it closed and open it when you need to find an earlier chat.",
  },
  "ch202-plus": {
    prompt: "You want to see more options in the input box, like uploading files. What should you do?",
    choices: [
      "Press and hold the Send button to open a hidden menu",
      "Open the \"General\" screen inside Settings",
      "Click the \"+\" button in the input box or type \"/\"",
      "Pick \"Max\" effort from the model menu",
    ],
    explain: "Click the \"+\" at the bottom left of the input box or type \"/\" to see features and commands like file upload and Research.",
  },
  "ch202-model-menu": {
    prompt: "You want Claude to carefully analyze a long contract. How should you set Effort, which controls how much work goes into a single reply?",
    choices: [
      "Lower the effort, since lower effort makes replies more thorough",
      "Open a brand-new chat after changing effort so it takes effect",
      "Raise the effort, knowing it is slower and uses more of your limit",
      "Keep effort set to \"Max\" all the time, even for casual daily questions",
    ],
    explain: "For hard tasks like analyzing a long document, try raising the effort. Replies are more thorough, but they take longer and use up your limit faster. Changes apply starting with the next reply in the same chat, and the default setting is plenty for everyday questions.",
  },
  "ch202-fallback": {
    prompt: "You asked an ordinary question, but a safety check triggered a notice saying the model was switched. What should you do if it seems like a mistake?",
    choices: [
      "Create a backup account now since yours will be suspended soon",
      "Open the billing page because your plan was downgraded",
      "Wait until it is fixed because the service is having an outage",
      "Use \"Send feedback\" to report that it was flagged by mistake",
    ],
    explain: "Some models run automatic safety checks on questions and hand off narrow high-risk topics to another model. If it caught your question by mistake, let them know with \"Send feedback.\" If you don't want automatic switching, you can turn it off in Settings → \"Capabilities.\"",
  },
  "ch202-settings": {
    prompt: "Your parents' Claude screen is in English, and they want to ask questions in Korean. What should you tell them?",
    choices: [
      "Tell them they can ask in Korean even if the screen is in English",
      "Tell them they must ask in English until the screen language is changed",
      "Tell them to attach an English translation to every question",
      "Tell them Korean replies only work in the mobile app",
    ],
    explain: "Claude replies in whatever language you write in, regardless of the screen language. If they also want to change the screen language, click their name at the bottom left and choose \"Language.\"",
  },
  "ch203-delete": {
    prompt: "Your chat list in the sidebar has gotten too long. You want to clear away chats from an event that ended, but you might check them again next year. What should you do?",
    choices: [
      "Click \"Delete\" for now and restore them next year if needed",
      "Click \"⋯\" next to the chat and choose \"Archive\" to tuck it away",
      "Just delete them since deleted chats stay in the list for 30 days",
      "Click \"Delete\" since they stay on the server to pull up later",
    ],
    explain: "\"Archive\" tucks a chat out of your main list, which is different from deleting it. Deleted chats disappear from your list right away, are removed from the servers within 30 days, and have no documented way to restore them.",
  },
  "ch203-search": {
    prompt: "On a paid plan, you open a new chat and say, \"Find the chat from last week where I asked about Excel formulas.\" What happens?",
    choices: [
      "Claude searches your past chats and includes a link to the original chat",
      "Claude searches the internet for Excel formula guides and shows them",
      "Claude says it cannot see past chats and tells you to check the list yourself",
      "Claude lists every chat in date order, including incognito chats",
    ],
    explain: "On paid plans, you can ask Claude to look up past chats. The search appears as a tool call, and any past chat used in the answer comes with a link back to the original conversation.",
  },
  "ch203-share": {
    prompt: "You shared a chat by inviting a friend via their email address. What happens if your friend forwards that email to someone else?",
    choices: [
      "The other person can open the chat and continue the conversation",
      "The other person can still open the chat and read it",
      "The other person copies the chat into their account",
      "The other person cannot open the shared link at all",
    ],
    explain: "An invite sent to specific people only opens for the invited email address. Even if the email is forwarded, nobody else can open it. Invited people can also only view the chat.",
  },
  "ch203-public-link": {
    prompt: "You want to show a chat about family health to just one sibling. What is the better way to share it?",
    choices: [
      "Create a public link and send it only to your sibling",
      "Send a public link and turn it off right after they read it",
      "Share it by inviting your sibling's email address",
      "Send a public link after hiding it from web search",
    ],
    explain: "Anyone can open a public link if it gets forwarded, and turning it off later cannot erase copies people already made. To show just one person, invite them by their email address.",
  },
  "ch203-incognito": {
    prompt: "You got a family gift list in an incognito chat and want to look at it again later. What should you do?",
    choices: [
      "Close it now and find it again in your chat list later",
      "Convert it into a regular chat later so it stays saved",
      "Move it into a Project so it stays saved there",
      "Copy the answers you need before closing the chat",
    ],
    explain: "Incognito chats aren't saved to your chat list, cannot be turned into regular chats, and cannot be reopened once closed. Copy anything you want to keep before closing. Even though they don't show in your history, they are retained for 30 days by default, so don't enter secrets like passwords.",
  },
  "ch203-sessions": {
    prompt: "You spot a device you don't recognize in your list of logged-in devices. What should you do?",
    choices: [
      "Leave it alone since it will log out on its own after 28 days",
      "Tap \"Log out of all devices\" in the mobile app",
      "Wait and watch to see if new chats appear from that device",
      "Click \"⋮\" next to that device and choose \"Revoke\"",
    ],
    explain: "You can log out an unfamiliar device right away by clicking \"⋮\" → \"Revoke\" next to it. Logging out of all devices at once only works on the web and is not available in the mobile app yet.",
  },
  "ch204-upload": {
    prompt: "You want to upload a 300-page PDF report and ask Claude to explain a graph inside it. What is the best approach?",
    choices: [
      "Split out and upload only the pages with the graph",
      "Upload all 300 pages since Claude reads every graph anyway",
      "Convert it to a Word file first so Claude can read the images",
      "Take photos of each page since PDFs cannot be uploaded",
    ],
    explain: "For PDFs up to 100 pages, Claude reads images and charts too, but from page 101 onward it reads only text. If visuals matter, trim the file to the pages you need. For non-PDF documents, Claude reads only the text.",
  },
  "ch204-create": {
    prompt: "Claude created a household budget Excel file with monthly totals. What should you do before relying on the file?",
    choices: [
      "Use it as is since Claude did the math",
      "Add up a few totals yourself to make sure they match",
      "Upgrade from Free to a paid plan and generate it again",
      "Have Claude recreate the same file several times and compare",
    ],
    explain: "Claude can do math, but the help docs recommend double-checking complex or important numbers. Add up at least a few totals yourself. File creation works on every plan, though it uses more of your limit than a normal chat.",
  },
  "ch204-artifacts": {
    prompt: "You want to fix just one sentence in a notice created as an Artifact. What is the simplest way?",
    choices: [
      "Highlight that part of the text and click \"Edit with Claude\"",
      "Ask Claude to rewrite the entire notice from scratch",
      "Open a new chat, paste the notice, and fix it there",
      "Export it to a Word file first since you can only edit it there",
    ],
    explain: "Highlight the text you want to change, click \"Edit with Claude,\" and type what you want—Claude will update just that spot. You don't even have to explain in words which part you mean.",
  },
  "ch204-share": {
    prompt: "You made an event info page as an Artifact and want to send the link to a friend. You don't know if your friend uses Claude. What should you do first?",
    choices: [
      "Send the link right away since it opens without an account",
      "Just send the URL since Artifacts are public as soon as you make them",
      "Ask your friend first whether they have a Claude account",
      "Send it as is since it works like a public chat link",
    ],
    explain: "To open a shared Artifact, the viewer also needs a Claude account. That is different from a public chat link, which opens without an account. Artifacts are private to you at first until you click \"Share\" and choose who can see them.",
  },
  "ch204-visuals": {
    prompt: "Claude drew a flowchart right inside your chat. What should you do if you want to use this diagram later?",
    choices: [
      "Do nothing since it saves automatically",
      "Copy it, download it, or save it as an Artifact",
      "Open the chat in the mobile app so it saves",
      "Turn the chat into a public link so it stays saved",
    ],
    explain: "Diagrams drawn inline in a chat (custom visuals) are temporary and aren't saved. To keep one, choose \"Copy as image,\" \"Download,\" or \"Save as Artifact.\"",
  },
  "ch204-images": {
    prompt: "Which of the following can Claude NOT create when you ask for it?",
    choices: [
      "An illustration of a smiling puppy on a beach",
      "A bar chart of sales over the last 6 months",
      "A flowchart showing the steps for making kimchi",
      "A table organizing photos of receipts you uploaded",
    ],
    explain: "Unlike image-generating AI tools, Claude does not create photos or illustrations. Instead, it can build diagrams and charts, and it can look at photos you upload and explain them.",
  },
  "ch204-docs": {
    prompt: "You are about to delete a travel plan you made in Claude Docs, though you might want to see it again later. What should you do?",
    choices: [
      "Delete it for now and restore it from the trash if needed",
      "Delete it since a copy stays in your \"Artifacts\" tab anyway",
      "Delete it since collaborators keep their copy",
      "Click \"Export\" to download a copy before deleting it",
    ],
    explain: "Deleting a document in Claude Docs cannot be undone, and there is no trash bin. Before deleting, use \"Export\" to save a copy as Word, PDF, or another file format.",
  },
  "ch204-google": {
    prompt: "Inside Google Sheets, you asked Claude to fill in the total column, and it changed other cells too. What should you do?",
    choices: [
      "Restore an earlier version from \"File > Version history\"",
      "Start over from scratch since edits aren't saved in history",
      "Convert the sheet to Excel and reopen the Claude panel",
      "Ask Claude to share the spreadsheet with someone else",
    ],
    explain: "Edits Claude makes are saved under your name in Version history. Go to \"File > Version history\" to roll back to an earlier version. At first, it is safer to keep the default \"Ask before editing\" mode and approve changes one by one.",
  },
  "ch205-three-ways": {
    prompt: "You run a side-dish shop. In every new chat, you keep typing \"Reply politely and put the conclusion first.\" Which feature should you use?",
    choices: [
      "Memory, which Claude saves on its own",
      "Instructions, where you write rules yourself",
      "Past chat reference, which looks up chats when you ask",
      "Incognito chat, which leaves no history behind",
    ],
    explain: "Put rules you always want Claude to follow into Instructions, which you write yourself. Memory is saved by Claude as you chat, and past chat reference looks up old conversations when you ask.",
  },
  "ch205-instructions": {
    prompt: "In every chat, you want hard words explained in parentheses. You also have separate rules just for writing price quotes. How should you split them up?",
    choices: [
      "Put both sets of rules together in your account instructions",
      "Type both sets of rules by hand at the start of every new chat",
      "Put general rules in account instructions and quote rules in project instructions",
      "Put only the quote rules in account instructions and skip the general rule entirely",
    ],
    explain: "Account instructions apply to every chat, while project instructions apply only to chats inside that Project. Rules meant for one specific job belong in project instructions.",
  },
  "ch205-memory": {
    prompt: "You are about to tell Claude, \"Remember this: my bank account number is…\" What is the best thing to do?",
    choices: [
      "Say \"Remember this\" so Claude fills it in for you next time",
      "Turn on the sensitive topics switch so Claude saves it",
      "Write it at the very end since memory is summarized at the end",
      "Don't type it at all since account numbers aren't saved anyway",
    ],
    explain: "Claude will not save things like bank account or ID numbers even if you ask. That doesn't mean it is safe to paste them into a chat either, so leave them out from the start. Memory is saved by topic as you chat.",
  },
  "ch205-manage": {
    prompt: "Claude remembers that you still run a side-dish shop, even though you closed it last month. What should you do?",
    choices: [
      "Tell Claude in chat, \"Please forget about the shop now\"",
      "Delete the chat where that memory was created so it disappears",
      "Delete your account and make a new one to fix the memory",
      "Leave it as is since memories cannot be edited",
    ],
    explain: "If you correct it in chat, the change applies starting with your next conversation. You can also edit or delete it directly under \"Settings\" → \"Memory.\" Deleting a chat does not delete memories created from that chat.",
  },
  "ch205-off": {
    prompt: "You want Claude to stop using its memories about you for a while, then turn them back on later. Which option should you pick?",
    choices: [
      "Choose \"Reset memory\"",
      "Choose \"Pause memory\" in Settings",
      "Leave the \"Claude instructions\" box blank",
      "Delete all of your past chats",
    ],
    explain: "Pausing memory keeps your existing memories intact without using them or adding new ones. Resetting permanently deletes all memories—including project memories—and cannot be undone.",
  },
  "ch205-past-chats": {
    prompt: "On a paid plan, you gathered chats inside a \"New Menu\" Project. Where should you ask if you want Claude to find ad copy you wrote there and keep working on it?",
    choices: [
      "Ask in any new chat outside of the Project",
      "Ask inside a different Project since Claude searches everywhere",
      "Ask inside a chat within the \"New Menu\" Project",
      "Ask after turning off \"Search and reference chats\"",
    ],
    explain: "Chats inside a Project are only searched from within that same Project. If you turn off \"Search and reference chats,\" Claude won't look up past chats at all. When Claude uses a past chat, it attaches a link to the original chat so you can click and verify.",
  },
  "ch205-import": {
    prompt: "You want to import memories from another AI into Claude, but you don't want to bring over health-related notes. What should you do?",
    choices: [
      "Import everything and let Claude filter out the health notes itself",
      "Import from the mobile app so sensitive details are stripped out",
      "Paste everything since this experimental feature has no way to edit",
      "Remove those health details before pasting and importing the text",
    ],
    explain: "You can edit the text and remove sensitive details before importing. It is safest not to include anything you don't want kept in the first place. Because this feature is experimental, check what was added once the import finishes.",
  },
  "ch205-wellbeing": {
    prompt: "You often end up chatting with Claude late into the night and want help keeping track of your screen time. What is a good way to do that?",
    choices: [
      "Set a break reminder under \"Time and focus\" in Settings",
      "Keep chatting on purpose until you hit the usage limit",
      "Turn on break reminders so the app locks you out afterward",
      "Downgrade your plan to cut how much you can use",
    ],
    explain: "If you set a break reminder under \"Settings\" → \"Time and focus,\" a notice pops up after you have used Claude for that long. It is a gentle reminder rather than a lock, so you can dismiss it and keep going, and it is separate from your usage limit.",
  },
  "ch206-web-search": {
    prompt: "You don't see a toggle to turn on web search on your screen. How can you make sure Claude checks the internet for this weekend's weather?",
    choices: [
      "Change the screen language to English in Settings and ask",
      "Include \"Search the web\" right in your question",
      "Upgrade to a paid plan first since search is paid-only",
      "Log out and send the exact same question again",
    ],
    explain: "To make sure Claude searches, just write \"Search the web\" in your prompt. The new layout has no toggle because Claude searches on its own when helpful. Web search works on the Free plan too.",
  },
  "ch206-fetch": {
    prompt: "If you paste a link to a long article and ask Claude to summarize the whole thing, what should you keep in mind?",
    choices: [
      "Pasting the link deletes the article from the original website",
      "The author of the article is automatically notified of your name",
      "Claude can summarize it, but the answer will only come in English",
      "Claude pulls in the full page, which uses up a lot of your limit",
    ],
    explain: "When you share a link, Claude fetches and reads that page (web fetch). Long pages use up a lot of your usage limit, so think first about whether you really need the full page analyzed.",
  },
  "ch206-citations": {
    prompt: "When a web search answer includes source links, what is the best habit to follow?",
    choices: [
      "Open the links and check that the numbers and dates match the source",
      "Trust the answer right away and copy it over since source links are attached",
      "Just count the links since more links always mean higher accuracy",
      "Close the links without clicking since they are advertisements",
    ],
    explain: "Even answers with citations can get things wrong. Open the links to check that numbers, dates, and names actually match the original text, and see who wrote it and when.",
  },
  "ch206-research": {
    prompt: "You want to use Research to write a report comparing delivery app fees. What is a good thing to do before hitting send?",
    choices: [
      "Send a short prompt like \"Tell me about delivery apps\"",
      "Turn off web search and send with only Research turned on",
      "Include details like your budget, region, and time period",
      "Start it on your phone so it also searches your connected apps",
    ],
    explain: "Research takes several minutes per run, so refine your question before sending. Adding details like budget, region, and time frame helps Claude find sources that fit your situation. On the older screen, web search must be on, and starting Research on mobile searches only the web.",
  },
  "ch206-when": {
    prompt: "Which feature is the best fit for a question like \"Who won last night's baseball game?\"",
    choices: [
      "Research — gathers many sources into a long report",
      "Web search — finds the answer in one or two quick lookups",
      "Extended thinking — thinks longer without checking recent news",
      "Memory — recalls something you told Claude earlier",
    ],
    explain: "For simple factual questions that only take one or two lookups, web search is the right fit. Use Research when you need to gather many sources, and Extended thinking when a problem needs deep reasoning.",
  },
  "ch207-projects": {
    prompt: "You want every chat in a Project to follow the rule \"Make tables with three columns.\" Where should you write that rule?",
    choices: [
      "Write the rule in the Project's title",
      "Write the rule in the Project's description box",
      "Write the rule in Project instructions or Project knowledge",
      "Create a brand-new separate Project for every single new chat",
    ],
    explain: "Project instructions and Project knowledge are used across every chat in that Project. Claude cannot read the Project title or description. Even inside the same Project, full chat history does not automatically carry over from one chat to the next.",
  },
  "ch207-connectors": {
    prompt: "You are about to try Connectors, which link Claude to other apps, for the first time. What is the safe way to connect them?",
    choices: [
      "Connect everything since it lets you see company files you couldn't open before",
      "Upgrade to a paid plan first since Connectors don't work on Free",
      "Enter only fake events since connected data is used for AI training",
      "Connect only trusted services that you actually need for the current task",
    ],
    explain: "When connected, Claude can read and sometimes change data within your account's permissions, so connect only trusted services you truly need. It cannot see files you didn't have access to, it doesn't train on connected app data, and Connectors work on Free too.",
  },
  "ch207-tool-access": {
    prompt: "After connecting more than ten apps, your chats keep hitting the length limit quickly. What should you do?",
    choices: [
      "Disconnecting unused apps is the only way to fix this",
      "Change \"Tool access\" to \"Always available\"",
      "Create a new Project so the limit resets on its own",
      "Try changing \"Tool access\" to \"On demand\" first",
    ],
    explain: "Each connected app takes up room in your conversation. If you have ten or more, switch to \"On demand\" so Claude loads only the tools it needs. \"Always available\" uses more space right from the start, and this setting applies only to the current chat.",
  },
  "ch207-skills": {
    prompt: "You downloaded an \"Automatic Report Writer\" Skill (a file that packages a way of working) made by someone on the internet. What should you think about before installing it?",
    choices: [
      "Check whether the Skill comes from a source you can trust",
      "Install anything freely since Skills are just text and always safe",
      "Install only one since every Skill stays loaded at all times",
      "Study coding first since you need it to use Skills",
    ],
    explain: "The biggest risks with Skills are prompt injection—hidden instructions that hijack Claude—and data leaks. Only install Skills from sources you trust. Because Skills load only when relevant to your task, installing several takes up very little chat space.",
  },
  "ch207-plugins": {
    prompt: "You installed a sales plugin, but the price quotes it creates don't match your team's template. What should you do?",
    choices: [
      "Delete it and look for another one since plugins cannot be adjusted",
      "Upload your team's quote and ask Claude to adapt it to that format",
      "Move to a new chat so it switches to your team's format automatically",
      "Switch to the Free plan so it uses only the default template",
    ],
    explain: "Downloaded plugins are built around general workflows, so they may not match yours out of the box. Show Claude a real example of what you use and ask it to adjust. Plugins require a paid plan, and you should only install ones from trusted sources.",
  },
  "ch208-what": {
    prompt: "You want Claude to compare the tables in your \"Q3 Sales\" folder and give you a one-page summary document. How should you ask Cowork, which handles multi-step jobs end to end?",
    choices: [
      "Ask for the sales numbers first, then ask for each next step one by one",
      "Open a command line window and type commands in order",
      "Describe the final result you want and where to save it all at once",
      "Send the task link to a coworker so they can take over for you",
    ],
    explain: "When delegating a task, describe the outcome you want rather than asking step-by-step questions. Once you state the goal, Claude works through the steps. You don't need a terminal, and Cowork tasks themselves cannot be shared with others.",
  },
  "ch208-start": {
    prompt: "You want to hand off just this one task to Cowork without using Claude's Memory. When and how should you do that?",
    choices: [
      "Delete the task after it finishes so Memory turns off too",
      "Turn off Memory at any point in the middle of the task",
      "Clear the Memory for your entire account in Settings first",
      "Turn off Memory from the \"+\" menu before your first message",
    ],
    explain: "Cowork shares Memory with regular chats. To run a single task without Memory, turn off \"Memory\" in the \"+\" menu before sending your first message. You cannot change this after the task has started.",
  },
  "ch208-modes": {
    prompt: "You are asking Claude to send messages under your name on a website you have never used before. Which approval mode makes the most sense?",
    choices: [
      "\"Manual,\" which asks before using a new tool or website",
      "\"Auto,\" which runs on its own and asks only when something looks risky",
      "Leave it on the default setting and step away from your desk",
      "Pick either one since both modes work the exact same",
    ],
    explain: "For unfamiliar tools or websites, messages sent under your name, or actions that are hard to undo, set the mode to \"Manual\" and watch closely. \"Auto\" only pauses to ask when something looks risky.",
  },
  "ch208-devices": {
    prompt: "On the Pro plan, you used the desktop app to ask Cowork to organize a folder on your computer. What do you need to do so the task can reach your files?",
    choices: [
      "Select \"On my computer only\" in Settings",
      "Upload the entire folder to the server ahead of time",
      "Close the desktop app so the task hands off to the server",
      "Keep the desktop app open on that computer",
    ],
    explain: "Starting October 6, 2026, new Cowork tasks on Pro and Max run in the cloud, and the \"On my computer only\" option was removed. Your folder stays on your computer, and Claude can reach it only while the desktop app is open. If you close the app, the task keeps running in the cloud but cannot reach your local files.",
  },
  "ch208-scheduled": {
    prompt: "Which job is the best fit to try first as a scheduled task that runs automatically on a set schedule?",
    choices: [
      "Sending weekly update emails to clients under your name",
      "Finding and summarizing weekly news on topics you follow",
      "Ordering household supplies on a set day every month",
      "Finding old files every day and deleting them permanently",
    ],
    explain: "Because you aren't watching when a scheduled task runs, start with low-risk jobs like summaries. Avoid scheduling tasks that send messages, make purchases, or do things that are hard to undo.",
  },
  "ch208-browser": {
    prompt: "What should you do before turning on \"Computer use,\" where Claude looks at your screen and clicks and types for you?",
    choices: [
      "Leave your banking app open so Claude can use it right away",
      "Spread all your windows open so Claude can see everything clearly",
      "Type your passwords into the chat so Claude can log in for you",
      "Close any files and apps with sensitive information beforehand",
    ],
    explain: "Computer use views your screen by taking screenshots, so anything open on screen is visible to Claude. Close sensitive files and apps before starting, and do not grant access to banking, medical, or government apps.",
  },
  "ch208-safety": {
    prompt: "While organizing your emails with Cowork, Claude suddenly asks for your bank account details out of nowhere. What should you do?",
    choices: [
      "Stop the task right away and report it with the feedback button",
      "Give it the account details since automatic safety checks are running",
      "Switch permissions to \"Auto\" so it finishes the job faster",
      "Wait until the task finishes and just check the final result",
    ],
    explain: "This could be a hidden instruction inside an email or web page Claude read (prompt injection). If Claude starts acting strangely or asks for sensitive info you never brought up, stop the task right away and report it. Even with safeguards, the risk is never zero, and you are responsible for what happens.",
  },
  "ch209-training": {
    prompt: "Because you often talk about family health, you don't want your future chats used to train AI models. What should you do?",
    choices: [
      "Turn off the model training toggle under \"Privacy\"",
      "Click thumbs-down on every reply to tell them not to train on it",
      "Leave it alone assuming it is turned off by default",
      "Turn off the \"Search and reference chats\" toggle",
    ],
    explain: "\"Help improve our AI models\" under \"Settings\" → \"Privacy\" controls whether your chats are used for training. Open your settings to check what it is set to. Sending thumbs-up or thumbs-down feedback actually stores that chat for up to 5 years.",
  },
  "ch209-retention": {
    prompt: "You have a chat you don't want to keep, and you don't want it used for future training either. What should you do?",
    choices: [
      "Click thumbs-down on that chat to flag it",
      "Delete that chat from your chat history list",
      "Leave it alone and wait for 30 days to pass",
      "Rename the chat so it is harder to recognize",
    ],
    explain: "Deleted chats are removed from the servers within 30 days and are not used for future training. Giving thumbs-up or thumbs-down feedback keeps the chat for up to 5 years instead. Memories created from that chat still remain, so delete those separately.",
  },
  "ch209-access": {
    prompt: "You want to paste medical records and your national ID number into a chat and ask Claude to organize them. What is the best approach?",
    choices: [
      "Paste the ID number too since everything is encrypted",
      "Include everything since staff can never view chats under any circumstance",
      "Leave out sensitive numbers and include only what is truly needed",
      "Send feedback on the chat so a staff member checks it directly",
    ],
    explain: "By default, staff cannot read your chats and your data is encrypted. However, chats sent with feedback, flagged for policy review, or opted into training may be viewed by authorized staff. Be very careful with highly sensitive details like national ID numbers or medical records.",
  },
  "ch209-export": {
    prompt: "You want to back up your chats before deleting your account, and you normally use only the mobile app. What should you do?",
    choices: [
      "Tap export right inside the mobile app's Settings",
      "Import the exported file into a new personal account",
      "Take your time and open the emailed download link a few days later",
      "Use \"Export data\" from the web or the desktop app first",
    ],
    explain: "Data export isn't available in the mobile app—use \"Settings\" → \"Privacy\" on the web or desktop app. The download link sent by email expires after 24 hours, and exported files cannot be imported into another personal account.",
  },
  "ch209-delete": {
    prompt: "Someone on a paid (Pro) plan wants to delete their account. What should they do first?",
    choices: [
      "Delete the app from their phone and reinstall it first",
      "Cancel the subscription and wait for the billing period to end",
      "Change their account password first",
      "Move every past conversation into incognito chats one by one first",
    ],
    explain: "On Pro or Max, cancel your subscription first and delete your account after the current billing period ends. Account deletion cannot be undone, so export any chats you need ahead of time.",
  },
  "ch209-mistakes": {
    prompt: "The AI says, \"I sent the email to your teammates.\" What is the smartest thing to do?",
    choices: [
      "Check whether the email tool is connected and look in your Sent folder",
      "Trust that the email was sent since the AI said so and move on to other work",
      "Ask the exact same thing again so it sends a second time",
      "Click the thumbs-up button to thank Claude",
    ],
    explain: "Sometimes AI claims it completed an action even when no tool is connected. Always verify it yourself, or ask Claude to just write a draft from the start.",
  },
  "ch209-safeguards": {
    prompt: "You think your account was suspended by mistake. How do you submit an appeal?",
    choices: [
      "Make a second account using a different email address",
      "Delete the app and install it again",
      "Click the \"Report\" button on any shared chat screen you can find",
      "Log in with the suspended account and fill out the appeal form",
    ],
    explain: "The appeal form appears when you log in to claude.ai using the suspended account.",
  },
  "ch209-crisis": {
    prompt: "A friend was talking through a tough time with Claude and saw a helpline banner pop up. They are worried clicking it might hurt their account. What should you tell them?",
    choices: [
      "Whether to use it is up to you, and there is no penalty for clicking it",
      "Close it right away because clicking the banner will suspend your account",
      "Be careful because your chat gets sent directly to the helpline",
      "Click it now because once you close it, you can never find it again",
    ],
    explain: "Using the banner is completely optional and never affects your account. Your chat is not sent to the helpline, and you can also look up support services anytime at claude.findahelpline.com. If anyone is in immediate danger, contact emergency services right away.",
  },
  "ch210-difference": {
    prompt: "You want to ask questions out loud and hear Claude's answers spoken back to you. Which feature should you use?",
    choices: [
      "Dictation (microphone icon)",
      "File upload (+)",
      "Voice mode (soundwave)",
      "Incognito chat",
    ],
    explain: "Voice mode lets you speak your question and hear the answer out loud. Dictation turns your voice into text and gives you a written reply.",
  },
  "ch210-dictation": {
    prompt: "Using dictation on your phone, you spoke and sent a question that included someone's name. What is a good thing to do next?",
    choices: [
      "Say it again in English since Korean dictation does not work",
      "Check the chat box to make sure the name was written down right",
      "Skip checking since names are always transcribed accurately",
      "Type by hand next time since voice dictation is a paid-only feature",
    ],
    explain: "Names of people or places can be misheard when transcribed. After sending, glance at your question in the chat window to check. Dictation supports 12 languages including Korean, and before sending you can tap \"X\" to cancel.",
  },
  "ch210-voice": {
    prompt: "You are using voice mode in a noisy cafe and Claude keeps mishearing you. What can you do?",
    choices: [
      "Speak much louder and faster",
      "Change the dictation language to English in Settings and try speaking again",
      "Log out and sign in with a brand-new account",
      "Switch to Push to Talk so Claude listens only while you hold the button",
    ],
    explain: "Push to Talk listens only while you press and hold the button, making it much more accurate when it is noisy or other people are talking nearby.",
  },
  "ch210-settings": {
    prompt: "You changed the app's screen language to Korean, but voice mode still speaks in another language. Why is that?",
    choices: [
      "Because voice mode supports English only",
      "Because the voice language has to be set separately",
      "Because the language is locked on the Free plan",
      "Because you cannot change languages in the mobile app",
    ],
    explain: "Changing the app display language does not change the spoken voice language. Pick your voice language separately under \"Settings\" → \"General\" → \"Voice\" → \"Language.\"",
  },
  "ch210-privacy": {
    prompt: "You want to use voice mode on the subway to talk about a hospital appointment. What is the best way to handle it?",
    choices: [
      "Speak freely since voice conversations leave no written record",
      "Say your national ID number out loud since recordings are deleted",
      "Wear earphones and avoid saying sensitive details out loud",
      "Speak loudly and clearly so Claude hears every word",
    ],
    explain: "Voice conversations are saved as text transcripts in your chat history, and people nearby can hear both you and Claude. Wear earphones or use dictation quietly, and never say sensitive information out loud.",
  },
  "ch210-shortcuts": {
    prompt: "You got a notice that you hit your usage limit. Can you keep asking questions through the iPhone widget or \"Ask Claude\"?",
    choices: [
      "Yes, you can keep asking regardless of limits if you don't open the app",
      "Yes, Shortcuts use a separate small model with its own limit",
      "Yes, opening via the lock screen \"Open Claude\" gives a separate limit",
      "No, those count toward the same limit, so wait until it resets",
    ],
    explain: "Widgets, Shortcuts, and lock screen buttons that call Claude without opening the app all count toward the same usage limit. \"Ask Claude\" and Shortcuts use the default model shown when you open the app.",
  },
  "ch210-apps": {
    prompt: "In the mobile app, you asked Claude to write an email telling your manager you will be late, and your mail app opened. What should you do next?",
    choices: [
      "Review the recipient and message, then tap Send yourself",
      "Close the mail app since Claude already sent the email",
      "Ask Claude to look up the address in your phone's contacts",
      "Leave it alone since it will send on its own after a day",
    ],
    explain: "Claude only hands off a pre-filled draft to your mail app. You still need to read it over, make edits, and tap Send yourself. Claude does not access your contacts directly either.",
  },
  "ch211-how": {
    prompt: "For a practice exercise, you need to upload files and try changing settings. How should you practice?",
    choices: [
      "Use an incognito chat with real company documents",
      "Use a regular chat, but practice with made-up sample data",
      "Use real company documents and click thumbs-up on every answer",
      "Type your real contact information into a regular chat",
    ],
    explain: "For exercises involving history, files, and settings, use a regular chat with made-up sample data instead of real information. In the new layout, you cannot create files in incognito chats. Giving thumbs-up or thumbs-down stores that chat for up to 5 years, so skip those buttons while practicing.",
  },
  "ch211-check": {
    prompt: "You finished practicing with sample data and deleted all your practice chats. What else should you check to clean up your practice trail?",
    choices: [
      "Stop here since deleting the chats also erases memories and shared links",
      "Treat the phone you used during practice as an unknown device and revoke it",
      "Check Settings for leftover memories, shared links, and logged-in devices",
      "Delete your account and sign up again to leave no trace behind",
    ],
    explain: "Deleting a chat leaves behind any memories created from it, so remove those separately in \"Settings\" → \"Memory.\" Turn off unneeded links under \"Shared chats,\" and check \"Active sessions\" for unfamiliar devices. The phone you logged in with during practice is your own device.",
  },
  "ch212-tools": {
    prompt: "You want to polish the wording of a neighborhood event flyer together with Claude. Which feature should you start with?",
    choices: [
      "Research, which gathers sources into a long report",
      "Scheduled tasks, which run on a repeating timer",
      "Cowork, which handles multi-step jobs from start to finish",
      "A regular chat, where you go back and forth to refine it",
    ],
    explain: "Look at the shape of your task before picking a menu item. When you want to ask, tweak, and think together, a regular chat is the right fit—and for most tasks, a regular chat is all you need.",
  },
  "ch212-layers": {
    prompt: "Every time you write a report, you find yourself explaining the exact same steps to Claude. What should you try creating?",
    choices: [
      "A brand-new account",
      "A Skill that packages those steps",
      "An incognito chat",
      "Several plugins instead of a Skill",
    ],
    explain: "When you keep repeating the same step-by-step workflow, it is time to turn it into a Skill. Use Instructions for rules you want in every chat, and a Project for ongoing work on one topic. Once you make a Skill, try asking twice—once with it on and once with it off—to compare.",
  },
  "ch212-data": {
    prompt: "You uploaded a CSV file of sales records and asked Claude to analyze it. How can you get a chart from it?",
    choices: [
      "You can only get a written explanation since Claude cannot make charts",
      "You can get the chart as an image file like a PNG",
      "Charts only work if you upload an Excel file instead",
      "You must turn on Cowork first to get any chart",
    ],
    explain: "According to the help docs, when you upload table files like CSV or TSV, Claude can analyze them, draw charts, and even save those charts as image files like PNG. Before trusting the numbers, test it against past data you already know.",
  },
  "ch212-academy": {
    prompt: "Someone who isn't comfortable reading English wants to take Anthropic's online course (Claude Academy \"AI Fluency\"). What should they do?",
    choices: [
      "Use their browser's translate feature to read the course in Korean",
      "Look for the separate Korean version of the course first",
      "Sign up for a paid plan first before opening the course",
      "Aim to earn an official professional certification from the quizzes",
    ],
    explain: "The course text is in English, but you can read it using your browser's built-in translation (right-click → \"Translate to Korean\"). \"AI Fluency\" does not require a paid plan, and finishing the quizzes gives you a learning badge rather than an official certification.",
  },
}

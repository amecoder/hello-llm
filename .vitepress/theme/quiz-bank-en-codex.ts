// English chapter titles and quiz text for guide/21-codex (Korean source: quiz-bank*.ts, same ids and answers).
export const CODEX_CHAPTER_TITLE_EN: Record<number, string> = {
  501: "Chapter 1. What Codex Is and How It Differs from Claude Code",
  502: "Chapter 2. Starting Codex in the ChatGPT App",
  503: "Chapter 3. The Rules File AGENTS.md",
  504: "Chapter 4. Permissions and Undo",
  505: "Chapter 5. Moving Skills",
  506: "Chapter 6. Scheduled Tasks, Cloud, and Mobile",
  507: "Chapter 7. Using It in the Terminal",
  508: "Chapter 8. Cost, Data, Safety, and Choosing Your Tool",
}

export const CODEX_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch501-modes": {
    prompt: "In the ChatGPT desktop app, you want to edit files in a folder and also see exactly what changed. Which mode should you pick?",
    choices: [
      "Chat — a conversation mode where you ask questions, get answers, and shape ideas together",
      "Work — a mode that hides technical details like Git or commands and shows only finished results",
      "Codex — a mode that also shows technical details like what changed",
      "A temporary chat in a web browser",
    ],
    explain: "Work and Codex overlap in what they can do, but Codex shows technical details like a diff (what changed). That makes it easy to compare the result with the original.",
  },
  "ch501-compare": {
    prompt: "You left the rule file CLAUDE.md from Claude Code inside your organizer folder and opened Codex. What will happen?",
    choices: [
      "Codex automatically finds and reads CLAUDE.md in the folder and follows those rules as they are",
      "Codex reads AGENTS.md, so CLAUDE.md will not be read if you leave it as is",
      "Codex deletes CLAUDE.md and creates a new AGENTS.md file with the same content",
      "Codex ignores rule files and only follows what you say in the chat",
    ],
    explain: "Codex's rule file is named AGENTS.md. It ignores other file names unless you register them, so when you move your organizer tool, you rename or copy this file first.",
  },
  "ch501-where": {
    prompt: "You do not see Codex in the ChatGPT app on a Free account. What is the best explanation?",
    choices: [
      "Free and Go plans get a gradual rollout, so it may not be open for you yet",
      "Because Codex is for Windows only",
      "Codex is set up so that Free accounts can never use it under any circumstances",
      "If you delete and reinstall the app, it will definitely show up regardless of your account",
    ],
    explain: "The official pricing page describes Codex on Free and Go as a lightweight model in the desktop app with a gradual rollout. It opens up to accounts in stages.",
  },
  "ch502-install": {
    prompt: "What is the right first step to start using Codex?",
    choices: [
      "Find and install a separate Codex-only app from the app store and create a new account",
      "Install the ChatGPT desktop app and sign in with your ChatGPT account",
      "Open the terminal and memorize the entire list of Codex commands first",
      "Create a GitHub account first and connect a repository to it",
    ],
    explain: "Codex lives inside the ChatGPT desktop app. Install the app, sign in with your ChatGPT account, and then choose Codex.",
  },
  "ch502-open": {
    prompt: "You want to use the pane that shows what changed in Codex. What is good to set up in your organizer folder beforehand?",
    choices: [
      "Change the folder name to English",
      "Upload the entire folder to cloud storage",
      "Turn the folder into a Git repository",
      "Delete all notes inside the folder so it is completely empty",
    ],
    explain: "The review pane (which shows what changed) only opens in a Git repository. If the folder is not using Git, the app will ask to create one.",
  },
  "ch502-first": {
    prompt: "In the meeting notes organized by Codex, the day of the week on a date is different from your original note. What should you do?",
    choices: [
      "Trust and use it without checking since Codex fixed it on its own",
      "Delete the meeting notes right away and never ask Codex to organize things for you again",
      "Compare it with the original, and ask again if it is not what you wanted",
      "Skip it since the day of the week is not important",
    ],
    explain: "Even a convincing result can miss things or get them wrong. Especially when Codex changes something on its own, check it against the original and ask again if it is not what you want.",
  },
  "ch503-why": {
    prompt: "Even without AGENTS.md, Codex followed the '(not in note)' rule. In this guide's hands-on practice, why did that happen?",
    choices: [
      "Because Codex secretly opened and read CLAUDE.md behind the scenes",
      "Because the same rule was also written in the template instructions",
      "Because Codex already knows all of the user's organizing rules in advance",
      "Because it found the rule on the internet",
    ],
    explain: "Codex did not open CLAUDE.md; it only read the template. It followed the rule simply because the same rule was in the template instructions, and it does not know rules that exist only in CLAUDE.md.",
  },
  "ch503-move": {
    prompt: "To use the same folder in both Claude Code and Codex, you created AGENTS.md and also kept CLAUDE.md. What should you keep in mind going forward?",
    choices: [
      "When you update a rule, update both files together",
      "If you only edit CLAUDE.md, Codex will automatically follow the change too",
      "If you only edit AGENTS.md, Claude Code will automatically follow the change too",
      "The two files must have different content",
    ],
    explain: "Each tool reads only its own file. If you edit just one, the two tools will work under different rules, so update both together.",
  },
  "ch503-test": {
    prompt: "You want to check whether AGENTS.md is really being read. What method did this guide use?",
    choices: [
      "Ask Codex 'Did you read AGENTS.md?' and simply trust its answer",
      "Save AGENTS.md several times in a row to make sure it gets read",
      "Change the AGENTS.md file name to all capital letters so it stands out clearly in the folder",
      "Add a rule that is only in AGENTS.md and see if it works in a new chat",
    ],
    explain: "If a rule that exists nowhere else is followed, you can tell the file was read. In our practice, it was followed 0 times before adding AGENTS.md and 1 time after (1 try each, with different note types).",
  },
  "ch503-order": {
    prompt: "Your ~/.codex/AGENTS.md file and your organizer folder's AGENTS.md say different things. Which one takes priority?",
    choices: [
      "Your personal setting in ~/.codex/AGENTS.md is always applied first and takes priority",
      "Whichever of the two files is longer and has a larger file size takes priority",
      "The AGENTS.md file closer to your current working folder takes priority",
      "Whichever file was created first keeps priority until the end",
    ],
    explain: "Codex reads files from top to bottom by joining them together, and the file closer to your current folder comes later, so it overrides earlier instructions.",
  },
  "ch503-import": {
    prompt: "Where do the official docs recommend putting organizing rules that must always be followed?",
    choices: [
      "Keep them only in Memories",
      "Write them down in AGENTS.md",
      "Paste them into the first message of every chat",
      "Turn them into a shared link",
    ],
    explain: "The official docs treat Memories as a helpful reminder, not the sole source for rules that must be followed. Put must-follow rules in AGENTS.md.",
  },
  "ch504-modes": {
    prompt: "When you first start using Codex, which permission setting do the official docs recommend for most work?",
    choices: [
      "Full access — run without restrictions",
      "Ask for approval — check with me first",
      "Approve for me — let auto-review decide",
      "Hide the permissions menu",
    ],
    explain: "Ask for approval lets Codex work on its own inside the working folder and stops to ask before crossing that boundary. The official docs recommend starting most work with this setting.",
  },
  "ch504-sandbox": {
    prompt: "Which folder is inside your working folder, yet Codex cannot write to it by default?",
    choices: [
      "The notes folder",
      "The inbox folder",
      "The templates folder",
      "The .agents folder",
    ],
    explain: "Inside the working folder, .git, .agents, and .codex are read-only by default. The .agents folder where skills go is one of them, so moving files there may require your permission.",
  },
  "ch504-review": {
    prompt: "In the review pane, you want to see only what changed in Codex's very last reply. Which option should you pick?",
    choices: [
      "Last turn",
      "Unstaged — all changes not recorded yet",
      "Staged — changes picked to be recorded",
      "Branch",
    ],
    explain: "By default, the review pane shows unrecorded changes (Unstaged). If you pick Last turn, you see only the changes from the most recent reply.",
  },
  "ch504-undo": {
    prompt: "Why should you be careful before clicking Revert all in the review pane?",
    choices: [
      "Because clicking Revert all also deletes your ChatGPT account and chat history",
      "Because the review pane also includes changes that you made yourself",
      "Because it turns off your internet connection",
      "Because clicking Revert all also deletes the folder's AGENTS.md file",
    ],
    explain: "The review pane includes not only Codex's changes, but also your own edits and any other unrecorded changes. When you only want to discard part of them, revert by single file or chunk.",
  },
  "ch505-where": {
    prompt: "In Codex, what is the right place to put a skill for your organizer folder only, and how do you call it?",
    choices: [
      "Put it inside the .claude/skills folder, and call it with /name",
      "Put it in the .agents/skills folder, and call it with $name",
      "Put it in the templates folder, and call it with @name",
      "Put it in the notes folder, and call it with #name",
    ],
    explain: "Codex looks for skills in .agents/skills, and you call them using $name. The SKILL.md format is the same as in Claude Code.",
  },
  "ch505-move": {
    prompt: "When you asked Codex to copy a skill into .agents/skills, it replied that it was 'blocked because it is read-only.' What is the right way to handle this?",
    choices: [
      "Change the permission to Full access and never change it back afterward",
      "Give up on moving the skill and write out long requests every time instead",
      "Check what it wants to write and approve it, or type the command yourself",
      "Delete AGENTS.md",
    ],
    explain: ".agents is a protected folder, which is why it was blocked. You can check what Codex wants to write and approve it, or run the command Codex shows you yourself.",
  },
  "ch505-call": {
    prompt: "In the weekly review made with $weekly-review, all the numbers were right, but the mulled wine cost of 1,800 won was left out. What next step does this guide recommend?",
    choices: [
      "Since all the numbers were right, use it as is without checking for missing details",
      "Delete the skill and write a long request from scratch every time going forward",
      "Check for missing items too, and add a line to the skill if it keeps happening",
      "Organize the notes by hand only",
    ],
    explain: "Check not only for things that are wrong, but also for things that were left out. If something important keeps getting missed, fix the skill by adding a one-line rule.",
  },
  "ch505-create": {
    prompt: "You are about to install a plugin you have never seen before. What do the official docs emphasize?",
    choices: [
      "Pick one with a short name",
      "Pick only the newest plugins and install them right away without checking",
      "The more plugins you install at once, the more convenient it is later",
      "Review the plugin's hooks before they run and decide if you trust them",
    ],
    explain: "Plugins can contain hooks that run automatically. The official docs tell you to review them before they run and decide whether they are trustworthy.",
  },
  "ch506-schedule": {
    prompt: "You set up a schedule to create a weekly review in your organizer folder every Friday. What is needed for that scheduled task to run?",
    choices: [
      "Your computer must be turned on and the app must be running",
      "Your phone must be turned on",
      "You must create a GitHub repository and upload your organizer folder there",
      "You must switch permissions to Full access every time the schedule runs",
    ],
    explain: "A scheduled task that uses a folder on your computer only runs when your computer is on and the app is open.",
  },
  "ch506-cloud": {
    prompt: "Which statement about Codex cloud tasks is correct?",
    choices: [
      "Your computer's files and browser sign-in status are automatically carried over together",
      "It needs a published environment, and your local files are not carried over",
      "If your computer turns off or goes to sleep, the cloud task stops right away too",
      "It is for Free accounts only",
    ],
    explain: "Cloud tasks start in a published environment, and your computer's files, running programs, and browser sign-ins do not carry over. Instead, the task keeps running even while your computer is asleep.",
  },
  "ch506-mobile": {
    prompt: "When connecting your phone to control Codex on your computer, what do the official docs emphasize?",
    choices: [
      "Connect every family member's phone",
      "Connect shared public computers in the office first",
      "Connect only your own devices that you trust",
      "Switch to Full access after connecting",
    ],
    explain: "A connected phone can control Codex on your computer. That is why you should only connect your own devices that you trust.",
  },
  "ch507-install": {
    prompt: "What must you check before running the Codex CLI install command in the terminal?",
    choices: [
      "Whether the command is short",
      "Whether the command matches the official documentation word for word",
      "Look through it one character at a time to make sure there is no Korean text inside",
      "Whether it is okay to run the command twice in a row",
    ],
    explain: "The install command immediately runs a script downloaded from the internet. Make sure it matches the official documentation exactly before you run it.",
  },
  "ch507-exec": {
    prompt: "You tried to have codex exec edit a file, but nothing changed. What is the most likely reason?",
    choices: [
      "It runs in read-only mode by default, so you need --sandbox workspace-write",
      "codex exec is built so that it can never edit files no matter what option you add",
      "If your internet is off, codex exec cannot edit any files",
      "Because AGENTS.md was too long, so Codex stopped before reading your request",
    ],
    explain: "codex exec is read-only by default. To let it edit files, add --sandbox workspace-write.",
  },
  "ch507-commands": {
    prompt: "On the interactive Codex CLI screen, which command shows your session details and remaining usage limit?",
    choices: [
      "/import — load saved settings",
      "/resume",
      "/permissions — change approval mode",
      "/status — check current session",
    ],
    explain: "/status shows session info and your remaining limits. /permissions is for permissions, /import is for importing, and /resume is for continuing a previous chat.",
  },
  "ch508-usage": {
    prompt: "After creating several large reports with ChatGPT Work, the amount you can use in Codex went down. Why is that?",
    choices: [
      "Because Work and Codex share the same usage allowance",
      "Because if you use Work even once, Codex turns off automatically for that day",
      "Because reports made in Work are saved in the Codex folder and take up space",
      "Because Work is free",
    ],
    explain: "ChatGPT Work shares the same plan, credits, and usage limits as Codex.",
  },
  "ch508-data": {
    prompt: "You use Codex with a personal Plus account. Where should you look to check whether your chats are used to improve the model?",
    choices: [
      "Codex never uses data for training on any plan, so there is no need to check",
      "Write 'do not train' inside AGENTS.md",
      "Check the data settings in your ChatGPT account",
      "Clicking Revert all in the review pane removes the chat from training",
    ],
    explain: "Data rules depend on how you sign in. 'No training by default' is stated only for Business, Enterprise, and API keys, while training settings for personal plans are not covered in the Codex docs. So you should check your ChatGPT account settings and the OpenAI Help Center.",
  },
  "ch508-injection": {
    prompt: "Codex did not follow a hidden instruction inside a note (in 1 test try). How should you take this result?",
    choices: [
      "From now on, you can hand over any document from others or any web page without checking",
      "One try is not a guarantee, so check the results even more carefully",
      "It only fails against Codex",
      "Turning on web search completely removes the risk of hidden instructions",
    ],
    explain: "Blocking it once does not guarantee it will block it every time. When adding documents from other people, compare the result with the original, and keep permissions and internet access narrow.",
  },
  "ch508-choose": {
    prompt: "You want to use Claude Code and Codex together. What organizer folder setup does this guide recommend?",
    choices: [
      "Create separate notes, templates, and output folders for each tool so they never mix",
      "Delete CLAUDE.md",
      "Keep skills in only one tool and use long requests instead in the other tool",
      "Share the notes, and keep rules and skills in both places updated together",
    ],
    explain: "Both tools do almost the same job, so it is convenient to set up the same folder so both can use it. Just make sure to update the rules and skills on both sides together.",
  },
}

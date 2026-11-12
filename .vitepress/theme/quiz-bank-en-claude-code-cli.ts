// English chapter titles and quiz text for guide/23-claude-code-cli (Korean source: quiz-bank-claude-code-cli.ts, same ids and answers).
export const CLAUDE_CODE_CLI_CHAPTER_TITLE_EN: Record<number, string> = {
  801: "Chapter 1. The Terminal and Claude Code",
  802: "Chapter 2. Terminal Basics",
  803: "Chapter 3. Installing and Logging In",
  804: "Chapter 4. Your First Session",
  805: "Chapter 5. Input Tips and Commands",
  806: "Chapter 6. Sessions and Context",
  807: "Chapter 7. Permissions and Undo",
  808: "Chapter 8. Project Memory and Settings",
  809: "Chapter 9. Skills and Extensions",
  810: "Chapter 10. One-Line Runs and Automation",
  811: "Chapter 11. Hooks and Screen Customization",
  812: "Chapter 12. Parallel Work and Remote",
  813: "Chapter 13. Cost, Safety, and Troubleshooting",
  814: "Chapter 14. Practice Exercises and Using It Like a Pro",
}

export const CLAUDE_CODE_CLI_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch801-terminal": {
    prompt: "What is a terminal window for?",
    choices: [
      "A window for editing photos and videos professionally",
      "A window where you type text commands to run your computer",
      "A window for shopping and paying for things online",
      "A window that only collects and shows answers the AI wrote",
    ],
    explain: "A terminal is a window where you run your computer by typing text commands instead of using the mouse. Instead of double-clicking a folder, you type \"go to this folder.\"",
  },
  "ch801-diff": {
    prompt: "When you organize meeting notes, what is the biggest difference between Claude Code and a chat window?",
    choices: [
      "You have to copy and paste the notes in yourself",
      "You can only get the result as text, with no file",
      "It is a feature that only works on the free plan",
      "It can read the notes in a folder by itself and save a file",
    ],
    explain: "Claude Code can read the files in a folder by itself and save the result as a file. You don't have to copy and move things around like in a chat window.",
  },
  "ch801-open": {
    prompt: "On Windows, the start of the open window shows something like PS C:\\. What is this window?",
    choices: [
      "PowerShell",
      "CMD",
      "Notepad app",
      "Web browser window",
    ],
    explain: "If you see PS at the start, it is PowerShell. If it starts with C:\\ without PS, it is CMD. The Windows commands in this course are for PowerShell.",
  },
  "ch801-ready": {
    prompt: "Which statement about the account you need for Claude Code is correct?",
    choices: [
      "You can use it without an account",
      "A free claude.ai plan is enough",
      "You need a paid account such as Pro or Max",
      "Only company accounts can use it",
    ],
    explain: "Claude Code needs one of these accounts: Pro, Max, Ultra, Team, Enterprise, or Console. It is not included in the free plan.",
  },
  "ch801-goal": {
    prompt: "What will you have built by the end of this course?",
    choices: [
      "A smartphone app you build and publish yourself",
      "A weekly notes cleanup that runs with one command",
      "The company website for Corner Cafe",
      "A new AI model you trained yourself",
    ],
    explain: "The backbone of the course is a weekly cleanup that runs with one command. Put your notes in a folder, run one script, and they are organized into meeting minutes.",
  },
  "ch801-app": {
    prompt: "What should someone do if the terminal feels like too much and they would rather use windows and buttons?",
    choices: [
      "Give up, because they can't use Claude Code",
      "Use the app only after mastering the terminal first",
      "Switch to the free plan",
      "Go to the app guide that covers the desktop app",
    ],
    explain: "There is a desktop app for people who want to use it without the terminal, and this site's Claude Code app guide covers that app.",
  },
  "ch802-prompt": {
    prompt: "What does text like seoyeon@macbook ~ % at the start of the terminal mean?",
    choices: [
      "A sign that it is waiting for a command",
      "A sign that an error happened",
      "Text you have to type every time",
      "A sign that the internet is down",
    ],
    explain: "This is the prompt. It is a sign that the terminal is waiting for a command, and the symbol at the end is not something you type.",
  },
  "ch802-where": {
    prompt: "Which command do you type when you want to know which folder you are in right now?",
    choices: [
      "mkdir",
      "cp",
      "pwd",
      "cd",
    ],
    explain: "pwd shows the folder you are in now. ls shows the list of things inside the folder. Neither changes anything, so try them when you feel lost.",
  },
  "ch802-path": {
    prompt: "What does the ~ symbol mean in a path?",
    choices: [
      "The folder one level up",
      "The current folder",
      "The trash",
      "Your home folder",
    ],
    explain: "~ is short for your home folder, the starting folder of your account. The folder one level up is .. (two dots), and the current folder is . (one dot).",
  },
  "ch802-anatomy": {
    prompt: "In the command ls -la ~, what role does -la play?",
    choices: [
      "It is the name of the command that lists things",
      "It is the target that says where to do it",
      "It is an option that changes how the command works",
      "It is the quotation marks around a file name",
    ],
    explain: "A word that starts with - is an option. ls is the command name, and ~ is the target.",
  },
  "ch802-move": {
    prompt: "What is the correct command to copy memo.txt into the inbox folder?",
    choices: [
      "cd memo.txt inbox/",
      "cp memo.txt inbox/",
      "mkdir memo.txt inbox/",
      "cp inbox/",
    ],
    explain: "cp is written in the order \"what, then where.\" It means copy memo.txt into inbox/. cd moves you to a folder, and mkdir makes a folder.",
  },
  "ch802-keys": {
    prompt: "Which key do you press to stop a command that is running in the terminal?",
    choices: [
      "Tab",
      "Up arrow",
      "Ctrl+C",
      "Enter",
    ],
    explain: "When no text is selected, Ctrl+C stops it. Tab fills in names, and the up arrow brings back your last command.",
  },
  "ch803-safe": {
    prompt: "You found an install command you have never seen on a blog. What should you do?",
    choices: [
      "Paste it right away so it installs fast",
      "Paste it with administrator rights",
      "Try running it twice",
      "Open the official docs and check it is the same command",
    ],
    explain: "An install command runs a program downloaded from the internet on your computer right away. So first check that it matches what the official docs say.",
  },
  "ch803-install": {
    prompt: "You entered the install command, but nothing changes on the screen. What should you do?",
    choices: [
      "Keep the window open and wait until it finishes",
      "Close the window right away",
      "Turn off the computer",
      "Try a command for another operating system",
    ],
    explain: "The install command shows no progress while it downloads. Keep the window open and wait, and you will see a success message when it is done.",
  },
  "ch803-check": {
    prompt: "After the install is done, where should you type claude --version?",
    choices: [
      "The web browser's address bar",
      "Notepad",
      "A new terminal window",
      "The claude.ai chat window",
    ],
    explain: "A window that was already open keeps using the old settings. That is why the official docs tell you to open a new terminal window to check.",
  },
  "ch803-path": {
    prompt: "The install finished, but you get command not found: claude. What does that mean?",
    choices: [
      "It means your subscription ended and the account stopped",
      "The install folder is not in the folder list for finding programs (PATH)",
      "It means the internet is down and it can't reach the server",
      "It means the computer is too old and must be replaced",
    ],
    explain: "The terminal looks for programs in a folder list called PATH. If the install folder is not on that list, it can't find the program even though it is there.",
  },
  "ch803-login": {
    prompt: "What do you do if the browser does not open by itself when you log in to claude?",
    choices: [
      "Press c to copy the login address and paste it into a browser",
      "Remove the program completely and install it again from scratch",
      "Type your account password straight into the terminal input",
      "Switch to a different subscription plan and then try again",
    ],
    explain: "If the browser does not open, press c to copy the login address and paste it into a browser. You only need to log in once.",
  },
  "ch803-update": {
    prompt: "How does Claude Code get updated if you installed it with the one-line command from the official docs?",
    choices: [
      "You have to reinstall it every month",
      "It has no update feature",
      "You have to pay to update it",
      "It downloads updates automatically in the background",
    ],
    explain: "The default install downloads updates automatically in the background, and they apply the next time you start it. To update right away, type claude update. If you installed it with Homebrew or WinGet, you have to update it yourself.",
  },
  "ch804-start": {
    prompt: "What should you do first, before you start claude?",
    choices: [
      "Move to the folder you'll work in",
      "Restart the computer",
      "Close all open windows",
      "Turn off the internet for a moment",
    ],
    explain: "The folder you are in becomes the working folder. So go into the folder you'll work in with cd, check with pwd, and then type claude.",
  },
  "ch804-trust": {
    prompt: "In the trust dialog that appears in a folder you open for the first time, what happens if you just press Enter?",
    choices: [
      "It treats the folder as trusted and starts",
      "Every file in the folder gets deleted",
      "The default choice is No, exit, so the program closes",
      "It goes back to the login screen and asks again",
    ],
    explain: "The default choice is No, exit. If you can trust the folder, use the down arrow to pick Yes, I trust this folder, then press Enter.",
  },
  "ch804-screen": {
    prompt: "Which statement is correct about auto mode, which claude starts in when you run it in the terminal?",
    choices: [
      "It guarantees that any action is safe",
      "It reduces permission prompts but does not guarantee safety",
      "It never changes any file in the folder",
      "It is a feature you can't use on paid plans",
    ],
    explain: "Auto mode only reduces permission prompts. It does not guarantee safety. At first, you may want to switch to manual mode with Shift+Tab and look at the permission prompts yourself.",
  },
  "ch804-first": {
    prompt: "Which is the better first request?",
    choices: [
      "Make some meeting minutes, I'll leave it up to you",
      "Organize that thing I mentioned and put it somewhere",
      "I have some notes, just make something out of them",
      "Read the meeting notes in inbox and save them as 회의록.md",
    ],
    explain: "When the request says what to read and where to save, Claude doesn't have to guess. The more specific the request, the better.",
  },
  "ch804-stop": {
    prompt: "What happens if you press Esc while Claude is working?",
    choices: [
      "Everything it has done so far is undone automatically",
      "The terminal window closes along with the program",
      "It stops and waits for your next instruction, and its work stays",
      "Your account is logged out and you must log in again",
    ],
    explain: "Esc means stop. The work done so far stays, so files that were already saved are not undone by themselves.",
  },
  "ch804-exit": {
    prompt: "Which command do you type in the input box to quit Claude Code?",
    choices: [
      "/exit",
      "/start",
      "/delete",
      "/save",
    ],
    explain: "Type /exit to quit and go back to the terminal prompt. You can also press Ctrl+D twice in an empty input box.",
  },
  "ch805-multiline": {
    prompt: "In the Claude Code input box, how do you start a new line without sending?",
    choices: [
      "Press Enter",
      "Press Esc",
      "Press Tab",
      "Press Ctrl+J",
    ],
    explain: "In the input box, Enter sends. To start a new line, press Ctrl+J, or type \\ at the end of the line and press Enter right away.",
  },
  "ch805-at": {
    prompt: "What happens when you type @ in the input box?",
    choices: [
      "A terminal command runs right away",
      "File path autocomplete appears",
      "The program quits",
      "The model changes",
    ],
    explain: "When you type @, file path suggestions appear. When there are many files, you can point to exactly the file you mean.",
  },
  "ch805-bang": {
    prompt: "Which warning is correct about commands you type with ! at the very start of the input box?",
    choices: [
      "They run right away without going through Claude, so use them for look-only commands",
      "Claude checks them first, so any command is fine",
      "They don't run and are only kept as a note",
      "They only run on the internet",
    ],
    explain: "A command typed with ! runs right away without going through Claude. Use it for look-only commands like ls or pwd, and don't put in delete commands or commands you don't know.",
  },
  "ch805-slash": {
    prompt: "Which command do you type to see the commands you can use and the help?",
    choices: [
      "/exit",
      "/clear",
      "/help",
      "/rewind",
    ],
    explain: "/help shows the help and the commands. A command is only recognized when it is at the very start of the message.",
  },
  "ch805-btw": {
    prompt: "What is special about a side question asked with /btw?",
    choices: [
      "It reads the files in the folder again to answer",
      "It erases the whole conversation so far",
      "It runs terminal commands for you",
      "It answers only from what is already in the conversation",
    ],
    explain: "/btw is a side question that is not added to the conversation. It answers only from what is already in the conversation, so work that needs to read files again is usually done as a regular request.",
  },
  "ch805-keys": {
    prompt: "What changes when you press Shift+Tab in Claude Code?",
    choices: [
      "Text size",
      "Permission mode",
      "Subscription plan",
      "Working folder",
    ],
    explain: "Shift+Tab switches through the permission modes in turn. You can see the current mode on the bottom line of the screen.",
  },
  "ch805-paste": {
    prompt: "You pasted a long text and it shows up folded, like [Pasted text #1 +120 lines]. What does this mean?",
    choices: [
      "The text was cut, and only the beginning goes to Claude",
      "The paste failed, so you have to do it again",
      "It is folded only on screen, and the whole text is sent",
      "The original file you pasted from was deleted",
    ],
    explain: "It is only folded to keep the input box easy to use. When you send it, the whole text goes through. For very long content, it is better to save it to a file and have Claude read it.",
  },
  "ch806-session": {
    prompt: "Yesterday you organized notes with Claude Code in the terminal. If you just start a new `claude` today, what happens?",
    choices: [
      "It continues and remembers yesterday's conversation by itself",
      "It starts a new conversation that doesn't know about yesterday",
      "Yesterday's conversation history is deleted automatically",
      "The files you wrote yesterday go back to how they were",
    ],
    explain: "A new session starts without the earlier conversation. To continue yesterday's conversation, you have to open it yourself with `claude -c` or `claude -r`.",
  },
  "ch806-resume": {
    prompt: "You want to reopen a conversation you named `weekly-meeting-notes` a few days ago. What do you type in the terminal in the same folder?",
    choices: [
      "claude -r weekly-meeting-notes",
      "claude -p weekly-meeting-notes",
      "/rename weekly-meeting-notes",
      "/clear weekly-meeting-notes",
    ],
    explain: "Write the name after `claude -r` to open that session. If two have the same name, a list appears. If you type just `claude -r` without a name, you can pick from a list.",
  },
  "ch806-window": {
    prompt: "Which statement is correct about everything Claude is holding right now (the context window)?",
    choices: [
      "It contains only the sentences you typed",
      "After auto-compaction, even your first instructions are all kept",
      "Rules to keep for a long time are best said in the conversation",
      "It holds the conversation plus file contents and command output",
    ],
    explain: "The context window holds the conversation, file contents, command output, and more. After auto-compaction, early instructions can be forgotten, so write rules to keep for a long time in `CLAUDE.md`.",
  },
  "ch806-manage": {
    prompt: "You finished the meeting minutes and want to start something completely different. Which command fits?",
    choices: [
      "Just check the grid with /context",
      "Summarize the current conversation with /compact",
      "Start fresh in an empty context with /clear",
      "Change the conversation's name with /rename",
    ],
    explain: "When you move on to unrelated work, `/clear` is right. When you keep doing the same work and only want to free up space, use `/compact`.",
  },
  "ch806-history": {
    prompt: "Which statement is correct about Claude Code's conversation history?",
    choices: [
      "It is stored encrypted on your computer, so you can relax",
      "Nothing is left on your computer",
      "Only what you typed is saved, and file contents are never kept",
      "It is kept on your computer in plain text, 30 days by default",
    ],
    explain: "History is saved as plain text in `~/.claude/projects/` and kept for 30 days by default. File contents the tools read are kept too, so it is best not to let it read secret files.",
  },
  "ch807-modes": {
    prompt: "When you start `claude` in the terminal, it begins in auto mode. Which statement about this mode is correct?",
    choices: [
      "It reduces permission prompts but does not guarantee safety",
      "A person reviews every action for you, so it is safe",
      "It never changes files and only proposes a plan",
      "It asks you first before every single action",
    ],
    explain: "In auto mode, a separate AI blocks actions that look risky, which reduces permission prompts. It does not guarantee safety.",
  },
  "ch807-prompt": {
    prompt: "A permission prompt appears asking whether it may edit a file. What is the best habit?",
    choices: [
      "Press Enter without reading it to finish faster",
      "Close the terminal and start over again from the very beginning",
      "Read the file name and the changed lines, then choose",
      "Always choose No so it can't do anything",
    ],
    explain: "The permission prompt shows what Claude is about to do. Read which file changes and what changes in it, and allow it when it is the work you asked for.",
  },
  "ch807-skip": {
    prompt: "An article online says to use `--dangerously-skip-permissions` if permission prompts are annoying. What does this guide advise?",
    choices: [
      "On your own computer, keeping it on is much faster and better",
      "Don't use it; allow frequent tasks with allow rules instead",
      "It blocks prompt injection, so it is fine to turn it on",
      "Turn it on only while learning, then off once you're used to it",
    ],
    explain: "This mode is an option meant only for isolated environments, and it does not protect you from prompt injection or mistakes. Don't use it day to day.",
  },
  "ch807-rules": {
    prompt: "What happens if an allow rule and a deny rule both match the same file?",
    choices: [
      "The rule made later wins",
      "The more specific rule wins",
      "Allow comes first, so it goes ahead",
      "Deny comes first, so it is blocked",
    ],
    explain: "Rules are checked in the order deny, ask, allow, and the first match wins. So you can't use an allow rule to make an exception to a deny rule.",
  },
  "ch807-deny": {
    prompt: "What should you keep in mind when practicing deny rules?",
    choices: [
      "Practice only with fake files and never use real passwords",
      "With a rule, nothing can ever read it, so put in the real file",
      "Write the rule in words in `CLAUDE.md`",
      "If the contents show up in the answer after the rule, it worked",
    ],
    explain: "Use only fake files for practice. What the exercise showed is that the read request was blocked. The safest choice is not to keep real passwords in your working folder at all.",
  },
  "ch807-rewind": {
    prompt: "While typing in the input box, you pressed Esc twice, and instead of a menu opening, your text disappeared. Why?",
    choices: [
      "Because the rewind feature is turned off",
      "Because the menu opens only in an empty input box",
      "Because rewind can't be used in manual mode",
      "Because you must press Esc three times for the menu",
    ],
    explain: "The rewind menu opens when the input box is empty. If there is text, the text is cleared, and you can bring cleared text back with the up arrow.",
  },
  "ch807-limits": {
    prompt: "Which of these can rewind undo?",
    choices: [
      "A file Claude changed only with shell commands",
      "A file you edited yourself outside Claude",
      "A file changed by Claude's editing tool",
      "Data you put into an outside database",
    ],
    explain: "Rewind covers files that Claude's editing tool changed. Files changed only by shell commands and work done on outside systems are not undone, so you need a tool like Git.",
  },
  "ch808-what": {
    prompt: "Which is the best thing to write in `CLAUDE.md`?",
    choices: [
      "A full list of the files in this folder and how it is laid out",
      "The password and login details you use for the service",
      "A note shouting to write the minutes neatly, ALWAYS!! NO MATTER WHAT!!",
      "A rule that minutes are written as decisions, to-dos, and next meeting",
    ],
    explain: "Good rules are ones Claude can't figure out from the files and that you can check were followed. Claude reads the folder layout by itself, and passwords never go in.",
  },
  "ch808-make": {
    prompt: "You want to make a `CLAUDE.md` in a folder that has only meeting notes. Which way does this guide recommend?",
    choices: [
      "Write a few lines of rules yourself to make the file",
      "Run `/init` first and have it find the build commands",
      "If you say the rules in the conversation, no file is needed",
      "Delete the settings file in your home folder and start fresh",
    ],
    explain: "`/init` analyzes code and writes down things like build commands and how to test. A notes folder has none of that, so writing it yourself is easier.",
  },
  "ch808-memory": {
    prompt: "Which is the correct difference between auto memory and `CLAUDE.md`?",
    choices: [
      "For both, you have to open the file and write it by hand",
      "Claude writes auto memory, and you write CLAUDE.md yourself",
      "Once auto memory is written, it can't be edited or deleted",
      "Auto memory starts off, so you have to turn it on yourself",
    ],
    explain: "Auto memory is a note Claude writes by itself after seeing your corrections and preferences. It is an ordinary file, so you can edit or delete it, and you can turn it off in `/memory`.",
  },
  "ch808-settings": {
    prompt: "You want settings that apply only to you, and only in this project. Which file is right?",
    choices: [
      "~/.claude/settings.json",
      ".claude/settings.json",
      ".claude/settings.local.json",
      "CLAUDE.md",
    ],
    explain: "`.claude/settings.local.json` applies only to you, only in that project. `.claude/settings.json` applies to everyone working in that folder, and `~/.claude/settings.json` applies to all your projects.",
  },
  "ch808-folder": {
    prompt: "The `.claude` folder looks complicated. What will you mostly edit at first?",
    choices: [
      "Mostly just CLAUDE.md and settings.json",
      "The conversation history in the projects folder",
      "Every file in the folder, one by one",
      "The folder where the Claude Code program is installed",
    ],
    explain: "The official docs also explain that most of the time you only need to edit `CLAUDE.md` and `settings.json`. You don't need to memorize all of it.",
  },
  "ch808-enforce": {
    prompt: "How is writing \"don't read the secret folder\" in `CLAUDE.md` different from making a deny rule?",
    choices: [
      "The two have exactly the same power",
      "The words in CLAUDE.md are always stronger than a deny rule",
      "Claude can ignore a deny rule depending on its mood",
      "Words affect what it tries; permission rules enforce what's allowed",
    ],
    explain: "The words in `CLAUDE.md` affect what Claude tries to do. What is allowed is enforced by Claude Code through permission rules.",
  },
  "ch809-skill": {
    prompt: "You made a skill at `.claude/skills/meeting-notes/SKILL.md`. Which command calls it directly?",
    choices: [
      "/skill SKILL.md",
      "/meeting-notes",
      "/description",
      "/.claude",
    ],
    explain: "The folder name becomes the command name you type. If you write a file path after it, that text goes into the `$ARGUMENTS` spot in the skill.",
  },
  "ch809-debug": {
    prompt: "It seems the skill's settings are not being read. Where is a good place to look first?",
    choices: [
      "Whether your internet connection is fast right now",
      "Whether the terminal's color theme is dark or light",
      "What kind of subscription plan you have",
      "Whether the very first line of SKILL.md is `---`",
    ],
    explain: "The settings are read only when the very first line is `---`. A misspelled field name is also ignored without any error, so check that too.",
  },
  "ch809-subagent": {
    prompt: "In recent versions of Claude Code, what is the easiest way to make a subagent?",
    choices: [
      "Make it in a tab of the `/agents` wizard",
      "Install a plugin first",
      "Ask Claude to make it for you",
      "Add it with `claude mcp add`",
    ],
    explain: "The `/agents` wizard is gone, and typing it now just shows a reminder. Ask Claude, or make the file yourself in `.claude/agents/`.",
  },
  "ch809-mcp": {
    prompt: "Where should you type the `claude mcp add` command?",
    choices: [
      "In the terminal (shell) before you start `claude`",
      "In the session's input box after starting `claude`",
      "In the web browser's address bar",
      "Written inside the `CLAUDE.md` file",
    ],
    explain: "Adding, listing, and removing are commands you type in the shell. Inside a session, use `/mcp` to check and manage servers you already added.",
  },
  "ch809-plugin": {
    prompt: "What should you remember before installing a plugin?",
    choices: [
      "An installed plugin can't run any code",
      "It can run code with your permissions, so read its details screen",
      "Plugins in the official list carry no permission worries at all",
      "The more you install, the more room the context window gets",
    ],
    explain: "Whatever the source, an installed plugin can run code with your user permissions. That is why you read the details screen before installing.",
  },
  "ch809-choose": {
    prompt: "Every time you organize meeting notes, you paste the same steps into the chat. What should you make?",
    choices: [
      "MCP server",
      "Plugin bundle",
      "Subagent",
      "Skill",
    ],
    explain: "If you repeat the same steps, a skill is right. MCP is for outside services, a subagent is for big side tasks, and a plugin is for getting several things as a bundle.",
  },
  "ch810-print": {
    prompt: "How is `claude -p \"request\"` different from the interactive `claude`?",
    choices: [
      "The conversation goes on until you leave",
      "Permission prompts appear more often",
      "It answers once and ends right away",
      "It starts in auto mode",
    ],
    explain: "`-p` answers once without a conversation and ends. And it starts in manual mode, not auto.",
  },
  "ch810-allow": {
    prompt: "You asked `claude -p` to save a file, but no file was made. Why?",
    choices: [
      "Because your subscription plan is a low tier and can't write",
      "Because no one was there to ask, so a write needing approval was denied",
      "Because saving fails when the file name contains Korean letters",
      "Because `-p` can't create files by design",
    ],
    explain: "`-p` starts in manual mode, so calls that need approval are denied. If you allow them in advance, like `--allowedTools \"Read,Write\"`, the file gets made.",
  },
  "ch810-pipe": {
    prompt: "You want to pass the body of an email from a stranger straight to `claude -p`. What is the better way?",
    choices: [
      "Read it first, and don't pass it straight on if it's untrusted",
      "Pipes are always safe, so pass it on as is without looking",
      "Giving broad `--allowedTools` makes it safe, so pass it that way",
      "The more text, the safer, so pass all of it",
    ],
    explain: "Text can hide instructions meant to steer the AI. The official docs also say not to pipe untrusted content straight in.",
  },
  "ch810-output": {
    prompt: "How should you read `total_cost_usd` in the `--output-format json` result?",
    choices: [
      "It is the amount added on top of your subscription bill",
      "It is your remaining limit written in dollars",
      "It is a value that tells you next month's bill in advance",
      "It is an estimate the program calculated, not your subscription bill",
    ],
    explain: "This number is an estimate the program calculated, so it can differ from what you are actually billed. For subscription users, it means nothing as a billing figure.",
  },
  "ch810-exit": {
    prompt: "What does a script read to judge whether `claude -p` succeeded?",
    choices: [
      "The number of characters in the answer",
      "Its exit code (0 means it succeeded)",
      "The text color in the terminal window",
      "The way the answer's sentence ends",
    ],
    explain: "On success, the exit code is 0. On failure, it is a value other than 0. A run that stopped at `--max-turns 1` had an exit code of 1.",
  },
  "ch810-script": {
    prompt: "In a script, you used a Korean variable name, `메모`, and got an error. How should you fix it?",
    choices: [
      "Change every file name to English",
      "Open a new terminal window",
      "Write the variable name in English, like `memo`",
      "Raise `--max-turns`",
    ],
    explain: "bash does not accept Korean variable names. File names can be in Korean, but write variable names in English.",
  },
  "ch810-subscription": {
    prompt: "When you run scripts on a subscription account, what should you do with the `--bare` option?",
    choices: [
      "Always add it to every script, since it starts faster",
      "Add it only when you check usage with `/usage`",
      "Don't use it, because it doesn't read your subscription login",
      "Add it only to commands that call a skill",
    ],
    explain: "`--bare` does not read your subscription login, and it does not load `CLAUDE.md` or skills either. Check usage yourself with `/usage`.",
  },
  "ch810-unattended": {
    prompt: "The script printed `Done`. What does this word mean?",
    choices: [
      "It means the minutes match the notes perfectly, with nothing missing",
      "It means the program ended normally; a person still reads the content",
      "It means no one needs to read the results from now on",
      "It means even next week's notes have all been organized already",
    ],
    explain: "Exit code 0 only tells you it ended normally. Whether the content is right, you check by reading it yourself for the first few weeks.",
  },
  "ch811-what": {
    prompt: "You want a record every time a file changes, without fail. Why is a hook better than writing it in CLAUDE.md?",
    choices: [
      "Because Claude Code itself runs a hook at set points every time",
      "Because a hook makes Claude answer more politely",
      "Because using a hook uses no usage at all",
      "Because Claude never reads CLAUDE.md at all",
    ],
    explain: "Following the words in CLAUDE.md is up to Claude. A hook is run by Claude Code at set points, so it is not left to the AI's judgment.",
  },
  "ch811-log": {
    prompt: "In hook settings, what point in time does `PostToolUse` mean?",
    choices: [
      "When you first start Claude Code",
      "Before Claude uses a tool",
      "After Claude has used a tool",
      "When you close the terminal",
    ],
    explain: "`PostToolUse` means after a tool is used. So it can't undo work that is already done. The point that steps in before a tool is used is `PreToolUse`.",
  },
  "ch811-check": {
    prompt: "Which statement about the `/hooks` screen and the settings file is correct?",
    choices: [
      "You can make a new hook on the `/hooks` screen and save it right away",
      "`/hooks` is view-only, and the settings file must not have trailing commas",
      "You should add lots of comments to the settings file so hooks run well",
      "If you change even one line of a hook, you must restart the computer",
    ],
    explain: "`/hooks` is a screen for viewing registered hooks. You make and change them in the settings file or by asking Claude. JSON can't have trailing commas or comments.",
  },
  "ch811-trust": {
    prompt: "What does this guide recommend when you first use a folder someone else gave you?",
    choices: [
      "Run it with `claude -p` first, and keep using it if the result looks fine",
      "Hooks are run by Claude Code, so treat it as safe and just use it",
      "Just rename the folder to your own name and start using it",
      "Before you start Claude, open `.claude/settings.json` and read through it",
    ],
    explain: "Hooks are shell commands, and they can come along inside a repository. `claude -p` runs those hooks even in a folder you never trusted. That is why we recommend reading the settings file before you start. This advice is the guide's own judgment, not a sentence from the official docs.",
  },
  "ch811-statusline": {
    prompt: "The status line is empty. What is one cause the docs mention?",
    choices: [
      "Because your plan is a low tier",
      "Because you didn't accept the folder trust dialog",
      "Because the notes in the inbox folder are far too long",
      "Because the current model is Opus 5.5",
    ],
    explain: "The status line stays empty until you accept the folder trust dialog. The status line also runs shell commands, so it follows the same trust rules as hooks.",
  },
  "ch811-style": {
    prompt: "Which command can you use when you want answers short, with the result first?",
    choices: [
      "`/theme Concise`",
      "`/usage Concise`",
      "`/output-style Concise`",
      "`/hooks Concise`",
    ],
    explain: "An output style sets the role, tone, and format of answers. `Concise` gives the result first and cuts down intros and summaries. A theme is about colors.",
  },
  "ch812-git": {
    prompt: "What happens if you write `비밀/` in the `.gitignore` file?",
    choices: [
      "The `비밀` folder is deleted",
      "The `비밀` folder is encrypted",
      "Claude reads that folder more often",
      "Git does not record the `비밀` folder",
    ],
    explain: "`.gitignore` is a list of files Git should not record. It does not delete or encrypt the folder.",
  },
  "ch812-worktree": {
    prompt: "What does the repository need before you can use `claude --worktree memo-fix`?",
    choices: [
      "At least one commit",
      "A paid plugin",
      "A second monitor",
      "A notes file named `memo-fix`",
    ],
    explain: "A worktree is made from a commit, so the repository needs at least one commit. Files that are not in a commit do not show up inside it.",
  },
  "ch812-two-windows": {
    prompt: "When you hand off work side by side in two terminal windows, what is the better way?",
    choices: [
      "Start `claude` in the very same folder in both windows",
      "Use a worktree with a different name in each window",
      "Close one window and wait",
      "Send the same request to both windows at once",
    ],
    explain: "In the same folder, both can touch the same files. A worktree has its own files, so they don't run into each other.",
  },
  "ch812-more": {
    prompt: "While you use Remote Control from your phone, where does the work run?",
    choices: [
      "On your computer, so the computer must stay on",
      "On your phone, so you can turn the computer off",
      "In the cloud, so you can close the terminal",
      "On Anthropic's servers, so no install is needed",
    ],
    explain: "The work keeps going on your computer, and your phone is a window for viewing that session. If you close the terminal, the session goes offline.",
  },
  "ch813-usage": {
    prompt: "You hit your session limit. Which statement is correct?",
    choices: [
      "Switching models lifts it right away",
      "Requests are blocked until the time shown",
      "Typing `/clear` lifts the limit right away",
      "Reopening the terminal lifts it",
    ],
    explain: "A session limit is not about one conversation. It is how much you can use in a set period of time. When you hit it, you are blocked until the time shown. All models share it, so switching models doesn't lift it.",
  },
  "ch813-model": {
    prompt: "You want it to think harder just for this one request. What do you do?",
    choices: [
      "Write \"think hard\" in the request",
      "Put `/clear` before the request",
      "Put `ultrathink` in the request",
      "Write the request in all caps",
    ],
    explain: "If you put in `ultrathink`, it thinks harder for that turn only. Words like \"think hard\" are treated as ordinary text.",
  },
  "ch813-extra": {
    prompt: "What should you know before turning on fast mode (`/fast`) on a subscription plan?",
    choices: [
      "It uses only usage credits, outside your subscription limits",
      "It is included in your subscription, so it speeds up at no extra cost",
      "It is a feature you can turn on only with Sonnet and Haiku",
      "It makes answers shorter so that you use less of your usage",
    ],
    explain: "Fast mode costs more per token, and on subscription plans it uses only usage credits. Be careful not to turn it on just because of its name.",
  },
  "ch813-sandbox": {
    prompt: "Which statement about the sandbox is correct?",
    choices: [
      "It is on from the very start and can never be turned off",
      "It wraps even the file tools and hooks",
      "Turning it on means no file can be read",
      "It is off by default and wraps only shell commands",
    ],
    explain: "The sandbox is off by default. It wraps only shell commands, and by default it can read widely. Having it does not guarantee safety.",
  },
  "ch813-injection": {
    prompt: "You want to hand over a document from a business partner. What is the better way?",
    choices: [
      "Pipe it straight into `claude -p` to save the time of reading it",
      "Read it first, then ask it to flag any instruction-like lines",
      "Auto mode guarantees safety, so skip checking the results",
      "Hand it over saying \"do whatever the document tells you\"",
    ],
    explain: "Text written by others can contain sentences meant to steer the AI. Don't pipe untrusted content straight in. Auto mode does not guarantee safety either.",
  },
  "ch813-data": {
    prompt: "On a personal account, if you don't allow your data to be used to improve the models, how long is it kept?",
    choices: [
      "5 years",
      "1 year",
      "30 days",
      "90 days",
    ],
    explain: "If you allow it, 5 years. If you don't, 30 days. Separately, conversation history also stays on your computer unencrypted for 30 days by default.",
  },
  "ch813-trouble": {
    prompt: "`claude` won't start at all. Which command should you type in the terminal first?",
    choices: [
      "`claude doctor`",
      "`/doctor`",
      "`claude --version --help`",
      "`git status --short`",
    ],
    explain: "`claude doctor` prints a diagnosis in the terminal without a session. `/doctor` is typed inside a session, after the session has started.",
  },
  "ch813-errors": {
    prompt: "You got `Repeated 529 Overloaded errors`. Which statement is correct?",
    choices: [
      "Your usage limit ran out, so wait for the reset time",
      "Your request was wrong, so you need to rewrite the sentence",
      "You were logged out, so you need to run `/login` again",
      "The server is overloaded, so try again a bit later",
    ],
    explain: "529 means the server side is overloaded. It is not your usage limit, and it doesn't count against your limit.",
  },
  "ch814-how": {
    prompt: "In the practice tasks, what must you do before the last task that uses your own notes?",
    choices: [
      "Change all the notes into English",
      "Remove personal information from the notes",
      "Combine the notes into one file",
      "Post the notes on the internet",
    ],
    explain: "Do it in the practice folder, and remove personal information from your own notes before putting them in.",
  },
  "ch814-check": {
    prompt: "After running the weekly cleanup script, why do you move the notes to the `done` folder?",
    choices: [
      "To make the note files smaller",
      "Because notes in the `done` folder get encrypted automatically",
      "So the same notes aren't organized again next week",
      "So Git can't read the `inbox` folder",
    ],
    explain: "The script organizes all the meeting notes in `inbox`. If you move finished notes away, only new notes get organized next week.",
  },
  "ch814-habits": {
    prompt: "You corrected Claude twice, and it is still wrong. What do the official docs recommend doing next?",
    choices: [
      "Say the same thing a third time in bigger letters",
      "Keep switching models",
      "Wipe the terminal and reinstall",
      "Use `/clear` and write a better request",
    ],
    explain: "If it is still wrong after two corrections, don't correct it a third time. Use `/clear` and write a better request.",
  },
  "ch814-rules": {
    prompt: "You keep pasting the same steps into the chat. What should you add?",
    choices: [
      "Skill",
      "Sandbox",
      "worktree",
      "Status line",
    ],
    explain: "Make a skill when you keep pasting the same instructions or steps. Add rules one at a time, when the same annoyance keeps coming back.",
  },
  "ch814-routine": {
    prompt: "In the weekly routine, what do you do right after you get the result?",
    choices: [
      "Install a new plugin",
      "Check numbers, owners, and due dates against the original",
      "Delete all the notes",
      "Do nothing until next week",
    ],
    explain: "After Collect and Organize comes Check. Then, if you are happy with it, Record it, and if the same problem keeps coming back, Fix it.",
  },
}

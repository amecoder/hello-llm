// English chapter titles and quiz text for guide/22-antigravity (Korean source: quiz-bank*.ts, same ids and answers).
export const ANTIGRAVITY_CHAPTER_TITLE_EN: Record<number, string> = {
  601: "Chapter 1. What Antigravity Is and How It Differs from the First Two Tools",
  602: "Chapter 2. Installing the App and First Cleanup",
  603: "Chapter 3. Rules and Skills",
  604: "Chapter 4. Permissions and Undo",
  605: "Chapter 5. Plans, Schedules, Browser, and Goals",
  606: "Chapter 6. Using It in the Terminal",
  607: "Chapter 7. Cost, Data, Safety, and Choosing Among the Three Tools",
}

export const ANTIGRAVITY_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch601-surfaces": {
    prompt: "How is the Antigravity app related to the terminal program agy?",
    choices: [
      "The desktop app only uses Gemini, while agy only runs Claude",
      "Both run the same agent, so most features work the same way",
      "agy is just a viewer that copies the app screen",
      "The app and agy are separate products made by different companies",
    ],
    explain: "Official docs state that the app and CLI run the same agent, so most features work in both.",
  },
  "ch601-plans": {
    prompt: "What changes when you use Antigravity with a free Google account?",
    choices: [
      "You get all features, and your usage limit refills every week",
      "Features like scheduled tasks and the CLI require a paid plan, so free accounts only get chat",
      "You can ask at most ten questions per day",
      "You cannot save output files and can only view them on screen",
    ],
    explain: "Every plan includes every feature. On a free account, your usage limit refills weekly.",
  },
  "ch601-models": {
    prompt: "Which model does this guide recommend for hands-on practice on a free account after November 2, 2026?",
    choices: [
      "Gemini 3.8 Flash",
      "Gemini 4 Argon",
      "Claude Opus 4.6",
      "Claude Sonnet 5.5",
    ],
    explain: "The Claude 4.6 family leaves the free tier on November 2, and Gemini 4 Argon and Claude Sonnet 5.5 require Pro or higher.",
  },
  "ch601-compare": {
    prompt: "When opening the organizer folder made in the Codex step with Antigravity, what do you need to move?",
    choices: [
      "Rename AGENTS.md to GEMINI.md",
      "Move skills into the .gemini/skills folder",
      "Delete CLAUDE.md before Antigravity can open it",
      "Nothing—you can open it just as it is",
    ],
    explain: "Antigravity reads AGENTS.md and the .agents/ folder, which match the file names and locations from Codex.",
  },
  "ch602-install": {
    prompt: "What is the right way to sign in to the Antigravity app?",
    choices: [
      "Use it right away without signing in",
      "Create a separate username and password inside the app and complete email verification first",
      "Sign in with a ChatGPT account",
      "Click Sign in and sign in with your personal Google account in the browser",
    ],
    explain: "Clicking Sign in opens your browser, where you sign in with a personal Google account (Free, Pro, or Ultra).",
  },
  "ch602-project": {
    prompt: "How do you open the organizer folder in the Antigravity app?",
    choices: [
      "Zip the folder and upload it into the chat box",
      "Turn the folder into a Git repository first before adding it under New Project",
      "Just type the folder name into the chat box",
      "Go to New Project and choose the folder with Add Folder",
    ],
    explain: "The agent works inside a project. Pick your folder with New Project → Add Folder; a regular folder works fine.",
  },
  "ch602-plan": {
    prompt: "What approach does this guide recommend when giving the agent a new kind of task?",
    choices: [
      "Get a plan first in Planning mode, read it over, and then click Proceed",
      "Switch to Always proceed so it runs all the way through without stopping for a plan",
      "Use Fast mode so it runs right away without a plan",
      "Change permissions to Turbo to allow every command",
    ],
    explain: "Planning mode creates a plan first, letting you read it and click Proceed to continue. When starting out, Request review is recommended too.",
  },
  "ch602-first": {
    prompt: "What happens when you point to a file with @ in the chat box?",
    choices: [
      "The file path is passed along, and the agent reads the file when needed",
      "The file is automatically deleted",
      "The file is moved to another folder",
      "The entire contents of the file are pasted directly into the chat box as a long block",
    ],
    explain: "Mentioning a file does not paste its contents. Only the path is sent, and the agent reads the file when it needs to.",
  },
  "ch602-review": {
    prompt: "In the Review pane, what should you pick to see only the files the agent edited in this chat?",
    choices: [
      "Staged Changes",
      "Uncommitted",
      "Agent Edits",
      "Discard",
    ],
    explain: "The default view, Uncommitted, also shows your own edits. Agent Edits shows only the files the agent changed in this chat.",
  },
  "ch603-where": {
    prompt: "Which file names does Antigravity read as rule files in this folder?",
    choices: [
      "Only CLAUDE.md",
      "It does not read rule files and only follows instructions typed directly in chat",
      "Only README.md",
      "AGENTS.md and GEMINI.md",
    ],
    explain: "Antigravity reads AGENTS.md, GEMINI.md, and .agents/rules/. CLAUDE.md is not on its list of rule files.",
  },
  "ch603-test": {
    prompt: "How did this guide test whether AGENTS.md was actually being read?",
    choices: [
      "Asked the agent if it had read AGENTS.md",
      "Saved AGENTS.md several times before running it",
      "Ran the same note once without AGENTS.md and once with it, then compared",
      "Had it organize two different notes, like a meeting note and a study note, and compared the two results",
    ],
    explain: "Following feedback from the Codex step, we ran the exact same note and prompt twice: the section unique to AGENTS.md appeared 0 times without the file and 1 time with it.",
  },
  "ch603-skills": {
    prompt: "How do you call the weekly-review skill directly in the Antigravity app?",
    choices: [
      "$weekly-review (variable syntax)",
      "/weekly-review",
      "@weekly-review (mention syntax)",
      "#weekly-review",
    ],
    explain: "Type /skill-name into the app chat box. That differs from $name in Codex and matches /name in Claude Code.",
  },
  "ch603-rules": {
    prompt: "What must you include when creating a rule file inside the .agents/rules/ folder?",
    choices: [
      "Write the file name in all capital letters",
      "Put a trigger value at the very top of the file",
      "Put only a single line of rules in each file",
      "Sort the rule files neatly into deep subfolders inside the rules folder",
    ],
    explain: "Files inside rules/ must start with a trigger at the top. If it is missing or wrong, the file is silently ignored.",
  },
  "ch604-presets": {
    prompt: "Which permission preset in the Antigravity app runs every command without restrictions?",
    choices: [
      "Request Review mode",
      "Inherit Global setting",
      "Default mode",
      "Turbo mode",
    ],
    explain: "Turbo runs every command without a fence or confirmation and can read and write across your whole computer. You do not need it for organizing notes.",
  },
  "ch604-sandbox": {
    prompt: "How is the command fence (sandbox) set by default in the app's Default preset versus the terminal (agy)?",
    choices: [
      "Off by default in both",
      "On by default in both the app and the terminal, with internet blocked in both",
      "On in the app's Default preset, and off by default in the terminal",
      "Off in the app's Default preset, and on in the terminal",
    ],
    explain: "In the app's Default and Auto presets, the fence is on and internet is blocked (it is off in Request Review and Turbo). In the terminal (agy), it is off by default.",
  },
  "ch604-undo": {
    prompt: "Why should you be careful when clicking Discard unstaged changes in the Review pane?",
    choices: [
      "Because it renames AGENTS.md to GEMINI.md",
      "Because clicking it immediately signs you out of your Google account and makes you sign in again",
      "Because it takes effect right away without confirmation and can delete new files",
      "Because it disconnects your internet",
    ],
    explain: "Discard happens immediately without asking to confirm, and it even deletes untracked new files from disk. Record your work with Git before handing tasks over.",
  },
  "ch605-plan": {
    prompt: "How does using /plan differ from a regular request?",
    choices: [
      "It searches the internet for sample plans and copies them straight into your project files",
      "It edits files faster",
      "It clears the chat and starts fresh",
      "Before editing files, it inspects the folder and shows decisions to review",
    ],
    explain: "A regular request starts editing files right away, whereas /plan inspects things first, shows you key decisions, and waits for you to click Proceed.",
  },
  "ch605-schedule": {
    prompt: "You want your Friday weekly review to keep running beyond a single chat. What should you use?",
    choices: [
      "/schedule — a timer that only runs inside the chat where you made it",
      "Automations — a schedule that stays active even after restarting the app",
      "/goal — a goal mode that works nonstop until finished and restarts itself every week",
      "/browser — a subagent that controls Chrome",
    ],
    explain: "/schedule belongs to the chat where it was created. For recurring tasks that outlive a chat, use Automations in the app sidebar.",
  },
  "ch605-browser-goal": {
    prompt: "What does this guide recommend when using /goal?",
    choices: [
      "Switch permissions to Turbo so it never asks for approval while working toward the goal",
      "Clearly write down what counts as \"done\"",
      "Switch to Fast mode",
      "Keep the Review pane closed",
    ],
    explain: "/goal has no cap on repeat attempts, so it can burn through your usage. Clearly state what counts as done. Your permission and review settings stay in effect.",
  },
  "ch605-remote": {
    prompt: "When you control the agent from another device with Remote Control, where does the actual work happen?",
    choices: [
      "Separately on the other device",
      "In an isolated empty workspace hosted on Google Cloud servers",
      "Only inside the web browser",
      "Using the files and tools on your computer",
    ],
    explain: "Even over remote control, the agent works with the files, tools, and sign-in state on your computer. On the other device, you sign in with the same Google account.",
  },
  "ch606-install": {
    prompt: "What is the 'Workspace trust' check when you run agy for the first time?",
    choices: [
      "A step to confirm that you trust this folder",
      "A step to change your Google account password",
      "A step to upgrade to a paid plan",
      "A step to upload the folder to the cloud",
    ],
    explain: "On first run, before the agent looks through your files, it asks whether you trust this folder.",
  },
  "ch606-modes": {
    prompt: "Which description of agy's accept-edits mode is accurate?",
    choices: [
      "It runs all commands and file edits without asking, and completely disables the workspace fence",
      "It only auto-approves internet access",
      "It only reads files and never edits them",
      "It auto-approves file edits in the working folder, but asks before running commands",
    ],
    explain: "accept-edits automatically allows creating and editing files inside the working folder, but still asks before running terminal commands.",
  },
  "ch606-headless": {
    prompt: "What happens in agy -p when an action needs permission?",
    choices: [
      "It pops up a window on screen to ask for permission",
      "It is quietly denied, execution continues, and it finishes with exit code 0",
      "It restarts your computer",
      "It stops right away with error code 1 and gives no hint about what was blocked",
    ],
    explain: "Because there is no prompt window, policy handles it. Unapproved actions are quietly denied, the exit code is 0, and a notice is printed to stderr.",
  },
  "ch606-pitfalls": {
    prompt: "agy -p finished with success (exit code 0), but the output file is missing. Based on this guide's experience, what should you do first?",
    choices: [
      "Read the denial notice in stderr to see what was blocked",
      "Create a new Google account",
      "Immediately add --dangerously-skip-permissions",
      "Just wait around for the output file to show up on disk since the run succeeded",
    ],
    explain: "When a shell command was denied, it sometimes exited with 0 without creating anything. Read the denial notice, then narrow the scope with the mode or your prompt.",
  },
  "ch606-resume": {
    prompt: "How do you jump straight back into the last chat from this folder in agy?",
    choices: [
      "agy -c (continue)",
      "agy -p",
      "agy --version (check version)",
      "agy --sandbox",
    ],
    explain: "Use agy -c to continue the last chat in that folder, or /resume to pick one from a list. Chat history is kept separately for each folder.",
  },
  "ch607-cost": {
    prompt: "On the Pro plan, what should you pick so AI credits are not spent without you noticing?",
    choices: [
      "Set automatic credit usage to Never",
      "Set automatic credit usage to Always",
      "Set permissions to Turbo",
      "Set Automations to hourly",
    ],
    explain: "With Never, once your included usage runs out, it waits for the next refill instead of automatically spending credits.",
  },
  "ch607-data": {
    prompt: "Where is the setting that controls whether your chats are used to improve models?",
    choices: [
      "Writing \"Do not train\" at the top of AGENTS.md applies it automatically",
      "The Discard button in the Review pane",
      "An option on the /goal command",
      "Enable Telemetry under Account in Settings",
    ],
    explain: "When Enable Telemetry is on, your chats are used to improve Antigravity and its models. You can turn data collection off anytime in Settings.",
  },
  "ch607-injection": {
    prompt: "Antigravity did not follow the hidden-instruction note (in 1 test). How should you take this result?",
    choices: [
      "From now on, you can hand over any document without checking",
      "Setting permissions to Turbo blocks hidden instructions",
      "One test is not a guarantee, so check results carefully with someone else's documents",
      "Antigravity is built to never fall for hidden instructions, so you never have to double-check",
    ],
    explain: "All three tools blocked it once, but that is no guarantee. When feeding in documents from others, compare the output against the original.",
  },
  "ch607-choose": {
    prompt: "When all three tools share the organizer folder, how should you update the rules?",
    choices: [
      "Create a new GEMINI.md and delete the rest",
      "Update both CLAUDE.md and AGENTS.md together",
      "Update only CLAUDE.md, and Codex and Antigravity will read and follow it too",
      "Explain the rules in chat every single time",
    ],
    explain: "Claude Code reads CLAUDE.md, while Codex and Antigravity read AGENTS.md as their rule file. So you update both files together.",
  },
}

// English chapter titles and quiz text for guide/30-ai-sdlc (Korean source: quiz-bank*.ts, same ids and answers).
export const AI_SDLC_CHAPTER_TITLE_EN: Record<number, string> = {
  701: "Chapter 1. Building with AI",
  702: "Chapter 2. Creating a GitHub Repository",
  703: "Chapter 3. Planning and Specs",
  704: "Chapter 4. Build",
  705: "Chapter 5. Verification and Testing",
  706: "Chapter 6. Pull Requests and Reviews",
  707: "Chapter 7. Deployment",
  708: "Chapter 8. Operations and Improvements",
  709: "Chapter 9. Safety and Responsibility",
  710: "Chapter 10. Hands-on Exercises",
}

export const AI_SDLC_QUESTION_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  "ch701-sdlc": {
    prompt: "Which statement accurately describes the SDLC according to GitHub?",
    choices: [
      "You must set up planning, building, reviewing, verifying, deploying, and operating right from the start",
      "Only developers who manage servers can deploy, so beginners should stop after planning and building and skip the rest",
      "You can start small with one repository and a few tasks, then expand as your project grows",
      "SDLC is a term only used by big companies and does not apply to small web pages",
    ],
    explain: "GitHub says you do not need every stage at once. Many people start with a repository and a few issues, then expand from there.",
  },
  "ch701-ai": {
    prompt: "According to official docs, what is a common reason AI says it is done when the work is actually incomplete?",
    choices: [
      "The AI model is too old to know modern web tech, so it gives up halfway and stops before finishing the job",
      "A slow internet connection delayed saving the final files",
      "The prompt was too long, so the AI forgot the beginning",
      "It had no way to verify its work, so it stopped when things looked done",
    ],
    explain: "Without a way to check its own work, Claude stops where things look finished. That is why Ch. 5 gives it a verification check.",
  },
  "ch701-human": {
    prompt: "According to this guide, what must a human always be in charge of when building with AI?",
    choices: [
      "Choosing what to build, checking the evidence, and deciding whether to merge and deploy",
      "Publishing what the AI made right away without checking it",
      "Rewriting every single line of code by hand from scratch to replace everything the AI wrote",
      "Changing the AI model settings every single time",
    ],
    explain: "Deciding what and why to build, judging the evidence, and choosing to merge and deploy are human jobs. You are responsible for reviewing before approving.",
  },
  "ch702-basics": {
    prompt: "What is the relationship between Git and GitHub?",
    choices: [
      "Git is a tool that tracks file changes, and GitHub is an online service to store that history and work together",
      "Git and GitHub are just two names for the exact same program, so installing one gives you both with the exact same features",
      "GitHub is a program used only on your computer, and Git is an online service",
      "Git is a program for writing documents, and GitHub is a program for drawing pictures",
    ],
    explain: "Git is a version control system. GitHub is a service that hosts Git repositories online and adds planning and collaboration tools.",
  },
  "ch702-visibility": {
    prompt: "How should you set up your repository if you want to publish it on GitHub Pages later with a free account?",
    choices: [
      "Make it Private",
      "Set the repository to Public",
      "Create it without a README",
      "Make sure to include a license",
    ],
    explain: "Free accounts can only use GitHub Pages on public repositories. That is why the tutorial also asks you to choose Public.",
  },
  "ch702-files": {
    prompt: "Which statement about .gitignore is true?",
    choices: [
      "It is the first guide shown to visitors opening the repository, explaining what the project does and how to get started",
      "It lists files for Git to ignore when committing, though already-committed files stay tracked",
      "It tells other people how they are allowed to use your code",
      "It sets the web address for your GitHub Pages site",
    ],
    explain: ".gitignore is a list of files to ignore. Files already committed must be untracked first, so it is best to list them from the start.",
  },
  "ch702-clone": {
    prompt: "What happens when you clone a repository to your computer?",
    choices: [
      "The original repository on GitHub is deleted, leaving only the copy on your computer so you can no longer sync with GitHub",
      "Only the file names are downloaded, while their contents stay empty",
      "It is published to GitHub Pages right away",
      "A copy linked to the original on GitHub is created on your computer",
    ],
    explain: "The cloned copy stays linked to the original on GitHub, so you can upload the changes you record back to it.",
  },
  "ch703-why": {
    prompt: "According to official docs, what is a common reason AI builds something different from what you had in mind?",
    choices: [
      "Details that cannot be known just by reading the repository were left out",
      "The file names used Korean characters, so the AI could not read or open them at all",
      "The prompt was too short, so the AI refused to do the work",
      "Using plan mode makes the AI build something different on purpose",
    ],
    explain: "Details like who uses it and what is frustrating only live in your head. That is why you write them down before building.",
  },
  "ch703-interview": {
    prompt: "What do the official docs recommend when you are still unsure about what to build?",
    choices: [
      "Write a complete requirements document all by yourself, and only send your request once you are sure nothing is missing",
      "Wait for Claude to figure it out and build it without any prompt",
      "Have Claude interview you and write the results into SPEC.md",
      "Ask it to copy someone else's website exactly as it is",
    ],
    explain: "If you ask Claude to interview you, it asks multiple-choice questions about undecided parts and summarizes them in SPEC.md. Then you build in a new session.",
  },
  "ch703-spec": {
    prompt: "Which line is a good fit for a to-do board SPEC.md?",
    choices: [
      "Read the table using JavaScript",
      "Every to-do item from the meeting notes is shown without missing any",
      "It looks pretty",
      "Write clean, readable code using the latest tech so anyone who sees it later will be impressed",
    ],
    explain: "A spec should describe visible behavior that can be checked with a yes or no. Leave out coding methods or vague feelings.",
  },
  "ch703-tools": {
    prompt: "How does this guide handle spec-kit and OpenSpec?",
    choices: [
      "It introduces their concepts without installing them, practicing the idea via the interview → SPEC.md flow",
      "It says you must install both tools before starting Step 4, and has you type the install commands in every single chapter",
      "It warns that both tools are dangerous and tells you never to use them",
      "It installs spec-kit only and does not mention OpenSpec",
    ],
    explain: "spec-kit needs Python 3.11+ and uv, and OpenSpec requires terminal installation, so this guide only introduces their concepts.",
  },
  "ch704-plan": {
    prompt: "Which statement about plan mode is true?",
    choices: [
      "It edits all the needed files while making a plan, and shows you the results once you approve",
      "Claude reads the files and proposes a plan, but does not change anything until you approve",
      "It skips planning and creates the final files right away",
      "In plan mode, it cannot even read files",
    ],
    explain: "In plan mode, nothing is changed until you approve. Fixing mistakes is cheapest during the planning stage.",
  },
  "ch704-branch": {
    prompt: "What is a good reason to use a branch?",
    choices: [
      "To make the repository private so other people cannot see your code while you are working on it",
      "To erase your commit history",
      "To change your GitHub Pages web address",
      "To work separately without touching the main version (main) until you are ready",
    ],
    explain: "A branch is a separate workspace. Because main stays untouched until you are ready, you can experiment freely.",
  },
  "ch704-commit": {
    prompt: "What commit style does GitHub recommend?",
    choices: [
      "Put one separate, complete change into each commit you make",
      "Commit all your day's work at once in the evening so your history stays neat and does not get too long",
      "Gather unrelated changes into one branch and commit them all at once",
      "Only commit once right before final deployment",
    ],
    explain: "Putting one complete change in each commit makes it easy to undo just that part if you decide to try a different way.",
  },
  "ch704-read": {
    prompt: "What does this guide recommend when you do not fully understand the code AI wrote?",
    choices: [
      "Merge it right away even if you do not understand it",
      "Delete all the code you do not understand, find a similar example online, and rewrite it yourself from scratch",
      "Ask it to explain what changed and why for each change, and which line in SPEC.md it connects to",
      "Ask the AI to write longer code",
    ],
    explain: "A change whose explanation does not connect to SPEC.md might be something you never asked for. Ask about that part.",
  },
  "ch705-why": {
    prompt: "What changes when you give Claude a verification check (a test that answers pass or fail)?",
    choices: [
      "Claude skips testing and finishes faster, saving your usage limit and giving you results sooner",
      "AI usage becomes free",
      "Only humans can see the test results",
      "Claude runs the loop by itself: making changes, testing, fixing what broke, and testing again",
    ],
    explain: "When something answers pass or fail, Claude closes the loop by itself. Without it, you end up acting as the test yourself.",
  },
  "ch705-kinds": {
    prompt: "If you already have a verification check, what do the official docs say is the single most useful line in CLAUDE.md?",
    choices: [
      "The name of the project",
      "The creator's name and contact info, along with a note on when the project first started",
      "The command that runs that verification check",
      "Your favorite color",
    ],
    explain: "If you write the command to run your check in CLAUDE.md, Claude can verify its own work every time.",
  },
  "ch705-evidence": {
    prompt: "How does this guide recommend responding when Claude says, \"All tests passed\"?",
    choices: [
      "Trust its word and deploy right away",
      "Delete all the tests",
      "Ask to see evidence: the command it ran and its output",
      "Ask another AI the same question, and if both AIs say it passed, trust them and deploy right away",
    ],
    explain: "The words \"all passed\" alone tell you almost nothing. Always get evidence, like the command and its output, or a screenshot.",
  },
  "ch705-actions": {
    prompt: "Which statement about GitHub Actions is true?",
    choices: [
      "It is only free for private repositories",
      "It is an AI feature that writes code for you, reading issues and building and merging features on its own once set up",
      "It can automatically run set checks whenever you push changes, and standard runners are free on public repositories",
      "It is a feature for changing your web page design",
    ],
    explain: "Actions automates building, testing, and deploying. Results show up on your PR, and standard runners are free on public repositories.",
  },
  "ch706-pr": {
    prompt: "Which statement about a PR (Pull Request) is true?",
    choices: [
      "It is a request to change your GitHub Pages web address",
      "It is a request sent to get permission from an admin before deleting an entire repository or handing it over to someone else",
      "It is a place to propose merging changes from one branch into another, and to discuss and review them beforehand",
      "It is a request to change your password",
    ],
    explain: "A PR gives you a place to discuss and review changes before merging. Keep it small, and write down what you changed and why.",
  },
  "ch706-review": {
    prompt: "When getting a review against SPEC.md, why do the official docs say to \"skip style\"?",
    choices: [
      "If you ask a reviewer to find problems, they will always find something, and fixing all of it creates clutter",
      "Fixing style is banned by GitHub's Terms of Service, so covering it in a review will get your repository suspended",
      "AI always gets the style right on its own",
      "Fixing style turns the repository private",
    ],
    explain: "A reviewer will always find something to point out. Only fix gaps that affect accuracy so you do not add needless clutter.",
  },
  "ch706-ai-review": {
    prompt: "How should you take it when an AI review finds no issues?",
    choices: [
      "It means the code has zero bugs or security issues, so you can merge and deploy right away without looking further",
      "It means the AI automatically approved the PR",
      "It might have missed something, so a human still looks it over and decides whether to merge",
      "It means you never need to get a review again",
    ],
    explain: "An AI review can miss bugs or security problems, so finding nothing does not mean it is safe. A human decides whether to merge.",
  },
  "ch706-merge": {
    prompt: "What happens if you delete the branch after merging a PR?",
    choices: [
      "The PR discussion and commit history disappear along with the branch, so you can never see what changed later",
      "The PR and commit history are not erased; they stay",
      "Your GitHub Pages site goes down",
      "The repository turns private",
    ],
    explain: "Deleting the branch is the final step of the GitHub flow. Even after you delete the branch, the PR and commit history remain.",
  },
  "ch707-pages": {
    prompt: "Which statement about GitHub Pages on a free account is true?",
    choices: [
      "You can use it on public repositories, and the site is public on the internet",
      "You can only use it on private repositories, and the site is private too",
      "Only people who are logged in can view the site",
      "You can add sign-up and payment features to the site and run it as a free online store for your business",
    ],
    explain: "Free accounts can only use Pages on public repositories, and Pages sites are public on the internet. Remove sensitive data before publishing.",
  },
  "ch707-ways": {
    prompt: "For a page like our to-do board that needs no custom build step, which publishing method do the official docs recommend?",
    choices: [
      "Publishing by writing a GitHub Actions workflow file yourself",
      "Buying your own server",
      "Publishing by sending the files over email",
      "Publishing it directly from a branch",
    ],
    explain: "If you do not need to customize the build step, publishing when you push to a specific branch is recommended.",
  },
  "ch707-limits": {
    prompt: "Which of the following should you NOT use GitHub Pages for?",
    choices: [
      "A practice to-do board",
      "A practice page sharing this month's meeting schedule and location for your club",
      "A list of book reviews",
      "A page that sends or receives passwords or credit card numbers",
    ],
    explain: "Pages must not be used for sensitive transactions like sending passwords or card numbers, or for running a business or online store.",
  },
  "ch707-undo": {
    prompt: "Why can't you undo a deployment using Claude Code's rewind (checkpoint) feature?",
    choices: [
      "Checkpoints are a paid-only feature, so they do not work on sites deployed for free",
      "Checkpoints do not cover actions that affect outside systems, like deploying",
      "Deployments are not saved in Git history",
      "Rewind can only be used once a week",
    ],
    explain: "Actions that affect the outside world, like deploying, should be checked and triggered by a human.",
  },
  "ch708-issue": {
    prompt: "What happens if you write fixes #1 in a PR description?",
    choices: [
      "The repository name changes to 1",
      "Issue #1 is deleted on the spot, and all its comments and history disappear with it",
      "Commit #1 is undone",
      "Issue #1 closes automatically when the PR is merged",
    ],
    explain: "Using special keywords like fixes in a PR automatically closes the linked issue when you merge the PR.",
  },
  "ch708-labels": {
    prompt: "Which default GitHub label fits an issue requesting a new feature?",
    choices: [
      "bug",
      "enhancement",
      "documentation",
      "delete",
    ],
    explain: "enhancement means a new feature request, bug means an unexpected problem, and documentation means improving docs.",
  },
  "ch708-cycle": {
    prompt: "When running the next loop for a new issue, what must you check during the verification step?",
    choices: [
      "Only the new criteria need to pass",
      "If old tests fail, delete them so only the tests for the new feature remain and pass",
      "Skip testing and deploy right away",
      "Make sure all existing tests still pass along with the new criteria",
    ],
    explain: "To be sure the new feature did not break old ones, all your existing tests must pass too.",
  },
  "ch709-secret": {
    prompt: "You committed a secret value, then deleted that file in the next commit. What happens?",
    choices: [
      "Deleting the file completely erased the secret, so there is no way for anyone to see it anymore",
      "It stays in the Git history, so people can still see it",
      "GitHub automatically changes the secret value for you",
      "The repository automatically turns private",
    ],
    explain: "A committed secret becomes part of the Git history, so it remains there even if you delete it from the latest file.",
  },
  "ch709-layers": {
    prompt: "According to official docs, what is the very first step if a secret leaks into a public repository?",
    choices: [
      "Revoke and replace the secret where it was issued",
      "Rewrite the Git history to erase the commit with the secret, then keep using that same secret afterward",
      "Rename the repository",
      "Wait and hope nobody saw it",
    ],
    explain: "First, revoke and replace any leaked secret. Rewriting history requires coordinating with collaborators and has side effects.",
  },
  "ch709-public": {
    prompt: "Why shouldn't you upload your raw notes from the Step 3 organizer tool directly to a public repository?",
    choices: [
      "Because the notes might contain personal info like real names and contacts",
      "Because the note file is much too large and exceeds GitHub's file upload size limit",
      "Because notes cannot be opened on GitHub",
      "Because uploading notes turns off Pages",
    ],
    explain: "Anyone can view a public repository. Do not upload notes with personal info, and always check before making a repository public.",
  },
  "ch709-license": {
    prompt: "What happens if you do not choose a license for your repository?",
    choices: [
      "Default copyright applies, so others cannot copy, distribute, or modify your work",
      "Anyone on the internet can freely copy, distribute, and modify your work without asking permission",
      "You cannot make the repository public",
      "You cannot use GitHub Pages",
    ],
    explain: "Without a license, default copyright laws apply. If you want others to be able to use your work, pick a license.",
  },
  "ch709-deps": {
    prompt: "What does this guide recommend when Claude asks to install a new part (package)?",
    choices: [
      "Approve it right away without asking",
      "Ban installing any packages forever, and make it build every needed feature from scratch",
      "Ask what it is installing and why before approving",
      "Change the package name before installing it",
    ],
    explain: "Packages made by others can quietly bring in security flaws. Ask what is being installed and why before you approve.",
  },
  "ch710-loop": {
    prompt: "What is the right order for one full loop of the to-do board?",
    choices: [
      "Deploy → Plan → Build → Review: publish the project first, see how people react to it, and fill in the missing pieces later",
      "Repository → SPEC.md → Plan & build on a branch → Verify → PR & review → Safety check → Deploy → Issue",
      "Build → Deploy → Repository → Plan",
      "Review → Deploy → Build → Plan",
    ],
    explain: "The order from Ch. 2 to Ch. 9 forms one full loop. Always do the pre-publish safety check before deploying.",
  },
  "ch710-own": {
    prompt: "You built a shop info page from your own problem and want to use it for real business. What should you check first?",
    choices: [
      "Spelling in your commit messages",
      "Whether the font size and colors look good on a phone, and whether the shop logo is sharp",
      "The length of the repository name",
      "GitHub Pages restrictions (running a business, online store, or commercial service)",
    ],
    explain: "Pages cannot be used to run a business, online store, or commercial service. Practice and real business are different, so check the restrictions first.",
  },
}

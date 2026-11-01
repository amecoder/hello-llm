# Chapter 2. Creating a GitHub Repository — Building a Home for Your Project

> **One-line summary**: A repository is where you keep your project files and **their entire change history**. Creating a repository on GitHub gives you a safe backup outside your computer and a space to collaborate.
> Your choice between public and private connects directly to **whether you can publish your site to the web for free later**, so decide from the start.

This chapter is based on the official GitHub documentation checked on November 1, 2026. The GitHub interface is described using the English labels. If you tried saving a "change history" with Git in Stage 3, think of this step as putting that history online.

## Git, GitHub, and Repositories

**Git** is a version control system that tracks changes to files.[^git] In Stage 3, when you asked Claude to "save a record," that commit was a Git record.

**GitHub** is a service that puts your Git projects online and adds planning and collaboration tools.[^git] A **repository** is the place on GitHub where you keep your project's code and files. It stores your files, records every change as a commit, and gives you a shared space to work together.[^repo]

Here are some common terms to know ahead of time.

| Term | Meaning |
|---|---|
| Branch | A separate line of work that does not affect the main version |
| Merge | Combining changes from one branch into another |
| Remote | A repository stored on GitHub, not on your computer |
| Clone | Downloading a repository—including its full history—to your computer |

Source: GitHub official docs (excerpted)[^terms]

<Quiz id="ch702-basics" />

## Public vs. Private

The very first thing you decide when creating a repository is its **visibility**.

| Visibility | Who can see it |
|---|---|
| Public | Anyone on the internet |
| Private | Only you and the people you share it with |

Source: GitHub official docs[^visibility]

On a free account, this choice connects directly to deployment in Chapter 7. **Free accounts can only use GitHub Pages (free web publishing) with public repositories.**[^pages-free] That is why GitHub's own beginner tutorial tells you to choose **Public** so you can publish your project as a live site later.[^tutorial-public]

Public repositories come with a trade-off. Because your entire codebase is visible to everyone, there is a higher risk that someone might look for weaknesses or sensitive information.[^public-risk] So **never put personal information, passwords, or notes containing real names into a public repository.** We will cover this in detail in Chapter 9.

You can change the visibility later, but there is a catch. On a free account, if you switch a public repository to private, any published Pages site is automatically taken down.[^switch]

<Quiz id="ch702-visibility" />

## README, .gitignore, and License

When you create a new repository, you can include three starter files right away.[^options]

- **README**: The first guide visitors see when they open your repository.[^readme] It explains what the project does, why it is useful, and how to get started. The tutorial recommends selecting **Add README** because it gives you a starting file and a place to describe your project.[^add-readme]
- **.gitignore**: A list that tells Git which **files to ignore** when you make a commit.[^gitignore] You list things that should never be uploaded, like configuration files containing passwords. Keep one important rule in mind: **if a file has already been committed, simply adding it to this list will not make Git ignore it.**[^already] That is why it is best to set it up from the very beginning.
- **License**: Tells other people what they can and cannot do with your code. You do not have to pick one, but without a license, default copyright laws apply—meaning nobody can copy, distribute, or modify your work.[^license] If you are unsure which to pick, GitHub recommends choosealicense.com. GitHub also notes that this guidance is not legal advice.[^not-lawyer]

If you are importing an existing repository that already has a Git history, do not select any of these three options. Doing so can clash with your folder and cause a merge conflict.[^conflict]

<Quiz id="ch702-files" />

## Connecting to Your Computer

Bringing a repository from GitHub onto your computer is called **cloning** (clone). The cloned copy **stays connected** to the original on GitHub, so you can upload the changes you record right back to it.[^clone]

There are a few ways to do this.

| Method | Best when |
|---|---|
| GitHub Desktop | You want a visual screen, just like in the official beginner tutorial |
| Ask Claude Code | You want to ask in plain words, just like in Stage 3 |

Source: Summary from this guide (GitHub Desktop is the method used in the official tutorial)[^clone]

You can ask Claude Code like this. For the repository URL, use the address shown in your browser's address bar when you open the repository on GitHub (for example, `https://github.com/your-username/cafe-todo-board`).

```
Clone this GitHub repository into the ~/hello-ai-practice/todo-board folder: <repository URL>
```

**You can also upload an existing folder.** A folder already on your computer—like the organizer tool from Stage 3—can also be uploaded to GitHub, and if it was not managed by Git yet, you first turn it into a Git repository.[^existing] However, in this guide, we will create the **to-do board as a brand-new repository**. The organizer tool contains your original notes, so it is safer to avoid uploading it directly to a public repository.

<Quiz id="ch702-clone" />

## Try It Yourself

1. Sign up or log in at [github.com](https://github.com) (a free account is fine).
2. Click **+** in the top right → **New repository** to create a new repository. Name it `cafe-todo-board`, set visibility to **Public**, and select **Add README**. Add a `.gitignore` as well if you like (follow the on-screen prompts to choose a template).
3. On the repository page, check that your README is visible.
4. Use GitHub Desktop or Claude Code to clone the repository into `~/hello-ai-practice/todo-board`. To upload (push) your changes to GitHub later, the tool you use must be logged in to your GitHub account. If a login window pops up the first time you upload, follow the prompts.
5. Open the cloned folder in the Claude Code app and verify that `README.md` is inside.

**Up next**: In Chapter 3, you will let Claude interview you about what to build in this repository and organize the plan into `SPEC.md`.

## Summary

- Git is the tool that records changes, GitHub is the place to keep those records online and collaborate, and a repository is your project's home.
- Free accounts can only use GitHub Pages with public repositories. Never put personal information in a public repository.
- A README is the guide, `.gitignore` is the list of files not to upload, and a license grants permission to use your code. Set up `.gitignore` right from the start.
- A cloned copy stays connected to GitHub.

## Glossary

| Term | One-line meaning |
|---|---|
| Git | A version control system that tracks changes to files |
| GitHub | A service for hosting Git repositories online and collaborating |
| README | The introductory guide for a repository |
| .gitignore | A list of files that Git should ignore |
| Clone | Downloading a repository and its full history to your computer |

<ChapterDone :chapter="702" />

Next chapter: [Chapter 3. Planning and Specification](03-plan-spec.md)

[^git]: GitHub official docs, "What is GitHub?". "Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github (checked on 2026-11-01)
[^repo]: GitHub official docs, "Creating a repository for your project on GitHub". "It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (checked on 2026-11-01)
[^terms]: GitHub official docs, "About repositories". "Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (checked on 2026-11-01)
[^visibility]: GitHub official docs, "About repositories". "Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (checked on 2026-11-01)
[^pages-free]: GitHub official docs, "What is GitHub Pages?". "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (checked on 2026-11-01)
[^tutorial-public]: GitHub official docs, "Creating a repository for your project on GitHub". "Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (checked on 2026-11-01)
[^public-risk]: GitHub official docs, "About repositories". "Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (checked on 2026-11-01)
[^switch]: GitHub official docs, "Setting repository visibility". "Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility (checked on 2026-11-01)
[^options]: GitHub official docs, "Creating a new repository". "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (checked on 2026-11-01)
[^readme]: GitHub official docs, "About the repository README file". "A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (checked on 2026-11-01)
[^add-readme]: GitHub official docs, "Creating a repository for your project on GitHub". "Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (checked on 2026-11-01)
[^gitignore]: GitHub official docs, "Ignoring files". "You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files (checked on 2026-11-01)
[^already]: GitHub official docs, "Ignoring files". "If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files (checked on 2026-11-01)
[^license]: GitHub official docs, "Licensing a repository". "A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (checked on 2026-11-01)
[^not-lawyer]: GitHub official docs, "Licensing a repository". "We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (checked on 2026-11-01)
[^conflict]: GitHub official docs, "Creating a new repository". "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (checked on 2026-11-01)
[^clone]: GitHub official docs, "Connecting to your code locally". "Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally (checked on 2026-11-01)
[^existing]: GitHub official docs, "Adding locally hosted code to GitHub". "If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (checked on 2026-11-01)

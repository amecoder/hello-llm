# Chapter 7. Deployment — Publishing with GitHub Pages

> **In One Line**: **GitHub Pages** is a free service that puts the web files in your repository directly online as a website. With a free account, the repository must be **public**.
> Because deployment affects the outside world, **you cannot undo it with Claude Code's rewind.** A human must check whether it is safe to publish and click the button.

This chapter is based on the official GitHub and Claude Code docs checked on November 1, 2026. The GitHub UI is described using English labels.

## What Is GitHub Pages?

GitHub Pages is a static site hosting service that takes the HTML, CSS, and JavaScript files in your repository, runs them through a build if needed, and **publishes them as a website**.[^pages] A static site shows fixed files directly, without a server that changes the content for each visitor. It fits pages that display a table, like a to-do board.

As we saw in Chapter 2, **free accounts can only use Pages in public repositories.**[^free] Also, a Pages site is **publicly available on the internet.** Even if your plan lets you make the repository private, the site itself is still public, so you must delete sensitive data before publishing.[^public-site]

<Quiz id="ch707-pages" />

## Two Ways to Publish

| Method | When to use |
|---|---|
| Publish from a branch | When you do not need to customize the build process (recommended) |
| Publish with GitHub Actions | When you want to define the build process yourself |

Source: GitHub official docs (excerpted)[^two-ways]

For a page that simply shows your files as they are, like our to-do board, **publishing from a branch** is enough. The official docs also recommend this method when you do not need to tweak the build process.[^two-ways] Once you pick a branch and a folder (the repository root `/` or `/docs`), the contents of that folder are published every time you push to that branch.[^branch-source]

GitHub's introductory tutorial uses the Actions method. In your settings under Pages, if you change **Source** to **GitHub Actions** and add a deployment workflow file, your site will redeploy automatically whenever you push to `main`.[^actions-deploy] The address looks like `https://your-username.github.io/repository-name/`.

<Quiz id="ch707-ways" />

## Limits and Prohibited Uses

Although it is free, there are places where you cannot use it and limits to keep in mind.

| Category | Details |
|---|---|
| Prohibited | Running an online business, online store, or commercial service (SaaS) |
| Do not use for | Pages that send passwords or credit card numbers |
| Size | Published site must be 1 GB or smaller |
| Time | Deployment fails if it takes longer than 10 minutes |
| Bandwidth | 100 GB per month (soft limit) |

Source: GitHub official docs (excerpted)[^business][^sensitive][^size][^timeout][^bandwidth]

**Visitor IP addresses are logged.** When someone visits a Pages site, the visitor's IP address is logged and stored for security purposes, whether or not they are signed in.[^ip] If you want to write "We collect nothing" on your page, be sure to mention this as well.

**Practice sites that imitate real services** come with conditions. Copying an existing site as a learning exercise is not prohibited in itself, but you must write the code yourself, collect no user data, and include a **prominent disclaimer** stating that the site is not associated with the original and was created only for educational purposes.[^clone-site]

<Quiz id="ch707-limits" />

## Deployment Cannot Be Undone with Rewind

Claude Code's rewind (checkpointing), which you learned about in Part 3, is for **quick recovery within a session**. Git handles permanent history.[^checkpoint] And actions that affect outside systems—like databases, external services, or **deployments**—cannot be undone by a checkpoint.[^remote]

That is why a human checks right before deploying. The official docs also state that **you are responsible for reviewing** whether proposed commands are safe before approving them.[^responsible]

Ask yourself these questions before deploying:

- Did the checks from Chapter 5 pass?
- Did you finish the review from Chapter 6 and merge the PR?
- Are your public repository and page free of real names, contact info, and passwords? (Chapter 9)

If you uploaded something sensitive, simply undoing the change is not enough. It stays in the Git history of your public repository. Follow the steps in [Chapter 9](09-safety.md) (revoke and replace first).

<Quiz id="ch707-undo" />

## Try It Yourself

1. First, check for secrets and personal information using the [pre-publish checklist in Chapter 9](09-safety.md).
2. On GitHub, open **Settings → Pages** in your `cafe-todo-board` repository.
3. Under "Build and deployment", select **Deploy from a branch** for **Source**, and choose the `main` branch and the `/` (root) folder under **Branch**.[^quickstart]
4. Check that `index.html` is at the top level of your repository. GitHub Pages looks for this file at the root of your publishing folder.[^entry] Then open `https://your-username.github.io/cafe-todo-board/`. It can take up to 10 minutes for changes to appear after you push.[^quickstart] If you see the to-do board, you succeeded.
5. Open it on your phone as well.
6. Think about adding a note at the bottom of the page, such as: "This page was made for practice and collects no visitor information (GitHub Pages logs visitor IPs for security purposes)."

**Up next**: In Chapter 8, you will log an improvement like "Make overdue tasks red" as an issue, and go around the loop one more time.

## Summary

- GitHub Pages publishes the web files in your repository as a website. Free accounts can only use it on public repositories, and the site is always public.
- If you do not need to customize the build, publish from a branch.
- Do not use it for businesses, online stores, or password entry. Limits: 1 GB site size, 10-minute deployment timeout, 100 GB monthly bandwidth (soft limit). Visitor IPs are logged.
- Deployment cannot be undone with rewind. A human clicks the button only after finishing verification, review, and the public safety check.

## Glossary

| Term | One-line meaning |
|---|---|
| GitHub Pages | A service that publishes repository files as a free website |
| Static site | A site that displays fixed files directly |
| Hosting | Putting a website online and keeping it available |
| Bandwidth | The amount of data sent to visitors |

<ChapterDone :chapter="707" />

Next chapter: [Chapter 8. Operations and Improvement](08-operate.md)

[^pages]: GitHub official docs, "What is GitHub Pages?". "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (checked on 2026-11-01)
[^free]: GitHub official docs, "What is GitHub Pages?". "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (checked on 2026-11-01)
[^public-site]: GitHub official docs, "Configuring a publishing source for your GitHub Pages site". "GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (checked on 2026-11-01)
[^two-ways]: GitHub official docs, "Configuring a publishing source for your GitHub Pages site". "You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (checked on 2026-11-01)
[^branch-source]: GitHub official docs, "Configuring a publishing source for your GitHub Pages site". "Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (checked on 2026-11-01)
[^actions-deploy]: GitHub official docs, "Deploying your website automatically". "Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically (checked on 2026-11-01)
[^business]: GitHub official docs, "GitHub Pages limits". "GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^sensitive]: GitHub official docs, "GitHub Pages limits". "GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^size]: GitHub official docs, "GitHub Pages limits". "Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^timeout]: GitHub official docs, "GitHub Pages limits". "GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^bandwidth]: GitHub official docs, "GitHub Pages limits". "GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^ip]: GitHub official docs, "What is GitHub Pages?". "When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (checked on 2026-11-01)
[^clone-site]: GitHub official docs, "GitHub Pages limits". "Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (checked on 2026-11-01)
[^checkpoint]: Claude Code official docs, "Checkpointing". "Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing (checked on 2026-11-01)
[^remote]: Claude Code official docs, "How Claude Code works". "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-01)
[^responsible]: Claude Code official docs, "Security". "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (checked on 2026-11-01)
[^quickstart]: GitHub official docs, "Quickstart for GitHub Pages". "Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart (checked on 2026-11-01)
[^entry]: GitHub official docs, "Creating a GitHub Pages site". "GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (checked on 2026-11-01)

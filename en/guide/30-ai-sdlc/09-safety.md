# Chapter 9. Safety and Responsibility — Secrets, Publishing, and Licenses

> **In One Line**: **Never upload secrets** like passwords or API keys to a repository. Once you commit a secret, it stays in the Git history even after you delete the file.
> If a secret leaks, your very first step is to **change that secret (revoke and rotate it)**—not to erase the history.

This chapter is based on the official GitHub and Claude Code docs and the Anthropic Consumer Terms of Service, checked on November 1, 2026. For safety rules that apply to any AI, see [Stage 1, Chapter 9](../00-common/09-safety.md). This chapter covers the new risks that come with **public repositories and deployment**. This is not legal advice. Please check with a professional for important decisions.

## Never Upload Secrets

A **secret** is a credential that gives access to sensitive systems and data. Examples include API keys and tokens for external services, or database passwords.[^secret] GitHub tells you to **never** upload sensitive information like passwords or API keys to a repository.[^never]

Why is the warning so strong? A committed secret becomes **part of your Git history**. Even if you delete it from the latest file, it stays in the history.[^history] What is more, secrets in public repositories get picked up by search engines and specialized scanning services.[^indexed]

Here are common ways secrets leak:[^paths]

- Accidentally committing a value you put in while testing
- Configuration files like `.env`
- Writing a real key in an example inside documentation or a README

<Quiz id="ch709-secret" />

## Three Layers of Protection

| Step | What to do | Basis |
|---|---|---|
| 1. Keep it out | List it in `.gitignore` and block Claude from reading it | Chapter 2, this section |
| 2. Get blocked | GitHub push protection blocks it before upload | This section |
| 3. Replace it | Revoke and rotate immediately if it leaks | This section |

Source: Summary by this guide (see footnotes for basis)

**1. Keep it out.** Put any file containing secrets into `.gitignore` from the very start (Chapter 2). The order matters: if you already committed a file, simply adding it to the list will not make Git ignore it. To stop Claude Code's file tools from reading a file like `.env`, add a `Read` deny rule (for example, `Read(./.env)`).[^deny] However, this rule does not block commands that read files without naming them, or other programs that open files on their own.[^deny-limit] So the safest approach is to keep secret files outside your repository folder altogether. We covered where to put permission rules in [Claude Code, Chapter 4](../20-claude-code/04-permissions-undo.md). If an automated workflow needs a secret, store it in GitHub Secrets rather than in a repository file.[^actions-secret][^gh-secrets]

**2. Get blocked.** GitHub's **push protection** blocks pushes containing secrets **before** they reach your repository.[^push] On your account, protection that stops you from pushing secrets to public repositories is turned on by default.[^push] Still, treat this as a last safety net. It is not guaranteed to catch every kind of secret, so always follow Step 1 first.

**3. Replace it.** If you get an alert that a secret has leaked, **rotate that credential immediately**.[^rotate] Rewriting Git history requires coordination with anyone sharing the repository and has side effects. The official docs also say that if the data you need to remove is a secret, **your first step is to revoke and rotate it**.[^revoke-first]

<Quiz id="ch709-layers" />

## What Comes with Going Public

Anyone can view a public repository and a Pages site (Chapters 2 and 7). Check these items before you make your work public:

- **Personal information**: Do not include notes with real names, contact details, or addresses. That is why you do not upload your Stage 3 organizer notes as-is.
- **Visitor information**: Pages logs visitor IP addresses for security purposes (Chapter 7).
- **Responsibility for approval**: You are responsible for reviewing proposed code and commands for safety before you approve them.[^responsible]

<Quiz id="ch709-public" />

## Licenses and AI-Generated Work

If you do not choose a **license**, default copyright laws apply. That means other people cannot copy, distribute, or modify your code (Chapter 2). If you want to let others use your work, pick a license.

As for **rights to AI-generated code**, this guide did not find an official legal answer. What we did verify is this clause in the Anthropic Consumer Terms of Service, which applies to personal Claude accounts (Codex and Antigravity follow their own companies' terms). Provided you follow the terms, Anthropic assigns to you all of its rights—**"if any"**—in the Outputs.[^outputs] This does not answer whether AI-generated code gets copyright protection in the first place. If you are using it for something important, check with a professional.

Also check **whether your data is used for training**. The Claude Code docs state that on Free, Pro, Max, and Ultra accounts, when the relevant setting is turned on, Anthropic trains new models using data that includes your Claude Code usage.[^training] We covered where to check this setting in [Stage 2, Claude Chapter 9](../10-claude/09-privacy.md).

<Quiz id="ch709-license" />

## Watch the Parts Made by Others

Software often relies on parts (packages) brought in from many places, and security flaws can slip in through those parts without you knowing.[^deps] GitHub's **Dependabot** warns you if a part you use has a known vulnerability.

If your page barely uses outside parts—like our to-do board—you have less to worry about. Still, if Claude asks to install a new part, **ask what it is installing and why** before you approve it (the same question you ask when checking a plan in Chapter 4).

<Quiz id="ch709-deps" />

## Try It Yourself — Pre-Publish Checklist

1. Check if your to-do board folder has a `.gitignore` file and whether it lists files that might hold secrets (such as `.env`). If not, ask Claude to create one for you.
2. Ask Claude: "Check if there are any strings in this repository that look like passwords, API keys, or tokens. If you find any, just tell me the file and line number—don't show me the value."
3. Skim through `README`, `SPEC.md`, and your data yourself to make sure there are no real names or contact details.
4. Think about whether to choose a license. Remember that if you do not choose one, others cannot use your code.
5. If you did upload a secret: first revoke and replace that value where it was issued, and clean up the repository after that.

**Up next**: In Chapter 10, you will do a hands-on project that puts Chapters 1 through 9 together from start to finish.

## Summary

- Never upload secrets. Once committed, they stay in the Git history even if deleted, and public repositories get scanned.
- Three layers: keep secrets out with `.gitignore` (a `Read` deny rule only blocks Claude's file tools), let push protection block them, and rotate them first if they leak.
- Do not put personal information in public repositories or Pages. You are responsible for reviewing code and commands before approving them.
- Without a license, others cannot use your code. We found no official answer on copyright for AI outputs.
- Before approving a new package installation, ask what it is and why it is needed.

## Glossary

| Term | One-line meaning |
|---|---|
| Secret | A credential like a password or API key |
| Push protection | A GitHub feature that blocks pushes containing secrets in advance |
| Rotate | Replacing a leaked secret with a new value |
| Dependency | An outside software part that your software relies on |

<ChapterDone :chapter="709" />

Next chapter: [Chapter 10. Hands-On Project](10-practice.md)

[^secret]: GitHub official docs, "Secret leakage risks". "Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (checked on 2026-11-01)
[^never]: GitHub official docs, "Adding locally hosted code to GitHub". "Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (checked on 2026-11-01)
[^history]: GitHub official docs, "Secret leakage risks". "These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (checked on 2026-11-01)
[^indexed]: GitHub official docs, "Secret leakage risks". "Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (checked on 2026-11-01)
[^paths]: GitHub official docs, "Secret leakage risks". "Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (checked on 2026-11-01)
[^deny]: Claude Code official docs, "Configure permissions". "To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions (checked on 2026-11-01)
[^actions-secret]: Claude Code official docs, "Claude Code GitHub Actions". "Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions (checked on 2026-11-01)
[^push]: GitHub official docs, "Push protection". "Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection (checked on 2026-11-01)
[^rotate]: GitHub official docs, "Secret scanning". "When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning (checked on 2026-11-01)
[^revoke-first]: GitHub official docs, "Removing sensitive data from a repository". "It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository (checked on 2026-11-01)
[^responsible]: Claude Code official docs, "Security". "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (checked on 2026-11-01)
[^outputs]: Anthropic Consumer Terms of Service. "Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms (checked on 2026-11-01)
[^training]: Claude Code official docs, "Data usage". "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage (checked on 2026-11-01)
[^deps]: GitHub official docs, "Dependabot alerts". "Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts (checked on 2026-11-01)
[^gh-secrets]: GitHub official docs, "Secrets". "GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets (checked on 2026-11-01)
[^deny-limit]: Claude Code official docs, "Configure permissions". "They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions (checked on 2026-11-01)

# Chapter 7. Projects, Plugins, and Work — Grouping Your Regular Tasks

> **One-line summary**: Group conversations, files, and instructions for the same job into a **Project**, and use
> **Plugins** to connect other services or add a set workflow. Switch to **Work** at the top when you want to hand off a long task and get a finished result.

The screens shown are based on the web version (Plus plan) as of October 2026. Menu locations may look slightly different on the Free plan or mobile app.

![First screen after logging in. Look at Plugins (플러그인) and the Projects (프로젝트) section ("Company Weekly Report", "English Study") in the side menu, and the Chat / Work switch button at the top center of the screen](../../../guide/11-chatgpt/assets/shot-01-home-projects.png)

Chat titles and account names in this screen have been replaced with examples. This chapter covers ① Plugins (플러그인) in the side menu, ② the Projects (프로젝트) section, and ③ the Chat / Work switch at the top.

## Projects — Conversations, Files, and Instructions in One Folder

A **Project** is a folder that keeps conversations, reference files, and instructions for a single topic in one place.
For example, put your report template file and an instruction like "Use a three-column table" into a "Company Weekly Report" project. Then every conversation you open inside it starts off knowing that file and instruction. You do not have to repeat the same explanation in every chat.

### How to Create and Fill One

1. Hover your mouse over the Projects (프로젝트) section title in the side menu, click the **+ button (Add new project (새 프로젝트 추가))** that appears, and name it in the Create project (프로젝트 만들기) window.[^projects]
2. In the top-right of the project screen, click ••• (Project actions (프로젝트 액션)) → Project settings (프로젝트 설정) to write **instructions** that apply only inside this project. Upload reference files using Files (파일).
3. Move existing chats in with Move to project (프로젝트로 이동), and take them out with Remove from project (프로젝트에서 제거).[^projects]

![The Create project (프로젝트 만들기) window. The Project name (프로젝트 이름) field (example text "Copenhagen Trip"), a description that projects keep chats, files, and custom instructions in one place, Default memory (기본 메모리) at the bottom left, and the Create project (프로젝트 만들기) button at the bottom right](../../../guide/11-chatgpt/assets/shot-16-new-project-marked.png)

In the Create project (프로젝트 만들기) window: ① type a project name, ② change Default memory (기본 메모리) if needed, and ③ click Create project (프로젝트 만들기).

Once created, the project screen opens. Below ② the input box ("New chat in Example Project (예시 프로젝트의 새 채팅)"), there are ③ Files (파일) and Plugins (플러그인) buttons, and below those, ④ the Chats (채팅) and Sources (소스) tabs gather this project's conversations and materials. Open instructions from ① ••• in the top right.

![Screen of the newly created "Example Project (예시 프로젝트)". To the right of the title are the Share (공유) and ••• buttons, below the input box are Files (파일) and Plugins (플러그인), and below those are the Chats (채팅) and Sources (소스) tabs with a "No chats yet (아직 채팅이 없습니다)" message](../../../guide/11-chatgpt/assets/shot-17-project-home-marked.png)

In the ••• → Project settings (프로젝트 설정) window, you set ① Instructions (지침), ② Memory (메모리), and ③ Library access (라이브러리 액세스), or delete the project with ④ Delete project (프로젝트 삭제).

![The ••• → Project settings (프로젝트 설정) window. Project name (프로젝트 이름), Instructions (지침) input box, Memory — Default (메모리 — 기본: this project and outside chats can access each other's memory), Library access — Enabled (라이브러리 액세스 — 활성화됨), and the red Delete project (프로젝트 삭제) button](../../../guide/11-chatgpt/assets/shot-18-project-settings-marked.png)

*Chat titles and account names in this screen have been replaced with examples, and the model name spot has been erased. "Example Project" was deleted after taking the screenshot.*

> **If you delete a project**, a confirmation window says that this project and all chats inside it will be permanently deleted from Chat and Work ("이 프로젝트와 프로젝트에 포함된 모든 채팅이 Chat과 Work에서 영구적으로 삭제됩니다"). Files saved in your Library are not deleted. Move any chats you want to keep somewhere else before deleting (verified on the web screen on 2026-10-23).

### Project Instructions Come First

Custom instructions from [Chapter 5](05-memory.md) apply to all conversations. **Project instructions apply only inside that project**, and they take **priority** over custom instructions.[^projects]
For example, you can set ChatGPT to usually reply in Korean, and set "Reply only in English" inside your "English Study" project.

### Limits by Plan

You can create an unlimited number of projects. The number of files you can put in a project depends on your plan, and you can upload up to 10 files at a time.[^projects]

| Plan | Files per project | People you can share with |
|---|---|---|
| Free | 5 | 5 |
| Go · Plus | 25 | 10 |
| Pro | 40 | 100 |

Business, Enterprise, and Edu also allow 40 files per project.[^projects]
When you **share** a project with others, its memory automatically switches to Project-only memory (프로젝트 전용 메모리). Once changed, you cannot switch it back to Default memory (기본 메모리).[^projects]
Also, PDFs placed in a project may be read with images and charts left out. If images in a PDF are important, attach the file directly to the chat ([Chapter 4](04-files-images.md)).[^files]

<Quiz id="ch107-projects" />

## Putting Reusable Templates into a Project

In [Part 1, Chapter 8](../00-common/08-meta-prompting.md), you learned how to turn a good prompt into a reusable **template** where you only swap out the blanks.
A project is a great place to keep that template. Try putting the template into your project instructions. You will not have to paste the template into every chat.

```
In chats inside this project, turn the work notes I send into a weekly report.
- Format it as a three-column table: "Done / In Progress / Next Week's Plan"
- Write one line per item
- Do not make up anything not in the notes; mark it as [Needs check]
```

Once you set this up, all you need to paste into a new chat inside the project is this week's notes.

<Quiz id="ch107-template" />

## Plugins — Adding Other Services and Workflows

A **Plugin** is a bundle that adds features to ChatGPT. Plugins are made up of **skills** (written instructions for a set workflow), connected apps, app templates, and extensions.[^plugins]
On 2026-07-09, the old App Directory (앱 디렉터리) changed into the **Plugin Directory**. Apps you connected earlier stay as they are.[^rn]

- Open the Plugin Directory from Plugins (플러그인) in the side menu to look around. Every plan can view the directory.[^plugins]
- When you find a plugin you like, click Install plugin (플러그인 설치). If it needs an account from another service, click Connect (연결).[^plugins]

![Screen with Plugins (플러그인) opened from the side menu. At the top are the Plugins (플러그인) and Skills (스킬) tabs and an Add (추가) button on the right, in the center is the Search plugins (플러그인 검색) box, Public (공개) and Personal (개인용) filters, and lists for Popular (인기) and New and noteworthy plugins (새롭고 주목할 만한 플러그인), where each item connects via a + button](../../../guide/11-chatgpt/assets/shot-11-plugins-marked.png)

*Chat titles and account names in this screen have been replaced with examples.* ① Click Plugins (플러그인) in the side menu to see ② the Plugins (플러그인) and Skills (스킬) tabs, ③ the Add (추가) button, ④ the Search plugins (플러그인 검색) box, ⑤ Public (공개) and Personal (개인용) filters, and ⑥ the Popular (인기) list. Connect items using ⑦ the + button on the right.

There are four ways to use a plugin.[^plugins]

| Method | Example |
|---|---|
| Just ask a question | ChatGPT uses the plugin on its own if it is relevant |
| Type the name after `@` | `@PDF Pull only the dates from this contract` |
| Type the name from the + button | Pick from the plugin list at the bottom of the + menu |
| Click Plugins in the input box | Pick from your installed plugins |

When you connect another service (like email or cloud storage), ChatGPT can read what is inside it. Before connecting, check what information is shared ([Chapter 8](08-privacy.md)).

On the Free and Go plans, you can still view the directory (the plugin list screen) and recommendations. However, you cannot use plugin **extensions** (extra actions built into a plugin).[^troubleshoot]

<Quiz id="ch107-plugins" />

## Setting Permissions for Connected Apps

When you connect an app like Gmail or Google Drive, ChatGPT can **just read** what is inside. Or it can also **make changes**, like sending emails or editing files. You choose how much it can do without asking in Settings → Plugins (플러그인) under Default permissions (기본 권한).[^permissions][^screen-plugin]

You will see these choices on the screen:

- Always ask (항상 묻기): Asks you first before reading and before making changes.
- Allow read actions (읽기 전용 도구 허용): Reads without asking, and asks before making changes.
- Allow low-risk actions (위험도가 낮은 도구 허용): Handles low-risk actions on its own, while sensitive actions may be blocked. On a personal account, this is usually the default if you have not changed your settings. If your company has a policy, that policy comes first.[^health]

The help docs also mention "Allow all actions" (모두 허용), which does everything without asking. The help docs themselves note that this option **"carries elevated risk."**[^permissions] On October 24, 2026, only the three choices above appeared on this guide's screen. We recommend starting with Always ask (항상 묻기) or Allow read actions (읽기 전용 도구 허용), and widening permissions once you are used to it (this guide's suggestion).

- **Read the approval card before you click.** Before making a change like sending an email or deleting a file, ChatGPT pops up a box asking if it is okay to proceed. Ask yourself before clicking: Which app is this? Which account? What is it trying to do?[^permissions]
- **Connect the account that actually has the files.** If you connect your personal Google account, files that exist only in your work account will not show up. Even after connecting, ChatGPT cannot see anything beyond what that account can already open.[^accounts]
- **If it is connected but not being used**, ask specifically with `@AppName` in a new chat. Even if an app shows as Connected (연결됨), it may not be available in your current chat or on your current device.[^troubleshoot]
- **Some things stay behind even after you disconnect.** If you pick an app in Settings → Plugins (플러그인) and disconnect it, ChatGPT simply cannot read that app going forward. Content that already came into your chats, files, or memory is not deleted ([Chapter 5](05-memory.md#how-to-delete-memories)). Your model-training switch also stays as it was.[^accounts]
- App permissions work **separately** from data settings like training permissions. So narrowing app permissions leaves your training settings unchanged ([Chapter 8](08-privacy.md#stopping-your-chats-from-being-used-for-training)).[^permissions]

<Quiz id="ch107-permissions" />

## The Difference Between Chat and Work

When **ChatGPT Work** launched on 2026-07-09, the top of the screen split into Chat / Work.[^rn][^work]

| | Chat | Work |
|---|---|---|
| What it does | Talks with you back and forth | Takes on a long, multi-step task and sees it through to the end |
| Output | Text replies | Finished products like documents, tables, slide decks, reports, and Sites (simple websites) |
| Example | "Summarize the meeting notes in three lines" | "Make a 10-slide presentation from this quarter's sales file" |

- Work on the web and mobile is available on **paid plans excluding Free and Go**. Free and Go can use it only in a limited way on the desktop app.[^rn][^pricing]
- You can **schedule** tasks in Work. You can have a task run once, on a repeating schedule, or when a certain condition happens. Manage scheduled tasks from Schedules (예약) in the side menu.[^work][^screen]
- To use Work inside a project, click the + button → Start Work in project (프로젝트에서 Work 시작).[^screen]
- **Think in Chat, build in Work.** Inside the same project, Chat and Work share the same materials. So you can ask questions and shape your outline in Chat, and when you are ready to build, switch to Work without explaining everything from scratch.[^academy-content]
- Sites launched in public beta on 2026-07-09 and is not available on Free or Go.[^rn]
- The desktop app (macOS and Windows) has a **built-in browser**. In Work and Codex chats, ChatGPT can open websites directly in this browser to get work done. If a login is needed, **enter your password only in that browser window, never in the chat box.** Treat text written on websites as untrusted content.[^browser] Even if hidden instructions on a website tell ChatGPT to hand over your information, that does not count as your permission.[^sitetools]

![Screen switched to Work at the top. Below "What would you like to work on? (어떤 작업을 할까요?)" is the input box "Start Work with ChatGPT (ChatGPT로 Work 시작)" and buttons for Select project (프로젝트 선택), Files (파일), Plugins (플러그인), and Open desktop app (데스크톱 앱 열기)](../../../guide/11-chatgpt/assets/shot-12-work-marked.png)

① When you switch the top toggle to Work, you get ② the "Start Work with ChatGPT (ChatGPT로 Work 시작)" input box, ③ buttons for Select project (프로젝트 선택), Files (파일), and Plugins (플러그인), and ④ the Open desktop app (데스크톱 앱 열기) button.

*Chat titles and account names in this screen have been replaced with examples, and the model name spot has been erased. On the actual screen, recommendation cards titled "Explore what Work can do (Work가 할 수 있는 일을 살펴보세요)" appear below this, which we cropped out because they vary by account.*

<Quiz id="ch107-work" />

## Retiring Features — Custom GPTs and Agent Mode

Two features you might see in older guides or videos have either ended or are scheduled to end.

**Custom GPTs** (your own versions of ChatGPT made by adding instructions and files) are **scheduled to retire on 2026-12-11**. After that, they move over to plugins. Approved Enterprise accounts have an extension until 2027-02-11. Even after retirement, your past chat history with GPTs will remain.[^gpts]
On personal plans (Free, Go, Plus, and Pro), **you can no longer create or publish new GPTs.** It is not an error if the create button is missing.
Also, GPTs do not use your memory, custom instructions, or past conversations. If a GPT connects to an outside service, part of what you type may be sent to that company. OpenAI does not monitor how that company handles your data. Only use GPTs made by sources you trust.[^gpt-help]

If you have a GPT you made yourself, prepare like this before it retires:

1. **Copy the instruction text** you wrote when making the GPT and save it in a notes app, and save a separate copy of any **reference files** you uploaded onto your computer.
2. Check the official migration steps in the help article "Custom GPT retirement and migration FAQ".[^gpts]
3. If it was a GPT you only used by yourself, you can get a similar setup by creating a **Project** with your saved instructions and files (this guide's suggestion).

<!-- 스크린샷 필요: 맞춤형 GPT 편집 화면에서 지침과 파일이 보이는 부분 -->

**Agent mode** (an older feature where ChatGPT handled multi-step jobs on its own) is **no longer available.** Work takes its place.[^agent]
Even if old instructions remain at the bottom of help pages, do not follow them.

Two other OpenAI services you might spot in videos or articles have also ended:

- **Sora** (the video-making app): The web and mobile apps shut down on 2026-04-26.[^sora]
- **ChatGPT Atlas** (the web browser with ChatGPT built in): Retired and no longer receives updates. Deleting the app **does not cancel your ChatGPT subscription.**[^atlas]

<Quiz id="ch107-retired" />

## Watch and Learn More

This is an official intro video made by the company. Screens and feature names may differ from the explanations in this chapter.

> The video below is in **English**. You can turn on subtitles or auto-translation in the YouTube video settings (gear icon) → Subtitles. The video plays right inside this page.

**[Get started with ChatGPT Work](https://www.youtube.com/watch?v=GphgJjaKKhw)** · OpenAI · For those who want to see the first steps of handing tasks to Work (July 2026, 6 min)

<YouTube id="GphgJjaKKhw" title="Get started with ChatGPT Work" />

## Try It Yourself

1. Create a "Weekly Report" project using New project (새 프로젝트), and paste the template from above into the project instructions.
2. Open a new chat inside the project, type five rough lines about what you did this week, and send it. Check if the table comes out following the instructions.
3. Open Plugins (플러그인) in the side menu to browse what plugins are available, pick one, and call it by typing its name after `@`.
4. If you are on a paid plan, switch the top toggle to Work and ask it to turn your report from step 2 into a one-page document.

**Continuing Exercise** ([Preparing a Book Club](../00-common/practice-kit.md)): Before uploading, open `members.csv` and check that there is no personal information like real names or phone numbers. Next, create a "Book Club" project, upload the four sample files (`memo-next-month.txt`, `minutes-last-meeting.txt`, `members.csv`, `fees.csv`), and put the one-line instruction from Chapter 5 into the project instructions. In a new chat inside the project, send only "Write a draft announcement for November" and see if details from the memo and meeting minutes are included.

## Summary

- A project is a folder that groups conversations, files, and instructions. Inside a project, project instructions take priority over custom instructions.
- Files per project are 5 on Free, 25 on Go and Plus, and 40 on Pro. Sharing a project locks its memory to Project-only memory (프로젝트 전용 메모리).
- It is handy to keep reusable templates inside project instructions.
- Find plugins under Plugins (플러그인) in the side menu, and use them by asking a question, typing `@`, clicking the + button, or clicking Plugins.
- Chat is for conversation; Work is for long tasks and finished products. Work on web and mobile is available on paid plans excluding Free and Go.
- Choose default permissions for connected apps in Settings → Plugins (플러그인). Read the app, account, and action on approval cards before clicking, and remember that content already brought in stays even after disconnecting.
- Custom GPTs retire on 2026-12-11, so back up your instructions and files beforehand. Personal plans can no longer create new GPTs. Agent mode, Sora, and Atlas have already ended.

## Glossary

| Term | One-line meaning |
|---|---|
| Project | A folder that gathers chats, files, and instructions for one topic |
| Plugin | A bundle that adds features or connects other services to ChatGPT |
| Skill | Written instructions for a set workflow; one part of a plugin |
| Plugin Directory | The list screen where you browse and install plugins |
| ChatGPT Work | A feature that takes on long, multi-step tasks and builds finished products |
| Custom GPTs | Your own ChatGPT made with instructions and files; scheduled to retire on 2026-12-11 |
| Agent Mode | An older feature that handled multi-step jobs on its own; now replaced by Work |
| Approval | A box where ChatGPT asks for your permission before changing something with an app |
| Permission | The range of actions ChatGPT is allowed to do in a connected app without asking |

<ChapterDone :chapter="107" />

Next chapter: [Chapter 8. Privacy and Data Controls](08-privacy.md)

[^projects]: OpenAI Help Center, "Projects in ChatGPT". https://help.openai.com/en/articles/10169521 (checked on 2026-10-23)
[^files]: OpenAI Help Center, "Uploading files and audio to ChatGPT". https://help.openai.com/en/articles/8555545 (checked on 2026-10-23)
[^plugins]: OpenAI Help Center, "Plugins in ChatGPT". https://help.openai.com/en/articles/20001256 (checked on 2026-10-23)
[^work]: OpenAI Help Center, "ChatGPT Work and Codex". https://help.openai.com/en/articles/20001275 (checked on 2026-10-23)
[^rn]: OpenAI Help Center, "ChatGPT release notes" 2026-07-09 entry. https://help.openai.com/en/articles/6825453 (checked on 2026-10-23)
[^pricing]: OpenAI, "Plans and Pricing". https://openai.com/chatgpt/pricing (checked on 2026-10-23)
[^gpts]: OpenAI Help Center, "Custom GPT retirement and migration FAQ". https://help.openai.com/en/articles/20001519 (checked on 2026-10-23)
[^agent]: OpenAI Help Center, "ChatGPT agent". "ChatGPT agent is no longer available. Use ChatGPT Work" https://help.openai.com/en/articles/11752874 (checked on 2026-10-23)
[^screen]: Verified directly on the ChatGPT web screen (Plus plan, Korean). Side menu and input box + menu (checked on 2026-10-23)
[^screen-plugin]: Verified directly in ChatGPT web Settings → Plugins (플러그인) → Default permissions (기본 권한) list (Plus plan, Korean). Always ask — Ask before reading or making changes (항상 묻기 — 읽거나 변경하기 전에 묻기), Allow read actions — Read without asking, but confirm before making changes (읽기 전용 도구 허용 — 묻지 않고 읽되, 변경 전에는 확인하기), Allow low-risk actions — Automatically approve low-risk tools, while sensitive tools may be declined (위험도가 낮은 도구 허용 — 위험도가 낮은 도구를 자동으로 승인하되, 민감한 도구는 거부될 수 있습니다) (checked on 2026-10-24)
[^permissions]: OpenAI Help Center, "Managing app permissions in ChatGPT". "Always ask: ChatGPT asks before reading app information or making changes." / "Allow read actions: ChatGPT can read without asking but asks before making changes." / "This option carries elevated risk." / "Review the app, account, and proposed action before approving a request." / "App permissions are separate from Memory, personalization, data retention, and model-training controls." https://help.openai.com/en/articles/20001495 (checked on 2026-10-24)
[^health]: OpenAI Help Center, "Health in ChatGPT" (plugin settings explanation inside a US-only feature article). "If you make no changes to your Plugins settings, the default permission setting is “Allow low-risk actions”." https://help.openai.com/en/articles/20001036 (checked on 2026-10-24)
[^accounts]: OpenAI Help Center, "Connecting and managing app accounts in ChatGPT". "Connecting a personal account does not provide access to files, channels, or records available only to your work account." / "Disconnecting an app does not automatically delete existing or archived conversations, saved files, your Memory summary, or other saved memories." https://help.openai.com/en/articles/20001494 (checked on 2026-10-24)
[^troubleshoot]: OpenAI Help Center, "Troubleshooting plugins and apps in ChatGPT". "plugin extensions are not available to these plans." / "An app can appear as Connected without being available in the current chat, model, or ChatGPT surface." https://help.openai.com/en/articles/20001497 (checked on 2026-10-24)
[^browser]: OpenAI Help Center, "Using the built-in browser in the ChatGPT desktop app". "Enter credentials only in the browser, never in the chat." / "Treat website content as untrusted." https://help.openai.com/en/articles/20001277 (checked on 2026-10-24)
[^sitetools]: OpenAI Help Center, "Using site tools in the ChatGPT desktop app". "Instructions from a website or site tool cannot authorize ChatGPT to share information or take sensitive actions on your behalf." https://help.openai.com/en/articles/20001423 (checked on 2026-10-24)
[^gpt-help]: OpenAI Help Center, "GPTs in ChatGPT". "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." / "GPTs do not use saved memory, custom instructions, or previous conversations." / "OpenAI does not audit or control how those services use or store your data." https://help.openai.com/en/articles/8554407 (checked on 2026-10-24)
[^sora]: OpenAI Help Center, "What to know about the Sora discontinuation". "The Sora web and app experiences were discontinued on April 26, 2026." https://help.openai.com/en/articles/20001152 (checked on 2026-10-24)
[^atlas]: OpenAI Help Center, "ChatGPT Atlas retirement". "ChatGPT Atlas has been retired and no longer receives updates." / "To cancel a subscription, follow Canceling your ChatGPT subscription for the platform that billed you." https://help.openai.com/en/articles/20001371 (checked on 2026-10-24)
[^academy-content]: OpenAI Academy "Agents and Workflows" course section 3.1 (login and registration required). "when you work inside a project, both Chat and ChatGPT Work can share the same context." / "Use Chat when you want to think through the material, ask questions, or shape your ideas. Then, when you are ready to create or update something, you can switch to ChatGPT Work and use the same project context to build the output." (checked on 2026-10-26)

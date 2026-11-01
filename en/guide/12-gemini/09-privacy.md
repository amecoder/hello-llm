# Chapter 9. Privacy and Safety — What Is Saved, Who Sees It, and How to Delete It

> **In short**: When Keep Activity (활동 기록 보관) is on, your Gemini chats stay in **your account for 18 months**, and some are **read by humans and used for AI training.**
> Use **temporary chats** for conversations you don't want saved, and never enter confidential information in the first place. You can turn off and delete your history in Settings (설정) → Activity (활동).

The screens shown are from the web version as of October 2026. This chapter applies to personal Google accounts. Work and school accounts follow different rules (see the last section).

## What Is Saved

When you sign in and use Gemini, Google collects the following information.[^hub]

- **What you say**: Questions you type or speak, and tasks you ask Gemini to do
- **What you show**: Files, photos, and videos you upload, screens you ask about, imported chats, and page content sent from your browser
- **Information from connected apps**: Connected apps like Gmail, your Search and YouTube history, and the URL of the page you were viewing in Chrome ([Chapter 7](07-skills-apps.md#connected-apps-—-use-gmail-drive-and-calendar-in-gemini))
- **Other items**: Voice chat (Live) recordings, feedback, location info, and more

**Location data is always collected.** This helps Gemini give answers that fit your question. However, the **precise location** you allow on your device is not stored in your Gemini Apps Activity (Gemini 앱 활동) history.[^hub]

Google states that **your chats are not used to show you ads**. If this changes, they say they will let you know clearly.[^hub]

<Quiz id="ch309-saved" />

## Do Humans Read It? Is It Used for AI Training?

**Some chats are read by humans.** Human reviewers (including outside contractors hired by Google) check whether Gemini's answers are inaccurate or harmful, and suggest better responses.[^hub]
Chats are disconnected from your account before going to reviewers. Still, Google gives this advice:[^hub]

> **Don't enter confidential information** that you wouldn't want a reviewer to see or want used to improve the service.

**Your chats are also used for training.** When Keep Activity is on, your activity is used for **service improvements, including training generative AI models**, and human reviewers take part in that process.[^hub]
To stop future chats from being reviewed to improve services, the Help Center recommends **turning off Keep Activity**.[^hub]

However, even if you turn off history or use temporary chats, your conversations are still used **to respond to you and protect users and Google**. Human reviewers may take part in this as well.[^hub]

| | Keep Activity On | Off or Temporary Chat |
|---|---|---|
| In your activity list | Saved | Not saved |
| Stored with your account | 18 months by default | 72 hours |
| AI training | Used | Not used |
| Human review for safety | Yes | Yes |

Source: Google Help[^hub][^activity]

**Audio, video, and screen shares from voice chats (Live) are not used to improve services by default.** They are only used when you turn that option on yourself.[^hub]

**If you send feedback (thumbs up or down)**, that feedback and the related chat are used to improve services even when history is turned off.[^hub] It is best not to leave feedback on sensitive conversations.

<Quiz id="ch309-review" />

## Turning Keep Activity On and Off

Keep Activity (활동 기록 보관) is the setting that saves your Gemini chats to your account. **If you are 18 or older, it is turned on by default.**[^activity]

### How to Turn It Off

1. Click Settings (설정) → Activity (활동) at the bottom left. Gemini Apps Activity opens in a new tab ([Chapter 2](02-screen-tour.md#the-settings-screen-—-account-preferences-and-privacy)).[^report]
2. At the top, next to Keep Activity (활동 기록 보관), click On (사용).[^report]
3. Choose **Turn off (사용 중지)** (turn off for future chats only) or **Turn off and delete activity (사용 중지 및 활동 삭제)** (turn off and erase past history too).[^activity]

### What Changes When You Turn It Off

When you turn it off, chats are no longer saved in your activity list. However, many features stop working.

| Feature | When turned off | Covered in |
|---|---|---|
| Finding, pinning, or renaming past chats | Unavailable | [Chapter 3](03-chats.md#finding-past-chats) |
| Memory (remembering past chats) | Unavailable | [Chapter 5](05-memory.md) |
| Skills and most connected apps | Unavailable | [Chapter 7](07-skills-apps.md) |
| Tasks and schedules | Unavailable | [Chapter 8](08-tasks.md) |

Source: Google Help footnotes in each chapter

Here is an easy way to choose:

- **If convenience matters most**, leave it on and use **temporary chats** ([Chapter 2](02-screen-tour.md#temporary-chat-—-conversations-that-leave-no-history)) only for sensitive conversations.
- **If you don't want your chats used for training at all**, turn it off and give up the features above.

Either way, **never entering confidential information in the first place** is the safest choice ([Stage 1, Chapter 9](../00-common/09-safety.md#what-not-to-put-in)).

<Quiz id="ch309-activity" />

## Deleting and Downloading Your History

### Deleting

You can delete your history on the Gemini Apps Activity page (`myactivity.google.com/product/gemini`).[^activity]

- Click **Delete (삭제)** above your activity and choose from **All time (전체 기간)**, **Last hour (지난 1시간)**, **Last day (지난 1일)**, or **Custom range (사용자설정 범위)**.[^activity]
- You can also use the delete button next to a date or a single item to erase just one day or one entry.[^activity]

You can also set up **auto-delete**. By default, activity is deleted after **18 months**. On the screen in this guide, it appeared as "Deleting activity older than 18 months (18개월이 지난 활동 삭제)". You can change this to 3 months, 36 months, or Don't auto-delete activity (자동 삭제 안함).[^activity][^report]

Some things remain even after you delete your history:

- **Chats already reviewed by a human are not deleted and are kept for up to 3 years.**[^hub]
- **Deleting a shared chat does not delete its public link.** Delete the link separately ([Chapter 3](03-chats.md#deleting-a-shared-link)).[^activity]
- Disconnecting a connected app does not delete your Gemini activity history.[^hub]

### Downloading

You can download your Gemini history as a file. Sign in to **Google Takeout** (`takeout.google.com`) with the account you use for Gemini, click Deselect all (모두 선택 해제), and select only the Gemini item.[^download]

- The download link sent to your email stays active **for 7 days**.[^download]
- **Downloading your history does not delete it from Google's servers.** To delete it, erase it separately as shown above.[^download]

<Quiz id="ch309-delete" />

## What Not to Do and What Not to Trust

### Usage Rules

Google has strict rules on what you must not create with Gemini. This includes child sexual abuse material, sexual images of real people, spam and scams, dangerous or illegal activities, hate speech and harassment, and misleading content meant to deceive others.[^guidelines]
Breaking these rules can lead to warnings, limits on certain features, **suspension from Gemini, or even suspension from other Google services**.[^guidelines]

### Don't Blindly Trust the Answers

Gemini is not a human being. It cannot think for itself or feel emotions; it is simply great at finding patterns.[^genai]
Because of this, **it can state wrong information as if it were fact** (hallucination).[^hub] **Don't rely on Gemini for diagnosis, treatment, or medical advice, or for professional help with legal or financial matters.** Its answers are for reference only.[^hub]
Four habits for double-checking answers are covered in [Stage 1, Chapter 9](../00-common/09-safety.md#four-habits-for-checking).

### Accounts for Children and Work

- **Children under 13** (age varies by country) need a parent's permission in **Family Link** (the family management app) to use Gemini.[^child]
- **Work and school accounts** follow different rules. Depending on your company's Google Workspace edition, your chats and uploaded files may not be reviewed by humans or used for AI training. Only an administrator can turn off Keep Activity.[^work] If you use a work account, check your company's AI usage policy first.

<Quiz id="ch309-rules" />

## Try It Yourself

1. Open Settings (설정) → Activity (활동) and check whether Keep Activity is on and how many months auto-delete is set to.
2. Choose an auto-delete period that works for you (for example, 3 months).
3. Click Delete (삭제) → Last hour (지난 1시간) to erase the practice chats you just had.
4. Check Public links (내 공개 링크) as you learned in [Chapter 3](03-chats.md#deleting-a-shared-link) to make sure no shared links are left behind.

**Continuing Project** ([Preparing a Book Club](../00-common/practice-kit.md)): For files containing other people's personal info—like the member list used in the project—only handle them in a temporary chat, or replace real names with labels like "Member 1" before uploading. Delete the related chats when you finish the project.

## Summary

- When you sign in and use Gemini, your questions, uploaded files, connected app info, and location are saved. Your chats are not used to show you ads.
- Some chats are read by humans. When Keep Activity is on, they are also used for AI training. Never enter confidential information.
- Keep Activity is on by default if you are 18 or older. Turning it off keeps chats for only 72 hours and stops AI training, but disables features like memory, skills, and tasks.
- In Gemini Apps Activity, you can delete history by time range and change the auto-delete setting (18 months by default). Chats reviewed by humans stay for up to 3 years.
- You can download your history with Google Takeout. Downloading it leaves the server copy intact.
- Answers can be wrong. Leave medical, legal, and financial decisions to professionals.

## Glossary

| Term | One-line meaning |
|---|---|
| Keep Activity | The setting that saves your Gemini chats to your account |
| Gemini Apps Activity | The page where you view and delete your chat history |
| Auto-delete | The setting that automatically erases history older than a set period |
| Human reviewer | A person who reads a portion of chats to help improve the service |
| Google Takeout | The tool for downloading your data from Google services |
| Family Link | The app parents use to manage their child's Google account |

<ChapterDone :chapter="309" />

Next chapter: [Chapter 10. Voice and Mobile](10-voice-mobile.md)

[^report]: Verified on the Gemini web interface (Google AI Pro, Korean). Clicking Settings (설정) → Activity (활동) opens myactivity.google.com "Gemini Apps Activity (Gemini 앱 활동)" in a new tab, showing setting name "Keep Activity (활동 기록 보관)", status "On (사용)", description "Even when this setting is off, Google saves your chats for 72 hours to respond to you and keep Gemini safe (이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다.)", and auto-delete button "Deleting activity older than 18 months (18개월이 지난 활동 삭제)". (Checked on 2026-10-30, `docs/reports/2026-10-30_Gemini-공식-자료.md` section "Verified directly on actual screen". Not screenshotted because real chat history was visible on this page)
[^hub]: Google Help, "Gemini Apps Privacy Hub" (Korean edition: "Gemini 앱 개인 정보 보호 허브"). "What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (checked on 2026-10-31)
[^activity]: Google Help, "Manage & delete your activity in Gemini Apps" (Korean edition: "Gemini 앱에서 활동 관리 및 삭제하기"). "If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." Korean UI labels: "사용 중지", "사용 중지 및 활동 삭제", "삭제", "전체 기간", "지난 1시간", "지난 1일", "사용자설정 범위", "자동 삭제 안함". https://support.google.com/gemini/answer/13278892 (checked on 2026-10-31)
[^download]: Google Help, "Download your Gemini Apps data" (Korean edition: "Gemini 앱 데이터 다운로드하기"). "Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." Korean UI label: "모두 선택 해제". https://support.google.com/gemini/answer/16920332 (checked on 2026-10-31)
[^guidelines]: Google Help, "Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful" (Korean edition: "Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기"). Prohibited item headings: "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (checked on 2026-10-31)
[^genai]: Google Help, "Learn about generative AI" (Korean edition: "생성형 AI에 대해 자세히 알아보기"). "Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (checked on 2026-10-31)
[^child]: Google Help, "Guide your child's Gemini Apps experience" (Korean edition: "자녀의 Gemini 앱 사용 관리하기"). "A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (checked on 2026-10-31)
[^work]: Google Help, "Use Gemini Apps with a work or school Google Account" (Korean edition: "직장 또는 학교 Google 계정으로 Gemini 앱 사용하기"). "Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." (description for Workspace editions provided as a core service) / "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (checked on 2026-10-31)

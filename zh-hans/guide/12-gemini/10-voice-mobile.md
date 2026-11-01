# 第10章 语音与手机——开口提问、Gemini Live、手机和电脑应用

> **一句话总结**：嫌打字麻烦，就用**麦克风**来问。想用说话的方式来回交谈，就用手机上的 **Gemini Live**。
> 也可以把摄像头或屏幕展示给它再提问。电脑应用只要按**一个快捷键**，就能马上叫出来。

这一章里手机画面，本指南没能亲自拍摄。内容是依据帮助文档写的，每部手机的菜单位置可能不同。

## 开口提问——麦克风按钮

可以不打字，直接用嘴来问。

- **手机应用**：点输入框里的麦克风，然后说话。麦克风为了听你的问题，会**最长**开着 5 分钟。[^mobilestart]
- **网页**：点输入框右侧的麦克风按钮（「语音记录（음성기록）」）。在 Mac 上，用快捷键 ⌘ + Shift + D 也可以。[^screen]

用嘴问的时候，第1阶段学的要领也是一样的。要说明想要什么、给谁、什么样子（[第1阶段第4章](../00-common/04-prompt-basics.md)）。

韩语是手机应用支持的语言，韩国也是支持的国家。[^mobile] 不过，像更换声音这样的一些语音功能，在部分语言里是不能用的。[^voice]

<Quiz id="ch310-voice" />

## Gemini Live——用说话来交流的对话

**Gemini Live**（Gemini 实时对话）是不用打字、**用说话来回交流的对话**。Gemini 说话的过程中，你也可以插话补充内容，或者换个话题。[^live]
适合这些时候。[^live]

- 像礼物点子、活动计划这样，需要**出声整理思路**时
- 像面试、演讲这样，需要**用嘴练习重要场合**时

```
明天在街坊读书会上，我要给新会员做 1 分钟的读书会介绍。
我先说一遍，你听完之后，告诉我怎样说得更简短、更温暖。
```

### 在哪里用，有什么条件

帮助文档介绍的是在 **Android 手机、平板上的 Gemini 应用**里使用。**在网页上还不能使用 Live。**[^live] 要年满 13 岁（各国有所不同），并且需要登录。[^live]
iPhone 版 Gemini 小组件（iOS 17 及以上）里，也有 Live 快捷入口。[^widget] 不过 Live 的帮助文档是以 Android 为准的，在 iPhone 上能做到什么程度，本指南没能确认。

目前 **Gem 不能在 Live 里使用。**[^live] 在 Live 里使用以前对话的记忆（记忆功能）的个性化功能，据说只有**美国的英语**才能用。[^live]

### 开始和停止

- **开始**：点 Gemini 应用下方的「Live」，或者向左滑动。说"Hey Google, let’s talk Live"也可以。[^live]
- **暂时停下**：点「待机（대기）」，麦克风就关了。再点「Live」就会接着继续。[^live]
- **静音**：只关我的麦克风，让 Gemini 继续说话。[^live]
- **改用文字继续**：点「结束（종료）」，同一个对话就会转成文字对话继续。不用新建聊天。在那个对话里再点「Live」，就回到语音。[^live]
- **使用其他应用**：从屏幕下方向上滑，就可以在开着 Live 的情况下去用其他应用。[^live]

即使关掉了用说话来打断，点一下屏幕也能让它停下。打开字幕之后，之后所有的 Live 对话都会带字幕。[^live]

### 更换 Gemini 的声音

声音在**手机应用的设置**里选择。点名字可以先试听，再用「确定（확인）」保存。[^voice] 选好的声音，不只用在 Live 上，也用在读回答的「收听（듣기）」这样的**所有用声音回答的功能**上。[^voice]

### 展示摄像头和屏幕

在 Live 中打开**摄像头**，就能一边给它看我所看到的东西，一边交谈。[^live] 比如照着冰箱里面问："用这些东西，晚饭做什么好呢？"

也可以**分享屏幕**。这时，**我手机的整个屏幕**都会被 Gemini 看到。[^live] 所以分享之前，请确认屏幕上没有密码、支付信息、别人的消息。

- 想结束分享，从屏幕上方向下滑，在「屏幕分享（화면 공유）」卡片上点「停止分享（공유 중지）」。[^live]
- 离开应用，摄像头就会关闭，回来之后也不会自动重新打开。屏幕分享也是一样。[^live]

**录下别人，或者把别人加入 Live 对话时，请先征得许可。**[^live] Live 的录音、视频、屏幕分享是怎么保存的，请看[第9章](09-privacy.md#会有人阅读吗-会用于-ai-训练吗)。

<Quiz id="ch310-live" />

## 手机应用——拍照提问、当作助手使用

手机应用比网页能做的事稍微多一些。

- **拍照提问**：点应用里的相机拍照，然后就那张照片提问。[^mobileuse]
- **总结 Gmail、云端硬盘**：已连接的应用开着时，在手机上也能总结邮件和文件（[第7章](07-skills-apps.md)）。[^mobileuse]

### 在 Android 上当作助手使用

在 Android 上，可以把 Gemini 设为**默认助手**（用手机按键或声音叫出来的帮手）。[^mobilestart]

- 用长按电源键或主屏幕键这类方式叫出来。方法因设备而异。[^mobilestart]
- 有些语言不能用"Hey Google"，但这时也可以点麦克风，用说话来对话。[^mobilestart]
- 在看其他应用时，可以叫出 Gemini，**就当前的屏幕提问**。需要在设置里打开屏幕上下文（「屏幕上下文（화면 컨텍스트）」）。[^mobilestart]

### 在锁屏界面使用

在 Android 手机、平板上，不用解锁，也能让 Gemini 做一部分事。在设置里打开或关闭「不解锁使用 Gemini（잠금 해제하지 않고 Gemini 사용하기）」。[^lock] 即使允许了，**需要个人信息的事，它也会让你解锁。**[^lock]

如果手机和别人共用，或者经常随手放在外面，这个设置还是关掉更安全。

<Quiz id="ch310-mobile" />

## 电脑应用——用快捷键马上叫出来

安装 Mac、Windows 应用的方法在[第1章](01-getting-started.md#gemini-是什么-在哪里用)里。安装好并且应用开着的话，就可以用**快捷键**马上叫出来。

| 电脑 | 快捷键 | 其他 |
|---|---|---|
| Mac | Option + Space | 分享窗口、「在当前窗口直接说话（현재 창에서 바로 말하기）」 |
| Windows | Alt + Space | — |

来源：Google 帮助文档[^mac][^windows]

Mac 应用里还能这样做。[^mac]

- **分享窗口**：通过「添加文件和工具（파일 및 도구 추가）」→「分享窗口（창 공유）」，把正在看的窗口展示给 Gemini，就能得到针对那些内容的回答。
- **「在当前窗口直接说话」**：按住 fn 键说话，松手后问题就发出去了。目前还没有对所有人开放。

分享窗口时，和手机屏幕分享一样。请先看看那个窗口里有没有不该给人看的内容。

<Quiz id="ch310-desktop" />

## 动手试试

1. 在手机 Gemini 应用里点麦克风，说"推荐三道今晚的菜"。
2. 如果是 Android，点「Live」练习 1 分钟的自我介绍，再点「结束」，确认同一个对话是不是以文字继续。
3. 在手机应用设置里，试听两三个 Gemini 的声音，挑一个。
4. 如果有电脑应用，用快捷键（Mac 是 Option + Space，Windows 是 Alt + Space）叫出 Gemini 试试。

**连续任务**（[准备读书会](../00-common/practice-kit.md)）：用 Live 开口练习下次聚会的主持词。练习结束后，请它把变成文字的对话中要改的地方整理出来。

## 总结

- 点麦克风就能用嘴问。手机应用的麦克风最长听 5 分钟。韩语是应用支持的语言。
- Gemini Live 是用说话来回交流的对话。按帮助文档，在 Android 应用里使用，网页上还不行。用「待机」「结束」来停下，「结束」之后会转成文字对话继续。
- Live 中可以展示摄像头和屏幕。屏幕分享会让整个手机屏幕都被看到。
- 声音在手机应用设置里更换，会用在所有用声音回答的功能上。
- 在 Android 上，把 Gemini 当作默认助手，锁屏界面也能用。需要个人信息的事，要解锁才行。
- 电脑应用，Mac 用 Option + Space，Windows 用 Alt + Space 来叫出。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Gemini Live | Gemini Live（实时对话） | 用说话来回交流的 Gemini 对话 |
| Screen sharing | 屏幕分享 | 把我设备的屏幕展示给 Gemini |
| Mobile assistant | 手机助手 | 用手机按键或声音叫出的默认帮手 |
| Widget | 小组件 | 在主屏幕上直接打开应用功能的小窗口 |
| Speak to Window | 对当前窗口说话 | 在 Mac 上按住 fn 键说话来提问的功能 |

<ChapterDone :chapter="310" />

下一章：[第11章. 实践课题](11-practice.md)

[^screen]: 在 Gemini 网页画面（Google AI Pro，韩文界面，Mac）上亲自确认。输入框右侧麦克风按钮的标签 "음성기록 (⌘⇧D)". （确认日期 2026-10-31）
[^mobile]: Google 帮助文档，「Gemini mobile app availability」（韩文版 「Gemini 모바일 앱 사용 가능 여부」）. "To use your Gemini mobile app, you must be 13 (or the applicable age in your country) or over." / "Where you can download the Gemini app from the Google Play Store" （支持语言列表中有 "Korean"，国家列表中有 "South Korea"） https://support.google.com/gemini/answer/14579026 （确认日期 2026-10-31）
[^mobilestart]: Google 帮助文档，「Get started with the Gemini mobile app」（韩文版 「Gemini 모바일 앱 시작하기」）. "The microphone stays open for up to 5 minutes to listen to your prompt." / "On Android, if you set the Google app  as the default assist app on your device, you can choose Gemini as your mobile assistant." / "Activate by touch, which differs by device." / "“Hey Google” is not available in all languages, but you can still chat with Gemini with your voice when you tap Microphone ." / "Make sure your screen context setting is turned on." https://support.google.com/gemini/answer/14554984 （确认日期 2026-10-31）
[^mobileuse]: Google 帮助文档，「What you can do with your Gemini mobile app」（韩文版 「Gemini 모바일 앱으로 할 수 있는 작업」）. "Ask questions about your surroundings. In the Gemini app, tap Camera , take a photo, and ask questions about it." / "Summarize and find quick info from Gmail or Google Drive" https://support.google.com/gemini/answer/14579631 （确认日期 2026-10-31）
[^live]: Google 帮助文档，「Talk naturally with Gemini Live」（韩文版 「Gemini Live로 자연스럽게 대화하기」）. "With Gemini Live, you can have a natural, free-flowing conversation with Gemini. You can even interrupt it like when you want to add more details or change the topic of the conversation." / "Brainstorm ideas out loud: Ask for a gift idea, to plan an event, or to make a business plan." / "Practice aloud: Rehearse for important moments in a more natural and conversational way." / "An Android phone or tablet." / "For now, Gemini Live isn’t available in the Gemini web app or Gemini in Google messages." / "Be over 13 (or the applicable age in your country)." / "To use this feature, you must be signed in to Gemini Apps." / "For now, Gems can't be used with Gemini Live." / "Respect others’ privacy and ask permission before recording or including them in a Live chat." / "At the bottom, tap Live  or swipe left." / "You can also go Live by saying “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”" / "To put the Live chat on hold, tap Hold . This turns off the mic." / "To resume the Live chat, tap Live ." / "Mute a Live chat to turn off your microphone but allow Gemini to keep speaking." / "You can seamlessly switch an ongoing conversation between Live (voice) and non-Live (text) modes without needing to start a new chat." / "Important: This feature is only available in English in the US." / "To get more helpful, tailored responses, Gemini can use memories of your past chats and info from some Connected Apps." / "To switch back to Live (voice) mode: In a non-Live chat, tap Live ." / "To put Live in the background: from the bottom edge of your screen, swipe up." / "Tip: If you turn off interrupt Live responses, you can still interrupt Gemini by tapping the screen." / "If you turn on captions, all of your Gemini Live conversations will have captions until you turn the setting off." / "In your Live chat, you can turn on your camera to show Gemini what you see and talk about it." / "You leave the Gemini mobile app. The camera doesn’t automatically turn back on when you return to the app." / "You can share and get help with what’s on your device’s screen. When you share your screen, your full screen is shared with Gemini." / "From the top edge of your screen, swipe down, then on the “Screen Sharing” card, tap Stop sharing." / "Screen sharing doesn’t automatically resume when you continue your Live chat or unlock your screen." 韩文版画面名称 「대기」「종료」「음소거」「공유 중지」。 https://support.google.com/gemini/answer/15274899 （确认日期 2026-10-31）
[^widget]: Google 帮助文档，「Add & customize your Gemini widget」（韩文版 「Gemini 위젯 추가 및 맞춤설정하기」）. "Open directly to Gemini live with" / "Your device has iOS 17 or up." https://support.google.com/gemini/answer/16179553 （确认日期 2026-10-31）
[^voice]: Google 帮助文档，「Change Gemini’s voice」（韩文版 「Gemini의 음성 변경」）. "For now, you can only access Gemini’s voice setting in the Gemini mobile app." / "The option to change Gemini’s voice isn’t available in some languages." / "This voice setting applies to all Gemini Apps features." 韩文版画面名称 「Gemini의 음성」「듣기」「확인」。 https://support.google.com/gemini/answer/15277943 （确认日期 2026-10-31）
[^lock]: Google 帮助文档，「How your Gemini mobile app can help when your phone is locked」（韩文版 「휴대전화가 잠겨 있을 때 Gemini 모바일 앱의 도움을 받는 방법」）. "On Android phones and tablets, you can get help from your Gemini mobile app by touch" / "When you give Gemini permission to respond while your phone is locked, you may still need to unlock your phone for certain tasks." / "Turn Use Gemini without unlocking on or off." 韩文版画面名称 「잠금 해제하지 않고 Gemini 사용하기」。 https://support.google.com/gemini/answer/14576209 （确认日期 2026-10-31）
[^mac]: Google 帮助文档，「Use the Gemini app on Mac」（韩文版 「Mac에서 Gemini 앱 사용하기」）. "For quick access, you can also use the keyboard shortcut Option + Space to bring up the Gemini chat window after the app is installed and running." / "Tip: To get more personalized responses, you can share your window with Gemini. In Gemini, click Add files and tools  Share window ." / "To use Speak to Window, press and hold the fn key." / "Important: Speak to Window is rolling out over time, so it may not be available to you yet." 韩文版画面名称 「파일 및 도구 추가」「창 공유」「현재 창에서 바로 말하기」。 https://support.google.com/gemini/answer/17011627 （确认日期 2026-10-31）
[^windows]: Google 帮助文档，「Use the Gemini app for Windows」（韩文版 「Windows용 Gemini 앱 사용하기」）. "For quick access to Gemini, you can use the keyboard shortcut Alt + Space." https://support.google.com/gemini/answer/18263854 （确认日期 2026-10-31）


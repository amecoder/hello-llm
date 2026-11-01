// zh-hans text for antigravity (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const ANTIGRAVITY: Record<string, QuestionText> = {
  "ch601-surfaces": {
    prompt: "Antigravity 应用和终端程序 agy 的关系，哪项是对的？",
    choices: [
      "应用只用 Gemini，agy 只用 Claude 模型",
      "两者运行的是同一个代理，所以大部分功能都是相同的",
      "agy 是把应用的界面原样复制过来显示的工具",
      "应用和 agy 是不同公司做的互不相干的产品",
    ],
    explain: "官方文档说明，应用和 CLI 运行的是同一个代理，所以大部分功能在两边都能用。",
  },
  "ch601-plans": {
    prompt: "用免费的 Google 账号使用 Antigravity，会有什么不同？",
    choices: [
      "功能都能用，但用量按周重新补满",
      "定时任务和 CLI 之类的功能只在付费套餐里开放，免费账号只能聊天",
      "一天正好只能问十个问题",
      "不能保存结果文件，只能在屏幕上看",
    ],
    explain: "所有套餐都能使用全部功能。免费账号的用量按周重新补满。",
  },
  "ch601-models": {
    prompt: "2026 年 11 月 2 日之后，免费账号做实操时，这份指南介绍用哪个模型？",
    choices: [
      "Gemini 3.8 Flash",
      "Gemini 4 Argon",
      "Claude Opus 4.6",
      "Claude Sonnet 5.5",
    ],
    explain: "原来免费账号可以选的 Claude 4.6 系列在 11 月 2 日下架，Gemini 4 Argon 和 Claude Sonnet 5.5 需要 Pro 以上。",
  },
  "ch601-compare": {
    prompt: "把在 Codex 阶段做好的“整理工具”文件夹用 Antigravity 打开时，需要搬动什么？",
    choices: [
      "要把 AGENTS.md 改名为 GEMINI.md",
      "要把技能搬到 .gemini/skills 文件夹",
      "要把 CLAUDE.md 删掉，Antigravity 才能打开",
      "没有什么特别需要搬动的东西，原样直接打开它就可以了，不用改名",
    ],
    explain: "Antigravity 会读取 AGENTS.md 和 .agents/ 文件夹。文件名和位置都和 Codex 里做的一样。",
  },
  "ch602-install": {
    prompt: "登录 Antigravity 应用的方法，哪项是对的？",
    choices: [
      "不用登录，直接就能用",
      "要在应用里另外创建新的账号和密码，还要完成邮箱验证之后才能够用",
      "用 ChatGPT 账号登录",
      "点 Sign in，在浏览器里用个人 Google 账号登录",
    ],
    explain: "点 Sign in 后会打开浏览器，用个人 Google 账号（Free、Pro、Ultra）登录。",
  },
  "ch602-project": {
    prompt: "在 Antigravity 应用里打开“整理工具”文件夹，怎么做？",
    choices: [
      "把文件夹压缩后上传到对话框",
      "文件夹必须先做成 Git 仓库，之后才能添加到 New Project 里",
      "只要把文件夹名称直接写进对话框就行",
      "在 New Project 里用 Add Folder 选择文件夹",
    ],
    explain: "代理在项目里工作。通过 New Project → Add Folder 选择文件夹，普通文件夹也可以。",
  },
  "ch602-plan": {
    prompt: "第一次交给它的事，这份指南建议用哪种方式？",
    choices: [
      "用 Planning mode 拿计划，读完点 Proceed",
      "改成 Always proceed，不要计划书，不停地一路执行到底",
      "用 Fast mode，不做计划直接执行",
      "把权限改成 Turbo，许可所有命令",
    ],
    explain: "Planning mode 会先制定计划，读完计划书之后点 Proceed 再往下进行。刚开始还建议同时用 Request review。",
  },
  "ch602-first": {
    prompt: "在对话框里用 @ 指到某个文件，会怎么样？",
    choices: [
      "文件路径会传过去，代理在需要时去读",
      "文件会被自动删除",
      "文件会被移到别的文件夹",
      "指到的文件的全部内容原样粘贴到对话框里，显得很长",
    ],
    explain: "提到文件时，内容并不会被粘贴进去。只传路径，代理在需要时再去读那个文件。",
  },
  "ch602-review": {
    prompt: "在 Review 窗口里，只想看代理在这次对话里改过的文件，该选什么？",
    choices: [
      "Staged Changes",
      "Uncommitted",
      "Agent Edits",
      "Discard",
    ],
    explain: "默认视图 Uncommitted 连我自己改的也一起显示。Agent Edits 只显示代理在这次对话里改过的文件。",
  },
  "ch603-where": {
    prompt: "Antigravity 把哪个名字当作这个文件夹的规则文件来读，哪项是对的？",
    choices: [
      "只读 CLAUDE.md",
      "不读任何规则文件，只照对话框里随时说出来的指示去做",
      "只读 README.md",
      "读 AGENTS.md 和 GEMINI.md",
    ],
    explain: "Antigravity 读取 AGENTS.md、GEMINI.md 和 .agents/rules/。CLAUDE.md 不在规则文件的列表里。",
  },
  "ch603-test": {
    prompt: "这份指南是怎么测试 AGENTS.md 有没有被读取的，哪项是对的？",
    choices: [
      "问代理有没有读过 AGENTS.md",
      "把 AGENTS.md 保存了好几次再运行",
      "用同一份笔记，没有 AGENTS.md 时运行一次，有时运行一次，来对比",
      "像会议笔记和学习笔记这样，让它各整理一份不同的笔记，然后再去对比这两个结果",
    ],
    explain: "按 Codex 阶段评审指出的，用同一份笔记、同样的请求运行了两次，只在 AGENTS.md 里才有的小节，没有时是 0，有时是 1。",
  },
  "ch603-skills": {
    prompt: "在 Antigravity 应用里直接调用 weekly-review 技能，方法是什么？",
    choices: [
      "$weekly-review",
      "输入 /weekly-review",
      "输入 @weekly-review 后回车",
      "#weekly-review",
    ],
    explain: "在应用输入框里输入 /技能名称。它和 Codex 的 $名称不同，和 Claude Code 的 /名称相同。",
  },
  "ch603-rules": {
    prompt: "在 .agents/rules/ 文件夹里创建规则文件时，必须遵守什么？",
    choices: [
      "文件名全部用大写",
      "在文件最前面写上 trigger 值",
      "一个文件里只写一行规则",
      "把规则文件深深地放进 rules 文件夹下的子文件夹里，按种类整理",
    ],
    explain: "rules/ 里的文件，最前面必须写 trigger。没写或写错，就会悄无声息地被丢弃。",
  },
  "ch604-presets": {
    prompt: "在 Antigravity 应用的权限预设中，不受任何限制地运行所有命令的是哪个？",
    choices: [
      "Request Review",
      "Inherit Global",
      "Default",
      "Turbo（无限制）",
    ],
    explain: "Turbo 没有围栏，所有命令都不问就运行，并且能读写整台电脑。整理笔记不需要它。",
  },
  "ch604-sandbox": {
    prompt: "在应用的 Default 预设和终端（agy）里，命令围栏（沙盒）默认是怎样的？",
    choices: [
      "两边默认都是关闭的",
      "应用和终端默认都开着围栏，并且都被禁止联网",
      "应用的 Default 里是开的，终端默认是关的",
      "应用的 Default 里是关的，而终端默认是开着的",
    ],
    explain: "应用的 Default 和 Auto 预设里围栏是开着的，并且禁止联网（在 Request Review 和 Turbo 里是关的）。终端（agy）默认是关的。",
  },
  "ch604-undo": {
    prompt: "点击 Review 窗口里的 Discard unstaged changes 时，为什么要小心？",
    choices: [
      "因为 AGENTS.md 会变成 GEMINI.md",
      "因为一点下去，Google 账号就会退出登录，需要重新登录",
      "因为它不经确认就直接生效，甚至可能删掉新文件",
      "因为网络连接会断开",
    ],
    explain: "丢弃不经确认就直接生效，连没有记录过的新文件也会从磁盘上删掉。交给它之前，先用 Git 记录一下。",
  },
  "ch605-plan": {
    prompt: "用 /plan 和普通请求有什么不同？",
    choices: [
      "到网上找来类似的计划示例，再原封不动地照着它修改文件",
      "更快地修改文件",
      "删除对话，重新开始",
      "在修改文件之前先查看文件夹，并先展示需要决定的事项",
    ],
    explain: "普通请求会马上开始修改文件，而 /plan 会先查看并展示需要决定的事项，再用 Proceed 去执行。",
  },
  "ch605-schedule": {
    prompt: "想让每周五的每周回顾跨越对话持续运行。该用什么？",
    choices: [
      "/schedule — 只在创建它的对话里运行的计时器",
      "Automations — 重启应用后仍会保留的定时",
      "/goal — 不做完不停下的目标模式，每周都会自动重新开始",
      "/browser — 操控 Chrome 的子代理",
    ],
    explain: "/schedule 属于创建它的那个对话。要跨对话持续运行的事，用应用侧边栏里的 Automations。",
  },
  "ch605-browser-goal": {
    prompt: "使用 /goal 时，这份指南建议怎么做？",
    choices: [
      "把权限改成 Turbo，在达成目标期间不再询问许可",
      "清楚写明“做完的标准”，别含糊",
      "改成 Fast mode",
      "把 Review 窗口关掉",
    ],
    explain: "/goal 没有重复次数的上限，可能消耗很多用量。要清楚写明做完的标准。权限和审查设置保持不变。",
  },
  "ch605-remote": {
    prompt: "用 Remote Control 从其他设备操控时，实际的工作在哪里进行？",
    choices: [
      "在其他设备里单独进行",
      "在 Google 云端的空工作区里进行",
      "只在网页浏览器里进行",
      "用我电脑里的文件和工具进行",
    ],
    explain: "即使是远程使用，代理也是用我电脑里的文件、工具和登录信息工作。在其他设备上用同一个 Google 账号登录。",
  },
  "ch606-install": {
    prompt: "第一次运行 agy 时确认的“Workspace trust”是什么？",
    choices: [
      "登记“信任这个文件夹”的步骤",
      "修改 Google 账号密码的步骤",
      "换成付费套餐的步骤",
      "把文件夹上传到云端的步骤",
    ],
    explain: "第一次运行时，在代理查看文件之前，先确认是否信任这个文件夹。",
  },
  "ch606-modes": {
    prompt: "关于 agy 的 accept-edits 模式，哪种说法是对的？",
    choices: [
      "所有命令和文件修改都不问就直接执行，围栏也会一起关掉",
      "只自动许可联网",
      "文件只读，绝不修改",
      "工作文件夹里的文件修改自动进行，命令仍然会询问",
    ],
    explain: "accept-edits 会自动许可在工作文件夹里创建、修改文件，但在运行终端命令之前仍会询问。",
  },
  "ch606-headless": {
    prompt: "在 agy -p 里遇到需要许可的操作，会怎样？",
    choices: [
      "在屏幕上弹出窗口来征求许可",
      "悄悄地被拒绝，运行继续，并以退出码 0 结束",
      "重新启动电脑",
      "以错误码 1 立刻停止，对什么被拦住了不做任何说明",
    ],
    explain: "因为没有询问的窗口，所以按策略处理。没得到许可的操作会被悄悄拒绝，退出码是 0，提示出现在 stderr 里。",
  },
  "ch606-pitfalls": {
    prompt: "agy -p 以成功（退出码 0）结束，却没有结果文件。按这份指南的经验，先做什么？",
    choices: [
      "读 stderr 里的拒绝提示，确认是什么被拦住了",
      "重新创建 Google 账号",
      "直接加上 --dangerously-skip-permissions",
      "既然成功了，就等文件过一会儿生成",
    ],
    explain: "曾经出现过：shell 命令被拒绝，什么都没创建，却以 0 结束。读拒绝提示，再通过模式或请求的措辞缩小范围来解决。",
  },
  "ch606-resume": {
    prompt: "在 agy 里，直接接着这个文件夹里的最后一次对话，怎么做？",
    choices: [
      "agy -c（继续）",
      "agy -p",
      "agy --version",
      "agy --sandbox",
    ],
    explain: "用 agy -c 接上那个文件夹的最后一次对话，也可以用 /resume 选择后接着聊。对话记录按运行时所在的文件夹分开。",
  },
  "ch607-cost": {
    prompt: "在 Pro 套餐里，想避免在不知不觉中扣掉 AI 积分，该选什么？",
    choices: [
      "积分自动使用设为 Never",
      "积分自动使用设为 Always",
      "权限设为 Turbo",
      "Automations 设为每小时",
    ],
    explain: "Never 表示基本用量用完后不会自动使用积分，而是等待重新补满。",
  },
  "ch607-data": {
    prompt: "决定我的对话是否用于改进模型的设置在哪里？",
    choices: [
      "在 AGENTS.md 最上面写上“禁止训练”这几个字，对话就会照样不被用于训练",
      "Review 窗口里的 Discard 按钮",
      "/goal 命令的选项",
      "Settings 的 Account 里的 Enable Telemetry",
    ],
    explain: "开着 Enable Telemetry，对话就会用于改进 Antigravity 和模型。数据收集可以随时在 Settings 里关掉。",
  },
  "ch607-injection": {
    prompt: "Antigravity 没有照隐藏指令的笔记去做（1 次实验）。该怎么看待这个结果？",
    choices: [
      "以后任何文档都可以不用确认，直接交给它",
      "权限设成 Turbo，隐藏指令就会被拦住",
      "只是一次的结果，不是保证，所以别人的文档要更仔细地检查结果",
      "Antigravity 被设计成绝对不会被隐藏指令骗到，所以不用另外确认",
    ],
    explain: "三个工具都各拦住了一次，但这不是保证。放入别人的文档时，要把结果与原件对照。",
  },
  "ch607-choose": {
    prompt: "三个工具共用“整理工具”文件夹时，要修改规则，该怎么做？",
    choices: [
      "新建 GEMINI.md，把其余的删掉",
      "CLAUDE.md 和 AGENTS.md 一起改",
      "只改 CLAUDE.md，Codex 和 Antigravity 也会读那个文件，照样遵守",
      "规则每次都在对话里用话语告诉它",
    ],
    explain: "Claude Code 把 CLAUDE.md 当作规则来读，Codex 和 Antigravity 则读 AGENTS.md。所以要两个文件一起改。",
  },
}

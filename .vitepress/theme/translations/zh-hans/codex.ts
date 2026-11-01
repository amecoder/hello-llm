// zh-hans text for codex (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const CODEX: Record<string, QuestionText> = {
  "ch501-modes": {
    prompt: "想在 ChatGPT 桌面应用里修改文件夹里的文件，还想亲眼看到到底改了什么。该选哪种方式？",
    choices: [
      "Chat — 提问并得到回答、一起打磨想法的对话方式",
      "Work — 隐藏 Git 或命令之类的技术信息，只展示完成的成果的方式",
      "Codex — 连改动内容之类的技术信息也展示出来的方式",
      "网页浏览器里的临时聊天",
    ],
    explain: "Work 和 Codex 能做的事有重叠，但 Codex 会展示 diff（改动内容）之类的技术信息。所以更便于把结果和原件对照。",
  },
  "ch501-compare": {
    prompt: "你把在 Claude Code 里用的规则文件 CLAUDE.md 原样留在“整理工具”文件夹里，然后打开了 Codex。会怎么样？",
    choices: [
      "Codex 会自动找到文件夹里的 CLAUDE.md，读取并原样遵守其中的规则",
      "Codex 读 AGENTS.md，所以 CLAUDE.md 放着不动就不会被读",
      "Codex 把 CLAUDE.md 删掉，再用同样的内容新建一个 AGENTS.md",
      "Codex 完全不使用规则文件，只照对话里说的去做",
    ],
    explain: "Codex 的规则文件名是 AGENTS.md。其他没有登记的名字会被忽略，所以迁移整理工具时，要先改这个文件。",
  },
  "ch501-where": {
    prompt: "免费（Free）账号的 ChatGPT 应用里看不到 Codex。哪种说明最合适？",
    choices: [
      "Free 和 Go 是逐步开放的，可能还没轮到",
      "因为 Codex 是 Windows 专用的",
      "Codex 被规定在免费账号里无论如何都不能用",
      "把应用删掉重新安装，无论是什么账号，一定都会出现",
    ],
    explain: "官方的价格说明写的是，Free 和 Go 里的 Codex 是“在桌面应用中提供轻量模型、逐步开放”。各账号会依次开放。",
  },
  "ch502-install": {
    prompt: "为了使用 Codex，第一步该做什么？哪项是对的？",
    choices: [
      "到应用商店里另外找 Codex 专用应用来安装，再创建一个新账号",
      "安装 ChatGPT 桌面应用，用 ChatGPT 账号登录",
      "打开终端，先把 Codex 命令列表全部背下来",
      "先注册 GitHub 账号，并连接一个仓库",
    ],
    explain: "Codex 就在 ChatGPT 桌面应用里。安装应用，用 ChatGPT 账号登录后，选择 Codex 即可。",
  },
  "ch502-open": {
    prompt: "想使用 Codex 里查看改动内容的窗口。事先在“整理工具”文件夹里做好什么比较好？",
    choices: [
      "把文件夹名称改成英文",
      "把整个文件夹上传到云存储",
      "把文件夹做成 Git 仓库",
      "把文件夹里的笔记全部删掉，变成空文件夹",
    ],
    explain: "审阅窗口（查看改动内容）只有在 Git 仓库里才能打开。不是 Git 的话，应用会问要不要建一个。",
  },
  "ch502-first": {
    prompt: "Codex 整理的会议记录里，日期的星期和原始笔记不一样。怎么做比较好？",
    choices: [
      "是 Codex 自己改的，所以不用确认，直接相信并使用",
      "把会议记录删掉，以后不再让 Codex 做整理",
      "对照原件，如果不是想要的方式，就再拜托一次",
      "星期不重要，略过",
    ],
    explain: "看起来像模像样的结果，也可能有遗漏或错误。尤其是 Codex 自己改动的地方，要和原件对照，不是想要的方式就再拜托一次。",
  },
  "ch503-why": {
    prompt: "没有 AGENTS.md，Codex 却遵守了“（笔记里没有）”这条规则。在这份指南的实操里，原因是什么？",
    choices: [
      "因为 Codex 在屏幕上看不见的地方偷偷打开并读了 CLAUDE.md",
      "因为同样的规则也写在了模板说明里",
      "因为 Codex 事先就知道用户所有的整理规则",
      "因为它到网上找到了规则",
    ],
    explain: "Codex 没有打开 CLAUDE.md，只读了模板。模板说明里有同样的规则，所以遵守了，但只存在于 CLAUDE.md 里的规则它并不知道。",
  },
  "ch503-move": {
    prompt: "为了让 Claude Code 和 Codex 共用同一个文件夹，你创建了 AGENTS.md，同时也保留了 CLAUDE.md。以后要注意什么？",
    choices: [
      "修改规则时，两个文件一起改",
      "只改 CLAUDE.md，Codex 也会跟着变",
      "只改 AGENTS.md，Claude Code 也会跟着变",
      "两个文件的内容必须不同",
    ],
    explain: "两个工具各读各自的文件。只改一边，两个工具就会按不同的规则工作，所以要一起改。",
  },
  "ch503-test": {
    prompt: "想确认 AGENTS.md 是否真的被读取了。这份指南用的是什么方法？",
    choices: [
      "问 Codex“你读过 AGENTS.md 了吗？”，并直接相信它的回答",
      "把 AGENTS.md 重复保存好几次，确保它被读取",
      "把 AGENTS.md 的文件名全部改成大写，让它更显眼",
      "只在 AGENTS.md 里放一条新规则，在新对话里看它有没有被遵守",
    ],
    explain: "别处没有的规则被遵守了，就可以认为读取了那个文件。这次实操里，AGENTS.md 之前遵守 0 次，之后遵守 1 次（各 1 回，笔记种类不同）。",
  },
  "ch503-order": {
    prompt: "~/.codex/AGENTS.md 和“整理工具”文件夹里的 AGENTS.md 说的不一样。哪一个优先？",
    choices: [
      "个人设置 ~/.codex/AGENTS.md 总是先适用，所以它优先",
      "两个文件中内容更长、文件更大的优先",
      "离当前文件夹更近的文件夹里的 AGENTS.md 优先",
      "两个文件中先创建的那个始终优先",
    ],
    explain: "Codex 把它们从上到下连起来读，离当前文件夹更近的文件排在后面，比前面的指示优先。",
  },
  "ch503-import": {
    prompt: "官方文档建议把必须遵守的整理规则放在哪里？",
    choices: [
      "只放在记忆（Memories）里",
      "写进 AGENTS.md",
      "每次都粘贴到对话的第一条消息里",
      "做成分享链接放着",
    ],
    explain: "官方文档只把记忆当作帮助回想的辅助，不要把它当作必须遵守的规则的唯一依据。必须遵守的规则放进 AGENTS.md。",
  },
  "ch504-modes": {
    prompt: "第一次使用 Codex 时，官方文档对大多数事情建议用哪种权限？",
    choices: [
      "Full access — 不受限制地运行",
      "Ask for approval",
      "Approve for me — 由自动审查来判断",
      "把权限菜单隐藏起来",
    ],
    explain: "Ask for approval 在工作文件夹之内自己干活，越过这个边界之前会停下来询问。官方文档建议大多数事情都从它开始。",
  },
  "ch504-sandbox": {
    prompt: "即使在工作文件夹里，默认状态下 Codex 也无法写入的文件夹是哪个？",
    choices: [
      "notes 文件夹",
      "inbox 文件夹",
      "templates 文件夹",
      ".agents 文件夹",
    ],
    explain: "工作文件夹里的 .git、.agents、.codex 在默认状态下只能读取。存放技能的 .agents 也属于这里，移动时可能需要许可。",
  },
  "ch504-review": {
    prompt: "想在审阅窗口里，只看 Codex 最后一次回答所改动的内容。该选什么？",
    choices: [
      "Last turn",
      "Unstaged — 所有尚未记录的改动",
      "Staged — 已挑出来准备记录的改动",
      "Branch",
    ],
    explain: "审阅窗口默认显示尚未记录的改动（Unstaged）。选 Last turn，就只看最近一次回答的改动。",
  },
  "ch504-undo": {
    prompt: "点击审阅窗口里的 Revert all 之前，为什么要小心？",
    choices: [
      "因为点了 Revert all，ChatGPT 账号和对话记录会一起被删除",
      "因为审阅窗口里也包含我自己修改的内容",
      "因为网络会断开",
      "因为点了 Revert all，文件夹里的 AGENTS.md 也会一起被删掉",
    ],
    explain: "审阅窗口里不仅有 Codex 的改动，还有我的改动和其他未记录的改动。只想丢弃一部分时，以文件或代码块为单位撤销。",
  },
  "ch505-where": {
    prompt: "在 Codex 里，“整理工具”文件夹专用技能的存放位置和调用方法，哪项是对的？",
    choices: [
      "放在 .claude/skills 文件夹里，调用时用 /名称",
      "放在 .agents/skills 里，用 $名称 调用",
      "放在 templates 文件夹里，调用时用 @名称",
      "放在 notes 文件夹里，调用时用 #名称",
    ],
    explain: "Codex 在 .agents/skills 里查找技能，调用时用 $名称。SKILL.md 的格式和 Claude Code 相同。",
  },
  "ch505-move": {
    prompt: "你请 Codex 把技能复制到 .agents/skills，它回答说“因为是只读，被拦下了”。合适的应对是什么？",
    choices: [
      "把权限改成 Full access，之后也不再改回来",
      "放弃移动技能，改成每次自己写很长的请求",
      "确认它要写什么，然后许可，或者自己输入命令",
      "把 AGENTS.md 删掉",
    ],
    explain: ".agents 是受保护的文件夹，所以被拦住了。确认它要写什么后许可，或者自己运行 Codex 告诉你的命令就行。",
  },
  "ch505-call": {
    prompt: "用 $weekly-review 做出来的每周回顾，数字全都对，但漏掉了热红酒成本 1,800 韩元。这份指南建议接下来怎么做？",
    choices: [
      "数字都对，所以漏掉的内容也不用另外确认，直接拿来使用",
      "把技能删掉，以后每次都从头重新写很长的请求",
      "漏掉的也要确认，如果反复漏掉，就在技能里加一行规则",
      "笔记只靠手工整理",
    ],
    explain: "不仅要检查错的，也要检查漏的。不该漏的内容反复被漏掉，就在技能里加一行规则来修正。",
  },
  "ch505-create": {
    prompt: "打算安装一个没见过的插件。官方文档强调的是什么？",
    choices: [
      "选名字短的",
      "只挑最新出的插件，不用做任何确认就直接安装它",
      "插件一次装得越多，以后越方便",
      "插件的钩子在运行前要先审查，再判断是否可信",
    ],
    explain: "插件里可能带有自动运行的钩子。官方文档要求在它运行之前先审查，并判断是否可信。",
  },
  "ch506-schedule": {
    prompt: "你设置了每周五在“整理工具”文件夹里生成每周回顾的定时。定时要运行，需要什么？",
    choices: [
      "电脑开着，并且应用在运行",
      "手机要开着",
      "要建一个 GitHub 仓库，把“整理工具”文件夹上传上去",
      "每次定时运行时，都要把权限改成 Full access",
    ],
    explain: "使用我电脑里文件夹的定时，只有在电脑开着、应用正在运行时才会运行。",
  },
  "ch506-cloud": {
    prompt: "关于 Codex 云端任务，哪种说法是对的？",
    choices: [
      "我电脑里的文件和浏览器登录状态会自动一起转过去",
      "需要已发布的环境，我的文件不会转过去",
      "我的电脑一关机或休眠，云端任务也会立刻停止",
      "只限免费账号使用",
    ],
    explain: "云端任务从已发布的环境开始，我电脑里的文件、正在运行的程序、浏览器登录状态都不会转过去。不过电脑休眠期间任务也会继续。",
  },
  "ch506-mobile": {
    prompt: "把手机连接起来，用来操控我电脑上的 Codex 时，官方文档强调的是什么？",
    choices: [
      "把家人的手机全都连上",
      "先从公用电脑连起",
      "只连接我自己拥有的、可信的设备",
      "连接之后改成 Full access",
    ],
    explain: "已连接的手机可以操控我电脑上的 Codex。所以只连接我自己拥有的、可信的设备。",
  },
  "ch507-install": {
    prompt: "在终端里运行 Codex CLI 安装命令之前，必须确认什么？",
    choices: [
      "命令是不是很短",
      "命令是不是和官方文档上写的一模一样",
      "命令里有没有韩文字符，要一个一个地检查",
      "连续运行命令两次会不会有问题",
    ],
    explain: "安装命令会直接运行从网上下载的脚本。确认和官方文档上写的一模一样后再运行。",
  },
  "ch507-exec": {
    prompt: "想用 codex exec 让它修改文件，却什么都没改。最合适的原因是什么？",
    choices: [
      "默认是只读，所以要加 --sandbox workspace-write",
      "codex exec 无论加什么选项，都被设计成了绝对不能修改任何一个文件，也不能运行命令",
      "没有联网的话，codex exec 一个文件也改不了",
      "因为 AGENTS.md 太长，Codex 在读取请求之前就停住了",
    ],
    explain: "codex exec 默认是只读。想让它修改文件，就加上 --sandbox workspace-write。",
  },
  "ch507-commands": {
    prompt: "在 Codex CLI 的交互界面里，想查看对话信息和剩余额度，用哪个命令？",
    choices: [
      "/import",
      "/resume",
      "/permissions",
      "/status（状态）",
    ],
    explain: "/status 显示对话信息和剩余额度。/permissions 是权限，/import 是导入，/resume 是继续。",
  },
  "ch508-usage": {
    prompt: "用 ChatGPT Work 做了几份大报告之后，能用于 Codex 的量变少了。为什么？",
    choices: [
      "因为 Work 和 Codex 共用同一份用量",
      "因为只要用过一次 Work，当天 Codex 就会自动关闭",
      "因为 Work 做的报告保存在 Codex 文件夹里，占了空间",
      "因为 Work 是免费的",
    ],
    explain: "ChatGPT Work 与 Codex 共用同样的费用、积分和使用额度。",
  },
  "ch508-data": {
    prompt: "你用 Plus 个人账号使用 Codex。想确认对话会不会被用于改进模型，该看哪里？",
    choices: [
      "Codex 在任何套餐里都不用于训练，所以不用确认",
      "在 AGENTS.md 里写上禁止训练",
      "查看 ChatGPT 账号设置和 OpenAI 帮助",
      "点审阅窗口里的 Revert all，对话就会从训练中排除",
    ],
    explain: "数据规则由登录方式决定。“默认不用于训练”只标注在 Business、Enterprise、API 密钥上，个人套餐的训练设置在 Codex 文档里没有写。所以请到 ChatGPT 账号设置和 OpenAI 帮助里确认。",
  },
  "ch508-injection": {
    prompt: "Codex 没有照一份带有隐藏指令的笔记去做（1 次实验）。该怎么看待这个结果？",
    choices: [
      "以后别人发来的文档、网页不用确认，直接交给它去处理",
      "只是一次的结果，不是保证，所以要更仔细检查结果",
      "只有对 Codex 不管用",
      "只要开着网页搜索，隐藏指令的风险就会完全消失",
    ],
    explain: "拦住了一次，并不保证每次都拦得住。放入别人的文档时，要把结果和原件对照，并把权限和联网访问收得窄一些。",
  },
  "ch508-choose": {
    prompt: "打算同时使用 Claude Code 和 Codex。这份指南建议的“整理工具”文件夹是什么样子？",
    choices: [
      "每个工具各建一套笔记、模板、成果文件夹，互不混在一起",
      "把 CLAUDE.md 删掉",
      "技能只放在一个工具里，另一个工具用很长的请求代替",
      "笔记共用，规则和技能两边都放，并一起修改",
    ],
    explain: "两个工具做的事几乎一样，所以让它们都能用同一个文件夹会比较方便。不过规则和技能要两边一起修改。",
  },
}

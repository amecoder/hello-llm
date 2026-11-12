# 第14章 实践任务与像专家一样使用

<Badge type="tip" text="必读" /> 要跟着这个阶段学下去，请一定读一读。

> **一句话总结**：这是把到目前为止学过的东西**亲手再做一遍**的 8 个任务。最后一个任务是用**你自己的笔记**做出每周整理。

本章以 2026年11月6日为准。任务的结果每次运行都会有些不同。

专家不是用很多功能的人。而是从小处开始、给出确认标准、只在需要时才加规则的人。

## 怎么做实践任务

1. **新建一个练习文件夹。** 例如：`~/hello-ai-연습/다시`（hello-ai 练习/重来）。`inbox` 里只放每周例会的笔记一份。临时会议的笔记在任务 7 再放进去。
2. **按任务的「动手试试」来做。** 复制灰色框里的文字来用就行。
3. **把「确认做好了没有」逐项勾选。** 如果有没做到的项，就到「回头再看」里的那一章，只把那一部分重做一遍。

Mac 和 Linux 在终端里这样输入。笔记从之前用的练习文件夹里复制过来。

```bash
mkdir -p ~/hello-ai-연습/다시/inbox
cd ~/hello-ai-연습/다시
cp ../터미널/inbox/회의-2026-10-27-주간회의.txt inbox/
```

Windows PowerShell 这样输入。本章的 Windows 命令没有实际运行过。

```powershell
mkdir $HOME\hello-ai-연습\다시\inbox
cd $HOME\hello-ai-연습\다시
cp ..\터미널\inbox\회의-2026-10-27-주간회의.txt inbox\
```

任务 1~7 按顺序做。后面的任务会用到前面任务的结果。**任务 8 放在最后**做。

不需要一开始就全部做完。一天做两三个任务就够了。结果的样子就算和本指南不一样，只要检查表全部勾上，就是做好了。

要遵守的有三条。

- **一开始用 `claude --permission-mode manual` 启动。** 一项一项看它要做什么，边看边熟悉。
- **只在练习文件夹里做。** 不要用装着你全部文档的文件夹。
- **任务 8 里你自己的笔记，要先删掉个人信息**再放进去。

<Quiz id="ch814-how" />

## 任务

### 任务 1. 交给它第一次整理

**适用情况**：想把乱糟糟的笔记变成会议记录时。

**动手试试**：在练习文件夹里用 `claude --permission-mode manual` 启动，然后发送下面的请求。信任确认窗口的默认选项是 `No, exit`。用向下方向键选 `Yes, I trust this folder`。

```text
读一下 inbox/회의-2026-10-27-주간회의.txt，整理成 회의록.md。分成决定事项、待办（负责人·期限）、下次会议，笔记里没有的内容不要写。
```

**确认做好了没有**

- ☐ 读了许可窗口的内容后选了 `Yes`
- ☐ 每条待办都有负责人和期限
- ☐ 原始笔记保持原样

**回头再看**：[第4章](04-first-session.md)

### 任务 2. 起名字并继续

**适用情况**：想让需要几天才能做完的事，下次能找到并接着做时。

**动手试试**：用 `/rename 周会-整理` 起个名字，再用 `/exit` 退出。然后用 `claude -r` 找到并打开那个会话。

**确认做好了没有**

- ☐ 在列表里按名字找到了会话
- ☐ 接着打开的会话记得刚才的对话
- ☐ 用 `/context` 看了上下文占了多少

**回头再看**：[第6章](06-sessions-context.md)

### 任务 3. 许可与回退

**适用情况**：想看看 Claude 改了什么，必要时把它改回去时。

**动手试试**：按下面的顺序做。

1. 看最下面一行。从列表里选的会话，可能会和新启动的会话一样以自动模式开始。如果是 `auto mode on`，按一次 `Shift + Tab` 换成 `manual mode on`。
2. 发送下面的请求，在许可窗口里读一读要改的行。
3. 做完后，在输入框为空的状态下按两次 Esc，打开回退菜单。
4. 点 `Restore code and conversation` 恢复。这是练习文件夹，放心试吧。本指南也点到了这一步，确认了文件会恢复回来。
5. 恢复后，发送过的请求会回到输入框里。按两次 Esc 清掉，再进入下一个任务。

```text
在 회의록.md 的待办表里加一栏"状态"，全部写成"进行中"。别的部分不要改。
```

**确认做好了没有**

- ☐ 先在许可窗口里读了要改的行
- ☐ 读了回退菜单里的警告句子
- ☐ 能说出一样回退恢复不了的东西

**回头再看**：[第7章](07-permissions-undo.md)

### 任务 4. 制作规则和技能

**适用情况**：同样的规则和步骤总是一遍遍重复说时。

**动手试试**：把会议记录的规则用 3~5 行写进 CLAUDE.md。然后制作技能 `meeting-notes`，在**新会话**里不说规则、直接调用它。参考样例：[CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) · [技能](/practice/cli/results/9장-스킬-meeting-notes.txt)

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

**确认做好了没有**

- ☐ 输入 `/` 时，列表里能看到 `meeting-notes`
- ☐ 新会话的结果遵守了规则
- ☐ 文件生成在了 `notes` 文件夹里

**回头再看**：[第8章](08-memory-settings.md)、[第9章](09-skills-extensions.md)

### 任务 5. 用一行命令运行

**适用情况**：不想打开对话就把整理做完时。

**动手试试**：运行之前，先在会话里看一下 `/usage`。然后用 `/exit` 退出，在终端里做。用[第10章](10-headless-automation.md)的粘贴框做出 `주간정리.sh`（每周整理），再用 `bash 주간정리.sh` 运行。Windows 粘贴第10章的 PowerShell 框。

**确认做好了没有**

- ☐ 不用人回答也一直运行到了最后
- ☐ 每份笔记都显示了 `完成：` 或 `失败：`
- ☐ 比较了运行前后的 `/usage`

**回头再看**：[第10章](10-headless-automation.md)、[第13章](13-cost-safety-trouble.md)

### 任务 6. 钩子和 Git 记录

**适用情况**：想留下文件被改动的痕迹，并把当前状态保存下来时。

**动手试试**：按下面的顺序做。

1. 加上第11章的变更记录钩子，让它改一个文件。
2. 在这个练习文件夹里，从头跟着做第12章的「用 Git 留下第一次记录（Git으로 첫 기록 남기기）」。不过，第12章第一个框里的 `cd ~/hello-ai-연습/터미널` 那一行可以不输入。因为你已经在那个文件夹里了。从 `git init` 开始输入。
3. 按第12章做出 `.gitignore`，经过 `git config`·`git add .`·`git status --short`，一直做到用 `git commit` 完成第一次提交。

**确认做好了没有**

- ☐ `/hooks` 里能看到钩子
- ☐ 亲自打开 `변경기록.txt`（变更记录）看了行数有没有增加
- ☐ `git log --oneline` 里能看到记录

**回头再看**：[第11章](11-hooks-statusline.md)、[第12章](12-parallel-remote.md)

### 任务 7. 隐藏的指令和 worktree

**适用情况**：想学会交出别人的资料时要注意什么，并且想在不碰原文件夹的情况下做测试时。

**动手试试**：大致分三步。

1. 把临时会议的笔记放进 `inbox`，读过内容后提交。
2. 在 worktree 里把那份笔记交给 Claude。
3. 做完后，把笔记从原文件夹的 `inbox` 里拿出来。

先提交是有原因的。就像在[第12章](12-parallel-remote.md)里看到的，worktree 里只会有提交过的文件。不提交的话，在 worktree 里就看不到这份笔记。

第1步用第13章里下载好的文件。如果删掉了，就按[第13章](13-cost-safety-trouble.md)重新下载。Mac 和 Linux 这样输入。

```bash
cp ~/Downloads/회의-2026-10-29-임시회의.txt inbox/
cat inbox/회의-2026-10-29-임시회의.txt
git add .
git commit -m "添加临时会议笔记"
```

Windows PowerShell 这样输入。

```powershell
cp $HOME\Downloads\회의-2026-10-29-임시회의.txt inbox\
Get-Content -Encoding UTF8 inbox\회의-2026-10-29-임시회의.txt
git add .
git commit -m "添加临时会议笔记"
```

第2步这样做。

- 用 `claude --worktree injection-test` 启动。
- 如果最下面一行是 `auto mode on`，按一次 `Shift + Tab` 换成 `manual mode on`。
- 按第13章那个更好的例子交给它。

第3步要把笔记从原文件夹的 `inbox` 里拿出来，是因为 `주간정리.sh`。这个脚本会在没人看着的情况下处理 `inbox` 里所有的会议笔记。如果带隐藏指令的笔记还留着，下次运行时就会被原样处理。拿出来的命令在第13章「小心隐藏的指令」一节的末尾。

**确认做好了没有**

- ☐ 确认了最下面一行是 `manual mode on`
- ☐ 用 `! pwd` 确认了在 worktree 里面
- ☐ 会议记录末尾没有"所有待办已完成"
- ☐ 结束时读了要选保留还是删除，再做了选择
- ☐ 把临时会议的笔记从 `inbox` 里拿出来了

**回头再看**：[第12章](12-parallel-remote.md)、[第13章](13-cost-safety-trouble.md)

### 任务 8. 用自己的笔记做每周整理

**适用情况**：现在不想只是练习，而是想用在自己的工作上时。

**动手试试**：在新文件夹（例如 `~/hello-ai-연습/내-주간정리`（hello-ai 练习/我的每周整理））里建好 `inbox`，放进 2~3 份**删掉了个人信息的**自己的笔记。放的时候要注意两点。

- 文件名统一成 `회의-날짜.txt`（会议-日期）的样子。因为脚本只找以 `회의-` 开头的文件。
- 如果是 Word 或韩文软件（Hangul）的文件，就另存为 `.txt` 再放进去。

然后启动 `claude`，发送下面的请求。

```text
我想读一下 inbox 里的笔记，定下我每周要用的整理格式。先问我需要哪些栏目。听完我的回答后，在 CLAUDE.md 里用 3~5 行写下规则，再做出 .claude/skills/meeting-notes/SKILL.md 技能。
```

技能做好后，用 `/exit` 退出，把任务 5 的脚本复制到这个文件夹里运行。Windows 在这个文件夹里粘贴第10章的 PowerShell 框。

```bash
cp ../다시/주간정리.sh .
bash 주간정리.sh
```

处理完的笔记要挪走。这样下周就不会再整理一遍同样的笔记。`mv` 是移动文件的命令。下周把新笔记放进 `inbox` 再运行。Mac 和 Linux 这样输入。

```bash
mkdir -p done
mv inbox/회의-*.txt done/
```

Windows PowerShell 这样输入。

```powershell
mkdir done -Force
Move-Item inbox\회의-*.txt done\
```

**确认做好了没有**

- ☐ 写规则之前 Claude 先提了问题，并且反映了我的回答
- ☐ 用 `bash 주간정리.sh` 一行（Windows 用第10章的 PowerShell 框），我的笔记就按我的格式整理好了
- ☐ 把数字·名字·期限和原始笔记对照过
- ☐ 放进新笔记试过，下周也能用同样的命令运行

**回头再看**：[第8章](08-memory-settings.md)、[第9章](09-skills-extensions.md)、[第10章](10-headless-automation.md)

<Quiz id="ch814-check" />

## 专家的习惯

Claude Code 的设计是：不做任何设置，只在新会话里发一个普通的第一个请求，大多数时候也能做得很好。[^plain] 所以，习惯比复杂的设置更重要。

**从小处开始。** 大的事情先用一个文件试试。这样它理解错了的时候，你能早点发现。

- **欠佳的例子**：`把我的文档文件夹全部整理一下`
- **更好的例子**：`只把 inbox 里的一份笔记整理成会议记录。看了结果我再把剩下的交给你。`

**给出确认标准。** 给 Claude 一个判断对错的方法。这样它就能自己边改边做下去。[^check]

- **欠佳的例子**：`把会议记录写好`
- **更好的例子**：`写完会议记录后，对照笔记里的金额·日期·名字是不是全都一样，有不一样的就用表格告诉我。`

**事情换了就 `/clear`。** 集中的上下文能给出更好的回答，费用也更省。[^clear]

**错两次就重写。** 盯着最开始的 1 分钟，一跑偏就立刻按 Esc。纠正两次还是错的话，不要再纠正第三次，而是 `/clear` 之后写一个更好的请求。[^two-fails] 这比抓着拉长的对话不放要快。

<Quiz id="ch814-habits" />

## 规则在需要时再加

不需要一开始就把所有规则都写下来。同样的不便反复出现时，再一条一条加。

| 出现这种情况 | 就加这个 |
|---|---|
| 又在说同样的话 | CLAUDE.md 一行 |
| 总在粘贴同样的步骤 | 技能[^add-skill] |
| 每次都必须发生 | 钩子[^add-hook] |
| 绝对不能做 | 拒绝规则[^add-deny] |

CLAUDE.md 里只写 Claude 读文件夹也无法知道的东西。[^only-unknown] 不要堆大写字母或"重要！"。一行平平常常的话就够了。强调堆多了，容易让它过度套用规则。[^no-caps]

<Quiz id="ch814-rules" />

## 每周例行

把做好的工具每周这样转起来。

1. **收集**：笔记随时放进 `inbox`。删掉个人信息。
2. **整理**：运行 `bash 주간정리.sh`（Windows 用第10章的 PowerShell 框）。
3. **确认**：把数字·负责人·期限和原文对照。
4. **记录**：把处理完的笔记挪到 `done`。满意的话，用 `git add .` 和 `git commit -m "本周整理"` 保存下来。如果是第一次，就在这个文件夹里从 `git init` 开始。[第12章](12-parallel-remote.md)框里的 `cd` 那一行不要输入。
5. **修改**：同样的问题指出过两次，就改 CLAUDE.md 或技能。

**不需要一开始就完美。** 一周运行一次，只改一个觉得不方便的地方就行。几周之后，它就会变成适合你的工具。

<Quiz id="ch814-routine" />

## 亲手试一试

1. 把这周的一份笔记放进 `inbox`。
2. 把每周例行从第 1 步到第 5 步依次做一遍。
3. 把一个觉得不方便的地方反映到 CLAUDE.md 或技能里。

问问自己。下周也能用同样的命令运行吗？

## 小结

- 检查表勾的不是"Claude 都做完了"，而是"我确认过了"。
- 从小处开始，给出确认标准，事情换了就 `/clear`。
- 纠正两次还错，就 `/clear` 后重新写请求。
- 规则在同样的不便反复出现时，一条一条加。
- 每周转一遍 收集 → 整理 → 确认 → 记录 → 修改。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Routine | 例行 | 每周按同样顺序进行的工作习惯 |
| Script | 脚本 | 装着多行命令、一次运行完的文件 |

<ChapterDone :chapter="814" />

下一章：[第4阶段 · AI-SDLC 指南](/zh-hans/guide/30-ai-sdlc/)

[^plain]: Claude Code 官方文档，「Best practices for Claude Code」。"Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^check]: Claude Code 官方文档，「Best practices for Claude Code」。"If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^clear]: Claude Code 官方文档，「Best practices for Claude Code」。"`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^two-fails]: Claude Code 官方文档，「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^add-skill]: Claude Code 官方文档，「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （确认日期 2026-11-06）
[^add-hook]: Claude Code 官方文档，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （确认日期 2026-11-06）
[^add-deny]: Claude Code 官方文档，「Best practices for Claude Code」。"anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^only-unknown]: Claude Code 官方文档，「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^no-caps]: Claude Code 官方文档，「Best practices for Claude Code」。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）

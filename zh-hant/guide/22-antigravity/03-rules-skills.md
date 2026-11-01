# 第3章 規則與技能——不用搬

> **一句話總結**：Antigravity 把資料夾裡的 **`AGENTS.md`** 當作始終開啟的規則來讀，並自己挑選 **`.agents/skills`** 裡的技能。在 Codex 階段做好的檔案**原樣**就能用。
> 用同一份筆記，一次把 `AGENTS.md` 拿走，一次放回去，各整理一遍，以此來確認這一點。

本章依據 2026 年 11 月 1 日確認過的 Antigravity 官方文件，以及本指南用 Antigravity CLI `agy` 1.4.12 執行的結果寫成。本指南是在練習用的另一個 AI 工具裡呼叫並執行 `agy` 的。官方 FAQ 對個人套餐不支援這樣的用法（[第7章](07-safety-choose.md)），所以你照著做的時候，請直接在應用或終端裡執行。應用和 CLI 用的是同一個智慧體（[第1章](01-what-is.md)）。規則檔案和技能是什麼，已在 [Claude Code 第 6、7 章](../20-claude-code/06-claude-md.md)裡講過。

## Antigravity 會找的地方

Antigravity 會在固定的資料夾裡查詢規則和技能。[^where]

| 什麼 | 這個資料夾（專案） | 我的所有資料夾 |
|---|---|---|
| 規則 | `AGENTS.md`·`GEMINI.md`·`.agents/rules/` | `~/.gemini/AGENTS.md` 等 |
| 技能 | `.agents/skills/名稱/SKILL.md` | `~/.gemini/config/skills/` |

來源：Antigravity 官方文件（只摘錄了一部分）[^where][^global][^global-skill]

**名稱和位置都和 Codex 階段做好的檔案一樣。** 就是規則檔案 `AGENTS.md` 和技能資料夾 `.agents/skills`。所以整理工具資料夾**什麼都不用搬**，直接開啟就行。

`CLAUDE.md` 不在規則檔案列表裡。[^names] 如果有隻在 Claude Code 裡用過的規則，也請寫進 `AGENTS.md`（和 Codex 第3章的理由相同）。

`AGENTS.md` 不需要開頭的設定，**整個內容始終是開啟的。**[^always] 修改過的規則和技能，從下一條訊息起立刻生效。[^reread]

<Quiz id="ch603-where" />

## 用同一份筆記來測試

`AGENTS.md` 裡有 Codex 第3章加進去的規則。就是"在整理好的檔案最下面設一節「與原件核對」"。這條規則只在 `AGENTS.md` 裡有，所以看結果裡有沒有這一節，就能知道 `AGENTS.md` 有沒有被讀取。

在 Codex 階段的審查中，有人指出"前後用不同的筆記，就不是嚴格的比較"。所以這次用**同一份筆記、同一個請求**運行了兩次。

```
把 inbox/회의-2026-10-27-주간회의.txt 這份筆記整理成會議紀要，儲存成 notes/ 資料夾裡的新檔案。
```

| 執行 | 「與原件核對」一節 |
|---|---|
| 把 `AGENTS.md` 拿到資料夾外面時 | 沒有 |
| 把 `AGENTS.md` 放回去之後 | 有 |

來源：本指南的實操結果（2026-11-01，各 1 次）

結果：[沒有 AGENTS.md 時](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [有 AGENTS.md 時](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

看執行記錄，差別會更明顯。

- **沒有 `AGENTS.md` 時**：智慧體自己去找並打開了 `AGENTS.md`、`CLAUDE.md`、`GEMINI.md`。
- **有 `AGENTS.md` 時**：沒有另外開啟那個檔案，卻遵守了新規則。看起來是因為它作為始終開啟的規則，一開始就被放進去了。

`CLAUDE.md` 兩次都是**自己開啟讀了。** 雖然它沒有自動作為規則檔案放進去，但這似乎意味著，只要資料夾裡有，就可以當作參考資料來讀。這臺電腦上還有個人規則檔案（`~/.gemini/GEMINI.md`），也一起放進了執行裡，所以無法分辨這個行為是不是受它的影響。這是各做一次的結果。

同一份筆記，結果裡還有一處差別。Codex 把筆記裡的星期按 2026 年的日曆改了，而 Antigravity 直接用了筆記裡寫的星期（`10/27(月)`）。練習筆記裡的星期是為了故事編出來的，和真實日曆對不上。每個工具的這類判斷都不一樣，所以日期請始終和原件對照。

還有一個日期是錯的。在有 `AGENTS.md` 時生成的會議紀要裡，熱紅酒成本調查的期限，寫成了 `10/30(週五)`，而不是 `10/31(週五)`（筆記裡是"週五前"）。**即使遵守了規則那一節，日期也可能出錯。** 不要因為有「與原件核對」這一節就放心，要親自核對。

<Quiz id="ch603-test" />

## 技能由它自己挑選

智慧體每次都會看技能名稱和說明（`description`）的列表，如果有適合這件事的技能，就讀那個技能的完整指令。[^progressive] 所以不需要逐一告訴它要用技能；一定要它用的話，說出名稱就行。[^mention]

在上面的兩次執行中，我們沒有提到技能，**第一個動作卻是讀取 `.agents/skills/meeting-notes/SKILL.md`。** 它認出了 Codex 第5章裡搬過來的技能。

自己呼叫時，在應用輸入框裡輸入 `/技能名稱`。[^slash] 這和 Codex 的 `$名稱` 不同，和 Claude Code 的 `/名稱` 相同。

```
/weekly-review
```

本指南在終端裡說出名稱——"用 weekly-review 技能整理這周的回顧"——來執行。智慧體讀取了 `.agents/skills/weekly-review/SKILL.md`，用 3 份回顧筆記做出了每週回顧。

結果：[用技能做出的每週回顧](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

要和原始筆記對照的 8 個事實，**全都**在裡面。12 個贊、6,000 韓元的錯誤、4 個套餐、合計 11 個、Instagram 3 次、熱紅酒 1,800 韓元、燈泡、寫文案花了 2 小時。同一個技能，Codex 做出的回顧裡漏了 3 個（[Codex 第5章](../21-codex/05-skills.md)）。這是同樣的指令，各個工具的結果也可能不同的例子。

結果裡有好幾處 `(備忘錄裡沒有)` 的標記。這不是說事實錯了，而是說模板要求的"為什麼做得好"或"什麼時候做"，在筆記裡沒有。除了錯的和漏的，也請看看這樣的標記貼得對不對。

<Quiz id="ch603-skills" />

## 條件規則和留下學到的東西

規則變多之後，可以按檔案拆到 `.agents/rules/` 資料夾裡。這些檔案最前面必須寫明什麼時候開啟（`trigger`）。不寫或寫錯的話，會**悄悄地被丟棄。**[^trigger] 像整理工具這樣規則只有幾行，一個 `AGENTS.md` 就夠了。

規則用於"始終要遵守的事"，技能用於"分多個步驟完成的工作"。[^rule-skill] 比如，"日期寫成 10/27(週一) 的樣子"是規則，"把 3 份回顧筆記彙總，做出每週回顧"是技能。

想把對話中糾正過的內容留成規則或技能，就用 `/learn`。智慧體會提出要修改的內容，**只有我批准之後**才會寫檔案。[^learn]

<Quiz id="ch603-rules" />

## 親手試一試

1. 把整理工具資料夾作為 Antigravity 專案開啟（第2章）。什麼都不用搬。
2. 讓它整理會議筆記，看看結果最下面有沒有「與原件核對」一節。
3. 想更確定的話，把 `AGENTS.md` 暫時挪到別處，用同一個請求再做一次並比較。結束後放回去。
4. 用 `/weekly-review` 做每週回顧，對照原件數一數錯的和漏的。

**連續任務**：第4章會把 Antigravity 的許可權預設和撤銷，與 Claude Code、Codex 做比較。

## 小結

- Antigravity 讀取 `AGENTS.md`、`GEMINI.md` 和 `.agents/skills`。在 Codex 裡做的檔案原樣可用。
- 用同一份筆記測試的結果：沒有 `AGENTS.md` 是 0 → 有的時候是 1（「與原件核對」一節）。
- 技能不用說，它自己會挑選。自己呼叫時用 `/技能名稱`。
- `.agents/rules/` 裡的檔案一定要寫 `trigger`。對話中學到的內容，用 `/learn` 經批准後留下來。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| always_on | 始終開啟 | 始終處於開啟狀態的規則 |
| trigger | 觸發條件 | 決定規則什麼時候開啟的值 |
| `/learn` | 學習命令 | 提議把對話中學到的內容留成規則、技能的命令 |

<ChapterDone :chapter="603" />

下一章：[第4章. 許可權與撤銷](04-permissions-undo.md)

[^where]: Antigravity 官方文件，「Customization discovery」. "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery (確認日期 2026-11-01)
[^global]: Antigravity 官方文件，「Rules」. "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules (確認日期 2026-11-01)
[^global-skill]: Antigravity 官方文件，「Customization discovery」. "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery (確認日期 2026-11-01)
[^names]: Antigravity 官方文件，「Rules」. "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules (確認日期 2026-11-01)
[^always]: Antigravity 官方文件，「Rules」. "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules (確認日期 2026-11-01)
[^reread]: Antigravity 官方文件，「Customization discovery」. "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery (確認日期 2026-11-01)
[^progressive]: Antigravity 官方文件，「Agent skills」. "On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills (確認日期 2026-11-01)
[^mention]: Antigravity 官方文件，「Agent skills」. "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills (確認日期 2026-11-01)
[^slash]: Antigravity 官方文件，「Agent skills」. "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills (確認日期 2026-11-01)
[^trigger]: Antigravity 官方文件，「Rules」. "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules (確認日期 2026-11-01)
[^rule-skill]: Antigravity 官方文件，「Rules」. "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules (確認日期 2026-11-01)
[^learn]: Antigravity 官方文件，「Slash commands overview」. "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands (確認日期 2026-11-01)

// zh-hant text for antigravity (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const ANTIGRAVITY: Record<string, QuestionText> = {
  "ch601-surfaces": {
    prompt: "Antigravity 應用和終端程式 agy 的關係，哪項是對的？",
    choices: [
      "應用只用 Gemini，agy 只用 Claude 模型",
      "兩者執行的是同一個代理，所以大部分功能都是相同的",
      "agy 是把應用的介面原樣複製過來顯示的工具",
      "應用和 agy 是不同公司做的互不相干的產品",
    ],
    explain: "官方文件說明，應用和 CLI 執行的是同一個代理，所以大部分功能在兩邊都能用。",
  },
  "ch601-plans": {
    prompt: "用免費的 Google 賬號使用 Antigravity，會有什麼不同？",
    choices: [
      "功能都能用，但用量按周重新補滿",
      "定時任務和 CLI 之類的功能只在付費套餐裡開放，免費賬號只能聊天",
      "一天正好只能問十個問題",
      "不能儲存結果檔案，只能在螢幕上看",
    ],
    explain: "所有套餐都能使用全部功能。免費賬號的用量按周重新補滿。",
  },
  "ch601-models": {
    prompt: "2026 年 11 月 2 日之後，免費賬號做實操時，這份指南介紹用哪個模型？",
    choices: [
      "Gemini 3.8 Flash",
      "Gemini 4 Argon",
      "Claude Opus 4.6",
      "Claude Sonnet 5.5",
    ],
    explain: "原來免費賬號可以選的 Claude 4.6 系列在 11 月 2 日下架，Gemini 4 Argon 和 Claude Sonnet 5.5 需要 Pro 以上。",
  },
  "ch601-compare": {
    prompt: "把在 Codex 階段做好的“整理工具”資料夾用 Antigravity 開啟時，需要搬動什麼？",
    choices: [
      "要把 AGENTS.md 改名為 GEMINI.md",
      "要把技能搬到 .gemini/skills 資料夾",
      "要把 CLAUDE.md 刪掉，Antigravity 才能開啟",
      "沒有什麼特別需要搬動的東西，原樣直接開啟它就可以了，不用改名",
    ],
    explain: "Antigravity 會讀取 AGENTS.md 和 .agents/ 資料夾。檔名和位置都和 Codex 裡做的一樣。",
  },
  "ch602-install": {
    prompt: "登入 Antigravity 應用的方法，哪項是對的？",
    choices: [
      "不用登入，直接就能用",
      "要在應用裡另外建立新的賬號和密碼，還要完成郵箱驗證之後才能夠用",
      "用 ChatGPT 賬號登入",
      "點 Sign in，在瀏覽器裡用個人 Google 賬號登入",
    ],
    explain: "點 Sign in 後會開啟瀏覽器，用個人 Google 賬號（Free、Pro、Ultra）登入。",
  },
  "ch602-project": {
    prompt: "在 Antigravity 應用裡開啟“整理工具”資料夾，怎麼做？",
    choices: [
      "把資料夾壓縮後上傳到對話方塊",
      "資料夾必須先做成 Git 倉庫，之後才能新增到 New Project 裡",
      "只要把資料夾名稱直接寫進對話方塊就行",
      "在 New Project 裡用 Add Folder 選擇資料夾",
    ],
    explain: "代理在專案裡工作。透過 New Project → Add Folder 選擇資料夾，普通資料夾也可以。",
  },
  "ch602-plan": {
    prompt: "第一次交給它的事，這份指南建議用哪種方式？",
    choices: [
      "用 Planning mode 拿計劃，讀完點 Proceed",
      "改成 Always proceed，不要計劃書，不停地一路執行到底",
      "用 Fast mode，不做計劃直接執行",
      "把許可權改成 Turbo，許可所有命令",
    ],
    explain: "Planning mode 會先制定計劃，讀完計劃書之後點 Proceed 再往下進行。剛開始還建議同時用 Request review。",
  },
  "ch602-first": {
    prompt: "在對話方塊裡用 @ 指到某個檔案，會怎麼樣？",
    choices: [
      "檔案路徑會傳過去，代理在需要時去讀",
      "檔案會被自動刪除",
      "檔案會被移到別的資料夾",
      "指到的檔案的全部內容原樣貼上到對話方塊裡，顯得很長",
    ],
    explain: "提到檔案時，內容並不會被貼上進去。只傳路徑，代理在需要時再去讀那個檔案。",
  },
  "ch602-review": {
    prompt: "在 Review 窗口裡，只想看代理在這次對話裡改過的檔案，該選什麼？",
    choices: [
      "Staged Changes",
      "Uncommitted",
      "Agent Edits",
      "Discard",
    ],
    explain: "預設檢視 Uncommitted 連我自己改的也一起顯示。Agent Edits 只顯示代理在這次對話裡改過的檔案。",
  },
  "ch603-where": {
    prompt: "Antigravity 把哪個名字當作這個資料夾的規則檔案來讀，哪項是對的？",
    choices: [
      "只讀 CLAUDE.md",
      "不讀任何規則檔案，只照對話方塊裡隨時說出來的指示去做",
      "只讀 README.md",
      "讀 AGENTS.md 和 GEMINI.md",
    ],
    explain: "Antigravity 讀取 AGENTS.md、GEMINI.md 和 .agents/rules/。CLAUDE.md 不在規則檔案的列表裡。",
  },
  "ch603-test": {
    prompt: "這份指南是怎麼測試 AGENTS.md 有沒有被讀取的，哪項是對的？",
    choices: [
      "問代理有沒有讀過 AGENTS.md",
      "把 AGENTS.md 儲存了好幾次再執行",
      "用同一份筆記，沒有 AGENTS.md 時執行一次，有時執行一次，來對比",
      "像會議筆記和學習筆記這樣，讓它各整理一份不同的筆記，然後再去對比這兩個結果",
    ],
    explain: "按 Codex 階段評審指出的，用同一份筆記、同樣的請求運行了兩次，只在 AGENTS.md 裡才有的小節，沒有時是 0，有時是 1。",
  },
  "ch603-skills": {
    prompt: "在 Antigravity 應用裡直接呼叫 weekly-review 技能，方法是什麼？",
    choices: [
      "$weekly-review",
      "輸入 /weekly-review",
      "輸入 @weekly-review 後回車",
      "#weekly-review",
    ],
    explain: "在應用輸入框裡輸入 /技能名稱。它和 Codex 的 $名稱不同，和 Claude Code 的 /名稱相同。",
  },
  "ch603-rules": {
    prompt: "在 .agents/rules/ 資料夾裡建立規則檔案時，必須遵守什麼？",
    choices: [
      "檔名全部用大寫",
      "在檔案最前面寫上 trigger 值",
      "一個檔案裡只寫一行規則",
      "把規則檔案深深地放進 rules 資料夾下的子資料夾裡，按種類整理",
    ],
    explain: "rules/ 裡的檔案，最前面必須寫 trigger。沒寫或寫錯，就會悄無聲息地被丟棄。",
  },
  "ch604-presets": {
    prompt: "在 Antigravity 應用的許可權預設中，不受任何限制地執行所有命令的是哪個？",
    choices: [
      "Request Review",
      "Inherit Global",
      "Default",
      "Turbo（無限制）",
    ],
    explain: "Turbo 沒有圍欄，所有命令都不問就執行，並且能讀寫整臺電腦。整理筆記不需要它。",
  },
  "ch604-sandbox": {
    prompt: "在應用的 Default 預設和終端（agy）裡，命令圍欄（沙盒）預設是怎樣的？",
    choices: [
      "兩邊預設都是關閉的",
      "應用和終端預設都開著圍欄，並且都被禁止聯網",
      "應用的 Default 裡是開的，終端預設是關的",
      "應用的 Default 裡是關的，而終端預設是開著的",
    ],
    explain: "應用的 Default 和 Auto 預設裡圍欄是開著的，並且禁止聯網（在 Request Review 和 Turbo 裡是關的）。終端（agy）預設是關的。",
  },
  "ch604-undo": {
    prompt: "點選 Review 窗口裡的 Discard unstaged changes 時，為什麼要小心？",
    choices: [
      "因為 AGENTS.md 會變成 GEMINI.md",
      "因為一點下去，Google 賬號就會退出登入，需要重新登入",
      "因為它不經確認就直接生效，甚至可能刪掉新檔案",
      "因為網路連線會斷開",
    ],
    explain: "丟棄不經確認就直接生效，連沒有記錄過的新檔案也會從磁碟上刪掉。交給它之前，先用 Git 記錄一下。",
  },
  "ch605-plan": {
    prompt: "用 /plan 和普通請求有什麼不同？",
    choices: [
      "到網上找來類似的計劃示例，再原封不動地照著它修改檔案",
      "更快地修改檔案",
      "刪除對話，重新開始",
      "在修改檔案之前先檢視資料夾，並先展示需要決定的事項",
    ],
    explain: "普通請求會馬上開始修改檔案，而 /plan 會先檢視並展示需要決定的事項，再用 Proceed 去執行。",
  },
  "ch605-schedule": {
    prompt: "想讓每週五的每週回顧跨越對話持續執行。該用什麼？",
    choices: [
      "/schedule — 只在建立它的對話裡執行的計時器",
      "Automations — 重啟應用後仍會保留的定時",
      "/goal — 不做完不停下的目標模式，每週都會自動重新開始",
      "/browser — 操控 Chrome 的子代理",
    ],
    explain: "/schedule 屬於建立它的那個對話。要跨對話持續執行的事，用應用側邊欄裡的 Automations。",
  },
  "ch605-browser-goal": {
    prompt: "使用 /goal 時，這份指南建議怎麼做？",
    choices: [
      "把許可權改成 Turbo，在達成目標期間不再詢問許可",
      "清楚寫明“做完的標準”，別含糊",
      "改成 Fast mode",
      "把 Review 視窗關掉",
    ],
    explain: "/goal 沒有重複次數的上限，可能消耗很多用量。要清楚寫明做完的標準。許可權和審查設定保持不變。",
  },
  "ch605-remote": {
    prompt: "用 Remote Control 從其他裝置操控時，實際的工作在哪裡進行？",
    choices: [
      "在其他裝置裡單獨進行",
      "在 Google 雲端的空工作區裡進行",
      "只在網頁瀏覽器裡進行",
      "用我電腦裡的檔案和工具進行",
    ],
    explain: "即使是遠端使用，代理也是用我電腦裡的檔案、工具和登入資訊工作。在其他裝置上用同一個 Google 賬號登入。",
  },
  "ch606-install": {
    prompt: "第一次執行 agy 時確認的“Workspace trust”是什麼？",
    choices: [
      "登記“信任這個資料夾”的步驟",
      "修改 Google 賬號密碼的步驟",
      "換成付費套餐的步驟",
      "把資料夾上傳到雲端的步驟",
    ],
    explain: "第一次執行時，在代理檢視檔案之前，先確認是否信任這個資料夾。",
  },
  "ch606-modes": {
    prompt: "關於 agy 的 accept-edits 模式，哪種說法是對的？",
    choices: [
      "所有命令和檔案修改都不問就直接執行，圍欄也會一起關掉",
      "只自動許可聯網",
      "檔案只讀，絕不修改",
      "工作資料夾裡的檔案修改自動進行，命令仍然會詢問",
    ],
    explain: "accept-edits 會自動許可在工作資料夾裡建立、修改檔案，但在執行終端命令之前仍會詢問。",
  },
  "ch606-headless": {
    prompt: "在 agy -p 裡遇到需要許可的操作，會怎樣？",
    choices: [
      "在螢幕上彈出視窗來徵求許可",
      "悄悄地被拒絕，執行繼續，並以退出碼 0 結束",
      "重新啟動電腦",
      "以錯誤碼 1 立刻停止，對什麼被攔住了不做任何說明",
    ],
    explain: "因為沒有詢問的視窗，所以按策略處理。沒得到許可的操作會被悄悄拒絕，退出碼是 0，提示出現在 stderr 裡。",
  },
  "ch606-pitfalls": {
    prompt: "agy -p 以成功（退出碼 0）結束，卻沒有結果檔案。按這份指南的經驗，先做什麼？",
    choices: [
      "讀 stderr 裡的拒絕提示，確認是什麼被攔住了",
      "重新建立 Google 賬號",
      "直接加上 --dangerously-skip-permissions",
      "既然成功了，就等檔案過一會兒生成",
    ],
    explain: "曾經出現過：shell 命令被拒絕，什麼都沒建立，卻以 0 結束。讀拒絕提示，再透過模式或請求的措辭縮小範圍來解決。",
  },
  "ch606-resume": {
    prompt: "在 agy 裡，直接接著這個資料夾裡的最後一次對話，怎麼做？",
    choices: [
      "agy -c（繼續）",
      "agy -p",
      "agy --version",
      "agy --sandbox",
    ],
    explain: "用 agy -c 接上那個資料夾的最後一次對話，也可以用 /resume 選擇後接著聊。對話記錄按執行時所在的資料夾分開。",
  },
  "ch607-cost": {
    prompt: "在 Pro 套餐裡，想避免在不知不覺中扣掉 AI 積分，該選什麼？",
    choices: [
      "積分自動使用設為 Never",
      "積分自動使用設為 Always",
      "許可權設為 Turbo",
      "Automations 設為每小時",
    ],
    explain: "Never 表示基本用量用完後不會自動使用積分，而是等待重新補滿。",
  },
  "ch607-data": {
    prompt: "決定我的對話是否用於改進模型的設定在哪裡？",
    choices: [
      "在 AGENTS.md 最上面寫上“禁止訓練”這幾個字，對話就會照樣不被用於訓練",
      "Review 窗口裡的 Discard 按鈕",
      "/goal 命令的選項",
      "Settings 的 Account 裡的 Enable Telemetry",
    ],
    explain: "開著 Enable Telemetry，對話就會用於改進 Antigravity 和模型。資料收集可以隨時在 Settings 裡關掉。",
  },
  "ch607-injection": {
    prompt: "Antigravity 沒有照隱藏指令的筆記去做（1 次實驗）。該怎麼看待這個結果？",
    choices: [
      "以後任何文件都可以不用確認，直接交給它",
      "許可權設成 Turbo，隱藏指令就會被攔住",
      "只是一次的結果，不是保證，所以別人的文件要更仔細地檢查結果",
      "Antigravity 被設計成絕對不會被隱藏指令騙到，所以不用另外確認",
    ],
    explain: "三個工具都各攔住了一次，但這不是保證。放入別人的文件時，要把結果與原件對照。",
  },
  "ch607-choose": {
    prompt: "三個工具共用“整理工具”資料夾時，要修改規則，該怎麼做？",
    choices: [
      "新建 GEMINI.md，把其餘的刪掉",
      "CLAUDE.md 和 AGENTS.md 一起改",
      "只改 CLAUDE.md，Codex 和 Antigravity 也會讀那個檔案，照樣遵守",
      "規則每次都在對話裡用話語告訴它",
    ],
    explain: "Claude Code 把 CLAUDE.md 當作規則來讀，Codex 和 Antigravity 則讀 AGENTS.md。所以要兩個檔案一起改。",
  },
}

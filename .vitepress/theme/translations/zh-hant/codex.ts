// zh-hant text for codex (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const CODEX: Record<string, QuestionText> = {
  "ch501-modes": {
    prompt: "想在 ChatGPT 桌面應用裡修改資料夾裡的檔案，還想親眼看到到底改了什麼。該選哪種方式？",
    choices: [
      "Chat — 提問並得到回答、一起打磨想法的對話方式",
      "Work — 隱藏 Git 或命令之類的技術資訊，只展示完成的成果的方式",
      "Codex — 連改動內容之類的技術資訊也展示出來的方式",
      "網頁瀏覽器裡的臨時聊天",
    ],
    explain: "Work 和 Codex 能做的事有重疊，但 Codex 會展示 diff（改動內容）之類的技術資訊。所以更便於把結果和原件對照。",
  },
  "ch501-compare": {
    prompt: "你把在 Claude Code 裡用的規則檔案 CLAUDE.md 原樣留在“整理工具”資料夾裡，然後打開了 Codex。會怎麼樣？",
    choices: [
      "Codex 會自動找到資料夾裡的 CLAUDE.md，讀取並原樣遵守其中的規則",
      "Codex 讀 AGENTS.md，所以 CLAUDE.md 放著不動就不會被讀",
      "Codex 把 CLAUDE.md 刪掉，再用同樣的內容新建一個 AGENTS.md",
      "Codex 完全不使用規則檔案，只照對話裡說的去做",
    ],
    explain: "Codex 的規則檔名是 AGENTS.md。其他沒有登記的名字會被忽略，所以遷移整理工具時，要先改這個檔案。",
  },
  "ch501-where": {
    prompt: "免費（Free）賬號的 ChatGPT 應用裡看不到 Codex。哪種說明最合適？",
    choices: [
      "Free 和 Go 是逐步開放的，可能還沒輪到",
      "因為 Codex 是 Windows 專用的",
      "Codex 被規定在免費賬號裡無論如何都不能用",
      "把應用刪掉重新安裝，無論是什麼賬號，一定都會出現",
    ],
    explain: "官方的價格說明寫的是，Free 和 Go 裡的 Codex 是“在桌面應用中提供輕量模型、逐步開放”。各賬號會依次開放。",
  },
  "ch502-install": {
    prompt: "為了使用 Codex，第一步該做什麼？哪項是對的？",
    choices: [
      "到應用商店裡另外找 Codex 專用應用來安裝，再建立一個新賬號",
      "安裝 ChatGPT 桌面應用，用 ChatGPT 賬號登入",
      "開啟終端，先把 Codex 命令列表全部背下來",
      "先註冊 GitHub 賬號，並連線一個倉庫",
    ],
    explain: "Codex 就在 ChatGPT 桌面應用裡。安裝應用，用 ChatGPT 賬號登入後，選擇 Codex 即可。",
  },
  "ch502-open": {
    prompt: "想使用 Codex 裡檢視改動內容的視窗。事先在“整理工具”資料夾裡做好什麼比較好？",
    choices: [
      "把資料夾名稱改成英文",
      "把整個資料夾上傳到雲端儲存",
      "把資料夾做成 Git 倉庫",
      "把資料夾裡的筆記全部刪掉，變成空資料夾",
    ],
    explain: "審閱視窗（檢視改動內容）只有在 Git 倉庫裡才能開啟。不是 Git 的話，應用會問要不要建一個。",
  },
  "ch502-first": {
    prompt: "Codex 整理的會議記錄裡，日期的星期和原始筆記不一樣。怎麼做比較好？",
    choices: [
      "是 Codex 自己改的，所以不用確認，直接相信並使用",
      "把會議記錄刪掉，以後不再讓 Codex 做整理",
      "對照原件，如果不是想要的方式，就再拜託一次",
      "星期不重要，略過",
    ],
    explain: "看起來像模像樣的結果，也可能有遺漏或錯誤。尤其是 Codex 自己改動的地方，要和原件對照，不是想要的方式就再拜託一次。",
  },
  "ch503-why": {
    prompt: "沒有 AGENTS.md，Codex 卻遵守了“（筆記裡沒有）”這條規則。在這份指南的實操裡，原因是什麼？",
    choices: [
      "因為 Codex 在螢幕上看不見的地方偷偷開啟並讀了 CLAUDE.md",
      "因為同樣的規則也寫在了模板說明裡",
      "因為 Codex 事先就知道使用者所有的整理規則",
      "因為它到網上找到了規則",
    ],
    explain: "Codex 沒有開啟 CLAUDE.md，只讀了模板。模板說明裡有同樣的規則，所以遵守了，但只存在於 CLAUDE.md 裡的規則它並不知道。",
  },
  "ch503-move": {
    prompt: "為了讓 Claude Code 和 Codex 共用同一個資料夾，你建立了 AGENTS.md，同時也保留了 CLAUDE.md。以後要注意什麼？",
    choices: [
      "修改規則時，兩個檔案一起改",
      "只改 CLAUDE.md，Codex 也會跟著變",
      "只改 AGENTS.md，Claude Code 也會跟著變",
      "兩個檔案的內容必須不同",
    ],
    explain: "兩個工具各讀各自的檔案。只改一邊，兩個工具就會按不同的規則工作，所以要一起改。",
  },
  "ch503-test": {
    prompt: "想確認 AGENTS.md 是否真的被讀取了。這份指南用的是什麼方法？",
    choices: [
      "問 Codex“你讀過 AGENTS.md 了嗎？”，並直接相信它的回答",
      "把 AGENTS.md 重複儲存好幾次，確保它被讀取",
      "把 AGENTS.md 的檔名全部改成大寫，讓它更顯眼",
      "只在 AGENTS.md 裡放一條新規則，在新對話裡看它有沒有被遵守",
    ],
    explain: "別處沒有的規則被遵守了，就可以認為讀取了那個檔案。這次實操裡，AGENTS.md 之前遵守 0 次，之後遵守 1 次（各 1 回，筆記種類不同）。",
  },
  "ch503-order": {
    prompt: "~/.codex/AGENTS.md 和“整理工具”資料夾裡的 AGENTS.md 說的不一樣。哪一個優先？",
    choices: [
      "個人設定 ~/.codex/AGENTS.md 總是先適用，所以它優先",
      "兩個檔案中內容更長、檔案更大的優先",
      "離當前資料夾更近的資料夾裡的 AGENTS.md 優先",
      "兩個檔案中先建立的那個始終優先",
    ],
    explain: "Codex 把它們從上到下連起來讀，離當前資料夾更近的檔案排在後面，比前面的指示優先。",
  },
  "ch503-import": {
    prompt: "官方文件建議把必須遵守的整理規則放在哪裡？",
    choices: [
      "只放在記憶（Memories）裡",
      "寫進 AGENTS.md",
      "每次都貼上到對話的第一條訊息裡",
      "做成分享連結放著",
    ],
    explain: "官方文件只把記憶當作幫助回想的輔助，不要把它當作必須遵守的規則的唯一依據。必須遵守的規則放進 AGENTS.md。",
  },
  "ch504-modes": {
    prompt: "第一次使用 Codex 時，官方文件對大多數事情建議用哪種許可權？",
    choices: [
      "Full access — 不受限制地執行",
      "Ask for approval",
      "Approve for me — 由自動審查來判斷",
      "把許可權選單隱藏起來",
    ],
    explain: "Ask for approval 在工作資料夾之內自己幹活，越過這個邊界之前會停下來詢問。官方文件建議大多數事情都從它開始。",
  },
  "ch504-sandbox": {
    prompt: "即使在工作資料夾裡，預設狀態下 Codex 也無法寫入的資料夾是哪個？",
    choices: [
      "notes 資料夾",
      "inbox 資料夾",
      "templates 資料夾",
      ".agents 資料夾",
    ],
    explain: "工作資料夾裡的 .git、.agents、.codex 在預設狀態下只能讀取。存放技能的 .agents 也屬於這裡，移動時可能需要許可。",
  },
  "ch504-review": {
    prompt: "想在審閱窗口裡，只看 Codex 最後一次回答所改動的內容。該選什麼？",
    choices: [
      "Last turn",
      "Unstaged — 所有尚未記錄的改動",
      "Staged — 已挑出來準備記錄的改動",
      "Branch",
    ],
    explain: "審閱視窗預設顯示尚未記錄的改動（Unstaged）。選 Last turn，就只看最近一次回答的改動。",
  },
  "ch504-undo": {
    prompt: "點選審閱窗口裡的 Revert all 之前，為什麼要小心？",
    choices: [
      "因為點了 Revert all，ChatGPT 賬號和對話記錄會一起被刪除",
      "因為審閱窗口裡也包含我自己修改的內容",
      "因為網路會斷開",
      "因為點了 Revert all，資料夾裡的 AGENTS.md 也會一起被刪掉",
    ],
    explain: "審閱窗口裡不僅有 Codex 的改動，還有我的改動和其他未記錄的改動。只想丟棄一部分時，以檔案或程式碼塊為單位撤銷。",
  },
  "ch505-where": {
    prompt: "在 Codex 裡，“整理工具”資料夾專用技能的存放位置和呼叫方法，哪項是對的？",
    choices: [
      "放在 .claude/skills 資料夾裡，呼叫時用 /名稱",
      "放在 .agents/skills 裡，用 $名稱 呼叫",
      "放在 templates 資料夾裡，呼叫時用 @名稱",
      "放在 notes 資料夾裡，呼叫時用 #名稱",
    ],
    explain: "Codex 在 .agents/skills 裡查詢技能，呼叫時用 $名稱。SKILL.md 的格式和 Claude Code 相同。",
  },
  "ch505-move": {
    prompt: "你請 Codex 把技能複製到 .agents/skills，它回答說“因為是隻讀，被攔下了”。合適的應對是什麼？",
    choices: [
      "把許可權改成 Full access，之後也不再改回來",
      "放棄移動技能，改成每次自己寫很長的請求",
      "確認它要寫什麼，然後許可，或者自己輸入命令",
      "把 AGENTS.md 刪掉",
    ],
    explain: ".agents 是受保護的資料夾，所以被攔住了。確認它要寫什麼後許可，或者自己執行 Codex 告訴你的命令就行。",
  },
  "ch505-call": {
    prompt: "用 $weekly-review 做出來的每週回顧，數字全都對，但漏掉了熱紅酒成本 1,800 韓元。這份指南建議接下來怎麼做？",
    choices: [
      "數字都對，所以漏掉的內容也不用另外確認，直接拿來使用",
      "把技能刪掉，以後每次都從頭重新寫很長的請求",
      "漏掉的也要確認，如果反覆漏掉，就在技能里加一行規則",
      "筆記只靠手工整理",
    ],
    explain: "不僅要檢查錯的，也要檢查漏的。不該漏的內容反覆被漏掉，就在技能里加一行規則來修正。",
  },
  "ch505-create": {
    prompt: "打算安裝一個沒見過的外掛。官方文件強調的是什麼？",
    choices: [
      "選名字短的",
      "只挑最新出的外掛，不用做任何確認就直接安裝它",
      "外掛一次裝得越多，以後越方便",
      "外掛的鉤子在執行前要先審查，再判斷是否可信",
    ],
    explain: "外掛裡可能帶有自動執行的鉤子。官方文件要求在它執行之前先審查，並判斷是否可信。",
  },
  "ch506-schedule": {
    prompt: "你設定了每週五在“整理工具”資料夾裡生成每週回顧的定時。定時要執行，需要什麼？",
    choices: [
      "電腦開著，並且應用在執行",
      "手機要開著",
      "要建一個 GitHub 倉庫，把“整理工具”資料夾上傳上去",
      "每次定時執行時，都要把許可權改成 Full access",
    ],
    explain: "使用我電腦裡資料夾的定時，只有在電腦開著、應用正在執行時才會執行。",
  },
  "ch506-cloud": {
    prompt: "關於 Codex 雲端任務，哪種說法是對的？",
    choices: [
      "我電腦裡的檔案和瀏覽器登入狀態會自動一起轉過去",
      "需要已釋出的環境，我的檔案不會轉過去",
      "我的電腦一關機或休眠，雲端任務也會立刻停止",
      "只限免費賬號使用",
    ],
    explain: "雲端任務從已釋出的環境開始，我電腦裡的檔案、正在執行的程式、瀏覽器登入狀態都不會轉過去。不過電腦休眠期間任務也會繼續。",
  },
  "ch506-mobile": {
    prompt: "把手機連線起來，用來操控我電腦上的 Codex 時，官方文件強調的是什麼？",
    choices: [
      "把家人的手機全都連上",
      "先從公用電腦連起",
      "只連線我自己擁有的、可信的裝置",
      "連線之後改成 Full access",
    ],
    explain: "已連線的手機可以操控我電腦上的 Codex。所以只連線我自己擁有的、可信的裝置。",
  },
  "ch507-install": {
    prompt: "在終端裡執行 Codex CLI 安裝命令之前，必須確認什麼？",
    choices: [
      "命令是不是很短",
      "命令是不是和官方文件上寫的一模一樣",
      "命令裡有沒有韓文字元，要一個一個地檢查",
      "連續執行命令兩次會不會有問題",
    ],
    explain: "安裝命令會直接執行從網上下載的指令碼。確認和官方文件上寫的一模一樣後再執行。",
  },
  "ch507-exec": {
    prompt: "想用 codex exec 讓它修改檔案，卻什麼都沒改。最合適的原因是什麼？",
    choices: [
      "預設是隻讀，所以要加 --sandbox workspace-write",
      "codex exec 無論加什麼選項，都被設計成了絕對不能修改任何一個檔案，也不能執行命令",
      "沒有聯網的話，codex exec 一個檔案也改不了",
      "因為 AGENTS.md 太長，Codex 在讀取請求之前就停住了",
    ],
    explain: "codex exec 預設是隻讀。想讓它修改檔案，就加上 --sandbox workspace-write。",
  },
  "ch507-commands": {
    prompt: "在 Codex CLI 的互動介面裡，想檢視對話資訊和剩餘額度，用哪個命令？",
    choices: [
      "/import",
      "/resume",
      "/permissions",
      "/status（狀態）",
    ],
    explain: "/status 顯示對話資訊和剩餘額度。/permissions 是許可權，/import 是匯入，/resume 是繼續。",
  },
  "ch508-usage": {
    prompt: "用 ChatGPT Work 做了幾份大報告之後，能用於 Codex 的量變少了。為什麼？",
    choices: [
      "因為 Work 和 Codex 共用同一份用量",
      "因為只要用過一次 Work，當天 Codex 就會自動關閉",
      "因為 Work 做的報告儲存在 Codex 資料夾裡，佔了空間",
      "因為 Work 是免費的",
    ],
    explain: "ChatGPT Work 與 Codex 共用同樣的費用、積分和使用額度。",
  },
  "ch508-data": {
    prompt: "你用 Plus 個人賬號使用 Codex。想確認對話會不會被用於改進模型，該看哪裡？",
    choices: [
      "Codex 在任何套餐裡都不用於訓練，所以不用確認",
      "在 AGENTS.md 裡寫上禁止訓練",
      "檢視 ChatGPT 賬號設定和 OpenAI 幫助",
      "點審閱窗口裡的 Revert all，對話就會從訓練中排除",
    ],
    explain: "資料規則由登入方式決定。“預設不用於訓練”只標註在 Business、Enterprise、API 金鑰上，個人套餐的訓練設定在 Codex 文件裡沒有寫。所以請到 ChatGPT 賬號設定和 OpenAI 幫助裡確認。",
  },
  "ch508-injection": {
    prompt: "Codex 沒有照一份帶有隱藏指令的筆記去做（1 次實驗）。該怎麼看待這個結果？",
    choices: [
      "以後別人發來的文件、網頁不用確認，直接交給它去處理",
      "只是一次的結果，不是保證，所以要更仔細檢查結果",
      "只有對 Codex 不管用",
      "只要開著網頁搜尋，隱藏指令的風險就會完全消失",
    ],
    explain: "攔住了一次，並不保證每次都攔得住。放入別人的文件時，要把結果和原件對照，並把許可權和聯網訪問收得窄一些。",
  },
  "ch508-choose": {
    prompt: "打算同時使用 Claude Code 和 Codex。這份指南建議的“整理工具”資料夾是什麼樣子？",
    choices: [
      "每個工具各建一套筆記、模板、成果資料夾，互不混在一起",
      "把 CLAUDE.md 刪掉",
      "技能只放在一個工具裡，另一個工具用很長的請求代替",
      "筆記共用，規則和技能兩邊都放，並一起修改",
    ],
    explain: "兩個工具做的事幾乎一樣，所以讓它們都能用同一個資料夾會比較方便。不過規則和技能要兩邊一起修改。",
  },
}

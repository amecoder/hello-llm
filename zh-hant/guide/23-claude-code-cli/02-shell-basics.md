# 第2章 終端基礎

<Badge type="tip" text="必讀" /> 想跟著這個階段學下去，一定要讀這一章。

> **一句話總結**：終端裡真正必需的命令只有幾個。用 `pwd` 看自己在哪裡，用 `ls` 看有什麼，用 `cd` 來回移動。本章最後會建好練習資料夾，並放入筆記。

本章講的不是 Claude Code，而是終端本身的基本用法。Mac 和 Linux 用同樣的命令。Windows PowerShell 不同的地方，會並排寫出來。這些 Windows 命令沒有實際執行過。

不需要背下來。把這一頁開在旁邊，跟著做就行。用上兩三次，手就記住了。

## 看懂提示符

開啟終端，最前面會出現幾個字，游標在閃。這叫**提示符**（Prompt）。它表示"我在等你輸入命令"。寫給 AI 的文字也叫 Prompt（提示詞），但這裡指的是終端的等待標誌。

樣子因電腦而異。下面是一個叫瑞妍的人的例子。

```text
seoyeon@macbook ~ %
seoyeon@laptop:~$
PS C:\Users\seoyeon>
```

第一行是 Mac，第二行是 Linux，第三行是 Windows PowerShell 常見的樣子。看法很簡單。先是使用者名稱和電腦名，然後是當前所在的資料夾，最後是 `%`、`$`、`>` 這樣的符號。

**最後的這個符號不是你要輸入的字。** 在符號後面輸入命令，按 Enter 就會執行。結果出來後，提示符再次出現，就說明已經準備好接收下一條命令了。

命令要在英文輸入狀態下輸入。如果 `pwd` 變成了別的文字，按切換輸入法的鍵（中文輸入法裡通常是 `Shift`）再輸入一次。Mac 通常用 `Caps Lock` 或 `Ctrl + Space` 切換。

有些命令什麼也不顯示。這不是出錯。多數情況下是悄悄成功了。

<Quiz id="ch802-prompt" />

## 現在在哪裡、有什麼——pwd 和 ls

終端始終**在某一個資料夾裡**。就像在資源管理器或 Finder 裡打開了一個資料夾。

`pwd` 會告訴你當前所在的資料夾。它是"print working directory（顯示工作資料夾）"的縮寫。

```bash
pwd
```

如果是 Mac，會顯示成這樣。名字因你的電腦而不同。

```text
/Users/seoyeon
```

`ls` 顯示當前資料夾裡有什麼。它是"list（列表）"的縮寫。

```bash
ls
```

這兩個命令在 PowerShell 裡也能用同樣的名字。只是顯示的樣子有點不同。

這兩個命令什麼都不會改變。覺得自己迷路了，隨時都可以輸入看看。

<Quiz id="ch802-where" />

## 路徑和 ~

**路徑**（Path）是檔案或資料夾的地址。Mac 和 Linux 用 `/` 分隔資料夾，Windows 用 `\`。在韓語鍵盤和介面上，`\` 可能顯示為 `₩`。它們是同一個字元。

| 作業系統 | 自己的主資料夾路徑示例 |
|---|---|
| Mac | `/Users/seoyeon` |
| Linux | `/home/seoyeon` |
| Windows | `C:\Users\seoyeon` |

**主資料夾**（Home 資料夾）是你帳號的起始資料夾。開啟終端，通常就從這裡開始。這個地址的簡寫符號是 `~`（波浪號）。所以 `~/hello-ai-practice` 的意思是"我的主資料夾裡的 hello-ai-practice（hello-ai 練習）資料夾"。[^win-home]

寫路徑有兩種方式。

- **完整地址**：像 `~/hello-ai-practice/terminal` 這樣，在哪裡輸入都指向同一個地方。
- **以當前位置為準**：寫成 `inbox`，就是"當前資料夾裡的 inbox"。

`..` 表示上一級資料夾。`.` 表示當前資料夾。

如果名字裡有空格，要像 `"會議 筆記"` 這樣用引號括起來。因為終端會把空格理解為"下一個詞從這裡開始"。本課程的資料夾名裡不放空格，也是這個原因。

<Quiz id="ch802-path" />

## 怎麼讀命令

命令由幾個片語成。詞和詞之間用空格分開。即使是第一次見的命令，按順序拆開來讀，也能看出意思。

```bash
ls -la ~
```

這個例子是 Mac·Linux 的命令。在 Windows PowerShell 裡寫成 `ls -Force ~`。

| 片段 | 名稱 | 意思 |
|---|---|---|
| `ls` | 命令名 | 做什麼：看列表 |
| `-la` | 選項 | 怎麼做：連隱藏檔案一起詳細顯示 |
| `~` | 對象 | 對哪裡做：主資料夾 |

選項是改變命令動作的開關。Mac·Linux 有兩種樣子。

- **短選項**：一個 `-` 加一個字母。`-l` 和 `-a` 可以合起來寫成 `-la`。
- **長選項**：兩個 `--` 加一個單詞。像 `--version` 這樣，意思一看就懂。

PowerShell 是像 `-Force` 這樣，一個 `-` 加一個單詞。即使意思相同，選項名也可能不同。所以上面的 `ls -la ~` 在 PowerShell 裡寫成 `ls -Force ~`。`claude` 和 `git` 的選項在哪個作業系統上都一樣。

選項後面有時還會跟一個值。比如 `--max-turns 10` 的意思是"次數上限是 10"。這個選項現在不用記。

用引號括起來的部分是一個整體。在 `claude -p "總結一下 notes 裡的筆記"` 裡，引號裡面即使有空格，也算作一個詞。

不需要記住所有命令。本課程的命令都彙總在[命令詞典](command-reference.md)裡。看到陌生的片段就去查一下。

<Quiz id="ch802-anatomy" />

## 移動、新建、複製——cd、mkdir、cp

`cd` 用來移動到別的資料夾。它是"change directory（切換資料夾）"的縮寫。下面的練習資料夾會在本章最後建好。現在只讀一讀就行。

```bash
cd ~/hello-ai-practice
cd ..
cd ~
```

從上往下依次是：去練習資料夾、往上走一級、回到主資料夾。在 PowerShell 裡也能原樣使用。

`mkdir` 用來新建資料夾。它是"make directory（建立資料夾）"的縮寫。在 Mac 和 Linux 上寫成 `mkdir -p`，就會把中間的資料夾也一次建好。PowerShell 的 `mkdir` 不加 `-p` 也會這樣做。實際命令在本章最後的練習裡輸入。

`cp` 用來複制檔案。它是"copy（複製）"的縮寫。按**複製什麼、複製到哪裡**的順序寫。

不太好的例子。缺了複製到哪裡。

```bash
cp 筆記.txt
```

更好的例子。複製什麼、複製到哪裡都寫全了。

```bash
cp 筆記.txt inbox/
```

因為是複製，原來的檔案會原樣留下。不過，如果已經有同名的檔案，可能會不聲不響地被覆蓋。複製之前先用 `ls` 看一眼。

<Quiz id="ch802-move" />

## 讓手更輕鬆的按鍵

不需要把命令全部記住、全部手打。只要知道下面五個，就會輕鬆很多。

**貼上和複製。** 在終端裡，按鍵和平時有點不同。複製時，先用滑鼠拖動選中終端裡的文字，再按鍵。

| 要做的事 | Mac | Linux | Windows PowerShell |
|---|---|---|---|
| 貼上 | `Cmd + V` | `Ctrl + Shift + V`[^paste] | `Ctrl + V`、右鍵單擊[^paste-win] |
| 複製 | `Cmd + C` | `Ctrl + Shift + C` | 選中後 `Ctrl + C`、右鍵單擊 |

不同程式可能會有些差別。這一頁上的命令可以複製後貼上。這樣能減少打錯字。貼上後如果還沒有執行，再按一次 Enter。

現在試試。複製上面的 `pwd`，貼上到終端裡，按 Enter。

**向上方向鍵。** 剛才輸入的命令會再出現。多按幾次，就會回到更早的命令。想稍微改一下再執行時很方便。按一下看看，剛才輸入的 `pwd` 有沒有再出現。

**Tab。** 只輸入名字的前半部分，按 Tab，就會幫你補全剩下的部分。輸入到 `cd ~/Doc`，按 Tab 試試。如果沒有 `Documents` 資料夾，就用 `ls` 裡看到的別的資料夾名來試。對長的韓文檔名特別有用。如果韓文不太好補全，複製名字貼上進去就行。

**Ctrl+C。** 讓正在執行的命令停下來。如果覺得終端卡住了，先按這個。下面的命令會等待 30 秒。在 Mac、Linux、PowerShell 上都能用。

```bash
sleep 30
```

不用等，按 `Ctrl + C` 試試。提示符會馬上回來。在 Mac 上也是 `Ctrl`，不是 `Cmd`。沒有選中文字時，Ctrl+C 的意思是"停下"。Windows 只有在選中文字時才是複製。

<Quiz id="ch802-keys" />

## 動手試試

建好練習資料夾，並放入筆記。這個資料夾整個課程都會用到。

**1. 建好練習資料夾並進入。**

Mac·Linux 這樣輸入。

```bash
mkdir -p ~/hello-ai-practice/terminal/inbox
cd ~/hello-ai-practice/terminal
pwd
ls
```

Windows PowerShell 這樣輸入。

```powershell
mkdir $HOME\hello-ai-practice\terminal\inbox
cd $HOME\hello-ai-practice\terminal
pwd
ls
```

Mac·Linux 命令裡的 `-p` 是讓它把中間的資料夾也一次建好的選項。沒有這個選項的話，如果 `hello-ai-practice` 資料夾不存在，就會出錯。`$HOME` 是 PowerShell 裡指代主資料夾的名字。`pwd` 的結果以 `terminal`（終端）結尾，`ls` 裡能看到 `inbox`，就成功了。

**2. 下載練習筆記。**

在瀏覽器裡右鍵單擊下面的連結，選「連結另存為（다른 이름으로 링크 저장）」。不同瀏覽器的叫法會有點不同。儲存位置就保持預設的下載資料夾。

- [meeting-2026-10-27-weekly.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-27-weekly.txt)（會議-2026-10-27-每週例會）

這些都是虛構的筆記。日期和星期也是為了故事編出來的，所以和真實日曆對不上。在後面的章節裡，Claude 可能會指出這一點。它說的沒錯，不用驚訝。

**3. 把筆記複製到 inbox。**

Mac·Linux 這樣輸入。

```bash
cp ~/Downloads/meeting-2026-10-27-weekly.txt inbox/
```

Windows PowerShell 這樣輸入。

```powershell
cp $HOME\Downloads\meeting-2026-10-27-weekly.txt inbox\
```

Mac 的 Finder 裡即使顯示為「下載」，實際的資料夾名也是 `Downloads`。如果 Linux 用的是韓語介面，可能是 `~/다운로드`。這時把 `~/Downloads` 換成 `~/다운로드` 再輸入。

**4. 看看有沒有放進去。**

```bash
ls inbox
cat inbox/meeting-2026-10-27-weekly.txt
```

`cat` 會把檔案內容顯示在螢幕上。如果在 PowerShell 裡韓文顯示成亂碼，就這樣輸入。

```powershell
Get-Content -Encoding UTF8 inbox\meeting-2026-10-27-weekly.txt
```

問問自己。`pwd` 的結果是我以為的那個資料夾嗎？`ls inbox` 裡能看到筆記檔案嗎？如果兩個都是，就準備好進入下一章了。

**卡住的時候**：如果出現 `No such file or directory` 或"找不到"之類的話，大多是位置或名字不對。用 `pwd` 看看位置，用 `ls ~/Downloads` 看看檔案是不是真的在。

## 小結

- 提示符表示"在等命令"。最後的符號不用輸入。
- `pwd` 顯示當前位置，`ls` 顯示列表。它們什麼都不改變，可以經常用。
- `~` 是自己的主資料夾，`..` 是上一級。
- `cd` 是移動，`mkdir` 是新建資料夾，`cp` 是按"複製什麼、複製到哪裡"來複制。
- 向上方向鍵是之前的命令，Tab 是補全名字，Ctrl+C 是停止。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Prompt | 提示符 | 表示終端正在等待命令的標誌 |
| Path | 路徑 | 檔案或資料夾的地址 |
| Home | 主資料夾 | 自己帳號的起始資料夾（簡寫為 `~`） |
| `pwd` | 顯示當前目錄 | 顯示當前所在資料夾的命令 |
| `ls` | 列出檔案 | 顯示資料夾裡列表的命令 |
| `cd` | 切換目錄 | 移動到別的資料夾的命令 |
| `mkdir` | 新建目錄 | 新建資料夾的命令 |
| `cp` | 複製 | 複製檔案的命令 |
| `cat` | 顯示檔案內容 | 把檔案內容顯示在螢幕上的命令 |

<ChapterDone :chapter="802" />

下一章：[第3章 安裝與登入](03-install-login.md)

[^paste]: Claude Code 官方文件，「Terminal guide for new users」. "Copy this line, paste it into your terminal (`Cmd + V` on macOS, `Ctrl + Shift + V` on Linux), and press `Enter`:" https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^paste-win]: Claude Code 官方文件，「Terminal guide for new users」. "Copy this line, paste it into PowerShell with `Ctrl + V` or right-click, and press `Enter`:" https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^win-home]: 後面章節裡出現的 `~/.claude`，在 Windows 上是 `C:\Users\使用者名稱\.claude`。Claude Code 官方文件，「Settings files and precedence」. "On Windows, `~/.claude` means `%USERPROFILE%\.claude`." https://code.claude.com/docs/en/settings （確認日期 2026-11-06）

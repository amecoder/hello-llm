# 命令詞典

> **一句話總結**：把本課程裡出現的命令集中到了一個地方。遇到陌生的命令，就到這裡查。不需要背下來。

讀命令的方法在[第2章](02-shell-basics.md)裡。簡單說，就是 **名稱 · 選項 · 對象** 的順序。選項以 `-` 或 `--` 開頭。

先看看要輸入到哪裡。游標前面緊挨著的符號如果是 `%`、`$`、`>`，那就是終端；如果是 `❯`，那就是 Claude 輸入框。如果行首只看到 `>`、`dquote>` 或 `heredoc>`，說明輸入還沒結束。按 `Ctrl + C`，再重新貼上。這本詞典的表裡大多是在終端裡輸入的命令。只有最後一節是在 Claude 輸入框裡輸入的。

## 符號

| 符號 | 意思 | 例子 |
|---|---|---|
| `~` | 我的主資料夾 | `cd ~` |
| `.` | 當前資料夾 | `git add .` |
| `..` | 上一級資料夾 | `cd ..` |
| `*` | 任意幾個字元（沒有也行） | `inbox/회의-*.txt` |
| `\|` | 把前一個命令的輸出交給後一個命令 | `cat 筆記.txt \| claude -p "幫我總結"` |
| `>` | 把輸出存進檔案（覆蓋） | `claude -p "幫我總結" > 總結.txt` |
| `>>` | 把輸出追加到檔案末尾 | `echo 第二行 >> 筆記.txt` |
| `<<'EOF'` | 把 `EOF` 那一行之前的內容原樣作為輸入交過去 | 見下面的說明 |
| `"…"` | 即使有空格也捆成一整塊 | `claude -p "兩個詞以上"` |
| `;` | 在前一個命令之後接著執行下一個命令 | `pwd; ls` |
| `2>/dev/null` | 在螢幕上隱藏錯誤文字 | `ls 不存在的資料夾 2>/dev/null` |
| `$?` | 前一個命令的退出碼 | `echo $?` |

`>` 會清掉檔案內容再重新寫。不能被清掉的檔案不要用它。`<<'EOF'` 只能在 Mac·Linux 上用。在 Windows PowerShell 裡，用記事本來建立檔案。

好幾章裡都用到的下面這種寫法，是建立一個檔案的一組命令。

```bash
cat > 筆記.txt <<'EOF'
第一行
第二行
EOF
```

`cat > 筆記.txt` 把收到的內容存進 `筆記.txt`。`<<'EOF'` 把直到出現只有 `EOF` 的那一行為止的內容交過去。所以檔案裡只會存進中間兩行。`EOF` 是"到這裡結束"的標記。因為加了引號，像 `$HOME` 這樣的文字也不會被替換，會原樣儲存。

## 資料夾和檔案

這張表以 Mac·Linux 為準。PowerShell 也認 `ls`、`cd`、`cp`、`mv`、`rm` 這些名稱，但選項不同。所以不要在 PowerShell 裡直接用 `ls -la` 或 `rm -rf`。PowerShell 命令另外匯總在下面一節。

| 命令 | 作用 |
|---|---|
| `pwd` | 檢視當前資料夾 |
| `ls` | 檢視資料夾裡的列表 |
| `ls -la` | 連隱藏檔案一起詳細檢視 |
| `ls -a` | 連隱藏檔案一起檢視 |
| `cd 資料夾` | 進入那個資料夾 |
| `mkdir 資料夾` | 建立資料夾 |
| `mkdir -p 甲/乙/丙` | 連中間的資料夾一次建立好 |
| `cp 原檔案 目標` | 複製檔案 |
| `mv 原檔案 目標` | 移動檔案 |
| `cat 檔案` | 檢視檔案內容 |
| `rm 檔案` | 刪除檔案 |
| `rm -f 檔案` | 即使檔案不存在也不報錯地刪除 |
| `rm -rf 資料夾` | 連同裡面的內容一起刪除資料夾 |
| `echo 文字` | 輸出文字 |
| `sleep 30` | 等 30 秒 |
| `source 檔案` | 把檔案裡的設定應用到當前視窗 |
| `bash 檔案` | 依次執行檔案裡寫的命令 |
| `fg` | 回到用 `Ctrl + Z` 暫停的程式 |

`mkdir -p` 的 `-p` 是 parents（父級）的縮寫。即使資料夾已經存在也不會報錯。

`rm` 不經過回收站。`-r` 是連資料夾裡面全部，`-f` 是不詢問直接刪除的意思。`rm -rf` 無法撤銷。輸入時一定要再讀一遍資料夾名稱。

## 安裝時用的命令

| 命令 | 作用 |
|---|---|
| `curl 地址` | 下載網路地址上的內容 |
| `curl -fsSL 地址 \| bash` | 下載安裝檔案並立刻執行 |
| `irm 地址 \| iex` | 在 PowerShell 裡下載並立刻執行 |

`-fsSL` 是把四個選項連在一起寫。

- `-f`：伺服器出錯時，不把錯誤頁面交過去。
- `-s`：隱藏進度顯示。
- `-S`：即使用了 `-s`，也顯示錯誤。
- `-L`：如果地址搬走了，就跟過去。

`irm` 下載檔案，`iex` 執行它的內容。[^irm] 上表的兩行都會**把下載的內容原樣執行**。所以只對可信的地址使用。

## Windows PowerShell 命令

| 命令 | 作用 |
|---|---|
| `$HOME` | 我的主資料夾 |
| `ls -Force` | 連隱藏檔案一起檢視 |
| `mkdir 資料夾 -Force` | 資料夾已經存在也不報錯，直接跳過 |
| `Get-Content -Encoding UTF8 檔案` | 檢視檔案時不讓韓文變成亂碼 |
| `Copy-Item 原檔案 目標` | 複製檔案 |
| `Move-Item 原檔案 目標` | 移動檔案 |
| `Remove-Item 檔案` | 刪除檔案 |
| `Write-Output 文字` | 輸出文字 |
| `notepad 檔案` | 用記事本開啟檔案 |
| `foreach (…) { … }` | 對列表裡的每一項執行 `{ }` 裡的內容 |
| `if ($LASTEXITCODE -eq 0) { … } else { … }` | 成功就執行前面，失敗就執行後面 |

`$LASTEXITCODE` 是剛結束的程式的退出碼。`-eq 0` 的意思是"如果等於 0"。0 表示成功。

## claude 命令

在終端裡輸入。第一個詞是 `claude`。

| 命令 | 作用 |
|---|---|
| `claude` | 開始對話 |
| `claude --version` | 檢視版本 |
| `claude --permission-mode manual` | 以手動模式啟動 |
| `claude -c` | 繼續這個資料夾裡最近的對話 |
| `claude -r` | 選一個過去的對話開啟 |
| `claude --resume 名稱` | 直接開啟起過名字的對話 |
| `claude --safe-mode` | 關掉自己的設定後啟動 |
| `claude purge` | 刪除這個資料夾儲存的記錄和狀態（不要拿來練習） |
| `claude -p "請求"` | 問一次就結束 |
| `claude --worktree 名稱` | 在單獨的工作資料夾裡啟動 |
| `claude doctor` | 檢查安裝狀態 |
| `claude update` | 更新到最新版本 |
| `claude mcp add --transport http 名稱 地址` | 新增遠端 MCP 伺服器 |
| `claude mcp list` | MCP 伺服器列表和連線狀態 |
| `claude mcp remove 名稱` | 刪除 MCP 伺服器 |

`-r` 是 `--resume` 的簡寫。`claude purge` 很難撤銷。不要拿它來練手。

和 `-p` 一起用的選項如下。

| 命令 | 意思 |
|---|---|
| `claude -p "請求" --allowedTools "Read,Write"` | 指定不詢問就可以用的工具 |
| `claude -p "請求" --max-turns 10` | 接著做事的次數上限 |
| `claude -p "請求" --output-format json` | 用 JSON 格式輸出回答 |

`--allowedTools` 裡的 `Read` 是讀檔案，`Write` 是寫檔案。`--transport http` 的意思是用 HTTP 方式連線的遠端伺服器。

## git 命令

| 命令 | 作用 |
|---|---|
| `git --version` | 看看有沒有 Git |
| `git init` | 開始記錄這個資料夾 |
| `git config user.name "名字"` | 設定寫進記錄裡的名字 |
| `git config user.email "郵箱"` | 設定寫進記錄裡的郵箱 |
| `git config core.quotePath false` | 原樣顯示韓文檔名 |
| `git add .` | 把當前資料夾的改動放進下一次記錄 |
| `git status --short` | 簡短地檢視改動狀態 |
| `git commit -m "說明"` | 附上說明，留下記錄 |
| `git reset` | 取消放進下一次記錄的內容 |
| `git log --oneline` | 一行一行地檢視記錄 |

`-m` 是 message（訊息）的縮寫。`--short` 的意思是簡短地顯示列表。

## Claude 輸入框命令

啟動 `claude` 之後，在輸入框裡輸入。這裡只收集了常用的。完整列表在輸入框裡輸入 `/` 就能看到。

| 命令 | 作用 |
|---|---|
| `/help` | 幫助 |
| `/exit` | 結束 |
| `/rename 名稱` | 給會話起名字 |
| `/resume` | 開啟過去的對話 |
| `/context` | 檢視上下文被什麼佔著 |
| `/compact` | 把對話總結、縮短 |
| `/clear` | 以空白對話重新開始 |
| `/rewind` | 打開回退選單 |
| `/permissions` | 檢視許可規則 |
| `/usage` | 檢視用量 |
| `/model` | 選擇模型 |

快捷鍵在[第5章](05-input-commands.md)裡。

[^irm]: Claude Code 官方文件，「Terminal guide for new users」。"`irm` fetches the file and `iex` runs it." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）

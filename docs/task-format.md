---
id: task-format
title: task.csv
sidebar_position: 4
---

# 拓元任務檔案格式（task.csv）

`task.csv` 是 ShowSniper 搶票系統的主要任務清單檔案。  
每一列代表一個帳號執行的一項購票任務，可同時配置多組帳號並行執行。

---

## 📄 檔案結構格式

```csv
task,account,game_code,index,quantity,session_index,discord webhook url,proxy list,mode,card_number
```

| 欄位名稱                      | 說明                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **`task`**                | 任務名稱，僅作識別用途。例如：`task1`、`mayday-task`。                                                    |
| **`account`**             | 使用的 TixCraft 帳號。例：`test123@gmail.com`                          |
| **`game_code`**           | 活動代碼，代表場次的網址識別碼。例如：`25_maydaytp_a`                            |
| **`index`**               | 表示選擇第幾種票種，`1` 表示最貴的票種，`2` 為第二貴，以此類推。預設 ShowSniper 會自動解析票種價格。                             |
| **`quantity`**            | 要購買的票數（通常為 `1` 到 `4`）。平台上限請自行確認。                                                         |
| **`session_index`**       | 活動場次順序（從 `1` 開始）。例如選擇「第 2 場」，填入 `2`。                                                     |
| **`discord webhook url`** | 用於推播搶票成功通知的 Discord webhook 連結。可不同任務用不同 webhook。例：`https://discord.com/api/webhooks/...` |
| **`proxy list`**          | 指定使用的 proxy 清單檔案名稱（txt 格式），例：`proxy1.txt`。若留空或檔案不存在，則預設使用本機 IP。                          |
| **`mode`**                | 任務模式，可填：<br/>- `normal`：一般購票模式<br/>- `presale`：預購模式，需填卡號進行驗證                             |
| **`card_number`**         | 僅在 `presale` 模式下使用，填入預購卡號前6碼。一般模式請留空。                                    |

![tixcraft game_code](/img/tixcraft.png)
![tixcraft csv](/img/tixcraftcsv.png)
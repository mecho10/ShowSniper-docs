---
id: kktix-format
title: kktix.csv
sidebar_position: 5
---

# kktix任務檔案格式（kktix.csv）

`kktix.csv` 是 ShowSniper 搶票系統的主要任務清單檔案。  
每一列代表一個帳號執行的一項購票任務，可同時配置多組帳號並行執行。

---
## 📄 檔案結構格式

```csv
task,account,event_id,seat_index,quantity,discord webhook url,proxy list,mode
```

| 欄位名稱                      | 說明                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **`task`**                | 任務名稱，僅作識別用途。例如：`task1`、`task2`。                                                    |
| **`account`**             | 使用的 KKtix 帳號。例：`test123@gmail.com`                          |
| **`event_id`**           | 活動代碼，代表場次的網址識別碼。例如：`6cd8b40c`,`ofler1`                         |
| **`index`**               | 表示選擇第幾種票種，`1` 表示最貴的票種，`2` 為第二貴，以此類推。預設 ShowSniper 會自動解析票種價格。                             |
| **`quantity`**            | 要購買的票數（通常為 `1` 到 `4`）。平台上限請自行確認。                                                         |
| **`session_index`**       | 活動場次順序（從 `1` 開始）。例如選擇「第 2 場」，填入 `2`。可使用`all` 有票就買                                              |
| **`discord webhook url`** | 用於推播搶票成功通知的 Discord webhook 連結。可不同任務用不同 webhook。例：`https://discord.com/api/webhooks/...` |
| **`proxy list`**          | 指定使用的 proxy 清單檔案名稱（txt 格式），例：`proxy1.txt`。若留空或檔案不存在，則預設使用本機 IP。                          |
| **`mode`**                | 任務模式，可填：<br/>- `normal`：一般購票模式<br/>- `restock`：清票（無recaptcha)                                                            |

:::tip 重要提醒
每個場次的event_id都不一樣
:::

![kktix event_id](/img/kktix.png)
![kktix csv](/img/kktixcsv.png)

:::tip 重要提醒
kktix請一定要填discord webhook url
否則無法傳送成功購票的結帳頁面給您
:::
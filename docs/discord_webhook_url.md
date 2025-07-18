---
id: discord-webhook-url
title: Discord Webhook 設定教學
sidebar_position: 8
---

# 🔔 Discord Webhook 設定教學

ShowSniper 會在搶票成功時透過 Discord Webhook 傳送通知。請依照下列步驟建立 Webhook：

---

## 1️⃣ 建立 Discord 頻道

前往您的自己的 Discord 伺服器，並：

- 建立一個新的文字頻道（隨意命名）
- 或選擇一個已存在的頻道

---

## 2️⃣ 建立 Webhook

1. 點選頻道名稱右側的 `⚙️`
2. 點選左側選單中的 `整合` , `Integrations`
3. 點選 `建立 Webhook` , `Create Webhook`
4. 點擊建立好的Webhook
5. 可隨意命名Webhook
6. 點選 `複製 Webhook URL`
7. 貼到 `task.csv` 或 `kktix.csv`

---

## 3️⃣ 貼上 Webhook 到任務檔案

請將複製的 Webhook URL 貼到 `task.csv` 或 `kktix.csv` 對應欄位

:::tip 安全建議
請勿將您的 Webhook URL 外洩，避免被濫用。
若不慎外洩，請立即刪除該 Webhook 並重新建立。
:::
:::tip 重要提醒
kktix請一定要填discord webhook url
否則無法傳送成功購票的結帳頁面給您
:::
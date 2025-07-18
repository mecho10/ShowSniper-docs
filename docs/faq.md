---
id: faq
title: 常見問題（FAQ）
sidebar_position: 1
---

# 常見問題（FAQ）

本頁整理使用者在操作 ShowSniper 過程中常遇到的問題與解決方式。

---

## ❓ 1. 為什麼會出現「403 Forbidden」或跳回登入頁？

這通常是因為 `session.json` 中的 cookie 已過期或失效。

### ✅ 解決方法：

1. 開啟 `session.json` 檔案。
2. 將內容清空，填入 `{}` 並儲存。
3. 重新執行程式，依照提示重新登入帳號。

---

## ❓ 2. reCAPTCHA 沒有跳出，卡在排隊頁？

這表示 Google 帳號未登入或沒有「One Click」權限。

### ✅ 解決方法：

- 確保 Harvester 中的 Chrome 分頁已登入 Google。
- 使用乾淨 IP（避免雜 Proxy）以提高觸發機率。
- 多開幾個 Harvester 分頁或帳號，分擔排隊任務。

---

## ❓ 3. 搶票後 webhook 沒有收到通知？

可能是 Webhook URL 設定錯誤或 Discord 權限不足。

### ✅ 檢查方式：

- 確認 `task.csv` 中 `discord webhook url` 欄位為有效的 Discord Webhook。
- 測試該 Webhook 可否接收訊息（可用 Postman 測試）。
- 確認該 Discord 頻道允許機器人發送訊息。

---

## ❓ 4. 顯示「驗證碼錯誤」或「無足夠連續座位」？

這屬於正常的購票限制情況，通常非程式錯誤。

### ✅ 解法建議：

- 嘗試多跑幾次或更換不同的票種 index。
- 若持續出現，建議調整場次或票種偏好順序。

---

## ❓ 5. 為什麼啟動時卡住不動？

有可能在等待使用者操作，例如：

- 登入帳號（請查看 Terminal 是否有顯示提示訊息）。
- Harvester 尚未啟動（請確認 Port 8765 已開，Chrome 有開啟）。

---

## ❓ 6. 如何使用多帳號搶票？

請在 `task.csv` 中加入多組帳號的行數，ShowSniper 會自動平行執行多個任務。

---

## ❓ 7. 為什麼需要 Proxy？

在高競爭搶票環境下，建議使用 Proxy 以提升成功率與穩定性：

- ✅ 避免 IP 遭平台封鎖
- ✅ 多帳號同時操作不衝突
- ✅ 模擬指定地區購票環境
- ✅ 隱藏真實 IP，增加匿名性
- ✅ 使用高速 Proxy 提升連線品質

若未使用 Proxy，所有請求將來自同一 IP，風險相對較高。

---

## ❓ 8. 為什麼 ChromeDriver 一直被擋？

請確認下列幾點：

- macOS 使用對應的 `chromedriver-mac-x64` 或 `chromedriver-mac-arm64`。
- 有給予檔案執行權限：  
  ```bash
  chmod +x chromedriver-mac-x64
  ```

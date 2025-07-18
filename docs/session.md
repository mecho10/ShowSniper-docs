---
id: session
title: session.json 使用說明
sidebar_position: 7
---

# `session.json` 使用說明

`session.json` 是用來儲存帳號登入後的 Cookie 資訊，讓使用者下次執行程式時免除重複登入流程。

---

## ✅ 檔案用途

此檔案會在您 **手動登入一次** 並按下 Enter 後，自動產生或更新。  
每個帳號對應一組 session cookie，用於後續自動化流程中與目標票務平台進行會話驗證。

---

## 📁 結構範例

```json
{
  "test@gmail.com": {
    "cookies": {
      "_tix": "xxxxxxxxxxxxxx",
      "_ga": "GA1.2.123456789.1690000000",
      ...
    },
    "platform": "tixcraft"
  },
  "kktix_user@gmail.com": {
    "cookies": {
      "kktix_session_token_v2": "xxxxxx",
      "XSRF-TOKEN": "xxxxxx"
    },
    "platform": "kktix"
  }
}
```
每次手動登入完畢後，系統將自動覆寫對應帳號的 session。

請勿手動修改 session.json，以避免格式錯誤造成登入失敗。

若出現 403 或跳轉回登入頁面，請手動刪除session.json裡的所有內容

並手動輸入`{}` 並處存

:::tip 建議
建議將 session.json 視為機密資訊，不要公開分享，以保障帳號安全。
:::
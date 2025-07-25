---
id: configuration
title: config.json設置
sidebar_position: 3
---

# 配置設定

ShowSniper 提供靈活的配置方式，讓使用者可以依需求調整搶票策略、登入帳號與金鑰驗證。

---

## 1️⃣ `config.json` 檔案說明

此檔案為主設定檔，請務必正確填寫。範例如下：

```json
{
  "license_key": "你的授權金鑰",
  "discord_id": "你的discord使用者id",
  "capsolver_api_key": "CAP-XXXXXXXXXXXXXXXXXXXX"
}
```

:::tip 重要提醒
請妥善保管API 金鑰
:::

## 如何取得 Discord 使用者 ID

:::info 獲取 Discord ID 教學

請依以下步驟取得您的 Discord 使用者 ID：

1. 打開 Discord，點選左下角齒輪圖示「使用者設定」  
2. 在左側選單中選擇 **進階**  
3. 開啟 **開發者模式**

![開發者模式位置](/img/discord_id.png)

4. 回到聊天室，右鍵點選您的大頭貼 → 點選 **複製使用者 ID**  
5. 貼上該 ID 到 `config.json` 中的 `"discord_id"` 欄位
---

✅ ID 會是類似這樣的格式：

```json
"discord_id": "123456789012345678"
:::

:::info Capsolver 是什麼？

Capsolver 是一個自動解 reCAPTCHA v2 的服務，支援 ShowSniper 的 KKTIX normal mode 搶票流程。
:::
註冊教學：
1.前往官網註冊：https://dashboard.capsolver.com/passport/register?inviteCode=OlTJuZJbF-CT

2.登入後即可在首頁看到您的 API Key

3.複製並貼入 config.json 中的 "capsolver_api_key" 欄位

![開發者模式位置](/img/capsolver.png)


:::tip 重要提醒
要先儲值才能使用解碼服務
請妥善保管API 金鑰
:::
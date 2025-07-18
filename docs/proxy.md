---
id: proxy
title: Proxy 設定
sidebar_position: 6
---

# Proxy 設定說明（proxy.txt）

ShowSniper 支援透過 Proxy 避開 IP 限制與流量管制。  
您可以為每個任務指定 proxy 清單檔案（例如 `proxy1.txt`），系統將隨機選擇其中一組來執行任務。

---

## 📄 proxy.txt 檔案格式

每一行為一組 proxy，格式如下：

```txt
帳號:密碼@IP:Port
## Proxy 檔案格式說明（proxy.txt）

ShowSniper 支援以下 Proxy 格式，每行一組：

| 格式類型       | 範例                                     | 備註                     |
|----------------|------------------------------------------|--------------------------|
| 無驗證 Proxy   | `123.123.123.123:8080`                   | 常見於 ISP 或白名單驗證 |
| 帳密驗證 Proxy | `123.123.123.123:8080:username:password` | 支援 HTTP 授權    |
```
:::tip 重要提醒
請確保 Proxy 可用、穩定，並避免遭平台封鎖。
:::

## ✅ Proxy 可用性測試工具

為確保您的 Proxy 穩定可用，建議使用以下工具進行測試：

- **Fogldn Proxy Tester**  
  Download: [https://www.fogldn.com/proxy-tester/](https://www.fogldn.com/proxy-tester/)

該工具可批量測試速度、匿名性與地理位置等資訊，幫助您過濾不可用代理。
---
id: installation
title: 安裝指南
sidebar_position: 2
---

# 安裝指南

本指南將帶您完成 ShowSniper 的安裝與啟動流程。

---

## 系統需求

- 作業系統： macOS

:::tip 重要提醒
目前僅支援 macOS 系統。
未來將發布 Windows 版本，請持續關注官方更新。
:::
---

## 安裝步驟

### 1️⃣ 下載 ShowSniper

請前往 Discord 的主程式頻道下載最新版 `.zip` 壓縮檔。  
下載完成後請進行解壓縮，並確認資料夾中包含以下必要檔案：

```plaintext
📁 ShowSniper/
├── ShowSniper.app             # 主程式入口
├── task.csv                   # 拓元任務清單
├── kktix.csv                  # KKTIX 任務清單
├── config.json                # 設定檔（包含金鑰與基本設定）
├── proxy1.txt                 # Proxy 列表（可選）
├── session.json               # 已登入的帳號 Cookie
├── chromedriver-mac-x64       # Intel 架構用 ChromeDriver
├── chromedriver-mac-arm64     # M1/M2 架構用 ChromeDriver
├── run_showsniper.command     # 程式啟動器

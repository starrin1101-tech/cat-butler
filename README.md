# cat-butler 貓咪罐頭與飲食記錄工具

本專案為一個純前端運作的貓咪飲食與營養標籤紀錄工具。

> ⚠️ **聲明 Statement**：
> 本專案之所有程式碼（HTML / CSS / JavaScript）與介面邏輯，**完全由 AI 協助生成與製作**。

## 特點
- **隱私安全**：所有資料皆儲存於使用者本地瀏覽器（localStorage），不會上傳至任何伺服器。
- **備份機制**：支援 JSON 格式之匯入與匯出功能。
# 🐾 貓管家 (Cat Manager)

**貓管家** 是一款專為多貓家庭與寵物主人設計的網頁端綜合管理系統。透過直觀且豐富的介面，協助飼主輕鬆紀錄貓咪健康資訊、飲食週期、生日提醒，並提供豐富的動態視覺效果與數據統計。

---

## ✨ 核心功能與亮點 (Key Features)

### 1. 🎂 獨家生日慶祝動畫系統 (Birthday Animation System)
* **自動偵測生日**：當貓咪當天生日時，卡片自動觸發彩虹霓虹邊框光暈（Rainbow Glow Pulse）與光澤掃過（Shimmer Sweep）效果。
* **五彩紙屑與動態蛋糕**：卡片上方飄落 10 種不同顏色的動態繽紛紙屑（Confetti Fall & Sway），並搭配跳動的生日蛋糕 Emoji 🪅🎂。

### 2. 🐱 貓咪個人檔案與里程碑卡片 (Pet Cards Grid)
* **靈活響應式佈局**：支援寬螢幕自動佈局（根據螢幕解析度最多可自適應顯示 5 至 6 欄卡片）。
* **里程碑星號互動**：貓咪年齡與里程碑設有 2D 彈性旋轉星號背景（Bouncy 2D Star），懸停時呈現滑順的旋轉放大效果。

### 3. 🔄 消耗週期無縫跑馬燈 (Cycle Marquee)
* 對於飼料、罐頭、砂盆等消耗用品，提供滑鼠懸停觸發的**無縫滾動跑馬燈**，方便快速瀏覽週期與預估用量。

### 4. 📊 實體購買統計與 Hover 圖表 (Purchase Chart Bar)
* 提供清晰的消費數據與實體購買金額圖表，支援深色/淺色模式（Dark/Light Mode）下獨特的 Amber 琥珀色懸停高亮效果。

### 5. 📥 資料匯入預覽與 Toast 系統 (Import & Toast Notification)
* **匯入預覽模態框 (Import Preview Modal)**：具備層級隔離 (Isolation Stacking Context) 與滑順彈出動畫，確保資料匯入安全無虞。
* **動態 Toast 提示**：具備毛玻璃（Backdrop Blur）質感的彈出式訊息通知，明確傳達成功或錯誤狀態。

---

## 🛠️ 技術棧 (Tech Stack)

* **Core Framework**: [React 19](https://react.dev/)
* **Build / Runtime**: [Vite](https://vitejs.dev/) / ES Modules (`modulepreload`)
* **Styling**: Native CSS3 Animations, CSS Keyframes, CSS Grid / Flexbox
* **Icons**: Modern Inline SVG Icon Set
* **Theme Support**: Dark Mode / Light Mode Ready

---

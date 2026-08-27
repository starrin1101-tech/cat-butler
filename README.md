# 🐾 貓管家 (Cat Manager)

本專案為一個純前端運作的貓咪飲食與營養標籤紀錄工具。

> ⚠️ **聲明 Statement**：
> 本專案之所有程式碼（HTML / CSS / JavaScript）與介面邏輯，完全由 AI 協助生成與製作。

---

## ✨ 專案特點 (Highlights)

* **🔒 隱私安全**：所有資料皆儲存於使用者本地瀏覽器（`localStorage`），不會上傳至任何伺服器。
* **💾 備份機制**：支援 JSON 格式之匯入與匯出功能，方便隨時備份與移轉資料。
* **💡 預設展示資料**：首次開啟網頁時所顯示的預設內容純屬範例展示，絕非他人之真實個人資料，可隨時自由清除或覆蓋。
* **🔗 適口性試算表連結**：提供自訂適口性試算表網址功能。若有自行建立並紀錄貓咪適口性與喜好，點擊即可快速進行網頁跳轉，方便交叉比對與查閱。

---

## 📖 使用與操作說明 (How to Use)

### 1. 📅 飲食與日曆紀錄
* 點擊日曆上的日期，即可新增或檢視當天的貓咪飲食紀錄、餵食時間點與備忘事項。

### 2. 📦 物資卡與消耗狀態管理
* **新增與維護物資**：可建立主食罐、乾糧、貓砂或保健品等卡片，隨時掌握庫存狀況。
* **兩種消耗模式切換**：
  * **預估天數模式**：輸入現有庫存與每日消耗量，自動計算剩餘可用天數與補貨提醒。
  * **週期頻率模式**：設定固定消耗週期（如每幾週開新罐、多久換一次貓砂），適合固定維護頻率的物資。
* **無縫跑馬燈**：滑鼠懸停於物資卡片時，可觸發**無縫滾動跑馬燈**，自動顯示詳細的週期數據與預估用量。

### 3. ⚙️ 資料備份與還原
* **匯出資料**：點擊備份按鈕可將所有紀錄下載為 `.json` 檔案存於本機。
* **匯入資料**：選擇備份檔後，系統會先彈出**預覽模態框 (Import Preview Modal)**，確認資料無誤後即可一鍵還原。

---

## ✨ 核心功能與亮點 (Key Features)

### 1. 🎂 獨家生日慶祝動畫系統 (Birthday Animation System)
* **自動偵測生日**：當貓咪當天生日時，卡片自動觸發彩虹霓虹邊框光暈（Rainbow Glow Pulse）與光澤掃過（Shimmer Sweep）效果。
* **五彩紙屑與動態蛋糕**：卡片上方飄落 10 種不同顏色的動態繽紛紙屑（Confetti Fall & Sway），並搭配跳動的生日蛋糕 Emoji 🪅🎂。

### 2. 🐱 貓咪個人檔案與里程碑卡片 (Pet Cards Grid)
* **靈活響應式佈局**：支援寬螢幕自動佈局（根據螢幕解析度最多可自適應顯示 5 至 6 欄卡片）。
* **里程碑星號互動**：貓咪年齡與里程碑設有 2D 彈性旋轉星號背景（Bouncy 2D Star），懸停時呈現滑順的旋轉放大效果。

### 3. 📊 實體購買統計與 Hover 圖表 (Purchase Chart Bar)
* 提供清晰的消費數據與實體購買金額圖表，支援深色/淺色模式（Dark/Light Mode）下獨特的 Amber 琥珀色懸停高亮效果。

### 4. 📥 匯入預覽與 Toast 系統 (Import & Toast Notification)
* **匯入預覽模態框**：具備層級隔離 (Isolation Stacking Context) 與滑順彈出動畫，確保資料匯入安全無虞。
* **動態 Toast 提示**：具備毛玻璃（Backdrop Blur）質感的彈出式訊息通知，明確傳達成功或錯誤狀態。

---

## 🛠️ 技術棧 (Tech Stack)

* **Core Framework**: [React 19](https://react.dev/)
* **Build / Runtime**: [Vite](https://vitejs.dev/) / ES Modules (`modulepreload`)
* **Storage**: LocalStorage API
* **Styling**: Native CSS3 Animations, CSS Keyframes, CSS Grid / Flexbox
* **Icons**: Modern Inline SVG Icon Set
* **Theme Support**: Dark Mode / Light Mode Ready

---

## 📝 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權。

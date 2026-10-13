# SovYCode — Client Frontend Web Application

> **Production-grade, ultra-responsive frontend platform for SovYCode digital engineering studio.**

Built with **React 19**, **Vite**, **Tailwind CSS**, and modern glassmorphic dual-theme design tokens (Light & Dark mode).

---

## 🌟 Highlights & Architecture

- **Sub-Second Performance**: Vite-optimized bundling with near-instant hot module replacement (HMR).
- **Apple-Style Editorial Services Showcase**: High-contrast, spacious typography, interactive discipline filtering, and clear outcome badges.
- **Interactive Project Estimator**: Real-time scope, timeline, and investment blueprint calculator with instant MongoDB sync.
- **Seamless Dual Theme**: Flawless light and dark mode toggling with zero contrast or white-on-white text issues.
- **Interactive Modals**:
  - **Executive Discovery Concierge**: Strategy briefing, mutual NDA assurance, and service selection.
  - **Candidate Dossier Terminal**: Interactive career application terminal with tech chip selection.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS + Custom CSS Theme Tokens
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
If connecting to a custom backend URL, create `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Launch Development Server
```bash
npm run dev
```
The app will be accessible at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
Generates a minified, production-ready bundle in the `dist/` directory.

---

## 📂 Project Structure

```text
client/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Images & studio media
│   ├── components/         # Reusable UI components (Navbar, Footer, Hero, Modals)
│   ├── context/            # ThemeContext (Dark/Light mode state)
│   ├── pages/              # Full page views
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── EstimatorPage.jsx
│   │   ├── ProcessPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx             # Main router & modal mount
│   ├── index.css           # Global tokens & typography
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 📄 License
100% Proprietary — All rights reserved by SovYCode.

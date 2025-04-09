# 🔍 JSON Diff Viewer — React + TypeScript + Vite

This project is a powerful and user-friendly **JSON Diff Viewer** built with **React**, **TypeScript**, and **Vite**. It allows users to easily compare two JSON objects side-by-side and view the differences in a clean, syntax-highlighted, color-coded format. The tool is especially useful for developers, testers, and data analysts who need to analyze structural or data changes between JSON payloads.

## 🚀 Features

- 🧠 **Smart JSON Comparison** — Detects and highlights additions, deletions, and changes.
- 🌈 **Color Coded Output** — 
  - 🟩 Added keys/values
  - 🟥 Removed keys/values
  - 🟨 Modified values
- 🌓 **Dark/Light Mode Toggle** — Seamlessly switch themes to reduce eye strain.
- 🧾 **Syntax Highlighting** — Powered by `react-syntax-highlighter`.
- 🧩 **Side-by-Side Diff Layout** — Enhanced visual clarity of changes.
- ♻️ **Live Updates** — Re-renders diff on input change in real-time.
- 💡 **No Tailwind or UI Libraries** — Styled using clean, custom CSS.

## 🌍 Deployment Ready

You can deploy this project across multiple platforms with CI/CD integration:
- **Vercel** — Connect your GitHub repo and deploy instantly with zero config.
- **Cloudflare Pages** — Edge-deployed for super-fast delivery.
- **GitHub Pages** — Great for hosting fallback or demo versions.

---

# 📥 Getting Started

Follow the steps below to clone and run this project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/json-diff-viewer.git
cd json-diff-viewer

### 2. Install Dependencies
```bash
npm install

### 3. Run the Development Server
npm run dev

### The app will be available at http://localhost:5173.

### 4. Build for Production
npm run build

### 5. Preview the Production Build
npm run preview


📦 Future Improvements
🔁 Side-by-side visual diff layout — Enhanced comparison for better readability.

🌐 Multilingual support for accessibility — Reach a wider global audience.

💡 AI-based suggestion for JSON improvement — Smart hints to improve data quality and structure.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

🧑‍🎓 Author
Made with ❤️ by Dhanashri Patil

📧 Email: patil.dhanashrik@gmail.com

🔗 GitHub

🔗 LinkedIn
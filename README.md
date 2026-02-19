# 📝 Smart Word Counter

A high-performance, sleek, and intuitive web application for instant text analysis. Designed with a clean UI and robust logic to help writers, students, and professionals track their content metrics effectively.

🔗 **Live Demo:** [https://marvelous-kelpie-f7353c.netlify.app](https://marvelous-kelpie-f7353c.netlify.app)

![Smart Word Counter Screenshot](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

---

## ✨ Features

- **Word Counting** — Accurately counts words, handling extra spaces and line breaks.
- **Character Analysis** — Counts total characters while excluding whitespace for precise metric tracking.
- **Sentence Detection** — Identifies sentence counts based on standard punctuation marks (`.`, `!`, `?`).
- **Input Validation** — Gracefully handles empty inputs and provides helpful feedback.
- **Modern UI** — Fully responsive, mobile-first design with Tailwind CSS and Inter font.
- **Privacy Focused** — 100% client-side processing. Your text never leaves your browser.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Dynamic, component-based UI |
| **TypeScript 5.8** | Type safety and robust code logic |
| **Tailwind CSS** | Utility-first styling and responsive layouts |
| **Vite 6** | Blazing-fast build tool and dev server |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Abhishekpat/Smart-word-counter.git

# 2. Navigate to the project directory
cd smart-word-counter

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📖 Usage

1. Enter or paste your text into the large text area.
2. Click **Analyze Text**.
3. View your instant statistics (Words, Characters, Sentences) in the cards below.
4. Click **Clear** to start fresh.

## 📂 Project Structure

```
smart-word-counter/
├── components/
│   └── StatsCard.tsx       # Reusable statistics display card
├── App.tsx                 # Main application component
├── index.tsx               # React entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── .gitignore              # Git ignore rules
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for precision text analysis.

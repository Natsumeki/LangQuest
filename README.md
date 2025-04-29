# 🎌 Japanese Quiz Game App – Hiragana & Katakana Trainer

A Duolingo-style Japanese learning mobile game, focused on mastering **Hiragana** and **Katakana** through interactive quiz-based gameplay. Built with **React Native + Expo**, **TypeScript**, and **Clerk** for authentication.

## 📱 Features

- 🎮 Quiz-based game for learning **Hiragana** and **Katakana**
- 📦 Game data loaded from external **JSON** format
- ❤️ Life system and **progress bar** tracking
- 🌈 Custom **UI/UX** with interactive menu and feedback
- 🔐 **Authentication** with [Clerk](https://clerk.dev/)
  - Email/password login
  - **Google Sign-In** (coming soon)
- 📊 Player progress tracking (future enhancement)

## 🧱 Built With

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Clerk](https://clerk.dev/) for user authentication
- [React Navigation](https://reactnavigation.org/) for in-app routing
- JSON-based game configuration system

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI
- Clerk account

### 📸 Screenshots

<p align="center">
  <img src="https://res.cloudinary.com/do71faaue/image/upload/v1745938883/Screenshot_2025-04-29_180003_o9ixyr.png" alt="Main Menu Screenshot" width="45%" style="margin-right: 10px;"/>
  <img src="https://res.cloudinary.com/do71faaue/image/upload/v1745938883/Screenshot_2025-04-29_180040write_i7rx9z.png" alt="Quiz Screen Screenshot" width="45%"/>
</p>

### Installation

```bash
git clone https://github.com/your-username/japanese-quiz-game.git
cd japanese-quiz-game
npm install
expo start
```

/assets - Images, icons, sounds
/components - Reusable UI components
/screens - Game screens (Menu, Quiz, Result, etc.)
/data - JSON quiz files for Hiragana/Katakana
/utils - Helper functions (e.g., scoring, randomizer)

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key_here

### 🧩 Game Logic

Game loads questions from structured JSON

Each quiz round includes multiple choice answers

Player has limited lives (hearts) and a visible progress bar

Upon completion or failure, result screen is shown

📈 Future Plans
🎭 Add more quiz types (Kanji, Vocabulary, Listening)

🌐 Cloud sync with user progress

📊 Leaderboards

🔤 Dynamic content from CMS or backend

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

🪪 License
MIT License

## 🌐 Live Demo

👉 [Try Jugaad Chef Now](https://jugaad-chef.vercel.app/)


# 🍲 Jugaad Chef – AI Recipe Improviser

**Jugaad Chef** is a smart AI-powered recipe generator built with the MERN stack and Google Gemini AI. Enter whatever ingredients you have at home, add your preferred cuisine or diet (optional), and let AI generate a delicious recipe just for you — *because real chefs do jugaad!* 😄

---

## 🚀 Features

- 🧠 Uses Gemini AI to generate recipes based on input ingredients
- 🌏 Supports optional cuisine and dietary preferences
- 📋 Copy recipe functionality
- 💡 Improvises creative recipes from minimal ingredients
- 🎨 Clean and responsive UI built with Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js
- **AI Model:** Gemini 2.0 (via `@google/generative-ai`)
- **Utilities:** Axios, Clipboard API

---

## 🧪 How It Works

1. User enters comma-separated ingredients (like *potato, tomato, onion*)
2. Optionally selects a cuisine (e.g., *Gujarati*) or diet (e.g., *Vegan*)
3. The frontend sends a POST request to the backend API
4. The backend processes it via Gemini and sends back a structured recipe
5. The app parses and displays: title, description, ingredients, steps, and tips

---

## Folder Structure

jugaad-chef/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │         ├── Recipe.jsx/              # Main pages like Recipe.jsx
│   │   ├── utils/              # Utility functions (e.g. parseRecipe.js)
|   |         ├── parseRecipe.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   └── .env                    # Frontend environment variables
│
├── server/                     # Express backend
│   ├── routes/                 # API route definitions
│   │   └── recipeRoutes.js
│   ├── controllers/            # Controller logic for API routes
│   │   └── recipeController.js
│   ├── services/               # AI interaction (Gemini API)
│   │   └── geminiService.js
│   ├── index.js                # Entry point for Express app
│   └── .env                    # Backend environment variables
│
├── .gitignore
├── README.md


# 🤖 QA Bot (AI Chat Application)

## 🚀 Overview

QA Bot is a full-stack AI-powered chat application that allows users to ask questions and receive intelligent responses using OpenAI APIs.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* TypeScript
* CSS (Custom Styling)

### Backend

* Node.js
* Express.js
* OpenAI API

---

## ⚙️ Features

* Real-time AI chat
* Clean chat UI (like ChatGPT)
* Auto-scroll messages
* Enter key support
* Loading state handling
* Error handling

---

## 📂 Project Structure

```
qa-frontend/
QA_Bot/
```

---

## 🔑 Environment Variables

Create `.env` file in backend:

```
OPENAI_API_KEY=your_api_key_here
```

---

## ▶️ Run Locally

### Backend

```
cd QA_Bot
npm install
npm run dev
```

### Frontend

```
cd qa-frontend
npm install
npm run dev
```

---

## 🌐 API Endpoint

```
POST /ask
```

Request:

```
{
  "question": "What is AI?"
}
```

---

## 📌 Future Improvements

* Markdown rendering
* Chat history persistence
* Authentication
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

Hari Ram

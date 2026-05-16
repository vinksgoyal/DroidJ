# 🤖 DroidJ — Online Java Compiler & IDE

🌐 [Try Online](https://droidj.divyanshgoyal.dev)

DroidJ is a **modern online Java compiler and lightweight IDE** built for students, beginners, and developers who want a fast and distraction-free coding environment directly in the browser. Write, compile, run, and experiment with Java instantly — no installation required.

Designed with a clean interface, real-time execution, and cross-device responsiveness, DroidJ aims to make Java programming feel simple, accessible, and modern.

---

# 🌟 Key Features

* **Online Java Compilation & Execution** — write and run Java code instantly.
* **Modern IDE Interface** — clean layout inspired by desktop code editors.
* **Real-time Console Output** — instant execution results and error feedback.
* **Syntax Highlighting** — improved readability and coding experience.
* **Responsive Design** — works smoothly on desktop, tablet, and mobile.
* **Fast Execution Pipeline** — optimized frontend-backend communication.
* **Minimal & Distraction-Free UI** — focused coding experience.
* **Cross-platform Accessibility** — code from anywhere using just a browser.

---

# 💡 Motivation

Many online Java compilers feel:

* outdated,
* slow,
* overloaded with ads,
* or difficult for beginners.

DroidJ was created to provide:

* a clean coding environment,
* quick execution,
* modern UI/UX,
* and a smoother learning experience for students and developers.

The goal is to make coding feel:

> lightweight, fast, and enjoyable.

---

# ⚙️ Project Architecture

```txt
DroidJ/
 ├── client/        # React + Vite frontend
 └── server/        # Node.js backend compiler API
```

---

# ⚙️ File Overview

## Client (`/client`)

* `src/` — frontend source code and UI components
* `public/` — static assets
* `vite.config.js` — Vite configuration
* `package.json` — frontend dependencies and scripts

## Server (`/server`)

* `server.js` — backend server and compiler execution logic
* `package.json` — backend dependencies and scripts

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* CSS / TailwindCSS
* Monaco Editor / CodeMirror (if integrated)

## Backend

* Node.js
* Express.js

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 🧠 Design Decisions

* **Separated Frontend & Backend**
  Keeps deployment scalable and maintainable.

* **Vite over CRA**
  Faster development experience and better performance.

* **Minimal UI Philosophy**
  Avoided clutter to maintain coding focus.

* **Execution Isolation**
  Backend handles compilation independently from frontend rendering.

* **Responsive Layout**
  Designed for both desktop and mobile coding sessions.

---

# ⚡ Challenges Faced

* Handling compiler execution securely
* Managing backend execution time and errors
* Designing a clean editor experience for smaller screens
* Synchronizing frontend requests with backend responses efficiently

These challenges helped improve both architecture and developer experience.

---

# 🚀 Installation & Local Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/DroidJ.git
cd DroidJ
```

---

## 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## 3️⃣ Setup Backend

Open another terminal:

```bash
cd server
npm install
npm start
```

Backend runs on:

```txt
http://localhost:3001
```

---

# 🌐 Deployment

## Frontend

Deploy easily using:

* Vercel

## Backend

Deploy easily using:

* Render

---

# 📌 Future Plans

* Multi-language support
* User authentication
* Saved projects & cloud sync
* Custom themes
* AI-assisted debugging
* Collaborative coding rooms
* Self-hosted execution engine

---

# 👨‍💻 Developer

Made with passion by **Divyansh Goyal**

* GitHub: https://github.com/YOUR_USERNAME
* Portfolio: https://YOUR_DOMAIN

---

# ⭐ Support

If you like the project:

* Star the repository
* Share it with developers & students
* Contribute ideas and improvements

DroidJ is built to make coding simpler, faster, and more accessible for everyone.

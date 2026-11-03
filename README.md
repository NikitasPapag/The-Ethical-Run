# The Ethical Run 🎮⚖️

**The Ethical Run** is an interactive, web-based serious game and research platform developed as part of an academic thesis experiment. It investigates how gamified environments and Socratic AI dialogue can teach and evaluate moral philosophy frameworks: **Utilitarianism**, **Deontological Ethics**, and **Virtue Ethics**.

---

## 📖 Overview & Experimental Flow

Participants are guided through a structured multi-stage experimental loop:

1. **Consent & Demographics:** Collects basic background metrics (age, field of study, AI familiarity, and baseline philosophy knowledge).
2. **Pre-Questionnaire:** Evaluates initial decision-making across 4 ethical dilemmas before gameplay.
3. **The Ethical Run (Kaplay Game):** A 2D side-scrolling runner where players collect batteries, face ethical dilemmas, and engage in real-time Socratic dialogue powered by an LLM (Groq API) tailored to their selected moral framework.
4. **Post-Questionnaire & Feedback:** Re-evaluates ethical reasoning across 4 post-game dilemmas to measure learning gain (`Post-Score - Pre-Score`) and collects system usability feedback.
5. **Multi-Path Exploration:** Participants can conclude their session or loop back to experience the remaining ethical frameworks.

---

## 🛠️ Tech Stack

* **Frontend (Game):** [Kaplay.js](https://kaplayjs.com/) bundled with [Vite](https://vitejs.dev/)
* **Frontend (Questionnaires):** HTML5, CSS3 (Retro arcade aesthetic), Vanilla JavaScript
* **Backend:** Node.js & Express.js
* **AI Integration:** Groq API (proxied securely via the Express backend)
* **Database & Storage:** Dual-storage system using local JSON logs (`data/results/`) automatically synced with **MongoDB Atlas** for cloud persistence
* **Hosting:** Render.com

---

## 📁 Project Structure (Monorepo)

```text
thesis_website/
├── .env                        # Secret environment variables (never committed)
├── .gitignore                  # Git exclusion rules
├── package.json                # Backend dependencies & monorepo build scripts
├── server.js                   # Express server, API routes, AI proxy & MongoDB sync
├── data/
│   └── results/                # Local participant JSON logs (auto-synced with MongoDB)
├── game_src/                   # Kaplay Vite source code
│   ├── index.html
│   ├── package.json            # Game frontend dependencies
│   ├── vite.config.js          # Configured to output builds directly to ../public/game
│   ├── public/                 # Game sprites, audio, and fonts
│   └── src/                    # Game scenes and Socratic AI dialogue logic
└── public/
    ├── style.css               # Questionnaire styling
    ├── click.wav               # UI audio feedback
    ├── pre_questionnaire.html  # Pre-game survey & framework selector
    ├── post_questionnaire.html # Post-game survey & system feedback
    └── game/                   # Auto-generated production build of the Kaplay game
```

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18+ recommended)
* A [Groq API Key](https://console.groq.com/)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string *(optional for local testing; falls back to local disk storage if omitted)*

### 2. Installation
Clone the repository and install the backend dependencies:

```bash
git clone https://github.com/NikitasPapag/The-Ethical-Run.git
cd The-Ethical-Run
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key_here
ADMIN_KEY=your_secret_admin_password
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

### 4. Building the Game Frontend
Whenever you make changes inside `game_src/`, compile the Kaplay project directly into `public/game/` using:

```bash
npm run build:game
```

### 5. Running the Server
Start the Express server:

```bash
npm start
```
Open `http://localhost:3000` in your browser to begin a participant session.

---

## 📊 Data Collection & Admin Exports

The server includes two password-protected administrative endpoints to export participant data for statistical analysis (Excel, SPSS, R, or Python):

* **Download Raw JSON Logs (includes full Socratic chat transcripts):**
  ```text
  GET /api/admin/export?key=YOUR_ADMIN_KEY
  ```
* **Download Flattened CSV Metrics (Pre/Post scores, learning gains, timers, and Likert ratings):**
  ```text
  GET /api/admin/export-csv?key=YOUR_ADMIN_KEY
  ```

---

## ☁️ Deployment (Render)

1. Push the repository to GitHub.
2. Create a new **Web Service** on [Render](https://render.com/) connected to your GitHub repository.
3. Use the following settings:
   * **Runtime:** `Node`
   * **Build Command:** `npm install` *(or `npm install && npm run build` to compile `game_src` in the cloud)*
   * **Start Command:** `npm start`
4. Add `GROQ_API_KEY`, `ADMIN_KEY`, and `MONGODB_URI` under Render's **Environment Variables**.

---

## 📜 License & Academic Use

Developed for academic thesis research on AI-assisted moral philosophy education. All participant data is anonymized using randomly generated UUIDs.
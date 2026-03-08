# Assignment Calendar

Stop juggling course portals. Assignment Calendar pulls everything into one place — a clean, color-coded calendar with smart priority tracking, workload estimates, and auto-generated study plans so you're never cramming the night before.

All your data lives in a single `config.js` file. The engine (`index.html`) is generic and never needs to be touched — just fill in your courses, paste your Firebase credentials, and deploy.

![Calendar preview](preview.png)

---

## Prerequisites

- [GitHub](https://github.com) account — free
- [Firebase](https://console.firebase.google.com) account — free
- A static host: [Netlify](https://netlify.com) or GitHub Pages — both free

---

## Getting started

### 1. Get the files

Click **Use this template** at the top of this page, then clone your new repo:

```bash
git clone https://github.com/YOUR_USERNAME/assignment-calendar.git
cd assignment-calendar
```

### 2. Set up Firebase

Firebase stores your completion state and any edits you make in the UI, keeping everything in sync across devices.

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**
2. Inside your project, click **Add app** → **Web** (`</>`) → Register
3. Copy the `firebaseConfig` object that appears — you'll paste it into `config.js`
4. Go to **Build → Realtime Database → Create database** → pick a region → **Start in test mode**

### 3. Configure config.js

Open `config.js` — this is the only file you need to edit. Fill in:

| Field | What to put |
|---|---|
| `title` / `subtitle` | Your name and course list |
| `firebase` | The credentials copied from step 2 |
| `courses` | One entry per course with a name, color, and URL |
| `assignments` | Your actual assignments |

Every field is documented with inline comments. When in doubt, read them — they cover everything.

### 4. Deploy

**Netlify (recommended)**
1. Push your files to GitHub
2. [netlify.com](https://netlify.com) → **Add new site → Import from Git** → select your repo
3. Leave all build settings blank → **Deploy**
4. Live at `https://YOUR-SITE-NAME.netlify.app`

**GitHub Pages**
1. Push your files to GitHub
2. Repo → **Settings → Pages** → Source: Deploy from branch → `main` / root
3. Live at `https://YOUR_USERNAME.github.io/assignment-calendar/`

### 5. Authorize your domain in Firebase

This allows Firebase to accept requests from your deployed site:

1. Firebase console → **Authentication → Settings → Authorized domains**
2. Add your Netlify or GitHub Pages URL

---

## Features

| | Feature | Description |
|---|---|---|
| 📅 | Calendar + List views | Monthly grid and a sortable list grouped by overdue, upcoming, and completed |
| 🟥 | Priority bar | A colored bar at the top of each calendar day reflecting the highest-priority assignment due |
| ⚠️ | Workload badges | `!` `!!` `!!!` on each chip showing the estimated time for that specific assignment |
| 🚨 | Panic mode | An animated warning banner triggers when 3+ incomplete assignments pile up within 3 days |
| 📖 | Study plans | Hover any exam or project for a personalized day-by-day study or work breakdown |
| 🌙 | Dark mode | Toggle in the header — preference is saved locally |
| ✏️ | Edit mode | Fix typos, add assignments, or delete ones directly in the UI — no need to touch config.js — all changes sync to Firebase |
| 🔄 | Firebase sync | Completion state and edits sync across all your devices in real time |

---

## How priority is calculated

Assignments due more than 7 days away are always marked **Low** — no noise until things actually matter. Inside that window, priority is scored by a combination of urgency, assignment type, estimated hours, and point value.

| Type | Weight |
|---|---|
| Exam | 3× |
| Project | 2.5× |
| Homework / Case Study | 2× |
| Lab / EP / Assignment | 1.5× |
| Quiz | 1.2× |
| Prelab / Lecture | 1× |

---

## Assignment types

`project` · `homework` · `exam` · `quiz` · `lab` · `prelab` · `assignment` · `ep` · `casestudy` · `lecture`

---

## Course color reference

Pick a distinct color per course so chips are easy to tell apart at a glance. Avoid colors close to the priority red (`#ef4444`).

| Color | `color` | `bg` |
|---|---|---|
| Blue | `#2563eb` | `#dbeafe` |
| Purple | `#7c3aed` | `#ede9fe` |
| Pink | `#db2777` | `#fce7f3` |
| Orange | `#ea580c` | `#fff7ed` |
| Teal | `#0d9488` | `#ccfbf1` |
| Green | `#16a34a` | `#dcfce7` |

For dark mode, use a lighter tint for `darkColor` (e.g. `#60a5fa` for blue) and a deep, saturated tint for `darkBg` (e.g. `#1e3a5f`).

---

## License

© Arjun Chavan. All rights reserved. Please reach out before using or adapting this project.

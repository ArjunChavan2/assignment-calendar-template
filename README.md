# Assignment Calendar

A personal assignment tracker with a monthly calendar view, priority system, workload heatmap, and study plans. All your data lives in one config file — no backend required beyond a free Firebase project.

![Calendar preview](preview.png)

---

## What you need

- A [GitHub](https://github.com) account (free)
- A [Firebase](https://console.firebase.google.com) account (free)
- A static host — [Netlify](https://netlify.com) or GitHub Pages (both free)

---

## Setup

### 1. Get the files

Click **Use this template** (or fork this repo), then clone it to your computer:

```bash
git clone https://github.com/YOUR_USERNAME/assignment-calendar.git
cd assignment-calendar
```

### 2. Set up Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → give it a name → Create
3. In your project, click **Add app** → choose **Web** (`</>`)
4. Register the app, then copy the `firebaseConfig` object shown
5. Go to **Build → Realtime Database → Create database** → choose a region → Start in **test mode**

### 3. Edit config.js

Open `config.js` and fill in:

- **title / subtitle** — your name and course list
- **firebase** — paste the credentials from step 2
- **courses** — one entry per course (see the comments in the file for guidance)
- **assignments** — your actual assignments

Everything in `config.js` is documented inline. `index.html` never needs to be touched.

### 4. Deploy

**Option A — Netlify (recommended)**
1. Push your files to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Select your repo → leave build settings blank → Deploy
4. Your site is live at `https://YOUR-NAME.netlify.app`

**Option B — GitHub Pages**
1. Push your files to GitHub
2. Go to your repo → Settings → Pages → Source: Deploy from branch → `main` / root
3. Your site is live at `https://YOUR_USERNAME.github.io/assignment-calendar/`

### 5. Add your Firebase domain

So Firebase allows requests from your deployed site:
1. Firebase console → **Authentication → Settings → Authorized domains**
2. Add your Netlify or GitHub Pages URL

---

## Features

| Feature | Description |
|---|---|
| Calendar + List views | Monthly grid and sortable list with overdue / upcoming / completed sections |
| Priority bar | Colored bar at the top of each day showing the highest priority assignment due |
| Workload badges | `!` `!!` `!!!` on each chip showing estimated hours for that assignment |
| Panic mode | Animated banner when 3+ incomplete assignments are due within 3 days |
| Study plans | Hover over any exam or project to get a day-by-day study/work breakdown |
| Dark mode | Toggle in the header |
| Edit mode | Click the ✏ Edit button to fix mistakes, add assignments, or delete ones in the UI without touching config.js — changes sync to Firebase |
| Firebase sync | Completion state and edits sync across devices in real time |

---

## How priority works

| Condition | Level |
|---|---|
| Due in more than 7 days | Always **Low** |
| Due within 7 days | Scored by urgency + type weight + hours + points |

Type weights: Exam (3×) › Project (2.5×) › Homework (2×) › Quiz (1.2×) › Lab/EP (1.5×) › Prelab (1×)

---

## Assignment types

`project` `homework` `exam` `quiz` `lab` `prelab` `assignment` `ep` `casestudy` `lecture`

---

## Course color ideas

| Color | Hex |
|---|---|
| Blue | `#2563eb` / bg `#dbeafe` |
| Purple | `#7c3aed` / bg `#ede9fe` |
| Pink | `#db2777` / bg `#fce7f3` |
| Orange | `#ea580c` / bg `#fff7ed` |
| Teal | `#0d9488` / bg `#ccfbf1` |
| Green | `#16a34a` / bg `#dcfce7` |
| Red | `#dc2626` / bg `#fee2e2` |

For dark mode, use a lighter tint for `darkColor` (e.g. `#60a5fa` for blue) and a deep dark tint for `darkBg` (e.g. `#1e3a5f`).

---

## License

© Your Name. Personal use only.

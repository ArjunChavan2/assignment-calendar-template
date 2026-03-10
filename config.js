// ============================================================
// ASSIGNMENT CALENDAR — USER CONFIGURATION
// ============================================================
// 1. Fill in your courses and assignments below
// 2. Create a Firebase project and paste your credentials
// 3. Deploy index.html + config.js together (GitHub Pages, Netlify, etc.)
// ============================================================

const APP_CONFIG = {

  // ---- Display ----
  title: "My Assignment Calendar",        // Shows in the header and browser tab
  subtitle: "Course A · Course B · Course C — Semester Year",

  // Shown in the footer — update whenever you re-scrape your course sites
  scrapeDate: "January 1, 2026",

  // ---- Firebase ----
  // Create a free project at console.firebase.google.com
  // Add a web app → copy the config object here
  // Enable Realtime Database (test mode is fine for personal use)
  firebase: {
    apiKey:            "PASTE_YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT.firebaseapp.com",
    databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:         "YOUR_PROJECT",
    storageBucket:     "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
  },

  // ---- Courses ----
  // Add one entry per course. The key (e.g. "cs101") is used as the course ID
  // in assignments below — keep it short, lowercase, no spaces.
  //
  // Color tips:
  //   Pick a distinct color for each course so chips are easy to tell apart.
  //   Use a color picker (e.g. coolors.co) to find hex values.
  //   "bg" is the light chip background (should be a light tint of "color").
  //   "darkColor" / "darkBg" are the dark mode equivalents.
  //
  // Platform tips:
  //   "platform" is just a label shown in tooltips (e.g. "canvas", "gradescope").
  //   "platformUrl" is where clicking "View on X" links — your course's main page.
  courses: {
    cs101: {
      name: "CS 101",
      color: "#2563eb", bg: "#dbeafe",         // blue
      darkColor: "#60a5fa", darkBg: "#1e3a5f",
      platform: "canvas",
      platformUrl: "https://canvas.yourschool.edu/courses/YOUR_COURSE_ID"
    },
    math201: {
      name: "MATH 201",
      color: "#7c3aed", bg: "#ede9fe",          // purple
      darkColor: "#a78bfa", darkBg: "#2e1f5e",
      platform: "gradescope",
      platformUrl: "https://www.gradescope.com/"
    },
    eng301: {
      name: "ENG 301",
      color: "#0d9488", bg: "#ccfbf1",          // teal
      darkColor: "#2dd4bf", darkBg: "#0f3d38",
      platform: "canvas",
      platformUrl: "https://canvas.yourschool.edu/courses/YOUR_COURSE_ID"
    },
    // Add more courses by copying a block above...
  },

  // ---- Assignments ----
  // Add one object per assignment. Required fields: id, name, course, due, type.
  // Optional: time, points, hours, specUrl.
  //
  // id        — unique string, no spaces (e.g. "cs101-hw1"). Never reuse an ID.
  // name      — display name shown on the calendar chip
  // course    — must exactly match a key in the courses section above
  // due       — due date in YYYY-MM-DD format
  // time      — due time as a string (e.g. "11:59 PM"), or null
  // type      — one of: project | homework | exam | quiz | lab | prelab |
  //             assignment | ep | casestudy | lecture
  // points    — point value (number or string), or null
  // hours     — estimated hours to complete (used for workload badges + study plans)
  // specUrl   — direct link to the assignment spec page (optional)
  assignments: [
    {
      id: "cs101-hw1",
      name: "Homework 1",
      course: "cs101",
      due: "2026-02-01",
      time: "11:59 PM",
      type: "homework",
      points: 50,
      hours: 3,
      specUrl: null
    },
    {
      id: "cs101-exam1",
      name: "Midterm Exam",
      course: "cs101",
      due: "2026-03-01",
      time: "7:00 PM",
      type: "exam",
      points: 100,
      hours: 10,
      specUrl: null
    },
    {
      id: "math201-hw1",
      name: "Problem Set 1",
      course: "math201",
      due: "2026-02-05",
      time: "11:59 PM",
      type: "homework",
      points: 25,
      hours: 2,
      specUrl: null
    },
    // Add more assignments by copying a block above...
  ],

  // ---- Auto-completed ----
  // List assignment IDs that should be pre-marked as done on first load.
  // Useful for past assignments that were already submitted before you set up the calendar.
  autoCompleted: [
    // "cs101-hw1",
    // "math201-hw1",
  ]

};

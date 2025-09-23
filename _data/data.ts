export const projects = [
  {
  name: "E&F Sports",
  slug: "e-and-f",
  show: "Community sports website with mobile first schedules, simple team sign up, clear calls to action",
  desc: "A responsive site for a non profit league that centralizes game schedules, registration, donations, and updates. Focus on clear navigation, fast load, and accessibility.",
  lang: ["HTML", "CSS", "JavaScript"],
  img: "E-F.png", 
  link: "https://abdulkafi88.github.io/sports-/", 
  git: "https://github.com/Abdulkafi88/sports-",
  problem: "Parents, players, and coaches could not find schedules quickly and registration required slow email back and forth, which lowered turnout.",
  solution: "I built a single source of truth with mobile friendly schedule pages, a guided sign up form with validation, and auto routed email notifications, which reduced admin work and helped users finish in one visit."
},

{
  name: "HoopCast",
  slug: "hoopcast",
  show: "Built with React and Tailwind, shows upcoming NBA games, lets users save favorites, and uses Firebase for login",
  desc: "HoopCast is a React app that displays upcoming NBA games, allows fans to save games to a personal list, and supports secure sign in with Firebase Auth. Saved games are stored in Cloud Firestore so they persist across devices. Designed and developed entirely by Abdulkafi.",
  lang: [
    "React.js",
    "TypeScript",
    "Tailwind CSS 4",
    "Firebase Auth",
    "Cloud Firestore",
    "Vite",
    "GitHub"
  ],
  img: "HoopCast.png",
  link: "https://abdulkafi88.github.io/HoopCast/Home",
  git: "https://github.com/Abdulkafi88/HoopCast",
  problem: "NBA schedules change often, users need a fast way to see games and keep track of the ones they care about",
  solution: "I built a clean dashboard that pulls upcoming NBA games, supports search and filters, and lets users sign in with Firebase to bookmark games, bookmarks sync to Firestore and are available on any device"
}
,
  {
  name: "CodeBook",
  slug: "codebook",
  show: "Built with React and Tailwind, provides an eBook store where users can log in, buy books, and save them to a personal library",
  desc: "CodeBook is an eBook web app where users can sign in with Firebase, browse and purchase books, and save titles to a personal library for easy access later. Built entirely by Abdulkafi using React.js, Tailwind CSS, and Firebase for authentication and database storage.",
  lang: [
    "React.js",
    "Tailwind CSS 4",
    "Firebase Auth",
    "Cloud Firestore",
    "Vite",
    "GitHub"
  ],
  img: "CodeBook.png",
  link: "https://abdulkafi88.github.io/E-books/",
  git: "https://github.com/Abdulkafi88/E-books",
  problem: "Finding and saving eBooks across devices can be inconvenient without a central account system.",
  solution: "I built CodeBook to let users securely log in with Firebase, browse and purchase books, and maintain a synced personal library stored in Firestore so favorites are always available."
}
];

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
},
  
{
  name: "JobSync",
  slug: "ai-resume-analyzer",
  show: "Built with React and Tailwind, provides an AI-powered platform where users can analyze their resume against job descriptions to get match scores, skill gaps, and personalized recommendations",
  desc: "AI Job Description Analyzer is a smart web application that helps job seekers optimize their resumes using Google Gemini 2.5 Flash AI. Users paste a job description and their resume (or upload a PDF), then receive instant analysis including match scores, key skills identification, missing keywords, and actionable improvement suggestions. Built with React.js, TypeScript, Tailwind CSS, and Lovable Cloud (Supabase) for serverless AI processing.",
  lang: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Google Gemini AI",
    "Supabase Edge Functions",
    "PDF.js",
    "Vite",
    "shadcn/ui"
  ],
  img: "JobSync.png",
  link: "https://abdulkafi88.github.io/JobSync/", 
  git: "https://github.com/Abdulkafi88/JobSync", 
  problem: "Job seekers struggle to tailor their resumes to specific job descriptions and often miss critical keywords that applicant tracking systems (ATS) look for, leading to missed opportunities.",
  solution: "I built this AI-powered analyzer to instantly evaluate resumes against job descriptions using Google Gemini 2.5 Flash LLM. It provides a match score, identifies key skills, highlights missing keywords, and offers personalized improvement suggestions—helping users optimize their applications and increase their chances of getting interviews."
}
  
];

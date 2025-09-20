export const projects = [
  {
  name: "E&F Sports",
  slug: "e-and-f",
  show: "Community sports website with mobile first schedules, simple team sign up, clear calls to action",
  desc: "A responsive site for a non profit league that centralizes game schedules, registration, donations, and updates. Focus on clear navigation, fast load, and accessibility.",
  lang: ["HTML", "CSS", "JavaScript"],
  img: "E-F.png", 
  link: "https://abdulkafi88.github.io/sports-/", 
  git: "https://github.com/Abdulkafi88/ef-site",
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
  link: "https://abdulkafi88.github.io/CodeBook/",
  git: "https://github.com/Abdulkafi88/CodeBook",
  problem: "Finding and saving eBooks across devices can be inconvenient without a central account system.",
  solution: "I built CodeBook to let users securely log in with Firebase, browse and purchase books, and maintain a synced personal library stored in Firestore so favorites are always available."
}
,
  {
    name: "Job Portal",
    slug: "job-portal",
    show: " Real-world use case, responsive UI, auth + protected routes, elegant dashboard",
    desc: "A fully responsive job platform with authentication, dashboards for job seekers and recruiters, and smooth UI/UX built with modern best practices.",
    lang: [
      "React",
      "Tailwind CSS 4",
      "MongoDB",
      "Express",
      "Cloudinary",
      "GoogleOAuth",
    ],
    img: "job-portalimg.png",
    link: "https://job-portal-frontend-three-orcin.vercel.app/",
    git: "https://github.com/SteeveSticks/job-portal-mern-app",
    problem:
      "While exploring career opportunities, I noticed that job seekers often struggle with scattered job listings across multiple platforms, leading to missed opportunities. Recruiters, on the other hand, face challenges managing high volumes of applications without streamlined tools, resulting in inefficient hiring processes.",
    solution:
      "To address this, I developed the Job Portal, a centralized platform that simplifies job searching and recruitment. For job seekers, I implemented a responsive React frontend with Tailwind CSS 4 for a smooth, mobile-friendly UI, allowing easy browsing and application submission. For recruiters, I built elegant dashboards using MongoDB and Express to manage listings and candidates efficiently. GoogleOAuth ensures secure authentication, while Cloudinary handles image uploads for profiles and job posts. By integrating protected routes, I ensured only authorized users access sensitive features, reducing friction and enhancing user trust.",
  },
  {
    name: "Bookstore App",
    slug: "bookstore-app",
    show: " Clean full-stack setup, good backend experience",
    desc: "A full-stack bookstore application with user authentication, book management, and cart system. Built to reinforce backend understanding and deployment flow.",
    lang: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS 3",
      "Redux",
      "Firebase",
    ],
    img: "bookstoreimg.png",
    link: "https://stephen-book-app.vercel.app/",
    git: "https://github.com/SteeveSticks/book-app-frontend",
    problem:
      "I observed that small bookstores often struggle with manual inventory management and lack user-friendly online stores, leading to lost sales. Customers also face challenges finding and purchasing books due to outdated or complex e-commerce systems.",
    solution:
      "To tackle this, I developed the Bookstore App, a full-stack solution streamlining bookstore operations and customer purchases. The frontend, built with React and Tailwind CSS 3, offers a clean interface for browsing books and managing carts, with Redux handling state for seamless interactions. On the backend, Node.js, Express, and MongoDB manage book inventory and user data, while Firebase provides secure authentication. I optimized the deployment flow with Vercel, ensuring fast access. This app simplifies inventory updates for owners and enhances the shopping experience for customers, boosting sales efficiency.",
  },
  {
    name: "Pentagon Tokens",
    slug: "pentagon-tokens",
    show: "Live contact form with email integration",
    desc: "Diving into Web3. A sleek marketing website for a crypto project, built for a freelance client. Optimized for performance and responsiveness.",
    lang: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS 3",
      "Cloudinary",
      "EmailJS",
    ],
    img: "pentagonsTokenimg.png",
    link: "https://crypto-website-frontend-one.vercel.app/",
    git: "https://github.com/SteeveSticks/CRYPTO-WEBSITE-FRONTEND",
    problem:
      "While working with a freelance client in the Web3 space, I noticed that many crypto projects suffer from unprofessional or inaccessible websites, which undermines their credibility and deters potential investors or users from engaging with their vision.",
    solution:
      "I built Pentagon Tokens, a responsive marketing website to elevate the client’s crypto project. Using React and Tailwind CSS 3, I created a sleek, mobile-friendly frontend optimized for performance, with Cloudinary managing high-quality images. The backend, powered by Node.js, Express, and MongoDB, handles data efficiently. I integrated EmailJS for a live contact form, enabling direct user inquiries that boosted engagement by 20% based on client feedback. This solution enhanced the project’s professional image and accessibility, attracting more stakeholders.",
  },
];

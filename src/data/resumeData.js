// ─── Resume Data ──────────────────────────────────────────────
export const personal = {
  name: "Vaibhav More",
  title: "Full Stack Developer",
  subtitle: "CSE Student · Builder · Problem Solver",
  tagline: "Crafting scalable web apps with clean code and creative thinking.",
  email: "mvaibhavsantosh@gmail.com",
  email2: "themorevaibhav@gmail.com",
  phone: "+91-8010741843",
  location: "Vaijapur, Maharashtra, India",
  dob: "17 June 2005",
  github: "https://github.com/VaibhavN17",
  linkedin: "https://www.linkedin.com/in/vaibhav-more-883569397/",
  resumeUrl: "/resume/resume.pdf",
};

export const about = `I'm a Computer Science Engineering student at Sanjivani University with a passion for full-stack development. I've built production-ready applications using Angular, Spring Boot, React, and MySQL — and completed a virtual internship at HCL Technologies where I worked in an Agile team on real-world systems. I love exploring new tech, solving algorithmic challenges on LeetCode, and building things that matter.`;

// ─── Skills ───────────────────────────────────────────────────
export const skillCategories = [
  {
    label: "Frontend",
    icon: "FaCode",
    color: "#6ee7f7",
    skills: ["React.js", "Angular", "HTML5", "CSS3", "Responsive UI/UX"],
  },
  {
    label: "Backend",
    icon: "FaServer",
    color: "#a78bfa",
    skills: ["Spring Boot", "Java", "Python", "REST APIs", ".NET / C#"],
  },
  {
    label: "Database",
    icon: "FaDatabase",
    color: "#34d399",
    skills: ["MySQL", "MongoDB", "JDBC", "CRUD Design"],
  },
  {
    label: "Languages",
    icon: "FaTerminal",
    color: "#fbbf24",
    skills: ["Java", "Python", "C++", "C#", "JavaScript"],
  },
  {
    label: "Tools & Platforms",
    icon: "FaTools",
    color: "#f87171",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Eclipse"],
  },
  {
    label: "AI / ML",
    icon: "FaBrain",
    color: "#fb923c",
    skills: ["NLP", "Speech Recognition", "ML Basics", "Flask APIs", "Oracle AI & ML"],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    title: "Smart AI Assistant",
    type: "Group Project",
    description:
      "An AI assistant that understands natural language to answer questions and perform automated tasks. Features speech-to-text and text-to-speech modules for hands-free interaction, plus contextual learning for personalized recommendations.",
    tech: ["Python", "NLP", "Machine Learning", "Speech Recognition", "APIs"],
    role: ["ML Developer", "System Integrator"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "MSBT – Message Broadcasting System",
    type: "Web App",
    description:
      "A broadcasting platform to send bulk messages to many users at once. Includes role-based controls for admins and moderators to manage campaigns, plus an analytics dashboard for message delivery reports and engagement tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "React", "Angular"],
    role: ["Full Stack Developer"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Order Management System",
    type: "Web App",
    description:
      "A web system to manage product orders, customers, and inventory with full CRUD operations, real-time order status tracking, invoice generation, and business reporting dashboards.",
    tech: ["Java", "Spring Boot", "Angular", "React", "MySQL"],
    role: ["Full Stack Developer"],
    github: "#",
    live: "#",
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "HCL Technologies",
    location: "Chennai (Virtual)",
    duration: "May 12, 2025 – June 20, 2025",
    type: "Internship",
    color: "#6ee7f7",
    bullets: [
      "Worked on full stack development using Angular, Spring Boot, and MySQL.",
      "Designed and implemented REST APIs with Spring Boot for secure CRUD operations.",
      "Developed interactive frontend components in Angular with responsive UI/UX.",
      "Integrated MySQL database for efficient storage and retrieval of user and booking data.",
      "Collaborated in an Agile environment with daily stand-ups and code reviews.",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Sanjivani University",
    board: "Sanjivani University",
    year: "2027 (Expected)",
    score: "7.84 CGPA",
    color: "#a78bfa",
  },
  {
    degree: "Diploma – Engineering",
    institution: "Matoshree Institute of Technology, Dhanore",
    board: "Mumbai Board",
    year: "2024",
    score: "81.66%",
    color: "#34d399",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Kailas Patil Vidhyalaya, Vaijapur",
    board: "Pune Board",
    year: "2021",
    score: "92.60%",
    color: "#fbbf24",
  },
];

// ─── Certifications ───────────────────────────────────────────
export const certifications = [
  { title: "Oracle Certified Java Course", desc: "Core Java, OOP, Exception Handling, JDBC" },
  { title: "Oracle AI & ML Course", desc: "Fundamentals of AI & ML with real-world applications" },
  { title: "NPTEL – Algorithm Design & Analysis", desc: "Successfully completed with certification" },
];

// ─── Workshops ────────────────────────────────────────────────
export const workshops = [
  { title: "Hyperspectrum Workshop (8 Days)", desc: "Conducted by Professors from Taiwan – advanced spectrum analysis" },
  { title: "Flask API Development Seminar", desc: "Hands-on RESTful API building with Flask (Python)" },
  { title: "No-Code Application Workshop", desc: "Developing applications using AI prompts only" },
];

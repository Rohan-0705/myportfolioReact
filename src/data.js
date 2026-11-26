
export const personalInfo = {
  name: "Rohan Gaikwad",
  title: "Aspiring Full Stack Developer",
  role: "Student | Web Developer",
  location: "Pune, Maharashtra, India",
  email: "",
  phone: "",
  profileImage: "/images/profile.jpg",
  resume: "/resume.pdf",
  github: "",
  linkedin: "",
  instagram: "",
  tagline: "Building modern and responsive web applications."
};


export const aboutData = {
  id: 1,
  title: "About Me",
  subtitle: "Get To Know Me",

  name: "Rohan Gaikwad",
  role: "Full Stack Developer",

  introduction:
    "I'm an aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications.",

  description:
    "I enjoy transforming ideas into functional websites and continuously improving my problem-solving and programming skills. I focus on writing clean, efficient, and maintainable code.",

  passion:
    "I love exploring new technologies, solving coding challenges, and working on creative projects.",

  goal:
    "My goal is to become a skilled Full Stack Developer, contribute to real-world projects, and continuously grow as a software developer.",

  interests: [
    "Web Development",
    "Problem Solving",
    "Learning New Technologies",
    "Building Projects"
  ],

  buttonText: "Download Resume",
  resumeLink: "/resume.pdf"
};



export const skills = [
  {
    id: 1,
    category: "Frontend Development",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap"
    ]
  },
  {
    id: 2,
    category: "Programming Languages",
    technologies: [
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    id: 3,
    category: "Database",
    technologies: [
      "MySQL",
      "SQL"
    ]
  },
  {
    id: 4,
    category: "Tools & Technologies",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "MySQL Workbench"
    ]
  },
  {
    id: 5,
    category: "Core Concepts",
    technologies: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving",
      "Responsive Web Design"
    ]
  }
];

export const projectList = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Frontend Development",
    description:
      "A responsive e-commerce website featuring product listings, categories, product search and an interactive user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    github: "",
    liveDemo: "",
    status: "In Progress",
    featured: true
  },
  {
    id: 2,
    title: "Expense Tracker",
    category: "Web Application",
    description:
      "An expense management application that allows users to add, delete and track daily expenses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1768839724098-d2541fe1311d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    github: "",
    liveDemo: "",
    status: "In Progress",
    featured: true
  },
  {
    id: 3,
    title: "Air India Website Clone",
    category: "Frontend Development",
    description:
      "A responsive frontend recreation of the Air India website featuring navigation, booking interface and modern layouts.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1761203632753-976368cb66b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    github: "",
    liveDemo: "",
    status: "In Progress",
    featured: true
  },
  {
    id: 4,
    title: "Ladakh Travel Website",
    category: "Frontend Development",
    description:
      "A travel website showcasing Ladakh tourist destinations, travel packages and destination information.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "https://media.istockphoto.com/id/187639600/photo/beautiful-landscape-in-norther-part-of-india.jpg?s=2048x2048&w=is&k=20&c=AbfzyjzO0IwQ2i9D3tklbSwo_cEyXgILXyDd1jNbYzY=",
    liveDemo: "https://media.istockphoto.com/id/187639600/photo/beautiful-landscape-in-norther-part-of-india.jpg?s=2048x2048&w=is&k=20&c=AbfzyjzO0IwQ2i9D3tklbSwo_cEyXgILXyDd1jNbYzY=",
    status: "In Progress",
    featured: false
  },
  {
    id: 5,
    title: "Naturals Ice-Cream Website Clone",
    category: "Frontend Development",
    description:
      "A responsive website clone featuring product sections, navigation menus and interactive user interface elements.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "https://i.pinimg.com/474x/49/87/48/498748573d88972086327599d21a08ef.jpg",
    github: "",
    liveDemo: "",
    status: "In Progress",
    featured: false
  }
];


export const education = 
  {
    id: 1,
    degree: "Bachelor's Degree",
    institution: "Rajarambapu Institute of Technology",
    location: "Islampur, Sangli, Maharashtra",
    startYear: "2022",
    endYear: "2026",
    grade: "CGPA : 7.57",
    description:
      "Completed my bachelor's degree at Rajarambapu Institute of Technology, gaining technical knowledge, programming skills, and problem-solving experience."
  }


export default education;


export const experience = [];

export const certifications = [];

export const contactInfo = {
  heading: "Get In Touch",
  description:
    "I'm open to internships, collaboration and software development opportunities.",
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin
};

export const navigationLinks = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Skills", path: "#skills" },
  { id: 4, name: "Projects", path: "#projects" },
  { id: 5, name: "Education", path: "#education" },
  { id: 6, name: "Contact", path: "#contact" }
];

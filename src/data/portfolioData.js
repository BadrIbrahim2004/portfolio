export const portfolioData = {
  personal: {
    name: "Badr Ibrahim",
    title: "Full Stack MEAN Developer",
    tagline:
      "Turning ideas into scalable digital products with modern UI and robust backend systems.",
    email: "badr.ibrahim.dev@gmail.com",
    phone: "01062678672",
    location: "Eg",
    bio: "I'm a Computer Science student passionate about building full-stack web applications. With expertise in the MEAN stack (MongoDB, Express, Angular, Node.js), I create scalable solutions with clean architecture and focus on both backend robustness and modern, responsive UI.",
    cvLink: "/Badr_Ibrahim_CV1.pdf",
    logo: "/logo.png",
    profileImage: "/badr.jpeg",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BadrIbrahim2004",
        icon: "bi-github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/badr-ibrahim-0430402a8/",
        icon: "bi-linkedin",
      },
      {
        name: "Twitter",
        url: "https://x.com/BadrIbrahim_Dev",
        icon: "bi-twitter",
      },
      {
        name: "Email",
        url: "mailto:badr.ibrahim.dev@gmail.com",
        icon: "bi-envelope",
      },
    ],
  },

  about: {
    title: "About Me",
    description:
      "I'm a Computer Science student and Full Stack JavaScript Developer with experience in both Angular and React for frontend development, and Node.js with MongoDB on the backend. I focus on building scalable, maintainable, and modern web applications with clean architecture and strong performance.",
    features: [
      {
        title: "Problem Solver",
        description:
          "I break down complex problems into elegant, efficient solutions.",
      },
      {
        title: "Fast Learner",
        description:
          "I stay updated with the latest technologies and best practices.",
      },
      {
        title: "Team Player",
        description:
          "I collaborate effectively and communicate clearly with teams.",
      },
    ],
  },

  education: [
    {
      period: "Oct 2022 - Jun 2026 (Expected)",
      title: "Bachelor of Science in Computer Science",
      institution: "Faculty of Science, Computer Science Department",
      description:
        "Studying core computer science subjects including data structures, algorithms, operating systems, and software engineering, with a strong focus on web development and modern JavaScript technologies.",
    },
    {
      period: "Aug 17, 2025 - Sep 14, 2025",
      title: "React.js Intensive Training (120 Hours)",
      institution: "Professional Training Program",
      description:
        "Completed 120 hours of hands-on training covering React fundamentals, hooks, state management, component architecture, and building real-world responsive applications.",
    },
    {
      period: "Jan 5, 2026 - May 1, 2026",
      title: "MEAN Stack Diploma (210 Hours)",
      institution: "Professional Training Program",
      description:
        "Completed 210 hours of technical and freelancing training (180 technical + 30 freelancing hours). Gained practical experience in MongoDB, Express.js, Angular, and Node.js, building scalable full-stack applications.",
    },
  ],
  skills: [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "Angular",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive & Mobile-First Design",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication & Authorization",
        "Server-side Architecture",
      ],
    },
    {
      category: "Database",
      items: [
        "MongoDB",
        "Data Modeling",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Figma",
        "Linux",
        "Command Line",
      ],
    },
  ],

 projects: [
    {
      id: 1,
      title: "Friends Desserts",
      description: "A high-performance, fully responsive digital menu web application tailored for food and sweet businesses.",
      longDescription: "Designed a modern Dark Theme UI/UX and integrated seamless multi-language support (Arabic/English) with dynamic client-side filtering for optimized user browsing and a custom communication FAB.",
      image: "/friends screen.png",
      technologies: ["React", "Bootstrap 5", "Vite"],
      liveUrl: "https://friends-menu-c4xt.vercel.app/",
      githubUrl: "https://github.com/BadrIbrahim2004/friends-menu"
    },
    {
      id: 2,
      title: "CinemaX Platform",
      description: "A full-stack cinema booking system developed as a collaborative graduation project.",
      longDescription: "Features an advanced 2D interactive seat mapping system, real-time movie management components, customized styling, and a robust Mongoose backend with secure validation models.",
      image: "/cinemax screen.png",
      technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      // liveUrl: "https://your-cinemax-live-link.vercel.app",
      githubUrl: "https://github.com/CinemaX-Nti/back-end"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing technical projects, components, and skills.",
      longDescription: "Focused on clean layouts, optimal contrast, accessibility standards, standardized custom UI components, and smooth navigation to highlight professional identity.",
      image: "/portfolio screen.png", // تقدر تغيرها بصورة موقعك الحقيقي
      technologies: ["React", "Bootstrap", "Custom CSS", "Vercel"],
      liveUrl: "https://badr-portfolio-seven.vercel.app/",
      githubUrl: "https://github.com/BadrIbrahim2004/portfolio"
    },
    {
      id: 4,
      title: "Digital Business Card",
      description: "A modern, responsive digital business card designed for seamless professional networking.",
      longDescription: "Developed a centralized professional hub featuring dynamic social links, direct contact actions, portfolio integration, and embedded payment options (InstaPay/Vodafone Cash). Optimized for fast loading and mobile-first responsiveness.",
      image: "/digital-card screen.png", 
      technologies: ["React", "Custom CSS", "Vercel"],
    
      liveUrl: "https://digital-card-ten-zeta.vercel.app/",
      githubUrl: "https://github.com/BadrIbrahim2004/digital-card"
    }
  ],

  contact: {
    title: "Get In Touch",
    description:
      "I'm always open to new opportunities and interesting projects. Feel free to reach out!",
    formPlaceholders: {
      name: "Your Name",
      email: "your.email@example.com",
      message: "Your message here...",
    },
  },
};

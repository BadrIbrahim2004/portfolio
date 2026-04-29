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
    cvLink: "#",
    logo: "src/assets/images/logo2.png",
    profileImage:
      "src/assets/images/badr2.jpeg",
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
  }
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
      "Responsive & Mobile-First Design"
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication & Authorization",
      "Server-side Architecture"
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "Data Modeling",
      "Database Design",
      "Query Optimization"
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
      "Command Line"
    ],
  },
],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, order management, and payment integration. Features user authentication, admin dashboard, and real-time inventory tracking.",
      longDescription:
        "Built a complete e-commerce solution using MEAN stack with secure authentication, Stripe payment integration, and an intuitive admin panel for managing products and orders.",
      image:
        "https://miycyijbtwdjxjahxcra.supabase.co/storage/v1/object/public/projects/E-commerce%20Platform%20with%20Payment%20&%20Order%20Management.webp",
      technologies: [
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "Stripe API",
      ],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description:
        "A responsive admin dashboard for managing user data, analytics, and system metrics. Includes interactive charts, data tables, and real-time updates with a modern, intuitive UI.",
      longDescription:
        "Developed a comprehensive admin dashboard with real-time data visualization, user management system, and advanced filtering capabilities.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "Bootstrap", "Chart.js", "MongoDB", "Express.js"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Authentication API System",
      description:
        "A robust RESTful API with JWT authentication, email verification, password reset, and role-based access control. Fully documented with Postman and tested with comprehensive unit tests.",
      longDescription:
        "Built a secure, production-ready authentication system with OAuth 2.0 support, rate limiting, and comprehensive error handling.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user assignments, and progress tracking. Features drag-and-drop interface and team collaboration tools.",
      longDescription:
        "Created a full-stack task management system with WebSocket integration for real-time collaboration and intuitive user interface.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io", "Bootstrap"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
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

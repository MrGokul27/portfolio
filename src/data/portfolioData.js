export const portfolioData = {
  brand: {
    logoText: "DevPortfolio",
    monogram: "</>",
    fullName: "Gokulanath JP",
    title: "Frontend Developer",
    availabilityBadge: "Open to Frontend Opportunities",
    copyrightOwner: "Gokulanath JP",
  },

  hero: {
    greeting: "Welcome to my portfolio",
    heading: "Hi, I'm Gokulanath JP",
    supportingText:
      "I build modern, responsive, and user-friendly web experiences using HTML, CSS, JavaScript, Bootstrap, and React.js.",
    typingRoles: ["Frontend Developer", "React.js Developer", "Web Developer"],
    primaryCta: {
      label: "View My Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Download Resume",
    },
    // Optional: replace null with '/images/profile.jpg' to show your headshot
    profileImage: null,
  },

  resume: {
    // Place your PDF in /public and update fileUrl + fileName below
    fileUrl: "/Frontend_Developer_Resume_Template.pdf",
    fileName: "Frontend_Developer_Resume.pdf",
    isPlaceholder: true,
  },

  socialLinks: {
    email: "gokulanathjp@gmail.com",
    github: "https://github.com/MrGokul27",
    linkedin: "https://linkedin.com/in/gokulanath-jp-464465261",
    phone: "+91 9600491195",
  },

  about: {
    sectionEyebrow: "About Me",
    sectionTitle: "Crafting clean interfaces with purpose and precision",
    intro:
      "I'm a passionate Frontend Developer who enjoys creating responsive and interactive web applications. I have hands-on experience working with modern frontend technologies and developing user-friendly interfaces. I continuously explore new technologies and improve my development skills to build better digital experiences.",
    summary:
      "I enjoy transforming creative ideas and UI designs into functional web experiences using HTML, CSS, Bootstrap, JavaScript, and React.js—focusing on clean, maintainable code and seamless user experiences across devices.",
    pillars: [
      {
        id: "interests",
        icon: "Layers",
        title: "Technical Interests",
        description:
          "Component-driven UI architecture in React.js, responsive grid systems, accessible semantic markup, and micro-interactions that elevate usability.",
      },
      {
        id: "problem-solving",
        icon: "Cpu",
        title: "Problem-Solving Mindset",
        description:
          "Breaking complex interface requirements into structured, testable UI states and edge-case-resilient layouts for every viewport.",
      },
      {
        id: "learning",
        icon: "Compass",
        title: "Continuous Learning",
        description:
          "Actively staying current with modern ES6+ patterns, React Hooks best practices, CSS architecture, and web performance optimization.",
      },
      {
        id: "clean-code",
        icon: "Code2",
        title: "Clean Coding Practices",
        description:
          "Writing readable, modular, reusable components with consistent naming conventions, semantic HTML5, and maintainable stylesheets.",
      },
    ],
  },

  skills: {
    sectionEyebrow: "Technical Skills",
    sectionTitle: "Core Frontend Stack",
    sectionSubtitle:
      "Technologies I use to design, structure, style, and build responsive web applications.",
    items: [
      {
        id: "react",
        name: "React.js",
        iconKey: "react",
        accent: "#61DAFB",
        category: "Frontend",
        description:
          "Reusable functional components, React Hooks state management, clean prop composition, and reactive single-page interfaces.",
        highlights: ["React Hooks", "Component UI", "State & Props"],
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        iconKey: "javascript",
        accent: "#F7DF1E",
        category: "Frontend",
        description:
          "Interactive DOM workflows, asynchronous data fetching, modular ES6+ syntax, array transformations, and form validation.",
        highlights: ["ES6+ Syntax", "Async / Fetch", "DOM & Events"],
      },
      {
        id: "html5",
        name: "HTML5",
        iconKey: "html5",
        accent: "#E34F26",
        category: "Frontend",
        description:
          "Semantic document structure, accessible landmarks, SEO-friendly markup, and standards-compliant forms.",
        highlights: ["Semantic Tags", "Accessibility (A11y)", "SEO Structure"],
      },
      {
        id: "css3",
        name: "CSS3",
        iconKey: "css3",
        accent: "#1572B6",
        category: "Frontend",
        description:
          "Modern Flexbox and CSS Grid layouts, custom properties, responsive media queries, and smooth keyframe transitions.",
        highlights: ["Flexbox & Grid", "CSS Variables", "Responsive UI"],
      },
      {
        id: "bootstrap",
        name: "Bootstrap 5",
        iconKey: "bootstrap",
        accent: "#7952B3",
        category: "Frontend",
        description:
          "Rapid, mobile-first grid composition, utility-driven spacing, accessible components, and consistent theme customization.",
        highlights: ["12-Column Grid", "Utility Classes", "Mobile-First"],
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        iconKey: "tailwind",
        accent: "#38BDF8",
        category: "Frontend",
        description:
          "Utility-first CSS framework for building custom designs rapidly with responsive, composable class-based styling.",
        highlights: ["Utility-First", "Responsive Design", "Custom Themes"],
      },
      {
        id: "materialui",
        name: "Material UI",
        iconKey: "materialui",
        accent: "#0081CB",
        category: "Frontend",
        description:
          "React component library implementing Google Material Design with pre-built accessible, themeable UI components.",
        highlights: ["Component Library", "Theming", "Accessibility"],
      },
      {
        id: "vite",
        name: "Vite",
        iconKey: "vite",
        accent: "#BD34FE",
        category: "Frontend",
        description:
          "Next-generation frontend build tool with instant HMR, optimized production bundling, and fast dev server startup.",
        highlights: ["Fast HMR", "ESM Native", "Build Optimization"],
      },
      {
        id: "redux",
        name: "Redux",
        iconKey: "redux",
        accent: "#764ABC",
        category: "State Management",
        description:
          "Predictable state container for JavaScript apps with centralized store, actions, and reducers for complex state flows.",
        highlights: ["Centralized Store", "Actions & Reducers", "DevTools"],
      },
      {
        id: "react-hooks",
        name: "React Hooks",
        iconKey: "react",
        accent: "#61DAFB",
        category: "State Management",
        description:
          "Built-in React Hooks for local state, side effects, context consumption, and performance optimization in functional components.",
        highlights: ["useState", "useEffect", "useContext"],
      },
      {
        id: "rest-api",
        name: "REST API Integration",
        iconKey: "api",
        accent: "#22C55E",
        category: "Integration",
        description:
          "Consuming RESTful APIs using Fetch and Axios, handling async data flows, error states, and authentication headers.",
        highlights: ["Fetch / Axios", "Async Handling", "Auth Headers"],
      },
      {
        id: "auth-ui",
        name: "Authentication UI",
        iconKey: "auth",
        accent: "#F59E0B",
        category: "Integration",
        description:
          "Building secure login, registration, and protected route flows with token-based authentication and form validation.",
        highlights: ["Login / Register", "Protected Routes", "Token Auth"],
      },
      {
        id: "responsive",
        name: "Responsive Web Design",
        iconKey: "responsive",
        accent: "#06B6D4",
        category: "Development",
        description:
          "Crafting fluid, mobile-first layouts that adapt seamlessly across all screen sizes using media queries and flexible grids.",
        highlights: ["Mobile-First", "Media Queries", "Fluid Layouts"],
      },
      {
        id: "components",
        name: "Reusable Components",
        iconKey: "components",
        accent: "#8B5CF6",
        category: "Development",
        description:
          "Designing modular, composable UI components with clear props API, separation of concerns, and consistent styling.",
        highlights: ["Modular Design", "Props API", "DRY Principles"],
      },
      {
        id: "dashboard",
        name: "Dashboard Development",
        iconKey: "dashboard",
        accent: "#EC4899",
        category: "Development",
        description:
          "Building data-rich admin dashboards with charts, tables, filters, and real-time UI updates for business applications.",
        highlights: ["Data Visualization", "Tables & Filters", "Admin UI"],
      },
      {
        id: "cross-browser",
        name: "Cross-Browser Compatibility",
        iconKey: "browser",
        accent: "#F97316",
        category: "Development",
        description:
          "Ensuring consistent UI rendering and functionality across Chrome, Firefox, Safari, and Edge with progressive enhancement.",
        highlights: ["Browser Testing", "Polyfills", "Progressive Enhancement"],
      },
      {
        id: "uiux",
        name: "UI/UX Implementation",
        iconKey: "uiux",
        accent: "#14B8A6",
        category: "Development",
        description:
          "Translating design mockups and wireframes into pixel-perfect, accessible, and interactive frontend interfaces.",
        highlights: ["Pixel-Perfect UI", "Accessibility", "Design Handoff"],
      },
      {
        id: "performance",
        name: "Performance Optimization",
        iconKey: "performance",
        accent: "#EF4444",
        category: "Development",
        description:
          "Improving load times and runtime performance through code splitting, lazy loading, memoization, and asset optimization.",
        highlights: ["Lazy Loading", "Code Splitting", "Memoization"],
      },
    ],
  },

  experience: {
    sectionEyebrow: "Work Experience",
    sectionTitle: "Professional Journey",
    sectionSubtitle:
      "A timeline of my frontend engineering roles, contributions, and growth across companies.",
    items: [
      {
        id: "exp-1",
        companyName: "STACKLY",
        role: "Software Engineer",
        duration: "Apr 2026 – Present",
        location: "Chennai, Tamil Nadu, India",
        employmentType: "Full-time · Remote",
        responsibilities: [
          "Develop and maintain 30+ responsive frontend website templates using HTML, CSS, JavaScript, and Bootstrap.",
          "Build 5+ responsive UI/UX website templates with consistent layouts and user-focused interface patterns.",
          "Implement authentication pages and dashboard interfaces across template projects.",
          "Ensure cross-device responsiveness across desktop, tablet, and mobile screen sizes.",
        ],
        projects: [
          {
            id: "stackly-p1",
            name: "Website & UI/UX Template Library",
            description:
              "Created 30+ frontend website templates and 5+ UI/UX website templates, featuring responsive layouts, authentication flows, and dashboard pages.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
          },
        ],
      },
      {
        id: "exp-2",
        companyName: "WELE INTELLITECH Pvt Ltd",
        role: "Frontend Developer",
        duration: "Feb 2026 – Mar 2026",
        location: "Pondicherry, India",
        employmentType: "Part-time · On-site",
        responsibilities: [
          "Developed frontend features for an AI-enabled course-learning platform combining tutor-led learning with AI-powered assistance.",
          "Built interfaces that allow learners to ask questions and receive clarifications related to course content.",
          "Created responsive UI components using React.js, Vite, and Tailwind CSS.",
          "Integrated frontend APIs to connect platform interfaces with backend services and AI-assisted learning functionality.",
        ],
        projects: [
          {
            id: "wele-p1",
            name: "AI-Powered Course Learning Platform",
            description:
              "A course-learning platform combining tutor-led learning with an AI tool for communicating doubts and receiving course-related clarifications.",
            technologies: [
              "React.js",
              "Vite",
              "Tailwind CSS",
              "REST API Integration",
            ],
          },
        ],
      },
      {
        id: "exp-3",
        companyName: "HEPL | Hema's Enterprises Private Limited",
        role: "Jr Engineer",
        duration: "Aug 2023 – Oct 2025",
        location: "Cuddalore, Tamil Nadu, India",
        employmentType: "Full-time · On-site",
        responsibilities: [
          "Developed and maintained responsive websites and web applications using React.js, Redux, JavaScript, Material UI, HTML, and CSS.",
          "Built reusable React components and interactive interfaces to improve navigation, usability, and consistency across application modules.",
          "Integrated REST APIs and collaborated with backend developers to support reliable frontend-to-backend data communication.",
          "Worked with designers and cross-functional teams to implement UI/UX requirements and deliver features within project timelines.",
          "Improved application performance, responsiveness, and cross-browser compatibility.",
        ],
        projects: [
          {
            id: "hepl-p1",
            name: "BUDGIE",
            description:
              "Developed the IIY (Invest in Yourself), Document Center, and Company Policy modules. Integrated RESTful APIs for the IIY workflow and built reusable forms, data tables, modals, and conditional UI views. Managed state with Redux and React Hooks; implemented responsive interfaces using Material UI and custom CSS.",
            technologies: [
              "React.js",
              "Redux",
              "Material UI",
              "REST API Integration",
            ],
          },
          {
            id: "hepl-p2",
            name: "CKEDGE",
            description:
              "Enhanced a modern, responsive website in line with current UI/UX practices and cross-device requirements. Focused on performance, accessibility, and compatibility across desktop, tablet, and mobile devices.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
          },
          {
            id: "hepl-p3",
            name: "Business Clinique",
            description:
              "Independently developed a WordPress website comprising 6 main pages and 8 subpages using Elementor. Implemented clean page structure, intuitive navigation, and responsive layouts for mobile, tablet, and desktop.",
            technologies: ["WordPress", "Elementor", "Responsive Design"],
          },
        ],
      },
    ],
  },

  projects: {
    sectionEyebrow: "Projects",
    sectionTitle: "Featured Project Placeholders",
    sectionSubtitle:
      "Three customizable project templates ready for your real case studies, live demos, and GitHub repositories.",
    items: [
      {
        id: "project-1",
        name: "[Project 01 — SaaS Analytics Dashboard]",
        statusLabel: "Editable Placeholder",
        description:
          "Replace this summary with your real project overview—describe the problem solved, responsive layout, and interactive frontend features built.",
        thumbnail: "/images/project-1.svg",
        thumbnailAlt:
          "Preview illustration for SaaS Analytics Dashboard placeholder project",
        technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "Bootstrap"],
        // Set liveUrl / githubUrl to your real URLs when ready (leave empty string for unconfigured placeholder)
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: "project-2",
        name: "[Project 02 — Modern E-Commerce UI]",
        statusLabel: "Editable Placeholder",
        description:
          "Replace this summary with your real project overview—highlight product filtering, cart interactions, mobile responsiveness, and clean UI structure.",
        thumbnail: "/images/project-2.svg",
        thumbnailAlt:
          "Preview illustration for Modern E-Commerce UI placeholder project",
        technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)"],
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: "project-3",
        name: "[Project 03 — Task Workspace App]",
        statusLabel: "Editable Placeholder",
        description:
          "Replace this summary with your real project overview—outline component architecture, React Hooks state flow, and accessibility refinements.",
        thumbnail: "/images/project-3.svg",
        thumbnailAlt:
          "Preview illustration for Task Workspace App placeholder project",
        technologies: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"],
        liveUrl: "",
        githubUrl: "",
      },
    ],
  },

  education: {
    sectionEyebrow: "Education",
    sectionTitle: "Academic Background",
    sectionSubtitle: "Editable academic credentials and graduation details.",
    items: [
      {
        id: "edu-1",
        degree: "Bachelor of Technology (B.Tech.) — Information Technology",
        institution:
          "Sri Manakula Vinayagar Engineering College, Puducherry, India",
        graduationYear: "2022",
        details: "2018 – 2022",
      },
    ],
  },

  contact: {
    sectionEyebrow: "Contact",
    sectionTitle: "Let's Build Something Together",
    sectionSubtitle:
      "Have a frontend role, freelance project, or collaboration in mind? Reach out using the form or connect directly.",
    /**
     * Configure a real form backend endpoint (e.g., Formspree, Web3Forms, or your API).
     * Example Formspree URL: 'https://formspree.io/f/yourFormId'
     * While empty, the form validates all inputs and notifies the user that a form
     * service endpoint must be configured (plus offers a direct mailto fallback).
     */
    formEndpoint: "",
    email: "gokulanathjp@gmail.com",
    location: "Cuddalore, Tamil Nadu, India",
  },

  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
};

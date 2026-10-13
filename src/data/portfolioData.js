export const profile = {
  name: "Andi Muhamad Fachreza",
  initials: "AF",
  role: "Full Stack Developer",
  headline: "Full Stack Developer   Laravel, React.js & WordPress",
  tagline:
    "Building web based business solutions from planning and UI/UX design to deployment.",
  summary:
    "Information Technology graduate from Universitas Muhammadiyah Yogyakarta with hands on experience in Full Stack Web Development, specializing in Laravel, React, and WordPress development. Experienced in developing web based business solutions, including event ticketing systems, payment gateway integration, admin dashboards, and responsive landing pages. Skilled in building scalable applications from planning and UI/UX design to deployment and maintenance. Passionate about creating efficient, user friendly, and high performance digital products.",
  email: "fachrezandi123@gmail.com",
  phone: "+62 852-1384-0489",
  whatsapp: "https://wa.me/6285213840489",
  github: "https://github.com/fachrezza",
  githubHandle: "fachrezza",
  website: "https://fachrezza.github.io/portofolio-new-andi/",
  location: "Indonesia",
  resume: `${import.meta.env.BASE_URL}NEW_RESUME_ANDI_MUHAMAD_FACHREZA.pdf`,
  photo: `${import.meta.env.BASE_URL}me.jpeg`,
  shortName: "Fachreza",
  intro:
    "Full stack developer working mostly with Laravel and React   from the database and API all the way to the screen people click on. Currently interning as a web developer at PT Sanken Argadwijaya, and freelancing on the side since 2021.",
  about: [
    "I studied Information Technology at Universitas Muhammadiyah Yogyakarta, but most of what I know came from shipping real projects for real clients   event ticketing with payment gateways, admin dashboards, company profiles, and landing pages that need to load fast and rank well.",
    "I like owning the whole thing: sketching the flow in Figma, designing the database, writing the API, building the UI, and deploying it to a Linux server. Lately I've also been connecting web backends to ESP32 hardware on a factory floor, which has been a fun change of pace.",
  ],
};

export const stats = [
  { value: "5+", label: "years building for the web" },
  { value: "100%", label: "freelance projects delivered" },
  { value: "3.66", label: "GPA, B.IT at UMY" },
  { value: "2", label: "national competition medals" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    desc: "Core languages used across backend, frontend and scripting work.",
    items: ["PHP", "JavaScript", "TypeScript", "Golang", "Python", "Java", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    desc: "Backend APIs, SPA frontends, authentication and CMS based sites.",
    items: ["Laravel", "React.js", "Bootstrap", "Tailwind CSS", "WordPress", "Axios", "Laravel Sanctum"],
  },
  {
    title: "Databases",
    desc: "Relational schema design, optimization and operational records.",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    desc: "Version control, design, API testing and server deployment.",
    items: ["Git", "GitHub", "Figma", "Postman", "Elementor", "SQLyog", "Nginx", "Linux Server"],
  },
  {
    title: "Other Skills",
    desc: "End to end delivery from database design to IoT integration and deployment.",
    items: [
      "REST API Development",
      "Payment Gateway Integration",
      "Database Design",
      "UI/UX Design",
      "SEO Optimization",
      "Responsive Web Design",
      "QR/Barcode Implementation",
      "Excel Export & Reporting",
      "IoT Integration (ESP32)",
      "Server Deployment",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Event Ticketing Management System",
    tech: ["Laravel", "React.js", "PostgreSQL", "Midtrans API"],
    description:
      "Complete web based event ticketing platform for event organizers and attendees.",
    features: [
      "RESTful APIs with Laravel for events, tickets and transactions",
      "Authentication & authorization with Laravel Sanctum",
      "Midtrans Payment Gateway integration",
      "Axios API communication & React Router navigation",
      "Automatic tickets with unique barcode",
      "Attendee check-in via barcode scanning",
      "Admin dashboard for events, transactions & participants",
      "Excel export for attendance & transaction reports",
      "Deployed on Linux server using Nginx",
    ],
    github: "https://github.com/fachrezza/web-eventkajian",
  },
  {
    id: 2,
    title: "Accounting System",
    tech: ["Laravel", "Inertia.js", "React.js", "MySQL", "phpMyAdmin"],
    description:
      "A web-based accounting system for a client's day-to-day finance work. I handled it full-stack, from database to UI, and deployed it to production.",
    features: [
      "Financial dashboard with cash position, AR/AP and revenue, expense & profit trends",
      "Purchasing and sales modules with outstanding receivables and payables",
      "General ledger and chart of accounts",
      "Bank account and cash management",
      "Master data for clients, vendors, campaigns and internal PICs",
      "Built as a Laravel + Inertia.js monolith with React pages",
      "Deployed and maintained on the production server",
    ],
    images: [
      { file: "dashboard-accounting", caption: "Finance overview dashboard" },
      { file: "dashboard-accounting2", caption: "Accounting module" },
      { file: "dashboard-accounting3", caption: "Accounting module" },
      { file: "dashboard-accounting4", caption: "Accounting module" },
    ],
    private: true,
  },
  {
    id: 3,
    title: "Responsive Landing Page Development",
    tech: ["React.js"],
    description:
      "Modern and responsive landing pages for business promotion and lead generation.",
    features: [
      "Mobile first responsive design",
      "SEO friendly page structure",
      "Optimized performance and loading speed",
      "CTA focused user experience",
    ],
    images: [
      { file: "landing-page-web", caption: "PublishMate — desktop" },
      { file: "landing-page-mobile", caption: "PublishMate — mobile" },
      { file: "reserve-web", caption: "Garden Cafe — home" },
      { file: "reserve-web2", caption: "Garden Cafe" },
      { file: "reserve-web3", caption: "Garden Cafe" },
      { file: "reserve-web4", caption: "Garden Cafe" },
    ],
    github: "https://github.com/fachrezza",
    links: [
      { label: "PublishMate", url: "https://publishmate.vercel.app/" },
      { label: "Garden Cafe", url: "https://restaurant-template-one-sepia.vercel.app/" },
    ],
  },
  {
    id: 4,
    title: "Company Profile Website Development",
    tech: ["React.js"],
    description: "Company profile websites built with React for agencies and businesses.",
    features: [
      "Responsive company profile pages",
      "Reusable React components for each section",
      "SEO optimization",
      "Performance optimization",
    ],
    images: [
      { file: "company-prof", caption: "NuxSpace — home" },
      { file: "company-prof2", caption: "NuxSpace" },
      { file: "company-prof3", caption: "NuxSpace" },
    ],
    github: "https://github.com/fachrezza",
    links: [{ label: "NuxSpace", url: "https://nuxspace.vercel.app/" }],
  },
];

export const experiences = [
  {
    period: "Sep 2026 – Present",
    company: "PT Sanken Argadwijaya",
    location: "North Jakarta, Indonesia",
    role: "Web Developer / Full Stack Developer Intern",
    points: [
      "Developed a backend system for an ESP32 based project to record and monitor active machines in the factory.",
      "Built RESTful API endpoints using Laravel and PHP to receive data from and send commands to ESP32 devices.",
      "Managed data acquisition logic to ensure machine activity data was captured, validated, and stored reliably.",
      "Designed and managed MySQL database structures for machine logs and operational records using SQLyog.",
      "Collaborated on integrating ESP32 hardware with the web backend to support production monitoring.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "SQLyog", "ESP32"],
  },
  {
    period: "Jun 2021 – Present",
    company: "Self Employed / Freelance",
    location: "Yogyakarta, Indonesia",
    role: "Full Stack Developer",
    points: [
      "Delivered multiple freelance web development projects for SMEs, organizations, and individual clients.",
      "Developed web applications using Laravel, React, JavaScript, PHP, and PostgreSQL / MySQL.",
      "Built event management systems, company profile websites, landing pages, and administrative dashboards.",
      "Designed UI/UX prototypes using Figma before development.",
      "Managed complete project lifecycle from requirement gathering to deployment.",
      "Maintained 100% project delivery completion rate.",
    ],
    tech: ["Laravel", "React", "JavaScript", "PHP", "PostgreSQL", "MySQL", "Figma"],
  },
  {
    period: "May 2025",
    company: "PT Cakrawala Inovasi Indonesia",
    location: "Jakarta, Indonesia",
    role: "Freelance Web Developer",
    points: [
      "Built a WordPress company profile website using Elementor and custom front end code.",
      "Improved website loading performance by 35% through code optimization.",
      "Implemented SEO structure that helped increase organic search visibility by 20%.",
    ],
    tech: ["WordPress", "Elementor", "SEO"],
  },
  {
    period: "Feb 2023 – Mar 2023",
    company: "Telkomsat",
    location: "Bogor, Indonesia",
    role: "Full Stack Developer Intern",
    points: [
      "Developed an admin dashboard web system that improved internal data management efficiency by 30%.",
      "Implemented SEO optimization techniques that increased website visibility by 25%.",
      "Designed and structured databases that improved data processing speed by 20%.",
    ],
    tech: ["Dashboard", "SEO", "Database Design"],
  },
];

export const education = {
  school: "Universitas Muhammadiyah Yogyakarta",
  location: "Yogyakarta, Indonesia",
  degree: "Bachelor of Information Technology",
  gpa: "3.66",
  graduated: "Oct 2025",
  awards: [
    {
      title: "Gold Medal",
      event: "National Product Design Competition (MSME Productivity)",
    },
    {
      title: "Silver Medal",
      event:
        "Muhammadiyah Student Competency Event (Software Application Development)",
    },
  ],
};

export const additionalExperiences = [
  {
    period: "Dec 2022 – Jan 2024",
    company: "Generasi Indonesia Mengabdi (GENESIA)",
    location: "Yogyakarta, Indonesia",
    role: "Creative Media Staff",
    points: [
      "Produced multimedia documentation and visual materials for community programs.",
      "Designed promotional content and edited photos/videos for digital publication.",
    ],
    tech: ["Multimedia", "Graphic Design", "Video Editing"],
  },
  {
    period: "Feb 2022 – Jun 2022",
    company: "Information Technology Anniversary Event (IT SPECTA)",
    location: "Yogyakarta, Indonesia",
    role: "Media Team",
    points: [
      "Created visual documentation and promotional content, contributing to event media coverage and audience engagement.",
      "Produced graphic designs, photography, and video editing materials used for event promotion and documentation.",
    ],
    tech: ["Graphic Design", "Photography", "Video Editing"],
  },
];

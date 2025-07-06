// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "John Salim | Full Stack Developer",
  description:
    "I deliver full stack solutions using modern technologies — fast, secure, and built to scale.",
  siteUrl: "https://johnsalimrobert.com/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design frontend systems.",
  "I build modern UIs with React.",
  "I develop dynamic frontends.",
  "I design seamless user flows.",
  "I create real-time experiences.",
  "I write scalable UI code"
];

export const EMAIL = "johnsalimrobert@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/reactdev-john-salim-robert/",
  github: "https://github.com/JohnSalimRobert",
  // medium: "https://alphaayush.medium.com/",
  // instagram: "https://www.instagram.com/alphaayush/",
  // facebook: "https://www.facebook.com/ayush013",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  // twitter: "https://twitter.com/ayush013",
  // topmate: "https://www.topmate.io/alphaayush/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "BuilderBuilderPro - Construction Management",
    image: "/projects/builder.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "AI powered construction management platform",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.builderbuilder.net/",
    tech: ["postgresql", "react", "mui"],
  },
  {
    name: "House Call MD - Healthcare",
    image: "/timeline/hcmd-chat.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "HCMD Communication is a communication application for specific organization to communicate and manage task easily.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://hcmdcommunication.com/",
    tech: ["react", "postgresql", "nodejs"],
  },
  {
    name: "GX Tickets - Event Ticketing",
    image: "/projects/gxtickets.png",
    blurImage: "/projects/blur/gx-tickets-blur.jpg",
    description: "Your Go-To Digital Ticketing Platform",
    gradient: ["#245B57", "#004741"],
    url: "https://gxtickets.com/",
    tech: ["react", "nodejs", "typescript"],
  },
  {
    name: "Bobby Black Cloud - Music",
    image: "/projects/bobby.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://bobbyblackcloud.com/",
    tech: ["tailwind", "react", "npm", "css"],
  },
  // {
  //   name: "ngx-quill-upload",
  //   image: "/projects/ngx-quill-upload.jpg",
  //   blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
  //   description: "NPM Package for Quill JS uploads from Angular",
  //   gradient: ["#3A0000", "#771E1E"],
  //   url: "https://www.npmjs.com/package/ngx-quill-upload",
  //   tech: ["npm", "angular", "typescript"],
  // },
  {
    name: "Automation Scripts",
    image: "/timeline/automation.jpeg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Built automation scripts for various tasks",
    gradient: ["#17007B", "#3A2C79"],
    url: "",
    tech: ["javascript", "playwright", "nodejs", "typescript"],
  },
  {
    name: "Threadly - Social Media",
    image: "/timeline/threadly.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "",
    tech: ["typescript", "socket", "tailwind", "mongo"],
  },
  {
    name: "Blessed Funds - Fund Tracking",
    image: "/timeline/blessed.gif",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "",
    tech: ["typescript", "postgresql", "react"],
  },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 🔥",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Scrolls 2017 - Website",
  //   image: "/projects/scrolls.jpg",
  //   blurImage: "/projects/blur/scrolls-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#685506", "#7B6921"],
  //   url: "https://scrolls-17.ayushsingh.net/",
  //   tech: ["angular", "html", "css"],
  // },
  // {
  //   name: "Cardize - Visiting Cards",
  //   image: "/projects/cardize.jpg",
  //   blurImage: "/projects/blur/cardize-blur.jpg",
  //   description: "First web project! Custom visiting card generator",
  //   gradient: ["#552A04", "#614023"],
  //   url: "https://cardize.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "mui",
    "typescript",
    "tailwind",
    "sass",
    "azios",
    "html",
    "css",
  ],
  userInterface: ["node", "postgres", "redis", "postman", "firebase"],
  other: ["git", "aws", "docker", "ec2"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer, Octathorn (Current)",
    size: ItemSize.SMALL,
    subtitle: "Driving full-stack development at Octathorn, leading core feature architecture, scaling backend infrastructure, and refining user experience across the platform.",
    image: "/timeline/octathorn-logo.svg",
    slideImage: "/timeline/octathorn.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
    {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "BuilderBuilder - Full Stack(Lead)",
    size: ItemSize.SMALL,
    subtitle:
      "Fully developed the design and development of an AI powered platform for managing and optimizing construction operations.",
    image: "/timeline/builder-logo.svg",
    slideImage: "/timeline/builder-landing.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Real-Time Messaging & Notification",
    size: ItemSize.SMALL,
    subtitle:
      "Built a real-time chat and notification system using Socket.IO, implementing a global socket instance in React and event-driven handlers in Node.js/Express to manage messaging, presence, and alerts across users and roles.",
    // image: "/timeline/flipkart.svg",
    slideImage: "/timeline/builder-dash.png",  
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Invoicing & Payment Integration",
    size: ItemSize.SMALL,
    subtitle: "Integrated a full-featured invoicing and billing system with dynamic line items, and on-demand PDF generation. Implemented Stripe for secure payments and refund handling using webhooks, and connected QuickBooks via a Node.js/Express backend for automated invoice exports and real-time accounting sync.",
    shouldDrawLine: true,
    slideImage: "/timeline/builder-invoice.png",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "OpenAI Across Frontend & Backend",
    size: ItemSize.SMALL,
    subtitle: "Implemented OpenAI SDK in both React and Node.js; engineered precise prompts for consistent, reliable AI responses tailored to app needs.",
    shouldDrawLine: true,
    slideImage: "/timeline/openai.webp",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "HouseCall MD – Frontend Heavy",
    size: ItemSize.SMALL,
    subtitle: "Built key features for a healthcare management platform, including real-time chat, dynamic forms, and performance-optimized UI, improving clinical workflows and patient data handling.",
    shouldDrawLine: true,
    slideImage: "/timeline/hcmd-chat.png",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "Used Zustand for lightweight and scalable global state management, enabling faster UI updates and cleaner store logic. Leveraged TanStack Query for efficient data fetching, caching, and background syncing, minimizing redundant API calls and improving frontend performance.",
    shouldDrawLine: true,
    slideImage: "/timeline/zustand-tanstack.jpg",
    alignment: Branch.RIGHT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    slideImage: "/timeline/zustand-tanstack.jpg",
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "Delivered client-requested features rapidly by focusing on component reusability and minimizing duplicate code through modular design. Developed a reusable Axios service layer for unified API handling and easier maintenance across components.",
    shouldDrawLine: true,
    slideImage: "/timeline/axios.png",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "Focused heavily on UI/UX by creating intuitive, accessible interfaces with attention to design consistency and responsiveness.Optimized React performance using useMemo and useCallback to prevent unnecessary re-renders in complex views. Cached API responses effectively to reduce frontend network load and improve perceived application speed. ",
    shouldDrawLine: true,
    slideImage: "/timeline/react-opt.jpg",
    alignment: Branch.RIGHT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "Automation",
    size: ItemSize.SMALL,
    subtitle: "Built automation scripts that integrated Socket.IO and RESTful APIs to fetch patient data and documents in real time. Used Google Vision API to extract text from patient documents and processed them with OpenAI (ChatGPT) to generate medical insights. Developed a web scraping bot to extract patient data from a third-party website and injected it into another system via Socket.IO, automating cross-platform data entry with scheduled CRON-based execution.",
    shouldDrawLine: true,
    slideImage: "/timeline/automation.jpeg",
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "GX Tickets - Backend Heavy(Lead)",
    size: ItemSize.SMALL,
    subtitle: "Built and maintained RESTful APIs with a well-structured, scalable backend. Designed a normalized relational schema using Sequelize and PostgreSQL, and implemented JWT authentication, role-based access control, and secure route protection.",
    shouldDrawLine: true,
    slideImage: "/timeline/gxtickets.png",
    alignment: Branch.RIGHT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "CI/CD with AWS Amplify: Automated build and deployment workflows using AWS Amplify, enabling seamless updates from connected GitHub branches to staging and production environments. Version Control & Project Management: Used Git for version control and GitHub Projects to manage tasks, track issues, and coordinate feature delivery across teams. Software Testing: Conducted both black box and white box testing to validate functionality, improve code reliability, and catch regressions before deployment.",
    shouldDrawLine: true,
    slideImage: "/timeline/aws.jpeg",
    alignment: Branch.RIGHT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "Proud Moment",
    size: ItemSize.SMALL,
    subtitle: "Reduced website load time by up to 75% through aggressive performance tuning: implemented lazy loading in React, served precompressed Gzip assets via NGINX, and offloaded all images to a CDN to minimize build size and network latency.",
    shouldDrawLine: true,
    image:"timeline/diamond.svg",
    slideImage: "/timeline/builder-landing.png",
    alignment: Branch.RIGHT,
  },
    {
    type: NodeTypes.CONVERGE,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "Bobby Black Cloud(Other Projects)",
    size: ItemSize.SMALL,
    subtitle: "Built a responsive music-focused website combining e-commerce, event booking, and content management for artists. Developed an admin panel for musicians to upload upcoming tours, events, and new music releases. Utilized state management, MUI for consistent styling, and reusable components to accelerate feature delivery and maintain UI consistency. Focused on mobile-first responsive design to ensure a seamless experience across devices.",
    shouldDrawLine: true,
    slideImage: "/timeline/bobby.png",
    alignment: Branch.LEFT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "Threadly (MERN)",
    size: ItemSize.SMALL,
    subtitle: "Built a real-time social media app using React (TypeScript), Node.js, MongoDB, and Socket.IO, featuring live likes/comments, Cloudinary image uploads, and infinite scroll. Followed Bulletproof React architecture, optimized MongoDB with indexes, and deployed frontend/backend separately to Vercel and Render with full CI/CD setup.",
    shouldDrawLine: true,
    slideImage: "/timeline/threadly.png",
    alignment: Branch.LEFT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "Blessed Funds (MERN)",
    size: ItemSize.SMALL,
    subtitle: "Built a fund tracking and reporting platform with Node.js (TypeScript), PostgreSQL, and Prisma ORM, enabling authenticated organizations to manage weekly offerings, track historical funds, and generate reports. Implemented JWT-based auth, input validation via Zod, and robust security with Helmet and rate limiting. Designed a clean, responsive frontend using React 18, Tailwind CSS, ShadCN UI, and React Hook Form, with animated transitions via Framer Motion. Integrated CSV/PDF export, filterable fund history, and built modular report generation endpoints. Deployed full stack with CI/CD using Vercel, ensuring fast iteration and production stability.",
    shouldDrawLine: true,
    slideImage: "/timeline/blessed.gif",
    alignment: Branch.LEFT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    subtitle: "",
    shouldDrawLine: true,
    slideImage: "/timeline/seds.png",
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Javascript Game Developer (SEDS)",
    size: ItemSize.SMALL,
    subtitle:
      "Worked part-time at Smart Engineering & Design Solutions (SEDS) building immersive, browser-based training games, focusing on interactivity, user experience, and performance across devices.",
    image: "/timeline/seds-logo.jpg",
    slideImage: "/timeline/seds.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "Worked at Smart Engineering & Design Solutions (SEDS) as a JavaScript Game Developer, building interactive browser-based training games using pure JavaScript, Canvas API, vanilla PHP, and MySQL. Developed custom event-driven systems and dynamic interfaces to simulate cybersecurity scenarios, with a strong focus on performance, using techniques like requestAnimationFrame and resource preloading to maintain smooth, responsive gameplay across devices.",
    image: "/timeline/seds-logo.jpg",
    slideImage: "/timeline/game.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
]

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";

export const techKeywords: Record<
  string,
  { gradient: [string, string, string]; href?: string }
> = {
  Zustand: {
    gradient: ["#FFE259", "#FCD34D", "#FFB347"], // warm amber/yellow/orange
    href: "https://zustand-demo.pmnd.rs/",
  },
  "TanStack Query": {
    gradient: ["#FF80AB", "#EC4899", "#D946EF"], // vibrant pink to fuchsia
    href: "https://tanstack.com/query",
  },
  "Socket.IO": {
    gradient: ["#7DD3FC", "#60A5FA", "#3B82F6"], // sky to vivid blue — modern & legible
    href: "https://socket.io/",
  },
  React: {
    gradient: ["#CFFAFE", "#5EEAD4", "#22D3EE"], // cyan + minty teal
    href: "https://reactjs.org/",
  },
  "Node.js": {
    gradient: ["#A7F3D0", "#34D399", "#10B981"], // green blend, tropical feel
    href: "https://nodejs.org/",
  },
  Express: {
    gradient: ["#E5E7EB", "#F3F4F6", "#FFFFFF"], // soft gray to pure white — minimalist
    href: "https://expressjs.com/",
  },
  Stripe: {
    gradient: ["#C4B5FD", "#8B5CF6", "#6366F1"], // violet/purple tones
    href: "https://stripe.com/",
  },
  QuickBooks: {
    gradient: ["#BBF7D0", "#4ADE80", "#22C55E"], // leaf to lime green
    href: "https://quickbooks.intuit.com/",
  },
  "OpenAI SDK": {
    gradient: ["#6EE7B7", "#34D399", "#2DD4BF"], // aqua teal harmony
    href: "https://platform.openai.com/docs",
  },
    Axios: {
    gradient: ["#5A67D8", "#9F7AEA", "#667EEA"],
    href: "https://axios-http.com/",
  },
  "UI/UX": {
    gradient: ["#E11D48", "#F472B6", "#DB2777"],
  },
  useMemo: {
    gradient: ["#38BDF8", "#60A5FA", "#2563EB"],
  },
  useCallback: {
    gradient: ["#0EA5E9", "#3B82F6", "#1E3A8A"],
  },
  "reduce frontend network load": {
    gradient: ["#059669", "#10B981", "#34D399"],
  },
  responsiveness: {
    gradient: ["#8B5CF6", "#C084FC", "#7C3AED"],
  },
    "RESTful APIs": {
    gradient: ["#3B82F6", "#60A5FA", "#93C5FD"],
  },
  Sequelize: {
    gradient: ["#4BC0C0", "#76E4F7", "#38BDF8"],
    href: "https://sequelize.org/",
  },
  PostgreSQL: {
    gradient: ["#336791", "#4B9CD3", "#5B9BD5"],
    href: "https://www.postgresql.org/",
  },
  JWT: {
    gradient: ["#F59E0B", "#FBBF24", "#FACC15"],
    href: "https://jwt.io/",
  },
  "CI/CD": {
    gradient: ["#6366F1", "#818CF8", "#A5B4FC"],
  },
  "AWS Amplify": {
    gradient: ["#FF9900", "#FBBF24", "#FDBA74"],
    href: "https://aws.amazon.com/amplify/",
  },
  GitHub: {
    gradient: ["#24292E", "#4B5563", "#6B7280"],
    href: "https://github.com/",
  },
  "Version Control": {
    gradient: ["#EF4444", "#F87171", "#FCA5A5"],
  },
  "Project Management": {
    gradient: ["#10B981", "#34D399", "#6EE7B7"],
  },
  Git: {
    gradient: ["#F05033", "#FB7185", "#F87171"],
    href: "https://git-scm.com/",
  },
  "GitHub Projects": {
    gradient: ["#6B7280", "#9CA3AF", "#D1D5DB"],
  },
"black box": {
  gradient: ["#111827", "#1F2937", "#6EE7B7"], // deep slate to teal punch
  href: "https://en.wikipedia.org/wiki/Black-box_testing",
},

"white box": {
  gradient: ["#F9FAFB", "#E0F2FE", "#3B82F6"], // soft light to confident blue
  href: "https://en.wikipedia.org/wiki/White-box_testing",
},
"Google Vision API": {
  gradient: ["#4285F4", "#34A853", "#FBBC05"], // Google's brand triad
  href: "https://cloud.google.com/vision",
},

"ChatGPT": {
  gradient: ["#10A37F", "#22D3EE", "#06B6D4"], // OpenAI green with cyan vibes
  href: "https://openai.com/chatgpt",
},

"CRON-based": {
  gradient: ["#A78BFA", "#8B5CF6", "#6D28D9"], // violet-themed for scheduling elegance
},

"web scraping": {
  gradient: ["#F97316", "#F59E0B", "#FACC15"], // orange-yellow: automation meets data harvesting
},
"MongoDB": {
  gradient: ["#10B981", "#34D399", "#059669"], // Mongo green spectrum
  href: "https://www.mongodb.com/",
},

"TypeScript": {
  gradient: ["#3178C6", "#60A5FA", "#93C5FD"], // TS blue + friendly coding tone
  href: "https://www.typescriptlang.org/",
},

"Cloudinary": {
  gradient: ["#FDBA74", "#F59E0B", "#FB923C"], // vibrant orange/yellow (from logo)
  href: "https://cloudinary.com/",
},

"Bulletproof React": {
  gradient: ["#0EA5E9", "#3B82F6", "#6366F1"], // strong & structured blue hues
  href: "https://github.com/alan2207/bulletproof-react",
},

"Vercel": {
  gradient: ["#000000", "#1F2937", "#4B5563"], // clean dark tones, Vercel aesthetic
  href: "https://vercel.com/",
},

"Render": {
  gradient: ["#6366F1", "#7C3AED", "#8B5CF6"], // trustworthy purples with SaaS flair
  href: "https://render.com/",
},
"MUI": {
  gradient: ["#007FFF", "#0288D1", "#03A9F4"], // MUI’s official blue spectrum
  href: "https://mui.com/",
},
"JavaScript": {
  gradient: ["#F7DF1E", "#FACC15", "#FBBF24"], // iconic JS yellow tones
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
},

"Canvas API": {
  gradient: ["#0EA5E9", "#3B82F6", "#1E40AF"], // dynamic blues, conveying creativity and pixel precision
  href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
},

"PHP": {
  gradient: ["#8892BF", "#6C7EB7", "#4F5B93"], // PHP purples, from brand to depth
  href: "https://www.php.net/",
},

"MySQL": {
  gradient: ["#00758F", "#3E8DB6", "#6FB9D2"], // MySQL's oceanic teal-to-blue scheme
  href: "https://www.mysql.com/",
},

"requestAnimationFrame": {
  gradient: ["#8B5CF6", "#22D3EE", "#06B6D4"], // futuristic glow: smooth performance + high FPS
  href: "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",
},

};


  export const EMAIL_CONTACT = "johnsalimrobert@gmail.com";

  export const EMAIL_SUBJECT = "Let's Connect";

  export const EMAIL_BODY = `
  Hi [Your Name],

  I came across your profile and would love to discuss an opportunity/project with you.

  Looking forward to hearing from you.

  Best,
  [Recruiter's Name]
  `;

  export const generateMailtoLink = (
    email: string,
    subject: string,
    body: string
  ) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  /**
 * Generates a Gmail compose URL that works even if mailto: handler isn't set
 */
export const generateGmailLink = (
  email: string,
  subject: string,
  body: string
): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
};
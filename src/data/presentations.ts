export type Presentation = {
  id: string;
  title: string;
  category: string;
  description: string;
  slideCount: number;
  fileSize: string;
  gradient: string;
  icon: string;
  fileUrl?: string;
  slides?: string[];
  audio?: (string | null)[];
};

export const categories = [
  "All",
  "Major Project",
  "Basic Nature",
  "Research",
  "Design",
  "Development",
  "Testing",
  "Documentation",
] as const;

export type Category = (typeof categories)[number];

export const presentations: Presentation[] = [
  { id: "1", title: "Fruits", category: "Basic Nature", description: "Introduction and scope of the major project", slideCount: 12, fileSize: "45 MB", gradient: "gradient-candy", icon: "🎯", fileUrl: "/1_Fruits.pptx", slides: ["/slides/fruits/image1.png","/slides/fruits/image2.png","/slides/fruits/image3.png","/slides/fruits/image5.png","/slides/fruits/image6.png","/slides/fruits/image7.png","/slides/fruits/image8.png","/slides/fruits/image9.png","/slides/fruits/image10.png","/slides/fruits/image11.png","/slides/fruits/image12.png","/slides/fruits/image13.png"], audio: [null,null,"/slides/fruits/media1.m4a","/slides/fruits/media2.m4a","/slides/fruits/media3.m4a","/slides/fruits/media4.m4a","/slides/fruits/media5.m4a","/slides/fruits/media6.m4a","/slides/fruits/media7.m4a","/slides/fruits/media8.m4a","/slides/fruits/media9.m4a","/slides/fruits/media10.m4a"] },
  { id: "2", title: "Vegetables", category: "Basic Nature", description: "Review of existing literature and related work", slideCount: 12, fileSize: "53 MB", gradient: "gradient-ocean", icon: "📚", fileUrl: "/2_Vegetables.pptm", slides: ["/slides/vegetables/image1.png","/slides/vegetables/image2.png","/slides/vegetables/image3.png","/slides/vegetables/image5.png","/slides/vegetables/image6.png","/slides/vegetables/image7.png","/slides/vegetables/image8.png","/slides/vegetables/image9.png","/slides/vegetables/image10.png","/slides/vegetables/image11.png","/slides/vegetables/image12.png","/slides/vegetables/image13.png"], audio: [null,null,"/slides/vegetables/media1.m4a","/slides/vegetables/media2.m4a","/slides/vegetables/media3.m4a","/slides/vegetables/media4.m4a","/slides/vegetables/media5.m4a","/slides/vegetables/media6.m4a","/slides/vegetables/media7.m4a","/slides/vegetables/media8.m4a","/slides/vegetables/media9.m4a","/slides/vegetables/media10.m4a"] },
  { id: "3", title: "System Architecture", category: "Design", description: "High-level system design and architecture diagrams", slideCount: 15, fileSize: "3.8 MB", gradient: "gradient-sunset", icon: "🏗️" },
  { id: "4", title: "Requirement Analysis", category: "Documentation", description: "Functional and non-functional requirements", slideCount: 20, fileSize: "2.9 MB", gradient: "gradient-forest", icon: "📋" },
  { id: "5", title: "UI/UX Mockups", category: "Design", description: "Wireframes and user interface designs", slideCount: 30, fileSize: "12.5 MB", gradient: "gradient-dream", icon: "🎨" },
  { id: "6", title: "Database Design", category: "Design", description: "ER diagrams and database schema", slideCount: 12, fileSize: "2.1 MB", gradient: "gradient-candy", icon: "🗄️" },
  { id: "7", title: "Frontend Development", category: "Development", description: "React-based frontend implementation details", slideCount: 22, fileSize: "5.4 MB", gradient: "gradient-ocean", icon: "💻" },
  { id: "8", title: "Backend API Design", category: "Development", description: "RESTful API endpoints and authentication", slideCount: 18, fileSize: "3.2 MB", gradient: "gradient-sunset", icon: "⚙️" },
  { id: "9", title: "Machine Learning Model", category: "Research", description: "ML model training and evaluation metrics", slideCount: 28, fileSize: "8.7 MB", gradient: "gradient-forest", icon: "🤖" },
  { id: "10", title: "Testing Strategy", category: "Testing", description: "Unit, integration, and E2E testing plans", slideCount: 16, fileSize: "2.5 MB", gradient: "gradient-dream", icon: "🧪" },
  { id: "11", title: "Performance Analysis", category: "Testing", description: "Load testing and performance benchmarks", slideCount: 14, fileSize: "4.8 MB", gradient: "gradient-candy", icon: "📊" },
  { id: "12", title: "Security Assessment", category: "Testing", description: "Vulnerability analysis and security measures", slideCount: 19, fileSize: "3.1 MB", gradient: "gradient-ocean", icon: "🔒" },
  { id: "13", title: "Deployment Guide", category: "Documentation", description: "CI/CD pipeline and deployment instructions", slideCount: 11, fileSize: "1.9 MB", gradient: "gradient-sunset", icon: "🚀" },
  { id: "14", title: "User Manual", category: "Documentation", description: "End-user guide and feature documentation", slideCount: 24, fileSize: "5.6 MB", gradient: "gradient-forest", icon: "📖" },
  { id: "15", title: "Data Collection", category: "Research", description: "Dataset sources, cleaning, and preprocessing", slideCount: 17, fileSize: "3.4 MB", gradient: "gradient-dream", icon: "📦" },
  { id: "16", title: "Algorithm Design", category: "Development", description: "Core algorithm implementation and optimization", slideCount: 21, fileSize: "4.0 MB", gradient: "gradient-candy", icon: "🧠" },
  { id: "17", title: "API Integration", category: "Development", description: "Third-party API integrations and webhooks", slideCount: 13, fileSize: "2.7 MB", gradient: "gradient-ocean", icon: "🔌" },
  { id: "18", title: "Mobile Responsiveness", category: "Design", description: "Responsive design patterns and breakpoints", slideCount: 16, fileSize: "6.3 MB", gradient: "gradient-sunset", icon: "📱" },
  { id: "19", title: "Progress Report - Week 1-4", category: "Major Project", description: "Monthly progress summary and milestones", slideCount: 10, fileSize: "1.8 MB", gradient: "gradient-forest", icon: "📅" },
  { id: "20", title: "Progress Report - Week 5-8", category: "Major Project", description: "Mid-semester progress and challenges", slideCount: 12, fileSize: "2.2 MB", gradient: "gradient-dream", icon: "📅" },
  { id: "21", title: "Code Review Findings", category: "Testing", description: "Static analysis results and code quality metrics", slideCount: 15, fileSize: "2.0 MB", gradient: "gradient-candy", icon: "🔍" },
  { id: "22", title: "Comparative Study", category: "Research", description: "Comparison with existing solutions and tools", slideCount: 20, fileSize: "4.5 MB", gradient: "gradient-ocean", icon: "⚖️" },
  { id: "23", title: "Cloud Infrastructure", category: "Development", description: "AWS/GCP setup and cloud architecture", slideCount: 18, fileSize: "3.9 MB", gradient: "gradient-sunset", icon: "☁️" },
  { id: "24", title: "Error Handling", category: "Development", description: "Exception handling and logging strategies", slideCount: 11, fileSize: "1.6 MB", gradient: "gradient-forest", icon: "⚠️" },
  { id: "25", title: "Accessibility Audit", category: "Design", description: "WCAG compliance and accessibility features", slideCount: 14, fileSize: "2.8 MB", gradient: "gradient-dream", icon: "♿" },
  { id: "26", title: "Sprint Retrospective", category: "Major Project", description: "Lessons learned and process improvements", slideCount: 9, fileSize: "1.4 MB", gradient: "gradient-candy", icon: "🔄" },
  { id: "27", title: "Final Demo Prep", category: "Major Project", description: "Demo script and presentation flow", slideCount: 22, fileSize: "7.8 MB", gradient: "gradient-ocean", icon: "🎬" },
  { id: "28", title: "Research Paper Draft", category: "Research", description: "IEEE format research paper for publication", slideCount: 26, fileSize: "5.2 MB", gradient: "gradient-sunset", icon: "📝" },
  { id: "29", title: "Cost Analysis", category: "Documentation", description: "Budget breakdown and resource allocation", slideCount: 8, fileSize: "1.2 MB", gradient: "gradient-forest", icon: "💰" },
  { id: "30", title: "Final Presentation", category: "Major Project", description: "Complete project defense presentation", slideCount: 35, fileSize: "15.3 MB", gradient: "gradient-dream", icon: "🎓" },
];

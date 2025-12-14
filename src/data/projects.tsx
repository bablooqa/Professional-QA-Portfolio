import {
  GraduationCap,
  Receipt,
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Smartphone,
  Hotel,
  Shield,
  Truck,
  Figma,
  Bot,
  Chrome,
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "dev" | "test";
  links: {
    demo: string;
    github: string;
  };
  icon?: React.ReactNode;
}

export const projects: Project[] = [
  // --- Development Projects ---
  {
    title: "GenAI Chatbot Platform",
    description:
      "Enterprise-grade chatbot solution using OpenAI/Anthropic APIs with RAG for custom knowledge bases.",
    tags: ["Next.js", "OpenAI API", "Pinecone", "Python"],
    category: "dev",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
  {
    title: "LinkedIn AI Assistant",
    description:
      "Chrome extension that uses local LLMs to summarize posts and generate smart replies for LinkedIn networking.",
    tags: ["JavaScript", "Chrome API", "Ollama", "React"],
    category: "dev",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <Chrome className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "FeedKoa AgroKart",
    description:
      "Agri-tech platform featuring a comprehensive internal ERP & Admin panel for supply chain management. (Admin restricted)",
    tags: ["React", "Node.js", "ERP", "AgriTech"],
    category: "dev",
    links: {
      demo: "https://feedkoagrokart.in/",
      github: "https://github.com/bablooqa",
    },
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Full-Stack eCommerce",
    description:
      "Modern eCommerce solution with a dedicated, feature-rich Admin Dashboard for inventory and order management.",
    tags: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
    category: "dev",
    links: {
      demo: "https://bablooqa-ecommercepr-rdnh.bolt.host/",
      github: "https://github.com/bablooqa",
    },
    icon: <ShoppingBag className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "GoSetle Invoicing",
    description:
      "SaaS invoicing platform enabling small businesses to generate quotes, track payments, and manage clients.",
    tags: ["React", "SaaS", "FinTech", "Automation"],
    category: "dev",
    links: {
      demo: "https://gosetle.com/",
      github: "https://github.com/bablooqa",
    },
    icon: <Receipt className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "EngineerOnRoad",
    description:
      "Service marketplace connecting engineers with clients. Includes internal admin for booking management. (Admin restricted)",
    tags: ["MERN Stack", "Marketplace", "Admin Panel"],
    category: "dev",
    links: {
      demo: "http://engineeronroad.com/",
      github: "https://github.com/bablooqa",
    },
    icon: <Truck className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Egunas LMS",
    description:
      "EdTech platform with Learning Management System, Tutor Class Scheduling, and Student Progress tracking. (Admin restricted)",
    tags: ["LMS", "Live Streaming", "EdTech", "React"],
    category: "dev",
    links: {
      demo: "https://egunas.com/",
      github: "https://github.com/bablooqa",
    },
    icon: <GraduationCap className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "eCommerce UX Design",
    description:
      "High-fidelity Figma prototype demonstrating the complete customer journey.",
    tags: ["Figma", "UI/UX", "Prototyping", "eCommerce"],
    category: "dev",
    links: {
      demo: "https://noodle-clock-41349274.figma.site/",
      github: "https://github.com/bablooqa",
    },
    icon: <Figma className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Modern Admin Panel UX",
    description:
      "Comprehensive Admin Dashboard prototype in Figma, covering inventory, analytics, and user management.",
    tags: ["Figma", "Admin Dashboard", "UI/UX"],
    category: "dev",
    links: {
      demo: "https://vest-wreath-67006285.figma.site/",
      github: "https://github.com/bablooqa",
    },
    icon: <Figma className="w-8 h-8 text-cyan-500" />,
  },

  // --- QA / Testing Projects ---
  {
    title: "E-commerce Automation Suite",
    description:
      "End-to-end test automation framework covering 500+ test cases for a high-traffic retail platform.",
    tags: ["Selenium", "Java", "TestNG", "Jenkins"],
    category: "test",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <ShoppingCart className="w-8 h-8 text-red-500" />,
  },
  {
    title: "POS System Testing",
    description:
      "Comprehensive functional and performance testing for a cloud-based Point of Sale system.",
    tags: ["Cypress", "JavaScript", "API Testing", "Jira"],
    category: "test",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <CreditCard className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Mobile App QA",
    description:
      "Automated mobile testing using Appium for a fintech application, reducing regression time by 60%.",
    tags: ["Appium", "Java", "Android", "iOS"],
    category: "test",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Hotel Booking API Tests",
    description:
      "Rigorous API testing suite using REST Assured to validate booking flows and payment gateways.",
    tags: ["REST Assured", "Postman", "Java", "CI/CD"],
    category: "test",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <Hotel className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "KYC System Validation",
    description:
      "Security and compliance testing for a banking KYC module, ensuring data privacy.",
    tags: ["Security Testing", "SQL", "Manual Testing", "Auditing"],
    category: "test",
    links: { demo: "#", github: "https://github.com/bablooqa" },
    icon: <Shield className="w-8 h-8 text-cyan-500" />,
  },
];

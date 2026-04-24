import { motion } from "framer-motion";
import { Bot, Code as Code2, Database, Workflow, Layers, ShieldCheck, CircleCheck as CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  bestFor?: string;
  result?: string;
};

const services: Service[] = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Product Development",
    description:
      "Design and build production-ready AI applications, including copilots, chatbots, and SaaS platforms using modern LLMs and scalable architecture.",
    features: [
      "End-to-end development (frontend + backend + AI)",
      "RAG systems and AI workflows",
      "Deployment-ready systems",
    ],
    bestFor: "Startups building AI products from scratch",
  },
  {
    icon: <Database className="w-8 h-8 text-cyan-500" />,
    title: "RAG Systems & Knowledge AI",
    description:
      "Build intelligent systems that retrieve and generate accurate responses from your data using vector databases and LLMs.",
    features: [
      "Knowledge base chatbots",
      "Document search & AI assistants",
      "Context-aware AI responses",
    ],
    result: "More accurate AI outputs grounded in real business data",
  },
  {
    icon: <Workflow className="w-8 h-8 text-emerald-500" />,
    title: "AI Automation & Workflow Systems",
    description:
      "Automate business processes using AI agents, APIs, and custom workflows to reduce manual effort and increase efficiency.",
    features: [
      "AI agents & automation pipelines",
      "API integrations & backend workflows",
      "Business process automation",
    ],
    result: "Save time, reduce cost, improve operations",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-500" />,
    title: "Full-Stack SaaS Development",
    description:
      "Build scalable SaaS platforms with modern tech stacks, including dashboards, APIs, authentication, and billing systems.",
    features: [
      "Admin dashboards & analytics",
      "Secure authentication systems",
      "Scalable backend architecture",
    ],
    bestFor: "Founders launching MVPs or scaling products",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "AI Testing & LLM Evaluation",
    description:
      "Ensure reliability of AI systems through structured evaluation, prompt testing, and performance validation.",
    features: [
      "LLM evaluation frameworks",
      "RAG pipeline testing",
      "Prompt reliability testing",
    ],
    result: "More stable, accurate, and production-ready AI systems",
  },
  {
    icon: <Code2 className="w-8 h-8 text-pink-500" />,
    title: "Automated QA Frameworks",
    description:
      "Build scalable, maintainable test automation frameworks that catch bugs before they reach production.",
    features: [
      "End-to-end & API automation",
      "CI/CD integration",
      "Cross-browser & mobile coverage",
    ],
    result: "Faster releases with fewer production defects",
  },
];

export function Services() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          What I Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Specialized Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          AI Engineer specializing in GenAI, RAG systems, QA automation, and
          full-stack SaaS development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow border-primary/10 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 p-3 bg-secondary/50 rounded-lg w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-primary/10">
                {service.bestFor && (
                  <p className="text-sm">
                    <span className="font-semibold text-primary">
                      Best for:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {service.bestFor}
                    </span>
                  </p>
                )}
                {service.result && (
                  <p className="text-sm">
                    <span className="font-semibold text-primary">Result: </span>
                    <span className="text-muted-foreground">
                      {service.result}
                    </span>
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

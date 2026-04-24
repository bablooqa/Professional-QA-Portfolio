import { Code as Code2, Brain, TestTube, Shield, Database, Wrench, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "GenAI / AI / LLM",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "LLM Application Development",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agents & Automation",
      "Prompt Engineering & Optimization",
      "LLM Evaluation & Testing",
      "OpenAI, Anthropic, Gemini APIs",
      "LangChain / LlamaIndex",
      "Vector Databases (Pinecone, Weaviate, FAISS)",
      "Multimodal AI (Text, Voice, Image)",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "Full-Stack SaaS Development",
      "React.js / Next.js",
      "TypeScript / JavaScript",
      "Node.js / Express",
      "Python (FastAPI, Flask)",
      "REST & GraphQL APIs",
      "Microservices Architecture",
      "Authentication (JWT, OAuth, NextAuth)",
      "State Management (Redux, Zustand)",
      "Server-Side Rendering (SSR/SSG)",
    ],
  },
  {
    title: "QA Automation & Testing",
    icon: <TestTube className="w-5 h-5" />,
    skills: [
      "Test Automation Framework Design",
      "AI Testing & LLM Validation",
      "End-to-End Testing (E2E)",
      "API Automation Testing",
      "Performance & Load Testing",
      "Cross-Browser & Mobile Testing",
      "Selenium / Cypress / Playwright",
      "Appium (Mobile Testing)",
      "PyTest / Jest / JUnit",
      "BDD (Cucumber / Gherkin)",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      "AWS (EC2, S3, Lambda)",
      "CI/CD Pipelines (GitHub Actions)",
      "Docker & Containerization",
      "Kubernetes",
      "Infrastructure as Code (Terraform)",
      "Monitoring & Logging",
      "Vercel / Netlify",
      "Linux / Bash Scripting",
    ],
  },
  {
    title: "Data & Backend Systems",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "Database Design & Optimization",
      "PostgreSQL / MySQL",
      "MongoDB / NoSQL",
      "Caching (Redis)",
      "Message Queues (Kafka / RabbitMQ)",
      "Data Pipelines",
      "Supabase / Firebase Backend",
      "Prisma / Drizzle ORM",
    ],
  },
  {
    title: "AI Product Engineering",
    icon: <Rocket className="w-5 h-5" />,
    skills: [
      "AI Product Development",
      "Vibe Coding (Rapid AI Prototyping)",
      "AI SaaS Architecture",
      "MVP Development for Startups",
      "Automation-First Development",
      "End-to-End Product Engineering",
    ],
  },
  {
    title: "Performance & Security",
    icon: <Shield className="w-5 h-5" />,
    skills: [
      "JMeter / K6 / Gatling",
      "OWASP ZAP / Burp Suite",
      "Lighthouse / Web Vitals",
      "Load & Stress Testing",
      "Security Compliance (SOC2)",
    ],
  },
];

const SkillCard = motion(Card);
const SkillBadge = motion(Badge);

export function Skills() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          Technical Skills & Expertise
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          AI Engineer specializing in GenAI, RAG systems, full-stack
          development, and QA automation using Python and modern AI frameworks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <SkillCard
            key={category.title}
            className={cn(
              "p-6 relative overflow-hidden",
              "before:absolute before:inset-0 before:bg-[length:400%_400%] before:bg-gradient-to-r before:from-[#FF6B6B]/5 before:via-[#4ECDC4]/5 before:to-[#45B7D1]/5 before:opacity-0 before:transition-all before:duration-300 before:animate-gradient hover:before:opacity-100",
              "after:absolute after:inset-0 after:rounded-lg after:shadow-lg after:transition-all after:duration-300 hover:after:shadow-xl",
              "animate-fade-in opacity-0",
              `[animation-delay:${categoryIndex * 150}ms]`
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-primary/10"
                whileHover={{
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill}
                  variant="outline"
                  className={cn(
                    "animate-fade-in opacity-0 cursor-default relative overflow-hidden",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FF6B6B]/10 before:via-[#4ECDC4]/10 before:to-[#45B7D1]/10 before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100",
                    `[animation-delay:${
                      categoryIndex * 150 + skillIndex * 50
                    }ms]`
                  )}
                  initial={false}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </div>
          </SkillCard>
        ))}
      </div>
    </div>
  );
}

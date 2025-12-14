import { motion } from "framer-motion";
import { Bot, Code2, MessageSquare, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "GenAI Integration & Testing",
    description:
      "Seamlessly integrate LLMs into your applications and ensure they perform reliably with robust evaluation frameworks.",
    features: [
      "LLM Evaluation",
      "RAG Pipeline Testing",
      "Model Fine-tuning QA",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#00b8ff]" />,
    title: "Automated QA Frameworks",
    description:
      "Build scalable, maintainable test automation frameworks that catch bugs before they reach production.",
    features: ["End-to-End Automation", "API Testing", "CI/CD Integration"],
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[#7047ff]" />,
    title: "Prompt Engineering",
    description:
      "Craft and optimize prompts to get the best performance and accuracy from your AI models.",
    features: [
      "Prompt Optimization",
      "System Instruction Design",
      "Few-Shot Learning Strategies",
    ],
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
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          What I Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Specialized Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Helping startups and enterprises ship high-quality AI products
          tailored to their specific needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow border-primary/10 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 p-3 bg-secondary/50 rounded-lg w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

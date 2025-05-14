import { Code2, Laptop, Database, Wrench, Brain, TestTube, Bot, Sparkles, Network, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "Machine Learning Algorithms",
      "Neural Networks",
      "Predictive Modeling",
      "Anomaly Detection",
      "Feature Engineering",
      "Model Training & Evaluation",
      "AutoML",
      "Deep Learning"
    ]
  },
  {
    title: "AI Tools & Platforms",
    icon: <Bot className="w-5 h-5" />,
    skills: [
      "OpenAI (ChatGPT, GPT-3.5, GPT-4)",
      "Google Gemini AI",
      "Claude AI",
      "Midjourney",
      "Cursor AI",
      "V0.dev/bolt.new",
      "Ollama",
      "Hugging Face",
      " Prompt Design",
      "Prompt Design & Optimization (Zero-shot Few-shot, ReAct, CoT) ",
      
      "Cohere APIs",
      " Fine-tuning and Evaluation of LLMs",
      "Token Usage Optimization",
      "Anthropic Claude",
      "Mistral"

    ]
  },
  {
    title: "Natural Language Processing",
    icon: <Sparkles className="w-5 h-5" />,
    skills: [
      "Sentiment Analysis",
      "Text Classification",
      "NLP Preprocessing",
      "Natural Language Understanding (NLU)",
      "LLM Integration",
      "Named Entity Recognition",
      "Text Generation",
      "Language Understanding",
      "Transformer Models"
    ]
  },
  {
    title: "AI Frameworks & Libraries",
    icon: <Network className="w-5 h-5" />,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "NLTK",
      "spaCy",
      "FastAI",
      "Pandas"
    ]
  },
  {
    title: "AI-Driven Testing",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      "AI-Driven Testing Optimization",
      "Automated Test Generation",
      "Smart Test Selection",
      "Predictive Test Analytics",
      "Visual Testing AI",
      "Test Data Generation",
      "Intelligent Test Maintenance",
      "Performance Testing AI"
    ]
  },
  {
    title: "Programming Languages & Frameworks",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "Python",
      "JavaScript",
      "Pytest",
      "Selenium",
      "Cypress",
      "Appium",
      "NumPy",
      "JUnit",
      "BDD Framework",
      "Behave",
      "RestAPI"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "MLOps",
      "Cloud Computing",
      "Microservices",
      "Serverless"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      "Jira",
      "Git & Github",
      "Figma",
      "Trello",
      "Postman",
      "Test Rail",
      "Allure Report",
      "JMeter",
      "Katalon Studio"
    ]
  },
  {
    title: "Testing Methodologies",
    icon: <TestTube className="w-5 h-5" />,
    skills: [
      "Functional Testing",
      "System Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Smoke Testing",
      "Regression Testing",
      "API Testing",
      "Performance Testing",
      "Security Testing",
      "Mobile Testing",
      "Web Testing",
      "User Acceptance Testing (UAT)"
    ]
  }
];

const SkillCard = motion(Card);
const SkillBadge = motion(Badge);

export function Skills() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        Technical Skills & Expertise
      </h2>
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
                ease: 'easeInOut',
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
                    `[animation-delay:${(categoryIndex * 150) + (skillIndex * 50)}ms]`
                  )}
                  initial={false}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: {
                      duration: 0.3,
                      ease: 'easeInOut',
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
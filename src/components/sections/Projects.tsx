import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeTab, setActiveTab] = useState<"dev" | "test">("dev");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects where I've either built the full stack or
            ensured absolute quality through rigorous testing.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-secondary/50 p-1.5 rounded-full inline-flex border border-border/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("dev")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === "dev"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              Built & Delivered (Dev)
            </button>
            <button
              onClick={() => setActiveTab("test")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === "test"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              Automated & Tested (QA)
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Store, Shield, Building2, ShoppingCart, Circle, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { projects } from '@/data/projects';
import { FadeInWhenVisible } from '@/components/animations/FadeInWhenVisible';

const ProjectCard = motion(Card);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#4ECDC4] to-[#45B7D1] animate-gradient">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of successful projects showcasing expertise in QA automation, testing frameworks, and quality assurance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeInWhenVisible key={project.title} delay={index * 0.2}>
            <ProjectCard 
              className="group p-6 transform transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-[#4ECDC4]/5 to-[#45B7D1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg"
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                      layoutId={`title-${project.title}`}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </motion.div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <ChevronRight className="w-4 h-4 text-primary" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectCard>
          </FadeInWhenVisible>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedProject.icon}
                    </motion.div>
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#4ECDC4] to-[#45B7D1]">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-muted-foreground mt-2">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold">Project Overview</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {selectedProject.fullDescription}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold">Key Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges?.map((challenge, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Circle className="w-2 h-2 mt-2 fill-primary flex-shrink-0" />
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-lg font-semibold">Results & Impact</h4>
                    <ul className="space-y-2">
                      {selectedProject.results?.map((result, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
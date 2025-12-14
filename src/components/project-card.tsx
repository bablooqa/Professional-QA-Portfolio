import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </div>
          <div className="flex gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

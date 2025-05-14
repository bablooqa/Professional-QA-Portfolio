import { Briefcase, Circle } from 'lucide-react';
import { GradientCard } from '@/components/ui/gradient-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Experience() {
  const experiences = [
    {
      title: "QA Automation Engineer",
      company: "Intelligaia Pvt. Ltd.",
      period: "Jan 2021 - Present",
      description: "Led quality assurance for POS System development, transitioning from manual to automated testing while maintaining high standards through CI/CD integration.",
      skills: ["Manual Testing", "Automation", "CI/CD", "POS Systems"],
      achievements: [
        "Reduced test execution time by 70%",
        "Implemented automated regression suite",
        "Improved system reliability by 95%"
      ]
    },
    {
      title: "Quality Assurance Engineer",
      company: "Meon Technologies Pvt. Ltd.",
      period: "Aug 2019 - Nov 2020",
      description: "Developed and executed QA processes for KYC/ReKYC projects, ensuring compliance with regulatory standards while automating key testing tasks.",
      skills: ["KYC", "Compliance", "Automation", "Regulatory Testing"],
      achievements: [
        "Automated 80% of test cases",
        "Reduced compliance issues by 90%",
        "Optimized testing workflow"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        PROFESSIONAL EXPERIENCE
      </h2>
      <div className="relative">
        {/* Timeline line - visible only on desktop */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block"></div>
        
        <div className="space-y-6 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={cn(
                "relative",
                "md:pl-24",
                "flex flex-col",
                index !== experiences.length - 1 && "before:absolute before:left-[50%] before:-translate-x-[50%] before:top-full before:h-4 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent before:md:hidden"
              )}
            >
              <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
              <GradientCard className="transform transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <Badge className="mt-2 md:mt-0 bg-gradient-to-r from-primary/80 to-primary">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements</h4>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Circle className="w-2 h-2 fill-current flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
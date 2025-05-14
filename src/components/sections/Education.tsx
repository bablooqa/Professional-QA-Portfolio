import { GraduationCap, Award, Circle } from 'lucide-react';
import { GradientCard } from '@/components/ui/gradient-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Education() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        EDUCATION & CERTIFICATIONS
      </h2>
      <div className="relative">
        {/* Timeline line - visible only on desktop */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block"></div>
        
        <div className="space-y-6 md:space-y-12">
          {/* Education Card */}
          <div className={cn(
            "relative",
            "md:pl-24", // Padding only on desktop
            "flex flex-col",
            "before:absolute before:left-[50%] before:-translate-x-[50%] before:top-full before:h-4 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent", // Mobile connector
            "before:md:hidden" // Hide connector on desktop
          )}>
            <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
            <GradientCard className="transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
                  <p className="text-primary">IK Gujral Punjab Technical University</p>
                </div>
                <Badge className="mt-2 md:mt-0 bg-gradient-to-r from-primary/80 to-primary">2015 - 2019</Badge>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Achievements</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-current flex-shrink-0" />
                    <p>Best software project in College Tech fest "PRAYOG"</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-current flex-shrink-0" />
                    <p>Second Position in Web Development</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-current flex-shrink-0" />
                    <p>Overall CGPA: 69%</p>
                  </div>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Certifications Card */}
          <div className={cn(
            "relative",
            "md:pl-24",
            "flex flex-col"
          )}>
            <div className="absolute left-6 w-4 h-4 rounded-full bg-primary/50 border-4 border-background hidden md:block"></div>
            <GradientCard className="transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-4">Professional Certifications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Python Development",
                    org: "Naresh i Technologies",
                    year: "2019"
                  },
                  {
                    title: "QA / Manual / Automation Test Engineer",
                    org: "Udemy",
                    year: "2020"
                  },
                  {
                    title: "UI/UX Design with Figma",
                    org: "Udemy",
                    year: "2021"
                  }
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 group p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Award className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.org} - {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GradientCard>
          </div>
        </div>
      </div>
    </div>
  );
}
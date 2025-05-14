import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronRight, Brain, Sparkles, Bot, Code2, Cpu, Network, Download, Calendar, Star, Users, Trophy, Clock, MessageSquare, Zap, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

export function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [currentSpecialization, setCurrentSpecialization] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const specializations = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Driven Testing",
      description: "Leveraging AI/ML for intelligent test automation and optimization"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Prompt Engineering",
      description: "Expert in crafting precise prompts for AI models and LLMs"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "QA Automation",
      description: "End-to-end test automation with modern frameworks"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const parallaxStyle = (depth: number) => ({
    transform: `translateY(${scrollY * depth}px)`,
  });

  const highlights = [
    { icon: <Star className="w-5 h-5" />, text: "5+ Years of QA Excellence" },
    { icon: <Users className="w-5 h-5" />, text: "Worked with 5+ Global Clients" },
    { icon: <Trophy className="w-5 h-5" />, text: "99.9% Bug Detection Rate" },
    { icon: <Clock className="w-5 h-5" />, text: "70% Faster Test Execution" }
  ];

  const promptSkills = [
    { icon: <Zap className="w-4 h-4" />, text: "Zero-shot & Few-shot Learning" },
    { icon: <Brain className="w-4 h-4" />, text: "Chain-of-Thought Prompting" },
    { icon: <Lightbulb className="w-4 h-4" />, text: "ReAct Framework Expert" }
  ];

  return (
    <>
      {isLoading && (
        <div className="loading-overlay flex items-center justify-center">
          <div className="loading-spinner" />
        </div>
      )}

      <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary">
        {/* Tech Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] bg-gradient-to-l from-[#7047ff]/20 to-transparent rounded-full blur-[60px] animate-pulse delay-700" />
        </div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="parallax-layer absolute top-1/4 left-1/4" style={parallaxStyle(0.2)}>
            <Brain className="w-16 h-16 text-primary/20 floating-element" />
          </div>
          <div className="parallax-layer absolute top-1/3 right-1/4" style={parallaxStyle(0.3)}>
            <Sparkles className="w-12 h-12 text-primary/30 floating-element" />
          </div>
          <div className="parallax-layer absolute bottom-1/4 left-1/3" style={parallaxStyle(0.1)}>
            <Bot className="w-20 h-20 text-primary/20 floating-element" />
          </div>
          <div className="parallax-layer absolute top-1/2 right-1/3" style={parallaxStyle(0.15)}>
            <Cpu className="w-14 h-14 text-[#7047ff]/30 floating-element" />
          </div>
          <div className="parallax-layer absolute bottom-1/3 right-1/4" style={parallaxStyle(0.25)}>
            <Code2 className="w-16 h-16 text-[#00b8ff]/20 floating-element" />
          </div>
          <div className="parallax-layer absolute top-2/3 left-1/4" style={parallaxStyle(0.2)}>
            <Network className="w-18 h-18 text-[#00ff9d]/20 floating-element" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-16 container mx-auto px-4">
          <div className="hero-glow max-w-4xl mx-auto text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-[#00b8ff]/10 to-[#7047ff]/10 blur-3xl" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text opacity-0 animate-fade-in relative">
                Babloo Kumar Sah
              </h1>
            </div>
            
            <p className="text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in [animation-delay:200ms] relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#00b8ff] to-[#7047ff]">
                GenAI | Prompt Engineer | QA Automation Engineer | Quality Assurance | Test Engineer
              </span>
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-0 animate-fade-in [animation-delay:300ms]">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {highlight.icon}
                  </div>
                  <p className="text-sm font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>

            {/* Specializations Carousel */}
            <div className="mb-12 relative">
              <div className="bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm rounded-lg p-8 border border-primary/10">
                <div className="flex items-center justify-center mb-6 text-primary">
                  {specializations[currentSpecialization].icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#00b8ff] to-[#7047ff]">
                  {specializations[currentSpecialization].title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {specializations[currentSpecialization].description}
                </p>
              </div>

              {/* Prompt Engineering Skills */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {promptSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center text-sm text-muted-foreground bg-background/40 backdrop-blur-sm p-3 rounded-lg border border-primary/10">
                    {skill.icon}
                    <span>{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-12 text-lg relative bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
              <p className="typing-animation">🔍 Crafting precise prompts for AI models and automating complex test scenarios</p>
              <p className="typing-animation-2">🚀 Reducing test execution time by 70% through AI-driven optimization</p>
              <p className="typing-animation-3">💡 Expertise in LLMs, Chain-of-Thought prompting, and test automation frameworks</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in [animation-delay:400ms] relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-primary/20 group"
                onClick={() => window.location.href = 'mailto:bablooshahcse@gmail.com'}
              >
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                bablooshahcse@gmail.com
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-primary/20 group"
                onClick={() => window.location.href = 'tel:+917888632265'}
              >
                <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                +91-7888632265
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-primary/20 group"
              >
                <MapPin className="w-4 h-4 group-hover:text-primary transition-colors" />
                New Delhi
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in [animation-delay:600ms] relative">
              <Button
                className="bg-gradient-to-r from-[#00ff9d] via-[#00b8ff] to-[#7047ff] hover:opacity-90 animate-pulse shadow-lg group relative overflow-hidden"
                onClick={() => window.open('https://linktr.ee/bablookumarsah', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  View Portfolio
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] via-[#00b8ff] to-[#7047ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:opacity-90 shadow-lg group relative overflow-hidden animate-bounce-slow"
                      onClick={() => window.location.href = '/Resume/Babloo_ResumeGenAIPEQA_V5.pdf'}
                    >
                      <span className="relative z-10 flex items-center">
                        Download Resume
                        <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Last Updated: March 15, 2025
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                variant="outline"
                className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-primary/20 group"
                onClick={() => window.open('https://github.com/bablooqa', '_blank')}
              >
                <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                GitHub
              </Button>

              <Button
                variant="outline"
                className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-primary/20 group"
                onClick={() => window.open('https://linkedin.com/in/qababloo', '_blank')}
              >
                <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
                LinkedIn
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in [animation-delay:800ms]">
              <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-4xl font-bold text-primary mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years of Professional QA</p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Successfully Delivered</p>
              </div>
              <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Test Cases</h3>
                <p className="text-4xl font-bold text-primary mb-2">1000+</p>
                <p className="text-sm text-muted-foreground">Automated & Maintained</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      </div>
    </>
  );
}
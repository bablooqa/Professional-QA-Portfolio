import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { TryBeforeHire } from '@/components/sections/TryBeforeHire';
import { MobileNav } from '@/components/MobileNav';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = {
    ABOUT: useRef<HTMLDivElement>(null),
    EXPERIENCE: useRef<HTMLDivElement>(null),
    PROJECTS: useRef<HTMLDivElement>(null),
    SKILLS: useRef<HTMLDivElement>(null),
    EDUCATION: useRef<HTMLDivElement>(null),
    'TRY BEFORE HIRE': useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show tooltips after a delay
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMobileTooltip(true);
      setShowDesktopTooltip(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowMobileTooltip(false);
      setShowDesktopTooltip(false);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleTryButtonClick = () => {
    scrollToSection(sections['TRY BEFORE HIRE']);
    setShowMobileTooltip(false);
    setShowDesktopTooltip(false);
  };

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-background to-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      
      {/* Navigation */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md" 
            : "bg-background/80 backdrop-blur-sm"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <MobileNav sections={sections} scrollToSection={scrollToSection} />
              <motion.span
                className="font-bold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Babloo Kumar Sah
              </motion.span>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile Try Before Hire Button */}
              <div className="md:hidden">
                <TooltipProvider>
                  <Tooltip 
                    open={showMobileTooltip}
                    onOpenChange={setShowMobileTooltip}
                  >
                    <TooltipTrigger asChild>
                      <Button
                        onClick={handleTryButtonClick}
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white hover:opacity-90 animate-pulse"
                        onMouseEnter={() => setShowMobileTooltip(true)}
                        onMouseLeave={() => setShowMobileTooltip(false)}
                      >
                        Try Free
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="bottom" 
                      sideOffset={5}
                      className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white border-none"
                    >
                      Explore our risk-free hiring process
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="hidden md:flex gap-6">
                {Object.entries(sections).map(([key, ref], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {key === 'TRY BEFORE HIRE' ? (
                      <TooltipProvider>
                        <Tooltip 
                          open={showDesktopTooltip}
                          onOpenChange={setShowDesktopTooltip}
                        >
                          <TooltipTrigger asChild>
                            <motion.button
                              onClick={handleTryButtonClick}
                              className="text-sm font-medium tracking-wide text-white bg-gradient-to-r from-[#6a11cb] to-[#2575fc] px-4 py-2 rounded-md transition-all duration-300 hover:opacity-90"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onMouseEnter={() => setShowDesktopTooltip(true)}
                              onMouseLeave={() => setShowDesktopTooltip(false)}
                            >
                              {key}
                            </motion.button>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            sideOffset={5}
                            className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white border-none"
                          >
                            Explore our risk-free hiring process
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <motion.button
                        onClick={() => scrollToSection(ref)}
                        className={cn(
                          "text-sm transition-all duration-300 font-medium tracking-wide hover:text-primary",
                          scrolled ? 'py-1' : 'py-2'
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {key}
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      {/* Sections */}
      <section ref={sections.ABOUT}><About /></section>
      <section className="py-16" ref={sections.EXPERIENCE}><Experience /></section>
      <section className="py-16 bg-gradient-to-r from-background to-secondary" ref={sections.PROJECTS}><Projects /></section>
      <section className="py-16" ref={sections.SKILLS}><Skills /></section>
      <section className="py-16 bg-gradient-to-r from-background to-secondary" ref={sections.EDUCATION}><Education /></section>
      <section className="py-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white" ref={sections['TRY BEFORE HIRE']}><TryBeforeHire /></section>
      <section className="py-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc]" ref={sections.CONTACT}><Contact /></section>

      {/* Footer */}
      <motion.footer
        className="py-8 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>© 2024 Babloo Kumar Sah. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}

export default App;
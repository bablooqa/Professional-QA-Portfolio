import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { TryBeforeHireWizard } from "@/components/TryBeforeHireWizard"; // Updated Import
import { MobileNav } from "@/components/MobileNav";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false); // Wizard State

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sections = {
    PROJECTS: useRef<HTMLDivElement>(null),
    SERVICES: useRef<HTMLDivElement>(null),
    EXPERIENCE: useRef<HTMLDivElement>(null),
    SKILLS: useRef<HTMLDivElement>(null),
    EDUCATION: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const yOffset = -80;
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
              <MobileNav
                sections={sections}
                scrollToSection={scrollToSection}
                onOpenWizard={() => setWizardOpen(true)}
              />
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
              <div className="hidden md:flex gap-6 items-center">
                {Object.entries(sections).map(([key, ref], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => scrollToSection(ref)}
                      className={cn(
                        "text-sm transition-all duration-300 font-medium tracking-wide hover:text-primary capitalize",
                        scrolled ? "py-1" : "py-2"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {key.replace(/_/g, " ").toLowerCase()}
                    </motion.button>
                  </motion.div>
                ))}
                {/* Desktop Pilot Button */}
                <Button
                  onClick={() => setWizardOpen(true)}
                  className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm"
                  size="sm"
                >
                  Start Risk-Free Pilot
                </Button>
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
      <section>
        <About onOpenWizard={() => setWizardOpen(true)} />
      </section>
      <section
        className="py-16 bg-gradient-to-r from-background to-secondary"
        id="projects"
        ref={sections.PROJECTS}
      >
        <Projects />
      </section>
      <section className="py-16" id="services" ref={sections.SERVICES} aria-label="Services">
        <Services />
      </section>
      <section
        className="py-16 bg-gradient-to-r from-background to-secondary"
        id="experience"
        ref={sections.EXPERIENCE}
        aria-label="Experience"
      >
        <Experience />
      </section>
      <section className="py-16" id="skills" ref={sections.SKILLS} aria-label="Skills">
        <Skills />
      </section>
      <section
        className="py-16 bg-gradient-to-r from-background to-secondary"
        id="education"
        ref={sections.EDUCATION}
        aria-label="Education"
      >
        <Education />
      </section>
      {/* Removed TryBeforeHire Section */}
      <section
        className="relative overflow-hidden py-20"
        id="contact"
        ref={sections.CONTACT}
        aria-label="Contact"
      >
        <Contact />
      </section>

      {/* Footer */}
      <motion.footer
        className="py-8 text-center border-t border-border/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium text-foreground">
          © 2024 Babloo Kumar Sah. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          © 2026 Designed and Developed by Babloo Kumar. All rights reserved.
        </p>
      </motion.footer>

      {/* Wizard Modal */}
      <TryBeforeHireWizard open={wizardOpen} onOpenChange={setWizardOpen} />
    </motion.div>
  );
}

export default App;

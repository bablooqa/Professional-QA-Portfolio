import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Shield, Code as Code2, Database, Brain, Sparkles, Layers, Search, Cpu, Bot, Rocket, MousePointer2 } from "lucide-react";

interface AboutProps {
  onOpenWizard?: () => void;
}

// TechPill removed
export function About({ onOpenWizard }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax removed

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-16 transition-colors duration-500"
      style={{ backgroundColor: "hsl(var(--hero-bg))" }}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--hero-grid-color)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--hero-grid-color)) 1px, transparent 1px)`,
          }}
        />

        {/* Mouse Follower Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                hsl(var(--accent-glow)),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-12 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="text-left space-y-8 -mt-8 md:-mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium transition-colors cursor-pointer hover:shadow-md"
            style={{
              backgroundColor: "hsl(var(--pill-bg))",
              borderColor: "hsl(var(--pill-border))",
              color: "hsl(var(--hero-text-primary))",
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Available for New Projects</span>
          </motion.button>

          {/* Animated Headline (H1 for primary SEO keyword targeting) */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            aria-label="AI Agent Developer and Full Stack Developer building intelligent GenAI products and scalable systems"
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
            style={{ color: "hsl(var(--hero-text-primary))" }}
          >
            {/* Split text for staggered reveal */}
            {[
  "Build",
  "Production",
  "-Ready",
  "AI",
  "Products",
  "&",
  "Scalable",
  "Systems",
].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
                  },
                }}
                className={`inline-block mr-2 ${
                  ["Ready", "AI", "Products"].includes(word)
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
                    : ""
                }`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl max-w-2xl leading-relaxed font-medium"
            style={{ color: "hsl(var(--hero-text-secondary))" }}
          >
            Developing{" "}
            <span
              className="font-bold relative inline-block"
              style={{ color: "hsl(var(--hero-text-primary))" }}
            >
              AI Copilots
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/50 rounded-full"></span>
            </span>
            ,{" "}
            <span
              className="font-bold relative inline-block"
              style={{ color: "hsl(var(--hero-text-primary))" }}
            >
              SaaS Dashboards
            </span>
            , and{" "}
            <span
              className="font-bold relative inline-block"
              style={{ color: "hsl(var(--hero-text-primary))" }}
            >
              Custom CRMs
            </span>{" "}
            with React, Next.js, Node.js, Python, and Modern LLMs{" "}
            <span className="opacity-90 block mt-2 text-lg">
              for startups, product teams, and agencies.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-l-4 bg-muted/20 backdrop-blur-sm"
            style={{
              borderColor: "hsl(var(--glass-border))",
              borderLeftColor: "hsl(var(--primary))",
            }}
          >
            <div className="mt-1">
              <Sparkles className="w-4 h-4 text-cyan-500" />
            </div>
            <p
              className="text-sm md:text-base italic"
              style={{ color: "hsl(var(--hero-text-secondary))" }}
            >
              "Single owner from idea to production—designing, coding, and
              shipping full‑stack & GenAI systems with QA baked in."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={onOpenWizard}
              className="font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 border-0"
              /* Removed manual bg-cyan-500 class to let Button default (gradient) take over */
            >
              Start a Risk-Free AI Build
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="transition-colors hover:bg-secondary/50"
              style={{
                borderColor: "hsl(var(--pill-border))",
                color: "hsl(var(--hero-text-primary))",
              }}
            >
              Review Full-Stack & GenAI Work
            </Button>
          </motion.div>

          {/* Mobile-only Tech Stack Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:hidden flex flex-wrap gap-2 pt-4"
          >
            {[
              { icon: Brain, label: "LLMs" },
              { icon: Code2, label: "React/Next.js" },
              { icon: Terminal, label: "Node.js" },
              { icon: Search, label: "RAG" },
              { icon: Shield, label: "QA Auto" },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
                style={{
                  backgroundColor: "hsl(var(--pill-bg))",
                  borderColor: "hsl(var(--pill-border))",
                  color: "hsl(var(--pill-text))",
                }}
              >
                <tech.icon className="w-3 h-3" />
                {tech.label}
              </div>
            ))}
          </motion.div>

          <div
            className="flex items-center gap-6 pt-4 opacity-70 transition-all duration-500 hidden lg:flex"
            style={{ color: "hsl(var(--hero-text-secondary))" }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "hsl(var(--pill-bg))",
                    borderColor: "hsl(var(--pill-border))",
                    color: "hsl(var(--pill-text))",
                  }}
                >
                  {i === 1 && <Code2 className="w-4 h-4" />}
                  {i === 2 && <Shield className="w-4 h-4" />}
                  {i === 3 && <Brain className="w-4 h-4" />}
                </div>
              ))}
            </div>
            <div className="text-sm font-mono">
              <span
                className="font-bold"
                style={{ color: "hsl(var(--hero-text-primary))" }}
              >
                End-to-End
              </span>{" "}
              Engineering
            </div>
          </div>
        </div>

        {/* Right: 3D Tech Visual - Redesigned */}
        <div className="relative h-full w-full hidden lg:flex flex-col items-center justify-center perspective-1000 z-10">
          {/* 1. Structured Tech Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 max-w-md mx-auto mb-8"
          >
            {[
              { icon: Brain, label: "LLMs", color: "text-purple-400" },
              { icon: Bot, label: "AI/ML Engineer", color: "text-pink-400" },
              { icon: Search, label: "RAG Systems", color: "text-blue-400" },
              {
                icon: Rocket,
                label: "Google Antigravity",
                color: "text-red-400",
              },
              { icon: Code2, label: "React/Next.js", color: "text-cyan-400" },
              {
                icon: MousePointer2,
                label: "Cursor AI",
                color: "text-indigo-300",
              },
              { icon: Terminal, label: "Node.js", color: "text-green-400" },
              { icon: Database, label: "PostgreSQL", color: "text-indigo-400" },
              {
                icon: Database,
                label: "MongoDB/Supabase",
                color: "text-emerald-400",
              },
              { icon: Layers, label: "Docker", color: "text-blue-300" },
              { icon: Shield, label: "Playwright", color: "text-orange-400" },
              { icon: Cpu, label: "Python", color: "text-yellow-300" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-md shadow-sm transition-colors hover:border-primary/50"
                style={{
                  borderColor: "hsl(var(--pill-border))",
                }}
              >
                <tech.icon className={`w-4 h-4 ${tech.color}`} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "hsl(var(--hero-text-primary))" }}
                >
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* 2. AI Console Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: [0, -10, 0], // Gentle float
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-full max-w-[420px] rounded-xl border overflow-hidden shadow-2xl backdrop-blur-xl bg-background/40"
            style={{
              borderColor: "hsl(var(--glass-border))",
              boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Card Header */}
            <div
              className="flex items-center px-4 py-3 border-b bg-muted/20"
              style={{ borderColor: "hsl(var(--glass-border))" }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-auto flex items-center gap-2 opacity-50">
                <Sparkles className="w-3 h-3" />
                <span className="text-[10px] font-mono tracking-wider">
                  AI_AGENT_V2
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 font-mono text-xs md:text-sm space-y-3 relative">
              {/* Background Grid inside card for texture */}
              <div
                className="absolute inset-0 opacity-[0.03] bg-[size:10px_10px] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                }}
              />

              <div className="relative z-10 space-y-2">
                <div className="flex gap-2 text-muted-foreground/60">
                  <span>$</span>
                  <span>init_sequence --verbose</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex gap-2"
                  style={{ color: "hsl(var(--hero-text-secondary))" }}
                >
                  <span className="text-blue-500">ℹ</span>
                  <span>Loading vectors... [1024 dims]</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex gap-2"
                  style={{ color: "hsl(var(--hero-text-secondary))" }}
                >
                  <span className="text-green-500">✓</span>
                  <span>Connected to Knowledge Base</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex gap-2"
                  style={{ color: "hsl(var(--hero-text-secondary))" }}
                >
                  <span className="text-yellow-500">⚠</span>
                  <span>Optimizing inference latency...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                  className="pt-2 flex gap-2 font-bold"
                  style={{ color: "hsl(var(--hero-text-primary))" }}
                >
                  <span className="text-cyan-500">➜</span>
                  <span>System Ready. Waiting for prompt</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-cyan-500 block"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Glow Behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px] -z-10 opacity-40 mix-blend-screen"
            style={{ backgroundColor: "hsl(var(--accent-glow))" }}
          />
        </div>
      </div>
    </section>
  );
}

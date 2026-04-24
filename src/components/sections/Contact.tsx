import { Mail, Download, Calendar, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social-links";

const taglines = [
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Trusted by startups to ship AI products fast",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    text: "Full-stack React, Next.js & GenAI engineering",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Production-grade quality with built-in QA automation",
  },
];

export function Contact() {
  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-700" />

      {/* Moving gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -z-10 top-0 -left-20 w-[32rem] h-[32rem] rounded-full bg-cyan-300/40 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 bottom-0 -right-20 w-[32rem] h-[32rem] rounded-full bg-blue-400/40 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 top-1/2 left-1/2 w-[28rem] h-[28rem] rounded-full bg-sky-200/30 blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow">
            Let's Connect
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Hiring managers and founders — let's turn your idea into a
            production-ready product. I help startups and teams ship reliable{" "}
            <span className="font-semibold text-white">
              AI, React &amp; full-stack web applications
            </span>{" "}
            with speed, quality, and clarity.
          </p>
          <p className="text-white/80 mt-3">
            From GenAI copilots and RAG systems to scalable SaaS platforms and
            QA automation — built for startups that need to move fast without
            breaking trust.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {taglines.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-medium"
              >
                {t.icon}
                <span>{t.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 transform hover:scale-[1.01] transition-all duration-200 bg-card/95 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Professional Networks</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  className="w-full justify-start gap-2 hover:scale-105 transition-transform"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.icon}
                  {link.name}
                </Button>
              ))}
            </div>
          </Card>

          <Card className="p-6 transform hover:scale-[1.01] transition-all duration-200 bg-card/95 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Button
                className="w-full justify-start gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90"
                onClick={() =>
                  window.open("https://calendly.com/qa-babloo/15min", "_blank")
                }
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 hover:scale-105 transition-transform"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Sw3_gedPT73DuwVqL_ac04RefYmdZll-/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 hover:scale-105 transition-transform"
                onClick={() =>
                  window.open("mailto:bablooshahcse@gmail.com", "_blank")
                }
              >
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

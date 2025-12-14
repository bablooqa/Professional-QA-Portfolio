import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  Code2,
  TestTube,
  Search,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Loader2,
  ArrowLeft,
  Send,
  Shield,
} from "lucide-react";

interface WizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TryBeforeHireWizard({ open, onOpenChange }: WizardProps) {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  // --- Text Editor Logic ---
  const applyFormat = (format: "bold" | "italic" | "list" | "link") => {
    if (!textareaRef.current) return;
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const value = textareaRef.current.value;
    const selected = value.substring(start, end);

    let newText = value;
    let newCursorPos = end;

    switch (format) {
      case "bold":
        newText =
          value.substring(0, start) + `**${selected}**` + value.substring(end);
        newCursorPos = end + 4;
        break;
      case "italic":
        newText =
          value.substring(0, start) + `_${selected}_` + value.substring(end);
        newCursorPos = end + 2;
        break;
      case "list":
        if (selected.length === 0) {
          newText = value.substring(0, start) + `- ` + value.substring(end);
          newCursorPos = start + 2;
        } else {
          const lines = selected.split("\n").map((line) => `- ${line}`);
          newText =
            value.substring(0, start) + lines.join("\n") + value.substring(end);
          newCursorPos = start + newText.length - value.length;
        }
        break;
      case "link":
        newText =
          value.substring(0, start) +
          `[${selected}](url)` +
          value.substring(end);
        newCursorPos = end + 6;
        break;
    }

    textareaRef.current.value = newText;
    textareaRef.current.focus();
    textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const driveLink = formData.get("drive_link") as string;
    const details = textareaRef.current?.value || "";

    // Validate WhatsApp (Basic check for 10+ digits)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(whatsapp.replace(/\D/g, ""))) {
      alert("Please enter a valid WhatsApp number (at least 10 digits).");
      setIsSubmitting(false);
      return;
    }

    // Generate secure-looking Order ID
    const newOrderId = "#PILOT-" + Math.floor(1000 + Math.random() * 9000);
    setOrderId(newOrderId);

    // Prepare Web3Forms Payload
    const submitData = new FormData();
    submitData.append("access_key", "5f588a49-34bc-422a-9425-3312ccbc53fa");
    submitData.append("name", name);
    submitData.append("email", email);
    submitData.append("whatsapp", whatsapp);
    submitData.append("subject", `Pilot Request: ${newOrderId} from ${name}`);
    submitData.append("from_name", "Portfolio Pilot Wizard");
    submitData.append("order_id", newOrderId);
    submitData.append("pilot_type", selection || "Unknown");
    submitData.append("botcheck", ""); // Anti-spam

    const message = `
      New Pilot Request Details:
      --------------------------
      ID: ${newOrderId}
      Name: ${name}
      Email: ${email}
      WhatsApp: ${whatsapp}
      Pilot Type: ${selection?.toUpperCase()}
      
      Drive/Doc Link: ${driveLink || "Not provided"}
      
      Goals/Requirements:
      ${details}
    `;
    submitData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setStep(4); // Success step
      } else {
        console.error("Form submission failed:", result);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: "Intro", desc: "How it works" },
    { title: "Select", desc: "Choose Pilot" },
    { title: "Details", desc: "Specs & Links" },
    { title: "Finish", desc: "Confirmation" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-[1000px] h-[90vh] md:h-[650px] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20 flex shadow-2xl">
        {/* Sidebar / Progress for Desktop */}
        <div className="hidden md:flex flex-col w-64 bg-secondary/30 p-8 border-r border-border/50 justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary mb-10 tracking-tight">
              Risk-Free Pilot
            </h3>
            <div className="space-y-8 relative pl-2">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border/50" />
              {steps.map((s, i) => (
                <div key={i} className="relative z-10 flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step > i + 1
                        ? "bg-primary text-primary-foreground scale-100"
                        : step === i + 1
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20 scale-110"
                        : "bg-muted text-muted-foreground scale-100"
                    }`}
                  >
                    {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        step === i + 1
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="text-xs text-muted-foreground/70">
                      {s.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Questions? <br />
            <span className="text-primary hover:underline cursor-pointer">
              bablooshahcse@gmail.com
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full bg-background/50 relative">
          {/* Content Area */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-2xl mx-auto space-y-8"
                >
                  <div className="text-center md:text-left space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                      Pilot Program Details
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Experience my "Hybrid" expertise before committing to a
                      full contract.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Dev Pilot</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I build a small MVP feature, component, or fix a complex
                        bug in your existing codebase within 48 hours.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-500">
                        <TestTube className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">QA Pilot</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I automate a critical user flow (Login, Checkout) or set
                        up a complete CI/CD testing pipeline for your repo.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <Shield className="w-5 h-5 text-cyan-500" />
                      <span>100% Secure & Trust-Based Collaboration</span>
                      <div className="h-px flex-1 bg-border/50" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Security & NDA */}
                      <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                          <Shield className="w-4 h-4" />
                          <span>Data Security & NDA</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Your code and IP are safe. I am happy to sign an NDA
                          before starting. All work is conducted in a secure,
                          private environment.
                        </p>
                      </div>

                      {/* Try Then Hire */}
                      <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
                          <Check className="w-4 h-4" />
                          <span>Verify Then Hire</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Test my skills with real work first. No long-term
                          commitment until you are satisfied with the initial
                          pilot delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-2xl mx-auto space-y-8"
                >
                  <h2 className="text-3xl font-bold">Select Your Pilot</h2>
                  <div className="grid gap-4">
                    {[
                      {
                        id: "dev",
                        title: "Build MVP Feature",
                        desc: "React, Node.js, Python components",
                        icon: <Code2 />,
                        color: "text-blue-500",
                        bg: "bg-blue-500/10",
                      },
                      {
                        id: "qa",
                        title: "Automate Critical Flow",
                        desc: "Playwright, Cypress, Selenium scripts",
                        icon: <TestTube />,
                        color: "text-green-500",
                        bg: "bg-green-500/10",
                      },
                      {
                        id: "audit",
                        title: "Code/QA Audit",
                        desc: "Deep dive into performance & security",
                        icon: <Search />,
                        color: "text-purple-500",
                        bg: "bg-purple-500/10",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelection(opt.id)}
                        className={`group flex items-center gap-6 p-6 rounded-2xl border transition-all text-left ${
                          selection === opt.id
                            ? "border-primary bg-primary/5 ring-1 ring-primary shadow-lg"
                            : "border-border hover:border-primary/30 hover:bg-secondary/30"
                        }`}
                      >
                        <div
                          className={`p-4 rounded-xl transition-transform group-hover:scale-110 ${
                            selection === opt.id
                              ? "bg-primary text-primary-foreground"
                              : `${opt.bg} ${opt.color}`
                          }`}
                        >
                          {opt.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{opt.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {opt.desc}
                          </p>
                        </div>
                        {selection === opt.id && (
                          <div className="ml-auto">
                            <Check className="w-6 h-6 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-2xl mx-auto h-full flex flex-col"
                >
                  <h2 className="text-3xl font-bold mb-6">Details & Specs</h2>
                  <form
                    id="wizard-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@company.com"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          placeholder="+1 555 000 0000"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="drive_link">Docs/Drive Link</Label>
                        <Input
                          id="drive_link"
                          name="drive_link"
                          placeholder="https://docs.google.com/..."
                          className="h-11"
                        />
                      </div>
                    </div>

                    {/* Rich Editor With Functional Sidebar */}
                    <div className="space-y-2 flex-1 flex flex-col min-h-[200px]">
                      <Label>Pilot Goals & Requirements</Label>
                      <div className="flex-1 rounded-md border border-input bg-background focus-within:ring-1 focus-within:ring-ring flex flex-col overflow-hidden">
                        {/* Toolbar */}
                        <div className="flex items-center gap-1 p-2 border-b bg-muted/30">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            type="button"
                            onClick={() => applyFormat("bold")}
                            title="Bold (**text**)"
                          >
                            <Bold className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            type="button"
                            onClick={() => applyFormat("italic")}
                            title="Italic (_text_)"
                          >
                            <Italic className="w-4 h-4" />
                          </Button>
                          <div className="w-px h-4 bg-border mx-1" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            type="button"
                            onClick={() => applyFormat("list")}
                            title="List Item"
                          >
                            <List className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            type="button"
                            onClick={() => applyFormat("link")}
                            title="Link"
                          >
                            <LinkIcon className="w-4 h-4" />
                          </Button>
                        </div>
                        <Textarea
                          ref={textareaRef}
                          id="details"
                          name="details"
                          placeholder="Describe the feature to build or the flow to test (Markdown supported)..."
                          required
                          className="flex-1 border-0 focus-visible:ring-0 resize-none p-4 font-mono text-sm"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        *If providing a Drive link, please ensure "Anyone with
                        link" access is enabled.
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/30"
                  >
                    <Check className="w-12 h-12 text-white" />
                  </motion.div>
                  <h2 className="text-4xl font-bold mb-4">Request Sent!</h2>
                  <p className="text-lg text-muted-foreground max-w-md mb-8">
                    Your pilot request has been dispatched to my priority inbox.
                    I'll review the specs and confirm availability within 24
                    hours.
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 max-w-sm w-full mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold">
                        System Status
                      </span>
                    </div>
                    <div className="text-xs text-left font-mono text-muted-foreground space-y-1">
                      <p>{`> request_id: ${orderId}`}</p>
                      <p>{`> priority: HIGH`}</p>
                      <p>{`> status: QUEUED_FOR_REVIEW`}</p>
                      <p className="text-green-500">{`> notification_sent: TRUE`}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => onOpenChange(false)}
                    variant="outline"
                    className="min-w-[200px]"
                  >
                    Back to Portfolio
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          {step < 4 && (
            <div className="p-6 border-t border-border/50 bg-background/50 backdrop-blur-sm flex justify-between items-center z-10">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={step === 2 && !selection}
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition-opacity"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  form="wizard-form"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition-opacity min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Launch Pilot <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

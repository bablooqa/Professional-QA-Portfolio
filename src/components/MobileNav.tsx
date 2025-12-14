import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import React from "react";

interface MobileNavProps {
  sections: Record<string, React.RefObject<HTMLDivElement>>;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  onOpenWizard: () => void;
}

export function MobileNav({
  sections,
  scrollToSection,
  onOpenWizard,
}: MobileNavProps) {
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="flex flex-col gap-6 mt-12">
          {/* Pilot Button */}
          <SheetClose asChild>
            <Button
              onClick={onOpenWizard}
              className="w-full bg-primary text-primary-foreground font-bold shadow-lg"
            >
              Start Risk-Free Pilot
            </Button>
          </SheetClose>

          {Object.entries(sections).map(([key, ref]) => (
            <SheetClose asChild key={key}>
              <motion.button
                type="button"
                onClick={() => handleClick(ref)}
                className="text-2xl font-semibold tracking-wide hover:text-primary transition-colors text-left capitalize"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {key.replace(/_/g, " ").toLowerCase()}
              </motion.button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

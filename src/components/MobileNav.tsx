import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  sections: Record<string, React.RefObject<HTMLDivElement>>;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
}

export function MobileNav({ sections, scrollToSection }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <nav className="flex flex-col gap-4 mt-8">
          {Object.entries(sections).map(([key, ref], index) => (
            <button
              key={key}
              onClick={() => {
                scrollToSection(ref);
                // Close the sheet after clicking
                const closeButton = document.querySelector('[data-radix-collection-item]') as HTMLButtonElement;
                closeButton?.click();
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
                "hover:bg-primary/10 transition-colors text-left tracking-wide",
                "animate-fade-in opacity-0",
                `[animation-delay:${index * 100}ms]`,
                key === 'TRY BEFORE HIRE' && 'bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white hover:bg-none hover:opacity-90'
              )}
            >
              {key}
              {key === 'TRY BEFORE HIRE' && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
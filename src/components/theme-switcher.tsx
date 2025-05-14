import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full relative"
    >
      <Sun className={`h-[1.5rem] w-[1.5rem] transition-all duration-300 ${
        theme === 'dark' ? 'scale-0 rotate-[-90deg]' : 'scale-100 rotate-0'
      } absolute`} />
      <Moon className={`h-[1.5rem] w-[1.5rem] transition-all duration-300 ${
        theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90deg'
      } absolute`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
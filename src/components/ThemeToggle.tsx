import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial theme
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full 
                 flex items-center justify-center bg-card/40 backdrop-blur-md hover-glow 
                 text-foreground transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="h-4 w-4 md:h-5 md:w-5 animate-fade-in" />
      ) : (
        <Moon className="h-4 w-4 md:h-5 md:w-5 animate-fade-in" />
      )}
    </button>
  );
};

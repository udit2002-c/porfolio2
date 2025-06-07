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
      setDarkMode(false);
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
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 rounded-full 
                 flex items-center justify-center bg-black/60 dark:bg-white/10 backdrop-blur-md 
                 border border-red-500/50 hover:border-red-400 hover:bg-red-500/20 
                 text-red-400 hover:text-red-300 transition-all duration-300 ease-in-out 
                 hover:shadow-lg hover:shadow-red-500/30"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 animate-fade-in" />
      ) : (
        <Moon className="h-5 w-5 animate-fade-in" />
      )}
    </button>
  );
};

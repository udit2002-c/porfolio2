import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="relative px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 
               before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
               before:bg-primary before:transform before:scale-x-0 before:origin-right 
               before:transition-transform hover:before:scale-x-100 hover:before:origin-left 
               mx-auto text-center text-sm md:text-base"    
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
  >
    {label}
  </motion.a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-3 md:py-4 transition-all duration-300 ${
        scrolled ? "bg-card/40 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <nav className="hidden md:flex space-x-1">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#achievements" label="Achievements" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col items-center 
                       justify-center space-y-6 pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink href="#about" label="About" onClick={closeMenu} />
            <NavLink href="#experience" label="Experience" onClick={closeMenu} />
            <NavLink href="#projects" label="Projects" onClick={closeMenu} />
            <NavLink href="#skills" label="Skills" onClick={closeMenu} />
            <NavLink href="#achievements" label="Achievements" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

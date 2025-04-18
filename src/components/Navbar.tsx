
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <motion.a
    href={href}
    className="relative px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary before:transform before:scale-x-0 before:origin-right before:transition-transform hover:before:scale-x-100 hover:before:origin-left"
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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-card/40 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          UDIT.DEV
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#achievements" label="Achievements" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#achievements" label="Achievements" />
          <NavLink href="#contact" label="Contact" />
        </motion.div>
      )}
    </motion.header>
  );
};

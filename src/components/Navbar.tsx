import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 
               font-medium text-sm rounded-lg hover:bg-white/10 backdrop-blur-sm"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
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
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-all duration-500 ${
        scrolled 
          ? "glass-morphism border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <motion.a 
          href="#hero" 
          className="font-bold text-xl text-white hover:text-red-400 transition-colors duration-300 
                     bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
         
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-lg 
                       rounded-full px-6 py-2 border border-white/10">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#achievements" label="Achievements" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-3 text-white hover:text-red-400 transition-colors duration-300 
                     rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
            
            {/* Menu content */}
            <motion.div
              className="relative min-h-screen flex flex-col items-center justify-center 
                         glass-morphism border border-white/10 m-4 rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-8 p-8">
                <NavLink href="#about" label="About" onClick={closeMenu} />
                <NavLink href="#experience" label="Experience" onClick={closeMenu} />
                <NavLink href="#projects" label="Projects" onClick={closeMenu} />
                <NavLink href="#skills" label="Skills" onClick={closeMenu} />
                <NavLink href="#achievements" label="Achievements" onClick={closeMenu} />
                <NavLink href="#contact" label="Contact" onClick={closeMenu} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, FileCode, Terminal, Folder, Settings, GitBranch, 
  Search, Bell, User, ChevronDown, Play, Square, Monitor,
  Maximize, Minimize, Coffee, Globe, Zap, Activity
} from "lucide-react";

const IDENavLink = ({ href, label, icon: Icon, onClick, isActive, hasUnsavedChanges }: { 
  href: string; 
  label: string; 
  icon: any;
  onClick?: () => void;
  isActive?: boolean;
  hasUnsavedChanges?: boolean;
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    className={`relative px-3 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 
               font-mono text-sm rounded-sm hover:bg-gray-700 flex items-center space-x-2 border-r border-gray-600 last:border-r-0
               ${isActive ? 'bg-gray-700 text-cyan-400' : ''}`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon size={14} />
    <span className="flex items-center">
      {label}
      {hasUnsavedChanges && <div className="w-2 h-2 bg-orange-400 rounded-full ml-1"></div>}
    </span>
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
        layoutId="activeTab"
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.a>
);

const IDEMenuDropdown = ({ title, children, icon: Icon }: { 
  title: string; 
  children: React.ReactNode;
  icon: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        className="px-3 py-1 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300 
                   font-mono text-sm rounded flex items-center space-x-1"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon size={14} />
        <span>{title}</span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-600 rounded shadow-lg z-50 min-w-48"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setIsOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownItem = ({ onClick, children, shortcut }: { 
  onClick: () => void; 
  children: React.ReactNode;
  shortcut?: string;
}) => (
  <motion.button
    className="w-full px-3 py-2 text-left text-gray-300 hover:text-cyan-400 hover:bg-gray-700 
               transition-colors duration-200 font-mono text-sm flex items-center justify-between"
    onClick={onClick}
    whileHover={{ x: 2 }}
  >
    <span>{children}</span>
    {shortcut && <span className="text-xs text-gray-500">{shortcut}</span>}
  </motion.button>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const runPortfolio = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-lg border-b border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* VS Code-style Title Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-1 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          {/* Window Controls */}
          <div className="flex items-center space-x-2">
            <motion.button 
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.button 
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.button 
              className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>

          {/* Application Title */}
          <div className="font-mono text-gray-400 text-xs">
            Udit's Portfolio - Visual Studio Code
          </div>
        </div>

        {/* Title Bar Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Activity size={12} className={isRunning ? "text-green-400" : ""} />
            <span>{isRunning ? 'Running...' : 'Ready'}</span>
          </div>

          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>

          <div className="flex items-center space-x-1">
            <motion.button 
              className="p-1 hover:bg-gray-700 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Minimize size={12} className="text-gray-400" />
            </motion.button>
            <motion.button 
              className="p-1 hover:bg-gray-700 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Maximize size={12} className="text-gray-400" />
            </motion.button>
            <motion.button 
              className="p-1 hover:bg-red-600 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={12} className="text-gray-400 hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-1">
        <div className="flex items-center space-x-1">
          <IDEMenuDropdown title="File" icon={FileCode}>
            <DropdownItem onClick={() => {}} shortcut="Ctrl+N">New File</DropdownItem>
            <DropdownItem onClick={() => {}} shortcut="Ctrl+O">Open File...</DropdownItem>
            <DropdownItem onClick={() => {}} shortcut="Ctrl+S">Save</DropdownItem>
            <DropdownItem onClick={() => {}} shortcut="Ctrl+Shift+S">Save All</DropdownItem>
          </IDEMenuDropdown>

          <IDEMenuDropdown title="View" icon={Monitor}>
            <DropdownItem onClick={() => document.getElementById('hero')?.scrollIntoView()}>Go to Hero</DropdownItem>
            <DropdownItem onClick={() => document.getElementById('projects')?.scrollIntoView()}>Show Projects</DropdownItem>
            <DropdownItem onClick={() => document.getElementById('contact')?.scrollIntoView()}>Open Contact</DropdownItem>
          </IDEMenuDropdown>

          <IDEMenuDropdown title="Terminal" icon={Terminal}>
            <DropdownItem onClick={runPortfolio} shortcut="Ctrl+`">New Terminal</DropdownItem>
            <DropdownItem onClick={() => {}}>Run Portfolio</DropdownItem>
            <DropdownItem onClick={() => {}}>Debug Portfolio</DropdownItem>
          </IDEMenuDropdown>

          <IDEMenuDropdown title="Help" icon={Coffee}>
            <DropdownItem onClick={() => window.open('https://github.com/udit2002-c', '_blank')}>GitHub Profile</DropdownItem>
            <DropdownItem onClick={() => {}}>About Portfolio</DropdownItem>
            <DropdownItem onClick={() => {}}>Documentation</DropdownItem>
          </IDEMenuDropdown>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 py-2">
        <div className="flex items-center w-full">
          {/* Project Explorer & Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded border border-gray-600">
              <Folder size={16} className="text-blue-400" />
              <span className="font-mono text-sm text-gray-300">~/portfolio</span>
            </div>

            <motion.button
              onClick={runPortfolio}
              className={`flex items-center space-x-2 px-3 py-1 rounded border transition-all duration-300 ${
                isRunning 
                  ? 'bg-red-600 border-red-500 text-white' 
                  : 'bg-green-600 border-green-500 text-white hover:bg-green-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <Square size={12} />
                  <span className="font-mono text-xs">Stop</span>
                </>
              ) : (
                <>
                  <Play size={12} />
                  <span className="font-mono text-xs">Run</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* File Tabs */}
          <div className="hidden md:flex items-center ml-6 bg-gray-800 rounded border border-gray-600 overflow-hidden">
            <IDENavLink 
              href="#hero" 
              label="main.tsx" 
              icon={FileCode} 
              isActive={activeSection === 'hero'}
              hasUnsavedChanges={false}
            />
            <IDENavLink 
              href="#about" 
              label="about.ts" 
              icon={FileCode} 
              isActive={activeSection === 'about'}
              hasUnsavedChanges={true}
            />
            <IDENavLink 
              href="#experience" 
              label="experience.json" 
              icon={FileCode} 
              isActive={activeSection === 'experience'}
            />
            <IDENavLink 
              href="#projects" 
              label="projects/" 
              icon={Folder} 
              isActive={activeSection === 'projects'}
            />
            <IDENavLink 
              href="#skills" 
              label="skills.js" 
              icon={FileCode} 
              isActive={activeSection === 'skills'}
            />
            <IDENavLink 
              href="#achievements" 
              label="achievements.md" 
              icon={FileCode} 
              isActive={activeSection === 'achievements'}
            />
            <IDENavLink 
              href="#contact" 
              label="contact.ts" 
              icon={FileCode} 
              isActive={activeSection === 'contact'}
            />
          </div>

          {/* Status Bar Items */}
          <div className="hidden lg:flex items-center ml-auto space-x-3">
            <motion.div 
              className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded border border-gray-600"
              whileHover={{ scale: 1.02 }}
            >
              <Search size={14} className="text-gray-400" />
              <span className="font-mono text-xs text-gray-400">Search</span>
              <span className="font-mono text-xs text-gray-500">Ctrl+P</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded border border-gray-600"
              whileHover={{ scale: 1.02 }}
            >
              <GitBranch size={14} className="text-green-400" />
              <span className="font-mono text-xs text-gray-400">main</span>
              <Zap size={12} className="text-yellow-400" />
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded border border-gray-600"
              whileHover={{ scale: 1.02 }}
            >
              <Globe size={14} className="text-blue-400" />
              <span className="font-mono text-xs text-gray-400">Live</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.button
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 rounded border border-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={14} />
            </motion.button>

            <motion.button
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 rounded border border-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={14} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 
                     rounded bg-gray-800 border border-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            
            <motion.div
              className="relative min-h-screen flex flex-col bg-gray-900 border-r border-gray-700 max-w-sm"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Header */}
              <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-cyan-400" />
                  <span className="font-mono text-sm text-gray-300">Portfolio Explorer</span>
                </div>
                <motion.button
                  onClick={closeMenu}
                  className="p-1 hover:bg-gray-700 rounded"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={16} className="text-gray-400" />
                </motion.button>
              </div>

              {/* File Tree */}
              <div className="flex-1 p-4">
                <div className="font-mono text-xs text-gray-500 mb-4 flex items-center">
                  <Folder size={12} className="mr-1" />
                  ~/portfolio
                </div>
                
                <div className="space-y-2">
                  <IDENavLink href="#hero" label="main.tsx" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'hero'} />
                  <IDENavLink href="#about" label="about.ts" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'about'} hasUnsavedChanges={true} />
                  <IDENavLink href="#experience" label="experience.json" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'experience'} />
                  <IDENavLink href="#projects" label="projects/" icon={Folder} onClick={closeMenu} isActive={activeSection === 'projects'} />
                  <IDENavLink href="#skills" label="skills.js" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'skills'} />
                  <IDENavLink href="#achievements" label="achievements.md" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'achievements'} />
                  <IDENavLink href="#contact" label="contact.ts" icon={FileCode} onClick={closeMenu} isActive={activeSection === 'contact'} />
                </div>

                {/* Terminal Section */}
                <div className="mt-8 p-4 bg-gray-800 rounded border border-gray-600">
                  <div className="font-mono text-xs text-gray-500 mb-2">TERMINAL</div>
                  <div className="font-mono text-xs text-gray-400 space-y-1">
                    <div className="text-green-400">$ npm start</div>
                    <div>Portfolio server running...</div>
                    <div className="flex items-center">
                      <span className="text-cyan-400">➜</span>
                      <span className="ml-2">http://localhost:3000</span>
                    </div>
                    <div className="flex items-center">
                      <span className="animate-pulse">▊</span>
                    </div>
                  </div>
                </div>

                {/* Git Status */}
                <div className="mt-4 p-4 bg-gray-800 rounded border border-gray-600">
                  <div className="font-mono text-xs text-gray-500 mb-2">GIT STATUS</div>
                  <div className="font-mono text-xs text-gray-400 space-y-1">
                    <div className="flex items-center">
                      <GitBranch size={10} className="text-green-400 mr-1" />
                      <span>main</span>
                    </div>
                    <div className="text-green-400">✓ All changes committed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

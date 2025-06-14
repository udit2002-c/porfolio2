import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, FileCode, Terminal, Folder, Settings, GitBranch, 
  Search, Bell, User, ChevronDown, Play, Square, Monitor,
  Maximize, Minimize, Coffee, Globe, Zap, Activity, ArrowRight, Trophy
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

// Search data structure
const searchData = [
  // Navigation sections
  { title: "About", section: "about", type: "section", description: "Learn about Udit's background and skills" },
  { title: "Experience", section: "experience", type: "section", description: "Professional experience and internships" },
  { title: "Projects", section: "projects", type: "section", description: "Showcase of development projects" },
  { title: "Skills", section: "skills", type: "section", description: "Technical skills and expertise" },
  { title: "Achievements", section: "achievements", type: "section", description: "Awards and accomplishments" },
  { title: "Contact", section: "contact", type: "section", description: "Get in touch with Udit" },
  
  // Skills
  { title: "React", section: "skills", type: "skill", description: "Frontend development with React" },
  { title: "TypeScript", section: "skills", type: "skill", description: "Type-safe JavaScript development" },
  { title: "Node.js", section: "skills", type: "skill", description: "Backend development with Node.js" },
  { title: "Python", section: "skills", type: "skill", description: "Python programming and automation" },
  { title: "Next.js", section: "skills", type: "skill", description: "Full-stack React framework" },
  { title: "MongoDB", section: "skills", type: "skill", description: "NoSQL database management" },
  { title: "Express.js", section: "skills", type: "skill", description: "Web application framework" },
  { title: "PostgreSQL", section: "skills", type: "skill", description: "Relational database management" },
  
  // Projects
  { title: "Portfolio Website", section: "projects", type: "project", description: "This portfolio built with React and TypeScript" },
  { title: "E-commerce Platform", section: "projects", type: "project", description: "Full-stack web application" },
  { title: "Task Management App", section: "projects", type: "project", description: "Productivity application" },
  
  // Achievements  
  { title: "Hackathon Winner", section: "achievements", type: "achievement", description: "Multiple hackathon victories" },
  { title: "E-Week Organizer", section: "achievements", type: "achievement", description: "Organized college entrepreneurship week" },
  { title: "GPA 8.50", section: "achievements", type: "achievement", description: "Academic excellence at NIE Mysore" },
  
  // Experience
  { title: "Virtual Internship", section: "experience", type: "experience", description: "Software development internship" },
  { title: "Leadership Role", section: "experience", type: "experience", description: "Treasurer of Onyx E-Cell" },
  
  // Commands
  { title: "Run Portfolio", section: "hero", type: "command", description: "npm start - Start the development server" },
  { title: "Build Project", section: "projects", type: "command", description: "npm run build - Build for production" },
  { title: "Test Code", section: "skills", type: "command", description: "npm test - Run test suite" },
];

const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Udit's Portfolio Terminal v1.0.0",
    "Type 'help' for available commands.",
    ""
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("~/portfolio");

  const commands = {
    help: () => [
      "Available commands:",
      "  cd <section>     - Navigate to section (about, experience, projects, skills, achievements, contact)",
      "  ls              - List available sections",
      "  pwd             - Show current directory",
      "  clear           - Clear terminal",
      "  whoami          - Display user info",
      "  date            - Show current date and time",
      "  exit            - Close terminal",
      ""
    ],
    ls: () => [
      "📁 about/          - Personal information and background",
      "📁 experience/     - Work experience and internships", 
      "📁 projects/       - Development projects showcase",
      "📁 skills/         - Technical skills and expertise",
      "📁 achievements/   - Awards and accomplishments",
      "📁 contact/        - Contact information and social links",
      ""
    ],
    pwd: () => [currentPath],
    whoami: () => [
      "Udit Narain Tewari",
      "Computer Science Engineering Student",
      "Full Stack Developer",
      "Treasurer of Onyx E-Cell",
      ""
    ],
    date: () => [new Date().toLocaleString()],
    clear: () => {
      setHistory(["Terminal cleared.", ""]);
      return [];
    },
    exit: () => {
      onClose();
      return [];
    }
  };

  const navigateToSection = (section: string) => {
    const validSections = ['about', 'experience', 'projects', 'skills', 'achievements', 'contact', 'hero'];
    const targetSection = section === 'home' ? 'hero' : section;
    
    if (validSections.includes(targetSection)) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentPath(`~/portfolio/${targetSection}`);
        return [`Changed directory to ${targetSection}`, ""];
      }
    }
    return [`cd: ${section}: No such directory`, ""];
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const newHistory = [...history, `➜ ${currentPath} $ ${trimmedCmd}`];
    
    if (trimmedCmd.startsWith('cd ')) {
      const section = trimmedCmd.split(' ')[1];
      if (!section) {
        newHistory.push("cd: missing argument", "");
      } else if (section === '..' || section === '~') {
        setCurrentPath("~/portfolio");
        newHistory.push("Changed directory to ~/portfolio", "");
      } else {
        const result = navigateToSection(section);
        newHistory.push(...result);
      }
    } else if (commands[trimmedCmd as keyof typeof commands]) {
      const result = commands[trimmedCmd as keyof typeof commands]();
      if (result.length > 0) {
        newHistory.push(...result);
      }
    } else {
      newHistory.push(`Command not found: ${trimmedCmd}`, "Type 'help' for available commands.", "");
    }

    setHistory(newHistory);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
      setInput("");
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex === commandHistory.length - 1 ? -1 : historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(newIndex === -1 ? "" : commandHistory[newIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setInput("");
      setHistoryIndex(-1);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          
          <motion.div
            className="relative w-full max-w-4xl h-96 bg-black border border-gray-600 rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 border-b border-gray-600 px-4 py-2 flex items-center justify-between rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Terminal size={16} className="text-green-400" />
                <span className="font-mono text-sm text-gray-300">Terminal - Portfolio</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="h-full flex flex-col bg-black text-green-400 font-mono text-sm">
              {/* Terminal Output */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {history.map((line, index) => (
                  <div key={index} className={`${line.startsWith('➜') ? 'text-cyan-400' : line.startsWith('Command not found') || line.startsWith('cd:') ? 'text-red-400' : 'text-green-400'}`}>
                    {line}
                  </div>
                ))}
                
                {/* Current Input Line */}
                <div className="flex items-center text-cyan-400">
                  <span>➜ {currentPath} $ </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-green-400 ml-1"
                    autoFocus
                    spellCheck={false}
                  />
                  <motion.span
                    className="text-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ▊
                  </motion.span>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-900 border-t border-gray-600 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>↑↓ Command History</span>
                  <span>Esc Close</span>
                  <span>Ctrl+` Open Terminal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>bash</span>
                  <span>•</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
      e.preventDefault();
      navigateToSection(filteredResults[selectedIndex].section);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const navigateToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'section': return FileCode;
      case 'skill': return Zap;
      case 'project': return Folder;
      case 'achievement': return Bell;
      case 'experience': return User;
      case 'command': return Terminal;
      default: return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'section': return 'text-blue-400';
      case 'skill': return 'text-green-400';
      case 'project': return 'text-yellow-400';
      case 'achievement': return 'text-purple-400';
      case 'experience': return 'text-cyan-400';
      case 'command': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          
          <motion.div
            className="relative w-full max-w-2xl bg-gray-900 border border-gray-600 rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Header */}
            <div className="bg-gray-800 border-b border-gray-600 px-4 py-3 flex items-center justify-between rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Search size={16} className="text-cyan-400" />
                <span className="font-mono text-sm text-gray-300">Quick Open</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs text-gray-500">Ctrl+P</span>
                <button 
                  onClick={onClose}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-gray-600">
              <div className="flex items-center space-x-3 bg-gray-800 border border-gray-600 rounded px-3 py-2">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Type to search sections, skills, projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white font-mono text-sm placeholder-gray-500"
                  autoFocus
                />
                {searchQuery && (
                  <span className="text-xs text-gray-500 font-mono">
                    {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="p-2">
                  {filteredResults.map((item, index) => {
                    const IconComponent = getIcon(item.type);
                    return (
                      <motion.button
                        key={`${item.section}-${item.title}`}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left transition-all duration-200 ${
                          index === selectedIndex 
                            ? 'bg-cyan-600/20 border border-cyan-500/50' 
                            : 'hover:bg-gray-800 border border-transparent'
                        }`}
                        onClick={() => navigateToSection(item.section)}
                        whileHover={{ x: 2 }}
                      >
                        <IconComponent size={16} className={getTypeColor(item.type)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-sm text-white">{item.title}</span>
                            <span className={`font-mono text-xs px-2 py-1 rounded ${getTypeColor(item.type)} bg-gray-800`}>
                              {item.type}
                            </span>
                          </div>
                          <div className="font-mono text-xs text-gray-400 truncate">
                            {item.description}
                          </div>
                        </div>
                        {index === selectedIndex && (
                          <ArrowRight size={14} className="text-cyan-400" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Search size={32} className="text-gray-600 mx-auto mb-3" />
                  <div className="font-mono text-sm text-gray-400">
                    {searchQuery ? 'No results found' : 'Start typing to search...'}
                  </div>
                  <div className="font-mono text-xs text-gray-500 mt-1">
                    Try searching for "react", "projects", or "about"
                  </div>
                </div>
              )}
            </div>

            {/* Search Footer */}
            <div className="bg-gray-800 border-t border-gray-600 px-4 py-2 rounded-b-lg">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>Esc Close</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Terminal size={12} />
                  <span>Portfolio Search</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.ctrlKey && e.key === 'j') {
        e.preventDefault();
        setTerminalOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setTerminalOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const runPortfolio = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#hero" className="flex items-center space-x-2">
                <FileCode className="h-6 w-6 text-cyan-400" />
                <span className="text-white font-mono text-sm sm:text-base">portfolio.dev</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <IDENavLink
                href="#about"
                label="About"
                icon={User}
                isActive={activeSection === 'about'}
              />
              <IDENavLink
                href="#experience"
                label="Experience"
                icon={Activity}
                isActive={activeSection === 'experience'}
              />
              <IDENavLink
                href="#projects"
                label="Projects"
                icon={Folder}
                isActive={activeSection === 'projects'}
              />
              <IDENavLink
                href="#skills"
                label="Skills"
                icon={Zap}
                isActive={activeSection === 'skills'}
              />
              <IDENavLink
                href="#achievements"
                label="Achievements"
                icon={Trophy}
                isActive={activeSection === 'achievements'}
              />
              <IDENavLink
                href="#contact"
                label="Contact"
                icon={Globe}
                isActive={activeSection === 'contact'}
              />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="h-4 w-4" />
              </motion.button>
              <motion.button
                onClick={() => setTerminalOpen(true)}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Terminal className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-900 border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <motion.a
                  href="#about"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#experience"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  Experience
                </motion.a>
                <motion.a
                  href="#projects"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#skills"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  Skills
                </motion.a>
                <motion.a
                  href="#achievements"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  Achievements
                </motion.a>
                <motion.a
                  href="#contact"
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
                <div className="border-t border-gray-700 my-2"></div>
                <motion.button
                  onClick={() => {
                    setSearchOpen(true);
                    closeMenu();
                  }}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Search (⌘K)
                </motion.button>
                <motion.button
                  onClick={() => {
                    setTerminalOpen(true);
                    closeMenu();
                  }}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Terminal (⌘J)
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
};

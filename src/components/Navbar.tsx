import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, FileCode, Terminal, Folder, Settings, GitBranch, 
  Search, Bell, User, ChevronDown, Play, Square, Monitor,
  Maximize, Minimize, Coffee, Globe, Zap, Activity, ArrowRight
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchOpen, setSearchOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setTerminalOpen(true);
      }
    };

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(timer);
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const runPortfolio = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <>
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
              <DropdownItem onClick={() => setTerminalOpen(true)} shortcut="Ctrl+`">New Terminal</DropdownItem>
              <DropdownItem onClick={runPortfolio}>Run Portfolio</DropdownItem>
              <DropdownItem onClick={() => setTerminalOpen(true)}>Open Terminal</DropdownItem>
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
              <motion.button 
                className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded border border-gray-600 hover:bg-gray-700 transition-all duration-300"
                onClick={() => setSearchOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search size={14} className="text-gray-400" />
                <span className="font-mono text-xs text-gray-400">Search</span>
                <span className="font-mono text-xs text-gray-500">Ctrl+P</span>
              </motion.button>

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

                {/* Mobile Search */}
                <div className="p-4 border-b border-gray-700">
                  <motion.button
                    onClick={() => {
                      setSearchOpen(true);
                      closeMenu();
                    }}
                    className="w-full flex items-center space-x-2 px-3 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-all duration-300"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search size={14} className="text-gray-400" />
                    <span className="font-mono text-sm text-gray-400">Search portfolio...</span>
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

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      {/* Terminal Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
};

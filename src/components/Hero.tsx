import { motion } from "framer-motion";
import { Code, Terminal, FileCode, Brackets, GitBranch, Folder, Monitor, Database, Globe, Play, Bug, Settings, User, Coffee, Clock, Trophy } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      {/* Subtle grid background with animation */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 40 m -40 0 l 40 0' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }} />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Main IDE Window */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* IDE Header with Window Controls */}
          <div className="bg-gray-800 rounded-t-lg border-b border-gray-600 px-3 sm:px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-3 h-3 bg-red-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 bg-yellow-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-xs sm:text-sm font-mono">portfolio.dev</div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>
          
          {/* File Tabs - Now scrollable on mobile */}
          <div className="bg-gray-800 border-b border-gray-600 flex overflow-x-auto scrollbar-hide">
            <div className="flex items-center px-3 sm:px-4 py-2 bg-gray-900 border-r border-gray-600 text-xs sm:text-sm font-mono text-white min-w-max">
              <FileCode className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400" />
              main.tsx
              <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
            </div>
            <div className="flex items-center px-3 sm:px-4 py-2 border-r border-gray-600 text-xs sm:text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-400" />
              about.ts
            </div>
            <div className="flex items-center px-3 sm:px-4 py-2 border-r border-gray-600 text-xs sm:text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <Folder className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-yellow-400" />
              projects/
            </div>
            <div className="flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <Terminal className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-cyan-400" />
              contact.json
            </div>
          </div>

          {/* Main Editor Content */}
          <div className="bg-gray-900 rounded-b-lg border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* Profile Section - First on mobile, last on desktop */}
              <div className="lg:col-span-1 order-1 lg:order-2">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Profile Image with Status */}
                  <motion.div 
                    className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/20">
                      <img 
                        src="/images/1.jpg" 
                        alt="Udit Narain Tewari"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 border-2 border-gray-900 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div 
                    className="bg-gray-800 border border-gray-600 rounded p-3 sm:p-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-mono text-xs text-gray-400 mb-3">// Developer Stats</div>
                    <div className="space-y-2 text-xs sm:text-sm font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-400 flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          Available
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Hackathons:</span>
                        <span className="text-cyan-400 flex items-center">
                          <Trophy className="h-3 w-3 mr-1" />
                          3+ Completed
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Projects:</span>
                        <span className="text-yellow-400">15+ Completed</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Tea:</span>
                        <span className="text-red-400 flex items-center">
                          <Coffee className="h-3 w-3 mr-1" />
                          Unlimited
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.a
                      href="#projects"
                      className="w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded font-mono text-xs sm:text-sm border border-red-500 hover:bg-red-500 hover:border-red-400 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      ./run_projects.sh
                    </motion.a>
                    
                    <motion.a
                      href="#contact"
                      className="w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded font-mono text-xs sm:text-sm hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Terminal className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      ./contact.sh
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Code Editor - Second on mobile, first on desktop */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <motion.div
                  className="bg-black border border-gray-600 rounded p-4 sm:p-6 font-mono text-xs sm:text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Line Numbers */}
                  <div className="flex">
                    <div className="text-gray-500 select-none mr-3 sm:mr-4 text-right" style={{ minWidth: '20px' }}>
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {i + 1}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Code Content */}
                    <div className="flex-1">
                      <div className="space-y-1">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <span className="text-gray-500">// Full Stack Developer Profile</span>
                        </motion.div>
                        <div><span className="text-purple-400">import</span> <span className="text-cyan-400">{'{'} Developer {'}'}</span> <span className="text-purple-400">from</span> <span className="text-yellow-400">'./types'</span>;</div>
                        <div></div>
                        <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span>: <span className="text-green-400">Developer</span> = {"{"}</div>
                        <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-400">"Udit Narain Tewari"</span>,</div>
                        <div className="ml-4"><span className="text-green-400">role</span>: <span className="text-yellow-400">"Full Stack Developer"</span>,</div>
                        <div className="ml-4"><span className="text-green-400">education</span>: <span className="text-yellow-400">"Computer Science Engineer"</span>,</div>
                        <div className="ml-4"><span className="text-green-400">university</span>: <span className="text-yellow-400">"NIE Mysore"</span>,</div>
                        <div className="ml-4"><span className="text-green-400">experience</span>: [</div>
                        <div className="ml-8"><span className="text-yellow-400">"React & TypeScript"</span>,</div>
                        <div className="ml-8"><span className="text-yellow-400">"Node.js & Python"</span>,</div>
                        <div className="ml-8"><span className="text-yellow-400">"Full Stack Development"</span></div>
                        <div className="ml-4">],</div>
                        <div className="ml-4"><span className="text-green-400">status</span>: <span className="text-cyan-400">StatusEnum</span>.<span className="text-cyan-400">AVAILABLE</span>,</div>
                        <div className="ml-4"><span className="text-green-400">passion</span>: <span className="text-yellow-400">"Building innovative solutions"</span></div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Terminal Output */}
                <motion.div
                  className="bg-black border border-gray-600 rounded mt-4 p-3 sm:p-4 font-mono text-xs sm:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-green-400 mb-2">$ npm start</div>
                  <div className="text-gray-400 mb-1">Starting development server...</div>
                  <div className="text-cyan-400 mb-1">✓ Portfolio compiled successfully!</div>
                  <div className="text-gray-400 mb-2">
                    <span className="text-green-400">{'>'}</span> Ready to showcase amazing projects
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">$ </span>
                    <span className="text-white ml-1">
                      <motion.span
                        className="animate-pulse"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <motion.div
              className="border-t border-gray-700 mt-6 sm:mt-8 pt-3 sm:pt-4 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <GitBranch className="h-3 w-3 mr-1 text-cyan-400" />
                  <span>main</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  <span>No issues</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Active</span>
                </motion.div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.a 
                  href="https://github.com/udit2002-c" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <GitBranch className="h-3 w-3" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
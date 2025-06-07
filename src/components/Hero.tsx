import { motion } from "framer-motion";
import { Code, Terminal, FileCode, Brackets, GitBranch, Folder, Monitor, Database, Globe, Play, Bug, Settings, User, Coffee, Clock, Trophy } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 40 m -40 0 l 40 0' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main IDE Window */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* IDE Header with Window Controls */}
          <div className="bg-gray-800 rounded-t-lg border-b border-gray-600 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm font-mono">portfolio.dev</div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Settings className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* File Tabs */}
          <div className="bg-gray-800 border-b border-gray-600 flex overflow-x-auto">
            <div className="flex items-center px-4 py-2 bg-gray-900 border-r border-gray-600 text-sm font-mono text-white min-w-max">
              <FileCode className="h-4 w-4 mr-2 text-blue-400" />
              main.tsx
              <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
            </div>
            <div className="flex items-center px-4 py-2 border-r border-gray-600 text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <User className="h-4 w-4 mr-2 text-green-400" />
              about.ts
            </div>
            <div className="flex items-center px-4 py-2 border-r border-gray-600 text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <Folder className="h-4 w-4 mr-2 text-yellow-400" />
              projects/
            </div>
            <div className="flex items-center px-4 py-2 text-sm font-mono text-gray-400 hover:text-white hover:bg-gray-700 transition-colors min-w-max">
              <Terminal className="h-4 w-4 mr-2 text-cyan-400" />
              contact.json
            </div>
          </div>

          {/* Main Editor Content */}
          <div className="bg-gray-900 rounded-b-lg border border-gray-700 p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Code Editor */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-black border border-gray-600 rounded p-6 font-mono text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Line Numbers */}
                  <div className="flex">
                    <div className="text-gray-500 select-none mr-4 text-right" style={{ minWidth: '24px' }}>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                      <div>15</div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="flex-1">
                      <div className="space-y-1">
                        <div><span className="text-gray-500">// Full Stack Developer Profile</span></div>
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
                  className="bg-black border border-gray-600 rounded mt-4 p-4 font-mono text-sm"
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

              {/* Profile Section */}
              <div className="lg:col-span-1">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Profile Image with Status */}
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className="w-full h-full rounded-full border-2 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/20">
                      <img 
                        src="/images/1.jpg" 
                        alt="Udit Narain Tewari"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gray-800 border border-gray-600 rounded p-4 mb-6">
                    <div className="font-mono text-xs text-gray-400 mb-3">// Developer Stats</div>
                    <div className="space-y-2 text-sm font-mono">
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
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.a
                      href="#projects"
                      className="w-full flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded font-mono text-sm border border-red-500 hover:bg-red-500 hover:border-red-400 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      ./run_projects.sh
                    </motion.a>
                    
                    <motion.a
                      href="#contact"
                      className="w-full flex items-center justify-center px-6 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded font-mono text-sm hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Terminal className="h-4 w-4 mr-2" />
                      ./contact.sh
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <motion.div
              className="border-t border-gray-700 mt-8 pt-4 flex items-center justify-between text-xs font-mono text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <GitBranch className="h-3 w-3 mr-1 text-cyan-400" />
                  <span>main</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  <span>No issues</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Active</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.a 
                  href="https://github.com/udit2002-c" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  GitHub
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/udit-tewari-24b8b3252" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="mailto:udittewari888@gmail.com"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating IDE Elements */}
        <motion.div
          className="absolute top-20 right-10 hidden xl:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gray-800 border border-gray-600 rounded p-3">
            <div className="font-mono text-xs text-gray-400 mb-2">Debug Console</div>
            <div className="font-mono text-xs text-green-400">✓ All systems operational</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 hidden xl:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gray-800 border border-gray-600 rounded p-3">
            <div className="font-mono text-xs text-gray-400 mb-2">File Explorer</div>
            <div className="font-mono text-xs text-cyan-400">📁 ~/portfolio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
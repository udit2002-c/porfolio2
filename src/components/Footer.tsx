import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Zap, Terminal, Server, Cpu, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const buildTime = new Date().toISOString();
  
  return (
    <footer className="py-16 relative overflow-hidden border-t border-gray-700 bg-black">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* Terminal Footer */}
          <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/portfolio $ system status</div>
              <Terminal className="h-4 w-4 text-green-400" />
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* System Information */}
                <motion.div
                  className="bg-black border border-gray-600 rounded p-4 font-mono text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-gray-500 mb-3">// System Information</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-green-400">Developer</span>: <span className="text-yellow-400">"Udit Narain Tewari"</span>
                    </div>
                    <div>
                      <span className="text-green-400">Role</span>: <span className="text-yellow-400">"Full Stack Developer"</span>
                    </div>
                    <div>
                      <span className="text-green-400">Version</span>: <span className="text-cyan-400">v2.0.0</span>
                    </div>
                    <div>
                      <span className="text-green-400">Status</span>: <span className="text-green-400">🟢 Online</span>
                    </div>
                    <div>
                      <span className="text-green-400">Build</span>: <span className="text-cyan-400">{buildTime.substring(0, 10)}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Build Information */}
                <motion.div
                  className="bg-black border border-gray-600 rounded p-4 font-mono text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-gray-500 mb-3">// Build Configuration</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-green-400">Framework</span>: <span className="text-yellow-400">"React + TypeScript"</span>
                    </div>
                    <div>
                      <span className="text-green-400">Styling</span>: <span className="text-yellow-400">"Tailwind CSS"</span>
                    </div>
                    <div>
                      <span className="text-green-400">Animation</span>: <span className="text-yellow-400">"Framer Motion"</span>
                    </div>
                    <div>
                      <span className="text-green-400">Deployment</span>: <span className="text-cyan-400">Vercel</span>
                    </div>
                    <div>
                      <span className="text-green-400">Build_Time</span>: <span className="text-cyan-400">~30s</span>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Links */}
                <motion.div
                  className="bg-black border border-gray-600 rounded p-4 font-mono text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-gray-500 mb-3">// Connection Links</div>
                  <div className="space-y-3">
                    <motion.a
                      href="https://github.com/udit2002-c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 border border-gray-600 rounded hover:border-purple-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Github className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-300 group-hover:text-white">GitHub</span>
                      </div>
                      <span className="text-gray-500 text-xs">→</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/udit-narain-tewari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 border border-gray-600 rounded hover:border-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Linkedin className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                      </div>
                      <span className="text-gray-500 text-xs">→</span>
                    </motion.a>
                    
                    <motion.a
                      href="mailto:udittewari888@gmail.com"
                      className="flex items-center justify-between p-2 border border-gray-600 rounded hover:border-red-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-red-400" />
                        <span className="text-gray-300 group-hover:text-white">Email</span>
                      </div>
                      <span className="text-gray-500 text-xs">→</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Terminal Output Footer */}
              <motion.div
                className="mt-6 bg-black border border-gray-600 rounded p-4 font-mono text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-2">
                  <div className="text-green-400">$ echo "Portfolio build completed successfully"</div>
                  <div className="text-cyan-400">Portfolio build completed successfully</div>
                  
                  <div className="text-green-400 mt-3">$ uptime</div>
                  <div className="text-cyan-400">System online since {currentYear} • Available 24/7 • Ready for new opportunities</div>
                  
                  <div className="text-green-400 mt-3">$ whoami</div>
                  <div className="text-cyan-400">Passionate developer building the future, one line of code at a time</div>
                  
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Server className="h-3 w-3" />
                        <span>Deployed on Vercel</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Cpu className="h-3 w-3" />
                        <span>Edge Functions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Built {buildTime.substring(0, 10)}</span>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      © {currentYear} • MIT License • Made with <Heart className="h-3 w-3 inline text-red-400" /> by Udit
                    </div>
                  </div>
                  
                  <div className="text-gray-400 animate-pulse mt-2">█</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

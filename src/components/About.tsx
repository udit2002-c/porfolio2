import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, FileCode, User, BookOpen, Calendar, Award, Code, Terminal, GitBranch, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-gray-800 rounded-t-lg border-b border-gray-600 px-3 sm:px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-mono">~/about/developer.tsx</div>
              <div className="flex items-center space-x-1 text-gray-500">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-center mb-8 sm:mb-16 text-red-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-400">// </span>
            About Developer
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Personal Info as Code */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <div className="bg-gray-800 px-3 sm:px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-gray-300">personal-info.ts</span>
                  <FileCode className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="bg-black border border-gray-600 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm">
                    {/* Line Numbers */}
                    <div className="flex">
                      <div className="text-gray-500 select-none mr-3 sm:mr-4 text-right" style={{ minWidth: '20px' }}>
                        {[...Array(18)].map((_, i) => (
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
                            <span className="text-gray-500">// Personal Information System</span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="text-purple-400">interface</span> <span className="text-green-400">PersonalProfile</span> {"{"}</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <span className="text-green-400">readonly</span> <span className="text-cyan-400">name</span>: <span className="text-blue-400">string</span>;</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="text-green-400">readonly</span> <span className="text-cyan-400">role</span>: <span className="text-blue-400">string</span>;</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <span className="text-green-400">readonly</span> <span className="text-cyan-400">education</span>: <span className="text-blue-400">Education</span>;</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <span className="text-green-400">readonly</span> <span className="text-cyan-400">experience</span>: <span className="text-blue-400">Experience[]</span>;</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                          >
                            <span className="text-green-400">readonly</span> <span className="text-cyan-400">skills</span>: <span className="text-blue-400">TechStack</span>;</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            {"}"}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                          >
                            {"\n"}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                          >
                            <span className="text-purple-400">const</span> <span className="text-cyan-400">profile</span>: <span className="text-green-400">PersonalProfile</span> = {"{"}</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                          >
                            <span className="text-green-400">name</span>: <span className="text-yellow-400">"Udit Narain Tewari"</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                          >
                            <span className="text-green-400">role</span>: <span className="text-yellow-400">"Computer Science Engineer"</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                          >
                            <span className="text-green-400">university</span>: <span className="text-yellow-400">"NIE Mysore"</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                          >
                            <span className="text-green-400">year</span>: <span className="text-cyan-400">2026</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            <span className="text-green-400">gpa</span>: <span className="text-cyan-400">8.50</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                          >
                            <span className="text-green-400">passion</span>: <span className="text-yellow-400">"Software Development"</span>,</motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.7 }}
                          >
                            <span className="text-green-400">leadership</span>: <span className="text-yellow-400">"Treasurer @ Onyx E-Cell"</span></motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                          >
                            {"}"}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Bio */}
                  <motion.div 
                    className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800 border border-gray-600 rounded"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-mono text-xs text-gray-400 mb-2 sm:mb-3">// Developer Biography</div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Passionate Computer Science Engineer with expertise in full-stack development. 
                      Currently pursuing B.E. at NIE Mysore with a strong focus on modern web technologies. 
                      Active in entrepreneurial initiatives as Treasurer of Onyx E-Cell, organizing events 
                      like E-Week 2024.
                    </p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                      <motion.div 
                        className="flex items-center text-green-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Active Developer
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-cyan-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="h-3 w-3 mr-1" />
                        4+ Years Learning
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Education & Contact Terminal Windows */}
            <div className="space-y-4 sm:space-y-6">
              {/* Education Terminal */}
              <motion.div
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gray-800 px-3 sm:px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-gray-300">~/education/fetch_credentials.sh</span>
                  <Terminal className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="bg-black border border-gray-600 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm">
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-400"
                      >
                        $ cat education.json | jq '.'
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 ml-2"
                      >
                        <div>{"{"}</div>
                        <div className="ml-4">
                          <span className="text-cyan-400">"current_education"</span>: {"{"}
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"institution"</span>: <span className="text-yellow-400">"The National Institute of Engineering"</span>,
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"degree"</span>: <span className="text-yellow-400">"B.E. Computer Science & Engineering"</span>,
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"duration"</span>: <span className="text-yellow-400">"2022-2026"</span>,
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"current_gpa"</span>: <span className="text-cyan-400">8.50</span>,
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"location"</span>: <span className="text-yellow-400">"Mysore, Karnataka, India"</span>,
                        </div>
                        <div className="ml-8">
                          <span className="text-green-400">"specialization"</span>: <span className="text-yellow-400">"Full Stack Development"</span>
                        </div>
                        <div className="ml-4">{"},"}</div>
                        <div className="ml-4">
                          <span className="text-cyan-400">"previous_education"</span>: [
                        </div>
                        <div className="ml-8">
                          <div>{"{"}</div>
                          <div className="ml-4">
                            <span className="text-green-400">"school"</span>: <span className="text-yellow-400">"Sheiling House School"</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">"grade_10_percentage"</span>: <span className="text-cyan-400">91.0</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">"grade_12_percentage"</span>: <span className="text-cyan-400">90.25</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">"board"</span>: <span className="text-yellow-400">"ICSE/ISC"</span>
                          </div>
                          <div>{"}"}</div>
                        </div>
                        <div className="ml-4">]</div>
                        <div>{"}"}</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-green-400 mt-4"
                      >
                        $ education --verify --academic-standing
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-cyan-400 text-xs ml-2"
                      >
                        ✓ Academic credentials verified
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-green-400 text-xs ml-2"
                      >
                        ✓ Currently enrolled and active
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-yellow-400 text-xs ml-2"
                      >
                        ✓ Expected graduation: May 2026
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact API Terminal */}
              <motion.div
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gray-800 px-3 sm:px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-gray-300">~/api/contact/endpoints.js</span>
                  <Code className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="bg-black border border-gray-600 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm">
                    <div className="space-y-2 sm:space-y-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-400"
                      >
                        $ curl -X GET /api/v1/contact --header "Accept: application/json"
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300"
                      >
                        <div>{"{"}</div>
                        <div className="ml-4">
                          <span className="text-cyan-400">"status"</span>: <span className="text-green-400">"200 OK"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-cyan-400">"timestamp"</span>: <span className="text-yellow-400">"2024-06-07T19:30:00Z"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-cyan-400">"data"</span>: {"{"}
                        </div>
                        <div className="ml-8 flex items-center">
                          <Mail className="h-3 w-3 text-red-400 mr-2" />
                          <span className="text-green-400">"email"</span>: <span className="text-yellow-400">"udittewari888@gmail.com"</span>,
                        </div>
                        <div className="ml-8 flex items-center">
                          <Phone className="h-3 w-3 text-green-400 mr-2" />
                          <span className="text-green-400">"phone"</span>: <span className="text-yellow-400">"+91-8887547458"</span>,
                        </div>
                        <div className="ml-8 flex items-center">
                          <MapPin className="h-3 w-3 text-blue-400 mr-2" />
                          <span className="text-green-400">"location"</span>: <span className="text-yellow-400">"Mysore, Karnataka, India"</span>,
                        </div>
                        <div className="ml-8 flex items-center">
                          <Calendar className="h-3 w-3 text-purple-400 mr-2" />
                          <span className="text-green-400">"timezone"</span>: <span className="text-yellow-400">"Asia/Kolkata (UTC+5:30)"</span>,
                        </div>
                        <div className="ml-8 flex items-center">
                          <GraduationCap className="h-3 w-3 text-cyan-400 mr-2" />
                          <span className="text-green-400">"availability"</span>: <span className="text-green-400">true</span>
                        </div>
                        <div className="ml-4">{"}"}</div>
                        <div>{"}"}</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-green-400 mt-3"
                      >
                        $ node contact-manager.js --status
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-cyan-400 text-xs"
                      >
                        → Ready to connect for opportunities!
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-green-400 text-xs"
                      >
                        → Response time: {"<"} 24 hours
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-yellow-400 text-xs"
                      >
                        → Best contact method: Email
              </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

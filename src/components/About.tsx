import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, FileCode, User, BookOpen, Calendar, Award, Code, Terminal, GitBranch, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gray-800 rounded-t-lg border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/about/developer.tsx</div>
              <div className="flex items-center space-x-1 text-gray-500">
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            About Developer
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Personal Info as Code */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">personal-info.ts</span>
                  <FileCode className="h-4 w-4 text-gray-500" />
                </div>

                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
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
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                      </div>
                      
                      {/* Code Content */}
                      <div className="flex-1">
                        <div className="space-y-1">
                          <div><span className="text-gray-500">// Personal Information System</span></div>
                          <div><span className="text-purple-400">interface</span> <span className="text-green-400">PersonalProfile</span> {"{"}</div>
                          <div className="ml-4"><span className="text-green-400">readonly</span> <span className="text-cyan-400">name</span>: <span className="text-blue-400">string</span>;</div>
                          <div className="ml-4"><span className="text-green-400">readonly</span> <span className="text-cyan-400">role</span>: <span className="text-blue-400">string</span>;</div>
                          <div className="ml-4"><span className="text-green-400">readonly</span> <span className="text-cyan-400">education</span>: <span className="text-blue-400">Education</span>;</div>
                          <div className="ml-4"><span className="text-green-400">readonly</span> <span className="text-cyan-400">experience</span>: <span className="text-blue-400">Experience[]</span>;</div>
                          <div className="ml-4"><span className="text-green-400">readonly</span> <span className="text-cyan-400">skills</span>: <span className="text-blue-400">TechStack</span>;</div>
                          <div>{"}"}</div>
                          <div></div>
                          <div><span className="text-purple-400">const</span> <span className="text-cyan-400">profile</span>: <span className="text-green-400">PersonalProfile</span> = {"{"}</div>
                          <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-400">"Udit Narain Tewari"</span>,</div>
                          <div className="ml-4"><span className="text-green-400">role</span>: <span className="text-yellow-400">"Computer Science Engineer"</span>,</div>
                          <div className="ml-4"><span className="text-green-400">university</span>: <span className="text-yellow-400">"NIE Mysore"</span>,</div>
                          <div className="ml-4"><span className="text-green-400">year</span>: <span className="text-cyan-400">2026</span>,</div>
                          <div className="ml-4"><span className="text-green-400">gpa</span>: <span className="text-cyan-400">8.50</span>,</div>
                          <div className="ml-4"><span className="text-green-400">passion</span>: <span className="text-yellow-400">"Software Development"</span>,</div>
                          <div className="ml-4"><span className="text-green-400">leadership</span>: <span className="text-yellow-400">"Treasurer @ Onyx E-Cell"</span></div>
                          <div>{"}"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Bio */}
                  <div className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded">
                    <div className="font-mono text-xs text-gray-400 mb-3">// Developer Biography</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Passionate Computer Science Engineer with expertise in full-stack development. 
                      Currently pursuing B.E. at NIE Mysore with a strong focus on modern web technologies. 
                      Active in entrepreneurial initiatives as Treasurer of Onyx E-Cell, organizing events 
                      like E-Week 2024.
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-xs font-mono">
                      <div className="flex items-center text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Active Developer
                      </div>
                      <div className="flex items-center text-cyan-400">
                        <Star className="h-3 w-3 mr-1" />
                        4+ Years Learning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Education & Contact Terminal Windows */}
            <div className="space-y-6">
              {/* Education Terminal */}
              <motion.div
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">~/education/fetch_credentials.sh</span>
                  <Terminal className="h-4 w-4 text-green-400" />
                </div>
                
                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="text-green-400">$ cat education.json | jq '.'</div>
                      <div className="text-gray-300 ml-2">
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
                      </div>
                      
                      <div className="text-green-400 mt-4">$ education --verify --academic-standing</div>
                      <div className="text-cyan-400 text-xs ml-2">
                        ✓ Academic credentials verified
                      </div>
                      <div className="text-green-400 text-xs ml-2">
                        ✓ Currently enrolled and active
                      </div>
                      <div className="text-yellow-400 text-xs ml-2">
                        ✓ Expected graduation: May 2026
                      </div>
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
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">~/api/contact/endpoints.js</span>
                  <Code className="h-4 w-4 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="space-y-3">
                      <div className="text-green-400">$ curl -X GET /api/v1/contact --header "Accept: application/json"</div>
                      <div className="text-gray-300">
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
                      </div>
                      
                      <div className="text-green-400 mt-3">$ node contact-manager.js --status</div>
                      <div className="text-cyan-400 text-xs">
                        → Ready to connect for opportunities!
                      </div>
                      <div className="text-green-400 text-xs">
                        → Response time: {"<"} 24 hours
                      </div>
                      <div className="text-yellow-400 text-xs">
                        → Best contact method: Email
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Leadership & Achievements */}
              <motion.div
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">~/achievements/leadership.log</span>
                  <Award className="h-4 w-4 text-yellow-400" />
                </div>
                
                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="text-green-400">$ git log --leadership --oneline</div>
                      <div className="text-gray-300 text-xs space-y-1">
                        <div className="flex items-center">
                          <GitBranch className="h-3 w-3 text-cyan-400 mr-2" />
                          <span className="text-yellow-400">a1b2c3d</span>
                          <span className="ml-2">Organized E-Week 2024 - Major entrepreneurship event</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="h-3 w-3 text-cyan-400 mr-2" />
                          <span className="text-yellow-400">d4e5f6g</span>
                          <span className="ml-2">Appointed as Treasurer of Onyx E-Cell</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="h-3 w-3 text-cyan-400 mr-2" />
                          <span className="text-yellow-400">h7i8j9k</span>
                          <span className="ml-2">Led multiple technical workshops</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="h-3 w-3 text-cyan-400 mr-2" />
                          <span className="text-yellow-400">l0m1n2o</span>
                          <span className="ml-2">Mentored junior developers in web development</span>
                        </div>
                      </div>
                      
                      <div className="text-green-400 mt-4">$ achievements --summary</div>
                      <div className="text-cyan-400 text-xs ml-2">
                        ✓ Leadership roles in student organizations
                      </div>
                      <div className="text-green-400 text-xs ml-2">
                        ✓ Event management and coordination
                      </div>
                      <div className="text-yellow-400 text-xs ml-2">
                        ✓ Community building and networking
                      </div>
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

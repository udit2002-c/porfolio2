import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Star, FileCode, Terminal, Folder, GitCommit, Play } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  featured?: boolean;
  type: string;
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "infAInite",
      location: "Remote",
      duration: "May 2025 – Present",
      featured: true,
      type: "internship",
      description: [
        "Developed and deployed a role-based retail analytics dashboard using React (TypeScript) and Node.js, delivering weekly and monthly insights for Store Managers, GMs, and Merchandise Planners.",
        "Integrated backend JSON modules and implemented PDF export with Puppeteer, ensuring dynamic data rendering and report generation across web and mobile views."
      ]
    },
    {
      id: 2,
      title: "Software Engineering Virtual Intern",
      company: "Hewlett Packard Enterprise (Forage)",
      location: "Virtual",
      duration: "Feb 2025",
      type: "virtual",
      description: [
        "Developed a RESTful service for employee management with CRUD operations.",
        "Built a Spring Boot app supporting JSON data and HTTP requests.",
        "Conducted unit testing to ensure robust performance."
      ]
    },
    {
      id: 3,
      title: "Treasurer",
      company: "Onyx E-Cell",
      location: "Mysore, India",
      duration: "2024 - 2025",
      type: "leadership",
      description: [
        "Led E-Week 2024, hosting the national-level B-Gyaan pitch event with 193 participants.",
        "Managed budget for all entrepreneurial events throughout the academic year.",
        "Organized events including NFT Auction, Rags to Riches, and IPL Auction to promote innovation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* IDE Window Header */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-t border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/career/experience.json</div>
              <div className="flex items-center space-x-2">
                <GitCommit className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            {/* File Tabs */}
            <div className="bg-gray-800 border-b border-gray-600 flex">
              <div className="px-4 py-2 bg-gray-700 border-r border-gray-600 text-sm font-mono border-b-2 border-red-400 flex items-center">
                <FileCode className="h-4 w-4 inline mr-2" />
                experience.json
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <Folder className="h-4 w-4 inline mr-2" />
                projects/
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <FileCode className="h-4 w-4 inline mr-2" />
                skills.ts
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            Work Experience
          </h2>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* File Explorer Style */}
            <motion.div
              className="space-card p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center">
                  <Folder className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="font-mono text-sm text-gray-300">experience/</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <FileCode className="h-4 w-4 text-blue-400 mr-3" />
                      <span className="text-gray-300 group-hover:text-white">
                        {exp.company.toLowerCase().replace(/\s+/g, '_')}.{exp.type}
                      </span>
                      {exp.featured && (
                        <Star className="h-3 w-3 text-yellow-400 ml-2" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Terminal Output */}
            <motion.div
              className="bg-black border border-gray-600 rounded overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-600">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 font-mono text-sm text-gray-400">~/career $ node experience.js</span>
              </div>
              <div className="p-4 font-mono text-sm text-green-400 max-h-96 overflow-y-auto">
                <div className="text-green-400">$ cat experience.json | jq '.[]'</div>
                <div className="mt-2 space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="border-l-2 border-gray-600 pl-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="text-cyan-400">[{exp.id}] Running: {exp.title}</div>
                      <div className="text-gray-400 text-xs">
                        Company: <span className="text-yellow-400">{exp.company}</span>
                      </div>
                      <div className="text-gray-400 text-xs">
                        Duration: <span className="text-yellow-400">{exp.duration}</span>
                      </div>
                      <div className="text-gray-400 text-xs">
                        Location: <span className="text-yellow-400">{exp.location}</span>
                      </div>
                      <div className="text-green-400 text-xs mt-1">✓ Status: Completed</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 text-green-400">
                  $ echo "Total experience entries: {experiences.length}"
                </div>
                <div className="text-green-400">
                  Total experience entries: {experiences.length}
                </div>
                <div className="mt-2 text-gray-400 animate-pulse">█</div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Experience Cards */}
          <div className="max-w-6xl mx-auto mt-12 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Code Editor Header */}
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-mono text-sm text-gray-300">
                      {exp.company.toLowerCase().replace(/\s+/g, '_')}.{exp.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {exp.featured && (
                      <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-mono rounded border border-yellow-500/30">
                        FEATURED
                      </div>
                    )}
                    <Play className="h-4 w-4 text-green-400" />
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Job Info as Code */}
                    <div className="lg:col-span-1">
                      <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                        <div className="text-gray-500 mb-2">// Job Configuration</div>
                        <div className="space-y-1">
                          <div>
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-cyan-400">job</span> = {"{"}
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">title</span>: <span className="text-yellow-400">"{exp.title}"</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">company</span>: <span className="text-yellow-400">"{exp.company}"</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">location</span>: <span className="text-yellow-400">"{exp.location}"</span>,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">duration</span>: <span className="text-yellow-400">"{exp.duration}"</span>
                          </div>
                          <div>{"}"}</div>
                        </div>
                      </div>
                    </div>

                    {/* Tasks as Comments */}
                    <div className="lg:col-span-2">
                      <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                        <div className="text-gray-500 mb-3">// Key Achievements & Responsibilities</div>
                        <div className="space-y-2">
                          {exp.description.map((task, i) => (
                            <motion.div
                              key={i}
                              className="text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-gray-500">// {i + 1}. </span>
                              <span className="text-gray-300">{task}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

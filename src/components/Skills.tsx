import { motion } from "framer-motion";
import { Code, Database, Cpu, Book, FileCode, Package, Download, CheckCircle } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: any;
  type: string;
  color: string;
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: Code,
      type: "languages",
      color: "blue",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      name: "Frameworks & Libraries",
      icon: Package,
      type: "dependencies",
      color: "green",
      skills: ["Spring Boot", "ReactJS", "Node.js", "Express", "Next.js", "Git", "Postman", "Figma"]
    },
    {
      name: "Databases & Cloud",
      icon: Database,
      type: "services",
      color: "purple",
      skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "JWT", "HTML", "CSS", "Vercel"]
    },
    {
      name: "Computer Science",
      icon: Book,
      type: "concepts",
      color: "yellow",
      skills: ["Analysis of Algorithms and Design", "Computer Networks", "Operating Systems", "Database Management Systems", "Web Technologies", "Data Structures"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* IDE Window Header */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-t border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/skills/package.json</div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
              </div>
            </div>
            
            {/* File Tabs */}
            <div className="bg-gray-800 border-b border-gray-600 flex">
              <div className="px-4 py-2 bg-gray-700 border-r border-gray-600 text-sm font-mono border-b-2 border-red-400 flex items-center">
                <FileCode className="h-4 w-4 inline mr-2" />
                package.json
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <FileCode className="h-4 w-4 inline mr-2" />
                skills.ts
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <Package className="h-4 w-4 inline mr-2" />
                node_modules/
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            Skills & Technologies
          </h2>

          {/* Package.json Style Skills */}
          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="font-mono text-sm text-gray-300">package.json</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-300">
                  <span className="text-cyan-400">{`{`}</span>
                  <div className="ml-4 mt-2">
                    <div>
                      <span className="text-green-400">"name"</span>: <span className="text-yellow-400">"udit-portfolio"</span>,
                    </div>
                    <div>
                      <span className="text-green-400">"version"</span>: <span className="text-yellow-400">"2.0.0"</span>,
                    </div>
                    <div>
                      <span className="text-green-400">"description"</span>: <span className="text-yellow-400">"Full Stack Developer Skills"</span>,
                    </div>
                    <div className="mt-2">
                      <span className="text-green-400">"dependencies"</span>: <span className="text-cyan-400">{`{`}</span>
                      <div className="ml-4 mt-1 space-y-1">
                        {skillCategories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-green-400">"{category.type}"</span>: <span className="text-yellow-400">"^{category.skills.length}.0.0"</span>,
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-cyan-400">{`}`}</span>
                    </div>
                  </div>
                  <span className="text-cyan-400">{`}`}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terminal Output */}
          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-black border border-gray-600 rounded overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-600">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 font-mono text-sm text-gray-400">~/skills $ npm install</span>
              </div>
              <div className="p-4 font-mono text-sm text-green-400">
                <div className="space-y-1">
                  <div className="text-cyan-400">Installing dependencies...</div>
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      className="text-gray-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <span className="text-green-400">✓</span> {category.type}@^{category.skills.length}.0.0
                    </motion.div>
                  ))}
                  <div className="mt-2 text-green-400">
                    All packages installed successfully!
                  </div>
                  <div className="text-gray-400 animate-pulse">█</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Detailed Skills as Code Modules */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Code Editor Header */}
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">
                    {category.type}.ts
                  </span>
                  <category.icon className="h-4 w-4 text-gray-500" />
                </div>

                {/* Code Content */}
                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-3">// {category.name} Module</div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400">export</span>{" "}
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">{category.type}</span> = [
                      </div>
                      <div className="ml-4 space-y-1">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            className="text-yellow-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: (index * 0.1) + (skillIndex * 0.05)
                            }}
                          >
                            "{skill}"{skillIndex < category.skills.length - 1 ? ',' : ''}
                          </motion.div>
                        ))}
                      </div>
                      <div>];</div>
                      
                      <div className="mt-3 text-gray-500">
                        // Skills count: {category.skills.length}
                      </div>
                      <div className="text-gray-500">
                        // Status: <span className="text-green-400">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.slice(0, 4).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`px-3 py-1 rounded text-xs font-mono border ${
                          category.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                          category.color === 'green' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                          category.color === 'purple' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                          'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                        } hover:scale-105 transition-transform cursor-default`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {category.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded text-xs font-mono border border-gray-600">
                        +{category.skills.length - 4} more
                      </span>
                    )}
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

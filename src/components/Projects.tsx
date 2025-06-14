import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Zap, FileCode, Folder, GitBranch, Star, Eye, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
  language: string;
  stars?: number;
  commits?: number;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Journal App",
      description: "Secure personal journaling platform for digital thoughts",
      technologies: ["Spring Boot", "React", "MongoDB"],
      points: [
        "Built a secure journaling platform with user authentication.",
        "Integrated MongoDB for efficient data storage.",
        "Developed a user-friendly React frontend."
      ],
      github: "https://github.com/udit2002-c/Journal-App.git",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      featured: true,
      language: "Java",
      stars: 12,
      commits: 45
    },
    {
      id: 2,
      title: "Thesis Brainstorming",
      description: "AI-powered research topic generator for academic research",
      technologies: ["FastAPI", "Python", "Jinja2", "Open-WebUI", "Ollama"],
      points: [
        "Designed an AI tool to generate diverse CS research topics.",
        "Integrated Open-WebUI and Ollama models for idea generation."
      ],
      github: "https://github.com/udit2002-c/thesis_brainstorming-Group-no.51-",
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      language: "Python",
      stars: 8,
      commits: 32
    },
    {
      id: 3,
      title: "CareQ",
      description: "Healthcare queue management system for modern clinics",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      points: [
        "Reduced patient wait times with a real-time queue system.",
        "Designed responsive UI for patients and providers."
      ],
      github: "https://github.com/udit2002-c/Q",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      language: "TypeScript",
      stars: 15,
      commits: 67
    }
  ];

  return (
    <section id="projects" className="pt-20 pb-20 sm:pt-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* IDE Window Header */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-t border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/repositories/projects</div>
              <div className="flex items-center space-x-2">
                <GitBranch className="h-4 w-4 text-gray-500" />
                <span className="text-gray-400 text-xs font-mono">main</span>
              </div>
            </div>
            
            {/* Repository Navigation */}
            <div className="bg-gray-800 border-b border-gray-600 flex">
              <div className="px-4 py-2 bg-gray-700 border-r border-gray-600 text-sm font-mono border-b-2 border-red-400 flex items-center">
                <Folder className="h-4 w-4 inline mr-2 text-yellow-400" />
                projects/
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <FileCode className="h-4 w-4 inline mr-2" />
                README.md
              </div>
              <div className="px-4 py-2 bg-gray-800 border-r border-gray-600 text-sm font-mono text-gray-400 flex items-center">
                <GitBranch className="h-4 w-4 inline mr-2" />
                commits
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            Featured Repositories
          </h2>

          {/* GitHub-style Repository List */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="bg-gray-900 border border-gray-700 rounded">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <span className="font-mono text-sm text-gray-300">
                  <Folder className="h-4 w-4 inline mr-2 text-yellow-400" />
                  udit2002-c / repositories
                </span>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>{projects.length} repositories</span>
                  <span>Updated recently</span>
                </div>
              </div>
              <div className="divide-y divide-gray-700">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <FileCode className="h-4 w-4 text-blue-400" />
                          <h3 className="font-mono text-blue-400 hover:underline">
                            {project.title.toLowerCase().replace(/\s+/g, '-')}
                          </h3>
                          {project.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-mono rounded border border-yellow-500/30">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-2 font-mono">
                          {project.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <span>{project.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3" />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitBranch className="h-3 w-3" />
                            <span>{project.commits} commits</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-sm font-mono hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github className="h-4 w-4 inline mr-1" />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Detailed Project Code Views */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 border border-gray-700 rounded overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Code Editor Header */}
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">
                    {project.title.toLowerCase().replace(/\s+/g, '_')}.{project.language.toLowerCase()}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </div>
                </div>

                {/* Project Preview Image as Code Comment */}
                <div className="relative h-40 bg-black border-b border-gray-700">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
                  <div className="absolute top-2 left-2 text-xs font-mono text-gray-400">
                    // {project.title} - {project.language} Application
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-4">
                  {/* Project as Code Block */}
                  <div className="bg-black border border-gray-600 rounded p-3 font-mono text-sm mb-4">
                    <div className="text-gray-500 mb-2">// Project Configuration</div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">project</span> = {"{"}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">name</span>: <span className="text-yellow-400">"{project.title}"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">description</span>: <span className="text-yellow-400">"{project.description}"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">tech_stack</span>: [
                        <div className="ml-4">
                          {project.technologies.map((tech, i) => (
                            <div key={i} className="text-yellow-400">
                              "{tech}"{i < project.technologies.length - 1 ? ',' : ''}
                            </div>
                          ))}
                        </div>
                        ],
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">status</span>: <span className="text-yellow-400">"deployed"</span>
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  {/* Features as Comments */}
                  <div className="bg-black border border-gray-600 rounded p-3 font-mono text-sm mb-4">
                    <div className="text-gray-500 mb-2">// Key Features</div>
                    {project.points.map((point, i) => (
                      <div key={i} className="text-gray-300 text-xs mb-1">
                        <span className="text-gray-500">// {i + 1}. </span>
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-xs font-mono hover:bg-gray-600 transition-colors flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Repository
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-red-600 border border-red-500 rounded text-xs font-mono hover:bg-red-500 transition-colors flex items-center text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Play className="h-3 w-3 mr-1" />
                          Demo
                        </motion.a>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${
                          project.language === 'Java' ? 'bg-orange-400' :
                          project.language === 'Python' ? 'bg-blue-400' :
                          project.language === 'TypeScript' ? 'bg-blue-600' : 'bg-gray-400'
                        }`}></div>
                        <span>{project.language}</span>
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

import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Zap } from "lucide-react";

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
      featured: true
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
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="nebula-effect absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">Featured </span>
            <span className="text-red-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                {/* Card with styling */}
                <div className="relative h-full space-card transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Floating action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black/60 backdrop-blur-lg rounded-full border border-red-500/40 
                                 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/60 backdrop-blur-lg rounded-full border border-red-500/40 
                                   text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full 
                                   border border-red-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-black/40 text-gray-400 text-xs rounded-full border border-red-500/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Project highlights */}
                    <div className="flex-1 mb-4">
                      <ul className="space-y-2 text-sm text-gray-300">
                        {project.points.slice(0, 2).map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Footer with links */}
                    <div className="flex justify-between items-center pt-4 border-t border-red-500/20">
                      <div className="flex gap-3">
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-400 hover:text-red-300 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                        {project.demo && (
                          <motion.a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-red-300 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.a>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        {project.technologies.length} tech
                      </span>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-red-500/20 
                                 border border-red-500/40 flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Projects Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.a 
              href="https://github.com/udit2002-c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="space-button-primary group inline-flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="h-5 w-5 mr-2" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

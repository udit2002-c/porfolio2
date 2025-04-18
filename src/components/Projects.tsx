
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  github: string;
  demo?: string;
  image: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Journal App",
      description: "Secure personal journaling platform",
      technologies: ["Spring Boot", "React", "MongoDB"],
      points: [
        "Built a secure journaling platform with user authentication.",
        "Integrated MongoDB for efficient data storage.",
        "Developed a user-friendly React frontend."
      ],
      github: "https://github.com/udit2002-c/Journal-App.git",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 2,
      title: "Thesis Brainstorming",
      description: "AI-powered research topic generator",
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
      description: "Healthcare queue management system",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      points: [
        "Reduced patient wait times with a real-time queue system.",
        "Designed responsive UI for patients and providers."
      ],
      github: "https://github.com/udit2002-c/Q",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-16">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card rounded-xl overflow-hidden h-full flex flex-col neon-border relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-2 text-sm">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end gap-3 mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover-glow p-2 rounded-full"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-glow p-2 rounded-full"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/udit2002-c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="futuristic-button inline-flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              View More Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: "💻",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      name: "Frameworks & Tools",
      icon: "🛠️",
      skills: ["Spring Boot", "ReactJS", "Node.js", "Express", "Next.js", "Git", "Postman", "Figma"]
    },
    {
      name: "Databases & Technologies",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "JWT", "HTML", "CSS", "Vercel"]
    },
    {
      name: "Computer Science",
      icon: "📚",
      skills: ["Analysis of Algorithms and Design", "Computer Networks", "Operating Systems", "Database Management Systems", "Web Technologies", "Data Structures"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-black">
        <div className="nebula-effect absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="space-title">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="space-card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center text-white">
                  <span className="mr-4 text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-black/50 text-white text-sm rounded-lg border border-red-500/30 
                               hover:bg-red-500/20 hover:border-red-500 hover:text-red-300
                               transition-all duration-300 cursor-default cosmic-glow"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.05) + (skillIndex * 0.02) 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

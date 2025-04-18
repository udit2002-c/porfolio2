
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      name: "Frameworks/Tools",
      skills: ["Spring Boot", "ReactJS", "Node.js", "Express", "Next.js", "Git", "Postman", "Figma"]
    },
    {
      name: "Databases/Tech",
      skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "JWT", "HTML", "CSS", "Vercel"]
    },
    {
      name: "Coursework",
      skills: ["Analysis of Algorithms and Design", "Computer Networks", "Operating Systems", "Database Management Systems", "Web Technologies", "Data Structures"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-16">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="glass-card rounded-xl p-6 neon-border"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">{category.name}</h3>
                
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 bg-primary/10 text-foreground rounded-lg hover:bg-primary/20 transition-colors"
                      variants={item}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="glass-card rounded-xl p-6 mt-8 neon-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">Skill Proficiency</h3>
            
            <div className="space-y-4">
              {[
                { skill: "Frontend Development", level: 85 },
                { skill: "Backend Development", level: 80 },
                { skill: "Data Structures & Algorithms", level: 75 },
                { skill: "Database Management", level: 70 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

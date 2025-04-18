
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Software Engineering Virtual Intern",
      company: "Hewlett Packard Enterprise (Forage)",
      location: "Virtual",
      duration: "Feb 2025",
      description: [
        "Developed a RESTful service for employee management with CRUD operations.",
        "Built a Spring Boot app supporting JSON data and HTTP requests.",
        "Conducted unit testing to ensure robust performance."
      ]
    },
    {
      id: 2,
      title: "Treasurer",
      company: "Onyx E-Cell",
      location: "Mysore, India",
      duration: "2024 - 2025",
      description: [
        "Led E-Week 2024, hosting the national-level B-Gyaan pitch event with 193 participants.",
        "Managed budget for all entrepreneurial events throughout the academic year.",
        "Organized events including NFT Auction, Rags to Riches, and IPL Auction to promote innovation."
      ]
    }
  ];

  const [activeExp, setActiveExp] = useState<number>(1);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-16">Experience</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Timeline navigation */}
            <motion.div
              className="glass-card rounded-xl py-6 px-4 neon-border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-1">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExp(exp.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeExp === exp.id
                        ? "bg-primary/20 text-primary"
                        : "hover:bg-primary/10 text-foreground/70"
                    }`}
                  >
                    <div className="font-medium">{exp.company}</div>
                    <div className="text-sm truncate">{exp.title}</div>
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Experience details */}
            <motion.div
              className="md:col-span-2 glass-card rounded-xl p-6 neon-border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {experiences.filter(exp => exp.id === activeExp).map((exp) => (
                <div key={exp.id} className="animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gradient">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-center text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span className="mr-2">{exp.company}</span>
                    <span>•</span>
                    <span className="ml-2">{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

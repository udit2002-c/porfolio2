import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  featured?: boolean;
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
      description: [
        "Led E-Week 2024, hosting the national-level B-Gyaan pitch event with 193 participants.",
        "Managed budget for all entrepreneurial events throughout the academic year.",
        "Organized events including NFT Auction, Rags to Riches, and IPL Auction to promote innovation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            <span className="text-white">Work </span>
            <span className="text-red-400">Experience</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-red-500/60 to-red-500/20"></div>
                )}
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-6 top-8 w-5 h-5 rounded-full border-2 z-10 bg-red-500/50 border-red-500/70"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Experience card */}
                <motion.div
                  className="ml-16 space-card p-8 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-red-400 font-semibold mb-3 text-lg">
                        <Briefcase className="h-5 w-5 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2 text-sm text-gray-300">
                      <div className="flex items-center px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30">
                        <Calendar className="h-4 w-4 mr-2 text-red-400" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center px-3 py-1 bg-black/40 rounded-full border border-red-500/30">
                        <MapPin className="h-4 w-4 mr-2 text-red-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 
                                       rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

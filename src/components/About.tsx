import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
          <h2 className="space-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* About Text */}
            <motion.div
              className="space-card p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="text-white font-semibold">Udit Narain Tewari</span>, a Computer Science Engineering student at The National Institute of Engineering, Mysore, with a passion for software development and innovative technology solutions.
                </p>
                <p>
                  My academic journey has equipped me with strong foundations in core computer science concepts, while my practical experiences have honed my skills in building impactful applications.
                </p>
                <p>
                  Beyond coding, I'm actively involved in entrepreneurial events as a <span className="text-red-400 font-medium">Treasurer of Onyx E-Cell</span>, organizing impactful initiatives like E-Week 2024 and other innovative competitions.
                </p>
              </div>
            </motion.div>
            
            {/* Education & Contact */}
            <div className="space-y-6">
              {/* Education */}
              <motion.div
                className="space-card p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center text-white">
                  <GraduationCap className="h-6 w-6 mr-3 text-red-400" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-red-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full cosmic-glow"></div>
                    <h4 className="font-semibold text-white text-lg">The National Institute of Engineering</h4>
                    <p className="text-gray-300 font-medium">B.E. in Computer Science and Engineering</p>
                    <p className="text-sm text-gray-400 mb-2">2022 - 2026 | Mysore, India</p>
                    <p className="text-sm font-bold text-red-400">Grade: 8.50/10.0</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-gray-600">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                    <h4 className="font-semibold text-white">Sheiling House School</h4>
                    <p className="text-gray-300">High School</p>
                    <p className="text-sm text-gray-400 mb-2">2007 - 2021 | Kanpur, India</p>
                    <div className="text-sm space-y-1">
                      <p className="text-gray-300">10th Grade: <span className="font-semibold text-white">91%</span> (ICSE Board)</p>
                      <p className="text-gray-300">12th Grade: <span className="font-semibold text-white">90.25%</span> (ISC Board)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Information */}
              <motion.div
                className="space-card p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-5 w-5 mr-4 text-red-400" />
                    <a 
                      href="mailto:udittewari888@gmail.com" 
                      className="hover:text-red-400 transition-colors"
                    >
                      udittewari888@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <Phone className="h-5 w-5 mr-4 text-red-400" />
                    <a 
                      href="tel:+918887547458" 
                      className="hover:text-red-400 transition-colors"
                    >
                      +91-8887547458
                    </a>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-4 text-red-400" />
                    <span>Mysore, Karnataka, India</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

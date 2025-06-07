import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Zap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 relative overflow-hidden border-t border-red-500/30">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="nebula-effect absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* Brand/Name */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold mb-3">
              <span className="text-white">
                Udit Narain Tewari
              </span>
            </h3>
            <p className="text-gray-300 text-lg">
              <span className="text-red-400">Full Stack Developer</span> | <span className="text-red-400">Software Engineer</span> | <span className="text-red-400">Tech Enthusiast</span>
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.a 
              href="https://linkedin.com/in/udit-narain-tewari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                       hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                       transition-all duration-200 group"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="h-6 w-6 text-red-400 group-hover:text-red-300 transition-colors" />
            </motion.a>
            <motion.a 
              href="https://github.com/udit2002-c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                       hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                       transition-all duration-200 group"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="h-6 w-6 text-red-400 group-hover:text-red-300 transition-colors" />
            </motion.a>
            <motion.a 
              href="mailto:udittewari888@gmail.com"
              className="w-14 h-14 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                       hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                       transition-all duration-200 group"
              aria-label="Email Contact"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-6 w-6 text-red-400 group-hover:text-red-300 transition-colors" />
            </motion.a>
          </motion.div>
          
          {/* Copyright and Tech Stack */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
            
            <div className="text-gray-400 space-y-3">
              <p className="text-sm">
                © {currentYear} Udit Narain Tewari. All rights reserved.
              </p>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

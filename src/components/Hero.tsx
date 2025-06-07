import { motion } from "framer-motion";
import { Code, Rocket, Sparkles, Github, Linkedin, Mail, Laptop, Smartphone, Camera, Monitor, Database, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Space background with nebula effects */}
      <div className="absolute inset-0 bg-black">
        <div className="nebula-effect absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Profile Image with cosmic glow */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-red-500 animate-pulse-red">
              <img 
                src="/images/1.jpg" 
                alt="Udit Narain Tewari"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-cosmic">
                Udit
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              <span className="text-red-400">Computer Science Engineer</span> & <span className="text-red-400">Full Stack Developer</span>
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating <span className="text-red-400 font-semibold">innovative solutions</span> with modern technologies. 
              Building applications that make a difference in the real world.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="space-button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="h-5 w-5 mr-2" />
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                className="space-button-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="https://github.com/udit2002-c" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                         hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                         transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 text-red-400 hover:text-red-300 transition-colors" />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/udit-narain-tewari" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                         hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                         transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-red-400 hover:text-red-300 transition-colors" />
              </motion.a>
              
              <motion.a 
                href="mailto:udittewari888@gmail.com"
                className="w-12 h-12 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                         hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                         transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5 text-red-400 hover:text-red-300 transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating cosmic elements */}
          <motion.div 
            className="absolute top-20 left-10 p-4 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <Code className="h-6 w-6 text-red-400" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 right-10 p-4 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '2s' }}
          >
            <Sparkles className="h-6 w-6 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute top-1/3 right-20 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '4s' }}
          >
            <Rocket className="h-5 w-5 text-red-400" />
          </motion.div>

          {/* New floating icons */}
          <motion.div 
            className="absolute top-1/4 left-20 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '1s' }}
          >
            <Laptop className="h-6 w-6 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute bottom-1/3 left-16 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '3s' }}
          >
            <Smartphone className="h-5 w-5 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 right-16 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '5s' }}
          >
            <Camera className="h-5 w-5 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute bottom-1/4 right-1/4 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '6s' }}
          >
            <Monitor className="h-5 w-5 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute top-3/4 left-1/4 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '7s' }}
          >
            <Database className="h-5 w-5 text-red-400" />
          </motion.div>

          <motion.div 
            className="absolute top-16 right-1/3 p-3 bg-black/40 border border-red-500/30 rounded-xl animate-float-space"
            style={{ backdropFilter: 'blur(10px)', animationDelay: '8s' }}
          >
            <Globe className="h-5 w-5 text-red-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
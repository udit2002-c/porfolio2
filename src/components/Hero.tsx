import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SpaceBackground } from "./SpaceBackground";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4">
      {/* Space background */}
      <SpaceBackground />
      
      {/* Floating glowing dots */}
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-neon-purple"
        style={{ left: '20%', top: '30%' }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute w-3 h-3 rounded-full bg-neon-blue"
        style={{ right: '25%', top: '25%' }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute w-1.5 h-1.5 rounded-full bg-neon-cyan"
        style={{ left: '35%', bottom: '35%' }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="container mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden 
                       border-4 border-primary/50 shadow-[0_0_15px_var(--glow-color)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="public/images/1.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4">
            <span className="text-gradient">Udit Narain Tewari</span>
          </h1>
          
          <div className="h-8 md:h-12 lg:h-16 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/80">
              Computer Science Student & Full Stack Developer
            </h2>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 my-6 md:my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#contact" className="futuristic-button text-sm md:text-base">Get in Touch</a>
            <a href="#projects" className="futuristic-button text-sm md:text-base">View Projects</a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="https://linkedin.com/in/udit-narain-tewari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow p-2 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/udit2002-c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow p-2 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/70 hover:text-foreground flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
};
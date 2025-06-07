import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon?: React.ReactNode;
  featured?: boolean;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Runner-up, Root Access Hackathon",
      description: "Developed a food redistribution platform, selected for Google Solutions Challenge mentorship; competed with 50 teams.",
      icon: <Trophy className="h-8 w-8 text-red-400" />,
      featured: true
    },
    {
      title: "2nd Runner-up, Girl Geek Hackathon",
      description: "Built an AI-based DeepFake Detection Tool, placed among top 3 out of 85 teams.",
      icon: <Award className="h-8 w-8 text-red-400" />
    },
    {
      title: "2nd Runner-up, BSM Ignite - Entrepreneurship Competition",
      description: "Ranked 3rd in the Investor Pitch Challenge among 147 teams.",
      icon: <Star className="h-8 w-8 text-red-400" />
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
          <h2 className="space-title">Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`relative ${achievement.featured ? 'md:scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card with cosmic border */}
                <div className={`cosmic-border relative h-full rounded-2xl ${
                  achievement.featured 
                    ? 'animate-pulse-red' 
                    : ''
                }`}>
                  <div className="space-card h-full flex flex-col items-center text-center p-8">
                    {/* Featured badge */}
                    {achievement.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-500 
                                     text-white px-3 py-1 rounded-full text-xs font-bold cosmic-glow">
                        ⭐ Featured
                      </div>
                    )}

                    <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6 
                                   border border-red-500/50 cosmic-glow">
                      {achievement.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Academic Excellence Section */}
          <motion.div
            className="space-card p-8 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              <span className="text-cosmic">
                Academics
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-black/60 rounded-lg border border-red-500/30 cosmic-glow">
                <h4 className="font-semibold text-white text-lg mb-2">
                  The National Institute of Engineering
                </h4>
                <p className="text-xl font-bold text-red-400">Grade: 8.50/10.0</p>
              </div>
              <div className="p-6 bg-black/60 rounded-lg border border-red-500/30 cosmic-glow">
                <h4 className="font-semibold text-white text-lg mb-2">
                  Sheiling House School
                </h4>
                <div className="space-y-1 text-gray-300">
                  <p>10th Grade: <span className="font-bold text-white">91%</span> (ICSE)</p>
                  <p>12th Grade: <span className="font-bold text-white">90.25%</span> (ISC)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Runner-up, Root Access Hackathon",
      description: "Developed a food redistribution platform, selected for Google Solutions Challenge mentorship; competed with 50 teams.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "2nd Runner-up, Girl Geek Hackathon",
      description: "Built an AI-based DeepFake Detection Tool, placed among top 3 out of 85 teams.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "2nd Runner-up, BSM Ignite - Entrepreneurship Competition",
      description: "Ranked 3rd in the Investor Pitch Challenge among 147 teams.",
      icon: <Award className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-16">Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center neon-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 glow">
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 glass-card rounded-xl p-8 text-center neon-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient">Academic Excellence</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-semibold">The National Institute of Engineering</h4>
                <p className="text-lg">Grade: 8.50/10.0</p>
              </div>
              <div>
                <h4 className="font-semibold">Sheiling House School</h4>
                <p>Scored 91% in 10th (ICSE Board)</p>
                <p>Scored 90.25% in 12th (ISC Board)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

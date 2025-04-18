
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="glass-card p-6 rounded-xl neon-border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-4">
                  I'm Udit Narain Tewari, a Computer Science Engineering student at The National Institute of Engineering, Mysore, with a passion for software development and innovative technology solutions.
                </p>
                <p className="mb-4">
                  My academic journey has equipped me with strong foundations in core computer science concepts, while my practical experiences have honed my skills in building impactful applications.
                </p>
                <p>
                  Beyond coding, I'm actively involved in entrepreneurial events as a Treasurer of Onyxe-Cell, organizing impactful initiatives like E-Week 2024 and other innovative competitions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="glass-card p-6 rounded-xl space-y-6 neon-border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">The National Institute of Engineering</h4>
                    <p className="text-muted-foreground">B.E. in Computer Science and Engineering</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026 | Mysore, India</p>
                    <p className="text-sm">Grade: 8.50/10.0</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Sheiling House School</h4>
                    <p className="text-muted-foreground">High School</p>
                    <p className="text-sm text-muted-foreground">2007 - 2021 | Kanpur, India</p>
                    <p className="text-sm">Scored 91% in 10th (ICSE Board)</p>
                    <p className="text-sm">Scored 90.25% in 12th (ISC Board)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gradient">Contact Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-muted-foreground mr-2">📧</span>
                    <a href="mailto:udittewari888@gmail.com" className="hover:text-primary transition-colors">
                      udittewari888@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-muted-foreground mr-2">📱</span>
                    <a href="tel:+918887547458" className="hover:text-primary transition-colors">
                      +91-8887547458
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-muted-foreground mr-2">📍</span>
                    <span>Mysore, Karnataka, India</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

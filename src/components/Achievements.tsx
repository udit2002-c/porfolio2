import { motion } from "framer-motion";
import { Award, Trophy, Star, GitCommit, Calendar, Users, Target, CheckCircle2, Badge, Terminal } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon?: React.ReactNode;
  featured?: boolean;
  date: string;
  category: string;
  participants?: number;
  position: number;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Runner-up, Root Access Hackathon",
      description: "Developed a food redistribution platform, selected for Google Solutions Challenge mentorship; competed with 50 teams.",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      featured: true,
      date: "2024-03-15",
      category: "hackathon",
      participants: 50,
      position: 2
    },
    {
      title: "2nd Runner-up, Girl Geek Hackathon",
      description: "Built an AI-based DeepFake Detection Tool, placed among top 3 out of 85 teams.",
      icon: <Award className="h-8 w-8 text-purple-400" />,
      date: "2024-02-20",
      category: "hackathon",
      participants: 85,
      position: 3
    },
    {
      title: "2nd Runner-up, BSM Ignite - Entrepreneurship Competition",
      description: "Ranked 3rd in the Investor Pitch Challenge among 147 teams.",
      icon: <Star className="h-8 w-8 text-blue-400" />,
      date: "2024-01-10",
      category: "business",
      participants: 147,
      position: 3
    }
  ];

  const academicData = {
    nie: { grade: 8.50, total: 10.0 },
    icse: { grade: 91, total: 100 },
    isc: { grade: 90.25, total: 100 }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* GitHub-style Achievements Header */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-t border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/achievements/index.json</div>
              <div className="flex items-center space-x-2">
                <Badge className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            Achievements & Recognition
          </h2>

          {/* GitHub-style Achievements Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <span className="font-mono text-sm text-gray-300">🏆 Achievement Unlocked</span>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>{achievements.length} total</span>
                  <GitCommit className="h-3 w-3" />
                </div>
              </div>
              
              {/* Achievement Badges */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {achievement.icon}
                          {achievement.featured && (
                            <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-mono rounded border border-yellow-500/30">
                              FEATURED
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-mono text-gray-400">{achievement.date}</span>
                      </div>
                      <h3 className="font-mono text-white text-sm mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-400">{achievement.participants}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-400">#{achievement.position}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-mono ${
                          achievement.category === 'hackathon' ? 'bg-blue-500/20 text-blue-300' :
                          achievement.category === 'business' ? 'bg-green-500/20 text-green-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {achievement.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Achievement Log */}
          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-black border border-gray-600 rounded overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-600">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 font-mono text-sm text-gray-400">~/achievements $ git log --oneline</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <span className="text-yellow-400 w-16 text-xs">
                        {achievement.date.replace('-', '').substring(2)}
                      </span>
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 flex-1">
                        {achievement.category}: {achievement.title}
                      </span>
                      <span className="text-gray-500 text-xs">
                        rank #{achievement.position}/{achievement.participants}
                      </span>
                    </motion.div>
                  ))}
                  <div className="mt-4 text-green-400">
                    Total achievements: {achievements.length}
                  </div>
                  <div className="text-gray-400 animate-pulse">█</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Academic Performance as Code */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-mono text-sm text-gray-300">academics.json</span>
                <Calendar className="h-4 w-4 text-gray-500" />
              </div>
              
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Academic Code Block */}
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-3">// Academic Performance</div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">academics</span> = {"{"}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">college</span>: {"{"}
                        <div className="ml-4">
                          <span className="text-green-400">name</span>: <span className="text-yellow-400">"NIE"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-green-400">grade</span>: <span className="text-cyan-400">{academicData.nie.grade}</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-green-400">percentage</span>: <span className="text-cyan-400">{(academicData.nie.grade / academicData.nie.total * 100).toFixed(1)}%</span>
                        </div>
                        {"},"}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">school</span>: {"{"}
                        <div className="ml-4">
                          <span className="text-green-400">icse</span>: <span className="text-cyan-400">{academicData.icse.grade}%</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-green-400">isc</span>: <span className="text-cyan-400">{academicData.isc.grade}%</span>
                        </div>
                        {"}"}
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  {/* Academic Terminal Output */}
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-3">// Performance Analysis</div>
                    <div className="space-y-2">
                      <div className="text-green-400">
                        $ calculateGPA(academics.college.grade)
                      </div>
                      <div className="text-cyan-400 ml-2">
                        → {academicData.nie.grade}/10.0 CGPA
                      </div>
                      <div className="text-green-400 mt-2">
                        $ getSchoolPerformance()
                      </div>
                      <div className="text-cyan-400 ml-2">
                        → ICSE: {academicData.icse.grade}%
                      </div>
                      <div className="text-cyan-400 ml-2">
                        → ISC: {academicData.isc.grade}%
                      </div>
                      <div className="text-green-400 mt-2">
                        $ echo "Status: Academic Excellence"
                      </div>
                      <div className="text-yellow-400 ml-2">
                        Status: Academic Excellence ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

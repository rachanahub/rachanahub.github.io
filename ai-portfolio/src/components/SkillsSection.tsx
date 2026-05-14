"use client";

import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import { BrainCircuit } from "lucide-react";

const skillsData = [
  { subject: 'Backend (Java/Spring)', A: 95, fullMark: 100 },
  { subject: 'Microservices', A: 90, fullMark: 100 },
  { subject: 'Cloud (AWS)', A: 85, fullMark: 100 },
  { subject: 'Database (SQL/NoSQL)', A: 88, fullMark: 100 },
  { subject: 'Frontend (Angular/React)', A: 80, fullMark: 100 },
  { subject: 'DevOps (CI/CD)', A: 85, fullMark: 100 },
];

const aiRecommendations = [
  { skill: "System Architecture", strength: 98, color: "bg-primary" },
  { skill: "API Design", strength: 95, color: "bg-secondary" },
  { skill: "Performance Optimization", strength: 90, color: "bg-accent" },
];

export default function SkillsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/50" id="skills">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Proficiency</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(112,0,255,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full glass-dark rounded-3xl p-4 flex items-center justify-center relative group"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl group-hover:bg-primary/10 transition-colors"></div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00f0ff' }}
                />
                <Radar name="Proficiency" dataKey="A" stroke="#00f0ff" fill="#00f0ff" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* AI Strength Meter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="text-primary animate-pulse" size={32} />
              <h3 className="text-2xl font-semibold">AI Skill Analysis</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Based on project history, codebase contributions, and system designs, the AI has calculated the following core strengths:
            </p>

            <div className="space-y-6">
              {aiRecommendations.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-white">{item.skill}</span>
                    <span className="text-gray-400">{item.strength}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.strength}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.2, ease: "easeOut" }}
                      className={`h-full ${item.color} shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Java Developer",
    company: "TechNova Solutions",
    period: "2019 - Present",
    color: "primary",
    achievements: [
      "Architected and deployed a microservices-based platform using Spring Boot and AWS EKS, reducing latency by 40%.",
      "Led a team of 6 engineers in migrating a monolithic legacy Java EE application to a scalable React/Next.js frontend with REST APIs.",
      "Implemented automated CI/CD pipelines with GitHub Actions and Jenkins, cutting deployment time from 2 hours to 15 minutes."
    ]
  },
  {
    role: "Software Engineer II",
    company: "DataSphere Analytics",
    period: "2016 - 2019",
    color: "secondary",
    achievements: [
      "Developed high-throughput data processing services using Java 8, Kafka, and Cassandra handling 5M+ daily events.",
      "Built interactive data visualization dashboards using Angular and D3.js.",
      "Optimized SQL queries and database indexes, improving report generation speed by 60%."
    ]
  },
  {
    role: "Junior Java Developer",
    company: "InnovaSys",
    period: "2014 - 2016",
    color: "accent",
    achievements: [
      "Maintained and enhanced core enterprise applications using Spring MVC and Hibernate.",
      "Integrated third-party payment gateways reducing transaction failure rates by 15%.",
      "Wrote comprehensive JUnit and Mockito test suites, increasing code coverage to 85%."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/50" id="experience">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(112,0,255,0.8)]"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 space-y-16 ml-4 md:ml-6">
          {experiences.map((exp, index) => {
            const glowColor = exp.color === 'primary' ? 'rgba(0,240,255,0.8)' : exp.color === 'secondary' ? 'rgba(112,0,255,0.8)' : 'rgba(255,0,60,0.8)';
            const bgClass = exp.color === 'primary' ? 'bg-primary' : exp.color === 'secondary' ? 'bg-secondary' : 'bg-accent';
            const textClass = exp.color === 'primary' ? 'text-primary' : exp.color === 'secondary' ? 'text-secondary' : 'text-accent';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div 
                  className={`absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-black border-2 border-${exp.color} flex items-center justify-center`}
                  style={{ borderColor: exp.color === 'primary' ? '#00f0ff' : exp.color === 'secondary' ? '#7000ff' : '#ff003c', boxShadow: `0 0 15px ${glowColor}` }}
                >
                  <Briefcase size={12} className={textClass} />
                </div>

                <div className="glass-dark p-6 md:p-8 rounded-2xl group hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className={`text-lg font-semibold ${textClass}`}>{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 size={20} className={`shrink-0 mt-0.5 ${textClass} opacity-70`} />
                        <p className="leading-relaxed text-sm md:text-base">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

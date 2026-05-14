"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Cloud } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <Cloud className="text-secondary mb-4" size={40} />,
    color: "secondary"
  },
  {
    title: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle",
    date: "2021",
    icon: <Award className="text-primary mb-4" size={40} />,
    color: "primary"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    icon: <ShieldCheck className="text-accent mb-4" size={40} />,
    color: "accent"
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="certifications">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full shadow-[0_0_10px_rgba(255,0,60,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const glowColor = cert.color === 'primary' ? 'rgba(0,240,255,0.4)' : cert.color === 'secondary' ? 'rgba(112,0,255,0.4)' : 'rgba(255,0,60,0.4)';
            const borderGlow = cert.color === 'primary' ? 'hover:border-primary' : cert.color === 'secondary' ? 'hover:border-secondary' : 'hover:border-accent';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass-dark p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 border border-white/5 ${borderGlow} group`}
                style={{ '--hover-glow': glowColor } as React.CSSProperties}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-gray-400 font-medium mb-1">{cert.issuer}</p>
                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                  {cert.date}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Code, Terminal } from "lucide-react";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="glass-dark p-8 rounded-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none"></div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Terminal className="text-primary" /> System Architect & Developer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over <span className="text-primary font-semibold">10+ years of experience</span> in building scalable backend systems and dynamic frontends. I specialize in Java, Spring Boot, Microservices architecture, Angular, and AWS deployments.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My passion lies in bridging the gap between complex architectural patterns and seamless user experiences, leveraging artificial intelligence to optimize performance and deployment pipelines.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 text-center rounded-xl hover:border-primary/50 transition-colors">
                <Server className="mx-auto mb-2 text-primary" size={28} />
                <h4 className="font-semibold">Microservices</h4>
              </div>
              <div className="glass p-4 text-center rounded-xl hover:border-secondary/50 transition-colors">
                <Code className="mx-auto mb-2 text-secondary" size={28} />
                <h4 className="font-semibold">Full Stack</h4>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Cpu className="text-secondary" /> Education Journey
            </h3>
            
            <div className="relative border-l-2 border-white/10 pl-8 space-y-10 ml-4">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                <h4 className="text-xl font-bold text-white">Master of Computer Science</h4>
                <p className="text-primary font-medium mb-2">Tech University • 2014 - 2016</p>
                <p className="text-gray-400 text-sm">Specialized in Distributed Systems and Cloud Computing.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-secondary shadow-[0_0_10px_rgba(112,0,255,0.8)]"></div>
                <h4 className="text-xl font-bold text-white">Bachelor of Engineering</h4>
                <p className="text-secondary font-medium mb-2">State University • 2010 - 2014</p>
                <p className="text-gray-400 text-sm">Major in Computer Engineering. Graduated with Honors.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

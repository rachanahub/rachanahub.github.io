"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ParticleNetwork />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for New Opportunities
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-outfit text-primary font-semibold mb-2 text-glow">
            Full Stack Java Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow animate-pulse">Rachana</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 font-light leading-relaxed">
            "Building Scalable Systems with Intelligence"
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full glass border border-secondary/50 text-white hover:bg-secondary/20 hover:border-secondary hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl glass-dark border-glow p-4 flex flex-col items-center justify-center group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            {/* Replace this with an actual image later */}
            <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <p className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-sm z-10 text-glow">SYSTEM ARCHITECT</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

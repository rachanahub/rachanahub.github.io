"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Database, Server, Box } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Microservices E-Commerce",
    description: "A highly scalable e-commerce backend built with Spring Boot microservices, Kafka for event-driven architecture, and deployed on AWS EKS.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "AWS"],
    diagram: "bg-gradient-to-br from-primary/20 to-blue-900/40",
    icon: <Server className="text-primary mb-4" size={40} />,
    github: "https://github.com/rachanahub",
    live: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Frontend analytics platform with real-time WebSocket data streaming, utilizing React, Recharts, and a Node.js backend. Handled 10k+ concurrent connections.",
    tech: ["React", "TypeScript", "Node.js", "Redis", "WebSockets"],
    diagram: "bg-gradient-to-br from-secondary/20 to-purple-900/40",
    icon: <Database className="text-secondary mb-4" size={40} />,
    github: "https://github.com/rachanahub",
    live: "#"
  },
  {
    title: "Serverless Order Processing",
    description: "AWS Lambda based serverless architecture for processing high-volume orders with DynamoDB and SQS. Reduced infrastructure costs by 40%.",
    tech: ["AWS Lambda", "DynamoDB", "SQS", "Node.js", "Terraform"],
    diagram: "bg-gradient-to-br from-accent/20 to-red-900/40",
    icon: <Box className="text-accent mb-4" size={40} />,
    github: "https://github.com/rachanahub",
    live: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full shadow-[0_0_10px_rgba(255,0,60,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-dark rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Architecture "Diagram" Visual */}
              <div className={`h-48 ${project.diagram} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                  <div className="h-px w-24 bg-white/30 my-2"></div>
                  <div className="flex gap-4 opacity-70">
                    <Box size={20} /> <Box size={20} /> <Box size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Code size={18} /> Code
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm font-semibold">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

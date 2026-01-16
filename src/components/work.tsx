"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Work() {
  return (
    <section className="py-24 px-4 md:px-12 w-full bg-neutral-950 relative z-10 overflow-hidden">
      <div className="flex flex-col mb-16 relative z-10">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-secondary mb-4"
        >
          Selected Work
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-display"
        >
          Featured Projects
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group cursor-pointer flex flex-col gap-4"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-accent/10 rounded-lg">
              <div className="absolute inset-0 bg-neutral-800 transition-colors duration-500 group-hover:bg-neutral-700" />
              {/* Placeholder Content/Image */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-display text-4xl opacity-20 group-hover:scale-105 transition-transform duration-700">
                {project.title.substring(0, 2)}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight />
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary mt-1">{project.category}</p>
              </div>
              <span className="text-xs text-secondary border border-neutral-800 px-2 py-1 rounded-full">
                {project.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-20">
         <Link href="/projects" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">
            View All Work
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
         </Link>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export function Work() {
  // Mouse tracking for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Get current image src
  const activeProject = projects.find(p => p.id === hoveredProject);

  return (
    <section 
      id="work" 
      className="w-full bg-[#0a0a0a] border-t border-white/[0.05] relative z-20"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Cursor */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 hidden md:block mix-blend-difference"
      >
         <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full overflow-hidden"
              >
                 {/* Using a solid color placeholder if internal image not real, or the real image */}
                 <div className="absolute inset-0 bg-[#ccff00] flex items-center justify-center text-black font-bold text-4xl uppercase">
                    {/* If we had real dynamic images we'd use Next Image here. 
                        For now, simulating the 'distorted' look with the placeholder 
                        or using the project's placeholder color. 
                    */}
                    {activeProject.title}
                 </div>
                 {/* 
                    UNCOMMENT THIS WHEN REAL IMAGES ARE READY:
                    <Image 
                      src={activeProject.image} 
                      fill 
                      alt={activeProject.title} 
                      className="object-cover"
                    /> 
                 */}
              </motion.div>
            )}
         </AnimatePresence>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.05]">
        
        {/* Header */}
        <div className="col-span-1 md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/[0.05]">
           <span className="font-mono text-xs text-[#888] tracking-widest uppercase block mb-24">[ Archive ]</span>
           <h2 className="text-4xl md:text-6xl font-display font-bold text-[#e6e6e6] uppercase leading-[0.8]">
             Selected<br />Works
           </h2>
        </div>

        {/* Project List */}
        <div className="col-span-1 md:col-span-8">
           {projects.map((project, index) => (
             <Link 
               href={`/work/${project.id}`} 
               key={project.id}
               className="group relative grid grid-cols-12 p-6 md:p-8 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors items-center"
               onMouseEnter={() => setHoveredProject(project.id)}
               onMouseLeave={() => setHoveredProject(null)}
             >
                {/* Index */}
                <div className="col-span-2 font-mono text-xs text-[#444] group-hover:text-[#ccff00] transition-colors">
                   {String(index + 1).padStart(2, '0')}/
                </div>

                {/* Title */}
                <div className="col-span-10 md:col-span-7">
                   <h3 className="text-2xl md:text-5xl font-display font-bold text-[#888] group-hover:text-[#e6e6e6] group-hover:translate-x-4 transition-all duration-300 uppercase">
                      {project.title}
                   </h3>
                </div>

                {/* Category / Year (Desktop Only) */}
                <div className="hidden md:flex col-span-3 flex-col items-end font-mono text-[10px] text-[#666] uppercase group-hover:text-white transition-colors">
                   <span>{project.category}</span>
                   <span>{project.year}</span>
                </div>
             </Link>
           ))}

           {/* View All - Bottom Row */}
           <div className="p-6 md:p-8 flex justify-end">
              <Link href="/projects" className="font-mono text-xs text-[#ccff00] uppercase hover:underline underline-offset-4">
                 View Full Archive_
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}

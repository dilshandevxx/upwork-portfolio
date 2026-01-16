"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Work() {
  return (
    <section id="work" className="w-full bg-[#0a0a0a] border-b border-white/[0.05]">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.05]">
         <div className="col-span-1 md:col-span-4 p-6 md:p-8 border-r border-white/[0.05]">
             <span className="font-mono text-xs text-[#888] tracking-widest uppercase">[ Selected Work ]</span>
         </div>
         <div className="col-span-1 md:col-span-8 p-6 md:p-8 flex items-end justify-between">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-[#e6e6e6] uppercase leading-none">
               Featured<br />Projects
             </h2>
             <Link href="/projects" className="hidden md:flex font-mono text-xs text-[#ccff00] hover:text-white transition-colors gap-2 items-center uppercase">
                View All <ArrowUpRight className="w-3 h-3" />
             </Link>
         </div>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative min-h-[500px] flex flex-col">
             {/* Image Area - Sharp, no rounded corners */}
             <div className="flex-1 w-full bg-[#111] relative overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-500" />
                 {/* ID Overlay */}
                 <span className="absolute top-6 left-6 font-mono text-xs text-white mix-blend-difference z-10">
                   [{String(index + 1).padStart(2, '0')}]
                 </span>
             </div>

             {/* Bottom Details Bar */}
             <div className="h-16 border-t border-white/[0.05] flex items-center justify-between px-6 bg-[#0a0a0a]">
                <div className="flex flex-col">
                   <h3 className="text-sm font-bold uppercase text-[#e6e6e6] group-hover:text-[#ccff00] transition-colors">{project.title}</h3>
                   <span className="font-mono text-[10px] text-[#666] uppercase">{project.category}</span>
                </div>
                <div className="font-mono text-[10px] text-[#666]">
                  {project.year}
                </div>
             </div>
          </div>
        ))}
      </div>
      
      {/* Mobile View All Link */}
      <div className="md:hidden border-t border-white/[0.05] p-6 flex justify-center">
          <Link href="/projects" className="font-mono text-xs text-[#ccff00] uppercase flex items-center gap-2">
            View All Projects <ArrowUpRight className="w-3 h-3" />
          </Link>
      </div>
    </section>
  );
}

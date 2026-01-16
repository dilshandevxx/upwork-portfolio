"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Three.js", "Node.js", "AWS", "Figma"
];

export function About() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] border-b border-white/[0.05]">
       <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          
          {/* Left Column: Title (Vertical Text on Desktop?) */}
          <div className="col-span-1 md:col-span-1 p-6 flex items-center justify-center md:writing-mode-vertical-rl md:rotate-180">
              <span className="font-mono text-xs text-[#888] tracking-widest uppercase whitespace-nowrap">
                [ About Profile ]
              </span>
          </div>

          {/* Middle Column: Bio */}
          <div className="col-span-1 md:col-span-7 p-8 md:p-16 flex flex-col justify-center">
             <h3 className="text-lg md:text-2xl leading-relaxed text-[#ccc] font-light max-w-2xl">
               <span className="text-[#666] font-mono text-xs block mb-6 uppercase tracking-widest">/ Biography</span>
               I am a creative developer building digital products that matter. 
               Focusing on <span className="text-white font-medium">motion</span>, <span className="text-white font-medium">aesthetics</span>, and <span className="text-white font-medium">performance</span>.
               I blend technical precision with artistic direction.
             </h3>
          </div>

          {/* Right Column: Tech Stack (Data List) */}
          <div className="col-span-1 md:col-span-4 bg-[#0d0d0d] flex flex-col">
             <div className="p-6 border-b border-white/[0.05]">
                 <span className="font-mono text-xs text-[#666] uppercase tracking-widest">/ Capabilities</span>
             </div>
             <div className="flex-1 p-6">
                <ul className="grid grid-cols-1 gap-2">
                   {skills.map((skill, i) => (
                     <li key={i} className="font-mono text-xs text-[#888] flex justify-between group cursor-default">
                        <span className="group-hover:text-white transition-colors">{skill}</span>
                        <span className="text-[#333] group-hover:text-[#ccff00] transition-colors">[+]</span>
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-6 border-t border-white/[0.05]">
                <span className="font-mono text-[10px] text-[#444] uppercase">
                   Updated: 2026.01.16
                </span>
             </div>
          </div>
       </div>
    </section>
  );
}

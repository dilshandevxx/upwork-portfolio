"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into brand goals and audience.",
    details: ["User Research", "Market Analysis", "Brand Positioning"]
  },
  {
    number: "02",
    title: "Strategy",
    description: "Translating insights into a concrete roadmap.",
    details: ["Information Arch", "Wireframing", "Tech Stack Selection"]
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting high-fidelity UI aligned with brand identity.",
    details: ["Visual Dsgn", "Interaction Dsgn", "Prototyping"]
  },
  {
    number: "04",
    title: "Development",
    description: "Building pixel-perfect, performant code.",
    details: ["Frontend Dev", "CMS Integration", "Animations"]
  },
  {
    number: "05",
    title: "Launch",
    description: "Testing, optimization, and deployment.",
    details: ["QA Testing", "Performance Opt", "Deployment"]
  },
];

export function Process() {
  return (
    <section className="w-full bg-[#0a0a0a] border-b border-white/[0.05]">
       {/* Section Header */}
       <div className="border-b border-white/[0.05] p-6 md:p-8">
           <span className="font-mono text-xs text-[#888] tracking-widest uppercase">[ Process ]</span>
       </div>

       {/* Grid Layout */}
       <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {steps.map((step, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-500 min-h-[300px] flex flex-col justify-between p-6 md:p-8">
               
               {/* Top: Number */}
               <div className="font-mono text-xs text-[#666] mb-4">
                  [{step.number}]
               </div>

               {/* Center: Content */}
               <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold uppercase text-[#ccc] group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-xs text-[#888] leading-relaxed max-w-[150px]">
                    {step.description}
                  </p>
               </div>

               {/* Bottom: Details (Reveal on hover?) - Keeping static for brutalist clarity */}
               <div className="mt-8 pt-4 border-t border-white/[0.05] flex flex-col gap-1">
                  {step.details.map((detail, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-[#555] group-hover:text-[#999] transition-colors uppercase">
                       + {detail}
                    </span>
                  ))}
               </div>
            </div>
          ))}
       </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Web Design",
    description: "Creating visually stunning, user-centric designs that tell your brand's unique story. From wireframes to high-fidelity prototypes.",
    tags: ["UI/UX", "Prototyping", "Design Systems"],
  },
  {
    id: "02",
    title: "Development",
    description: "Building robust, scalable, and high-performance websites using the latest technologies. Clean code, SEO-optimized, and pixel-perfect.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "03",
    title: "Interactvity",
    description: "Adding life to your website with smooth animations and interactive elements that engage users and elevate the experience.",
    tags: ["GSAP", "Framer Motion", "WebGL"],
  },
  {
    id: "04",
    title: "SEO & Performance",
    description: "Optimizing your digital presence for search engines and speed, ensuring your message reaches the widest possible audience.",
    tags: ["Technical SEO", "Core Web Vitals", "Analytics"],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="w-full bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.05] border-b border-white/[0.05]">
        
        {/* Header Column */}
        <div className="col-span-1 md:col-span-4 p-6 md:p-8">
          <h2 className="font-mono text-xs text-[#888] tracking-widest mb-4 uppercase">[ Services ]</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-[#e6e6e6] uppercase leading-none">
            Expertise &<br />Capabilities
          </h3>
        </div>

        {/* Content Column */}
        <div className="col-span-1 md:col-span-8">
           {services.map((service, index) => (
             <div 
               key={service.id} 
               className="group grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.05] last:border-b-0 min-h-[120px]"
               onMouseEnter={() => setActiveService(index)}
               onMouseLeave={() => setActiveService(null)}
             >
                {/* ID & Title */}
                <div className="col-span-1 md:col-span-5 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.05] bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-300">
                   <span className="font-mono text-xs text-[#666]">[{service.id}]</span>
                   <h4 className="text-xl md:text-2xl font-bold uppercase text-[#ccc] group-hover:text-white transition-colors">
                     {service.title}
                   </h4>
                </div>

                {/* Description & Tags */}
                <div className="col-span-1 md:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-300">
                   <p className="text-sm text-[#888] leading-relaxed max-w-sm mb-6">
                     {service.description}
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] uppercase border border-white/10 px-2 py-1 text-[#666] group-hover:border-white/30 group-hover:text-[#ccc] transition-colors">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}

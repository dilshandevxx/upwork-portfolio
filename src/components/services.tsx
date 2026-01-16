"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  { id: "01", title: "Web Design", desc: "User Interface, User Experience, Design Systems" },
  { id: "02", title: "Development", desc: "Frontend (React/Next.js), Backend Integration, WebGL" },
  { id: "03", title: "Animation", desc: "GSAP, Framer Motion, 3D Interactions" },
  { id: "04", title: "SEO_Optim", desc: "Technical SEO, Performance Tuning, Analytics" },
];

export function Services() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section id="services" className="w-full bg-[#0a0a0a] border-t border-white/[0.05]">
       <div className="grid grid-cols-1 md:grid-cols-12 divide-x divide-white/[0.05]">
          
          {/* Label Column */}
          <div className="hidden md:flex col-span-1 p-8 items-start justify-center">
             <span className="writing-vertical-rl rotate-180 font-mono text-xs text-[#444] uppercase tracking-widest">
                [ Capabilities ]
             </span>
          </div>

          {/* Main List */}
          <div className="col-span-1 md:col-span-11">
             {services.map((service) => (
               <div 
                 key={service.id} 
                 className="group border-b border-white/[0.05] last:border-b-0 cursor-pointer bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors"
                 onClick={() => toggleService(service.id)}
               >
                  <div className="p-6 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                     
                     {/* Title Block */}
                     <div className="flex items-baseline gap-8">
                        <span className="font-mono text-xs text-[#ccff00] group-hover:text-white transition-colors">
                           /{service.id}
                        </span>
                        <h3 className="text-4xl md:text-7xl font-bold font-display uppercase text-[#333] group-hover:text-[#e6e6e6] group-hover:pl-4 transition-all duration-500">
                           {service.title}
                        </h3>
                     </div>

                     {/* Indicator */}
                     <div className="hidden md:block">
                        <motion.div 
                          animate={{ rotate: openService === service.id ? 180 : 0 }}
                          className="text-[#444] group-hover:text-[#ccff00]"
                        >
                           {openService === service.id ? <Minus /> : <Plus />}
                        </motion.div>
                     </div>
                  </div>

                  {/* Accordion Content */}
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                       height: openService === service.id ? "auto" : 0,
                       opacity: openService === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                    className="overflow-hidden bg-[#111]"
                  >
                     <div className="p-6 md:p-12 md:pl-24 pt-0">
                        <p className="font-mono text-sm md:text-base text-[#888] max-w-xl uppercase tracking-wider">
                           {service.desc}
                        </p>
                     </div>
                  </motion.div>
               </div>
             ))}
          </div>

       </div>
    </section>
  );
}

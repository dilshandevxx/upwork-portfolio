"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by diving deep into your brand, goals, and audience. I ask the right questions to understand what success looks like for you.",
    color: "bg-neutral-900",
  },
  {
    number: "02",
    title: "Strategy",
    description: "I translate insights into a concrete roadmap. This includes sitemaps, wireframes, and technical architecture planning.",
    color: "bg-neutral-800",
  },
  {
    number: "03",
    title: "Design",
    description: "Where magic happens. I craft high-fidelity designs that align with your brand identity while prioritizing user experience.",
    color: "bg-neutral-900",
  },
  {
    number: "04",
    title: "Development",
    description: "Turning designs into pixel-perfect code. I build accessible, performant, and scalable solutions using modern tech stacks.",
    color: "bg-neutral-800",
  },
  {
    number: "05",
    title: "Launch",
    description: "The final polish. Testing across devices, optimizing performance, and ensuring a seamless deployment to the world.",
    color: "bg-neutral-900",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-black py-32 px-4 md:px-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-24 sticky top-12 z-0">
          <div className="flex items-center gap-4 mb-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
             <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
             <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-medium">The Workflow</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white text-center">
             Process
           </h2>
      </div>

      {/* Stacked Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8 relative z-10 pb-32">
        {steps.map((step, index) => (
          <Card key={index} {...step} index={index} range={[index * 0.25, 1]} targetScale={1 - (steps.length - index) * 0.05} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ title, description, number, index, range, targetScale, progress, color }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5% + ${index * 25}px)` }}
        className={cn(
          "relative flex flex-col h-[500px] w-full max-w-[800px] rounded-3xl p-12 border border-white/10 origin-top",
          "bg-neutral-900" // Fallback
        )}
      >
        {/* Glass Effect & Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md" />
        <div className="absolute inset-0 rounded-3xl bg-grid-white/[0.02]" />

        <div className="relative z-10 h-full flex flex-col justify-between">
           <div className="flex justify-between items-start">
             <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
             <span className="text-xl font-mono text-white/30">({number})</span>
           </div>

           <div>
             <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-lg">
               {description}
             </p>
           </div>
        </div>

        {/* Large BG Number */}
        <span className="absolute -bottom-12 -right-12 text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none leading-none">
          {number}
        </span>
      </motion.div>
    </div>
  );
};

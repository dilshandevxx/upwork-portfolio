"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by diving deep into your brand, goals, and audience. I ask the right questions to understand what success looks like for you.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "I translate insights into a concrete roadmap. This includes silliuetts, wireframes, and technical architecture planning.",
  },
  {
    number: "03",
    title: "Design",
    description: "Where magic happens. I craft high-fidelity designs that align with your brand identity while prioritizing user experience.",
  },
  {
    number: "04",
    title: "Development",
    description: "Turning designs into pixel-perfect code. I build accessible, performant, and scalable solutions using modern tech stacks.",
  },
  {
    number: "05",
    title: "Launch",
    description: "The final polish. Testing across devices, optimizing performance, and ensuring a seamless deployment to the world.",
  },
];

export function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Intro Text (Absolute to stay fixed or move slightly?) */}
        <div className="absolute top-12 left-6 md:left-12 z-20">
             <h3 className="text-xs uppercase tracking-widest text-secondary mb-2">The Workflow</h3>
             <h2 className="text-4xl font-display font-bold">Process</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative h-[60vh] w-[80vw] md:w-[60vh] flex-shrink-0 flex flex-col justify-between p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors duration-500"
            >
               {/* Background Number */}
               <span className="absolute -bottom-12 -right-12 text-[12rem] font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                 {step.number}
               </span>
               
               <div>
                 <span className="text-sm font-mono text-primary/80 border border-primary/20 px-3 py-1 rounded-full">{step.number}</span>
               </div>
               
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-secondary text-lg leading-relaxed text-balance">
                    {step.description}
                  </p>
               </div>
               
               {/* Decorative line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

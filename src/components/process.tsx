"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="py-24 px-4 md:px-12 w-full bg-neutral-950 relative overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="flex flex-col md:flex-row gap-16 md:gap-32 relative z-10">
        <div className="md:w-1/3 md:sticky md:top-24 h-fit">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-secondary mb-4"
          >
            How it Works
          </motion.h3>
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            A Refined <br /> Process
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }} 
             className="text-secondary text-lg text-balance"
          >
            My workflow is designed to be transparent, collaborative, and efficient, ensuring we hit every milestone with precision.
          </motion.p>
        </div>

        <div className="md:w-2/3 flex flex-col gap-12 md:gap-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col gap-4 group"
            >
              <span className="text-6xl md:text-8xl font-display font-bold text-neutral-900 group-hover:text-primary/10 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <div className="h-px w-12 bg-primary/50 group-hover:w-full transition-all duration-700 ease-in-out" />
              <p className="text-secondary max-w-md">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

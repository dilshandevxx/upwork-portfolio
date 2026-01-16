"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const title1 = "CREATIVE";
  const title2 = "DEVELOPER";

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4 bg-neutral-950">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/30 via-neutral-950 to-neutral-950" />
      
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-[90vw]">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-between w-full max-w-md mb-8 md:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Est. 2026</span>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Portfolio</span>
        </motion.div>

        {/* Main Typography */}
        <div className="flex flex-col items-center leading-none">
          {/* CREATIVE */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex overflow-hidden"
          >
            {title1.split("").map((char, i) => (
              <motion.span 
                key={i} 
                variants={charVariants}
                className="text-[12vw] md:text-[13vw] font-bold tracking-tighter text-white"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* DEVELOPER */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex overflow-hidden -mt-[2vw] md:-mt-[3vw]"
          >
            {title2.split("").map((char, i) => (
              <motion.span 
                key={i} 
                variants={charVariants}
                className="text-[12vw] md:text-[13vw] font-bold tracking-tighter text-white" // Solid white, no outline
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 max-w-lg text-center"
        >
          <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed text-balance">
            Crafting digital experiences with <span className="text-white">precision</span> and <span className="text-white">purpose</span>.
          </p>
        </motion.div>
      </div>

      {/* Footer / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-600">Scroll</span>
        <motion.div 
           animate={{ y: [0, 5, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
           <ArrowDown className="w-4 h-4 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4 bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="z-10 flex flex-col items-center">
        <motion.div custom={0} initial="hidden" animate="visible" variants={textVariants}>
          <h2 className="text-sm md:text-lg uppercase tracking-[0.5em] text-secondary mb-4">
            Portfolio 2026
          </h2>
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="overflow-hidden">
             <motion.h1 
               custom={1} 
               initial="hidden" 
               animate="visible" 
               variants={textVariants}
               className="text-[12vw] leading-[0.8] font-bold tracking-tighter mix-blend-difference"
             >
               CREATIVE
             </motion.h1>
          </div>
          <div className="overflow-hidden">
             <motion.h1 
               custom={2} 
               initial="hidden" 
               animate="visible" 
               variants={textVariants}
               className="text-[12vw] leading-[0.8] font-bold tracking-tighter bg-gradient-to-b from-primary to-transparent bg-clip-text text-transparent"
             >
               DEVELOPER
             </motion.h1>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 max-w-md text-center text-secondary"
        >
          <p className="text-lg text-balance">
            Crafting award-winning digital experiences with minimal aesthetics and maximum impact.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-secondary">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-secondary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

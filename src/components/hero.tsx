"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.5;
      const yPct = e.clientY / innerHeight - 0.5;
      x.set(xPct * 40); // Move 40px
      y.set(yPct * 40);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4 bg-neutral-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950" />
      
      {/* Content Container */}
      <div className="z-10 flex flex-col items-center w-full max-w-[90vw]">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-between w-full max-w-2xl mb-12 text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium"
        >
          <span>Est. 2026</span>
          <span>Portfolio</span>
        </motion.div>

        {/* Main Typography */}
        <div className="relative flex flex-col items-center justify-center text-center perspective-1000">
          {/* CREATIVE - Solid */}
          <motion.div 
            style={{ x: mouseXSpring, y: mouseYSpring, translateY: y1 }}
            className="relative z-20"
          >
             <h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-color-dodge">
               CREATIVE
             </h1>
          </motion.div>

          {/* DEVELOPER - Outline / Hollow */}
          <motion.div 
             style={{ x: useSpring(useTransform(x, value => -value)), y: useSpring(useTransform(y, value => -value)), translateY: y2 }}
             className="relative z-10 -mt-[4vw]"
          >
             <h1 
               className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text stroke-white"
               style={{ 
                 WebkitTextStroke: "2px rgba(255,255,255,0.2)",
                 backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)"
               }}
             >
               DEVELOPER
             </h1>
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-16 max-w-md text-center"
        >
          <p className="text-lg text-neutral-400 font-light leading-relaxed text-balance">
            Crafting digital experiences where <span className="text-white font-medium">motion</span> meets <span className="text-white font-medium">purpose</span>.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-white/50" />
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
      </motion.div>
    </section>
  );
}

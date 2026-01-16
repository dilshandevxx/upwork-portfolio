"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const thumbnails = [
  { id: "01", src: "/projects/1.jpg", alt: "Project 1" }, // Placeholders, will use colored divs if no images
  { id: "02", src: "/projects/2.jpg", alt: "Project 2" },
  { id: "03", src: "/projects/3.jpg", alt: "Project 3" },
  { id: "04", src: "/projects/4.jpg", alt: "Project 4" },
];

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full relative bg-neutral-950 text-white overflow-hidden flex flex-col justify-between">
      
      {/* --- Grid Background --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="w-full h-full flex justify-between px-4 md:px-12">
            <div className="w-[1px] h-full bg-white/5" />
            <div className="w-[1px] h-full bg-white/5" />
            <div className="w-[1px] h-full bg-white/5" />
            <div className="w-[1px] h-full bg-white/5 hidden md:block" />
        </div>
        {/* Horizontal Lines (Top/Bottom specific) */}
        <div className="absolute top-24 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute bottom-64 left-0 w-full h-[1px] bg-white/5" />
      </div>

      {/* --- Top Content (Header-ish) --- */}
      <div className="relative z-10 w-full px-4 md:px-12 pt-8 flex justify-between items-start font-mono text-xs md:text-sm text-neutral-400">
        <div className="uppercase tracking-widest">
           Dilshan Portfolio
        </div>
        <div className="flex gap-8 md:gap-16">
          <span className="text-primary">[ WORK ]</span>
          <span>INFO</span>
          <span>ARCHIVE</span>
        </div>
      </div>

      {/* --- Main Typography --- */}
      <div className="relative z-10 w-full px-4 md:px-12 flex-1 flex flex-col justify-center">
        <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase font-display">
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
            Creative
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}>
            Developer
          </motion.div>
        </h1>
      </div>

      {/* --- Middle Info Row --- */}
      <div className="relative z-10 w-full px-4 md:px-12 flex justify-end md:justify-between items-end pb-8 md:pb-12 pointer-events-none">
          <div className="hidden md:block max-w-xs font-mono text-xs text-neutral-400">
            <p>DESIGNER &</p>
            <p>DEVELOPER</p>
          </div>
          <div className="font-mono text-xs text-neutral-400 text-right">
            <p>SRI LANKA, LK</p>
            <p>{time}</p>
          </div>
      </div>

      {/* --- Bottom Grid (Thumbnails) --- */}
      <div className="relative z-10 w-full h-48 md:h-64 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {thumbnails.map((item, i) => (
          <div key={i} className="relative group overflow-hidden">
             {/* Hover Image Reveal */}
             <div className={`absolute inset-0 bg-neutral-900 transition-colors duration-500 group-hover:bg-neutral-800`}>
                {/* Fallback gradients since we don't have real images yet */}
                <div className={`w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-neutral-800 to-neutral-700`} />
             </div>

             {/* Content */}
             <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-neutral-500 mb-2">[{item.id}]</span>
                <div className="w-full h-full flex items-center justify-center">
                    {/* Placeholder colored block */}
                    <div className="w-[80%] aspect-video bg-white/5 rounded-sm group-hover:scale-105 transition-transform duration-500" />
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Aurora Ambience - Subtle behind everything */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const thumbnails = [
  { id: "01", src: "/projects/1.png", alt: "Project 1" },
  { id: "02", src: "/projects/2.png", alt: "Project 2" },
  { id: "03", src: "/projects/3.png", alt: "Project 3" },
  { id: "04", src: "/projects/4.png", alt: "Project 4" },
  { id: "05", src: "/projects/5.png", alt: "Project 5" },
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
    <section className="h-screen w-full relative bg-[#0a0a0a] text-white overflow-hidden flex flex-col pt-8 md:pt-12 px-4 md:px-8 pb-4">
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 px-4 md:px-8">
         <div className="w-full h-full border-x border-white/[0.03] grid grid-cols-12 md:divide-x md:divide-white/[0.03]">
            {/* 12 columns for precision align */}
            {[...Array(12)].map((_, i) => <div key={i} className="" />)}
         </div>
      </div>

      {/* Top Navigation Row */}
      <div className="relative z-10 w-full flex justify-between items-start font-mono text-[10px] md:text-xs tracking-widest text-[#888]">
        {/* Left: Name */}
        <div className="uppercase">
          DILSHAN PORTFOLIO
        </div>

        {/* Right: Navigation Links (Aligned to columns roughly) */}
        <div className="flex gap-12 md:gap-24">
           <Link href="#work" className="text-[#ccff00] hover:opacity-80 transition-opacity">[ WORK ]</Link>
           <Link href="#about" className="hover:text-white cursor-pointer transition-colors">INFO</Link>
           <Link href="#contact" className="hover:text-white cursor-pointer transition-colors">ARCHIVE</Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-0">
        
        {/* Left: Huge Title */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
          <h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter uppercase font-display text-[#e6e6e6]">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
              Creative
            </motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}>
              Developer
            </motion.div>
          </h1>
        </div>

        {/* Right Info Column (Aligned to fit grid) */}
        <div className="hidden md:flex col-span-4 flex-col justify-end pb-24 pl-8 border-l border-white/[0.03] h-full relative">
           {/* This specific layout mimics Rylan's right side technical data */}
           
           <div className="grid grid-cols-2 gap-8 w-full font-mono text-[10px] md:text-xs tracking-wider text-[#888]">
              <div className="flex flex-col gap-1">
                 <span>DESIGNER &</span>
                 <span>DEVELOPER</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="uppercase">Vienna, AT</span>
                 <span>{time}</span>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Thumbnails Strip */}
      <div className="relative z-10 w-full h-32 md:h-48 mt-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-px border-t border-white/[0.05] pt-4 md:pt-0">
         {thumbnails.map((item, i) => (
           <div key={i} className="relative group w-full h-full md:border-r md:border-white/[0.05] md:last:border-r-0 flex flex-col justify-end p-2 md:p-4">
              
              {/* Image Container */}
              <div className="absolute inset-0 md:inset-x-0 md:bottom-0 h-full md:h-[80%] bg-[#111] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform transition-transform"
                  />
              </div>

              {/* Number Label */}
              <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 font-mono text-[10px] md:text-xs text-[#666] group-hover:text-white transition-colors">
                [{item.id}]
              </span>
           </div>
         ))}
      </div>
    </section>
  );
}

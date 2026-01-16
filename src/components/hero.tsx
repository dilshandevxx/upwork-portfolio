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
            {[...Array(12)].map((_, i) => <div key={i} className="" />)}
         </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-0">
        
        {/* Left Column: Name & Title (Cols 1-8) */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-between h-full pb-16 md:pb-24">
           {/* Top: Name - Aligned Left */}
           <div className="uppercase font-mono text-[10px] md:text-xs tracking-widest text-[#888]">
              DILSHAN PORTFOLIO
           </div>

           {/* Bottom: Huge Title - Strictly fits in 8 columns (approx 66vw) */}
           {/* Font size 9.5vw ensures 8 chars (CREATIVE) fit (~76vw total if full width, but contained here) */}
           <h1 className="text-[9.5vw] leading-[0.85] font-bold tracking-tighter uppercase font-display text-[#e6e6e6]">
             <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
               Creative
             </motion.div>
             <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}>
               Developer
             </motion.div>
           </h1>
        </div>

        {/* Right Column: Nav & Technical Info (Cols 9-12) */}
        <div className="hidden md:flex col-span-4 flex-col justify-between h-full pb-16 md:pb-24 border-l border-white/[0.03]">
           
           {/* Top Row: Navigation Links Grid - Distributed precisely */}
           <div className="grid grid-cols-2 w-full font-mono text-[10px] md:text-xs tracking-widest text-[#888] pl-8">
               {/* Left Block (Cols 9-10) */}
               <div className="flex gap-12">
                   <Link href="#work" className="text-[#ccff00] hover:opacity-80 transition-opacity">[ WORK ]</Link>
                   <Link href="#about" className="hover:text-white cursor-pointer transition-colors">INFO</Link>
               </div>
               {/* Right Block (Cols 11-12) - Aligned to gridline? */}
               <div className="pl-8 border-l border-transparent">
                   <Link href="#contact" className="hover:text-white cursor-pointer transition-colors">ARCHIVE</Link>
               </div>
           </div>


           {/* Bottom Row: Technical Info Grid - Aligned with Title Baseline */}
           <div className="grid grid-cols-2 w-full font-mono text-[10px] md:text-xs tracking-wider text-[#888] pl-8">
              {/* Aligns with 'WORK' block */}
              <div className="flex flex-col gap-1">
                 <span>DESIGNER &</span>
                 <span>DEVELOPER</span>
              </div>
              
              {/* Aligns with 'ARCHIVE' block? Or strictly separate? */}
              <div className="flex flex-col gap-1 pl-8">
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
              <div className="absolute inset-0 md:inset-x-0 md:bottom-0 h-full md:h-[80%] bg-[#111] overflow-hidden">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform transition-transform" />
              </div>
              <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 font-mono text-[10px] md:text-xs text-[#666] group-hover:text-white transition-colors">
                [{item.id}]
              </span>
           </div>
         ))}
      </div>
    </section>
  );
}

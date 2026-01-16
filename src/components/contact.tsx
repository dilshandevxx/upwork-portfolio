"use client";

import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] border-t border-white/[0.05] pt-24 pb-8 px-4 md:px-12 flex flex-col min-h-screen justify-between">
       
        {/* Main CTA */}
        <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
            <span className="font-mono text-xs text-[#444] uppercase mb-8 ml-1">[ Initiate Contact ]</span>
            
            <div className="relative group">
               <a href="mailto:hello@dilshan.dev" className="block relative z-10">
                  <h2 className="text-[12vw] leading-[0.8] font-bold font-display uppercase text-[#e6e6e6] group-hover:text-white transition-colors mix-blend-exclusion">
                     Let's<br/>Talk
                  </h2>
               </a>
               {/* Decorative Terminal Cursor */}
               <div className="w-[12vw] h-[0.8em] bg-[#ccff00] absolute bottom-2 right-[10%] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="mt-12 flex items-center gap-4 text-[#888] group cursor-pointer hover:text-[#ccff00] transition-colors w-fit">
                <span className="font-mono text-sm uppercase">Copy Email Address</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
        </div>

        {/* Bottom Grid */}
        <div className="w-full border-t border-white/[0.05] pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
               <span className="font-mono text-[10px] text-[#444] uppercase">Socials</span>
               <div className="flex flex-col gap-1 font-mono text-xs text-[#888] uppercase">
                  <a href="#" className="hover:text-white hover:underline">LinkedIn</a>
                  <a href="#" className="hover:text-white hover:underline">Twitter / X</a>
                  <a href="#" className="hover:text-white hover:underline">GitHub</a>
               </div>
            </div>

            <div className="flex flex-col gap-2">
               <span className="font-mono text-[10px] text-[#444] uppercase">Location</span>
               <span className="font-mono text-xs text-[#888] uppercase">Vienna, Austria</span>
            </div>

            <div className="flex flex-col gap-2">
               <span className="font-mono text-[10px] text-[#444] uppercase">Time</span>
               <span className="font-mono text-xs text-[#888] uppercase">Local: GMT+1</span>
            </div>

            <div className="flex flex-col justify-end text-right md:text-right">
               <span className="font-mono text-[10px] text-[#333] uppercase">
                  © 2026 Dilshan Portfolio. <br/> System Active.
               </span>
            </div>
        </div>

    </footer>
  );
}

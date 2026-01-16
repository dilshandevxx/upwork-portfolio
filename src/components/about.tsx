"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] border-t border-white/[0.05] py-24 md:py-48 px-4 md:px-0">
       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          
          {/* Label */}
          <div className="col-span-1 md:col-span-2 md:pl-8">
             <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest sticky top-32">
                [ Manifesto ]
             </span>
          </div>

          {/* Main Text */}
          <div className="col-span-1 md:col-span-9">
              <h2 className="text-3xl md:text-6xl font-display font-medium text-[#e6e6e6] leading-[1.2] uppercase">
                 I am a Creative Developer <span className="text-[#333]">/</span> 
                 Building digital <span className="text-[#ccff00]">monuments</span> that stand strict and tall <span className="text-[#333]">/</span>
                 Rejecting the noise of generic templates <span className="text-[#333]">/</span>
                 Focusing on <span className="bg-white/10 px-2 text-white italic normal-case tracking-normal">Motion</span>, 
                 <span className="bg-white/10 px-2 text-white italic normal-case tracking-normal ml-2">Precision</span>, and 
                 <span className="bg-white/10 px-2 text-white italic normal-case tracking-normal ml-2">Impact</span>.
              </h2>
              
              <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/[0.05] pt-12">
                 <div>
                    <h4 className="font-mono text-xs text-[#888] uppercase mb-6">Stack_</h4>
                    <p className="font-mono text-sm text-white leading-loose uppercase">
                       Next.js / React / TypeScript / WebGL / Framer Motion / Node.js
                    </p>
                 </div>
                 <div>
                    <h4 className="font-mono text-xs text-[#888] uppercase mb-6">Philosophy_</h4>
                    <p className="font-mono text-sm text-white leading-loose uppercase">
                       Form follows function. <br/>
                       Speed is a feature. <br/>
                       Simplicity is the ultimate sophistication.
                    </p>
                 </div>
              </div>
          </div>

       </div>
    </section>
  );
}

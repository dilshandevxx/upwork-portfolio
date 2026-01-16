"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] border-b border-white/[0.05]">
       
       {/* Main Content Grid */}
       <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.05] min-h-[60vh]">
          
          {/* CTA Column */}
          <div className="col-span-1 md:col-span-8 p-8 md:p-16 flex flex-col justify-between">
              <div>
                 <span className="font-mono text-xs text-[#ccff00] tracking-widest uppercase mb-4 block">
                    [ Get in Touch ]
                 </span>
                 <h2 className="text-5xl md:text-8xl font-bold font-display uppercase tracking-tighter text-[#e6e6e6] leading-[0.8]">
                    Let's Work<br/>Together
                 </h2>
              </div>

              <div className="mt-16">
                 <Link href="mailto:contact@example.com" className="group inline-flex items-center gap-4 text-xl md:text-2xl text-white font-mono hover:text-[#ccff00] transition-colors">
                    <span>hello@example.com</span>
                    <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col divide-y divide-white/[0.05]">
             
             {/* Socials */}
             <div className="flex-1 p-8 flex flex-col gap-4">
                 <span className="font-mono text-xs text-[#666] uppercase mb-4">/ Socials</span>
                 {["LinkedIn", "GitHub", "Twitter", "Instagram"].map(social => (
                    <Link key={social} href="#" className="font-display text-2xl md:text-3xl font-bold text-[#333] hover:text-white transition-colors uppercase">
                       {social}
                    </Link>
                 ))}
             </div>

             {/* Footer Info */}
             <div className="p-8 flex flex-col justify-end h-48 bg-[#0d0d0d]">
                <div className="flex justify-between items-end">
                   <div className="flex flex-col font-mono text-[10px] text-[#444] uppercase gap-1">
                      <span>© 2026 Dilshan Portfolio</span>
                      <span>All Rights Reserved</span>
                   </div>
                   <div className="font-mono text-[10px] text-[#444] uppercase text-right">
                      Local Time<br/>
                      Sri Lanka, LK
                   </div>
                </div>
             </div>
          </div>

       </div>
    </footer>
  );
}

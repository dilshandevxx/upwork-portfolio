"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <footer className="w-full bg-black text-white py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-secondary mb-6"
        >
          Get in Touch
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold font-display tracking-tighter mb-12 hover:text-neutral-400 transition-colors cursor-pointer"
        >
          LET'S WORK <br /> TOGETHER
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
        >
           <Link 
             href="mailto:contact@example.com"
             className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
           >
             <span className="text-lg">hello@example.com</span>
             <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
           </Link>
        </motion.div>
      </div>

      <div className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8">
          <Link href="#" className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1">
            LINKEDIN <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="#" className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1">
             GITHUB <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="#" className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1">
             UPWORK <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
        
        <p className="text-xs text-secondary">
          © 2026 Designed & Developed by [Name]
        </p>
      </div>
    </footer>
  );
}

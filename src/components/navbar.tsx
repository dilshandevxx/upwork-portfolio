"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      {/* Logo / Name */}
      <Link href="/" className="text-xl font-bold tracking-tighter uppercase z-50 mix-blend-difference text-white">
        Dilshan
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (Placeholder) */}
      <button className="md:hidden text-white uppercase text-xs tracking-widest">
        Menu
      </button>
    </motion.nav>
  );
}

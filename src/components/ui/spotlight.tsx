"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-40 left-0 right-0 mx-auto w-full max-w-4xl h-[80vh] z-0 flex flex-col items-center select-none",
        className
      )}
    >
      {/* Lamp Fixture */}
      <div className="relative z-20 w-full flex justify-center translate-y-12">
        {/* Wire */}
        <div className="absolute -top-40 h-40 w-[2px] bg-neutral-800" />
        
        {/* Lamp Shade */}
        <div className="relative">
             <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Shell */}
                <path d="M10 60L30 10H90L110 60H10Z" fill="#1a1a1a" />
                {/* Inner Glow/Bulb Area */}
                <ellipse cx="60" cy="60" rx="40" ry="10" fill={fill} fillOpacity="0.8" filter="blur(5px)" />
             </svg>
             {/* Bright Bulb Spot */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-white rounded-full blur-[8px]" />
        </div>
      </div>

      {/* Conical Light Beam */}
      <div 
        className="w-full h-full -translate-y-2 opacity-30 ml-1 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 0%, transparent 162deg, ${fill} 180deg, transparent 198deg)`,
          filter: "blur(40px)",
        }}
      />
      
      {/* Soft Glow Center */}
      <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"
      />
    </div>
  );
}

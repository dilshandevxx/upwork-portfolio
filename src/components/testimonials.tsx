"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A true visionary. The website exceeded our expectations in every way.",
    author: "Sarah Jenkins",
    role: "CEO, Lumina",
  },
  {
    quote: "Professional, efficient, and incredibly talented. Highly recommended.",
    author: "David Chen",
    role: "Founder, Aura Commerce",
  },
  {
    quote: "The attention to detail is unmatched. Our conversion rates have doubled.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Neon Estate",
  },
  {
    quote: "Exceptional work. The animations are smooth and the code is clean.",
    author: "Michael Chang",
    role: "CTO, Zenith Health",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 w-full bg-background overflow-hidden relative z-10">
      <div className="mb-16 px-4 md:px-12">
        <h3 className="text-xs uppercase tracking-widest text-secondary mb-4">
          Client Feedback
        </h3>
        <h2 className="text-4xl md:text-6xl font-bold font-display">
          Trusted by <br /> Industry Leaders
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[80vw] md:w-[40vw] flex-shrink-0 px-8 md:px-16 border-r border-neutral-800"
            >
              <p className="text-2xl md:text-4xl font-light text-balance whitespace-normal mb-8 leading-snug">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-lg font-medium">{testimonial.author}</p>
                <p className="text-sm text-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[80vw] md:w-[40vw] flex-shrink-0 px-8 md:px-16 border-r border-neutral-800"
            >
              <p className="text-2xl md:text-4xl font-light text-balance whitespace-normal mb-8 leading-snug">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-lg font-medium">{testimonial.author}</p>
                <p className="text-sm text-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";

const services = [
  {
    id: "01",
    title: "Web Design",
    description: "Creating visually stunning, user-centric designs that tell your brand's unique story. From wireframes to high-fidelity prototypes.",
    tags: ["UI/UX", "Prototyping", "Design Systems"],
  },
  {
    id: "02",
    title: "Development",
    description: "Building robust, scalable, and high-performance websites using the latest technologies. Clean code, SEO-optimized, and pixel-perfect.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "03",
    title: "Interactvity",
    description: "Adding life to your website with smooth animations and interactive elements that engage users and elevate the experience.",
    tags: ["GSAP", "Framer Motion", "WebGL"],
  },
  {
    id: "04",
    title: "SEO & Performance",
    description: "Optimizing your digital presence for search engines and speed, ensuring your message reaches the widest possible audience.",
    tags: ["Technical SEO", "Core Web Vitals", "Analytics"],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 md:px-12 w-full bg-background relative z-10 overflow-hidden">
      <Spotlight className="-top-40 left-0 opacity-20" fill="white" />
      <div className="flex flex-col mb-20 relative z-10">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-secondary mb-4"
        >
          My Expertise
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-display"
        >
          Services
        </motion.h2>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setActiveService(index)}
            onMouseLeave={() => setActiveService(null)}
            className="group border-t border-neutral-800 py-12 cursor-pointer relative overflow-hidden transition-colors duration-500 hover:bg-neutral-900/30"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 relative z-10">
              <span className="text-sm font-mono text-secondary group-hover:text-primary transition-colors duration-300">
                /{service.id}
              </span>
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-display font-medium group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <div className="md:w-1/3 overflow-hidden">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeService === index ? "auto" : 0,
                    opacity: activeService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-secondary text-lg mb-4 text-balance">
                    {service.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs border border-white/10 px-2 py-1 rounded-full text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
                 {/* Mobile simplified view (always visible on small screens if needed, but keeping hidden for cleaner look or could be handled with CSS media queries if desired. For now, following hover logic or click for mobile) */}
              </div>

              <div className="hidden md:flex items-center justify-center">
                 <Plus className={`w-6 h-6 text-secondary transition-transform duration-300 ${activeService === index ? "rotate-45 text-white" : ""}`} />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-neutral-800" />
      </div>
    </section>
  );
}

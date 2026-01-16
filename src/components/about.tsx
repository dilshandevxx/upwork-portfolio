import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Node.js",
  "AWS",
  "Figma",
];

export function About() {
  return (
    <section className="py-24 px-4 md:px-12 w-full bg-neutral-900 border-t border-white/5 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 opacity-20" fill="white" />
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 relative z-10">
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-secondary mb-8"
          >
            About Me
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl leading-relaxed font-light text-neutral-300 text-balance"
          >
            I am a creative developer passionate about building digital products that matter. 
            With a focus on <span className="text-white font-medium">motion</span>, <span className="text-white font-medium">aesthetics</span>, and <span className="text-white font-medium">performance</span>, 
            I help brands stand out in the digital noise.
          </motion.p>
        </div>

        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-secondary mb-8"
          >
            Capabilities
          </motion.h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full group-hover:bg-primary transition-colors" />
                <span className="text-neutral-400 group-hover:text-white transition-colors">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

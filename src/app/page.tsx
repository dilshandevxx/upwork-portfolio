import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}

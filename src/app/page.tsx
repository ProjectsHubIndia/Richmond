import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      <Hero />
      
      <div className="relative z-10">
        <About />
        <Stats />
        <Products />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}

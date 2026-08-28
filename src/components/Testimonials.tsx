"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, TechCorp",
    content: "Switching to Richmond LED was the best decision for our new warehouse. The lighting quality is unmatched, and we've already seen a 40% reduction in our energy costs.",
  },
  {
    name: "David Chen",
    role: "Architect, Studio North",
    content: "As an architect, lighting is everything. Richmond LED provides the perfect balance of aesthetic appeal and functional brightness that my clients demand.",
  },
  {
    name: "Elena Rodriguez",
    role: "Facility Director",
    content: "The smart illumination features are incredible. Being able to adjust color temperatures based on the time of day has drastically improved employee focus.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-black border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[var(--color-brand-blue)]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-display)]">
            Trusted by{" "}
            <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] relative inline-block pr-6">
              Industry Leaders
              <Quote className="absolute -top-5 right-0 w-8 h-8 text-[var(--color-brand-cyan)]/40" />
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:border-[var(--color-brand-cyan)]/30 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,1)] transition-all" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <p className="font-bold text-white group-hover:text-[var(--color-brand-cyan)] transition-colors">{t.name}</p>
                <p className="text-white/50 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

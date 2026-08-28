"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Installations Worldwide" },
  { value: "80%", label: "Energy Savings" },
  { value: "50+", label: "Awards Won" },
  { value: "10 Yrs", label: "Product Warranty" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/10 bg-black relative overflow-hidden">
      {/* Intense center glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)]/5 to-transparent blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 group relative"
            >
              {/* Subtle hover glow behind numbers */}
              <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/0 group-hover:bg-[var(--color-brand-cyan)]/10 blur-xl transition-colors duration-500 rounded-full" />
              
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:text-[var(--color-brand-cyan)] group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 font-[family-name:var(--font-display)] relative z-10">
                {stat.value}
              </h3>
              <p className="text-[var(--color-brand-cyan)] text-sm md:text-base font-semibold tracking-[0.2em] uppercase relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

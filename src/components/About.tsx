"use client";

import { Leaf, ShieldCheck, Lightbulb, Home as HomeIcon, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";

const residentialFeatures = [
  {
    icon: <Leaf className="w-8 h-8 text-[var(--color-brand-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />,
    title: "Energy Efficient",
    description: "Save up to 80% on household energy bills with our cutting-edge LED technology designed for homes.",
  },
  {
    icon: <HomeIcon className="w-8 h-8 text-[var(--color-brand-blue)] drop-shadow-[0_0_8px_rgba(0,85,255,0.8)]" />,
    title: "Family Safe",
    description: "Zero glare, low heat emission, and completely shatter-proof designs ensure safety for your entire family.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />,
    title: "Smart Home Ready",
    description: "Experience lighting that adapts to your daily routine with smart controls and precision dimming.",
  },
];

const commercialFeatures = [
  {
    icon: <Activity className="w-8 h-8 text-[var(--color-brand-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />,
    title: "Cost Efficient",
    description: "Maximize ROI with lighting that significantly reduces overhead and operational expenses.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-brand-blue)] drop-shadow-[0_0_8px_rgba(0,85,255,0.8)]" />,
    title: "Built to Last",
    description: "Industrial-grade durability ensures our lights continue shining bright through rigorous commercial demands.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />,
    title: "Advanced Controls",
    description: "Easily manage entire building lighting zones, motion sensing, and automated schedules.",
  },
];

export default function About() {
  const { category } = useCategory();
  const features = category === "residential" ? residentialFeatures : commercialFeatures;

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--background)]">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Hanging Lamp Effects (Dome Style) */}
      
      {/* LEFT HANGING LAMP (Centered on mobile) */}
      <div className="absolute top-0 left-1/2 md:left-[20%] -translate-x-1/2 flex flex-col items-center z-20 scale-[0.8] md:scale-100 origin-top">
        {/* Wire */}
        <div className="w-[2px] h-24 bg-gradient-to-b from-zinc-900 to-zinc-600 shadow-[0_0_5px_black]" />
        {/* Dome Fixture */}
        <div className="w-28 h-14 bg-zinc-900 rounded-t-full flex items-end justify-center shadow-[0_15px_30px_rgba(0,0,0,1)] relative z-10">
          {/* Core Glowing diffuser */}
          <div className="absolute bottom-0 translate-y-1/2 w-[95%] h-4 bg-white rounded-[100%] shadow-[0_0_20px_5px_rgba(255,255,255,1)] blur-[1px] z-10" />
          {/* Wide intense halo / bloom spreading from the light */}
          <div className="absolute bottom-0 translate-y-1/2 w-[200%] h-16 bg-white/50 rounded-[100%] blur-[30px] z-0 pointer-events-none" />
        </div>
      </div>
      {/* Left Light Beam (Centered on mobile) */}
      <div className="absolute top-[7.5rem] md:top-[9rem] left-1/2 md:left-[20%] -translate-x-1/2 w-[90vw] md:w-[55vw] h-[85vh] bg-gradient-to-b from-white/40 via-[var(--color-brand-cyan)]/15 to-transparent blur-[70px] rounded-[100%] pointer-events-none z-0" />

      {/* RIGHT HANGING LAMP (Hidden on mobile) */}
      <div className="hidden md:flex absolute top-0 right-[20%] translate-x-1/2 flex-col items-center z-20">
        {/* Wire */}
        <div className="w-[2px] h-32 bg-gradient-to-b from-zinc-900 to-zinc-600 shadow-[0_0_5px_black]" />
        {/* Dome Fixture */}
        <div className="w-28 h-14 bg-zinc-900 rounded-t-full flex items-end justify-center shadow-[0_15px_30px_rgba(0,0,0,1)] relative z-10">
          {/* Core Glowing diffuser */}
          <div className="absolute bottom-0 translate-y-1/2 w-[95%] h-4 bg-white rounded-[100%] shadow-[0_0_20px_5px_rgba(255,255,255,1)] blur-[1px] z-10" />
          {/* Wide intense halo / bloom spreading from the light */}
          <div className="absolute bottom-0 translate-y-1/2 w-[200%] h-16 bg-white/50 rounded-[100%] blur-[30px] z-0 pointer-events-none" />
        </div>
      </div>
      {/* Right Light Beam (Hidden on mobile) */}
      <div className="hidden md:block absolute top-[11rem] right-[20%] translate-x-1/2 w-[55vw] h-[85vh] bg-gradient-to-b from-white/40 via-[var(--color-brand-blue)]/15 to-transparent blur-[70px] rounded-[100%] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-display)]">
            Why Choose <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Richmond LED</span>?
          </h2>
          <p className="text-white/60 text-lg">
            {category === "residential" 
              ? "We provide lighting solutions that transform your home, creating comfort and safety for your family."
              : "We provide comprehensive illumination solutions that transform commercial spaces, increase productivity, and reduce environmental impact."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={`${category}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-[var(--color-brand-cyan)]/30 group"
            >
              <div className="p-4 rounded-xl bg-white/5 mb-6 inline-block group-hover:bg-[var(--color-brand-cyan)]/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-brand-cyan)] transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

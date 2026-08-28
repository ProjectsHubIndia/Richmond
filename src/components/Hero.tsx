"use client";

import { ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  // "/assests/bulb.jpg",
  "/assests/hall.jpg",
  "/assests/outdoor.jpg",
  "/assests/linebulb.jpg",
  "/assests/office.avif"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] min-h-[700px] max-h-[1000px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[currentIndex]} 
              alt="Richmond LED"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
            <Zap className="w-4 h-4 text-[var(--color-brand-cyan)]" />
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">
              The Future of Illumination
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-[family-name:var(--font-display)]">
            Illuminate Your World with <br className="hidden md:block" />
            <span className="text-gradient">Richmond LED</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed text-shadow-sm">
            Premium, energy-efficient LED lighting solutions designed for modern commercial, residential, and industrial spaces.
          </p>
          

        </motion.div>
      </div>
      


    </section>
  );
}

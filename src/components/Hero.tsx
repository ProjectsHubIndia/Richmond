"use client";

import { ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCategory } from "@/context/CategoryContext";

const residentialImages = [
  "/assests/residencial.jpg",
  "/assests/residencial2.jpg",
  "/assests/room.jpg",
  "/assests/strairs.jpg",
];

const commercialImages = [
  "/assests/corporate.jpg",
  "/assests/corporate2.jpg",
  "/assests/office.avif",
  "/assests/hall.jpg",
];

export default function Hero() {
  const { category } = useCategory();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = category === "residential" ? residentialImages : commercialImages;

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[95vh] min-h-[700px] max-h-[1000px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${currentIndex}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[currentIndex]} 
              alt={`Richmond LED ${category} lighting`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse border border-white/10">
              <Zap className="w-4 h-4 text-[var(--color-brand-cyan)]" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/90">
                {category === "residential" ? "Beautiful Home Lighting" : "Professional Workspaces"}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-[family-name:var(--font-display)] text-white">
              {category === "residential" ? "Transform Your Home with" : "Power Your Business with"} <br className="hidden md:block" />
              <span className="text-gradient">Richmond LED</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed text-shadow-sm">
              {category === "residential" 
                ? "Create the perfect ambiance for your living spaces with our premium residential LED lighting." 
                : "High-performance, energy-efficient commercial lighting solutions designed for modern spaces."}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

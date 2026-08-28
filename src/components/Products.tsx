"use client";

import { ArrowUpRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    category: "Commercial",
    title: "Hall Lights",
    description: "Elegant and bright lighting solutions perfect for large halls and atriums.",
    image: "/assests/hall.jpg",
  },
  {
    category: "Corporate",
    title: "Office Lights",
    description: "Sleek, glare-free LED panels designed for maximum workplace productivity.",
    image: "/assests/office.avif",
  },
  {
    category: "Residential",
    title: "Room Lights",
    description: "Warm, ambient lighting to make any bedroom or living room feel cozy.",
    image: "/assests/room.jpg",
  },
  {
    category: "Outdoor",
    title: "Outdoor Lighting",
    description: "Durable, weather-resistant street and area lights designed to withstand the elements.",
    image: "/assests/outdoor.jpg",
  },
  {
    category: "Landscape",
    title: "Garden Lighting",
    description: "Sleek, atmospheric lighting that seamlessly blends into your outdoor garden aesthetic.",
    image: "/assests/garden.jpg",
  },
  {
    category: "Interior",
    title: "Ceiling Lights",
    description: "Modern flush-mount and recessed ceiling lights for a clean, minimalist look.",
    image: "/assests/ceiling.jpeg",
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-display)] flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>Our Signature</span>
              <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Collections</span>
              <Zap className="w-8 h-8 text-[var(--color-brand-cyan)] animate-pulse" />
            </h2>
            <p className="text-white/60 text-lg">
              Explore our range of premium LED products, engineered for specific environments and rigorous demands.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[var(--color-brand-cyan)] hover:text-white transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
            View All Products <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass cursor-pointer border-[var(--color-brand-border)] hover:border-[var(--color-brand-cyan)]/50 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(0,85,255,0.2)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <span className="text-[var(--color-brand-cyan)] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] text-sm font-semibold uppercase tracking-wider mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors text-white/90">
                  {product.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 group-hover:text-white/80 transition-colors">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

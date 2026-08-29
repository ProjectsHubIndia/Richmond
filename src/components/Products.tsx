"use client";

import { ArrowUpRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";

const residentialProducts = [
  {
    category: "Residential",
    title: "Premium Lighting",
    description:
      "Elegant residential lighting to elevate the aesthetics of your home.",
    image: "/assests/residencial.jpg",
  },
  {
    category: "Residential",
    title: "Ambient Lights",
    description:
      "Warm, ambient lighting to make any bedroom or living room feel cozy.",
    image: "/assests/residencial2.jpg",
  },
  {
    category: "Landscape",
    title: "Garden Lighting",
    description:
      "Sleek, atmospheric lighting that seamlessly blends into your outdoor garden aesthetic.",
    image: "/assests/residencial3.jpg",
  },
  {
    category: "Interior",
    title: "Ceiling Lights",
    description:
      "Modern flush-mount and recessed ceiling lights for a clean, minimalist look.",
    image: "/assests/recidencial4.jpg",
  },
  {
    category: "Architecture",
    title: "Staircase Lighting",
    description:
      "Elegant step and wall lights to safely and beautifully illuminate your stairways.",
    image: "/assests/strairs.jpg",
  },
  {
    category: "Bedroom",
    title: "Room Lighting",
    description:
      "Soft and adjustable lighting solutions perfectly suited for a relaxing bedroom environment.",
    image: "/assests/room.jpg",
  },
];

const commercialProducts = [
  {
    category: "Commercial",
    title: "Hall Lights",
    description:
      "Elegant and bright lighting solutions perfect for large halls and atriums.",
    image: "/assests/hall.jpg",
  },
  {
    category: "Corporate",
    title: "Office Lights",
    description:
      "Sleek, glare-free LED panels designed for maximum workplace productivity.",
    image: "/assests/office.avif",
  },

  {
    category: "Corporate",
    title: "Meeting Room Lights",
    description:
      "Professional lighting to enhance focus and collaboration in meeting spaces.",
    image: "/assests/corporate.jpg",
  },
  {
    category: "Corporate",
    title: "Workstation Lights",
    description:
      "Task lighting solutions designed to reduce eye strain for corporate professionals.",
    image: "/assests/corporate2.jpg",
  },
  {
    category: "Corporate",
    title: "Reception Lighting",
    description:
      "Welcoming and impressive lighting for corporate lobbies and reception areas.",
    image: "/assests/corporate3.jpg",
  },
  {
    category: "Corporate",
    title: "Corridor Lighting",
    description:
      "Efficient and reliable illumination for office corridors and walkways.",
    image: "/assests/corporate4.jpg",
  },
];

export default function Products() {
  const { category } = useCategory();
  const products =
    category === "residential" ? residentialProducts : commercialProducts;

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-display)] flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>
                {category === "residential" ? "Home Lighting" : "Commercial"}
              </span>
              <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                Collections
              </span>
              <Zap className="w-8 h-8 text-[var(--color-brand-cyan)] animate-pulse" />
            </h2>
            <p className="text-white/60 text-lg">
              Explore our range of premium{" "}
              {category === "residential" ? "home" : "business"} LED products,
              engineered for specific environments and rigorous demands.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[var(--color-brand-cyan)] hover:text-white transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
            View All Products <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={`${category}-${index}`}
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

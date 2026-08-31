"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Zap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";

const residentialProducts = [
  {
    category: "Residential",
    title: "Premium Lighting",
    description:
      "Elegant residential lighting to elevate the aesthetics of your home.",
    image: "/assests/residencial.jpg",
    price: "₹ 12,499",
    features: ["Dimmable LED", "Energy Efficient", "Smart Home Compatible"],
    specifications: "15W | 1200 Lumens | 3000K Warm White"
  },
  {
    category: "Residential",
    title: "Ambient Lights",
    description:
      "Warm, ambient lighting to make any bedroom or living room feel cozy.",
    image: "/assests/residencial2.jpg",
    price: "₹ 8,999",
    features: ["Soft Glow", "Easy Installation", "Flicker-Free"],
    specifications: "10W | 800 Lumens | 2700K Soft White"
  },
  {
    category: "Landscape",
    title: "Garden Lighting",
    description:
      "Sleek, atmospheric lighting that seamlessly blends into your outdoor garden aesthetic.",
    image: "/assests/residencial3.jpg",
    price: "₹ 18,999",
    features: ["IP65 Waterproof", "Solar Powered Option", "Auto On/Off"],
    specifications: "5W | 400 Lumens | 4000K Natural White"
  },
  {
    category: "Interior",
    title: "Ceiling Lights",
    description:
      "Modern flush-mount and recessed ceiling lights for a clean, minimalist look.",
    image: "/assests/recidencial4.jpg",
    price: "₹ 11,499",
    features: ["Ultra-Thin Design", "Wide Beam Angle", "Anti-Glare"],
    specifications: "20W | 1800 Lumens | 5000K Cool White"
  },
  {
    category: "Architecture",
    title: "Staircase Lighting",
    description:
      "Elegant step and wall lights to safely and beautifully illuminate your stairways.",
    image: "/assests/strairs.jpg",
    price: "₹ 4,499",
    features: ["Motion Sensor", "Low Voltage", "Eye-Protection"],
    specifications: "3W | 150 Lumens | 3000K Warm White"
  },
  {
    category: "Bedroom",
    title: "Room Lighting",
    description:
      "Soft and adjustable lighting solutions perfectly suited for a relaxing bedroom environment.",
    image: "/assests/room.jpg",
    price: "₹ 9,999",
    features: ["Color Changing", "App Control", "Voice Assistant Support"],
    specifications: "12W | 1000 Lumens | RGB+W"
  },
];

const commercialProducts = [
  {
    category: "Commercial",
    title: "Hall Lights",
    description:
      "Elegant and bright lighting solutions perfect for large halls and atriums.",
    image: "/assests/hall.jpg",
    price: "₹ 24,999",
    features: ["High Output", "Low Maintenance", "Surge Protection"],
    specifications: "50W | 5000 Lumens | 5000K Daylight"
  },
  {
    category: "Corporate",
    title: "Office Lights",
    description:
      "Sleek, glare-free LED panels designed for maximum workplace productivity.",
    image: "/assests/office.avif",
    price: "₹ 6,999",
    features: ["UGR<19 Glare Free", "Flicker-Free Driver", "Slim Profile"],
    specifications: "36W | 3600 Lumens | 4000K Natural White"
  },

  {
    category: "Corporate",
    title: "Meeting Room Lights",
    description:
      "Professional lighting to enhance focus and collaboration in meeting spaces.",
    image: "/assests/corporate.jpg",
    price: "₹ 14,499",
    features: ["Tunable White", "DALI Compatible", "Modern Aesthetics"],
    specifications: "40W | 4000 Lumens | 2700K-6500K Adjustable"
  },
  {
    category: "Corporate",
    title: "Workstation Lights",
    description:
      "Task lighting solutions designed to reduce eye strain for corporate professionals.",
    image: "/assests/corporate2.jpg",
    price: "₹ 8,999",
    features: ["Adjustable Arm", "Touch Control", "Eye-Care Tech"],
    specifications: "10W | 800 Lumens | 4000K Natural White"
  },
  {
    category: "Corporate",
    title: "Reception Lighting",
    description:
      "Welcoming and impressive lighting for corporate lobbies and reception areas.",
    image: "/assests/corporate3.jpg",
    price: "₹ 45,999",
    features: ["Statement Piece", "Customizable Length", "High CRI"],
    specifications: "60W | 6000 Lumens | 3000K Warm White"
  },
  {
    category: "Corporate",
    title: "Corridor Lighting",
    description:
      "Efficient and reliable illumination for office corridors and walkways.",
    image: "/assests/corporate4.jpg",
    price: "₹ 5,499",
    features: ["Continuous Run", "Emergency Backup", "Microwave Sensor"],
    specifications: "20W | 2000 Lumens | 4000K Natural White"
  },
];

export default function Products() {
  const { category } = useCategory();
  const [selectedProduct, setSelectedProduct] = useState<typeof residentialProducts[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const products =
    category === "residential" ? residentialProducts : commercialProducts;

  return (
    <>
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
              onClick={() => setSelectedProduct(product)}
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

    {mounted && createPortal(
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-hidden rounded-2xl glass border border-[var(--color-brand-cyan)]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col md:flex-row bg-[var(--background)]/95"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:text-[var(--color-brand-cyan)] hover:bg-black/80 transition-all shadow-lg border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-10 flex flex-col relative overflow-y-auto">
                <span className="text-[var(--color-brand-cyan)] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] text-sm font-semibold uppercase tracking-wider mb-3 block">
                  {selectedProduct.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {selectedProduct.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  {selectedProduct.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-[var(--color-brand-cyan)] text-sm font-semibold mb-2">SPECIFICATIONS</h4>
                  <p className="text-white/80 text-sm">{selectedProduct.specifications}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[var(--color-brand-cyan)] text-sm font-semibold mb-2">FEATURES</h4>
                  <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                    {selectedProduct.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                

                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="mt-auto self-start px-8 py-3 rounded-full bg-[var(--color-brand-cyan)]/10 border border-[var(--color-brand-cyan)]/30 text-[var(--color-brand-cyan)] font-medium hover:bg-[var(--color-brand-cyan)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}

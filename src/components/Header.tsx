"use client";

import { motion } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";
import { Home, Building2 } from "lucide-react";

export default function Header() {
  const { category, setCategory } = useCategory();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="container mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between border border-white/10 shadow-lg backdrop-blur-md">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
              Richmond<span className="text-[var(--color-brand-cyan)]">LED</span>
            </span>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center bg-black/40 rounded-full p-1 relative border border-white/5">
            <div
              className={`absolute inset-y-1 w-[130px] rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-lg transition-transform duration-300 ease-out`}
              style={{
                transform: category === "residential" ? "translateX(0)" : "translateX(100%)",
              }}
            />
            
            <button
              onClick={() => setCategory("residential")}
              className={`relative z-10 flex items-center justify-center gap-2 w-[130px] py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${
                category === "residential" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              <Home className="w-4 h-4" />
              Residential
            </button>
            
            <button
              onClick={() => setCategory("commercial")}
              className={`relative z-10 flex items-center justify-center gap-2 w-[130px] py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${
                category === "commercial" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Commercial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

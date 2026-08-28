"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black overflow-hidden">
      {/* CONTACT FORM AREA */}
      <div className="relative pt-24 pb-24 border-t border-[var(--color-brand-cyan)]/20">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-blue)]/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-display)]">
                Let's{" "}
                <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,85,255,0.4)]">
                  Connect
                </span>
              </h2>
              <p className="text-white/60 mb-8 max-w-md">
                Ready to upgrade your lighting? Contact our team of experts
                today for a free consultation and energy audit.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[var(--color-brand-cyan)]/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                    <Phone className="w-5 h-5 text-[var(--color-brand-cyan)]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm group-hover:text-[var(--color-brand-cyan)] transition-colors">
                      Call Us
                    </p>
                    <p className="font-medium text-lg tracking-wide">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[var(--color-brand-blue)]/10 group-hover:shadow-[0_0_15px_rgba(0,85,255,0.3)] transition-all">
                    <Mail className="w-5 h-5 text-[var(--color-brand-blue)]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm group-hover:text-[var(--color-brand-blue)] transition-colors">
                      Email
                    </p>
                    <p className="font-medium text-lg tracking-wide">
                      sales@richmondled.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[var(--color-brand-cyan)]/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                    <MapPin className="w-5 h-5 text-white drop-shadow-[0_0_5px_white]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm group-hover:text-white transition-colors">
                      Location
                    </p>
                    <p className="font-medium text-lg tracking-wide">
                      123 Innovation Drive, Tech City
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border-[var(--color-brand-cyan)]/20 shadow-[0_0_40px_rgba(0,240,255,0.05)]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-[var(--color-brand-cyan)]" />
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-[var(--color-brand-cyan)] font-medium tracking-wider uppercase text-xs">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-brand-cyan)] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[var(--color-brand-cyan)] font-medium tracking-wider uppercase text-xs">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-brand-cyan)] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-brand-cyan)] font-medium tracking-wider uppercase text-xs">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-brand-cyan)] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-brand-cyan)] font-medium tracking-wider uppercase text-xs">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-brand-cyan)] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="group relative w-full overflow-hidden rounded-lg mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-blue)] group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative z-10 py-4 text-white font-bold text-lg tracking-wider">
                    SEND MESSAGE
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ACTUAL FOOTER (With Hyper-Realistic Spotlight Washes) */}
      <footer className="relative pt-16 pb-12 bg-black z-10 border-t border-[var(--color-brand-cyan)]/20 overflow-hidden">
        {/* Left Footer Spotlight (Hidden on mobile to prevent crowding) */}
        <div className="hidden md:flex absolute top-0 left-[15%] -translate-x-1/2 flex-col items-center pointer-events-none z-0 scale-[0.6] md:scale-100 origin-top">
          <div className="w-40 h-2 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,1)] blur-[2px]" />
          <div className="absolute top-0 w-[250px] h-16 bg-white/50 rounded-full blur-[30px]" />
          <div className="w-[40vw] h-[550px] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-[70px] rounded-[100%] -mt-4" />
        </div>

        {/* Center Footer Spotlight (Primary wash on mobile) */}
        <div className="absolute top-0 left-[50%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-0 scale-[0.8] md:scale-100 origin-top">
          <div className="w-40 h-2 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,1)] blur-[2px]" />
          <div className="absolute top-0 w-[250px] h-16 bg-white/50 rounded-full blur-[30px]" />
          <div className="w-[80vw] md:w-[40vw] h-[550px] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-[70px] rounded-[100%] -mt-4" />
        </div>

        {/* Right Footer Spotlight (Hidden on mobile to prevent crowding) */}
        <div className="hidden md:flex absolute top-0 right-[15%] translate-x-1/2 flex-col items-center pointer-events-none z-0 scale-[0.6] md:scale-100 origin-top">
          <div className="w-40 h-2 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,1)] blur-[2px]" />
          <div className="absolute top-0 w-[250px] h-16 bg-white/50 rounded-full blur-[30px]" />
          <div className="w-[40vw] h-[550px] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-[70px] rounded-[100%] -mt-4" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-10 text-sm text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] mb-4">
                Richmond{" "}
                <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  LED
                </span>
              </h2>
              <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
                Illuminating the future with premium, energy-efficient LED
                lighting solutions designed for modern commercial, residential,
                and industrial spaces.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                {["Fb", "X", "Ig", "In"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 font-bold hover:text-[var(--color-brand-cyan)] hover:bg-[var(--color-brand-cyan)]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[var(--color-brand-cyan)] font-bold mb-6 tracking-wider uppercase text-xs">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Our Products",
                  "Projects",
                  "Careers",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white transition-colors inline-block hover:translate-x-2 md:hover:translate-x-2 transform duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[var(--color-brand-cyan)] font-bold mb-6 tracking-wider uppercase text-xs">
                Support
              </h4>
              <ul className="space-y-4">
                {[
                  "FAQ",
                  "Warranty",
                  "Shipping",
                  "Returns",
                  "Privacy Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white transition-colors inline-block hover:translate-x-2 md:hover:translate-x-2 transform duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs tracking-wider">
            <p>© 2026 Richmond LED. All rights reserved.</p>
            <p>Designed for brilliance.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

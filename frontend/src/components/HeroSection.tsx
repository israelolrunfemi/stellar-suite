"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import screenshotStudio from "@/assets/screenshot-studio.png";
import screenshotCanvas from "@/assets/screenshot-canvas.png";
import { EXTENSION_ITEM_URL } from "@/lib/constants";

const slides = [
  {
    src: screenshotStudio,
    alt: "Kit Studio — Soroban development in VS Code",
    label: "Kit Studio",
    sub: "VS Code",
  },
  {
    src: screenshotCanvas,
    alt: "Kit Canvas — Soroban development in the browser",
    label: "Kit Canvas",
    sub: "Browser",
  },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="hero"
      className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 px-6"
      style={{ background: "hsl(var(--hero-bg))" }}
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-[1.08] tracking-tight mb-6 animate-fade-up"
          style={{ color: "hsl(var(--hero-foreground))" }}
        >
          The complete toolkit
          <br />
          for <span className="text-gradient-blue">Soroban</span>
        </h1>

        <p
          className="text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-80"
          style={{ color: "hsl(var(--hero-foreground))", animationDelay: "0.1s" }}
        >
          Build, deploy, and simulate Stellar smart contracts — in your editor
          with <strong>Kit Studio</strong> or straight from the browser with{" "}
          <strong>Kit Canvas</strong>. Same power, your choice.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a href={EXTENSION_ITEM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
            Try Studio
          </a>
          <a href="https://canvas.stellarkit.dev" target="_blank" rel="noopener noreferrer" className="btn-outline-light text-base">
            Try Canvas
          </a>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.label} className="min-w-full">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    className="w-full"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Label */}
          <p className="mt-4 text-sm font-display font-semibold opacity-90" style={{ color: "hsl(var(--hero-foreground))" }}>
            {slides[active].label}
            <span className="font-body font-normal opacity-60 ml-2">{slides[active].sub}</span>
          </p>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

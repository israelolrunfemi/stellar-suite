"use client";

import Image from "next/image";
import screenshotStudio from "@/assets/screenshot-studio.png";
import screenshotCanvas from "@/assets/screenshot-canvas.png";
import { Monitor, Globe, ArrowRight } from "lucide-react";
import { EXTENSION_ITEM_URL } from "@/lib/constants";

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold font-display text-primary mb-2">
            ● Your workflow, your way
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
            Two ways to build. One ecosystem.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Start a contract in Kit Canvas during a meeting, then pick it up in Kit Studio
            for deep work. Everything stays in sync.
          </p>
        </div>

        {/* Kit Studio — text left, screenshot right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold font-display text-foreground mb-6">
              <Monitor size={14} />
              Kit Studio
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4 leading-tight">
              Deep development,
              <br />
              right in VS Code
            </h3>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
              Kit Studio is a full-featured VS Code extension that brings Soroban
              development into your editor. Deploy contracts, simulate transactions,
              run tests, manage accounts — all without touching a terminal.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "One-click deploy to testnet or mainnet",
                "Inline simulation with fee & resource estimates",
                "Integrated test runner with coverage reports",
                "Secure key management via OS keychain",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={EXTENSION_ITEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold font-display text-primary hover:underline"
            >
              Install Kit Studio
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src={screenshotStudio}
              alt="Kit Studio — deploying a Soroban contract in VS Code"
              className="w-full"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Kit Canvas — screenshot left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src={screenshotCanvas}
              alt="Kit Canvas — browser-based Soroban IDE"
              className="w-full"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold font-display text-foreground mb-6">
              <Globe size={14} />
              Kit Canvas
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4 leading-tight">
              Code in the browser.
              <br />
              No setup. No installs.
            </h3>
            <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
              Kit Canvas is a browser-based Soroban IDE inspired by Remix. Write Rust
              contracts, compile to WASM, deploy to any network, and interact with your
              contracts — all from a single browser tab.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Full Rust editor with syntax highlighting & autocomplete",
                "In-browser WASM compilation — no local toolchain",
                "Deploy & interact with contracts via visual forms",
                "Share projects with a link for instant collaboration",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 text-sm font-semibold font-display text-primary hover:underline"
            >
              Open Kit Canvas
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

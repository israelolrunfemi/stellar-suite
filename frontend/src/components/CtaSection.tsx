import { EXTENSION_ITEM_URL, EXTENSION_INSTALL_ID } from "@/lib/constants";
import { Monitor, Globe } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="get-started" className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-foreground mb-4">
          Start building in seconds
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Pick your surface. Both are free. No configuration required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Kit Studio */}
          <div className="rounded-2xl border border-border bg-background p-8 text-left hover:shadow-lg transition-shadow">
            <div className="icon-box-md rounded-xl mb-5">
              <Monitor className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Kit Studio
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-6">
              For deep development sessions. Install in VS Code and you&apos;re
              ready.
            </p>
            <div className="rounded-lg bg-muted border border-border px-4 py-3 font-mono text-xs text-foreground mb-5">
              <span className="text-muted-foreground select-none">$ </span>
              ext install {EXTENSION_INSTALL_ID}
            </div>
            <a
              href={EXTENSION_ITEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !text-sm"
            >
              Install Kit Studio
            </a>
          </div>

          {/* Kit Canvas */}
          <div className="rounded-2xl border border-border bg-background p-8 text-left hover:shadow-lg transition-shadow">
            <div className="icon-box-md rounded-xl mb-5">
              <Globe className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Kit Canvas
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-6">
              For quick prototyping &amp; collaboration. Open your browser and
              go.
            </p>
            <div className="rounded-lg bg-muted border border-border px-4 py-3 font-mono text-xs text-foreground mb-5">
              <span className="text-muted-foreground select-none">→ </span>
              canvas.stellarkit.dev
            </div>
            <a href="#" className="btn-primary w-full !text-sm">
              Open Kit Canvas
            </a>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

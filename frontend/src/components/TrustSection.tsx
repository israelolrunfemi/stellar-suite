const TrustSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-lg font-display font-bold text-foreground mb-12">
          Trusted by developers. Built for Stellar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-display font-extrabold text-foreground">500+</span>
            <span className="text-sm font-body text-muted-foreground mt-1">Active developers</span>
          </div>
          <div className="flex flex-col items-center border-x-0 md:border-x border-border px-8">
            <span className="text-4xl font-display font-extrabold text-foreground">10k+</span>
            <span className="text-sm font-body text-muted-foreground mt-1">Contracts deployed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-display font-extrabold text-foreground">2</span>
            <span className="text-sm font-body text-muted-foreground mt-1">Products — Studio &amp; Canvas</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
            &quot;Kit Studio in VS Code is my daily driver. And when I need to quickly prototype something on a new machine, Kit Canvas is right there in the browser.&quot;
          </blockquote>
          <div className="mt-6">
            <p className="font-display font-semibold text-foreground">Alex Chen</p>
            <p className="text-sm font-body text-muted-foreground">Stellar Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

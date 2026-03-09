const FeaturesSection = () => {
  return (
    <section
      id="products"
      className="section-padding bg-muted/50 py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-foreground">
            Everything you need to build on Soroban
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            One platform, two surfaces. Every feature works seamlessly whether
            you&apos;re in VS Code or the browser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

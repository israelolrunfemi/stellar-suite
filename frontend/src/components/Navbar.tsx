"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SearchDialog } from "./SearchDialog";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const productsHref = pathname === "/" ? "#products" : "/#products";
  const getStartedHref = pathname === "/" ? "#hero" : "/#hero";

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-xl font-display font-extrabold text-foreground tracking-tight">
              Stellar Kit
            </span>
          </Link>
          <div className="hidden md:block">
            <SearchDialog />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href={productsHref} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={getStartedHref}
            className="btn-primary !py-2.5 !px-6 !text-sm !rounded-lg"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <div className="py-2">
            <SearchDialog />
          </div>
          <a href={productsHref} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Products</a>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Blog</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">FAQ</Link>
          <a href={getStartedHref} onClick={() => setOpen(false)} className="btn-primary !text-sm text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

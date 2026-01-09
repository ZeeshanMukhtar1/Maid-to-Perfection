"use client";

import React from "react";
import { Sparkles, Phone, Info, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* New Cleaning Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="bg-brand p-1.5 rounded-xl shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
            {/* Swapped Home icon for Sparkles to represent cleaning */}
            <Sparkles
              className="text-brand-foreground"
              size={20}
            />
          </div>
          <span className="text-xl font-black italic uppercase tracking-tighter text-foreground">
            Maid <span className="text-brand">To Perfection</span>
          </span>
        </Link>

        {/* Navigation Links - Updated for Maid to Perfection */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-brand transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-brand transition-colors"
          >
            <Info size={12} />
            About
          </Link>
          <Link
            href="/gallery"
            className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-brand transition-colors"
          >
            <ImageIcon size={12} />
            Portfolio
          </Link>
        </nav>

        {/* Action Buttons - Updated for Instant Booking Flow */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0800123456"
            className="hidden sm:flex items-center gap-2 text-[10px] font-black tracking-widest bg-muted/20 px-4 py-2 rounded-full border border-border text-foreground hover:border-brand/50 transition-all"
          >
            <Phone
              size={12}
              className="text-brand"
            />
            0800 123 456
          </a>

          <Link
            href="/#quote"
            className="bg-brand text-brand-foreground text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-lg shadow-brand/40 hover:brightness-110 active:scale-95 transition-all"
          >
            {/* Updated text to reflect the "Instant response" goal of the system */}
            Get Instant Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

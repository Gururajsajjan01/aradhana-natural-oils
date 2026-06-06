"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Bottles", "/bottles"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-cream/88 backdrop-blur-xl dark:border-white/10 dark:bg-[#07150a]/88">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="/#home" className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpeg"
            alt="Aradhana Natural Oils logo"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full border-2 border-gold object-cover"
            priority
          />
          <div>
            <p className="font-heading text-base font-bold leading-tight text-forest dark:text-cream">
              Aradhana Natural Oils
            </p>
            <p className="text-xs font-semibold text-gold">ಶುದ್ಧ ನೈಸರ್ಗಿಕ ಎಣ್ಣೆ</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-forest/80 transition hover:text-leaf dark:text-cream/80"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-forest shadow-sm transition hover:border-gold dark:border-white/15 dark:bg-white/10 dark:text-cream"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-forest md:hidden dark:border-white/15 dark:bg-white/10 dark:text-cream"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-4 py-4 md:hidden dark:border-white/10 dark:bg-[#07150a]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-semibold text-forest dark:text-cream"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-left font-semibold text-forest dark:text-cream"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

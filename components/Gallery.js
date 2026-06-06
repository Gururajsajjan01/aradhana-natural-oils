"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const gallery = [
  { title: "Oil Bottles", tone: "from-gold via-yellow-100 to-white" },
  { title: "Seeds", tone: "from-lime-100 via-amber-100 to-white" },
  { title: "Manufacturing Process", tone: "from-emerald-100 via-cream to-white" },
  { title: "Packaging", tone: "from-stone-100 via-green-100 to-white" }
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-pad bg-white dark:bg-[#0b1c0f]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Gallery
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            Bottles, seeds, process and careful packaging.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className="group overflow-hidden rounded-md border border-forest/10 bg-cream text-left shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className={`relative h-56 bg-gradient-to-br ${item.tone}`}>
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white/75 bg-forest/15 transition group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 right-6 h-4 rounded-full bg-forest/20" />
              </div>
              <p className="p-4 font-heading font-bold text-forest dark:text-cream">{item.title}</p>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-md bg-white dark:bg-[#0b1c0f]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-forest/10 p-4 dark:border-white/10">
              <h3 className="font-heading text-xl font-bold text-forest dark:text-cream">
                {gallery[active].title}
              </h3>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
                className="grid h-10 w-10 place-items-center rounded-full bg-cream text-forest dark:bg-white/10 dark:text-cream"
              >
                <X size={20} />
              </button>
            </div>
            <div className={`h-[60vh] bg-gradient-to-br ${gallery[active].tone}`}>
              <div className="grid h-full place-items-center">
                <div className="h-48 w-48 rounded-full border-[18px] border-white/80 bg-forest/20 shadow-soft" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

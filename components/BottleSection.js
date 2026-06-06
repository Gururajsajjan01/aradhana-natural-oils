"use client";

import bottles from "@/data/bottles.json";
import { motion } from "framer-motion";
import Image from "next/image";
import OrderButton from "./OrderButton";

export default function BottleSection() {
  return (
    <section className="section-pad bg-cream pt-28 dark:bg-[#07150a]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Bottle Sizes
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-forest md:text-6xl dark:text-cream">
            Choose the right bottle for your home.
          </h1>
          <p className="mt-5 text-lg leading-8 text-forest/72 dark:text-cream/72">
            Aradhana Natural Oils are available in half liter, one liter and five liter bottle packs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bottles.map((bottle, index) => (
            <motion.article
              key={bottle.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="overflow-hidden rounded-md border border-forest/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-80 bg-white">
                <Image
                  src={bottle.image}
                  alt={bottle.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain p-3"
                />
                <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-forest">
                  {bottle.size}
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-xl font-bold text-forest dark:text-cream">
                  {bottle.name}
                </h2>
                <p className="mt-3 min-h-20 leading-7 text-forest/68 dark:text-cream/68">
                  {bottle.description}
                </p>
                <OrderButton
                  productName={bottle.name}
                  className="mt-5 w-full bg-forest px-4 py-3 text-white hover:bg-leaf"
                >
                  Order This Size
                </OrderButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

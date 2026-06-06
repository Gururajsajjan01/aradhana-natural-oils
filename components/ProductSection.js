"use client";

import products from "@/data/products.json";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import OrderButton from "./OrderButton";
import Reveal from "./Reveal";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export default function ProductSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = `${product.name} ${product.description} ${product.benefits.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="products" className="section-pad bg-cream dark:bg-[#07150a]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Products
            </p>
            <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
              Pure oils for cooking, care and wellness.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-w-0 items-center gap-2 rounded-md border border-forest/15 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10">
              <Search size={18} className="text-gold" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products"
                className="min-w-0 bg-transparent text-sm outline-none placeholder:text-forest/45 dark:placeholder:text-cream/45"
              />
            </label>
            <label className="flex items-center gap-2 rounded-md border border-forest/15 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10">
              <SlidersHorizontal size={18} className="text-gold" />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="bg-transparent text-sm font-semibold outline-none"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group overflow-hidden rounded-md border border-forest/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-48 overflow-hidden bg-cream">
                <Image
                  src={product.image}
                  alt={`${product.name} product image`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
                <div className="absolute right-5 top-5 rounded-full bg-white/78 px-3 py-1 text-xs font-bold text-forest">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-forest dark:text-cream">
                  {product.name}
                </h3>
                <p className="mt-3 min-h-20 leading-7 text-forest/68 dark:text-cream/68">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest dark:bg-white/10 dark:text-cream"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <OrderButton
                  productId={product.id}
                  productName={product.name}
                  className="mt-5 w-full bg-forest px-4 py-3 text-white hover:bg-leaf"
                >
                  Order
                </OrderButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

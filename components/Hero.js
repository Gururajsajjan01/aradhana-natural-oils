"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import OrderButton from "./OrderButton";

const address = "Ward No. 1 Joshi Galli, Near Pandurang Temple, ILKAL-587125, DIST Bagalkot";

export default function Hero() {
  return (
    <section id="home" className="oil-pattern relative overflow-hidden pt-28">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 pb-20 md:grid-cols-[1.02fr_0.98fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-4 py-2 text-sm font-bold text-forest shadow-sm dark:bg-white/10 dark:text-cream">
            <ShieldCheck size={17} className="text-gold" />
            Traditional Indian wellness, carefully made
          </div>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.08] text-forest text-balance md:text-6xl dark:text-cream">
            Pure by Nature, Goodness for Life
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest/78 md:text-xl dark:text-cream/78">
            Traditional natural oils crafted with purity, authenticity and trust.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 font-bold text-white shadow-soft transition hover:bg-leaf"
            >
              View Products <ArrowRight size={18} />
            </a>
            <OrderButton className="border border-gold bg-white px-6 py-3 text-forest hover:bg-gold/15 dark:bg-white/10 dark:text-cream" />
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {["Pure Oils", "Natural Wellness", "Trusted Quality"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-forest/10 bg-white/70 p-3 text-center text-sm font-bold text-forest shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-cream"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid max-w-2xl gap-3">
            <a
              href="tel:+917829504543"
              className="inline-flex items-center gap-3 rounded-md border border-forest/10 bg-white/78 px-4 py-3 font-bold text-forest shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-cream"
            >
              <Phone size={19} className="shrink-0 text-gold" />
              +91 78295 04543
            </a>
            <p className="inline-flex items-start gap-3 rounded-md border border-forest/10 bg-white/78 px-4 py-3 font-semibold leading-7 text-forest shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-cream">
              <MapPin size={20} className="mt-1 shrink-0 text-gold" />
              {address}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-md border border-gold/30 bg-white shadow-soft dark:border-white/10 dark:bg-white/10">
            <Image
              src="/assets/hero-product-poster.png"
              alt="Aradhana Natural Oils product poster"
              width={784}
              height={984}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

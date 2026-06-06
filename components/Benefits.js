"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Factory, FlaskConical, Leaf, PackageCheck, Sprout } from "lucide-react";

const benefits = [
  ["100% Natural", Leaf],
  ["No Chemicals", FlaskConical],
  ["Traditional Processing", Factory],
  ["High Quality Ingredients", Sprout],
  ["Trusted Manufacturing", BadgeCheck],
  ["Fresh Production", PackageCheck]
];

export default function Benefits() {
  return (
    <section className="section-pad bg-white dark:bg-[#0b1c0f]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Benefits
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            Clean ingredients, careful process, honest quality.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([label, Icon], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-md border border-forest/10 bg-cream p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-forest text-gold">
                <Icon size={23} />
              </div>
              <h3 className="font-heading text-lg font-bold text-forest dark:text-cream">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

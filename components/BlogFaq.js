"use client";

import { ChevronDown, Mail } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const posts = [
  "How to choose the right natural cooking oil",
  "Why traditional processing matters",
  "Simple wellness uses for coconut and sesame oil"
];

const faqs = [
  ["Are the oils chemical-free?", "Yes. The brand promise is natural oils made without unnecessary chemical additives."],
  ["Can I order on WhatsApp?", "Yes. Use any WhatsApp button on the site to begin an order conversation."],
  ["Where are you based?", "Aradhana Natural Oils is based at Ward No. 1 Joshi Galli, Near Pandurang Temple, ILKAL-587125, DIST Bagalkot."]
];

export default function BlogFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-cream dark:bg-[#07150a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Blog
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            Wellness notes for informed choices.
          </h2>
          <div className="mt-8 grid gap-4">
            {posts.map((post) => (
              <article
                key={post}
                className="rounded-md border border-forest/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-bold text-gold">Natural Oils Guide</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-forest dark:text-cream">{post}</h3>
              </article>
            ))}
          </div>
          <form
            className="mt-6 flex flex-col gap-3 rounded-md border border-forest/10 bg-white p-4 sm:flex-row dark:border-white/10 dark:bg-white/5"
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              alert("Thank you for subscribing.");
            }}
          >
            <label className="flex flex-1 items-center gap-2 rounded-md bg-cream px-4 py-3 dark:bg-white/10">
              <Mail size={18} className="text-gold" />
              <input required type="email" placeholder="Email for newsletter" className="min-w-0 flex-1 bg-transparent outline-none" />
            </label>
            <button className="rounded-md bg-forest px-5 py-3 font-bold text-white" type="submit">
              Subscribe
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            FAQ
          </p>
          <div className="overflow-hidden rounded-md border border-forest/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="border-b border-forest/10 last:border-b-0 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-lg font-bold text-forest dark:text-cream"
                >
                  {question}
                  <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180" : ""}`} size={20} />
                </button>
                {open === index && (
                  <p className="px-5 pb-5 leading-7 text-forest/70 dark:text-cream/70">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

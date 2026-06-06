import { Eye, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Vision",
    copy: "To become a trusted Karnataka wellness brand known for clean, traditional natural oils.",
    icon: Eye
  },
  {
    title: "Mission",
    copy: "To provide pure oils, authentic ingredients, natural wellness and trusted quality.",
    icon: HeartHandshake
  },
  {
    title: "Values",
    copy: "Purity, transparency, freshness and respect for time-honored Indian practices.",
    icon: Sparkles
  }
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-[#0b1c0f]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            About Us
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            Built on purity, authenticity and everyday wellness.
          </h2>
          <p className="mt-5 text-lg leading-8 text-forest/72 dark:text-cream/72">
            Aradhana Natural Oils brings traditional Indian wellness products made from carefully selected ingredients and trusted manufacturing practices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map(({ title, copy, icon: Icon }, index) => (
            <Reveal
              key={title}
              delay={index * 0.08}
              className="rounded-md border border-forest/10 bg-cream p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-forest text-gold">
                <Icon size={23} />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest dark:text-cream">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-forest/70 dark:text-cream/70">{copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-md border border-gold/40 bg-forest p-6 text-white md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-forest">
                <Leaf size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">Natural wellness for every home</h3>
                <p className="mt-2 max-w-3xl text-white/78">
                  We focus on fresh production, high quality ingredients and reliable manufacturing standards for families who value authentic taste.
                </p>
              </div>
            </div>
            <a href="#contact" className="rounded-md bg-gold px-5 py-3 text-center font-bold text-forest">
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

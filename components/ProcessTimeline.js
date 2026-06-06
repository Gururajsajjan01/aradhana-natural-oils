import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  "Ingredient Selection",
  "Cleaning & Preparation",
  "Traditional Processing",
  "Quality Testing",
  "Packaging",
  "Delivery"
];

export default function ProcessTimeline() {
  return (
    <section className="section-pad bg-cream dark:bg-[#07150a]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Manufacturing Process
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            A transparent journey from seed to bottle.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="relative h-full rounded-md border border-forest/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-gold">Step {index + 1}</span>
                  <CheckCircle2 size={21} className="text-leaf" />
                </div>
                <h3 className="font-heading text-lg font-bold text-forest dark:text-cream">{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

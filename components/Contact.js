"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

const address = "Ward No. 1 Joshi Galli, Near Pandurang Temple, ILKAL-587125, DIST Bagalkot";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white dark:bg-[#0b1c0f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_0.9fr] md:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-bold text-forest md:text-5xl dark:text-cream">
            Ask about products, pricing and fresh availability.
          </h2>
          <form
            className="mt-8 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              alert("Thank you. Aradhana Natural Oils will contact you soon.");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className="rounded-md border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-white/10" />
              <input required name="phone" placeholder="Phone" className="rounded-md border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-white/10" />
            </div>
            <input required type="email" name="email" placeholder="Email" className="rounded-md border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-white/10" />
            <textarea required name="message" placeholder="Message" rows={5} className="resize-none rounded-md border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-white/10" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 font-bold text-white transition hover:bg-leaf">
              <Send size={18} /> Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="grid min-h-64 place-items-center rounded-md border border-forest/10 bg-cream text-center shadow-sm dark:border-white/10 dark:bg-white/5">
            <div>
              <MapPin className="mx-auto text-gold" size={36} />
              <p className="mt-3 font-heading text-xl font-bold text-forest dark:text-cream">
                Google Map Placeholder
              </p>
              <p className="mt-2 max-w-sm px-4 text-forest/65 dark:text-cream/65">{address}</p>
            </div>
          </div>
          <div className="rounded-md border border-forest/10 bg-cream p-6 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold"><Phone size={19} className="text-gold" /> +91 78295 04543</p>
              <p className="flex items-center gap-3 font-semibold"><Mail size={19} className="text-gold" /> info@aradhanaoils.com</p>
              <p className="flex items-start gap-3 font-semibold"><MapPin size={19} className="mt-1 shrink-0 text-gold" /> {address}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

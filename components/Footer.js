import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";

const address = "Ward No. 1 Joshi Galli, Near Pandurang Temple, ILKAL-587125, DIST Bagalkot";

export default function Footer() {
  return (
    <footer className="bg-forest px-4 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpeg"
            alt="Aradhana Natural Oils logo"
            width={54}
            height={54}
            className="h-12 w-12 rounded-full border-2 border-gold object-cover"
          />
          <div>
            <p className="font-heading font-bold">Aradhana Natural Oils</p>
            <p className="text-sm text-white/70">Copyright 2026 Aradhana Natural Oils. All Rights Reserved.</p>
          </div>
        </div>
        <div className="max-w-sm space-y-2 text-sm font-semibold text-white/78">
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-gold" /> +91 78295 04543
          </p>
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 shrink-0 text-gold" /> {address}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-bold text-white/80">
          <a href="/#home">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/bottles">Bottles</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="/#home"
              aria-label="Social media"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-gold transition hover:bg-white/10"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

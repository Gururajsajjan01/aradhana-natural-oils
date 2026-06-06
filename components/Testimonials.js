import Reveal from "./Reveal";

const reviews = [
  {
    name: "Priya S.",
    text: "Excellent quality oil and authentic taste."
  },
  {
    name: "Ramesh K.",
    text: "Best natural oil products for our family."
  },
  {
    name: "Anitha M.",
    text: "Fresh aroma, clean packaging and very reliable."
  }
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Trusted by families who care about purity.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delay={index * 0.08}
              className="rounded-md border border-white/15 bg-white/10 p-6"
            >
              <p className="text-xl tracking-[0.12em] text-gold">★★★★★</p>
              <p className="mt-5 text-lg leading-8 text-white/86">"{review.text}"</p>
              <p className="mt-5 font-bold text-gold">{review.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

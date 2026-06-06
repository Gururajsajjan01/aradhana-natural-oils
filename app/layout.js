import "./globals.css";

export const metadata = {
  title: "Aradhana Natural Oils | Pure Natural Wellness Products",
  description:
    "Traditional Indian natural oils made with purity, authenticity, and trusted quality.",
  keywords: [
    "Natural Oils",
    "Groundnut Oil",
    "Coconut Oil",
    "Safflower Oil",
    "Sunflower Oil",
    "Traditional Wellness",
    "Karnataka Natural Oils"
  ],
  openGraph: {
    title: "Aradhana Natural Oils",
    description:
      "Traditional Indian natural oils crafted with purity, authenticity and trust.",
    images: ["/assets/logo.jpeg"],
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

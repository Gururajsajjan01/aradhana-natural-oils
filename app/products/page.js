import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Products | Aradhana Natural Oils",
  description: "Explore groundnut oil, coconut oil, sesame oil and mustard oil from Aradhana Natural Oils."
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream text-forest dark:bg-[#07150a] dark:text-cream">
      <Navbar />
      <div className="pt-20">
        <ProductSection />
        <Benefits />
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

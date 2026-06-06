import BottleSection from "@/components/BottleSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Bottle Sizes | Aradhana Natural Oils",
  description: "View half liter, one liter and five liter bottle options from Aradhana Natural Oils."
};

export default function BottlesPage() {
  return (
    <main className="min-h-screen bg-cream text-forest dark:bg-[#07150a] dark:text-cream">
      <Navbar />
      <BottleSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

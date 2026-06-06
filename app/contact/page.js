import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact | Aradhana Natural Oils",
  description: "Contact Aradhana Natural Oils for natural oil orders and product enquiries."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream text-forest dark:bg-[#07150a] dark:text-cream">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

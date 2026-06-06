import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Aradhana Natural Oils | Traditional Natural Wellness",
  description: "Learn about the vision, mission and values behind Aradhana Natural Oils."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-forest dark:bg-[#07150a] dark:text-cream">
      <Navbar />
      <div className="pt-20">
        <About />
        <Benefits />
        <ProcessTimeline />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

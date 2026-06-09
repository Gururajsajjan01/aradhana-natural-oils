import Benefits from "@/components/Benefits";
import BlogFaq from "@/components/BlogFaq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProductSection from "@/components/ProductSection";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import About from "@/components/About"; // ✅ FIXED

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-forest transition-colors dark:bg-[#07150a] dark:text-cream">
      <Navbar />
      <Hero />
      <About />
      <ProductSection />
      <Benefits />
      <ProcessTimeline />
      <Testimonials />
      <BlogFaq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
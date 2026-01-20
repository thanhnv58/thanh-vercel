import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import Materials from "@/components/Materials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-black selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <Hero />
      {/* 2. Portfolio: Năng lực thiết kế */}
      <Portfolio />

      {/* 3. Core Values: Triết lý thiết kế */}
      <CoreValues />

      {/* 4. Services: Giải pháp trọn gói */}
      <Services />

      {/* 5. Process: Quy trình 5 bước */}
      <Process />

      {/* 6. Social Proof: Sự tin tưởng */}
      <div className="bg-stone-50 dark:bg-stone-900">
        <Testimonials />
        <SocialProof />
      </div>

      {/* 7. Materials & Workshop: Sờ tận tay */}
      <Materials />

      {/* 8. Final CTA */}
      <ContactForm />

      <Footer />
    </main>
  );
}
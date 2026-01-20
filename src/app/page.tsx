import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

// redeploy
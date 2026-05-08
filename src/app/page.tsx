import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Applications from '@/components/Applications';
import Specifications from '@/components/Specifications';
import Packaging from '@/components/Packaging';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Applications />
        <Specifications />
        <Packaging />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

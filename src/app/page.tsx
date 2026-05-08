'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Specifications from '@/components/Specifications';
import Packaging from '@/components/Packaging';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Loader */}
      <div className={`loader ${loaded ? 'hidden' : ''}`}>
        <div className="text-center">
          <div className="font-syne text-[32px] font-extrabold text-white tracking-[-1px] mb-0">
            RAMALIGHT<span className="text-accent-light">.</span>
          </div>
          <div className="loader-bar">
            <div className="loader-fill" />
          </div>
        </div>
      </div>

      <CustomCursor />
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Features />
      <Specifications />
      <Packaging />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

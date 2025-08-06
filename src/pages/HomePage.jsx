import React from 'react';
import NavBar from '../components/NavBar';
import BannerSection from '../components/BannerSection';
import ServiceHighlights from '../components/ServiceHighlights';
import PlatformFeatures from '../components/PlatformFeatures';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <BannerSection />
      <ServiceHighlights />
      <PlatformFeatures />
      <Footer />
    </>
  );
}
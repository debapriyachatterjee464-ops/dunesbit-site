import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import ProductPillars from './components/ProductPillars';
import PluginSection from './components/PluginSection';
import AIStudioSection from './components/AIStudioSection';
import DashboardSection from './components/DashboardSection';
import WhyDunesBit from './components/WhyDunesBit';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen ambient-glow">
      {/* Structural layout wrappers */}
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <ProductPillars />
        <PluginSection />
        <AIStudioSection />
        <DashboardSection />
        <WhyDunesBit />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

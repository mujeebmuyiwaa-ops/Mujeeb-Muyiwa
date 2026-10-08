/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { RescueSystemSection } from './components/RescueSystemSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutFounder } from './components/AboutFounder';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { ServiceModal } from './components/ServiceModal';
import { PaymentModal } from './components/PaymentModal';
import { ServiceItem } from './data/siteData';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<string>('Standard Package');
  const [paymentAmount, setPaymentAmount] = useState<string>('$750');

  const handleOpenAudit = (tierName?: string) => {
    if (tierName) {
      setSelectedTier(tierName);
    }
    setAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setAuditModalOpen(false);
    setSelectedTier('');
  };

  const handleOpenPayment = (tierName: string = 'Standard Package', amount: string = '$750') => {
    setPaymentPlan(tierName);
    setPaymentAmount(amount);
    setPaymentModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenAudit={() => handleOpenAudit()}
        onOpenPayment={() => handleOpenPayment('Standard Package', '$750')}
      />

      {/* Main Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenAudit={() => handleOpenAudit()}
          onExploreServices={handleScrollToServices}
        />

        {/* 2. Trust Credibility Bar */}
        <TrustBar />

        {/* 3. Problem Section ("More Traffic Isn't Always the Answer") */}
        <ProblemSection onOpenAudit={() => handleOpenAudit()} />

        {/* 4. Strategy & Process Section ("Find the Problem...") */}
        <ProcessSection onOpenAudit={() => handleOpenAudit()} />

        {/* 5. Services Section ("eCommerce Services Built Around Growth") */}
        <ServicesSection
          onOpenAudit={() => handleOpenAudit()}
          onSelectService={handleSelectService}
        />

        {/* 6. Featured Rescue Section ("The Mujeeb Sales Rescue System") */}
        <RescueSystemSection onOpenAudit={() => handleOpenAudit()} />

        {/* 7. Portfolio Section ("Selected eCommerce Projects") */}
        <PortfolioSection onOpenAudit={() => handleOpenAudit()} />

        {/* 8. Testimonials Section ("Real Clients. Real Experiences.") */}
        <TestimonialsSection onOpenAudit={() => handleOpenAudit()} />

        {/* 9. About Founder Section ("Meet Mujeeb, Founder & CEO") */}
        <AboutFounder onOpenAudit={() => handleOpenAudit()} />

        {/* 10. Pricing Section ("Choose the Level of Support...") */}
        <PricingSection
          onOpenAudit={handleOpenAudit}
          onOpenPayment={handleOpenPayment}
        />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Final High-Impact CTA Section ("Your Store Has Potential...") */}
        <FinalCTASection onOpenAudit={() => handleOpenAudit()} />

        {/* 13. Contact Section ("Let's Talk About Your Business") */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={handleCloseAudit}
        initialPackage={selectedTier}
      />

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        initialPackage={paymentPlan}
        initialAmount={paymentAmount}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => {
          setSelectedService(null);
          handleOpenAudit(selectedService?.title);
        }}
      />

      {/* Quick WhatsApp Floating Badge */}
      <a
        href="https://api.whatsapp.com/send/?phone=2347041444373&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Message"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chat with Mujeeb
        </span>
      </a>

      {/* Mobile Sticky Bottom CTA (Max 15% viewport height compliance) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-slate-900 truncate">
            Mujeeb Sales Rescue
          </span>
          <span className="text-[10px] text-slate-500">
            eCommerce Growth Strategy
          </span>
        </div>
        <button
          onClick={() => handleOpenAudit()}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 active:scale-95 shadow-sm"
        >
          <span>Get Store Rescued</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

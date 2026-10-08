import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenAudit: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO GROW?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto text-balance">
          Your Store Has Potential. Let's Unlock It.
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Whether you're struggling with traffic, conversions, SEO, advertising, or simply don't know what to fix first — let's identify the opportunities and create a smarter path forward.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-colors"
          >
            <span>View Pricing</span>
          </a>
        </div>

        {/* Quick Credibility Stats */}
        <div className="grid grid-cols-3 max-w-lg mx-auto pt-8 border-t border-slate-800/80 text-center">
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-white block">6+</span>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Years Experience</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-white block">350+</span>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Clients Served</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-white block">Global</span>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Worldwide Reach</span>
          </div>
        </div>

      </div>
    </section>
  );
};

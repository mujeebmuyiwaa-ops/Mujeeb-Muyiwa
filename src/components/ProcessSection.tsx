import React from 'react';
import { Search, Target, BarChart3, Sliders, TrendingUp, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  const iconMap: Record<string, React.ElementType> = {
    Search,
    Target,
    BarChart3,
    Sliders,
    TrendingUp,
  };

  return (
    <section id="process" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              THE PROCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Find the Problem. Build the Strategy. Improve the Store. Grow Smarter.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A clear, structured approach designed to identify what's holding your business back and create a practical path forward.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {PROCESS_STEPS.map((stepItem, index) => {
            const IconComp = iconMap[stepItem.icon] || Search;
            return (
              <div
                key={stepItem.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  {stepItem.step}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stepItem.description}
                </p>

                {/* Step Connector Line for desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Action CTA */}
        <div className="flex justify-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Let's Review Your Business</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

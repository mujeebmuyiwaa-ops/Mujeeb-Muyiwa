import React from 'react';
import { ArrowRight, AlertCircle, XCircle } from 'lucide-react';
import { COMMON_STORE_PROBLEMS } from '../data/siteData';

interface ProblemSectionProps {
  onOpenAudit: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
            THE REAL PROBLEM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              More Traffic Isn't Always the Answer.
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Many eCommerce businesses pour money into ads and traffic, only to wonder why sales aren't improving. The truth is — traffic alone won't fix a store that isn't ready to convert.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6">
              <p className="text-sm text-amber-900 font-medium leading-relaxed">
                You work hard to build your business. You shouldn't have to guess what is holding it back.
              </p>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              There are usually multiple factors working against your store simultaneously — and most of them are fixable once identified.
            </p>

            <div>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group cursor-pointer"
              >
                <span>Find out what's holding your store back</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Problem Cards Grid */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/70">
            <div className="flex items-center gap-2 mb-5">
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Common Conversion Leaks Suppressing Sales
              </span>
            </div>

            {/* Checklist of problems */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {COMMON_STORE_PROBLEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-rose-200 transition-colors"
                >
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                Any one of these issues can significantly reduce your store's ability to convert visitors into customers. When several exist together, the impact compounds.
              </p>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 shrink-0 cursor-pointer shadow-2xs"
              >
                <span>Let's review your store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

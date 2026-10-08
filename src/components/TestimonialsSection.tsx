import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

interface TestimonialsSectionProps {
  onOpenAudit: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="reviews" className="py-24 bg-[#0B1528] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                CLIENT REVIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Real Clients. Real Experiences.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              See what eCommerce store owners from different countries have shared about partnering with Mujeeb Sales Rescue.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors self-start md:self-end shrink-0 cursor-pointer"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

        {/* 6 Testimonial Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div>
                {/* User Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-colors">
                      {testimonial.name.slice(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">
                          {testimonial.handle}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <span>{testimonial.countryFlag}</span>
                        <span>{testimonial.country}</span>
                      </div>
                    </div>
                  </div>

                  {testimonial.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {testimonial.badge}
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Bottom Outcome Highlight */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">{testimonial.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="text-center flex flex-col items-center justify-center">
          <span className="text-xs text-slate-400 mb-3">
            Showing verified client feedback
          </span>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-colors cursor-pointer shadow-md"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

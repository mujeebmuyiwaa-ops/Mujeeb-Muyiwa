import React from 'react';
import { Compass, ShieldCheck, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface AboutFounderProps {
  onOpenAudit: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenAudit }) => {
  return (
    <section id="about" className="py-24 bg-slate-50/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl">
                <img
                  src="/src/assets/images/ceo_mujeeb_new.jpg"
                  alt="Mujeeb - Founder & CEO of Mujeeb Sales Rescue"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-bold text-slate-900">350+ Clients Worldwide</span>
                </div>

                {/* Bottom Identity Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700 text-white">
                  <h3 className="text-base font-bold text-white">Mujeeb</h3>
                  <p className="text-xs text-orange-400 font-medium">Founder & CEO</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">South Africa & Worldwide</p>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-60 h-60 bg-orange-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Column: Founder Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                ABOUT MUJEEB
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Meet Mujeeb, Founder & CEO of Mujeeb Sales Rescue
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Hi, I'm Mujeeb, the Founder and CEO of Mujeeb Sales Rescue. With over 6 years of experience in eCommerce, digital marketing, and Shopify development, my mission has always been simple: <strong className="text-slate-800 font-semibold">to help businesses grow, overcome challenges, and achieve real results.</strong>
              </p>

              <p>
                Over the years, I've had the privilege of working with 350+ clients from different countries, helping business owners build stronger online stores, improve their digital presence, reach the right customers, and create strategies designed for real growth.
              </p>

              <p>
                But for me, this is about more than simply building a website or running an advertisement. I understand that behind every business is a person with a dream. You have invested your time, energy, money, and hope into building something meaningful. That is why I treat every project with care, honesty, and a genuine commitment to helping you move closer to your goals.
              </p>

              <p className="text-slate-500 text-sm">
                At Mujeeb Sales Rescue, I don't believe in one-size-fits-all solutions. Every business is different, and every client deserves a strategy built around their unique goals.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-2">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">Strategy</h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Every business deserves a strategy built around its unique goals, not a generic template.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">Transparency</h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Clear communication and honest recommendations throughout every project phase.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">Growth</h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  The goal isn't just to complete tasks — it's to create lasting opportunities for sustainable sales.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Work With Mujeeb</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

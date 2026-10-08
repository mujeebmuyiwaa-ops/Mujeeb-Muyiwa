import React from 'react';
import { ArrowRight, Star, Sparkles, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onExploreServices }) => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                eCommerce Growth Specialist · Global Reach
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Your eCommerce Store Has{' '}
              <span className="relative inline-block text-orange-500">
                Potential
                <span className="absolute left-0 -bottom-1.5 w-full h-1.5 bg-orange-200/70 rounded-full"></span>
              </span>
              . Let's Turn It Into Growth.
            </h1>

            {/* Subtitles & Narrative */}
            <p className="text-lg text-slate-700 leading-relaxed font-normal mb-4 max-w-2xl">
              Helping Shopify, Etsy, and eCommerce businesses improve their stores, attract the right customers, strengthen their marketing, and build smarter strategies for sustainable growth.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
              Getting traffic is only part of the journey. Your store also needs the right structure, positioning, SEO, marketing, customer journey, and conversion strategy. <strong className="text-slate-700 font-semibold">Mujeeb Sales Rescue</strong> helps identify what may be holding your business back and creates practical strategies designed around your goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-800">Trusted by 350+ clients</span>
              <span className="text-slate-300">·</span>
              <span>USA, UK & Worldwide</span>
            </div>
          </div>

          {/* Right Column: Founder Presentation Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Outer Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 border border-slate-200/80 shadow-2xl">
                
                {/* Founder Photo */}
                <img
                  src="/src/assets/images/ceo_mujeeb.png"
                  alt="Mujeeb - Founder & CEO of Mujeeb Sales Rescue"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                {/* Scrim Overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Floating Top Left Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-tight">350+</span>
                    <span className="text-[10px] text-slate-500 leading-tight">Clients Served</span>
                  </div>
                </div>

                {/* Floating Top Right Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-700 flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-400" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">6+ Years</span>
                    <span className="text-[10px] text-slate-300 leading-tight">Experience</span>
                  </div>
                </div>

                {/* Bottom Identity Block */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 text-white shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight">
                        Mujeeb
                      </h2>
                      <p className="text-xs text-orange-400 font-medium">
                        Founder & CEO · Mujeeb Sales Rescue
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-lg text-[11px] font-medium text-slate-200">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      <span>Growth Partner</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Shopify Specialist</span>
                    <span className="text-slate-600">|</span>
                    <span>Paid Ads & CRO</span>
                    <span className="text-slate-600">|</span>
                    <span>eCommerce Growth</span>
                  </div>
                </div>

              </div>

              {/* Decorative Background Blob */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

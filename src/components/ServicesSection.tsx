import React, { useState } from 'react';
import {
  Store,
  TrendingUp,
  Megaphone,
  Search,
  ShoppingBag,
  Mail,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA, SERVICE_CATEGORIES, ServiceItem } from '../data/siteData';

interface ServicesSectionProps {
  onOpenAudit: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenAudit,
  onSelectService,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Store,
    TrendingUp,
    Megaphone,
    Search,
    ShoppingBag,
    Mail,
    Globe,
    Zap,
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              eCommerce Services Built Around Growth
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              From your Shopify store and product pages to paid ads, SEO, email, and conversion optimization, every service is designed around one objective: helping your business grow.
            </p>
          </div>

          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-orange-600 self-start md:self-end shrink-0 cursor-pointer"
          >
            <span>{showAllCategories ? 'Hide Extended Directory' : 'See All 8 Growth Categories'}</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>

        {/* Main Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Shopify Store Optimization (White) */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Top metadata tags */}
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>Shopify</span>
                <span>·</span>
                <span>Speed</span>
                <span>·</span>
                <span>Conversion</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                <Store className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Shopify Store Optimization
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Improve your Shopify store structure, speed, product pages, and overall performance to convert more visitors into buyers.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[0])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Featured Dark Navy Card! (Shopify Marketing & Sales Growth) */}
          <div className="lg:col-span-2 bg-[#0B1528] rounded-3xl p-8 border border-slate-800 shadow-xl text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-orange-400">
                  <span>Shopify</span>
                  <span>·</span>
                  <span>Marketing</span>
                  <span>·</span>
                  <span>Scaling</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-[11px] font-bold border border-orange-500/30">
                  <Sparkles className="w-3 h-3 text-orange-400" />
                  <span>Flagship Service</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400 mb-5 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                Shopify Marketing & Sales Growth
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
                Strategic marketing campaigns designed to attract the right customers and grow your Shopify sales. We align customer acquisition, average order value, and funnel retention into a reliable sales machine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Targeted traffic generation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>ROAS-optimized ad funnels</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Upsell & cross-sell architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Weekly growth diagnostics</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => onSelectService(SERVICES_DATA[1])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 cursor-pointer"
              >
                <span>Learn More About Growth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenAudit}
                className="px-4 py-2 text-xs font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Card 3: Meta & Facebook Ads */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>Meta</span>
                <span>·</span>
                <span>Facebook</span>
                <span>·</span>
                <span>Instagram</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <Megaphone className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Meta & Facebook Ads
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Targeted Facebook and Instagram advertising campaigns that reach your ideal customers and drive qualified, profitable traffic.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[2])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Google Ads & Merchant Center */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>Google Ads</span>
                <span>·</span>
                <span>Shopping</span>
                <span>·</span>
                <span>PMax</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Google Ads & Merchant Center
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Google Ads campaigns and Google Merchant Center setup to capture buyers actively searching for your products right now.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[3])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 5: Etsy Marketing & SEO */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>Etsy</span>
                <span>·</span>
                <span>SEO</span>
                <span>·</span>
                <span>Listings</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Etsy Marketing & SEO
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Improve your Etsy shop visibility, listing search rank, and marketing strategy to attract more ready-to-buy shoppers to your shop.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[4])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 6: Email Marketing & Klaviyo */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>Email</span>
                <span>·</span>
                <span>Klaviyo</span>
                <span>·</span>
                <span>Automation</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Email Marketing & Klaviyo
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Professional email marketing setup, Klaviyo automation flows, and campaigns that recover abandoned carts and retain customers.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[5])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 7: eCommerce SEO */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-5">
                <span>SEO</span>
                <span>·</span>
                <span>Organic</span>
                <span>·</span>
                <span>Search</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-900 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 text-slate-800" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                eCommerce SEO & Organic Visibility
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Organic search optimization for your eCommerce store — improving visibility, ranking for commercial intent keywords, and driving consistent, free compounding traffic.
              </p>
            </div>

            <button
              onClick={() => onSelectService(SERVICES_DATA[6])}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 pt-4 border-t border-slate-200/60 cursor-pointer"
            >
              <span>Explore Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Card 8: Bottom Banner Full-Width Dark Navy Card (Conversion Rate Optimization) */}
        <div className="bg-[#0B1528] rounded-3xl p-8 sm:p-10 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-3">
              <span>CRO</span>
              <span>·</span>
              <span>Conversion Audit</span>
              <span>·</span>
              <span>Checkout UX</span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-orange-400" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Conversion Rate Optimization (CRO)
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Identify and fix the conversion bottlenecks in your store. From product pages to checkout — every step of the customer journey matters.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Extended Directory View (if opened) */}
        {showAllCategories && (
          <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-slate-900">
                Complete Scope of Growth Capabilities
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Everything Mujeeb Sales Rescue handles under one roof
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 text-orange-600">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.services.map((srv, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

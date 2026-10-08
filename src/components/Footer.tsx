import React from 'react';
import { ShieldCheck, ArrowUp, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-8">
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                Mujeeb Sales Rescue
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
              Helping Shopify, Etsy, and eCommerce stores turn potential into predictable sales through store optimization, paid media, and conversion strategy.
            </p>

            <div className="text-xs text-slate-500 space-y-1">
              <p>📍 South Africa & Serving Clients Worldwide</p>
              <p>✉️ <a href="mailto:salesrescuemujeeb@gmail.com" className="hover:text-orange-600 transition-colors">salesrescuemujeeb@gmail.com</a></p>
            </div>
          </div>

          {/* Growth Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Growth Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Shopify Store Optimization</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Shopify Marketing & Sales</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Meta & Instagram Ads</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Google Ads & Merchant Center</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Klaviyo Email Automation</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Conversion Rate Optimization</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Etsy SEO & Marketing</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">eCommerce Organic SEO</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-600 transition-colors">About Mujeeb</a></li>
              <li><a href="#process" className="hover:text-orange-600 transition-colors">The Rescue Process</a></li>
              <li><a href="#portfolio" className="hover:text-orange-600 transition-colors">Selected Projects</a></li>
              <li><a href="#reviews" className="hover:text-orange-600 transition-colors">Client Reviews</a></li>
              <li><a href="#pricing" className="hover:text-orange-600 transition-colors">Pricing & Packages</a></li>
              <li><a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Connect
            </h4>
            <div className="space-y-2.5 text-xs mb-6">
              <a
                href="mailto:salesrescuemujeeb@gmail.com"
                className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>salesrescuemujeeb@gmail.com</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=2347041444373&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp (+234 704 144 4373)</span>
              </a>
              <a
                href="https://www.fiverr.com/mujeeb_salesr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <span className="font-bold text-emerald-600 text-xs">fi.</span>
                <span>Fiverr Marketplace</span>
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/mujeebsalesrescue/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-pink-50 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://web.facebook.com/p/Mujeeb-Sales-Rescues-61579574218570/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-blue-50 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <span className="text-[11px] font-bold text-slate-800 block">
                Secure Client Payments
              </span>
              <p className="text-[10px] text-slate-500 leading-snug">
                Credit/Debit Cards & US ACH Wire to Lead Bank settled directly via Cleva.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Mujeeb Sales Rescue. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-800 cursor-pointer">Refund Policy</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-orange-600 p-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

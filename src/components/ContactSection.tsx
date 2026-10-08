import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Globe, Instagram, Facebook, Share2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    businessType: 'Shopify Store',
    serviceNeeded: 'Shopify Store Optimization',
    budget: '$500 - $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate high-reliability form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/90 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Communication Channels */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                CONTACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Let's Talk About Your Business
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Tell us where your business is today, what you're struggling with, and where you want to go. Let's see how Mujeeb Sales Rescue can help you move forward.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 mb-8">
              {/* Email Card */}
              <a
                href="mailto:salesrescuemujeeb@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-orange-300 hover:shadow-xs transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Direct Gmail
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    salesrescuemujeeb@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://api.whatsapp.com/send/?phone=2347041444373&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    WhatsApp Chat (+234 704 144 4373)
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Chat Directly on WhatsApp
                  </span>
                </div>
              </a>

              {/* Fiverr Profile Card */}
              <a
                href="https://www.fiverr.com/mujeeb_salesr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-extrabold text-sm group-hover:scale-105 transition-transform">
                  fi.
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Fiverr Pro / Marketplace
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Hire Mujeeb on Fiverr (@mujeeb_salesr)
                  </span>
                </div>
              </a>
            </div>

            {/* Response Time & Social Badges */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 mb-6 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 block mb-1">
                Fast Response Time
              </span>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Inquiries are typically reviewed within 2–4 business hours. No spam, no automated sales pitching.
              </p>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Official Social Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/mujeebsalesrescue/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 text-xs font-medium transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://web.facebook.com/p/Mujeeb-Sales-Rescues-61579574218570/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-medium transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send/?phone=2347041444373&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://www.fiverr.com/mujeeb_salesr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-medium transition-colors"
                  >
                    <span className="font-bold text-emerald-600">fi</span>
                    <span>Fiverr</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Mujeeb will personally review your store details and respond with initial insights and recommended next steps shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      website: '',
                      businessType: 'Shopify Store',
                      serviceNeeded: 'Shopify Store Optimization',
                      budget: '$500 - $1,500',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website / Store URL (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourstore.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    >
                      <option value="Shopify Store">Shopify Store</option>
                      <option value="Etsy Shop">Etsy Shop</option>
                      <option value="D2C Brand">D2C Brand</option>
                      <option value="Dropshipping">Dropshipping</option>
                      <option value="Retail Store">Retail Store</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    >
                      <option value="Shopify Store Optimization">Shopify Store Optimization</option>
                      <option value="Paid Advertising (Meta/Google)">Paid Advertising (Meta/Google)</option>
                      <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                      <option value="Email Marketing (Klaviyo)">Email Marketing (Klaviyo)</option>
                      <option value="Shopify SEO">Shopify SEO</option>
                      <option value="Etsy Marketing">Etsy Marketing</option>
                      <option value="Full Growth Package">Full Growth Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,500">$500 – $1,500</option>
                      <option value="$1,500 - $3,000">$1,500 – $3,000</option>
                      <option value="$3,000+">$3,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Biggest Challenge
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, what you're currently struggling with (e.g. high bounce rate, poor ad ROAS, checkout dropoff), and what you would like to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-full font-bold text-sm text-white bg-orange-500 hover:bg-orange-600 active:scale-[0.99] transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Send My Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  By submitting this form, you agree to be contacted regarding your business inquiry. No spam. No pressure.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

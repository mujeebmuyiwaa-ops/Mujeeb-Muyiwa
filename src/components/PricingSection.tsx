import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Compass,
  CreditCard,
  Building2,
  Copy,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';

interface PricingSectionProps {
  onOpenAudit: (tierName?: string) => void;
  onOpenPayment: (tierName: string, amount: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenAudit,
  onOpenPayment,
}) => {
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);

  const bankDetails = [
    { label: 'Account Name', value: 'Mujeeb Muyiwa Abdullazeez', key: 'name' },
    { label: 'Bank Name', value: 'Lead Bank', key: 'bank' },
    { label: 'Account Number', value: '213476293639', key: 'acc' },
    { label: 'Routing Number (ACH / Wire)', value: '101019644', key: 'routing' },
    { label: 'Account Type', value: 'Personal Checking', key: 'type' },
    { label: 'Bank Address', value: '9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA', key: 'addr' },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankField(key);
    setTimeout(() => setCopiedBankField(null), 2000);
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              PRICING & SECURE CHECKOUT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Choose the Level of Support Your Business Needs
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Pay seamlessly with your credit/debit card via Cleva or make a direct US bank transfer to Lead Bank.
          </p>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CreditCard className="w-3.5 h-3.5 text-orange-500" />
              Direct Card Payment via Cleva
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              US Bank Wire / ACH
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-[#0B1528] text-white shadow-2xl border-2 border-orange-500 scale-[1.02] z-10'
                    : 'bg-white text-slate-900 shadow-sm border border-slate-200/90 hover:shadow-lg hover:border-slate-300'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Package Name & Price */}
                  <div className="mb-6">
                    <span
                      className={`text-xs font-extrabold tracking-wider uppercase block mb-1 ${
                        isPopular ? 'text-orange-400' : 'text-slate-500'
                      }`}
                    >
                      {plan.name}
                    </span>

                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        USD
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm mt-3 ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Delivery & Best For Info Box */}
                  <div
                    className={`rounded-2xl p-3.5 mb-6 text-xs space-y-1.5 ${
                      isPopular
                        ? 'bg-slate-800/80 border border-slate-700/80 text-slate-300'
                        : 'bg-slate-50 border border-slate-200/60 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span><strong>Delivery:</strong> {plan.delivery}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Compass className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>Best for:</strong> {plan.bestFor}</span>
                    </div>
                  </div>

                  {/* Feature Deliverables List */}
                  <div className="space-y-2.5 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                      Included Deliverables:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-orange-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-600'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-100/10">
                  <button
                    onClick={() => onOpenPayment(plan.name, plan.price)}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-sm ${
                      isPopular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25 shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Pay {plan.price} via Card / Cleva</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenAudit(plan.name)}
                    className={`w-full py-2.5 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isPopular
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>Book Strategy Call First</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Cleva US Bank Transfer Info Card */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 mb-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4" />
                <span>Direct Bank Transfer · Cleva USD Account</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Official US Bank Account Details (Lead Bank)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Clients in the USA and worldwide can send domestic ACH or wire transfers directly to Mujeeb's verified Lead Bank account.
              </p>
            </div>

            <button
              onClick={() => onOpenPayment('Custom Invoice', '$750')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all shrink-0 cursor-pointer shadow-md"
            >
              <CreditCard className="w-4 h-4" />
              <span>Open Card / Cleva Checkout</span>
            </button>
          </div>

          {/* Bank Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {bankDetails.map((item) => (
              <div
                key={item.key}
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-xs font-semibold text-white break-all select-all">
                    {item.value}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.value, item.key)}
                  className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy"
                >
                  {copiedBankField === item.key ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Funds deposited directly to Mujeeb Muyiwa Abdullazeez via Cleva
            </span>
            <span>Once transfer is made, send confirmation to salesrescuemujeeb@gmail.com</span>
          </div>
        </div>

        {/* Custom Support Banner */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Need a Custom Scope or Staged Milestones?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If your store needs custom monthly retainers, split payments, or specialized performance agreements, Mujeeb can prepare a custom Cleva invoice with tailored deliverables.
            </p>
          </div>

          <button
            onClick={() => onOpenAudit("Custom Solution")}
            className="px-6 py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shrink-0 shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            Request Custom Cleva Invoice →
          </button>
        </div>

      </div>
    </section>
  );
};

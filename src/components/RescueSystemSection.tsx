import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Layers } from 'lucide-react';

interface RescueSystemSectionProps {
  onOpenAudit: () => void;
}

export const RescueSystemSection: React.FC<RescueSystemSectionProps> = ({ onOpenAudit }) => {
  const [activeFriction, setActiveFriction] = useState<number>(0);

  const stages = [
    { name: "Audit", desc: "Diagnostic deep-dive across UX, speed, tracking, and traffic quality" },
    { name: "Identify", desc: "Pinpoint exact revenue leakages and drop-off points in the funnel" },
    { name: "Fix", desc: "Repair broken links, checkout roadblocks, and mobile friction" },
    { name: "Optimize", desc: "Elevate product pages, social proof, and retargeting ads" },
    { name: "Scale", desc: "Compound profitable acquisition across Meta, Google & Klaviyo" }
  ];

  const diagnosticScenarios = [
    {
      title: "Getting Traffic, But Almost Zero Orders",
      symptom: "Visitors click your ads but bounce in seconds without adding to cart.",
      rescueAction: "Phase 1 & 2 Focus: Product page clarity, price-value framing, mobile UX speed, and audience intent alignment.",
      targetFix: "Conversion Rate Optimization & Offer Restructure"
    },
    {
      title: "Add-to-Carts Are High, But Carts Get Abandoned",
      symptom: "Shoppers want the items, but abandon at shipping or the final checkout step.",
      rescueAction: "Phase 3 Focus: Cart drawer optimization, unexpected fee elimination, trust badges, and automated Klaviyo SMS/Email sequences.",
      targetFix: "Frictionless Checkout & Retention Flows"
    },
    {
      title: "Ad Costs Are Rising & ROAS Is Plummeting",
      symptom: "Meta/Google ads used to work or have never been profitable from day one.",
      rescueAction: "Phase 4 & 5 Focus: Audience exclusions, creative fatigue mitigation, AOV bundle boosts, and Search/Shopping intent capture.",
      targetFix: "Multi-Channel Media Buying & AOV Scaling"
    }
  ];

  return (
    <section className="py-20 bg-[#070F1E] text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE RESCUE METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            The Mujeeb Sales Rescue System
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I don't focus on traffic alone. I look at the entire customer journey — from the first click to the final purchase.
          </p>
        </div>

        {/* The 5-Step Formula Horizontal Progress Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md mb-12 shadow-2xl">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 sm:pb-0">
            {stages.map((stage, idx) => (
              <React.Fragment key={stage.name}>
                <div className="flex flex-col items-center min-w-[120px] text-center">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center font-bold text-sm mb-2 shadow-xs">
                    0{idx + 1}
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">{stage.name}</span>
                  <span className="text-[11px] text-slate-400 max-w-[130px] mt-1 hidden md:block">
                    {stage.desc}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <div className="flex-1 hidden sm:flex items-center justify-center text-slate-600 px-1">
                    <div className="w-full h-0.5 bg-slate-800 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Store Friction Assessment */}
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Identify Your Store's Primary Friction</h3>
                <p className="text-xs text-slate-400">Select where your store is leaking revenue today:</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {diagnosticScenarios.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFriction(i)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeFriction === i
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Scenario {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Detected Challenge</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {diagnosticScenarios[activeFriction].title}
              </h4>
              <p className="text-sm text-slate-400 mb-4">
                {diagnosticScenarios[activeFriction].symptom}
              </p>

              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block mb-0.5">
                    Recommended Rescue Action:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {diagnosticScenarios[activeFriction].rescueAction}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Strategic Priority
              </span>
              <div className="text-sm font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3.5 py-2 rounded-xl mb-4 text-center">
                {diagnosticScenarios[activeFriction].targetFix}
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Rescue My Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

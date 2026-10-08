import React from 'react';
import { Clock, Users, Globe, TrendingUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const blocks = [
    {
      icon: Clock,
      stat: "6+",
      label: "Years Experience",
      sub: "Built for better store performance",
    },
    {
      icon: Users,
      stat: "350+",
      label: "Clients Served",
      sub: "Turn more visitors into customers",
    },
    {
      icon: Globe,
      stat: "Global",
      label: "Client Reach",
      sub: "US, UK, CA, AU & Worldwide",
    },
    {
      icon: TrendingUp,
      stat: "eCommerce",
      label: "Growth Focused",
      sub: "Build a smarter growth system",
    },
  ];

  return (
    <section className="bg-[#0B1528] text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {blocks.map((block, index) => {
            const IconComponent = block.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group hover:translate-y-[-2px] transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      {block.stat}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">
                      {block.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 truncate">
                    {block.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

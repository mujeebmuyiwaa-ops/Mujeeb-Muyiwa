import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
          <span>{service.category}</span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Core Scope of Deliverables:
          </h4>
          <div className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap mb-6">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBook();
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

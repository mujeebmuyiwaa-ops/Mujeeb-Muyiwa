import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Check, X, Search, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '../data/siteData';

interface PortfolioSectionProps {
  onOpenAudit: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenAudit }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fullPageView, setFullPageView] = useState<boolean>(false);

  const filterTabs = [
    { label: 'All Stores (11)', value: 'all' },
    { label: 'Shopify', value: 'shopify' },
    { label: 'Fashion & Shoes', value: 'fashion' },
    { label: 'Beauty & Skincare', value: 'beauty' },
    { label: 'Jewelry', value: 'jewelry' },
    { label: 'Food & Beverage', value: 'beverage' },
    { label: 'Lifestyle & Family', value: 'lifestyle' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    // Filter Category matching
    let matchesCategory = true;
    if (activeFilter === 'all') matchesCategory = true;
    else if (activeFilter === 'shopify') matchesCategory = proj.category.toLowerCase().includes('shopify');
    else matchesCategory = proj.filterCategory === activeFilter;

    // Search query matching
    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              CLIENT PORTFOLIO & LIVE STORES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Selected eCommerce Projects
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore live eCommerce brands and stores optimized by Mujeeb Sales Rescue. Click any live store link below to inspect their real customer experience, structure, and conversion anatomy.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Segmented Category Filter */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/70">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search store name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Results Counter and Live Store Note */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">
              Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} verified stores
            </span>
            <span>·</span>
            <span className="text-emerald-600 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Live Stores Accessible
            </span>
          </div>

          <span className="text-slate-400 hidden sm:inline">
            Click "Visit Live Store" to review each site in a new tab
          </span>
        </div>

        {/* Responsive Portfolio Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Live Badges */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wide">
                  {project.category}
                </div>

                {/* Platform Tag */}
                {project.platform && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-2xs border border-slate-100">
                    {project.platform}
                  </div>
                )}

                {/* Outcome Stat Ribbon */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-sm border border-slate-100">
                  {project.stats}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Clean Direct Domain preview */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-orange-600 mb-3 transition-colors"
                  >
                    <Globe className="w-3 h-3 text-slate-400" />
                    <span>{project.url.replace(/^https?:\/\//, '')}</span>
                  </a>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 cursor-pointer"
                  >
                    <span>Inspect Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Direct Link to Verified Live Store */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-orange-500 rounded-xl transition-all shadow-2xs hover:shadow-sm"
                  >
                    <span>Visit Live Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with conversion prompt */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Proven Growth Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Want Similar Results For Your Store?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We apply the exact same conversion frameworks, mobile UX enhancements, and retention systems to your specific niche and catalog.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Get Your Store Rescued
            </button>
          </div>
        </div>

      </div>

      {/* Case Details & Live Store Inspector Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
              <span>{selectedProject.category}</span>
              {selectedProject.country && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">{selectedProject.country}</span>
                </>
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {selectedProject.title}
            </h3>

            {/* Direct Link Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-slate-900">Live URL:</span>
                <span className="text-slate-600">{selectedProject.url}</span>
              </div>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-2xs"
              >
                <span>Open Live Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-6">
              Verified Growth Metric: {selectedProject.stats}
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 aspect-16/9 bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 mb-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">The Friction & Challenge:</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">The Rescue Strategy:</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Implemented Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.services.map((srv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1.5"
              >
                <span>Visit {selectedProject.title} website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenAudit();
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Apply These Strategies To My Store
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

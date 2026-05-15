'use client';

import React from 'react';
import { LegalSidebar, TocItem } from './LegalSidebar';
import { motion } from 'framer-motion';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  tocItems,
  children
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 pb-24 selection:bg-amber-500/30">
      {/* Editorial Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-slate-800/50 bg-gradient-to-b from-[#0f172a] to-[#020617]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {lastUpdated && (
              <p className="text-amber-500 font-mono text-sm mb-4 tracking-wider uppercase">
                Stand: {lastUpdated}
              </p>
            )}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Column: Sticky Sidebar */}
          {tocItems.length > 0 && (
            <div className="lg:w-1/4 flex-shrink-0">
              <LegalSidebar items={tocItems} />
            </div>
          )}

          {/* Right Column: Content */}
          <div className="lg:w-3/4 max-w-4xl prose prose-invert prose-slate 
            prose-headings:font-bold prose-headings:text-white 
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-800
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg
            prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline
            prose-ul:text-slate-300 prose-li:marker:text-amber-500
            prose-strong:text-white prose-strong:font-semibold
          ">
            {children}
          </div>

        </div>
      </section>

      {/* Back to top (Mobile only) */}
      <div className="lg:hidden flex justify-center mt-12">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 bg-slate-800 text-white rounded-full text-sm font-medium border border-slate-700 hover:bg-slate-700 transition-colors"
        >
          Nach oben
        </button>
      </div>
    </div>
  );
}

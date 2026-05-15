import React from 'react';

interface LegalCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function LegalCard({ title, icon, children }: LegalCardProps) {
  return (
    <div className="bg-[#0f172a]/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 hover:bg-[#1e293b]/80 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-amber-500">{icon}</div>}
        <h3 className="text-xl font-bold text-white !m-0 !mt-0">{title}</h3>
      </div>
      <div className="text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

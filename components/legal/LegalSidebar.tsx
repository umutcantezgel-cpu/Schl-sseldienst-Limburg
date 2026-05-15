'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface TocItem {
  id: string;
  label: string;
}

interface LegalSidebarProps {
  items: TocItem[];
}

export function LegalSidebar({ items }: LegalSidebarProps) {
  const activeId = useScrollSpy(items.map(i => i.id), 150);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:block w-full max-w-xs sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar">
      <nav className="flex flex-col space-y-1">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
          Inhalt
        </h3>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`relative px-3 py-2 text-sm transition-colors duration-200 rounded-lg group ${
                isActive 
                  ? 'text-white font-medium bg-slate-800/50' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-amber-500 rounded-r-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

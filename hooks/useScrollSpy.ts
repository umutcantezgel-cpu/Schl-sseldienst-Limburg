import { useState, useEffect } from 'react';

/**
 * Hook to track the active section based on scroll position.
 * @param sectionIds Array of section IDs to track
 * @param offset Offset from the top of the viewport (in px) to consider a section "active"
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = '';
      let minDistance = Infinity;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Distance from the top of the viewport minus the offset
          const distance = Math.abs(rect.top - offset);
          
          // If the element is near the top of the viewport
          if (rect.top <= offset + 50 && distance < minDistance) {
            minDistance = distance;
            currentActiveId = id;
          }
        }
      }

      // If we found an active ID, set it. Otherwise keep the last active ID, 
      // or set to the first one if we're at the very top.
      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (window.scrollY === 0 && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

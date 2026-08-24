import { useEffect } from 'react';

export function useAdaptiveGrid() {
  useEffect(() => {
    const FONT_BASE = 16, BASE_WIDTH = 1920, COEF = 0.6666;

    function apply() {
      const w = window.innerWidth;
      if (w <= BASE_WIDTH) {
        document.documentElement.style.removeProperty('font-size');
        return;
      }
      const reduction = ((BASE_WIDTH - w) / BASE_WIDTH) * 100;
      const size = FONT_BASE - (FONT_BASE * (reduction * COEF)) / 100;
      if (size > FONT_BASE) {
        document.documentElement.style.fontSize = size + 'px';
      }
    }

    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);
}

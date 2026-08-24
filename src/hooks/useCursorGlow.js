import { useEffect } from 'react';

export function useCursorGlow() {
  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let rafId;
    let mouseX = -1000, mouseY = -1000;
    let glowX = -1000, glowY = -1000;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function tick() {
      // Smooth follow
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top  = glowY + 'px';
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);
}

// ============================================================
// LENIS — Smooth scroll init + GSAP ScrollTrigger sync
// Run only in browser (import inside <script> or client islands)
// ============================================================

import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
  });

  // Sync Lenis with GSAP ticker
  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: number) => {
    lenisInstance!.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

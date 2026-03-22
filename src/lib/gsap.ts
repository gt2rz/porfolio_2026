// ============================================================
// GSAP — Plugin registration and reusable animation helpers
// Run only in browser (import inside <script> or client islands)
// ============================================================

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export { gsap, ScrollTrigger, TextPlugin };

/** Reveal element from below — standard page entrance */
export function revealUp(
  targets: string | Element | Element[],
  options: { delay?: number; stagger?: number; duration?: number } = {}
) {
  const { delay = 0, stagger = 0.08, duration = 0.8 } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'expo.out',
      clearProps: 'transform',
    }
  );
}

/** Scroll-triggered reveal for sections */
export function scrollReveal(
  targets: string | Element | Element[],
  options: { stagger?: number; start?: string } = {}
) {
  const { stagger = 0.1, start = 'top 85%' } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: 'expo.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: typeof targets === 'string' ? targets : (targets as Element),
        start,
        once: true,
      },
    }
  );
}

/** Typewriter effect using GSAP TextPlugin */
export function typewriter(
  target: string | Element,
  text: string,
  options: { duration?: number; delay?: number; onComplete?: () => void } = {}
) {
  const { duration = text.length * 0.04, delay = 0, onComplete } = options;
  return gsap.to(target, {
    duration,
    delay,
    text: { value: text, delimiter: '' },
    ease: 'none',
    onComplete,
  });
}

import { describe, expect, it } from 'vitest';

import { animation, type MotionEasingValue } from './animation';

describe('animation', () => {
  it('exports easing tokens as ready-to-use CSS timing functions', () => {
    const easingValues: MotionEasingValue[] = [
      animation.motion.easing.linear,
      animation.motion.easing.decelerate.standard,
      animation.motion.easing.decelerate.emphasized,
      animation.motion.easing.accelerate.standard,
      animation.motion.easing.accelerate.emphasized,
    ];

    expect(easingValues).toEqual([
      'cubic-bezier(0, 0, 1, 1)',
      'cubic-bezier(0, 0, 0.2, 1)',
      'cubic-bezier(0.05, 0.6, 0.2, 1)',
      'cubic-bezier(0.4, 0, 1, 1)',
      'cubic-bezier(0.3, 0, 0.8, 0.15)',
    ]);
  });
});

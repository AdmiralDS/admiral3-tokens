export const animation = {
  motion: {
    duration: {
      instant: 0,
      short_1: 50,
      short_2: 100,
      short_3: 150,
      short_4: 200,
      medium_1: 250,
      medium_2: 300,
      medium_3: 350,
      medium_4: 400,
      long_1: 450,
      long_2: 500,
      long_3: 550,
      long_4: 600,
    },
    easing: {
      linear: [0, 0, 1, 1],
      decelerate: {
        standard: [0, 0, 0.2, 1],
        emphasized: [0.05, 0.6, 0.2, 1],
      },
      accelerate: {
        standard: [0.4, 0, 1, 1],
        emphasized: [0.3, 0, 0.8, 0.15],
      },
    },
  },
} as const;

export type Animation = typeof animation;
export type MotionDuration = typeof animation.motion.duration;
export type MotionEasing = typeof animation.motion.easing;
export type MotionEasingValue = readonly [number, number, number, number];

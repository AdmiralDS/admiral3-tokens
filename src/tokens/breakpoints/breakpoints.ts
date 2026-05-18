export const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
} as const;

export type Breakpoints = typeof breakpoints;
export type BreakpointName = keyof Breakpoints;

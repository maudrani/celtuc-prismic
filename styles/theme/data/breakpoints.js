export const breakpoints = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 1068,
  xl: 1260,
  xxl: 1440,
};

export const query = {
  up: (breakpoint) => `@media (min-width: ${breakpoints[breakpoint] || breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoints[breakpoint] || breakpoint}px)`,
};

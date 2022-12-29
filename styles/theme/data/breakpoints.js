export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const query = {
  up: (breakpoint) => `@media (min-width: ${breakpoints[breakpoint] || breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoints[breakpoint] || breakpoint}px)`,
};

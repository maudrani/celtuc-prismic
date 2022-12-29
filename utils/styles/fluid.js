import styled, { css } from 'styled-components';

export const fluid = (
  cssProp = 'padding', // the CSS property to apply to the fluid
  cssPropUnits = 'px', // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = 'max-width' // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, '');
  return css([breakpointProps]);
};

// Example
export const EXAMPLE_Title = styled.h1`
  font-size: 5rem;

  ${fluid('font-size', 'rem', [
    { 1200: 4 },
    { 800: 3 },
    { 600: 2.4 },
    { 450: 1.6 },
  ])};

  ${fluid('margin', '', [{ 1200: '40px 0' }, { 600: '20px 0' }])};
`;

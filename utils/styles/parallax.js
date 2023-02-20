const EnabledOnBreakpoint = (el) => {
  const isMobile = window.matchMedia(
    'only screen and (max-width: 1024px)'
  ).matches;
  const isDesktop = !isMobile;

  return {
    mobile: !(!!el.dataset.disableparallaxmobile && isMobile),
    desktop: !(!!el.dataset.disableparallaxdesktop && isDesktop),
  };
};

export function InitializeParallax() {
  if (!window || !document) return;
  const parallaxEls = document?.querySelectorAll('[data-speed]');

  for (const parallaxEl of parallaxEls) {
    const offset = Number(parallaxEl.dataset.offset);

    if (
      offset &&
      EnabledOnBreakpoint(parallaxEl).mobile &&
      EnabledOnBreakpoint(parallaxEl).desktop
    ) {
      parallaxEl.style.transform = `translate3d(0,${offset}px,0)`;
    }
  }

  scrollHandler();
  window.addEventListener('scroll', scrollHandler);

  function scrollHandler() {
    for (const parallaxEl of parallaxEls) {
      //Offset variables
      const offset = Number(parallaxEl.dataset.offset) || 0;
      const stopOnOffsetEnd =
        parallaxEl.dataset['stoponoffsetend'] === 'false' ? false : true;
      let offsetRest = offset;

      //Direction and speed variables
      let direction = parallaxEl.dataset.direction == 'up' ? '-' : '';
      let transformY = window.pageYOffset * parallaxEl.dataset.speed;

      // Add offset to the transformY amount
      const getOffset = () => {
        if (direction !== '-') {
          transformY += offset;

          offsetRest = offsetRest + transformY - offset;
          if (offsetRest >= 0 && stopOnOffsetEnd) {
            offsetRest = 0;
            transformY = 0;
          }
        } else {
          transformY = offset - transformY;

          if (offset - transformY >= 0) {
            direction = '';
          }

          offsetRest = offsetRest + transformY - offset;
          if (offsetRest <= 0 && stopOnOffsetEnd) {
            offsetRest = 0;
            transformY = 0;
          }
        }
      };

      if (!!offset == true) getOffset();

      if (
        EnabledOnBreakpoint(parallaxEl).mobile &&
        EnabledOnBreakpoint(parallaxEl).desktop
      ) {
        parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
      }
    }
  }
}

import styled from 'styled-components';

export const HeroWrapper = styled.section`
  :root {
    /*  HERO FIGCAPTION STYLES */
    --hero-text-color: white;
    --hero-text-h2-size: 5vw;
    --hero-text-h3-size: 3vw;
    --hero-text-h2-mobile-size: 10vw;
    --hero-text-h3-mobile-size: 6vw;

    /*  HERO FIGCAPTION BACKGROUND COLOR
     Background color with transparency to soften video amd focus on title  */
    --hero-figcaption-background-color: rgba(0, 0, 0, 0.15);
  }

  /*  SMOOTH SCROLLING 
    Great read on scroll behavior here:
    https://css-tricks.com/almanac/properties/s/scroll-behavior/ */

  html {
    scroll-behavior: smooth;
  }

  .hero-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  .hero-wrapper figcaption {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--hero-figcaption-background-color);
  }

  figcaption h2,
  figcaption h3 {
    color: var(--hero-text-color);
    opacity: 0.8;
    line-height: 1;
    margin: 0;
    letter-spacing: 2px;
    text-shadow: 2px 0 0 rgba(0, 0, 0, 0.5), 0 2px 0 rgba(0, 0, 0, 0.5),
      -2px 0 0 rgba(0, 0, 0, 0.5), 0 -2px 0 rgba(0, 0, 0, 0.5);
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-fon-smoothing: grayscale;
  }

  figcaption h2 {
    font-size: var(--hero-text-h2-size);
    text-transform: uppercase;
  }
  figcaption h3 {
    font-size: var(--hero-text-h3-size);
  }
  @media (max-width: 980px) {
    figcaption h2 {
      font-size: var(--hero-text-h2-mobile-size);
    }
    figcaption h3 {
      font-size: var(--hero-text-h3-mobile-size);
    }
  }

  .overflow-wrapper {
    position: absolute;
    /* compute width based on aspect ratio and VH / Vertical Height. */
    width: calc(100vh * (16 / 9));
    height: 100vh;
    /* Shift iframe left edge halfway across the parent container */
    left: 50%;
    top: 50%;
    /* Shift the iframe back by half  it's width -  centering the iframe */
    transform: translate(-50%, -50%);
  }

  /* MEDIA QUERY
  When viewport is wider than the video's aspect ratio fit.
 */
  @media (min-aspect-ratio: 16/9) {
    .overflow-wrapper {
      /* Set width to 100VW */
      width: 100vw;
      /* Calculate height based on aspect ratio's VW - veritcal width */
      height: calc(100vw * (9 / 16)); /* assumes 16:9 */
    }
  }
  /* POSITION IFRAME IN CONTAINER */
  .overflow-wrapper iframe {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  /* Hero Effect Forked from Eric Porter
   https://codepen.io/EricPorter/pen/MeQwWG */

  .shade-effect {
    position: absolute;
    top: 0;
    z-index: 999;

    width: 100% !important;
    height: 100% !important;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  /*  SCROLL DOWN ICON
    Forked from Thomas Nägele
    https://codepen.io/xonic/pen/KWMaqe​  
    Love the way this looks.  Unobtrusive.

*/

  .scroll-down {
    position: absolute;
    z-index: 999;
    font-weight: 800;
    color: white;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-decoration: none;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .scroll-down .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .scroll-down .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .scroll-down .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .scroll-down .chevron:before,
  .scroll-down .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  .scroll-down:hover .chevron:before,
  .scroll-down:hover .chevron:after {
    background: red;
  }

  .scroll-down .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .scroll-down .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  .scroll-down .text {
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: 'Hontserrat', sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;
  }

  .scroll-down:hover .text {
    color: red;
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }

  /*  mark-up for demo  */

  body {
    background: #292929;
    color: white;
  }
  article {
    height: 100vh;
    text-align: center;
    padding: 35px;
    font-size: 5vw;
  }
`;

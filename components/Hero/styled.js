import styled from "styled-components";

export const HeroWrapper = styled.section`
  :root {
    --hero-text-color: white;
    --hero-text-h2-size: 5vw;
    --hero-text-h3-size: 3vw;
    --hero-text-h2-mobile-size: 10vw;
    --hero-text-h3-mobile-size: 6vw;
    --hero-figcaption-background-color: rgba(0, 0, 0, 0.15);
  }

  .hero-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0;

    ::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background: radial-gradient(
        circle,
        rgba(25, 33, 43, 0) 37%,
        rgba(10, 10, 10, 0.8916610589548319) 100%
      );
    }

    height: ${({ size }) => `${size || 100}vh`};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
  }

  .hero-logo {
    max-width: 200px;
    filter: drop-shadow(-10px 10px 25px rgba(0, 0, 0, 0.55));

    @media (max-width: 1000px) {
      max-width: 30vw;
    }
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

  .hero-caption {
    z-index: 20;
    gap: 70px;
    color: white;

    h2 {
      font-size: 100px;
      font-weight: 700;
      text-transform: uppercase;

      filter: drop-shadow(-5px 10px 17px rgba(0, 0, 0, 0.4));
    }

    p {
      font-size: 20px;
      max-width: 900px;
      font-weight: 500;
      text-align: center;
    }

    .hero-disclaimer {
      font-size: 17px;
      font-weight: 300;
      opacity: 0.7;
      position: absolute;
      bottom: 5%;

      @media (max-width: 1000px) {
      font-size: 12px;
    }
    }
  }

  figcaption h2,
  figcaption h3 {
    color: var(--hero-text-color);
    line-height: 1;
    margin: 0;
    letter-spacing: 2px;
    text-shadow: 2px 0 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.1),
      -2px 0 0 rgba(0, 0, 0, 0.1), 0 -2px 0 rgba(0, 0, 0, 0.1);
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
    z-index: 10;

    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
  }
`;

import React from 'react';
import { HeroWrapper } from './styled';

const Hero = () => {
  return (
    <HeroWrapper>
    <figure className='hero-wrapper'>
      <div className='video-hero-wrapper'>
        <div className='overflow-wrapper'>
          <iframe
            src='https://www.youtube.com/embed/DIGChPjcb0I?autoplay=1&playlist=DIGChPjcb0I&loop=1&mute=1'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <figcaption>
          <div className='shade-effect'></div>

          <h2>Video Hero</h2>
          <h3 className='hero-subtitle'>16/9 Aspect Ratio</h3>
        </figcaption>
      </div>
    </figure>
    </HeroWrapper>
  );
};

export default Hero;

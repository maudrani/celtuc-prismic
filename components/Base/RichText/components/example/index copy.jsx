import React from 'react';
import { RichTextContainer } from './styled';

const RichText = ({ data }) => {
  return (
    <RichTextContainer>
      <div className="content">
        <ul className="bullet-titles">
          <li>
            <strong>Words</strong> Vidula Kotian
          </li>
          <li>
            <strong>Date</strong> 03 August 2022
          </li>
        </ul>

        <p>
          One of the most prolific and versatile architects in Mexico today,
          Alberto Kalach has never shied away from sharing his opinions,
          especially on the lack of urban planning in his native Mexico City,
          and dreaming of largescale{' '}
          <a href="https://www.theguardian.com/cities/2015/nov/13/alberto-kalach-return-mexico-city-ancient-lakes">
            utopian civic planning projects
          </a>
          that give equal credence to people and nature. Kalach’s precise
          craft-like approach to architecture in combination with his deep
          understanding of indigenous flora has lead to his firm{' '}
          <a href="https://www.kalach.com/">Taller de Arquitectura X</a>
          carving out a rich portfolio of expressive masonry in his country and
          abroad.
        </p>
      </div>
    </RichTextContainer>
  );
};

export default RichText;

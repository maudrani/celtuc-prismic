import PropTypes from 'prop-types';

import React from 'react';
import { TextOnImageContainer, ImgContainer, TextContainer } from './styled';
import PRESETS from './settings';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Img from '@/components/Base/Core/Img';

import { getDataProps } from './adapters';
import Section from '@/components/Base/Section';
import { GetCompountPreset } from '@/components/Base/Core/CSS_ENGINE/utils/presets';
import CTA from '@/components/Compounds/CTA';
import PromoTexts from '@/components/Compounds/Promo-Texts';
import config from '@/styles/config';

const TextOnImage = (props) => {
  const {
    theme,
    size,
    direction,
    align_y,
    text_direction,
    backgroundColor,
    fontColor,
    max_width,
    spacing,
    spacing_t,
    spacing_b,
    padding,
    padding_t,
    padding_b,
    title_animation,
    round,
    text_size,
    cta_size,

    img,
    hasContent,
    ctas,
    hasCtas,
    hasImg,
    tag,
    subtitle,
    title,
    description,
  } = getDataProps(props);
  const { background, font } = theme;

  const styles = GetCompountPreset([size, direction], PRESETS);

  return (
    <Section
      data={{
        ...styles.wrapper,
        background_color: backgroundColor || background.main,
        font_color: fontColor || font.main,

        max_width,
        spacing,
        spacing_t,
        spacing_b,
        padding,
        padding_t,
        padding_b,
      }}
    >
      <TextOnImageContainer data={{ ...styles.parent, align_y }}>
        {hasContent && (
          <DynamicPanel data={{ ...styles.text_padding }}>
            <TextContainer
              data={{
                ...styles.text_container,
                [text_size && 'size']: text_size,
                align_x: text_direction || direction,
              }}
              textAlign={text_direction}
            >
              <PromoTexts
                tag={tag}
                subtitle={subtitle}
                title={title}
                description={description}
                fontColors={font}
                titleAnimation={title_animation}
              />
              {hasCtas && (
                <DynamicPanel
                  data={{
                    size: { main: cta_size, md: 'sm' },
                    direction: { main: 'row', md: 'column' },
                    align_x: 'center',
                    align_y: 'center',
                    m_t: 0.2,
                    gap: { main: 1.4, md: 0.95 },
                  }}
                >
                  {ctas.map((cta, idx) => (
                    <CTA key={`cta-${idx}`} cta={cta} theme={theme} />
                  ))}
                </DynamicPanel>
              )}
            </TextContainer>
          </DynamicPanel>
        )}

        {hasImg && (
          <ImgContainer
            data={{
              ...styles.img_container,
              ...img?.data,
              border_radius: round,
            }}
            style={{ overflow: 'hidden' }}
          >
            <Img src={img.src} />
          </ImgContainer>
        )}
      </TextOnImageContainer>
    </Section>
  );
};

export default TextOnImage;

TextOnImage.propTypes = {
  theme: PropTypes.oneOf(Object.keys(config.colors.themes)),
  size: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right', 'center']),
  text_direction: PropTypes.oneOf(['left', 'right', 'center']),
  backgroundColor: PropTypes.oneOf([
    ...Object.keys(config.colors.background),
    ...Object.keys(config.colors),
  ]),
  fontColor: PropTypes.oneOf([
    ...Object.keys(config.colors.font),
    ...Object.keys(config.colors),
  ]),
  max_width: PropTypes.number,
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacing_t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacing_b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding_t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding_b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title_animation: PropTypes.string,
  round: PropTypes.string,
  text_size: PropTypes.string,
  cta_size: PropTypes.string,

  img: PropTypes.object,
  ctas: PropTypes.array,
  tag: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

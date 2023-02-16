import React from 'react';
import { TextOnImageContainer, ImgContainer, TextContainer } from './styled';
import PRESETS from './settings';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Img from '@/components/Base/Core/Img';
import RichText from '@/components/Base/Core/RichText';
import Button from '../Base/Button';
import Link from '../Base/Link';
import { getDataProps } from './adapters';
import Section from '../Base/Section';
import { merge } from 'lodash';
import { GetCompountPreset } from '../Base/Core/CSS_ENGINE/utils/presets';

const Cta = ({ cta, theme }) =>
  cta.type === 'button' ? (
    <Button
      data={{
        background_color: theme.background.accent,
        font_color: theme.font.button,
      }}
    >
      {cta.text}
    </Button>
  ) : (
    <Link
      chevron={'true'}
      href={cta.href}
      data={{
        size: { main: 'md', md: '1.15em' },
        font_color: theme.font.accent,
      }}
    >
      {cta.text}
    </Link>
  );

const TextOnImage = (props) => {
  const {
    theme,
    size,
    direction,
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
    img_animation,
    round,
    text_size,

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
      <TextOnImageContainer data={{ ...styles.parent, ...props.data?.parent }}>
        {hasContent && (
          <TextContainer
            data={{ ...styles.text_container }}
            textAlign={text_direction}
          >
            {tag?.text && (
              <DynamicPanel
                data={{
                  size: { main: '0.45em', md: 'xs' },
                  m_b: { main: '0.3', md: 0.6 },
                  font_color: font.second,
                  ...tag?.data,
                }}
              >
                <RichText data={{ size: 'xs' }}>{tag?.text}</RichText>
              </DynamicPanel>
            )}
            {subtitle?.text && (
              <DynamicPanel
                data={{
                  size: { main: '0.6em', md: 'sm' },
                  m_b: 0.5,
                  ...subtitle?.data,
                }}
              >
                <RichText data={{ size: 'lg' }}>{subtitle?.text}</RichText>
              </DynamicPanel>
            )}
            {title?.text && (
              <DynamicPanel
                data={{
                  size: { main: '1em', lg: '1.1em', md: 'xl' },
                  font_color: title?.color,
                  font_type: 'gradient',
                  font_gradient_direction: title?.direction,

                  m_b: {
                    md: '.25',
                  },
                  ...title?.data,
                }}
              >
                <RichText data={{ size: 'xxl' }}>{title.text}</RichText>
              </DynamicPanel>
            )}
            {description?.text && (
              <DynamicPanel
                data={{
                  size: { main: '0.55em', lg: '0.7em', md: 'sm' },
                  m_t: 0.8,
                  max_width: {
                    md: 230,
                  },
                  ...description?.data,
                }}
              >
                <RichText data={{ size: 'md' }}>{description.text}</RichText>
              </DynamicPanel>
            )}
            {hasCtas && (
              <DynamicPanel
                data={{
                  size: 'sm',
                  m_t: { main: 1.5, md: 1 },
                  direction: { main: 'row', md: 'column' },
                  align_x: 'center',
                  align_y: 'center',
                  gap: { main: 1.4, md: 0.95 },
                }}
              >
                {ctas.map((cta, idx) => (
                  <Cta key={`cta-${idx}`} cta={cta} theme={theme} />
                ))}
              </DynamicPanel>
            )}
          </TextContainer>
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

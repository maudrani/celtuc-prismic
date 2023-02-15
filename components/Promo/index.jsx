import React from 'react';
import { CalloutContainer, TextContainer, CustomImg } from './styled';
import PRESETS from './settings/direction';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import RichText from '@/components/Base/Core/RichText';
import Button from '../Base/Button';
import Link from '../Base/Link';
import { getDataProps } from './adapters';
import Section from '../Base/Section';
import Animation from '../Base/Core/Animation';

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

const Callout = (props) => {
  const {
    //data from prismic
    theme,
    direction,
    title_animation,
    img_animation,
    max_width,
    spacing,
    spacing_t,
    spacing_b,
    //normal data
    img,
    ctas,
    hasContent,
    hasCtas,
    hasImg,
    tag,
    subtitle,
    title,
    description,
  } = getDataProps(props);
  const { background, font } = theme;

  const styles = PRESETS[direction];

  return (
    <Section
      data={{
        ...styles.wrapper,
        background_color: background.main,
        font_color: font.main,
        max_width,
        spacing,
        spacing_t,
        spacing_b,
      }}
    >
      <CalloutContainer data={styles.parent}>
        {hasContent && (
          <TextContainer data={styles.text_container}>
            {tag?.text && (
              <DynamicPanel
                data={{
                  size: { main: '0.45em', md: 'xs' },
                  m_b: { main: '0.3', md: 0.6 },
                  font_color: font.second,
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
                }}
              >
                <RichText data={{ size: 'lg' }}>{subtitle?.text}</RichText>
              </DynamicPanel>
            )}
            {title?.text && (
              <DynamicPanel
                data={{
                  size: { main: '1em', lg: '1.1em', md: 'xl' },
                  font_color: title?.color || font.main,
                  font_type: title?.type || 'gradient',
                  font_gradient_direction: title?.direction,
                  m_b: {
                    main: 0.15,
                    md: '.25',
                  },
                }}
              >
                <Animation
                  data={{ type: title_animation }}
                  style={{ width: '100%' }}
                >
                  <RichText data={{ size: 'xxl' }}>{title.text}</RichText>
                </Animation>
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
          <DynamicPanel data={styles.img_container}>
            <Animation data={{ type: img_animation }} style={{ width: '100%' }}>
              <CustomImg src={img.src} />
            </Animation>
          </DynamicPanel>
        )}
      </CalloutContainer>
    </Section>
  );
};

export default Callout;

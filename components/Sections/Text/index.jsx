import { GetCompountPreset } from '@/components/Base/Core/CSS_ENGINE/utils/presets';
import Section from '@/components/Base/Section';
import React from 'react';
import { getDataProps, getRepeatedContents } from './adapters';
import { TextContainer } from './styled';
import PRESETS from './settings';
import Animation from '@/components/Base/Core/Animation';
import RichText from '@/components/Base/Core/RichText';

const Text = (props) => {
  const {
    theme,
    size,
    direction,
    backgroundColor,
    fontColor,
    max_width,
    spacing,
    spacing_t,
    spacing_b,
    padding,
    padding_t,
    padding_b,
    round,

    items,
    text_direction,
    text_size,
    gap,
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
      <TextContainer
        data={{
          ...styles.parent,
          [text_size && 'size']: text_size,
          gap,
        }}
        textAlign={text_direction}
      >
        {
          /* getRepeatedContents(items) */ items.map((item, idx) => (
            <TextContainer
              key={`rich-text-${idx}`}
              data={{ [item.size && 'size']: item.size }}
              textAlign={item.direction}
            >
              <Animation data={{ type: item.animation }}>
                <RichText
                  data={{ markdown: item.text, size: item.size || text_size }}
                />
              </Animation>
            </TextContainer>
          ))
        }
      </TextContainer>
    </Section>
  );
};

export default Text;

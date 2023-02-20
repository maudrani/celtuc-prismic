import React from 'react';

import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import RichText from '@/components/Base/Core/RichText';
import { TitleContainer } from './styled';
import Animation from '@/components/Base/Core/Animation';

const PromoTexts = ({
  tag,
  subtitle,
  title,
  description,
  fontColors,
  titleAnimation,
}) => {
  return (
    <>
      {tag?.text && (
        <DynamicPanel
          data={{
            size: { main: '1em', md: 'xs' },
            m_b: { main: '0.3', md: 0.6 },
            font_color: fontColors.second,
            ...tag?.data,
          }}
        >
          <RichText data={{ size: 'xs' }}>{tag?.text}</RichText>
        </DynamicPanel>
      )}
      {subtitle?.text && (
        <DynamicPanel
          data={{
            size: { main: '1.41em', md: 'sm' },
            font_color: fontColors.main,
            m_b: 0.4,
            ...subtitle?.data,
          }}
        >
          <RichText data={{ size: 'lg' }}>{subtitle?.text}</RichText>
        </DynamicPanel>
      )}
      {title?.text && (
        <TitleContainer
          data={{
            size: { main: '2.82em', md: 'xxl' },
            font_color: title?.color || fontColors.main,
            font_type: title?.type,
            font_gradient_direction: title?.direction,
            m_b: { main: 0.6 },
            ...title?.data,
          }}
        >
          <Animation data={{ type: titleAnimation }}>
            <RichText data={{ size: 'xxl' }} className="title_rich_text">
              {title.text}
            </RichText>
          </Animation>
        </TitleContainer>
      )}
      {description?.text && (
        <DynamicPanel
          data={{
            size: { main: '1.23em', md: 'sm' },
            m_b: 1.5,
            font_color: fontColors.main,
            max_width: {
              md: 230,
            },
            ...description?.data,
          }}
        >
          <RichText data={{ size: 'md' }}>{description.text}</RichText>
        </DynamicPanel>
      )}
    </>
  );
};

export default PromoTexts;

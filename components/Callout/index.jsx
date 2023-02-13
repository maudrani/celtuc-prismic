import React from 'react';
import { CalloutContainer } from './styled';
import preset from './presets/top';
import DynamicPanel from '../Base/DynamicPanel';
import Img from '../Base/Img';
import RichText from '../Base/RichText';
import Button from '../Base/Button';
import Link from '../Base/Link';
import { getDataProps } from './adapters';

const Callout = (props) => {
  const { theme } = getDataProps(props.data, preset);

  const { background, font } = theme;

  return (
    <CalloutContainer
      data={{ ...preset.wrapper, background_color: background, font_color: font.main }}
    >
      <DynamicPanel data={preset.parent} className="uContainContent">
        <DynamicPanel data={preset.text_container}>
          <DynamicPanel
            data={{
              size: { main: 'sm', md: 'xs' },
              m_b: { md: 0.6 },
              font_color: font.second,
            }}
          >
            <RichText data={{ size: 'sm' }}>New</RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: { main: 'lg', md: 'sm' },
            }}
          >
            <RichText data={{ size: 'lg' }}>{'**iPhone 14 Pro**'}</RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: { main: 'xxl', md: 'xl' },
              font_color: 'violet-pink-1',
              font_type: 'gradient',
              font_gradient_direction: 'bottom',
              m_t: {
                md: '.25',
              },
              m_b: {
                md: '.25',
              },
            }}
          >
            <RichText data={{ size: 'xxl' }}>
              {'##### **Pro. Beyond.**'}
            </RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: { main: 'md', md: 'sm' },
              m_t: 0.8,
              max_width: {
                md: 230,
              },
            }}
          >
            <RichText data={{ size: 'md' }}>
              From $41.62/mo. for 24 mo. or $999 before trade‑in1
            </RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: 'sm',
              m_t: { main: 1.5, md: 1 },
              m_b: 1.5,
              direction: { main: 'row', md: 'column' },
              align_x: 'center',
              align_y: 'center',
              gap: { main: 1.4, md: 0.95 },
            }}
          >
            <Button>Buy</Button>
            <Link chevron={'true'} data={{ size: { main: 'md', md: 'sm' } }}>
              Learn more
            </Link>
          </DynamicPanel>
        </DynamicPanel>

        <DynamicPanel data={preset.img_container}>
          <Img src={'/img/static/test/iphone-img-test.jpg'} />
        </DynamicPanel>
      </DynamicPanel>
    </CalloutContainer>
  );
};

export default Callout;

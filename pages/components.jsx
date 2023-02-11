import Button from '@/components/Base/Button';
import DynamicPanel from '@/components/Base/DynamicPanel';
import Img from '@/components/Base/Img';
import Link from '@/components/Base/Link';
import RichText from '@/components/Base/RichText';
import React from 'react';
import styled from 'styled-components';

const CustomWrapper = styled(DynamicPanel)`
  text-align: center;
`;

const CustomParent = styled(DynamicPanel)``;

const TextContainer = styled(DynamicPanel)``;

const ImgContainer = styled(DynamicPanel)``;

const Components = () => {
  const settings_wrapper = {
    width: 100,

    background_color: ['black'],
    background_direction: 'right',
  };

  const settings_parent = {
    size: { main: 'xxl', xxl: 'xl', md: 'sm' },
    width: 100,
    height: 100,
    min_height: 670,

    align_y: 'bottom',
    align_x: 'center',

    gap: {
      main: 0,
      lg: 0,
    },
  };

  const settings_text_container = {
    p_t: { main: 1, xs: 1 },
    p_b: { main: 0, xs: 1 },
    p_r: { main: 2, xs: 1 },
    p_l: { main: 2, xs: 1 },

    height: 100,
    min_height: 336,

    align_y: 'center',
    align_x: 'center',
  };

  const settings_img_container = {
    size: 'sm',

    height: 100,
    min_height: 336,

    width: 100,
    max_width: { main: 782, lg: '75%', md: 277 },

    align_y: 'bottom',

    p_t: {
      main: 0,
      md: 0,
    },
  };

  return (
    <CustomWrapper data={settings_wrapper}>
      <CustomParent data={settings_parent} className="uContainContent">
        <TextContainer data={settings_text_container}>
          <DynamicPanel
            data={{ size: { main: 'sm', md: 'xs' }, m_b: {md: 0.6}, font_color: ['dark-5'] }}
          >
            <RichText data={{ size: 'sm' }}>New</RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{ size: { main: 'lg', md: 'sm' }, font_color: ['light-1'] }}
          >
            <RichText data={{ size: 'lg' }}>{'**iPhone 14 Pro**'}</RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: { main: 'xxl', md: 'xl' },
              font_color: 'violet-pink-1',
              font_type: 'gradient',
              font_gradient_direction: 'bottom',
            }}
          >
            <RichText data={{ size: 'xxl' }}>
              {'##### **Pro. Beyond.**'}
            </RichText>
          </DynamicPanel>
          <DynamicPanel
            data={{
              size: { main: 'md', md: 'sm' },
              font_color: 'light-1',
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
              m_t: {main:1.5, md: 1},
              m_b: 1.5,
              direction: {main: 'row', md: 'column'},
              align_x: 'center',
              align_y: 'center',
              gap: {main: 1.4, md: 0.95}
            }}
          >
            <Button>Buy</Button>
            <Link chevron={'true'} data={{size: {md: 'sm'}}}>
              Learn more
            </Link>
          </DynamicPanel>
        </TextContainer>
        <ImgContainer data={settings_img_container}>
          <Img src={'/img/static/test/iphone-img-test.jpg'} />
        </ImgContainer>
      </CustomParent>
    </CustomWrapper>
  );
};

export default Components;

import React from 'react';
import { getDataProps } from './adapters';
import Section from '@/components/Base/Section';
import { Container, Row, Col } from 'react-grid-system';
import Promo from '@/components/Sections/Promo';

const Grid = (props) => {
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

    items,
    text_size,
    gap,
  } = getDataProps(props);
  const { background, font } = theme;

  return (
    <Section
      data={{
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
      style={{paddingLeft: '0px', paddingRight: 0}}
    >
      <Container fluid style={{paddingRight: 0, paddingLeft: 0}}>
        <Row gutterWidth={gap} >
          <Col sm={4}>
            <Promo
              raw
              data={{
                themeName: 'dark-1',
                direction: 'top',
                img_animation: 'fade_in',
                title_animation: 'split_to_top',
              }}
              content={{
                tag: { text: 'New' },
                subtitle: { text: 'iPhone 14 Pro' },
                title: {
                  text: '##### **Pro. Beyond.**',
                  color: 'violet-pink-1',
                  type: 'gradient',
                  direction: 'bottom',
                },
                description: {
                  text: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
                },
              }}
              ctas={[
                {
                  type: 'button',
                  text: 'Buy',
                  href: '',
                },
                {
                  type: 'link',
                  text: 'Learn more',
                  href: '',
                },
              ]}
              img={{ src: '/img/static/test/iphone-img-test.jpg' }}
            />
          </Col>
          <Col sm={4}>
            <Promo
              raw
              data={{
                themeName: 'dark-1',
                direction: 'top',
                img_animation: 'fade_in',
                title_animation: 'split_to_top',
              }}
              content={{
                tag: { text: 'New' },
                subtitle: { text: 'iPhone 14 Pro' },
                title: {
                  text: '##### **Pro. Beyond.**',
                  color: 'violet-pink-1',
                  type: 'gradient',
                  direction: 'bottom',
                },
                description: {
                  text: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
                },
              }}
              ctas={[
                {
                  type: 'button',
                  text: 'Buy',
                  href: '',
                },
                {
                  type: 'link',
                  text: 'Learn more',
                  href: '',
                },
              ]}
              img={{ src: '/img/static/test/iphone-img-test.jpg' }}
            />
          </Col>
          <Col sm={4}>
            <Promo
              raw
              data={{
                themeName: 'dark-1',
                direction: 'top',
                img_animation: 'fade_in',
                title_animation: 'split_to_top',
              }}
              content={{
                tag: { text: 'New' },
                subtitle: { text: 'iPhone 14 Pro' },
                title: {
                  text: '##### **Pro. Beyond.**',
                  color: 'violet-pink-1',
                  type: 'gradient',
                  direction: 'bottom',
                },
                description: {
                  text: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
                },
              }}
              ctas={[
                {
                  type: 'button',
                  text: 'Buy',
                  href: '',
                },
                {
                  type: 'link',
                  text: 'Learn more',
                  href: '',
                },
              ]}
              img={{ src: '/img/static/test/iphone-img-test.jpg' }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Grid;

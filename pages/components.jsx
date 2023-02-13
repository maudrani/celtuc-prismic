import Callout from '@/components/Callout';
import React from 'react';

const Components = () => {
  return (
    <div>
      <Callout
        data={{ themeName: 'dark-1' }}
        content={{
          tag: { text: 'New', data: {} },
          subtitle: { text: 'iPhone 14 Pro', data: {} },
          title: {
            text: '##### **Pro. Beyond.**',
            color: 'violet-pink-1',
            direction: 'bottom',
            data: {},
          },
          description: {
            text: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
            data: {},
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
        img={{ src: '/img/static/test/iphone-img-test.jpg', data: {} }}
      />

      <Callout
        data={{ themeName: 'light-1', wrapper: { p_t: { main: 3 } } }}
        content={{
          tag: { text: 'New', data: {} },
          subtitle: { text: '**iPhone 14**', data: {} },
          title: {
            text: '##### **Big and bigger.**',
            color: 'multicolor-1',
            direction: 'left',
            data: {},
          },
          description: {
            text: 'From $33.29/mo. for 24 mo. or $799 before trade‑in1',
            data: {
              font_opacity: 0.5,
              m_t: { main: 0.8, md: 1.2 },
              m_b: { md: 0.8 },
            },
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
        img={{
          src: '/img/static/test/iphone-img-test-2.jpg',
          data: { m_t: 1, max_width: { main: 782, lg: 421, md: 349 } },
        }}
      />

      <Callout
        data={{
          themeName: 'light-2',
          parent: {
            align_y: 'center',
            direction: { main: 'row', lg: 'column' },
            p_r: { main: 3 },
          },
          text_container: {
            p_l: 0,
            p_r: { main: 4.5 },
          }
        }}
        content={{
          subtitle: { text: '**iPhone SE**', data: {} },
          title: {
            text: `##### **Love the power.**
            \n##### **Love the price.**
            `,
            color: 'purple-blue-1',
            direction: 'left',
            data: {},
          },
          description: {
            text: 'From $17.87/mo. for 24 mo. or $429 before trade‑in1',
            data: {
              font_opacity: 0.5,
            },
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
        img={{
          src: '/img/static/test/iphone-img-test-3.jpg',
          data: { m_t: 1, max_width: { main: 494, md: 277 } },
        }}
      />
    </div>
  );
};

export default Components;

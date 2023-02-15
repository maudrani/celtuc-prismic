import Section from '@/components/Base/Section';
import Promo from '@/components/Promo';
import TextOnImage from '@/components/TextOnImage';
import React from 'react';

const Components = () => {
  return (
    <Section
      type="page"
      data={{ background_color: 'light-1', max_width: 'full' }}
    >
      <Promo
        data={{
          themeName: 'dark-1',
          direction: 'top',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
          max_width: 'lg',
          spacing: 'none',
        }}
        content={{
          tag: { text: 'New' },
          subtitle: { text: 'iPhone 14 Pro' },
          title: {
            text: '##### **Pro. Beyond.**',
            color: 'violet-pink-1',
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

      <Promo
        data={{
          themeName: 'light-1',
          direction: 'top',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
          spacing: 'xs',
        }}
        content={{
          tag: { text: 'New' },
          subtitle: { text: '**iPhone 14**' },
          title: {
            text: '##### **Big and bigger.**',
            color: 'multicolor-1',
            direction: 'left',
          },
          description: {
            text: 'From $33.29/mo. for 24 mo. or $799 before trade‑in1',
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
        }}
      />

      <Promo
        data={{
          themeName: 'light-2',
          direction: 'left',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
        }}
        content={{
          subtitle: { text: '**iPhone SE**' },
          title: {
            text: `##### **Love the power.**
            \n##### **Love the price.**
            `,
            color: 'purple-blue-1',
            direction: 'left',
          },
          description: {
            text: 'From $17.87/mo. for 24 mo. or $429 before trade‑in1',
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
        }}
      />

      <TextOnImage
        data={{
          themeName: 'content-white-1',
          background_color: 'light-4',
          padding: 'xs',
        }}
        content={{
          subtitle: {
            text: '**A Guided Tour of**',
          },
          title: {
            text: `##### **iPhone 14 &**
            \n##### **iPhone 14 Pro**`,
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Watch the film',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/iphone-img-test-4.jpg',
        }}
      />

      <Promo
        data={{
          themeName: 'content-white-1',
          direction: 'top',
          title_animation: 'typed_text',
        }}
        content={{
          title: {
            text: `#### **Introducing the new** \n #### **MacBook Pro and Mac mini.**`,
            color: 'light-1',
            type: 'solid',
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Watch the announcement',
            href: '',
          },
        ]}
      />
    </Section>
  );
};

export default Components;

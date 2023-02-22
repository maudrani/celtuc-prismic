import Section from '@/components/Base/Section';
import Grid from '@/components/Compounds/Grid';
import Promo from '@/components/Sections/Promo';
import Text from '@/components/Sections/Text';
import TextOnImage from '@/components/Sections/TextOnImage';
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
          padding_t: 1,
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

      <Promo
        data={{
          themeName: 'light-1',
          direction: 'top',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
          spacing: 'xs',
          padding_t: 2,
        }}
        content={{
          tag: { text: 'New' },
          subtitle: { text: '**iPhone 14**' },
          title: {
            text: '##### **Big and bigger.**',
            color: 'multicolor-1',
            type: 'gradient',
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
            type: 'gradient',
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
          direction: 'left',
          size: 'lg',
          padding: 'xs',
          text_size: 'md',
          round: 'xl',
        }}
        content={{
          subtitle: {
            text: '**A Guided Tour of**',
          },
          title: {
            text: `**iPhone 14 &**
            \n**iPhone 14 Pro**`,
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

      <Grid data={{ themeName: 'content-gray-1',}} />

      <Text
        data={{
          themeName: 'content-white-1',
          direction: 'left',
          size: 'sm',
          padding: 'xl',
          max_width: 'lg',

          round: 'xl',
          text_direction: 'center',
          text_size: 'sm',
          gap: 6,
        }}
        items={[
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'xs',
            animation: 'fade_in',
          },
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'sm',
          },
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'md',
          },
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'lg',
          },
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'xl',
          },
          {
            text: `# **Hey!** \n Deserunt ea ad nisi ullamco incididunt sint eiusmod dolore dolor nostrud. Exercitation veniam aliqua aute est aliquip ipsum sunt est sunt. Nisi consectetur Lorem tempor ut qui ea ut nostrud exercitation non est cupidatat. Nisi pariatur consequat id labore fugiat ullamco aute fugiat. Consequat magna sint fugiat excepteur. Qui minim officia ex aliquip aliquip id sint.`,
            direction: 'left',
            size: 'xxl',
          },
        ]}
      />
    </Section>
  );
};

export default Components;

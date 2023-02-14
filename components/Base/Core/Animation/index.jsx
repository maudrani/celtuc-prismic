import React from 'react';
import { getDataProps } from './adapters';
import FadeInSection from './components/FadeIn';
import TypedTextSection from './components/TypedText';
import SplitToTop from './components/SplitToTop';

const Animation = (props) => {
  const { data = {}, children } = props;
  const { type } = getDataProps(data);

  const AnimationSelector = {
    fade_in: FadeInSection,
    typed_text: TypedTextSection,
    split_to_top: SplitToTop,
    none: ({ children }) => <>{children}</>,
  }[type];

  return <AnimationSelector {...props}>{children}</AnimationSelector>;
};

export default Animation;

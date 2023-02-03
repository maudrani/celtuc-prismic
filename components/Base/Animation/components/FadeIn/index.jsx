import { useEffect, useRef } from 'react';
import { useIsVisible } from 'utils/hooks/useIsVisible';
import { FadeContainer } from './styled';

const FadeInSection = ({ children, onAnimEnd = () => {} }) => {
  const domRef = useRef();

  const isVisible = useIsVisible(domRef);

  useEffect(() => {
    if (!domRef.current) return;

    const AnimationEnds = () => {
      let trigger = false;

      setTimeout(() => {
        trigger = true;
        onAnimEnd(trigger);
      }, 790);
    };

    AnimationEnds();

    return () => {};
  }, [isVisible]);

  return (
    <FadeContainer ref={domRef} className={isVisible ? ' is-visible' : ''}>
      {children}
    </FadeContainer>
  );
};

export default FadeInSection;

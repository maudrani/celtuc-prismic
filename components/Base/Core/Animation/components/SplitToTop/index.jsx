import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from 'utils/hooks/useIsVisible';
import { SplitContainer } from './styled';
import gsap from 'gsap';

const SplitToTop = (props) => {
  const { children } = props;
  const domRef = useRef();

  const isVisible = useIsVisible(domRef, { threshold: 0.25 });
  const [elements, setElements] = useState(null);

  useEffect(() => {
    if (!domRef.current?.children) return;

    const parent = domRef?.current?.children[0];

    setElements({ parent });
  }, []);

  useEffect(() => {
    const textrev = gsap.timeline();

    if (!elements) return;
    const { parent } = elements;

    parent.style.height = `${parent.offsetHeight}px`;
    parent.style.overflow = 'hidden';

    Array.of(parent.children).forEach((textEl) => {
      isVisible &&
        textrev.from(textEl, 1.8, {
          y: 200,
          ease: 'power4.out',
          delay: 0,
          skewY: 15,
          stagger: {
            amount: 0.4,
          },
        });
    });
  }, [isVisible, elements]);

  return (
    <SplitContainer
      ref={domRef}
      className={isVisible ? ' is-visible' : ''}
      {...props}
    >
      {children}
    </SplitContainer>
  );
};

export default SplitToTop;

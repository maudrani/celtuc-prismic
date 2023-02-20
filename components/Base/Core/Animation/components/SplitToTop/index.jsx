import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from 'utils/hooks/useIsVisible';
import { SplitContainer } from './styled';
import gsap from 'gsap';

const SplitToTop = (props) => {
  const { children } = props;
  const domRef = useRef();

  const isVisible = useIsVisible(domRef, { threshold: 0.01 });
  const [elements, setElements] = useState(null);

  useEffect(() => {
    if (!domRef.current?.children) return;

    const parent = domRef?.current?.children[0];

    setElements({ parent, main: domRef.current });
  }, []);

  useEffect(() => {
    if (!elements || !isVisible) return;

    const textrev = gsap.timeline();
    const { parent, main } = elements;

    setTimeout(() => {
      main.style.opacity = 1;
      parent.style.overflow = 'hidden';

      Array.of(parent.children).forEach((textEl) => {
        textrev.from(textEl, 1.8, {
          y: 150,
          ease: 'power4.out',
          delay: 0,
          skewY: 15,
          stagger: {
            amount: 0.4,
          },
        });
      });
    }, 1);
  }, [isVisible]);

  return (
    <SplitContainer ref={domRef} {...props}>
      {children}
    </SplitContainer>
  );
};

export default SplitToTop;

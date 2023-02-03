import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from 'utils/hooks/useIsVisible';
import { TypedSectionContainer } from './styled';

const TypedTextSection = ({ children }) => {
  const domRef = useRef();

  const isVisible = useIsVisible(domRef, { threshold: 1 });
  const [typedTextEl, setTypedTextChildren] = useState();

  useEffect(() => {
    if (!domRef.current || !document) return;

    setTypedTextChildren({
      children: Array.from(domRef.current?.children[0]?.children),
      el: domRef.current.querySelector('.typed-text'),
    });
  }, []);

  useEffect(() => {
    if (!typedTextEl) return;

    const TypeEngine = () => {
      const AnimateText = (domEl) => {
        domEl.style.minHeight = `${domEl.offsetHeight}px`; //Gives the height of the main parent

        //Checking if children
        // ONLY ACCEPTED ONE, IN A FUTURE MAY ACCEPT ALL
        const children = domEl.children;
        if (children.length > 0) domEl = children[0];

        let elementString = domEl.textContent;
        const dividedString = elementString.split('');

        domEl.innerHTML = '';

        const type_speed = {
          slow: 90,
          slow_plus: 45,
          mid: 20,
          mid_plus: 8,
          fast: 4,
          fast_plus: 0.5,
        };

        const speed_assign = () => {
          const isInRange = (min, max) =>
            dividedString.length < max && dividedString.length > min;

          if (isInRange(0, 15)) return type_speed.slow;
          if (isInRange(15, 50)) return type_speed.slow_plus;
          if (isInRange(50, 90)) return type_speed.mid;
          if (isInRange(90, 250)) return type_speed.mid_plus;
          if (isInRange(250, 500)) return type_speed.fast;
          if (dividedString.length > 500) return type_speed.fast_plus;

          return type_speed.mid;
        };

        const typing = () => {
          function animate() {
            dividedString.length > 0
              ? (domEl.innerHTML += dividedString.shift())
              : clearTimeout(running);
            const running = setTimeout(animate, speed_assign());
          }

          animate();
        };

        typing();
      };

      const GetChildren = (el_collection = []) => {
        el_collection.forEach((element) => {
          isVisible && AnimateText(element);

          /* const ChildrenArray = Array.from(element.children);

          if (ChildrenArray.length) {
            isVisible && AnimateText(element);
            GetChildren(ChildrenArray);
          } else {
            isVisible && AnimateText(element);
          } */
        });
      };

      GetChildren(typedTextEl?.children);
    };

    TypeEngine();

    return () => {
      TypeEngine();
    };
  }, [isVisible, typedTextEl]);

  return (
    <TypedSectionContainer ref={domRef} show={isVisible}>
      {children}
    </TypedSectionContainer>
  );
};

export default TypedTextSection;

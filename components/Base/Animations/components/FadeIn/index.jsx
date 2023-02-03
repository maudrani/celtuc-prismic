import { useEffect, useRef, useState } from 'react';
import { FadeContainer } from './styled';

const FadeInSection = ({ children }) => {
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:

          setTimeout(() => {
            setVisible(true);
          }, 300);

          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeContainer ref={domRef} className={isVisible ? ' is-visible' : ''}>
      {children}
    </FadeContainer>
  );
};

export default FadeInSection;

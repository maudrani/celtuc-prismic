import { useEffect, useState } from 'react';

export const useIsVisible = (
  ref,
  options = { threshold: 0.25, timeout: 300 }
) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:

          setTimeout(() => {
            setVisible(true);
          }, options.timeout);

          // No need to keep observing:
          observer.unobserve(ref.current);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

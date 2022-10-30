import { useEffect, useRef, useState } from 'react';

const useElementOnSecreen = (
  threshold = 0.1
): [boolean, React.RefObject<any>] => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<any>(null);

  const callbackFunction: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);
    }
  };

  const optios: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optios);
    containerRef.current && observer.observe(containerRef.current);
    return () => {
      containerRef.current && observer.unobserve(containerRef.current);
    };
  }, [containerRef, optios]);

  return [isVisible, containerRef];
};

export default useElementOnSecreen;

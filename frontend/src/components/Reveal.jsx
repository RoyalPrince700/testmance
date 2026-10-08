import { useEffect, useRef, useState } from 'react';

const Reveal = ({ as: Tag = 'div', className = '', delay = 0, onShow, children }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const onShowRef = useRef(onShow);
  onShowRef.current = onShow;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      onShowRef.current?.();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        onShowRef.current?.();
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} ${shown ? 'rise-in' : 'rise-pending'}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

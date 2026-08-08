import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Délai avant l'apparition, en ms (équivalent data-aos-delay du template) */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * Révélation au défilement, équivalent React du `data-aos="fade-up"` du template Nova.
 * L'élément apparaît une seule fois, quand il entre dans le viewport.
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as = 'div' }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`nova-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

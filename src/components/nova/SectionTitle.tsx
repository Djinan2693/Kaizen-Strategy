import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Titre clair sur fond sombre */
  light?: boolean;
  className?: string;
}

/**
 * Titre de section du template Nova (`.section-title`) :
 * titre centré souligné d'un trait accent de 50px, puis description.
 */
const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, light = false, className = '' }) => {
  return (
    <Reveal className={`text-center pb-10 md:pb-14 ${className}`}>
      <h2
        className="relative inline-block text-2xl md:text-[32px] font-bold pb-5 mb-0"
        style={{ color: light ? '#ffffff' : 'var(--nova-heading)' }}
      >
        {title}
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 block w-[50px] h-[3px]"
          style={{ backgroundColor: light ? '#ffffff' : 'var(--nova-accent)' }}
          aria-hidden="true"
        ></span>
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-3xl mx-auto text-base md:text-lg ${light ? 'text-white/80' : ''}`}
          style={light ? undefined : { color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionTitle;

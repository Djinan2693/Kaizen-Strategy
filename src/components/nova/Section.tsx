import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  /** Fond alterné clair teinté accent (`.light-background` du template) */
  light?: boolean;
  /** Fond bordeaux sombre (`.dark-background` du template) */
  dark?: boolean;
  className?: string;
}

/**
 * Section du template Nova : rythme vertical de 60/80px et fonds alternés.
 */
const Section: React.FC<SectionProps> = ({ children, id, light = false, dark = false, className = '' }) => {
  const background = dark
    ? { backgroundColor: 'var(--nova-dark-bg)' }
    : light
    ? { backgroundColor: 'var(--nova-light-bg)' }
    : { backgroundColor: '#ffffff' };

  return (
    <section
      id={id}
      className={`py-14 md:py-20 ${dark ? 'text-white' : ''} ${className}`}
      style={{ ...background, color: dark ? '#ffffff' : 'var(--nova-default)' }}
    >
      <div className="container-responsive">{children}</div>
    </section>
  );
};

export default Section;

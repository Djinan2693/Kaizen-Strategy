import React from 'react';
import Reveal from './Reveal';

export interface CtaAction {
  label: string;
  onClick?: () => void;
  href?: string;
  /** Bouton secondaire : contour blanc au lieu du fond accent */
  outline?: boolean;
}

interface CallToActionProps {
  title: string;
  description?: React.ReactNode;
  actions?: CtaAction[];
  image?: string;
}

/**
 * Section d'appel à l'action du template Nova (`.call-to-action`) :
 * image de fond en parallaxe, voile bordeaux, texte centré et boutons pilules.
 */
const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  actions = [],
  image = '/nova/cta-bg.jpg',
}) => {
  return (
    <section
      className="relative py-16 md:py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${image}')`, backgroundColor: 'var(--nova-dark-bg)' }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(90, 0, 0, 0.78)' }}
        aria-hidden="true"
      ></div>

      <div className="relative container-responsive">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-[28px] font-bold text-white mb-4">{title}</h3>

          {description && <p className="text-white/85 text-base md:text-lg mb-6">{description}</p>}

          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {actions.map((action) => {
                const className = action.outline
                  ? 'inline-block px-10 py-3 rounded-full border-2 border-white text-white font-medium tracking-wide transition-all duration-500 hover:bg-white hover:text-[color:var(--nova-accent)]'
                  : 'inline-block px-10 py-3 rounded-full text-white font-medium tracking-wide transition-all duration-500 hover:bg-[color:var(--nova-accent-dark)]';

                const style = action.outline ? undefined : { backgroundColor: 'var(--nova-accent)' };

                return action.href ? (
                  <a key={action.label} href={action.href} className={className} style={style}>
                    {action.label}
                  </a>
                ) : (
                  <button key={action.label} type="button" onClick={action.onClick} className={className} style={style}>
                    {action.label}
                  </button>
                );
              })}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default CallToAction;

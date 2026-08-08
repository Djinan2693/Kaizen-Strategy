import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  /** Libellé du lien « en savoir plus » ; masqué si absent */
  readMoreLabel?: string;
  onClick?: () => void;
  delay?: number;
  /** Encadre l'élément dans une carte blanche ombrée */
  boxed?: boolean;
}

/**
 * Élément de service du template Nova (`.service-item`) :
 * icône accent à gauche, titre, description et lien « en savoir plus »
 * qui passent tous à la couleur accent au survol.
 */
const ServiceItem: React.FC<ServiceItemProps> = ({
  icon: Icon,
  title,
  description,
  readMoreLabel,
  onClick,
  delay = 0,
  boxed = false,
}) => {
  const interactive = Boolean(onClick);

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative h-full flex gap-5 transition-all duration-300 ${
          boxed ? 'bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100' : ''
        } ${interactive ? 'cursor-pointer' : ''}`}
        onClick={onClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={
          interactive
            ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onClick?.();
                }
              }
            : undefined
        }
      >
        <div className="flex-shrink-0">
          <Icon size={40} strokeWidth={1.5} style={{ color: 'var(--nova-accent)' }} />
        </div>

        <div>
          <h4
            className="text-xl font-bold mb-2.5 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
            style={{ color: 'var(--nova-heading)' }}
          >
            {title}
          </h4>

          <p
            className="text-[15px] leading-relaxed mb-2.5"
            style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
          >
            {description}
          </p>

          {readMoreLabel && (
            <span
              className="inline-flex items-center font-bold text-sm transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 50%)' }}
            >
              {readMoreLabel}
              <ArrowRight size={16} className="ml-2" />
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceItem;

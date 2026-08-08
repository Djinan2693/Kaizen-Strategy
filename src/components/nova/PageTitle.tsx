import React from 'react';

export interface Breadcrumb {
  label: string;
  onClick?: () => void;
}

interface PageTitleProps {
  title: string;
  /** Fil d'Ariane, sans l'accueil qui est ajouté automatiquement */
  breadcrumbs?: Breadcrumb[];
  /** Image de fond de la bannière */
  image?: string;
  /** Accroche facultative sous le titre */
  subtitle?: string;
  onHome?: () => void;
}

/**
 * Bannière de page du template Nova (`.page-title.dark-background`) :
 * image de fond couvrante, voile bordeaux, titre centré et fil d'Ariane.
 */
const PageTitle: React.FC<PageTitleProps> = ({
  title,
  breadcrumbs = [],
  image = '/nova/about-page-title-bg.jpg',
  subtitle,
  onHome,
}) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white pt-28 pb-12 md:pt-40 md:pb-16 text-center"
      style={{ backgroundImage: `url('${image}')`, backgroundColor: 'var(--nova-dark-bg)' }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(90, 0, 0, 0.72)' }}
        aria-hidden="true"
      ></div>

      <div className="relative container-responsive">
        <h1 className="text-3xl md:text-[42px] font-bold text-white leading-tight mb-3">{title}</h1>

        {subtitle && (
          <p className="text-white/85 max-w-3xl mx-auto mb-4 text-base md:text-lg">{subtitle}</p>
        )}

        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap justify-center items-center gap-x-2.5 text-sm md:text-base">
            <li>
              {onHome ? (
                <button
                  type="button"
                  onClick={onHome}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Accueil
                </button>
              ) : (
                <span className="text-white/80">Accueil</span>
              )}
            </li>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-x-2.5">
                  <span className="text-white/40" aria-hidden="true">
                    /
                  </span>
                  {crumb.onClick && !isLast ? (
                    <button
                      type="button"
                      onClick={crumb.onClick}
                      className="text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span className={isLast ? 'text-white' : 'text-white/80'} aria-current={isLast ? 'page' : undefined}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;

import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className = ""
}) => {
  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return; // Ne pas interférer avec les champs de saisie
      }

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          onPageChange(1);
          break;
        case 'End':
          e.preventDefault();
          onPageChange(totalPages);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, onPageChange]);

  // Calcul des pages à afficher avec ellipses
  const generatePageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const delta = 2; // Nombre de pages de chaque côté de la page courante

    if (totalPages <= 7) {
      // Si moins de 7 pages, afficher toutes
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Toujours afficher la première page
      pages.push(1);

      // Calculer la plage autour de la page courante
      const rangeStart = Math.max(2, currentPage - delta);
      const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

      // Ajouter ellipse après 1 si nécessaire
      if (rangeStart > 2) {
        pages.push('ellipsis');
      }

      // Ajouter les pages autour de la courante
      for (let i = rangeStart; i <= rangeEnd; i++) {
        pages.push(i);
      }

      // Ajouter ellipse avant la dernière si nécessaire
      if (rangeEnd < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Toujours afficher la dernière page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  // Styles de base
  const baseButtonClass = `
    min-h-[40px] min-w-[40px] px-3 py-2 rounded-lg font-medium 
    transition-all duration-200 focus:outline-none focus:ring-2 
    focus:ring-red-500 focus:ring-offset-2 touch-manipulation
    disabled:cursor-not-allowed disabled:opacity-50
  `;

  const normalButtonClass = `
    ${baseButtonClass}
    bg-white text-gray-700 border border-gray-300 
    hover:bg-red-50 hover:border-red-300 hover:text-red-700
    active:bg-red-100
  `;

  const activeButtonClass = `
    ${baseButtonClass}
    bg-red-700 text-white border border-red-700
    hover:bg-red-800 shadow-sm
  `;

  const disabledButtonClass = `
    ${baseButtonClass}
    bg-gray-100 text-gray-400 border border-gray-200
  `;

  if (totalPages <= 1) return null;

  return (
    <nav 
      aria-label="Pagination" 
      className={`flex justify-center ${className}`}
      role="navigation"
    >
      {/* Version Desktop */}
      <div className="hidden sm:flex items-center space-x-1">
        {/* Bouton Première */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? disabledButtonClass : normalButtonClass}
          aria-label="Première page"
          title="Première page (Home)"
        >
          <ChevronsLeft size={16} />
        </button>

        {/* Bouton Précédent */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? disabledButtonClass : normalButtonClass}
          aria-label="Page précédente"
          title="Page précédente (←)"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Pages numériques avec ellipses */}
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-500 select-none"
                aria-hidden="true"
              >
                …
              </span>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={isActive ? activeButtonClass : normalButtonClass}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
              title={`Page ${page}`}
            >
              {page}
            </button>
          );
        })}

        {/* Bouton Suivant */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? disabledButtonClass : normalButtonClass}
          aria-label="Page suivante"
          title="Page suivante (→)"
        >
          <ChevronRight size={16} />
        </button>

        {/* Bouton Dernière */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? disabledButtonClass : normalButtonClass}
          aria-label="Dernière page"
          title="Dernière page (End)"
        >
          <ChevronsRight size={16} />
        </button>
      </div>

      {/* Version Mobile */}
      <div className="flex sm:hidden items-center justify-between w-full max-w-xs">
        {/* Bouton Précédent Mobile */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${baseButtonClass} flex items-center ${
            currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-red-700 border border-red-300'
          }`}
          aria-label="Page précédente"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Indicateur Page courante / Total */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 font-medium">
            Page {currentPage} / {totalPages}
          </span>
          
          {/* Select optionnel pour aller à une page spécifique */}
          <select
            value={currentPage}
            onChange={(e) => onPageChange(parseInt(e.target.value))}
            className="ml-2 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Aller à la page"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton Suivant Mobile */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${baseButtonClass} flex items-center ${
            currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-red-700 border border-red-300'
          }`}
          aria-label="Page suivante"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
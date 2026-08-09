import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setCurrentExpertise?: (expertise: string) => void;
  setCurrentFormation?: (formation: string | null) => void;
}

const Header = ({ currentPage, setCurrentPage, setCurrentExpertise, setCurrentFormation }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (page === 'expertise' && setCurrentExpertise) {
      setCurrentExpertise('overview');
    }
    if (page === 'formations' && setCurrentFormation) {
      setCurrentFormation(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 safe-area-top">
      <div className="container-responsive">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center group touch-target"
            >
              <img
                src="/logo-header.png"
                alt="Kaizen Strategy"
                className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-6">
            <button 
              onClick={() => handleNavClick('home')}
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium overflow-hidden group text-sm ${
                currentPage === 'home' 
                  ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600 shadow-lg shadow-red-500/25' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">Accueil</span>
              {currentPage !== 'home' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#b00000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>

            {/* Expertise Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleNavClick('expertise')}
                onMouseEnter={() => setActiveDropdown('expertise')}
                className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium flex items-center overflow-hidden group text-sm ${
                  currentPage === 'expertise' 
                    ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600 shadow-lg shadow-red-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Expertise</span>
                <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
                {currentPage !== 'expertise' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b00000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 py-2 transition-all duration-300 ${
                  activeDropdown === 'expertise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => setActiveDropdown('expertise')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => {
                    setCurrentPage('expertise');
                    if (setCurrentExpertise) setCurrentExpertise('etudes-recherches');
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Études & Recherches</div>
                  <div className="text-xs text-gray-400 mt-1">Analyses de marché</div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('expertise');
                    if (setCurrentExpertise) setCurrentExpertise('risk-management');
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Risk Management</div>
                  <div className="text-xs text-gray-400 mt-1">Solution "Le Bouclier"</div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('expertise');
                    if (setCurrentExpertise) setCurrentExpertise('intelligence-artificielle');
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Intelligence Artificielle</div>
                  <div className="text-xs text-gray-400 mt-1">Diagnostic, Implémentation</div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('expertise');
                    if (setCurrentExpertise) setCurrentExpertise('corporate-finance');
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Corporate Finance</div>
                  <div className="text-xs text-gray-400 mt-1">Optimisation financière</div>
                </button>
              </div>
            </div>

            {/* Formations Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleNavClick('formations')}
                onMouseEnter={() => setActiveDropdown('formations')}
               className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium flex items-center overflow-hidden group text-sm ${
                  currentPage === 'formations' || currentPage === 'academia' || currentPage === 'privilege'
                    ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600 shadow-lg shadow-red-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Formations</span>
                <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
                {!(currentPage === 'formations' || currentPage === 'academia' || currentPage === 'privilege') && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b00000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 py-2 transition-all duration-300 ${
                  activeDropdown === 'formations' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => setActiveDropdown('formations')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick('formations')}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Catalogue 2025</div>
                  <div className="text-xs text-gray-400 mt-1">Formations professionnelles</div>
                </button>
                <button 
                  onClick={() => handleNavClick('academia')}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Kaizen Academia</div>
                  <div className="text-xs text-gray-400 mt-1">Plateforme e-learning 24/7</div>
                </button>
                <button 
                  onClick={() => handleNavClick('privilege')}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Formule Privilège</div>
                  <div className="text-xs text-gray-400 mt-1">Accès VIP et réductions</div>
                </button>
              </div>
            </div>

            {/* À propos Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleNavClick('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium flex items-center overflow-hidden group text-sm ${
                  currentPage === 'about' 
                    ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600 shadow-lg shadow-red-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">À propos</span>
                <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
                {currentPage !== 'about' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b00000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-72 bg-black/90 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 py-2 transition-all duration-300 ${
                  activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick('mission')}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Notre Mission</div>
                  <div className="text-xs text-gray-400 mt-1">Vision, valeurs et engagement</div>
                </button>
                <button 
                  onClick={() => handleNavClick('leadership')}
                  className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#b00000]/20 hover:to-red-600/20 transition-all duration-300 group"
                >
                  <div className="font-semibold text-white group-hover:text-[#b00000] transition-colors duration-300 text-sm">Leadership</div>
                  <div className="text-xs text-gray-400 mt-1">Dr GNUI Koutoua Samson</div>
                </button>
              </div>
            </div>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium overflow-hidden group text-sm ${
                currentPage === 'contact' 
                  ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600 shadow-lg shadow-red-500/25' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">Contact</span>
              {currentPage !== 'contact' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#b00000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
              <button 
                onClick={() => handleNavClick('home')}
                className={`block px-6 py-4 font-semibold w-full text-left rounded-xl transition-all duration-300 ${
                  currentPage === 'home' ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Accueil
              </button>
              
              {/* Mobile Expertise */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-expertise')}
                  className="flex items-center justify-between w-full px-6 py-4 font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  Expertise
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'mobile-expertise' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-expertise' && (
                  <div className="pl-4 space-y-1 mt-2">
                    <button onClick={() => {
                      setCurrentPage('expertise');
                      if (setCurrentExpertise) setCurrentExpertise('etudes-recherches');
                      setIsMenuOpen(false);
                    }} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Études & Recherches
                    </button>
                    <button onClick={() => {
                      setCurrentPage('expertise');
                      if (setCurrentExpertise) setCurrentExpertise('risk-management');
                      setIsMenuOpen(false);
                    }} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Risk Management
                    </button>
                    <button onClick={() => {
                      setCurrentPage('expertise');
                      if (setCurrentExpertise) setCurrentExpertise('intelligence-artificielle');
                      setIsMenuOpen(false);
                    }} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Intelligence Artificielle
                    </button>
                    <button onClick={() => {
                      setCurrentPage('expertise');
                      if (setCurrentExpertise) setCurrentExpertise('corporate-finance');
                      setIsMenuOpen(false);
                    }} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Corporate Finance
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Formations */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-formations')}
                  className="flex items-center justify-between w-full px-6 py-4 font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  Formations
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'mobile-formations' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-formations' && (
                  <div className="pl-4 space-y-1 mt-2">
                    <button onClick={() => handleNavClick('formations')} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Catalogue 2025
                    </button>
                    <button onClick={() => handleNavClick('academia')} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Kaizen Academia
                    </button>
                    <button onClick={() => handleNavClick('privilege')} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Formule Privilège
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile À propos */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-about')}
                  className="flex items-center justify-between w-full px-6 py-4 font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  À propos
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="pl-4 space-y-1 mt-2">
                    <button onClick={() => handleNavClick('mission')} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Notre Mission
                    </button>
                    <button onClick={() => handleNavClick('leadership')} className="block px-6 py-3 text-sm text-gray-400 hover:text-[#b00000] w-full text-left rounded-lg hover:bg-white/5 transition-all duration-300">
                      Leadership
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavClick('contact')}
                className={`block px-6 py-4 font-semibold w-full text-left rounded-xl transition-all duration-300 ${
                  currentPage === 'contact' ? 'text-white bg-gradient-to-r from-[#b00000] to-red-600' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
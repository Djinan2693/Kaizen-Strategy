import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FileText, User, Phone, BookOpen, Award } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  setIsOpen,
  currentPage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À Propos', icon: User },
    { id: 'expertise', label: 'Expertises', icon: Award },
    { id: 'formations', label: 'Formations', icon: BookOpen },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 touch-target ${
          isScrolled || isOpen 
            ? 'bg-red-600 text-white shadow-lg' 
            : 'bg-white/20 text-white backdrop-blur-sm'
        } ${isOpen ? 'rotate-180' : ''}`}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          transform: `translateZ(0) ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)'
          }}
        >
          {/* Header */}
          <div className="p-6 bg-red-600 text-white">
            <h2 className="text-xl font-bold mb-2">Kaizen Strategy</h2>
            <p className="text-red-100 text-sm">Excellence en Management</p>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 touch-target ${
                    isActive
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Icon size={20} className={isActive ? 'text-red-600' : 'text-gray-500'} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile (Alternative/Complement) */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 transition-transform duration-300 ${
          isOpen ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{ 
          paddingBottom: 'env(safe-area-inset-bottom)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="flex items-center justify-around py-2">
          {navigationItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg touch-target ${
                  isActive ? 'text-red-600' : 'text-gray-500'
                }`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
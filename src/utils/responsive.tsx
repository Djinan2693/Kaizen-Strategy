import { useEffect, useState } from 'react';

// Hook pour détecter la taille d'écran
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height
      });
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// Hook pour gérer l'installation PWA
export const usePWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    const checkInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }
    };

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Écouter l'événement appinstalled
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    checkInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setIsInstallable(false);
        setDeferredPrompt(null);
      }
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
    }
  };

  return {
    isInstallable,
    isInstalled,
    installApp
  };
};

// Composant pour le bouton d'installation PWA
export const PWAInstallButton = () => {
  const { isInstallable, installApp } = usePWA();

  if (!isInstallable) return null;

  return (
    <button
      onClick={installApp}
      className="fixed bottom-4 right-4 bg-[#b00000] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 z-50 flex items-center space-x-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="hidden sm:inline">Installer l'app</span>
    </button>
  );
};

// Utilitaires pour les breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Fonction pour vérifier si on est sur mobile
export const isMobile = () => {
  return window.innerWidth < breakpoints.md;
};

// Fonction pour vérifier si on est sur tablet
export const isTablet = () => {
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
};

// Fonction pour vérifier si on est sur desktop
export const isDesktop = () => {
  return window.innerWidth >= breakpoints.lg;
};

// Gestion des images responsives
export const getResponsiveImageSize = (baseSize: number) => {
  const { width } = window.screen;
  
  if (width < breakpoints.sm) return baseSize * 0.8;
  if (width < breakpoints.md) return baseSize * 0.9;
  if (width < breakpoints.lg) return baseSize;
  if (width < breakpoints.xl) return baseSize * 1.1;
  return baseSize * 1.2;
};

// Classes CSS responsives communes
export const responsiveClasses = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-12 md:py-16 lg:py-20",
  sectionLarge: "py-16 md:py-20 lg:py-32",
  grid2: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
  grid3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
  grid4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",
  textHero: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",
  textTitle: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
  textSubtitle: "text-xl sm:text-2xl md:text-3xl font-bold",
  button: "px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base",
  card: "bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
};
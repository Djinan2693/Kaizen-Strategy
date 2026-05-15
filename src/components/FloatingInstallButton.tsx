import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

const FloatingInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Détection iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Détection mode standalone
    const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Vérifier si l'utilisateur a déjà refusé
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    setIsDismissed(dismissed === 'true');

    // Afficher le bouton après quelques secondes si toutes les conditions sont remplies
    const timer = setTimeout(() => {
      if (!standalone && !dismissed) {
        setIsVisible(true);
      }
    }, 3000); // Attendre 3 secondes avant d'afficher

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!dismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installée avec succès');
      } else {
        console.log('Installation PWA refusée');
      }
      
      setDeferredPrompt(null);
      setIsVisible(false);
    } else if (isIOS) {
      setShowInstallPrompt(true);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const handleCloseiOSPrompt = () => {
    setShowInstallPrompt(false);
  };

  // Ne rien afficher si l'app est déjà installée ou si l'utilisateur a refusé
  if (isStandalone || isDismissed || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="flex flex-col items-end space-y-2">
          {/* Bulle d'information */}
          <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
            Installer l'application
          </div>
          
          {/* Bouton principal */}
          <div className="relative">
            <button
              onClick={handleInstallClick}
              className="bg-gradient-to-r from-[#b00000] to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 relative overflow-hidden group/btn"
              aria-label="Installer l'application"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#b00000] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Download size={24} className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
              
              {/* Animation pulse */}
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            </button>
            
            {/* Bouton de fermeture */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Fermer"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal pour iOS */}
      {showInstallPrompt && isIOS && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-scale-in">
            <button
              onClick={handleCloseiOSPrompt}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#b00000] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Installer Kaizen Strategy
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pour installer cette application sur votre iPhone/iPad :
              </p>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                  <p className="text-sm text-gray-700">Appuyez sur le bouton de partage</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                  <p className="text-sm text-gray-700">Sélectionnez "Ajouter à l'écran d'accueil"</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                  <p className="text-sm text-gray-700">Confirmez en appuyant sur "Ajouter"</p>
                </div>
              </div>
              
              <button
                onClick={handleCloseiOSPrompt}
                className="w-full bg-gradient-to-r from-[#b00000] to-red-600 text-white px-6 py-3 rounded-xl font-semibold mt-6 hover:shadow-lg transition-all duration-300"
              >
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingInstallButton;
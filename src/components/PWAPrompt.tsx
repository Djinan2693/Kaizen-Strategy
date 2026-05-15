import React, { useState, useEffect } from 'react';
import { Download, Share, Smartphone, Wifi, WifiOff } from 'lucide-react';

interface PWAPromptProps {
  onInstall?: () => void;
}

const PWAPrompt: React.FC<PWAPromptProps> = ({ onInstall }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      } else if ((window.navigator as any)?.standalone) {
        // iOS Safari
        setIsInstalled(true);
      }
    };

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt event intercepted by React component');
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Vérifier si on doit montrer le prompt
      const dismissedTime = localStorage.getItem('pwaInstallDismissed');
      const now = Date.now();
      const oneDayInMs = 24 * 60 * 60 * 1000;
      
      if (!dismissedTime || (now - parseInt(dismissedTime)) > oneDayInMs) {
        // Attendre 3 secondes avant d'afficher le prompt
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 3000);
      }
    };

    // Écouter les changements de statut en ligne/hors ligne
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
      setTimeout(() => setShowOfflineMessage(false), 5000);
    };

    // Écouter l'installation de l'app
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      localStorage.removeItem('pwaInstallDismissed');
    };

    checkIfInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        onInstall?.();
      } else {
        // L'utilisateur a refusé, ne pas redemander avant 7 jours
        localStorage.setItem('pwaInstallDismissed', Date.now().toString());
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Enregistrer le refus pour ne pas redemander avant 24h
    localStorage.setItem('pwaInstallDismissed', Date.now().toString());
  };

  const handleShareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kaizen Strategy',
          text: 'Découvrez Kaizen Strategy - Excellence en Management',
          url: window.location.href
        });
      } catch (error) {
        // Fallback pour copier l'URL
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
        }
      }
    } else if (navigator.clipboard) {
      // Fallback pour les navigateurs qui ne supportent pas Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Ne rien afficher si l'app est déjà installée
  if (isInstalled) {
    return (
      <>
        {/* Online Status Indicator */}
        <div className="fixed top-4 right-4 z-40 md:top-6 md:right-6">
          <div className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
            isOnline 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {isOnline ? (
              <Wifi className="w-4 h-4" />
            ) : (
              <WifiOff className="w-4 h-4" />
            )}
            <span>{isOnline ? 'En ligne' : 'Hors ligne'}</span>
          </div>
        </div>

        {/* Offline Message */}
        {showOfflineMessage && (
          <div className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-6 md:right-auto md:max-w-sm">
            <div className="bg-orange-500 text-white rounded-lg shadow-xl p-4 animate-slide-down">
              <div className="flex items-center space-x-3">
                <WifiOff className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Mode hors ligne</p>
                  <p className="text-xs opacity-90">
                    Certaines fonctionnalités peuvent être limitées
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* Install Prompt */}
      {showInstallPrompt && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-2xl p-4 animate-slide-up border border-red-500">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white mb-1">
                  📱 Installer Kaizen Strategy
                </h3>
                <p className="text-xs text-red-100 mb-3">
                  Accès rapide depuis votre écran d'accueil, notifications et mode hors ligne
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={handleInstallClick}
                    className="flex items-center space-x-1 bg-white hover:bg-red-50 text-red-600 px-3 py-2 rounded-lg text-xs font-bold transition-colors touch-target"
                  >
                    <Download className="w-4 h-4" />
                    <span>Installer</span>
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="text-xs text-red-100 hover:text-white px-3 py-2 touch-target transition-colors"
                  >
                    Plus tard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offline Message */}
      {showOfflineMessage && (
        <div className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-6 md:right-auto md:max-w-sm">
          <div className="bg-orange-500 text-white rounded-lg shadow-xl p-4 animate-slide-down">
            <div className="flex items-center space-x-3">
              <WifiOff className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium">Mode hors ligne</p>
                <p className="text-xs opacity-90">
                  Certaines fonctionnalités peuvent être limitées
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Button */}
      <button
        onClick={handleShareApp}
        className="fixed bottom-20 right-4 z-40 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 touch-target md:bottom-6"
        aria-label="Partager l'application"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Share className="w-5 h-5" />
      </button>
    </>
  );
};

export default PWAPrompt;
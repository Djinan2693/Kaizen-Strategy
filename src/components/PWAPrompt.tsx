import React, { useState, useEffect } from 'react';
import { Share, Wifi, WifiOff } from 'lucide-react';

interface PWAPromptProps {
  onInstall?: () => void;
}

/**
 * Indicateur de connexion et bouton de partage.
 *
 * Ce composant n'intercepte volontairement pas « beforeinstallprompt » :
 * la proposition d'installation est laissée au navigateur, qui l'affiche
 * lui-même (icône dans la barre d'adresse sur desktop, menu sur Android).
 */
const PWAPrompt: React.FC<PWAPromptProps> = ({ onInstall }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      } else if ((window.navigator as { standalone?: boolean }).standalone) {
        // iOS Safari
        setIsInstalled(true);
      }
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
      setTimeout(() => setShowOfflineMessage(false), 5000);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      onInstall?.();
    };

    checkIfInstalled();
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [onInstall]);

  const handleShareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kaizen Strategy',
          text: 'Découvrez Kaizen Strategy - Excellence en Management',
          url: window.location.href
        });
      } catch {
        // Repli : copier l'URL
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
        }
      }
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      {/* Indicateur de connexion, uniquement dans l'app installée */}
      {isInstalled && (
        <div className="fixed top-4 right-4 z-40 md:top-6 md:right-6">
          <div
            className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              isOnline
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
          >
            {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
            <span>{isOnline ? 'En ligne' : 'Hors ligne'}</span>
          </div>
        </div>
      )}

      {/* Message hors ligne */}
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

      {/* Bouton de partage */}
      <button
        onClick={handleShareApp}
        className="fixed bottom-20 right-4 z-40 text-white p-3 rounded-full shadow-lg transition-all duration-300 touch-target md:bottom-6 hover:bg-[color:var(--nova-accent-dark)]"
        style={{ backgroundColor: 'var(--nova-accent)', WebkitTapHighlightColor: 'transparent' }}
        aria-label="Partager l'application"
      >
        <Share className="w-5 h-5" />
      </button>
    </>
  );
};

export default PWAPrompt;

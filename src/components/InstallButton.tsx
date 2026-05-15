import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X } from 'lucide-react';

interface InstallButtonProps {
  className?: string;
}

const InstallButton: React.FC<InstallButtonProps> = ({ className = '' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      } else if ((window.navigator as any)?.standalone) {
        setIsInstalled(true);
      }
    };

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt detected');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    // Écouter l'installation
    const handleAppInstalled = () => {
      console.log('App installed');
      setIsInstalled(true);
      setShowButton(false);
      setDeferredPrompt(null);
    };

    checkIfInstalled();
    
    // Afficher le bouton automatiquement si pas installé (fallback)
    if (!isInstalled) {
      setTimeout(() => {
        setShowButton(true);
      }, 2000);
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
      
      if (outcome === 'accepted') {
        setShowButton(false);
        setDeferredPrompt(null);
      }
    } else {
      // Fallback - instructions manuelles
      showManualInstructions();
    }
  };

  const showManualInstructions = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    let instructions = '';
    
    if (isIOS) {
      instructions = 'Sur iOS : Appuyez sur le bouton Partager 📤 puis "Sur l\'écran d\'accueil" ➕';
    } else if (isAndroid) {
      instructions = 'Sur Android : Menu ⋮ → "Ajouter à l\'écran d\'accueil" ou "Installer l\'app"';
    } else {
      instructions = 'Dans Chrome : Cliquez sur l\'icône ⊕ dans la barre d\'adresse ou Menu → "Installer Kaizen Strategy"';
    }

    alert(`📱 Installer Kaizen Strategy\n\n${instructions}`);
  };

  // Ne pas afficher si déjà installé
  if (isInstalled) {
    return null;
  }

  // Ne pas afficher si explicitement caché
  if (!showButton) {
    return null;
  }

  return (
    <button
      onClick={handleInstall}
      className={`inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Download className="w-4 h-4" />
      <span>Installer l'App</span>
    </button>
  );
};

export default InstallButton;
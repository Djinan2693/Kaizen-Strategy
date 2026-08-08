import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ExpertisePage from './components/ExpertisePage';
import FormationsPage from './components/FormationsPage';
import KaizenAcademia from './components/KaizenAcademia';
import FormulePrivilege from './components/FormulePrivilege';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import DevisPage from './components/DevisPage';
import MissionPage from './components/MissionPage';
import AppointmentPage from './components/AppointmentPage';
import LeadershipPage from './components/LeadershipPage';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import GestionCookies from './components/GestionCookies';
import EnrollmentPage from './components/EnrollmentPage';
import RiskManagementPage from './components/RiskManagementPage';
import StudiesResearchPage from './components/StudiesResearchPage';
import AIPage from './components/AIPage';
import CorporateFinancePage from './components/CorporateFinancePage';
import PaginationTest from './components/PaginationTest';
import MobileNavigation from './components/MobileNavigation';
import PWAPrompt from './components/PWAPrompt';
import TouchGestures from './components/TouchGestures';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentExpertise, setCurrentExpertise] = useState('overview');
  const [currentFormation, setCurrentFormation] = useState<string | null>(null);
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Détecter si l'app est en mode standalone (installée)
    const checkStandalone = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsStandalone(true);
      }
    };

    checkStandalone();

    // Gérer le viewport height sur mobile pour éviter les problèmes avec la barre d'adresse
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    
    // Reset des états selon la page
    if (page === 'expertise') {
      setCurrentExpertise('overview');
    } else if (page === 'formations') {
      setCurrentFormation(null);
    } else if (page === 'blog') {
      setCurrentArticle(null);
    }

    // Scroll vers le haut lors du changement de page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwipeLeft = () => {
    // Navigation vers la page suivante (logique simple)
    const pages = ['home', 'about', 'expertise', 'formations', 'blog', 'contact'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      handleNavigation(pages[currentIndex + 1]);
    }
  };

  const handleSwipeRight = () => {
    // Navigation vers la page précédente
    const pages = ['home', 'about', 'expertise', 'formations', 'blog', 'contact'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      handleNavigation(pages[currentIndex - 1]);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'mission':
        return <MissionPage />;
      case 'leadership':
        return <LeadershipPage />;
      case 'mentions-legales':
        return <MentionsLegales setCurrentPage={setCurrentPage} />;
      case 'politique-confidentialite':
        return <PolitiqueConfidentialite setCurrentPage={setCurrentPage} />;
      case 'gestion-cookies':
        return <GestionCookies setCurrentPage={setCurrentPage} />;
      case 'enrollment':
        return <EnrollmentPage setCurrentPage={setCurrentPage} />;
      case 'appointment':
        return <AppointmentPage setCurrentPage={setCurrentPage} />;
      case 'expertise':
        return <ExpertisePage currentExpertise={currentExpertise} setCurrentExpertise={setCurrentExpertise} setCurrentPage={setCurrentPage} />;
      case 'risk-management':
        return <RiskManagementPage />;
      case 'studies-research':
        return <StudiesResearchPage />;
      case 'ai':
        return <AIPage />;
      case 'corporate-finance':
        return <CorporateFinancePage />;
      case 'formations':
        return <FormationsPage setCurrentPage={setCurrentPage} />;
      case 'academia':
        return <KaizenAcademia />;
      case 'privilege':
        return <FormulePrivilege />;
      case 'blog':
        return <BlogPage currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />;
      case 'contact':
        return <ContactPage />;
      case 'devis':
        return <DevisPage />;
      case 'pagination-test':
        return <PaginationTest />;
      default:
        return <Hero setCurrentPage={setCurrentPage} setCurrentExpertise={setCurrentExpertise} />;
    }
  };

  return (
    <TouchGestures
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
    >
      <div 
        className="min-h-screen bg-white relative"
        style={{ 
          minHeight: 'calc(var(--vh, 1vh) * 100)',
          paddingBottom: isStandalone ? 'env(safe-area-inset-bottom)' : '0'
        }}
      >
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          setCurrentExpertise={setCurrentExpertise}
          setCurrentFormation={setCurrentFormation}
        />
        
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        
        <main className="relative z-10 pb-20 lg:pb-0">
          {renderPage()}
        </main>
        
        <Footer setCurrentPage={setCurrentPage} />
        
        <PWAPrompt
          onInstall={() => {
            console.log('App installée avec succès');
          }}
        />
      </div>
    </TouchGestures>
  );
}

export default App;
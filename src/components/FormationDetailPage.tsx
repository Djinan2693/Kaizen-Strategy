import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, Download, Phone, Mail, MessageSquare, ArrowRight, Target, Zap, TrendingUp, ChevronDown, ArrowUp, Lightbulb, Briefcase } from 'lucide-react';
import { getFormationModules, getFormationObjectives, getFormationMethodology, getExpectedResults, getDuration, getSchedule } from '../utils/formationContent';

interface Formation {
  id: string;
  title: string;
  category: string;
  duration: string;
  participants: string;
  dates: string[];
  price: string;
  location: string;
  description: string;
  objectives: string[];
  program: string[];
  target: string[];
  prerequisites: string[];
  trainer: string;
  certification: boolean;
}

interface FormationDetailPageProps {
  formation: Formation;
  setCurrentFormation: (formation: string | null) => void;
  setCurrentPage?: (page: string) => void;
}

const FormationDetailPage = ({ formation, setCurrentFormation, setCurrentPage }: FormationDetailPageProps) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for "Scroll to Top" button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modules = getFormationModules(formation.category, formation.title);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentFormation(null)}
            className="flex items-center text-[#b00000] hover:text-red-800 font-semibold transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour aux formations
          </button>
        </div>
      </div>

      {/* Hero Section — dynamic per formation */}
      <section
        className="relative overflow-hidden text-white pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[420px] lg:min-h-[560px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(120,0,0,0.95) 0%, rgba(120,0,0,0.72) 42%, rgba(120,0,0,0.18) 100%), url('/hero.png')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right center',
          backgroundColor: '#780000',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#780000] lg:bg-transparent"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-white rounded-full opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              {/* Badge catégorie */}
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {formation.category}
                </span>
              </div>

              {/* Titre de la formation */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {formation.title}
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                {formation.description}
              </p>

              {/* Lieu + Formateur */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="flex-shrink-0" />
                  <span className="font-medium">{formation.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={20} className="flex-shrink-0" />
                  <span className="font-medium">{formation.trainer}</span>
                </div>
              </div>
            </div>

            {/* Colonne droite — image visible en background */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content (70%) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Objectifs with Decorative Icon */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                {/* Decorative Icon Background */}
                <div className="absolute top-6 right-6 opacity-5">
                  <Target size={200} className="text-[#b00000]" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Objectifs de la formation</h2>
                <ul className="space-y-4 relative z-10">
                  {getFormationObjectives(formation.category, formation.title).map((objective, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={24} className="text-[#b00000] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programme Détaillé with Accordions */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme détaillé</h2>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#b00000] transition-colors duration-300">
                      <button
                        onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white hover:from-red-50 hover:to-white transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-[#b00000] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <h3 className="font-semibold text-gray-900 text-left">{module}</h3>
                        </div>
                        <ChevronDown 
                          size={20} 
                          className={`text-[#b00000] transition-transform duration-300 ${expandedModule === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedModule === index && (
                        <div className="p-5 bg-white border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            Découvrez les concepts clés et les pratiques de {module.toLowerCase()}. Ce module comprend des exercices interactifs, des cas d'études réels et des mises en application immédiate des concepts.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Cible */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Public cible</h2>
                <div className="flex flex-wrap gap-3">
                  {formation.target.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-[#b00000] to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prérequis */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Prérequis</h2>
                <div className="space-y-3">
                  {formation.prerequisites.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#b00000] rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Méthodologie */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Zap size={120} className="text-[#b00000]" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 relative z-10">
                  <div className="bg-[#b00000] rounded-lg p-2">
                    <Zap size={24} className="text-white" />
                  </div>
                  Méthodologie
                </h2>
                <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
                  {getFormationMethodology(formation.category)}
                </p>
              </div>

              {/* Résultats Attendus */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="bg-[#b00000] rounded-lg p-2">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  Résultats Attendus
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {getExpectedResults(formation.category).map((result, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <Target size={20} className="text-[#b00000]" />
                        </div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="bg-[#b00000] rounded-lg p-2">
                    <Clock size={24} className="text-white" />
                  </div>
                  Horaires Quotidiens
                </h2>
                <div className="space-y-3">
                  {getSchedule(getDuration(formation.duration), formation.duration).map((time, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-xl p-4">
                      <div className="w-3 h-3 bg-[#b00000] rounded-full flex-shrink-0"></div>
                      <span className="font-semibold text-gray-900 text-lg">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar (30%) */}
            <div className="space-y-6">
              {/* Sticky Container */}
              <div className="sticky top-24 space-y-6">
                {/* Primary CTA Button */}
                <button 
                  type="button"
                  onClick={() => setCurrentPage?.('contact')}
                  className="w-full bg-gradient-to-r from-[#b00000] to-red-700 text-white py-4 px-6 rounded-xl hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 group"
                >
                  <MessageSquare size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  Nous Contacter
                </button>

                {/* Secondary Button */}
                <button className="w-full bg-white text-gray-900 border-2 border-gray-200 py-4 px-6 rounded-xl hover:border-[#b00000] hover:text-[#b00000] transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
                  <Download size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  Télécharger
                </button>

                {/* Sessions Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar size={20} className="text-[#b00000]" />
                    Prochaines sessions
                  </h3>
                  <div className="space-y-4">
                    {formation.dates.map((date, index) => (
                      <div key={index} className="pb-4 last:pb-0 border-b last:border-0">
                        <div className="flex items-center gap-3 justify-between">
                          <span className="font-medium text-gray-900">{date}</span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            index === 0 
                              ? 'bg-red-100 text-[#b00000]' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {index === 0 ? 'Complet' : 'Disponible'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 text-[#b00000] font-semibold text-sm hover:text-red-800 transition-colors duration-300 flex items-center justify-center gap-1 group">
                    Voir toutes les sessions
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-red-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare size={20} className="text-[#b00000]" />
                    Besoin d'informations ?
                  </h3>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                        <Phone size={18} className="text-[#b00000]" />
                      </div>
                      <a href="tel:+22505666204777" className="text-gray-700 hover:text-[#b00000] transition-colors duration-300 font-medium">
                        +225 05 66 62 04 77
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                        <Mail size={18} className="text-[#b00000]" />
                      </div>
                      <a href="mailto:contact@kaizenstrategy.org" className="text-gray-700 hover:text-[#b00000] transition-colors duration-300 font-medium">
                        contact@kaizenstrategy.org
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center border-t pt-3">
                    ⏱ Réponse rapide garantie
                  </p>
                </div>

                {/* Why Choose Card */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-sm border border-red-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lightbulb size={20} className="text-[#b00000]" />
                    Pourquoi cette formation ?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#b00000] font-bold mt-1">✓</span>
                      <span>Formation pratique et interactive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b00000] font-bold mt-1">✓</span>
                      <span>Outils applicables immédiatement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b00000] font-bold mt-1">✓</span>
                      <span>Accompagnement personnalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b00000] font-bold mt-1">✓</span>
                      <span>Certificat reconnu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#b00000] via-red-700 to-red-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots2)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Prêt à améliorer<br />vos compétences ?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Nos experts sont à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de formation professionnel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setCurrentPage?.('contact')}
              className="bg-white text-[#b00000] px-10 py-5 rounded-xl hover:bg-red-50 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              <MessageSquare size={22} />
              Nous contacter
            </button>
            <button
              onClick={() => setCurrentFormation(null)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 border border-white/30 group"
            >
              <ArrowLeft size={22} />
              Retour au catalogue
            </button>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-2">
              <div className="text-5xl font-bold">340+</div>
              <p className="text-red-100 text-lg">Formations disponibles</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">100%</div>
              <p className="text-red-100 text-lg">Formateurs experts</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">4.8/5</div>
              <p className="text-red-100 text-lg">Satisfaction clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#b00000] to-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Retourner en haut"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default FormationDetailPage;

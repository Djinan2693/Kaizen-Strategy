import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CheckCircle, Download, Phone, Mail, MessageSquare, ArrowRight, Target, Zap, TrendingUp, ChevronDown, ArrowUp, Lightbulb, MapPin, Briefcase } from 'lucide-react';
import { getFormationModules, getFormationObjectives, getFormationMethodology, getExpectedResults, getDuration, getSchedule } from '../utils/formationContent';
import { PageTitle, Section, CallToAction, Reveal } from './nova';

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

  const cardClass = 'bg-white rounded-xl p-8 shadow-sm border border-gray-100';
  const cardTitleClass = 'text-2xl font-bold mb-6';
  const mutedStyle = { color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' };

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title={formation.title}
        subtitle={formation.description}
        breadcrumbs={[
          { label: 'Formations', onClick: () => setCurrentFormation(null) },
          { label: formation.category }
        ]}
        image="/nova/services-page-title-bg.jpg"
      />

      {/* Barre d'informations */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-responsive py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          <button
            onClick={() => setCurrentFormation(null)}
            className="flex items-center font-semibold transition-colors duration-300 hover:opacity-75"
            style={{ color: 'var(--nova-accent)' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour aux formations
          </button>

          <span className="flex items-center gap-2 text-sm" style={mutedStyle}>
            <MapPin size={18} style={{ color: 'var(--nova-accent)' }} />
            {formation.location}
          </span>
          <span className="flex items-center gap-2 text-sm" style={mutedStyle}>
            <Briefcase size={18} style={{ color: 'var(--nova-accent)' }} />
            {formation.trainer}
          </span>
          <span className="flex items-center gap-2 text-sm" style={mutedStyle}>
            <Clock size={18} style={{ color: 'var(--nova-accent)' }} />
            {formation.duration}
          </span>
        </div>
      </div>

      {/* Contenu principal */}
      <Section light>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Objectifs */}
            <Reveal delay={100}>
              <div className={`${cardClass} relative overflow-hidden`}>
                <div className="absolute top-6 right-6 opacity-5">
                  <Target size={200} style={{ color: 'var(--nova-accent)' }} />
                </div>

                <h2 className={`${cardTitleClass} relative z-10`} style={{ color: 'var(--nova-heading)' }}>
                  Objectifs de la formation
                </h2>
                <ul className="space-y-4 relative z-10">
                  {getFormationObjectives(formation.category, formation.title).map((objective, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <CheckCircle
                        size={22}
                        className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: 'var(--nova-accent)' }}
                      />
                      <span className="leading-relaxed" style={{ color: 'var(--nova-default)' }}>
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Programme détaillé */}
            <Reveal delay={150}>
              <div className={cardClass}>
                <h2 className={cardTitleClass} style={{ color: 'var(--nova-heading)' }}>Programme détaillé</h2>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-colors duration-300 hover:border-[color:var(--nova-accent)]"
                    >
                      <button
                        onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 transition-colors duration-300 hover:bg-[color:var(--nova-light-bg)]"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0"
                            style={{ backgroundColor: 'var(--nova-accent)' }}
                          >
                            {index + 1}
                          </div>
                          <h3 className="font-semibold text-left" style={{ color: 'var(--nova-heading)' }}>
                            {module}
                          </h3>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 flex-shrink-0 ${expandedModule === index ? 'rotate-180' : ''}`}
                          style={{ color: 'var(--nova-accent)' }}
                        />
                      </button>
                      {expandedModule === index && (
                        <div className="p-5 bg-white border-t border-gray-100">
                          <p className="leading-relaxed text-[15px]" style={mutedStyle}>
                            Découvrez les concepts clés et les pratiques de {module.toLowerCase()}. Ce module comprend des exercices interactifs, des cas d'études réels et des mises en application immédiate des concepts.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Public cible */}
            <Reveal delay={200}>
              <div className={cardClass}>
                <h2 className={cardTitleClass} style={{ color: 'var(--nova-heading)' }}>Public cible</h2>
                <div className="flex flex-wrap gap-3">
                  {formation.target.map((item, index) => (
                    <span
                      key={index}
                      className="text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-300"
                      style={{ backgroundColor: 'var(--nova-accent)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Prérequis */}
            <Reveal delay={250}>
              <div className={cardClass}>
                <h2 className={cardTitleClass} style={{ color: 'var(--nova-heading)' }}>Prérequis</h2>
                <div className="space-y-3">
                  {formation.prerequisites.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                      <span style={{ color: 'var(--nova-default)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Méthodologie */}
            <Reveal delay={300}>
              <div className={`${cardClass} relative overflow-hidden`}>
                <div className="absolute top-4 right-4 opacity-10">
                  <Zap size={120} style={{ color: 'var(--nova-accent)' }} />
                </div>

                <h2
                  className={`${cardTitleClass} flex items-center gap-3 relative z-10`}
                  style={{ color: 'var(--nova-heading)' }}
                >
                  <span className="rounded-lg p-2" style={{ backgroundColor: 'var(--nova-accent)' }}>
                    <Zap size={22} className="text-white" />
                  </span>
                  Méthodologie
                </h2>
                <p className="leading-relaxed relative z-10 text-lg" style={mutedStyle}>
                  {getFormationMethodology(formation.category)}
                </p>
              </div>
            </Reveal>

            {/* Résultats attendus */}
            <Reveal delay={350}>
              <div className={cardClass}>
                <h2 className={`${cardTitleClass} flex items-center gap-3`} style={{ color: 'var(--nova-heading)' }}>
                  <span className="rounded-lg p-2" style={{ backgroundColor: 'var(--nova-accent)' }}>
                    <TrendingUp size={22} className="text-white" />
                  </span>
                  Résultats Attendus
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {getExpectedResults(formation.category).map((result, index) => (
                    <div
                      key={index}
                      className="rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
                      style={{ backgroundColor: 'var(--nova-light-bg)' }}
                    >
                      <div className="flex items-start gap-3">
                        <Target size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--nova-accent)' }} />
                        <span className="font-medium" style={{ color: 'var(--nova-default)' }}>{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Horaires */}
            <Reveal delay={400}>
              <div className={cardClass}>
                <h2 className={`${cardTitleClass} flex items-center gap-3`} style={{ color: 'var(--nova-heading)' }}>
                  <span className="rounded-lg p-2" style={{ backgroundColor: 'var(--nova-accent)' }}>
                    <Clock size={22} className="text-white" />
                  </span>
                  Horaires Quotidiens
                </h2>
                <div className="space-y-3">
                  {getSchedule(getDuration(formation.duration), formation.duration).map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-xl p-4"
                      style={{ backgroundColor: 'var(--nova-light-bg)' }}
                    >
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                      <span className="font-semibold text-lg" style={{ color: 'var(--nova-heading)' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <button
                type="button"
                onClick={() => setCurrentPage?.('contact')}
                className="w-full text-white py-4 px-6 rounded-full font-bold text-lg flex items-center justify-center gap-2 group transition-all duration-500 hover:bg-[color:var(--nova-accent-dark)]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              >
                <MessageSquare size={22} className="group-hover:scale-110 transition-transform duration-300" />
                Nous Contacter
              </button>

              <button className="w-full bg-white border-2 border-gray-200 py-4 px-6 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300 hover:border-[color:var(--nova-accent)] hover:text-[color:var(--nova-accent)]">
                <Download size={22} className="group-hover:scale-110 transition-transform duration-300" />
                Télécharger
              </button>

              {/* Sessions */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--nova-heading)' }}>
                  <Calendar size={20} style={{ color: 'var(--nova-accent)' }} />
                  Prochaines sessions
                </h3>
                <div className="space-y-4">
                  {formation.dates.map((date, index) => (
                    <div key={index} className="pb-4 last:pb-0 border-b last:border-0">
                      <div className="flex items-center gap-3 justify-between">
                        <span className="font-medium" style={{ color: 'var(--nova-heading)' }}>{date}</span>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={
                            index === 0
                              ? { backgroundColor: 'var(--nova-light-bg)', color: 'var(--nova-accent)' }
                              : { backgroundColor: '#dcfce7', color: '#15803d' }
                          }
                        >
                          {index === 0 ? 'Complet' : 'Disponible'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-4 font-semibold text-sm transition-colors duration-300 flex items-center justify-center gap-1 group hover:opacity-75"
                  style={{ color: 'var(--nova-accent)' }}
                >
                  Voir toutes les sessions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--nova-heading)' }}>
                  <MessageSquare size={20} style={{ color: 'var(--nova-accent)' }} />
                  Besoin d'informations ?
                </h3>
                <div className="space-y-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                      <Phone size={18} style={{ color: 'var(--nova-accent)' }} />
                    </div>
                    <a
                      href="tel:+22505666204777"
                      className="font-medium transition-colors duration-300 hover:text-[color:var(--nova-accent)]"
                      style={{ color: 'var(--nova-default)' }}
                    >
                      +225 05 66 62 04 77
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                      <Mail size={18} style={{ color: 'var(--nova-accent)' }} />
                    </div>
                    <a
                      href="mailto:contact@kaizenstrategy.org"
                      className="font-medium transition-colors duration-300 hover:text-[color:var(--nova-accent)] break-all"
                      style={{ color: 'var(--nova-default)' }}
                    >
                      contact@kaizenstrategy.org
                    </a>
                  </div>
                </div>
                <p className="text-xs text-center border-t pt-3" style={mutedStyle}>
                  ⏱ Réponse rapide garantie
                </p>
              </div>

              {/* Pourquoi cette formation */}
              <div className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--nova-heading)' }}>
                  <Lightbulb size={20} style={{ color: 'var(--nova-accent)' }} />
                  Pourquoi cette formation ?
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: 'var(--nova-default)' }}>
                  {[
                    'Formation pratique et interactive',
                    'Outils applicables immédiatement',
                    'Accompagnement personnalisé',
                    'Certificat reconnu'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--nova-accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CallToAction
        title="Prêt à améliorer vos compétences ?"
        description="Nos experts sont à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de formation professionnel."
        actions={[
          { label: 'Nous contacter', onClick: () => setCurrentPage?.('contact') },
          { label: 'Retour au catalogue', onClick: () => setCurrentFormation(null), outline: true }
        ]}
      />

      {/* Statistiques */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '340+', label: 'Formations disponibles' },
            { value: '100%', label: 'Formateurs experts' },
            { value: '4.8/5', label: 'Satisfaction clients' }
          ].map((stat, index) => (
            <Reveal key={stat.label} delay={100 * (index + 1)}>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--nova-accent)' }}>
                {stat.value}
              </div>
              <p className="font-medium" style={mutedStyle}>{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
          style={{ backgroundColor: 'var(--nova-accent)' }}
          aria-label="Retourner en haut"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default FormationDetailPage;

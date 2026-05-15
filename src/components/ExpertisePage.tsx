import React from 'react';
import { BarChart3, Shield, Brain, TrendingUp, CheckCircle, Target } from 'lucide-react';

interface ExpertisePageProps {
  currentExpertise: string;
  setCurrentExpertise: (expertise: string) => void;
  setCurrentPage: (page: string) => void;
}

const ExpertisePage = ({ currentExpertise, setCurrentExpertise, setCurrentPage }: ExpertisePageProps) => {
  const expertiseAreas = [
    {
      id: 'etudes-recherches',
      icon: BarChart3,
      title: "Études & Recherches",
      subtitle: "Analyses stratégiques et veille concurrentielle",
      description: "Éclairez vos décisions stratégiques grâce à nos analyses approfondies et notre expertise sectorielle.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 'risk-management',
      icon: Shield,
      title: "Risk Management",
      subtitle: "Protection et optimisation des risques",
      description: "Sécurisez votre entreprise avec notre solution 'Le Bouclier' et notre expertise en gestion des risques.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 'intelligence-artificielle',
      icon: Brain,
      title: "Intelligence Artificielle",
      subtitle: "IA appliquée à l'entreprise",
      description: "Transformez votre entreprise avec l'IA : diagnostic, implémentation et formation personnalisés.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 'corporate-finance',
      icon: TrendingUp,
      title: "Corporate Finance",
      subtitle: "Optimisation financière et croissance",
      description: "Accélérez votre croissance avec nos solutions de financement et d'optimisation financière.",
      color: "from-red-500 to-red-600"
    }
  ];

  if (currentExpertise && currentExpertise !== 'overview') {
    return renderDetailPage(currentExpertise, setCurrentExpertise, setCurrentPage);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden flex items-center pt-20">
        {/* Background avec image d'équipe en stratégie */}
        <div className="absolute inset-0">
          <img 
            src="/expertise.jpg" 
            alt="Équipe Kaizen Strategy - Nos Pôles d'Expertise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-transparent"></div>
        </div>

        {/* Effets visuels minimalistes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-white/10 to-red-300/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Nos Pôles d'<span className="text-red-200">Expertise</span>
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Quatre domaines de compétence complémentaires pour répondre 
              à tous vos enjeux stratégiques et opérationnels.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-red-900">Nos Domaines d'Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((expertise) => (
              <div 
                key={expertise.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                      <expertise.icon size={32} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900 group-hover:text-red-600 transition-colors duration-300">
                        {expertise.title}
                      </h3>
                      <p className="text-sm text-red-600">{expertise.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {expertise.description}
                  </p>
                  
                  <button
                    onClick={() => setCurrentExpertise(expertise.id)}
                    className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium flex items-center justify-center group"
                  >
                    En savoir plus
                    <Target size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-white/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-6">
            Besoin d'une expertise spécifique ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Nos experts sont à votre disposition pour analyser vos besoins 
            et vous proposer des solutions personnalisées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium inline-flex items-center justify-center"
            >
              <CheckCircle size={20} className="mr-2" />
              Nous Contacter
            </a>
            <a 
              href="#formations"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 font-medium"
            >
              Découvrir nos Formations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const renderDetailPage = (expertiseId: string, setCurrentExpertise: (expertise: string) => void, setCurrentPage: (page: string) => void) => {
  const expertiseDetails = {
    'etudes-recherches': {
      title: "Études & Recherches",
      subtitle: "Analyses stratégiques et veille concurrentielle",
      icon: BarChart3,
      color: "from-red-500 to-red-600",
      backgroundImage: "/recherche.jpg",
      description: "Notre pôle Études & Recherches vous accompagne dans la compréhension de votre environnement concurrentiel et l'identification des opportunités de marché.",
      services: [
        {
          title: "Études de marché",
          description: "Analyses approfondies de votre secteur d'activité, identification des tendances et opportunités.",
          features: ["Analyse sectorielle", "Segmentation marché", "Taille et potentiel", "Tendances émergentes"]
        },
        {
          title: "Benchmarking concurrentiel",
          description: "Positionnement concurrentiel et identification des meilleures pratiques du marché.",
          features: ["Analyse concurrentielle", "Mapping stratégique", "Avantages compétitifs", "Opportunités de différenciation"]
        },
        {
          title: "Veille stratégique",
          description: "Surveillance continue de votre environnement pour anticiper les évolutions.",
          features: ["Veille technologique", "Veille réglementaire", "Veille concurrentielle", "Alertes personnalisées"]
        },
        {
          title: "Analyses prospectives",
          description: "Scénarios d'évolution et recommandations stratégiques pour l'avenir.",
          features: ["Scénarios prospectifs", "Modélisation", "Recommandations", "Plans d'action"]
        }
      ],
      methodology: [
        { step: "Cadrage", description: "Définition des objectifs et du périmètre d'étude" },
        { step: "Collecte", description: "Recueil de données primaires et secondaires" },
        { step: "Analyse", description: "Traitement et analyse des informations" },
        { step: "Restitution", description: "Présentation des résultats et recommandations" }
      ]
    },
    'risk-management': {
      title: "Risk Management",
      subtitle: "Protection et optimisation des risques",
      icon: Shield,
      color: "from-red-500 to-red-600",
      backgroundImage: "/riskmanagement.jpg",
      description: "Notre expertise en Risk Management vous aide à identifier, évaluer et maîtriser les risques pour protéger et optimiser la performance de votre entreprise.",
      services: [
        {
          title: "Le Bouclier - Solution intégrée",
          description: "Notre solution propriétaire 'Le Bouclier' offre une protection complète contre tous types de risques.",
          features: ["Cartographie des risques", "Système d'alerte précoce", "Plans de continuité", "Tableau de bord temps réel"]
        },
        {
          title: "Audit des risques",
          description: "Évaluation complète de votre exposition aux risques opérationnels, financiers et stratégiques.",
          features: ["Identification des risques", "Évaluation impact/probabilité", "Matrice des risques", "Recommandations"]
        },
        {
          title: "Gouvernance des risques",
          description: "Mise en place d'une gouvernance efficace pour la gestion des risques.",
          features: ["Comité des risques", "Politiques et procédures", "Reporting", "Formation des équipes"]
        },
        {
          title: "Plans de continuité",
          description: "Élaboration de plans de continuité d'activité et de reprise après sinistre.",
          features: ["Analyse d'impact", "Plans de continuité", "Tests et simulations", "Mise à jour continue"]
        }
      ],
      methodology: [
        { step: "Diagnostic", description: "Évaluation de l'exposition aux risques actuels" },
        { step: "Cartographie", description: "Mapping complet des risques identifiés" },
        { step: "Mitigation", description: "Mise en place des mesures de protection" },
        { step: "Monitoring", description: "Surveillance continue et ajustements" }
      ]
    },
    'intelligence-artificielle': {
      title: "Intelligence Artificielle",
      subtitle: "IA appliquée à l'entreprise",
      icon: Brain,
      color: "from-red-500 to-red-600",
      backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      description: "Transformez votre entreprise grâce à l'intelligence artificielle avec notre approche structurée en 3 phases : Diagnostic, Implémentation et Formation.",
      services: [
        {
          title: "Phase 1 : Diagnostic IA",
          description: "Évaluation de votre maturité IA et identification des opportunités d'application.",
          features: ["Audit de maturité IA", "Identification des cas d'usage", "Évaluation ROI", "Feuille de route IA"]
        },
        {
          title: "Phase 2 : Implémentation",
          description: "Déploiement des solutions IA adaptées à vos besoins et contraintes.",
          features: ["Développement sur mesure", "Intégration systèmes", "Tests et validation", "Déploiement progressif"]
        },
        {
          title: "Phase 3 : Formation",
          description: "Accompagnement de vos équipes pour une adoption réussie de l'IA.",
          features: ["Formation utilisateurs", "Change management", "Support technique", "Optimisation continue"]
        },
        {
          title: "Solutions IA métier",
          description: "Applications spécialisées par domaine d'activité et fonction.",
          features: ["IA prédictive", "Automatisation processus", "Analyse de données", "Chatbots intelligents"]
        }
      ],
      methodology: [
        { step: "Diagnostic", description: "Évaluation de la maturité IA et des opportunités" },
        { step: "Implémentation", description: "Développement et déploiement des solutions" },
        { step: "Formation", description: "Accompagnement et montée en compétences" },
        { step: "Optimisation", description: "Amélioration continue et évolution" }
      ]
    },
    'corporate-finance': {
      title: "Corporate Finance",
      subtitle: "Optimisation financière et croissance",
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      backgroundImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      description: "Notre expertise en Corporate Finance vous accompagne dans l'optimisation de votre structure financière et l'accélération de votre croissance.",
      services: [
        {
          title: "Levées de fonds",
          description: "Accompagnement complet dans vos opérations de financement et levées de capitaux.",
          features: ["Stratégie de financement", "Recherche d'investisseurs", "Due diligence", "Négociation et closing"]
        },
        {
          title: "Fusions & Acquisitions",
          description: "Conseil en M&A pour vos opérations de croissance externe et restructuration.",
          features: ["Stratégie M&A", "Identification de cibles", "Valorisation", "Négociation et intégration"]
        },
        {
          title: "Valorisation d'entreprise",
          description: "Évaluation précise de la valeur de votre entreprise selon différentes méthodes.",
          features: ["Méthodes de valorisation", "Analyse comparative", "Modélisation financière", "Rapport de valorisation"]
        },
        {
          title: "Restructuration financière",
          description: "Optimisation de votre structure financière et amélioration de la performance.",
          features: ["Diagnostic financier", "Restructuration dette", "Optimisation fiscale", "Plan de redressement"]
        }
      ],
      methodology: [
        { step: "Analyse", description: "Diagnostic financier et stratégique complet" },
        { step: "Stratégie", description: "Élaboration de la stratégie financière optimale" },
        { step: "Exécution", description: "Mise en œuvre des opérations financières" },
        { step: "Suivi", description: "Accompagnement post-opération et optimisation" }
      ]
    }
  };

  const expertise = expertiseDetails[expertiseId as keyof typeof expertiseDetails];
  if (!expertise) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-red-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => setCurrentExpertise('overview')}
              className="text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              Nos Expertises
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{expertise.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden flex items-center pt-20">
        {/* Background avec image spécifique à l'expertise */}
        <div className="absolute inset-0">
          <img 
            src={expertise.backgroundImage} 
            alt={`${expertise.title} - Expertise Kaizen Strategy`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/70 to-transparent"></div>
        </div>

        {/* Effets visuels minimalistes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-white/10 to-red-300/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <expertise.icon size={64} className="mr-4 text-white" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-white">{expertise.title}</h1>
                  <p className="text-xl text-red-200">{expertise.subtitle}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed max-w-3xl text-red-100">{expertise.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-red-600">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.services.map((service, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={16} className="text-red-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="text-red-600">Méthodologie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une approche structurée et éprouvée pour garantir le succès de vos projets.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {expertise.methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-red-600 text-white overflow-hidden">
        {/* Background avec image d'entreprise */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Équipe d'entreprise moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-red-700/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Contactez nos experts pour discuter de vos besoins et découvrir 
            comment nous pouvons vous accompagner.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors duration-200 font-medium inline-flex items-center justify-center"
            >
              <CheckCircle size={20} className="mr-2" />
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
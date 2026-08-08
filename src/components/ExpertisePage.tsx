import { BarChart3, Shield, Brain, TrendingUp, LucideIcon } from 'lucide-react';
import { PageTitle, Section, SectionTitle, ServiceItem, CallToAction, CheckList, Reveal } from './nova';

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
      description: "Éclairez vos décisions stratégiques grâce à nos analyses approfondies et notre expertise sectorielle."
    },
    {
      id: 'risk-management',
      icon: Shield,
      title: "Risk Management",
      subtitle: "Protection et optimisation des risques",
      description: "Sécurisez votre entreprise avec notre solution 'Le Bouclier' et notre expertise en gestion des risques."
    },
    {
      id: 'intelligence-artificielle',
      icon: Brain,
      title: "Intelligence Artificielle",
      subtitle: "IA appliquée à l'entreprise",
      description: "Transformez votre entreprise avec l'IA : diagnostic, implémentation et formation personnalisés."
    },
    {
      id: 'corporate-finance',
      icon: TrendingUp,
      title: "Corporate Finance",
      subtitle: "Optimisation financière et croissance",
      description: "Accélérez votre croissance avec nos solutions de financement et d'optimisation financière."
    }
  ];

  if (currentExpertise && currentExpertise !== 'overview') {
    return renderDetailPage(currentExpertise, setCurrentExpertise, setCurrentPage);
  }

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Nos Pôles d'Expertise"
        subtitle="Quatre domaines de compétence complémentaires pour répondre à tous vos enjeux stratégiques et opérationnels."
        breadcrumbs={[{ label: 'Expertises' }]}
        image="/nova/services-page-title-bg.jpg"
      />

      <Section>
        <SectionTitle
          title="Nos Domaines d'Expertise"
          description="Chaque pôle mobilise des méthodes éprouvées et des consultants spécialisés pour vous accompagner de l'analyse à la mise en œuvre."
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {expertiseAreas.map((expertise, index) => (
            <ServiceItem
              key={expertise.id}
              icon={expertise.icon}
              title={expertise.title}
              description={
                <>
                  <span className="block font-medium mb-1" style={{ color: 'var(--nova-accent)' }}>
                    {expertise.subtitle}
                  </span>
                  {expertise.description}
                </>
              }
              readMoreLabel="En savoir plus"
              onClick={() => setCurrentExpertise(expertise.id)}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </Section>

      <CallToAction
        title="Besoin d'une expertise spécifique ?"
        description="Nos experts sont à votre disposition pour analyser vos besoins et vous proposer des solutions personnalisées."
        actions={[
          { label: 'Nous Contacter', onClick: () => setCurrentPage('contact') },
          { label: 'Découvrir nos Formations', onClick: () => setCurrentPage('formations'), outline: true }
        ]}
      />
    </div>
  );
};

interface ExpertiseDetail {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  backgroundImage: string;
  description: string;
  services: { title: string; description: string; features: string[] }[];
  methodology: { step: string; description: string }[];
}

const renderDetailPage = (
  expertiseId: string,
  setCurrentExpertise: (expertise: string) => void,
  setCurrentPage: (page: string) => void
) => {
  const expertiseDetails: Record<string, ExpertiseDetail> = {
    'etudes-recherches': {
      title: "Études & Recherches",
      subtitle: "Analyses stratégiques et veille concurrentielle",
      icon: BarChart3,
      backgroundImage: "/nova/portfolio-page-title-bg.jpg",
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
      backgroundImage: "/nova/services-page-title-bg.jpg",
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
      backgroundImage: "/nova/blog-page-title-bg.jpg",
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
      backgroundImage: "/nova/about-page-title-bg.jpg",
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

  const expertise = expertiseDetails[expertiseId];
  if (!expertise) return null;

  const Icon = expertise.icon;

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title={expertise.title}
        subtitle={expertise.subtitle}
        breadcrumbs={[
          { label: 'Expertises', onClick: () => setCurrentExpertise('overview') },
          { label: expertise.title }
        ]}
        image={expertise.backgroundImage}
      />

      {/* Présentation */}
      <Section>
        <Reveal delay={100}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-6 text-center md:text-left">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0 flex-shrink-0"
              style={{ backgroundColor: 'var(--nova-light-bg)' }}
            >
              <Icon size={38} strokeWidth={1.5} style={{ color: 'var(--nova-accent)' }} />
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              {expertise.description}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Services */}
      <Section light>
        <SectionTitle
          title="Nos Services"
          description={`Les prestations proposées par notre pôle ${expertise.title}.`}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.services.map((service, index) => (
            <Reveal key={service.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  {service.title}
                </h3>
                <p
                  className="mb-6 leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {service.description}
                </p>
                <CheckList items={service.features} className="text-[15px]" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Méthodologie */}
      <Section>
        <SectionTitle
          title="Notre Méthodologie"
          description="Une approche structurée et éprouvée pour garantir le succès de vos projets."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.methodology.map((step, index) => (
            <Reveal key={step.step} delay={100 * (index + 1)}>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  {step.step}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Prêt à démarrer votre projet ?"
        description="Contactez nos experts pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner."
        actions={[
          { label: 'Nous Contacter', onClick: () => setCurrentPage('contact') },
          { label: 'Voir toutes nos expertises', onClick: () => setCurrentExpertise('overview'), outline: true }
        ]}
      />
    </div>
  );
};

export default ExpertisePage;

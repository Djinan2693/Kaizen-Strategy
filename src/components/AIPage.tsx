import { Brain, Cpu, Zap, Target, Settings, BarChart, Users } from 'lucide-react';
import { PageTitle, Section, SectionTitle, ServiceItem, CallToAction, CheckList, Reveal } from './nova';

const AIPage = () => {
  const services = [
    {
      icon: Settings,
      title: "Audit de Maturité IA",
      description: "Évaluation complète de votre niveau de préparation à l'intelligence artificielle.",
      features: ["Diagnostic des données", "Évaluation infrastructure", "Analyse des compétences"]
    },
    {
      icon: Cpu,
      title: "Stratégie IA",
      description: "Élaboration d'une roadmap IA alignée sur vos objectifs business.",
      features: ["Identification use cases", "Priorisation projets", "Plan d'implémentation"]
    },
    {
      icon: Zap,
      title: "Implémentation",
      description: "Déploiement et intégration de solutions IA dans vos processus métier.",
      features: ["Développement modèles", "Intégration système", "Formation équipes"]
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Service Client",
      description: "Chatbots intelligents, analyse sentiment, routing automatique"
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Prédictions, détection anomalies, insights automatisés"
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Personnalisation, recommandations, optimisation campagnes"
    },
    {
      icon: Settings,
      title: "Opérations",
      description: "Automatisation processus, maintenance prédictive, optimisation"
    }
  ];

  const processus = [
    {
      title: "Discovery & Audit",
      description: "Analyse approfondie de vos besoins, données et infrastructure existante"
    },
    {
      title: "Stratégie & Design",
      description: "Définition de la roadmap IA et architecture des solutions"
    },
    {
      title: "Développement & Test",
      description: "Création des modèles IA et validation sur environnements de test"
    },
    {
      title: "Déploiement & Suivi",
      description: "Mise en production, formation utilisateurs et monitoring performance"
    }
  ];

  const technologies = [
    {
      title: "Machine Learning",
      items: ["TensorFlow • PyTorch", "Scikit-learn • XGBoost", "MLflow • Kubeflow"]
    },
    {
      title: "Cloud & Infra",
      items: ["AWS • Azure • GCP", "Docker • Kubernetes", "Apache Spark • Hadoop"]
    },
    {
      title: "NLP & Vision",
      items: ["OpenAI • Hugging Face", "spaCy • NLTK", "OpenCV • YOLO"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Intelligence Artificielle"
        subtitle="Transformez votre entreprise avec l'IA. De l'audit de maturité à l'implémentation complète, nous vous accompagnons dans votre révolution digitale."
        breadcrumbs={[{ label: 'Expertises' }, { label: 'Intelligence Artificielle' }]}
        image="/nova/blog-page-title-bg.jpg"
      />

      {/* Services IA */}
      <Section>
        <SectionTitle
          title="Nos Services IA"
          description="Une approche complète pour intégrer l'intelligence artificielle dans votre stratégie"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full group">
                <service.icon
                  size={44}
                  strokeWidth={1.5}
                  className="mb-6"
                  style={{ color: 'var(--nova-accent)' }}
                />
                <h3
                  className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-6 text-[15px] leading-relaxed"
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

      {/* Applications concrètes */}
      <Section light>
        <SectionTitle
          title="Applications Concrètes"
          description="L'IA au service de tous vos métiers pour améliorer performance et efficacité"
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {useCases.map((useCase, index) => (
            <ServiceItem
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              delay={100 * (index + 1)}
              boxed
            />
          ))}
        </div>
      </Section>

      {/* Processus d'Implémentation */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-6 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Processus d'Implémentation
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Une méthodologie éprouvée pour garantir le succès de vos projets IA,
              de la conception au déploiement.
            </p>

            <div className="space-y-6">
              {processus.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ color: 'var(--nova-heading)' }}>
                      {step.title}
                    </h3>
                    <p
                      className="text-[15px]"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl p-8 text-white" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
              <Brain size={56} strokeWidth={1.3} className="mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">IA Responsable</h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                Nous mettons l'éthique et la transparence au cœur de nos solutions IA
                pour garantir des déploiements responsables et durables.
              </p>
              <CheckList
                light
                items={[
                  "Transparence des algorithmes",
                  "Protection des données",
                  "Bias detection & mitigation",
                  "Conformité réglementaire"
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Technologies */}
      <Section light>
        <SectionTitle
          title="Technologies & Partenaires"
          description="Nous maîtrisons l'écosystème complet des technologies IA les plus avancées"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Reveal key={tech.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  {tech.title}
                </h3>
                <div
                  className="space-y-2 text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {tech.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Prêt pour la Révolution IA ?"
        description="Découvrez comment l'intelligence artificielle peut transformer votre entreprise. Commencez par un audit gratuit de votre maturité IA."
        actions={[
          { label: 'Audit IA Gratuit' },
          { label: "Voir nos Cas d'Usage", outline: true }
        ]}
      />
    </div>
  );
};

export default AIPage;

import { DollarSign, TrendingUp, PieChart, Calculator, Briefcase, Target, BarChart } from 'lucide-react';
import { PageTitle, Section, SectionTitle, ServiceItem, CallToAction, CheckList, Reveal } from './nova';

const CorporateFinancePage = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Planification Financière",
      description: "Élaboration de stratégies financières alignées sur vos objectifs de croissance.",
      features: ["Business plan & prévisions", "Optimisation structure capital", "Gestion trésorerie"]
    },
    {
      icon: PieChart,
      title: "Levée de Fonds",
      description: "Accompagnement complet dans vos projets de financement et levées de capitaux.",
      features: ["Préparation due diligence", "Valorisation entreprise", "Négociation investisseurs"]
    },
    {
      icon: Calculator,
      title: "M&A Advisory",
      description: "Conseil en fusions-acquisitions pour optimiser votre croissance externe.",
      features: ["Identification cibles", "Due diligence financière", "Structuration opération"]
    }
  ];

  const analytics = [
    {
      icon: BarChart,
      title: "Tableaux de Bord Financiers",
      description: "KPIs personnalisés, reporting automatisé et alertes en temps réel"
    },
    {
      icon: Target,
      title: "Analyse de Rentabilité",
      description: "ROI par projet, marge par segment, optimisation pricing"
    },
    {
      icon: TrendingUp,
      title: "Modélisation Prédictive",
      description: "Forecasting avancé, stress tests et simulations de scénarios"
    }
  ];

  const domaines = [
    {
      icon: Briefcase,
      title: "Restructuration",
      description: "Redressement financier, renégociation dette, plans de sauvegarde"
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Financement expansion, stratégie croissance, internationalisation"
    },
    {
      icon: PieChart,
      title: "Valorisation",
      description: "Évaluation entreprise, création de valeur, exit strategies"
    },
    {
      icon: Calculator,
      title: "Optimisation",
      description: "Réduction coûts, amélioration marges, efficacité opérationnelle"
    }
  ];

  const approche = [
    {
      title: "Diagnostic",
      description: "Analyse approfondie de votre situation financière et identification des enjeux"
    },
    {
      title: "Stratégie",
      description: "Élaboration d'un plan d'action personnalisé et de solutions adaptées"
    },
    {
      title: "Exécution",
      description: "Mise en œuvre des recommandations avec accompagnement opérationnel"
    },
    {
      title: "Monitoring",
      description: "Suivi des résultats et ajustements pour garantir l'atteinte des objectifs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Corporate Finance"
        subtitle="Maximisez la valeur de votre entreprise avec nos expertises en finance d'entreprise. Stratégie financière, optimisation et croissance durable."
        breadcrumbs={[{ label: 'Expertises' }, { label: 'Corporate Finance' }]}
        image="/nova/about-page-title-bg.jpg"
      />

      {/* Expertises financières */}
      <Section>
        <SectionTitle
          title="Nos Expertises Financières"
          description="Des solutions complètes pour optimiser votre performance financière et créer de la valeur"
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

      {/* Performance Analytics */}
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-6 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Performance Analytics
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Transformez vos données financières en insights actionnables pour piloter
              efficacement votre performance et anticiper les tendances.
            </p>

            <div className="space-y-6">
              {analytics.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ color: 'var(--nova-heading)' }}>
                      {item.title}
                    </h3>
                    <p
                      className="text-[15px]"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl p-8 text-white" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
              <DollarSign size={56} strokeWidth={1.3} className="mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">Optimisation ROI</h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                Nos modèles financiers avancés identifient les leviers de performance
                pour maximiser votre retour sur investissement.
              </p>
              <CheckList
                light
                items={["Analyse de sensibilité", "Optimisation portefeuille", "Allocation ressources"]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Domaines d'intervention */}
      <Section>
        <SectionTitle
          title="Domaines d'Intervention"
          description="Une expertise transverse pour tous vos enjeux de finance d'entreprise"
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {domaines.map((domaine, index) => (
            <ServiceItem
              key={domaine.title}
              icon={domaine.icon}
              title={domaine.title}
              description={domaine.description}
              delay={100 * (index + 1)}
              boxed
            />
          ))}
        </div>
      </Section>

      {/* Notre approche */}
      <Section light>
        <SectionTitle
          title="Notre Approche"
          description="Une méthodologie structurée pour maximiser la valeur de vos projets financiers"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {approche.map((step, index) => (
            <Reveal key={step.title} delay={100 * (index + 1)}>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
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
        title="Optimisez Votre Performance Financière"
        description="Découvrez comment nos solutions de corporate finance peuvent accélérer votre croissance et maximiser la valeur de votre entreprise."
        actions={[
          { label: 'Diagnostic Financier' },
          { label: 'Nos Success Stories', outline: true }
        ]}
      />
    </div>
  );
};

export default CorporateFinancePage;

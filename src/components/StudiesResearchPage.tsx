import { BarChart, TrendingUp, Users, Target, Search, FileText } from 'lucide-react';
import { PageTitle, Section, SectionTitle, CallToAction, CheckList, Reveal } from './nova';

const StudiesResearchPage = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Études de Marché",
      description: "Analyse complète de votre secteur, concurrence, opportunités et menaces du marché.",
      features: ["Taille et évolution du marché", "Analyse concurrentielle", "Segments porteurs"]
    },
    {
      icon: Users,
      title: "Comportement Consommateur",
      description: "Comprenez vos clients : motivations, freins, parcours d'achat et préférences.",
      features: ["Personas détaillés", "Parcours client", "Insights comportementaux"]
    },
    {
      icon: Target,
      title: "Études de Faisabilité",
      description: "Évaluez la viabilité de vos projets avant investissement : risques, ROI, contraintes.",
      features: ["Analyse financière", "Évaluation des risques", "Recommandations"]
    },
    {
      icon: BarChart,
      title: "Suivi et évaluation",
      description: "Mesure de performance, impact des actions et ajustements stratégiques continus.",
      features: ["Indicateurs de performance", "Tableaux de bord", "Rapports d'évaluation"]
    },
    {
      icon: Users,
      title: "Étude socio-économique",
      description: "Analyse des impacts sociaux et économiques de vos projets sur les communautés.",
      features: ["Impact socio-économique", "Analyse démographique", "Développement durable"]
    },
    {
      icon: Target,
      title: "Étude organisationnelle",
      description: "Analyse des structures, processus et culture organisationnelle pour optimiser les performances.",
      features: ["Audit organisationnel", "Processus métiers", "Culture d'entreprise"]
    }
  ];

  const methodology = [
    {
      title: "Cadrage & Objectifs",
      description: "Définition précise des questions de recherche et périmètre d'étude"
    },
    {
      title: "Collecte de Données",
      description: "Sources primaires et secondaires, entretiens, sondages, observation"
    },
    {
      title: "Analyse & Traitement",
      description: "Traitement statistique et analyse qualitative des données"
    },
    {
      title: "Recommandations",
      description: "Insights actionnables et plan d'action stratégique"
    }
  ];

  const typesEtudes = [
    {
      title: "Études Sectorielles",
      items: [
        "Analyse de l'écosystème sectoriel",
        "Tendances et évolutions du marché",
        "Cartographie des acteurs clés",
        "Opportunités d'investissement"
      ]
    },
    {
      title: "Études Personnalisées",
      items: [
        "Due diligence commerciale",
        "Évaluation de potentiel marché",
        "Benchmark concurrentiel",
        "Positionnement stratégique"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Études & Recherches"
        subtitle="Prenez des décisions éclairées grâce à nos analyses approfondies et études de marché. Des insights précis pour orienter votre stratégie."
        breadcrumbs={[{ label: 'Expertises' }, { label: 'Études & Recherches' }]}
        image="/nova/portfolio-page-title-bg.jpg"
      />

      {/* Services d'Études */}
      <Section>
        <SectionTitle
          title="Nos Services d'Études"
          description="Une gamme complète d'analyses pour éclairer vos décisions stratégiques"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Méthodologie */}
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-6 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Notre Méthodologie
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Une approche rigoureuse combinant méthodes quantitatives et qualitatives
              pour des résultats fiables et exploitables.
            </p>

            <div className="space-y-6">
              {methodology.map((step, index) => (
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
              <Search size={56} strokeWidth={1.3} className="mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">Recherche Avancée</h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                Nos experts utilisent les dernières techniques d'analyse pour vous fournir
                des insights précis et exploitables.
              </p>
              <CheckList light items={["Analyse Big Data", "Machine Learning", "Modélisation prédictive"]} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Types d'Études */}
      <Section>
        <SectionTitle
          title="Types d'Études Proposées"
          description="Des analyses sur mesure adaptées à vos besoins sectoriels et stratégiques"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {typesEtudes.map((type, index) => (
            <Reveal key={type.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-5" style={{ color: 'var(--nova-heading)' }}>
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-center gap-3" style={{ color: 'var(--nova-default)' }}>
                      <FileText size={18} className="flex-shrink-0" style={{ color: 'var(--nova-accent)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Besoin d'une Étude Spécifique ?"
        description="Nos experts sont à votre disposition pour concevoir l'étude qui répondra précisément à vos enjeux stratégiques."
        actions={[
          { label: 'Discuter de votre projet' },
          { label: 'Voir nos études types', outline: true }
        ]}
      />
    </div>
  );
};

export default StudiesResearchPage;

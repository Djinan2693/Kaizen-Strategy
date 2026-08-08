import { Target, Eye, Award, User, ArrowRight } from 'lucide-react';
import { PageTitle, Section, SectionTitle, CallToAction, Reveal } from './nova';

const AboutPage = () => {
  const methodology = [
    {
      step: "01",
      title: "Diagnostic & Analyse",
      description: "Évaluation approfondie de votre situation actuelle, identification des enjeux et opportunités d'amélioration.",
      icon: Target
    },
    {
      step: "02",
      title: "Stratégie & Planification",
      description: "Élaboration d'une feuille de route personnalisée avec des objectifs clairs et des indicateurs de performance.",
      icon: Eye
    },
    {
      step: "03",
      title: "Mise en œuvre & Suivi",
      description: "Accompagnement dans l'exécution des actions avec un suivi continu et des ajustements si nécessaire.",
      icon: Award
    }
  ];

  const pillars = [
    {
      icon: Target,
      title: "Notre Mission",
      text: "Accompagner les entreprises dans leur transformation stratégique et digitale en proposant des solutions innovantes, personnalisées et créatrices de valeur durable. Nous croyons en l'amélioration continue comme moteur de l'excellence."
    },
    {
      icon: Eye,
      title: "Notre Vision",
      text: "Devenir le partenaire stratégique de référence pour les entreprises ambitieuses, en combinant excellence opérationnelle, innovation technologique et approche humaine. Nous aspirons à créer un impact positif et mesurable."
    },
    {
      icon: Award,
      title: "Nos Valeurs",
      text: "Excellence, intégrité, innovation et amélioration continue (Kaizen) sont au cœur de notre philosophie. Nous privilégions les relations durables, la transparence et la co-création de valeur avec nos clients."
    }
  ];

  const partners = [
    { name: "Microsoft", logo: "MS" },
    { name: "Google Cloud", logo: "GC" },
    { name: "Amazon Web Services", logo: "AWS" },
    { name: "Salesforce", logo: "SF" },
    { name: "Oracle", logo: "OR" },
    { name: "IBM", logo: "IBM" },
    { name: "SAP", logo: "SAP" },
    { name: "Deloitte", logo: "DL" },
    { name: "McKinsey", logo: "MC" },
    { name: "BCG", logo: "BCG" },
    { name: "Accenture", logo: "AC" },
    { name: "PwC", logo: "PWC" }
  ];

  const stats = [
    { value: "200+", label: "Clients accompagnés" },
    { value: "15+", label: "Années d'expérience" },
    { value: "95%", label: "Taux de satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="À propos"
        subtitle="Découvrez notre histoire, notre vision et les valeurs qui nous guident dans l'accompagnement de vos projets de transformation."
        breadcrumbs={[{ label: 'À propos' }]}
        image="/nova/about-page-title-bg.jpg"
      />

      {/* Qui sommes-nous */}
      <Section id="mission">
        <SectionTitle
          title="Qui sommes-nous ?"
          description="KAIZEN STRATEGY est un cabinet d'études et de conseil, spécialisé dans l'accompagnement stratégique des organisations à travers des solutions sur mesure et innovantes. Acteur de référence au niveau national et sous régionale, notre approche repose sur l'excellence, la mobilisation du capital humain, et l'optimisation des compétences pour répondre aux enjeux de nos partenaires."
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={100 * (index + 1)}>
              <div className="text-center h-full">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <pillar.icon className="text-white" size={38} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  {pillar.title}
                </h3>
                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mot du CEO */}
      <Section id="leadership" light>
        <SectionTitle title="Le mot du fondateur" />

        <Reveal delay={100} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                  <User size={60} className="text-gray-400" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  Dr GNUI Koutoua Samson
                </h3>
                <p className="font-medium mb-6" style={{ color: 'var(--nova-accent)' }}>
                  Fondateur &amp; CEO
                </p>

                <blockquote
                  className="text-lg leading-relaxed italic mb-6"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
                >
                  "Chez Kaizen Strategy, nous croyons fermement que chaque entreprise porte en elle
                  un potentiel d'excellence inexploité. Notre mission est de révéler ce potentiel
                  à travers une approche méthodique, innovante et humaine. L'amélioration continue
                  n'est pas seulement notre nom, c'est notre ADN. Ensemble, transformons vos défis
                  en opportunités de croissance durable."
                </blockquote>

                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-[50px] h-[3px]" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Notre Méthodologie */}
      <Section id="methodologie">
        <SectionTitle
          title="Notre Méthodologie"
          description="Une approche structurée en 3 étapes pour garantir le succès de vos projets de transformation et d'amélioration continue."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px] bg-gray-200"></div>
          <div
            className="hidden lg:block absolute top-8 left-0 w-1/3 h-[3px]"
            style={{ backgroundColor: 'var(--nova-accent)' }}
          ></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {methodology.map((step, index) => (
              <Reveal key={step.step} delay={100 * (index + 1)}>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10"
                      style={{ backgroundColor: 'var(--nova-accent)' }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--nova-light-bg)' }}
                    >
                      <step.icon size={38} strokeWidth={1.5} style={{ color: 'var(--nova-accent)' }} />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                      {step.title}
                    </h3>
                    <p
                      className="leading-relaxed text-[15px]"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-6 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Nos Références & Partenaires */}
      <Section light>
        <SectionTitle
          title="Nos Références & Partenaires"
          description="Nous collaborons avec les leaders du marché pour offrir à nos clients les meilleures solutions et expertises disponibles."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={40 * index}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:text-white group-hover:bg-[color:var(--nova-accent)]">
                    <span className="font-bold text-sm">{partner.logo}</span>
                  </div>
                  <span
                    className="text-sm text-center font-medium transition-colors duration-300 group-hover:text-[color:var(--nova-heading)]"
                    style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                  >
                    {partner.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={100 * (index + 1)}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--nova-accent)' }}>
                  {stat.value}
                </div>
                <p className="font-medium" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Prêt à transformer votre entreprise ?"
        description="Contactez nos experts pour un diagnostic personnalisé et découvrez comment nous pouvons accélérer votre croissance."
        actions={[
          { label: 'Nous Contacter', href: '#contact' },
          { label: 'Découvrir nos Formations', href: '#formations', outline: true }
        ]}
      />
    </div>
  );
};

export default AboutPage;

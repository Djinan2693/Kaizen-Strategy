import { Shield, AlertTriangle, TrendingUp, Users, ScrollText, GraduationCap, FileSearch, Map } from 'lucide-react';
import { PageTitle, Section, SectionTitle, ServiceItem, CallToAction, Reveal } from './nova';

const RiskManagementPage = () => {
  const domaines = [
    {
      icon: Map,
      title: "Analyse et cartographie des risques",
      points: [
        "Identification des risques stratégiques, opérationnels, financiers, juridiques et environnementaux",
        "Cartographie des risques pour une gestion proactive et hiérarchisée"
      ]
    },
    {
      icon: ScrollText,
      title: "Élaboration de stratégies de gestion des risques",
      points: [
        "Mise en place de plans de mitigation et d'atténuation des risques",
        "Accompagnement dans le développement de politiques et procédures adaptées à chaque organisation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formation et sensibilisation",
      points: [
        "Programmes de formation sur la gestion des risques pour les cadres dirigeants et opérationnels",
        "Sensibilisation aux nouvelles menaces émergentes (cybersécurité, instabilité géopolitique, etc.)"
      ]
    },
    {
      icon: FileSearch,
      title: "Audit et conformité",
      points: [
        "Réalisation d'audits pour garantir la conformité réglementaire",
        "Analyse des systèmes internes pour identifier les failles potentielles et recommander des actions correctives"
      ]
    }
  ];

  const atouts = [
    {
      icon: Users,
      title: "Expertise diversifiée",
      description: "Nos experts allient compétences techniques et compréhension des contextes locaux et internationaux."
    },
    {
      icon: Shield,
      title: "Solutions adaptées",
      description: "\"Le Bouclier\" est conçu sur mesure pour répondre aux besoins spécifiques de chaque client."
    },
    {
      icon: Users,
      title: "Accompagnement global",
      description: "Nous offrons un suivi complet, depuis l'évaluation initiale jusqu'à la mise en œuvre des solutions."
    },
    {
      icon: AlertTriangle,
      title: "Prévention et anticipation",
      description: "Grâce à nos outils et nos analyses, nous aidons nos clients à anticiper les menaces avant qu'elles ne deviennent des crises."
    }
  ];

  const typesRisques = [
    {
      icon: AlertTriangle,
      title: "Risques Opérationnels",
      description: "Processus, systèmes, erreurs humaines, cyber-sécurité"
    },
    {
      icon: TrendingUp,
      title: "Risques Financiers",
      description: "Liquidité, crédit, marché, change, taux d'intérêt"
    },
    {
      icon: Users,
      title: "Risques Stratégiques",
      description: "Concurrence, innovation, réputation, partenariats"
    },
    {
      icon: Shield,
      title: "Risques Réglementaires",
      description: "Conformité, RGPD, normes sectorielles, audits"
    }
  ];

  const processus = [
    { title: "Identification", description: "Cartographie complète de tous vos risques potentiels" },
    { title: "Évaluation", description: "Analyse de l'impact et de la probabilité de chaque risque" },
    { title: "Traitement", description: "Mise en place de stratégies de mitigation adaptées" },
    { title: "Surveillance", description: "Monitoring continu et ajustements en temps réel" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Risk Management"
        subtitle="Protégez votre entreprise avec notre solution complète de gestion des risques. Anticipez, analysez et maîtrisez tous les défis qui menacent votre activité."
        breadcrumbs={[{ label: 'Expertises' }, { label: 'Risk Management' }]}
        image="/nova/services-page-title-bg.jpg"
      />

      {/* Domaines d'intervention */}
      <Section>
        <SectionTitle
          title="Nos domaines d'intervention"
          description="Quatre leviers complémentaires pour installer une gestion des risques durable dans votre organisation."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {domaines.map((domaine, index) => (
            <Reveal key={domaine.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--nova-heading)' }}>
                    {domaine.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {domaine.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] leading-relaxed"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      <domaine.icon size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--nova-accent)' }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Le Bouclier */}
      <Section dark>
        <SectionTitle
          light
          title={'Nos solutions innovantes : "Le Bouclier"'}
          description="En réponse aux défis complexes auxquels nos clients sont confrontés, Kaizen Strategy a développé une plateforme innovante de gestion des risques appelée « Le Bouclier »."
        />

        <Reveal delay={100}>
          <div className="rounded-xl p-8 lg:p-12" style={{ backgroundColor: 'var(--nova-dark-surface)' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Qu'est-ce que LeBouclier ?</h3>
                <p className="text-lg font-semibold text-white/90 mb-4">UNE INITIATIVE DE GESTION DES RISQUES</p>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    LeBouclier est la toute première application ivoirienne à offrir une vision 360°
                    pour évaluer et gérer les risques de l'entreprise. Cette application guide les
                    managers à travers 6 familles de risques qu'ils peuvent rencontrer.
                  </p>
                  <p>
                    L'application aide également à tirer parti des outils de gestion des risques
                    et des services professionnels offerts aux entreprises. Avec LeBouclier,
                    les managers sont en mesure de mettre en place un plan d'action pour
                    minimiser les menaces et maximiser les occasions d'affaires.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield size={80} strokeWidth={1.2} className="text-white" />
                </div>
                <p className="text-xl font-semibold text-white">Vision 360° des Risques</p>
                <p className="text-white/70 mt-2">6 familles de risques analysées</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Pourquoi nous choisir */}
      <Section light>
        <SectionTitle
          title="Pourquoi choisir Kaizen Strategy ?"
          description="Ce qui distingue notre accompagnement en gestion des risques."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {atouts.map((atout, index) => (
            <Reveal key={atout.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <atout.icon size={30} strokeWidth={1.5} className="text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {atout.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {atout.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Types de risques */}
      <Section>
        <SectionTitle
          title="Types de Risques Couverts"
          description="Une protection complète contre tous les défis modernes de l'entreprise"
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {typesRisques.map((type, index) => (
            <ServiceItem
              key={type.title}
              icon={type.icon}
              title={type.title}
              description={type.description}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </Section>

      {/* Processus */}
      <Section light>
        <SectionTitle
          title="Notre Processus"
          description="Une méthodologie éprouvée en 4 étapes pour une protection optimale"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processus.map((step, index) => (
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
        title="Prêt à Sécuriser Votre Entreprise ?"
        description={'Découvrez comment notre solution "Le Bouclier" peut protéger votre business contre tous les risques modernes.'}
        actions={[
          { label: 'Demander une Démo' },
          { label: 'Télécharger la Brochure', outline: true }
        ]}
      />
    </div>
  );
};

export default RiskManagementPage;

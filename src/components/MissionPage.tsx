import { Target, Eye, Award, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import { PageTitle, Section, SectionTitle, CheckList, Reveal } from './nova';

const MissionPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous poursuivons l'excellence dans chaque projet, chaque interaction et chaque solution que nous proposons."
    },
    {
      icon: Award,
      title: "Intégrité",
      description: "L'honnêteté et la transparence guident toutes nos actions et relations avec nos clients et partenaires."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous embracons les nouvelles technologies et méthodes pour offrir des solutions avant-gardistes."
    },
    {
      icon: TrendingUp,
      title: "Amélioration Continue",
      description: "L'esprit Kaizen est au cœur de notre philosophie : progresser constamment et sans relâche."
    }
  ];

  const raisonDetre = [
    {
      icon: Target,
      title: "Mission",
      text: "Accompagner les entreprises dans leur transformation stratégique et digitale en proposant des solutions innovantes, personnalisées et créatrices de valeur durable. Nous croyons en l'amélioration continue comme moteur de l'excellence."
    },
    {
      icon: Eye,
      title: "Vision",
      text: "Devenir le partenaire stratégique de référence pour les entreprises ambitieuses, en combinant excellence opérationnelle, innovation technologique et approche humaine. Nous aspirons à créer un impact positif et mesurable."
    },
    {
      icon: Globe,
      title: "Impact",
      text: "Contribuer au développement économique en accompagnant les entreprises africaines vers l'excellence internationale, en créant de la valeur partagée et en favorisant l'innovation et l'entrepreneuriat."
    }
  ];

  const impacts = [
    {
      number: "200+",
      label: "Entreprises Transformées",
      description: "Clients accompagnés vers l'excellence opérationnelle"
    },
    {
      number: "15+",
      label: "Années d'Expertise",
      description: "D'expérience en transformation d'entreprises"
    },
    {
      number: "95%",
      label: "Taux de Satisfaction",
      description: "De nos clients recommandent nos services"
    },
    {
      number: "300%",
      label: "ROI Moyen",
      description: "Retour sur investissement généré pour nos clients"
    }
  ];

  const engagements = [
    {
      title: "Confidentialité Absolue",
      description: "Protection rigoureuse de vos informations stratégiques et respect total de la confidentialité."
    },
    {
      title: "Résultats Mesurables",
      description: "Engagement sur des objectifs concrets avec des indicateurs de performance clairement définis."
    },
    {
      title: "Accompagnement Sur-Mesure",
      description: "Solutions personnalisées adaptées à votre secteur, votre culture et vos enjeux spécifiques."
    },
    {
      title: "Innovation Continue",
      description: "Veille technologique permanente et intégration des dernières innovations dans nos solutions."
    }
  ];

  const atouts = [
    "Expertise Sectorielle",
    "Approche Personnalisée",
    "Résultats Prouvés",
    "Support Continu"
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Notre Mission"
        subtitle="Accompagner les professionnels, les équipes et les organisations dans le développement de leurs compétences et la recherche de l'excellence."
        breadcrumbs={[{ label: 'À propos' }, { label: 'Notre Mission' }]}
        image="/nova/about-page-title-bg.jpg"
      />

      {/* Qui sommes-nous */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2 className="text-2xl md:text-[32px] font-bold mb-6 relative pb-5 inline-block" style={{ color: 'var(--nova-heading)' }}>
              Qui sommes-nous ?
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              <strong style={{ color: 'var(--nova-heading)' }}>KAIZEN STRATEGY</strong> est un cabinet d'études et de conseil, spécialisé
              dans l'accompagnement stratégique des organisations à travers des solutions sur mesure et innovantes. Acteur de référence
              au niveau national et sous régionale, notre approche repose sur l'excellence, la mobilisation du capital humain,
              et l'optimisation des compétences pour répondre aux enjeux de nos partenaires.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl p-8 text-white" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Notre Engagement</h3>
              <CheckList
                light
                items={[
                  "Accompagnement personnalisé adapté à votre contexte",
                  "Solutions innovantes basées sur les meilleures pratiques",
                  "Transfert de compétences pour garantir l'autonomie",
                  "Mesure rigoureuse de l'impact et des résultats"
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission, Vision, Impact */}
      <Section light>
        <SectionTitle
          title="Notre Raison d'Être"
          description="Ce qui nous met en mouvement, ce vers quoi nous tendons et ce que nous laissons derrière nous."
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {raisonDetre.map((item, index) => (
            <Reveal key={item.title} delay={100 * (index + 1)}>
              <div className="text-center h-full">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <item.icon className="text-white" size={38} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Nos Valeurs */}
      <Section>
        <SectionTitle
          title="Nos Valeurs Fondamentales"
          description="Les principes qui guident chacune de nos actions et définissent notre identité"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <value.icon size={30} strokeWidth={1.5} className="text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {value.title}
                </h3>
                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Notre Impact */}
      <Section dark>
        <SectionTitle
          light
          title="Notre Impact"
          description="Des résultats concrets qui témoignent de notre engagement envers l'excellence"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Reveal key={impact.label} delay={100 * (index + 1)}>
              <div className="text-center group">
                <div
                  className="rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-dark-surface)' }}
                >
                  <div className="text-4xl font-bold text-white mb-2">{impact.number}</div>
                  <div className="text-white font-medium">{impact.label}</div>
                </div>
                <p className="text-white/70 text-sm">{impact.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Nos Engagements */}
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2 className="text-2xl md:text-[32px] font-bold mb-8 relative pb-5 inline-block" style={{ color: 'var(--nova-heading)' }}>
              Nos Engagements
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>

            <div className="space-y-6">
              {engagements.map((engagement, index) => (
                <div key={engagement.title} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ color: 'var(--nova-heading)' }}>
                      {engagement.title}
                    </h3>
                    <p
                      className="text-[15px] leading-relaxed"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      {engagement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--nova-heading)' }}>
                Pourquoi Nous Choisir ?
              </h3>
              <CheckList items={atouts} />
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default MissionPage;

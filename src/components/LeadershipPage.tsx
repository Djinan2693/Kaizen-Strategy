import {
  Award,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Globe,
  Quote,
  Calendar,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';
import { PageTitle, Section, SectionTitle, CheckList, NovaButton, Reveal } from './nova';

const LeadershipPage = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Années d'Expérience",
      description: "Expert en transformation d'entreprises et développement stratégique"
    },
    {
      icon: Users,
      title: "200+ Entreprises Accompagnées",
      description: "PME et grandes entreprises transformées avec succès"
    },
    {
      icon: Globe,
      title: "Expertise Internationale",
      description: "Projets menés en Afrique, Europe et Amérique du Nord"
    },
    {
      icon: BookOpen,
      title: "Formations & Conférences",
      description: "Intervenant reconnu dans les universités et organisations professionnelles"
    }
  ];

  const education = [
    {
      degree: "Doctorat en Management Stratégique",
      institution: "Université de Management International",
      year: "2015",
      specialization: "Transformation Digitale et Innovation"
    },
    {
      degree: "Master en Finance d'Entreprise",
      institution: "École Supérieure de Commerce",
      year: "2010",
      specialization: "Corporate Finance & Risk Management"
    },
    {
      degree: "Ingénieur en Systèmes d'Information",
      institution: "École Nationale d'Ingénieurs",
      year: "2008",
      specialization: "Architecture IT & Business Intelligence"
    }
  ];

  const expertiseDomains = [
    "Transformation Digitale",
    "Risk Management",
    "Corporate Finance",
    "Intelligence Artificielle",
    "Études de Marché",
    "Amélioration Continue",
    "Leadership & Change Management",
    "Innovation Stratégique"
  ];

  const philosophy = [
    {
      icon: Target,
      title: "Vision Stratégique",
      text: "Anticiper les tendances, identifier les opportunités et tracer une voie claire vers le succès à long terme."
    },
    {
      icon: Users,
      title: "Leadership Humain",
      text: "Placer l'humain au centre de chaque décision et créer un environnement propice à l'épanouissement de chacun."
    },
    {
      icon: TrendingUp,
      title: "Excellence Continue",
      text: "Poursuivre constamment l'amélioration et l'innovation pour maintenir les plus hauts standards de qualité."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Leadership & Vision"
        subtitle="Découvrez l'expertise et la vision qui guident Kaizen Strategy vers l'excellence et l'innovation."
        breadcrumbs={[{ label: 'À propos' }, { label: 'Leadership' }]}
        image="/nova/team-page-title-bg.jpg"
      />

      {/* Présentation du Fondateur */}
      <Section>
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
          <Reveal delay={100}>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/photo-fondateur.png"
                  alt="Dr GNUI Koutoua Samson - Fondateur & CEO Kaizen Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg px-6 py-4 -mt-8 mx-6 relative text-center">
                <p className="font-bold" style={{ color: 'var(--nova-heading)' }}>
                  Dr GNUI Koutoua Samson
                </p>
                <p className="text-sm" style={{ color: 'var(--nova-accent)' }}>
                  Fondateur &amp; CEO
                </p>
              </div>

              <div
                className="mt-6 flex flex-col gap-3 text-sm"
                style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 35%)' }}
              >
                <span className="flex items-center gap-2">
                  <MapPin size={18} style={{ color: 'var(--nova-accent)' }} />
                  Abidjan, Côte d'Ivoire
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} style={{ color: 'var(--nova-accent)' }} />
                  15+ ans d'expérience
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-3 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Dr GNUI Koutoua Samson
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p className="text-lg font-medium mb-8" style={{ color: 'var(--nova-accent)' }}>
              Fondateur &amp; Directeur Général de Kaizen Strategy
            </p>

            <div className="rounded-xl p-6 lg:p-8 mb-8" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
              <div className="flex items-start gap-4">
                <Quote size={36} className="flex-shrink-0" style={{ color: 'var(--nova-accent)' }} />
                <div>
                  <blockquote
                    className="text-lg leading-relaxed italic mb-4"
                    style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' }}
                  >
                    "Chez Kaizen Strategy, nous croyons fermement que chaque entreprise porte en elle
                    un potentiel d'excellence inexploité. Notre mission est de révéler ce potentiel
                    à travers une approche méthodique, innovante et humaine. L'amélioration continue
                    n'est pas seulement notre nom, c'est notre ADN. Ensemble, transformons vos défis
                    en opportunités de croissance durable."
                  </blockquote>
                  <cite className="font-bold not-italic" style={{ color: 'var(--nova-heading)' }}>
                    Dr GNUI Koutoua Samson
                  </cite>
                </div>
              </div>
            </div>

            <div
              className="space-y-5 leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              <p>
                Fort de plus de 15 années d'expérience en transformation d'entreprises,
                <strong style={{ color: 'var(--nova-heading)' }}> Dr GNUI Koutoua Samson</strong> a fondé
                Kaizen Strategy avec une vision claire : accompagner les entreprises africaines
                vers l'excellence internationale.
              </p>
              <p>
                Diplômé d'un Doctorat en Management Stratégique, il combine expertise académique
                et expérience terrain pour proposer des solutions innovantes et adaptées aux
                réalités du marché africain. Sa passion pour l'amélioration continue et son
                approche centrée sur l'humain ont permis de transformer plus de 200 entreprises
                à travers le continent.
              </p>
              <p>
                Visionnaire et pragmatique, Dr GNUI croit en la force de l'innovation
                technologique comme levier de transformation, tout en gardant l'humain
                au centre de chaque démarche. Son leadership inspirant guide Kaizen Strategy
                vers l'excellence et l'impact positif.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Réalisations Clés */}
      <Section light>
        <SectionTitle
          title="Réalisations Clés"
          description="Un parcours d'excellence marqué par des réalisations exceptionnelles et un impact significatif sur l'écosystème entrepreneurial"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center group hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <achievement.icon size={30} strokeWidth={1.5} className="text-white" />
                </div>
                <h3
                  className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {achievement.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {achievement.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Formation & Expertise */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal delay={100}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-8 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Formation Académique
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-lg p-6 border-l-4"
                  style={{ backgroundColor: 'var(--nova-light-bg)', borderColor: 'var(--nova-accent)' }}
                >
                  <h3 className="font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                    {edu.degree}
                  </h3>
                  <p className="font-medium mb-1" style={{ color: 'var(--nova-accent)' }}>
                    {edu.institution}
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 40%)' }}>
                    {edu.year}
                  </p>
                  <p className="text-sm" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' }}>
                    {edu.specialization}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-8 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              Domaines d'Expertise
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertiseDomains.map((domain) => (
                <div
                  key={domain}
                  className="bg-white border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:border-[color:var(--nova-accent)]"
                >
                  <CheckList items={[domain]} />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl p-6 text-white" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Vision Leadership</h3>
              <p className="text-white/85 leading-relaxed">
                "Le leadership authentique consiste à inspirer et à guider les autres
                vers l'excellence, tout en créant un impact positif durable sur
                l'organisation et la société."
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Philosophie de Leadership */}
      <Section dark>
        <SectionTitle
          light
          title="Philosophie de Leadership"
          description="Les principes qui guident le leadership de Dr GNUI et la culture d'excellence de Kaizen Strategy"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {philosophy.map((item, index) => (
            <Reveal key={item.title} delay={100 * (index + 1)}>
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--nova-dark-surface)' }}
                >
                  <item.icon size={38} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact & Connect */}
      <Section light>
        <SectionTitle
          title="Connectez-vous avec Dr GNUI"
          description="Échangez directement avec notre fondateur pour discuter de vos projets de transformation et découvrir comment Kaizen Strategy peut vous accompagner."
        />

        <Reveal delay={100} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  Rencontrez le Leadership
                </h3>
                <p className="mb-6" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  Planifiez un entretien personnalisé pour explorer les opportunités
                  de collaboration et découvrir notre approche unique.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} style={{ color: 'var(--nova-accent)' }} />
                    <span style={{ color: 'var(--nova-default)' }}>gnuik.samson@kaizenstrategy.ci</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={20} style={{ color: 'var(--nova-accent)' }} />
                    <span style={{ color: 'var(--nova-default)' }}>Dr GNUI Koutoua Samson</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4"
                  style={{ borderColor: 'var(--nova-accent)' }}
                >
                  <img
                    src="/photo-fondateur.png"
                    alt="Dr GNUI Koutoua Samson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <NovaButton>Planifier un Rendez-vous</NovaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default LeadershipPage;

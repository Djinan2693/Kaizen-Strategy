import {
  Monitor,
  Award,
  Clock,
  Users,
  BookOpen,
  Play,
  Zap,
  Globe,
  Brain,
  Target
} from 'lucide-react';
import { PageTitle, Section, SectionTitle, CallToAction, Reveal } from './nova';

const KaizenAcademia = () => {
  const advantages = [
    {
      icon: Award,
      title: "Formations Certifiantes",
      description: "Obtenez des certifications reconnues pour valoriser vos compétences professionnelles."
    },
    {
      icon: Monitor,
      title: "Examens en Ligne",
      description: "Passez vos évaluations directement sur la plateforme avec correction automatique."
    },
    {
      icon: Clock,
      title: "Accessibilité 24/7",
      description: "Apprenez à votre rythme, où que vous soyez, à tout moment de la journée."
    },
    {
      icon: Users,
      title: "Communauté d'Apprenants",
      description: "Échangez avec d'autres professionnels et enrichissez votre réseau."
    }
  ];

  const features = [
    { icon: BookOpen, text: "Bibliothèque de cours interactive" },
    { icon: Play, text: "Vidéos HD et contenus multimédias" },
    { icon: Brain, text: "IA personnalisée pour l'apprentissage" },
    { icon: Target, text: "Suivi de progression en temps réel" },
    { icon: Globe, text: "Accès multi-plateforme" },
    { icon: Zap, text: "Apprentissage adaptatif intelligent" }
  ];

  const keyFigures = [
    { icon: Award, value: "300+ Formations", label: "Certifiantes et interactives" },
    { icon: Users, value: "15 000+ Apprenants", label: "Communauté active" },
    { icon: Clock, value: "24/7 Disponible", label: "Accès illimité" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Kaizen Academia"
        subtitle="La première plateforme e-learning dédiée à l'excellence professionnelle. Transformez vos compétences avec nos formations innovantes et interactives."
        breadcrumbs={[{ label: 'Formations' }, { label: 'Kaizen Academia' }]}
        image="/nova/blog-page-title-bg.jpg"
      />

      {/* Chiffres clés + accès plateforme */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={100}>
            <h2
              className="text-2xl md:text-[32px] font-bold mb-6 relative pb-5 inline-block"
              style={{ color: 'var(--nova-heading)' }}
            >
              La plateforme e-learning Kaizen
              <span
                className="absolute bottom-0 left-0 block w-[50px] h-[3px]"
                style={{ backgroundColor: 'var(--nova-accent)' }}
              ></span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Interface intuitive, contenus interactifs et technologies de pointe
              pour une formation professionnelle d'exception, accessible partout et à tout moment.
            </p>

            <a
              href="https://kaizenstrategyci.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-medium tracking-wide transition-all duration-500 hover:bg-[color:var(--nova-accent-dark)]"
              style={{ backgroundColor: 'var(--nova-accent)' }}
            >
              <Play size={22} />
              Accéder à la Plateforme
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl p-8 space-y-6" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
              {keyFigures.map((figure) => (
                <div key={figure.value} className="flex items-center gap-4 text-white">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--nova-dark-surface)' }}
                  >
                    <figure.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{figure.value}</div>
                    <div className="text-white/70 text-sm">{figure.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Aperçu de la plateforme */}
      <Section light>
        <SectionTitle
          title="Une Expérience d'Apprentissage Révolutionnaire"
          description="Interface intuitive, contenus interactifs et technologies de pointe pour une formation professionnelle d'exception."
        />

        <Reveal delay={100}>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Barre de navigateur */}
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="ml-6 bg-white px-4 py-1 rounded text-sm border" style={{ color: 'var(--nova-default)' }}>
                    kaizenstrategyci.online
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Colonne latérale */}
                  <div className="rounded-xl p-6 border border-gray-200" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                    <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--nova-heading)' }}>
                      Mes Formations
                    </h3>
                    <div className="space-y-3">
                      <div className="text-white p-3 rounded-lg text-sm" style={{ backgroundColor: 'var(--nova-accent)' }}>
                        <div className="flex items-center justify-between">
                          <span>Leadership Digital</span>
                          <span className="text-xs">75%</span>
                        </div>
                        <div className="w-full bg-white/30 rounded-full h-1 mt-2">
                          <div className="bg-white h-1 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-sm border border-gray-200" style={{ color: 'var(--nova-default)' }}>
                        <span>Risk Management</span>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="h-1 rounded-full w-1/3" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-sm border border-gray-200" style={{ color: 'var(--nova-default)' }}>
                        <span>IA & Business</span>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="h-1 rounded-full w-1/5" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu principal */}
                  <div className="lg:col-span-2 rounded-xl p-6 border border-gray-200" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-xl" style={{ color: 'var(--nova-heading)' }}>Cours en Direct</h3>
                      <div className="flex items-center text-sm" style={{ color: 'var(--nova-accent)' }}>
                        <div
                          className="w-2 h-2 rounded-full mr-2 animate-pulse"
                          style={{ backgroundColor: 'var(--nova-accent)' }}
                        ></div>
                        LIVE
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4 relative overflow-hidden">
                      <Play size={64} className="text-white opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 text-white px-3 py-1 rounded text-sm">
                          Module 3 : Stratégies d'Innovation - Dr GNUI Koutoua Samson
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                          Participants
                        </div>
                        <div className="font-bold" style={{ color: 'var(--nova-heading)' }}>247 connectés</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                          Durée restante
                        </div>
                        <div className="font-bold" style={{ color: 'var(--nova-heading)' }}>45 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Avantages */}
      <Section>
        <SectionTitle
          title="Pourquoi Choisir Kaizen Academia ?"
          description="Une plateforme conçue pour maximiser votre apprentissage et accélérer votre développement professionnel."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage.title} delay={100 * (index + 1)}>
              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <advantage.icon className="text-white" size={30} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {advantage.title}
                </h3>

                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {advantage.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Fonctionnalités */}
      <Section light>
        <SectionTitle
          title="Fonctionnalités Avancées"
          description="Tout ce qu'il faut pour apprendre efficacement, sur un seul espace."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={feature.text} delay={60 * index}>
              <div className="flex items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <feature.icon className="text-white" size={22} />
                </div>
                <span
                  className="font-medium transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                  style={{ color: 'var(--nova-heading)' }}
                >
                  {feature.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Prêt à Transformer Votre Carrière ?"
        description="Rejoignez des milliers de professionnels qui ont choisi Kaizen Academia pour développer leurs compétences et accélérer leur réussite."
        actions={[{ label: 'Commencer Maintenant', href: 'https://kaizenstrategyci.online' }]}
      />
    </div>
  );
};

export default KaizenAcademia;

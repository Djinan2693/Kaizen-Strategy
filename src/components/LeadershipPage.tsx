import React from 'react';
import { 
  User, 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  Quote,
  Calendar,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#b00000]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-[#b00000]">Leadership</span> & Vision
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Découvrez l'expertise et la vision qui guident Kaizen Strategy 
                vers l'excellence et l'innovation
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />
                  <span>15+ ans d'expérience</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-white">
                  <img 
                    src="/photo-fondateur.png" 
                    alt="Dr GNUI Koutoua Samson - Fondateur & CEO Kaizen Strategy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-6 py-3">
                  <p className="text-gray-900 font-bold text-center">Dr GNUI Koutoua Samson</p>
                  <p className="text-[#b00000] text-sm text-center">Fondateur & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation du Fondateur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dr GNUI Koutoua Samson
              </h2>
              <p className="text-xl text-[#b00000] font-medium mb-6">
                Fondateur & Directeur Général de Kaizen Strategy
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
              <div className="flex items-start mb-6">
                <Quote size={40} className="text-[#b00000] mr-4 flex-shrink-0" />
                <div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    "Chez Kaizen Strategy, nous croyons fermement que chaque entreprise porte en elle 
                    un potentiel d'excellence inexploité. Notre mission est de révéler ce potentiel 
                    à travers une approche méthodique, innovante et humaine. L'amélioration continue 
                    n'est pas seulement notre nom, c'est notre ADN. Ensemble, transformons vos défis 
                    en opportunités de croissance durable."
                  </blockquote>
                  <cite className="text-gray-900 font-bold">Dr GNUI Koutoua Samson</cite>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Fort de plus de 15 années d'expérience en transformation d'entreprises, 
                <strong className="text-gray-900"> Dr GNUI Koutoua Samson</strong> a fondé 
                Kaizen Strategy avec une vision claire : accompagner les entreprises africaines 
                vers l'excellence internationale.
              </p>
              <p className="mb-6">
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
          </div>
        </div>
      </section>

      {/* Réalisations Clés */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Réalisations <span className="text-[#b00000]">Clés</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un parcours d'excellence marqué par des réalisations exceptionnelles 
              et un impact significatif sur l'écosystème entrepreneurial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b00000] to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Formation */}
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Formation <span className="text-[#b00000]">Académique</span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#b00000]">
                    <h3 className="font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-[#b00000] font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-700 text-sm">{edu.specialization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Domaines d'Expertise */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domaines <span className="text-[#b00000]">d'Expertise</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {expertiseDomains.map((domain, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#b00000] hover:shadow-md transition-all duration-300">
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-[#b00000] mr-3 flex-shrink-0" />
                      <span className="text-gray-900 font-medium text-sm">{domain}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#b00000] to-red-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Vision Leadership</h3>
                <p className="text-white/90 leading-relaxed">
                  "Le leadership authentique consiste à inspirer et à guider les autres 
                  vers l'excellence, tout en créant un impact positif durable sur 
                  l'organisation et la société."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie de Leadership */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Philosophie de <span className="text-[#b00000]">Leadership</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident le leadership de Dr GNUI et l'culture d'excellence de Kaizen Strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b00000] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vision Stratégique</h3>
              <p className="text-gray-300 leading-relaxed">
                Anticiper les tendances, identifier les opportunités et tracer 
                une voie claire vers le succès à long terme.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b00000] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Leadership Humain</h3>
              <p className="text-gray-300 leading-relaxed">
                Placer l'humain au centre de chaque décision et créer 
                un environnement propice à l'épanouissement de chacun.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b00000] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence Continue</h3>
              <p className="text-gray-300 leading-relaxed">
                Poursuivre constamment l'amélioration et l'innovation 
                pour maintenir les plus hauts standards de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Connect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Connectez-vous avec <span className="text-[#b00000]">Dr GNUI</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Échangez directement avec notre fondateur pour discuter de vos projets 
              de transformation et découvrir comment Kaizen Strategy peut vous accompagner.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Rencontrez le Leadership
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Planifiez un entretien personnalisé pour explorer les opportunités 
                    de collaboration et découvrir notre approche unique.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail size={20} className="text-[#b00000] mr-3" />
                      <span className="text-gray-700">gnuik.samson@kaizenstrategy.ci</span>
                    </div>
                    <div className="flex items-center">
                      <Linkedin size={20} className="text-[#b00000] mr-3" />
                      <span className="text-gray-700">Dr GNUI Koutoua Samson</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#b00000]">
                    <img 
                      src="/photo-fondateur.png" 
                      alt="Dr GNUI Koutoua Samson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="bg-[#b00000] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium">
                    Planifier un Rendez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
import { Target, Eye, Award, CheckCircle, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import PageHero from './PageHero';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        badge="À propos de Kaizen Strategy"
        title="Notre Mission"
        subtitle="Accompagner les professionnels, les équipes et les organisations dans le développement de leurs compétences et la recherche de l'excellence."
        features={[
          { title: "Excellence", text: "Promouvoir une culture d'amélioration continue" },
          { title: "Impact", text: "Transformer les compétences en résultats concrets" },
          { title: "Accompagnement", text: "Guider chaque apprenant vers sa progression" }
        ]}
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Qui sommes-nous ?
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">KAIZEN STRATEGY</strong> est un cabinet d'études et de conseil, spécialisé 
                  dans l'accompagnement stratégique des organisations à travers des solutions sur mesure et innovantes. Acteur de référence 
                  au niveau national et sous régionale, notre approche repose sur l'excellence, la mobilisation du capital humain, 
                  et l'optimisation des compétences pour répondre aux enjeux de nos partenaires.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-[#b00000] to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-white flex-shrink-0 mt-1" />
                    <p>Accompagnement personnalisé adapté à votre contexte</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-white flex-shrink-0 mt-1" />
                    <p>Solutions innovantes basées sur les meilleures pratiques</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-white flex-shrink-0 mt-1" />
                    <p>Transfert de compétences pour garantir l'autonomie</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-white flex-shrink-0 mt-1" />
                    <p>Mesure rigoureuse de l'impact et des résultats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="text-[#b00000]">Raison d'Être</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Accompagner les entreprises dans leur transformation stratégique et digitale 
                en proposant des solutions innovantes, personnalisées et créatrices de valeur durable. 
                Nous croyons en l'amélioration continue comme moteur de l'excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Devenir le partenaire stratégique de référence pour les entreprises ambitieuses, 
                en combinant excellence opérationnelle, innovation technologique et approche humaine. 
                Nous aspirons à créer un impact positif et mesurable.
              </p>
            </div>

            {/* Impact */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Contribuer au développement économique en accompagnant les entreprises 
                africaines vers l'excellence internationale, en créant de la valeur partagée 
                et en favorisant l'innovation et l'entrepreneuriat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-[#b00000]">Valeurs Fondamentales</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent notre identité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b00000] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Impact */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Notre <span className="text-[#b00000]">Impact</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Des résultats concrets qui témoignent de notre engagement envers l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#b00000] to-red-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-white mb-2">{impact.number}</div>
                  <div className="text-white font-medium">{impact.label}</div>
                </div>
                <p className="text-gray-400 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Nos <span className="text-[#b00000]">Engagements</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b00000] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Confidentialité Absolue</h3>
                    <p className="text-gray-600">Protection rigoureuse de vos informations stratégiques et respect total de la confidentialité.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b00000] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Résultats Mesurables</h3>
                    <p className="text-gray-600">Engagement sur des objectifs concrets avec des indicateurs de performance clairement définis.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b00000] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Accompagnement Sur-Mesure</h3>
                    <p className="text-gray-600">Solutions personnalisées adaptées à votre secteur, votre culture et vos enjeux spécifiques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b00000] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation Continue</h3>
                    <p className="text-gray-600">Veille technologique permanente et intégration des dernières innovations dans nos solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Nous Choisir ?</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Expertise Sectorielle</span>
                    <span className="text-2xl font-bold text-[#b00000]">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Approche Personnalisée</span>
                    <span className="text-2xl font-bold text-[#b00000]">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Résultats Prouvés</span>
                    <span className="text-2xl font-bold text-[#b00000]">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Support Continu</span>
                    <span className="text-2xl font-bold text-[#b00000]">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionPage;
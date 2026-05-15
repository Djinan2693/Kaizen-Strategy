import React from 'react';
import { Target, Eye, Award, User, ArrowRight, CheckCircle } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              À propos de <span className="text-[#b00000]">Kaizen Strategy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre histoire, notre vision et les valeurs qui nous guident 
              dans l'accompagnement de vos projets de transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Qui sommes-nous ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            {/* Qui sommes nous - Texte complet */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KAIZEN STRATEGY est un cabinet d'études et de conseil, spécialisé dans l'accompagnement stratégique des organisations à travers des solutions sur mesure et innovantes. Acteur de référence au niveau national et sous régionale, notre approche repose sur l'excellence, la mobilisation du capital humain, et l'optimisation des compétences pour répondre aux enjeux de nos partenaires.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Valeurs */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Devenir le partenaire stratégique de référence pour les entreprises ambitieuses, 
                en combinant excellence opérationnelle, innovation technologique et approche humaine. 
                Nous aspirons à créer un impact positif et mesurable.
              </p>
            </div>

            {/* Valeurs */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Excellence, intégrité, innovation et amélioration continue (Kaizen) sont au cœur 
                de notre philosophie. Nous privilégions les relations durables, la transparence 
                et la co-création de valeur avec nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mot du CEO */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Photo CEO */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={60} className="text-gray-400" />
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Dr GNUI Koutoua Samson
                  </h3>
                  <p className="text-[#b00000] font-medium mb-6">Fondateur & CEO</p>
                  
                  <blockquote className="text-lg text-gray-600 leading-relaxed italic mb-6">
                    "Chez Kaizen Strategy, nous croyons fermement que chaque entreprise porte en elle 
                    un potentiel d'excellence inexploité. Notre mission est de révéler ce potentiel 
                    à travers une approche méthodique, innovante et humaine. L'amélioration continue 
                    n'est pas seulement notre nom, c'est notre ADN. Ensemble, transformons vos défis 
                    en opportunités de croissance durable."
                  </blockquote>
                  
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-16 h-1 bg-[#b00000] rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthodologie */}
      <section id="methodologie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="text-[#b00000]">Méthodologie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une approche structurée en 3 étapes pour garantir le succès de vos projets 
              de transformation et d'amélioration continue.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-1/2 left-0 w-1/3 h-1 bg-[#b00000] transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {methodology.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#b00000] rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                      <step.icon size={40} className="text-[#b00000]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Références & Partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos Références & <span className="text-[#b00000]">Partenaires</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les leaders du marché pour offrir à nos clients 
              les meilleures solutions et expertises disponibles.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#b00000] group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-sm">{partner.logo}</span>
                  </div>
                  <span className="text-sm text-gray-600 text-center font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b00000] mb-2">200+</div>
              <p className="text-gray-600 font-medium">Clients accompagnés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b00000] mb-2">15+</div>
              <p className="text-gray-600 font-medium">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b00000] mb-2">95%</div>
              <p className="text-gray-600 font-medium">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contactez nos experts pour un diagnostic personnalisé et découvrez 
              comment nous pouvons accélérer votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-[#b00000] text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <CheckCircle size={20} className="mr-2" />
                Nous Contacter
              </a>
              <a 
                href="#formations"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-medium"
              >
                Découvrir nos Formations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
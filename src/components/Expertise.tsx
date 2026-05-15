import React from 'react';
import { BarChart3, Shield, Brain, TrendingUp, ArrowRight, CheckCircle, Zap, Target, Award } from 'lucide-react';

const expertiseAreas = [
  {
    icon: BarChart3,
    title: "Études & Recherches",
    description: "Analyses de marché approfondies, études sectorielles et benchmarking concurrentiel pour éclairer vos décisions stratégiques avec une expertise du marché africain.",
    features: ["Études de marché", "Benchmarking", "Analyses sectorielles", "Veille concurrentielle"],
    color: "from-blue-500 to-blue-600",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    stats: { value: "85%", label: "Précision des analyses" }
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Solution \"Le Bouclier\" pour une protection complète de votre entreprise. Identification, évaluation et mitigation des risques opérationnels, financiers et stratégiques.",
    features: ["Diagnostic des risques", "Stratégies de mitigation", "Conformité", "Gestion de crises"],
    color: "from-red-500 to-red-600",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    stats: { value: "99%", label: "Protection assurée" }
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Intégration stratégique de l'intelligence artificielle en 3 phases : Diagnostic, Implémentation et Formation pour transformer vos processus métier.",
    features: ["Diagnostic IA", "Implémentation", "Formation équipes", "Transformation digitale"],
    color: "from-purple-500 to-purple-600",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    stats: { value: "60%", label: "Gain de productivité" }
  },
  {
    icon: TrendingUp,
    title: "Corporate Finance",
    description: "Optimisation de la structure financière, levées de fonds, M&A et valorisation d'entreprise pour accélérer votre croissance sur les marchés africains.",
    features: ["Levées de fonds", "M&A", "Valorisation", "Restructuration financière"],
    color: "from-green-500 to-green-600",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    stats: { value: "40%", label: "ROI moyen" }
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#b00000]/5 to-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/10 to-red-500/10 text-[#b00000] px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Target size={16} className="mr-2" />
            Nos Pôles d'Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
            4 Domaines d'<span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Des solutions sur mesure pour transformer votre entreprise et accélérer votre croissance 
            avec une expertise adaptée au marché africain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-[#b00000]/20 relative"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-white">{area.stats.value}</div>
                    <div className="text-xs text-white/80">{area.stats.label}</div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#b00000] transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#b00000] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-[#b00000] font-bold group-hover:text-red-700 transition-colors duration-300">
                  <span>Découvrir en détail</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#b00000]/20 to-red-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/20 to-red-500/20 backdrop-blur-sm border border-[#b00000]/30 text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
                <Award size={16} className="mr-2" />
                Résultats Exceptionnels
              </div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6">
                Des Transformations <span className="bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent">Mesurables</span>
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Nos clients témoignent de transformations significatives grâce à notre expertise 
                et notre approche méthodologique adaptée aux réalités du marché africain.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">+40%</div>
                  <div className="text-sm text-gray-400">Croissance moyenne ROI</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">-60%</div>
                  <div className="text-sm text-gray-400">Réduction des risques</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                  <div className="text-sm text-gray-400">Taux de satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-gray-400">Projets réalisés</div>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-[#b00000] to-red-600 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 font-bold text-lg flex items-center">
                <Zap size={24} className="mr-3" />
                Voir nos Études de Cas
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg" 
                  alt="Équipe de direction célébrant le succès"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Success indicator */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#b00000] to-red-600 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-black text-white mb-1">Success</div>
                  <div className="text-xs text-red-100">Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Prêt à Transformer Votre Entreprise ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Nos experts sont à votre disposition pour analyser vos besoins 
            et vous proposer des solutions personnalisées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-[#b00000] to-red-700 text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-bold inline-flex items-center justify-center">
              <CheckCircle size={20} className="mr-3" />
              Demander une Consultation
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="border-2 border-[#b00000] text-[#b00000] px-10 py-4 rounded-xl hover:bg-[#b00000] hover:text-white transition-all duration-300 font-bold">
              Découvrir nos Formations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
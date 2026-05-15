import React from 'react';
import { Target, Eye, Award, Users, CheckCircle, ArrowRight, Sparkles, Zap, Star, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#b00000]/5 to-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/10 to-red-500/10 text-[#b00000] px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Sparkles size={16} className="mr-2" />
            Qui sommes-nous ?
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
            L'Innovation au Service de votre <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Réussite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Depuis plus de 15 ans, Kaizen Strategy révolutionne l'approche du conseil stratégique 
            en Afrique avec une expertise reconnue et des résultats exceptionnels.
          </p>
        </div>

        {/* Section Principale */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Contenu */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8">
              Votre Partenaire de Confiance pour la 
              <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent"> Transformation d'Excellence</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Cabinet de conseil stratégique de référence, nous combinons expertise internationale 
              et connaissance approfondie du marché africain pour offrir des solutions sur mesure 
              qui transforment réellement les entreprises.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#b00000] to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-semibold text-lg">15+ années d'expertise reconnue</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#b00000] to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-semibold text-lg">200+ entreprises transformées avec succès</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#b00000] to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Équipe multiculturelle de 25+ experts</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#b00000] to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Méthodologie Kaizen éprouvée et certifiée</span>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-[#b00000] to-red-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 font-bold text-lg flex items-center">
              <span>Découvrir Notre Histoire</span>
              <ArrowRight size={24} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-200">
              <img 
                src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg" 
                alt="Équipe de direction africaine en réunion stratégique"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Carte flottante */}
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#b00000] to-red-600 rounded-2xl flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-600 font-semibold">Taux de Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Valeurs */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {/* Mission */}
          <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#b00000]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b00000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-[#b00000] to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-[#b00000] transition-colors duration-300">
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Accompagner nos clients dans leur transformation digitale et stratégique 
                en proposant des solutions innovantes qui génèrent de la valeur durable 
                pour l'écosystème économique africain.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#b00000]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b00000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-[#b00000] to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-[#b00000] transition-colors duration-300">
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Devenir le partenaire stratégique de référence pour les entreprises 
                ambitieuses en Afrique, en combinant excellence opérationnelle, 
                innovation technologique et approche humaine.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#b00000]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b00000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-[#b00000] to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-[#b00000] transition-colors duration-300">
                Nos Valeurs
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Excellence, intégrité, innovation et amélioration continue (Kaizen) 
                sont au cœur de notre philosophie. Nous privilégions les relations 
                durables et la co-création de valeur.
              </p>
            </div>
          </div>
        </div>

        {/* Section Équipe */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#b00000]/20 to-red-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-8">
                Une Équipe d'Experts <span className="bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent">Passionnés</span>
              </h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Notre équipe multiculturelle réunit des consultants seniors avec une expertise 
                approfondie dans leurs domaines respectifs et une connaissance intime des enjeux 
                du développement économique africain.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                  <div className="text-gray-400 text-sm font-semibold">Consultants Experts</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
                  <div className="text-gray-400 text-sm font-semibold">Pays d'Intervention</div>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-[#b00000] to-red-600 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 font-bold text-lg flex items-center">
                <Users size={24} className="mr-3" />
                Rencontrer l'Équipe
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg" 
                  alt="Équipe diverse de consultants africains"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Overlay stats */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#b00000] to-red-600 rounded-xl flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Excellence</div>
                    <div className="text-xs text-gray-300">Expertise certifiée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
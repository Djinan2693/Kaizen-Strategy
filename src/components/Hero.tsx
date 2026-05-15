import React from 'react';
import { ArrowRight, Star, Zap, CheckCircle, TrendingUp, Brain, Shield } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
  setCurrentExpertise?: (expertise: string) => void;
}

const Hero = ({ setCurrentPage, setCurrentExpertise }: HeroProps) => {
  return (
    <>
      {/* Hero Section Moderne et Épuré */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden flex items-center pt-20">
        {/* Background avec image d'entreprise moderne */}
        <div className="absolute inset-0">
          <img 
            src="/homepage.jpg" 
            alt="Équipe Kaizen Strategy en stratégie d'entreprise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/70 to-transparent"></div>
        </div>

        {/* Effets visuels minimalistes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-white/10 to-red-300/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            {/* Titre Principal */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-white mb-2">
                  Transformez votre
                </span>
                <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                  Entreprise
                </span>
              </h1>
            </div>
            
            {/* Sous-titre */}
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Excellence stratégique, innovation technologique et accompagnement personnalisé 
              pour révéler le potentiel de votre organisation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="group bg-white text-red-600 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 font-semibold text-lg">
                <span className="flex items-center">
                  Commencer ma Transformation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                200+
              </div>
              <div className="text-white font-medium text-lg">Entreprises</div>
              <div className="text-red-200 text-sm">Transformées</div>
            </div>
            
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                15+
              </div>
              <div className="text-white font-medium text-lg">Années</div>
              <div className="text-red-200 text-sm">D'expertise</div>
            </div>
            
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                95%
              </div>
              <div className="text-white font-medium text-lg">Satisfaction</div>
              <div className="text-red-200 text-sm">Client</div>
            </div>
            
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                300%
              </div>
              <div className="text-white font-medium text-lg">ROI Moyen</div>
              <div className="text-red-200 text-sm">Garanti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Compacte */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
              Nos <span className="text-red-600">Expertises</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions sur mesure pour transformer et accélérer votre croissance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Études & Recherches */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Études & Recherches</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Analyses de marché et veille concurrentielle stratégique.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('expertise');
                  if (setCurrentExpertise) setCurrentExpertise('etudes-recherches');
                }}
                className="flex items-center text-red-600 font-medium text-sm hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-2 py-1 -mx-2 transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Risk Management */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Solution "Le Bouclier" pour une protection complète de votre entreprise.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('expertise');
                  if (setCurrentExpertise) setCurrentExpertise('risk-management');
                }}
                className="flex items-center text-red-600 font-medium text-sm hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-2 py-1 -mx-2 transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Intelligence Artificielle */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligence Artificielle</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Diagnostic, implémentation et formation pour l'IA en entreprise.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('expertise');
                  if (setCurrentExpertise) setCurrentExpertise('intelligence-artificielle');
                }}
                className="flex items-center text-red-600 font-medium text-sm hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-2 py-1 -mx-2 transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Corporate Finance */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Finance</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Optimisation financière et accompagnement M&A.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('expertise');
                  if (setCurrentExpertise) setCurrentExpertise('corporate-finance');
                }}
                className="flex items-center text-red-600 font-medium text-sm hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-2 py-1 -mx-2 transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignage Unique */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-red-500 fill-current mx-1" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 italic leading-relaxed">
              "KAIZEN STRATEGY a révolutionné notre approche RH. Leur expertise et leur compréhension du marché ivoirien en particulier et africain en général, ont été déterminantes pour notre transformation."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="/temoin-client.jpg" 
                alt="Client Kaizen Strategy" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">M. Sossou Jacques</p>
                <p className="text-gray-600">Chef de Département RH à NSIA VIE ASSURANCE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Compact */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        {/* Background avec image d'entreprise moderne */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Équipe d'entreprise moderne"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/85 to-red-700/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Prêt à transformer votre <span className="text-red-200">entreprise</span> ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Rejoignez plus de 200 entreprises, administrations et ONG qui nous font confiance pour leur transformation.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('appointment')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 font-bold text-lg"
            >
              Planifier un rendez-vous
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
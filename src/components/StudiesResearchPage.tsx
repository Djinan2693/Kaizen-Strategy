import { BarChart, TrendingUp, Users, Target, CheckCircle, ArrowRight, Search, FileText } from 'lucide-react';

const StudiesResearchPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/recherche.jpg" 
            alt="Études et Recherches - Analyses de marché"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
              <BarChart className="text-blue-400 w-5 h-5 mr-2" />
              <span className="text-blue-300 font-medium">Analyses de Marché</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Études & Recherches
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Prenez des décisions éclairées grâce à nos analyses approfondies et études de marché. 
              Des insights précis pour orienter votre stratégie.
            </p>
          </div>
        </div>
      </div>

      {/* Services d'Études */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos Services d'Études
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une gamme complète d'analyses pour éclairer vos décisions stratégiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <TrendingUp className="text-blue-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Études de Marché</h3>
              <p className="text-gray-400 mb-6">
                Analyse complète de votre secteur, concurrence, opportunités et menaces du marché.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Taille et évolution du marché
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Analyse concurrentielle
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Segments porteurs
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <Users className="text-green-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Comportement Consommateur</h3>
              <p className="text-gray-400 mb-6">
                Comprenez vos clients : motivations, freins, parcours d'achat et préférences.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Personas détaillés
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Parcours client
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Insights comportementaux
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <Target className="text-red-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Études de Faisabilité</h3>
              <p className="text-gray-400 mb-6">
                Évaluez la viabilité de vos projets avant investissement : risques, ROI, contraintes.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Analyse financière
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Évaluation des risques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Recommandations
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <BarChart className="text-purple-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Suivi et évaluation</h3>
              <p className="text-gray-400 mb-6">
                Mesure de performance, impact des actions et ajustements stratégiques continus.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Indicateurs de performance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Tableaux de bord
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Rapports d'évaluation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <Users className="text-orange-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Étude socio-économique</h3>
              <p className="text-gray-400 mb-6">
                Analyse des impacts sociaux et économiques de vos projets sur les communautés.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Impact socio-économique
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Analyse démographique
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Développement durable
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <Target className="text-cyan-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Étude organisationnelle</h3>
              <p className="text-gray-400 mb-6">
                Analyse des structures, processus et culture organisationnelle pour optimiser les performances.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Audit organisationnel
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Processus métiers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Culture d'entreprise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Méthodologie */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Notre <span className="text-blue-500">Méthodologie</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Une approche rigoureuse combinant méthodes quantitatives et qualitatives 
                pour des résultats fiables et exploitables.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Cadrage & Objectifs</h3>
                    <p className="text-gray-400">Définition précise des questions de recherche et périmètre d'étude</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Collecte de Données</h3>
                    <p className="text-gray-400">Sources primaires et secondaires, entretiens, sondages, observation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Analyse & Traitement</h3>
                    <p className="text-gray-400">Traitement statistique et analyse qualitative des données</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Recommandations</h3>
                    <p className="text-gray-400">Insights actionnables et plan d'action stratégique</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <Search className="text-blue-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Recherche Avancée</h3>
                <p className="text-gray-300 mb-6">
                  Nos experts utilisent les dernières techniques d'analyse pour vous fournir 
                  des insights précis et exploitables.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Analyse Big Data
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Machine Learning
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Modélisation prédictive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types d'Études */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Types d'Études Proposées
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des analyses sur mesure adaptées à vos besoins sectoriels et stratégiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Études Sectorielles</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <FileText className="text-blue-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Analyse de l'écosystème sectoriel
                </li>
                <li className="flex items-center">
                  <FileText className="text-blue-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Tendances et évolutions du marché
                </li>
                <li className="flex items-center">
                  <FileText className="text-blue-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Cartographie des acteurs clés
                </li>
                <li className="flex items-center">
                  <FileText className="text-blue-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Opportunités d'investissement
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Études Personnalisées</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <FileText className="text-green-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Due diligence commerciale
                </li>
                <li className="flex items-center">
                  <FileText className="text-green-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Évaluation de potentiel marché
                </li>
                <li className="flex items-center">
                  <FileText className="text-green-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Benchmark concurrentiel
                </li>
                <li className="flex items-center">
                  <FileText className="text-green-500 w-4 h-4 mr-3 flex-shrink-0" />
                  Positionnement stratégique
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'une Étude Spécifique ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour concevoir l'étude qui répondra 
              précisément à vos enjeux stratégiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center">
                Discuter de votre projet
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Voir nos études types
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesResearchPage;
import { DollarSign, TrendingUp, PieChart, Calculator, CheckCircle, ArrowRight, Briefcase, Target, BarChart } from 'lucide-react';

const CorporateFinancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
              <DollarSign className="text-green-400 w-5 h-5 mr-2" />
              <span className="text-green-300 font-medium">Optimisation Financière</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Corporate Finance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Maximisez la valeur de votre entreprise avec nos expertises en finance d'entreprise. 
              Stratégie financière, optimisation et croissance durable.
            </p>
          </div>
        </div>
      </div>

      {/* Services Finance */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos Expertises Financières
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions complètes pour optimiser votre performance financière et créer de la valeur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
              <TrendingUp className="text-green-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Planification Financière</h3>
              <p className="text-gray-400 mb-6">
                Élaboration de stratégies financières alignées sur vos objectifs de croissance.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Business plan & prévisions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Optimisation structure capital
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Gestion trésorerie
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
              <PieChart className="text-blue-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Levée de Fonds</h3>
              <p className="text-gray-400 mb-6">
                Accompagnement complet dans vos projets de financement et levées de capitaux.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Préparation due diligence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Valorisation entreprise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Négociation investisseurs
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
              <Calculator className="text-purple-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">M&A Advisory</h3>
              <p className="text-gray-400 mb-6">
                Conseil en fusions-acquisitions pour optimiser votre croissance externe.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Identification cibles
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Due diligence financière
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Structuration opération
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Performance & Analytics */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Performance <span className="text-green-500">Analytics</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Transformez vos données financières en insights actionnables pour piloter 
                efficacement votre performance et anticiper les tendances.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Tableaux de Bord Financiers</h3>
                    <p className="text-gray-400">KPIs personnalisés, reporting automatisé et alertes en temps réel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Analyse de Rentabilité</h3>
                    <p className="text-gray-400">ROI par projet, marge par segment, optimisation pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Modélisation Prédictive</h3>
                    <p className="text-gray-400">Forecasting avancé, stress tests et simulations de scénarios</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <DollarSign className="text-green-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Optimisation ROI</h3>
                <p className="text-gray-300 mb-6">
                  Nos modèles financiers avancés identifient les leviers de performance 
                  pour maximiser votre retour sur investissement.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Analyse de sensibilité
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Optimisation portefeuille
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Allocation ressources
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Domaines d'Intervention */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Domaines d'Intervention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une expertise transverse pour tous vos enjeux de finance d'entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <Briefcase className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Restructuration</h3>
              <p className="text-gray-400 text-sm">
                Redressement financier, renégociation dette, plans de sauvegarde
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <TrendingUp className="text-green-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Croissance</h3>
              <p className="text-gray-400 text-sm">
                Financement expansion, stratégie croissance, internationalisation
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <PieChart className="text-purple-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Valorisation</h3>
              <p className="text-gray-400 text-sm">
                Évaluation entreprise, creation de valeur, exit strategies
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <Calculator className="text-yellow-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Optimisation</h3>
              <p className="text-gray-400 text-sm">
                Réduction coûts, amélioration marges, efficacité opérationnelle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Processus */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie structurée pour maximiser la valeur de vos projets financiers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Diagnostic</h3>
              <p className="text-gray-400">
                Analyse approfondie de votre situation financière et identification des enjeux
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Stratégie</h3>
              <p className="text-gray-400">
                Élaboration d'un plan d'action personnalisé et de solutions adaptées
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Exécution</h3>
              <p className="text-gray-400">
                Mise en œuvre des recommandations avec accompagnement opérationnel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
              <p className="text-gray-400">
                Suivi des résultats et ajustements pour garantir l'atteinte des objectifs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimisez Votre Performance Financière
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez comment nos solutions de corporate finance peuvent accélérer 
              votre croissance et maximiser la valeur de votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center">
                Diagnostic Financier
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Nos Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateFinancePage;
import { Brain, Cpu, Zap, Target, CheckCircle, ArrowRight, Settings, BarChart, Users } from 'lucide-react';

const AIPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
              <Brain className="text-purple-400 w-5 h-5 mr-2" />
              <span className="text-purple-300 font-medium">Diagnostic & Implémentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Intelligence Artificielle
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformez votre entreprise avec l'IA. De l'audit de maturité à l'implémentation complète, 
              nous vous accompagnons dans votre révolution digitale.
            </p>
          </div>
        </div>
      </div>

      {/* Services IA */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos Services IA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche complète pour intégrer l'intelligence artificielle dans votre stratégie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <Settings className="text-purple-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Audit de Maturité IA</h3>
              <p className="text-gray-400 mb-6">
                Évaluation complète de votre niveau de préparation à l'intelligence artificielle.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Diagnostic des données
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Évaluation infrastructure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Analyse des compétences
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <Cpu className="text-blue-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Stratégie IA</h3>
              <p className="text-gray-400 mb-6">
                Élaboration d'une roadmap IA alignée sur vos objectifs business.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Identification use cases
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Priorisation projets
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Plan d'implémentation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <Zap className="text-yellow-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Implémentation</h3>
              <p className="text-gray-400 mb-6">
                Déploiement et intégration de solutions IA dans vos processus métier.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Développement modèles
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Intégration système
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  Formation équipes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases IA */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Applications <span className="text-purple-500">Concrètes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'IA au service de tous vos métiers pour améliorer performance et efficacité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center">
              <Users className="text-green-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Service Client</h3>
              <p className="text-gray-400 text-sm">
                Chatbots intelligents, analyse sentiment, routing automatique
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center">
              <BarChart className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Analytics</h3>
              <p className="text-gray-400 text-sm">
                Prédictions, détection anomalies, insights automatisés
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center">
              <Target className="text-red-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Marketing</h3>
              <p className="text-gray-400 text-sm">
                Personnalisation, recommandations, optimisation campagnes
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center">
              <Settings className="text-purple-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-3">Opérations</h3>
              <p className="text-gray-400 text-sm">
                Automatisation processus, maintenance prédictive, optimisation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Implémentation */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Processus d'<span className="text-purple-500">Implémentation</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Une méthodologie éprouvée pour garantir le succès de vos projets IA, 
                de la conception au déploiement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Discovery & Audit</h3>
                    <p className="text-gray-400">Analyse approfondie de vos besoins, données et infrastructure existante</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Stratégie & Design</h3>
                    <p className="text-gray-400">Définition de la roadmap IA et architecture des solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Développement & Test</h3>
                    <p className="text-gray-400">Création des modèles IA et validation sur environnements de test</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Déploiement & Suivi</h3>
                    <p className="text-gray-400">Mise en production, formation utilisateurs et monitoring performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <Brain className="text-purple-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">IA Responsable</h3>
                <p className="text-gray-300 mb-6">
                  Nous mettons l'éthique et la transparence au cœur de nos solutions IA 
                  pour garantir des déploiements responsables et durables.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Transparence des algorithmes
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Protection des données
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Bias detection & mitigation
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                    Conformité réglementaire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies & Partenaires
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous maîtrisons l'écosystème complet des technologies IA les plus avancées
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>TensorFlow • PyTorch</div>
                <div>Scikit-learn • XGBoost</div>
                <div>MLflow • Kubeflow</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud & Infra</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>AWS • Azure • GCP</div>
                <div>Docker • Kubernetes</div>
                <div>Apache Spark • Hadoop</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">NLP & Vision</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>OpenAI • Hugging Face</div>
                <div>spaCy • NLTK</div>
                <div>OpenCV • YOLO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt pour la Révolution IA ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez comment l'intelligence artificielle peut transformer votre entreprise. 
              Commencez par un audit gratuit de votre maturité IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center">
                Audit IA Gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Voir nos Cas d'Usage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
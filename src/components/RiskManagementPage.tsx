import { Shield, AlertTriangle, TrendingUp, Users } from 'lucide-react';

const RiskManagementPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/riskmanagement.jpg" 
            alt="Risk Management - Gestion des risques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <Shield className="text-red-400 w-5 h-5 mr-2" />
              <span className="text-red-300 font-medium">Solution "Le Bouclier"</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Risk Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protégez votre entreprise avec notre solution complète de gestion des risques. 
              Anticipez, analysez et maîtrisez tous les défis qui menacent votre activité.
            </p>
          </div>
        </div>
      </div>

      {/* Nos domaines d'intervention */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos domaines d'<span className="text-red-500">intervention</span> dans la gestion des risques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Domaine 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h3 className="text-xl font-bold text-white">Analyse et cartographie des risques</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Identification des risques stratégiques, opérationnels, financiers, juridiques et environnementaux</li>
                <li>• Cartographie des risques pour une gestion proactive et hiérarchisée</li>
              </ul>
            </div>

            {/* Domaine 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h3 className="text-xl font-bold text-white">Élaboration de stratégies de gestion des risques</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Mise en place de plans de mitigation et d'atténuation des risques</li>
                <li>• Accompagnement dans le développement de politiques et procédures adaptées à chaque organisation</li>
              </ul>
            </div>

            {/* Domaine 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h3 className="text-xl font-bold text-white">Formation et sensibilisation</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Programmes de formation sur la gestion des risques pour les cadres dirigeants et opérationnels</li>
                <li>• Sensibilisation aux nouvelles menaces émergentes (cybersécurité, instabilité géopolitique, etc.)</li>
              </ul>
            </div>

            {/* Domaine 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h3 className="text-xl font-bold text-white">Audit et conformité</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Réalisation d'audits pour garantir la conformité réglementaire</li>
                <li>• Analyse des systèmes internes pour identifier les failles potentielles et recommander des actions correctives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Le Bouclier - Solution Innovante */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos solutions innovantes : <span className="text-red-500">"Le Bouclier"</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              En réponse aux défis complexes auxquels nos clients sont confrontés, 
              Kaizen Strategy a développé une plateforme innovante de gestion des risques appelée "Le Bouclier"
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Qu'est-ce que LeBouclier ?
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-red-300 font-semibold">
                    UNE INITIATIVE DE GESTION DES RISQUES
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    LeBouclier est la toute première application ivoirienne à offrir une vision 360° 
                    pour évaluer et gérer les risques de l'entreprise. Cette application guide les 
                    managers à travers 6 familles de risques qu'ils peuvent rencontrer.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    L'application aide également à tirer parti des outils de gestion des risques 
                    et des services professionnels offerts aux entreprises. Avec LeBouclier, 
                    les managers sont en mesure de mettre en place un plan d'action pour 
                    minimiser les menaces et maximiser les occasions d'affaires.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield size={80} className="text-white" />
                </div>
                <p className="text-xl font-semibold text-white">Vision 360° des Risques</p>
                <p className="text-red-300 mt-2">6 familles de risques analysées</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pourquoi choisir Kaizen Strategy */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pourquoi choisir <span className="text-red-500">Kaizen Strategy</span> pour la gestion des risques ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expertise diversifiée</h3>
              <p className="text-gray-400">
                Nos experts allient compétences techniques et compréhension des contextes locaux et internationaux.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solutions adaptées</h3>
              <p className="text-gray-400">
                "Le Bouclier" est conçu sur mesure pour répondre aux besoins spécifiques de chaque client.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Accompagnement global</h3>
              <p className="text-gray-400">
                Nous offrons un suivi complet, depuis l'évaluation initiale jusqu'à la mise en œuvre des solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Prévention et anticipation</h3>
              <p className="text-gray-400">
                Grâce à nos outils et nos analyses, nous aidons nos clients à anticiper les menaces avant qu'elles ne deviennent des crises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Types de Risques */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Types de Risques Couverts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une protection complète contre tous les défis modernes de l'entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <AlertTriangle className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Risques Opérationnels</h3>
              <p className="text-gray-400">
                Processus, systèmes, erreurs humaines, cyber-sécurité
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <TrendingUp className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Risques Financiers</h3>
              <p className="text-gray-400">
                Liquidité, crédit, marché, change, taux d'intérêt
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <Users className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Risques Stratégiques</h3>
              <p className="text-gray-400">
                Concurrence, innovation, réputation, partenariats
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <Shield className="text-purple-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Risques Réglementaires</h3>
              <p className="text-gray-400">
                Conformité, RGPD, normes sectorielles, audits
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
              Notre Processus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie éprouvée en 4 étapes pour une protection optimale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Identification</h3>
              <p className="text-gray-400">
                Cartographie complète de tous vos risques potentiels
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Évaluation</h3>
              <p className="text-gray-400">
                Analyse de l'impact et de la probabilité de chaque risque
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Traitement</h3>
              <p className="text-gray-400">
                Mise en place de stratégies de mitigation adaptées
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Surveillance</h3>
              <p className="text-gray-400">
                Monitoring continu et ajustements en temps réel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-red-600/20 to-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Sécuriser Votre Entreprise ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez comment notre solution "Le Bouclier" peut protéger votre business 
              contre tous les risques modernes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Demander une Démo
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Télécharger la Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagementPage;
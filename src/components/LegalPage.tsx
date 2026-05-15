import React from 'react';
import { ArrowLeft, Shield, FileText, Cookie } from 'lucide-react';

interface LegalPageProps {
  setCurrentPage: (page: string) => void;
}

const LegalPage = ({ setCurrentPage }: LegalPageProps) => {
  const [activeTab, setActiveTab] = React.useState<'mentions' | 'confidentialite' | 'cookies'>('mentions');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-[#b00000] hover:text-red-700 font-semibold mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </button>

          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Informations <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Légales</span>
          </h1>
          <p className="text-xl text-gray-600">
            Mentions légales, politique de confidentialité et gestion des cookies
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => setActiveTab('mentions')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'mentions'
                ? 'bg-gradient-to-r from-[#b00000] to-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#b00000]'
            }`}
          >
            <FileText size={20} className="mr-2" />
            Mentions Légales
          </button>

          <button
            onClick={() => setActiveTab('confidentialite')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'confidentialite'
                ? 'bg-gradient-to-r from-[#b00000] to-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#b00000]'
            }`}
          >
            <Shield size={20} className="mr-2" />
            Politique de Confidentialité
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'cookies'
                ? 'bg-gradient-to-r from-[#b00000] to-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#b00000]'
            }`}
          >
            <Cookie size={20} className="mr-2" />
            Gestion des Cookies
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Mentions Légales */}
          {activeTab === 'mentions' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mentions Légales</h2>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informations sur l'éditeur</h3>
                <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
                  <p><strong>Nom de l'entreprise :</strong> Kaizen Strategy</p>
                  <p><strong>Siège social :</strong> Cocody, Riviera Attoban, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Email :</strong> contact@kaizenstrategy.org</p>
                  <p><strong>Téléphone :</strong> +225 05 66 62 04 77</p>
                  <p><strong>Directeur de la Publication :</strong> Dr GNUI Koutoua Samson</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hébergement</h3>
                <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
                  <p><strong>Fournisseur d'hébergement :</strong> Netlify</p>
                  <p><strong>Siège :</strong> États-Unis</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h3>
                <p className="text-gray-700 leading-relaxed">
                  L'ensemble des contenus du site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Kaizen Strategy ou de ses partenaires. 
                  Toute reproduction, représentation, modification ou utilisation est interdite sans autorisation préalable écrite.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kaizen Strategy s'efforce de fournir des informations exactes et à jour. Cependant, elle ne peut être tenue responsable des erreurs, 
                  omissions ou des dommages résultant de l'utilisation de ce site ou des informations qu'il contient.
                </p>
              </section>
            </div>
          )}

          {/* Politique de Confidentialité */}
          {activeTab === 'confidentialite' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Politique de Confidentialité</h2>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collecte de données</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kaizen Strategy collecte certaines informations vous concernant lorsque vous :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Remplissez un formulaire de contact</li>
                  <li>Demandez un devis ou une formation</li>
                  <li>Vous abonnez à notre plateforme e-learning</li>
                  <li>Consultez notre site web</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types de données collectées</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Informations d'identification (nom, prénom, email, téléphone)</li>
                  <li>Informations professionnelles (entreprise, fonction, secteur)</li>
                  <li>Données de navigation (adresse IP, type de navigateur)</li>
                  <li>Données de cookies (voir section cookies)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Utilisation des données</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vos données sont utilisées pour :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Répondre à vos demandes</li>
                  <li>Vous envoyer nos newsletters et communications marketing</li>
                  <li>Améliorer nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partage de données</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être partagées avec nos partenaires de service 
                  (hébergement, email marketing) uniquement aux fins de traitement de vos demandes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vos droits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conformément à la réglementation sur la protection des données, vous avez le droit de :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger ou supprimer vos données</li>
                  <li>Refuser certains traitements</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour exercer vos droits ou pour toute question concernant la confidentialité, 
                  contactez-nous à : <strong>gnuik.samson@kaizenstrategy.ci</strong>
                </p>
              </section>
            </div>
          )}

          {/* Gestion des Cookies */}
          {activeTab === 'cookies' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gestion des Cookies</h2>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile qui permet à notre site de vous reconnaître 
                  lors de vos futures visites et d'améliorer votre expérience utilisateur.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">Cookies essentiels</h4>
                    <p className="text-gray-700">Nécessaires au fonctionnement du site (authentification, sécurité)</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">Cookies de performance</h4>
                    <p className="text-gray-700">Nous aident à comprendre comment vous utilisez notre site</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <h4 className="font-bold text-gray-900 mb-2">Cookies de marketing</h4>
                    <p className="text-gray-700">Utilisés pour vous proposer du contenu personnalisé et des publicités pertinentes</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contrôle des cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez contrôler et/ou supprimer les cookies selon vos préférences. Pour plus d'informations, 
                  consultez les paramètres de votre navigateur :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Chrome, Firefox, Safari, Edge : consultez les paramètres de confidentialité</li>
                  <li>Vous pouvez refuser tous les cookies à tout moment</li>
                  <li>Certains services peuvent ne pas fonctionner correctement sans cookies essentiels</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cookies tiers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notre site peut utiliser des services tiers (Google Analytics, etc.) qui placent leurs propres cookies. 
                  Nous vous recommandons de consulter leurs politiques de confidentialité respectives.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mise à jour</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cette politique de gestion des cookies peut être mise à jour à tout moment. Les modifications entreront en vigueur 
                  dès leur publication sur cette page.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Dernière mise à jour : novembre 2025</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;

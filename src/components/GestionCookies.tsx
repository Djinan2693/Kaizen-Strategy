import React from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface GestionCookiesProps {
  setCurrentPage: (page: string) => void;
}

const GestionCookies = ({ setCurrentPage }: GestionCookiesProps) => {
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

          <div className="flex items-center gap-4 mb-4">
            <Cookie size={40} className="text-[#b00000]" />
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900">
              Gestion des <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Cookies</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Comprendre et contrôler l'utilisation des cookies
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile qui permet à notre site de vous reconnaître 
              lors de vos futures visites et d'améliorer votre expérience utilisateur. Les cookies ne contiennent généralement pas d'informations 
              personnelles identifiables, sauf si vous les avez explicitement fournies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types de cookies utilisés</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cookies essentiels</h3>
                <p className="text-gray-700">
                  Nécessaires au fonctionnement correct du site. Ils permettent l'authentification, la sécurité et les préférences de base. 
                  Ces cookies ne peuvent pas être désactivés sans affecter le fonctionnement du site.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cookies de performance</h3>
                <p className="text-gray-700">
                  Nous aident à comprendre comment vous utilisez notre site (pages visitées, temps passé, etc.). 
                  Ces informations nous permettent d'améliorer l'expérience utilisateur et les performances du site.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cookies de marketing</h3>
                <p className="text-gray-700">
                  Utilisés pour vous proposer du contenu personnalisé et des publicités pertinentes basées sur votre intérêt. 
                  Ils peuvent suivre votre activité sur plusieurs sites.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cookies tiers</h3>
                <p className="text-gray-700">
                  Placés par nos partenaires (Google Analytics, réseaux sociaux, etc.) pour analyser l'usage 
                  et améliorer la publicité. Vous pouvez contrôler ces cookies indépendamment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Services utilisant des cookies</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Google Analytics</strong> : Analyse de l'usage du site</li>
              <li><strong>Réseaux sociaux</strong> : Intégration et partage de contenu</li>
              <li><strong>Outils d'hébergement</strong> : Gestion de sessions et sécurité</li>
              <li><strong>Email marketing</strong> : Suivi des campagnes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrôle des cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous pouvez contrôler et/ou supprimer les cookies selon vos préférences. Voici comment procéder sur différents navigateurs :
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Google Chrome</h3>
                <p className="text-gray-700 text-sm">
                  Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données de site
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Mozilla Firefox</h3>
                <p className="text-gray-700 text-sm">
                  Menu → Paramètres → Vie privée et sécurité → Cookies et données de sites
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Safari</h3>
                <p className="text-gray-700 text-sm">
                  Préférences → Confidentialité → Gérer les données de site Web
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Microsoft Edge</h3>
                <p className="text-gray-700 text-sm">
                  Paramètres → Confidentialité et services → Effacer les données de navigation
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              <strong>Remarque importante :</strong> Désactiver les cookies essentiels peut affecter le fonctionnement du site. 
              Vous pouvez refuser les cookies de marketing et de performance sans impact sur les services de base.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Do Not Track (DNT)</h2>
            <p className="text-gray-700 leading-relaxed">
              Si votre navigateur envoie un signal "Do Not Track", nous respecterons cette préférence en limitant l'utilisation 
              de cookies de suivi. Cependant, les cookies essentiels resteront nécessaires au fonctionnement du site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Consentement</h2>
            <p className="text-gray-700 leading-relaxed">
              La première fois que vous visitez notre site, une banneau de consentement vous permet de choisir quels types de cookies 
              vous acceptez. Vous pouvez modifier vos préférences à tout moment via les paramètres du site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mise à jour</h2>
            <p className="text-gray-700 leading-relaxed">
              Cette politique de gestion des cookies peut être mise à jour à tout moment pour refléter les changements dans nos pratiques 
              ou la réglementation applicable. Les modifications entreront en vigueur dès leur publication sur cette page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions ?</h2>
            <div className="bg-gradient-to-r from-[#b00000]/10 to-red-100/10 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant nos pratiques en matière de cookies, 
                veuillez nous contacter à : <strong>contact@kaizenstrategy.org</strong>
              </p>
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Dernière mise à jour : novembre 2025</p>
        </div>
      </div>
    </div>
  );
};

export default GestionCookies;

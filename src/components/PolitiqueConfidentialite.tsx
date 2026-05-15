import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PolitiqueConfidentialiteProps {
  setCurrentPage: (page: string) => void;
}

const PolitiqueConfidentialite = ({ setCurrentPage }: PolitiqueConfidentialiteProps) => {
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
            <Shield size={40} className="text-[#b00000]" />
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900">
              Politique de <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Confidentialité</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Comment nous protégeons vos données personnelles
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Collecte de données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kaizen Strategy collecte certaines informations vous concernant lorsque vous :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Remplissez un formulaire de contact</li>
              <li>Demandez un devis ou une formation</li>
              <li>Vous abonnez à notre plateforme e-learning</li>
              <li>Consultez notre site web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types de données collectées</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Informations d'identification (nom, prénom, email, téléphone)</li>
              <li>Informations professionnelles (entreprise, fonction, secteur)</li>
              <li>Données de navigation (adresse IP, type de navigateur)</li>
              <li>Données de cookies (voir section cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Utilisation des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Répondre à vos demandes</li>
              <li>Vous envoyer nos newsletters et communications marketing</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partage de données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être partagées avec nos partenaires de service 
              (hébergement, email marketing) uniquement aux fins de traitement de vos demandes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre les accès non autorisés, 
              la modification, la divulgation ou la destruction. Cependant, aucune transmission par Internet n'est 100% sécurisée.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément à la réglementation sur la protection des données, vous avez le droit de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger ou supprimer vos données</li>
              <li>Refuser certains traitements</li>
              <li>Demander la portabilité de vos données</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Durée de conservation</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles sont conservées aussi longtemps que nécessaire pour accomplir les fins pour lesquelles elles ont été collectées. 
              Vous pouvez demander la suppression de vos données à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
            <div className="bg-gradient-to-r from-[#b00000]/10 to-red-100/10 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Pour exercer vos droits ou pour toute question concernant la confidentialité, 
                contactez-nous à : <strong>contact@kaizenstrategy.org</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modifications de cette politique</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur cette page.
            </p>
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

export default PolitiqueConfidentialite;

import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface MentionsLegalesProps {
  setCurrentPage: (page: string) => void;
}

const MentionsLegales = ({ setCurrentPage }: MentionsLegalesProps) => {
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
            <FileText size={40} className="text-[#b00000]" />
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900">
              Mentions <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Légales</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Informations légales concernant Kaizen Strategy
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Informations sur l'éditeur</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
              <p><strong>Nom de l'entreprise :</strong> Kaizen Strategy</p>
              <p><strong>Siège social :</strong> Cocody, Riviera Attoban, Abidjan, Côte d'Ivoire</p>
              <p><strong>Email :</strong> contact@kaizenstrategy.org</p>
              <p><strong>Téléphone :</strong> +225 05 66 62 04 77</p>
              <p><strong>Directeur de la Publication :</strong> Dr GNUI Koutoua Samson</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
              <p><strong>Fournisseur d'hébergement :</strong> Netlify</p>
              <p><strong>Siège :</strong> Côte d'Ivoire</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble des contenus du site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Kaizen Strategy ou de ses partenaires. 
              Toute reproduction, représentation, modification ou utilisation est interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              Kaizen Strategy s'efforce de fournir des informations exactes et à jour. Cependant, elle ne peut être tenue responsable des erreurs, 
              omissions ou des dommages résultant de l'utilisation de ce site ou des informations qu'il contient.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions d'utilisation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En accédant et en utilisant ce site, vous acceptez de respecter ces conditions d'utilisation. 
              Kaizen Strategy se réserve le droit de modifier ces conditions à tout moment sans préavis.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Vous vous engagez à utiliser ce site de manière légale et responsable</li>
              <li>Vous ne devez pas utiliser ce site pour des activités illégales ou contraires à l'éthique</li>
              <li>Vous acceptez de ne pas télécharger ou transmettre de virus ou de contenu malveillant</li>
              <li>Toute violation de ces conditions pourra entraîner une suppression de votre accès au site</li>
            </ul>
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

export default MentionsLegales;

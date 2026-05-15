import React, { useState } from 'react';
import { Calculator, FileText, Users, Clock, CheckCircle, Send } from 'lucide-react';

const DevisPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    poste: '',
    domaine: '',
    formation: '',
    formationCatalogue: '',
    duree: '',
    participants: '',
    date: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const domaines = [
    { id: 'etudes-recherches', label: 'Études & Recherches', formations: [
      'Études de marché et benchmarking concurrentiel',
      'Veille stratégique et analyses prospectives',
      'Recherche et développement de projets',
      'Analyses sectorielles approfondies',
      'Modélisation et scénarios prospectifs'
    ]},
    { id: 'risk-management', label: 'Risk Management', formations: [
      'Le Bouclier - Solution intégrée de gestion des risques',
      'Audit et cartographie des risques',
      'Gouvernance des risques et contrôle interne',
      'Plans de continuité d\'activité et gestion de crise',
      'Risk Management avancé'
    ]},
    { id: 'intelligence-artificielle', label: 'Intelligence Artificielle', formations: [
      'Introduction à l\'Intelligence Artificielle pour les Managers',
      'Utiliser ChatGPT, Midjourney et d\'autres IA génératives en entreprise',
      'RH Digital En Ligne : Recrutement, GPEC et Formation',
      'Piloter la performance avec l\'IA et les tableaux de bord intelligents',
      'Créer des chatbots et assistants virtuels pour son entreprise',
      'Éthique, Gouvernance et Responsabilité de l\'IA en entreprise'
    ]},
    { id: 'corporate-finance', label: 'Corporate Finance', formations: [
      'Finance pour Dirigeants',
      'Élaboration du Business Plan',
      'Comptabilité Analytique Avancée',
      'Gestion et Contrôle Budgétaire',
      'Audit et Révision des Comptes',
      'Consolidation des Comptes et Normes IFRS'
    ]}
  ];

  const durees = [
    '1 jour',
    '2 jours',
    '3 jours',
    '1 semaine',
    '2 semaines',
    'Sur mesure'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    console.log('Données du devis:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Demande de devis envoyée !
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Merci pour votre demande. Notre équipe vous contactera dans les 24h pour établir votre devis personnalisé.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Faire une nouvelle demande
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Devis formation professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Devis <span className="text-red-300">Gratuit</span>
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
              Obtenez un devis personnalisé pour vos formations professionnelles
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Calculator size={28} className="mr-3" />
                Demande de Devis Personnalisé
              </h2>
              <p className="text-red-100 mt-2">
                Remplissez ce formulaire pour recevoir votre devis sous 24h
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Informations personnelles */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users size={20} className="mr-2 text-red-600" />
                  Informations personnelles
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poste
                    </label>
                    <input
                      type="text"
                      name="poste"
                      value={formData.poste}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre fonction"
                    />
                  </div>
                </div>
              </div>

              {/* Informations formation */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText size={20} className="mr-2 text-red-600" />
                  Détails de la formation
                </h3>
                
                {/* Information sur nos pôles d'expertise */}
                <div className="mb-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Nos 4 Pôles d'Expertise</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-red-800">
                    <div>• <strong>Études & Recherches</strong> : Analyses stratégiques et veille concurrentielle</div>
                    <div>• <strong>Risk Management</strong> : Solution "Le Bouclier" et gestion des risques</div>
                    <div>• <strong>Intelligence Artificielle</strong> : IA appliquée à l'entreprise</div>
                    <div>• <strong>Corporate Finance</strong> : Optimisation financière et croissance</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domaine de formation *
                    </label>
                    <select
                      name="domaine"
                      value={formData.domaine}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un domaine</option>
                      {domaines.map(domaine => (
                        <option key={domaine.id} value={domaine.id}>
                          {domaine.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Formation spécifique
                    </label>
                    <select
                      name="formation"
                      value={formData.formation}
                      onChange={handleInputChange}
                      disabled={!formData.domaine}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
                    >
                      <option value="">Sélectionnez une formation</option>
                      {formData.domaine && domaines.find(d => d.id === formData.domaine)?.formations.map(formation => (
                        <option key={formation} value={formation}>
                          {formation}
                        </option>
                      ))}
                      <option value="catalogue-formation">Formation du catalogue Kaizen Strategy</option>
                    </select>
                  </div>
                  {formData.formation === 'catalogue-formation' && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Précisez la formation du catalogue souhaitée
                      </label>
                      <input
                        type="text"
                        name="formationCatalogue"
                        value={formData.formationCatalogue || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ex: Leadership Stratégique, Management d'équipe, Gestion RH, Comptabilité, etc."
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Consultez notre catalogue complet de formations sur notre site
                      </p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Durée souhaitée *
                    </label>
                    <select
                      name="duree"
                      value={formData.duree}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez la durée</option>
                      {durees.map(duree => (
                        <option key={duree} value={duree}>
                          {duree}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de participants *
                    </label>
                    <input
                      type="number"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nombre de participants"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget approximatif (FCFA)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Ex: 500,000 - 1,000,000"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message complémentaire
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Décrivez vos besoins spécifiques, objectifs, ou toute information utile..."
                ></textarea>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Envoyer ma demande de devis
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  Vous recevrez votre devis personnalisé sous 24h ouvrées
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir Kaizen Strategy ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Réponse Rapide</h3>
              <p className="text-gray-600">Devis personnalisé sous 24h</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600">Formateurs certifiés et expérimentés</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sur Mesure</h3>
              <p className="text-gray-600">Formations adaptées à vos besoins</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage;
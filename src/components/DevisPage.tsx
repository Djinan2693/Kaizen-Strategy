import React, { useState } from 'react';
import { Calculator, FileText, Users, Clock, CheckCircle, Send } from 'lucide-react';
import { PageTitle, Section, SectionTitle, NovaButton, Reveal } from './nova';

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

  const avantages = [
    { icon: Clock, title: 'Réponse Rapide', text: 'Devis personnalisé sous 24h' },
    { icon: Users, title: 'Expertise Reconnue', text: 'Formateurs certifiés et expérimentés' },
    { icon: CheckCircle, title: 'Sur Mesure', text: 'Formations adaptées à vos besoins' }
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
      <div className="min-h-screen bg-white">
        <PageTitle
          title="Demande de devis envoyée !"
          breadcrumbs={[{ label: 'Devis' }]}
          image="/nova/contact-page-title-bg.jpg"
        />

        <Section>
          <Reveal className="max-w-2xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'var(--nova-accent)' }}
            >
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-[32px] font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
              Merci pour votre demande
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Notre équipe vous contactera dans les 24h pour établir votre devis personnalisé.
            </p>
            <NovaButton onClick={() => setIsSubmitted(false)}>Faire une nouvelle demande</NovaButton>
          </Reveal>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Devis Gratuit"
        subtitle="Obtenez un devis personnalisé pour vos formations professionnelles."
        breadcrumbs={[{ label: 'Devis' }]}
        image="/nova/contact-page-title-bg.jpg"
      />

      {/* Formulaire */}
      <Section light>
        <div className="max-w-4xl mx-auto">
          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-8 py-6" style={{ backgroundColor: 'var(--nova-dark-bg)' }}>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Calculator size={28} className="mr-3" />
                  Demande de Devis Personnalisé
                </h2>
                <p className="text-white/80 mt-2">
                  Remplissez ce formulaire pour recevoir votre devis sous 24h
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Informations personnelles */}
                <div className="border-b border-gray-200 pb-8">
                  <h3
                    className="text-lg font-bold mb-5 flex items-center"
                    style={{ color: 'var(--nova-heading)' }}
                  >
                    <Users size={20} className="mr-2" style={{ color: 'var(--nova-accent)' }} />
                    Informations personnelles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="nova-label">Nom *</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Téléphone *</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
                        placeholder="+225 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Entreprise *</label>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Poste</label>
                      <input
                        type="text"
                        name="poste"
                        value={formData.poste}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="Votre fonction"
                      />
                    </div>
                  </div>
                </div>

                {/* Détails de la formation */}
                <div className="border-b border-gray-200 pb-8">
                  <h3
                    className="text-lg font-bold mb-5 flex items-center"
                    style={{ color: 'var(--nova-heading)' }}
                  >
                    <FileText size={20} className="mr-2" style={{ color: 'var(--nova-accent)' }} />
                    Détails de la formation
                  </h3>

                  <div
                    className="mb-6 p-5 rounded-lg border-l-4"
                    style={{ backgroundColor: 'var(--nova-light-bg)', borderColor: 'var(--nova-accent)' }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: 'var(--nova-heading)' }}>
                      Nos 4 Pôles d'Expertise
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm" style={{ color: 'var(--nova-default)' }}>
                      <div>• <strong>Études &amp; Recherches</strong> : Analyses stratégiques et veille concurrentielle</div>
                      <div>• <strong>Risk Management</strong> : Solution "Le Bouclier" et gestion des risques</div>
                      <div>• <strong>Intelligence Artificielle</strong> : IA appliquée à l'entreprise</div>
                      <div>• <strong>Corporate Finance</strong> : Optimisation financière et croissance</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="nova-label">Domaine de formation *</label>
                      <select
                        name="domaine"
                        value={formData.domaine}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
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
                      <label className="nova-label">Formation spécifique</label>
                      <select
                        name="formation"
                        value={formData.formation}
                        onChange={handleInputChange}
                        disabled={!formData.domaine}
                        className="nova-field disabled:bg-gray-100"
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
                        <label className="nova-label">Précisez la formation du catalogue souhaitée</label>
                        <input
                          type="text"
                          name="formationCatalogue"
                          value={formData.formationCatalogue || ''}
                          onChange={handleInputChange}
                          className="nova-field"
                          placeholder="Ex: Leadership Stratégique, Management d'équipe, Gestion RH, Comptabilité, etc."
                        />
                        <p
                          className="text-sm mt-1"
                          style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 45%)' }}
                        >
                          Consultez notre catalogue complet de formations sur notre site
                        </p>
                      </div>
                    )}
                    <div>
                      <label className="nova-label">Durée souhaitée *</label>
                      <select
                        name="duree"
                        value={formData.duree}
                        onChange={handleInputChange}
                        required
                        className="nova-field"
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
                      <label className="nova-label">Nombre de participants *</label>
                      <input
                        type="number"
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="nova-field"
                        placeholder="Nombre de participants"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Date souhaitée</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="nova-field"
                      />
                    </div>
                    <div>
                      <label className="nova-label">Budget approximatif (FCFA)</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="Ex: 500,000 - 1,000,000"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="nova-label">Message complémentaire</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="nova-field resize-y"
                    placeholder="Décrivez vos besoins spécifiques, objectifs, ou toute information utile..."
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <NovaButton type="submit">
                    <Send size={20} />
                    Envoyer ma demande de devis
                  </NovaButton>
                  <p
                    className="text-sm mt-3"
                    style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 45%)' }}
                  >
                    Vous recevrez votre devis personnalisé sous 24h ouvrées
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Avantages */}
      <Section>
        <SectionTitle
          title="Pourquoi choisir Kaizen Strategy ?"
          description="Un accompagnement réactif, expert et taillé pour votre organisation."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {avantages.map((avantage, index) => (
            <Reveal key={avantage.title} delay={100 * (index + 1)}>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--nova-light-bg)' }}
                >
                  <avantage.icon size={30} strokeWidth={1.5} style={{ color: 'var(--nova-accent)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  {avantage.title}
                </h3>
                <p style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  {avantage.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default DevisPage;

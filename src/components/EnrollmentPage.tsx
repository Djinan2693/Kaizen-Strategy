import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { PageTitle, Section, NovaButton, Reveal } from './nova';

interface EnrollmentPageProps {
  setCurrentPage: (page: string) => void;
  courseName?: string;
}

const EnrollmentPage = ({ setCurrentPage, courseName }: EnrollmentPageProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Envoyer les données à l'API backend
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseName: courseName,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log('Inscription envoyée avec succès');
        setIsSubmitted(true);
      } else {
        console.error('Erreur lors de l\'envoi:', response.statusText);
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion. Veuillez vérifier votre connexion internet.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <PageTitle
          title="Inscription confirmée !"
          breadcrumbs={[{ label: 'Formations' }, { label: 'Inscription' }]}
          image="/nova/services-page-title-bg.jpg"
          onHome={() => setCurrentPage('home')}
        />

        <Section>
          <Reveal className="max-w-2xl mx-auto text-center">
            <CheckCircle size={80} className="mx-auto mb-6" style={{ color: 'var(--nova-accent)' }} />
            <h2 className="text-2xl md:text-[32px] font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
              Merci pour votre inscription
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Notre équipe vous recontactera dans les 24 heures.
            </p>
            <NovaButton onClick={() => setCurrentPage('home')}>Retour à l'accueil</NovaButton>
          </Reveal>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="S'inscrire à la formation"
        subtitle={courseName}
        breadcrumbs={[
          { label: 'Formations', onClick: () => setCurrentPage('formations') },
          { label: 'Inscription' }
        ]}
        image="/nova/services-page-title-bg.jpg"
        onHome={() => setCurrentPage('home')}
      />

      <Section light>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setCurrentPage('formations')}
            className="flex items-center font-semibold mb-8 transition-colors duration-300 hover:opacity-75"
            style={{ color: 'var(--nova-accent)' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour aux formations
          </button>

          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              {courseName && (
                <p className="text-lg font-semibold mb-8" style={{ color: 'var(--nova-accent)' }}>
                  {courseName}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="nova-label">Nom complet *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="nova-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="nova-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="nova-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="nova-label">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="nova-field"
                    placeholder="+225 01 23 45 67 89"
                  />
                </div>

                <div>
                  <label className="nova-label">Entreprise</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="nova-field"
                    placeholder="Votre entreprise"
                  />
                </div>

                <div>
                  <label className="nova-label">Fonction/Rôle</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="nova-field"
                    placeholder="Directeur, Manager, etc."
                  />
                </div>

                <div>
                  <label className="nova-label">Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="nova-field resize-none"
                    placeholder="Avez-vous des questions ou des besoins spécifiques ?"
                  />
                </div>

                <div className="text-center pt-2">
                  <NovaButton type="submit" disabled={isLoading}>
                    <Send size={20} />
                    {isLoading ? 'Inscription en cours...' : 'Confirmer mon inscription'}
                  </NovaButton>
                </div>
              </form>

              <p
                className="text-sm mt-6 text-center"
                style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 40%)' }}
              >
                Les champs marqués * sont obligatoires. Nous vous recontacterons dans les 24 heures.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default EnrollmentPage;

import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, Calendar } from 'lucide-react';
import { PageTitle, Section, NovaButton, Reveal } from './nova';

interface AppointmentPageProps {
  setCurrentPage: (page: string) => void;
}

const AppointmentPage = ({ setCurrentPage }: AppointmentPageProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log('Rendez-vous envoyé avec succès');
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
          title="Rendez-vous confirmé !"
          breadcrumbs={[{ label: 'Rendez-vous' }]}
          image="/nova/contact-page-title-bg.jpg"
          onHome={() => setCurrentPage('home')}
        />

        <Section>
          <Reveal className="max-w-2xl mx-auto text-center">
            <CheckCircle size={80} className="mx-auto mb-6" style={{ color: 'var(--nova-accent)' }} />
            <h2 className="text-2xl md:text-[32px] font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
              Merci pour votre demande de rendez-vous
            </h2>
            <p
              className="text-lg mb-3"
              style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
            >
              Nous vous enverrons une confirmation par email à <strong>{formData.email}</strong>
            </p>
            <p className="mb-8" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
              Notre équipe vous recontactera très bientôt pour confirmer votre rendez-vous.
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
        title="Planifier un rendez-vous"
        subtitle="Contactez-nous pour discuter de vos besoins en transformation."
        breadcrumbs={[{ label: 'Rendez-vous' }]}
        image="/nova/contact-page-title-bg.jpg"
        onHome={() => setCurrentPage('home')}
      />

      <Section light>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center font-semibold mb-8 transition-colors duration-300 hover:opacity-75"
            style={{ color: 'var(--nova-accent)' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </button>

          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Calendar size={40} strokeWidth={1.5} style={{ color: 'var(--nova-accent)' }} />
                <h2 className="text-2xl font-bold" style={{ color: 'var(--nova-heading)' }}>
                  Votre demande de rendez-vous
                </h2>
              </div>

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
                    placeholder="Jean Dupont"
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
                    placeholder="jean@example.com"
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
                  <label className="nova-label">Sujet du rendez-vous *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="nova-field"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="consultation">Consultation générale</option>
                    <option value="transformation">Projet de transformation</option>
                    <option value="formation">Programmes de formation</option>
                    <option value="etude">Étude et recherche</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="nova-label">Date préférée *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="nova-field"
                    />
                  </div>

                  <div>
                    <label className="nova-label">Heure préférée *</label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="nova-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="nova-label">Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="nova-field resize-none"
                    placeholder="Décrivez brièvement vos besoins..."
                  />
                </div>

                <div className="text-center pt-2">
                  <NovaButton type="submit" disabled={isLoading}>
                    <Send size={20} />
                    {isLoading ? 'Envoi en cours...' : 'Planifier mon rendez-vous'}
                  </NovaButton>
                </div>
              </form>

              <p
                className="text-sm mt-6 text-center"
                style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 45%)' }}
              >
                Les champs marqués * sont obligatoires. Nous vous recontacterons au plus tôt.
              </p>

              <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  Vous préférez nous appeler ?
                </h3>
                <p style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}>
                  📞 +225 01 23 45 67 89
                </p>
                <p style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}>
                  ✉️ contact@kaizenstrategy.org
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default AppointmentPage;

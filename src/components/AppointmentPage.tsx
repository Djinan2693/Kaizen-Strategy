import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, Calendar } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle size={80} className="text-[#b00000] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Rendez-vous confirmé !</h1>
            <p className="text-xl text-gray-600 mb-4">
              Merci pour votre demande de rendez-vous.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nous vous enverrons une confirmation par email à <strong>{formData.email}</strong>
            </p>
            <p className="text-gray-600 mb-8">
              Notre équipe vous recontactera très bientôt pour confirmer votre rendez-vous.
            </p>
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-[#b00000] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-[#b00000] hover:text-red-700 font-semibold mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour à l'accueil
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={40} className="text-[#b00000]" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Planifier un rendez-vous
              </h1>
              <p className="text-gray-600 mt-2">
                Contactez-nous pour discuter de vos besoins en transformation
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom complet */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
                placeholder="Jean Dupont"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
                placeholder="jean@example.com"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
                placeholder="+225 01 23 45 67 89"
              />
            </div>

            {/* Entreprise */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Entreprise
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
                placeholder="Votre entreprise"
              />
            </div>

            {/* Sujet du rendez-vous */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Sujet du rendez-vous *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="consultation">Consultation générale</option>
                <option value="transformation">Projet de transformation</option>
                <option value="formation">Programmes de formation</option>
                <option value="etude">Étude et recherche</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Date préférée */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Date préférée *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
              />
            </div>

            {/* Heure préférée */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Heure préférée *
              </label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000] resize-none"
                placeholder="Décrivez brièvement vos besoins..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#b00000] text-white py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              {isLoading ? 'Envoi en cours...' : 'Planifier mon rendez-vous'}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Les champs marqués * sont obligatoires. Nous vous recontacterons au plus tôt.
          </p>

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Vous préférez nous appeler ?</h3>
            <p className="text-gray-600">📞 +225 01 23 45 67 89</p>
            <p className="text-gray-600">✉️ contact@kaizenstrategy.org</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;

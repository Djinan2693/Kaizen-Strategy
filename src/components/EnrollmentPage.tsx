import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle size={80} className="text-[#b00000] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Inscription confirmée !</h1>
            <p className="text-xl text-gray-600 mb-8">
              Merci pour votre inscription. Notre équipe vous recontactera dans les 24 heures.
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
          onClick={() => setCurrentPage('formations')}
          className="flex items-center text-[#b00000] hover:text-red-700 font-semibold mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour aux formations
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            S'inscrire à la formation
          </h1>
          {courseName && (
            <p className="text-lg text-[#b00000] font-semibold mb-8">
              {courseName}
            </p>
          )}

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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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

            {/* Position */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Fonction/Rôle
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00000]"
                placeholder="Directeur, Manager, etc."
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
                placeholder="Avez-vous des questions ou des besoins spécifiques ?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#b00000] text-white py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              {isLoading ? 'Inscription en cours...' : 'Confirmer mon inscription'}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Les champs marqués * sont obligatoires. Nous vous recontacterons dans les 24 heures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;

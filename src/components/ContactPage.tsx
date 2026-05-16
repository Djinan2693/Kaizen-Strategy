import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const sujets = [
    'Demande d\'information générale',
    'Conseil stratégique',
    'Formation professionnelle',
    'Risk Management - Le Bouclier',
    'Intelligence Artificielle',
    'Corporate Finance',
    'Études & Recherches',
    'Kaizen Academia',
    'Formule Privilège',
    'Partenariat',
    'Autre'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Contactez <span className="text-[#b00000]">Nos Experts</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Prêt à transformer votre entreprise ? Nos consultants sont à votre disposition 
              pour analyser vos besoins et vous proposer des solutions personnalisées.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulaire de Contact */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un Message
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="text-green-600 mr-3" size={20} />
                  <span className="text-green-800">Votre message a été envoyé avec succès !</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      required
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="votre.email@entreprise.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {sujets.map((sujet, index) => (
                      <option key={index} value={sujet}>{sujet}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b00000] text-white py-4 px-8 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-lg flex items-center justify-center group"
                >
                  <Send size={20} className="mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Informations de Contact */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nos Coordonnées
                </h2>
                <p className="text-lg text-gray-600">
                  Retrouvez-nous à notre siège social ou contactez-nous directement.
                </p>
              </div>

              {/* Coordonnées */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#b00000] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Cocody, Riviera Attoban<br />
                      Cité Émeraude Abri 2000, Villa 142<br />
                      Abidjan, Côte d'Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#b00000] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      +225 05 66 62 04 77
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#b00000] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      contact@kaizenstrategy.org<br />
                      koutouan.samson@kaizenstrategy.org
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="text-[#b00000] mr-3" size={24} />
                  <h3 className="font-bold text-gray-900">Horaires d'Ouverture</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium text-red-600">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Localisation</h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1234567890123!2d-4.0123456789!3d5.3456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCocody%20Riviera%20Palmeraie%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Kaizen Strategy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir <span className="text-[#b00000]">Kaizen Strategy</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre engagement envers l'excellence et l'innovation fait de nous 
              le partenaire idéal pour votre transformation d'entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Reconnue</h3>
              <p className="text-gray-600 leading-relaxed">
                Plus de 15 ans d'expérience et une équipe d'experts reconnus 
                dans leurs domaines respectifs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Approche Personnalisée</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque projet est unique. Nous adaptons nos solutions 
                à vos besoins spécifiques et à votre contexte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#b00000] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Résultats Garantis</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre méthodologie éprouvée et notre suivi rigoureux 
                garantissent l'atteinte de vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
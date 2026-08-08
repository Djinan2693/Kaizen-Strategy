import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { PageTitle, Section, SectionTitle, InfoItem, NovaButton, Reveal } from './nova';

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

  const atouts = [
    {
      icon: Users,
      title: "Expertise Reconnue",
      text: "Plus de 15 ans d'expérience et une équipe d'experts reconnus dans leurs domaines respectifs."
    },
    {
      icon: Award,
      title: "Approche Personnalisée",
      text: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques et à votre contexte."
    },
    {
      icon: CheckCircle,
      title: "Résultats Garantis",
      text: "Notre méthodologie éprouvée et notre suivi rigoureux garantissent l'atteinte de vos objectifs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Contact"
        subtitle="Prêt à transformer votre entreprise ? Nos consultants sont à votre disposition pour analyser vos besoins et vous proposer des solutions personnalisées."
        breadcrumbs={[{ label: 'Contact' }]}
        image="/nova/contact-page-title-bg.jpg"
      />

      {/* Coordonnées + formulaire */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Coordonnées */}
          <div className="lg:col-span-2 space-y-6">
            <InfoItem icon={MapPin} title="Adresse" delay={100}>
              Cocody, Riviera Attoban
              <br />
              Cité Émeraude Abri 2000, Villa 142
              <br />
              Abidjan, Côte d'Ivoire
            </InfoItem>

            <InfoItem icon={Phone} title="Téléphone" delay={200}>
              +225 05 66 62 04 77
            </InfoItem>

            <InfoItem icon={Mail} title="Email" delay={300}>
              contact@kaizenstrategy.org
              <br />
              koutouan.samson@kaizenstrategy.org
            </InfoItem>

            <InfoItem icon={Clock} title="Horaires d'Ouverture" delay={400}>
              <div className="space-y-1">
                <div className="flex justify-between gap-6">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Samedi</span>
                  <span className="font-medium">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Dimanche</span>
                  <span className="font-medium" style={{ color: 'var(--nova-accent)' }}>Fermé</span>
                </div>
              </div>
            </InfoItem>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            <Reveal delay={200}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--nova-heading)' }}>
                  Envoyez-nous un Message
                </h2>
                <p className="mb-8" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-lg flex items-center" style={{ backgroundColor: '#059652', color: '#ffffff' }}>
                    <CheckCircle className="mr-3" size={20} />
                    <span>Votre message a été envoyé avec succès !</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="nova-label">Nom complet *</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="entreprise" className="nova-label">Entreprise *</label>
                      <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        required
                        value={formData.entreprise}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="nova-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="votre.email@entreprise.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="nova-label">Téléphone</label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="nova-field"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="nova-label">Sujet *</label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      value={formData.sujet}
                      onChange={handleInputChange}
                      className="nova-field"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {sujets.map((sujet, index) => (
                        <option key={index} value={sujet}>{sujet}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="nova-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="nova-field resize-y"
                      placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                    />
                  </div>

                  <div className="text-center pt-2">
                    <NovaButton type="submit">
                      <Send size={20} />
                      Envoyer le Message
                    </NovaButton>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Localisation */}
      <Section light>
        <SectionTitle title="Localisation" description="Retrouvez-nous à notre siège social, à Abidjan." />

        <Reveal delay={100}>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
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
        </Reveal>
      </Section>

      {/* Pourquoi nous choisir */}
      <Section>
        <SectionTitle
          title="Pourquoi Choisir Kaizen Strategy ?"
          description="Notre engagement envers l'excellence et l'innovation fait de nous le partenaire idéal pour votre transformation d'entreprise."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {atouts.map((atout, index) => (
            <Reveal key={atout.title} delay={100 * (index + 1)}>
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <atout.icon className="text-white" size={38} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  {atout.title}
                </h3>
                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                >
                  {atout.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;

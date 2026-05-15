import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle, Award, TrendingUp, Users, Target } from 'lucide-react';

const clientLogos = [
  { name: "Orange Côte d'Ivoire", logo: "OCI", sector: "Télécoms", color: "from-orange-500 to-orange-600" },
  { name: "Ecobank Group", logo: "ECO", sector: "Banque", color: "from-blue-500 to-blue-600" },
  { name: "SIFCA Group", logo: "SIF", sector: "Agro-industrie", color: "from-green-500 to-green-600" },
  { name: "MTN Côte d'Ivoire", logo: "MTN", sector: "Télécoms", color: "from-yellow-500 to-yellow-600" },
  { name: "Société Générale CI", logo: "SG", sector: "Banque", color: "from-red-500 to-red-600" },
  { name: "NSIA Banque", logo: "NSI", sector: "Banque", color: "from-purple-500 to-purple-600" },
  { name: "Bolloré Transport", logo: "BOL", sector: "Logistique", color: "from-indigo-500 to-indigo-600" },
  { name: "CFAO Group", logo: "CFA", sector: "Distribution", color: "from-pink-500 to-pink-600" },
  { name: "Nestlé Côte d'Ivoire", logo: "NES", sector: "Agroalimentaire", color: "from-teal-500 to-teal-600" },
  { name: "Total Energies CI", logo: "TOT", sector: "Énergie", color: "from-cyan-500 to-cyan-600" },
  { name: "Air Côte d'Ivoire", logo: "ACI", sector: "Transport", color: "from-emerald-500 to-emerald-600" },
  { name: "CNPS Côte d'Ivoire", logo: "CNP", sector: "Assurance", color: "from-violet-500 to-violet-600" }
];

const testimonials = [
  {
    quote: "Kaizen Strategy a transformé notre approche digitale avec une compréhension profonde de nos enjeux locaux. Leur expertise et leur accompagnement personnalisé ont été déterminants pour notre succès sur le marché ivoirien.",
    author: "Aminata KONE",
    position: "Directrice Générale",
    company: "Orange Digital Center",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
    rating: 5,
    impact: "+35% de croissance digitale"
  },
  {
    quote: "L'approche Kaizen de l'amélioration continue a révolutionné nos processus bancaires. La solution 'Le Bouclier' nous a permis de réduire nos risques opérationnels de 45%. Des résultats concrets et mesurables dès les premiers mois.",
    author: "Kouadio ASSI",
    position: "Directeur des Risques",
    company: "Ecobank Côte d'Ivoire",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    rating: 5,
    impact: "-45% de risques opérationnels"
  },
  {
    quote: "Grâce à Kaizen Strategy, nous avons optimisé notre gouvernance des risques et renforcé notre résilience organisationnelle. Leur connaissance du secteur agro-industriel africain est remarquable.",
    author: "Fatou TRAORE",
    position: "Directrice Financière",
    company: "SIFCA Group",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    rating: 5,
    impact: "+50% d'efficacité opérationnelle"
  }
];

const References = () => {
  return (
    <section id="references" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#b00000]/5 to-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/10 to-red-500/10 text-[#b00000] px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Award size={16} className="mr-2" />
            Nos Références d'Excellence
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
            Ils nous font <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Plus de 200 entreprises leaders en Côte d'Ivoire et en Afrique de l'Ouest 
            nous font confiance pour les accompagner dans leur transformation et leur croissance.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-black text-gray-900 text-center mb-16">
            Nos Partenaires de Confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#b00000]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#b00000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${client.color} rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-white font-black text-lg">{client.logo}</span>
                  </div>
                  <span className="text-sm text-gray-900 text-center font-bold mb-2 group-hover:text-[#b00000] transition-colors duration-300">
                    {client.name}
                  </span>
                  <span className="text-xs text-gray-500 text-center font-medium">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Témoignages de nos <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">Clients</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé des entreprises leaders 
              avec des résultats concrets et mesurables.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#b00000]/20 relative overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b00000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={48} className="text-[#b00000]" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/10 to-red-500/10 text-[#b00000] px-4 py-2 rounded-full text-sm font-bold mb-6">
                    <TrendingUp size={14} className="mr-2" />
                    {testimonial.impact}
                  </div>

                  <blockquote className="text-gray-600 mb-8 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 group-hover:text-[#b00000] transition-colors duration-300 text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">{testimonial.position}</p>
                      <p className="text-sm text-[#b00000] font-bold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#b00000]/20 to-red-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/20 to-red-500/20 backdrop-blur-sm border border-[#b00000]/30 text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Target size={16} className="mr-2" />
              Résultats Exceptionnels
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-6">
              Des Transformations qui Parlent d'Elles-Mêmes
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Notre expertise se mesure à travers les succès de nos clients 
              et l'impact concret de nos interventions.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-[#b00000] to-red-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <CheckCircle size={40} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#b00000] to-red-500 bg-clip-text text-transparent mb-4">200+</div>
              <div className="text-white font-bold text-lg mb-2">Entreprises Accompagnées</div>
              <div className="text-gray-400 text-sm">Transformations réussies</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Star size={40} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">95%</div>
              <div className="text-white font-bold text-lg mb-2">Taux de Satisfaction</div>
              <div className="text-gray-400 text-sm">Clients recommandent</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Award size={40} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">15+</div>
              <div className="text-white font-bold text-lg mb-2">Années d'Excellence</div>
              <div className="text-gray-400 text-sm">Expertise reconnue</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Users size={40} className="text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">12</div>
              <div className="text-white font-bold text-lg mb-2">Pays d'Intervention</div>
              <div className="text-gray-400 text-sm">Présence africaine</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-6">
            Rejoignez nos Clients d'Exception
          </h3>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-lg">
            Découvrez comment nous pouvons transformer votre entreprise 
            et vous accompagner vers l'excellence opérationnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-[#b00000] to-red-700 text-white px-12 py-5 rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 font-black text-lg inline-flex items-center justify-center">
              <CheckCircle size={24} className="mr-3" />
              Demander une Consultation
              <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="border-2 border-[#b00000] text-[#b00000] px-12 py-5 rounded-2xl hover:bg-[#b00000] hover:text-white transition-all duration-300 font-bold text-lg">
              Voir nos Études de Cas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
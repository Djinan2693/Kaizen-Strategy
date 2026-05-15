import React, { useState } from 'react';
import { Search, Calendar, Users, Clock, Star, ArrowRight, CheckCircle, Award, Target, Zap } from 'lucide-react';

const trainingPrograms = [
  {
    title: "Leadership Stratégique",
    category: "Management",
    duration: "3 jours",
    participants: "12 max",
    date: "Février 2025",
    price: "450 000 CFA",
    description: "Développez votre vision stratégique et vos compétences de leadership pour transformer votre organisation dans le contexte africain.",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
    featured: true,
    rating: 4.9
  },
  {
    title: "Digital Transformation",
    category: "Digital",
    duration: "5 jours",
    participants: "15 max",
    date: "Mars 2025",
    price: "650 000 CFA",
    description: "Maîtrisez les enjeux de la transformation digitale et pilotez efficacement vos projets d'innovation technologique.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    featured: false,
    rating: 4.8
  },
  {
    title: "Risk Management Avancé",
    category: "Risques",
    duration: "4 jours",
    participants: "10 max",
    date: "Avril 2025",
    price: "550 000 CFA",
    description: "Expertise approfondie en gestion des risques avec notre solution 'Le Bouclier', de l'identification à la mise en place de plans d'action.",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    featured: true,
    rating: 5.0
  },
  {
    title: "IA & Business Strategy",
    category: "IA",
    duration: "2 jours",
    participants: "20 max",
    date: "Mai 2025",
    price: "350 000 CFA",
    description: "Intégrez l'intelligence artificielle dans votre stratégie d'entreprise pour créer un avantage concurrentiel durable.",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    featured: false,
    rating: 4.7
  },
  {
    title: "Finance pour Dirigeants",
    category: "Finance",
    duration: "3 jours",
    participants: "12 max",
    date: "Juin 2025",
    price: "480 000 CFA",
    description: "Optimisez la performance financière de votre entreprise grâce aux outils de corporate finance adaptés au marché africain.",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    featured: false,
    rating: 4.6
  },
  {
    title: "Innovation & Agilité",
    category: "Innovation",
    duration: "2 jours",
    participants: "18 max",
    date: "Juillet 2025",
    price: "320 000 CFA",
    description: "Cultivez l'innovation et l'agilité organisationnelle pour rester compétitif dans un monde en mutation constante.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    featured: true,
    rating: 4.8
  }
];

const Training = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Management', 'Digital', 'Risques', 'IA', 'Finance', 'Innovation'];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPrograms = filteredPrograms.filter(program => program.featured);
  const regularPrograms = filteredPrograms.filter(program => !program.featured);

  return (
    <section id="formations" className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#b00000]/5 to-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#b00000]/10 to-red-500/10 text-[#b00000] px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Award size={16} className="mr-2" />
            Formations d'Excellence
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
            Catalogue des Formations <span className="bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">2025</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Développez les compétences de vos équipes avec nos formations 
            expertes adaptées aux enjeux actuels et futurs de l'entreprise africaine.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#b00000] to-red-700 text-white shadow-lg shadow-red-500/25'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Programs */}
        {featuredPrograms.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <Star className="text-[#b00000] mr-4" size={32} />
              <h3 className="text-3xl font-black text-gray-900">Formations Vedettes</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 border-[#b00000]/10 hover:border-[#b00000]/30 relative"
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-[#b00000] to-red-700 text-white px-4 py-2 rounded-full text-xs font-black flex items-center">
                      <Star size={14} className="mr-1" />
                      VEDETTE
                    </div>
                  </div>
                  
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Rating overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-xl p-3">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-bold">{program.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-[#b00000] to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {program.category}
                      </span>
                      <span className="text-sm text-gray-500 font-semibold">{program.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#b00000] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {program.participants}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-black bg-gradient-to-r from-[#b00000] to-red-600 bg-clip-text text-transparent">
                        {program.price}
                      </div>
                      <button className="group bg-gradient-to-r from-[#b00000] to-red-700 text-white px-8 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-bold flex items-center">
                        S'inscrire
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Programs */}
        {regularPrograms.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl font-black text-gray-900 mb-12">
              Toutes nos Formations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPrograms.map((program, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-[#b00000]/20"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Rating overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-xl p-3">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-bold">{program.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold group-hover:bg-[#b00000] group-hover:text-white transition-colors duration-300">
                        {program.category}
                      </span>
                      <span className="text-sm text-gray-500 font-semibold">{program.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#b00000] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {program.participants}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-black text-[#b00000]">{program.price}</div>
                      <button className="border-2 border-[#b00000] text-[#b00000] px-6 py-3 rounded-2xl hover:bg-[#b00000] hover:text-white transition-all duration-300 font-bold">
                        S'inscrire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <Target size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-xl">Aucune formation trouvée pour votre recherche.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Training;
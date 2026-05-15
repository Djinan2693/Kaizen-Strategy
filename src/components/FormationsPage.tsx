import { useState, useMemo } from 'react';
import { Search, Clock, MapPin, CheckCircle, Users, Award, Heart, Filter, X, ChevronDown, BookOpen, Zap, ArrowRight, Compass, Briefcase, TrendingUp, Smile, Code, Target, PieChart, Brain, Lightbulb, Globe, Settings, Shield, Handshake, Laptop } from 'lucide-react';
import { formations } from '../data/formations';
import FormationDetailPage from './FormationDetailPage';
import PageHero from './PageHero';

// Configuration visuelle unique pour chaque catégorie
const getFormationVisualsConfig = (category: string) => {
  const configs: Record<string, any> = {
    'Management': {
      gradient: 'from-slate-600 to-slate-800',
      accentColor: 'text-slate-300',
      icons: [Compass, Briefcase, TrendingUp],
      patterns: 'diagonal'
    },
    'Digital': {
      gradient: 'from-blue-600 to-blue-800',
      accentColor: 'text-blue-300',
      icons: [Code, Zap, Laptop],
      patterns: 'dots'
    },
    'Développement Personnel': {
      gradient: 'from-purple-600 to-purple-800',
      accentColor: 'text-purple-300',
      icons: [Target, TrendingUp, Smile],
      patterns: 'circles'
    },
    'Finance': {
      gradient: 'from-emerald-600 to-emerald-800',
      accentColor: 'text-emerald-300',
      icons: [PieChart, TrendingUp, Briefcase],
      patterns: 'grid'
    },
    'IA': {
      gradient: 'from-cyan-600 to-cyan-800',
      accentColor: 'text-cyan-300',
      icons: [Brain, Zap, Code],
      patterns: 'hexagon'
    },
    'Innovation': {
      gradient: 'from-orange-600 to-orange-800',
      accentColor: 'text-orange-300',
      icons: [Lightbulb, Zap, Brain],
      patterns: 'sparkles'
    },
    'Langues': {
      gradient: 'from-pink-600 to-pink-800',
      accentColor: 'text-pink-300',
      icons: [Globe, Users, BookOpen],
      patterns: 'waves'
    },
    'Outils': {
      gradient: 'from-indigo-600 to-indigo-800',
      accentColor: 'text-indigo-300',
      icons: [Settings, Code, Zap],
      patterns: 'dots'
    },
    'Risques': {
      gradient: 'from-red-700 to-red-900',
      accentColor: 'text-red-300',
      icons: [Shield, CheckCircle, Award],
      patterns: 'grid'
    },
    'Ventes': {
      gradient: 'from-amber-600 to-amber-800',
      accentColor: 'text-amber-300',
      icons: [Handshake, TrendingUp, Award],
      patterns: 'upward'
    }
  };

  return configs[category] || configs['Management'];
};

// Composant pour afficher le background visuel unique
const FormationImagePlaceholder = ({ category, id }: { category: string; id: string }) => {
  const config = getFormationVisualsConfig(category);
  const IconComponents = config.icons;
  
  // Hash simple pour varier les icônes et positions
  const hashId = id.charCodeAt(0) + id.charCodeAt(id.length - 1);
  const iconVariation = hashId % 3;
  const Icon1 = IconComponents[iconVariation];
  const Icon2 = IconComponents[(iconVariation + 1) % 3];
  const Icon3 = IconComponents[(iconVariation + 2) % 3];

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${config.gradient} overflow-hidden flex items-center justify-center`}>
      {/* Overlay subtil premium */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]"></div>

      {/* Pattern de background */}
      <div className="absolute inset-0 opacity-20">
        {config.patterns === 'diagonal' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)"/>
          </svg>
        )}
        {config.patterns === 'dots' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="2" fill="white" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        )}
        {config.patterns === 'grid' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        )}
        {config.patterns === 'circles' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="15" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)"/>
          </svg>
        )}
      </div>

      {/* Icons elements positionnés */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="absolute top-6 left-6">
          <Icon1 size={40} className={config.accentColor} strokeWidth={1.5}/>
        </div>
        <div className="absolute bottom-8 right-8">
          <Icon2 size={48} className={config.accentColor} strokeWidth={1.5}/>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <Icon3 size={36} className={config.accentColor} strokeWidth={1.5}/>
        </div>
      </div>

      {/* Glow effect subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </div>
  );
};

interface FormationsPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function FormationsPage({ setCurrentPage }: FormationsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedFormation, setSelectedFormation] = useState<any>(null);
  const [sortBy, setSortBy] = useState('pertinence');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const categories = ['Tous', ...Array.from(new Set(formations.map(f => f.category))).sort()];
  
  const filteredFormations = useMemo(() => {
    return formations.filter(formation => {
      const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || formation.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  if (selectedFormation) {
    return (
      <FormationDetailPage
        formation={selectedFormation}
        setCurrentFormation={() => setSelectedFormation(null)}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <PageHero
        badge="Catalogue de formations"
        title="Nos Formations"
        subtitle="Des formations pratiques et certifiantes pour développer vos compétences et accélérer votre impact professionnel."
        features={[
          { title: "Professionnel", text: "Des experts à vos côtés" },
          { title: "En ligne", text: "Apprenez à votre rythme" },
          { title: "Certificat", text: "Reconnu à la fin" }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Filtres</h3>
                  <button className="text-red-900 hover:text-red-700 text-sm font-medium">
                    Réinitialiser
                  </button>
                </div>

                {/* Search in sidebar */}
                <div className="mb-6 relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                </div>

                {/* Categories */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between">
                    Catégorie
                    <ChevronDown size={16} />
                  </h4>
                  <div className="space-y-3">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-red-900"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-red-900">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between">
                    Durée
                    <ChevronDown size={16} />
                  </h4>
                  <div className="space-y-3">
                    {['Moins de 5 heures', '5 à 15 heures', '15 à 30 heures', 'Plus de 30 heures'].map(duration => (
                      <label key={duration} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-red-900 rounded"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-red-900">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div>
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between">
                    Format
                    <ChevronDown size={16} />
                  </h4>
                  <div className="space-y-3">
                    {['En ligne', 'Classes virtuelles', 'Parcours certifiant'].map(format => (
                      <label key={format} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-red-900 rounded"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-red-900">{format}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Column */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-red-900 transition"
                >
                  <Filter size={18} />
                  Filtres
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm text-gray-600">Trier par :</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-900"
                  >
                    <option value="pertinence">Pertinence</option>
                    <option value="recent">Plus récent</option>
                    <option value="populaire">Populaire</option>
                    <option value="prix-bas">Prix croissant</option>
                  </select>
                </div>
              </div>

              {/* Category Chips */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? 'bg-red-900 text-white shadow-lg shadow-red-900/30'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-red-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">{filteredFormations.length}</span> formation{filteredFormations.length !== 1 ? 's' : ''} trouvée{filteredFormations.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Search Bar - Mobile */}
            <div className="lg:hidden mb-8 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
              />
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="lg:hidden mb-8 bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Filtres</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>
                {/* Filter content for mobile */}
              </div>
            )}

            {/* Formation Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {filteredFormations.slice(0, 12).map(formation => (
                <div
                  key={formation.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition group cursor-pointer"
                  onClick={() => setSelectedFormation(formation)}
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    <FormationImagePlaceholder category={formation.category} id={formation.id} />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-red-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                      {formation.category}
                    </span>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(formation.id);
                      }}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-lg"
                    >
                      <Heart
                        size={18}
                        className={favorites.has(formation.id) ? 'fill-red-900 text-red-900' : 'text-gray-400'}
                      />
                    </button>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Title */}
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-red-900 transition">
                      {formation.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {formation.description}
                    </p>

                    {/* Metadata */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock size={16} className="text-red-900" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users size={16} className="text-red-900" />
                        <span>{formation.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <MapPin size={16} className="text-red-900" />
                        <span>{formation.location}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-gray-600">4.8</span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFormation(formation);
                      }}
                      className="w-full mt-4 bg-red-900 hover:bg-red-800 text-white py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
                    >
                      Voir le programme
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className="text-center py-16">
                <Award size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg font-medium">Aucune formation ne correspond à votre recherche</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Consultation CTA Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex items-center justify-center">
                <Zap className="w-24 h-24 text-red-900 opacity-20" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Besoin d'un conseil personnalisé ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe vous accompagne pour choisir la formation la plus adaptée à vos objectifs et votre situation.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setCurrentPage?.('contact')}
                    className="px-6 py-3 border-2 border-red-900 text-red-900 rounded-lg font-semibold hover:bg-red-50 transition"
                  >
                    Nous contacter
                  </button>
                  <button
                    onClick={() => setCurrentPage?.('contact')}
                    className="px-6 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition flex items-center gap-2"
                  >
                    Demander un accompagnement
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4">Découvrez comment nos formations peuvent transformer votre carrière</p>
          <button
            onClick={() => setCurrentPage?.('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-900 hover:bg-red-800 rounded-lg font-semibold transition"
          >
            Commencer maintenant
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { Search, Clock, MapPin, CheckCircle, Users, Award, Heart, Filter, X, ChevronDown, BookOpen, Zap, ArrowRight, Compass, Briefcase, TrendingUp, Smile, Code, Target, PieChart, Brain, Lightbulb, Globe, Settings, Shield, Handshake, Laptop, LucideIcon } from 'lucide-react';
import { formations, Formation } from '../data/formations';
import FormationDetailPage from './FormationDetailPage';
import { PageTitle, Section, CallToAction, Reveal } from './nova';

interface VisualConfig {
  from: string;
  to: string;
  icons: LucideIcon[];
  patterns: string;
}

// Configuration visuelle par catégorie, harmonisée sur les bordeaux de la marque
const getFormationVisualsConfig = (category: string): VisualConfig => {
  const configs: Record<string, VisualConfig> = {
    'Management': {
      from: '#5a0000',
      to: '#8a1010',
      icons: [Compass, Briefcase, TrendingUp],
      patterns: 'diagonal'
    },
    'Digital': {
      from: '#6b0505',
      to: '#a01818',
      icons: [Code, Zap, Laptop],
      patterns: 'dots'
    },
    'Développement Personnel': {
      from: '#4a0000',
      to: '#7a0f0f',
      icons: [Target, TrendingUp, Smile],
      patterns: 'circles'
    },
    'Finance': {
      from: '#5f0808',
      to: '#931919',
      icons: [PieChart, TrendingUp, Briefcase],
      patterns: 'grid'
    },
    'IA': {
      from: '#700a0a',
      to: '#a82424',
      icons: [Brain, Zap, Code],
      patterns: 'dots'
    },
    'Innovation': {
      from: '#650303',
      to: '#9c1c1c',
      icons: [Lightbulb, Zap, Brain],
      patterns: 'circles'
    },
    'Langues': {
      from: '#520202',
      to: '#851414',
      icons: [Globe, Users, BookOpen],
      patterns: 'diagonal'
    },
    'Outils': {
      from: '#5c0606',
      to: '#8f1717',
      icons: [Settings, Code, Zap],
      patterns: 'grid'
    },
    'Risques': {
      from: '#480000',
      to: '#760d0d',
      icons: [Shield, CheckCircle, Award],
      patterns: 'grid'
    },
    'Ventes': {
      from: '#6d0808',
      to: '#a52020',
      icons: [Handshake, TrendingUp, Award],
      patterns: 'diagonal'
    }
  };

  return configs[category] || configs['Management'];
};

// Visuel de remplacement pour les cartes de formation
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
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `linear-gradient(135deg, ${config.from}, ${config.to})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

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

      {/* Icônes décoratives */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="absolute top-6 left-6">
          <Icon1 size={40} className="text-white" strokeWidth={1.5}/>
        </div>
        <div className="absolute bottom-8 right-8">
          <Icon2 size={48} className="text-white" strokeWidth={1.5}/>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <Icon3 size={36} className="text-white" strokeWidth={1.5}/>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
    </div>
  );
};

interface FormationsPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function FormationsPage({ setCurrentPage }: FormationsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
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
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Nos Formations"
        subtitle="Des formations pratiques et certifiantes pour développer vos compétences et accélérer votre impact professionnel."
        breadcrumbs={[{ label: 'Formations' }]}
        image="/nova/services-page-title-bg.jpg"
      />

      {/* Catalogue */}
      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--nova-heading)' }}>Filtres</h3>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('Tous');
                    }}
                    className="text-sm font-medium transition-colors duration-300 hover:opacity-75"
                    style={{ color: 'var(--nova-accent)' }}
                  >
                    Réinitialiser
                  </button>
                </div>

                {/* Recherche */}
                <div className="mb-6 relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[color:var(--nova-accent)]"
                  />
                </div>

                {/* Catégories */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between" style={{ color: 'var(--nova-heading)' }}>
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
                          className="w-4 h-4 accent-[color:var(--nova-accent)]"
                        />
                        <span
                          className="text-sm transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                          style={{ color: 'var(--nova-default)' }}
                        >
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Durée */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between" style={{ color: 'var(--nova-heading)' }}>
                    Durée
                    <ChevronDown size={16} />
                  </h4>
                  <div className="space-y-3">
                    {['Moins de 5 heures', '5 à 15 heures', '15 à 30 heures', 'Plus de 30 heures'].map(duration => (
                      <label key={duration} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded accent-[color:var(--nova-accent)]" />
                        <span
                          className="text-sm transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                          style={{ color: 'var(--nova-default)' }}
                        >
                          {duration}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div>
                  <h4 className="font-semibold text-sm mb-4 flex items-center justify-between" style={{ color: 'var(--nova-heading)' }}>
                    Format
                    <ChevronDown size={16} />
                  </h4>
                  <div className="space-y-3">
                    {['En ligne', 'Classes virtuelles', 'Parcours certifiant'].map(format => (
                      <label key={format} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded accent-[color:var(--nova-accent)]" />
                        <span
                          className="text-sm transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                          style={{ color: 'var(--nova-default)' }}
                        >
                          {format}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne principale */}
          <div className="lg:col-span-3">
            {/* Barre supérieure */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg transition hover:border-[color:var(--nova-accent)]"
                >
                  <Filter size={18} />
                  Filtres
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                    Trier par :
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[color:var(--nova-accent)]"
                  >
                    <option value="pertinence">Pertinence</option>
                    <option value="recent">Plus récent</option>
                    <option value="populaire">Populaire</option>
                    <option value="prix-bas">Prix croissant</option>
                  </select>
                </div>
              </div>

              {/* Chips de catégories */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'text-white shadow-md'
                        : 'bg-white border border-gray-300 hover:border-[color:var(--nova-accent)]'
                    }`}
                    style={
                      selectedCategory === cat
                        ? { backgroundColor: 'var(--nova-accent)' }
                        : { color: 'var(--nova-default)' }
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-sm mt-4" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                <span className="font-semibold">{filteredFormations.length}</span> formation{filteredFormations.length !== 1 ? 's' : ''} trouvée{filteredFormations.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Recherche mobile */}
            <div className="lg:hidden mb-8 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--nova-accent)]"
              />
            </div>

            {/* Panneau de filtres mobile */}
            {showFilters && (
              <div className="lg:hidden mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold" style={{ color: 'var(--nova-heading)' }}>Filtres</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category-mobile"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-[color:var(--nova-accent)]"
                      />
                      <span className="text-sm" style={{ color: 'var(--nova-default)' }}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Grille des formations */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {filteredFormations.slice(0, 12).map((formation, index) => (
                <Reveal key={formation.id} delay={60 * index}>
                  <div
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full"
                    onClick={() => setSelectedFormation(formation)}
                  >
                    {/* Visuel */}
                    <div className="relative h-48 overflow-hidden">
                      <FormationImagePlaceholder category={formation.category} id={formation.id} />

                      <span
                        className="absolute top-4 left-4 text-white px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: 'var(--nova-accent)' }}
                      >
                        {formation.category}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(formation.id);
                        }}
                        aria-label="Ajouter aux favoris"
                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-lg"
                      >
                        <Heart
                          size={18}
                          className={favorites.has(formation.id) ? 'fill-current' : 'text-gray-400'}
                          style={favorites.has(formation.id) ? { color: 'var(--nova-accent)' } : undefined}
                        />
                      </button>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3
                        className="font-bold text-lg line-clamp-2 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                        style={{ color: 'var(--nova-heading)' }}
                      >
                        {formation.title}
                      </h3>

                      <p
                        className="text-[15px] line-clamp-2"
                        style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                      >
                        {formation.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--nova-default)' }}>
                          <Clock size={16} style={{ color: 'var(--nova-accent)' }} />
                          <span>{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--nova-default)' }}>
                          <Users size={16} style={{ color: 'var(--nova-accent)' }} />
                          <span>{formation.participants}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--nova-default)' }}>
                          <MapPin size={16} style={{ color: 'var(--nova-accent)' }} />
                          <span>{formation.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-400">★★★★★</span>
                        <span style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>4.8</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFormation(formation);
                        }}
                        className="w-full mt-2 text-white py-2.5 rounded-full font-medium transition-all duration-500 flex items-center justify-center gap-2 hover:bg-[color:var(--nova-accent-dark)]"
                        style={{ backgroundColor: 'var(--nova-accent)' }}
                      >
                        Voir le programme
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className="text-center py-16">
                <Award size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  Aucune formation ne correspond à votre recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Conseil personnalisé */}
      <Section light>
        <Reveal delay={100}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="flex items-center justify-center">
                <Zap className="w-24 h-24 opacity-20" style={{ color: 'var(--nova-accent)' }} />
              </div>
              <div>
                <h2 className="text-2xl md:text-[28px] font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  Besoin d'un conseil personnalisé ?
                </h2>
                <p className="mb-8" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
                  Notre équipe vous accompagne pour choisir la formation la plus adaptée à vos objectifs et votre situation.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setCurrentPage?.('contact')}
                    className="px-8 py-3 rounded-full border-2 font-medium transition-all duration-500 hover:text-white"
                    style={{ borderColor: 'var(--nova-accent)', color: 'var(--nova-accent)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--nova-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Nous contacter
                  </button>
                  <button
                    onClick={() => setCurrentPage?.('contact')}
                    className="px-8 py-3 rounded-full text-white font-medium transition-all duration-500 flex items-center gap-2 hover:bg-[color:var(--nova-accent-dark)]"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    Demander un accompagnement
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CallToAction
        title="Découvrez comment nos formations peuvent transformer votre carrière"
        description="Nos conseillers vous aident à bâtir le parcours qui correspond à vos objectifs."
        actions={[{ label: 'Commencer maintenant', onClick: () => setCurrentPage?.('contact') }]}
      />
    </div>
  );
}

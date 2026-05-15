import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Search, Tag, Clock } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 'transformation-digitale-2025',
    title: "Transformation Digitale : Les Tendances Incontournables de 2025",
    excerpt: "Découvrez les technologies émergentes qui révolutionneront le monde des affaires en 2025 et comment votre entreprise peut s'y préparer dès maintenant.",
    content: `La transformation digitale continue d'évoluer à un rythme effréné. En 2025, plusieurs tendances majeures redéfiniront la façon dont les entreprises opèrent et interagissent avec leurs clients.

## Intelligence Artificielle Générative

L'IA générative ne se contente plus de créer du contenu. Elle devient un véritable partenaire stratégique capable d'analyser des données complexes, de prédire les tendances du marché et d'optimiser les processus opérationnels en temps réel.

## Automatisation Intelligente

L'automatisation évolue vers une approche plus intelligente, combinant RPA (Robotic Process Automation) et IA pour créer des workflows adaptatifs qui s'améliorent continuellement.

## Cybersécurité Prédictive

Face à l'augmentation des cybermenaces, les entreprises adoptent des approches prédictives utilisant l'IA pour anticiper et neutraliser les attaques avant qu'elles ne se produisent.

## Conclusion

Les entreprises qui embrassent ces tendances dès maintenant prendront une avance considérable sur leurs concurrents. Chez Kaizen Strategy, nous accompagnons nos clients dans cette transformation pour assurer leur succès futur.`,
    author: "Dr GNUI Koutoua Samson",
    date: "15 Janvier 2025",
    category: "Digital",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    tags: ["Transformation Digitale", "IA", "Innovation", "Stratégie"]
  },
  {
    id: 'risk-management-bouclier',
    title: "Le Bouclier : Notre Solution Révolutionnaire de Risk Management",
    excerpt: "Présentation de notre solution propriétaire 'Le Bouclier' qui révolutionne la gestion des risques en entreprise avec une approche prédictive et intégrée.",
    content: `La gestion des risques traditionnelle ne suffit plus dans un environnement économique de plus en plus volatil. C'est pourquoi Kaizen Strategy a développé "Le Bouclier", une solution révolutionnaire qui transforme l'approche du risk management.

## Une Approche Prédictive

Le Bouclier utilise des algorithmes avancés pour identifier les risques potentiels avant qu'ils ne se matérialisent, permettant aux entreprises d'agir de manière proactive plutôt que réactive.

## Intégration Complète

Notre solution s'intègre parfaitement aux systèmes existants de l'entreprise, créant un écosystème de protection unifié qui couvre tous les aspects de l'activité.

## Tableau de Bord Temps Réel

Les dirigeants disposent d'une vue d'ensemble en temps réel de tous les risques, avec des alertes automatiques et des recommandations d'actions prioritaires.

## Résultats Mesurables

Nos clients observent en moyenne une réduction de 40% des incidents majeurs et une amélioration de 60% de leur temps de réaction face aux crises.`,
    author: "Expert Risk Management",
    date: "12 Janvier 2025",
    category: "Risk Management",
    readTime: "4 min",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    tags: ["Risk Management", "Le Bouclier", "Innovation", "Sécurité"]
  },
  {
    id: 'leadership-moderne',
    title: "Leadership Moderne : Inspirer et Transformer à l'Ère Digitale",
    excerpt: "Les compétences de leadership évoluent. Découvrez comment développer un leadership authentique et efficace dans un monde en constante mutation.",
    content: `Le leadership moderne nécessite une approche radicalement différente de celle d'il y a encore quelques années. Les leaders d'aujourd'hui doivent naviguer dans un environnement complexe, multiculturel et digitalisé.

## Leadership Authentique

L'authenticité devient la pierre angulaire du leadership moderne. Les équipes recherchent des leaders transparents, vulnérables et humains, capables de créer des connexions genuines.

## Agilité Décisionnelle

Dans un monde qui change rapidement, la capacité à prendre des décisions rapides et éclairées devient cruciale. Les leaders doivent développer leur intuition tout en s'appuyant sur les données.

## Intelligence Émotionnelle

La gestion des émotions, tant les siennes que celles de son équipe, devient une compétence fondamentale pour naviguer dans l'incertitude et maintenir la motivation.

## Leadership Distribué

Les organisations modernes favorisent un leadership distribué où chaque membre de l'équipe peut prendre des initiatives et exercer un leadership situationnel.`,
    author: "Expert Management",
    date: "10 Janvier 2025",
    category: "Management",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
    tags: ["Leadership", "Management", "Transformation", "Compétences"]
  },
  {
    id: 'ia-entreprise-guide',
    title: "IA en Entreprise : Guide Pratique pour une Implémentation Réussie",
    excerpt: "Notre méthodologie en 3 phases pour intégrer l'intelligence artificielle dans votre entreprise : Diagnostic, Implémentation et Formation.",
    content: `L'intégration de l'intelligence artificielle en entreprise ne s'improvise pas. Chez Kaizen Strategy, nous avons développé une méthodologie éprouvée en 3 phases pour garantir le succès de votre transformation IA.

## Phase 1 : Diagnostic IA

Cette phase cruciale permet d'évaluer la maturité de votre organisation et d'identifier les opportunités les plus prometteuses. Nous analysons vos processus, vos données et votre culture d'entreprise.

### Évaluation de la Maturité
- Audit des systèmes existants
- Analyse de la qualité des données
- Évaluation des compétences internes

## Phase 2 : Implémentation

L'implémentation se fait de manière progressive, en commençant par des projets pilotes à fort impact et faible risque.

### Approche Agile
- Développement itératif
- Tests continus
- Ajustements en temps réel

## Phase 3 : Formation et Adoption

La réussite d'un projet IA dépend largement de l'adoption par les utilisateurs finaux. Notre programme de formation garantit une montée en compétences efficace.

### Programme Complet
- Formation technique
- Change management
- Support continu`,
    author: "Expert IA",
    date: "8 Janvier 2025",
    category: "Intelligence Artificielle",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    tags: ["Intelligence Artificielle", "Implémentation", "Formation", "Stratégie"]
  },
  {
    id: 'finance-entreprise-2025',
    title: "Corporate Finance 2025 : Nouvelles Stratégies de Financement",
    excerpt: "Les stratégies de financement évoluent. Découvrez les nouvelles approches pour optimiser votre structure financière et accélérer votre croissance.",
    content: `Le paysage du financement d'entreprise connaît une transformation majeure. Les entreprises doivent adapter leurs stratégies pour tirer parti des nouvelles opportunités tout en gérant les risques émergents.

## Financement Alternatif

Les sources de financement se diversifient avec l'émergence de nouvelles solutions :
- Crowdfunding professionnel
- Financement participatif
- Crypto-financement
- Green bonds

## Optimisation de la Structure

L'optimisation de la structure financière devient plus sophistiquée avec l'utilisation d'outils d'analyse prédictive et de modélisation avancée.

## ESG et Finance

Les critères ESG (Environnementaux, Sociaux et de Gouvernance) influencent désormais les décisions de financement et d'investissement.

## Technologies Financières

Les FinTech révolutionnent les processus financiers avec l'automatisation, l'IA et la blockchain.`,
    author: "Expert Finance",
    date: "5 Janvier 2025",
    category: "Finance",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    tags: ["Corporate Finance", "Financement", "ESG", "FinTech"]
  },
  {
    id: 'etudes-marche-methodologie',
    title: "Études de Marché : Méthodologies Innovantes pour 2025",
    excerpt: "Les méthodes d'études de marché évoluent avec le digital. Découvrez nos approches innovantes pour obtenir des insights plus précis et actionables.",
    content: `Les études de marché traditionnelles montrent leurs limites face à la complexité des marchés actuels. Kaizen Strategy développe des méthodologies innovantes qui combinent approches quantitatives et qualitatives.

## Big Data et Analytics

L'exploitation des big data révolutionne la compréhension des marchés :
- Analyse des comportements en temps réel
- Prédiction des tendances
- Segmentation avancée

## Méthodologies Hybrides

Nous combinons plusieurs approches pour une vision complète :
- Enquêtes digitales
- Observation comportementale
- Analyse des réseaux sociaux
- Intelligence artificielle

## Insights Actionables

L'objectif n'est plus seulement de collecter des données, mais de générer des insights directement exploitables pour la stratégie d'entreprise.

## Veille Concurrentielle 2.0

Nos outils de veille utilisent l'IA pour surveiller en continu l'écosystème concurrentiel et identifier les opportunités émergentes.`,
    author: "Expert Études & Recherches",
    date: "3 Janvier 2025",
    category: "Études & Recherches",
    readTime: "4 min",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    tags: ["Études de Marché", "Big Data", "Analytics", "Veille"]
  }
];

interface BlogPageProps {
  currentArticle: string | null;
  setCurrentArticle: (article: string | null) => void;
}

const BlogPage = ({ currentArticle, setCurrentArticle }: BlogPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = ['Tous', 'Digital', 'Risk Management', 'Management', 'Intelligence Artificielle', 'Finance', 'Études & Recherches'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  if (currentArticle) {
    const article = articles.find(a => a.id === currentArticle);
    if (article) {
      return <ArticleDetailPage article={article} setCurrentArticle={setCurrentArticle} />;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Blog & <span className="text-[#b00000]">Actualités</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos dernières analyses, tendances et conseils d'experts 
              pour transformer votre entreprise et accélérer votre croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b00000] focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category
                      ? 'bg-[#b00000] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 text-gray-600">
            <span className="font-medium">{filteredArticles.length}</span> article(s) trouvé(s)
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <article 
                  key={article.id}
                  onClick={() => setCurrentArticle(article.id)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#b00000] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b00000] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs text-[#b00000] font-medium">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-[#b00000] font-medium group-hover:text-red-700 transition-colors duration-300">
                      <span>Lire la suite</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowLeft size={16} className="mr-2" />
                Précédent
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-[#b00000] text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Suivant
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Restez Informé de nos Dernières Actualités
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir nos analyses exclusives 
            et conseils d'experts directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-[#b00000] outline-none"
            />
            <button className="bg-[#b00000] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArticleDetailPage = ({ article, setCurrentArticle }: { article: Article; setCurrentArticle: (article: string | null) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => setCurrentArticle(null)}
              className="text-[#b00000] hover:text-red-700 transition-colors duration-200 flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              Retour au blog
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-[#b00000] text-white px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span key={index} className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                <Tag size={14} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Share & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'accompagnement ?
              </h3>
              <p className="text-gray-600 mb-6">
                Nos experts sont à votre disposition pour vous accompagner 
                dans la mise en œuvre de ces stratégies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="bg-[#b00000] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
                >
                  Nous Contacter
                </a>
                <a 
                  href="#formations"
                  className="border-2 border-[#b00000] text-[#b00000] px-8 py-3 rounded-lg hover:bg-[#b00000] hover:text-white transition-all duration-200 font-medium"
                >
                  Découvrir nos Formations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
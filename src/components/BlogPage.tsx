import { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Search, Tag, Clock } from 'lucide-react';
import { PageTitle, Section, CallToAction, NovaButton, Reveal } from './nova';

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
      <PageTitle
        title="Blog & Actualités"
        subtitle="Découvrez nos dernières analyses, tendances et conseils d'experts pour transformer votre entreprise et accélérer votre croissance."
        breadcrumbs={[{ label: 'Blog' }]}
        image="/nova/blog-page-title-bg.jpg"
      />

      {/* Recherche et filtres */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="nova-field pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'text-white shadow-md'
                      : 'bg-white border border-gray-300 hover:border-[color:var(--nova-accent)]'
                  }`}
                  style={
                    selectedCategory === category
                      ? { backgroundColor: 'var(--nova-accent)' }
                      : { color: 'var(--nova-default)' }
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}>
            <span className="font-medium">{filteredArticles.length}</span> article(s) trouvé(s)
          </div>
        </div>
      </section>

      {/* Grille d'articles */}
      <Section light>
        {currentArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 40%)' }}>
              Aucun article trouvé pour votre recherche.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article, index) => (
              <Reveal key={article.id} delay={100 * (index % 3 + 1)} className="h-full">
                <article
                  onClick={() => setCurrentArticle(article.id)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden h-full flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-white px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--nova-accent)' }}
                      >
                        {article.category}
                      </span>
                      <div
                        className="flex items-center text-sm"
                        style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 40%)' }}
                      >
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <h2
                      className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[color:var(--nova-accent)] line-clamp-2"
                      style={{ color: 'var(--nova-heading)' }}
                    >
                      {article.title}
                    </h2>

                    <p
                      className="mb-4 leading-relaxed line-clamp-3 text-[15px]"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                    >
                      {article.excerpt}
                    </p>

                    <div
                      className="flex items-center justify-between text-sm mb-4"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 40%)' }}
                    >
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded text-xs"
                          style={{ backgroundColor: 'var(--nova-light-bg)', color: 'var(--nova-default)' }}
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs font-medium" style={{ color: 'var(--nova-accent)' }}>
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div
                      className="flex items-center font-bold text-sm mt-auto transition-colors duration-300 group-hover:text-[color:var(--nova-accent)]"
                      style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 50%)' }}
                    >
                      <span>Lire la suite</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center px-5 py-2 border border-gray-300 rounded-full bg-white hover:border-[color:var(--nova-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Précédent
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
                  currentPage === page ? 'text-white' : 'border border-gray-300 bg-white hover:border-[color:var(--nova-accent)]'
                }`}
                style={currentPage === page ? { backgroundColor: 'var(--nova-accent)' } : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center px-5 py-2 border border-gray-300 rounded-full bg-white hover:border-[color:var(--nova-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Suivant
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        )}
      </Section>

      {/* Newsletter */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-[32px] font-bold text-white mb-4">
            Restez Informé de nos Dernières Actualités
          </h2>
          <p className="text-white/80 mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos analyses exclusives
            et conseils d'experts directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Votre adresse email" className="nova-field flex-1" />
            <NovaButton variant="light">S'abonner</NovaButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

const ArticleDetailPage = ({ article, setCurrentArticle }: { article: Article; setCurrentArticle: (article: string | null) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title={article.title}
        breadcrumbs={[
          { label: 'Blog', onClick: () => setCurrentArticle(null) },
          { label: article.category }
        ]}
        image="/nova/blog-page-title-bg.jpg"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentArticle(null)}
            className="flex items-center font-semibold mb-8 transition-colors duration-300 hover:opacity-75"
            style={{ color: 'var(--nova-accent)' }}
          >
            <ArrowLeft size={18} className="mr-2" />
            Retour au blog
          </button>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8"
            style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 35%)' }}
          >
            <div className="flex items-center">
              <User size={18} className="mr-2" style={{ color: 'var(--nova-accent)' }} />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" style={{ color: 'var(--nova-accent)' }} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" style={{ color: 'var(--nova-accent)' }} />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>

          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: 'var(--nova-light-bg)', color: 'var(--nova-default)' }}
              >
                <Tag size={14} className="mr-1" style={{ color: 'var(--nova-accent)' }} />
                {tag}
              </span>
            ))}
          </div>

          <div
            className="leading-relaxed whitespace-pre-line text-lg"
            style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' }}
          >
            {article.content}
          </div>
        </div>
      </Section>

      <CallToAction
        title="Besoin d'accompagnement ?"
        description="Nos experts sont à votre disposition pour vous accompagner dans la mise en œuvre de ces stratégies."
        actions={[
          { label: 'Nous Contacter', href: '#contact' },
          { label: 'Découvrir nos Formations', href: '#formations', outline: true }
        ]}
      />
    </div>
  );
};

export default BlogPage;
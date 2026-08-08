import {
  MapPin,
  Plane,
  Hotel,
  Award
} from 'lucide-react';
import { PageTitle, Section, SectionTitle, CallToAction, Reveal } from './nova';

const FormulePrivilege = () => {
  const packages = [
    {
      name: "Essentiel",
      price: "C$+800.000 FCFA",
      content: "Hôtel 3★, accueil aéroport, un repas de bienvenue, assistance téléphonique, excursion (une journée)"
    },
    {
      name: "Plus",
      price: "C$+1.000.000 FCFA",
      content: "Hôtel 4★, accueil personnalisé, excursion une journée, tourisme d'affaires (visite institutionnelle ou entreprise locale), assistance étendue, déjeuner de networking avec 1 professionnel local."
    },
    {
      name: "Exécutive",
      price: "C$+1.500.000 FCFA",
      content: "Hôtel 5★, Chauffeur VIP, excursion 2 jours, tourisme d'affaires haut de gamme, assistance 24h/24, coffret local luxe."
    }
  ];

  const discounts = [
    { participants: "3 à 4 participants", discount: "10 %" },
    { participants: "5 à 9 participants", discount: "12 %" },
    { participants: "10 participants et +", discount: "15 %" }
  ];

  const avantages = [
    {
      icon: MapPin,
      number: "01",
      title: "Découverte Culturelle",
      text: "Choisissez la formule privilège et Kaizen Strategy vous offre une excursion au cours de laquelle vous aurez l'occasion de découvrir une ville (Assinie Mafia, Yamoussoukro, Sassandra, San-Pedro…) de votre choix."
    },
    {
      icon: Plane,
      number: "02",
      title: "Service VIP",
      text: "Avec la formule privilège vous bénéficiez d'un accueil personnalisé à l'aéroport et un service d'assistance de proximité est disponible et prêt à vous servir 24 h/24 h."
    },
    {
      icon: Hotel,
      number: "03",
      title: "Hébergement Premium",
      text: "Choisissez la formule privilège et passez un séjour de rêve dans des hôtels de luxe avec vue sur l'océan et services haut de gamme."
    }
  ];

  const destinations = [
    { image: "/assinie.jpg", name: "ASSINIE", caption: "Plages paradisiaques" },
    { image: "/basilique-Notre-Dame-de-la-Paix-de-Yamoussoukro-2.jpg", name: "YAMOUSSOUKRO", caption: "Capitale politique" },
    { image: "/sassandra.jpeg", name: "SASSANDRA", caption: "Côte sauvage" },
    { image: "/sanpedro.jpeg", name: "SAN-PEDRO", caption: "La Baie des Sirènes" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Formule Privilège"
        subtitle="Formation, tourisme d'affaires et expérience culturelle : choisissez la formule privilège et bénéficiez de nombreux avantages."
        breadcrumbs={[{ label: 'Formations' }, { label: 'Formule Privilège' }]}
        image="/nova/portfolio-page-title-bg.jpg"
      />

      {/* Avantages Privilège */}
      <Section>
        <SectionTitle
          title="Nos Avantages Privilège"
          description="Une expérience unique alliant formation professionnelle et découverte culturelle"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {avantages.map((avantage, index) => (
            <Reveal key={avantage.title} delay={100 * (index + 1)}>
              <div
                className="rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                style={{ backgroundColor: 'var(--nova-light-bg)' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--nova-accent)' }}
                >
                  <avantage.icon size={38} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--nova-heading)' }}>
                  <span style={{ color: 'var(--nova-accent)' }}>{avantage.number}</span> {avantage.title}
                </h3>
                <p
                  className="leading-relaxed text-[15px]"
                  style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 25%)' }}
                >
                  {avantage.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Packs Privilège */}
      <Section light>
        <SectionTitle
          title="Nos Packs Privilège"
          description="Découvrez nos formules Privilège alliant formation professionnelle, tourisme d'affaires et expérience culturelle. Chaque pack est conçu pour offrir un confort et des prestations exceptionnelles adaptées à vos attentes."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="h-2" style={{ backgroundColor: 'var(--nova-accent)' }}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div
                    className="inline-flex items-center self-start text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    <Award size={16} className="mr-2" />
                    {pkg.name}
                  </div>

                  <div className="text-3xl font-bold mb-6" style={{ color: 'var(--nova-heading)' }}>
                    {pkg.price}
                  </div>

                  <p
                    className="leading-relaxed mb-8 flex-grow text-[15px]"
                    style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
                  >
                    {pkg.content}
                  </p>

                  <a
                    href="/contact"
                    className="w-full text-white py-3 rounded-full font-medium text-center block transition-all duration-500 hover:bg-[color:var(--nova-accent-dark)]"
                    style={{ backgroundColor: 'var(--nova-accent)' }}
                  >
                    Choisir cette formule
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--nova-heading)' }}>
              Remises Groupe
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold" style={{ color: 'var(--nova-heading)' }}>
                      Nombre de participants
                    </th>
                    <th className="text-center py-4 px-6 font-bold" style={{ color: 'var(--nova-heading)' }}>
                      Remise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {discounts.map((discount) => (
                    <tr
                      key={discount.participants}
                      className="border-b border-gray-100 transition-colors duration-200 hover:bg-[color:var(--nova-light-bg)]"
                    >
                      <td className="py-4 px-6" style={{ color: 'var(--nova-default)' }}>
                        {discount.participants}
                      </td>
                      <td className="py-4 px-6 text-center font-bold" style={{ color: 'var(--nova-accent)' }}>
                        {discount.discount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Destinations */}
      <Section>
        <SectionTitle
          title="Destinations Exceptionnelles"
          description="Découvrez les merveilles de la Côte d'Ivoire"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Reveal key={destination.name} delay={100 * (index + 1)}>
              <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <p className="text-white/80">{destination.caption}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Envie de vivre l'expérience Privilège ?"
        description="Nos conseillers construisent avec vous le séjour qui combine montée en compétences et découverte de la Côte d'Ivoire."
        actions={[
          { label: 'Découvrir les Formules', href: '#packs' },
          { label: 'Nous Contacter', href: '/contact', outline: true }
        ]}
      />
    </div>
  );
};

export default FormulePrivilege;

import { 
  MapPin, 
  Phone,
  Mail,
  Plane,
  Hotel,
  Award,
  Gift
} from 'lucide-react';

const FormulePrivilege = () => {
  const packages = [
    {
      name: "Essentiel",
      price: "C$+800.000 FCFA",
      color: "from-red-500 to-red-600",
      content: "Hôtel 3★, accueil aéroport, un repas de bienvenue, assistance téléphonique, excursion (une journée)"
    },
    {
      name: "Plus", 
      price: "C$+1.000.000 FCFA",
      color: "from-red-600 to-red-700",
      content: "Hôtel 4★, accueil personnalisé, excursion une journée, tourisme d'affaires (visite institutionnelle ou entreprise locale), assistance étendue, déjeuner de networking avec 1 professionnel local."
    },
    {
      name: "Exécutive",
      price: "C$+1.500.000 FCFA", 
      color: "from-red-700 to-red-800",
      content: "Hôtel 5★, Chauffeur VIP, excursion 2 jours, tourisme d'affaires haut de gamme, assistance 24h/24, coffret local luxe."
    }
  ];

  const discounts = [
    { participants: "3 à 4 participants", discount: "10 %" },
    { participants: "5 à 9 participants", discount: "12 %" },
    { participants: "10 participants et +", discount: "15 %" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Professionnels africains en formation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                Formation + tourisme d'affaires + <span className="text-red-400">expérience culturelle</span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Choisissez la formule privilège et recevez de nombreux avantages
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  <Gift size={24} className="mr-3" />
                  Découvrir les Formules
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  Nous Contacter
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/1.jpg"
                    alt="Professionnels africains - Image 1"
                    className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <img 
                    src="/2.jpeg"
                    alt="Professionnels africains - Image 2"
                    className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/3.jpeg"
                    alt="Professionnels africains - Image 3"
                    className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <img 
                    src="/4.jpg"
                    alt="Professionnels africains - Image 4"
                    className="rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-red-600">Avantages Privilège</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience unique alliant formation professionnelle et découverte culturelle
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">01 Découverte Culturelle</h3>
              <p className="text-gray-700">
                Choisissez la formule privilège et Kaizen Strategy vous offert une excursion au cours de laquelle vous 
                aurez l'occasion de découvrir une ville (Assinie Mafia, Yamoussoukro, Sassandra, San-Pedro...) de votre choix.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">02 Service VIP</h3>
              <p className="text-gray-700">
                Avec la formule privilège vous bénéficiez d'un accueil personnalisé à l'aéroport et un 
                service d'assistance de proximité est disponible et prêt à vous servir 24 h/24 h
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hotel size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">03 Hébergement Premium</h3>
              <p className="text-gray-700">
                Choisissez la formule privilège et passez un séjour de rêve dans des hôtels de luxe 
                avec vue sur l'océan et services haut de gamme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-red-600">Packs Privilège</span> - Kaizen Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez nos formules Privilège alliant formation professionnelle, tourisme d'affaires et 
              expérience culturelle. Chaque pack est conçu pour offrir un confort et des prestations 
              exceptionnelles adaptées à vos attentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                <div className={"h-2 bg-gradient-to-r " + pkg.color}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className={"inline-flex items-center bg-gradient-to-r " + pkg.color + " text-white px-4 py-2 rounded-full text-sm font-bold mb-6"}>
                    <Award size={16} className="mr-2" />
                    {pkg.name}
                  </div>
                  
                  <div className="text-3xl font-black text-gray-900 mb-6">
                    {pkg.price}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {pkg.content}
                  </p>
                  
                  <a href="/contact" className={"w-full bg-gradient-to-r " + pkg.color + " text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-center block"}>
                    Choisir cette formule
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Remises Groupe</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Nombre de participants</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-900">Remise</th>
                  </tr>
                </thead>
                <tbody>
                  {discounts.map((discount, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-200">
                      <td className="py-4 px-6 text-gray-700">{discount.participants}</td>
                      <td className="py-4 px-6 text-center font-bold text-red-600">{discount.discount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Destinations <span className="text-red-600">Exceptionnelles</span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les merveilles de la Côte d'Ivoire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/assinie.jpg"
                alt="Assinie"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">ASSINIE</h3>
                  <p className="text-red-200">Plages paradisiaques</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/basilique-Notre-Dame-de-la-Paix-de-Yamoussoukro-2.jpg"
                alt="Yamoussoukro"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">YAMOUSSOUKRO</h3>
                  <p className="text-red-200">Capitale politique</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/sassandra.jpeg"
                alt="Sassandra"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">SASSANDRA</h3>
                  <p className="text-red-200">Côte sauvage</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/sanpedro.jpeg"
                alt="San-Pedro"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">SAN-PEDRO</h3>
                  <p className="text-red-200">La Baie des Sirènes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormulePrivilege;

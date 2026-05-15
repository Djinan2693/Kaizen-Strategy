import React from 'react';
import { 
  Monitor, 
  Award, 
  Clock, 
  Users, 
  BookOpen, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  Brain,
  Target
} from 'lucide-react';

const KaizenAcademia = () => {
  const advantages = [
    {
      icon: Award,
      title: "Formations Certifiantes",
      description: "Obtenez des certifications reconnues pour valoriser vos compétences professionnelles.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Monitor,
      title: "Examens en Ligne",
      description: "Passez vos évaluations directement sur la plateforme avec correction automatique.",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Clock,
      title: "Accessibilité 24/7",
      description: "Apprenez à votre rythme, où que vous soyez, à tout moment de la journée.",
      color: "from-red-700 to-red-800"
    },
    {
      icon: Users,
      title: "Communauté d'Apprenants",
      description: "Échangez avec d'autres professionnels et enrichissez votre réseau.",
      color: "from-red-800 to-red-900"
    }
  ];

  const features = [
    { icon: BookOpen, text: "Bibliothèque de cours interactive" },
    { icon: Play, text: "Vidéos HD et contenus multimédias" },
    { icon: Brain, text: "IA personnalisée pour l'apprentissage" },
    { icon: Target, text: "Suivi de progression en temps réel" },
    { icon: Globe, text: "Accès multi-plateforme" },
    { icon: Zap, text: "Apprentissage adaptatif intelligent" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/70 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Formation en ligne - Kaizen Academia"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                <span className="text-white">Kaizen</span>
                <br />
                <span className="text-red-400">Academia</span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                La première plateforme e-learning dédiée à l'excellence professionnelle. 
                Transformez vos compétences avec nos formations innovantes et interactives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://kaizenstrategyci.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Play size={24} className="mr-3" />
                  Accéder à la Plateforme
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">300+ Formations</div>
                      <div className="text-red-200 text-sm">Certifiantes et interactives</div>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">15,000+ Apprenants</div>
                      <div className="text-red-200 text-sm">Communauté active</div>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">24/7 Disponible</div>
                      <div className="text-red-200 text-sm">Accès illimité</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Une Expérience d'Apprentissage <span className="text-red-600">Révolutionnaire</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interface intuitive, contenus interactifs et technologies de pointe 
              pour une formation professionnelle d'exception.
            </p>
          </div>

          {/* Platform Mockup */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Bar */}
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-6 bg-white text-gray-700 px-4 py-1 rounded text-sm border">
                    kaizenstrategyci.online
                  </div>
                </div>
              </div>

              {/* Platform Interface */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Sidebar */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-gray-900 font-bold text-lg mb-4">Mes Formations</h3>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 rounded-lg text-sm">
                        <div className="flex items-center justify-between">
                          <span>Leadership Digital</span>
                          <span className="text-xs">75%</span>
                        </div>
                        <div className="w-full bg-red-800 rounded-full h-1 mt-2">
                          <div className="bg-white h-1 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-white text-gray-700 p-3 rounded-lg text-sm border border-gray-200">
                        <span>Risk Management</span>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="bg-red-500 h-1 rounded-full w-1/3"></div>
                        </div>
                      </div>
                      <div className="bg-white text-gray-700 p-3 rounded-lg text-sm border border-gray-200">
                        <span>IA & Business</span>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div className="bg-red-400 h-1 rounded-full w-1/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-gray-900 font-bold text-xl">Cours en Direct</h3>
                      <div className="flex items-center text-red-600 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                    
                    {/* Video Player Mockup */}
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
                      <Play size={64} className="text-white opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                          Module 3: Stratégies d'Innovation - Dr GNUI Koutoua Samson
                        </div>
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-gray-600 text-sm">Participants</div>
                        <div className="text-gray-900 font-bold">247 connectés</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-gray-600 text-sm">Durée restante</div>
                        <div className="text-gray-900 font-bold">45 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir <span className="text-red-600">Kaizen Academia</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une plateforme conçue pour maximiser votre apprentissage et 
              accélérer votre développement professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités <span className="text-red-600">Avancées</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={24} />
                </div>
                <span className="text-gray-900 font-medium group-hover:text-red-600 transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b00000] to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Transformer Votre Carrière ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers de professionnels qui ont choisi Kaizen Academia 
            pour développer leurs compétences et accélérer leur réussite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://kaizenstrategyci.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#b00000] px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg inline-flex items-center justify-center"
            >
              <CheckCircle size={24} className="mr-3" />
              Commencer Maintenant
              <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaizenAcademia;
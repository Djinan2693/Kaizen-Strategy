import React from 'react';

interface Feature {
  title: string;
  text: string;
}

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  features?: Feature[];
}

const PageHero: React.FC<PageHeroProps> = ({ badge, title, subtitle, features }) => {
  return (
    <section
      className="relative overflow-hidden text-white pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[420px] lg:min-h-[560px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(120,0,0,0.95) 0%, rgba(120,0,0,0.72) 42%, rgba(120,0,0,0.18) 100%), url('/hero.png')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#780000',
      }}
    >
      <div className="absolute inset-0 bg-[#780000] lg:bg-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-white rounded-full opacity-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
            {badge}
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="pt-6 lg:pt-8">
                <div className="-mx-4 px-4 overflow-x-auto lg:overflow-visible">
                  <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 min-w-max lg:min-w-0">
                    {features.map((feature, index) => (
                      <div key={index} className="w-[220px] lg:w-auto flex-shrink-0 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 lg:p-0 lg:bg-transparent lg:border-0 lg:backdrop-blur-0">
                        <h3 className="text-base lg:text-lg font-bold text-white">{feature.title}</h3>
                        <p className="text-sm text-white/80 mt-1">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Empty for visual balance (image shows through) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

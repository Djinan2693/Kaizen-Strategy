import { ArrowLeft } from 'lucide-react';
import { PageTitle, Section, Reveal } from './nova';

interface MentionsLegalesProps {
  setCurrentPage: (page: string) => void;
}

const MentionsLegales = ({ setCurrentPage }: MentionsLegalesProps) => {
  const headingStyle = { color: 'var(--nova-heading)' };
  const bodyStyle = { color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' };

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Mentions Légales"
        subtitle="Informations légales concernant Kaizen Strategy"
        breadcrumbs={[{ label: 'Mentions Légales' }]}
        image="/nova/about-page-title-bg.jpg"
        onHome={() => setCurrentPage('home')}
      />

      <Section light>
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center font-semibold mb-8 transition-colors duration-300 hover:opacity-75"
            style={{ color: 'var(--nova-accent)' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </button>

          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Informations sur l'éditeur</h2>
                <div
                  className="p-6 rounded-lg space-y-2"
                  style={{ backgroundColor: 'var(--nova-light-bg)', ...bodyStyle }}
                >
                  <p><strong>Nom de l'entreprise :</strong> Kaizen Strategy</p>
                  <p><strong>Siège social :</strong> Cocody, Riviera Attoban, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Email :</strong> contact@kaizenstrategy.org</p>
                  <p><strong>Téléphone :</strong> +225 05 66 62 04 77</p>
                  <p><strong>Directeur de la Publication :</strong> Dr GNUI Koutoua Samson</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Hébergement</h2>
                <div
                  className="p-6 rounded-lg space-y-2"
                  style={{ backgroundColor: 'var(--nova-light-bg)', ...bodyStyle }}
                >
                  <p><strong>Fournisseur d'hébergement :</strong> Netlify</p>
                  <p><strong>Siège :</strong> Côte d'Ivoire</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Propriété intellectuelle</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  L'ensemble des contenus du site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Kaizen Strategy ou de ses partenaires.
                  Toute reproduction, représentation, modification ou utilisation est interdite sans autorisation préalable écrite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Limitation de responsabilité</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Kaizen Strategy s'efforce de fournir des informations exactes et à jour. Cependant, elle ne peut être tenue responsable des erreurs,
                  omissions ou des dommages résultant de l'utilisation de ce site ou des informations qu'il contient.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Conditions d'utilisation</h2>
                <p className="leading-relaxed mb-4" style={bodyStyle}>
                  En accédant et en utilisant ce site, vous acceptez de respecter ces conditions d'utilisation.
                  Kaizen Strategy se réserve le droit de modifier ces conditions à tout moment sans préavis.
                </p>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li>Vous vous engagez à utiliser ce site de manière légale et responsable</li>
                  <li>Vous ne devez pas utiliser ce site pour des activités illégales ou contraires à l'éthique</li>
                  <li>Vous acceptez de ne pas télécharger ou transmettre de virus ou de contenu malveillant</li>
                  <li>Toute violation de ces conditions pourra entraîner une suppression de votre accès au site</li>
                </ul>
              </section>
            </div>
          </Reveal>

          <div
            className="mt-10 text-center text-sm"
            style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 45%)' }}
          >
            <p>Dernière mise à jour : novembre 2025</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MentionsLegales;

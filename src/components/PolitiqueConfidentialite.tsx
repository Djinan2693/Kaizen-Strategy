import { ArrowLeft } from 'lucide-react';
import { PageTitle, Section, Reveal } from './nova';

interface PolitiqueConfidentialiteProps {
  setCurrentPage: (page: string) => void;
}

const PolitiqueConfidentialite = ({ setCurrentPage }: PolitiqueConfidentialiteProps) => {
  const headingStyle = { color: 'var(--nova-heading)' };
  const bodyStyle = { color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' };

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Politique de Confidentialité"
        subtitle="Comment nous protégeons vos données personnelles"
        breadcrumbs={[{ label: 'Politique de Confidentialité' }]}
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
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Collecte de données</h2>
                <p className="leading-relaxed mb-4" style={bodyStyle}>
                  Kaizen Strategy collecte certaines informations vous concernant lorsque vous :
                </p>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li>Remplissez un formulaire de contact</li>
                  <li>Demandez un devis ou une formation</li>
                  <li>Vous abonnez à notre plateforme e-learning</li>
                  <li>Consultez notre site web</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Types de données collectées</h2>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li>Informations d'identification (nom, prénom, email, téléphone)</li>
                  <li>Informations professionnelles (entreprise, fonction, secteur)</li>
                  <li>Données de navigation (adresse IP, type de navigateur)</li>
                  <li>Données de cookies (voir section cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Utilisation des données</h2>
                <p className="leading-relaxed mb-4" style={bodyStyle}>
                  Vos données sont utilisées pour :
                </p>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li>Répondre à vos demandes</li>
                  <li>Vous envoyer nos newsletters et communications marketing</li>
                  <li>Améliorer nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Partage de données</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être partagées avec nos partenaires de service
                  (hébergement, email marketing) uniquement aux fins de traitement de vos demandes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Sécurité des données</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre les accès non autorisés,
                  la modification, la divulgation ou la destruction. Cependant, aucune transmission par Internet n'est 100% sécurisée.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Vos droits</h2>
                <p className="leading-relaxed mb-4" style={bodyStyle}>
                  Conformément à la réglementation sur la protection des données, vous avez le droit de :
                </p>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger ou supprimer vos données</li>
                  <li>Refuser certains traitements</li>
                  <li>Demander la portabilité de vos données</li>
                  <li>Retirer votre consentement à tout moment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Durée de conservation</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Vos données personnelles sont conservées aussi longtemps que nécessaire pour accomplir les fins pour lesquelles elles ont été collectées.
                  Vous pouvez demander la suppression de vos données à tout moment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Contact</h2>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                  <p className="leading-relaxed" style={bodyStyle}>
                    Pour exercer vos droits ou pour toute question concernant la confidentialité,
                    contactez-nous à : <strong>contact@kaizenstrategy.org</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Modifications de cette politique</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                  Les modifications entreront en vigueur dès leur publication sur cette page.
                </p>
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

export default PolitiqueConfidentialite;

import { ArrowLeft } from 'lucide-react';
import { PageTitle, Section, Reveal } from './nova';

interface GestionCookiesProps {
  setCurrentPage: (page: string) => void;
}

const GestionCookies = ({ setCurrentPage }: GestionCookiesProps) => {
  const headingStyle = { color: 'var(--nova-heading)' };
  const bodyStyle = { color: 'color-mix(in srgb, var(--nova-default), transparent 20%)' };

  const typesCookies = [
    {
      title: "Cookies essentiels",
      text: "Nécessaires au fonctionnement correct du site. Ils permettent l'authentification, la sécurité et les préférences de base. Ces cookies ne peuvent pas être désactivés sans affecter le fonctionnement du site."
    },
    {
      title: "Cookies de performance",
      text: "Nous aident à comprendre comment vous utilisez notre site (pages visitées, temps passé, etc.). Ces informations nous permettent d'améliorer l'expérience utilisateur et les performances du site."
    },
    {
      title: "Cookies de marketing",
      text: "Utilisés pour vous proposer du contenu personnalisé et des publicités pertinentes basées sur votre intérêt. Ils peuvent suivre votre activité sur plusieurs sites."
    },
    {
      title: "Cookies tiers",
      text: "Placés par nos partenaires (Google Analytics, réseaux sociaux, etc.) pour analyser l'usage et améliorer la publicité. Vous pouvez contrôler ces cookies indépendamment."
    }
  ];

  const navigateurs = [
    { name: "Google Chrome", path: "Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données de site" },
    { name: "Mozilla Firefox", path: "Menu → Paramètres → Vie privée et sécurité → Cookies et données de sites" },
    { name: "Safari", path: "Préférences → Confidentialité → Gérer les données de site Web" },
    { name: "Microsoft Edge", path: "Paramètres → Confidentialité et services → Effacer les données de navigation" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="Gestion des Cookies"
        subtitle="Comprendre et contrôler l'utilisation des cookies"
        breadcrumbs={[{ label: 'Gestion des Cookies' }]}
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
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Qu'est-ce qu'un cookie ?</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile qui permet à notre site de vous reconnaître
                  lors de vos futures visites et d'améliorer votre expérience utilisateur. Les cookies ne contiennent généralement pas d'informations
                  personnelles identifiables, sauf si vous les avez explicitement fournies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Types de cookies utilisés</h2>
                <div className="space-y-4">
                  {typesCookies.map((type) => (
                    <div
                      key={type.title}
                      className="p-6 rounded-lg border-l-4"
                      style={{ backgroundColor: 'var(--nova-light-bg)', borderColor: 'var(--nova-accent)' }}
                    >
                      <h3 className="text-lg font-bold mb-2" style={headingStyle}>{type.title}</h3>
                      <p style={bodyStyle}>{type.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Services utilisant des cookies</h2>
                <ul className="list-disc list-inside space-y-2" style={bodyStyle}>
                  <li><strong>Google Analytics</strong> : Analyse de l'usage du site</li>
                  <li><strong>Réseaux sociaux</strong> : Intégration et partage de contenu</li>
                  <li><strong>Outils d'hébergement</strong> : Gestion de sessions et sécurité</li>
                  <li><strong>Email marketing</strong> : Suivi des campagnes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Contrôle des cookies</h2>
                <p className="leading-relaxed mb-4" style={bodyStyle}>
                  Vous pouvez contrôler et/ou supprimer les cookies selon vos préférences. Voici comment procéder sur différents navigateurs :
                </p>

                <div className="space-y-4">
                  {navigateurs.map((navigateur) => (
                    <div
                      key={navigateur.name}
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--nova-light-bg)' }}
                    >
                      <h3 className="font-bold mb-1" style={headingStyle}>{navigateur.name}</h3>
                      <p className="text-sm" style={bodyStyle}>{navigateur.path}</p>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed mt-6" style={bodyStyle}>
                  <strong>Remarque importante :</strong> Désactiver les cookies essentiels peut affecter le fonctionnement du site.
                  Vous pouvez refuser les cookies de marketing et de performance sans impact sur les services de base.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Do Not Track (DNT)</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Si votre navigateur envoie un signal "Do Not Track", nous respecterons cette préférence en limitant l'utilisation
                  de cookies de suivi. Cependant, les cookies essentiels resteront nécessaires au fonctionnement du site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Consentement</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  La première fois que vous visitez notre site, un bandeau de consentement vous permet de choisir quels types de cookies
                  vous acceptez. Vous pouvez modifier vos préférences à tout moment via les paramètres du site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Mise à jour</h2>
                <p className="leading-relaxed" style={bodyStyle}>
                  Cette politique de gestion des cookies peut être mise à jour à tout moment pour refléter les changements dans nos pratiques
                  ou la réglementation applicable. Les modifications entreront en vigueur dès leur publication sur cette page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5" style={headingStyle}>Questions ?</h2>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--nova-light-bg)' }}>
                  <p className="leading-relaxed" style={bodyStyle}>
                    Pour toute question concernant nos pratiques en matière de cookies,
                    veuillez nous contacter à : <strong>contact@kaizenstrategy.org</strong>
                  </p>
                </div>
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

export default GestionCookies;

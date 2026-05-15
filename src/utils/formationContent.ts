// Utility to generate rich content based on formation category and title

export const getFormationModules = (category: string, title: string): string[] => {
  const moduleMaps: Record<string, string[]> = {
    'Management': [
      'Fondamentaux du Leadership',
      'Communication et Influence',
      'Gestion des équipes et talent',
      'Prise de décision stratégique',
      'Gestion du changement'
    ],
    'Digital': [
      'Transformation numérique : concepts clés',
      'Outils et technologies essentiels',
      'Stratégie digitale et innovation',
      'Cybersécurité et données',
      'Cas pratiques et implémentation'
    ],
    'Développement Personnel': [
      'Connaissance de soi et potentiel',
      'Gestion du temps et productivité',
      'Intelligence émotionnelle',
      'Développement des compétences clés',
      'Plan d\'action personnalisé'
    ],
    'Finance': [
      'Principes comptables et financiers',
      'Analyse financière avancée',
      'Gestion budgétaire et prévisionnelle',
      'Fiscalité et optimisation',
      'Rapports financiers et KPIs'
    ],
    'IA': [
      'Fondamentaux de l\'IA et Machine Learning',
      'Données et algorithmes',
      'Applications pratiques de l\'IA',
      'Éthique et gouvernance IA',
      'Implémentation en entreprise'
    ],
    'Innovation': [
      'Processus d\'innovation et créativité',
      'Design Thinking et prototypage',
      'Gestion de projets innovants',
      'Culture d\'innovation',
      'Cas d\'études et succès'
    ],
    'Langues': [
      'Grammaire et vocabulaire',
      'Compréhension orale',
      'Expression écrite',
      'Communication professionnelle',
      'Immersion et pratique intensive'
    ],
    'Outils': [
      'Interface et fonctionnalités de base',
      'Workflows et optimisation',
      'Intégrations et automatisations',
      'Sécurité et bonnes pratiques',
      'Projets et cas pratiques'
    ],
    'Risques': [
      'Cadre réglementaire et conformité',
      'Identification et évaluation des risques',
      'Mitigation et contrôles',
      'Audit et reporting',
      'Gestion de crise'
    ],
    'Ventes': [
      'Prospection et qualification',
      'Négociation avancée',
      'Closing et finalisation',
      'Gestion des objections',
      'CRM et outils de vente'
    ]
  };

  return moduleMaps[category] || [
    'Concepts fondamentaux',
    'Pratiques avancées',
    'Cas d\'études',
    'Outils et techniques',
    'Implémentation et résultats'
  ];
};

export const getFormationObjectives = (category: string, title: string): string[] => {
  const objectiveMaps: Record<string, string[]> = {
    'Management': [
      'Développer des compétences de leadership visionnaire',
      'Améliorer la communication et l\'influence au sein de l\'équipe',
      'Maîtriser les outils de gestion moderne',
      'Créer une culture de haute performance',
      'Inspirer et motiver vos collaborateurs'
    ],
    'Digital': [
      'Comprendre la transformation numérique en profondeur',
      'Intégrer les nouvelles technologies efficacement',
      'Optimiser les processus digitaux',
      'Sécuriser l\'infrastructure informatique',
      'Monétiser les opportunités digitales'
    ],
    'Développement Personnel': [
      'Identifier vos forces et exploiter votre potentiel',
      'Gérer efficacement votre temps et énergie',
      'Développer l\'intelligence émotionnelle',
      'Accélérer votre croissance professionnelle',
      'Créer votre plan d\'évolution personnelle'
    ],
    'Finance': [
      'Maîtriser l\'analyse financière',
      'Optimiser la gestion des ressources',
      'Interpréter les rapports financiers',
      'Prendre des décisions éclairées',
      'Maximiser la rentabilité'
    ],
    'IA': [
      'Comprendre les technologies d\'IA actuelles',
      'Identifier les cas d\'usage pertinents',
      'Implémenter l\'IA dans votre entreprise',
      'Gérer l\'éthique et la gouvernance',
      'Mesurer l\'impact et le ROI'
    ],
    'Innovation': [
      'Cultiver une mentalité créative et innovante',
      'Appliquer le Design Thinking',
      'Gérer les projets innovants',
      'Transformer les idées en résultats',
      'Créer une culture d\'innovation'
    ],
    'Langues': [
      'Maîtriser les compétences linguistiques',
      'Communiquer avec confiance',
      'Développer la fluidité et l\'accent',
      'Utiliser le vocabulaire professionnel',
      'S\'adapter à différents contextes culturels'
    ],
    'Outils': [
      'Maîtriser tous les aspects de l\'outil',
      'Optimiser votre workflow',
      'Automatiser les tâches répétitives',
      'Collaborer efficacement',
      'Augmenter votre productivité'
    ],
    'Risques': [
      'Identifier les risques majeurs',
      'Mettre en place des contrôles efficaces',
      'Assurer la conformité réglementaire',
      'Gérer les crises',
      'Protéger votre organisation'
    ],
    'Ventes': [
      'Développer une stratégie de vente performante',
      'Augmenter vos taux de conversion',
      'Négocier avec efficacité',
      'Gérer les relations clients long terme',
      'Atteindre vos objectifs commerciaux'
    ]
  };

  return objectiveMaps[category] || [
    'Acquérir une expertise approfondie',
    'Appliquer les bonnes pratiques',
    'Résoudre des problèmes complexes',
    'Optimiser les processus',
    'Créer une valeur durable'
  ];
};

export const getFormationMethodology = (category: string): string => {
  const methodologyMaps: Record<string, string> = {
    'Management': 'Notre approche combine théorie et pratique avec des cas d\'études réels, des simulations et des échanges avec les participants. Chaque session inclut des exercices interactifs et du coaching personnalisé.',
    'Digital': 'Pédagogie mixte associant présentations interactives, démonstrations pratiques, ateliers hands-on et projets collaboratifs pour une immersion complète.',
    'Développement Personnel': 'Apprentissage expérientiel basé sur l\'introspection, les exercices de groupe, le feedback 360° et la co-création de solutions avec les pairs.',
    'Finance': 'Approche analytique avec utilisation de cas réels, outils Excel avancés, simulations financières et discussion en petit groupe pour approfondir.',
    'IA': 'Combinaison de théorie, de démonstrations pratiques sur outils réels et de projets pilots permettant une expérimentation directe.',
    'Innovation': 'Design Thinking appliqué, ateliers collaboratifs, prototypage rapide et présentations de cas d\'innovations réussies.',
    'Langues': 'Immersion progressive avec accent sur la communication orale, exercices pratiques, jeux de rôle et travail par petits groupes.',
    'Outils': 'Formation pratique intensive avec démonstrations en temps réel, exercices progressifs et projets concrets à appliquer immédiatement.',
    'Risques': 'Approche méthodique avec cadres normatifs, études de cas, exercices pratiques et préparation aux audits.',
    'Ventes': 'Apprentissage par la pratique : simulations commerciales, jeux de rôle, coaching individuel et partage d\'expériences.'
  };

  return methodologyMaps[category] || 'Approche pédagogique moderne combinant théorie, pratique et échanges interactifs pour un apprentissage optimal.';
};

export const getExpectedResults = (category: string): string[] => {
  const resultsMaps: Record<string, string[]> = {
    'Management': [
      'Leadership plus engageant et inspirant',
      'Amélioration du climat interne',
      'Meileure retention des talents',
      'Performance d\'équipe accrue de 30%+',
      'Capacité à gérer le changement'
    ],
    'Digital': [
      'Transformation digitale accélérée',
      'Productivité augmentée',
      'Sécurité renforcée',
      'Coûts réduites de 20%+',
      'Innovation continue'
    ],
    'Développement Personnel': [
      'Confiance personnelle accrue',
      'Productivité +40%',
      'Bien-être professionnel',
      'Progression de carrière rapide',
      'Leadership personnel développé'
    ],
    'Finance': [
      'Analyse financière autonome',
      'Optimisation de la rentabilité +25%',
      'Gestion budgétaire maîtrisée',
      'Décisions éclairées',
      'Conformité assurée'
    ],
    'IA': [
      'Identification de cas d\'usage',
      'Implémentation réussie',
      'Automatisation des processus',
      'Réduction des coûts',
      'Avantage compétitif acquis'
    ],
    'Innovation': [
      'Culture innovante établie',
      'Pipeline d\'idées actif',
      'Nouveaux produits/services',
      'Différenciation concurrentielle',
      'Croissance accélérée'
    ],
    'Langues': [
      'Maîtrise linguistique certifiée',
      'Confiance en communication',
      'Débouchés carrière',
      'Mobilité internationale',
      'Fluide dans conversations'
    ],
    'Outils': [
      'Maîtrise complète de l\'outil',
      'Gain de temps 50%+',
      'Qualité du travail améliorée',
      'Collaboration facilitée',
      'Expertise reconnue'
    ],
    'Risques': [
      'Risques identifiés et cartographiés',
      'Contrôles effectifs en place',
      'Conformité garantie',
      'Gestion de crise maîtrisée',
      'Assurance renforcée'
    ],
    'Ventes': [
      'Pipeline commercial développé',
      'Taux de fermeture +40%',
      'Contrats de meilleure valeur',
      'Durée du cycle réduite',
      'Revenue augmentée de 50%+'
    ]
  };

  return resultsMaps[category] || [
    'Compétences renforcées et validées',
    'Performance professionnelle améliorée',
    'Impact mesurable sur l\'organisation',
    'Opportunités de carrière',
    'Retour sur investissement positif'
  ];
};

export const getDuration = (days: string): number => {
  const match = days.match(/\d+/);
  return match ? parseInt(match[0]) : 1;
};

export const getSchedule = (days: number, duration: string): string[] => {
  if (duration.includes('jour')) {
    return ['9h00 - 12h00', '13h00 - 17h00'];
  }
  return days >= 3 ? ['9h00 - 12h30', '14h00 - 17h30'] : ['9h00 - 12h00', '13h00 - 17h00'];
};

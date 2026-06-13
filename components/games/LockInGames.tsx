"use client";

import ClassifyGame from "./ClassifyGame";

// ── Le test de légitimité ──
export function LockInLegitimacy() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Éthique du lock-in"
      title="Légitime, illégitime, ou ça dépend ?"
      intro="Le test : l'abonné pleinement informé referait-il le même dépôt ? Classez chaque mécanique."
      options={[
        { value: "legitime", label: "Légitime (valeur réelle)" },
        { value: "illegitime", label: "Illégitime (cage)" },
        { value: "depend", label: "Dépend de l'exécution" },
      ]}
      items={[
        { prompt: "Dix ans de playlists et d'historique d'écoute qui pilotent les recommandations.", answer: "legitime", why: "Dépôt de valeur réelle : l'abonné referait le dépôt. Partir, c'est repartir inconnu." },
        { prompt: "Un format propriétaire sans aucune possibilité d'export.", answer: "illegitime", why: "La ligne rouge : coût de sortie fabriqué contre l'abonné, sans contrepartie. Personne informé ne choisirait la cage." },
        { prompt: "Une pénalité financière contractuelle de sortie.", answer: "illegitime", why: "Dépendance artificielle sans valeur correspondante : le test échoue." },
        { prompt: "Un streak de 400 jours… proposé sans gel ni pause possible.", answer: "depend", why: "La progression gamifiée est légitime AVEC soupapes (gel, pause) ; sans elles, elle bascule vers l'addiction." },
        { prompt: "Une base de connaissance d'équipe, exportable en Markdown.", answer: "legitime", why: "Offrir l'export renforce le bon lock-in : ce qui retient (liens, intelligence du produit) ne se transporte pas, mais la confiance fait déposer davantage." },
        { prompt: "Les achats passés rendus inaccessibles dès la résiliation.", answer: "depend", why: "« L'abonnement donne accès à vos achats » est loyal ; « l'abonnement prend vos achats en otage » est la cage. Tout est dans l'exécution." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Les 7 familles de switching cost ──
export function LockInFamily() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Familles"
      title="À quelle famille de lock-in ?"
      intro="Rattachez chaque mécanique à sa famille de switching cost."
      options={[
        { value: "donnees", label: "Données / historique" },
        { value: "integrations", label: "Intégrations / workflow" },
        { value: "reseau", label: "Réseau / communauté" },
        { value: "algo", label: "Personnalisation algorithmique" },
        { value: "apprentissage", label: "Investissement / apprentissage" },
        { value: "progression", label: "Progression / milestones" },
      ]}
      items={[
        { prompt: "Slack branché à GitHub, Jira, Salesforce et au calendrier.", answer: "integrations", why: "La famille reine du B2B : débrancher Slack, c'est débrancher le système nerveux de l'entreprise — un projet, pas un clic." },
        { prompt: "Les 400 avis 5 étoiles d'un hôte sur une marketplace.", answer: "reseau", why: "Effet de réseau indirect : la réputation est l'actif le moins portable, elle n'a de sens que dans le système qui l'a produite." },
        { prompt: "Le Discover Weekly qu'un an d'écoutes a entraîné.", answer: "algo", why: "On exporte ses écoutes, pas le modèle entraîné : le coût de sortie est un coût de ré-entraînement (la traversée du désert algorithmique)." },
        { prompt: "Les centaines d'heures de maîtrise d'Adobe ou de Figma.", answer: "apprentissage", why: "La courbe d'apprentissage : changer d'outil, c'est redevenir débutant. Lock-in naturel et gratuit." },
        { prompt: "Le « membre depuis 2016 » et le statut de fidélité accumulé.", answer: "progression", why: "L'ancienneté est le seul actif que même le produit ne peut accélérer : elle ne s'achète qu'en restant." },
        { prompt: "La bibliothèque numérique : annotations, progression, étagères.", answer: "donnees", why: "L'historique accumulé : la famille la plus universelle — tout ce qui ne suivrait pas l'abonné dehors." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Ce qui suit / ne suit pas dehors ──
export function PortabilityTest() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Portabilité"
      title="Qu'est-ce qui ne suivrait pas dehors ?"
      intro="La porte ouverte sur un déménagement impossible est la forteresse parfaite. Qu'est-ce qui se transporte vraiment ?"
      options={[
        { value: "portable", label: "Se transporte (données brutes)" },
        { value: "non", label: "Ne se transporte pas (valeur réelle)" },
      ]}
      items={[
        { prompt: "Le fichier CSV de mes écoutes.", answer: "portable", why: "La donnée brute voyage — c'est même loyal de l'offrir." },
        { prompt: "L'algorithme de recommandation entraîné sur ces écoutes.", answer: "non", why: "L'intelligence reste : des semaines de recos médiocres ailleurs avant de retrouver le niveau." },
        { prompt: "Les habitudes et le réflexe d'usage quotidien.", answer: "non", why: "L'habitude ne s'exporte pas : c'est du lock-in comportemental pur." },
        { prompt: "Le design system Figma exporté en fichiers.", answer: "portable", why: "Les fichiers s'emportent — mais pas le système (liens, automatisations, intelligence)." },
        { prompt: "La communauté et les pairs qui m'attendent.", answer: "non", why: "On ne migre pas ses amitiés : aucun export ne les recrée." },
        { prompt: "Le contexte et la mémoire accumulés d'un assistant IA.", answer: "non", why: "L'actif le moins transportable de tous : le contexte appris reste sur place." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Priorité solo founder ──
export function LockInPriority() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Priorisation"
      title="Disponible quand ?"
      intro="Par ordre de rendement effort/puissance : que peut construire un solo founder dès le premier mois, et qu'est-ce qui exige l'échelle ?"
      options={[
        { value: "tot", label: "Dès le 1ᵉʳ mois" },
        { value: "echelle", label: "Avec l'échelle seulement" },
      ]}
      items={[
        { prompt: "Rendre l'historique accumulé visible (« 47 livres lus »).", answer: "tot", why: "Faible effort, rendement immédiat : tout produit accumule quelque chose — le montrer." },
        { prompt: "Soigner la visibilité et l'export loyal des assets créés.", answer: "tot", why: "Effort nul si le produit crée : il suffit de ne pas gâcher le lock-in naturel." },
        { prompt: "Un effet de réseau direct massif entre membres.", answer: "echelle", why: "Famille lourde : sans masse critique, le réseau ne nourrit rien (l'erreur classique du débutant)." },
        { prompt: "2-3 intégrations clés (calendrier, email, Zapier).", answer: "tot", why: "Effort moyen au meilleur effet de catégorie : de « l'outil qu'on essaie » à « l'outil branché »." },
        { prompt: "Un écosystème bundlé de plusieurs produits.", answer: "echelle", why: "Forteresse de géant (Apple, Amazon) : exige plusieurs produits de valeur." },
        { prompt: "Un algorithme de personnalisation au niveau de Netflix.", answer: "echelle", why: "Effort élevé et données massives requises : viendra avec l'échelle." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Risque éthique de la matrice ──
export function LockInEthicalRisk() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Matrice"
      title="Quel risque éthique ?"
      intro="Dans la matrice du module, situez le risque éthique de chaque stratégie."
      options={[
        { value: "sain", label: "Sain (valeur accumulée)" },
        { value: "soupapes", label: "À équiper de soupapes" },
        { value: "eviter", label: "À éviter" },
      ]}
      items={[
        { prompt: "Format propriétaire sans export.", answer: "eviter", why: "La seule ligne franchement rouge : le lock-in illégitime type, à proscrire." },
        { prompt: "Progression gamifiée (streak, XP).", answer: "soupapes", why: "La ligne orange : risque d'addiction. Garde-fous = gel de streak, pause qui préserve le statut." },
        { prompt: "Historique de données avec export possible.", answer: "sain", why: "Faible risque : fondé sur de la valeur accumulée, l'export renforce même la confiance." },
        { prompt: "Intégrations workflow.", answer: "sain", why: "Éthiquement sain par construction : la valeur est dans les connexions réelles." },
        { prompt: "Courbe d'apprentissage / maîtrise.", answer: "sain", why: "Risque nul : naturel et gratuit. Stratégie : entrée facile, profondeur infinie." },
        { prompt: "Certifications et badges.", answer: "sain", why: "Le seul lock-in qui recrute en même temps qu'il retient : l'utilisateur certifié devient investisseur de l'écosystème." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

"use client";

import ClassifyGame from "./ClassifyGame";

// ── Quel paywall pour ce média ? ──
export function MediaPaywallMatch() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Paywall presse"
      title="Quel paywall pour ce média ?"
      intro="La question décisive : irremplaçable pour qui ? Plus la réponse est forte et étroite, plus le mur peut être haut."
      options={[
        { value: "hard", label: "Hard paywall" },
        { value: "metered", label: "Metered paywall" },
        { value: "freemium", label: "Freemium éditorial" },
        { value: "soft", label: "Soft paywall (inscription)" },
      ]}
      items={[
        { prompt: "Une lettre financière professionnelle dont les lecteurs ont besoin pour travailler (type FT, WSJ).", answer: "hard", why: "Contenu professionnellement indispensable : le prix se compare à un outil de travail. ARPU 3-5× la presse généraliste." },
        { prompt: "Un quotidien national généraliste à fort trafic SEO et social.", answer: "metered", why: "Le compromis dominant : préserve l'audience/SEO, concentre la conversion sur les lecteurs réguliers (qualifiés par la fréquence)." },
        { prompt: "Un média spécialisé : actu chaude gratuite, enquêtes et verticales premium payantes.", answer: "freemium", why: "La frontière passe par la nature du contenu : le gratuit fait le volume, le payant porte la valeur distinctive." },
        { prompt: "Un pure player qui veut d'abord récolter des emails avant de monétiser.", answer: "soft", why: "L'étage de qualification : l'inscription alimente les newsletters, qui construisent l'habitude, qui nourrit le metered." },
        { prompt: "Un magazine de niche passion au contenu introuvable ailleurs, audience étroite et fidèle.", answer: "hard", why: "Irremplaçable pour une audience étroite : le mur peut être haut, l'ARPU élevé compense le faible volume." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Ligne de fracture contenu ──
export function ContentFracture() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Ligne de fracture"
      title="Gratuit, payant, ou hybride ?"
      intro="Triez chaque contenu selon son rôle : acquisition (gratuit), rétention/valeur (payant), ou entre les deux."
      options={[
        { value: "gratuit", label: "Gratuit (acquisition)" },
        { value: "payant", label: "Payant (valeur/rétention)" },
        { value: "hybride", label: "Hybride (metered)" },
      ]}
      items={[
        { prompt: "Le breaking news d'intérêt général.", answer: "gratuit", why: "L'acquisition, la part de voix, le SEO : ce qu'on trouve partout ne se paie pas." },
        { prompt: "L'enquête longue exclusive et l'analyse experte.", answer: "payant", why: "La valeur distinctive qui justifie l'abonnement : pourquoi payer pour ce qu'on trouve gratuitement ?" },
        { prompt: "L'article de fond grand public, lu par les habitués réguliers.", answer: "hybride", why: "Le metered : gratuit jusqu'au seuil, puis péage pour le lecteur fréquent (qualifié par sa fréquence)." },
        { prompt: "L'archive accumulée du média.", answer: "payant", why: "Un actif de rétention qui ne coûte plus rien à produire : le nouvel abonné achète l'archive." },
        { prompt: "La newsletter quotidienne d'actualité.", answer: "gratuit", why: "L'outil de construction d'habitude qui nourrit le funnel anonyme → inscrit → habitué → abonné." },
        { prompt: "Les verticales premium (cuisine, jeux, sport).", answer: "payant", why: "Le bundle de contenu : chaque verticale porte sa propre habitude et diversifie les raisons de rester." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Les paliers creator ──
export function CreatorTierMatch() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Paliers creator"
      title="À quel palier de soutien ?"
      intro="La grille Patreon en trois étages. Et la règle d'or : la bonne contrepartie coûte de l'accès, pas de la production."
      options={[
        { value: "acces", label: "Palier d'accès (3-5 $)" },
        { value: "appartenance", label: "Palier d'appartenance (8-15 $)" },
        { value: "proximite", label: "Palier de proximité (25-100 $+)" },
        { value: "erreur", label: "Erreur (production additionnelle)" },
      ]}
      items={[
        { prompt: "Le contenu en avance et les coulisses.", answer: "acces", why: "Le soutien symbolique, contrepartie de base : le palier du volume." },
        { prompt: "Le Discord communautaire et les Q&A de groupe.", answer: "appartenance", why: "La contrepartie relationnelle : le centre de gravité du revenu." },
        { prompt: "L'appel 1:1 mensuel et la mention nominative.", answer: "proximite", why: "La contrepartie rare, par nature contingentée : c'est ici que le temps du créateur se vend, donc se limite." },
        { prompt: "Un contenu exclusif différent et inédit à CHAQUE palier.", answer: "erreur", why: "L'erreur classique : multiplier la charge de production. La bonne contrepartie coûte de l'accès, pas de la production." },
        { prompt: "L'objet collector et l'accès direct privilégié.", answer: "proximite", why: "La contrepartie rare du haut de grille : à plafonner pour protéger le temps du créateur." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── La transition creator → produit ──
export function CreatorScalability() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Creator → produit"
      title="Survit à trois mois de silence ?"
      intro="La transition vers l'abonnement-produit : ce qui existe sans le créateur crée de la valeur d'entreprise. Survit, ou dépend du créateur ?"
      options={[
        { value: "survit", label: "Survit (découple du créateur)" },
        { value: "depend", label: "Dépend du créateur (ne scale pas)" },
      ]}
      items={[
        { prompt: "L'abonnement donne accès à un catalogue/archive de contenu accumulé.", answer: "survit", why: "Le nouvel abonné achète l'archive, qui ne coûte plus rien à produire : le revenu survit au silence." },
        { prompt: "Le seul contenu est le live hebdomadaire en direct du créateur.", answer: "depend", why: "Point de défaillance unique : trois mois de silence = effondrement du soutien." },
        { prompt: "Une communauté où les membres sont la valeur les uns des autres.", answer: "survit", why: "L'animation se distribue : le créateur passe d'artiste à hôte — le réseau retient même sans lui." },
        { prompt: "Un cours/outil/template packagé qui se vend en continu.", answer: "survit", why: "La connaissance packagée en actif se vend pendant que le créateur dort : le découplage maximal." },
        { prompt: "Des contreparties 1:1 personnelles à tous les paliers.", answer: "depend", why: "Tout repose sur le temps du créateur : ni scalable ni transmissible." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

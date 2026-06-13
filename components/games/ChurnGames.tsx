"use client";

import ClassifyGame from "./ClassifyGame";

// ── Taxonomie du churn ──
export function ChurnTaxonomy() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Taxonomie"
      title="Quelle espèce de churn ?"
      intro="Classez chaque cas dans la bonne catégorie. Le remède dépend de l'espèce."
      options={[
        { value: "actif", label: "Volontaire actif" },
        { value: "passif", label: "Passif (zombie)" },
        { value: "involontaire", label: "Involontaire (paiement)" },
      ]}
      items={[
        { prompt: "L'abonné clique sur « résilier » après une hausse de prix mal annoncée.", answer: "actif", why: "Décision explicite de partir : volontaire actif, déclenché par la friction (Module 2.3)." },
        { prompt: "La carte a expiré ; aucun renouvellement, aucune décision de l'abonné.", answer: "involontaire", why: "Échec de paiement : 20-40 % du churn, dont 60-70 % de soft declines récupérables par dunning." },
        { prompt: "L'abonné paie depuis 5 mois mais n'a plus ouvert l'app depuis 90 jours.", answer: "passif", why: "Zombie subscriber : comptablement pas du churn, opérationnellement un churn à terme." },
        { prompt: "Fonds insuffisants au moment du prélèvement mensuel.", answer: "involontaire", why: "Soft decline (le cas le plus fréquent) : réussirait souvent en réessayant au bon moment." },
        { prompt: "L'abonné résilie car son projet de 3 mois est terminé.", answer: "actif", why: "Décision assumée (l'Opportuniste) : volontaire actif par besoin terminé." },
        { prompt: "Le MRR le compte comme parfait, mais usage et ouvertures d'emails sont à zéro.", answer: "passif", why: "La relation est morte sans résiliation : à maintenir visible dans le segment « inactifs payants »." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Diagnostic de courbes de rétention ──
export function RetentionCurveDiagnose() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Courbes"
      title="Lisez cette courbe de rétention"
      intro="Diagnostiquez chaque courbe de cohorte et désignez la zone en cause."
      options={[
        { value: "onboarding", label: "Problème d'acquisition/onboarding" },
        { value: "produit", label: "Problème de valeur continue" },
        { value: "sain", label: "Business viable (noyau solide)" },
        { value: "smile", label: "Smile curve (réactivations)" },
      ]}
      items={[
        { prompt: "Chute de −28 % dès le M1, puis décrue normale.", answer: "onboarding", why: "Le cliff drop mesure la qualité de l'acquisition/onboarding : le problème est avant la rétention (Module 5)." },
        { prompt: "Pente régulière qui descend vers zéro, sans jamais se stabiliser.", answer: "produit", why: "Pas de plateau = pas de forever promise : aucune optimisation d'acquisition ne sauvera ce modèle (Module 3.1)." },
        { prompt: "Cliff modéré puis plateau net à 30 % qui tient sur 24 mois.", answer: "sain", why: "L'existence d'un plateau est le test de viabilité ultime : un noyau durable que le business consiste à grossir." },
        { prompt: "Courbe qui redescend puis remonte : les revenants dépassent les départs tardifs.", answer: "smile", why: "Smile curve : ~1 abonnement sur 4 est aujourd'hui une réactivation. La rétention se pense en cycle de vie avec retours." },
        { prompt: "Décrue régulière, plateau à peine esquissé, mais usage cœur abandonné par les partants.", answer: "produit", why: "La pente de croisière mesure la valeur continue réelle : c'est l'arsenal du Module 7 qui l'attaque." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Leading vs lagging indicators ──
export function LeadingVsLagging() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Signaux"
      title="Leading ou lagging ?"
      intro="Le churn est un lagging indicator. Distinguez les constats (lagging) des alertes (leading) où l'on peut encore agir."
      options={[
        { value: "leading", label: "Leading (alerte)" },
        { value: "lagging", label: "Lagging (constat)" },
      ]}
      items={[
        { prompt: "Fréquence d'usage en baisse sur 30/60/90 jours.", answer: "leading", why: "Le signal roi : l'usage est le meilleur prédicteur unique du churn à venir." },
        { prompt: "Le taux de résiliation du mois écoulé.", answer: "lagging", why: "Quand il se mesure, il est déjà arrivé." },
        { prompt: "La note NPS qui passe de promoteur à détracteur.", answer: "leading", why: "Les détracteurs churnent ~3× plus : la bascule est une alarme séquencée." },
        { prompt: "Le NRR du trimestre.", answer: "lagging", why: "Un constat agrégé : il mesure ce qui s'est déjà produit." },
        { prompt: "Un downgrade (contraction) sur un compte B2B.", answer: "leading", why: "La contraction précède la majorité des départs B2B de quelques mois." },
        { prompt: "Les verbatims de la survey de sortie.", answer: "lagging", why: "Précieux pour comprendre, mais recueillis une fois la décision prise." },
        { prompt: "Le champion B2B qui ne répond plus aux messages.", answer: "leading", why: "L'actif relationnel n°1 qui se détache : alerte majeure avant le renouvellement." },
      ]}
      xpPerCorrect={3}
      goodAt={6}
    />
  );
}

// ── Composantes du Health Score ──
export function HealthScoreComponents() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Health Score"
      title="Construisez votre Health Score"
      intro="Rangez chaque signal dans la bonne composante du Customer Health Score."
      options={[
        { value: "activite", label: "Activité (40 %)" },
        { value: "adoption", label: "Adoption (25 %)" },
        { value: "support", label: "Support & sentiment (15 %)" },
        { value: "billing", label: "Billing (20 %)" },
      ]}
      items={[
        { prompt: "Récence de la dernière session et tendance d'usage sur 90 jours.", answer: "activite", why: "Le bloc dominant : l'usage est le meilleur prédicteur unique." },
        { prompt: "Nombre de fonctions clés utilisées et intégrations actives.", answer: "adoption", why: "Largeur et profondeur d'usage : c'est ici que se mesure le lock-in (Module 7-bis)." },
        { prompt: "Tickets ouverts/résolus et NPS individuel.", answer: "support", why: "Le sentiment : un détracteur non traité est un churn qui se prépare." },
        { prompt: "Méthode de paiement expirante et comportement au renouvellement.", answer: "billing", why: "Les signaux de facturation : échecs, downgrades, renouvellement qui approche." },
        { prompt: "Chute du DAU/MAU individuel.", answer: "activite", why: "Un signal d'activité de premier rang." },
        { prompt: "Un downgrade récent de plan.", answer: "billing", why: "La contraction relève du bloc billing." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

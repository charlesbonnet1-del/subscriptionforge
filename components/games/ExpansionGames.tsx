"use client";

import ClassifyGame from "./ClassifyGame";

// ── Les trois états du NRR ──
export function NrrState() {
  return (
    <ClassifyGame
      badge="Mini-jeu · NRR"
      title="Quel régime économique ?"
      intro="Le NRR définit trois régimes. Situez chaque cas."
      options={[
        { value: "descendant", label: "Tapis roulant descendant (< 100 %)" },
        { value: "equilibre", label: "Équilibre (= 100 %)" },
        { value: "endogene", label: "Croissance endogène (> 100 %)" },
        { value: "elite", label: "Profil d'élite (> 120 %)" },
      ]}
      items={[
        { prompt: "NRR 85 % : la base perd 15 % de revenu par an.", answer: "descendant", why: "Toute la croissance doit reboucher le trou avant de croître — le modèle qui devient plus dur à mesure qu'il réussit." },
        { prompt: "NRR 100 % : l'expansion compense exactement churn et contraction.", answer: "equilibre", why: "Le seuil de respectabilité : chaque nouveau client est de la croissance nette." },
        { prompt: "NRR 110 % : +10 % de revenu par an sans vendre à personne de nouveau.", answer: "endogene", why: "La croissance se compose ; l'acquisition devient un accélérateur, pas une perfusion." },
        { prompt: "NRR 135 % (leader usage-based) : la base double en moins de 4 ans.", answer: "elite", why: "Le Saint Graal des SaaS multi-sièges et usage-based : les valorisations se construisent dessus." },
        { prompt: "NRR 92 % avec un GRR de 88 %.", answer: "descendant", why: "Sous 100 %, fragile voire structurel : le GRR médiocre confirme un socle qui fuit." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Le bon levier d'expansion ──
export function ExpansionLever() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Expansion"
      title="Quel levier d'expansion ?"
      intro="Pour chaque situation, quel levier d'expansion revenue activer ?"
      options={[
        { value: "upsell", label: "Upsell par trigger d'usage" },
        { value: "crosssell", label: "Cross-sell (add-on / module)" },
        { value: "groupe", label: "Plan familial / multi-siège" },
        { value: "annuel", label: "Migration annuelle" },
      ]}
      items={[
        { prompt: "L'abonné atteint 95 % de son quota de stockage.", answer: "upsell", why: "Le roi des upsells : on ne vend pas un plan, on débloque une action en cours, au moment où la valeur se démontre." },
        { prompt: "Un abonné individuel engagé dont le conjoint utilise son compte.", answer: "groupe", why: "Passer d'un abonnement-personne à un abonnement-groupe : l'ARPU monte ET le churn s'effondre." },
        { prompt: "Un client de la brique facturation pourrait utiliser la brique comptabilité.", answer: "crosssell", why: "Vendre un second produit (qui doit être bon seul) : de l'expansion ET du lock-in d'écosystème." },
        { prompt: "Un abonné mensuel au mois 3, après un pic d'usage et un milestone.", answer: "annuel", why: "Le timing optimal : assez tard pour la confiance, assez tôt pour capturer la durée. De l'expansion de NRR par la rétention." },
        { prompt: "Une équipe de 5 personnes dont 8 nouvelles recrues arrivent.", answer: "groupe", why: "Le multi-siège : chaque siège ajouté est de l'expansion native, le moteur des NRR > 120 %." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Stratégie d'expansion B2B ──
export function ExpansionSegmentation() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Stratégie"
      title="Qui étendre, qui laisser ?"
      intro="Plan d'expansion B2B : on n'étend que les comptes verts. Que faire de chaque client ?"
      options={[
        { value: "upsell", label: "Upseller (plan supérieur)" },
        { value: "annuel", label: "Migrer en annuel" },
        { value: "laisser", label: "Laisser tranquille / sécuriser" },
        { value: "crosssell", label: "Cross-seller un module" },
      ]}
      items={[
        { prompt: "Compte vert, usage au plafond de son plan, équipe qui a doublé.", answer: "upsell", why: "Trigger d'usage + health score vert : le QBR met les données sur la table (« voici ce que le plan supérieur changerait »)." },
        { prompt: "Compte vert, mensuel, très engagé depuis 4 mois.", answer: "annuel", why: "Migration annuelle : on n'étend que les verts, et l'annuel améliore mécaniquement le NRR à 12 mois." },
        { prompt: "Compte orange/rouge, usage en baisse, ticket support non résolu.", answer: "laisser", why: "On n'upsell jamais un compte à risque : d'abord sécuriser (réengagement, résolution), pas étendre." },
        { prompt: "Compte vert qui maîtrise un module et a un besoin adjacent.", answer: "crosssell", why: "Cross-sell d'un module (bon seul) : élargit le panier et crée du switching cost d'écosystème." },
        { prompt: "Compte rouge dont le champion ne répond plus, renouvellement proche.", answer: "laisser", why: "Priorité au sauvetage (intervention humaine), pas à l'expansion : étendre un compte qui fuit est une erreur." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Fidélité vs win-back ──
export function LoyaltyVsWinback() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Fidélité"
      title="Récompenser qui ?"
      intro="Le programme de fidélité récompense ceux qui restent ; le win-back récompense ceux qui partent. Distinguez."
      options={[
        { value: "fidelite", label: "Programme de fidélité" },
        { value: "winback", label: "Offre de win-back" },
        { value: "danger", label: "Anti-pattern (éduque au churn)" },
      ]}
      items={[
        { prompt: "Accès anticipé aux nouveautés pour les abonnés de plus de 12 mois.", answer: "fidelite", why: "Récompense la durée avec du tangible, coût quasi nul, valeur perçue forte (statut d'initié)." },
        { prompt: "Un mois offert à un churner pour qu'il revienne.", answer: "winback", why: "Récompense ceux qui partent : utile, mais à équilibrer avec la fidélité." },
        { prompt: "N'offrir des avantages QU'aux abonnés qui menacent de résilier.", answer: "danger", why: "Éduque toute la base à churner pour être bien traitée : le programme de fidélité est l'antidote structurel." },
        { prompt: "Tarif garanti à vie pour les abonnés de 3 ans.", answer: "fidelite", why: "Transforme l'ancienneté en actif financier (lock-in 7-bis.7) : partir, c'est perdre son tarif." },
        { prompt: "Une remise franche de réactivation envoyée à J+30 post-churn.", answer: "winback", why: "L'incentive de la séquence win-back : bornée, sous le coût d'un CAC." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

"use client";

import ClassifyGame from "./ClassifyGame";

// ── Hiérarchie des canaux par LTV ──
export function ChannelLtvRank() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Canaux"
      title="Classez les canaux par LTV"
      intro="Les canaux ne livrent pas le même client. Situez chacun dans sa LTV typique."
      options={[
        { value: "haute", label: "LTV élevée" },
        { value: "moyenne", label: "LTV moyenne / variable" },
        { value: "faible", label: "LTV faible / churn précoce" },
      ]}
      items={[
        { prompt: "Referral (parrainage d'un ami).", answer: "haute", why: "Le canal roi : pré-convaincu, pré-qualifié, socialement engagé — churn 25-40 % plus bas." },
        { prompt: "SEO / contenu (l'utilisateur a cherché son problème).", answer: "haute", why: "Intention forte et référentiel réaliste ; meilleure LTV/CAC à l'échelle." },
        { prompt: "Search paid (capte l'intention existante).", answer: "moyenne", why: "LTV correcte mais CAC enchéri : on capte une intention, on ne la crée pas." },
        { prompt: "Social paid (crée l'intention, volume scalable).", answer: "faible", why: "Intention faible, churn précoce élevé — le canal des cohortes de janvier qui meurent en mars." },
        { prompt: "Coup de projecteur d'un influenceur généraliste.", answer: "faible", why: "L'abonné a acheté l'excitation plus que le besoin (sauf influence de niche ultra-alignée)." },
        { prompt: "Influence de niche dont l'audience EST le segment.", answer: "haute", why: "Exception : peut rivaliser avec le referral car l'audience correspond exactement au besoin." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Diagnostic de l'aha moment / TTFV ──
export function AhaDiagnose() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Aha moment"
      title="Le paywall est-il bien placé ?"
      intro="Pour chaque parcours : le blocage arrive-t-il trop tôt, trop tard, ou au bon moment par rapport à l'aha moment ?"
      options={[
        { value: "tot", label: "Trop tôt (avant la valeur)" },
        { value: "bien", label: "Bien placé (après l'aha)" },
        { value: "tard", label: "Trop tard (valeur déjà donnée)" },
      ]}
      items={[
        { prompt: "Un site de presse demande la carte bancaire avant de laisser lire le moindre article.", answer: "tot", why: "On demande de payer une promesse, pas une expérience : l'erreur de paywall la plus coûteuse." },
        { prompt: "Une app de notes laisse créer sa première vraie page, puis bloque la collaboration d'équipe.", answer: "bien", why: "Le blocage surgit après l'aha moment (créer/utiliser une page), au moment où la valeur collective explose." },
        { prompt: "Un outil offre l'export pleine qualité gratuitement, puis propose de payer « pour aller plus loin ».", answer: "tard", why: "La valeur centrale est déjà donnée : on a offert le produit et on vend un pourboire." },
        { prompt: "Une app de fitness bloque le 1ᵉʳ programme tant qu'on n'a pas saisi son moyen de paiement.", answer: "tot", why: "Le trial qui exige la carte avant le premier usage demande de payer avant toute valeur vécue." },
        { prompt: "Un média laisse lire 5 articles, puis présente l'offre au lecteur régulier en plein élan.", answer: "bien", why: "Le metered paywall convertit la fréquence : il surgit quand le désir est au maximum, l'article coupé en plein élan." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Quel paywall pour quel business ? ──
export function PaywallMatch() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Paywall"
      title="Quel paywall pour quel business ?"
      intro="Associez chaque business au type de paywall le plus adapté."
      options={[
        { value: "hard", label: "Hard paywall" },
        { value: "metered", label: "Metered paywall" },
        { value: "freemium", label: "Freemium" },
        { value: "soft", label: "Soft paywall" },
      ]}
      items={[
        { prompt: "Newsletter B2B pointue au contenu irremplaçable, marque forte.", answer: "hard", why: "Rien sans payer : maximise le revenu par convaincu, exige un contenu unique." },
        { prompt: "Quotidien régional à fort trafic, lecteurs réguliers fréquents.", answer: "metered", why: "N articles gratuits puis péage : préserve l'audience/SEO et convertit la fréquence." },
        { prompt: "Outil SaaS collaboratif où la valeur s'approfondit avec l'usage.", answer: "freemium", why: "Frontière par fonctionnalités/capacité : convertir par approfondissement, pas par compteur." },
        { prompt: "Site de recettes à très fort trafic SEO, monétisation à construire.", answer: "soft", why: "Accès contre email/inscription : qualifie l'anonyme en prospect, nourrit le funnel (1ᵉʳ étage de fusée)." },
        { prompt: "App de fitness où l'habitude se construit sur les premières semaines.", answer: "freemium", why: "Free digne qui installe l'habitude, premium qui approfondit (programmes, coaching) — pas un mur." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

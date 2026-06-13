"use client";

import ClassifyGame from "./ClassifyGame";

// ── Choisir son billing ──
export function BillingChoice() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Stack"
      title="Quel outil de billing ?"
      intro="Trois critères guident l'arbitrage : qui est le marchand, le coût total à votre échelle, les capacités de rétention natives."
      options={[
        { value: "stripe", label: "Stripe Billing" },
        { value: "paddle", label: "Paddle (MoR)" },
        { value: "chargebee", label: "Chargebee / Recurly" },
        { value: "store", label: "Store + RevenueCat" },
      ]}
      items={[
        { prompt: "Un SaaS B2C qui démarre sur un marché principalement domestique.", answer: "stripe", why: "La couverture, l'écosystème, le coût d'entrée nul — et on ne le quittera probablement jamais." },
        { prompt: "Un logiciel vendu mondialement par une équipe de deux personnes.", answer: "paddle", why: "Le Merchant of Record : la TVA et la conformité mondiales externalisées valent largement la sur-commission." },
        { prompt: "Un B2B à facturation complexe (devis, multi-produits, enterprise).", answer: "chargebee", why: "La sophistication de facturation (cycles complexes, workflows de dunning avancés) que les autres n'ont pas." },
        { prompt: "Une app mobile B2C avec ambition web.", answer: "store", why: "Le standard du segment : le store + RevenueCat/Adapty, avec le web en parallèle selon les marchés." },
        { prompt: "Un indie qui vend du digital simple et veut zéro friction fiscale.", answer: "paddle", why: "Le MoR version créateur (Lemon Squeezy, désormais dans Stripe) : on échange des points de marge contre zéro administration." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Nommer le dark pattern ──
export function DarkPatternSpotter() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Dark patterns"
      title="Nommez le dark pattern"
      intro="Identifier pour reconnaître — chez soi comme chez les autres. Quel pattern problématique ?"
      options={[
        { value: "roach", label: "Roach motel" },
        { value: "prix", label: "Prix masqué" },
        { value: "urgence", label: "Urgence perpétuelle" },
        { value: "optout", label: "Opt-out déguisé" },
        { value: "shaming", label: "Confirmshaming" },
      ]}
      items={[
        { prompt: "Souscription en un clic, mais résiliation par téléphone aux heures ouvrées.", answer: "roach", why: "Facile d'entrer, difficile de sortir : le pattern le plus répandu et le plus légiféré." },
        { prompt: "L'équivalent mensuel en gros, la facturation annuelle réelle en petit.", answer: "prix", why: "La confusion tarifaire comme stratégie : frais révélés au dernier écran, renouvellement non mentionné." },
        { prompt: "Un compte à rebours qui se réinitialise à chaque visite, « plus que 2 places » permanent.", answer: "urgence", why: "Le FOMO frauduleux : la rareté inventée détruit la confiance, matière première du récurrent." },
        { prompt: "Un add-on pré-coché glissé dans le panier ; le trial qui se convertit sans rappel.", answer: "optout", why: "L'anti-modèle de l'opt-out loyal : le passage automatique au plan supérieur sans consentement explicite." },
        { prompt: "Le bouton de refus libellé « Non merci, je préfère payer plus cher ».", answer: "shaming", why: "La honte comme outil de conversion : le confirmshaming." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Pratique loyale ou dark pattern ? ──
export function LoyalVsDark() {
  return (
    <ClassifyGame
      badge="Mini-jeu · La frontière"
      title="Loyal ou déloyal ?"
      intro="La save flow intercepte, la transparence convertit. De quel côté de la ligne se trouve chaque pratique ?"
      options={[
        { value: "loyal", label: "Pratique loyale" },
        { value: "dark", label: "Dark pattern" },
      ]}
      items={[
        { prompt: "« Résiliable en un clic » affiché sous le bouton d'abonnement.", answer: "loyal", why: "La transparence convertit : la réversibilité affichée est un argument de vente." },
        { prompt: "Une save flow qui pose une question puis propose pause/downgrade, avec « continuer ma résiliation » visible.", answer: "loyal", why: "Une interception, jamais une obstruction : chaque écran garde l'option de partir." },
        { prompt: "Obliger l'abonné à appeler un numéro pour résilier.", answer: "dark", why: "Roach motel : illégal dans un nombre croissant de juridictions (click-to-cancel)." },
        { prompt: "Un rappel pré-facturation à J-2 avant la fin du trial.", answer: "loyal", why: "L'opt-out loyal : on perd quelques conversions d'oubli, précisément celles qui churnent et génèrent des chargebacks." },
        { prompt: "Montrer ce que l'abonné va perdre (streak, historique) sur la page d'annulation.", answer: "loyal", why: "Le regret anticipé loyal : informer d'une perte réelle est du consentement éclairé (pas l'inventer)." },
        { prompt: "Un « êtes-vous sûr ? » répété cinq fois avec menus introuvables.", answer: "dark", why: "L'obstruction par l'épuisement : gagne un mois, perd un client, un avis et de la marque." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Le coût des dark patterns ──
export function DarkPatternHarm() {
  return (
    <ClassifyGame
      badge="Mini-jeu · L'argument comptable"
      title="Quel dégât en chaîne ?"
      intro="S'abstenir des dark patterns n'est pas que moral, c'est comptable. Quelle ligne de valeur chaque conséquence touche-t-elle ?"
      options={[
        { value: "chargeback", label: "Chargebacks" },
        { value: "churn", label: "Churn différé violent" },
        { value: "reputation", label: "NPS / réputation" },
        { value: "loi", label: "Risque légal" },
      ]}
      items={[
        { prompt: "L'abonné qui ne trouve pas comment résilier appelle sa banque.", answer: "chargeback", why: "Le chargeback coûte le montant + des frais + un point de ratio — au-delà des seuils, perte du compte marchand." },
        { prompt: "La rétention par obstruction se solde en vagues, avec ressentiment et win-back stérilisé.", answer: "churn", why: "De la dette de churn à intérêts composés : on ne reconquiert pas quelqu'un qui s'est senti piégé." },
        { prompt: "Les détracteurs fabriqués par le billing parlent sur les forums, et la presse adore.", answer: "reputation", why: "La confiance se perd à l'échelle du marché, pas du seul client lésé." },
        { prompt: "Le pattern est déjà interdit quelque part, avec des amendes à neuf chiffres récentes.", answer: "loi", why: "Résiliation en trois clics, click-to-cancel : la direction du droit est univoque." },
      ]}
      xpPerCorrect={4}
      goodAt={3}
    />
  );
}

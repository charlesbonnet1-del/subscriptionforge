"use client";

import ClassifyGame from "./ClassifyGame";

// ── Diagnostic d'un waterfall ──
export function WaterfallDiagnose() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Waterfall"
      title="Lisez ce waterfall MRR"
      intro="Chaque profil de cascade raconte une histoire. Posez le bon diagnostic."
      options={[
        { value: "saine", label: "Croissance saine" },
        { value: "fragile", label: "Croissance fragile (seau percé)" },
        { value: "fauxplateau", label: "Faux plateau (contraction)" },
        { value: "trompe", label: "Mois en trompe-l'œil" },
      ]}
      items={[
        { prompt: "New solide, Expansion qui grossit en proportion, Churn contenu.", answer: "saine", why: "La cascade monte par ses deux moteurs : le second moteur (expansion) s'allume avec la maturité." },
        { prompt: "New massif, Churn massif : le MRR total monte quand même.", answer: "fragile", why: "On brûle du CAC pour compenser la fuite — le cas où le MRR total trompe le plus." },
        { prompt: "MRR stable : New correct, mais Contraction qui monte mois après mois.", answer: "fauxplateau", why: "Le signal d'alarme invisible sans la décomposition : le prédateur silencieux ronge le revenu." },
        { prompt: "Pic de New ce mois… dû à une promo dont la cohorte churnera dans 60 jours.", answer: "trompe", why: "Le mois en trompe-l'œil : la barre flatteuse cache un churn programmé (promise-delivery gap)." },
        { prompt: "Churned gonflé ce mois, mais c'est un repricing assumé et budgété.", answer: "trompe", why: "Pas une alarme mais l'exécution du plan : le churn de repricing était chiffré d'avance (Module 4.4)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── La matrice CAC × LTV ──
export function CacLtvQuadrant() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Quadrants"
      title="La matrice CAC × LTV"
      intro="Placez chaque canal/segment dans son quadrant — et déduisez l'action."
      options={[
        { value: "mine", label: "Mine d'or (CAC bas, LTV haute)" },
        { value: "volume", label: "Volume à transformer (CAC bas, LTV faible)" },
        { value: "conquete", label: "Conquête sélective (CAC haut, LTV haute)" },
        { value: "gouffre", label: "Gouffre (CAC haut, LTV faible)" },
      ]}
      items={[
        { prompt: "Le referral : CAC quasi nul, cohortes qui valent 3× la moyenne.", answer: "mine", why: "Doubler la mise : chaque euro y rapporte le plus. La question est « jusqu'où ça scale avant de se dégrader ? »." },
        { prompt: "Le social paid B2C : acquisition peu chère, mais churn précoce élevé.", answer: "volume", why: "Le chantier est la LTV (onboarding, expansion, annuel), pas l'acquisition." },
        { prompt: "La vente assistée enterprise : CAC élevé, mais LTV et NRR très hauts.", answer: "conquete", why: "Rentable mais cher : à poursuivre tant que le ratio 3:1 et le payback tiennent." },
        { prompt: "Un canal display : CAC élevé ET cohortes qui churnent vite.", answer: "gouffre", why: "Arrêter : aucun volume ne sauve un segment qui coûte cher et rapporte peu." },
        { prompt: "Le SEO/contenu : coût en temps (différé), intention forte, bonne rétention.", answer: "mine", why: "Souvent la meilleure LTV/CAC à l'échelle : à développer comme socle." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Réalisme d'un forecast ──
export function ForecastRealism() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Forecast"
      title="Cette hypothèse est-elle réaliste ?"
      intro="Un forecast vaut ce que valent ses hypothèses. Laquelle tient debout ?"
      options={[
        { value: "ok", label: "Réaliste" },
        { value: "non", label: "Irréaliste / non étayée" },
      ]}
      items={[
        { prompt: "« On divise le churn par deux le trimestre prochain. » Aucun chantier de rétention identifié.", answer: "non", why: "Une amélioration de churn se gagne par un chantier (onboarding, save flow, dunning) : sans lui, c'est un vœu." },
        { prompt: "« On maintient 100 nouveaux abonnés/mois sur nos canaux actuels prouvés. »", answer: "ok", why: "Une extrapolation d'un rythme déjà observé : hypothèse étayée." },
        { prompt: "« On triple l'acquisition en gardant le même CAC. »", answer: "non", why: "Le CAC monte presque toujours avec le volume (saturation des canaux) : tripler à CAC constant est une illusion." },
        { prompt: "« +2 € d'ARPU via une migration annuelle déjà testée sur une cohorte. »", answer: "ok", why: "Appuyé sur un test réel : raisonnable à généraliser prudemment." },
        { prompt: "« La saisonnalité de janvier (+30 % d'acquisition) se répète comme les 3 années passées. »", answer: "ok", why: "Une saisonnalité documentée et récurrente est une bonne base de modélisation (coefficients mensuels)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Quel étage d'outil ? ──
export function DataToolStage() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Stack données"
      title="Quel étage d'outil ?"
      intro="L'équipement se fait par étage. À quel outil répond chaque besoin ?"
      options={[
        { value: "billing", label: "Socle billing (Stripe)" },
        { value: "abo", label: "Analytics d'abonnement (ChartMogul…)" },
        { value: "produit", label: "Analytics produit (Mixpanel…)" },
        { value: "tableur", label: "Tableur (Google Sheets)" },
      ]}
      items={[
        { prompt: "Le MRR brut et les encaissements des premiers mois, gratuitement.", answer: "billing", why: "Le dashboard de la plateforme de paiement suffit au tout début." },
        { prompt: "Le MRR movement, les cohortes et les segments sans rien construire.", answer: "abo", why: "L'étage à brancher dès que le volume justifie de dépasser le tableur." },
        { prompt: "Les funnels d'activation et les leading indicators d'usage.", answer: "produit", why: "L'étage comportemental, indispensable pour travailler l'aha moment et le health score." },
        { prompt: "Le forecast, l'analyse de sensibilité et la vérité des définitions.", answer: "tableur", why: "L'équation de contrôle se vérifie là : un Google Sheet juste bat un dashboard faux." },
        { prompt: "Vérifier que MRR(M) = MRR(M−1) + New + Expansion − Contraction − Churn.", answer: "tableur", why: "La ligne de contrôle se construit et se débogue dans le tableur." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

"use client";

import ClassifyGame from "./ClassifyGame";

// ── À quelle étape appartient cette erreur ? ──
export function ErrorStage() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Erreurs"
      title="À quelle étape cette erreur ?"
      intro="Les 40 erreurs se rangent par étape du cycle de vie. Classez chacune."
      options={[
        { value: "lancement", label: "Lancement" },
        { value: "onboarding", label: "Onboarding / conversion" },
        { value: "pricing", label: "Pricing" },
        { value: "retention", label: "Rétention" },
        { value: "analyse", label: "Analyse" },
        { value: "croissance", label: "Croissance" },
      ]}
      items={[
        { prompt: "Confondre « utile une fois » et valeur continue justifiant un abonnement.", answer: "lancement", why: "L'erreur n°1 du métier : un churn structurel à 15-25 % que rien ne réparera (M3.1)." },
        { prompt: "Mesurer le taux de complétion plutôt que le Time-to-First-Value.", answer: "onboarding", why: "90 % de complétion peut coexister avec 100 % de churn (M5.5)." },
        { prompt: "Reprendre le prix en silence.", answer: "pricing", why: "La hausse découverte sur le relevé est la définition du repricing raté (M4.4)." },
        { prompt: "Traiter le churn involontaire comme du vrai churn.", answer: "retention", why: "20-40 % du churn est un problème de carte récupérable — le levier au meilleur ROI (M7.10)." },
        { prompt: "Calculer le churn sur la base totale au lieu d'une cohorte fixe.", answer: "analyse", why: "En croissance, les clients récents diluent le chiffre — on découvre le problème trop tard (M6.3)." },
        { prompt: "Optimiser l'acquisition avant de réparer la rétention.", answer: "croissance", why: "Remplir un seau percé coûte de plus en plus cher : la rétention multiplie tout le reste (M6.2)." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Erreur ou bonne pratique ? ──
export function ErrorAudit() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Audit"
      title="Erreur ou bonne pratique ?"
      intro="Audit d'un business : repérez ce qui cloche de ce qui est sain."
      options={[
        { value: "erreur", label: "Erreur classique" },
        { value: "bon", label: "Bonne pratique" },
      ]}
      items={[
        { prompt: "Le MRR affiché inclut 8 000 € de frais de setup encaissés ce mois.", answer: "erreur", why: "One-shot dans le MRR (#32) : la LTV, le payback et la valorisation calculés dessus sont fictifs." },
        { prompt: "La save flow pose une question avant toute offre, et propose la pause sur cause temporelle.", answer: "bon", why: "Comprendre avant d'offrir ; la pause domine la résiliation sur cause temporelle." },
        { prompt: "Un plan annuel vendu à 12× le mensuel, sans remise.", answer: "erreur", why: "#21 : sans incentive (« 2 mois offerts »), l'annuel ne migre personne." },
        { prompt: "Le churn est suivi par cohorte fixe, volontaire et involontaire séparés.", answer: "bon", why: "La seule mesure honnête (M6.3), et la base d'un dossier investisseurs crédible." },
        { prompt: "Pas de campagne win-back : les churners sont oubliés.", answer: "erreur", why: "#30 : 1 réabonnement sur 4 est une réactivation, 80 % réussis sous 90 jours." },
        { prompt: "Le prix a été fixé en capturant 10-30 % de la valeur créée par segment.", answer: "bon", why: "Le value-based pricing (M4.1) : le prix est une propriété du segment." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Le bon remède ──
export function ErrorFix() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Remèdes"
      title="Le bon remède"
      intro="Chaque symptôme renvoie à un levier du livre. Reliez l'erreur à sa correction."
      options={[
        { value: "dunning", label: "Dunning" },
        { value: "cohorte", label: "Cohortes" },
        { value: "ttfv", label: "Time-to-First-Value" },
        { value: "nrr", label: "Montrer le NRR" },
        { value: "referral", label: "Programme referral" },
      ]}
      items={[
        { prompt: "20-40 % du churn vient d'échecs de paiement non traités.", answer: "dunning", why: "Retries intelligents + séquence J0-J+21 : le levier au meilleur ROI (M7.10)." },
        { prompt: "Le churn « global » paraît bon mais les cohortes anciennes fondent.", answer: "cohorte", why: "Seules les courbes par cohorte révèlent le cliff, la pente et le plateau (M6.3)." },
        { prompt: "90 % complètent l'onboarding mais ne reviennent jamais.", answer: "ttfv", why: "Reconstruire en ligne droite vers la première valeur vécue (M5.5)." },
        { prompt: "Le pitch investisseurs n'ouvre pas la conversation.", answer: "nrr", why: "Le NRR est la première pièce du dossier (M8) : il prouve la qualité du produit avec de l'argent." },
        { prompt: "Une base de promoteurs (NPS > 40) sans canal de recommandation.", answer: "referral", why: "Le referral produit la LTV la plus haute de tous les canaux (M5.3)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

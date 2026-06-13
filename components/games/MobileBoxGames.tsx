"use client";

import ClassifyGame from "./ClassifyGame";

// ── In-app vs web ──
export function AppStoreStrategy() {
  return (
    <ClassifyGame
      badge="Mini-jeu · App stores"
      title="In-app ou web ?"
      intro="La commission (15-30 %) contre la friction minimale et la relation. À quel canal correspond chaque affirmation ?"
      options={[
        { value: "inapp", label: "In-app (store)" },
        { value: "web", label: "Web" },
      ]}
      items={[
        { prompt: "Convertit mieux grâce à la friction de paiement minimale (Face ID, compte déjà enregistré).", answer: "inapp", why: "La douleur de payer réduite à son minimum historique explique la sur-performance de conversion in-app." },
        { prompt: "Encaisse 100 % et garde la main sur le dunning, les save flows et l'email.", answer: "web", why: "Le web possède la relation : tout l'arsenal du Module 7 redevient disponible." },
        { prompt: "Prélève une commission de 15 à 30 % et délègue une partie de l'arsenal de rétention.", answer: "inapp", why: "L'abonné store est à moitié votre client : ni son moyen de paiement, ni la main sur le billing." },
        { prompt: "Le canal des offres que le store ne permet pas (bundles, offres de rétention, tarifs spéciaux).", answer: "web", why: "L'hybride dominant : in-app par défaut, web pour ce que le store interdit." },
        { prompt: "Stratégie des apps à petit panier et fort volume, où la conversion prime.", answer: "inapp", why: "Le tout-in-app : la friction minimale maximise le volume converti." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Audit paywall / onboarding mobile ──
export function MobilePaywallAudit() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Paywall mobile"
      title="Bonne pratique mobile ?"
      intro="Sur 6 pouces, l'attention est courte et la désinstallation à un geste. Bonne pratique ou faute ?"
      options={[
        { value: "bon", label: "Bonne pratique" },
        { value: "faute", label: "Faute" },
      ]}
      items={[
        { prompt: "Afficher les écrans de valeur avant toute demande d'inscription.", answer: "bon", why: "La promesse avant le compte : chaque champ de formulaire prématuré perd des utilisateurs." },
        { prompt: "Demander l'autorisation de notification dès l'ouverture de l'app.", answer: "faute", why: "La permission doit être demandée au moment où sa valeur est évidente : refusée, c'est un canal de rétention mort." },
        { prompt: "Un paywall précoce qui vend un essai gratuit (pas un abonnement), trial et fin clairement mentionnés.", answer: "bon", why: "Le paywall mobile précoce ouvre la période qui démontrera la valeur — l'aha moment est déplacé dans le trial." },
        { prompt: "Six plans détaillés sur un seul écran avec un tableau comparatif.", answer: "faute", why: "Le paradoxe du choix frappe deux fois plus fort sur petit écran : un choix par écran, 3-4 puces max." },
        { prompt: "Annuel pré-sélectionné, affiché en équivalent mensuel, confirmation biométrique.", answer: "bon", why: "L'architecture qui convertit : Face ID transforme l'achat en un regard — la friction la plus basse de l'histoire." },
        { prompt: "Un long tutoriel texte à lire avant de pouvoir utiliser l'app.", answer: "faute", why: "Faire faire, pas faire lire : la démonstration interactive bat le tutoriel, surtout quand le TTFV cible est sous 2-3 min." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Le bon levier de rétention box ──
export function BoxRetentionLever() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Box physique"
      title="Le bon levier face à ce signal"
      intro="Le secteur a la chance d'avoir des raisons de churn actionnables. Quel levier déployer ?"
      options={[
        { value: "skip", label: "Skip / cadence plus lente" },
        { value: "perso", label: "Personnalisation" },
        { value: "reduit", label: "Format réduit / box allégée" },
        { value: "dunning", label: "Dunning" },
      ]}
      items={[
        { prompt: "Exit survey : « j'ai trop de produits, mon placard déborde » (box fatigue).", answer: "skip", why: "La pause proactive version matérielle : « passez en bimestriel ». Le skip réduit le churn quand l'alternative est la résiliation." },
        { prompt: "Exit survey : « ce n'est pas mes goûts ».", answer: "perso", why: "Plus la box est personnalisée, plus la rétention est élevée (Stitch Fix) — et le profil affiné devient un lock-in algorithmique." },
        { prompt: "Exit survey : « trop cher pour ce que c'est ».", answer: "reduit", why: "Le format « moins mais mieux » : ajuster la valeur perçue plutôt que perdre l'abonné (le downgrade physique)." },
        { prompt: "Échec de la carte sur le prélèvement récurrent du cycle.", answer: "dunning", why: "Le churn involontaire est massif sur les paiements physiques récurrents : le dunning y est vital, pas optionnel." },
        { prompt: "Un abonné qui skippe trois cycles d'affilée.", answer: "skip", why: "Le skip récurrent est une demande de cadence qui ne dit pas son nom : proposer le bimestriel avant qu'il ne formule la résiliation." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Les variables de design d'une box ──
export function BoxDesign() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Design de box"
      title="Quelle variable de design ?"
      intro="Rattachez chaque décision à la bonne variable de design d'une box."
      options={[
        { value: "skip", label: "Le skip" },
        { value: "cadence", label: "La cadence" },
        { value: "perso", label: "La personnalisation" },
        { value: "logistique", label: "Le coût logistique" },
      ]}
      items={[
        { prompt: "Permettre de sauter un cycle (vacances, frigo plein) sans résilier.", answer: "skip", why: "La pause native du physique : libre et sans friction, budgétée à 10-25 % des cycles." },
        { prompt: "Passer de mensuel à bimestriel en un clic.", answer: "cadence", why: "La variable la plus sous-estimée : la bonne cadence est celle du rythme de consommation réel (mieux vaut la moitié que zéro)." },
        { prompt: "Le questionnaire de style et la boucle de feedback à chaque retour.", answer: "perso", why: "Augmente la valeur de chaque box ET construit le lock-in algorithmique (le profil ne se transporte pas)." },
        { prompt: "Le packaging optimisé au gramme et la densité géographique des abonnés.", answer: "logistique", why: "La marge brute vit à 40-60 % : le transport se paie au poids, le coût de livraison baisse avec la concentration." },
        { prompt: "Les produits en marque propre, à la fois marge et différenciation.", answer: "logistique", why: "Le levier marge du métier (le chemin Dollar Shave Club)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

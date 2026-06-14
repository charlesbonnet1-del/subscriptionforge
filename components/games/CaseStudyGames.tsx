"use client";

import ClassifyGame from "./ClassifyGame";

// ── La décision signature ──
export function SignatureMove() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Case studies"
      title="Quelle entreprise a fait ce choix ?"
      intro="Chaque décision est la signature d'un cas. Reconnaissez-la."
      options={[
        { value: "netflix", label: "Netflix" },
        { value: "spotify", label: "Spotify" },
        { value: "slack", label: "Slack" },
        { value: "amazon", label: "Amazon Prime" },
        { value: "dropbox", label: "Dropbox" },
      ]}
      items={[
        { prompt: "Cannibaliser son propre cœur de métier (le DVD) avant qu'un autre ne le fasse.", answer: "netflix", why: "Le streaming a tué le DVD de Netflix — et c'est pour ça que Netflix a survécu." },
        { prompt: "Un free complet conçu pour battre le piratage, le contrôle réservé au premium.", answer: "spotify", why: "Le free se calibre contre l'alternative gratuite du marché (le piratage), pas contre son propre premium." },
        { prompt: "La limite d'archives à 90 jours : indolore au début, elle grandit avec la dépendance.", answer: "slack", why: "La limite parfaite : sa douleur croît avec la valeur reçue, et c'est l'entreprise qui paie." },
        { prompt: "Un péage prépayé qui fait cesser de comparer : chaque achat ailleurs devient une perte.", answer: "amazon", why: "Le sunk cost transformé en aimant à transactions : l'archétype 3 dans sa forme pure." },
        { prompt: "Couper la publicité, 500 Mo offerts au parrain et au filleul.", answer: "dropbox", why: "Le canon du referral : récompense en nature alignée au produit, boucle intégrée, friction nulle." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Le type de transition / modèle ──
export function CaseModel() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Modèles"
      title="Quel modèle illustre ce cas ?"
      intro="Reliez chaque entreprise au mécanisme du livre qu'elle incarne le mieux."
      options={[
        { value: "transition-franche", label: "Transition franche" },
        { value: "transition-gravite", label: "Transition par gravité" },
        { value: "plg", label: "PLG / collaboration" },
        { value: "bundle", label: "Bundle d'écosystème" },
        { value: "perso", label: "Personnalisation / data" },
      ]}
      items={[
        { prompt: "Adobe Creative Cloud — l'arrêt daté de la licence, datée et assumée.", answer: "transition-franche", why: "La clarté contre l'amorti : le J-curve violent et court, le backlash maximal." },
        { prompt: "Microsoft 365 — la coexistence inclinée jusqu'à rendre l'abonnement évident.", answer: "transition-gravite", why: "Sans révolte, au prix d'années de double complexité : le choix du pouvoir de marché." },
        { prompt: "Figma — chaque participant invité au fichier est acquisition, expansion et lock-in.", answer: "plg", why: "La collaboration n'est pas une fonctionnalité, c'est un modèle économique." },
        { prompt: "Apple One — six services dont aucun n'a besoin d'être le meilleur.", answer: "bundle", why: "Le bundle gagne par la somme, et verrouille le hardware qui verrouille les services." },
        { prompt: "Stitch Fix — chaque retour est une donnée, chaque box meilleure que la précédente.", answer: "perso", why: "Le lock-in algorithmique en version physique — mais qui ne répare pas une économie unitaire contrainte." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── La leçon transversale ──
export function CaseLessonGame() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Leçons"
      title="De quel cas vient cette leçon ?"
      intro="Les vingt cas forment la mémoire du métier. Retrouvez la source de chaque leçon."
      options={[
        { value: "duolingo", label: "Duolingo" },
        { value: "nyt", label: "New York Times" },
        { value: "salesforce", label: "Salesforce" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "copilot", label: "GitHub Copilot" },
      ]}
      items={[
        { prompt: "Le taux de conversion freemium est un produit du travail : 300 tests/trimestre, pas un coup de génie.", answer: "duolingo", why: "De ~3 % à ~9 % en cinq ans par accumulation de gains de 1 à 5 %." },
        { prompt: "Le metered paywall sauve la presse car il convertit la fréquence : il monétise l'habitude.", answer: "nyt", why: "Du compteur fixe au Dynamic Meter : le paywall est un système d'apprentissage." },
        { prompt: "La plateforme est le lock-in terminal : quand tous ont construit sur vous, le churn est une démolition.", answer: "salesforce", why: "L'écosystème de certifiés est une armée de rétention et de vente qu'on ne paie pas." },
        { prompt: "Le même actif vaut 30 € au particulier et 800 € à l'entreprise : la WTP est une propriété du cas d'usage.", answer: "linkedin", why: "La segmentation par intention bat la segmentation par volume." },
        { prompt: "Être le premier abonnement d'une catégorie, c'est en fixer le référentiel de prix.", answer: "copilot", why: "Les 10 $ de Copilot ont ancré le prix mondial de l'assistant IA." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

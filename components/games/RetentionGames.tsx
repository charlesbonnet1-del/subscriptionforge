"use client";

import ClassifyGame from "./ClassifyGame";
import SequenceOrderGame from "./SequenceOrderGame";

// ── Le bon levier de l'arsenal ──
export function RetentionArsenal() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Arsenal"
      title="Le bon levier au bon moment"
      intro="Pour chaque situation, quel dispositif de rétention déployer en priorité ?"
      options={[
        { value: "pause", label: "Pause" },
        { value: "downgrade", label: "Downgrade" },
        { value: "dunning", label: "Dunning" },
        { value: "reparation", label: "Réparation (geste)" },
      ]}
      items={[
        { prompt: "« Je pars en voyage 3 mois et je n'utiliserai pas le service. »", answer: "pause", why: "Cause temporelle : la pause est la réponse reine — elle préserve moyen de paiement, historique et identité." },
        { prompt: "« C'est trop cher pour mon usage actuel. »", answer: "downgrade", why: "Cause prix : downgrade d'abord (préserve l'intégrité tarifaire), avant pause puis discount en dernier." },
        { prompt: "Le paiement a échoué (carte expirée), l'abonné n'a rien décidé.", answer: "dunning", why: "Churn involontaire : retries intelligents + séquence J0-J+21, ton dédramatisé." },
        { prompt: "« J'ai rencontré trois bugs cette semaine, c'est inutilisable. »", answer: "reparation", why: "Friction : résolution immédiate et geste humain — jamais une remise (qui serait insultante)." },
        { prompt: "Renouvellement annuel dans 40 jours, abonné inactif depuis 3 mois.", answer: "pause", why: "Pause proactive : désamorcer la subscription guilt avant qu'elle ne mûrisse en résiliation au renouvellement." },
        { prompt: "Abonné Pro qui n'utilise que les fonctions du Starter depuis des mois.", answer: "downgrade", why: "Downgrade proactif honnête : « votre usage correspond au plan X » — contre-intuitif et redoutablement fidélisant." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Routage de la save flow ──
export function SaveFlowRouter() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Save flow"
      title="Routez chaque raison de départ"
      intro="Dans une save flow, chaque raison déclarée route vers sa réponse. Associez correctement."
      options={[
        { value: "pause", label: "Pause" },
        { value: "downgrade", label: "Downgrade puis pause puis discount" },
        { value: "resolution", label: "Résolution immédiate" },
        { value: "roadmap", label: "Roadmap honnête + recontact" },
        { value: "winback", label: "Laisser partir + win-back armé" },
      ]}
      items={[
        { prompt: "Trop cher / budget.", answer: "downgrade", why: "Downgrade d'abord, puis pause, puis — en dernier — le discount." },
        { prompt: "Besoin temporairement suspendu (voyage, saison, projet fini).", answer: "pause", why: "La pause est la réponse reine des causes temporelles." },
        { prompt: "Problème / bug / insatisfaction.", answer: "resolution", why: "Contact prioritaire, geste — jamais une remise." },
        { prompt: "Il me manque une fonctionnalité.", answer: "roadmap", why: "Information honnête (roadmap réelle) + consentement de recontact." },
        { prompt: "Je passe à un concurrent.", answer: "winback", why: "Laisser partir avec élégance + win-back armé (la lune de miel du concurrent passera)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Faut-il gamifier ? ──
export function GamificationFit() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Gamification"
      title="Faut-il gamifier ?"
      intro="La gamification est une machine à habitude : elle exige un terrain où l'habitude a du sens. Gamifier ou pas ?"
      options={[
        { value: "oui", label: "Gamifier" },
        { value: "non", label: "Ne pas gamifier" },
      ]}
      items={[
        { prompt: "Une app d'apprentissage d'une langue, usage quotidien visé.", answer: "oui", why: "Usage fréquent + progression réelle + posture personnelle : le terrain idéal (cf. Duolingo, streak)." },
        { prompt: "Un CRM utilisé par des commerciaux toute la journée.", answer: "non", why: "Gamifier un outil de travail B2B infantilise l'utilisateur et pollue le travail (sauf la formation à l'outil)." },
        { prompt: "Une app de lecture/méditation grand public.", answer: "oui", why: "Habitude personnelle à construire : streaks, paliers et milestones ont du sens." },
        { prompt: "Un logiciel de déclaration fiscale (2 usages/an).", answer: "non", why: "Usage naturellement épisodique : un streak y serait une absurdité — revenir à la fréquence naturelle du besoin." },
        { prompt: "Une plateforme de fitness avec leaderboards et défis.", answer: "oui", why: "Fréquence + communauté + progression : gamification et appartenance se renforcent (cf. Peloton)." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Qui est win-backable ? ──
export function WinbackEligibility() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Win-back"
      title="Qui est récupérable ?"
      intro="80 % des win-backs réussis ont lieu sous 90 jours — mais seulement sur les bons profils. Récupérable ou perdu ?"
      options={[
        { value: "oui", label: "Win-backable" },
        { value: "non", label: "Perdu (ne pas solliciter)" },
      ]}
      items={[
        { prompt: "Parti à la fin d'une promo, usage soutenu pendant l'abonnement.", answer: "oui", why: "Raison circonstancielle (prix) + relation à la valeur intacte : cible chaude, retour au tarif d'origine." },
        { prompt: "Zombie facturé 120 € au renouvellement, parti avec ressentiment.", answer: "non", why: "La confiance est rompue (« je me suis fait avoir ») : le solliciter est du sel sur la plaie." },
        { prompt: "A essayé un concurrent ; était engagé avant de partir.", answer: "oui", why: "La lune de miel du concurrent passera ; l'ex-engagé est chaud. Périmer les raisons du départ." },
        { prompt: "Jamais activé, parti à M1 après une promo agressive.", answer: "non", why: "Acquisition ratée, pas un churn de valeur : relève du funnel, pas du win-back." },
        { prompt: "Ancien fidèle parti pour un moment de vie (déménagement).", answer: "oui", why: "Circonstance externe, valeur perçue intacte : cible idéale dès que la situation se stabilise." },
        { prompt: "Piégé par une save flow obstructive, avis 1 étoile laissé.", answer: "non", why: "Relation cassée par l'obstruction : la sollicitation rouvre la plaie." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Séquence de dunning ──
export function DunningSequence() {
  return (
    <SequenceOrderGame
      badge="Mini-jeu · Dunning"
      title="Reconstituez la séquence de dunning"
      intro="Cinq emails de récupération de paiement en désordre. Remettez la séquence J0 → J+21 (du haut vers le bas)."
      correct={[
        { id: "j0", when: "J0", title: "Notification immédiate, dédramatisée", role: "« Cela arrive, voici le lien pour mettre à jour en 30 s. » Lien direct sans login = la moitié du taux de récupération." },
        { id: "j3", when: "J+3", title: "Rappel de service (accès maintenu)", role: "On rappelle simplement, en mentionnant que l'accès continue : l'abonné servi règle plus volontiers que l'abonné coupé." },
        { id: "j7", when: "J+7", title: "Rappel avec échéance honnête", role: "« Sans mise à jour d'ici le [date], suspension. » + alternatives (autre moyen de paiement, support)." },
        { id: "j14", when: "J+14", title: "Avant-dernier, multi-canal", role: "In-app et SMS récupèrent ce que l'email n'atteint plus (l'email du moyen de paiement mort est parfois mort aussi)." },
        { id: "j21", when: "J+21", title: "Fin de fenêtre : suspension propre", role: "L'accès se ferme, données et historique conservés (suspension ≠ suppression). Bascule en flux win-back." },
      ]}
    />
  );
}

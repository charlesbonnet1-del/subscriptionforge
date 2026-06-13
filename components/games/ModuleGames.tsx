// Registre des mini-jeux par module. Chaque module a son propre jeu de jeux.

import VocabMatch from "./VocabMatch";
import ArchetypeClassifier from "./ArchetypeClassifier";
import FindTheError from "./FindTheError";
import LtvCalculator from "./LtvCalculator";
import DecisionTree from "./DecisionTree";
import ProfileClassifier from "./ProfileClassifier";
import BiasHunt from "./BiasHunt";
import ABCopy from "./ABCopy";
import GuiltDetector from "./GuiltDetector";
import LifeMomentMatch from "./LifeMomentMatch";

const REGISTRY: Record<string, React.ComponentType[]> = {
  "economie-de-l-abonnement": [VocabMatch, ArchetypeClassifier, FindTheError, LtvCalculator, DecisionTree],
  "psychologie-de-l-abonne": [ProfileClassifier, BiasHunt, ABCopy, GuiltDetector, LifeMomentMatch],
};

export function hasModuleGames(slug: string): boolean {
  return Boolean(REGISTRY[slug]?.length);
}

export default function ModuleGames({ slug }: { slug: string }) {
  const games = REGISTRY[slug] ?? [];
  return (
    <>
      {games.map((Game, i) => (
        <Game key={i} />
      ))}
    </>
  );
}

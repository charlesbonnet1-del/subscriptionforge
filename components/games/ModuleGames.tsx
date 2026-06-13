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
import TierArchitect from "./TierArchitect";
import FreemiumSlider from "./FreemiumSlider";
import TrialSequence from "./TrialSequence";
import MonthlyVsAnnual from "./MonthlyVsAnnual";
import SeasonalCalendar from "./SeasonalCalendar";
import RepricingSimulator from "./RepricingSimulator";
import PppCalculator from "./PppCalculator";
import { PricingPageAudit, RepricingJudgment, BenchmarkMatch } from "./PricingGames";
import FunnelCalculator from "./FunnelCalculator";
import ViralKCalculator from "./ViralKCalculator";
import { ChannelLtvRank, AhaDiagnose, PaywallMatch } from "./FunnelGames";
import CohortDecay from "./CohortDecay";
import { ChurnTaxonomy, RetentionCurveDiagnose, LeadingVsLagging, HealthScoreComponents } from "./ChurnGames";
import { RetentionArsenal, SaveFlowRouter, GamificationFit, WinbackEligibility, DunningSequence } from "./RetentionGames";
import { LockInLegitimacy, LockInFamily, PortabilityTest, LockInPriority, LockInEthicalRisk } from "./LockInGames";

const REGISTRY: Record<string, React.ComponentType[]> = {
  "economie-de-l-abonnement": [VocabMatch, ArchetypeClassifier, FindTheError, LtvCalculator, DecisionTree],
  "psychologie-de-l-abonne": [ProfileClassifier, BiasHunt, ABCopy, GuiltDetector, LifeMomentMatch],
  "design-du-modele": [TierArchitect, FreemiumSlider, TrialSequence, MonthlyVsAnnual, SeasonalCalendar],
  "pricing": [BenchmarkMatch, PricingPageAudit, RepricingJudgment, RepricingSimulator, PppCalculator],
  "funnel-d-abonnement": [FunnelCalculator, ChannelLtvRank, ViralKCalculator, AhaDiagnose, PaywallMatch],
  "anatomie-du-churn": [CohortDecay, ChurnTaxonomy, RetentionCurveDiagnose, LeadingVsLagging, HealthScoreComponents],
  "strategies-de-retention": [GamificationFit, SaveFlowRouter, RetentionArsenal, DunningSequence, WinbackEligibility],
  "switching-costs-lock-in": [LockInLegitimacy, LockInFamily, PortabilityTest, LockInEthicalRisk, LockInPriority],
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

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
import NrrCalculator from "./NrrCalculator";
import { NrrState, ExpansionLever, ExpansionSegmentation, LoyaltyVsWinback } from "./ExpansionGames";
import MrrWaterfall from "./MrrWaterfall";
import { WaterfallDiagnose, CacLtvQuadrant, ForecastRealism, DataToolStage } from "./DataGames";
import NewsletterCalculator from "./NewsletterCalculator";
import { MediaPaywallMatch, ContentFracture, CreatorTierMatch, CreatorScalability } from "./MediaGames";
import { PlgEligibility, UsageBasedViability, SupportVsCs, ChampionVsBuyer, RenewalTimeline } from "./SaasGames";
import BoxEconomics from "./BoxEconomics";
import { AppStoreStrategy, MobilePaywallAudit, BoxRetentionLever, BoxDesign } from "./MobileBoxGames";
import { BillingChoice, DarkPatternSpotter, LoyalVsDark, DarkPatternHarm } from "./StackGames";
import JCurveSimulator from "./JCurveSimulator";
import { TransitionStyle, TransitionPhase, MigrationPrinciples } from "./TransitionGames";
import { SignatureMove, CaseModel, CaseLessonGame } from "./CaseStudyGames";
import { ErrorStage, ErrorAudit, ErrorFix } from "./ErrorGames";

const REGISTRY: Record<string, React.ComponentType[]> = {
  "economie-de-l-abonnement": [VocabMatch, ArchetypeClassifier, FindTheError, LtvCalculator, DecisionTree],
  "psychologie-de-l-abonne": [ProfileClassifier, BiasHunt, ABCopy, GuiltDetector, LifeMomentMatch],
  "design-du-modele": [TierArchitect, FreemiumSlider, TrialSequence, MonthlyVsAnnual, SeasonalCalendar],
  "pricing": [BenchmarkMatch, PricingPageAudit, RepricingJudgment, RepricingSimulator, PppCalculator],
  "funnel-d-abonnement": [FunnelCalculator, ChannelLtvRank, ViralKCalculator, AhaDiagnose, PaywallMatch],
  "anatomie-du-churn": [CohortDecay, ChurnTaxonomy, RetentionCurveDiagnose, LeadingVsLagging, HealthScoreComponents],
  "strategies-de-retention": [GamificationFit, SaveFlowRouter, RetentionArsenal, DunningSequence, WinbackEligibility],
  "switching-costs-lock-in": [LockInLegitimacy, LockInFamily, PortabilityTest, LockInEthicalRisk, LockInPriority],
  "nrr-et-expansion": [NrrCalculator, NrrState, ExpansionLever, ExpansionSegmentation, LoyaltyVsWinback],
  "maitriser-ses-donnees": [MrrWaterfall, WaterfallDiagnose, CacLtvQuadrant, ForecastRealism, DataToolStage],
  "media-newsletters-creators": [NewsletterCalculator, MediaPaywallMatch, ContentFracture, CreatorTierMatch, CreatorScalability],
  "saas-b2b": [PlgEligibility, UsageBasedViability, SupportVsCs, ChampionVsBuyer, RenewalTimeline],
  "mobile-et-abonnements-physiques": [AppStoreStrategy, MobilePaywallAudit, BoxEconomics, BoxDesign, BoxRetentionLever],
  "stack-technique-et-outils": [BillingChoice, DarkPatternSpotter, LoyalVsDark, DarkPatternHarm],
  "transition-vers-l-abonnement": [JCurveSimulator, TransitionStyle, TransitionPhase, MigrationPrinciples],
  "case-studies": [SignatureMove, CaseModel, CaseLessonGame],
  "40-erreurs-classiques": [ErrorStage, ErrorAudit, ErrorFix],
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

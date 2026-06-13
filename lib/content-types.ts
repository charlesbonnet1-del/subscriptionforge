// Modèle de contenu des cours : des blocs structurés rendus par <Fiche />.
// Le texte accepte un markdown léger : **gras**, *italique*, `code`.

export type WidgetName =
  | "ltv-calculator"
  | "archetype-explorer"
  | "mrr-movement"
  | "decision-tree"
  | "profile-explorer"
  | "monthly-vs-annual"
  | "repricing-simulator"
  | "ppp-calculator"
  | "funnel-calculator"
  | "viral-k-calculator"
  | "cohort-decay"
  | "nrr-calculator"
  | "mrr-waterfall";

export type Block =
  | { type: "lead"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; title?: string; text: string; tone?: "fire" | "info" | "warn" }
  | { type: "pitfall"; text: string }
  | { type: "keynumbers"; items: { value: string; label: string }[] }
  | { type: "formula"; expr: string; note?: string }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "compare"; left: ComparePane; right: ComparePane }
  | { type: "timeline"; items: { period: string; jalon: string; legacy: string }[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "widget"; name: WidgetName };

export type ComparePane = { title: string; tone?: "neutral" | "fire"; points: string[] };

export type Lesson = {
  slug: string; // ex. "rupture-de-paradigme"
  index: number; // 1..n
  ref: string; // ex. "1.1"
  title: string;
  subtitle: string;
  minutes: number;
  blocks: Block[];
  takeaways: string[]; // à retenir
};

export type CourseContent = {
  moduleSlug: string;
  lessons: Lesson[];
  hasGames: boolean;
  hasQuiz: boolean;
};

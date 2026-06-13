import type { Metadata } from "next";
import ModuleCard from "@/components/ModuleCard";
import { modulesByPart } from "@/data/modules";

export const metadata: Metadata = {
  title: "Les 16 modules",
  description:
    "Le parcours complet de SubscriptionForge : fondations, design, acquisition, rétention, lock-in, expansion, analytics, contextes, stack, transitions et diagnostic.",
};

export default function ModulesPage() {
  const groups = modulesByPart();
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Le parcours complet</p>
          <h1>Les 16 modules</h1>
          <p>
            Du « pourquoi tout change » aux 40 erreurs classiques. Chaque module
            est autonome mais s'inscrit dans une progression logique. Suivez
            l'ordre, ou sautez là où le bât blesse.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          {groups.map(({ part, modules }) => (
            <div className="part-block" key={part.id}>
              <div className="part-label">
                <span className="roman">{part.roman}</span>
                <h3>{part.title}</h3>
                <span className="theme">{part.theme}</span>
              </div>
              <div className="modules-grid">
                {modules.map((m) => (
                  <ModuleCard key={m.slug} module={m} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

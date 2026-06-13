import Link from "next/link";
import ModuleCard from "@/components/ModuleCard";
import { modulesByPart, MODULES } from "@/data/modules";
import { GLOSSARY } from "@/data/glossary";

export default function HomePage() {
  const groups = modulesByPart();
  const totalLessons = MODULES.reduce((n, m) => n + m.lessons, 0);

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">
          <p className="eyebrow">La plateforme de la Subscription Economy</p>
          <h1 className="hero-title">
            Apprenez à penser en <em>opérateur</em>, pas en vendeur.
          </h1>
          <p className="hero-sub">
            Un vendeur optimise un taux de conversion. Un opérateur optimise une
            courbe de rétention, un revenu récurrent, une valeur vie client.
            SubscriptionForge installe ce regard, module après module — du churn
            au pricing, de l'onboarding au lock-in.
          </p>
          <div className="hero-actions">
            <Link href="/modules" className="cta-fire-button">
              Forger mon premier module
            </Link>
            <Link href="/diagnostic" className="btn-ghost">
              Diagnostiquer mon business en 10 min
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">16</span>
              <span className="label">Modules</span>
            </div>
            <div className="hero-stat">
              <span className="num">{totalLessons}</span>
              <span className="label">Cours</span>
            </div>
            <div className="hero-stat">
              <span className="num">20</span>
              <span className="label">Case studies</span>
            </div>
            <div className="hero-stat">
              <span className="num">{GLOSSARY.length}+</span>
              <span className="label">Termes au glossaire</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="flame-divider" />

      {/* PROMESSE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">La promesse</p>
            <h2>
              Pas une formation de plus. Une œuvre de référence, jusqu'au niveau
              opérationnel.
            </h2>
            <p>
              La formule exacte, la séquence d'emails complète, le seuil chiffré,
              le piège documenté. On n'apprend pas l'abonnement dans l'abstrait :
              on le dissèque sur Netflix, Adobe, Duolingo, le New York Times,
              Slack et les autres.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES PAR PARTIE */}
      <section className="section" style={{ paddingTop: 0 }} id="modules">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Le parcours</p>
            <h2>Dix parties qui suivent le cycle de vie d'un abonnement</h2>
            <p>
              Des fondations à l'expansion, chaque module se termine par des
              mini-jeux et un quiz noté sur 20. Tout est ouvert pour le moment.
            </p>
          </div>

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

      {/* CTA FINAL */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container text-center">
          <p className="eyebrow" style={{ textAlign: "center" }}>
            Prêt à forger ?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", margin: "0 0 24px" }}>
            Commencez par où ça compte vraiment pour vous.
          </h2>
          <div
            className="hero-actions"
            style={{ justifyContent: "center" }}
          >
            <Link href="/diagnostic" className="cta-fire-button">
              Lancer le diagnostic
            </Link>
            <Link href="/glossaire" className="btn-ghost">
              Explorer le glossaire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

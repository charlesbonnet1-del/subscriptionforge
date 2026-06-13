import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULES, getModule, getPart } from "@/data/modules";
import { getCourse } from "@/data/courses";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) return { title: "Module introuvable" };
  return {
    title: `Module ${m.number} — ${m.title}`,
    description: m.description,
  };
}

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) notFound();
  const part = getPart(m.partId);
  const course = getCourse(slug);

  return (
    <>
      <section className="module-hero">
        <div className="container">
          <Link href="/modules" className="muted" style={{ fontSize: "0.85rem", textDecoration: "none" }}>
            ← Tous les modules
          </Link>
          <div style={{ marginTop: 18 }}>
            <span className="num-badge">
              {part?.roman} · Module {m.number}
            </span>
            <h1>{m.title}</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--fire-spark)", fontStyle: "italic", margin: "0 0 16px" }}>
              {m.tagline}
            </p>
            <p style={{ maxWidth: "62ch", fontSize: "1.05rem" }}>{m.description}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <span className="badge badge-fire">{m.lessons} cours</span>
              <span className="badge">{m.minutes} min</span>
              <span className="badge">Mini-jeux + quiz /20</span>
              <span className="badge badge-fire">Accès ouvert</span>
            </div>
            {course && (
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <Link href={`/modules/${slug}/${course.lessons[0].slug}`} className="cta-fire-button">
                  Commencer le cours 1
                </Link>
                <Link href={`/modules/${slug}/quiz`} className="btn-ghost">
                  Passer directement au quiz
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <p className="eyebrow">Ce que vous saurez faire</p>
          <div className="outcomes">
            {m.outcomes.map((o) => (
              <div className="outcome" key={o}>
                <span className="tick">✦</span>
                <span>{o}</span>
              </div>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 56 }}>
            <p className="eyebrow">Le contenu</p>
            <h2>{course ? `${course.lessons.length} cours interactifs` : `${m.lessons} cours interactifs`}</h2>
            <p>
              {course
                ? "Fiches engageantes, éléments interactifs, mini-jeux pédagogiques et un quiz noté sur 20."
                : "Le contenu détaillé de ce module est en cours de forge."}
            </p>
          </div>

          {course ? (
            <div className="lesson-list">
              {course.lessons.map((l) => (
                <Link className="lesson-row is-link" href={`/modules/${slug}/${l.slug}`} key={l.slug}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span className="idx">{l.ref}</span>
                    <span>
                      <strong style={{ display: "block", fontFamily: "var(--font-sans)" }}>{l.title}</strong>
                      <span className="muted" style={{ fontSize: "0.85rem" }}>{l.subtitle}</span>
                    </span>
                  </span>
                  <span className="badge badge-fire">{l.minutes} min →</span>
                </Link>
              ))}
              {course.hasGames && (
                <Link className="lesson-row is-link" href={`/modules/${slug}/jeux`} style={{ borderStyle: "dashed" }}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span className="idx">★</span>
                    <span><strong style={{ fontFamily: "var(--font-sans)" }}>Mini-jeux pédagogiques</strong></span>
                  </span>
                  <span className="badge badge-fire">Jouer →</span>
                </Link>
              )}
              {course.hasQuiz && (
                <Link className="lesson-row is-link" href={`/modules/${slug}/quiz`} style={{ borderStyle: "dashed" }}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span className="idx">✓</span>
                    <span><strong style={{ fontFamily: "var(--font-sans)" }}>Quiz noté sur 20</strong></span>
                  </span>
                  <span className="badge badge-fire">Évaluer →</span>
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="lesson-list">
                {Array.from({ length: m.lessons }, (_, i) => i + 1).map((n) => (
                  <div className="lesson-row" key={n}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span className="idx">{String(n).padStart(2, "0")}</span>
                      <span>Cours {n}</span>
                    </span>
                    <span className="badge badge-soon">Bientôt</span>
                  </div>
                ))}
              </div>
              <div className="callout" style={{ marginTop: 32 }}>
                <strong>En construction.</strong> Le contenu de ce module (cours, fiches, vidéos, mini-jeux et quiz) sera publié prochainement.
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

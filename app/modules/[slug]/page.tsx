import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULES, getModule, getPart } from "@/data/modules";

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

  // Le contenu détaillé des cours sera ajouté module par module.
  const lessons = Array.from({ length: m.lessons }, (_, i) => i + 1);

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
            <h2>{m.lessons} cours interactifs</h2>
            <p>
              Fiches engageantes, éléments interactifs, vidéos, mini-jeux
              pédagogiques et un quiz noté sur 20. Le contenu détaillé de ce
              module est en cours de forge.
            </p>
          </div>

          <div className="lesson-list">
            {lessons.map((n) => (
              <div className="lesson-row" key={n}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span className="idx">{String(n).padStart(2, "0")}</span>
                  <span>Cours {n}</span>
                </span>
                <span className="badge badge-soon">Bientôt</span>
              </div>
            ))}
            <div className="lesson-row" style={{ borderStyle: "dashed" }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="idx">★</span>
                <span>Mini-jeux + Quiz noté sur 20</span>
              </span>
              <span className="badge badge-soon">Bientôt</span>
            </div>
          </div>

          <div className="callout" style={{ marginTop: 32 }}>
            <strong>En construction.</strong> La plateforme et son socle sont en
            place. Le contenu de ce module (cours, fiches, vidéos, mini-jeux et
            quiz) sera publié prochainement.
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { ModuleMeta } from "@/data/modules";

export default function ModuleCard({ module: m }: { module: ModuleMeta }) {
  return (
    <Link href={`/modules/${m.slug}`} className="module-card">
      <div className="module-meta">
        <span className="module-number">Module {m.number}</span>
        <span>
          {m.lessons} cours · {m.minutes} min
        </span>
      </div>
      <h3>{m.title}</h3>
      <p className="tagline">{m.tagline}</p>
      <p>{m.description}</p>
      <div className="module-foot">
        <span className="module-link">Forger ce module →</span>
        <span className="badge badge-fire">Ouvert</span>
      </div>
    </Link>
  );
}

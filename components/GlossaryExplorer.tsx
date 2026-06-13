"use client";

import { useMemo, useState } from "react";
import { GLOSSARY, CATEGORIES } from "@/data/glossary";

function normalize(s: string) {
  // Retire les accents pour une recherche tolérante (combining marks U+0300–U+036F).
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function GlossaryExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [acronymsOnly, setAcronymsOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return GLOSSARY.filter((e) => {
      if (category && e.category !== category) return false;
      if (acronymsOnly && !e.acronym) return false;
      if (!q) return true;
      return (
        normalize(e.term).includes(q) ||
        normalize(e.definition).includes(q) ||
        (e.acronym ? normalize(e.acronym).includes(q) : false)
      );
    }).sort((a, b) => a.term.localeCompare(b.term, "fr"));
  }, [query, category, acronymsOnly]);

  return (
    <>
      <div className="glossary-controls">
        <input
          className="search-input"
          type="search"
          placeholder="Rechercher un terme, un sigle, une définition…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Rechercher dans le glossaire"
        />
        <button
          className={`chip ${acronymsOnly ? "active" : ""}`}
          onClick={() => setAcronymsOnly((v) => !v)}
        >
          Acronymes uniquement
        </button>
      </div>

      <div className="chip-row" style={{ marginTop: 12 }}>
        <button
          className={`chip ${category === null ? "active" : ""}`}
          onClick={() => setCategory(null)}
        >
          Toutes
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`chip ${category === c ? "active" : ""}`}
            onClick={() => setCategory((cur) => (cur === c ? null : c))}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="count-line">
        {filtered.length} terme{filtered.length > 1 ? "s" : ""}
        {category ? ` · ${category}` : ""}
        {acronymsOnly ? " · acronymes" : ""}
      </p>

      <div className="glossary-grid">
        {filtered.map((e) => (
          <article className="glossary-card" key={e.term}>
            <h3 className="glossary-term">{e.term}</h3>
            {e.acronym && <div className="glossary-acronym">{e.acronym}</div>}
            <p className="glossary-def">{e.definition}</p>
            <div className="glossary-tags">
              <span className="badge badge-fire">{e.category}</span>
              {e.modules.map((mod) => (
                <span className="badge" key={mod}>
                  {mod}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="muted" style={{ marginTop: 40 }}>
          Aucun terme ne correspond. Essayez un autre mot-clé.
        </p>
      )}
    </>
  );
}

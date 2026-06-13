"use client";

import { useState } from "react";
import { MODULES } from "@/data/modules";

type UploadResult =
  | { ok: true; configured: boolean; message?: string; provider?: string; assetId?: string }
  | { ok: false; error: string };

export default function AdminConsole() {
  const [moduleSlug, setModuleSlug] = useState(MODULES[0].slug);
  const [lesson, setLesson] = useState("1");
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);

  const selected = MODULES.find((m) => m.slug === moduleSlug)!;
  const lessonOptions = Array.from({ length: selected.lessons }, (_, i) => String(i + 1));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleSlug, lesson, title }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResult({ ok: false, error: data.error ?? "Erreur inconnue." });
      } else {
        setResult({ ok: true, ...data });
      }
    } catch {
      setResult({ ok: false, error: "Requête échouée. Réessayez." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="panel">
      <h3>Uploader une vidéo de cours</h3>
      <p style={{ fontSize: "0.92rem" }}>
        Associez une vidéo à un cours précis. Le fichier est poussé directement
        chez le fournisseur de streaming (jamais stocké en clair), puis servi en
        HLS derrière un token signé à expiration courte.
      </p>

      <form onSubmit={submit} style={{ marginTop: 20 }}>
        <div className="field">
          <label htmlFor="module">Module cible</label>
          <select
            id="module"
            value={moduleSlug}
            onChange={(e) => {
              setModuleSlug(e.target.value);
              setLesson("1");
            }}
          >
            {MODULES.map((m) => (
              <option key={m.slug} value={m.slug}>
                Module {m.number} — {m.title}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="lesson">Cours</label>
          <select id="lesson" value={lesson} onChange={(e) => setLesson(e.target.value)}>
            {lessonOptions.map((n) => (
              <option key={n} value={n}>
                Cours {n}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="title">Titre de la vidéo</label>
          <input
            id="title"
            type="text"
            placeholder="Ex. : Pourquoi la bourse paie plus cher un euro d'abonnement"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="dropzone" style={{ marginBottom: 18 }}>
          Glissez-déposez votre fichier vidéo ici
          <br />
          <span style={{ fontSize: "0.82rem" }}>
            (zone d'upload direct — active une fois le fournisseur configuré)
          </span>
        </div>

        <button className="cta-fire-button" type="submit" disabled={busy}>
          {busy ? "Préparation…" : "Préparer l'upload sécurisé"}
        </button>
      </form>

      {result && (
        <div
          className="callout"
          style={{
            marginTop: 22,
            borderLeftColor: result.ok ? "var(--fire-core)" : "var(--danger)",
          }}
        >
          {result.ok ? (
            result.configured ? (
              <>
                <strong>Upload prêt.</strong> Fournisseur :{" "}
                {result.provider}. Asset : <code>{result.assetId}</code>. Poussez
                le fichier vers l'URL signée renvoyée par l'API.
              </>
            ) : (
              <>
                <strong>Architecture prête, fournisseur non configuré.</strong>{" "}
                {result.message}
              </>
            )
          ) : (
            <>
              <strong>Erreur.</strong> {result.error}
            </>
          )}
        </div>
      )}
    </div>
  );
}

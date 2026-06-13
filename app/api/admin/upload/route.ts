import { NextResponse } from "next/server";
import { getProvider, isVideoConfigured } from "@/lib/video";
import { getModule } from "@/data/modules";

// Crée une URL d'upload direct vers le fournisseur vidéo.
// Le fichier ne transite JAMAIS par notre serveur : le navigateur pousse
// directement chez le fournisseur via l'URL signée renvoyée ici.
//
// TODO (sécurité back office) : protéger cette route par une session admin
// (Supabase Auth + rôle "admin") avant la mise en production.
export async function POST(req: Request) {
  let body: { moduleSlug?: string; lesson?: string; title?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const { moduleSlug, lesson, title } = body;
  if (!moduleSlug || !title) {
    return NextResponse.json(
      { error: "moduleSlug et title sont requis." },
      { status: 400 }
    );
  }

  const mod = getModule(moduleSlug);
  if (!mod) {
    return NextResponse.json({ error: "Module introuvable." }, { status: 404 });
  }

  if (!isVideoConfigured()) {
    return NextResponse.json(
      {
        configured: false,
        message:
          "Aucun fournisseur vidéo configuré. Définissez VIDEO_PROVIDER (mux | cloudflare | bunny) et ses clés pour activer l'upload sécurisé. L'architecture est prête.",
      },
      { status: 200 }
    );
  }

  const provider = getProvider();
  const courseRef = `${moduleSlug}:${lesson ?? "intro"}`;
  const upload = await provider.createDirectUpload({ courseRef, title });

  return NextResponse.json({
    configured: true,
    provider: upload.provider,
    assetId: upload.assetId,
    uploadUrl: upload.uploadUrl,
    courseRef,
  });
}

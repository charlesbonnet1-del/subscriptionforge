import { NextResponse } from "next/server";
import { getProvider, assertEntitlement, isVideoConfigured } from "@/lib/video";

// Émet un ticket de lecture signé à courte durée pour une vidéo de cours.
// C'est ICI que se joue la protection : aucun ticket sans abonnement actif.
export async function POST(req: Request) {
  let body: { assetId?: string; courseRef?: string; viewerId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps invalide." }, { status: 400 });
  }

  const { assetId, courseRef, viewerId = "anon" } = body;
  if (!assetId || !courseRef) {
    return NextResponse.json({ error: "assetId et courseRef requis." }, { status: 400 });
  }

  // Garde d'accès : ouverte au lancement, branchée sur l'abonnement ensuite.
  const allowed = await assertEntitlement(viewerId, courseRef);
  if (!allowed) {
    return NextResponse.json({ error: "Abonnement requis." }, { status: 402 });
  }

  if (!isVideoConfigured()) {
    return NextResponse.json(
      { configured: false, message: "Fournisseur vidéo non configuré." },
      { status: 200 }
    );
  }

  const ticket = await getProvider().createPlaybackTicket({
    assetId,
    viewerId,
    ttlSeconds: 300,
  });

  return NextResponse.json({ configured: true, ...ticket });
}

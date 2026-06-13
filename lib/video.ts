// ============================================================
//  Abstraction de fournisseur vidéo — protection robuste derrière paywall
// ============================================================
//
//  POURQUOI une abstraction ?
//  Un simple <video src="https://.../film.mp4"> est INDÉFENDABLE : l'URL se
//  partage, le fichier se télécharge (clic droit, devtools, yt-dlp). La seule
//  protection robuste passe par un fournisseur de streaming qui sert du HLS
//  segmenté derrière un TOKEN SIGNÉ à expiration courte :
//
//   1. La vidéo n'existe jamais comme un fichier MP4 unique téléchargeable :
//      elle est découpée en segments (.ts/.m4s) listés dans un manifest .m3u8.
//   2. Chaque lecture exige un playback token (JWT) signé côté serveur, lié à
//      l'utilisateur, expirant en quelques minutes. Une URL « envoyée à un ami »
//      est morte avant d'arriver.
//   3. Le token n'est émis QUE si la requête serveur confirme un abonnement
//      actif (voir `assertEntitlement` plus bas — branché sur Supabase + Stripe).
//   4. Option : DRM (Widevine/FairPlay/PlayReady) et watermark dynamique au
//      pseudo de l'abonné pour dissuader la capture d'écran.
//
//  Le choix du fournisseur est différé (décision utilisateur). Cette couche
//  permet d'en brancher un sans toucher au reste du code : il suffit
//  d'implémenter `VideoProvider` et de l'enregistrer dans `getProvider()`.
//
//  Fournisseurs cibles : Mux (recommandé, signed playback JWT), Cloudflare
//  Stream (signed URL tokens), Bunny Stream (token auth + referrer lock).
// ============================================================

export type ProviderName = "mux" | "cloudflare" | "bunny" | "stub";

export type DirectUpload = {
  uploadUrl: string; // URL d'upload direct (le navigateur pousse le fichier ici)
  assetId: string; // identifiant interne de l'asset chez le fournisseur
  provider: ProviderName;
};

export type PlaybackTicket = {
  // Tout ce qu'il faut au lecteur HLS, et RIEN de réutilisable longtemps.
  playbackId: string;
  hlsUrl: string; // manifest .m3u8 (souvent déjà tokenisé)
  token?: string; // JWT signé, expiration courte
  expiresAt: number; // epoch seconds
  provider: ProviderName;
};

export interface VideoProvider {
  name: ProviderName;
  /** Crée une URL d'upload direct ; le fichier ne transite jamais par nos serveurs. */
  createDirectUpload(input: { courseRef: string; title: string }): Promise<DirectUpload>;
  /** Émet un ticket de lecture signé à courte durée pour un abonné autorisé. */
  createPlaybackTicket(input: { assetId: string; viewerId: string; ttlSeconds?: number }): Promise<PlaybackTicket>;
}

// ------------------------------------------------------------
//  Implémentation « stub » : aucune clé requise, sert de placeholder sûr.
//  Elle NE sert AUCUNE vidéo réelle — elle documente le contrat et permet de
//  développer le back office et le lecteur sans fournisseur configuré.
// ------------------------------------------------------------
function createStubProvider(): VideoProvider {
  return {
    name: "stub",
    async createDirectUpload() {
      return {
        uploadUrl: "",
        assetId: `stub_${Date.now()}`,
        provider: "stub",
      };
    },
    async createPlaybackTicket({ assetId, ttlSeconds = 300 }) {
      return {
        playbackId: assetId,
        hlsUrl: "",
        expiresAt: Math.floor(Date.now() / 1000) + ttlSeconds,
        provider: "stub",
      };
    },
  };
}

// ------------------------------------------------------------
//  Sélection du fournisseur via variable d'environnement.
//  Quand vous choisirez Mux/Cloudflare/Bunny, ajoutez l'implémentation
//  correspondante et retournez-la ici.
// ------------------------------------------------------------
export function getProvider(): VideoProvider {
  const name = (process.env.VIDEO_PROVIDER ?? "stub").toLowerCase() as ProviderName;
  switch (name) {
    // case "mux": return muxProvider();          // TODO: signed playback JWT (RS256)
    // case "cloudflare": return cloudflareProvider(); // TODO: signed URL tokens
    // case "bunny": return bunnyProvider();       // TODO: token auth + referrer lock
    default:
      return createStubProvider();
  }
}

export function isVideoConfigured(): boolean {
  return getProvider().name !== "stub";
}

// ------------------------------------------------------------
//  Garde d'accès (entitlement). Au lancement, tout est OUVERT.
//  Quand le paywall arrivera, cette fonction vérifiera l'abonnement actif
//  (Supabase + Stripe) AVANT toute émission de ticket de lecture.
// ------------------------------------------------------------
export async function assertEntitlement(_viewerId: string, _courseRef: string): Promise<boolean> {
  // Phase « tout ouvert » : on autorise. À remplacer par la vérif d'abonnement.
  // return await hasActiveSubscription(viewerId);
  return true;
}

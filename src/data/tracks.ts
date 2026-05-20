export interface Track {
  /** Display title shown under the cover */
  title: string;
  /** ISO date string, e.g. '2024-09-13'. Used for sort + display */
  releaseDate: string;
  /** Spotify track ID (the bit after /track/ in the URL). Set to 'PLACEHOLDER' if not on Spotify yet. */
  spotifyId: string;
  /** Optional: local audio file path in public/audio/ — used when no real spotifyId, or as a fallback */
  audioSrc?: string;
  /** Optional: cover art path. If omitted, a gradient placeholder is rendered until you add art. */
  cover?: string;
  /** Optional: tagline / short note */
  note?: string;
}

/**
 * Spotify track IDs scraped from open.spotify.com/embed/artist/0l1iVFMMyljzebyWCPLgHV (top-10) on 2026-05-20.
 * Release dates are approximate — update with real dates from Spotify for proper sort order.
 *
 * To find a Spotify track ID:
 *   open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp  →  spotifyId: '3n3Ppam7vgaVa1iaRUc9Lp'
 */
export const tracks: Track[] = [
  // ── Local / unreleased (dropped as MP3s, not on Spotify in the top-10) ──
  { title: 'Broken Hearts', releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Broken Hearts - Psychosassquatch.mp3', note: 'unreleased / local preview' },
  { title: 'Greenmoon',     releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Greenmoon - Psychosassquatch.mp3',     note: 'unreleased / local preview' },
  { title: 'Magnet Rose',   releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Magnet Rose - Psychosassquatch.mp3',   note: 'unreleased / local preview' },
  { title: 'Chaos',         releaseDate: '2023-10-15', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Chaos - Psychosassquatch.mp3',         note: 'released on Spotify in 2023 — update spotifyId when you find the track URL' },

  // ── Spotify top-10 (real track IDs, embeddable) ─────────────────────────
  { title: 'Daydreaming',      releaseDate: '2024-09-01', spotifyId: '1tTr5XpvKeqSSuAOfRI7qf' },
  { title: 'Next To You',      releaseDate: '2024-08-01', spotifyId: '4X7q3PWGqfuLAeErDqgAmy', audioSrc: '/audio/Next To You - Psychosassquatch.mp3' },
  { title: 'Away',             releaseDate: '2024-07-01', spotifyId: '20BQEUVOj66ZK5BwYE0zvl' },
  { title: 'Moonlight',        releaseDate: '2024-06-01', spotifyId: '2cZOqLlvyQ9kVqmc9IXlgT' },
  { title: 'Fear',             releaseDate: '2024-05-01', spotifyId: '31keKSdzmeEYMmlEf1r4CB' },
  { title: 'Canvas of life',   releaseDate: '2024-04-01', spotifyId: '3dH05uiJ3WlwCpK0wxivGr' },
  { title: 'Dr.Gepetto',       releaseDate: '2024-03-01', spotifyId: '2TztokkSlmRU9p2invQw6L' },
  { title: 'More Than Friends',releaseDate: '2024-02-01', spotifyId: '2F4yabQd99ywPQsyfi2HuK' },
  { title: 'Bonne Nuit',       releaseDate: '2024-01-01', spotifyId: '2PJspp4VporyYlTp1BwLEn' },
  { title: 'Oni',              releaseDate: '2023-12-01', spotifyId: '5lZc6mJ1V6yCogukAgd0cb', audioSrc: '/audio/Oni - Psychosassquatch.mp3' },
];

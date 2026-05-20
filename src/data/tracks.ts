export interface Track {
  /** Display title shown under the cover */
  title: string;
  /** ISO date string, e.g. '2024-09-13'. Used for sort + display */
  releaseDate: string;
  /** Spotify track ID (the bit after /track/ in the URL) */
  spotifyId: string;
  /** Optional: local audio file path in public/audio/ — used as fallback before Spotify ID is set */
  audioSrc?: string;
  /** Optional: cover art path. Defaults to Spotify's CDN-pulled art via the embed if omitted */
  cover?: string;
  /** Optional: tagline / short note shown on hover */
  note?: string;
}

/**
 * To find a Spotify track ID:
 *   open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp  →  spotifyId: '3n3Ppam7vgaVa1iaRUc9Lp'
 */
export const tracks: Track[] = [
  { title: 'Broken Hearts', releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Broken Hearts - Psychosassquatch.mp3' },
  { title: 'Chaos',         releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Chaos - Psychosassquatch.mp3' },
  { title: 'Greenmoon',     releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Greenmoon - Psychosassquatch.mp3' },
  { title: 'Magnet Rose',   releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Magnet Rose - Psychosassquatch.mp3' },
  { title: 'Next To You',   releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Next To You - Psychosassquatch.mp3' },
  { title: 'Oni',           releaseDate: '2025-05-20', spotifyId: 'PLACEHOLDER', audioSrc: '/audio/Oni - Psychosassquatch.mp3' },
];

export interface Track {
  /** Display title shown under the cover */
  title: string;
  /** ISO date string, e.g. '2024-09-13'. Used for sort + display */
  releaseDate: string;
  /** Spotify track ID (the bit after /track/ in the URL) */
  spotifyId: string;
  /** Optional: cover art path. Defaults to Spotify's CDN-pulled art via the embed if omitted */
  cover?: string;
  /** Optional: tagline / short note shown on hover */
  note?: string;
}

/**
 * Placeholder tracks — replace with real Spotify track IDs.
 * To find a track ID:
 *   open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp  →  spotifyId: '3n3Ppam7vgaVa1iaRUc9Lp'
 */
export const tracks: Track[] = [
  { title: 'Untitled #1', releaseDate: '2024-09-13', spotifyId: 'PLACEHOLDER_1', note: 'placeholder — replace with real spotify id' },
  { title: 'Untitled #2', releaseDate: '2024-06-21', spotifyId: 'PLACEHOLDER_2' },
  { title: 'Untitled #3', releaseDate: '2024-03-08', spotifyId: 'PLACEHOLDER_3' },
  { title: 'Untitled #4', releaseDate: '2023-11-17', spotifyId: 'PLACEHOLDER_4' },
  { title: 'Untitled #5', releaseDate: '2023-07-04', spotifyId: 'PLACEHOLDER_5' },
  { title: 'Untitled #6', releaseDate: '2022-10-31', spotifyId: 'PLACEHOLDER_6' },
];

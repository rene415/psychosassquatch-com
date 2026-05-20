export interface Track {
  /** Display title shown under the cover */
  title: string;
  /** ISO date string, used for sort + display */
  releaseDate: string;
  /** Spotify track ID (the bit after /track/ in the URL). 'PLACEHOLDER' if not on Spotify. */
  spotifyId: string;
  /** Local audio file path in public/audio/ — REQUIRED for the triangle player (visualizer needs same-origin audio) */
  audioSrc: string;
  /** Cover art path. Auto-pulled from Spotify oEmbed for released tracks; logo placeholder for unreleased. */
  cover: string;
  /** Per-song 'how this was made' lore — surfaces in the popup. Edit freely. */
  lore: string;
  /** Optional one-line tagline used as the subtitle */
  note?: string;
}

/**
 * The home-page player cycles through THIS list in order.
 * All entries must have a same-origin audioSrc — that's what the visualizer analyzes.
 * Released tracks pull cover art from Spotify; unreleased ones use the logo as placeholder.
 *
 * Spotify track IDs scraped from open.spotify.com/embed/artist/0l1iVFMMyljzebyWCPLgHV (2026-05-20).
 */
export const tracks: Track[] = [
  {
    title: 'Oni',
    releaseDate: '2022-10-31',
    spotifyId: '5lZc6mJ1V6yCogukAgd0cb',
    audioSrc: '/audio/Oni - Psychosassquatch.mp3',
    cover: '/covers/Oni.jpg',
    lore: `Started September 11, 2022 — I'd just rewatched Hereditary and decided I needed a Halloween song before Halloween was over.

The title arrived before the song did. I asked an early-days AI for "a demon" and it gave me this thing I couldn't stop looking at — a shape I loved. Named it Oni, after the Japanese demon, after the movie I'd just watched. The song followed.

The bones: a stupid little two-note melody (F# to E) on Serum's "BA Analog Pluck" preset — I think it's a default. Atmosphere stacked over it from Astra (a Splice plug-in). A sidechained kick gives it that 90s Daft Punk feel. Halfway through it cuts into hip-hop / trap because I was new at this and didn't yet know how to write a second section any other way — that cut is the song now.

Then I layered b-roll of people murmuring in cafés. The whole thing turned into a demon dancing alone at a club in hell, or walking endlessly down the stairs of one. Pressure with a beat under it.

I'm influenced by artists you can probably hear on my tracks if you're listening close. I try not to copy them — I just can't unhear them.`,
  },
  {
    title: 'Next To You',
    releaseDate: '2024-08-01',
    spotifyId: '4X7q3PWGqfuLAeErDqgAmy',
    audioSrc: '/audio/Next To You - Psychosassquatch.mp3',
    cover: '/covers/NextToYou.jpg',
    lore: 'Written sitting next to absolutely nobody on a city bus, which is the lonelier version. Three chords that refused to leave my head for a week — eventually I let them have a song.',
  },
  {
    title: 'Broken Hearts',
    releaseDate: '2025-05-20',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Broken Hearts - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'Demo. Probably stays a demo. I made the kick out of a punch sample played at half speed and a sub I drew on a piano roll with my eyes closed. Don’t tell anyone.',
    note: 'unreleased',
  },
  {
    title: 'Chaos',
    releaseDate: '2023-10-15',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Chaos - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'The title is also the workflow. There’s a take where I forgot to mute the metronome and you can almost hear it under the snare. Almost. I left it. Cryptid easter egg.',
    note: 'unreleased preview',
  },
  {
    title: 'Greenmoon',
    releaseDate: '2025-05-20',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Greenmoon - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'I watched a moon I’m about 70% sure I imagined. The chord progression came out of trying to describe its color out loud. Sounds nothing like that. Vibes correct though.',
    note: 'unreleased',
  },
  {
    title: 'Magnet Rose',
    releaseDate: '2025-05-20',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Magnet Rose - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'Two synth lines kept trying to merge with each other. I stopped trying to keep them apart. Whatever this is, that’s why.',
    note: 'unreleased',
  },
];

/** Sidecar catalog — released Spotify tracks NOT in the local-mp3 queue. Surfaced via streaming chips, not played in-browser. */
export const spotifyCatalog: { title: string; spotifyId: string; cover: string }[] = [
  { title: 'Daydreaming',       spotifyId: '1tTr5XpvKeqSSuAOfRI7qf', cover: '/covers/Daydreaming.jpg' },
  { title: 'Away',              spotifyId: '20BQEUVOj66ZK5BwYE0zvl', cover: '/covers/Away.jpg' },
  { title: 'Moonlight',         spotifyId: '2cZOqLlvyQ9kVqmc9IXlgT', cover: '/covers/Moonlight.jpg' },
  { title: 'Fear',              spotifyId: '31keKSdzmeEYMmlEf1r4CB', cover: '/covers/Fear.jpg' },
  { title: 'Canvas of life',    spotifyId: '3dH05uiJ3WlwCpK0wxivGr', cover: '/covers/CanvasOfLife.jpg' },
  { title: 'Dr.Gepetto',        spotifyId: '2TztokkSlmRU9p2invQw6L', cover: '/covers/DrGepetto.jpg' },
  { title: 'More Than Friends', spotifyId: '2F4yabQd99ywPQsyfi2HuK', cover: '/covers/MoreThanFriends.jpg' },
  { title: 'Bonne Nuit',        spotifyId: '2PJspp4VporyYlTp1BwLEn', cover: '/covers/BonneNuit.jpg' },
];

/** Social / streaming links — shown as icons on the home page and footer */
export const socials = [
  { label: 'Spotify',     href: 'https://open.spotify.com/artist/0l1iVFMMyljzebyWCPLgHV' },
  { label: 'Apple Music', href: 'https://music.apple.com/us/artist/psychosasquatch/1651102774' },
  { label: 'SoundCloud',  href: 'https://soundcloud.com/psychosaucequatch' },
  { label: 'YouTube',     href: 'https://www.youtube.com/@psychosassquatch' },
  { label: 'Instagram',   href: 'https://www.instagram.com/psychosassquatch' },
  { label: 'Facebook',    href: 'https://www.facebook.com/psychosassquatch' },
];

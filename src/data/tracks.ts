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
    releaseDate: '2024-04-01',
    spotifyId: '4X7q3PWGqfuLAeErDqgAmy',
    audioSrc: '/audio/Next To You - Psychosassquatch.mp3',
    cover: '/covers/NextToYou.jpg',
    lore: `Started April 1st. I host a monthly challenge with friends — we pick a sample, everybody makes a song from it. So this was originally April Fools. The sample was \`ALEX_LUSTIG_synth_loop_plucky_mellows_130_Bmin\`, which I refuse to make sound cooler than it is.

Then I found a vocal sample that said "I feel better when I'm next to you," and that became the song. Almost called it Free — kept Next To You. April Fools didn't survive contact with a chorus.

Built in Ableton, like everything I make. The bass is three different bass sounds stacked on top of each other to get the right thunk. The eerie sections are Serum's "Dream Key" preset — sounds like being lost in a place you can't quite name. There's a breakdown built from a vocal chop I tuned to the original vocal sample, using a sample from a Nero sound pack.

The drums are my favorite part. Layered kicks, lots of reverb, room-filling. If you're listening close — the cherry on top is a cowbell. More cowbell. The SNL bit was already in my head before I added it; once it was there, the whole song clicked. Trance-leaning, pop-feeling, kind of nostalgic to the early-2000s electronic you'd hear at a Carnaval festival.

Started as a joke. Friends heard it and told me to release it. So I did.`,
  },
  {
    title: 'Broken Hearts',
    releaseDate: '2023-06-01',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Broken Hearts - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    note: 'from Beginnings EP',
    lore: `This is from my first EP. I wanted to collaborate with people, and my cousin came in to write the vocals. I told him this song was going to be a very special one. It took the longest of anything I'd made up to then — I wanted it good.

The title came from his lyrics, with a nod to Cutting Crew. He wanted to write about getting his girl back. I pushed him the other way: don't write about getting her back. Write about her having had all the cards and dropping them. Now YOU're the one standing tall. The man's point of view nobody writes — if you played with my love, it's gone. She doesn't get to come back begging.

Same Ableton workflow but blown out — 30+ tracks in the session. Clock sounds layered in: your time had run out. The bass is very Steve Aoki — I'm pretty sure I used one of his Serum presets. A heartbeat under it, more Claptone than literal. Plucked guitar loops for that far-away nostalgia. Flutes in staccato — the connection between two people holding by a thread.

This was also the first time I put my own vocals on a track — stacked with reverb, lower harmonies underneath, layers of effects. Each ear has its own pad pattern, panned hard, so the separation in the song matches the separation the song is about.

I learned more about music production on this song than on anything before it. Mostly because I had to make decisions for someone else's words.`,
  },
  {
    // TODO: needs real spotifyId — send the Spotify URL when you have it
    title: 'Chaos',
    releaseDate: '2023-10-15',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Chaos - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'Lore pending — interview in progress.',
  },
  {
    // TODO: needs real spotifyId — send the Spotify URL when you have it
    title: 'Greenmoon',
    releaseDate: '2024-01-01',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Greenmoon - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'Lore pending — interview not started.',
  },
  {
    // TODO: needs real spotifyId — send the Spotify URL when you have it
    title: 'Magnet Rose',
    releaseDate: '2024-01-01',
    spotifyId: 'PLACEHOLDER',
    audioSrc: '/audio/Magnet Rose - Psychosassquatch.mp3',
    cover: '/logo/PsychoSassquatch.png',
    lore: 'Lore pending — interview not started.',
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

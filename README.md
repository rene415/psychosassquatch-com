# psychosassquatch

The music site for Psychosassquatch (Rene Ramirez). Astro + Tailwind, served by Caddy in a small Docker container, deployed via Portainer git-stack on `portainer-ext` host port `32781`.

## Local dev

```bash
npm install
npm run dev
```

## Build + serve (mirror prod)

```bash
docker compose up --build
# -> http://localhost:32781
```

## Layout

- `src/pages/index.astro` — hero + compartmentalized nav grid
- `src/pages/{music,sessions,lore,merch,dispatches}.astro` — section stubs
- `src/components/Nav.astro`, `src/components/Footer.astro`
- `src/layouts/Base.astro` — html shell, meta, fonts
- `src/styles/global.css` — Tailwind entry + small grain/text-stroke utilities
- `public/logo/` — drop `logo-color.png` here (existing nugget-and-sauce logo)
- `public/mascot/` — lovable-monster character art goes here
- `public/photos/` — press photos
- `public/audio/` — session loops

## Deploy

Pushes to `main` of `github.com/rene415/psychosassquatch` are pulled by the Portainer stack and rebuilt. Use the `github-psychosassquatch` SSH alias for git remote.

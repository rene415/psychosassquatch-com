/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        sass: {
          bg: '#0a0a08',
          ink: '#f4f1ea',
          fur: '#3a2a1c',
          sauce: '#ff5d2a',
          nugget: '#f3c668',
          forest: '#1a2a1e',
          glow: '#a4ff5d',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

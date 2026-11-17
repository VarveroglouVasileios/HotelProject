/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#f1f3f0', dark: '#e2e8e4' },
        ink: { DEFAULT: '#10252b', soft: '#44585c' },
        rule: '#c8d3cf',
        sea: { 600: '#0f3f4d', 700: '#0a2f3a' },
        clay: { 500: '#a9803b', 600: '#7d5a1c' },
      },
      fontFamily: {
        serif: ['"Noto Serif Display"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Commissioner', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matte-black': 'var(--matte-black)',
        'deep-black': 'var(--deep-black)',
        'pure-white': 'var(--pure-white)',
        'off-white': 'var(--off-white)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite'
      }
    },
  },
  plugins: [],
};
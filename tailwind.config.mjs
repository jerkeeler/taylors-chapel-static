/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Libre Baskerville', 'Georgia', 'serif'],
      },
      colors: {
        // Light mode colors
        cream: '#FAF9F6',
        charcoal: '#2D2D2D',
        forest: '#1B4332',
        'forest-light': '#2D6A4F',
        // Dark mode colors
        'rich-charcoal': '#1A1A1A',
        'warm-white': '#F5F5F5',
        gold: '#C9A227',
        'gold-light': '#D4AF37',
      },
      textShadow: {
        DEFAULT: '-1px 1px 3px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '-1px 1px 3px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-lg': {
          'text-shadow': '-2px 2px 6px rgba(0, 0, 0, 0.9)',
        },
      });
    },
  ],
};



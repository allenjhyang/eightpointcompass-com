/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        'epc-navy': 'var(--epc-navy)',
        'epc-bg': 'var(--epc-bg)',
        'epc-charcoal': 'var(--epc-charcoal)',
        'epc-gold': 'var(--epc-gold)',
        'epc-bg-alt': 'var(--epc-bg-alt)',
        'epc-text-light': 'var(--epc-text-light)',
      },
      fontFamily: {
        headings: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

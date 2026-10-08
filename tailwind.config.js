/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#061024',
          dark: '#020611',
          card: '#0B1A38',
          light: '#11254D',
          border: '#1E3A6E'
        },
        gold: {
          DEFAULT: '#E5C158',
          light: '#FFF0B3',
          dark: '#B89220',
          champagne: '#F3E5AB',
          glow: 'rgba(229, 193, 88, 0.3)'
        },
        cyan: {
          glow: 'rgba(0, 210, 255, 0.25)'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

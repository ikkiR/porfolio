/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '160': '75rem',
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

    },
  },
  plugins: [],
}
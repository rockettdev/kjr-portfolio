/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow':'#a4f542',
        'default':'#282c34'
      },
      fontFamily: {
        saira: ["Saira Condensed", "sans-serif"]
      },
      letterSpacing: {
        widest: '.25em'
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow':'#a4f542',
        'default':'#121418',
        'secondary':'#272729',
        'cream': '#ffe9d6',
        'alice-blue': '#EFF9FD'
      },
      fontFamily: {
        saira: ["Saira Condensed", "sans-serif"],
        apple: ["Apple", "-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Ubuntu"],
        cabin: ["Cabin", "sans-serif"]
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


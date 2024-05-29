/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boska: ['"Boska"', "serif"],
        instrument: ['"Instrument Serif"', "serif"],
        redhatdisplay: ['"Red Hat Display"', "sans-serif"],
        clashGrotesk: ['"Clash Grotesk"', "sans-serif"],
        neueMontreal: ['"Neue Montreal"', "sans-serif"]
      }
    },
  },
  plugins: [],
}


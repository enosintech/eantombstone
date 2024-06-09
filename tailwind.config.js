/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nohemiBold" : "NohemiBlack, sans-serif",
        "nohemiThin" : "NohemiThin, sans-serif",
        "lausanne" : "Lausanne, sans-serif",
        "poppins" : '"Poppins", sans-serif',
        "universBold" : "UniversBold, sans-serif",
        "universReg" : "UniversRegular, sans-serif",
        "universLight" : "UniversLight, sans-serif",
        "slussen" : "slussen, sans-seirf"
      }
    },
  },
  plugins: [],
}


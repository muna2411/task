/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      a:['Rubik Bubbles'],
      b:['Preahvihear']
     
    }
  },
  plugins: [require("daisyui")],
}


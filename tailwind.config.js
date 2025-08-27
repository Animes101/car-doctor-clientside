

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mozilaText: ["Mozilla Text", "sans-serif"], 
        eduNsw: ["Edu NSW ACT Cursive", "cursive"],// Custom font name
      },
    },
   },
  plugins: [daisyui],
   daisyui: {
    darkTheme: "light",   // default dark theme
    themes: ["light", "dark", "cupcake"], // সব theme list
  },
}



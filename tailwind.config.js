

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: [ "Inter", "sans-serif"], // Custom font family
      },
    },
   },
  plugins: [daisyui],
   daisyui: {
    darkTheme: "light",   // default dark theme
    themes: ["light", "dark", "cupcake"], // সব theme list
  },
}



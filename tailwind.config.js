/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentacion/**/*.{js,jsx,ts,tsx}",
  
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily: {
        'trabajo-negro': ['WorkSans-Black', 'sans-serif'],
        'trabajo-clara': ['WorkSans-Light', 'sans-serif'],
        'trabajo-medio': ['WorkSans-Medium', 'sans-serif'],
      }

    },
  },
  plugins: [],
}


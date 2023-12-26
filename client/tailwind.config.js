/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto" : ['Roboto', "sans-serif"]
      },
      colors:{
        header : "FAFAFE",
        main : "F7F7FD",
        primary: "7065f0",
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-primary': '#A4A5A6',
        'my-secondary': '#A68256',
        'my-terciary': '#262626',
        'my-quartenary': '#F2F2F2',
        'my-quintenary': '#0D0D0D',
      }
    },
  },
  plugins: [],
}


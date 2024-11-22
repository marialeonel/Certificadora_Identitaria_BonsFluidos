/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lighter-light': '#ff1755',
        'light': '#b3193b',
        'logo-color': '#df204a',
        'dark': '#91142f',
        'darker-dark': '#6f1024'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#92E57B",
        "primary-alt": "#50BA32",
        "secondary": "#297A12",
        "secondary-alt": "#092401"
      },
      fontFamily: {
        "primary": '"Poppins", sans-serif',
        "primary-alt": '"Montserrat Alternates", sans-serif',
        "secondary": '"Merriweather", serif',
        "secondary-alt": '"Raleway", sans-serif',
      },
    },
  },
  plugins: [],
}


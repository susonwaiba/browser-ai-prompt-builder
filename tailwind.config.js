/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./scripts/**/*.js",
    "./*.html",
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./index.html"],

  theme: {
    extend: {
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '50.95',
      },

      backgroundImage: {
        'hero': "url('../team.png')",

      },
      spacing: {
        '172': '43rem',
      }
    },
  },
  plugins: [require("daisyui")],
  themes: ["light", ],
}
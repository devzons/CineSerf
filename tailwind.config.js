/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./indexedDB.html', './src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        other: { min: '340px', max: '1200px' },
      },
      colors: {
        darkbg: '#1E293B',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

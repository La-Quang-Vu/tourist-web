/*
npx tailwindcss -i ./src/assets/css/src/tailwind.css -c ./src/assets/css/src/tailwind.config.js -o ./src/assets/css/dist/tailwind.css
*/
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          width: {
              '90px':'90px',
          }
      },
    },
    variants: {},
    plugins: [],
  }
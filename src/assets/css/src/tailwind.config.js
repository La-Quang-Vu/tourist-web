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
              '750px':'750px',
              '970px':'970px',
              '1170px':'1170px',
          }
      },
      screens: {
          'md-992px':'992px',
          'lg-1200px':'1200px',
      },
    },
    variants: {},
    plugins: [],
  }
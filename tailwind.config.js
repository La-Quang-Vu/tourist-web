module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'md-992px':'992px',
        'lg-1200px':'1200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

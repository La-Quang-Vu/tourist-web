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
      boxShadow: {
        md2: '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

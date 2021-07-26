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
        md3: '0 2px 16px 0 rgba(0, 0, 0, 0.30)',
        input1: '0 0 0 2px #D1E9FF',
      },
      backgroundImage: theme => ({
        'homeBannerV2': "url(https://statics.vntrip.vn/images/homeBannerV2.jpg)",
      }),
      width: {
        '100per-50px': 'calc(100% - 50px)',
      },
      keyframes: {
        opacityShow: {
          from: {opacity:0},
          to: {opacity:1}
        }
      },
      animation: {
        opacityShow: 'opacityShow .3s ease 1',
      },
      fontSize: {
        xl2: ['26px', '36px'],
      }
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      textColor: ['group-hover'],
    },
  },
  plugins: [],
}

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
        btn1: '0 2px 0 rgb(0 0 0 / 2%)',
        input1: '0 0 0 2px #D1E9FF',
      },
      backgroundImage: theme => ({
        'homeBannerV2': "url(https://statics.vntrip.vn/images/homeBannerV2.jpg)",
        'appBox': "url(assets/images/appBox/appBox-bg.jpg)",
      }),
      width: {
        '100per-50px': 'calc(100% - 50px)',
        '100per-143px': 'calc(100% - 143px)',
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
        xl_20: ['20px', '30px'],
        xl_22: ['22px', '33px'],
        xl_26: ['26px', '36px'],
        '4xl_40': ['40px', '60px'],
      }
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      textColor: ['group-hover'],
      transitionDuration: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}

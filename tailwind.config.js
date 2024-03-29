// const { guessProductionMode } = require("@ngneat/tailwind");
// process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit' ,
  enabled: process.env.NODE_ENV === 'production',
  content: [
    './src/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  media: false, // 'darkMode' or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': "#0f594b",
        'secondary': "#1DAC90",
        'background': "#f4fffd",
        'border': "#ced9d8",
      },
      screens: {
        'xs': { 'min': '0px', 'max': '600px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'sm': { 'min': '601px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'md': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'lg': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        'xlg': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        main: ['Roboto'],
        ubuntu: ['Ubuntu']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

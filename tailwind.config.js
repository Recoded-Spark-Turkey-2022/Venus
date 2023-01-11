/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      lightBlue: '#7fa6c9',
      darkBlue: '#3f7ca5',
      darkGrey: '#8b8f9c',
      rose: '#de5867',
      tea: '#1c8f9c',
      lightOrange: '#fc9d6f',
      darkOrange: '#e87a54',
      darkBrown: '#885239',
      turkishBlue: '#70cdd6',
      mediumBlue: '#4699c2',
      openRose: '#fc8476',
      inlightBlue: '#E7fbff',
      white: '#fff',
    },
    fontFamily: {
      'sans': 'Helvetica , Arial, sans-serif',
      'serif': 'ui-serif , Georgia',
      'roboto': 'Roboto',
    },
  },
  plugins: [],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: ['Baloo 2', 'cursive'],
      sans: ['Roboto', 'sans'],
    },
    extend: {
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',

        title: '#272221',
        subtitle: '#403937',
        text: '#574F4D',
        label: '#8D8686',
        button: '#E6E5E5',
        hover: '#D7D5D5',
        input: '#EDEDED',
        card: '#F3F2F2',
        background: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        title: ['"Baloo 2"', 'cursive'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Background.svg')",
      },
      width: {
        476: '29.75rem',
      },
      height: {
        360: '22.5rem',
      },
      top: {
        92: '5.75rem',
      },
      left: {
        804: '50.25rem',
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

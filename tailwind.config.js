/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Fira Code', ...fontFamily.sans],
      },
      colors: {
        content: 'rgb(var(--tw-color-content) , <alpha-value>)',
        divider: 'rgb(var(--tw-color-divider) , <alpha-value>)',
        'base-100': 'rgb(var(--tw-color-base-100) , <alpha-value>)',
        'base-200': 'rgb(var(--tw-color-base-200) , <alpha-value>)',
        orange: 'rgb(var(--tw-color-orange) , <alpha-value>)',
        purple: 'rgb(var(--tw-color-purple) , <alpha-value>)',
        green: 'rgb(var(--tw-color-green) , <alpha-value>)',
        white: 'rgb(var(--tw-color-white) , <alpha-value>)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

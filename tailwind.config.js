/** @type {import('tailwindcss').Config} */

import { base, light, dark } from './app/themes'

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          ...base,
          ...light,
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          ...base,
          ...dark,
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
        14: '3.85rem',
      },
    },
  },
}

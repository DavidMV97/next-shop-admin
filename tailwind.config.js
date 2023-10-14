/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      translate: {
        '-50': '-50%',
      },
    },
    colors: {
      green: {
        dark: '#005155',
        soft: '#14A39E',
        light: '#00515580'
      },
      white: {
        DEFAULT: '#fff',
        soft: '#d9d9d973'
      },
      dark: {
        soft: '#343E47'
      },
      gray: {
        soft: '#33333340'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1140px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

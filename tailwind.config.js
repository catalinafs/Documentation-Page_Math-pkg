/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'RED': '#ee042c',
      'red': '#B22D33',
      'redNormal': '#dd403a',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'orange': '#ff7849',
      'green-light': '#13ce66',
      'green': '#69B865',
      'yellow': '#ffc82c',
      'gray-blue': '#273444',
      gray: {
        100: '#EAEAEA',
        200: '#C7C7C7',
        300: '#9D9D9D',
        400: '#5C5C5C',
        450: '#515751',
        500: '#444444',
        600: '#373737',
        700: '#2E2E2E',
        800: '#232323'
      },
      'whiteText': '#EFEFEF',
      'bgWHITE': '#EFEFEF',
      'bgDARK': '#212121'
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif']
    },
    borderRadius: {
      'RadiusRounded': '50%',
      R12: '12px',
      DEFAULT: '15px',
      none: '0'
    },
    padding: {
      '1': '1px',
      '2': '2px',
      '10': '10px',
      'p15': '15px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
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
      'green': '#00ab5b',
      'transparent-green': '#00ab5bb8',
      gray: {
        100: '#666666',
        200: '#cccccc',
        300: '#777777'
      },
      'bgWHITE': '#ffffff',
      'codeBG': '#e9e9e9'
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
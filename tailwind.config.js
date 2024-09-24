/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      gomePixel: ['GomePixel'], 
      gomePixel2: ['GomePixel2'], 
    },
    screens: {
      'xl': {'max': '1440px'},
      'lg': {'max': '1366px'},
      'md': {'max': '1200px'},
      'sm': {'max': '1024px'},
      'sm2': {'max': '1023px'},
      'xs': {'max': '768px'},
    }
  },
  
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '11pro': '380px',
        '11proMax': '414px',
        '12pro': '390px',
        'iPad': '1080px',
        '1200': '1199px',
        '640': '640px',
        '768': '768px',
        '1060': '1060px',
        '1080': '1080px',
        '1100': '1100px',
        
      }
    },
  },
  plugins: [],
}


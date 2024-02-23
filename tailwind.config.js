/** @type {import('tailwindcss').Config} */
export default {
 
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  plugins: [],
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
      },
      animation: {
        'custom-fade-in': 'customFadeIn 1.5s',
        'flip-in-hor-bottom': 'flip-in-hor-bottom 1.2s ease-out',
        'fade-in-left': 'fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-right': 'fade-in-right 1.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        
      },
      keyframes: {
        customFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1.5' },
        },
        'flip-in-hor-bottom': {
          '0%': {
            '-webkit-transform': 'rotateX(80deg)',
            'transform': 'rotateX(80deg)',
            'opacity': 0,
          },
          '100%': {
            '-webkit-transform': 'rotateX(0)',
            'transform': 'rotateX(0)',
            'opacity': 1,
          },
        },
        'fade-in-left': {
          '0%': {
            '-webkit-transform': 'translateX(-50px)',
            'transform': 'translateX(-50px)',
            'opacity': 0,
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)',
            'opacity': 1,
          },
        },
        'fade-in-right': {
          '0%': {
            '-webkit-transform': 'translateX(50px)',
            'transform': 'translateX(50px)',
            'opacity': 0,
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)',
            'opacity': 1,
          },
        },
      },
    },
  },
}

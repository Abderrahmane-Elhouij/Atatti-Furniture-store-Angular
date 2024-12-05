/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in',
        'from-top': 'fromTop 1s ease-out', 
        'from-bottom-1': 'fromBottom 1s ease-out',
        'from-bottom-2': 'fromBottom 1.5s ease-out',  
        'from-bottom-3': 'fromBottom 2s ease-out',  
        'from-bottom-4': 'fromBottom 2.5s ease-out',  


      },   
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fromTop: {
          '0%': { transform: 'translateY(-60px)', opacity: '0' }, // Start from top
          '100%': { transform: 'translateY(0)', opacity: '1' },   // End at original position
        },
        fromBottom: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },  // Start from bottom
          '100%': { transform: 'translateY(0)', opacity: '1' },    // End at original position
        },
      },
      
    },
  },
  plugins: [],
};

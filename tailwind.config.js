/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        'fade-in-1': 'fadeIn 0.5s ease-in forwards',
        'fade-in-2': 'fadeIn 0.5s ease-in 0.3s forwards',
        'fade-in-3': 'fadeIn 0.5s ease-in 0.5s forwards',
        'fade-in-4': 'fadeIn 0.5s ease-in 0.7s forwards',
        
        'from-top': 'fromTop 1s ease-out forwards', 
        'from-bottom-1': 'fromBottom 1s ease-in forwards',
        'from-bottom-2': 'fromBottom 1s ease-in 0.3s forwards',  
        'from-bottom-3': 'fromBottom 1s ease-in 0.6s forwards',  
        'from-bottom-4': 'fromBottom 1s ease-in 0.9s forwards',  
        'from-bottom-5': 'fromBottom 1s ease-in 1.2s forwards',  


      },   
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fromTop: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' }, // Start off-screen with no opacity
          '100%': { transform: 'translateY(0)', opacity: '1' },   // Final position with full opacity
        },
        fromBottom: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },  // Start off-screen with no opacity
          '70%': { transform: 'translateY(10px)', opacity: '0.8' }, // Smoothly approach the final position
          '100%': { transform: 'translateY(0)', opacity: '1' },    // Final position with full opacity
        },
      },
      
    },
  },
  plugins: [],
};

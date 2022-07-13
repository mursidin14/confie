module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#181C32',
        'orange': '#FE9A00',
        'brown': '#9D754D',
        'dark-blue': '#4B5783',
        'soft-blue': '#7588CD',
        'baby-pink': '#FFC0BA',
        'soft-gray': '#F5F8FA',
        'pale-orange': '#FFF5E5',
      },
      boxShadow: {
        'mine': '0px 1px 10px 2px rgba(0,0,0,0.17);',
      },
      keyframes: {
        bounceOne: {
          '0%, 100%' : {
            transform: 'scale(1) ',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1.1) ',
            opacity: 0.5,
          },
        },
        bounceTwo: {
          '0%, 100%': {
            transform: 'scale(1.1)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      animation: {
        bounceOne: 'bounceOne 1s ease-in-out infinite',
        bounceTwo: 'bounceTwo 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],  
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50%) translateY(-100%)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        darkGray: 'hsl(0, 0%, 48%)',
      },
    },
  },
  plugins: [],
};

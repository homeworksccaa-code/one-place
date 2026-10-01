/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './Home.jsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

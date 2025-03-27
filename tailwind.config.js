/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Orpheus Pro', 'Georgia', 'serif'],
        secondary: ['Futura PT Light', 'Arial', 'sans-serif'],
        saolDisplay: ['Saoldisplay', 'Georgia', 'sans-serif'],
        saolStandard: ['Saolstandard', 'Georgia', 'sans-serif'],
      },
      colors: {
        'midnight-blue': '#0e1b2c',
        'light-coral': '#ff595c',
      },
    },
  },
  plugins: [],
};

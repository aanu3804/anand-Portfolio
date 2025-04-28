/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: '#4f46e5',  // Indigo-600
          secondary: '#9333ea', // Purple-600
        },
      },
    },
    plugins: [],
  }
  
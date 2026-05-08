/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060e1a',
          50: '#0f1923',
          100: '#1a365d',
          200: '#2a4a7f',
        },
        gold: {
          DEFAULT: '#c8960c',
          light: '#f0c040',
          pale: '#fef9e7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0a1628',
          50: '#0f1f3d',
          100: '#132952',
          200: '#1a3a6b',
          300: '#244b85',
          400: '#2d5fa0',
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          pale: '#eff6ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

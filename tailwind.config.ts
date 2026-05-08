/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0a1628',
          50: '#0f2040',
          100: '#132952',
          200: '#1a3a6b',
          300: '#244b85',
        },
        accent: {
          DEFAULT: '#0d3320',
          light: '#1a5c3a',
          lighter: '#22c55e',
          pale: '#ecfdf5',
        },
        surface: {
          DEFAULT: '#ffffff',
          50: '#f8f9fb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
        },
        muted: {
          400: '#98a2b3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1d2939',
          900: '#101828',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

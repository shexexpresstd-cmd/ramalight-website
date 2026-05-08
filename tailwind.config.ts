/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#101820',
          50: '#182430',
          100: '#1e2e3c',
          200: '#283848',
          300: '#344a5e',
        },
        accent: {
          DEFAULT: '#307850',
          light: '#408058',
          lighter: '#50a870',
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

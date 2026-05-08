/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060e1a',
          50: '#0a1628',
          100: '#0f1f35',
          200: '#1a365d',
          300: '#2a4a7f',
        },
        gold: {
          DEFAULT: '#c8960c',
          light: '#f0c040',
          pale: '#fef9e7',
          2: '#e8a020',
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

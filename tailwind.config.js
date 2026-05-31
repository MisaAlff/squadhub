/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
        dark: {
          DEFAULT: '#0f172a',
          card: '#1e293b',
        },
        surface: {
          DEFAULT: '#1e293b',
          secondary: '#020617',
        },
      },
    },
  },
  plugins: [],
};

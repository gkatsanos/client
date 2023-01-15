/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'sign-up': '60% 40%'
      }
    }
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

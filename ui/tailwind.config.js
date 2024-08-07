/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Space Grotesk', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
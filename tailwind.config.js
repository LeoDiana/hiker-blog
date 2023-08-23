/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-primary': 'var(--text-primary-clr)',
        'text-secondary': 'var(--text-secondary-clr)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sidebar-background': '#1A1A1A',
        background: '#1f1f1f'
      }
    }
  },
  plugins: []
}

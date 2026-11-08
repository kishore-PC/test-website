/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#176B45',
          secondary: '#43A66C',
          bg: '#FAFAF5',
          accent: '#F5B942',
          text: '#252B27',
          muted: '#5f6b65',
          border: '#dce8e1',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans Tamil', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(23, 107, 69, 0.08)',
      },
    },
  },
  plugins: [],
};

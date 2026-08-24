/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        blue:    '#0052ff',
        yellow:  '#fbbf24',
        canvas:  '#ffffff',
        subtle:  '#f5f8ff',
        border:  '#e2e8f7',
      },
      borderRadius: {
        pill:    '9999px',
        card:    '2rem',
        'card-sm': '1.25rem',
        control: '0.875rem',
      },
    },
  },
  plugins: [],
};

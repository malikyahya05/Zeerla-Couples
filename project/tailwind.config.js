/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        zeerla: {
          50: '#f5f8f7',
          100: '#e8f0ee',
          200: '#c9ded9',
          300: '#9fc1ba',
          400: '#6fa096',
          500: '#4f8478',
          600: '#3d6a60',
          700: '#335650',
          800: '#1a3c34',
          900: '#0f2a24',
          950: '#0a1d18',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5edd6',
          200: '#e9d9a8',
          300: '#d9bf6e',
          400: '#cda940',
          500: '#bd9626',
          600: '#a87f1e',
          700: '#8a651c',
          800: '#71521c',
          900: '#5e441b',
        },
        sand: {
          50: '#faf8f5',
          100: '#f3eee5',
          200: '#e6dccd',
          300: '#d4c4ad',
          400: '#bda888',
          500: '#a8906c',
        },
        cream: '#faf7f2',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

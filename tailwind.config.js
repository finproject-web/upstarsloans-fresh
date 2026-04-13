/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'purple': {
          50: '#f3f0ff',
          100: '#e5dbff',
          200: '#d0bfff',
          300: '#b299ff',
          400: '#9775fa',
          500: '#845ef7',
          600: '#7950f2',
          700: '#7048e8',
          800: '#6741d9',
          900: '#5f3dc4',
        },
        'blue': {
          50: '#e7f5ff',
          100: '#cce3ff',
          200: '#99c9ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#0059d3',
          700: '#0047b3',
          800: '#003a94',
          900: '#002d75',
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'gradient': '0 4px 14px 0 rgba(124, 80, 242, 0.39)',
      }
    },
  },
  plugins: [],
}

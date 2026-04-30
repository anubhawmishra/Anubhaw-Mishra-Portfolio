/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#010409',
        'mid-bg': '#0d1117',
        'border-color': '#30363d',
        'accent': '#238636',
        'accent-glow': '#39d353',
        'text-primary': '#c9d1d9',
        'text-secondary': '#8b949e',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(57, 211, 83, 0.15) 0%, rgba(1, 4, 9, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 17, 23, 0.8) 0%, rgba(1, 4, 9, 0.8) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(57, 211, 83, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(57, 211, 83, 0.6)' },
        },
        'text-shimmer': {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
      },
    },
  },
  plugins: [],
};

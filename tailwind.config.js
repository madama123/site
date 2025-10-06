/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Couleurs principales Ekose RX (basées sur le logo)
        'blue-primary': '#134888',
        'blue-header': '#0A458E',
        'primary-green': '#32E800',
        'ekose': {
          blue: {
            50: '#E8F1FF',
            100: '#D1E3FF',
            200: '#A3C7FF',
            300: '#75ABFF',
            400: '#478FFF',
            500: '#134888',  // Couleur principale du logo
            600: '#0F3A6E',
            700: '#0A2C54',
            800: '#061E3A',
            900: '#031020',
          },
          green: {
            50: '#F0FFE6',
            100: '#E1FFCD',
            200: '#C3FF9B',
            300: '#A5FF69',
            400: '#87FF37',
            500: '#32E800',  // Couleur principale du logo
            600: '#28BA00',
            700: '#1E8C00',
            800: '#145E00',
            900: '#0A2F00',
          },
        },
        primary: {
          50: '#E8F1FF',
          100: '#D1E3FF',
          200: '#A3C7FF',
          300: '#75ABFF',
          400: '#478FFF',
          500: '#134888',
          600: '#0F3A6E',
          700: '#0A2C54',
          800: '#061E3A',
          900: '#031020',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
      },
      backgroundImage: {
        'secure-background': "url('/assets/images/HomePage/security_background.jpg')",
      },
      screens: {
        'custom1200': '1200px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' },
          '50%': { boxShadow: '0 0 20px 0 rgba(14, 165, 233, 0.3)' },
        },
        'pulse-glow-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(19, 72, 136, 0.7)' },
          '50%': { boxShadow: '0 0 20px 0 rgba(19, 72, 136, 0.3)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'pulse-glow-blue': 'pulse-glow-blue 2s infinite',
      },
    },
  },
  plugins: [],
};
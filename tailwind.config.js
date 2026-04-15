/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0f1f3d',
          700: '#1e3a8a',
          600: '#1e40af',
          500: '#2563eb',
          400: '#3b82f6',
          300: '#60a5fa',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'ring': 'ringPulse 4s ease-in-out infinite',
        'wave': 'wave 4s linear infinite',
        'fade-up': 'fadeUp 0.6s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-16px) scale(1.03)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.75)' },
        },
        ringPulse: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.15' },
        },
        wave: {
          'from': { left: '-100%' },
          'to': { left: '100%' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

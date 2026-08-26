/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibri'],
      },
      colors: {
        navy: {
          950: '#020a16',
          900: '#060e1e',
          800: '#0a1628',
          700: '#0d1b3e',
          600: '#122348',
          500: '#1a3a6e',
        },
        mint: {
          50: '#f0fdf8',
          100: '#dcfdf0',
          200: '#b9f8e2',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(163,230,53,0.2), 0 0 60px rgba(34,211,238,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(163,230,53,0.4), 0 0 100px rgba(34,211,238,0.2)' },
        },
        slideDown: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}

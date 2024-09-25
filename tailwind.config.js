export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      fontFamily: {
        pixel: ['Pixelify'],
      },

      animation: {
        balance: 'animate-balance 1500ms infinite linear',
      },
      writingMode: {
        upright: 'text-orientation: upright',
        'vertical-lr': 'writing-mode: vertical-lr',
        'vertical-rl': 'writing-mode: vertical-rl',
      },
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secundary: {
          50: 'var(--secundary-100)',
          100: 'var(--secundary-100)',
          200: 'var(--secundary-200)',
          300: 'var(--secundary-300)',
          400: 'var(--secundary-400)',
          500: 'var(--secundary-500)',
          600: 'var(--secundary-600)',
          700: 'var(--secundary-700)',
          800: 'var(--secundary-800)',
          900: 'var(--secundary-900)',
          1000: 'var(--secundary-1000)',
        },
        secondary: {
          50: 'var(--blue-50)', // Asegurate de que `--blue-50` está definido en tu CSS
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
          600: 'var(--blue-600)',
          700: 'var(--blue-700)',
          800: 'var(--blue-800)',
          900: 'var(--blue-900)',
        },
      },
    },
  },
  plugins: [],
}

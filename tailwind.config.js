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
      writingMode: {
        upright: 'text-orientation: upright',
        'vertical-lr': 'writing-mode: vertical-lr',
        'vertical-rl': 'writing-mode: vertical-rl',
      },
      colors: {
        primary: {
          50: 'var(--pink-50)',   // Asegurate de que `--pink-50` está definido en tu CSS
          100: 'var(--pink-100)',
          200: 'var(--pink-200)',
          300: 'var(--pink-300)',
          400: 'var(--pink-400)',
          500: 'var(--pink-500)',
          600: 'var(--pink-600)',
          700: 'var(--pink-700)',
          800: 'var(--pink-800)',
          900: 'var(--pink-900)',
        },
        secondary: {
          50: 'var(--blue-50)',  // Asegurate de que `--blue-50` está definido en tu CSS
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

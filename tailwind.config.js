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
        upright: [' text-orientation:upright'],
        'vartical-lr': ['writing-mode: vertical-lr'],
        'vartical-rl': ['writing-mode: vertical-rl'],
      },
    },
  },
  plugins: [],
}

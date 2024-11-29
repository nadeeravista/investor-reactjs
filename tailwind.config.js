/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DBEAFE',
          50: '#EBF4FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        neutral: {
          DEFAULT: '#D8D8D8',
          50: '#FBFBFB',
          100: '#F7F7F7',
          200: '#EFEFEF',
          300: '#E8E8E8',
          400: '#E0E0E0',
          500: '#D8D8D8',
          600: '#ADADAD',
          700: '#828282',
          800: '#565656',
          900: '#414141',
        },
        success: {
          DEFAULT: '#5ED394',
          50: '#EFFBF4',
          100: '#DFF6EA',
          200: '#BFEDD4',
          300: '#9EE5BF',
          400: '#7EDCA9',
          500: '#5ED394',
          600: '#4BA976',
          700: '#387F59',
          800: '#26543B',
          900: '#1C3F2C',
        },
        warning: {
          DEFAULT: '#FFAA06',
          50: '#FFF6E6',
          100: '#FFEECD',
          200: '#FFDD9B',
          300: '#FFCC6A',
          400: '#FFBB38',
          500: '#FFAA06',
          600: '#CC8805',
          700: '#996604',
          800: '#664402',
          900: '#4D3302',
        },
        error: {
          DEFAULT: '#FF6075',
          50: '#FFEBEE',
          100: '#FFD7DC',
          200: '#FFAFBA',
          300: '#FF8897',
          400: '#FF6075',
          500: '#FF3852',
          600: '#CC2D42',
          700: '#992231',
          800: '#661621',
          900: '#4D1119',
        },
        gray: {
          DEFAULT: '#8B8B8B',
        },
        neon: {
          DEFAULT: '#751CFF',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        tertiary: {
          DEFAULT: '#EEEEEE',
        },
        light: {
          DEFAULT: '#F4F4F4',
        },
        medium: {
          DEFAULT: '#D8D8D8',
        },
        dark: {
          DEFAULT: '#000000',
        },
      },
    },
  },
  plugins: [],
};

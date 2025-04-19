import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #7FD1B9, #FFB86C)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)",
        "button-gradient": "linear-gradient(to right, #7FD1B9, #8FDECB)",
      },
      colors: {
        'primary-50': '#E6F7F2',
        'primary-100': '#CCEFE5',
        'primary-200': '#B3E7D9',
        'primary-300': '#99DFCC',
        'primary-400': '#8FD7C0',
        'primary-500': '#7FD1B9', // Primary accent
        'primary-600': '#5FB9A1',
        'primary-700': '#4A9683',
        'primary-800': '#357366',
        'primary-900': '#214F48',
        
        'secondary-50': '#FFF6E9',
        'secondary-100': '#FFECD3',
        'secondary-200': '#FFE2BD',
        'secondary-300': '#FFD8A7',
        'secondary-400': '#FFC291',
        'secondary-500': '#FFB86C', // Secondary accent
        'secondary-600': '#FF9E38',
        'secondary-700': '#FF8404',
        'secondary-800': '#D06A00',
        'secondary-900': '#9C5000',
        
        'text-dark': '#2E2E2E',
        'text-medium': '#4A4A4A',
        'text-light': '#6E6E6E',
        
        'bg-light': '#FFFFFF',
        'bg-off': '#F9F9F9',
        'bg-subtle': '#F3F3F3',
        
        'glassmorphic-bg': 'rgba(255, 255, 255, 0.3)',
        'glassmorphic-dark': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'inner-glass': 'inset 0 8px 32px 0 rgba(31, 38, 135, 0.025)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
};
export default config; 
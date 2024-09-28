import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        background: 'background 10s linear infinite',
      },
      keyframes: {
        background: {
          '0%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
          '100%': { 'background-position': '50% 0%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'blackish': '#161513',
      'white': '#FFFFFF',
      'lightb': '#1C1C22',
      'gray': '#D7D9E4',
      'offwhite': "#F9F7F3"
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;


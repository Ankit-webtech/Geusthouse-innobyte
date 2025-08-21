/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0C10",   // Dark background
        secondary: "#FFD166", // Yellow glow
        accent: "#6A5ACD",    // Purple accent
        highlight: "#06D6A0", // Teal
        light: "#F5F5F5",     // White text
      },
      keyframes: {
    blink: {
      '0%, 10%, 35%, 45%, 100%': { transform: 'scale(1) skewX(0deg)', opacity: '1' },
      '5%, 40%': { transform: 'scale(1.5, .1) skewX(10deg)', opacity: '0.5' },
    },
    offset: {
      '50%': { outlineOffset: '.15em', outlineColor: 'honeydew' },
      '55%': { outlineOffset: '.1em', transform: 'translateY(1px)' },
      '80%, 100%': { outlineOffset: '0' },
    },
  },
  animation: {
    blink: 'blink 1.5s ease-out 1s infinite alternate',
    offset: 'offset 1s ease-in-out infinite',
  },
    },
  },
  plugins: [],
}

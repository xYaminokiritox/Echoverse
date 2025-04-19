/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#646cff",
          light: "#8a8fff",
          dark: "#4a50cc",
        },
        secondary: {
          DEFAULT: "#535bf2",
          light: "#7a81f5",
          dark: "#3d43b5",
        },
        dark: {
          DEFAULT: "#242424",
          light: "#333333",
          darker: "#121212",
        },
        light: {
          DEFAULT: "#f8f9fa",
          dark: "#e9ecef",
          darker: "#dee2e6",
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          teal: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
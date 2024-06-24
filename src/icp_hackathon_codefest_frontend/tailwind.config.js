/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "dark-blue-gradient": "linear-gradient(135deg, #000428 0%, #004e92 100%)",
      },
    },
  },
  plugins: [],
};

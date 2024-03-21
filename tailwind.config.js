/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  newTheme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00A3A3",
          50: "#E0F7F7",
          100: "#B3EFEF",
          200: "#80E7E7",
          300: "#4DDFDF",
          400: "#1AD7D7",
          500: "#00A3A3",
          600: "#008A8A",
          700: "#006666",
          800: "#004242",
          900: "#002121"
        },
        secondary: {
          DEFAULT: "#FF9800",
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100"
        },
        error: {
          DEFAULT: "#FF0000",
          50: "#FFCCCC",
          100: "#FF9999",
          200: "#FF6666",
          300: "#FF3333",
          400: "#FF0000",
          500: "#CC0000",
          600: "#990000",
          700: "#660000",
          800: "#330000",
          900: "#000000",
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        heading: ["Open Sans", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
        6: "6px",
        9: "9px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  plugins: [],
};

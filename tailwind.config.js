/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00A3A3",
        },
        secondary: {
          DEFAULT: "#B76EFF",
        },
        error: "#FF0000",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      borderWidth: {
        6: "6px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}


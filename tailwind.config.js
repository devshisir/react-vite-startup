/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
      // Custom breakpoints
      "3xl": "1920px",
      "4xl": "2560px",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "992px",
        xl: "1160px",
        "2xl": "1160px",
      },
      padding: {
        sm: "2rem",
        md: "2.5rem",
        lg: "4rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        brand: {
          100: "#101858",
          50: "#51507E",
        },
        dark: {
          100: "#020614",
          50: "#51507E",
        },
        primary: {
          bg: "linear-gradient(106deg, rgba(16, 24, 88, 1) 17%, rgba(4, 10, 57, 1) 78%)",
        },
        pink: "#FF028A",
      },
    },
  },
  plugins: [],
};

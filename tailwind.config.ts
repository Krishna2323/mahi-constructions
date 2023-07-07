import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "primary-sm": "3px 3px 7px #272c30,-3px -3px 7px #414950",
        "primary-sm-180": "7px 7px 6px #ffffff,-7px -7px 6px #ecedee",
        "primary-lg": "7px 7px 6px #ecedee,-7px -7px 6px #ffffff",
      },
      colors: {
        "bg-primary": "#343a40",
        "brand-primary": "#c4ae70",
        "brand-secondary": "#6f603d",
        "black-primary": "#6b7278",
        "black-secondary": "#212529",
      },
      backgroundImage: {
        "gradient-bg": "url('/public/portfolio-bg-min.jpeg')",
        "black-gradient":
          "linear-gradient(to right top, #191c1f, #1a1d20, #1b1e22, #1d2023, #1e2125, #1e2125, #1e2125, #1e2125, #1d2023, #1b1e22, #1a1d20, #191c1f)",
        "gold-gradient":
          "linear-gradient(to right top, #a77f40, #b4904d, #c1a25b, #ceb46a, #dac679, #dbc87b, #ddca7d, #decc7f, #d4be74, #cbb169, #c1a35e, #b79654);",
      },
      rotate: {
        rotateY: "rotateY(180deg)",
      },
    },
  },
  plugins: [],
} satisfies Config;

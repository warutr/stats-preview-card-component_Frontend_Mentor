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
      },
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
    colors: {
      "very_dark_blue": "hsl(233, 47%, 7%)",
      "dark_desaturated_blue": "hsl(244, 38%, 16%)",
      "soft_violet": "hsl(277, 64%, 61%)"
    }
    },
  },
  plugins: [],
};
export default config;

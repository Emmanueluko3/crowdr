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
        "auth-bg": "url('/public/images/auth-bg.png')",
      },
      backgroundColor: {
        customBlack: "#050506",
        customBlue: "#03DEE2",
      },
      colors: {
        customBlue: "#03DEE2",
        customGray: "#8B8C8F",
      },
    },
  },
  plugins: [],
};
export default config;

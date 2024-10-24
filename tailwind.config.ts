import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-manrope)"
      },
      colors: {
        primary: {
          1: "hsl(217, 19%, 35%)",
          2: "hsl(214, 17%, 51%)",
          3: "hsl(212, 23%, 69%)",
          4: "hsl(210, 46%, 95%)"
        },
      }
    },
  },
  plugins: [],
};
export default config;

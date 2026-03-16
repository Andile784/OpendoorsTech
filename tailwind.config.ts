import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1e4b",
        muted: "#4b5d86",
        brand: "#1d4ed8",
        brandLight: "#7dd3fc",
        accent: "#f97316",
        panel: "#f6f9ff",
        line: "#c7dcff"
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 23, 42, 0.07)"
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070b14",
          900: "#0b111e",
          800: "#111a2c",
          700: "#1a2740",
        },
        volt: {
          400: "#5eb8ff",
          500: "#2f8fe0",
          600: "#1f6fc2",
        },
        amber: {
          400: "#f5b942",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;

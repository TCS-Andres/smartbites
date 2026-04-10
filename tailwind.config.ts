import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        "primary-dark": "#27AE60",
        accent: "#FFB703",
        teal: "#264653",
        "bg-light": "#F8FBF8",
        "text-dark": "#1A1A2E",
        "text-muted": "#6B7280",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        listfont:"#9F9F9F",
        bannerbg: "#FFF3E3",
        font01: "#B88E2F",
        font02: "#898989",
        font03: "#B0B0B0",
        font04: "#F4F5F7",
        font05: "#616161",
        font06: "#FCF8F3",
        font07: "#3A3A3A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero-mobile": 'url("/images/bg-hero-mobile.svg")',
        "bg-hero-desktop": 'url("/images/bg-hero-desktop.svg")',
      },
    },
  },
  plugins: [],
};
export default config;

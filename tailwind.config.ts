import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-bg-color": "var(--nav-bg-color)",
        "bg-color": "var(--bg-color)",
        "second-bg-color": "var(--second-bg-color)",
        "third-bg-color": "var(--third-bg-color)",
        "main-color": "var(---main-color)",
        "main-white": "var(--main-white)",
        "tab-list-color": "var(--tab-list-color)",
      },
      screens: {
        'custom': '450px', // Custom breakpoint
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
};
export default config;

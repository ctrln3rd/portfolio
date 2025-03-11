import { transform } from "next/dist/build/swc/generated-native";
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
        background_primary: "#222222",
        background_secondary: "#141414",
        primary: "#7B61FF",
        secondary: "#9D4EDD",
        card: '#1B1B1B',
        text: "#E0E0E0",
        muted_text: '#A0A0A0',
        borders: '#4A4A4A'

      },
      fontFamily: {
        heading: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-grotesk)', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;

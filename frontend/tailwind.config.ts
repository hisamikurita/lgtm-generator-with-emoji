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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
        'sans': ['var(--font-noto-sans-jp)'],
        'sans-emoji': ['var(--font-noto-color-emoji)'],
        'poppins': ['var(--font-poppins)'],
      },
      keyframes: {
        emoji: {
          '0%': { transform: 'translateY(10vh)' },
          '100%': { transform: 'translateY(-100vh)' },
        }
      },
    },
  },
  plugins: [
  ],
};
export default config;

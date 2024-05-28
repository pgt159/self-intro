import type { Config } from "tailwindcss";

const colorTokens = {
  almond: "#d5c9bc",
  jojoba: "#b1bba9",
  mocha: "#9d8478",
  canyonDusk: "#c19b86",
  seaSide: "#e9d5cc",
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      pDark: colorTokens.primary[700],
      pMain: colorTokens.primary[500],
      pSub: colorTokens.primary[400],
      pLight: colorTokens.primary[50],
      nDark: colorTokens.grey[700],
      nMain: colorTokens.grey[500],
      nMediumMain: colorTokens.grey[400],
      nMedium: colorTokens.grey[300],
      nLight: colorTokens.grey[50],
      bDefault: colorTokens.grey[10],
      bAlt: colorTokens.grey[0],
      button: colorTokens.mocha,
      background: colorTokens.almond,
      lightPink: colorTokens.seaSide,
      neutral: colorTokens.jojoba,
      brown: colorTokens.canyonDusk,
    },
    fontFamily: {
      oregano: ["Oregano"],
      raleway: ["Raleway"],
      sanchez: ["Sanchez"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;

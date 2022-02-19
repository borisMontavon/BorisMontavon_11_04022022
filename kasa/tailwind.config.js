module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or "media" or "class"
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    fontSize: {
      "xs": ".625rem",
      "sm": ".75rem",
      "base": ".875rem",
      "lg": "1.125rem",
      "xl": "1.5rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "6rem",
      "5xl": "18rem"
    },
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "var(--white)",
        hover: "var(--white-o)"
      },
      black: "var(--black)",

      primary: {
        DEFAULT: "var(--primary)",
        opac: "var(--primary-o)"
      },

      // Light mode
      gray300: "var(--gray-300)",
      gray400: "var(--gray-400)",
      gray500: "var(--gray-500)",

      // Dark mode
      gray600: "var(--gray-600)",
      gray700: "var(--gray-700)",
      gray800: "var(--gray-800)",
      gray900: "var(--gray-900)",
    },
    extend: {}
  },
  plugins: []
};

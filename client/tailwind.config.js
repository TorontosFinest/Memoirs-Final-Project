module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2880px",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Bungee: ["Bungee", "cursive"],
        Festive: ["Festive", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

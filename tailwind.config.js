module.exports = {
  darkMode: "class", // Keep this for potential other use, but we won't toggle it.
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: "#9b5de5", // Custom neon purple color
        darkBg: "#1a1a1a", // Custom dark background
      },
    },
  },
  plugins: [],
};

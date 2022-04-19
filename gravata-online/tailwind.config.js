module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-theme": "#FB626D",
        "blue-theme": "#0C455E",
      },
      fontFamily: {
        ubuntu: "ubunto",
      },
      // backgroundImage: (theme) => ({
      //   "hero-pattern": "url('/img/hero-pattern.svg')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // }),
    },
  },
  plugins: [],
};

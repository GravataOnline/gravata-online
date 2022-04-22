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
      backgroundImage: (theme) => ({
        letras: "url('/bg-textos.svg')",
      }),
    },
  },
  plugins: [],
};

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
      backgroundImage: (theme) => ({
        letras: "url('/bg-textos.svg')",
        "retangulo-azul": "url('/retangulo-azul.svg')",
      }),
      boxShadow: {
        "3xl-blue": "0px 0px 40px 15px rgba(5,27,37, 0.3)",
        "3xl-black": "0px 0px 40px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

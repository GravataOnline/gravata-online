module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-theme": "#FB626D",
        "pink-secondary": "#FF9299",
        "blue-theme": "#0C455E",
        "blue-secondary": "#35728C",
        ice: "#E7ECEF",
      },
      backgroundImage: (theme) => ({
        letras: "url('/bg-textos.svg')",
        "letras-2": "url('/bg-letras-2.svg')",
        "retangulo-azul": "url('/retangulo-azul.svg')",
        "footer-theme-blue": "url('/bg-blue-theme-footer.svg')",
        "footer-light-blue": "url('/bg-blue-light-footer.svg')",
      }),
      boxShadow: {
        "3xl-blue": "0px 0px 40px 15px rgba(5,27,37, 0.3)",
        "3xl-black": "0px 0px 40px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

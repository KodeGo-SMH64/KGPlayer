/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(26, 26, 26, 0.11)",
        },
        whitesmoke: "#f2f2f2",
        white: "#fff",
        teal: "#0c7280",
        slategray: "#59838e",
      },
      fontFamily: {
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

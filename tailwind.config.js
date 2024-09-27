/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nagal_VF: ["Nagal_VF", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        clryellow: "#FFED00",
        brblack: "#1E1E1E",
      },
      width: {
        348: "348px",
        304: "304px",
      },
      fontSize: {
        22: "22px",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
      },
      padding: {
        33: "33px",
        63: "63px",
        25.69: "25.69px",
        79: "79px",
        121.28: "121.28px",
        54: "54px",
        47: "47px",
        113: "113px",
        105: "105px",
        116: "116px",
        83: "83px",
        43: "43px",
        131: "131px",
      },
      maxWidth: {
        436: "436px",
        370: "370px",
        768: "768px",
        1024: "1024px",
      },
    },
  },
  plugins: [],
};

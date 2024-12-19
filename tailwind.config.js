/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      xs: '0px',
      sm: '720px',
      md: '950px',
      lg: '1250px',
      xl: '1600px',
      xxl: '1920px',

    },
  },
  plugins: [],
};

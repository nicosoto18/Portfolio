/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
     colors: {
      'Personal-Blue' : '#001F3F',
      'Light-personal-Gray' : '#D9D9D9',
      'Dark-personal-Gray' : '#696969',
      'Dark-orange-personal': '#FF4500',
     }
    },
  },
  plugins: [],
};

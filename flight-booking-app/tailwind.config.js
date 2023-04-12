/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: 'hsl(235, 87%, 42%)',
        violet: 'hsl(267, 96%, 42%)',
        lightBlue: 'hsl(251, 96%, 44%)',
        blueSky: 'hsl(203, 96%, 42%)',
        grayText: 'hsl(210, 1%, 47%)',
        grayishDark: 'hsl(210, 1%, 30%)',
        lightColor: 'hsl(0, 7%, 98%)',
        darkBlue: 'hsl(218, 72%, 20%)',
        veryDarkBlue: 'hsl(219, 91%, 19%)',
        veryLightBlue: 'hsl(217, 97%, 94%)',
        green: 'hsl(134, 96%, 40%)',
        Orange: 'hsl(235, 87%, 42%)',
        redLight: 'hsla(360, 81%, 63%, 1)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
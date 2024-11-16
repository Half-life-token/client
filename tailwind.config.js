module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nixie: ['"Nixie One"', 'monospace'],
      },
      borderRadius: {
        '50%_50%': '50% 50%', // For creating an elliptical bottom.
      },
      spacing: {
        '7.5xl': '90rem'
      }
    },
  },
  plugins: [],
};
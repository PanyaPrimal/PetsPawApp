/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'initial': 'initial',
      },
      screens: {
        '3sm': '50px',
        '2sm': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
				'2xl': '1920px',
			},
      colors: {
				primary: "#FF868E",
				"primary-soft": "#FBE0DC",
				"primary-dark": "#543C3D",
				success: "#97EAB9",
				warning: "#FFD280",
				purple: "#B4B7FF",
				"white-soft": "#F8F8F8",
				gray: "#E5E5E5",
				"gray-dark": "#8C8C8C",
				black: "#1D1D1D",
				"black-soft": "#282828",
				"black-light": "#343434",
			},
    },
  },
  darkMode: "class",
	plugins: [require("tailwindcss-global-dark")],
}

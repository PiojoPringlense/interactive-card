/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			small: "900px",
		},
		extend: {
			fontFamily: {
				"space-grotesk": ["Space Grotesk", "sans-serif"],
			},
			colors: {
				inputError: "hsl(0, 100%, 66%)",
				neutral: {
					light: "hsl(270, 3%, 87%)",
					dark: "hsl(279, 6%, 55%)",
					veryDark: "hsl(278, 68%, 11%)",
				},
				gradFrom: "hsl(249, 99%, 64%)",
				gradTo: "hsl(278, 94%, 30%)",
			},
		},
	},
	plugins: [],
};

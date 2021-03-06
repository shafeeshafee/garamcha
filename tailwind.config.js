module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"hero-lg": "url('/src/images/tea-garden.jpg')",
			},
			colors: {
				primary: "#FDD50F",
				secondary: "#bd9d00",
			},
			fontFamily: {
				headings: ["Solway"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"hero-lg": "url('/src/images/tea-garden.jpg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

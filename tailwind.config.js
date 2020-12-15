module.exports = {
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			// '2xl': {'max': '1535px'},
			// // => @media (max-width: 1535px) { ... }

			laptops: { max: "1440px" },
			// => @media (max-width: 1279px) { ... }

			tablets: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			medium: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			mobiles: { max: "500px" },
			// => @media (max-width: 639px) { ... }
			smallmobiles: { max: "420px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
